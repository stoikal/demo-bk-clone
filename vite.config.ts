import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import UnoCSS from 'unocss/vite'
import extractorSvelte from '@unocss/extractor-svelte'

export default defineConfig({
  plugins: [
    UnoCSS({
      extractors: [
        extractorSvelte()
      ]
    }),
    sveltekit()
  ]
})
