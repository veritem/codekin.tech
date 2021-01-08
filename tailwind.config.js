module.exports = {
    purge: ['./pages/**/*.js', './components/**/*.js'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            display: ['Montserrat', 'sans-serif'],
            helper: ['Lora', 'serif'],
            body: ['Hind Madurai', 'sans-serif']
        },
        extend: {
            backgroundColor: (theme) => ({
                ...theme('colors'),
                'primary-dark': '#0A1225',
                'primary-blue': '#143CCB'
            })
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}
