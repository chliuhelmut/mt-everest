const webpack = require('webpack');
const merge = require('webpack-merge');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    filename: `[name].bundle.js?${Date.now()}`,
  },
  devServer: {
    port: 8000,
    compress: true,
    hot: true,
    open: false,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      openAnalyzer: true,
    }),
  ],
});
