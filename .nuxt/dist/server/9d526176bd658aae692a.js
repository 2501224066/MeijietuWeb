exports.ids=[50],exports.modules={138:function(t,d){},192:function(t,d,e){"use strict";e.r(d);var n=e(138),v=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(d,t,function(){return n[t]})}(r);d.default=v.a},207:function(t,d,e){"use strict";e.r(d);var n=e(2),v={layout:"user",data:()=>({loading:!0,goodsBelongSelf:[]}),mounted(){Object(n.a)().then(t=>this.$axios.post("/goodsBelongSelf",{},{headers:{Authorization:"Bearer"+t}})).then(t=>{t.data.data.forEach(t=>{2==t.verify_status&&this.goodsBelongSelf.push(t)}),this.loading=!1}).catch(t=>{this.loading=!1})},methods:{kefu(){window.open("https://wpa.qq.com/msgrd?v=3&uin=28458999&site=qq&menu=yes")}}},r=e(1);var component=Object(r.a)(v,function(){var t=this,d=t.$createElement,e=t._self._c||d;return e("div",[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"usercontent"},[t._ssrNode('<div class="usercontentheader" data-v-6a97050d>',"</div>",[e("nuxt-link",{attrs:{to:"/user/5-2",tag:"div"}},[t._v("全部传媒")]),t._ssrNode(" "),e("nuxt-link",{attrs:{to:"/user/5-3",tag:"div"}},[t._v("审核中的传媒")]),t._ssrNode(' <div class="actived" data-v-6a97050d>已入驻传媒</div> <span class="kefu" data-v-6a97050d>联系客服</span>')],2),t._ssrNode(' <div class="listitem contenttitle tac" data-v-6a97050d><div data-v-6a97050d>商品名称</div> <div data-v-6a97050d>入驻平台</div> <div data-v-6a97050d>价格</div> <div data-v-6a97050d>当前状态</div> <div data-v-6a97050d>商品操作</div></div> '+t._ssrList(t.goodsBelongSelf,function(d,e){return'<div class="contentitem" data-v-6a97050d><div class="itemtitle tijiaodate" data-v-6a97050d>'+t._ssrEscape("提交审核 : "+t._s(d.created_at))+'</div> <div class="listitem contentitem_cont" data-v-6a97050d><div data-v-6a97050d><p style="fontZise:16px;color:#000;" data-v-6a97050d><span class="modular" data-v-6a97050d>'+t._ssrEscape(t._s(d.modular_name))+"</span>"+t._ssrEscape(t._s(d.title))+"</p> <p data-v-6a97050d>"+t._ssrEscape("所属分类:"+t._s(d.theme_name))+"</p> <p data-v-6a97050d>"+t._ssrEscape("媒体领域:"+t._s(d.filed_name))+'</p> <p class="nowrap" style="width:200px" data-v-6a97050d>'+t._ssrEscape("商品编号:"+t._s(d.goods_num))+"</p></div> <div data-v-6a97050d>"+t._ssrEscape(t._s(d.platform_name))+"</div> <div data-v-6a97050d>"+t._ssrList(d.goods_price,function(d,i){return"<p"+t._ssrStyle(null,null,{display:"0.00"!==d.price?"":"none"})+" data-v-6a97050d>"+t._ssrEscape(t._s(d.priceclassify_name)+": ")+'<span class="red" data-v-6a97050d>'+t._ssrEscape("￥"+t._s(d.price))+"</span></p>"})+"</div> <div data-v-6a97050d>"+t._ssrEscape(t._s(0==d.verify_status?"审核中":1==d.verify_status?"未通过":"已上架"))+"</div> <div data-v-6a97050d>取消审核</div></div></div>"}))],2)])},[],!1,function(t){var d=e(192);d.__inject__&&d.__inject__(t)},"6a97050d","6603d86f");d.default=component.exports}};
//# sourceMappingURL=9d526176bd658aae692a.js.map