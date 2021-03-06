const { config } = require("./wdio.conf.js");

(config.baseUrl = "https://digital-form-builder-designer.herokuapp.com/"),
  (config.runnerUrl = "https://digital-form-builder-runner.herokuapp.com/"),
  (config.maxInstances = 1),
  (config.capabilities = [
    {
      maxInstances: 1,
      browserName: "chrome",
    },
  ]);

config.cucumberOpts = {
  require: ["./features/steps/*steps.js"],
  tagExpression: "@debug",
  timeout: 600000, // timeout for steps in milliseconds
};

exports.config = config;
