<<<<<<< HEAD
<template>
=======
﻿<template>
>>>>>>> 完成登录注册开发与测试
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

export default {
  name:'Scroll',
  props:{
    probeType:{
      type: Number,
      default:0
    },
    pullUpLoad:{
      type: Boolean,
      default:false
    }
  },
  data() {
    return {
      scroll:null
    }
  },
  mounted() {
    this.scroll=new BScroll(this.$refs.wrapper,{
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
    })
    //监听滚动的位置
    if(this.probeType === 2 || this.probeType ===3){
      this.scroll.on('scroll',(position) =>{
     this.$emit('scroll',position)
    })
    }
    //监听上拉加载更多
    if(this.pullUpLoad){
      this.scroll.on("pullingUp",() =>{
      this.$emit('pullingUp')
    })
    }
  },
  methods: {
    //返回到顶部
    scrollTo(x,y,time=300){
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll && this.scroll.scrollTo && this.scroll.refresh()
    }
  }
}
</script>

<style scoped>

</style>
