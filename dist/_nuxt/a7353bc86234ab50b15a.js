(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{373:function(t,o,n){},434:function(t,o,n){"use strict";var e=n(373);n.n(e).a},446:function(t,o,n){"use strict";n.r(o);n(83);var e={layout:"phone",data:function(){return{goodsData:""}},mounted:function(){var t=this,a=this.$route.path.split("/")[3];this.$axios("/oneGoodsInfo?goods_num="+a).then(function(o){console.log(o.data.data.data[0]),t.goodsData=o.data.data.data[0]})}},r=(n(434),n(2)),component=Object(r.a)(e,function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",[t._m(0),t._v(" "),n("div",[n("img",{staticClass:"goodsimg",attrs:{src:t.$store.state.header_img+t.goodsData.avatar_url,alt:""}}),t._v(" "),n("div",{staticClass:"username"},[n("p",[n("span",[t._v(t._s(t.goodsData.filed_name))]),t._v(t._s(t.goodsData.title))]),t._v(" "),n("p",{staticClass:"norwap"},[t._v(t._s(t.goodsData.title_about))]),t._v(" "),n("p",[t._v("地区: "),n("span",[t._v(t._s(t.goodsData.region_name))]),t._v("  粉丝数:"+t._s(t.goodsData.fans_num))])]),t._v(" "),t._l(t.goodsData.goods_price,function(o,e){return n("div",{key:e,staticClass:"goodsprice"},[t._v("\n            "+t._s(o.priceclassify_name)+" : "),n("span",[t._v("￥"+t._s(o.price)+"元")]),t._v(" "),n("div",{staticClass:"fr"})])})],2)])},[function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"mheader"},[o("span",{staticClass:"el-icon-arrow-left mfanhui"}),this._v("\n        商品详情\n    ")])}],!1,null,"e8d636a8",null);o.default=component.exports}}]);