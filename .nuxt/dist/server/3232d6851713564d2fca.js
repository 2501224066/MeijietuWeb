exports.ids=[63],exports.modules={149:function(e,t){},220:function(e,t,r){"use strict";r.r(t);var d=r(149),n=r.n(d);for(var o in d)"default"!==o&&function(e){r.d(t,e,function(){return d[e]})}(o);t.default=n.a},266:function(e,t,r){"use strict";r.r(t);r(2);var d={layout:"user",data:()=>({loading:!0,goodsBelongSelf:[],currentPage:1}),mounted(){this.$axios.post("/goodsBelongSelf",{},{headers:{Authorization:"Bearer"+localStorage.getItem("access_token")}}).then(e=>{this.goodsBelongSelf=e.data.data,this.loading=!1}).catch(e=>{this.loading=!1})},methods:{kefu(){window.open("https://wpa.qq.com/msgrd?v=3&uin="+JSON.parse(localStorage.getItem("salesman")).salesman_qq_ID+"&site=qq&menu=yes")},goodsDown(a,b){this.$axios.post("/goodsDown",{goods_num:a},{headers:{Authorization:"Bearer"+localStorage.getItem("access_token")}}).then(e=>{this.$message({message:"下架成功",type:"success"}),this.goodsBelongSelf.splice(b,1)}).catch(e=>{this.$message.error("失败:"+e.response.data.message)})},handleCurrentChange(a){this.$axios.post("/goodsBelongSelf?page="+a,{},{headers:{Authorization:"Bearer"+localStorage.getItem("access_token")}}).then(e=>{this.goodsBelongSelf=e.data.data,this.loading=!1}).catch(e=>{this.loading=!1})},xiugai(a){this.$router.push("/user/5-5/"+a)}}},n=r(1);var component=Object(n.a)(d,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"usercontent"},[e._ssrNode('<div class="usercontentheader" data-v-1373e568>',"</div>",[e._ssrNode('<div class="actived" data-v-1373e568>全部传媒</div> '),r("nuxt-link",{attrs:{to:"/user/5-3",tag:"div"}},[e._v("审核中的传媒")]),e._ssrNode(" "),r("nuxt-link",{attrs:{to:"/user/5-4",tag:"div"}},[e._v("已入驻传媒")]),e._ssrNode(' <span class="kefu" data-v-1373e568>联系客服</span>')],2),e._ssrNode(' <div class="listitem contenttitle tac" data-v-1373e568><div data-v-1373e568>商品名称</div> <div data-v-1373e568>入驻平台</div> <div data-v-1373e568>价格</div> <div data-v-1373e568>当前状态</div> <div data-v-1373e568>商品操作</div></div> '+e._ssrList(e.goodsBelongSelf,function(t,r){return'<div class="contentitem" data-v-1373e568><div class="itemtitle tijiaodate" data-v-1373e568>'+e._ssrEscape("提交审核 : "+e._s(t.created_at))+'</div> <div class="listitem contentitem_cont" data-v-1373e568><div'+e._ssrStyle(null,"background:url("+e.$store.state.header_img+t.avatar_url+") 24px 31px/98px 98px no-repeat",null)+' data-v-1373e568><p style="fontZise:16px;color:#000;" data-v-1373e568><span class="modular" data-v-1373e568>'+e._ssrEscape(e._s(t.modular_name))+"</span>"+e._ssrEscape(e._s(t.title))+"</p> <p data-v-1373e568>"+e._ssrEscape("所属分类:"+e._s(t.theme_name))+"</p> <p data-v-1373e568>"+e._ssrEscape("媒体领域:"+e._s(t.filed_name))+'</p> <p class="nowrap" style="width:200px" data-v-1373e568>'+e._ssrEscape("商品编号:"+e._s(t.goods_num))+"</p></div> <div data-v-1373e568>"+e._ssrEscape(e._s(t.platform_name))+"</div> <div data-v-1373e568>"+e._ssrList(t.goods_price,function(t,i){return"<p"+e._ssrStyle(null,null,{display:"0.00"!==t.price&&0==t.floor_price?"":"none"})+" data-v-1373e568>"+e._ssrEscape(e._s(t.priceclassify_name)+": ")+'<span class="red" data-v-1373e568>'+e._ssrEscape("￥"+e._s(t.price))+"</span></p>"})+" "+(0!=t.goods_price[0].floor_price?'<p data-v-1373e568>价格: <span class="red" data-v-1373e568>'+e._ssrEscape(e._s(t.goods_price[0].floor_price))+"</span></p>":"\x3c!----\x3e")+"</div> <div data-v-1373e568>"+e._ssrEscape(e._s(0==t.verify_status?"审核中":1==t.verify_status?"未通过":1==t.status?"已上架":"已下架"))+"</div> "+(2==t.verify_status?"<div data-v-1373e568>"+(1==t.status?'<span class="cr xiajia" data-v-1373e568>'+e._ssrEscape(e._s(0==t.verify_status?"":1==t.verify_status?"":"商品下架"))+"</span>":"\x3c!----\x3e")+" "+(1==t.status?'<span class="xiugai cr" data-v-1373e568>修改商品</span>':"\x3c!----\x3e")+" "+(2==t.status?"<span data-v-1373e568>"+e._ssrEscape(e._s(0==t.verify_status?"":1==t.verify_status?"":"商品已下架"))+"</span>":"\x3c!----\x3e")+"</div>":"\x3c!----\x3e")+" "+(1==t.verify_status?"<div data-v-1373e568></div>":"\x3c!----\x3e")+" "+(0==t.verify_status?'<div class="cr" data-v-1373e568><span data-v-1373e568>请等待</span></div>':"\x3c!----\x3e")+"</div></div>"})+" "),e._ssrNode('<div class="fenye" data-v-1373e568>',"</div>",[r("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-size":15,layout:"prev, pager, next, jumper",total:15},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1)],2)])},[],!1,function(e){var t=r(220);t.__inject__&&t.__inject__(e)},"1373e568","65e7a96d");t.default=component.exports}};
//# sourceMappingURL=3232d6851713564d2fca.js.map