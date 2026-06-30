import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import handlebars from 'vite-plugin-handlebars'
import { resolve } from 'path'

const base = '/Kristys_Cooking_Adventures/'

export default defineConfig({
  base,
  root: '.',

  plugins: [
    tailwindcss(),

    handlebars({
      partialDirectory: resolve(__dirname, 'partials'),

      context: {
        base
      },

      helpers: {
        route: (path) => `${base}${path}`
      }
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

        rhubarbCake: resolve(__dirname, 'recipe/rhubarb-cake.html'),
        noodles: resolve(__dirname, 'recipe/noodles.html'),
        GevuldeSpeculaas: resolve(__dirname, 'recipe/Gevulde-speculaas.html'),
        healthierMacAndCheese: resolve(__dirname, 'recipe/healthier-mac-and-cheese.html'),
        homemadeKebabAndPita: resolve(__dirname, 'recipe/homemade-kebab-and-pita.html'),
        homemadeQuarkpizza: resolve(__dirname, 'recipe/homemade-quarkpizza.html'),
        kanelbullar: resolve(__dirname, 'recipe/kanelbullar.html'),
        mediterraneanSweetPotatoSalad: resolve(__dirname, 'recipe/mediterranean-sweet-potato-salad.html'),
        nobakeMidsommarTarta: resolve(__dirname, 'recipe/nobake-midsommar-tarta.html'),
        pastaCarbonara: resolve(__dirname, 'recipe/pasta-carbonara.html'),
        patrch: resolve(__dirname, 'recipe/patrch.html'),
        potatogratin: resolve(__dirname, 'recipe/potatogratin.html'),
        pulledVildsvin: resolve(__dirname, 'recipe/pulled-vildsvin.html'),
        quarkPancakes: resolve(__dirname, 'recipe/quark-pancakes.html'),
        tiramisu: resolve(__dirname, 'recipe/tiramisu.html'),
        vildsvinStamppotWortels: resolve(__dirname, 'recipe/vildsvin-stamppot-wortels.html'),
        vildsvinribRedCabbage: resolve(__dirname, 'recipe/vildsvinrib-red-cabbage.html'),
        wrapPizza: resolve(__dirname, 'recipe/wrap-pizza.html'),
      },
    },
  },
})