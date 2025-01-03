const nodeExternals = require("webpack-node-externals");
const baseConfig = require("./webpack.base.config");
const {merge} = require("webpack-merge");
const path = require("path");

const serverConfig = {
    entry: "./src/server",
    target: "node",
    externals: [nodeExternals()],
    output: {
        filename: "server.js",
        path: path.resolve(__dirname, "./dist"),
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
            }
        ]
    }
};

module.exports = merge(baseConfig, serverConfig);
