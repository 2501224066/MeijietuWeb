(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{347:function(e,t,n){},410:function(e,t,n){"use strict";var o=n(347);n.n(o).a},505:function(e,t,n){"use strict";n.r(t);var o=n(117),r=(n(52),n(6)),c=n(7),header=n(118),d={layout:"header",asyncData:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(t){var n,o,data,r,d;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,e.next=3,n.$axios.get("/getGoodsAttribute");case 3:return o=e.sent,data=o.data,e.next=7,Object(c.f)({modular_id:6,theme_id:11});case 7:return r=e.sent,d=r.data,e.abrupt("return",{mediadata:data.data[5].theme,listdata:d.data.data,selectWeixin:d.data});case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),data:function(){return{loading:!1,listdata:[],theme_index:0,filed:"",fansnumlevel:"",readlevel:"",priceclassify_index:0,hold:!0,diqu:!0,pricelevel:"",region:"",checkboxshow:!1,selectWeixin:"",currentPage:1,keyword:"",issoucanglist:[],btnwait:!1}},methods:{kefu:function(){window.open("https://wpa.qq.com/msgrd?v=3&uin="+JSON.parse(localStorage.getItem("salesman")).salesman_qq_ID+"&site=qq&menu=yes")},ishold:function(){1==this.hold?this.hold=!1:this.hold=!0},diquhold:function(){1==this.diqu?this.diqu=!1:this.diqu=!0},qingkong:function(){this.region=this.filed=this.fansnumlevel=this.pricelevel=this.readlevel="",this.priceclassify_index=0},selectGoods:function(a){0==this.theme_index&&""!==this.readlevel?(this.mediadata[0].readlevel[this.readlevel].readlevel_min,this.mediadata[0].readlevel[this.readlevel].readlevel_max):1==this.theme_index&&""!==this.readlevel&&(this.mediadata[1].likelevel[this.readlevel].likelevel_min,this.mediadata[1].likelevel[this.readlevel].likelevel_max),this.keyword=this.$store.state.searchkeyword.keyword;this.$store.commit("setsearchkeyword","")},addshopcar:function(a,b){var e=this;return this.btnwait?this.$message({message:"操作太频繁,请稍后",type:"warning"}):""===this.$store.state.userdata?this.$message({message:"需要登陆才能加入购物车",type:"warning"}):1!=this.$store.state.userdata.identity?this.$message({message:"你尚未拥有此功能",type:"warning"}):(this.btnwait=!0,void Object(c.b)().then(function(t){return e.$axios.post("/joinShopcart",{goods_id_json:JSON.stringify(Object(o.a)({},a,b))},{headers:{Authorization:"Bearer"+t}})}).then(function(t){e.$store.state.userdata.shopcart_count+=1,e.btnwait=!1,e.$message({message:"恭喜你，加入购物车成功",type:"success"})}).catch(function(t){if(e.btnwait=!1,401==t.response.status)return e.$message({message:"加入购物车失败",type:"warning"});e.$message({message:t.response.data.message,type:"warning"})}))},collection:function(a,b){var e=this;return this.btnwait?this.$message({message:"操作太频繁,请稍后",type:"warning"}):""==this.$store.state.userdata?this.$router.push("/login"):2==this.$store.state.userdata.identity?this.$message({message:"媒体主没有此功能",type:"warning"}):(this.btnwait=!0,this.issoucanglist.push(b),void Object(c.b)().then(function(t){return e.$axios.post("/collectionGoods",{goods_id_json:JSON.stringify({1:a})},{headers:{Authorization:"Bearer"+t}})}).then(function(t){e.btnwait=!1,e.$message({message:"恭喜你，收藏成功",type:"success"})}).catch(function(t){e.btnwait=!1,e.issoucanglist.shift(),e.$message.error("收藏失败:"+t.response.data.message)}))},getGoodsdetails:function(e){this.$router.push("/goods/"+e)},handleCurrentChange:function(e){this.loading=!0,this.selectGoods(e)}},mounted:function(){Object(c.a)(),Object(c.c)(),window.document.body.style.background="#eef2f7",""!=this.$store.state.searchkeyword&&this.selectGoods()},components:{headert:header.a},watch:{theme_index:function(){this.loading=!0,this.currentPage=1,this.selectGoods()},filed:function(){this.loading=!0,this.currentPage=1,this.selectGoods()},fansnumlevel:function(){this.loading=!0,this.currentPage=1,this.selectGoods()},readlevel:function(){this.loading=!0,this.currentPage=1,this.selectGoods()},priceclassify_index:function(){this.loading=!0,this.currentPage=1,this.selectGoods()},pricelevel:function(){this.loading=!0,this.currentPage=1,this.selectGoods()},region:function(){this.loading=!0,this.currentPage=1,this.selectGoods()},searchkeyword:function(a){""!=a&&(this.keyword=a.keyword,this.loading=!0,this.selectGoods())}},computed:{searchkeyword:function(){return this.$store.state.searchkeyword}}},l=(n(410),n(2)),component=Object(l.a)(d,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("headert"),e._v(" "),n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"goodslist a"},[n("div",{staticClass:"goodslisttop"},[n("el-button",{staticClass:"fl",attrs:{type:"primary"}},[e._v("刷新")]),e._v(" "),n("el-button",{staticClass:"fr lianxi",attrs:{type:"primary"},on:{click:e.kefu}},[e._v("联系客服")])],1),e._v(" "),e._m(0),e._v(" "),e._l(e.listdata,function(t,o){return n("div",{key:o,staticClass:"goodslistcontent goodslistitem"},[n("div",{staticClass:"cr"},[n("div",{staticClass:"textp"},[n("h4",[e._v(e._s(t.title))]),e._v(" "),n("p",[e._v("领域:"+e._s(t.filed_name))])])]),e._v(" "),n("div",{staticClass:"cr"},[e._v(e._s(t.title_about))]),e._v(" "),n("div",{staticClass:"cr"},e._l(t.goods_price,function(t){return n("p",{key:t.priceclassify_id,staticClass:"tac"},[n("span",{staticClass:"red"},[e._v(e._s("0.00"==t.price?"/":t.price))])])}),0),e._v(" "),n("div",{staticClass:"cr"},[n("p",[e._v(e._s(t.filed_name))])]),e._v(" "),n("div",[n("div",{class:-1==e.issoucanglist.indexOf(o)?"shoucang":"isshoucang",on:{click:function(n){return n.stopPropagation(),e.collection(t.goods_id,o)}}},[e._v("收藏")]),e._v(" "),n("div",{staticClass:"addcar",on:{click:function(n){return n.stopPropagation(),e.addshopcar(t.goods_id,t.goods_price.goods_price_id)}}},[e._v(" 加入购物车")])])])}),e._v(" "),n("div",{staticClass:"fenye"},[n("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-size":15,layout:"prev, pager, next, jumper",total:this.selectWeixin.total},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1)],2)],1)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"goodslisttitle goodslistcontent"},[n("div",[e._v("媒介名称")]),e._v(" "),n("div",[e._v("简介")]),e._v(" "),n("div",[e._v("参考报价")]),e._v(" "),n("div",[e._v("分类")]),e._v(" "),n("div",[e._v("操作")])])}],!1,null,"7e84a57a",null);t.default=component.exports}}]);