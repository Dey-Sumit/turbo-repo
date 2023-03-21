const sharedConfig = require("tailwind-config/tailwind.config.js");
const m = {
  ...sharedConfig,
  content: ["./**/*.{js,jsx,ts,tsx}"],
};

console.log("tailwind ui config", { m });
module.exports = m;
