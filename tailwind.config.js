/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      height: {
        7.5: '1.875rem',
        12.5: '3.125rem'
      },
      spacing: {
        7.5: '1.875rem',
        12.5: '3.125rem'
      },
      fontSize: {
        sm: ['15px', '22px'],
        '3xl': '2rem', // 32px
        '4xl': '2.375rem' // 38px
      },
      fontFamily: {
        sans: ['Barlow-Medium', 'sans-serif'],
        flame: ['Flame', 'sans-serif'],
        'flame-bold': ['Flame-Bold', 'sans-serif']
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      bk: {
        muted: '#919191',
        stone: '#2d2d2d',
        lightorange: '#fbe6d6',
        mutedorange: '#f1bc87',
        orange: '#ed7801',
        red: '#ff0000',
        brown: '#8b542f',
        mocha: '#502314',
        yellow: '#faaf18'
      }
    }
  },
  plugins: []
}
