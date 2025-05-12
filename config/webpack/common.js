const path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const {NODE_ENV} = process.env;

const rootDir = path.resolve(__dirname, '../../');
const isDevMode = NODE_ENV === 'development';
const indexTitle = `${isDevMode ?`[${NODE_ENV.toUpperCase()}]`:''} Kaneoh`;

module.exports = {
  entry: {
    app: ['./app'],
  },
  output: {
    path: path.resolve(rootDir, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.css', '.scss'],
    alias: {
      RootDir: rootDir,
    },
  },
  plugins: [
    new CleanWebpackPlugin(['npm-debug.log', 'yarn-error.log'], {root: rootDir}),
    new HtmlWebpackPlugin({
      title: indexTitle,
      inject: 'head',
      favicon: `${rootDir}/vendor/images/favicon-180x180.png`,
      meta: {
        viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
      },
    }),
    new Webpack.ProvidePlugin({
      React: 'react',
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      disable: isDevMode,
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async',
    }),
  ],
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.js$/,
      //   exclude: /(node_modules|bower_components)/,
      //   use: {
      //     loader: 'eslint-loader',
      //   }
      // },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            envName: NODE_ENV,
            babelrc: false,
            presets: ['@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-object-rest-spread'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              name: '[name].[ext]',
              // outputPath: './dist/stylesheets'
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: `[name].[ext]?${Date.now()}`,
            // outputPath: './dist/images'
          },
        },
      },
    ],
  },
};
