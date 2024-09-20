const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev/',
    viewportWidth: 1600,
    viewportHeight: 900,
    defaultCommandTimeout: 10000, 
    pageLoadTimeout: 70000, 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
