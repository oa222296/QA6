const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://www.saucedemo.com/",
    // viewportWidth:500,
    // viewportHeight:550,
  //watchForFileChanges:false,
  },
});
