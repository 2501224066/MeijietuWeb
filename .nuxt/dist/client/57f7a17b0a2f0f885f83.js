(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{333:function(t,e,n){},397:function(t,e,n){"use strict";var r=n(333);n.n(r).a},487:function(t,e,n){"use strict";n.r(e);var r=n(7),v={layout:"phone",data:function(){return{userdata:{},money:""}},mounted:function(){var t=this;if(!localStorage.getItem("userdata"))return this.$router.push("/m/login");this.userdata=JSON.parse(localStorage.getItem("userdata")),Object(r.b)().then(function(e){return t.$axios.post("/walletInfo",{},{headers:{Authorization:"Bearer"+e}})}).then(function(e){t.money=e.data.data.available_money}).catch(function(e){return console.log(e.response.data.message),t.$router.push("/m/login")})}},c=(n(397),n(2)),component=Object(c.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my"},[n("div",{staticClass:"mheader"},[n("img",{attrs:{src:t.$store.state.header_img+t.userdata.head_portrait,alt:"头像"}}),t._v(" "),n("div",[n("p",[t._v(t._s(t.userdata.nickname))]),t._v(" "),n("p",[t._v(t._s(t.userdata.phone))]),t._v(" "),n("p",[t._v("账户余额: "+t._s(t.money))]),t._v(" "),n("span"),t._v(" "),n("p")])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"jiange"}),t._v(" "),n("div",{staticClass:"mysc"},[t._v("\n        我的收藏\n    ")]),t._v(" "),n("div",{staticClass:"myzj"},[t._v("\n        资金管理\n    ")]),t._v(" "),n("div",{staticClass:"quit"},[t._v("\n        退出登录\n    ")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"myindent"},[this._v("我的订单 "),e("span",{staticClass:"allindent"},[this._v("全部订单")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"status"},[n("div",[n("img",{attrs:{src:"/m/status01.png",alt:"待付款"}}),n("p",[t._v("待付款")])]),t._v(" "),n("div",[n("img",{attrs:{src:"/m/status04.png",alt:"待接单"}}),n("p",[t._v("待接单")])]),t._v(" "),n("div",[n("img",{attrs:{src:"/m/status05.png",alt:"执行中"}}),n("p",[t._v("执行中")])]),t._v(" "),n("div",[n("img",{attrs:{src:"/m/status02.png",alt:"审核中"}}),n("p",[t._v("审核中")])]),t._v(" "),n("div",[n("img",{attrs:{src:"/m/status03.png",alt:"已完成"}}),n("p",[t._v("已完成")])])])}],!1,null,"1c772e0e",null);e.default=component.exports}}]);