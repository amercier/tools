/* eslint-env node */
/* eslint-disable no-param-reassign, import/no-extraneous-dependencies */

const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  webpack(config, env) {
    if (env === 'development') {
      config.plugins.push(new StylelintPlugin());
    }

    return config;
  },

  jest(config) {
    if (!config.setupFiles) {
      config.setupFiles = [];
    }
    config.setupFiles.push('jest-prop-type-error');

    return config;
  },
};
