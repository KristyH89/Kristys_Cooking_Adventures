import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import handlebars from 'vite-plugin-handlebars'
import { resolve } from 'path'

export default defineConfig({
  root: '.',
  plugins: [
    tailwindcss(),
    handlebars({
      partialDirectory: resolve(__dirname, 'partials'),
    }),
  ],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        food: resolve(__dirname, 'food.html'),
        contact: resolve(__dirname, 'contact.html'),

        baking: resolve(__dirname, 'categories/baking-desserts.html'),
        easy: resolve(__dirname, 'categories/easy.html'),
        main: resolve(__dirname, 'categories/main-dishes.html'),
        quick: resolve(__dirname, 'categories/quick-easy.html'),
        slow: resolve(__dirname, 'categories/slow-special.html'),
        wild: resolve(__dirname, 'categories/wild-game.html'),

        gevuldeSpeculaas: resolve(__dirname, 'recipe/Gevulde-speculaas.html'),
        macAndCheese: resolve(__dirname, 'recipe/healthier-mac-and-cheese.html'),
        kebab: resolve(__dirname, 'recipe/homemade-kebab-and-pita.html'),
        quarkPizza: resolve(__dirname, 'recipe/homemade-quarkpizza.html'),
        carbonara: resolve(__dirname, 'recipe/pasta-carbonara.html'),
        kanelbullar: resolve(__dirname, 'recipe/kanelbullar.html'),
        midsommar: resolve(__dirname, 'recipe/nobake-midsommar-tarta.html'),
        patrch: resolve(__dirname, 'recipe/patrch.html'),
        pulledvildsvin: resolve(__dirname, 'recipe/pulled-vildsvin.html'),
        quarkpancakes: resolve(__dirname, 'recipe/quark-pancakes.html'),
        rhubarbcake: resolve(__dirname, 'recipe/rhubarb-cake.html'),
        tiramisu: resolve(__dirname, 'recipe/tiramisu.html'),
        vildstamppotwortel: resolve(__dirname, 'recipe/vildsvin-stamppot-wortels.html'),
        ribRodeKool: resolve(__dirname, 'recipe/vildsvinrib-red-cabbage.html'),
        wrappizza: resolve(__dirname, 'recipe/wrap-pizza.html'),
        potatogratin: resolve(__dirname, 'recipe/potatogratin.html'),
        noodles: resolve(__dirname, 'recipe/noodles.html'),
        sweetpotato: resolve(__dirname, 'recipe/mediterranean-sweet-potato-salad.html'),
      },
    },
  },
})


