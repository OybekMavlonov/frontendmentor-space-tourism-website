/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors: {
                white: "hsl(0, 0%, 100%)",
                blue: {
                    300: "#D0D6F9",
                    900: "#0B0D17",
                }
            }
        },
    },
    plugins: [],
}

