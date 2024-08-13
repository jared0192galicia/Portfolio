import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './components/general/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#161F2A',
      },
      keyframes: {
        slideUpRotate: {
          '0%': { transform: 'translateY(100px) rotate(0deg)', opacity: '0' },
          '100%': { transform: 'translateY(0) rotate(360deg)', opacity: '1' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        slideUpRotate: 'slideUpRotate 1s ease-in-out forwards',
        'spin-fast': 'spin 2.5s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
