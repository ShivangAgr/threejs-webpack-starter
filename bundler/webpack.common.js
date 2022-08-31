const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  // entry: path.resolve(__dirname, "../src/script.js"),
  // output: {
  //   filename: "bundle.[contenthash].js",
  //   path: path.resolve(__dirname, "../dist"),
  // },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      minify: true,
    }),
    new MiniCSSExtractPlugin(),
  ],
  module: {
    rules: [
      //HTMl:
      {
        test: /\.(html)$/,
        use: ['html-loader'],
      },
      // CSS
      {
        test: /\.css$/,
        use: [MiniCSSExtractPlugin.loader, 'css-loader'],
      },
      // JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // // Images
      // {
      //   test: /\.(jpg|png|gif|svg)$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         outputPath: "assets/images/",
      //       },
      //     },
      //   ],
      // },
      // // Shaders
      // {
      //   test: /\.(glsl|vs|fs|vert|frag)$/,
      //   exclude: /node_modules/,
      //   use: ['raw-loader'],
      // },
    ],
  },
};
