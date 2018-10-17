/* eslint-env node */
/* eslint-disable no-param-reassign, import/no-extraneous-dependencies */

const StylelintPlugin = require('stylelint-webpack-plugin');
const FlowtypePlugin = require('flowtype-loader/plugin');

module.exports = {
  webpack(config, env) {
    if (env === 'development') {
      config.plugins.push(new StylelintPlugin());
      config.plugins.push(new FlowtypePlugin());
      config.module.rules.push({
        test: /\.js$/,
        loader: 'flowtype-loader',
        enforce: 'pre',
        exclude: /node_modules/,
      });
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
