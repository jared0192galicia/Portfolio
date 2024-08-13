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
          '0%': { transform: 'translateY(400px) rotate(0deg)', opacity: '0' },
          '100%': { transform: 'translateY(0) rotate(360deg)', opacity: '1' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        slideFade: {
          '0%': { transform: 'translateY(95%)', opacity: '0' }, // Empieza fuera del contenedor y oculto
          '35%': {  opacity: '1' }, // Subida inicial
          '75%': { opacity: '1' }, // Cerca de la parte superior
          '100%': { transform: 'translateY(-2%)', opacity: '0' }, // Sale del contenedor y desaparece
        },
      },
      animation: {
        slideUpRotate: 'slideUpRotate 1s ease-in-out forwards',
        'spin-fast': 'spin 2.5s linear infinite',
        'slide-fade': 'slideFade 8s ease-in-out infinite',

      },
    },
  },
  plugins: [],
};
export default config;
