/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-valentine': "url('./src/public/assets/images/bg-main.jpg')"
      }
    },
  },
  plugins: [],
}

