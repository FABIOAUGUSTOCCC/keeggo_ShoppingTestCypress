const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.advantageonlineshopping.com/',
    supportFile: 'cypress/support/index.js',
    failOnStatusCode: false,
    defaultCommandTimeout: 400000,
    requestTimeout: 400000,
    setupNodeEvents(on, config) {
      // Configuração do preprocessor para Cucumber
      on('file:preprocessor', cucumber())
      return config;
    },
    specPattern: 'cypress/features/**/*.feature',
  },
});
