/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0a0a0a", // Zinc-950 base
                foreground: "#f4f4f5", // Zinc-50 text
                primary: "#18181b", // Zinc-900 surface
                accent: "#FF6B00", // Custom accent color
            },
            fontFamily: {
                sans: ['Geist', 'Outfit', 'sans-serif'],
                mono: ['Geist Mono', 'JetBrains Mono', 'monospace'],
                display: ['Outfit', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
