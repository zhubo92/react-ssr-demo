const nodeExternals = require("webpack-node-externals");
const baseConfig = require("./webpack.base.config");
const {merge} = require("webpack-merge");
const path = require("path");

module.exports = merge(baseConfig, {
    entry: "./src/server",
    target: "node",
    externals: [nodeExternals()],
    output: {
        filename: "server.js",
        path: path.resolve(__dirname, "./dist"),
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "isomorphic-style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                        }
                    }
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                type: 'asset',
                generator: {
                    filename: "img/[name].[hash:5].[ext]",
                    emit: false,
                },
            }
        ]
    }
});
