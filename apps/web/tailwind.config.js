const sharedConfig = require("tailwind-config/tailwind.config.js");
console.log("sharedConfig", { sharedConfig });
module.exports = {
  ...sharedConfig,
};
