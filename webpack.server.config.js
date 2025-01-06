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
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "img/[name].[hash:5].[ext]",
                            emitFile: false
                        }
                    }
                ]
            }
        ]
    }
});
