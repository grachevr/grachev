/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: { bg:"#0e0e0e", panel:"#161616", border:"#27272a", accent:"#7c5cff", accent2:"#55d6aa", muted:"#a1a1aa" },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,.5)" },
      maxWidth: { content: "1180px" }
    }
  },
  plugins: []
}
