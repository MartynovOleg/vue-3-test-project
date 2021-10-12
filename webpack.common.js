const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

const htmlOptions = {
    inject: true,
    template: require('html-webpack-template'),
    title: "vue-3-test-project",
    links: [
    ],
    appMountId: 'app',
    lang: 'ru',
    mobile: true,
    meta: [
    ]
};

module.exports = {
    target: 'web',
    entry: {
        build: "./index.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist/front'),
        filename: '[name].js',
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                      esModule: false,
                      transformAssetUrls: {
                        a: 'href'
                      }
                    }
                }],
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false
                        }
                    },
                    'resolve-url-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpe?g|gif|png|svg|ico)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        esModule: false
                    },
                }],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        esModule: false
                    },
                }],
            },
            {
                test: /\.(doc|docx)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        esModule: false,
                        name: '[hash]/[name].[ext]'
                    },
                }],
            },
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    },
                }],
                exclude: path.resolve(__dirname, "node_modules")
            },
        ],
    },
    resolve: {
        alias: {
            //"form-controls-folder": path.resolve(__dirname, "components/form-controls"),
        }
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin(htmlOptions)
    ],
};