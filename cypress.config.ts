import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    retries: 2
  },

  viewportHeight: 780,
  viewportWidth: 1024
});
