exports.ids=[16],exports.modules={112:function(t,e){},181:function(t,e,d){"use strict";d.r(e);var n=d(112),o=d.n(n);for(var r in n)"default"!==r&&function(t){d.d(e,t,function(){return n[t]})}(r);e.default=o.a},272:function(t,e,d){"use strict";d.r(e);var n=d(2),o={layout:"phone",data:()=>({goodsData:""}),mounted(){Object(n.f)({modular_id:6}).then(t=>{this.goodsData=t.data.data})},methods:{goods(a){this.$router.push("/m/goods/"+a)},fanhui(){this.$router.go(-1)}}},r=d(1);var component=Object(r.a)(o,function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",[t._ssrNode('<div class="mheader" data-v-42232e25><span class="el-icon-arrow-left mfanhui" data-v-42232e25></span>\n        媒体分类\n    </div> '),t._ssrNode('<div class="fenlei" data-v-42232e25>',"</div>",[d("nuxt-link",{attrs:{to:"/m/weixin"}},[t._v("微信营销")]),t._ssrNode(" "),d("nuxt-link",{attrs:{to:"/m/video"}},[t._v("短视频营销")]),t._ssrNode(" "),d("nuxt-link",{attrs:{to:"/m/weibo"}},[t._v("微博营销")]),t._ssrNode(" "),d("nuxt-link",{attrs:{to:"/m/seo"}},[t._v("套餐SEO")])],2),t._ssrNode(' <div class="select" data-v-42232e25></div> <div class="goodslist" data-v-42232e25>'+t._ssrList(t.goodsData.data,function(e,d){return'<div class="goodsitem" data-v-42232e25><div class="username" data-v-42232e25><p data-v-42232e25><span data-v-42232e25>'+t._ssrEscape(t._s(e.filed_name))+"</span>"+t._ssrEscape(t._s(e.title))+'</p> <p class="norwap" data-v-42232e25>'+t._ssrEscape(t._s(e.title_about))+"</p> <p data-v-42232e25>"+t._ssrEscape(t._s(e.filed_name))+'</p></div> <span class="jinru" data-v-42232e25></span></div>'})+"</div>")],2)},[],!1,function(t){var e=d(181);e.__inject__&&e.__inject__(t)},"42232e25","fe2e2d8c");e.default=component.exports}};
//# sourceMappingURL=d4331124a9f46e5febfe.js.map