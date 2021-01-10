module.exports = {
    purge: [
        './components/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './layouts/*.**{js,ts,jsx,tsx}'
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        fontFamily: {
            display: ['Montserrat', 'sans-serif'],
            helper: ['Lora', 'serif'],
            body: ['Hind Madurai', 'sans-serif']
        },
        extend: {
            backgroundColor: (theme) => ({
                ...theme('colors'),
                'primary-dark': '#050505',
                'primary-blue': '#143CCB'
            })
        },
        textColor: (theme) => ({
            ...theme('colors'),
            primary: '#41434a'
        })
    },
    variants: {
        extend: {}
    },
    plugins: [require('@tailwindcss/typography')]
}
