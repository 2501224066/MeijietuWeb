(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{365:function(t,e,n){},422:function(t,e,n){"use strict";var r=n(365);n.n(r).a},469:function(t,e,n){"use strict";n.r(e);var r=n(6),c={layout:"user",data:function(){return{checked:!1,checkList:[],xiaoxiData:"",currentPage:1}},mounted:function(){var t=this;this.$axios.post("/newsBelongSelf",{read_status:""},{headers:{Authorization:"Bearer"+localStorage.getItem("access_token")}}).then(function(e){t.xiaoxiData=e.data.data}).catch(function(e){"Token has expired"==e.response.data.message&&Object(r.a)().then(function(e){return t.$axios.post("/newsBelongSelf",{read_status:""},{headers:{Authorization:"Bearer"+e}})}).then(function(e){t.xiaoxiData=e.data.data}).catch(function(e){t.$message.error("身份验证失效")})})},methods:{handleCurrentChange:function(a){var t=this;Object(r.a)().then(function(e){return t.$axios.post("/newsBelongSelf?page="+a,{read_status:""},{headers:{Authorization:"Bearer"+localStorage.getItem("access_token")}})}).then(function(e){t.xiaoxiData=e.data.data})}}},o=(n(422),n(2)),component=Object(o.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"usercontent"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._l(t.xiaoxiData.data,function(e,r){return n("div",{key:r,staticClass:"userc_c com"},[n("div",[t._v("系统消息")]),t._v(" "),n("div",[t._v(t._s(e.content))]),t._v(" "),n("div",[t._v(t._s(e.release_time))])])}),t._v(" "),n("div",{staticClass:"fenye"},[n("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-size":15,layout:"prev, pager, next, jumper",total:this.xiaoxiData.total},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1)],2)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"usercontentheader"},[e("div",{staticClass:"actived"},[this._v("我的消息")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"userc_titel com"},[e("div",[this._v("标题")]),this._v(" "),e("div",[this._v("内容消息")]),this._v(" "),e("div",[this._v("时间")])])}],!1,null,"1ecd182a",null);e.default=component.exports}}]);