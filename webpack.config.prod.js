const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // clean: true,
    },
    mode:'production',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                },
              },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html",
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx"],
    },
};
