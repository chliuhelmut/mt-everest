const webpack = require('webpack');
const merge = require('webpack-merge');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    filename: `[name].bundle.js?${Date.now()}`,
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      openAnalyzer: true,
    }),
  ],
});
