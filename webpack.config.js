const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: [
    './src/app.jsx',
    './src/styles/main.scss',
    './src/index.html'
  ],
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      { 
        test: /\.jsx$/, 
        loader: 'babel-loader', 
        query: {
          presets: ['es2015', 'react']
        },
        exclude: /node_modules/ 
      },
      {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.html$/,
        loader: 'file-loader',
        options: {
          name: 'index.html'
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].min.css',
      allChunks: true,
    }),
  ]
};
