(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{329:function(t,e,o){},388:function(t,e,o){"use strict";var n=o(329);o.n(n).a},456:function(t,e,o){"use strict";o.r(e);var n={layout:"login",data:function(){return{iswait:!1,waittime:60,dialogVisible:!1,steps:0,phone:"",phonecheck:"",imgCode:"",checked:"",phototoken:"",newpassword:"",password_confirmation:"",text:"图片验证码错误",nextToken:"",imgCodesvg:""}},methods:{isusername:function(){this.isuser=!0},isphone:function(){this.isuser=!1},login:function(){var t=this;this.$axios.post("/checkPhone",{phone:this.phone,smsCode:this.phonecheck,type:2}).then(function(e){t.nextToken=e.data.data.nextToken,t.steps+=1}).catch(function(e){t.$message.error("失败:"+e.response.data.message)})},login2:function(){var t=this;this.$axios.post("/resetPass",{phone:this.phone,password:this.newpassword,password_confirmation:this.password_confirmation,nextToken:this.nextToken}).then(function(e){t.steps=3,setTimeout(function(){this.$router.push("/login")},1e3)}).catch(function(e){t.$message.error("失败:"+e.response.data.message)})},shuaxinyanzheng:function(){var t=this;this.$axios("/getImgCode").then(function(e){t.imgCodesvg=e.data.data.img_code,t.phototoken=e.data.data.img_token})},login3:function(){this.$router.push("../login")},checkImgCode:function(){var t=this;this.$axios.get("/checkImgCode",{params:{imgToken:this.phototoken,imgCode:this.imgCode}}).then(function(e){"success"==e.data.message&&t.$axios.get("/smsVerifCode",{params:{phone:t.phone,code_type:"checkPhone"}}).then(function(e){t.iswait=!0;var o=setInterval(function(){0==t.waittime&&(t.iswait=!1,t.waittime=60,clearInterval(o)),t.waittime-=1},1e3)}).catch(function(e){t.text=e.response.data.message,t.dialogVisible=!0})}).catch(function(e){t.text=e.response.data.message,t.dialogVisible=!0})}},mounted:function(){var t=this;window.document.body.style.background="#fff",this.$axios("/getImgCode").then(function(e){t.imgCodesvg=e.data.data.img_code,t.phototoken=e.data.data.img_token})},created:function(){this.phototoken=Math.random()}},c=(o(388),o(2)),component=Object(c.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-steps",{staticClass:"regstep",attrs:{space:200,active:t.steps,"align-center":!0}},[o("el-step",{attrs:{title:"验证身份"}}),t._v(" "),o("el-step",{attrs:{title:"重置密码"}}),t._v(" "),o("el-step",{attrs:{title:"完成"}})],1),t._v(" "),o("div",{staticClass:"loginform"},[o("div",{staticClass:"logintop"}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:0===t.steps,expression:"steps===0"}],staticClass:"logincontent"},[o("el-input",{attrs:{maxlength:"13",placeholder:"请输入手机号"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),t._v(" "),o("div",{staticClass:"tupianyanzheng"},[o("el-input",{attrs:{maxlength:"6",placeholder:"请输入图片验证码"},model:{value:t.imgCode,callback:function(e){t.imgCode=e},expression:"imgCode"}}),t._v(" "),o("div",{staticClass:"phonecheckdp hand",on:{click:t.shuaxinyanzheng}},[o("img",{attrs:{src:t.imgCodesvg}})])],1),t._v(" "),o("el-input",{staticClass:"phonecheckuang",attrs:{maxlength:"6",placeholder:"请输入手机验证码"},model:{value:t.phonecheck,callback:function(e){t.phonecheck=e},expression:"phonecheck"}}),t._v(" "),o("el-button",{attrs:{disabled:t.iswait},on:{click:t.checkImgCode}},[t._v(t._s(t.iswait?"等待"+t.waittime+"s":"发送验证码"))]),t._v(" "),o("el-button",{staticClass:"loginbtn",on:{click:t.login}},[t._v("下一步")])],1),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:1===t.steps,expression:"steps===1"}],staticClass:"logincontent"},[o("el-input",{attrs:{maxlength:"16","show-password":"",placeholder:"新密码"},model:{value:t.newpassword,callback:function(e){t.newpassword=e},expression:"newpassword"}}),t._v(" "),o("el-input",{attrs:{maxlength:"16","show-password":"",placeholder:"确认密码"},model:{value:t.password_confirmation,callback:function(e){t.password_confirmation=e},expression:"password_confirmation"}}),t._v(" "),o("el-button",{staticClass:"loginbtn",on:{click:t.login2}},[t._v("确认")])],1),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:3===t.steps,expression:"steps === 3"}],staticClass:"registerfinsh"},[o("h2",{staticClass:"smallicon"},[t._v("您的新密码已设置成功")]),t._v(" "),o("el-button",{staticClass:"loginbtn longinf",on:{click:t.login3}},[t._v("重新登陆")])],1)]),t._v(" "),o("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[o("span",[t._v(t._s(t.text))]),t._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 定")])],1)])],1)},[],!1,null,"5a3ca986",null);e.default=component.exports}}]);