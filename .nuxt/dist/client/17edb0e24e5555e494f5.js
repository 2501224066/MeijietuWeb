(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{323:function(t,e,o){},380:function(t,e,o){"use strict";var n=o(323);o.n(n).a},477:function(t,e,o){"use strict";o.r(e);o(6);var n={layout:"login",data:function(){return{loging:!1,iswait:!1,waittime:60,dialogVisible:!1,text:"图片验证码错误",yanzhengphoto:"",phone:"",phonecheck:"",photocheck:"",checked:!0,phototoken:"234662",imgCode:"",password:""}},methods:{login:function(){var t=this;this.loging=!0,this.$axios.post("/signIn",{phone:this.phone,password:this.password,imgCode:this.photocheck,imgToken:this.phototoken}).then(function(e){e.data.access_token?(localStorage.setItem("access_token",e.data.access_token),t.$axios.post("/me",{},{headers:{Authorization:"Bearer"+e.data.access_token}}).then(function(e){if(localStorage.setItem("kefu",JSON.stringify(e.data.data)),3==e.data.data.identity)return t.$router.push("/salesman");alert(e.data.data.identity,"result.data.data.identity"),t.loging=!1})):(t.shuaxinyanzheng(),t.loging=!1)}).catch(function(e){t.text=e.response.data.message,t.dialogVisible=!0,t.shuaxinyanzheng(),t.loging=!1})},shuaxinyanzheng:function(){var t=this;this.$axios("/getImgCode").then(function(e){t.imgCode=e.data.data.img_code,t.phototoken=e.data.data.img_token})}},mounted:function(){var t=this;window.document.body.style.background="#fff",this.$axios("/getImgCode").then(function(e){t.imgCode=e.data.data.img_code,t.phototoken=e.data.data.img_token})}},l=(o(380),o(2)),component=Object(l.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"loginform"},[t._m(0),t._v(" "),o("div",{staticClass:"logincontent"},[o("el-input",{staticStyle:{marginTop:"30px"},attrs:{maxlength:"13",placeholder:"请输入手机号"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),t._v(" "),o("el-input",{attrs:{maxlength:"16","show-password":"",placeholder:"请输入密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),o("div",{staticClass:"tupianyanzheng"},[o("el-input",{attrs:{maxlength:"6",placeholder:"请输入图片验证码"},model:{value:t.photocheck,callback:function(e){t.photocheck=e},expression:"photocheck"}}),t._v(" "),o("div",{staticClass:"photocheckd cr",on:{click:t.shuaxinyanzheng}},[o("img",{attrs:{src:t.imgCode}})])],1),t._v(" "),o("div",{staticClass:"zidonglongin"},[o("el-checkbox",{attrs:{size:"mini"},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}}),o("span",{staticClass:"zidongbtn"},[t._v("自动登陆")])],1),t._v(" "),o("el-button",{staticClass:"loginbtn",attrs:{disabled:t.loging},on:{click:t.login}},[o("span",{directives:[{name:"show",rawName:"v-show",value:t.loging,expression:"loging"}]},[t._v("正在")]),t._v("登陆 "),o("i",{directives:[{name:"show",rawName:"v-show",value:t.loging,expression:"loging"}],staticClass:"el-icon-loading"})])],1)]),t._v(" "),o("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[o("span",[t._v(t._s(t.text))]),t._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 定")])],1)])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logintop"},[e("div",{staticClass:"blue bold hand"},[this._v("客服账户登陆")])])}],!1,null,"1ff04e72",null);e.default=component.exports}}]);