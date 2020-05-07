<template>
  <div class="s1 msg-code">
    <!-- prop="code" -->
    <el-form-item label="短信验证码" >
      <el-row>
        <el-col :span="16">
          <el-input id="sendCode-input" v-model="code" placeholder="请输入验证码"></el-input>
        </el-col>
        <el-col :span="8">
          <el-button id="code" type="primary" :disabled="isDisabled" @click="sendCode">{{buttonText}}</el-button>
        </el-col>
      </el-row>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: "SMSVerification",
  data() {
    return {
      buttonText: "发送验证码",
      isDisabled: false, // 是否禁止点击发送验证码按钮
       //标识是否发送短信
      flag: true,
      code:''
    };
  },
  props:['phone'],
  methods: {
    // <!--发送验证码-->
    sendCode() {
      //console.log(222);
      let tel = this.phone;
      if (this.checkMobile(tel)) {
        // 验证通过 可进行验证码的发送

        // 如果发送成功

        let time = 30;
        this.buttonText = "已发送";
        this.isDisabled = true;
        
        if (this.flag) {
          this.flag = false;
          let timer = setInterval(() => {
            time--;
            this.buttonText = time + " 秒";
            if (time === 0) {
              clearInterval(timer);
              this.buttonText = "重新获取";
              this.isDisabled = false;
              this.flag = true;
            }
          }, 1000);
        }
      }
    },
    // 验证手机号
    checkMobile(str) {
      let re = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/;
      if (re.test(str)) {
        return true;
      } else {
        this.$message.error("请输入正确的手机号");
        return false;
      }
    },
  }
};
</script>

<style>
#code{
  margin-left: 5px;
}
</style>