import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  root: '.',
  base: '/Workshop2_HTML_CSS/',
  plugins: [tailwindcss()],
})
