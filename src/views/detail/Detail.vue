<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="content">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-bass-info :goods="goodsInfo"></detail-bass-info>
      <detail-shop-info :shop="shopInfo"></detail-shop-info>
    </scroll>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBassInfo from './childComps/DetailBassInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'

  import Scroll from 'components/common/scroll/scroll'

  import {getDetail,Goods} from 'network/detail'

export default {
  name:'Detail',
  components :{
    DetailNavBar,
    DetailSwiper,
    DetailBassInfo,
    Scroll,
    DetailShopInfo
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goodsInfo:{},
      shopInfo:{}
    }
  },
  created() {
    // 保存iid
    this.iid = this.$route.params.iid
    //根据iid请求网络数据
    getDetail(this.iid).then(res => {
      const data = res.result;
      //取出轮播图数据
      this.topImages = data.itemInfo.topImages
      //创建商品对象
      this.goodsInfo = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      //取出店铺信息
      this.shopInfo = data.shopInfo
    })
  },
}
</script>

<style scoped>
#detail{
  height: 100vh;
  background-color: #ffffff;
  position: relative;
  z-index: 1;
}
  .content{
    background-color: #ffffff;
    height: calc(100% - 44px);
  }
</style>