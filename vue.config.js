const path = require('path')
module.exports = {
    publicPath: './',
    devServer: {
        disableHostCheck: true,
        proxy: {
            '/': {
                target: 'http://localhost:3000/',
                ws: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        }
    }
}