const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // mode: "production",
  mode: "development",
  entry: {
    Home: "./src/pages/Home/index.js",
    TodoList: "./src/pages/TodoList/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, ".dist"),
    },
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.png/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      chunks: ["Home"],
      title: "首頁 - TodoList",
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "todolist.html",
      chunks: ["TodoList"],
      title: "功能 - TodoList",
      template: "./src/index.html",
    }),
  ],
};
