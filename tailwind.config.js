const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
        defaultLineHeights: true,
        standardFontWeights: true,
    },
    purge: {
        content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
        preserveHtmlElements: true,
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [
        require('@tailwindcss/ui')({
            layout: 'sidebar',
        }),
        require('@tailwindcss/custom-forms'),
    ],
    'tailwindCSS.includeLanguages': {
        plaintext: 'html',
    },
}
