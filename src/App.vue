<template>
  <div id="app">
    <!-- <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive> -->
     <login></login>
    <!-- <main-tab-bar></main-tab-bar> -->
  </div>
</template>

<script>
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

</style>
