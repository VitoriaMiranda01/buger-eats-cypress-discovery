const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "projectId": "mn421k",
    "viewportWidth": 1440,
    "viewportHeight": 900,
    "baseUrl": "https://buger-eats-qa.vercel.app/",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
