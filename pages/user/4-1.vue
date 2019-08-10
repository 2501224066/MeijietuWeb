<template>
  <div class="personal" v-loading="loading">
    <div class="personalData">
      <p class="actived" v-show="!isedit">个人资料</p>
      <p class="actived" v-show="isedit">编辑资料</p>
    </div>
    <div class="userData" v-if="!isedit">
        <!-- 头像,昵称 ,真实姓名,性别 -->
      <div>
        <div class="contentleft">头像:</div>
        <div class="contentright touxiang">
          <div class="yuan">
            <img :src="$store.state.header_img+head_portrait" alt="">
          </div>
        </div>
      </div>
      <div>
        <div class="contentleft">
          <span class="red">*</span>昵称:
        </div>
        <div class="contentright">
          {{nickname}}
        </div>
      </div>
      <div>
        <div class="contentleft">
          <span class="red">*</span>真实姓名:
        </div>
        <div class="contentright smallsize"><span v-if="realname_status == 1">{{$store.state.userdata.truename}}</span><nuxt-link to="/user/4-4" tag="span" class="blue cr" v-if="realname_status == 0">未实名认证</nuxt-link></div>
      </div>
      <div>
        <div class="contentleft">性别:</div>
        <div class="contentright smallsize">{{sex=='2'?'女':'男'}}</div>
      </div>
        <!-- 手机号,邮箱,出生日期 -->
      <div>
        <div class="contentleft">手机号:</div>
        <div class="contentright smallsize">{{phone}}</div><nuxt-link class="xiugai cr" tag="span" to="/user/4-2">修改</nuxt-link>
      </div>
      <div>
        <div class="contentleft">邮箱:</div>
        <div class="contentright smallsize">{{email}}</div>
      </div>
      <div>
        <div class="contentleft">出生日期:</div>
        <div class="contentright smallsize">{{birthday}}</div>
      </div>
      <!-- QQ号码,微信号码 -->
      <div>
        <div class="contentleft">QQ号码:</div>
        <div class="contentright smallsize">{{qqnumber}}</div>
      </div>
      <div>
        <div class="contentleft">微信号:</div>
        <div class="contentright smallsize">{{weixinnumber}}</div>
      </div>
      <div class="footer">
        <el-button type="primary" @click="editData" style="marginLeft:200px">编辑资料</el-button>
      </div>
    </div>
    <div class="personalDataContent" v-if="isedit">
      <!-- 头像,昵称 ,真实姓名,性别 -->
      <div>
        <div class="contentleft">头像:</div>
        <div class="contentright touxiang">
          <div>
            <el-upload
              class="avatar-uploader"
              :action="$store.state.imgcodehost+'/uploadImg'"
              :headers="{'Authorization':'Bearer'+access_token}"
              :data="{upload_type:'head_portrait'}"
              :show-file-list="false"
              name="image"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon">点击上传</i>
            </el-upload>
          </div>
          <div class="uploaderp">支持大小不超过2M的jps,png图片</div>
        </div>
      </div>
      <div>
        <div class="contentleft">
          <span class="red">*</span>昵称:
        </div>
        <div class="contentright">
          <el-input v-model="nickname" placeholder="请输入昵称"></el-input>
        </div>
      </div>
      <div>
        <div class="contentleft">性别:</div>
        <div class="contentright smallsize">
          <template>
            <el-radio v-model="radio" label="1">男</el-radio>
            <el-radio v-model="radio" label="2">女</el-radio>
          </template>
        </div>
      </div>
      <!-- 手机号,邮箱,出生日期 -->
      <div>
        <div class="contentleft">
          <span class="red">*</span>手机号:
        </div>
        <div class="contentright smallsize">{{phone}}</div><nuxt-link class="xiugai" tag="span" to="/user/4-2">修改</nuxt-link>
      </div>
      <div>
        <div class="contentleft">
          <span class="red">*</span>邮箱:
        </div>
        <div class="contentright smallsize">{{email}}</div>
      </div>
      <div>
        <div class="contentleft">出生日期:</div>
        <div class="contentright smallsize">
           <el-date-picker
              v-model="birthday"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
        </div>
      </div>
      <!-- QQ号码,微信号码,验证码 -->
      <div>
        <div class="contentleft">QQ号码:</div>
        <div class="contentright smallsize">
          <el-input v-model="qqnumber" maxlength="15" placeholder="请设置QQ号码"></el-input>
        </div>
      </div>
      <div>
        <div class="contentleft">微信号:</div>
        <div class="contentright smallsize">
          <el-input v-model="weixinnumber" maxlength="20" placeholder="请设置微信号"></el-input>
        </div>
      </div>
      <div>
        <div class="contentleft">
          <span class="red">*</span>验证码:
        </div>
        <div class="contentright smallsize">
          <el-input v-model="checkcode" maxlength="8" placeholder="请输入验证码"></el-input>
        </div>
        <div style="margin:-7px 0 0 10px"><img :src="imgCode" @click="shuaxin" alt="点击刷新"></div>
      </div>
      <div class="footer" style="margin-top:0">
        <el-button type="primary" style="margin:40px 71px 0 250px" @click="overedit">编辑完成</el-button>
        <el-button style="margin:40px 71px 0 0" @click="isedit = false">取消</el-button>
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
      loading:true,
      isedit: false,
      imageUrl: "",
      nickname:'',
      radio: '',
      sex:'',
      email:'',
      birthday: "",
      qqnumber: "",
      phone:'',
      weixinnumber: "",
      checkcode: "",
      imgToken:'',
      imgCode:'',
      access_token: '',
      head_portrait:'',
      realname_status:'',
      isheaderimgOK:true,
    };
  },
  mounted() {
    if(localStorage.getItem('userdata') == ''){
      gettoken().then(val =>{
        this.access_token = val
        this.$axios.post('/me',{},{headers:{'Authorization':'Bearer'+this.access_token}}).then(res=>{
          this.nickname = res.data.data.nickname
          this.birthday = res.data.data.birth
          this.qqnumber = res.data.data.qq_ID
          this.weixinnumber = res.data.data.weixin_ID
          this.email = res.data.data.email
          this.sex = res.data.data.sex
          this.phone = res.data.data.phone
          this.head_portrait = res.data.data.head_portrait
          this.realname_status = res.data.data.realname_status
          this.loading=false
        }).catch(err=>{
        })
      })
    }else{
      let userdatas = JSON.parse(localStorage.getItem('userdata'))
      this.nickname = userdatas.nickname
        this.birthday = userdatas.birth
        this.qqnumber = userdatas.qq_ID
        this.weixinnumber = userdatas.weixin_ID
        this.email = userdatas.email
        this.sex = userdatas.sex
        this.phone = userdatas.phone
        this.head_portrait = userdatas.head_portrait
        this.realname_status = userdatas.realname_status
        this.loading=false
    }
    this.$axios.get('/getImgCode').then(res=>{
      this.imgToken =res.data.data.img_token
      this.imgCode = res.data.data.img_code
    })
  },
  methods: {
    overedit(){  
      if(this.checkcode == ''){return this.$message({message: '验证码未填写',type: 'warning'})}
      if(this.isheaderimgOK==false){return this.$message({message: '头像正在上传,请稍后',type: 'success'})}
      //更改日期格式
      Date.prototype.format = function(fmt) { 
          var o = { 
              "M+" : this.getMonth()+1,                 //月份 
              "d+" : this.getDate(),                    //日 
              "h+" : this.getHours(),                   //小时 
              "m+" : this.getMinutes(),                 //分 
              "s+" : this.getSeconds(),                 //秒 
              "q+" : Math.floor((this.getMonth()+3)/3), //季度 
              "S"  : this.getMilliseconds()             //毫秒 
          }; 
          if(/(y+)/.test(fmt)) {
                  fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
          }
          for(var k in o) {
              if(new RegExp("("+ k +")").test(fmt)){
                  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
              }
          }
          return fmt; 
      }
      var oldTime = (new Date(this.birthday)).getTime()
      this.birthday = new Date(oldTime).format("yyyy-MM-dd")
      //生日格式修改完成
      if(this.qqnumber.search(/^[1-9][0-9]{4,10}$/) ==-1){return this.$message.error('QQ号码格式错误')}
  //========================编辑完成按钮=====================================================
        this.loading = true              
        this.$axios.post('/saveInfo',{
          head_portrait:this.head_portrait,
          nickname:this.nickname,
          sex:this.radio||1,
          birth:this.birthday,
          qq_ID:this.qqnumber,
          weixin_ID:this.weixinnumber,
          imgCode: this.checkcode,
          imgToken: this.imgToken
        },{headers:{'Authorization':'Bearer'+this.access_token}}).then(res =>{
          this.loading = false
          this.isedit = false
          this.$message({message: '修改成功',type: 'success'})
          this.sex = this.radio
        }).catch(err => {
          this.loading = false
          this.$message.error('修改失败:'+err.response.data.message)
        })
    },
    editData() {
      this.isedit = true;
      gettoken().then(val =>{
        this.access_token = val
      })
    },
    handleAvatarSuccess(res, file) {
      this.isheaderimgOK = true
      this.imageUrl = URL.createObjectURL(file.raw);
      this.head_portrait = res.data.path
    },
    beforeAvatarUpload(file){
      this.isheaderimgOK = false
    },
    shuaxin(){
      this.$axios.get('/getImgCode').then(res=>{
        this.imgToken =res.data.data.img_token
        this.imgCode = res.data.data.img_code
      })
    }
  }
};
</script>

