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
        'christmas-candle': 'url(assets/christmas-candle.jpg)',
        'easter-candle': 'url(assets/easter-candle.jpg)',
        'personalized-candle': 'url(assets/personalized-candle.jpg)',
        'simple-candle': 'url(assets/simple-candle.jpg)',
        'banner': 'url(assets/banner.jpg)',
        'nunta': 'url(assets/nunta.jpg)',
        'botez': 'url(assets/botez.jpg)',
        'banner-1': 'url(assets/banner-1.jpg)',
        'logo': 'url(assets/logo.png)',
        'gold-radial': 'radial-gradient(circle, #FFD700, #B8860B, #8B6508)',
      }
    },
  },
  plugins: [],
}

