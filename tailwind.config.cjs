module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        xeneX: {
          900: '#0b0f14',
          800: '#0f1418'
        }
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'gradient-anim': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'gradient-anim': 'gradient-anim 12s ease infinite'
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(90deg,#0ea5e9 0%, #8b5cf6 40%, #06b6d4 100%)'
      }
    }
  },
  plugins: [],
}
