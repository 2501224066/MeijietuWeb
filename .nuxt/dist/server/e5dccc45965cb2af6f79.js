exports.ids=[20],exports.modules={101:function(e,t){},156:function(e,t,n){"use strict";n.r(t);var r=n(101),l=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);t.default=l.a},249:function(e,t,n){"use strict";n.r(t);var r=n(2),l={layout:"salesman",data:()=>({kefudata:"",indentStatus:r.c,select:"",yijia:!1,yijiadata:"",radio:"",yijiaprice:"",xiangqing:!1,xiangqingdata:"",selestatus:"",currentPage:1,serveIndent:"",dingdanstatus:[{value:0,label:"已完成"},{value:1,label:"未完成"}],buyer_num:"",seller_num:"",indent_num:""}),mounted(){this.kefudata=JSON.parse(localStorage.getItem("kefu")),this.getselect()},methods:{getselect(){this.$axios.post("/serveIndentSelect?page="+this.currentPage,{buyer_num:this.buyer_num,seller_num:this.seller_num,indent_num:this.indent_num,bargaining_status:this.selestatus},{headers:{Authorization:"Bearer"+localStorage.getItem("access_token")}}).then(e=>{this.serveIndent=e.data.data}).catch(e=>{this.$message({message:"身份过期,请重新登录",type:"warning"})})},handleCurrentChange(a){this.$axios.post("/serveIndentSelect?page="+a,{buyer_num:this.buyer_num,seller_num:this.seller_num,indent_num:this.indent_num,bargaining_status:this.selestatus},{headers:{Authorization:"Bearer"+localStorage.getItem("access_token")}}).then(e=>{this.serveIndent=e.data.data})},yijiafinsh(){this.$axios.post("/indentBargaining",{indent_num:this.yijiadata.indent_num,seller_income:this.yijiaprice},{headers:{Authorization:"Bearer"+localStorage.getItem("access_token")}}).then(e=>{this.$message({message:"议价成功",type:"success"}),this.getselect()}).catch(e=>{this.$message.error("失败: "+e.response.data.message)}),this.yijia=!1},searchbtn(){this.$axios.post("/serveIndentSelect",{buyer_num:this.buyer_num,seller_num:this.seller_num,indent_num:this.indent_num,bargaining_status:this.selestatus},{headers:{Authorization:"Bearer"+localStorage.getItem("access_token")}}).then(e=>{this.serveIndent=e.data.data})},xuquwendang(a){window.open($store.state.header_img+a.demand_file)},ruanwen(){localStorage.setItem("indent_num",this.yijiadata.indent_num),this.$router.push("/salesman/softArticleMeal")}}},o=n(1);var component=Object(o.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dingdanall"},[e._ssrNode('<div class="header_c color666" data-v-47591f8a><span data-v-47591f8a>当前位置:订单管理</span><span class="fr" data-v-47591f8a>'+e._ssrEscape("客服编号:"+e._s(e.kefudata.user_num))+"</span></div> "),e._ssrNode('<div class="dingdan_c" data-v-47591f8a>',"</div>",[e._ssrNode('<div style="width:105px" data-v-47591f8a>',"</div>",[n("el-select",{attrs:{placeholder:"议价状态"},model:{value:e.selestatus,callback:function(t){e.selestatus=t},expression:"selestatus"}},e._l(e.dingdanstatus,function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._ssrNode(" "),e._ssrNode('<div class="selectinput" data-v-47591f8a>',"</div>",[n("el-input",{staticStyle:{width:"260px"},attrs:{placeholder:"搜索广告主编号"},model:{value:e.buyer_num,callback:function(t){e.buyer_num=t},expression:"buyer_num"}}),e._ssrNode(" "),n("el-input",{staticStyle:{width:"260px"},attrs:{placeholder:"搜索媒体主编号"},model:{value:e.seller_num,callback:function(t){e.seller_num=t},expression:"seller_num"}}),e._ssrNode(" "),n("el-input",{staticStyle:{width:"260px"},attrs:{placeholder:"搜索订单编号"},model:{value:e.indent_num,callback:function(t){e.indent_num=t},expression:"indent_num"}}),e._ssrNode(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.searchbtn}},[e._v("搜索")])],2),e._ssrNode(" "),e._ssrNode('<div class="c_list" data-v-47591f8a>',"</div>",[n("el-row",{staticClass:"c_title"},[n("el-col",{attrs:{span:4}},[n("div",[e._v("创建时间")])]),e._v(" "),n("el-col",{attrs:{span:3}},[n("div",[e._v("订单号")])]),e._v(" "),n("el-col",{attrs:{span:3}},[n("div",[e._v("广告主")])]),e._v(" "),n("el-col",{attrs:{span:2}},[n("div",[e._v("价格")])]),e._v(" "),n("el-col",{attrs:{span:3}},[n("div",[e._v("媒体主")])]),e._v(" "),n("el-col",{attrs:{span:3}},[n("div",[e._v("订单状态")])]),e._v(" "),n("el-col",{attrs:{span:3}},[n("div",[e._v("商品议价")])]),e._v(" "),n("el-col",{attrs:{span:3}},[n("div",[e._v("操作")])])],1),e._ssrNode(" "),e._l(e.serveIndent.data,function(t,r){return e._ssrNode("<div data-v-47591f8a>","</div>",[n("el-col",{attrs:{span:4}},[n("div",[e._v(e._s(t.create_time))])]),e._ssrNode(" "),n("el-col",{attrs:{span:3}},[n("div",[e._v(e._s(t.indent_num))])]),e._ssrNode(" "),n("el-col",{attrs:{span:3}},[n("div",[e._v(e._s(t.buyer_name))])]),e._ssrNode(" "),n("el-col",{attrs:{span:2}},[n("div",[e._v(e._s(t.pay_amount||"/"))])]),e._ssrNode(" "),n("el-col",{attrs:{span:3}},[n("div",[e._v(e._s(t.seller_name))])]),e._ssrNode(" "),n("el-col",{attrs:{span:3}},[n("div",[e._v(e._s(e.indentStatus[t.status]))])]),e._ssrNode(" "),n("el-col",{attrs:{span:3}},[n("div",{class:0==t.bargaining_status?"red":""},[e._v(e._s(0==t.bargaining_status?"未完成":1==t.bargaining_status?"已完成":"/"))])]),e._ssrNode(" "),n("el-col",{attrs:{span:3}},[n("div",{staticClass:"kefucaozuo"},[n("img",{attrs:{src:"/indexicon/kefucaozuo01.png",title:"商品议价"},on:{click:function(n){e.yijiadata=t,"软文套餐"===t.indent_item.theme_name?e.ruanwen():e.yijia=!0}}}),e._v(" "),n("img",{staticStyle:{margin:"0 13px"},attrs:{title:"订单详情",src:"/indexicon/kefucaozuo02.png"},on:{click:function(n){e.xiangqing=!0,e.xiangqingdata=t}}}),e._v(" "),n("img",{attrs:{src:"/indexicon/kefucaozuo03.png",title:"需求文档"},on:{click:function(n){return e.xuquwendang(t)}}})])])],2)})],2),e._ssrNode(" "),e._ssrNode('<div class="fenye" data-v-47591f8a>',"</div>",[n("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-size":15,layout:"prev, pager, next, jumper",total:e.serveIndent.total},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1)],2),e._ssrNode(" "),n("el-dialog",{attrs:{title:"商品议价",visible:e.yijia,width:"30%"},on:{"update:visible":function(t){e.yijia=t}}},[n("div",[e._v("媒体主: "+e._s(e.yijiadata.seller_name))]),e._v(" "),n("div",[e._v("订单价格: "+e._s(e.yijiadata.pay_amount))]),e._v(" "),n("p",[e._v("媒体主收入:"+e._s(e.xiangqingdata.seller_income))]),e._v(" "),n("div",[e._v("是否同意: \n            "),n("el-radio",{staticStyle:{"margin-left":"10px"},attrs:{label:"1"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("是")]),e._v(" "),n("el-radio",{attrs:{label:"2"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("否")])],1),e._v(" "),n("div",[e._v("议价价格:"),n("el-input",{staticStyle:{width:"200px","margin-left":"10px"},attrs:{placeholder:"请输入价格"},model:{value:e.yijiaprice,callback:function(t){e.yijiaprice=t},expression:"yijiaprice"}})],1),e._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:e.yijiafinsh}},[e._v("确 定")]),e._v(" "),n("el-button",{on:{click:function(t){e.yijia=!1}}},[e._v("取 消")])],1)]),e._ssrNode(" "),n("el-dialog",{attrs:{title:"订单详情",visible:e.xiangqing,width:"30%"},on:{"update:visible":function(t){e.xiangqing=t}}},[n("div",{staticClass:"xiangqingkuang"},[n("p",[e._v("创建时间:"+e._s(e.xiangqingdata.create_time))]),e._v(" "),n("p",[e._v("订单号:"+e._s(e.xiangqingdata.indent_num))]),e._v(" "),n("p",[e._v("客服编号:"+e._s(e.xiangqingdata.salesman_id))]),e._v(" "),n("p",[e._v("手续费:"+e._s(e.xiangqingdata.compensate_fee))]),e._v(" "),n("p",[e._v("订单价格:"+e._s(e.xiangqingdata.indent_amount))]),e._v(" "),n("p",[e._v("媒体主收入:"+e._s(e.xiangqingdata.seller_income))]),e._v(" "),n("p",[e._v("广告主昵称:"+e._s(e.xiangqingdata.buyer_name))]),e._v(" "),n("p",[e._v("广告主电话:"+e._s(e.xiangqingdata.buyer_phone))]),e._v(" "),n("p",[e._v("广告主编号:"+e._s(e.xiangqingdata.buyer_id))]),e._v(" "),n("p",[e._v("媒体主昵称:"+e._s(e.xiangqingdata.seller_name))]),e._v(" "),n("p",[e._v("媒体主电话:"+e._s(e.xiangqingdata.seller_phone))]),e._v(" "),n("p",[e._v("媒体主编号:"+e._s(e.xiangqingdata.seller_num))])]),e._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.xiangqing=!1}}},[e._v("确 定")]),e._v(" "),n("el-button",{on:{click:function(t){e.xiangqing=!1}}},[e._v("取 消")])],1)])],2)},[],!1,function(e){var t=n(156);t.__inject__&&t.__inject__(e)},"47591f8a","10ea43b0");t.default=component.exports}};
//# sourceMappingURL=e5dccc45965cb2af6f79.js.map