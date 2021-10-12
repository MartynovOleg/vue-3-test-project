
 module.exports = {
    mode: 'production',
    devtool: false,
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                }],
            }
        ],
    },
    plugins: [
    ],
};
