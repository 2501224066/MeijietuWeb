(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{353:function(t,e,n){},413:function(t,e,n){"use strict";var o=n(353);n.n(o).a},450:function(t,e,n){"use strict";n.r(e);n(6);var o={layout:"user",data:function(){return{currentPage:1,istruefukuan:!1,shanghcuanbtn:!1,fukuanindent:"",dialogVisible:!1,loading:!0,indent_num:"",indentdata:"",token:"",indentclass:1,indentlist:[],indentstatus0:[],indentstatus1:[],indentstatus4:[],indentstatus7:[],indentstatus8:[],indentstatus10:[],cancel_cause:"",cancel_status:"",cancel_indent:"",gengxin_status:1,btnwait:!1}},mounted:function(){var t=this;this.$axios.post("/indentBelongSelf",{},{headers:{Authorization:"Bearer"+localStorage.getItem("access_token")}}).then(function(e){t.indentdata=e.data.data,t.indentlist=e.data.data.data,t.indentlist.forEach(function(e){0==e.status?t.indentstatus0.push(e):1==e.status?t.indentstatus1.push(e):4==e.status?t.indentstatus4.push(e):7==e.status?t.indentstatus7.push(e):8==e.status&&9==e.status?t.indentstatus8.push(e):t.indentstatus10.push(e)}),t.loading=!1,t.token=localStorage.getItem("access_token")}).catch(function(e){gengxin(),t.token=localStorage.getItem("access_token"),t.loading=!1})},methods:{gengxin:function(a){var t=this;this.loading=!0,a||(this.currentPage=1),this.$axios.post("/indentBelongSelf?page="+a,{},{headers:{Authorization:"Bearer"+localStorage.getItem("access_token")}}).then(function(e){t.indentdata=e.data.data,t.indentlist=e.data.data.data,t.indentlist.forEach(function(e){0==e.status?t.indentstatus0.push(e):1==e.status?t.indentstatus1.push(e):4==e.status?t.indentstatus4.push(e):7==e.status?t.indentstatus7.push(e):8==e.status&&9==e.status?t.indentstatus8.push(e):t.indentstatus10.push(e)}),t.loading=!1}).catch(function(e){t.loading=!1})},kefu:function(){window.open("https://wpa.qq.com/msgrd?v=3&uin="+JSON.parse(localStorage.getItem("salesman")).salesman_qq_ID+"&site=qq&menu=yes")},handleAvatarSuccess:function(t,e){var n=this;this.$axios.post("/addDemandFile",{indent_num:this.indent_num,demand_file:t.data.path},{headers:{Authorization:"Bearer"+localStorage.getItem("access_token")}}).then(function(t){n.$axios.post("/indentBelongSelf",{},{headers:{Authorization:"Bearer"+localStorage.getItem("access_token")}}).then(function(t){n.indentdata=t.data.data,n.indentlist=t.data.data.data,n.indentlist.forEach(function(t){0==t.status?n.indentstatus0.push(t):1==t.status?n.indentstatus1.push(t):4==t.status?n.indentstatus4.push(t):7==t.status?n.indentstatus7.push(t):8==t.status||9==t.status?n.indentstatus8.push(t):n.indentstatus1.push(t)}),n.loading=!1}).catch(function(t){n.loading=!1}),n.$message({message:"上传成功",type:"success"})}).catch(function(t){n.loading=!1,n.$message.error("上传失败:"+t.response.data.message)})},handleCurrentChange:function(a){this.loading=!0,this.gengxin(a)},upload:function(a,b){return""!==b?this.$message({message:"只能上传一次",type:"warning"}):this.btnwait?this.$message({message:"操作太频繁,请稍后",type:"warning"}):(this.shanghcuanbtn=!0,void(this.indent_num=a))},beforeAvatarUpload:function(){this.loading=!0,this.token=localStorage.getItem("access_token"),this.shanghcuanbtn=!1},oderCancel:function(a,b){if(this.btnwait)return this.$message({message:"操作太频繁,请稍后",type:"warning"});this.cancel_status=b,this.cancel_indent=a,this.dialogVisible=!0,console.log(a,b)},istrueshanchu:function(a,b){var t=this;if(this.btnwait)return this.$message({message:"操作太频繁,请稍后",type:"warning"});this.btnwait=!0,0==b?this.$axios.post("/deleteIndentBeforePayment",{indent_num:a},{headers:{Authorization:"Bearer"+localStorage.getItem("access_token")}}).then(function(e){t.$message({message:"删除成功",type:"success"}),t.gengxin_status+=1,t.loading=!1,t.btnwait=!1}).catch(function(e){t.$message.error("失败:"+e.response.data.message),t.loading=!1,t.btnwait=!1}):(this.$message.error("订单状态错误"),this.btnwait=!1)},istrueCancal:function(){var t=this;return this.btnwait?this.$message({message:"操作太频繁,请稍后",type:"warning"}):(this.btnwait=!0,setTimeout(function(){t.btnwait=!1},3e3),this.dialogVisible=!1,this.loading=!0,1!==this.$store.state.userdata.identity?console.log("用户身份错误"+this.$store.state.userdata.identity):void(1==this.cancel_status?this.$axios.post("/acceptIndentBeforeCancel",{indent_num:this.cancel_indent,cancel_cause:this.cancel_cause},{headers:{Authorization:"Bearer"+localStorage.getItem("access_token")}}).then(function(e){t.$message({message:"取消成功",type:"success"}),t.gengxin_status+=1,t.loading=!1}).catch(function(e){t.$message.error("失败:"+e.response.data.message),t.loading=!1}):4==this.cancel_status?this.$axios.post("/inTransactionBuyerCancel",{indent_num:this.cancel_indent,cancel_cause:this.cancel_cause},{headers:{Authorization:"Bearer"+localStorage.getItem("access_token")}}).then(function(e){t.$message({message:"取消成功",type:"success"}),t.gengxin_status+=1,t.loading=!1}).catch(function(e){t.$message.error("失败:"+e.response.data.message),t.loading=!1}):(this.loading=!1,this.$message.error("订单状态错误"+this.cancel_status))))},buyerConfirmComplete:function(a){var t=this;if(this.btnwait)return this.$message({message:"操作太频繁,请稍后",type:"warning"});this.btnwait=!0,this.loading=!0,this.$axios.post("/buyerConfirmComplete",{indent_num:a},{headers:{Authorization:"Bearer"+localStorage.getItem("access_token")}}).then(function(e){t.$message({message:"确定成功",type:"success"}),t.gengxin_status+=1,t.loading=!1,t.btnwait=!1}).catch(function(e){t.loading=!1,t.btnwait=!1})},indentPayment:function(a){var t=this;if(this.btnwait)return this.$message({message:"操作太频繁,请稍后",type:"warning"});this.btnwait=!0,this.loading=!0,this.istruefukuan=!1,this.$axios.post("/indentPayment",{indent_num:a},{headers:{Authorization:"Bearer"+localStorage.getItem("access_token")}}).then(function(e){t.$message({message:"付款成功",type:"success"}),t.gengxin_status+=1,t.loading=!1,t.btnwait=!1}).catch(function(e){if(t.$message.error("付款失败:"+e.response.data.message),t.btnwait=!1,"钱包余额不足"==e.response.data.message)return t.$router.push("/user/3-2");t.loading=!1})},achievements_file:function(a){var t=this.indentdata.data[a].achievements_file;if(""==t)return this.$message({message:"媒体主还未上传",type:"warning"});window.open(this.$store.state.header_img+t)}},watch:{gengxin_status:function(){this.gengxin()}}},c=(n(413),n(2)),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"Order",attrs:{"element-loading-background":"rgba(255, 2555, 255, 1)"}},[n("div",{staticClass:"Orderheader"},[n("p",{class:1==t.indentclass?"actived":"",on:{click:function(e){t.indentlist=t.indentdata.data,t.indentclass=1}}},[t._v("全部订单")]),t._v(" "),n("p",{class:2==t.indentclass?"actived":"",on:{click:function(e){t.indentlist=t.indentstatus10,t.indentclass=2}}},[t._v("失效订单")]),t._v(" "),n("p",{class:3==t.indentclass?"actived":"",on:{click:function(e){t.indentlist=t.indentstatus0,t.indentclass=3}}},[t._v("待付款")]),t._v(" "),n("p",{class:4==t.indentclass?"actived":"",on:{click:function(e){t.indentlist=t.indentstatus1,t.indentclass=4}}},[t._v("待接单")]),t._v(" "),n("p",{class:5==t.indentclass?"actived":"",on:{click:function(e){t.indentlist=t.indentstatus4,t.indentclass=5}}},[t._v("执行中")]),t._v(" "),n("p",{class:6==t.indentclass?"actived":"",on:{click:function(e){t.indentlist=t.indentstatus7,t.indentclass=6}}},[t._v("审核中")]),t._v(" "),n("p",{class:7==t.indentclass?"actived":"",on:{click:function(e){t.indentlist=t.indentstatus8,t.indentclass=7}}},[t._v("已完成")]),t._v(" "),n("el-button",{staticClass:"fr lianxi",attrs:{type:"primary"},on:{click:t.kefu}},[t._v("联系客服")])],1),t._v(" "),n("div",{staticClass:"Orderth"},[n("el-row",[n("el-col",{attrs:{span:9}},[n("p",[t._v("订单详情")])]),t._v(" "),n("el-col",{attrs:{span:4}},[n("p",[t._v("价格")])]),t._v(" "),n("el-col",{attrs:{span:3}},[n("p",[t._v("数量")])]),t._v(" "),n("el-col",{attrs:{span:3}},[n("p",[t._v("订单状态")])]),t._v(" "),n("el-col",{attrs:{span:5}},[n("p",[t._v("订单操作")])])],1)],1),t._v(" "),t._l(t.indentlist,function(e,o){return n("div",{key:o,staticClass:"Orderlist"},[n("div",{staticClass:"listheader"},[n("span",[t._v(t._s(e.create_time))]),t._v(" "),n("span",{staticStyle:{marginLeft:"16px",color:"#242424"}},[t._v("订单号:"+t._s(e.indent_num))])]),t._v(" "),n("div",{staticClass:"Orderlistcontent"},[n("el-row",[n("el-col",{attrs:{span:9}},[n("img",{staticStyle:{width:"98px","border-radius":"50%"},attrs:{src:t.$store.state.header_img+e.indent_item.avatar_url}}),t._v(" "),n("div",{staticStyle:{width:"160px"}},[n("h3",{staticClass:"shopname"},[n("span",[t._v(t._s(e.indent_item.modular_name))]),t._v("\n              "+t._s(e.indent_item.goods_title)+"\n            ")]),t._v(" "),n("p",[t._v("所属分类:"+t._s(e.indent_item.theme_name))]),t._v(" "),n("p",[t._v("媒体领域:综合")])])]),t._v(" "),n("el-col",{attrs:{span:4}},[n("p",[t._v("\n            "+t._s(e.indent_item.priceclassify_name)+":\n            "),n("span",{staticClass:"red"},[t._v(t._s(e.indent_item.goods_price))])])]),t._v(" "),n("el-col",{attrs:{span:3}},[n("p",[t._v(t._s(e.indent_item.goods_count))])]),t._v(" "),n("el-col",{attrs:{span:3}},[n("p",[t._v(t._s(0==e.status?"待付款":1==e.status?"待接单":4==e.status?"执行中":7==e.status?"审核中":8==e.status?"已完成":"已失效"))])])],1)],1),t._v(" "),0==e.status?n("div",{staticClass:"selectbtn"},[""===e.demand_file?n("p",{on:{click:function(n){return t.upload(e.indent_num,e.demand_file)}}},[t._v("上传需求文档")]):t._e(),t._v(" "),""!==e.demand_file?n("p",{staticClass:"cr",on:{click:function(n){t.fukuanindent=e.indent_num,t.istruefukuan=!0}}},[t._v("去付款")]):t._e(),t._v(" "),n("p",{staticClass:"quxiao",on:{click:function(n){return t.istrueshanchu(e.indent_num,e.status)}}},[t._v("删除订单")])]):t._e(),t._v(" "),1==e.status?n("div",{staticClass:"selectbtn"},[n("span",[t._v("等待媒体主接单")]),t._v(" "),n("p",{staticClass:"quxiao",on:{click:function(n){return t.oderCancel(e.indent_num,e.status)}}},[t._v("取消订单")])]):t._e(),t._v(" "),4==e.status?n("div",{staticClass:"selectbtn"},[n("span",[t._v("等待完成")]),t._v(" "),n("p",{staticClass:"quxiao red",on:{click:function(n){return t.oderCancel(e.indent_num,e.status)}}},[t._v("取消订单")])]):t._e(),t._v(" "),7==e.status?n("div",{staticClass:"selectbtn"},[n("p",{on:{click:function(e){return t.achievements_file(o)}}},[t._v("下载完成信息")]),t._v(" "),n("p",{on:{click:function(n){return t.buyerConfirmComplete(e.indent_num)}}},[t._v("确认完成")])]):t._e()])}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:0==t.indentlist.length,expression:"indentlist.length==0"}],staticClass:"noindent"},[t._m(0),t._v(" "),n("nuxt-link",{attrs:{to:"/",tag:"div"}},[t._v("去首页逛逛")])],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.indentlist.length,expression:"indentlist.length!==0"}],staticClass:"fenye"},[n("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-size":15,layout:"prev, pager, next, jumper",total:this.indentdata.total},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1),t._v(" "),n("el-dialog",{attrs:{title:"注意事项",visible:t.shanghcuanbtn,width:"30%"},on:{"update:visible":function(e){t.shanghcuanbtn=e}}},[n("p",[t._v("1.上传资料，仅允许上传一次,不允许修改。")]),t._v(" "),n("p",[t._v("2.上传资料仅支持doc,docx,和rar,zip格式的压缩文件")]),t._v(" "),n("p",[t._v("3.多个商品，请将多个对应的word文档放入压缩包中上传。")]),t._v(" "),n("el-upload",{staticClass:"upload-demo",attrs:{action:t.$store.state.imgcodehost+"/uploadFile",multiple:"",headers:{Authorization:"Bearer"+t.token},data:{upload_type:"indent_word"},name:"file","on-success":t.handleAvatarSuccess,"show-file-list":!1,"before-upload":t.beforeAvatarUpload}},[n("p",{staticClass:"shanchuanbyn"},[t._v("上传资料")])]),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.shanghcuanbtn=!1}}},[t._v("确 定")]),t._v(" "),n("el-button",{on:{click:function(e){t.shanghcuanbtn=!1}}},[t._v("取 消")])],1)],1),t._v(" "),n("el-dialog",{attrs:{title:"取消原因",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("p",{directives:[{name:"show",rawName:"v-show",value:1!==t.cancel_status,expression:"cancel_status!==1"}],staticClass:"red",staticStyle:{"margin-top":"-20px"}},[t._v("取消订单将扣除保证金!")]),t._v(" "),n("el-input",{attrs:{type:"textarea",resize:"none",rows:3,placeholder:"请输入内容"},model:{value:t.cancel_cause,callback:function(e){t.cancel_cause=e},expression:"cancel_cause"}}),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:t.istrueCancal}},[t._v("确 定")]),t._v(" "),n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")])],1)],1),t._v(" "),n("el-dialog",{attrs:{title:"提示",visible:t.istruefukuan,width:"30%"},on:{"update:visible":function(e){t.istruefukuan=e}}},[n("span",[t._v("确认付款")]),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.indentPayment(t.fukuanindent)}}},[t._v("确 定")]),t._v(" "),n("el-button",{on:{click:function(e){t.istruefukuan=!1}}},[t._v("取 消")])],1)])],2)},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"font14 color666"},[e("i",{staticClass:"el-icon-warning",staticStyle:{"margin-right":"8px"}}),this._v("没有订单，去你挑选需要的媒体吧~")])}],!1,null,"be97c0d4",null);e.default=component.exports}}]);