<style scoped>
.xiugai{
  color: #5141ED;
  font-size: 14px;
  margin-left: 20px;
}
.el-input{
  width: 226px;
  margin-top: -7px;
}
/* 上传框------------------------------------------ */
.el-icon-plus:before {
  color: transparent;
  margin-left: -10px;
}
.avatar-uploader {
  border: 1px solid rgba(210, 210, 210, 1);
  border-radius: 50%;
  background: rgba(248, 248, 248, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 14px;
  color: #8c939d;
  width: 96px;
  height: 98px;
  line-height: 98px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}
/* 上传框end--------------------------------------------- */
.touxiang {
  position: relative;
  left: 14px;
}
.touxiang div{
  width: 98px;
  height: 98px;
  overflow: hidden;
}
.touxiang div img{
  width: 100%;
  height: 100%;
}
.touxiang .uploaderp {
  width: 116px;
  height: 38px;
  font-size: 12px;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 18px;
  position: absolute;
  left: 130px;
  top: 25px;
}
.personal {
  background: #fff;
  border-radius: 5px;
}
.personalData {
  height: 55px;
  border-bottom: 1px #d2d2d2 solid;
}
.personalData p {
  font-size: 16px;
  display: inline-block;
  line-height: 53px;
  margin-left: 30px;
  border-bottom: 2px #5141ed solid;
}
.personalDataContent,
.userData {
  padding-bottom: 50px;
}
.personalDataContent > div {
  display: flex;
  margin-top: 30px;
}
.userData > div {
  display: flex;
  margin-top: 15px;
}
.personalDataContent div .contentleft,
.userData div .contentleft {
  display: flex;
  width: 196px;
  margin-right: 19px;
  justify-content: flex-end;
  position: relative;
}
.red {
  color: red;
}
.contentright.smallsize {
  font-size: 14px;
}
.el-button--primary {
  background-color: #5141ed;
}
.active{
    border-bottom: 2px #5141ED solid;
    position: relative;
}
.active::before{
    content: '';
    border: 5px transparent solid;
    border-bottom: 5px #5141ED solid;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-3px)
}
.yuan{
  border-radius: 50%
}
</style>
