<template>
  <div>
    <el-steps :space="200" :active="steps" :align-center="true" class="regstep">
      <el-step title="验证手机号"></el-step>
      <el-step title="选择角色"></el-step>
      <el-step title="填写账号信息"></el-step>
    </el-steps>
    <div class="loginform">
      <div class="logintop"></div>
      <!-- =======================第一步=============================================================================== -->
      <div class="logincontent" v-show="steps===0">
        <el-input v-model="phone" maxlength="13" placeholder="请输入手机号"></el-input>
        <div class="tupianyanzheng">
          <el-input v-model="imgCode" maxlength="6" placeholder="请输入图片验证码"></el-input>
          <div class="phonecheckdp" @click="shuaxinyanzheng">
            <img :src="imgCodesvg">
          </div>
        </div>
        <el-input class="phonecheckuang" maxlength="6" v-model="phonecheck" placeholder="请输入手机验证码"></el-input>
        <el-button @click="checkImgCode" style="width:120px" :disabled="iswait">{{iswait?'重新发送'+waittime+'s':'发送验证码'}}</el-button>
        <div class="zidonglongin">
          <el-checkbox v-model="checked" size="mini"></el-checkbox>
          <span class="zidongbtn">我已阅读并接受</span>
          <nuxt-link to="/problem" target="_blank" v-text="'《媒介兔服务条款》'"></nuxt-link>
          <nuxt-link to="/problem" target="_blank" v-text="'《隐私条款》'"></nuxt-link>
        </div>
        <el-button class="loginbtn" @click="login">下一步</el-button>
      </div>
      <!-- 第三步================================================================================================ -->
      <div class="logincontent" v-show="steps===3">
        <el-input v-model="nickname" maxlength="10" placeholder="请输入你的昵称"></el-input>
        <el-input v-model="email" placeholder="请输入你的邮箱"></el-input>
        <el-input v-model="password" maxlength="16" show-password placeholder="请设置登陆密码"></el-input>
        <el-input v-model="password_confirmation" maxlength="16" show-password placeholder="再次输入登陆密码"></el-input>
        <el-button class="loginbtn" @click="login2">确认</el-button>
      </div>
      <!-- ========================================第二步=================================================================== -->
      <div class="registerfinsh" v-show="steps === 1">
        <div class="regisleft">
          <img src="/usericon/man.png">
          <div>
            <el-radio v-model="radio" label="1">广告主</el-radio>
            <p>需要投放广告的用户</p>
          </div>
        </div>
        <div class="regisright">
          <img src="/usericon/women.png">
          <div>
            <el-radio  v-model="radio" label="2">媒体主</el-radio>
            <p>拥有流量的用户发布广告</p>
          </div>
        </div>
        <p class="caretext">选择角色完成后使用平台功能</p>
        <el-button class="loginbtn longinf" @click="login3">下一步</el-button>
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
      radio: "",
      iswait: false, //验证等待时间
      waittime: 60,
      dialogVisible: false, //弹出框组件默认隐藏
      steps: 0, //步骤条
      phone: "", //用户输入的手机号
      phonecheck: "", //用户输入的手机验证码
      imgCode: "", //用户输入的图片验证码
      checked: true, //是否接受条款
      phototoken: "", //随机生成的图片验证用的TOKEN
      password: "", //用户输入的密码
      nickname: "", //用户输入的昵称
      email: "", //用户输入的邮箱
      password_confirmation: "", //用户输入的再次确认密码
      text: "图片验证码错误", //弹出框提示
      nextToken: "",
      imgCodesvg:'',  //图片svg格式
      waitfinsh: false,
    };
  },
  methods: {
    isusername() {
      this.isuser = true;
    },
    isphone() {
      this.isuser = false;
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
          //===================================图片验证成功,发送手机验证码=========================
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
            .catch(err => {
              //手机验证码错误,或手机号错误
              this.text = err.response.data.message;
              this.dialogVisible = true;
            });
        })
        .catch(err => {
          //图片验证错误
          this.text = err.response.data.message;
          this.dialogVisible = true;
        });
    },
    login() {
      if (this.checked == true) {
        this.$axios
          .post("/checkPhone", {
            phone: this.phone,
            smsCode: this.phonecheck,
            type: 1
          })
          .then(res => {
            this.nextToken = res.data.data.nextToken;
            this.steps = 1;
          })
          .catch(err => {
            this.text = err.response.data.message;
            this.dialogVisible = true;
          });
      } else {
        this.text = err.response.data.message;
        this.dialogVisible = true;
      }
    },
    login2() {
      if(this.waitfinsh === true){return this.$message({message: '正在注册,请稍后',type: 'success'})}
      this.waitfinsh = true
      this.$axios
        .post("/register", {
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
          nickname: this.nickname,
          nextToken: this.nextToken,
          phone: this.phone,
          identity: this.radio,
          salesman_id:'',
          agent_domain: 'http://' + document.domain
        })
        .then(res => {
          this.$message({message: '注册成功',type: 'success'})
          setTimeout(()=>{
            this.$router.push('/login')
          },1000)
        })
        .catch(err => {
          this.text = err.response.data.message;
          this.dialogVisible = true;
          this.waitfinsh = false
        });
    },
    shuaxinyanzheng() {
      this.$axios('/getImgCode').then(res =>{
            this.imgCodesvg = res.data.data.img_code
            this.phototoken = res.data.data.img_token
        })
    },
    login3() {
        if(this.radio !==''){
            this.steps = 3;
        }else{
          this.$message({message:'请选择身份',type: 'warning'})
        }
    }
  },
  mounted() {
    window.document.body.style.background = '#fff'
    this.$axios('/getImgCode').then(res =>{
            this.imgCodesvg = res.data.data.img_code
            this.phototoken = res.data.data.img_token
        })
  },
};
</script>

<style lang="css" scoped>
.el-radio__label{
    font-size: 16px
}
.regisleft,
.regisright {
  width: 170px;
  float: left;
  margin-left: 40px
}
.regisleft p,
.regisright p{
    margin-top: 6px;
    margin-left: 24px;
    font-size: 12px;
    color: #666;
}
.registerfinsh {
  box-sizing: border-box;
}
.regstep {
  position: relative;
  width: 500px;
  left: 4px;
  top: 83px;
  z-index: 99;
  margin: 0 auto;
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
  width: 106px;
  height: 38px;
  position: absolute;
  left: 284px;
  top: 234px;
}
.phonecheckdp {
  width: 106px;
  height: 38px;
  position: absolute;
  left: 284px;
  top: 140px;
}
.zidonglongin {
  margin: 8px 38px;
  font-size: 14px;
  font-weight: 300;
  color: rgba(36, 36, 36, 1);
}
.zidonglongin a {
  color: red;
}
.zidongbtn {
  margin-left: -23px;
}
.loginbtn.el-button {
  width: 360px;
  height: 38px;
  background: #5141ED;
  border-radius: 3px;
  color: #fff;
  margin: 15px 38px;
}
.caretext{
  position: absolute;
  left: 38px;
  top: 245px;
  color: #888;
  font-size: 12px;
}
.longinf.el-button {
  margin: 62px 37px;
}
</style>