exports.ids=[18],exports.modules={114:function(t,d){},183:function(t,d,e){"use strict";e.r(d);var r=e(114),n=e.n(r);for(var o in r)"default"!==o&&function(t){e.d(d,t,function(){return r[t]})}(o);d.default=n.a},275:function(t,d,e){"use strict";e.r(d);var r=e(2),n={layout:"phone",data:()=>({goodsData:""}),mounted(){Object(r.f)({modular_id:3}).then(t=>{this.goodsData=t.data.data})},methods:{goods(a){this.$router.push("/m/goods/"+a)},fanhui(){this.$router.go(-1)}}},o=e(1);var component=Object(o.a)(n,function(){var t=this,d=t.$createElement,e=t._self._c||d;return e("div",[t._ssrNode('<div class="mheader" data-v-6d0512f2><span class="el-icon-arrow-left mfanhui" data-v-6d0512f2></span>\n        媒体分类\n    </div> '),t._ssrNode('<div class="fenlei" data-v-6d0512f2>',"</div>",[e("nuxt-link",{attrs:{to:"/m/weixin"}},[t._v("微信营销")]),t._ssrNode(" "),e("nuxt-link",{attrs:{to:"/m/video"}},[t._v("短视频营销")]),t._ssrNode(" "),e("nuxt-link",{staticClass:"blue",attrs:{to:"/m/weibo"}},[t._v("微博营销")]),t._ssrNode(" "),e("nuxt-link",{attrs:{to:"/m/seo"}},[t._v("套餐SEO")])],2),t._ssrNode(' <div class="select" data-v-6d0512f2></div> <div class="goodslist" data-v-6d0512f2>'+t._ssrList(t.goodsData.data,function(d,e){return'<div class="goodsitem" data-v-6d0512f2><img'+t._ssrAttr("src",t.$store.state.header_img+d.avatar_url)+t._ssrAttr("alt",d.title)+' data-v-6d0512f2> <div class="username" data-v-6d0512f2><p data-v-6d0512f2><span data-v-6d0512f2>'+t._ssrEscape(t._s(d.filed_name))+"</span>"+t._ssrEscape(t._s(d.title))+'</p> <p class="norwap" data-v-6d0512f2>'+t._ssrEscape(t._s(d.title_about))+"</p> <p data-v-6d0512f2>"+t._ssrEscape("粉丝数:"+t._s(d.fans_num))+'</p></div> <span class="jinru" data-v-6d0512f2></span></div>'})+"</div>")],2)},[],!1,function(t){var d=e(183);d.__inject__&&d.__inject__(t)},"6d0512f2","5e18e518");d.default=component.exports}};
//# sourceMappingURL=89847b729b0111aad642.js.map