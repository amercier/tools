/* eslint-env node */
/* eslint-disable import/no-extraneous-dependencies */

const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  webpack(config, env) {
    if (env === 'development') {
      config.plugins.push(new StylelintPlugin());
    }

    return config;
  },
};
