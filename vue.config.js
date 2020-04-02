module.exports = {
    lintOnSave :true,  // error: 错误信息覆盖显示在浏览器中
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