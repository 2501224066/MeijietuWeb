exports.ids=[37],exports.modules={125:function(t,e){},179:function(t,e,n){"use strict";n.r(e);var d=n(125),r=n.n(d);for(var l in d)"default"!==l&&function(t){n.d(e,t,function(){return d[t]})}(l);e.default=r.a},221:function(t,e,n){"use strict";n.r(e);var d=n(2),r={layout:"user",data:()=>({dialogVisible:!1,loading:!0,currentPage:1,btnwait:!1,token:"",indent_num:"",indentdata:"",indentclass:1,indentlist:[],indentstatus0:[],indentstatus1:[],indentstatus4:[],indentstatus7:[],indentstatus8:[],indentstatus10:[],cancel_cause:"",cancel_status:"",cancel_indent:"",gengxin_status:1}),mounted(){Object(d.a)().then(t=>{this.token=t}),setInterval(()=>{Object(d.a)().then(t=>{this.token=t})},36e4),this.$axios.post("/indentBelongSelf",{},{headers:{Authorization:"Bearer"+localStorage.getItem("access_token")}}).then(t=>{this.indentdata=t.data.data,this.indentlist=t.data.data.data,this.indentlist.forEach(t=>{0==t.status?this.indentstatus0.push(t):1==t.status?this.indentstatus1.push(t):4==t.status?this.indentstatus4.push(t):7==t.status?this.indentstatus7.push(t):8==t.status||9==t.status?this.indentstatus8.push(t):this.indentstatus10.push(t)}),this.loading=!1}).catch(t=>{this.loading=!1})},methods:{gengxin(){this.$axios.post("/indentBelongSelf",{},{headers:{Authorization:"Bearer"+localStorage.getItem("access_token")}}).then(t=>{this.indentdata=t.data.data,this.indentlist=t.data.data.data,this.indentlist.forEach(t=>{0==t.status?this.indentstatus0.push(t):1==t.status?this.indentstatus1.push(t):4==t.status?this.indentstatus4.push(t):7==t.status?this.indentstatus7.push(t):8==t.status&&9==t.status?this.indentstatus8.push(t):this.indentstatus10.push(t)}),this.loading=!1}).catch(t=>{this.loading=!1})},handleCurrentChange(a){this.loading=!0,this.gengxin(a)},kefu(){window.open("https://wpa.qq.com/msgrd?v=3&uin=28458999&site=qq&menu=yes")},handleAvatarSuccess(t,e){this.$axios.post("/addAchievementsFile",{indent_num:this.indent_num,achievements_file:t.data.path},{headers:{Authorization:"Bearer"+this.token}}).then(t=>{this.loading=!1,this.$message({message:"上传成功",type:"success"})}).catch(t=>{this.loading=!1,this.$message.error("上传失败:"+t.response.data.message)})},beforeAvatarUpload(){this.loading=!0},upload(t){this.indent_num=t},upachievements(a){if(""==a)return this.$message({message:"未上传",type:"warning"});window.open(this.$store.state.header_img+a)},oderCancel(a,b){if(this.btnwait)return this.$message({message:"操作太频繁,请稍后",type:"warning"});this.dialogVisible=!0,this.cancel_status=b,this.cancel_indent=a},istrueCancal(){return this.btnwait?this.$message({message:"操作太频繁,请稍后",type:"warning"}):(this.btnwait=!0,setTimeout(()=>{this.btnwait=!1},3e3),this.dialogVisible=!1,this.loading=!0,2!==this.$store.state.userdata.identity?console.log("用户身份错误"+this.$store.state.userdata.identity):void(1==this.cancel_status?this.$axios.post("/acceptIndentBeforeCancel",{indent_num:this.cancel_indent,cancel_cause:this.cancel_cause},{headers:{Authorization:"Bearer"+this.token}}).then(t=>{this.$message({message:"取消成功",type:"success"}),this.gengxin_status+=1,this.loading=!1}).catch(t=>{this.$message.error("失败:"+t.response.data.message),this.loading=!1}):4==this.cancel_status?this.$axios.post("/inTransactionSellerCancel",{indent_num:this.cancel_indent,cancel_cause:this.cancel_cause},{headers:{Authorization:"Bearer"+this.token}}).then(t=>{this.gengxin_status+=1,this.loading=!1}).catch(t=>{this.$message.error("失败:"+t.response.data.message),this.loading=!1}):(this.loading=!1,this.$message.error("订单状态错误"))))},buyerConfirmComplete(a){if(this.btnwait)return this.$message({message:"操作太频繁,请稍后",type:"warning"});this.btnwait=!0,this.loading=!0,this.$axios.post("/sellerConfirmComplete",{indent_num:a},{headers:{Authorization:"Bearer"+this.token}}).then(t=>{this.$message({message:"确定订单成功",type:"success"}),this.gengxin_status+=1,this.loading=!1,this.btnwait=!1}).catch(t=>{this.$message.error("失败:"+t.response.data.message),this.btnwait=!1,this.loading=!1})},acceptIndent(a){if(this.btnwait)return this.$message({message:"操作太频繁,请稍后",type:"warning"});this.btnwait=!0,this.loading=!0,this.$axios.post("/acceptIndent",{indent_num:a},{headers:{Authorization:"Bearer"+this.token}}).then(t=>{this.$message({message:"成功接单",type:"success"}),this.btnwait=!1,this.gengxin_status+=1,this.loading=!1}).catch(t=>{if(this.$message.error("接单失败:"+t.response.data.message),"钱包余额不足"==t.response.data.message)return this.$router.push("/user/3-2");this.loading=!1,this.btnwait=!1})},demand_file(a){let t=this.indentdata.data[a].demand_file;if(""==t)return this.$message({message:"广告主未上传",type:"warning"});window.open(this.$store.state.header_img+t)}},watch:{gengxin_status:function(){this.gengxin()}}},l=n(1);var component=Object(l.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"Order"},[t._ssrNode('<div class="Orderheader" data-v-e5af4128>',"</div>",[t._ssrNode("<p"+t._ssrClass(null,1==t.indentclass?"actived":"")+" data-v-e5af4128>全部订单</p> <p"+t._ssrClass(null,2==t.indentclass?"actived":"")+" data-v-e5af4128>失效订单</p> <p"+t._ssrClass(null,4==t.indentclass?"actived":"")+" data-v-e5af4128>待接单</p> <p"+t._ssrClass(null,5==t.indentclass?"actived":"")+" data-v-e5af4128>执行中</p> <p"+t._ssrClass(null,6==t.indentclass?"actived":"")+" data-v-e5af4128>审核中</p> <p"+t._ssrClass(null,7==t.indentclass?"actived":"")+" data-v-e5af4128>已完成</p> "),n("el-button",{staticClass:"fr lianxi",attrs:{type:"primary"},on:{click:t.kefu}},[t._v("联系客服")])],2),t._ssrNode(" "),t._ssrNode('<div class="Orderth" data-v-e5af4128>',"</div>",[n("el-row",[n("el-col",{attrs:{span:9}},[n("p",[t._v("订单详情")])]),t._v(" "),n("el-col",{attrs:{span:4}},[n("p",[t._v("价格")])]),t._v(" "),n("el-col",{attrs:{span:3}},[n("p",[t._v("数量")])]),t._v(" "),n("el-col",{attrs:{span:3}},[n("p",[t._v("订单状态")])]),t._v(" "),n("el-col",{attrs:{span:5}},[n("p",[t._v("客服信息")])])],1)],1),t._ssrNode(" "),t._l(t.indentlist,function(e,d){return t._ssrNode('<div class="Orderlist" data-v-e5af4128>',"</div>",[t._ssrNode('<div class="listheader" data-v-e5af4128><span data-v-e5af4128>'+t._ssrEscape(t._s(e.create_time))+'</span> <span style="marginLeft:16px;color:#242424" data-v-e5af4128>'+t._ssrEscape("订单号:"+t._s(e.indent_num))+"</span></div> "),t._ssrNode('<div class="Orderlistcontent" data-v-e5af4128>',"</div>",[n("el-row",[n("el-col",{attrs:{span:9}},[n("img",{attrs:{src:"/usericon/personal_tx001.png"}}),t._v(" "),n("div",{staticStyle:{width:"160px"}},[n("h3",{staticClass:"shopname"},[n("span",[t._v(t._s(e.indent_item.modular_name))]),t._v("\n                "+t._s(e.indent_item.goods_title)+"\n              ")]),t._v(" "),n("p",[t._v("所属分类:"+t._s(e.indent_item.theme_name))]),t._v(" "),n("p",[t._v("媒体领域:综合")])])]),t._v(" "),n("el-col",{attrs:{span:4}},[n("p",[t._v("\n              "+t._s(e.indent_item.priceclassify_name)+":\n              "),n("span",{staticClass:"red"},[t._v(t._s(e.indent_item.goods_price))])])]),t._v(" "),n("el-col",{attrs:{span:3}},[n("p",[t._v(t._s(e.indent_item.goods_count))])]),t._v(" "),n("el-col",{attrs:{span:3}},[n("p",[t._v(t._s(1==e.status?"待接单":4==e.status?"执行中":7==e.status?"审核中":8==e.status?"已完成":9==e.status?"已结算":"已失效"))])])],1)],1),t._ssrNode(" "+(1==e.status?'<div class="selectbtn" data-v-e5af4128><p data-v-e5af4128>确认接单</p> <p class="quxiao" data-v-e5af4128>拒绝订单</p></div>':"\x3c!----\x3e")+" "+(4==e.status?'<div class="selectbtn" data-v-e5af4128><p class="tac" data-v-e5af4128>下载资料</p> <p data-v-e5af4128>确认完成</p></div>':"\x3c!----\x3e")+" "),7==e.status?t._ssrNode('<div class="selectbtn" data-v-e5af4128>',"</div>",[t._ssrNode("<a data-v-e5af4128>下载完成信息</a> "),""===e.achievements_file?t._ssrNode("<span data-v-e5af4128>","</span>",[n("el-upload",{staticClass:"upload-demo",attrs:{action:t.$store.state.imgcodehost+"/uploadFile",multiple:"",headers:{Authorization:"Bearer"+t.token},data:{upload_type:"indent_word"},name:"file","on-success":t.handleAvatarSuccess,"show-file-list":!1,"before-upload":t.beforeAvatarUpload}},[n("p",[t._v("提交成果文档")])])],1):t._e(),t._ssrNode(" "+(""!==e.achievements_file?"<span data-v-e5af4128>等待广告主确认</span>":"\x3c!----\x3e"))],2):t._e()],2)}),t._ssrNode(" "),t._ssrNode('<div class="noindent"'+t._ssrStyle(null,null,{display:0==t.indentlist.length?"":"none"})+" data-v-e5af4128>","</div>",[t._ssrNode('<p class="font14 color666" data-v-e5af4128><i class="el-icon-warning" data-v-e5af4128></i>没有订单，去你挑选需要的媒体吧~</p> '),n("nuxt-link",{attrs:{to:"/",tag:"div"}},[t._v("去首页逛逛")])],2),t._ssrNode(" "),t._ssrNode('<div class="fenye"'+t._ssrStyle(null,null,{display:0!==t.indentlist.length?"":"none"})+" data-v-e5af4128>","</div>",[n("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-size":15,layout:"prev, pager, next, jumper",total:this.indentdata.total},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1),t._ssrNode(" "),n("el-dialog",{attrs:{title:"取消订单原因",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("p",{directives:[{name:"show",rawName:"v-show",value:1==!t.cancel_status,expression:"!cancel_status==1"}],staticClass:"red",staticStyle:{"margin-top":"-20px"}},[t._v("取消订单将扣除保证金!")]),t._v(" "),n("el-input",{attrs:{type:"textarea",resize:"none",rows:3,placeholder:"请输入取消原因"},model:{value:t.cancel_cause,callback:function(e){t.cancel_cause=e},expression:"cancel_cause"}}),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:t.istrueCancal}},[t._v("确 定")]),t._v(" "),n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")])],1)],1)],2)},[],!1,function(t){var e=n(179);e.__inject__&&e.__inject__(t)},"e5af4128","71b1e3c5");e.default=component.exports}};
//# sourceMappingURL=47d22c2000fc5d901fdd.js.map