<template>
  <div class="certification">
    <div class="certiheader">
      <div :class="{actived:ispersonal,hand:true}" @click="ispersonal = true">个人实名认证</div>
      <div :class="{actived:!ispersonal,hand:true}" @click="ispersonal = false">企业实名认证</div>
    </div>
    <!-- 个人认证-------------------------------------------------------------------------------- -->
    <div class="userCertification" v-show="ispersonal">
      <div>
        <div class="contentleft">真实姓名 :</div>
        <div class="contentright smallsize">
          <el-input v-model="truename" maxlength="6" placeholder="请输入真实姓名"></el-input>
        </div>
      </div>
      <!-- 身份证---------------------------------------------- -->
      <div>
        <div class="contentleft">身份证号 :</div>
        <div class="contentright smallsize">
          <el-input v-model="IDcard" maxlength="20" placeholder="请输入身份证号"></el-input>
        </div>
      </div>
      <div>
        <div class="contentleft">身份证正面 :</div>
        <div class="contentright smallsize">
          <el-upload
            class="avatar-uploader"
            :action="$store.state.imgcodehost+'/uploadImg'"
            :headers="{'Authorization':'Bearer'+token}"
            :data="{upload_type:'ID_card'}"
            name="image"
            :show-file-list="false"
            :on-success="handleAvatarSuccess1"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl1" :src="imageUrl1" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
      </div>
      <div>
        <div class="contentleft">身份证反面 :</div>
        <div class="contentright smallsize">
          <el-upload
            class="avatar-uploader"
            :action="$store.state.imgcodehost+'/uploadImg'"
            :headers="{'Authorization':'Bearer'+token}"
            :data="{'upload_type':'ID_card'}"
            :show-file-list="false"
            name="image"
            :on-success="handleAvatarSuccess2"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl2" :src="imageUrl2" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
      </div>
      <!-- 开户银行---------------------------------------------- -->
      <div>
        <div class="contentleft">开户银行 :</div>
        <div class="contentright smallsize">
          <el-input v-model="openbank" maxlength="15" placeholder="请输入开户银行名称"></el-input>
        </div>
      </div>
      <div>
        <div class="contentleft">开户支行 :</div>
        <div class="contentright smallsize">
          <el-input v-model="bank_branch" maxlength="30" placeholder="请输入开户支行名称"></el-input>
        </div>
      </div>
      <div>
        <div class="contentleft">开户地区 :</div>
        <div class="contentright smallsize">
          <el-input v-model="bank_prov" placeholder="请输入开户省份" style="width:140px"></el-input>省
          <el-input v-model="bank_city" placeholder="请输入开户市区" style="width:140px"></el-input>市
        </div>
      </div>
      <div>
        <div class="contentleft">银行卡号 :</div>
        <div class="contentright smallsize">
          <el-input v-model="bank_card" maxlength="30" placeholder="请输入开户支行名称"></el-input>
        </div>
      </div>
      <div>
        <div class="contentleft">绑定手机 :</div>
        <div class="contentright smallsize">
          <el-input v-model="bank_band_phone" maxlength="15" placeholder="请输入开户支行名称"></el-input>
        </div>
      </div>
      <div>
        <div class="contentleft">短信验证码 :</div>
        <div class="contentright smallsize">
          <el-input v-model="smsCode" placeholder="请输入验证码"></el-input>
          <el-button @click="checkImgCode" :disabled="iswaitde">{{iswaitde?'等待'+waittime+'s':'发送验证码'}}</el-button>
        </div>
      </div>
      <div class="certifooter">
          <el-button type="primary" style="margin:0 71px 0 215px;width:108px" @click="realnamePeople">保存</el-button>
      </div>
    </div>
    <!-- 企业认证------------------------------------------------------------------------------------------ -->
    <div class="enterCertification" v-show="!ispersonal">
        <div>
        <div class="contentleft">企业名称 :</div>
        <div class="contentright smallsize">
          <el-input v-model="enterprise_name" maxlength="20" placeholder="请输入真实姓名"></el-input>
        </div>
      </div>
      <!-- 身份证---------------------------------------------- -->
      <div>
        <div class="contentleft">统一社会信用代码 :</div>
        <div class="contentright smallsize">
          <el-input v-model="social_credit_code" placeholder="请输入身份证号"></el-input>
        </div>
      </div>
      <div>
        <div class="contentleft">企业营业执照 :</div>
        <div class="contentright smallsize">
          <el-upload
            class="avatar-uploader"
            :action="$store.state.imgcodehost+'/uploadImg'"
            :headers="{'Authorization':'Bearer'+token}"
            :data="{upload_type:'business_license'}"
            name="image"
            :show-file-list="false"
            :on-success="handleAvatarSuccess3"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl3" :src="imageUrl3" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
      </div>
      <!-- 开户银行---------------------------------------------- -->
      <div>
        <div class="contentleft">开户银行 :</div>
        <div class="contentright smallsize">
          <el-input v-model="openbank" maxlength="15" placeholder="请输入开户银行行名称"></el-input>
        </div>
      </div>
      <div>
        <div class="contentleft">开户支行 :</div>
        <div class="contentright smallsize">
          <el-input v-model="bank_branch" maxlength="30" placeholder="请输入开户支行名称"></el-input>
        </div>
      </div>
      <div>
        <div class="contentleft">开户地区 :</div>
        <div class="contentright smallsize">
          <el-input v-model="bank_prov" placeholder="请输入开户省份" style="width:140px"></el-input>省
          <el-input v-model="bank_city" placeholder="请输入开户市区" style="width:140px"></el-input>市
        </div>
      </div>
      <div>
        <div class="contentleft">银行卡号 :</div>
        <div class="contentright smallsize">
          <el-input v-model="bank_card" maxlength="30" placeholder="请输入开户支行名称"></el-input>
        </div>
      </div>
      <div>
        <div class="contentleft">绑定手机 :</div>
        <div class="contentright smallsize">
          <el-input v-model="bank_band_phone" maxlength="15" placeholder="请输入开户支行名称"></el-input>
        </div>
      </div>
      <div>
        <div class="contentleft">短信验证码 :</div>
        <div class="contentright smallsize">
          <el-input v-model="smsCode" placeholder="请输入验证码"></el-input>
          <el-button @click="checkImgCode" :disabled="iswaitde">{{iswaitde?'等待'+waittime+'s':'发送验证码'}}</el-button>
        </div>
      </div>
      <div>
          <el-button type="primary" style="margin:0 71px 0 215px;width:108px" @click="realnameEnterprise">保存</el-button>
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
      username:'',
      ispersonal: true,
      truename: "",   //真实姓名
      imageUrl1: "",
      imageUrl2: "",
      imageUrl3:'',
      IDcard: '',   //身份证号
      bank_branch:'',
      bank_prov:'',
      bank_city:'',
      bank_card:'',
      bank_band_phone:'',
      smsCode:'',
      token:'',
      identity_card_face:'',        //身份证正面地址
      identity_card_back:'',        //身份证反面地址
      business_license:'',
      openbank: '',
      enterprise_name:'',
      social_credit_code:'',
      iswait:false,
      iswaitde:false,
      waittime:60,
    };

  },
  methods: {
     checkImgCode() {
       let code_type = 'realnameEnterprise'
       if(this.ispersonal){code_type='realnamePeople'}
            this.$axios
              .get("/smsVerifCode", {
                params: {
                  phone: this.$store.state.userdata.phone,
                  code_type: code_type
                }
              })
              .then(result => {
                // ========================验证码发送,再次发送需要等待60s===========================
                this.iswaitde = true;
                var mytime = setInterval(() => {
                  if (this.waittime == 0) {
                    this.iswaitde = false;
                    this.waittime = 60;
                    clearInterval(mytime);
                  }
                  this.waittime -= 1;
                }, 1000);
                this.$message({message: '发送成功,请等待',type: 'success'})
                //====================================================================================
              })
              .catch(error => {
                this.$message.error('失败'+err.response.data.message)
              });
    },
    realnamePeople(){       //个人认证按钮
      if(this.truename.search(/^[\u0391-\uFFE5\w]+$/)== -1){return this.$message.error('请输入正确姓名')}
      if(this.IDcard.search(/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/)== -1){return this.$message.error('请输入正确身份证号')}
      if(this.openbank.search(/^[\u4e00-\u9fa5]+$/)== -1){return this.$message.error('请输入正确的开户银行')}
      if(this.bank_branch.search(/^[\u4e00-\u9fa5]+$/)== -1){return this.$message.error('请输入正确的开户支行')}
      if(this.bank_prov.search(/^[\u4e00-\u9fa5]+$/)== -1){return this.$message.error('请输入正确的开户省份')}
      if(this.bank_city.search(/^[\u4e00-\u9fa5]+$/)== -1){return this.$message.error('请输入正确的开户城市')}
      if(this.bank_card.search(/^[0-9]*$/	)== -1){return this.$message.error('请输入正确的银行卡号')}
      if(this.bank_band_phone.search(/^1[3456789]\d{9}$/)== -1){return this.$message.error('绑定手机号输入错误')}
      gettoken().then(val=>{
        this.token = val
        if(this.iswait){return this.$message({message: '请等待...',type: 'warning'})}
        this.iswait = true
        this.$axios.post('/realnamePeople',{
          truename:this.truename,
          identity_card_ID:this.IDcard,
          identity_card_face:this.identity_card_face,
          identity_card_back:this.identity_card_back,
          bank_deposit:this.openbank,
          bank_branch:this.bank_branch,
          bank_prov:this.bank_prov,
          bank_city:this.bank_city,
          bank_card:this.bank_card,
          bank_band_phone:this.bank_band_phone,
          smsCode:this.smsCode
        },{headers:{'Authorization':'Bearer'+val}}).then(res => {
          this.$message({message: '认证成功',type: 'success'})
          this.$router.push('/user/4-5')
        }).catch(err => {
          this.$message.error('失败:'+err.response.data.message)
          this.iswait = false
        })
      })
    },
    realnameEnterprise(){   //企业实名认证
      if(this.enterprise_name.search(/^[\u4e00-\u9fa5]+$/)== -1){return this.$message.error('请输入正确的企业名称')}
      if(this.openbank.search(/^[\u4e00-\u9fa5]+$/)== -1){return this.$message.error('请输入正确的开户银行')}
      if(this.bank_branch.search(/^[\u4e00-\u9fa5]+$/)== -1){return this.$message.error('请输入正确的开户支行')}
      if(this.bank_prov.search(/^[\u4e00-\u9fa5]+$/)== -1){return this.$message.error('请输入正确的开户省份')}
      if(this.bank_city.search(/^[\u4e00-\u9fa5]+$/)== -1){return this.$message.error('请输入正确的开户城市')}
      if(this.bank_card.search(/^[0-9]*$/	)== -1){return this.$message.error('请输入正确的银行卡号')}
      if(this.bank_band_phone.search(/^1[3456789]\d{9}$/)== -1){return this.$message.error('绑定手机号输入错误')}
      gettoken().then(val=>{
        this.token = val
        if(this.iswait){return this.$message({message: '请等待...',type: 'warning'})}
        this.iswait = true
        this.$axios.post('/realnameEnterprise',{
          enterprise_name:this.enterprise_name,
          social_credit_code:this.social_credit_code,
          business_license:this.business_license,
          bank_deposit:this.openbank,
          bank_prov:this.bank_prov,
          bank_city:this.bank_city,
          bank_branch:this.bank_branch,
          bank_card:this.bank_card,
          bank_band_phone:this.bank_band_phone,
          smsCode:this.smsCode
        },{headers:{'Authorization':'Bearer'+val}}).then(res => {
          this.$message({message: res.data.message,type: 'success'})
          this.$router.push('/user/4-5')
        }).catch(err => {
          this.$message.error('失败:'+err.response.data.message)
          this.iswait = false
        })
      })
    },
    handleAvatarSuccess1(res, file) {
      this.imageUrl1 = URL.createObjectURL(file.raw);
      this.identity_card_face = res.data.path
    },
    handleAvatarSuccess2(res,file){
      this.imageUrl2 = URL.createObjectURL(file.raw);
      this.identity_card_back = res.data.path
    },
    handleAvatarSuccess3(res,file){
      this.imageUrl3 = URL.createObjectURL(file.raw);
      this.business_license = res.data.path
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      // if (!isJPG) {
      //   this.$message.error("上传图片只能是 JPG 格式!");
      // }
      // if (!isLt2M) {
      //   this.$message.error("上传图片大小不能超过 2MB!");
      // }
      // return isJPG && isLt2M;
      return true
    }
  },
  mounted() {
    gettoken().then(val => {
      this.token = val
    })
    
  },
};
</script>

<style scoped>
.hand{
  cursor: pointer;
}
.certification {
  background-color: #fff;
}
.certiheader {
  height: 55px;
  border-bottom: 1px #d2d2d2 solid;
}
.certiheader div {
  float: left;
  width: 100px;
  height: 55px;
  margin: 0 30px;
  line-height: 55px;
}
.active {
  border-bottom: 4px #5141ed solid;
}
.userCertification,
.enterCertification{
    padding-bottom: 50px;
}
.userCertification > div,
.enterCertification > div {
  display: flex;
  margin-top: 30px;
}
.userCertification > div .contentleft,
.enterCertification > div .contentleft {
  display: flex;
  width: 196px;
  margin-right: 19px;
  justify-content: flex-end;
}
.el-input{
    width: 320px;
}
/* 上传插件样式============================================ */
.avatar-uploader {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background-color: #f8f8f8;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 224px;
  height: 116px;
  line-height: 116px;
  text-align: center;
}
.avatar {
  width: 224px;
  height: 116px;
  display: block;
}
/* 上传插件样式END==================================== */
.contentright{
  margin-top: -7px;
}
</style>