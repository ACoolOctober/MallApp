<template>
<<<<<<< HEAD
  <div id="login" class="dom" >
    <form autocomplete="off" @submit.prevent="onSubmit" action="http://localhost:3000/login" method="post">
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
=======
  <div id="login" class="dom">
    <el-form
      ref="loginFormRef"
      :model="loginForm"
      label-width="60px"
      :rules="loginFormRules"
      label-position="top"
    >
      <div class="s1">
        <el-form-item label="账号" prop="LoginName">
          <el-input
            v-model="loginForm.LoginName"
            name="LoginName"
            type="text"
            placeholder="请输入登录账号"
          ></el-input>
        </el-form-item>
      </div>
      <div class="s1">
        <el-form-item label="密码" prop="LoginPassword">
          <el-input
            v-model="loginForm.LoginPassword"
            name="LoginPassword"
            type="password"
            placeholder="请输入登录密码"
          ></el-input>
        </el-form-item>
      </div>
      <div class="s2" @click="remPWD">
        <input type="checkbox" id="remCheck" />
        <span>记住密码</span>
      </div>
      <el-button class="btn" @click="onSubmit" type="primary">登 录</el-button>
    </el-form>
    <div class="dom-footer">
      <div class="login-another">
        <a href="#" @click="toForgetPWD">找回密码</a>
>>>>>>> 完成登录注册开发与测试
        <span>|</span>
        <span>还没有注册帐号?</span>
        <a href="#" @click="toRegister">立即注册</a>
      </div>
<<<<<<< HEAD
     <third-platform></third-platform>
=======
      <third-platform></third-platform>
>>>>>>> 完成登录注册开发与测试
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
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
  
=======
import ThirdPlatform from "./ThirdPlatform";

export default {
  name: "Login",
  components: {
    ThirdPlatform
  },
  data() {
    return {
      //判断是否记住密码
      isremCheck: false,
      loginForm: {},
      // 表单验证
      loginFormRules: {
        LoginName: [
          { required: true, message: "请输入登录名", trigger: "blur" },
          { min: 2, max: 10, message: "长度在 2 到 10 个字符", trigger: "blur" }
        ],
        LoginPassword: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          { min: 3, max: 18, message: "长度在 3 到 18 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    toRegister() {
      this.$emit("toZC");
    },
    remPWD() {
      //修改复选框状态
      this.isremCheck = !this.isremCheck;
      document.getElementById("remCheck").checked = this.isremCheck;
    },
    // 前往 修改密码
    toForgetPWD() {
      this.$router.push({ path: "/ForgetPWD" });
    },
    // 登录 表单拦截
    onSubmit() {
      this.$refs.loginFormRef.validate(async result => {
        if (!result) {
          console.log("验证不通过");
          return false;
        } else {
          //console.log(this.loginForm);
          const { data: res } = await this.$http.post(
            "UserInfo/Login",
            {},
            {
              params: {
                LoginName: this.loginForm.LoginName,
                LoginPassword: this.loginForm.LoginPassword
              }
            }
          );
          if(res.code !== 200){
            console.log(res);
            
            // 登录失败 提示失败原因
            return this.$message.error(res.msg);
          }
          // 否则登录成功 取出数据 存到vueX中
          this.$message.success(res.msg)

          console.log(res);
        }
      });
    }
  }
};
</script>

<style>
>>>>>>> 完成登录注册开发与测试
</style>