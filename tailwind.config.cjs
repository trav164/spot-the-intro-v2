/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      mono: '"Space Mono", monospace'
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {}
  },

  plugins: []
};

module.exports = config;