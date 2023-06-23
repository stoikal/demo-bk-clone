import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetAttributify(),
    presetUno()
  ],
  theme: {
    colors: {
      bk: {
        brown: '#8b542f',
        orange: '#ed7801',
        red: '#ff0000',
        stone: '#2d2d2d',
        yellow: '#faaf18',
        white: '#ffffff',
        muted: '#919191'
      }
    }
  }
})
