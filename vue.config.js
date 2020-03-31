const path = require('path')
module.exports={
    // lintOnSave: false,
    devServer: {
        disableHostCheck: true,
        proxy: {
            '/': {
              target: 'http://localhost:3000/',
              ws: false,
              changeOrigin: true
            },
        }
    }
}