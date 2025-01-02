const nodeExternals = require("webpack-node-externals");
const baseConfig = require("./webpack.base.config");
const {merge} = require("webpack-merge");

module.exports = merge(baseConfig, {
    entry: "./src/server",
    target: "node",
    externals: [nodeExternals()],
    output: {
      filename: "server.js",
    },
});
