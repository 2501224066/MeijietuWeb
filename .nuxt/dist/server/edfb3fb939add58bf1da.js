exports.ids=[12],exports.modules={108:function(t,e){},171:function(t,e,d){"use strict";d.r(e);var o=d(108),c=d.n(o);for(var r in o)"default"!==r&&function(t){d.d(e,t,function(){return o[t]})}(r);e.default=c.a},254:function(t,e,d){"use strict";d.r(e);var o={layout:"phone",data:()=>({status:1,phone:"",imgCode:"",password:"",imgma:"",imgToken:"",iserr:!1,errmessage:""}),methods:{login(){this.iserr=!1,this.$axios.post("/signIn",{phone:this.phone,password:this.password,imgCode:this.imgma,imgToken:this.imgToken}).then(t=>{localStorage.setItem("access_token",t.data.data.access_token),console.log(t.data.data.access_token),this.$axios.post("/me",{},{headers:{Authorization:"Bearer"+t.data.data.access_token}}).then(t=>{localStorage.setItem("userdata",JSON.stringify(t.data.data))}),this.$router.push("/m/my")}).catch(t=>{this.errmessage=t.response.data.message,this.iserr=!0})},shuaxin(){this.$axios("/getImgCode").then(t=>{this.imgCode=t.data.data.img_code,this.imgToken=t.data.data.img_token})},forgot(){this.status=2},zhuce(){this.status=3}},mounted(){this.$axios("/getImgCode").then(t=>{this.imgCode=t.data.data.img_code,this.imgToken=t.data.data.img_token})}},c=d(1);var component=Object(c.a)(o,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"login_all"},[t._ssrNode(1==t.status?'<div data-v-4867d01c><div class="mheader" data-v-4867d01c>\n            登录\n        </div> <div class="logo_l" data-v-4867d01c><img src="/m/logo_m01.png" alt="媒介兔" data-v-4867d01c></div> <div class="input_l" data-v-4867d01c><div data-v-4867d01c><input type="text" placeholder="请输入手机号"'+t._ssrAttr("value",t.phone)+' data-v-4867d01c></div> <div data-v-4867d01c><input type="password" placeholder="请输入密码"'+t._ssrAttr("value",t.password)+' data-v-4867d01c></div> <div class="imginput" data-v-4867d01c><input type="text" placeholder="图形验证码"'+t._ssrAttr("value",t.imgma)+" data-v-4867d01c> <img"+t._ssrAttr("src",t.imgCode)+' alt="验证码" class="imgCode" data-v-4867d01c> '+(t.iserr?"<p data-v-4867d01c>"+t._ssrEscape("失败:"+t._s(t.errmessage))+"</p>":"\x3c!----\x3e")+'</div></div> <div class="btn_l" data-v-4867d01c>\n            登录\n        </div> <div class="footer_login" data-v-4867d01c><span class="forgot" data-v-4867d01c>忘记密码?</span> <span class="zhuce" data-v-4867d01c>注册账号</span></div></div>':"\x3c!----\x3e")])},[],!1,function(t){var e=d(171);e.__inject__&&e.__inject__(t)},"4867d01c","afa8cdf4");e.default=component.exports}};
//# sourceMappingURL=edfb3fb939add58bf1da.js.map