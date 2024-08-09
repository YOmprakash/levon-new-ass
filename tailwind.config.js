// tailwind.config.js
export default {
  darkMode: 'class', 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: { 
    extend: { 
      colors: { 
        primary: {
          light: '#ccf381',  
          dark: '#4831d4',   
        },
        secondary: {
          light: '#ffffff',
          dark: '#1f2937',
        },
      },
    },
  },
  plugins: [], 
};
