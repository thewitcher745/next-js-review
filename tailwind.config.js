/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{jsx,tsx}', // Note the addition of the `app` directory.
        './components/**/*.{jsx,tsx}', // Note the addition of the `app` directory.
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-exo2)', 'sans-serif'],
                orbitron: ['var(--font-orbitron)', 'sans-serif'],

            }
        },
    },
    plugins: [],
}