const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode:'development',
  entry: './src/mainJavaScript.js',
  output: {
    filename: 'mainJavaScript.js',
    path: path.resolve(__dirname, 'dist'),
  },
  
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Path to your original index.html file
    }),
  ],
};