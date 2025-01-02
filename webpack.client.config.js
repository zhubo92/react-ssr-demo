const path = require('path');
const baseConfig = require("./webpack.base.config");
const {merge} = require("webpack-merge");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = merge(baseConfig, {
    devtool: "source-map",
    entry: "./src/client",
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "js/bundle.[hash:5].js",
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["**/*", "!favicon.ico"],
        }),
    ]
});
