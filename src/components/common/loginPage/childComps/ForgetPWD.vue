<template>
  <div>
    <el-card>
      <el-alert title="忘记密码" type="info" center show-icon :closable="false"></el-alert>
      <!--  -->
      <el-steps :active="activeIndex - 0" align-center>
        <el-step title="身份验证"></el-step>
        <el-step title="密码重置"></el-step>
        <el-step title="重置完成"></el-step>
      </el-steps>
      <!-- tab 区 -->
      <el-form
        :model="editForm"
        :rules="editFormRules"
        ref="editFormRef"
        label-width="100px"
        label-position="top"
      >
        <el-tabs type="border-card" v-model="activeIndex" :before-leave="beforeTabLeave">
          <el-tab-pane label="身份验证" name="0">
            <!-- 验证通过 在数据库中能够查找到该手机号 -->
            <el-form-item label="注册手机" prop="phone" ref="verifyPhone">
              <el-input v-model="editForm.phone" @blur="verifyPhone" placeholder="请输入注册用的手机"></el-input>
            </el-form-item>
            <!-- 短信验证码 -->
            <SMS-verification :phone="editForm.phone" :codeIsOK="codeIsOK"/>
          </el-tab-pane>
          <el-tab-pane label="密码重置" name="1">
            <el-form-item label="新密码" prop="newPWD">
              <el-input v-model="editForm.pwd" @blur="verifynewPWD" placeholder="请输入新的密码"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="newPWD2">
              <el-input v-model="editForm.repwd" @blur="verifynewPWD" placeholder="请确认新密码"></el-input>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="重置完成" name="2">角色管理</el-tab-pane>
        </el-tabs>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import SMSVerification from "../../SMSverification/SMSVerification";
export default {
  name: "ForgetPWD",
  components: {
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
      // 确定是哪个面板被激活
      activeIndex: "0",
      // 验证是否通过
      codeIsOK: false,
      // 重置是否完成
      editIsOK: false,
      //验证码 验证是否通过
      codeIsOK:false,
      // 修改的数据
      editForm: {},
      // 该手机号是否有注册 默认是没有
      phoneIsOK: false,
      // 验证规则
      editFormRules: {
        phone: [
          {
            required: true,
            message: "请输入注册手机",
            trigger: "blur"
          },
          { validator: checkPhone, trigger: "blur" }
        ],
        yzm: [
          {
            required: true,
            message: "请输入验证码",
            trigger: "blur"
          }
        ],
        newPWD: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ],
        newPWD2: [],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
      }
    };
  },
  methods: {
    // <!-- 验证通过时直接发送验证码，，离开事件
    // 验证为手机号，并在数据库中能够查找到该手机号 -->
    getCode() {},
    //切换验证
    beforeTabLeave(activeName, oldActiveName) {
      //判断是否经过手机号的验证 并准备进入重置选项
      if (oldActiveName === "0" && activeName === "1" && !this.codeIsOK) {
        this.$message.error("请先完成身份验证");
        return false;
      }
      if (
        oldActiveName === "0" &&
        activeName === "2" &&
        !this.codeIsOK &&
        !this.editIsOK
      ) {
        this.$message.error("请先完成身份验证");
        return false;
      }
      if (
        oldActiveName === "1" &&
        activeName === "2" &&
        !this.codeIsOK &&
        !this.editIsOK
      ) {
        this.$message.error("请完成密码重置");
        return false;
      }
    },
    // 进行手机号验证
    verifyPhone() {
      let tel = this.editForm.phone;
      if (this.checkMobile(tel)) {
        //验证通过 发送网络请求 判断是否存在该注册手机
        //通过身份验证
        this.codeIsOK = true;
        // 该手机号已注册
        this.phoneIsOK = true;
      }
    },
    onsubmit() {
      this.$refs.editFormRef.validate(valid => {
        if (!valid) {
          console.log("验证不通过");
          return;
          // 验证不通过
        }
        console.log(1111);
      });
    },
    verifynewPWD() {}
  }
};
</script>

<style >
.el-table {
  margin-top: 15px;
  font-size: 12px;
}
.el-steps {
  margin: 15px 0;
}
.el-step__title {
  font-size: 13px;
}
.el-card {
  margin-top: 55px;
}
#sendCode-input {
  width: 140px;
}
.verifyPhone {
  width: 170px;
}
</style>