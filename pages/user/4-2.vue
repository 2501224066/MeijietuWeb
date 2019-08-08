<template>
  <div class="changePhone">
    <div class="changeheader">
      <p class="actived">修改手机号</p>
    </div>
    <div class="changecontent">
      <div>
        <div class="contentleft">手机号码 :</div>
        <div class="contentright">
            <el-input v-model="phone" maxlength="15" placeholder="请输入手机号码"></el-input>
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
        <div class="contentleft">新手机号码 :</div>
        <div class="contentright">
            <el-input v-model="new_phone" maxlength="15" placeholder="请输入新手机号码"></el-input>
        </div>
      </div>
      <div>
        <div class="contentleft">确认手机号码 :</div>
        <div class="contentright">
            <el-input v-model="new_phone_confirmation" maxlength="15" placeholder="请再次输入新手机号码"></el-input>
        </div>
      </div>
       <div>
          <el-button type="primary" style="margin:31px 71px 0 217px;width:108px" @click="savephone">保存</el-button>
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
          iswait: false,
          waittime:60,
          phone:'',
          smsCode:'',
          new_phone:'',
          new_phone_confirmation:''
      }
  },
  methods: {
    checkImgCode() {
      if(this.phone.search(/^1[3456789]\d{9}$/)== -1){return this.$message.error('手机号输入错误')}
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
                this.$message({message: '短信发送成功,请等待',type: 'success'})
                //====================================================================================
              })
              .catch(error => {
                this.$message.error(error.response.data.message)
              });
    },
    savephone(){
      if(this.new_phone.search(/^1[3456789]\d{9}$/)== -1){return this.$message.error('新手机号输入格式错误')}
      if(this.new_phone != this.new_phone_confirmation){return this.$message.error('两次次输入手机号不相同')}
      gettoken().then(val => {
        this.$axios.post('/savePhone',{
          phone:this.phone,
          smsCode:this.smsCode,
          new_phone:this.new_phone,
          new_phone_confirmation:this.new_phone_confirmation
        },{headers:{'Authorization':'Bearer'+val}}).then(res => {
        this.$message({message: '修改成功',type: 'success'})
      }).catch(err => {
        this.$message.error('修改失败:'+err.response.data.message)
      })
      })
    }
  },
};
</script>

<style scoped>
.changePhone {
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
  width: 320px;
  margin-top: -7px;
}
</style>