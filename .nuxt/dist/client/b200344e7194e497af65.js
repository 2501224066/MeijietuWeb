(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{336:function(t,n,o){},402:function(t,n,o){"use strict";var e=o(336);o.n(e).a},475:function(t,n,o){"use strict";o.r(n);var e=o(7),r={layout:"phone",data:function(){return{goodsData:""}},mounted:function(){var t=this;Object(e.f)({modular_id:1}).then(function(n){t.goodsData=n.data.data})},methods:{goods:function(a){this.$router.push("/m/goods/"+a)},fanhui:function(){this.$router.go(-1)}}},l=(o(402),o(2)),component=Object(l.a)(r,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("div",{staticClass:"mheader"},[o("span",{staticClass:"el-icon-arrow-left mfanhui",on:{click:t.fanhui}}),t._v("\n        媒体分类\n    ")]),t._v(" "),o("div",{staticClass:"fenlei"},[o("nuxt-link",{attrs:{to:""}},[t._v("微信营销")]),t._v(" "),o("nuxt-link",{attrs:{to:""}},[t._v("短视频营销")]),t._v(" "),o("nuxt-link",{attrs:{to:""}},[t._v("微博营销")]),t._v(" "),o("nuxt-link",{attrs:{to:""}},[t._v("套餐SEO")])],1),t._v(" "),o("div",{staticClass:"select"}),t._v(" "),o("div",{staticClass:"goodslist"},t._l(t.goodsData.data,function(n,e){return o("div",{key:e,staticClass:"goodsitem",on:{click:function(o){return t.goods(n.goods_num)}}},[o("img",{attrs:{src:t.$store.state.header_img+n.avatar_url,alt:n.title}}),t._v(" "),o("div",{staticClass:"username"},[o("p",[o("span",[t._v(t._s(n.filed_name))]),t._v(t._s(n.title))]),t._v(" "),o("p",{staticClass:"norwap"},[t._v(t._s(n.title_about))]),t._v(" "),o("p",[t._v("粉丝数:"+t._s(n.fans_num))])]),t._v(" "),o("span",{staticClass:"jinru"})])}),0)])},[],!1,null,"90e8b5b2",null);n.default=component.exports}}]);