const sharedConfig = require("tailwind-config/tailwind.config.js");
const m = {
  ...sharedConfig,
  content: ["./**/*.{js,jsx,ts,tsx}"],
};

module.exports = m;
