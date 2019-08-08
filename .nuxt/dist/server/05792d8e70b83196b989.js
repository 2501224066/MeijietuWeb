exports.ids=[6],exports.modules={105:function(e,t){},159:function(e,t,o){"use strict";o.r(t);var n=o(105),l=o.n(n);for(var d in n)"default"!==d&&function(e){o.d(t,e,function(){return n[e]})}(d);t.default=l.a},255:function(e,t,o){"use strict";o.r(t);var n={layout:"login",data:()=>({iswait:!1,waittime:60,dialogVisible:!1,steps:0,phone:"",phonecheck:"",imgCode:"",checked:"",phototoken:"",newpassword:"",password_confirmation:"",text:"图片验证码错误",nextToken:"",imgCodesvg:""}),methods:{isusername(){this.isuser=!0},isphone(){this.isuser=!1},login(){this.$axios.post("/checkPhone",{phone:this.phone,smsCode:this.phonecheck,type:2}).then(e=>{this.nextToken=e.data.data.nextToken,this.steps+=1}).catch(e=>{this.$message.error("失败:"+e.response.data.message)})},login2(){this.$axios.post("/resetPass",{phone:this.phone,password:this.newpassword,password_confirmation:this.password_confirmation,nextToken:this.nextToken}).then(e=>{this.steps=3,setTimeout(function(){this.$router.push("/login")},1e3)}).catch(e=>{this.$message.error("失败:"+e.response.data.message)})},shuaxinyanzheng(){this.$axios("/getImgCode").then(e=>{this.imgCodesvg=e.data.data.img_code,this.phototoken=e.data.data.img_token})},login3(){this.$router.push("../login")},checkImgCode(){this.$axios.get("/checkImgCode",{params:{imgToken:this.phototoken,imgCode:this.imgCode}}).then(e=>{"success"==e.data.message&&this.$axios.get("/smsVerifCode",{params:{phone:this.phone,code_type:"checkPhone"}}).then(e=>{this.iswait=!0;var t=setInterval(()=>{0==this.waittime&&(this.iswait=!1,this.waittime=60,clearInterval(t)),this.waittime-=1},1e3)}).catch(e=>{this.text=e.response.data.message,this.dialogVisible=!0})}).catch(e=>{this.text=e.response.data.message,this.dialogVisible=!0})}},mounted(){window.document.body.style.background="#fff",this.$axios("/getImgCode").then(e=>{this.imgCodesvg=e.data.data.img_code,this.phototoken=e.data.data.img_token})},created(){this.phototoken=Math.random()}},l=o(1);var component=Object(l.a)(n,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-steps",{staticClass:"regstep",attrs:{space:200,active:e.steps,"align-center":!0}},[o("el-step",{attrs:{title:"验证身份"}}),e._v(" "),o("el-step",{attrs:{title:"重置密码"}}),e._v(" "),o("el-step",{attrs:{title:"完成"}})],1),e._ssrNode(" "),e._ssrNode('<div class="loginform" data-v-5a3ca986>',"</div>",[e._ssrNode('<div class="logintop" data-v-5a3ca986></div> '),e._ssrNode('<div class="logincontent"'+e._ssrStyle(null,null,{display:0===e.steps?"":"none"})+" data-v-5a3ca986>","</div>",[o("el-input",{attrs:{maxlength:"13",placeholder:"请输入手机号"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),e._ssrNode(" "),e._ssrNode('<div class="tupianyanzheng" data-v-5a3ca986>',"</div>",[o("el-input",{attrs:{maxlength:"6",placeholder:"请输入图片验证码"},model:{value:e.imgCode,callback:function(t){e.imgCode=t},expression:"imgCode"}}),e._ssrNode(' <div class="phonecheckdp hand" data-v-5a3ca986><img'+e._ssrAttr("src",e.imgCodesvg)+" data-v-5a3ca986></div>")],2),e._ssrNode(" "),o("el-input",{staticClass:"phonecheckuang",attrs:{maxlength:"6",placeholder:"请输入手机验证码"},model:{value:e.phonecheck,callback:function(t){e.phonecheck=t},expression:"phonecheck"}}),e._ssrNode(" "),o("el-button",{attrs:{disabled:e.iswait},on:{click:e.checkImgCode}},[e._v(e._s(e.iswait?"等待"+e.waittime+"s":"发送验证码"))]),e._ssrNode(" "),o("el-button",{staticClass:"loginbtn",on:{click:e.login}},[e._v("下一步")])],2),e._ssrNode(" "),e._ssrNode('<div class="logincontent"'+e._ssrStyle(null,null,{display:1===e.steps?"":"none"})+" data-v-5a3ca986>","</div>",[o("el-input",{attrs:{maxlength:"16","show-password":"",placeholder:"新密码"},model:{value:e.newpassword,callback:function(t){e.newpassword=t},expression:"newpassword"}}),e._ssrNode(" "),o("el-input",{attrs:{maxlength:"16","show-password":"",placeholder:"确认密码"},model:{value:e.password_confirmation,callback:function(t){e.password_confirmation=t},expression:"password_confirmation"}}),e._ssrNode(" "),o("el-button",{staticClass:"loginbtn",on:{click:e.login2}},[e._v("确认")])],2),e._ssrNode(" "),e._ssrNode('<div class="registerfinsh"'+e._ssrStyle(null,null,{display:3===e.steps?"":"none"})+" data-v-5a3ca986>","</div>",[e._ssrNode('<h2 class="smallicon" data-v-5a3ca986>您的新密码已设置成功</h2> '),o("el-button",{staticClass:"loginbtn longinf",on:{click:e.login3}},[e._v("重新登陆")])],2)],2),e._ssrNode(" "),o("el-dialog",{attrs:{title:"提示",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[o("span",[e._v(e._s(e.text))]),e._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)])],2)},[],!1,function(e){var t=o(159);t.__inject__&&t.__inject__(e)},"5a3ca986","4bdc6f90");t.default=component.exports}};
//# sourceMappingURL=05792d8e70b83196b989.js.map