const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')
const webpack = require('webpack')

module.exports = {
  entry: {
    'app': [
      './src/app.jsx', 
      './src/styles/main.scss', 
      './src/index.html'
    ],
    'js': './src/lib/cool-parallax.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/assets')
  },
  module: {
    rules: [
      { 
        test: /\.js/,
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
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']) // for production
      },
      {
        test: /\.html$/,
        loader: 'file-loader',
        options: {
          outputPath: '../', // -> /dist
          name: 'index-prod.html'
        }
      },
    ]
  },
  resolve: {
    // resolve file extensions
    extensions: ['.jsx', '.js'],
    // alias: {
    //   'assets': resolve('your/path/to/assets')
    // }
  },
  devServer: {
    contentBase: path.join(__dirname, "./dist/"),
    disableHostCheck: true, // for local proxy settings
    compress: true,
    port: 9950
  },
  watchOptions: {
    poll: true
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].min.css',
      allChunks: true,
    }),
    // new webpack.LoaderOptionsPlugin({
    //     minimize: true,
    //     debug: true,
    //     options: {
    //         postcss: [autoprefixer]       
    //     }
    // })
  ]
};