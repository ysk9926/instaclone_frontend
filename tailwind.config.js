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
        subTitle: "250px",
        baseBox: "350px",
      },
      minWidth: {
        main: "300px",
      },
      colors: {
        boxBorder: "#dbdbdb",
        fbBlue: "#0095f6",
        fbBlueHover: "#1a77f2",
      },
      outlineWidth: {
        0.2: "0.2px",
      },
    },
  },
  plugins: [],
};
