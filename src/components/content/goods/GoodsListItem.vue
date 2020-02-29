<template>
  <div class="goods-itme">
    <img :src="goodsItem.show.img" alt="">
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
  }
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