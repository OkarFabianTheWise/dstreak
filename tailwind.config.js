/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			primary: 'var(--primary)',
  			secondary: 'var(--secondary)',
			  heading: 'var(--heading)',
  			accent: 'var(--accent)',
  			border: 'var(--primary)',
  			input: 'var(--input)',
        customGreen: '#68FF9A',
  		},
  	}
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require("tailwindcss-animate")
  ]
}