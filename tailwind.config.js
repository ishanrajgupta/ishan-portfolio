/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
      },
      colors: {
        background: '#050816',
        surface: 'rgba(255,255,255,0.05)',
        primary: '#7C3AED',
        secondary: '#3B82F6',
        accent: '#A855F7',
        muted: '#9CA3AF',
      },
      boxShadow: {
        glow: '0 0 35px rgba(168, 85, 247, 0.35)',
        glowStrong: '0 0 50px rgba(124, 58, 237, 0.45)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.25', transform: 'scale(0.85)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        orbit: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        twinkle: 'twinkle 4s ease-in-out infinite',
        orbit: 'orbit 32s linear infinite',
        shimmer: 'shimmer 10s ease infinite',
      },
    },
  },
  plugins: [],
};
