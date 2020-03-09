<template>
  <div class="goods-itme" @click="itemClick">
    <img v-lazy="showImage" alt="" @load="imgLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <img class="sc-img" src="~assets/img/common/收藏.png" alt="">
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'GoodsListItem',
  props:{
    goodsItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  computed: {
    showImage(){
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    //
    imgLoad(){
      // 判断是哪个路由活跃用以判断是首页还是推荐页的监听事件
      //首页
      /*
      按理说这样应该是反的，但是这样写却又是可以正确获得
      */
      if(this.$route.path.indexOf('/home')){
        this.$bus.$emit('DetailItemIamgLoad')
      }
      // 详情页
      else if(this.$route.path.indexOf('/detail')){
        this.$bus.$emit('itemIamgLoad')
      
      }
      // this.$bus.$emit('itemIamgLoad')
    },
    itemClick(){
      if(this.goodsItem.iid){
        this.$router.push('/detail/' + this.goodsItem.iid)
      }
        
      else{
         return this.$toast.show('推荐商品暂未上架',1200)
        //this.$router.push('/detail/' + this.goodsItem.item_id)
      }
        
    }
  },
}
</script>

<style scoped>
  .goods-itme{
    position: relative;
    padding-bottom: 40px;
    width: 48%;
   
  }
  .goods-itme img{
    width: 100%;
    border-radius: 5px;
  }
 .goods-info{
   font-size: 12px;
   position: absolute;
   bottom: 5px;
   left: 0;
   right: 0;
   overflow: hidden;
   text-align: center;
 }
 .goods-info .sc-img{
   position: relative;
    left: -4px;
    top:2px;
    width: 14px;
    height: 14px;
 }
 .goods-info p{
   overflow: hidden;
   text-overflow: ellipsis;
   white-space: nowrap;
   margin-bottom: 3px;
 }
 .goods-info .price{
   color: var( --color-hight-text);
   margin-right: 20px;
 }
 .goods-info .collect{
   position: relative;
 }
  
</style>