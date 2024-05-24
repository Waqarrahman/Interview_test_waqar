const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  "defaultCommandTimeout": 9000
// To wait till 9 seconds if API doesn't response)
});
