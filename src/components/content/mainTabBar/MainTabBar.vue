<template>
  <tab-bar>
      <!-- activeColor="red" 更改字体颜色-->
     <tab-bar-item path="/home" activeColor="red">
       <img slot="item-icon" src="@/assets/img/tabbar/首页.png" alt="">
       <img slot="item-icon-active" src="@/assets/img/tabbar/首页(1).png" alt="">
       <div slot="item-text">首页</div>
     </tab-bar-item>
     <tab-bar-item path="/category">
       <img slot="item-icon" src="@/assets/img/tabbar/分类.png" alt="">
       <img slot="item-icon-active" src="@/assets/img/tabbar/分类(1).png" alt="">
       <div slot="item-text">分类</div>
     </tab-bar-item>
     <tab-bar-item path="/cart">
       <img slot="item-icon" src="@/assets/img/tabbar/购物车.png" alt="">
       <img slot="item-icon-active" src="@/assets/img/tabbar/购物车(1).png" alt="">
       <div slot="item-text">购物车</div>
     </tab-bar-item>
     <tab-bar-item path="/profile">
       <img slot="item-icon" src="@/assets/img/tabbar/我的.png" alt="">
       <img slot="item-icon-active" src="@/assets/img/tabbar/我的(1).png" alt="">
       <div slot="item-text">我的</div>
     </tab-bar-item>
    </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar.vue'
  import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

export default {
  name:'MainTabBar',
  components:{
      TabBar,
      TabBarItem
    }
}
</script>

<style>

</style>