exports.ids=[7],exports.modules={101:function(e,t){},157:function(e,t,o){"use strict";o.r(t);var n=o(101),c=o.n(n);for(var r in n)"default"!==r&&function(e){o.d(t,e,function(){return n[e]})}(r);t.default=c.a},242:function(e,t,o){"use strict";o.r(t);o(2);var n={layout:"login",data:()=>({loging:!1,iswait:!1,waittime:60,text:"图片验证码错误",yanzhengphoto:"",isuser:!0,phone:"",phonecheck:"",photocheck:"",checked:!0,phototoken:"234662",imgCode:"",password:""}),methods:{isusername(){this.isuser=!0},isphone(){this.isuser=!1},codeSignIn(){this.$axios.get("/checkImgCode",{params:{imgToken:this.phototoken,imgCode:this.photocheck}}).then(e=>{"success"==e.data.message&&this.$axios.get("/smsVerifCode",{params:{phone:this.phone,code_type:"codeSignIn"}}).then(e=>{this.iswait=!0;var t=setInterval(()=>{0==this.waittime&&(this.iswait=!1,this.waittime=60,clearInterval(t)),this.waittime-=1},1e3);this.$message({message:"验证码发送成功,请等待",type:"success"})}).catch(e=>{this.text=e.response.data.message,this.$message.error("失败:"+e.response.data.message)})}).catch(e=>{this.text=e.response.data.message,this.$message.error("失败:"+e.response.data.message)})},login(){this.loging=!0,this.isuser?this.$axios.post("/signIn",{phone:this.phone,password:this.password,imgCode:this.photocheck,imgToken:this.phototoken}).then(e=>{let t=e.data;console.log(t.data.access_token),t.data.access_token?(localStorage.setItem("access_token",t.data.access_token),this.$axios.post("/me",{},{headers:{Authorization:"Bearer"+t.data.access_token}}).then(e=>{this.$store.commit("setuserdata",e.data.data),localStorage.setItem("userdata",JSON.stringify(e.data.data)),this.$router.push("/")})):(this.$message.error("失败"),this.shuaxinyanzheng(),this.loging=!1)}).catch(e=>{this.text=e.response.data.message,this.$message.error("失败:"+e.response.data.message),this.shuaxinyanzheng(),this.loging=!1}):this.$axios.post("/codeSignIn",{phone:this.phone,smsCode:this.phonecheck}).then(e=>{let t=e.data;localStorage.setItem("access_token",t.data.access_token),this.$axios.post("/me",{},{headers:{Authorization:"Bearer"+t.data.access_token}}).then(e=>{this.$store.commit("setuserdata",e.data.data),localStorage.setItem("userdata",e.data.data),this.$router.push("/")})}).catch(e=>{this.text=e.response.data.message,this.$message.error("失败:"+e.response.data.message),this.shuaxinyanzheng(),this.loging=!1})},shuaxinyanzheng(){this.$axios("/getImgCode").then(e=>{this.imgCode=e.data.data.img_code,this.phototoken=e.data.data.img_token})}},mounted(){window.document.body.style.background="#fff",this.$axios("/getImgCode").then(e=>{this.imgCode=e.data.data.img_code,this.phototoken=e.data.data.img_token})}},c=o(1);var component=Object(c.a)(n,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._ssrNode('<div class="loginform" data-v-a980ac72>',"</div>",[e._ssrNode('<div class="logintop" data-v-a980ac72><div'+e._ssrClass(null,{blue:e.isuser,bold:e.isuser,hand:!0})+' style="borderRight:1px solid #ccc" data-v-a980ac72>账户密码登陆</div> <div'+e._ssrClass(null,{blue:!e.isuser,bold:!e.isuser,hand:!0})+" data-v-a980ac72>动态验证码登陆</div></div> "),e._ssrNode('<div class="logincontent" data-v-a980ac72>',"</div>",[o("el-input",{staticStyle:{marginTop:"30px"},attrs:{maxlength:"13",placeholder:"请输入手机号"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),e._ssrNode(" "),e.isuser?o("el-input",{attrs:{maxlength:"16","show-password":"",placeholder:"请输入密码"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}):e._e(),e._ssrNode(" "),e._ssrNode('<div class="tupianyanzheng" data-v-a980ac72>',"</div>",[o("el-input",{attrs:{maxlength:"6",placeholder:"请输入图片验证码"},model:{value:e.photocheck,callback:function(t){e.photocheck=t},expression:"photocheck"}}),e._ssrNode(" <div"+e._ssrClass("hand",[e.isuser?"photocheckd":"phonecheckdp"])+" data-v-a980ac72><img"+e._ssrAttr("src",e.imgCode)+" data-v-a980ac72></div>")],2),e._ssrNode(" "),e.isuser?e._e():o("el-input",{staticClass:"phonecheckuang",attrs:{maxlength:"6",placeholder:"请输入手机验证码"},model:{value:e.phonecheck,callback:function(t){e.phonecheck=t},expression:"phonecheck"}}),e._ssrNode(" "),e.isuser?e._e():o("el-button",{attrs:{disabled:e.iswait},on:{click:e.codeSignIn}},[e._v(e._s(e.iswait?"重新发送"+e.waittime+"s":"发送验证码"))]),e._ssrNode(" "),e._ssrNode('<div class="zidonglongin" data-v-a980ac72>',"</div>",[o("el-checkbox",{attrs:{size:"mini"},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}}),e._ssrNode('<span class="zidongbtn" data-v-a980ac72>自动登陆</span> '),o("nuxt-link",{staticClass:"fright red cr",staticStyle:{"margin-top":"2px"},attrs:{to:"./login/register",tag:"span"}},[e._v("免费注册")]),e._ssrNode(" "),o("nuxt-link",{staticClass:"fr forgot cr",staticStyle:{"margin-top":"2px"},attrs:{to:"./login/forgot_password",tag:"span"}},[e._v("忘记密码")])],2),e._ssrNode(" "),o("el-button",{staticClass:"loginbtn",attrs:{disabled:e.loging},on:{click:e.login}},[o("span",{directives:[{name:"show",rawName:"v-show",value:e.loging,expression:"loging"}]},[e._v("正在")]),e._v("登陆 "),o("i",{directives:[{name:"show",rawName:"v-show",value:e.loging,expression:"loging"}],staticClass:"el-icon-loading"})])],2)],2)])},[],!1,function(e){var t=o(157);t.__inject__&&t.__inject__(e)},"a980ac72","f5e5c02a");t.default=component.exports}};
//# sourceMappingURL=fc825589e982eef0d5f6.js.map