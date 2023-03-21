const sharedConfig = require("tailwind-config/tailwind.config.js");

module.exports = {
  ...sharedConfig,
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "../../packages/ui/**/*.{js,jsx,ts,tsx}",
  ],
};
