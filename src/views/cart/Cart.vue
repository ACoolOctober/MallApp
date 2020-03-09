<template>
  <div>
    <nav-bar class="cart-nav"><div slot="center">购物车({{length}})</div></nav-bar>
    <cart-goods-list></cart-goods-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>


import NavBar from 'components/common/navbar/NavBar.vue'

import CartGoodsList from './childComps/CartGoodsList'
import CartBottomBar from './childComps/CartBottomBar'

import { mapGetters } from 'vuex'

export default {
 name:"Cart",
 components:{
   NavBar,
   CartGoodsList,
   CartBottomBar
 },
 computed: {
   //将getters中的 cartLength映射到该处
   ...mapGetters({
     length:'cartLength'
   })
 },
}
</script>

<style scoped>
  .cart-nav{
   background-color: var(--color-tint);
    color: #ffffff;
  }
</style>