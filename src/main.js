import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

// 自定义组件  消息框提醒
import toast from './components/common/toast'

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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
