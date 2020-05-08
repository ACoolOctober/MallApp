<template>
  <div id="app">
<<<<<<< HEAD
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
     <!-- <login></login> -->
    <main-tab-bar></main-tab-bar>
=======
    <router-view></router-view>
>>>>>>> 完成登录注册开发与测试
  </div>
</template>

<script>
<<<<<<< HEAD
  import MainTabBar from 'components/content/mainTabBar/MainTabBar'
  import login from 'components/common/loginPage/LoginPage.vue'
  export default {
    name:'app',
    components :{
      MainTabBar,
      login
    }
    
  }
</script>

<style>
@import 'assets/css/base.css';

=======
export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
  #app{
    margin: auto 0;
  }
>>>>>>> 完成登录注册开发与测试
</style>
