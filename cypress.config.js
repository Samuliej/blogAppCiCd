const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    env: {
      BACKEND: '/api',
    },
    setupNodeEvents(on, config) {

    },
  },
  env: {
    BACKEND: '/api',
  },
})