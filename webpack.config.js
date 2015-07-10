var path = require('path');
var webpack = require('webpack');

process.env.UV_THREADPOOL_SIZE = 100;

module.exports = function getWebpackConfig() {
    return {
        entry: {
            app: ['./app/app']
        },

        output: {},

        module: {
            loaders: [
                {
                    test: /react-intl/,
                    loader: 'expose?ReactIntl'
                },
                {
                    test: /jquery/,
                    loader: 'expose?jQuery'
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },

                {
                    test: /\.jsx$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },

                {
                    test: /\.styl$/,
                    loader: 'style!css?sourceMap!autoprefixer!stylus'
                },

                {
                    test: /\.scss$/,
                    loader: 'style!css?sourceMap!autoprefixer!sass?' +
                        'includePaths[]=' +
                        (path.resolve(__dirname, 'bower_components/foundation/scss'))
                },

                {
                    test: /\.css$/,
                    loader: 'style!css?sourceMap!autoprefixer'
                },

                // https://msdn.microsoft.com/en-us/library/cc848897(v=vs.85).aspx
                {
                    test: /\.(png)$/,
                    loader: 'url-loader?limit=32768&mimetype=image/png'
                },

                {
                    test: /\.jpg$/,
                    loader: 'file-loader'
                },

                {
                    test: /\.(eot|woff|ttf|svg)/,
                    loader: 'file-loader'
                }
            ]
        },

        resolve: {
            // Allow to omit extensions when requiring these files
            extensions: ['', '.js', '.jsx', '.styl', '.scss'],
            modulesDirectories: ['node_modules', 'bower_components'],

            alias: {
                intl: path.join(__dirname, 'bower_components/intl/Intl.complete'),
                react: path.join(__dirname, 'node_modules/react/'),
                jquery: path.join(__dirname, 'bower_components/jquery/dist/jquery'),
                magnificPopup: path.join(__dirname, 'bower_components/magnific-popup/dist/jquery.magnific-popup.js'),
                magnificPopupCss: path.join(__dirname, 'bower_components/magnific-popup/dist/magnific-popup.css')
            }
        },

        plugins: [
            new webpack.ProvidePlugin({
                React: 'react',
                $: 'jquery'
            })
        ]
    };
};
