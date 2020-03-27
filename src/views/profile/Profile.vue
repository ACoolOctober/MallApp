<template>
  <div id='profile'>
    <nav-bar><div slot="center">个人中心</div></nav-bar>
    <login></login>
    <money></money>
    <profileList></profileList>
  </div>
</template>

<script>
import Login from './childComps/Login'
import Money from './childComps/Money'
import ProfileList from './childComps/ProfileList'

import NavBar from 'components/common/navbar/NavBar.vue'

export default {
  name:"Profile",
  components:{
    Login,
    Money,
    ProfileList,
    NavBar

  }
  ,
  computed: {
    
  },

}
</script>

<style scoped>

</style>