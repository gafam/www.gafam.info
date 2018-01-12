const path = require('path');
const webpack = require('webpack');

module.exports = {

    cache: true,
    devtool: "cheap-source-map",

    entry: {
        'app': [
            path.resolve('src', 'js', 'main'),
            //path.resolve('htdocs', 'index.html'),
        ],
    },

    amd: {
        'jquery': true,
        'backbone': true,
        'backbone.marionette': true,
        'classie': true,
        'localforage.nopromises': true,
        'localforage.backbone': true,
        'backbone-relational': true,
    },

    output: {
        path: path.resolve(__dirname, 'htdocs', 'static', 'assets'),
        filename: '[name].bundle.js',
        publicPath: './static/assets/',
    },

    module: {
        rules: [
            // Do these to expose their symbols to the template namespace
            {
                test: require.resolve('jquery'),
                use: [
                    {
                        loader: 'expose-loader',
                        options: 'jQuery',
                    },
                    {
                        loader: 'expose-loader',
                        options: '$',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|swf|ico)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },

    resolve: {
        // Options for resolving module requests (does not apply to resolving to loaders)

        // Directories where to look for modules
        modules: [
            "node_modules",
        ],

        extensions: [".js", ".jsx", ".min.js", ".json", ".css"],

        alias: {
        }
    },

    plugins: [

        // https://webpack.js.org/plugins/provide-plugin/
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
        }),

    ],

};
