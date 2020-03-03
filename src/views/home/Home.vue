<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
     <tab-control :titles="['流行','新款','精选']" 
                    ref="tabControl1"
                   @tbClick="tbClick"
                   class="tabControl"
                   v-show="isTabFixd"></tab-control>
   <scroll  class="content" 
            ref="scroll" 
            :probe-type="3" 
            @scroll="scroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行','新款','精选']" 
                    ref="tabControl2"
                   @tbClick="tbClick"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
   </scroll>
   <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
//子组件
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

//公共组件
import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/scroll'
import BackTop from'components/common/backTop/BackTop'

//功能组件
import {getHomeMultidata,getHomeGoods} from "network/home";//路由加载
import {debounce} from 'common/utils' ////防抖函数

export default {
  name:"Home",
  components:{
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data(){
    return{
      // result=null,
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop',
      isShowBackTop:false,
      tabOffsetTop:0,
      isTabFixd:false,
      saveY: 0
    }
  },
  computed: {
    showGoods(){
    return this.goods[this.currentType].list
    }
  },
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0,this.saveY,0)
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y
  },
  created(){
    //请求首页广告数据
    this.getHomeMultidata()
    //请求首页商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },
  mounted() {
    const refresh = debounce( this.$refs.scroll.refresh,200)
    //监听itme图片加载完成
    this.$bus.$on('itemIamgLoad',() =>{
      refresh();
    })
  },
  methods:{
    /**
     * 事件监听
     */
    swiperImageLoad(){
      // console.log(this.$refs.tabControl.$el.offsetTop);
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    tbClick(index){
      switch(index){
        case 0:
          this.currentType = 'pop'
        break;
        case 1:
          this.currentType = 'new'
        break;
        case 2:
          this.currentType = 'sell'
        break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    //回到顶部
    backClick(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
    //确认显示还是隐藏 回到顶部
    scroll(position){
      //1. 判断BackTop是否显示
      this.isShowBackTop = -position.y > 1000
      // 2.决定tabControl是否吸顶 (position:fiexd)
      this.isTabFixd = (-position.y) > this.tabOffsetTop
    },
    //加载更多
    loadMore(){
      this.getHomeGoods(this.currentType)
    },

    /**
     * 
     * 网络请求相关
     */
    getHomeMultidata(){
      getHomeMultidata().then(res =>{
      // this.result=res;
      this.banners=res.data.banner.list;
      this.recommends=res.data.recommend.list;
    })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then(res =>{
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp()
    })
    }
  }
}
</script>

<style scoped>
#home{
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
  .home-nav{
    background-color: var(--color-tint);
    color: #ffffff;
  }
  .content{
    /* height: 300px; */
    position: absolute;
    top:44px;
    bottom: 49px;
    left: 0;
    right: 0;
    /* background-color: #fff; */
    overflow: hidden;
  }
  .tabControl{
    position: relative;
    z-index: 9;
    background-color: #ffffff;
  }
</style>