<template>
  <div id="appHome">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabBar/MainTabBar'
  
  export default {
    name:'app',
    components :{
      MainTabBar
    }
    
  }
</script>

<style>

</style>