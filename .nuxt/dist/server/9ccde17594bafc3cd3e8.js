exports.ids=[16],exports.modules={112:function(e,t){},183:function(e,t,o){"use strict";o.r(t);var n=o(112),d=o.n(n);for(var r in n)"default"!==r&&function(e){o.d(t,e,function(){return n[e]})}(r);t.default=d.a},276:function(e,t,o){"use strict";o.r(t);var n=o(2),d={layout:"phone",data:()=>({goodsData:""}),mounted(){Object(n.f)({modular_id:5}).then(e=>{this.goodsData=e.data.data})},methods:{goods(a,b){Object(n.b)().then(e=>this.$axios.post("/joinShopcart",{goods_id_json:JSON.stringify({[a]:b})},{headers:{Authorization:"Bearer"+e}})).then(e=>{this.$message({message:"加入成功",type:"success"})}).catch(e=>{this.$message.error("加入失败")})},fanhui(){this.$router.push("/m")}}},r=o(1);var component=Object(r.a)(d,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._ssrNode('<div class="mheader" data-v-af05c3ee><span class="el-icon-arrow-left mfanhui" data-v-af05c3ee></span>\n        媒体分类\n    </div> '),e._ssrNode('<div class="fenlei" data-v-af05c3ee>',"</div>",[o("nuxt-link",{staticClass:"blue",attrs:{to:"/m/weixin"}},[e._v("微信营销")]),e._ssrNode(" "),o("nuxt-link",{attrs:{to:"/m/video"}},[e._v("短视频营销")]),e._ssrNode(" "),o("nuxt-link",{attrs:{to:"/m/weibo"}},[e._v("微博营销")]),e._ssrNode(" "),o("nuxt-link",{attrs:{to:"/m/seo"}},[e._v("套餐SEO")])],2),e._ssrNode(' <div class="select" data-v-af05c3ee></div> <div class="goodslist" data-v-af05c3ee>'+e._ssrList(e.goodsData.data,function(t,o){return'<div class="goodsitem" data-v-af05c3ee><div class="username" data-v-af05c3ee><p data-v-af05c3ee><span data-v-af05c3ee>'+e._ssrEscape(e._s(t.filed_name))+"</span>"+e._ssrEscape(e._s(t.title))+'</p> <p class="nowrap" data-v-af05c3ee>'+e._ssrEscape(e._s(t.title_about))+"</p> <p data-v-af05c3ee>"+e._ssrEscape(e._s(0==t.news_source_status?"非新闻源":1==t.news_source_status?"新闻源":"/"))+'</p> <p data-v-af05c3ee>价格:￥<span class="orange" data-v-af05c3ee>'+e._ssrEscape(e._s("0.00"==t.goods_price[0].price?"/":t.goods_price[0].price))+'</span></p></div> <span class="jinru" data-v-af05c3ee></span></div>'})+"</div>")],2)},[],!1,function(e){var t=o(183);t.__inject__&&t.__inject__(e)},"af05c3ee","49eb788d");t.default=component.exports}};
//# sourceMappingURL=9ccde17594bafc3cd3e8.js.map