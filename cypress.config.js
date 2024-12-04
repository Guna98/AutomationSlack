const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
//const sendCypressVideosToSlack = require('./cypress/slackReporter');

module.exports = defineConfig({
  video: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Automation',
    embeddedScreenshots: true,
    inlineAssets: true,
    overwrite: true,
    html: true,                    
    saveAllAttempts: false,
  },
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout:5000,
    // reporter: "mochawesome",
    // reporterOptions: {
    //   charts: true,
    //   overwrite: false,
    //   html: true,
    //   json: true,
    //   reportDir: "cypress/reports"
    //},
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotOnRunFailure=true;
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {downloadFile})
    },
  },
});