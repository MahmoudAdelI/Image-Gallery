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
          '0%': {transform: 'translateY(-50%)'},
          '100%': {transform: 'translate(0)'}
        },
        'move-up': {
          '0%': {transform: 'translateY(60%)', opacity: '.5'},
          '100%': {transform: 'translate(0)', opacity: '1'}
        },
        'move-down': {
          '0%': {transform: 'translateY(-50%)', opacity: '0'},
          '100%': {transform: 'translate(0)', opacity: '1'}
        },

      
      },
      animation: {
        'ease-to-bottom' : 'ease-to-bottom .3s ease',
        'move-up' : 'move-up .3s ease',
        'move-down': 'move-down .3s ease-out'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
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
