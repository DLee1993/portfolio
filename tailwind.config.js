/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Sacremento: ["Sacramento", "cursive"],
                Roboto: ["Roboto", "sans-serif"],
                Poppins: ["Poppins", "sans-serif"],
                Raleway: ["Raleway", "sans-serif"],
            },
            fontSize: {
                sm: "var(--fs-sm)",
                base: "var(--fs-base)",
                md: "var(--fs-md)",
                lg: "var(--fs-lg)",
                xl: "var(--fs-xl)",
                "2xl": "var(--fs-xxl)",
                "3xl": "var(--fs-xxxl)",
                "4xl": "var(--fs-xxxxl)",
                "5xl": "var(--fs-xxxxxl)",
            },
            colors: {
                "base-white": "rgb(229, 228, 224)",
                "faded-white": "rgba(229, 228, 224, 0.7)",
                "bright-white": "rgb(247, 247, 248);",
                "base-black": "rgb(11, 11, 11)",
            },
        },
    },
    plugins: [],
};
