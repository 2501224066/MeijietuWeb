exports.ids=[55],exports.modules={140:function(e,t){},200:function(e,t,d){"use strict";d.r(t);var c=d(140),r=d.n(c);for(var n in c)"default"!==n&&function(e){d.d(t,e,function(){return c[e]})}(n);t.default=r.a},266:function(e,t,d){"use strict";d.r(t);var c=d(2),r={layout:"user",data:()=>({loading:!0,goodsBelongSelf:[]}),mounted(){Object(c.b)().then(e=>this.$axios.post("/goodsBelongSelf",{},{headers:{Authorization:"Bearer"+e}})).then(e=>{e.data.data.forEach(e=>{0!=e.verify_status&&1!=e.verify_status||this.goodsBelongSelf.push(e)}),this.loading=!1}).catch(e=>{this.loading=!1})},methods:{kefu(){window.open("https://wpa.qq.com/msgrd?v=3&uin="+JSON.parse(localStorage.getItem("salesman")).salesman_qq_ID+"&site=qq&menu=yes")}}},n=d(1);var component=Object(n.a)(r,function(){var e=this,t=e.$createElement,d=e._self._c||t;return d("div",[d("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"usercontent"},[e._ssrNode('<div class="usercontentheader" data-v-6cf23f7e>',"</div>",[d("nuxt-link",{attrs:{to:"/user/5-2",tag:"div"}},[e._v("全部传媒")]),e._ssrNode(' <div class="actived" data-v-6cf23f7e>审核中的传媒</div> '),d("nuxt-link",{attrs:{to:"/user/5-4",tag:"div"}},[e._v("已入驻传媒")]),e._ssrNode(' <span class="kefu" data-v-6cf23f7e>联系客服</span>')],2),e._ssrNode(' <div class="listitem contenttitle tac" data-v-6cf23f7e><div data-v-6cf23f7e>商品名称</div> <div data-v-6cf23f7e>入驻平台</div> <div data-v-6cf23f7e>价格</div> <div data-v-6cf23f7e>当前状态</div> <div data-v-6cf23f7e>商品操作</div></div> '+e._ssrList(e.goodsBelongSelf,function(t,d){return'<div class="contentitem" data-v-6cf23f7e><div class="itemtitle tijiaodate" data-v-6cf23f7e>'+e._ssrEscape("提交审核 : "+e._s(t.created_at))+'</div> <div class="listitem contentitem_cont" data-v-6cf23f7e><div'+e._ssrStyle(null,"background:url("+e.$store.state.header_img+t.avatar_url+") 24px 31px/98px 98px no-repeat",null)+' data-v-6cf23f7e><p style="fontZise:16px;color:#000;" data-v-6cf23f7e><span class="modular" data-v-6cf23f7e>'+e._ssrEscape(e._s(t.modular_name))+"</span>"+e._ssrEscape(e._s(t.title))+"</p> <p data-v-6cf23f7e>"+e._ssrEscape("所属分类:"+e._s(t.theme_name))+"</p> <p data-v-6cf23f7e>"+e._ssrEscape("媒体领域:"+e._s(t.filed_name))+'</p> <p class="nowrap" style="width:200px" data-v-6cf23f7e>'+e._ssrEscape("商品编号:"+e._s(t.goods_num))+"</p></div> <div data-v-6cf23f7e>"+e._ssrEscape(e._s(t.platform_name))+"</div> <div data-v-6cf23f7e>"+e._ssrList(t.goods_price,function(t,i){return"<p"+e._ssrStyle(null,null,{display:"0.00"!==t.price&&0==t.floor_price?"":"none"})+" data-v-6cf23f7e>"+e._ssrEscape(e._s(t.priceclassify_name)+": ")+'<span class="red" data-v-6cf23f7e>'+e._ssrEscape("￥"+e._s(t.price))+"</span></p>"})+" "+(0!=t.goods_price[0].floor_price?'<p data-v-6cf23f7e>价格: <span class="red" data-v-6cf23f7e>'+e._ssrEscape(e._s(t.goods_price[0].floor_price))+"</span></p>":"\x3c!----\x3e")+"</div> <div data-v-6cf23f7e>"+e._ssrEscape(e._s(0==t.verify_status?"审核中":1==t.verify_status?"未通过":1==t.status?"已上架":"已下架"))+"</div> <div data-v-6cf23f7e>请等待</div></div></div>"}))],2)])},[],!1,function(e){var t=d(200);t.__inject__&&t.__inject__(e)},"6cf23f7e","65f5c0ee");t.default=component.exports}};
//# sourceMappingURL=708f031f1051e7504d43.js.map