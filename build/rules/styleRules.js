const {resolve} = require('./../utils')
const theme = require('./../../theme')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = [
    {
        test: /\.scss$/,
        include: [resolve('./../','src')],
        use: [
            MiniCssExtractPlugin.loader,
            // 'style-loader',
            {
                loader: 'cache-loader',
                options: {
                    cacheDirectory: resolve('.cache-loader')
                }
            },
            {
                loader: 'typings-for-css-modules-loader',
                options: {
                    modules: true,
                    namedExport: true,
                    camelCase: true,
                    sass: true
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    sassOptions:{
                        includePaths: [resolve('src/styles')]
                    }
                }
            }
        ]
    },
    {
        test: /\.less$/,
        include: [resolve('node_modules')],
        use: [
            // 'style-loader'
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
                loader: 'less-loader',
                options: {
                    lessOptions: {
                        javascriptEnabled: true,
                        modifyVars: theme
                    }
                    
                }
            }
        ]
    }
]