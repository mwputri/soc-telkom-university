/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                TeluRed: {
                    100: '#bf0000'
                },
                footerBlack:{
                    100: '#444444'
                },
            },
        },
        fontFamily: {
            display: ["Open Sans", 'sans-serif'],
            body: ["Open Sans", 'sans-serif'],
        },
    },
    plugins: [require('flowbite/plugin')],
}
