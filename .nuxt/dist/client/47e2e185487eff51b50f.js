(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{375:function(o,e,t){},376:function(o,e,t){},432:function(o,e,t){"use strict";var c=t(375);t.n(c).a},433:function(o,e,t){"use strict";var c=t(376);t.n(c).a},434:function(o,e,t){"use strict";t.r(e);t(52);var c=t(7),r=t(6),n={data:function(){return{userdata:"",input:"",options:[{value:"1",label:"微信公众号"},{value:"2",label:"微博"},{value:"3",label:"短视频"}],value:"1"}},props:["banner"],methods:{searchkeyword:function(){return this.$store.commit("setsearchkeyword",{modula:this.value,keyword:this.input}),"1"==this.value?this.$router.push("/search/weixin"):"2"==this.value?this.$router.push("/search/weibo"):"3"==this.value?this.$router.push("/search/video"):void 0},liaojie:function(a){0===a?window.open("https://wpa.qq.com/msgrd?v=3&uin=1999868&site=qq&menu=yes"):window.open("https://wpa.qq.com/msgrd?v=3&uin=28458999&site=qq&menu=yes")}},mounted:function(){}},l=(t(432),t(2)),_=Object(l.a)(n,function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",[t("div",{staticClass:"bgcf"},[t("div",{staticClass:"search"},[t("nuxt-link",{staticClass:"logo cr",attrs:{to:"/"}}),o._v(" "),t("div",{staticClass:"rightsearch"},[t("div",{staticClass:"searchborder"},[t("el-select",{staticClass:"elSele",staticStyle:{width:"120px"},attrs:{placeholder:"请选择"},model:{value:o.value,callback:function(e){o.value=e},expression:"value"}},o._l(o.options,function(o){return t("el-option",{key:o.value,attrs:{label:o.label,value:o.value}})}),1),o._v(" "),t("el-input",{staticClass:"searchkey",staticStyle:{borderRadius:"0"},attrs:{placeholder:"请输入你要搜索的关键字"},model:{value:o.input,callback:function(e){o.input=e},expression:"input"}}),o._v(" "),t("el-button",{staticClass:"searchbtn",staticStyle:{height:"37px"},attrs:{type:"primary"},on:{click:o.searchkeyword}},[o._v("搜索")])],1),o._v(" "),t("nuxt-link",{staticClass:"shopcar",attrs:{to:"/shopcar",tag:"button"}},[t("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:"/indexicon/douh_icon002.png"}}),o._v(" 购物车("+o._s(o.$store.state.userdata.shopcart_count||"0")+")")])],1)],1),o._v(" "),t("div",{staticClass:"headerNav"},[t("nuxt-link",{staticClass:"fenlei",attrs:{to:"/"}},[o._v("营销首页")]),o._v(" "),t("nuxt-link",{style:"/search/weixin"==o.$route.path?"color:#5141ED":"",attrs:{to:"/search/weixin"}},[o._v("微信营销")]),o._v(" "),t("nuxt-link",{style:"/search/video"==o.$route.path?"color:#5141ED":"",attrs:{to:"/search/video"}},[o._v("短视频营销")]),o._v(" "),t("nuxt-link",{style:"/search/weibo"==o.$route.path?"color:#5141ED":"",attrs:{to:"/search/weibo"}},[o._v("微博营销")]),o._v(" "),t("nuxt-link",{style:"/search/selfproduct"==o.$route.path?"color:#5141ED":"",attrs:{to:"/search/selfproduct"}},[o._v("SEO")]),o._v(" "),t("nuxt-link",{style:"/search/service"==o.$route.path?"color:#5141ED":"",attrs:{to:"/search/service"}},[o._v("服务项目")])],1)]),o._v(" "),t("div",{staticClass:"banner"},[t("el-carousel",{attrs:{height:"480px"}},o._l(o.banner,function(e,c){return t("el-carousel-item",{key:e.id},[t("img",{staticClass:"bannerimg",attrs:{src:o.$store.state.header_img+e.img},on:{click:function(e){return o.liaojie(c)}}})])}),1)],1)])},[],!1,null,"471b6403",null).exports,d={asyncData:function(){var o=Object(c.a)(regeneratorRuntime.mark(function o(e){var t,c,r,n,l,_,d;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.app,e.params,o.next=3,t.$axios("/banner");case 3:return c=o.sent,r=c.data,o.next=7,t.$axios("/randomSalesman");case 7:return n=o.sent,l=n.data,o.next=11,t.$axios("/information");case 11:return _=o.sent,d=_.data,o.abrupt("return",{indexData:{banner:r.data,randomSalesman:l.data,information:d.data}});case 14:case"end":return o.stop()}},o)}));return function(e){return o.apply(this,arguments)}}(),layout:"header",data:function(){return{input:"",weixinclass:1,weixboclass:1,videoclass:1,weixincolle:[],iswait:!1}},components:{headert:_},methods:{collection:function(a,b){var o=this;return 1==this.iswait?this.$message({message:"请稍等",type:"warning"}):(this.iswait=!0,""==this.$store.state.userdata?this.$router.push("/login"):(this.weixincolle.push(b),void Object(r.a)().then(function(e){return o.$axios.post("/collectionGoods",{goods_id_json:JSON.stringify({1:a})},{headers:{Authorization:"Bearer"+e}})}).then(function(e){o.$message({message:"收藏成功",type:"success"}),o.iswait=!1}).catch(function(e){o.$message.error("收藏失败"+e.response.data.message),o.weixincolle.shift(),o.iswait=!1})))},getGoodsdetails:function(o){this.$router.push("/goods/"+o)},zixun:function(a){this.$router.push("/information/"+a)}},mounted:function(){Object(r.b)(),localStorage.setItem("salesman",JSON.stringify(this.indexData.randomSalesman)),""==localStorage.getItem("salesman")&&this.$axios("/recommendGoods").then(function(o){localStorage.setItem("salesman",JSON.stringify(o.data.data))})}},v=(t(433),Object(l.a)(d,function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",{staticClass:"allbody"},[t("headert",{attrs:{banner:o.indexData.banner}}),o._v(" "),t("div",{staticClass:"banxin",staticStyle:{"margin-top":"200px"}},[t("div",{staticClass:"plate"},[t("div",{staticClass:"plateheader"},[t("h3",[o._v("微信公众号")]),o._v(" "),t("ul",[t("li",{class:1===o.weixinclass?"select":"",on:{click:function(e){o.weixinclass=1}}},[o._v("金融理财")]),o._v(" "),t("li",{class:2===o.weixinclass?"select":"",on:{click:function(e){o.weixinclass=2}}},[o._v("情感美妆")]),o._v(" "),t("li",{class:3===o.weixinclass?"select":"",on:{click:function(e){o.weixinclass=3}}},[o._v("母婴教育")]),o._v(" "),t("li",{class:4===o.weixinclass?"select":"",on:{click:function(e){o.weixinclass=4}}},[o._v("地域美食")]),o._v(" "),t("li",{class:5===o.weixinclass?"select":"",on:{click:function(e){o.weixinclass=5}}},[o._v("时事资讯")])]),o._v(" "),t("nuxt-link",{staticClass:"fr cr more",attrs:{to:"/search/weixin"}},[o._v("查看更多")])],1),o._v(" "),o._l(o.indexData.recommendGoods["微信营销"]["公众号"]["金融理财"],function(e){return t("div",{directives:[{name:"show",rawName:"v-show",value:1===o.weixinclass,expression:"weixinclass===1"}],key:e.goods_id,staticClass:"personcard"},[t("div",{staticClass:"persontop"},[t("div",{staticClass:"persontopclass fl"},[o._v(o._s(e.filed_name))]),o._v(" "),t("div",{class:"-1"==o.weixincolle.indexOf(e.goods_id)?"collection cr fr":"collection cr fr colled",on:{click:function(t){return o.collection(e.goods_id,e.goods_id)}}},[o._v("收藏")]),o._v(" "),t("div",{staticClass:"personportrait cr"},[t("nuxt-link",{staticClass:"agoods",attrs:{to:"/goods/"+e.goods_num}}),o._v(" "),t("img",{attrs:{src:o.$store.state.header_img+e.avatar_url}})],1),o._v(" "),t("p",[o._v(o._s(e.title))]),o._v(" "),t("p",{staticClass:"price"},[o._v(o._s("0.00"!==e.goods_price[0].price?e.goods_price[0].price:"0.00"!==e.goods_price[1].price?e.goods_price[1].price:"0.00"!==e.goods_price[2].price?e.goods_price[2].price:e.goods_price[3].price))])]),o._v(" "),t("div",{staticClass:"personbottom"},[t("div",[t("p",[o._v(o._s(e.fans_num))]),o._v(" "),t("p",[o._v("粉丝数量")])]),o._v(" "),t("div",[t("p",[o._v(o._s(e.avg_read_num))]),o._v(" "),t("p",[o._v("平均阅读数")])])])])}),o._v(" "),o._l(o.indexData.recommendGoods["微信营销"]["公众号"]["情感美妆"],function(e){return t("div",{directives:[{name:"show",rawName:"v-show",value:2===o.weixinclass,expression:"weixinclass===2"}],key:e.goods_id,staticClass:"personcard"},[t("div",{staticClass:"persontop"},[t("div",{staticClass:"persontopclass fl"},[o._v(o._s(e.filed_name))]),o._v(" "),t("div",{class:"-1"==o.weixincolle.indexOf(e.goods_id)?"collection cr fr":"collection cr fr colled",on:{click:function(t){return o.collection(e.goods_id,e.goods_id)}}},[o._v("收藏")]),o._v(" "),t("div",{staticClass:"personportrait cr"},[t("nuxt-link",{staticClass:"agoods",attrs:{to:"/goods/"+e.goods_num}}),o._v(" "),t("img",{attrs:{src:o.$store.state.header_img+e.avatar_url}})],1),o._v(" "),t("p",[o._v(o._s(e.title))]),o._v(" "),t("p",{staticClass:"price"},[o._v(o._s("0.00"!==e.goods_price[0].price?e.goods_price[0].price:"0.00"!==e.goods_price[1].price?e.goods_price[1].price:"0.00"!==e.goods_price[2].price?e.goods_price[2].price:e.goods_price[3].price))])]),o._v(" "),t("div",{staticClass:"personbottom"},[t("div",[t("p",[o._v(o._s(e.fans_num))]),o._v(" "),t("p",[o._v("粉丝数量")])]),o._v(" "),t("div",[t("p",[o._v(o._s(e.avg_read_num))]),o._v(" "),t("p",[o._v("平均阅读数")])])])])}),o._v(" "),o._l(o.indexData.recommendGoods["微信营销"]["公众号"]["母婴教育"],function(e){return t("div",{directives:[{name:"show",rawName:"v-show",value:3===o.weixinclass,expression:"weixinclass===3"}],key:e.goods_id,staticClass:"personcard"},[t("div",{staticClass:"persontop"},[t("div",{staticClass:"persontopclass fl"},[o._v(o._s(e.filed_name))]),o._v(" "),t("div",{class:"-1"==o.weixincolle.indexOf(e.goods_id)?"collection cr fr":"collection cr fr colled",on:{click:function(t){return o.collection(e.goods_id,e.goods_id)}}},[o._v("收藏")]),o._v(" "),t("div",{staticClass:"personportrait cr"},[t("nuxt-link",{staticClass:"agoods",attrs:{to:"/goods/"+e.goods_num}}),o._v(" "),t("img",{attrs:{src:o.$store.state.header_img+e.avatar_url}})],1),o._v(" "),t("p",[o._v(o._s(e.title))]),o._v(" "),t("p",{staticClass:"price"},[o._v(o._s("0.00"!==e.goods_price[0].price?e.goods_price[0].price:"0.00"!==e.goods_price[1].price?e.goods_price[1].price:"0.00"!==e.goods_price[2].price?e.goods_price[2].price:e.goods_price[3].price))])]),o._v(" "),t("div",{staticClass:"personbottom"},[t("div",[t("p",[o._v(o._s(e.fans_num))]),o._v(" "),t("p",[o._v("粉丝数量")])]),o._v(" "),t("div",[t("p",[o._v(o._s(e.avg_read_num))]),o._v(" "),t("p",[o._v("平均阅读数")])])])])}),o._v(" "),o._l(o.indexData.recommendGoods["微信营销"]["公众号"]["地域美食"],function(e){return t("div",{directives:[{name:"show",rawName:"v-show",value:4===o.weixinclass,expression:"weixinclass===4"}],key:e.goods_id,staticClass:"personcard"},[t("div",{staticClass:"persontop"},[t("div",{staticClass:"persontopclass fl"},[o._v(o._s(e.filed_name))]),o._v(" "),t("div",{class:"-1"==o.weixincolle.indexOf(e.goods_id)?"collection cr fr":"collection cr fr colled",on:{click:function(t){return o.collection(e.goods_id,e.goods_id)}}},[o._v("收藏")]),o._v(" "),t("div",{staticClass:"personportrait cr"},[t("nuxt-link",{staticClass:"agoods",attrs:{to:"/goods/"+e.goods_num}}),o._v(" "),t("img",{attrs:{src:o.$store.state.header_img+e.avatar_url}})],1),o._v(" "),t("p",[o._v(o._s(e.title))]),o._v(" "),t("p",{staticClass:"price"},[o._v(o._s("0.00"!==e.goods_price[0].price?e.goods_price[0].price:"0.00"!==e.goods_price[1].price?e.goods_price[1].price:"0.00"!==e.goods_price[2].price?e.goods_price[2].price:e.goods_price[3].price))])]),o._v(" "),t("div",{staticClass:"personbottom"},[t("div",[t("p",[o._v(o._s(e.fans_num))]),o._v(" "),t("p",[o._v("粉丝数量")])]),o._v(" "),t("div",[t("p",[o._v(o._s(e.avg_read_num))]),o._v(" "),t("p",[o._v("平均阅读数")])])])])}),o._v(" "),o._l(o.indexData.recommendGoods["微信营销"]["公众号"]["时事资讯"],function(e){return t("div",{directives:[{name:"show",rawName:"v-show",value:5===o.weixinclass,expression:"weixinclass===5"}],key:e.goods_id,staticClass:"personcard"},[t("div",{staticClass:"persontop"},[t("div",{staticClass:"persontopclass fl"},[o._v(o._s(e.filed_name))]),o._v(" "),t("div",{class:"-1"==o.weixincolle.indexOf(e.goods_id)?"collection cr fr":"collection cr fr colled",on:{click:function(t){return o.collection(e.goods_id,e.goods_id)}}},[o._v("收藏")]),o._v(" "),t("div",{staticClass:"personportrait cr"},[t("nuxt-link",{staticClass:"agoods",attrs:{to:"/goods/"+e.goods_num}}),o._v(" "),t("img",{attrs:{src:o.$store.state.header_img+e.avatar_url}})],1),o._v(" "),t("p",[o._v(o._s(e.title))]),o._v(" "),t("p",{staticClass:"price"},[o._v(o._s("0.00"!==e.goods_price[0].price?e.goods_price[0].price:"0.00"!==e.goods_price[1].price?e.goods_price[1].price:"0.00"!==e.goods_price[2].price?e.goods_price[2].price:e.goods_price[3].price))])]),o._v(" "),t("div",{staticClass:"personbottom"},[t("div",[t("p",[o._v(o._s(e.fans_num))]),o._v(" "),t("p",[o._v("粉丝数量")])]),o._v(" "),t("div",[t("p",[o._v(o._s(e.avg_read_num))]),o._v(" "),t("p",[o._v("平均阅读数")])])])])})],2),o._v(" "),t("div",{staticClass:"plate"},[t("div",{staticClass:"plateheader"},[t("h3",[o._v("微博营销")]),o._v(" "),t("ul",[t("li",{class:1===o.weixboclass?"select":"",on:{click:function(e){o.weixboclass=1}}},[o._v("IT互联网")]),o._v(" "),t("li",{class:2===o.weixboclass?"select":"",on:{click:function(e){o.weixboclass=2}}},[o._v("财经")]),o._v(" "),t("li",{class:3===o.weixboclass?"select":"",on:{click:function(e){o.weixboclass=3}}},[o._v("旅游")]),o._v(" "),t("li",{class:4===o.weixboclass?"select":"",on:{click:function(e){o.weixboclass=4}}},[o._v("医疗")]),o._v(" "),t("li",{class:5===o.weixboclass?"select":"",on:{click:function(e){o.weixboclass=5}}},[o._v("运动健身")])]),o._v(" "),t("nuxt-link",{staticClass:"fr cr more",attrs:{to:"/search/weibo"}},[o._v("查看更多")])],1),o._v(" "),o._l(o.indexData.recommendGoods["微博营销"]["意见领袖"]["IT互联网"],function(e){return t("div",{directives:[{name:"show",rawName:"v-show",value:1===o.weixboclass,expression:"weixboclass===1"}],key:e.goods_id,staticClass:"personcard"},[t("div",{staticClass:"persontop"},[t("div",{staticClass:"persontopclass bgblue fl"},[o._v(o._s(e.filed_name))]),o._v(" "),t("div",{class:"-1"==o.weixincolle.indexOf(e.goods_id)?"collection cr fr":"collection cr fr colled",on:{click:function(t){return o.collection(e.goods_id,e.goods_id)}}},[o._v("收藏")]),o._v(" "),t("div",{staticClass:"personportrait cr"},[t("nuxt-link",{staticClass:"agoods",attrs:{to:"/goods/"+e.goods_num}}),o._v(" "),t("img",{attrs:{src:o.$store.state.header_img+e.avatar_url}})],1),o._v(" "),t("p",[o._v(o._s(e.title))]),o._v(" "),t("p",{staticClass:"price"},[o._v(o._s("0.00"!==e.goods_price[0].price?e.goods_price[0].price:"0.00"!==e.goods_price[1].price?e.goods_price[1].price:"0.00"!==e.goods_price[2].price?e.goods_price[2].price:e.goods_price[3].price))])]),o._v(" "),t("div",{staticClass:"personbottom"},[t("div",[t("p",[o._v(o._s(e.fans_num))]),o._v(" "),t("p",[o._v("粉丝数量")])]),o._v(" "),t("div",[t("p",[o._v(o._s(e.avg_like_num))]),o._v(" "),t("p",[o._v("平均点赞数")])])])])}),o._v(" "),o._l(o.indexData.recommendGoods["微博营销"]["意见领袖"]["财经"],function(e){return t("div",{directives:[{name:"show",rawName:"v-show",value:2===o.weixboclass,expression:"weixboclass===2"}],key:e.goods_id,staticClass:"personcard"},[t("div",{staticClass:"persontop"},[t("div",{staticClass:"persontopclass bgblue fl"},[o._v(o._s(e.filed_name))]),o._v(" "),t("div",{class:"-1"==o.weixincolle.indexOf(e.goods_id)?"collection cr fr":"collection cr fr colled",on:{click:function(t){return o.collection(e.goods_id,e.goods_id)}}},[o._v("收藏")]),o._v(" "),t("div",{staticClass:"personportrait cr"},[t("nuxt-link",{staticClass:"agoods",attrs:{to:"/goods/"+e.goods_num}}),o._v(" "),t("img",{attrs:{src:o.$store.state.header_img+e.avatar_url}})],1),o._v(" "),t("p",[o._v(o._s(e.title))]),o._v(" "),t("p",{staticClass:"price"},[o._v(o._s("0.00"!==e.goods_price[0].price?e.goods_price[0].price:"0.00"!==e.goods_price[1].price?e.goods_price[1].price:"0.00"!==e.goods_price[2].price?e.goods_price[2].price:e.goods_price[3].price))])]),o._v(" "),t("div",{staticClass:"personbottom"},[t("div",[t("p",[o._v(o._s(e.fans_num))]),o._v(" "),t("p",[o._v("粉丝数量")])]),o._v(" "),t("div",[t("p",[o._v(o._s(e.avg_like_num))]),o._v(" "),t("p",[o._v("平均点赞数")])])])])}),o._v(" "),o._l(o.indexData.recommendGoods["微博营销"]["意见领袖"]["旅游"],function(e){return t("div",{directives:[{name:"show",rawName:"v-show",value:3===o.weixboclass,expression:"weixboclass===3"}],key:e.goods_id,staticClass:"personcard"},[t("div",{staticClass:"persontop"},[t("div",{staticClass:"persontopclass bgblue fl"},[o._v(o._s(e.filed_name))]),o._v(" "),t("div",{class:"-1"==o.weixincolle.indexOf(e.goods_id)?"collection cr fr":"collection cr fr colled",on:{click:function(t){return o.collection(e.goods_id,e.goods_id)}}},[o._v("收藏")]),o._v(" "),t("div",{staticClass:"personportrait cr"},[t("nuxt-link",{staticClass:"agoods",attrs:{to:"/goods/"+e.goods_num}}),o._v(" "),t("img",{attrs:{src:o.$store.state.header_img+e.avatar_url}})],1),o._v(" "),t("p",[o._v(o._s(e.title))]),o._v(" "),t("p",{staticClass:"price"},[o._v(o._s("0.00"!==e.goods_price[0].price?e.goods_price[0].price:"0.00"!==e.goods_price[1].price?e.goods_price[1].price:"0.00"!==e.goods_price[2].price?e.goods_price[2].price:e.goods_price[3].price))])]),o._v(" "),t("div",{staticClass:"personbottom"},[t("div",[t("p",[o._v(o._s(e.fans_num))]),o._v(" "),t("p",[o._v("粉丝数量")])]),o._v(" "),t("div",[t("p",[o._v(o._s(e.avg_like_num))]),o._v(" "),t("p",[o._v("平均点赞数")])])])])}),o._v(" "),o._l(o.indexData.recommendGoods["微博营销"]["意见领袖"]["医疗"],function(e){return t("div",{directives:[{name:"show",rawName:"v-show",value:4===o.weixboclass,expression:"weixboclass===4"}],key:e.goods_id,staticClass:"personcard"},[t("div",{staticClass:"persontop"},[t("div",{staticClass:"persontopclass bgblue fl"},[o._v(o._s(e.filed_name))]),o._v(" "),t("div",{class:"-1"==o.weixincolle.indexOf(e.goods_id)?"collection cr fr":"collection cr fr colled",on:{click:function(t){return o.collection(e.goods_id,e.goods_id)}}},[o._v("收藏")]),o._v(" "),t("div",{staticClass:"personportrait cr"},[t("nuxt-link",{staticClass:"agoods",attrs:{to:"/goods/"+e.goods_num}}),o._v(" "),t("img",{attrs:{src:o.$store.state.header_img+e.avatar_url}})],1),o._v(" "),t("p",[o._v(o._s(e.title))]),o._v(" "),t("p",{staticClass:"price"},[o._v(o._s("0.00"!==e.goods_price[0].price?e.goods_price[0].price:"0.00"!==e.goods_price[1].price?e.goods_price[1].price:"0.00"!==e.goods_price[2].price?e.goods_price[2].price:e.goods_price[3].price))])]),o._v(" "),t("div",{staticClass:"personbottom"},[t("div",[t("p",[o._v(o._s(e.fans_num))]),o._v(" "),t("p",[o._v("粉丝数量")])]),o._v(" "),t("div",[t("p",[o._v(o._s(e.avg_like_num))]),o._v(" "),t("p",[o._v("平均点赞数")])])])])}),o._v(" "),o._l(o.indexData.recommendGoods["微博营销"]["意见领袖"]["运动健身"],function(e){return t("div",{directives:[{name:"show",rawName:"v-show",value:5===o.weixboclass,expression:"weixboclass===5"}],key:e.goods_id,staticClass:"personcard"},[t("div",{staticClass:"persontop"},[t("div",{staticClass:"persontopclass bgblue fl"},[o._v(o._s(e.filed_name))]),o._v(" "),t("div",{class:"-1"==o.weixincolle.indexOf(e.goods_id)?"collection cr fr":"collection cr fr colled",on:{click:function(t){return o.collection(e.goods_id,e.goods_id)}}},[o._v("收藏")]),o._v(" "),t("div",{staticClass:"personportrait cr"},[t("nuxt-link",{staticClass:"agoods",attrs:{to:"/goods/"+e.goods_num}}),o._v(" "),t("img",{attrs:{src:o.$store.state.header_img+e.avatar_url}})],1),o._v(" "),t("p",[o._v(o._s(e.title))]),o._v(" "),t("p",{staticClass:"price"},[o._v(o._s("0.00"!==e.goods_price[0].price?e.goods_price[0].price:"0.00"!==e.goods_price[1].price?e.goods_price[1].price:"0.00"!==e.goods_price[2].price?e.goods_price[2].price:e.goods_price[3].price))])]),o._v(" "),t("div",{staticClass:"personbottom"},[t("div",[t("p",[o._v(o._s(e.fans_num))]),o._v(" "),t("p",[o._v("粉丝数量")])]),o._v(" "),t("div",[t("p",[o._v(o._s(e.avg_like_num))]),o._v(" "),t("p",[o._v("平均点赞数")])])])])})],2)]),o._v(" "),t("div",{staticClass:"banxin"},[t("div",{staticClass:"plate"},[t("div",{staticClass:"plateheader"},[t("h3",[o._v("小红书")]),o._v(" "),t("ul",[t("li",{class:1===o.videoclass?"select":"",on:{click:function(e){o.videoclass=1}}},[o._v("运动健身")]),o._v(" "),t("li",{class:2===o.videoclass?"select":"",on:{click:function(e){o.videoclass=2}}},[o._v("乐活趣玩")]),o._v(" "),t("li",{class:3===o.videoclass?"select":"",on:{click:function(e){o.videoclass=3}}},[o._v("美食餐饮")]),o._v(" "),t("li",{class:4===o.videoclass?"select":"",on:{click:function(e){o.videoclass=4}}},[o._v("美妆护肤")]),o._v(" "),t("li",{class:5===o.videoclass?"select":"",on:{click:function(e){o.videoclass=5}}},[o._v("亲子育儿")])]),o._v(" "),t("nuxt-link",{staticClass:"fr cr more",attrs:{to:"/search/weibo"}},[o._v("查看更多")])],1),o._v(" "),o._l(o.indexData.recommendGoods["视频营销"]["短视频"]["运动健身"],function(e){return t("div",{directives:[{name:"show",rawName:"v-show",value:1===o.videoclass,expression:"videoclass===1"}],key:e.goods_id,staticClass:"personcard"},[t("div",{staticClass:"persontop"},[t("div",{staticClass:"persontopclass bgred fl"},[o._v(o._s(e.filed_name))]),o._v(" "),t("div",{class:"-1"==o.weixincolle.indexOf(e.goods_id)?"collection cr fr":"collection cr fr colled",on:{click:function(t){return o.collection(e.goods_id,e.goods_id)}}},[o._v("收藏")]),o._v(" "),t("div",{staticClass:"personportrait cr"},[t("nuxt-link",{staticClass:"agoods",attrs:{to:"/goods/"+e.goods_num}}),o._v(" "),t("img",{attrs:{src:o.$store.state.header_img+e.avatar_url}})],1),o._v(" "),t("p",[o._v(o._s(e.title))]),o._v(" "),t("p",{staticClass:"price"},[o._v(o._s("0.00"!==e.goods_price[0].price?e.goods_price[0].price:"0.00"!==e.goods_price[1].price?e.goods_price[1].price:e.goods_price[2].price))])]),o._v(" "),t("div",{staticClass:"personbottom"},[t("div",[t("p",[o._v(o._s(e.fans_num))]),o._v(" "),t("p",[o._v("粉丝数量")])]),o._v(" "),t("div",[t("p",[o._v(o._s(e.avg_like_num))]),o._v(" "),t("p",[o._v("平均点赞数")])])])])}),o._v(" "),o._l(o.indexData.recommendGoods["视频营销"]["短视频"]["乐活趣玩"],function(e){return t("div",{directives:[{name:"show",rawName:"v-show",value:2===o.videoclass,expression:"videoclass===2"}],key:e.goods_id,staticClass:"personcard"},[t("div",{staticClass:"persontop"},[t("div",{staticClass:"persontopclass bgred fl"},[o._v(o._s(e.filed_name))]),o._v(" "),t("div",{class:"-1"==o.weixincolle.indexOf(e.goods_id)?"collection cr fr":"collection cr fr colled",on:{click:function(t){return o.collection(e.goods_id,e.goods_id)}}},[o._v("收藏")]),o._v(" "),t("div",{staticClass:"personportrait cr"},[t("nuxt-link",{staticClass:"agoods",attrs:{to:"/goods/"+e.goods_num}}),o._v(" "),t("img",{attrs:{src:o.$store.state.header_img+e.avatar_url}})],1),o._v(" "),t("p",[o._v(o._s(e.title))]),o._v(" "),t("p",{staticClass:"price"},[o._v(o._s("0.00"!==e.goods_price[0].price?e.goods_price[0].price:"0.00"!==e.goods_price[1].price?e.goods_price[1].price:e.goods_price[2].price))])]),o._v(" "),t("div",{staticClass:"personbottom"},[t("div",[t("p",[o._v(o._s(e.fans_num))]),o._v(" "),t("p",[o._v("粉丝数量")])]),o._v(" "),t("div",[t("p",[o._v(o._s(e.avg_like_num))]),o._v(" "),t("p",[o._v("平均点赞数")])])])])}),o._v(" "),o._l(o.indexData.recommendGoods["视频营销"]["短视频"]["美食餐饮"],function(e){return t("div",{directives:[{name:"show",rawName:"v-show",value:3===o.videoclass,expression:"videoclass===3"}],key:e.goods_id,staticClass:"personcard"},[t("div",{staticClass:"persontop"},[t("div",{staticClass:"persontopclass bgred fl"},[o._v(o._s(e.filed_name))]),o._v(" "),t("div",{class:"-1"==o.weixincolle.indexOf(e.goods_id)?"collection cr fr":"collection cr fr colled",on:{click:function(t){return o.collection(e.goods_id,e.goods_id)}}},[o._v("收藏")]),o._v(" "),t("div",{staticClass:"personportrait cr"},[t("nuxt-link",{staticClass:"agoods",attrs:{to:"/goods/"+e.goods_num}}),o._v(" "),t("img",{attrs:{src:o.$store.state.header_img+e.avatar_url}})],1),o._v(" "),t("p",[o._v(o._s(e.title))]),o._v(" "),t("p",{staticClass:"price"},[o._v(o._s("0.00"!==e.goods_price[0].price?e.goods_price[0].price:"0.00"!==e.goods_price[1].price?e.goods_price[1].price:e.goods_price[2].price))])]),o._v(" "),t("div",{staticClass:"personbottom"},[t("div",[t("p",[o._v(o._s(e.fans_num))]),o._v(" "),t("p",[o._v("粉丝数量")])]),o._v(" "),t("div",[t("p",[o._v(o._s(e.avg_like_num))]),o._v(" "),t("p",[o._v("平均点赞数")])])])])}),o._v(" "),o._l(o.indexData.recommendGoods["视频营销"]["短视频"]["美妆护肤"],function(e){return t("div",{directives:[{name:"show",rawName:"v-show",value:4===o.videoclass,expression:"videoclass===4"}],key:e.goods_id,staticClass:"personcard"},[t("div",{staticClass:"persontop"},[t("div",{staticClass:"persontopclass bgred fl"},[o._v(o._s(e.filed_name))]),o._v(" "),t("div",{class:"-1"==o.weixincolle.indexOf(e.goods_id)?"collection cr fr":"collection cr fr colled",on:{click:function(t){return o.collection(e.goods_id,e.goods_id)}}},[o._v("收藏")]),o._v(" "),t("div",{staticClass:"personportrait cr"},[t("nuxt-link",{staticClass:"agoods",attrs:{to:"/goods/"+e.goods_num}}),o._v(" "),t("img",{attrs:{src:o.$store.state.header_img+e.avatar_url}})],1),o._v(" "),t("p",[o._v(o._s(e.title))]),o._v(" "),t("p",{staticClass:"price"},[o._v(o._s("0.00"!==e.goods_price[0].price?e.goods_price[0].price:"0.00"!==e.goods_price[1].price?e.goods_price[1].price:e.goods_price[2].price))])]),o._v(" "),t("div",{staticClass:"personbottom"},[t("div",[t("p",[o._v(o._s(e.fans_num))]),o._v(" "),t("p",[o._v("粉丝数量")])]),o._v(" "),t("div",[t("p",[o._v(o._s(e.avg_like_num))]),o._v(" "),t("p",[o._v("平均点赞数")])])])])}),o._v(" "),o._l(o.indexData.recommendGoods["视频营销"]["短视频"]["亲子育儿"],function(e){return t("div",{directives:[{name:"show",rawName:"v-show",value:5===o.videoclass,expression:"videoclass===5"}],key:e.goods_id,staticClass:"personcard"},[t("div",{staticClass:"persontop"},[t("div",{staticClass:"persontopclass bgred fl"},[o._v(o._s(e.filed_name))]),o._v(" "),t("div",{class:"-1"==o.weixincolle.indexOf(e.goods_id)?"collection cr fr":"collection cr fr colled",on:{click:function(t){return o.collection(e.goods_id,e.goods_id)}}},[o._v("收藏")]),o._v(" "),t("div",{staticClass:"personportrait cr"},[t("nuxt-link",{staticClass:"agoods",attrs:{to:"/goods/"+e.goods_num}}),o._v(" "),t("img",{attrs:{src:o.$store.state.header_img+e.avatar_url}})],1),o._v(" "),t("p",[o._v(o._s(e.title))]),o._v(" "),t("p",{staticClass:"price"},[o._v(o._s("0.00"!==e.goods_price[0].price?e.goods_price[0].price:"0.00"!==e.goods_price[1].price?e.goods_price[1].price:e.goods_price[2].price))])]),o._v(" "),t("div",{staticClass:"personbottom"},[t("div",[t("p",[o._v(o._s(e.fans_num))]),o._v(" "),t("p",[o._v("粉丝数量")])]),o._v(" "),t("div",[t("p",[o._v(o._s(e.avg_like_num))]),o._v(" "),t("p",[o._v("平均点赞数")])])])])})],2),o._v(" "),t("div",{staticClass:"plate"},[o._m(0),o._v(" "),o._l(o.indexData.information,function(e,c){return t("div",{key:c,staticClass:"meijiezixuncard"},[t("div",{staticClass:"meijiezixun cr",on:{click:function(t){return o.zixun(e.information_id)}}},[t("img",{attrs:{src:o.$store.state.header_img+e.motif_img}}),o._v(" "),t("h4",[o._v(o._s(e.title))]),o._v(" "),t("p",{staticClass:"nowrap"},[o._v(o._s(e.content))])])])})],2),o._v(" "),o._m(1)])],1)},[function(){var o=this.$createElement,e=this._self._c||o;return e("div",{staticClass:"plateheader"},[e("h3",[this._v("媒介资讯")])])},function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",{staticClass:"plate",staticStyle:{"padding-bottom":"50px"}},[t("div",{staticClass:"plateheader"},[t("h3",[o._v("合作机构")])]),o._v(" "),t("div",{staticClass:"hezuo"},[t("img",{attrs:{src:"/hezuo/cooperation01.png"}})]),o._v(" "),t("div",{staticClass:"hezuo"},[t("img",{attrs:{src:"/hezuo/cooperation02.png"}})]),o._v(" "),t("div",{staticClass:"hezuo"},[t("img",{attrs:{src:"/hezuo/cooperation03.png"}})]),o._v(" "),t("div",{staticClass:"hezuo"},[t("img",{attrs:{src:"/hezuo/cooperation04.png"}})]),o._v(" "),t("div",{staticClass:"hezuo"},[t("img",{attrs:{src:"/hezuo/cooperation05.png"}})]),o._v(" "),t("div",{staticClass:"hezuo"},[t("img",{attrs:{src:"/hezuo/cooperation06.png"}})]),o._v(" "),t("div",{staticClass:"hezuo"},[t("img",{attrs:{src:"/hezuo/cooperation07.png"}})]),o._v(" "),t("div",{staticClass:"hezuo"},[t("img",{attrs:{src:"/hezuo/cooperation08.png"}})]),o._v(" "),t("div",{staticClass:"hezuo"},[t("img",{attrs:{src:"/hezuo/cooperation09.png"}})]),o._v(" "),t("div",{staticClass:"hezuo"},[t("img",{attrs:{src:"/hezuo/cooperation10.png"}})]),o._v(" "),t("div",{staticClass:"hezuo"},[t("img",{attrs:{src:"/hezuo/cooperation11.png"}})]),o._v(" "),t("div",{staticClass:"hezuo"},[t("img",{attrs:{src:"/hezuo/cooperation12.png"}})]),o._v(" "),t("div",{staticClass:"hezuo"},[t("img",{attrs:{src:"/hezuo/cooperation13.png"}})]),o._v(" "),t("div",{staticClass:"hezuo"},[t("img",{attrs:{src:"/hezuo/cooperation14.png"}})]),o._v(" "),t("div",{staticClass:"hezuo"},[t("img",{attrs:{src:"/hezuo/cooperation15.png"}})]),o._v(" "),t("div",{staticClass:"hezuo"},[t("img",{attrs:{src:"/hezuo/cooperation16.png"}})]),o._v(" "),t("div",{staticClass:"hezuo"},[t("img",{attrs:{src:"/hezuo/cooperation17.png"}})]),o._v(" "),t("div",{staticClass:"hezuo"},[t("img",{attrs:{src:"/hezuo/cooperation18.png"}})])])}],!1,null,"a83e896c",null));e.default=v.exports}}]);