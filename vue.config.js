const path = require('path')
module.exports = {
    publicPath: './',
    devServer: {
        disableHostCheck: true,
        proxy: {
            '/': {
                target: process.env.VUE_APP_BASE_API,
                ws: false,
                changeOrigin: true
            },
        }
    }
}