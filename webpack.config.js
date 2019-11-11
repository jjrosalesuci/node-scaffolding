const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        'to-do-list': './app/client/to-do-list.js',
        'users': './app/client/users.js'
    },
    devtool: 'eval-source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          resolve: {
            extensions: [".js", ".jsx"]
          },
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        },
        { 
          test: /\.scss$/, 
          loader: [
            MiniCSSExtractPlugin.loader,
            "css-loader",
            'sass-loader'
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        inject: true,
        chunks: ['to-do-list'],
        template: "./app/views/index.html",
        filename: './to-do-list.html'
      }),
      new HtmlWebPackPlugin({
        inject: true,
        chunks: ['users'],
        template: "./app/views/index.html",
        filename: './users.html'
      }),
      new MiniCSSExtractPlugin()
    ]
};