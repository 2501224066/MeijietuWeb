<template>
  <div class="changePassword">
    <div class="changeheader">
      <p class="actived">修改登录密码</p>
    </div>
    <div class="changecontent">
      <div>
        <div class="contentleft">当前密码 :</div>
        <div class="contentright">
            <el-input v-model="password" maxlength="15" placeholder="请输入当前密码"></el-input>
        </div>
      </div>
      <div>
        <div class="contentleft">短信验证码 :</div>
        <div class="contentright">
            <el-input v-model="smsCode" maxlength="8" placeholder="请输入短信验证码" style="width:200px"></el-input>
            <el-button @click="checkImgCode" :disabled="iswait">{{iswait?'等待'+waittime+'s':'发送验证码'}}</el-button>
        </div>
      </div>
      <div>
        <div class="contentleft">新的密码 :</div>
        <div class="contentright">
            <el-input v-model="new_pass" maxlength="15" show-password placeholder="请输入新的密码"></el-input>
        </div>
      </div>
      <div>
        <div class="contentleft">确认密码 :</div>
        <div class="contentright">
            <el-input v-model="new_pass_confirmation" maxlength="15" show-password placeholder="请再次输入密码"></el-input>
        </div>
      </div>
       <div>
          <el-button type="primary" style="margin:30px 71px 0 217px;width:108px" @click="changepassword">保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {gettoken} from '@@/assets/commen.js'
export default {
  layout: "user",
  data() {
      return {
          iswait:false,
          waittime:60,
          password:'',
          smsCode:'',
          new_pass:'',
          new_pass_confirmation:''
      }
  },
  methods: {
     checkImgCode() {
       if(this.password==''){return this.$message.error('请输入当前密码')}
       if(this.password.search(/^[0-9a-zA-Z]+$/)== -1){return this.$message.error('密码格式输入错误')}
            this.$axios
              .get("/smsVerifCode", {
                params: {
                  phone: this.$store.state.userdata.phone,
                  code_type: "resetPassCode"
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
                this.$message({message: '短信发送成功,请等待',type: 'success'})
                //====================================================================================
              })
              .catch(error => {
                this.$message.error(error.response.data.message)
              });
    },
    changepassword(){
      if(this.password.search(/^[0-9a-zA-Z]+$/)== -1){return this.$message.error('密码格式输入错误')}
      if(this.new_pass.search(/^[0-9a-zA-Z]+$/)== -1){return this.$message.error('密码格式输入错误')}
      if(this.new_pass != this.new_pass_confirmation){return this.$message.error('两次密码输入不一致')}
      gettoken().then(val => {
        return  this.$axios.post('/savePass',{
          password:this.password,
          smsCode:this.smsCode,
          new_pass:this.new_pass,
          new_pass_confirmation:this.new_pass_confirmation
        },{headers:{'Authorization':'Bearer'+val}})
      }).then(res=>{
        this.$message({message: '修改成功',type: 'success'})
      }).catch(err =>{
        this.$message.error('失败:'+err.response.data.message)
      })
    }
  },
};
</script>

<style scoped>
.changePassword {
  background-color: #fff;
}
.changeheader {
  height: 55px;
  border-bottom: 1px #d2d2d2 solid;
}
.changeheader p {
  width: 110px;
  height: 55px;
  font-size: 16px;
  line-height: 55px;
  margin-left: 15px;
  border-bottom: 2px #5141ed solid;
  text-align: center
}
.changecontent{
    padding-bottom: 50px;
}
.changecontent > div {
  margin-top: 30px;
  display: flex;
}
.changecontent div .contentleft {
  display: flex;
  width: 196px;
  margin-right: 19px;
  justify-content: flex-end;
}
.contentright{
  margin-top: -7px;
}
</style>