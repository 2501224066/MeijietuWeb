(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{349:function(t,e,n){},408:function(t,e,n){"use strict";var c=n(349);n.n(c).a},447:function(t,e,n){"use strict";n.r(e);var c=n(6),o={layout:"user",data:function(){return{dialogVisible:!1,loading:!0,currentPage:1,btnwait:!1,token:"",indent_num:"",indentdata:"",indentclass:1,indentlist:[],indentstatus0:[],indentstatus1:[],indentstatus4:[],indentstatus7:[],indentstatus8:[],indentstatus10:[],cancel_cause:"",cancel_status:"",cancel_indent:"",gengxin_status:1}},mounted:function(){var t=this;Object(c.a)().then(function(e){t.token=e}),setInterval(function(){Object(c.a)().then(function(e){t.token=e})},36e4),this.$axios.post("/indentBelongSelf",{},{headers:{Authorization:"Bearer"+localStorage.getItem("access_token")}}).then(function(e){t.indentdata=e.data.data,t.indentlist=e.data.data.data,t.indentlist.forEach(function(e){0==e.status?t.indentstatus0.push(e):1==e.status?t.indentstatus1.push(e):4==e.status?t.indentstatus4.push(e):7==e.status?t.indentstatus7.push(e):8==e.status||9==e.status?t.indentstatus8.push(e):t.indentstatus10.push(e)}),t.loading=!1}).catch(function(e){t.loading=!1})},methods:{gengxin:function(){var t=this;this.$axios.post("/indentBelongSelf",{},{headers:{Authorization:"Bearer"+localStorage.getItem("access_token")}}).then(function(e){t.indentdata=e.data.data,t.indentlist=e.data.data.data,t.indentlist.forEach(function(e){0==e.status?t.indentstatus0.push(e):1==e.status?t.indentstatus1.push(e):4==e.status?t.indentstatus4.push(e):7==e.status?t.indentstatus7.push(e):8==e.status&&9==e.status?t.indentstatus8.push(e):t.indentstatus10.push(e)}),t.loading=!1}).catch(function(e){t.loading=!1})},handleCurrentChange:function(a){this.loading=!0,this.gengxin(a)},kefu:function(){window.open("https://wpa.qq.com/msgrd?v=3&uin=28458999&site=qq&menu=yes")},handleAvatarSuccess:function(t,e){var n=this;this.$axios.post("/addAchievementsFile",{indent_num:this.indent_num,achievements_file:t.data.path},{headers:{Authorization:"Bearer"+this.token}}).then(function(t){n.loading=!1,n.$message({message:"上传成功",type:"success"})}).catch(function(t){n.loading=!1,n.$message.error("上传失败:"+t.response.data.message)})},beforeAvatarUpload:function(){this.loading=!0},upload:function(t){this.indent_num=t},upachievements:function(a){if(""==a)return this.$message({message:"未上传",type:"warning"});window.open(this.$store.state.header_img+a)},oderCancel:function(a,b){if(this.btnwait)return this.$message({message:"操作太频繁,请稍后",type:"warning"});this.dialogVisible=!0,this.cancel_status=b,this.cancel_indent=a},istrueCancal:function(){var t=this;return this.btnwait?this.$message({message:"操作太频繁,请稍后",type:"warning"}):(this.btnwait=!0,setTimeout(function(){t.btnwait=!1},3e3),this.dialogVisible=!1,this.loading=!0,2!==this.$store.state.userdata.identity?console.log("用户身份错误"+this.$store.state.userdata.identity):void(1==this.cancel_status?this.$axios.post("/acceptIndentBeforeCancel",{indent_num:this.cancel_indent,cancel_cause:this.cancel_cause},{headers:{Authorization:"Bearer"+this.token}}).then(function(e){t.$message({message:"取消成功",type:"success"}),t.gengxin_status+=1,t.loading=!1}).catch(function(e){t.$message.error("失败:"+e.response.data.message),t.loading=!1}):4==this.cancel_status?this.$axios.post("/inTransactionSellerCancel",{indent_num:this.cancel_indent,cancel_cause:this.cancel_cause},{headers:{Authorization:"Bearer"+this.token}}).then(function(e){t.gengxin_status+=1,t.loading=!1}).catch(function(e){t.$message.error("失败:"+e.response.data.message),t.loading=!1}):(this.loading=!1,this.$message.error("订单状态错误"))))},buyerConfirmComplete:function(a){var t=this;if(this.btnwait)return this.$message({message:"操作太频繁,请稍后",type:"warning"});this.btnwait=!0,this.loading=!0,this.$axios.post("/sellerConfirmComplete",{indent_num:a},{headers:{Authorization:"Bearer"+this.token}}).then(function(e){t.$message({message:"确定订单成功",type:"success"}),t.gengxin_status+=1,t.loading=!1,t.btnwait=!1}).catch(function(e){t.$message.error("失败:"+e.response.data.message),t.btnwait=!1,t.loading=!1})},acceptIndent:function(a){var t=this;if(this.btnwait)return this.$message({message:"操作太频繁,请稍后",type:"warning"});this.btnwait=!0,this.loading=!0,this.$axios.post("/acceptIndent",{indent_num:a},{headers:{Authorization:"Bearer"+this.token}}).then(function(e){t.$message({message:"成功接单",type:"success"}),t.btnwait=!1,t.gengxin_status+=1,t.loading=!1}).catch(function(e){if(t.$message.error("接单失败:"+e.response.data.message),"钱包余额不足"==e.response.data.message)return t.$router.push("/user/3-2");t.loading=!1,t.btnwait=!1})},demand_file:function(a){var t=this.indentdata.data[a].demand_file;if(""==t)return this.$message({message:"广告主未上传",type:"warning"});window.open(this.$store.state.header_img+t)}},watch:{gengxin_status:function(){this.gengxin()}}},l=(n(408),n(2)),component=Object(l.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"Order"},[n("div",{staticClass:"Orderheader"},[n("p",{class:1==t.indentclass?"actived":"",on:{click:function(e){t.indentlist=t.indentdata.data,t.indentclass=1}}},[t._v("全部订单")]),t._v(" "),n("p",{class:2==t.indentclass?"actived":"",on:{click:function(e){t.indentlist=t.indentstatus10,t.indentclass=2}}},[t._v("失效订单")]),t._v(" "),n("p",{class:4==t.indentclass?"actived":"",on:{click:function(e){t.indentlist=t.indentstatus1,t.indentclass=4}}},[t._v("待接单")]),t._v(" "),n("p",{class:5==t.indentclass?"actived":"",on:{click:function(e){t.indentlist=t.indentstatus4,t.indentclass=5}}},[t._v("执行中")]),t._v(" "),n("p",{class:6==t.indentclass?"actived":"",on:{click:function(e){t.indentlist=t.indentstatus7,t.indentclass=6}}},[t._v("审核中")]),t._v(" "),n("p",{class:7==t.indentclass?"actived":"",on:{click:function(e){t.indentlist=t.indentstatus8,t.indentclass=7}}},[t._v("已完成")]),t._v(" "),n("el-button",{staticClass:"fr lianxi",attrs:{type:"primary"},on:{click:t.kefu}},[t._v("联系客服")])],1),t._v(" "),n("div",{staticClass:"Orderth"},[n("el-row",[n("el-col",{attrs:{span:9}},[n("p",[t._v("订单详情")])]),t._v(" "),n("el-col",{attrs:{span:4}},[n("p",[t._v("价格")])]),t._v(" "),n("el-col",{attrs:{span:3}},[n("p",[t._v("数量")])]),t._v(" "),n("el-col",{attrs:{span:3}},[n("p",[t._v("订单状态")])]),t._v(" "),n("el-col",{attrs:{span:5}},[n("p",[t._v("客服信息")])])],1)],1),t._v(" "),t._l(t.indentlist,function(e,c){return n("div",{key:c,staticClass:"Orderlist"},[n("div",{staticClass:"listheader"},[n("span",[t._v(t._s(e.create_time))]),t._v(" "),n("span",{staticStyle:{marginLeft:"16px",color:"#242424"}},[t._v("订单号:"+t._s(e.indent_num))])]),t._v(" "),n("div",{staticClass:"Orderlistcontent"},[n("el-row",[n("el-col",{attrs:{span:9}},[n("img",{attrs:{src:"/usericon/personal_tx001.png"}}),t._v(" "),n("div",{staticStyle:{width:"160px"}},[n("h3",{staticClass:"shopname"},[n("span",[t._v(t._s(e.indent_item.modular_name))]),t._v("\n                "+t._s(e.indent_item.goods_title)+"\n              ")]),t._v(" "),n("p",[t._v("所属分类:"+t._s(e.indent_item.theme_name))]),t._v(" "),n("p",[t._v("媒体领域:综合")])])]),t._v(" "),n("el-col",{attrs:{span:4}},[n("p",[t._v("\n              "+t._s(e.indent_item.priceclassify_name)+":\n              "),n("span",{staticClass:"red"},[t._v(t._s(e.indent_item.goods_price))])])]),t._v(" "),n("el-col",{attrs:{span:3}},[n("p",[t._v(t._s(e.indent_item.goods_count))])]),t._v(" "),n("el-col",{attrs:{span:3}},[n("p",[t._v(t._s(1==e.status?"待接单":4==e.status?"执行中":7==e.status?"审核中":8==e.status?"已完成":9==e.status?"已结算":"已失效"))])])],1)],1),t._v(" "),1==e.status?n("div",{staticClass:"selectbtn"},[n("p",{on:{click:function(n){return t.acceptIndent(e.indent_num)}}},[t._v("确认接单")]),t._v(" "),n("p",{staticClass:"quxiao",on:{click:function(n){return t.oderCancel(e.indent_num,e.status)}}},[t._v("拒绝订单")])]):t._e(),t._v(" "),4==e.status?n("div",{staticClass:"selectbtn"},[n("p",{staticClass:"tac",on:{click:function(e){return t.demand_file(c)}}},[t._v("下载资料")]),t._v(" "),n("p",{on:{click:function(n){return t.buyerConfirmComplete(e.indent_num)}}},[t._v("确认完成")])]):t._e(),t._v(" "),7==e.status?n("div",{staticClass:"selectbtn"},[n("a",{on:{click:function(n){return t.upachievements(e.achievements_file)}}},[t._v("下载完成信息")]),t._v(" "),""===e.achievements_file?n("span",{on:{click:function(n){return t.upload(e.indent_num)}}},[n("el-upload",{staticClass:"upload-demo",attrs:{action:t.$store.state.imgcodehost+"/uploadFile",multiple:"",headers:{Authorization:"Bearer"+t.token},data:{upload_type:"indent_word"},name:"file","on-success":t.handleAvatarSuccess,"show-file-list":!1,"before-upload":t.beforeAvatarUpload}},[n("p",[t._v("提交成果文档")])])],1):t._e(),t._v(" "),""!==e.achievements_file?n("span",[t._v("等待广告主确认")]):t._e()]):t._e()])}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:0==t.indentlist.length,expression:"indentlist.length==0"}],staticClass:"noindent"},[t._m(0),t._v(" "),n("nuxt-link",{attrs:{to:"/",tag:"div"}},[t._v("去首页逛逛")])],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.indentlist.length,expression:"indentlist.length!==0"}],staticClass:"fenye"},[n("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-size":15,layout:"prev, pager, next, jumper",total:this.indentdata.total},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1),t._v(" "),n("el-dialog",{attrs:{title:"取消订单原因",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("p",{directives:[{name:"show",rawName:"v-show",value:1==!t.cancel_status,expression:"!cancel_status==1"}],staticClass:"red",staticStyle:{"margin-top":"-20px"}},[t._v("取消订单将扣除保证金!")]),t._v(" "),n("el-input",{attrs:{type:"textarea",resize:"none",rows:3,placeholder:"请输入取消原因"},model:{value:t.cancel_cause,callback:function(e){t.cancel_cause=e},expression:"cancel_cause"}}),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:t.istrueCancal}},[t._v("确 定")]),t._v(" "),n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")])],1)],1)],2)},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"font14 color666"},[e("i",{staticClass:"el-icon-warning"}),this._v("没有订单，去你挑选需要的媒体吧~")])}],!1,null,"e5af4128",null);e.default=component.exports}}]);