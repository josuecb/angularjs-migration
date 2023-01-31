const path = require('path');
module.exports = {
    entry: "./src/app/main.ts",
    output: {
        path: path.resolve(__dirname, 'src/dist'),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    }
}