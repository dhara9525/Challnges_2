const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");

module.exports = (env) => {
    return {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            publicPath: '/',
            filename: 'bundle.js'
        },
        devServer: {
            contentBase: "./build",
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader', 'eslint-loader']
                },
                {
                    test: /\.(scss)$/,
                    use: ['style-loader', 'css-loader', 'postcss-loader','sass-loader']
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template:  path.resolve('./index.html'),
            }),
            new webpack.LoaderOptionsPlugin({
                options: {
                    postcss: [
                        autoprefixer()
                    ]
                }
            }),
        ]
    };
}
