<template>
  <div class="dom">
    <form autocomplete="off" @submit.prevent="onSubmit" id="zc" action="http://192.168.137.1:3000/zc" method="post">
      <div class="s1">
        <h4>手机号码</h4>
        <input v-validate="'required|phone'"  name="phone" type="text" placeholder="填写你的手机号码作为登录账户" />
        <span v-show="errors.has('phone')" class="text-style"> {{ errors.first('phone') }} </span> 
      </div>
      <div class="s1">
        <h4>用户名</h4>
        <input v-validate="'required|name'" name="userName" type="text" placeholder="中、英文均可, 不超过12个字符" />
         <span v-show="errors.has('userName')" class="text-style"> {{ errors.first('userName') }} </span> 
      </div>
      <div class="s1">
        <h4>密码</h4>
        <input v-validate="'required|userPwd'" name="userPwd" type="text" placeholder="6-18位英文、数字、符号, 区分大小写" />
         <span v-show="errors.has('userPwd')" class="text-style"> {{ errors.first('userPwd') }} </span> 
      </div>
      <div class="s1 msg-code">
        <h4>短信验证码</h4>
        <input v-validate="'required|code'" name="code" type="text" placeholder="填写短信验证码" />
        <input @click="getCode()" type="button" value="获取短信验证码" />
      </div>
      <span v-show="errors.has('code')" class="text-style"> {{ errors.first('code') }} </span> 
      <input type="submit" class="btn" value="注  册" />
    </form>
    <div class="dom-footer">
      <third-platform></third-platform>
    </div>
  </div>
</template>

<script>
  import ThirdPlatform from './ThirdPlatform'

  export default {
    name:'Register',
    components:{
      ThirdPlatform
    },
    methods: {
      // 进行验证码发送 并进入倒计时
      getCode(){
      },
      // 表单提交验证并拦截  
      // 好吧，就是没什么好的拦截方法 就这样拦截咯
      // 而且还不怎么想删除上面实时的错误提示 就是懒....
      // 上面的实时提示还需要进行防抖操作 避免过于频繁
     onSubmit(){
       this.$validator.validate().then(result => {
        if (!result) {
        	 console.log('验证不通过');
            return 
        } else {
         	 console.log('验证通过');
        }
      })
       
     },
      
    }
  };
</script>

<style>
</style>