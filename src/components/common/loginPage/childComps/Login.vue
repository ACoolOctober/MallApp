<template>
  <div id="login" class="dom" >
    <form action="http://192.168.43.88:3000/login" method="post">
      <div class="s1">
        <h4>账号</h4>
        <input v-validate="'required|phone'" name="phone" type="text"  placeholder="注册手机" />
        <span v-show="errors.has('phone')" class="text-style"> {{ errors.first('phone') }} </span>  
      </div>
      <div class="s1">
        <h4>密码</h4>
        <input name="userPwd" v-validate="'required|userPwd'" type="password"  placeholder="请输入密码" />
        <span v-show="errors.has('userPwd')" class="text-style"> {{ errors.first('userPwd') }} </span> 
      </div>
      <div class="s2">
        <input type="checkbox" />
        <span>记住密码</span>
      </div>
      <input type="submit" class="btn" value="登     录" />
    </form>
    <div class="dom-footer">
      <div class="login-another">
        <a href="#">找回密码</a>
        <span>|</span>
        <span>还没有注册帐号?</span>
        <a href="#" @click="toRegister">立即注册</a>
      </div>
     <third-platform></third-platform>
    </div>
  </div>
</template>

<script>
  import ThirdPlatform from './ThirdPlatform'

  export default {
    name:'Login',
    components:{
      ThirdPlatform
    },
    methods: {
      toRegister(){
        this.$emit('toZC')
      },
      // 表单拦截
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
    },
  };
</script>

<style>
  
</style>