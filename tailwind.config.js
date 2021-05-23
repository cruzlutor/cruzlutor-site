module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8000FF',
          dark: '#CC99FF',
        },
        secondary: {
          DEFAULT: '#00B2FF',
          dark: '#99EDFF',
        },
        background: {
          DEFAULT: '#ffffff',
          dark: '#1E1D38',
        },
        foreground: {
          DEFAULT: '#FAFAFA',
          dark: '#272847',
        },
        heading: {
          DEFAULT: '#222222',
          dark: '#E3E3F4',
        },
        body: {
          DEFAULT: '#444444',
          dark: '#A6A6CA',
        },
      },
      fontFamily: {
        'roboto-mono': ['"Roboto Mono"', 'monospace'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
