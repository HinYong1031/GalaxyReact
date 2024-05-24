const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui"), require("flowbite/plugin")],
    daisyui: {
        themes: ["light", "dark", "dracula"],
    },
    darkMode: ["selector", "[data-theme='dracula']"],
};
