// scripts/generate-recipes.js
//
// Reads recipes.json and categories.json, fills in the recipe.hbs and
// category.hbs templates, and writes the result as separate .html files
// into recipe/ and categories/.
// Run this with: npm run generate
// (npm run build and npm run dev already run it automatically first)
//
// vite.config.js reads the same JSON files to know which pages to build,
// so a new recipe only needs an entry in recipes.json and a photo in
// public/images/recipe-photos/.

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import Handlebars from 'handlebars';
import { SITE_URL, NAV_ITEMS } from '../site.config.js';

console.log('Script started.');

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// 1. Load the data
const recipesPath = resolve(ROOT, 'recipes.json');
const recipes = JSON.parse(readFileSync(recipesPath, 'utf-8'));
console.log('Loaded recipes.json. Number of recipes found:', recipes.length);

const categoriesPath = resolve(ROOT, 'categories.json');
const categories = JSON.parse(readFileSync(categoriesPath, 'utf-8'));
console.log('Loaded categories.json. Number of categories found:', categories.length);

// 2. Load the templates
const recipeTemplateSource = readFileSync(resolve(ROOT, 'templates/recipe.hbs'), 'utf-8');
const recipeTemplate = Handlebars.compile(recipeTemplateSource);

const categoryTemplateSource = readFileSync(resolve(ROOT, 'templates/category.hbs'), 'utf-8');
const categoryTemplate = Handlebars.compile(categoryTemplateSource);
console.log('Templates loaded and compiled.');

// 3. Register the same partials the site already uses (navbar/footer)
//    so {{> navbar}} and {{> footer}} also work inside this script.
const navbarSource = readFileSync(resolve(ROOT, 'partials/navbar.hbs'), 'utf-8');
const footerSource = readFileSync(resolve(ROOT, 'partials/footer.hbs'), 'utf-8');
Handlebars.registerPartial('navbar', navbarSource);
Handlebars.registerPartial('footer', footerSource);
Handlebars.registerPartial('fonts', readFileSync(resolve(ROOT, 'partials/fonts.hbs'), 'utf-8'));
console.log('Partials registered.');

// 4. Register helpers, same as in vite.config.js, plus a 'concat' helper
//    used by category.hbs to build per-recipe link paths.
// The site is only hosted on Vercel, at the root of the domain.
const base = '/';
Handlebars.registerHelper('route', (path) => `${base}${path}`);
Handlebars.registerHelper('eq', (a, b) => a === b);
Handlebars.registerHelper('concat', (...args) => args.slice(0, -1).join(''));

// 5. Make sure the output directories exist
const recipeOutputDir = resolve(ROOT, 'recipe');
mkdirSync(recipeOutputDir, { recursive: true });

const categoryOutputDir = resolve(ROOT, 'categories');
mkdirSync(categoryOutputDir, { recursive: true });

// 6. Generate a separate .html file for each recipe
const generatedRecipeFiles = [];

console.log('Generating recipe pages...');

for (const recipe of recipes) {
  const html = recipeTemplate({ base, siteUrl: SITE_URL, navItems: NAV_ITEMS, ...recipe });
  const outputPath = resolve(recipeOutputDir, `${recipe.slug}.html`);
  writeFileSync(outputPath, html, 'utf-8');
  generatedRecipeFiles.push(`recipe/${recipe.slug}.html`);
  console.log(`Generated recipe/${recipe.slug}.html`);
}

// 7. Generate a separate .html file for each category, filtering recipes
//    that list this category's slug in their "category" array.
const generatedCategoryFiles = [];

console.log('Generating category pages...');

for (const category of categories) {
  const matchingRecipes = recipes.filter(
    (recipe) => Array.isArray(recipe.category) && recipe.category.includes(category.slug)
  );

  const html = categoryTemplate({
    base,
    siteUrl: SITE_URL,
    navItems: NAV_ITEMS,
    categorySlug: category.slug,
    categoryTitle: category.title,
    categoryDescription: category.description,
    recipes: matchingRecipes,
  });

  const outputPath = resolve(categoryOutputDir, `${category.slug}.html`);
  writeFileSync(outputPath, html, 'utf-8');
  generatedCategoryFiles.push(`categories/${category.slug}.html`);
  console.log(`Generated categories/${category.slug}.html (${matchingRecipes.length} recipes)`);
}

// 8. Generate public/sitemap.xml listing every page on the site.
//    Search engines use this to discover and index pages more reliably.
//    Files in public/ are copied as-is to the root of the deployed site,
//    so this ends up at <SITE_URL>/sitemap.xml.
console.log('Generating public/sitemap.xml...');

const siteUrl = SITE_URL;
const today = new Date().toISOString().split('T')[0];

const staticPages = ['index.html', 'food.html', 'contact.html'];

const sitemapUrls = [
  ...staticPages.map((page) => `${siteUrl}/${page}`),
  ...categories.map((category) => `${siteUrl}/categories/${category.slug}.html`),
  ...recipes.map((recipe) => `${siteUrl}/recipe/${recipe.slug}.html`),
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>
`;

writeFileSync(resolve(ROOT, 'public/sitemap.xml'), sitemapXml, 'utf-8');
console.log(`Generated public/sitemap.xml with ${sitemapUrls.length} URLs.`);

// 9. Generate public/robots.txt so search engines can find the sitemap.
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;
writeFileSync(resolve(ROOT, 'public/robots.txt'), robotsTxt, 'utf-8');
console.log('Generated public/robots.txt.');

console.log(`Done. Generated ${generatedRecipeFiles.length} recipe page(s) and ${generatedCategoryFiles.length} category page(s).`);
