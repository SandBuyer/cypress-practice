const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "v4svf4",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
