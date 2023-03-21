const colors = require("tailwindcss/colors");

const m = {
  content: [],
  theme: {
    extend: {
      colors: {
        brandblue: colors.blue[500],
        brandred: colors.red[500],
      },
    },
  },
  plugins: [],
};

module.exports = m;
console.log("package tailwind.config.js", { m });
