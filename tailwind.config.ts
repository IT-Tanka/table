import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // Используйте 'class' для управления темной темой через класс
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}', // Путь к вашим страницам
    './src/components/**/*.{js,ts,jsx,tsx,mdx}', // Путь к вашим компонентам
    './src/app/**/*.{js,ts,jsx,tsx,mdx}', // Путь к вашим другим файлам
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        dark: {
          background: '#1a202c',  
          text: '#f7fafc',  
        },
        light: {
          background: '#ffffff',  
          text: '#1a202c',  
        },
      },
    },
  },
  plugins: [],
};

export default config;
