(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{323:function(e,t,o){},384:function(e,t,o){"use strict";var n=o(323);o.n(n).a},501:function(e,t,o){"use strict";o.r(t);o(7);var n={layout:"login",data:function(){return{loging:!1,iswait:!1,waittime:60,text:"图片验证码错误",yanzhengphoto:"",isuser:!0,phone:"",phonecheck:"",photocheck:"",checked:!0,phototoken:"234662",imgCode:"",password:""}},methods:{isusername:function(){this.isuser=!0},isphone:function(){this.isuser=!1},codeSignIn:function(){var e=this;this.$axios.get("/checkImgCode",{params:{imgToken:this.phototoken,imgCode:this.photocheck}}).then(function(t){"success"==t.data.message&&e.$axios.get("/smsVerifCode",{params:{phone:e.phone,code_type:"codeSignIn"}}).then(function(t){e.iswait=!0;var o=setInterval(function(){0==e.waittime&&(e.iswait=!1,e.waittime=60,clearInterval(o)),e.waittime-=1},1e3);e.$message({message:"验证码发送成功,请等待",type:"success"})}).catch(function(t){e.text=t.response.data.message,e.$message.error("失败:"+t.response.data.message)})}).catch(function(t){e.text=t.response.data.message,e.$message.error("失败:"+t.response.data.message)})},login:function(){var e=this;this.loging=!0,this.isuser?this.$axios.post("/signIn",{phone:this.phone,password:this.password,imgCode:this.photocheck,imgToken:this.phototoken}).then(function(t){var o=t.data;o.data.access_token?(localStorage.setItem("access_token",o.data.access_token),e.$axios.post("/me",{},{headers:{Authorization:"Bearer"+o.data.access_token}}).then(function(t){e.$store.commit("setuserdata",t.data.data),localStorage.setItem("userdata",JSON.stringify(t.data.data)),e.$router.push("/")})):(e.$message.error("失败"),e.shuaxinyanzheng(),e.loging=!1)}).catch(function(t){e.text=t.response.data.message,e.$message.error("失败:"+t.response.data.message),e.shuaxinyanzheng(),e.loging=!1}):this.$axios.post("/codeSignIn",{phone:this.phone,smsCode:this.phonecheck}).then(function(t){var o=t.data;localStorage.setItem("access_token",o.data.access_token),e.$axios.post("/me",{},{headers:{Authorization:"Bearer"+o.data.access_token}}).then(function(t){e.$store.commit("setuserdata",t.data.data),localStorage.setItem("userdata",t.data.data),e.$router.push("/")})}).catch(function(t){e.text=t.response.data.message,e.$message.error("失败:"+t.response.data.message),e.shuaxinyanzheng(),e.loging=!1})},shuaxinyanzheng:function(){var e=this;this.$axios("/getImgCode").then(function(t){e.imgCode=t.data.data.img_code,e.phototoken=t.data.data.img_token})}},mounted:function(){var e=this;window.document.body.style.background="#fff",this.$axios("/getImgCode").then(function(t){e.imgCode=t.data.data.img_code,e.phototoken=t.data.data.img_token})}},c=(o(384),o(2)),component=Object(c.a)(n,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"loginform"},[o("div",{staticClass:"logintop"},[o("div",{class:{blue:e.isuser,bold:e.isuser,hand:!0},staticStyle:{borderRight:"1px solid #ccc"},on:{click:e.isusername}},[e._v("账户密码登陆")]),e._v(" "),o("div",{class:{blue:!e.isuser,bold:!e.isuser,hand:!0},on:{click:e.isphone}},[e._v("动态验证码登陆")])]),e._v(" "),o("div",{staticClass:"logincontent"},[o("el-input",{staticStyle:{marginTop:"30px"},attrs:{maxlength:"13",placeholder:"请输入手机号"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),e._v(" "),e.isuser?o("el-input",{attrs:{maxlength:"16","show-password":"",placeholder:"请输入密码"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}):e._e(),e._v(" "),o("div",{staticClass:"tupianyanzheng"},[o("el-input",{attrs:{maxlength:"6",placeholder:"请输入图片验证码"},model:{value:e.photocheck,callback:function(t){e.photocheck=t},expression:"photocheck"}}),e._v(" "),o("div",{staticClass:"hand",class:[e.isuser?"photocheckd":"phonecheckdp"],on:{click:e.shuaxinyanzheng}},[o("img",{attrs:{src:e.imgCode}})])],1),e._v(" "),e.isuser?e._e():o("el-input",{staticClass:"phonecheckuang",attrs:{maxlength:"6",placeholder:"请输入手机验证码"},model:{value:e.phonecheck,callback:function(t){e.phonecheck=t},expression:"phonecheck"}}),e._v(" "),e.isuser?e._e():o("el-button",{attrs:{disabled:e.iswait},on:{click:e.codeSignIn}},[e._v(e._s(e.iswait?"重新发送"+e.waittime+"s":"发送验证码"))]),e._v(" "),o("div",{staticClass:"zidonglongin"},[o("el-checkbox",{attrs:{size:"mini"},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}}),o("span",{staticClass:"zidongbtn"},[e._v("自动登陆")]),e._v(" "),o("nuxt-link",{staticClass:"fright red cr",staticStyle:{"margin-top":"2px"},attrs:{to:"./login/register",tag:"span"}},[e._v("免费注册")]),e._v(" "),o("nuxt-link",{staticClass:"fr forgot cr",staticStyle:{"margin-top":"2px"},attrs:{to:"./login/forgot_password",tag:"span"}},[e._v("忘记密码")])],1),e._v(" "),o("el-button",{staticClass:"loginbtn",attrs:{disabled:e.loging},on:{click:e.login}},[o("span",{directives:[{name:"show",rawName:"v-show",value:e.loging,expression:"loging"}]},[e._v("正在")]),e._v("登陆 "),o("i",{directives:[{name:"show",rawName:"v-show",value:e.loging,expression:"loging"}],staticClass:"el-icon-loading"})])],1)])])},[],!1,null,"4a5f6f7a",null);t.default=component.exports}}]);