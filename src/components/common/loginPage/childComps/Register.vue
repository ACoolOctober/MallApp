<template>
<<<<<<< HEAD
  <div class="dom">
    <form autocomplete="off" @submit.prevent="onSubmit" id="zc" action="http://localhost:3000/zc" method="post">
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
=======
  <div>
    <el-form
      ref="RegisterFormRef"
      :model="RegisterForm"
      label-width="60px"
      :rules="RegisterFormRules"
      label-position="top"
    >
      <div class="s1">
        <el-form-item label="手机号码" prop="phone">
          <el-input
            v-model="RegisterForm.phone"
            name="phone"
            type="text"
            placeholder="注册手机为找回密码的唯一凭证"
          ></el-input>
        </el-form-item>
      </div>
      <div class="s1">
        <el-form-item label="登录名" prop="LoginName">
          <el-input
            v-model="RegisterForm.LoginName"
            name="LoginName"
            type="text"
            placeholder="中、英文均可, 不超过12个字符"
            @blur="testName"
            ref="input_description"
          ></el-input>
        </el-form-item>
      </div>
      <div class="s1">
        <el-form-item label="密码" prop="LoginPassword">
          <el-input
            v-model="RegisterForm.LoginPassword"
            name="LoginPassword"
            type="text"
            placeholder="6-18位英文、数字、符号, 区分大小写"
          ></el-input>
        </el-form-item>
      </div>
      <!-- 短信验证码 组件 -->
      <SMS-verification :phone="RegisterForm.phone" :codeIsOK="codeIsOK"/>
      <el-form-item class="btns">
        <el-button type="primary" @click="onSubmit" id="zc">注册</el-button>
      </el-form-item>
    </el-form>
    <div class="dom-footer">
      <third-platform />
>>>>>>> 完成登录注册开发与测试
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
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
=======
import ThirdPlatform from "./ThirdPlatform";
import SMSVerification from "../../SMSverification/SMSVerification";

export default {
  name: "Register",
  components: {
    ThirdPlatform,
    SMSVerification
  },
  data() {
    var checkPhone = (rule, value, callback) => {
      if (value) {
        let re = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/;
        if (re.test(value)) {
          return callback();
        } else {
          return callback(new Error("请输入正确的手机号码"));
        }
      }
    };
    return {
      //注册数据
      RegisterForm: {
        LoginName: "",
        LoginPassword: ""
      },
      //验证码 验证是否通过
      codeIsOK:false,
      // 登录名是否可用
      nameIsOK: false,
      //注册预验证
      RegisterFormRules: {
        LoginName: [
          { required: true, message: "请输入登录名", trigger: "blur" },
          { min: 2, max: 10, message: "长度在 2 到 10 个字符", trigger: "blur" }
        ],
        LoginPassword: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          {
            min: 3,
            max: 18,
            message: "长度在 3 到 18 个字符",
            trigger: ["blur", "change"]
          }
        ],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
        phone: [
          { required: true, message: "请输入注册手机", trigger: "blur" },
          { validator: checkPhone, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    // 进行注册
    onSubmit() {
      this.$refs.RegisterFormRef.validate(async result => {
        if (!result) {
          console.log("验证不通过");
          return;
        } else {
          //这里再次判断登录名是否可用
          if (!this.nameIsOK) {
            this.$message.error("登录名被占用，请更改");
            return false;
          }
          //验证通过，准备发送请求进行注册
          const { data: res } = await this.$http.post(
            "UserInfo/AddLogin",
            {},
            {
              params: {
                LoginName: this.RegisterForm.LoginName,
                LoginPassword: this.RegisterForm.LoginPassword,
                phone: this.RegisterForm.phone
              }
            }
          );
          if (res.code !== 201) {
            this.$message.error("注册失败：" + res.msg);
          }
          this.$message.success("注册成功");
          //刷新当前页面
          location.reload();
        }
      });
    },
    //判断登录名是否可用
    async testName() {
      if (
        this.RegisterForm.LoginName !== null &&
        this.RegisterForm.LoginName !== ""
      ) {
        //发送网络请求
        const { data: res } = await this.$http.get("UserInfo/LoginName", {
          params: {
            LoginName: this.RegisterForm.LoginName
          }
        });
        if (res.code === 404) {
          //404 证明登录名可用
          return (this.nameIsOK = true);
        }
        this.$refs.input_description.focus(); //焦点聚集
        this.$message.error(res.msg);
        this.nameIsOK = false;
      }
    }
  }
};
</script>

<style>
#zc {
  width: 100%;
}
>>>>>>> 完成登录注册开发与测试
</style>