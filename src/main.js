import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

<<<<<<< HEAD
//表单验证
import './utils/validate'
=======
//表单验证 弃用
//import './utils/validate'

// 导入字体图标
import './assets/fonts/iconfont.css'
>>>>>>> 完成登录注册开发与测试

// 自定义组件  消息框提醒
import toast from './components/common/toast'

<<<<<<< HEAD
=======
import './plugins/element.js'


>>>>>>> 完成登录注册开发与测试
// 安装toast
Vue.use(toast)

//解决移动端300ms延迟
FastClick.attach(document.body)

//使用图懒加载插件
Vue.use(VueLazyLoad,{
  loading: require('./assets/img/common/加载中.png'),
  error:require('./assets/img/common/加载失败.png')
  
})

Vue.config.productionTip = false

// 全局实例化$bus事件总线
Vue.prototype.$bus = new Vue();

//监听图片加载用
Vue.prototype.$bus = new Vue()

<<<<<<< HEAD
=======
//导入axios网络请求
import axios from 'axios'
axios.defaults.baseURL='https://localhost:44369/api/'
// 设置拦截器
// // 在request拦截器中 展示进度条 NProgress.start();
// axios.interceptors.request.use(config =>{
//   NProgress.start();
//   config.headers.Authorization = window.sessionStorage.getItem('token')
//   // 在最后必须 返回config
//   return config
// })

// // 在reponse拦截器中 隐藏进度条 NProgress.done();
// axios.interceptors.response.use(config => {
//   NProgress.done();
//   return config
// })

// 进行全局挂载
Vue.prototype.$http = axios


>>>>>>> 完成登录注册开发与测试



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
