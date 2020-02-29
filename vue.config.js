
const path = require('path')
 
module.exports = {
  // 对象和函数都可以，如果要控制开发环境可以选择函数
  configureWebpack:{
      resolve:{
        alias:{
          'assets':path.resolve('./src/assets'),
          'common':path.resolve('./src/common'),
          'components':path.resolve('./src/components'),
          'network':path.resolve('./src/network'),
          'views':path.resolve('./src/views')
        }
      }
    }
  }