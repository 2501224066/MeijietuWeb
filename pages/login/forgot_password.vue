<template>
  <div>
    <el-steps :space="200" :active="steps" :align-center="true" class="regstep">
      <el-step title="验证身份"></el-step>
      <el-step title="重置密码"></el-step>
      <el-step title="完成"></el-step>
    </el-steps>
    <div class="loginform">
      <div class="logintop"></div>
      <!-- =======================第一步=============================================================================== -->
      <div class="logincontent" v-show="steps===0">
        <el-input v-model="phone" maxlength="13" placeholder="请输入手机号"></el-input>
        <div class="tupianyanzheng">
          <el-input v-model="imgCode" maxlength="6" placeholder="请输入图片验证码"></el-input>
          <div class="phonecheckdp hand" @click="shuaxinyanzheng">
            <img :src="imgCodesvg">
          </div>
        </div>
        <el-input class="phonecheckuang" maxlength="6" v-model="phonecheck" placeholder="请输入手机验证码"></el-input>
        <el-button @click="checkImgCode" :disabled="iswait">{{iswait?'等待'+waittime+'s':'发送验证码'}}</el-button>
        <el-button class="loginbtn" @click="login">下一步</el-button>
      </div>
      <!-- ====================================第二步=========================================================== -->
      <div class="logincontent" v-show="steps===2">
        <el-input v-model="newpassword" maxlength="16" show-password placeholder="新密码"></el-input>
        <el-input v-model="password_confirmation" maxlength="16" show-password placeholder="确认密码"></el-input>
        <el-button class="loginbtn" @click="login2">确认</el-button>
      </div>
      <!-- ========================================第三步=================================================================== -->
      <div class="registerfinsh" v-show="steps === 3">
        <h2 class="smallicon">您的新密码已设置成功</h2>
        <el-button class="loginbtn longinf" @click="login3">重新登陆</el-button>
      </div>
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>{{text}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  layout: "login",
  data() {
    return {
      iswait: false, //验证等待
      waittime: 60,
      dialogVisible: false, //弹出框
      steps: 0, //步骤条
      phone: "", //手机号
      phonecheck: "", //手机验证码
      imgCode: "", //图片验证码
      checked: "", //条款选择框
      phototoken: "", //自动生成图片验证用token
      newpassword: "", //新密码
      password_confirmation: "", //再次输入密码
      text: "图片验证码错误",
      nextToken: "",
      imgCodesvg:'',  //验证码SVG格式
    };
  },
  methods: {
    isusername() {
      this.isuser = true;
    },
    isphone() {
      this.isuser = false;
    },
    login() {
      this.$axios
        .post("/checkPhone", {
          phone: this.phone,
          smsCode: this.phonecheck,
          type: 2
        })
        .then(res => {
          this.nextToken = res.data.data.nextToken;
          this.steps = 2;
        })
        .catch(err => {
          this.$message.error('失败:'+err.response.data.message)
        });
    },
    login2() {
      this.$axios.post("/resetPass", {
        phone: this.phone,
        password: this.newpassword,
        password_confirmation: this.password_confirmation,
        nextToken: this.nextToken //手机验证返回的token值
      }).then(res=>{
        this.steps = 3;
        setTimeout(()=>{
          this.$router.push('/login')
        },1000)
      }).catch(err=>{
        this.$message.error('失败:'+err.response.data.message)
      })
      
    },
    shuaxinyanzheng() {
      this.$axios("/getImgCode").then(res => {
        this.imgCodesvg = res.data.data.img_code;
        this.phototoken = res.data.data.img_token;
      });
    },
    login3() {
      this.$router.push("../login");
    },
    checkImgCode() {
      this.$axios
        .get("/checkImgCode", {
          params: {
            imgToken: this.phototoken,
            imgCode: this.imgCode
          }
        })
        .then(res => {
          if (res.data.message == "success") {
            this.$axios
              .get("/smsVerifCode", {
                params: {
                  phone: this.phone,
                  code_type: "checkPhone"
                }
              })
              .then(result => {
                // ========================验证码发送,再次发送需要等待60s===========================
                this.iswait = true;
                var mytime = setInterval(() => {
                  if (this.waittime == 0) {
                    this.iswait = false;
                    this.waittime = 60;
                    clearInterval(mytime);
                  }
                  this.waittime -= 1;
                }, 1000);
                //====================================================================================
              })
              .catch(error => {
                this.text = error.response.data.message;
                this.dialogVisible = true;
              });
          }
        })
        .catch(err => {
          this.text = err.response.data.message;
          this.dialogVisible = true;
        });
    }
  },
  mounted() {
    window.document.body.style.background = "#fff";
    this.$axios("/getImgCode").then(res => {
      this.imgCodesvg = res.data.data.img_code;
      this.phototoken = res.data.data.img_token;
    });
  },
  created() {
    this.phototoken = Math.random();
  }
};
</script>

<style lang="css" scoped>
.hand {
  cursor: pointer;
}
.registerfinsh {
  box-sizing: border-box;
  padding: 30px 0 0 120px;
}
.smallicon {
  height: 24px;
  padding-left: 30px;
  line-height: 24px;
  background-image: url("/indexicon/smalltrue.png");
  background-repeat: no-repeat;
  margin-bottom: 10px;
}
.regstep {
  position: relative;
  width: 500px;
  left: 13px;
  top: 83px;
  margin: 0 auto;
  z-index: 99;
}
.loginform {
  position: relative;
  width: 420px;
  height: 400px;
  background: rgba(255, 255, 255, 1);
  margin: 65px auto;
}
.logincontent .phonecheckuang.el-input {
  width: 240px;
  height: 38px;
  margin-right: 0;
}
.loginform .logintop {
  width: 100%;
  height: 58px;
}
.logincontent .el-input {
  width: 360px;
  height: 38px;
  border-radius: 4px;
  margin: 15px 38px;
}
.logincontent .tupianyanzheng .el-input {
  width: 240px;
  height: 38px;
  border-radius: 4px;
}
.photocheckd {
  width: 100px;
  height: 40px;
  position: absolute;
  left: 284px;
  top: 234px;
}
.phonecheckdp {
  width: 100px;
  height: 40px;
  position: absolute;
  left: 284px;
  top: 134px;
}
.zidonglongin {
  margin: 0 38px;
  font-size: 12px;
  font-weight: 300;
  color: rgba(36, 36, 36, 1);
}
.zidonglongin a {
  color: red;
}
.zidongbtn {
  margin-left: -23px;
  margin-right: 20px;
}
.loginbtn.el-button {
  width: 360px;
  height: 38px;
  background: #5141ed;
  border-radius: 3px;
  color: #fff;
  margin: 25px 38px;
}
.longinf.el-button {
  margin: 80px -65px;
}
</style>