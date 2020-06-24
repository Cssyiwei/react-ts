const {resolve} = require('./../utils.js')

module.exports = [
    {
        test: /\.svg$/,
        loader: '@svgr/webpack',
        include: resolve('src')
    }
]