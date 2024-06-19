const { defineConfig } = require("cypress")

module.exports = defineConfig({
  baseUrl: "http://localhost:3000",
  e2e: {
    setupNodeEvents(on, config) {

    },
  },
})