(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{332:function(t,n,e){},393:function(t,n,e){"use strict";var o=e(332);e.n(o).a},486:function(t,n,e){"use strict";e.r(n);var o=e(7),r={layout:"phone",data:function(){return{goodsData:""}},mounted:function(){var t=this;Object(o.f)({modular_id:1}).then(function(n){t.goodsData=n.data.data})},methods:{goods:function(a){this.$router.push("/m/goods/"+a)}}},_=(e(393),e(2)),component=Object(_.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._m(0),t._v(" "),e("div",{staticClass:"fenlei"},[e("nuxt-link",{attrs:{to:""}},[t._v("微信营销")]),t._v(" "),e("nuxt-link",{attrs:{to:""}},[t._v("短视频营销")]),t._v(" "),e("nuxt-link",{attrs:{to:""}},[t._v("微博营销")]),t._v(" "),e("nuxt-link",{attrs:{to:""}},[t._v("套餐SEO")])],1),t._v(" "),e("div",{staticClass:"select"}),t._v(" "),e("div",{staticClass:"goodslist"},[t._m(1),t._v(" "),t._l(t.goodsData.data,function(n,o){return e("div",{key:o,staticClass:"goodsitem",on:{click:function(e){return t.goods(n.goods_num)}}},[e("img",{attrs:{src:t.$store.state.header_img+n.avatar_url,alt:n.title}}),t._v(" "),e("div",{staticClass:"username"},[e("p",[e("span",[t._v(t._s(n.filed_name))]),t._v(t._s(n.title))]),t._v(" "),e("p",{staticClass:"norwap"},[t._v(t._s(n.title_about))]),t._v(" "),e("p",[t._v("粉丝数:"+t._s(n.fans_num))])]),t._v(" "),e("span",{staticClass:"jinru"})])})],2)])},[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"mheader"},[n("span",{staticClass:"el-icon-arrow-left mfanhui"}),this._v("\n        媒体分类\n    ")])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"goodsitem"},[n("img",{attrs:{src:"/usericon/personal_002.png",alt:""}}),this._v(" "),n("div",{staticClass:"username"},[n("p",[n("span",[this._v("健康运动")]),this._v("雪菲于雪飞")]),this._v(" "),n("p",[this._v("我是雪菲与fei雪给大家带了实用的健康方法")]),this._v(" "),n("p",[this._v("粉丝数:36000")])])])}],!1,null,"fff68232",null);n.default=component.exports}}]);