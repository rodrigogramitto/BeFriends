// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#004E64',
          secondary: '#25A18E',
          accent: '#00A5CF',
          neutral: '#2a323c',
          'base-100': 'var(--color-primary)', 
          info: '#9FFFCB',
          success: '#36d399',
          warning: '#ec4899',
          error: '#9f1239',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
