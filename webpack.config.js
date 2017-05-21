var path = require('path');
var HtmlWebpakcPluigin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    context: path.resolve(__dirname, "main", "src"),
    entry: "./main.jsx",
    output: {
        path: path.resolve(__dirname, "main", "dist"),
        filename: "main.bundle.js",
    },

    module: {
        loaders: [
            {
                test: /\.jsx$/,
                include: path.join(__dirname, "main", "src"),
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                    publicPath:'/'
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                    publicPath:'/'
                })
            },
            {
                test: /\.(png|jpe?g|gif|ico)$/,
                loader: 'file-loader?name=[name].[hash].[ext]'
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: 'file-loader'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },

    plugins: [
        new HtmlWebpakcPluigin({
            title: 'Aurora Practice',
            template: './index.html'
        }),
        new ExtractTextPlugin('app.css')
    ]
};
