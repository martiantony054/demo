/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend:{},
    screens: {
      'sm': '300px',  // Changed small screen breakpoint
      'md': '768px',  // Medium screens
      'lg': '1024px', // Large screens
      'xl': '1280px', // Extra large screens
      '2xl': '1536px', // 2x Extra large screens
    },
  },
  plugins: [],
}

