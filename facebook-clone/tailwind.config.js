// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'fb-blue': '#1877f2',
                'fb-gray': '#f0f2f5',
                'fb-dark': '#606770',
                primary: '#5c95ff',   
                secondary: '#ff4e3c', 
                accent: '#fedd2c',   
            },
        },
    },
    plugins: [],
}
