const sharedConfig = require("tailwind-config/tailwind.config.js");
console.log("sharedConfig", { sharedConfig });
module.exports = {
  ...sharedConfig,
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
};
