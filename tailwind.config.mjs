/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        colors: {
            red: {
                100: "#ff0000",
                200: "#440000",
            },
            green: {
                100: "#002200",
                200: "#007700",
                300: "#00ff00",
                400: "#11a500",
            },
            black: "#00000",
            white: "#ffffff",
        },

        // maybe move these into extend object if you need to keep defaults
        fontFamily: {
            teko: ["Teko", "serif"],
            mont: ["Montserrat","serif"]
        },
    
        fontSize: {
            small: "10px",
            med: "15px",
            lrg: "30px",
            xxxl: "50px"
        },

        extend: {},
    },

    plugins: [],

}
