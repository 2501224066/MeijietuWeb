exports.ids=[50],exports.modules={141:function(t,e){},196:function(t,e,d){"use strict";d.r(e);var n=d(141),o=d.n(n);for(var r in n)"default"!==r&&function(t){d.d(e,t,function(){return n[t]})}(r);e.default=o.a},211:function(t,e,d){"use strict";d.r(e);var n=d(2),o={layout:"user",data:()=>({loading:!0,goodsBelongSelf:[]}),mounted(){Object(n.a)().then(t=>this.$axios.post("/goodsBelongSelf",{},{headers:{Authorization:"Bearer"+t}})).then(t=>{t.data.data.forEach(t=>{2==t.verify_status&&this.goodsBelongSelf.push(t)}),this.loading=!1}).catch(t=>{this.loading=!1})},methods:{kefu(){window.open("https://wpa.qq.com/msgrd?v=3&uin="+JSON.parse(localStorage.getItem("salesman")).salesman_qq_ID+"&site=qq&menu=yes")},goodsDown(a,b){Object(n.a)().then(t=>this.$axios.post("/goodsDown",{goods_num:a},{headers:{Authorization:"Bearer"+t}})).then(t=>{this.$message({message:"删除成功",type:"success"}),this.goodsBelongSelf.splice(b,1)}).catch(t=>{this.$message.error("失败:"+t.response.data.message)})}}},r=d(1);var component=Object(r.a)(o,function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",[d("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"usercontent"},[t._ssrNode('<div class="usercontentheader" data-v-296b983a>',"</div>",[d("nuxt-link",{attrs:{to:"/user/5-2",tag:"div"}},[t._v("全部传媒")]),t._ssrNode(" "),d("nuxt-link",{attrs:{to:"/user/5-3",tag:"div"}},[t._v("审核中的传媒")]),t._ssrNode(' <div class="actived" data-v-296b983a>已入驻传媒</div> <span class="kefu" data-v-296b983a>联系客服</span>')],2),t._ssrNode(' <div class="listitem contenttitle tac" data-v-296b983a><div data-v-296b983a>商品名称</div> <div data-v-296b983a>入驻平台</div> <div data-v-296b983a>价格</div> <div data-v-296b983a>当前状态</div> <div data-v-296b983a>商品操作</div></div> '+t._ssrList(t.goodsBelongSelf,function(e,d){return'<div class="contentitem" data-v-296b983a><div class="itemtitle tijiaodate" data-v-296b983a>'+t._ssrEscape("提交审核 : "+t._s(e.created_at))+'</div> <div class="listitem contentitem_cont" data-v-296b983a><div data-v-296b983a><p style="fontZise:16px;color:#000;" data-v-296b983a><span class="modular" data-v-296b983a>'+t._ssrEscape(t._s(e.modular_name))+"</span>"+t._ssrEscape(t._s(e.title))+"</p> <p data-v-296b983a>"+t._ssrEscape("所属分类:"+t._s(e.theme_name))+"</p> <p data-v-296b983a>"+t._ssrEscape("媒体领域:"+t._s(e.filed_name))+'</p> <p class="nowrap" style="width:200px" data-v-296b983a>'+t._ssrEscape("商品编号:"+t._s(e.goods_num))+"</p></div> <div data-v-296b983a>"+t._ssrEscape(t._s(e.platform_name))+"</div> <div data-v-296b983a>"+t._ssrList(e.goods_price,function(e,i){return"<p"+t._ssrStyle(null,null,{display:"0.00"!==e.price?"":"none"})+" data-v-296b983a>"+t._ssrEscape(t._s(e.priceclassify_name)+": ")+'<span class="red" data-v-296b983a>'+t._ssrEscape("￥"+t._s(e.price))+"</span></p>"})+"</div> <div data-v-296b983a>"+t._ssrEscape(t._s(0==e.verify_status?"审核中":1==e.verify_status?"未通过":"已上架"))+"</div> "+(2==e.verify_status?'<div class="cr xiajia" data-v-296b983a><span data-v-296b983a>商品下架</span></div>':"\x3c!----\x3e")+"</div></div>"}))],2)])},[],!1,function(t){var e=d(196);e.__inject__&&e.__inject__(t)},"296b983a","6603d86f");e.default=component.exports}};
//# sourceMappingURL=4fe1616d92b11dfa8f38.js.map