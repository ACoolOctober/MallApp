<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-goods-list-item
            v-for="(item,index) in cartList"
            :key="index"
            :product="item"></cart-goods-list-item>
    </scroll>
    
  </div>
</template>

<script>

import CartGoodsListItem from './CartGoodsListItem'

import Scroll from 'components/common/scroll/scroll'

import {mapGetters} from 'vuex'

export default {
  name:'CartGoodsList',
  components:{
    Scroll,
    CartGoodsListItem
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  activated() {
    this.$refs.scroll.refresh()
  },
}
</script>

<style scoped>
  .content {
    /* margin-top: 44px; */
    height: calc(100vh  - 49px - 84px);
    overflow: hidden;
  }
</style>