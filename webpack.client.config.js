const path = require('path');
const baseConfig = require("./webpack.base.config");
const {merge} = require("webpack-merge");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const clientConfig = {
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
        new MiniCssExtractPlugin({
            filename: "css/bundle.[hash:5].css",
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                        }
                    }
                ]
            }
        ]
    }
};

module.exports = merge(baseConfig, clientConfig);
