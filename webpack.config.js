var webpack = require('webpack');
const path = require('path');
var HandlebarsPlugin = require("handlebars-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: ["./app/main.js", './app/styles/main.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",
    
  },

  module: {
    rules: [
       {
         test: /\.m?js$/,
         exclude: /(node_modules|bower_components)/,
         use: {
           loader: 'babel-loader',
           options: {
             presets: ['@babel/preset-env']
           }
         }
       },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader",
      },
    {
      test: /\.(s*)css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader'],
      })
    }
    ]
  },
resolveLoader: {
    modules: [
      "node_modules"
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, "src"),
      "node_modules"
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $ : "jquery",
      Backbone : "backbone",
      _ : "underscore"
    }),
    	new ExtractTextPlugin({
    	  filename: 'bundle.css'
    	}),
      new HtmlWebpackPlugin({
       title: "Revelex Code Test",
       template: path.join(__dirname, "app", "templates", "home.hbs"),
       filename: path.join(__dirname, "dist", "index.html"),
        inject: "body"
      }),
  ]
}