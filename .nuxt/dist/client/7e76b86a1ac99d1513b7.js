(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{331:function(t,e,n){},394:function(t,e,n){"use strict";var o=n(331);n.n(o).a},494:function(t,e,n){"use strict";n.r(e);var o={layout:"login",data:function(){return{radio:"",iswait:!1,waittime:60,dialogVisible:!1,steps:0,phone:"",phonecheck:"",imgCode:"",checked:!0,phototoken:"",password:"",nickname:"",email:"",password_confirmation:"",text:"图片验证码错误",nextToken:"",imgCodesvg:"",waitfinsh:!1}},methods:{isusername:function(){this.isuser=!0},isphone:function(){this.isuser=!1},checkImgCode:function(){var t=this;this.$axios.get("/checkImgCode",{params:{imgToken:this.phototoken,imgCode:this.imgCode}}).then(function(e){t.$axios.get("/smsVerifCode",{params:{phone:t.phone,code_type:"checkPhone"}}).then(function(e){t.iswait=!0;var n=setInterval(function(){0==t.waittime&&(t.iswait=!1,t.waittime=60,clearInterval(n)),t.waittime-=1},1e3)}).catch(function(e){t.text=e.response.data.message,t.dialogVisible=!0})}).catch(function(e){t.text=e.response.data.message,t.dialogVisible=!0})},login:function(){var t=this;1==this.checked?this.$axios.post("/checkPhone",{phone:this.phone,smsCode:this.phonecheck,type:1}).then(function(e){t.nextToken=e.data.data.nextToken,t.steps=1}).catch(function(e){t.text=e.response.data.message,t.dialogVisible=!0}):(this.text=err.response.data.message,this.dialogVisible=!0)},login2:function(){var t=this;if(!0===this.waitfinsh)return this.$message({message:"正在注册,请稍后",type:"success"});this.waitfinsh=!0,this.$axios.post("/register",{email:this.email,password:this.password,password_confirmation:this.password_confirmation,nickname:this.nickname,nextToken:this.nextToken,phone:this.phone,identity:this.radio,salesman_id:"",agent_domain:"http://"+document.domain}).then(function(e){t.$message({message:"注册成功",type:"success"}),setTimeout(function(){t.$router.push("/login")},1e3)}).catch(function(e){t.text=e.response.data.message,t.dialogVisible=!0,t.waitfinsh=!1})},shuaxinyanzheng:function(){var t=this;this.$axios("/getImgCode").then(function(e){t.imgCodesvg=e.data.data.img_code,t.phototoken=e.data.data.img_token})},login3:function(){""!==this.radio?this.steps=3:this.$message({message:"请选择身份",type:"warning"})}},mounted:function(){var t=this;window.document.body.style.background="#fff",this.$axios("/getImgCode").then(function(e){t.imgCodesvg=e.data.data.img_code,t.phototoken=e.data.data.img_token})}},l=(n(394),n(2)),component=Object(l.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-steps",{staticClass:"regstep",attrs:{space:200,active:t.steps,"align-center":!0}},[n("el-step",{attrs:{title:"验证手机号"}}),t._v(" "),n("el-step",{attrs:{title:"选择角色"}}),t._v(" "),n("el-step",{attrs:{title:"填写账号信息"}})],1),t._v(" "),n("div",{staticClass:"loginform"},[n("div",{staticClass:"logintop"}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:0===t.steps,expression:"steps===0"}],staticClass:"logincontent"},[n("el-input",{attrs:{maxlength:"13",placeholder:"请输入手机号"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),t._v(" "),n("div",{staticClass:"tupianyanzheng"},[n("el-input",{attrs:{maxlength:"6",placeholder:"请输入图片验证码"},model:{value:t.imgCode,callback:function(e){t.imgCode=e},expression:"imgCode"}}),t._v(" "),n("div",{staticClass:"phonecheckdp",on:{click:t.shuaxinyanzheng}},[n("img",{attrs:{src:t.imgCodesvg}})])],1),t._v(" "),n("el-input",{staticClass:"phonecheckuang",attrs:{maxlength:"6",placeholder:"请输入手机验证码"},model:{value:t.phonecheck,callback:function(e){t.phonecheck=e},expression:"phonecheck"}}),t._v(" "),n("el-button",{staticStyle:{width:"120px"},attrs:{disabled:t.iswait},on:{click:t.checkImgCode}},[t._v(t._s(t.iswait?"重新发送"+t.waittime+"s":"发送验证码"))]),t._v(" "),n("div",{staticClass:"zidonglongin"},[n("el-checkbox",{attrs:{size:"mini"},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}}),t._v(" "),n("span",{staticClass:"zidongbtn"},[t._v("我已阅读并接受")]),t._v(" "),n("nuxt-link",{attrs:{to:"/problem",target:"_blank"},domProps:{textContent:t._s("《媒介兔服务条款》")}}),t._v(" "),n("nuxt-link",{attrs:{to:"/problem",target:"_blank"},domProps:{textContent:t._s("《隐私条款》")}})],1),t._v(" "),n("el-button",{staticClass:"loginbtn",on:{click:t.login}},[t._v("下一步")])],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:3===t.steps,expression:"steps===3"}],staticClass:"logincontent"},[n("el-input",{attrs:{maxlength:"10",placeholder:"请输入你的昵称"},model:{value:t.nickname,callback:function(e){t.nickname=e},expression:"nickname"}}),t._v(" "),n("el-input",{attrs:{placeholder:"请输入你的邮箱"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("el-input",{attrs:{maxlength:"16","show-password":"",placeholder:"请设置登陆密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),n("el-input",{attrs:{maxlength:"16","show-password":"",placeholder:"再次输入登陆密码"},model:{value:t.password_confirmation,callback:function(e){t.password_confirmation=e},expression:"password_confirmation"}}),t._v(" "),n("el-button",{staticClass:"loginbtn",on:{click:t.login2}},[t._v("确认")])],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:1===t.steps,expression:"steps === 1"}],staticClass:"registerfinsh"},[n("div",{staticClass:"regisleft"},[n("img",{attrs:{src:"/usericon/man.png"}}),t._v(" "),n("div",[n("el-radio",{attrs:{label:"1"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("广告主")]),t._v(" "),n("p",[t._v("需要投放广告的用户")])],1)]),t._v(" "),n("div",{staticClass:"regisright"},[n("img",{attrs:{src:"/usericon/women.png"}}),t._v(" "),n("div",[n("el-radio",{attrs:{label:"2"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("媒体主")]),t._v(" "),n("p",[t._v("拥有流量的用户发布广告")])],1)]),t._v(" "),n("p",{staticClass:"caretext"},[t._v("选择角色完成后使用平台功能")]),t._v(" "),n("el-button",{staticClass:"loginbtn longinf",on:{click:t.login3}},[t._v("下一步")])],1)]),t._v(" "),n("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("span",[t._v(t._s(t.text))]),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 定")])],1)])],1)},[],!1,null,"8eac5050",null);e.default=component.exports}}]);