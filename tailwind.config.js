module.exports = {
    purge: ['./pages/**/*.js', './components/**/*.js'],
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
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}
