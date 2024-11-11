import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'ease-to-bottom': {
          '0%': {transform: 'translateY(-385px)'},
          '100%': {transform: 'translate(0)'}
        },
        'move-up': {
          '0%': {transform: 'translateY(100%)'},
          '100%': {transform: 'translate(0)'}
        },
        'move-down': {
          '0%': {transform: 'translateY(-50%)', opacity: '0'},
          '100%': {transform: 'translate(0)', opacity: '1'}
        },

        'ease-to-left': {
          '0%': {transform: 'translateX(60px)'},
          '100%': {transform: 'translateX(0)'}
        }
      
      },
      animation: {
        'ease-to-bottom' : 'ease-to-bottom .2s ease-out',
        'ease-to-left' : 'ease-to-left .4s ease-out',
        'move-up' : 'move-up .4s ease-out',
        'move-down': 'move-down .3s ease-out'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      gridTemplateColumns: {
        'gallery': 'repeat(auto-fit, minmax(380px, 1fr))',
      },
      backgroundImage: {
        'dark-gradient': "radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)",
        'hero-pattern': "linear-gradient(200deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.5) 100%), url('/topography.svg')"
      }
    },
  },
  plugins: [],
};
export default config;
