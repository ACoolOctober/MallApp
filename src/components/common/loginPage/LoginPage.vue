<template>
  <div id="content">
    <!--头部-->
    <div class="content-header clearfix">
        <a href="javascript:;" 
        :class="{'current':isShow}"
        @click="tabClick()"
        >登录</a>
        <a href="javascript:;"
        @click="tabRegister()" 
        :class="{'current':!isShow}"
        >注册</a>
    </div>
    <!--内容-->
    <div class="content-body">
        <login v-if="isShow" @toZC='tabRegister'></login>
        <register v-else></register>
        
    </div>
</div>
</template>

<script>
  import Login from './childComps/Login'
  import Register from './childComps/Register'
  

  export default {
    name:'LoginPage',
    components:{
      Login,
      Register,
    },
    data() {
      return {
        // 确定是显示登陆还是注册 true为登陆状态
        isShow:true,
      }
    },
    methods: {
      tabClick(){
        this.isShow = true
      },
      tabRegister(){
        this.isShow  = false
      }
    },
  }
</script>

<style>
  @import url('./LoginPage.css');
  .text-style{
    color: red;
  }
</style>