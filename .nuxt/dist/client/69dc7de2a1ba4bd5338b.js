(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{356:function(t,e,n){},413:function(t,e,n){"use strict";var r=n(356);n.n(r).a},441:function(t,e,n){"use strict";n.r(e);n(173),n(174),n(120);var r=n(6),c={layout:"user",data:function(){return{loading:!0,isedit:!1,imageUrl:"",nickname:"",radio:"",sex:"",email:"",birthday:"",qqnumber:"",phone:"",weixinnumber:"",checkcode:"",imgToken:"",imgCode:"",access_token:"",head_portrait:"",realname_status:"",isheaderimgOK:!0}},mounted:function(){var t=this;if(""==localStorage.getItem("userdata"))Object(r.a)().then(function(e){t.access_token=e,t.$axios.post("/me",{},{headers:{Authorization:"Bearer"+t.access_token}}).then(function(e){t.nickname=e.data.data.nickname,t.birthday=e.data.data.birth,t.qqnumber=e.data.data.qq_ID,t.weixinnumber=e.data.data.weixin_ID,t.email=e.data.data.email,t.sex=e.data.data.sex,t.phone=e.data.data.phone,t.head_portrait=e.data.data.head_portrait,t.realname_status=e.data.data.realname_status,t.loading=!1}).catch(function(t){})});else{var e=JSON.parse(localStorage.getItem("userdata"));this.nickname=e.nickname,this.birthday=e.birth,this.qqnumber=e.qq_ID,this.weixinnumber=e.weixin_ID,this.email=e.email,this.sex=e.sex,this.phone=e.phone,this.head_portrait=e.head_portrait,this.realname_status=e.realname_status,this.loading=!1}this.$axios.get("/getImgCode").then(function(e){t.imgToken=e.data.data.img_token,t.imgCode=e.data.data.img_code})},methods:{overedit:function(){var t=this;if(""==this.checkcode)return this.$message({message:"验证码未填写",type:"warning"});if(0==this.isheaderimgOK)return this.$message({message:"头像正在上传,请稍后",type:"success"});Date.prototype.format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var n in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[n]:("00"+e[n]).substr((""+e[n]).length)));return t};var e=new Date(this.birthday).getTime();if(this.birthday=new Date(e).format("yyyy-MM-dd"),-1==this.qqnumber.search(/^[1-9][0-9]{4,10}$/))return this.$message.error("QQ号码格式错误");this.loading=!0,this.$axios.post("/saveInfo",{head_portrait:this.head_portrait,nickname:this.nickname,sex:this.radio||1,birth:this.birthday,qq_ID:this.qqnumber,weixin_ID:this.weixinnumber,imgCode:this.checkcode,imgToken:this.imgToken},{headers:{Authorization:"Bearer"+this.access_token}}).then(function(e){t.loading=!1,t.isedit=!1,t.$message({message:"修改成功",type:"success"}),t.sex=t.radio}).catch(function(e){t.loading=!1,t.$message.error("修改失败:"+e.response.data.message)})},editData:function(){var t=this;this.isedit=!0,Object(r.a)().then(function(e){t.access_token=e})},handleAvatarSuccess:function(t,e){this.isheaderimgOK=!0,this.imageUrl=URL.createObjectURL(e.raw),this.head_portrait=t.data.path},beforeAvatarUpload:function(t){this.isheaderimgOK=!1},shuaxin:function(){var t=this;this.$axios.get("/getImgCode").then(function(e){t.imgToken=e.data.data.img_token,t.imgCode=e.data.data.img_code})}}},l=(n(413),n(2)),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"personal"},[n("div",{staticClass:"personalData"},[n("p",{directives:[{name:"show",rawName:"v-show",value:!t.isedit,expression:"!isedit"}],staticClass:"actived"},[t._v("个人资料")]),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.isedit,expression:"isedit"}],staticClass:"actived"},[t._v("编辑资料")])]),t._v(" "),t.isedit?t._e():n("div",{staticClass:"userData"},[n("div",[n("div",{staticClass:"contentleft"},[t._v("头像:")]),t._v(" "),n("div",{staticClass:"contentright touxiang"},[n("div",{staticClass:"yuan"},[n("img",{attrs:{src:t.$store.state.header_img+t.head_portrait,alt:""}})])])]),t._v(" "),n("div",[t._m(0),t._v(" "),n("div",{staticClass:"contentright"},[t._v("\n        "+t._s(t.nickname)+"\n      ")])]),t._v(" "),n("div",[t._m(1),t._v(" "),n("div",{staticClass:"contentright smallsize"},[1==t.realname_status?n("span",[t._v(t._s(t.$store.state.userdata.truename))]):t._e(),0==t.realname_status?n("nuxt-link",{staticClass:"blue cr",attrs:{to:"/user/4-4",tag:"span"}},[t._v("未实名认证")]):t._e()],1)]),t._v(" "),n("div",[n("div",{staticClass:"contentleft"},[t._v("性别:")]),t._v(" "),n("div",{staticClass:"contentright smallsize"},[t._v(t._s("2"==t.sex?"女":"男"))])]),t._v(" "),n("div",[n("div",{staticClass:"contentleft"},[t._v("手机号:")]),t._v(" "),n("div",{staticClass:"contentright smallsize"},[t._v(t._s(t.phone))]),n("nuxt-link",{staticClass:"xiugai cr",attrs:{tag:"span",to:"/user/4-2"}},[t._v("修改")])],1),t._v(" "),n("div",[n("div",{staticClass:"contentleft"},[t._v("邮箱:")]),t._v(" "),n("div",{staticClass:"contentright smallsize"},[t._v(t._s(t.email))])]),t._v(" "),n("div",[n("div",{staticClass:"contentleft"},[t._v("出生日期:")]),t._v(" "),n("div",{staticClass:"contentright smallsize"},[t._v(t._s(t.birthday))])]),t._v(" "),n("div",[n("div",{staticClass:"contentleft"},[t._v("QQ号码:")]),t._v(" "),n("div",{staticClass:"contentright smallsize"},[t._v(t._s(t.qqnumber))])]),t._v(" "),n("div",[n("div",{staticClass:"contentleft"},[t._v("微信号:")]),t._v(" "),n("div",{staticClass:"contentright smallsize"},[t._v(t._s(t.weixinnumber))])]),t._v(" "),n("div",{staticClass:"footer"},[n("el-button",{staticStyle:{marginLeft:"200px"},attrs:{type:"primary"},on:{click:t.editData}},[t._v("编辑资料")])],1)]),t._v(" "),t.isedit?n("div",{staticClass:"personalDataContent"},[n("div",[n("div",{staticClass:"contentleft"},[t._v("头像:")]),t._v(" "),n("div",{staticClass:"contentright touxiang"},[n("div",[n("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.$store.state.imgcodehost+"/uploadImg",headers:{Authorization:"Bearer"+t.access_token},data:{upload_type:"head_portrait"},"show-file-list":!1,name:"image","on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.imageUrl?n("img",{staticClass:"avatar",attrs:{src:t.imageUrl}}):n("i",{staticClass:"el-icon-plus avatar-uploader-icon"},[t._v("点击上传")])])],1),t._v(" "),n("div",{staticClass:"uploaderp"},[t._v("支持大小不超过2M的jps,png图片")])])]),t._v(" "),n("div",[t._m(2),t._v(" "),n("div",{staticClass:"contentright"},[n("el-input",{attrs:{placeholder:"请输入昵称"},model:{value:t.nickname,callback:function(e){t.nickname=e},expression:"nickname"}})],1)]),t._v(" "),n("div",[n("div",{staticClass:"contentleft"},[t._v("性别:")]),t._v(" "),n("div",{staticClass:"contentright smallsize"},[[n("el-radio",{attrs:{label:"1"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("男")]),t._v(" "),n("el-radio",{attrs:{label:"2"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("女")])]],2)]),t._v(" "),n("div",[t._m(3),t._v(" "),n("div",{staticClass:"contentright smallsize"},[t._v(t._s(t.phone))]),n("nuxt-link",{staticClass:"xiugai",attrs:{tag:"span",to:"/user/4-2"}},[t._v("修改")])],1),t._v(" "),n("div",[t._m(4),t._v(" "),n("div",{staticClass:"contentright smallsize"},[t._v(t._s(t.email))])]),t._v(" "),n("div",[n("div",{staticClass:"contentleft"},[t._v("出生日期:")]),t._v(" "),n("div",{staticClass:"contentright smallsize"},[n("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:t.birthday,callback:function(e){t.birthday=e},expression:"birthday"}})],1)]),t._v(" "),n("div",[n("div",{staticClass:"contentleft"},[t._v("QQ号码:")]),t._v(" "),n("div",{staticClass:"contentright smallsize"},[n("el-input",{attrs:{maxlength:"15",placeholder:"请设置QQ号码"},model:{value:t.qqnumber,callback:function(e){t.qqnumber=e},expression:"qqnumber"}})],1)]),t._v(" "),n("div",[n("div",{staticClass:"contentleft"},[t._v("微信号:")]),t._v(" "),n("div",{staticClass:"contentright smallsize"},[n("el-input",{attrs:{maxlength:"20",placeholder:"请设置微信号"},model:{value:t.weixinnumber,callback:function(e){t.weixinnumber=e},expression:"weixinnumber"}})],1)]),t._v(" "),n("div",[t._m(5),t._v(" "),n("div",{staticClass:"contentright smallsize"},[n("el-input",{attrs:{maxlength:"8",placeholder:"请输入验证码"},model:{value:t.checkcode,callback:function(e){t.checkcode=e},expression:"checkcode"}})],1),t._v(" "),n("div",{staticStyle:{margin:"-7px 0 0 10px"}},[n("img",{attrs:{src:t.imgCode,alt:"点击刷新"},on:{click:t.shuaxin}})])]),t._v(" "),n("div",{staticClass:"footer",staticStyle:{"margin-top":"0"}},[n("el-button",{staticStyle:{margin:"40px 71px 0 250px"},attrs:{type:"primary"},on:{click:t.overedit}},[t._v("编辑完成")]),t._v(" "),n("el-button",{staticStyle:{margin:"40px 71px 0 0"},on:{click:function(e){t.isedit=!1}}},[t._v("取消")])],1)]):t._e()])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contentleft"},[e("span",{staticClass:"red"},[this._v("*")]),this._v("昵称:\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contentleft"},[e("span",{staticClass:"red"},[this._v("*")]),this._v("真实姓名:\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contentleft"},[e("span",{staticClass:"red"},[this._v("*")]),this._v("昵称:\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contentleft"},[e("span",{staticClass:"red"},[this._v("*")]),this._v("手机号:\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contentleft"},[e("span",{staticClass:"red"},[this._v("*")]),this._v("邮箱:\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contentleft"},[e("span",{staticClass:"red"},[this._v("*")]),this._v("验证码:\n      ")])}],!1,null,"5d3dac8c",null);e.default=component.exports}}]);