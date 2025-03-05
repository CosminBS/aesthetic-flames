/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        qwigley: ["Qwigley", "cursive"],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'christmas-candle': 'url(src/assets/christmas-candle.jpg)',
        'easter-candle': 'url(src/assets/easter-candle.jpg)',
        'personalized-candle': 'url(src/assets/personalized-candle.jpg)',
        'simple-candle': 'url(src/assets/simple-candle.jpg)',
        'banner': 'url(src/assets/banner.jpg)',
        'nunta': 'url(src/assets/nunta.jpg)',
        'botez': 'url(src/assets/botez.jpg)',
        'banner-1': 'url(src/assets/banner-1.jpg)',
        'logo': 'url(src/assets/logo.png)',
        'gold-radial': 'radial-gradient(circle, #FFD700, #B8860B, #8B6508)',
      }
    },
  },
  plugins: [],
}

