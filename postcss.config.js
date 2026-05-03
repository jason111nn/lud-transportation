// postcss.config.js
import postcssFontDisplay from 'postcss-font-display'

export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
    'postcss-font-display': postcssFontDisplay({ display: 'swap' }),
  },
}