// const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const plugins = require('./plugins')
const {resolve} = require('./utils')
const jsRules = require('./rules/jsRules')
const styleRules = require('./rules/styleRules')
const fileRules = require('./rules/fileRules')
const optimization = require('./optimization')
module.exports = {
    entry: {
        app: resolve('src/index.tsx')
    },
    output: {
        path: resolve('dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [...jsRules, ...styleRules, ...fileRules]
    },
    resolve: {
        extensions: ['.ts','.tsx','.js','.jsx'],
        // alias: {
        //     '@components': path.join(__dirname,'./../','src/comonents')
        // }
        plugins:[
            new TsconfigPathsPlugin({
                configFile: resolve('tsconfig.json')
            })
        ]
    },
    plugins: [...plugins],
    optimization
}