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
       title: "Base",
       template: path.join(__dirname, "app", "partials", "basecard.hbs"),
       filename: path.join(__dirname, "dist", "partials", "basecard.html"),
        inject: "body"
      }),
          new HtmlWebpackPlugin({
            title: "radio",
            template: path.join(__dirname, "app", "partials", "radiobtn.hbs"),
            filename: path.join(__dirname, "dist", "partials", "radiobtn.html"),
            inject: "body"
          }),
    //  new HandlebarsPlugin({
    //     htmlWebpackPlugin: {
    //       enabled: true, // register all partials from html-webpack-plugin, defaults to `false`
    //       prefix: "html" // default is "html"
    //     },
    //    entry: path.join(process.cwd(), "app", "templates", "home.hbs"),
    //    // output path and filename(s). This should lie within the webpacks output-folder
    //     output: path.join(process.cwd(), "dist", "index.html"),
    //    // globbed path to partials, where folder/filename is unique
    //    partials: [
    //      path.join(process.cwd(), "app", "partials", "*", "*.hbs")
    //    ],
    //    // register custom helpers. May be either a function or a glob-pattern
    //    helpers: {
    //      nameOfHbsHelper: Function.prototype,
    //      projectHelpers: path.join(process.cwd(), "app", "helpers", "*.helper.js")
    //    },

    //    // hooks
    //    onBeforeSetup: function (Handlebars) {},
    //    onBeforeAddPartials: function (Handlebars, partialsMap) {},
    //    onBeforeCompile: function (Handlebars, templateContent) {},
    //    onBeforeRender: function (Handlebars, data) {},
    //    onBeforeSave: function (Handlebars, resultHtml, filename) {},
    //    onDone: function (Handlebars, filename) {}
    //  })
  ]
}