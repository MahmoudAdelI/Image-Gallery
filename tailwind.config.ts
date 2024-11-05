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
        }
      
      },
      animation: {
        'ease-to-bottom' : 'ease-to-bottom .2s ease-in-out'
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
