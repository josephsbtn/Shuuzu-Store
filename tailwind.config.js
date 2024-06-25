/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        lato: ["Lato"],
        garamond: ["Garamond"],
      },
    },
    colors: {
      myBlue: "#5863F8",
      myBlack: "#171D1C",
      myWhite: "#FFFFFF",
      myGrey: "#DCDCDC",
    },
    backgroundImage: {
      heroBg: "url('../img/image 9.png')",
      catMen: "url('../img/cat-men.png')",
      catWomen: "url('../img/cat-women.png')",
      catKids: "url('../img/cat-kids.png')",
      loginBg: "url('../img/loginBg')",
    },
  },
  plugins: [],
};
