(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{363:function(t,e,n){},420:function(t,e,n){"use strict";var o=n(363);n.n(o).a},485:function(t,e,n){"use strict";n.r(e);var o=n(6),v={layout:"user",data:function(){return{loading:!0,goodsBelongSelf:[]}},mounted:function(){var t=this;Object(o.a)().then(function(e){return t.$axios.post("/goodsBelongSelf",{},{headers:{Authorization:"Bearer"+e}})}).then(function(e){e.data.data.forEach(function(e){0!=e.verify_status&&1!=e.verify_status||t.goodsBelongSelf.push(e)}),t.loading=!1}).catch(function(e){t.loading=!1})},methods:{kefu:function(){window.open("https://wpa.qq.com/msgrd?v=3&uin="+JSON.parse(localStorage.getItem("salesman")).salesman_qq_ID+"&site=qq&menu=yes")}}},_=(n(420),n(2)),component=Object(_.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"usercontent"},[n("div",{staticClass:"usercontentheader"},[n("nuxt-link",{attrs:{to:"/user/5-2",tag:"div"}},[t._v("全部传媒")]),t._v(" "),n("div",{staticClass:"actived"},[t._v("审核中的传媒")]),t._v(" "),n("nuxt-link",{attrs:{to:"/user/5-4",tag:"div"}},[t._v("已入驻传媒")]),t._v(" "),n("span",{staticClass:"kefu",on:{click:t.kefu}},[t._v("联系客服")])],1),t._v(" "),t._m(0),t._v(" "),t._l(t.goodsBelongSelf,function(e,o){return n("div",{key:o,staticClass:"contentitem"},[n("div",{staticClass:"itemtitle tijiaodate"},[t._v("提交审核 : "+t._s(e.created_at))]),t._v(" "),n("div",{staticClass:"listitem contentitem_cont"},[n("div",[n("p",{staticStyle:{fontZise:"16px",color:"#000"}},[n("span",{staticClass:"modular"},[t._v(t._s(e.modular_name))]),t._v(t._s(e.title))]),t._v(" "),n("p",[t._v("所属分类:"+t._s(e.theme_name))]),t._v(" "),n("p",[t._v("媒体领域:"+t._s(e.filed_name))]),t._v(" "),n("p",{staticClass:"nowrap",staticStyle:{width:"200px"}},[t._v("商品编号:"+t._s(e.goods_num))])]),t._v(" "),n("div",[t._v(t._s(e.platform_name))]),t._v(" "),n("div",t._l(e.goods_price,function(e,i){return n("p",{directives:[{name:"show",rawName:"v-show",value:"0.00"!==e.price,expression:"itemp.price !== '0.00'"}],key:i},[t._v(t._s(e.priceclassify_name)+": "),n("span",{staticClass:"red"},[t._v("￥"+t._s(e.price))])])}),0),t._v(" "),n("div",[t._v(t._s(0==e.verify_status?"审核中":1==e.verify_status?"未通过":"已上架"))]),t._v(" "),n("div",[t._v("取消审核")])])])})],2)])},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"listitem contenttitle tac"},[n("div",[t._v("商品名称")]),t._v(" "),n("div",[t._v("入驻平台")]),t._v(" "),n("div",[t._v("价格")]),t._v(" "),n("div",[t._v("当前状态")]),t._v(" "),n("div",[t._v("商品操作")])])}],!1,null,"bf81b990",null);e.default=component.exports}}]);