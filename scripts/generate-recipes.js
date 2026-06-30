// scripts/generate-recipes.js
//
// Reads recipes.json, fills in the recipe.hbs template for each recipe,
// and writes the result as separate .html files into recipe/.
// Run this with: npm run generate
// (then run npm run build, or wire this in automatically before every build)

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import Handlebars from 'handlebars';

console.log('Script started.');

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

console.log('ROOT resolved to:', ROOT);

// 1. Load the recipe data
const recipesPath = resolve(ROOT, 'recipes.json');
console.log('Looking for recipes.json at:', recipesPath);
const recipes = JSON.parse(readFileSync(recipesPath, 'utf-8'));
console.log('Loaded recipes.json. Number of recipes found:', recipes.length);

// 2. Load the template
const templatePath = resolve(ROOT, 'templates/recipe.hbs');
console.log('Looking for template at:', templatePath);
const templateSource = readFileSync(templatePath, 'utf-8');
const template = Handlebars.compile(templateSource);
console.log('Template loaded and compiled.');

// 3. Register the same partials the site already uses (navbar/footer)
//    so {{> navbar}} and {{> footer}} also work inside this script.
const navbarPath = resolve(ROOT, 'partials/navbar.hbs');
const footerPath = resolve(ROOT, 'partials/footer.hbs');
console.log('Looking for navbar partial at:', navbarPath);
console.log('Looking for footer partial at:', footerPath);
const navbarSource = readFileSync(navbarPath, 'utf-8');
const footerSource = readFileSync(footerPath, 'utf-8');
Handlebars.registerPartial('navbar', navbarSource);
Handlebars.registerPartial('footer', footerSource);
console.log('Partials registered.');

// 4. Register the route helper, same as in vite.config.js
const base = '/Kristys_Cooking_Adventures/';
Handlebars.registerHelper('route', (path) => `${base}${path}`);

// 5. Make sure the output directory exists
const outputDir = resolve(ROOT, 'recipe');
mkdirSync(outputDir, { recursive: true });
console.log('Output directory ready at:', outputDir);

// 6. Generate a separate .html file for each recipe
const generatedFiles = [];

console.log('Starting generation loop...');

for (const recipe of recipes) {
  const html = template({ base, ...recipe });
  const outputPath = resolve(outputDir, `${recipe.slug}.html`);
  writeFileSync(outputPath, html, 'utf-8');
  generatedFiles.push(`recipe/${recipe.slug}.html`);
  console.log(`Generated recipe/${recipe.slug}.html`);
}

console.log(`Done. Generated ${generatedFiles.length} recipe page(s).`);
console.log('Add these entries to your vite.config.js rollupOptions.input:');

// 7. Print the input list entries needed for vite.config.js
for (const recipe of recipes) {
  const key = recipe.slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  console.log(`        ${key}: resolve(__dirname, 'recipe/${recipe.slug}.html'),`);
}
