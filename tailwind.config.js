/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
    theme: {
        colors: {
            primary: '#66fcf1',
            gray: '#313440',
            white: '#c5c6c7',
        },

        extend: {
            fontFamily: {
                Kaushan: ['Kaushan Script'],
                Gothic: ['Didact Gothic'],
            },
            screens: {},
        },
    },
    plugins: [],
}
