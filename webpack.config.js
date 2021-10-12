const { mergeWithRules } = require('webpack-merge');

const mergeCustom = mergeWithRules({
    module: {
        rules: {
            test: "match",
            use: "prepend",
            exclude: 'prepend'
        },
    },
});

const commonConfig = require('./webpack.common.js');

const productionConfig = require('./webpack.prod.js');

const developmentConfig = require('./webpack.dev.js');

module.exports = (env, args) => {
    switch(args.mode) {
        case 'development':
            return mergeCustom(commonConfig, developmentConfig);
        case 'production':
            return mergeCustom(commonConfig, productionConfig);
        default:
            throw new Error('No matching configuration was found!');
    }
}