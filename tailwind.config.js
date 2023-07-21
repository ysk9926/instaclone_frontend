/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        inputSize: "250px",
      },
      height: {
        one: "1px",
      },
      maxWidth: {
        baseBox: "350px",
      },
      colors: {
        boxBorder: "#dbdbdb",
        fbBlue: "#0095f6",
        fbBlueHover: "#1a77f2",
      },
    },
  },
  plugins: [],
};
