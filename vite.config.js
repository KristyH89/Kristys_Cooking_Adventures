import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import handlebars from 'vite-plugin-handlebars'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { resolve } from 'path'
import { readFileSync } from 'fs'
import { SITE_URL, NAV_ITEMS } from './site.config.js'

// The site is only hosted on Vercel, at the root of the domain.
const base = '/'
const outDir = 'dist'

// Every page that Vite should build. The fixed pages are listed by hand;
// recipe and category pages are read from recipes.json and
// categories.json, so adding a recipe never requires editing this file.
const readJson = (file) => JSON.parse(readFileSync(resolve(__dirname, file), 'utf-8'))
const recipes = readJson('recipes.json')
const categories = readJson('categories.json')

const pages = {
  index: resolve(__dirname, 'index.html'),
  food: resolve(__dirname, 'food.html'),
  digital: resolve(__dirname, 'digital.html'),
  about: resolve(__dirname, 'about.html'),
  contact: resolve(__dirname, 'contact.html'),
}

for (const recipe of recipes) {
  pages[`recipe/${recipe.slug}`] = resolve(__dirname, `recipe/${recipe.slug}.html`)
}

for (const category of categories) {
  pages[`categories/${category.slug}`] = resolve(__dirname, `categories/${category.slug}.html`)
}

export default defineConfig({
  base,
  root: '.',

  plugins: [
    tailwindcss(),

    handlebars({
      partialDirectory: resolve(__dirname, 'partials'),
      context: {
        base,
        siteUrl: SITE_URL,
        navItems: NAV_ITEMS,
        // Used on the home page
        latestRecipes: recipes.slice(-3).reverse(),
        recipeCount: recipes.length,
        categoryCount: categories.length,
      },
      helpers: {
        route: (path) => `${base}${path}`,
        eq: (a, b) => a === b,
        concat: (...args) => args.slice(0, -1).join(''),
      }
    }),

    ViteImageOptimizer({
      includePublic: true,
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      png: { quality: 80 },
      webp: { lossless: false, quality: 80 },
    }),
  ],

  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: pages,
    },
  },
})