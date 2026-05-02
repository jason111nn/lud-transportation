export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        morandi: {
          bg: '#F5F5DC',
          blue: '#A7B1B5',
          gold: '#B6A48D',
          sand: '#DBD5CE',
          pink: '#BDAEAD',
          dark: '#4A4A4A',
        }
      },
      spacing: {
        'bleed': '3mm',
        'p-side': '450mm',
        'p-main': '950mm',
        'h-total': '1200mm',
      },
      fontSize: {
        'h1': '180pt',
        'h2': '100pt',
        'data': '80pt',
        'body': '60pt',
      }
    }
  },
  plugins: [],
}
