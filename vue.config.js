//配置别名
module.exports = {
    configureWebpack: {
        resolve: {
            //resolve解决路径的问题
            alias:{
                'assets': 'src/assets',
                'common': 'src/common',
                'components': 'src/components',
                'network': 'src/network',
                'views': 'src/views',

            }
        }
    }
}
