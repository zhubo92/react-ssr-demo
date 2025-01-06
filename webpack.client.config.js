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
        publicPath: "/"
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
                        },
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                type: 'asset',
                generator: {
                    filename: "img/[name].[hash:5].[ext]",
                },
            }
        ]
    }
};

module.exports = merge(baseConfig, clientConfig);
