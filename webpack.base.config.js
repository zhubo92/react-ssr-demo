const path = require('path');

module.exports = {
    mode: "development",
    watch: true,
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react"]
                    }
                }],
            }
        ]
    }
}
