(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{379:function(t,e,o){},380:function(t,e,o){},444:function(t,e,o){"use strict";var c=o(379);o.n(c).a},445:function(t,e,o){"use strict";var c=o(380);o.n(c).a},446:function(t,e,o){"use strict";o.r(e);o(52);var c=o(6),r=o(7),l={data:function(){return{userdata:"",input:"",options:[{value:"1",label:"微信公众号"},{value:"2",label:"微博"},{value:"3",label:"短视频"},{value:"4",label:"软文营销"}],value:"1"}},props:["banner"],methods:{searchkeyword:function(){return this.$store.commit("setsearchkeyword",{modula:this.value,keyword:this.input}),"1"==this.value?this.$router.push("/search/weixin"):"2"==this.value?this.$router.push("/search/weibo"):"3"==this.value?this.$router.push("/search/video"):"4"==this.value?this.$router.push("/search/softarticle"):void 0},liaojie:function(a){0===a?window.open("https://wpa.qq.com/msgrd?v=3&uin=1999868&site=qq&menu=yes"):window.open("https://wpa.qq.com/msgrd?v=3&uin=28458999&site=qq&menu=yes")}},mounted:function(){}},n=(o(444),o(2)),_=Object(n.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"bgcf"},[o("div",{staticClass:"search"},[o("div",{staticClass:"lo"},[o("nuxt-link",{staticClass:"logo cr",attrs:{to:"/"}}),t._v(" "),o("h1",[t._v("KOL,广告投放平台,营销推广,微信公众号,微博,小红书,视频,网红直播,短视频")])],1),t._v(" "),o("div",{staticClass:"rightsearch"},[o("div",{staticClass:"searchborder"},[o("el-select",{staticClass:"elSele",staticStyle:{width:"120px"},attrs:{placeholder:"请选择"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v(" "),o("el-input",{staticClass:"searchkey",staticStyle:{borderRadius:"0"},attrs:{placeholder:"请输入你要搜索的关键字"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),t._v(" "),o("el-button",{staticClass:"searchbtn",staticStyle:{height:"37px"},attrs:{type:"primary"},on:{click:t.searchkeyword}},[t._v("搜索")])],1),t._v(" "),o("nuxt-link",{staticClass:"shopcar",attrs:{to:"/shopcar",tag:"button"}},[o("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:"/indexicon/douh_icon002.png"}}),t._v(" 购物车("+t._s(t.$store.state.userdata.shopcart_count||"0")+")")])],1)]),t._v(" "),o("div",{staticClass:"headerNav"},[o("nuxt-link",{staticClass:"fenlei",attrs:{to:"/"}},[t._v("营销首页")]),t._v(" "),o("nuxt-link",{style:"/search/weixin"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/weixin"}},[t._v("微信营销")]),t._v(" "),o("nuxt-link",{style:"/search/video"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/video"}},[t._v("短视频营销")]),t._v(" "),o("nuxt-link",{style:"/search/weibo"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/weibo"}},[t._v("微博营销")]),t._v(" "),o("nuxt-link",{style:"/search/softarticle"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/softarticle"}},[t._v("软文营销")]),t._v(" "),o("nuxt-link",{style:"/search/selfproduct"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/selfproduct"}},[t._v("SEO")]),t._v(" "),o("nuxt-link",{style:"/search/service"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/service"}},[t._v("服务项目")])],1)]),t._v(" "),o("div",{staticClass:"banner"},[o("el-carousel",{attrs:{height:"480px"}},t._l(t.banner,function(e,c){return o("el-carousel-item",{key:e.id},[o("img",{staticClass:"bannerimg",attrs:{src:t.$store.state.header_img+e.img},on:{click:function(e){return t.liaojie(c)}}})])}),1)],1)])},[],!1,null,"0e97cb0b",null).exports,d={asyncData:function(){var t=Object(c.a)(regeneratorRuntime.mark(function t(e){var o,c,r,l,n,_,d;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.app,e.params,t.next=3,o.$axios("/recommendGoods");case 3:return c=t.sent,r=c.data,t.next=7,o.$axios("/banner");case 7:return l=t.sent,n=l.data,t.next=11,o.$axios("/information");case 11:return _=t.sent,d=_.data,t.abrupt("return",{indexData:{recommendGoods:r.data,banner:n.data,information:d.data}});case 14:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),layout:"header",data:function(){return{input:"",weixinclass:1,weixboclass:1,videoclass:1,weixincolle:[],iswait:!1}},components:{headert:_},methods:{collection:function(a,b){var t=this;return 1==this.iswait?this.$message({message:"请稍等",type:"warning"}):(this.iswait=!0,""==this.$store.state.userdata?this.$router.push("/login"):(this.weixincolle.push(b),void Object(r.b)().then(function(e){return t.$axios.post("/collectionGoods",{goods_id_json:JSON.stringify({1:a})},{headers:{Authorization:"Bearer"+e}})}).then(function(e){t.$message({message:"收藏成功",type:"success"}),t.iswait=!1}).catch(function(e){t.$message.error("收藏失败"+e.response.data.message),t.weixincolle.shift(),t.iswait=!1})))},getGoodsdetails:function(t){this.$router.push("/goods/"+t)},zixun:function(a){this.$router.push("/information/"+a)}},mounted:function(){Object(r.a)(),Object(r.c)(),""==localStorage.getItem("salesman")&&this.$axios("/randomSalesman",{},{headers:{Authorization:"Bearer"+localStorage.getItem("access_token")}}).then(function(t){localStorage.setItem("salesman",JSON.stringify(t.data.data))})}},v=(o(445),Object(n.a)(d,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"allbody"},[o("headert",{attrs:{banner:t.indexData.banner}}),t._v(" "),o("div",{staticClass:"banxin",staticStyle:{"margin-top":"200px"}},[o("div",{staticClass:"plate"},[o("div",{staticClass:"plateheader"},[o("h3",[t._v("微信公众号")]),t._v(" "),o("ul",[o("li",{class:1===t.weixinclass?"select":"",on:{click:function(e){t.weixinclass=1}}},[t._v("金融理财")]),t._v(" "),o("li",{class:2===t.weixinclass?"select":"",on:{click:function(e){t.weixinclass=2}}},[t._v("情感美妆")]),t._v(" "),o("li",{class:3===t.weixinclass?"select":"",on:{click:function(e){t.weixinclass=3}}},[t._v("母婴教育")]),t._v(" "),o("li",{class:4===t.weixinclass?"select":"",on:{click:function(e){t.weixinclass=4}}},[t._v("地域美食")]),t._v(" "),o("li",{class:5===t.weixinclass?"select":"",on:{click:function(e){t.weixinclass=5}}},[t._v("时事资讯")])]),t._v(" "),o("nuxt-link",{staticClass:"fr cr more",attrs:{to:"/search/weixin"}},[t._v("查看更多")])],1),t._v(" "),t._l(t.indexData.recommendGoods["微信营销"]["公众号"]["金融理财"],function(e){return o("div",{directives:[{name:"show",rawName:"v-show",value:1===t.weixinclass,expression:"weixinclass===1"}],key:e.goods_id,staticClass:"personcard"},[o("div",{staticClass:"persontop"},[o("div",{staticClass:"persontopclass fl"},[t._v(t._s(e.filed_name))]),t._v(" "),o("div",{class:"-1"==t.weixincolle.indexOf(e.goods_id)?"collection cr fr":"collection cr fr colled",on:{click:function(o){return t.collection(e.goods_id,e.goods_id)}}},[t._v("收藏")]),t._v(" "),o("div",{staticClass:"personportrait cr"},[o("nuxt-link",{staticClass:"agoods",attrs:{to:"/goods/"+e.goods_num,target:"_blank",alt:e.title,title:e.title}}),t._v(" "),o("img",{attrs:{src:t.$store.state.header_img+e.avatar_url,alt:e.title,title:e.title}})],1),t._v(" "),o("p",[t._v(t._s(e.title))]),t._v(" "),o("p",{staticClass:"price"},[t._v(t._s("0.00"!==e.goods_price[0].price?e.goods_price[0].price:"0.00"!==e.goods_price[1].price?e.goods_price[1].price:"0.00"!==e.goods_price[2].price?e.goods_price[2].price:e.goods_price[3].price))])]),t._v(" "),o("div",{staticClass:"personbottom"},[o("div",[o("p",[t._v(t._s(e.fans_num))]),t._v(" "),o("p",[t._v("粉丝数量")])]),t._v(" "),o("div",[o("p",[t._v(t._s(e.avg_read_num))]),t._v(" "),o("p",[t._v("平均阅读数")])])])])}),t._v(" "),t._l(t.indexData.recommendGoods["微信营销"]["公众号"]["情感美妆"],function(e){return o("div",{directives:[{name:"show",rawName:"v-show",value:2===t.weixinclass,expression:"weixinclass===2"}],key:e.goods_id,staticClass:"personcard"},[o("div",{staticClass:"persontop"},[o("div",{staticClass:"persontopclass fl"},[t._v(t._s(e.filed_name))]),t._v(" "),o("div",{class:"-1"==t.weixincolle.indexOf(e.goods_id)?"collection cr fr":"collection cr fr colled",on:{click:function(o){return t.collection(e.goods_id,e.goods_id)}}},[t._v("收藏")]),t._v(" "),o("div",{staticClass:"personportrait cr"},[o("nuxt-link",{staticClass:"agoods",attrs:{to:"/goods/"+e.goods_num,target:"_blank",alt:e.title,title:e.title}}),t._v(" "),o("img",{attrs:{src:t.$store.state.header_img+e.avatar_url,alt:e.title,title:e.title}})],1),t._v(" "),o("p",[t._v(t._s(e.title))]),t._v(" "),o("p",{staticClass:"price"},[t._v(t._s("0.00"!==e.goods_price[0].price?e.goods_price[0].price:"0.00"!==e.goods_price[1].price?e.goods_price[1].price:"0.00"!==e.goods_price[2].price?e.goods_price[2].price:e.goods_price[3].price))])]),t._v(" "),o("div",{staticClass:"personbottom"},[o("div",[o("p",[t._v(t._s(e.fans_num))]),t._v(" "),o("p",[t._v("粉丝数量")])]),t._v(" "),o("div",[o("p",[t._v(t._s(e.avg_read_num))]),t._v(" "),o("p",[t._v("平均阅读数")])])])])}),t._v(" "),t._l(t.indexData.recommendGoods["微信营销"]["公众号"]["母婴教育"],function(e){return o("div",{directives:[{name:"show",rawName:"v-show",value:3===t.weixinclass,expression:"weixinclass===3"}],key:e.goods_id,staticClass:"personcard"},[o("div",{staticClass:"persontop"},[o("div",{staticClass:"persontopclass fl"},[t._v(t._s(e.filed_name))]),t._v(" "),o("div",{class:"-1"==t.weixincolle.indexOf(e.goods_id)?"collection cr fr":"collection cr fr colled",on:{click:function(o){return t.collection(e.goods_id,e.goods_id)}}},[t._v("收藏")]),t._v(" "),o("div",{staticClass:"personportrait cr"},[o("nuxt-link",{staticClass:"agoods",attrs:{to:"/goods/"+e.goods_num,target:"_blank",alt:e.title,title:e.title}}),t._v(" "),o("img",{attrs:{src:t.$store.state.header_img+e.avatar_url,alt:e.title,title:e.title}})],1),t._v(" "),o("p",[t._v(t._s(e.title))]),t._v(" "),o("p",{staticClass:"price"},[t._v(t._s("0.00"!==e.goods_price[0].price?e.goods_price[0].price:"0.00"!==e.goods_price[1].price?e.goods_price[1].price:"0.00"!==e.goods_price[2].price?e.goods_price[2].price:e.goods_price[3].price))])]),t._v(" "),o("div",{staticClass:"personbottom"},[o("div",[o("p",[t._v(t._s(e.fans_num))]),t._v(" "),o("p",[t._v("粉丝数量")])]),t._v(" "),o("div",[o("p",[t._v(t._s(e.avg_read_num))]),t._v(" "),o("p",[t._v("平均阅读数")])])])])}),t._v(" "),t._l(t.indexData.recommendGoods["微信营销"]["公众号"]["地域美食"],function(e){return o("div",{directives:[{name:"show",rawName:"v-show",value:4===t.weixinclass,expression:"weixinclass===4"}],key:e.goods_id,staticClass:"personcard"},[o("div",{staticClass:"persontop"},[o("div",{staticClass:"persontopclass fl"},[t._v(t._s(e.filed_name))]),t._v(" "),o("div",{class:"-1"==t.weixincolle.indexOf(e.goods_id)?"collection cr fr":"collection cr fr colled",on:{click:function(o){return t.collection(e.goods_id,e.goods_id)}}},[t._v("收藏")]),t._v(" "),o("div",{staticClass:"personportrait cr"},[o("nuxt-link",{staticClass:"agoods",attrs:{to:"/goods/"+e.goods_num,target:"_blank",alt:e.title,title:e.title}}),t._v(" "),o("img",{attrs:{src:t.$store.state.header_img+e.avatar_url,alt:e.title,title:e.title}})],1),t._v(" "),o("p",[t._v(t._s(e.title))]),t._v(" "),o("p",{staticClass:"price"},[t._v(t._s("0.00"!==e.goods_price[0].price?e.goods_price[0].price:"0.00"!==e.goods_price[1].price?e.goods_price[1].price:"0.00"!==e.goods_price[2].price?e.goods_price[2].price:e.goods_price[3].price))])]),t._v(" "),o("div",{staticClass:"personbottom"},[o("div",[o("p",[t._v(t._s(e.fans_num))]),t._v(" "),o("p",[t._v("粉丝数量")])]),t._v(" "),o("div",[o("p",[t._v(t._s(e.avg_read_num))]),t._v(" "),o("p",[t._v("平均阅读数")])])])])}),t._v(" "),t._l(t.indexData.recommendGoods["微信营销"]["公众号"]["时事资讯"],function(e){return o("div",{directives:[{name:"show",rawName:"v-show",value:5===t.weixinclass,expression:"weixinclass===5"}],key:e.goods_id,staticClass:"personcard"},[o("div",{staticClass:"persontop"},[o("div",{staticClass:"persontopclass fl"},[t._v(t._s(e.filed_name))]),t._v(" "),o("div",{class:"-1"==t.weixincolle.indexOf(e.goods_id)?"collection cr fr":"collection cr fr colled",on:{click:function(o){return t.collection(e.goods_id,e.goods_id)}}},[t._v("收藏")]),t._v(" "),o("div",{staticClass:"personportrait cr"},[o("nuxt-link",{staticClass:"agoods",attrs:{to:"/goods/"+e.goods_num,target:"_blank",alt:e.title,title:e.title}}),t._v(" "),o("img",{attrs:{src:t.$store.state.header_img+e.avatar_url,alt:e.title,title:e.title}})],1),t._v(" "),o("p",[t._v(t._s(e.title))]),t._v(" "),o("p",{staticClass:"price"},[t._v(t._s("0.00"!==e.goods_price[0].price?e.goods_price[0].price:"0.00"!==e.goods_price[1].price?e.goods_price[1].price:"0.00"!==e.goods_price[2].price?e.goods_price[2].price:e.goods_price[3].price))])]),t._v(" "),o("div",{staticClass:"personbottom"},[o("div",[o("p",[t._v(t._s(e.fans_num))]),t._v(" "),o("p",[t._v("粉丝数量")])]),t._v(" "),o("div",[o("p",[t._v(t._s(e.avg_read_num))]),t._v(" "),o("p",[t._v("平均阅读数")])])])])})],2),t._v(" "),o("div",{staticClass:"plate"},[o("div",{staticClass:"plateheader"},[o("h3",[t._v("微博营销")]),t._v(" "),o("ul",[o("li",{class:1===t.weixboclass?"select":"",on:{click:function(e){t.weixboclass=1}}},[t._v("IT互联网")]),t._v(" "),o("li",{class:2===t.weixboclass?"select":"",on:{click:function(e){t.weixboclass=2}}},[t._v("财经")]),t._v(" "),o("li",{class:3===t.weixboclass?"select":"",on:{click:function(e){t.weixboclass=3}}},[t._v("旅游")]),t._v(" "),o("li",{class:4===t.weixboclass?"select":"",on:{click:function(e){t.weixboclass=4}}},[t._v("医疗")]),t._v(" "),o("li",{class:5===t.weixboclass?"select":"",on:{click:function(e){t.weixboclass=5}}},[t._v("运动健身")])]),t._v(" "),o("nuxt-link",{staticClass:"fr cr more",attrs:{to:"/search/weibo"}},[t._v("查看更多")])],1),t._v(" "),t._l(t.indexData.recommendGoods["微博营销"]["意见领袖"]["IT互联网"],function(e){return o("div",{directives:[{name:"show",rawName:"v-show",value:1===t.weixboclass,expression:"weixboclass===1"}],key:e.goods_id,staticClass:"personcard"},[o("div",{staticClass:"persontop"},[o("div",{staticClass:"persontopclass bgblue fl"},[t._v(t._s(e.filed_name))]),t._v(" "),o("div",{class:"-1"==t.weixincolle.indexOf(e.goods_id)?"collection cr fr":"collection cr fr colled",on:{click:function(o){return t.collection(e.goods_id,e.goods_id)}}},[t._v("收藏")]),t._v(" "),o("div",{staticClass:"personportrait cr"},[o("nuxt-link",{staticClass:"agoods",attrs:{to:"/goods/"+e.goods_num,target:"_blank",alt:e.title,title:e.title}}),t._v(" "),o("img",{attrs:{src:t.$store.state.header_img+e.avatar_url,alt:e.title,title:e.title}})],1),t._v(" "),o("p",[t._v(t._s(e.title))]),t._v(" "),o("p",{staticClass:"price"},[t._v(t._s("0.00"!==e.goods_price[0].price?e.goods_price[0].price:"0.00"!==e.goods_price[1].price?e.goods_price[1].price:"0.00"!==e.goods_price[2].price?e.goods_price[2].price:e.goods_price[3].price))])]),t._v(" "),o("div",{staticClass:"personbottom"},[o("div",[o("p",[t._v(t._s(e.fans_num))]),t._v(" "),o("p",[t._v("粉丝数量")])]),t._v(" "),o("div",[o("p",[t._v(t._s(e.avg_like_num))]),t._v(" "),o("p",[t._v("平均点赞数")])])])])}),t._v(" "),t._l(t.indexData.recommendGoods["微博营销"]["意见领袖"]["财经"],function(e){return o("div",{directives:[{name:"show",rawName:"v-show",value:2===t.weixboclass,expression:"weixboclass===2"}],key:e.goods_id,staticClass:"personcard"},[o("div",{staticClass:"persontop"},[o("div",{staticClass:"persontopclass bgblue fl"},[t._v(t._s(e.filed_name))]),t._v(" "),o("div",{class:"-1"==t.weixincolle.indexOf(e.goods_id)?"collection cr fr":"collection cr fr colled",on:{click:function(o){return t.collection(e.goods_id,e.goods_id)}}},[t._v("收藏")]),t._v(" "),o("div",{staticClass:"personportrait cr"},[o("nuxt-link",{staticClass:"agoods",attrs:{to:"/goods/"+e.goods_num,target:"_blank",alt:e.title,title:e.title}}),t._v(" "),o("img",{attrs:{src:t.$store.state.header_img+e.avatar_url,alt:e.title,title:e.title}})],1),t._v(" "),o("p",[t._v(t._s(e.title))]),t._v(" "),o("p",{staticClass:"price"},[t._v(t._s("0.00"!==e.goods_price[0].price?e.goods_price[0].price:"0.00"!==e.goods_price[1].price?e.goods_price[1].price:"0.00"!==e.goods_price[2].price?e.goods_price[2].price:e.goods_price[3].price))])]),t._v(" "),o("div",{staticClass:"personbottom"},[o("div",[o("p",[t._v(t._s(e.fans_num))]),t._v(" "),o("p",[t._v("粉丝数量")])]),t._v(" "),o("div",[o("p",[t._v(t._s(e.avg_like_num))]),t._v(" "),o("p",[t._v("平均点赞数")])])])])}),t._v(" "),t._l(t.indexData.recommendGoods["微博营销"]["意见领袖"]["旅游"],function(e){return o("div",{directives:[{name:"show",rawName:"v-show",value:3===t.weixboclass,expression:"weixboclass===3"}],key:e.goods_id,staticClass:"personcard"},[o("div",{staticClass:"persontop"},[o("div",{staticClass:"persontopclass bgblue fl"},[t._v(t._s(e.filed_name))]),t._v(" "),o("div",{class:"-1"==t.weixincolle.indexOf(e.goods_id)?"collection cr fr":"collection cr fr colled",on:{click:function(o){return t.collection(e.goods_id,e.goods_id)}}},[t._v("收藏")]),t._v(" "),o("div",{staticClass:"personportrait cr"},[o("nuxt-link",{staticClass:"agoods",attrs:{to:"/goods/"+e.goods_num,target:"_blank",alt:e.title,title:e.title}}),t._v(" "),o("img",{attrs:{src:t.$store.state.header_img+e.avatar_url,alt:e.title,title:e.title}})],1),t._v(" "),o("p",[t._v(t._s(e.title))]),t._v(" "),o("p",{staticClass:"price"},[t._v(t._s("0.00"!==e.goods_price[0].price?e.goods_price[0].price:"0.00"!==e.goods_price[1].price?e.goods_price[1].price:"0.00"!==e.goods_price[2].price?e.goods_price[2].price:e.goods_price[3].price))])]),t._v(" "),o("div",{staticClass:"personbottom"},[o("div",[o("p",[t._v(t._s(e.fans_num))]),t._v(" "),o("p",[t._v("粉丝数量")])]),t._v(" "),o("div",[o("p",[t._v(t._s(e.avg_like_num))]),t._v(" "),o("p",[t._v("平均点赞数")])])])])}),t._v(" "),t._l(t.indexData.recommendGoods["微博营销"]["意见领袖"]["医疗"],function(e){return o("div",{directives:[{name:"show",rawName:"v-show",value:4===t.weixboclass,expression:"weixboclass===4"}],key:e.goods_id,staticClass:"personcard"},[o("div",{staticClass:"persontop"},[o("div",{staticClass:"persontopclass bgblue fl"},[t._v(t._s(e.filed_name))]),t._v(" "),o("div",{class:"-1"==t.weixincolle.indexOf(e.goods_id)?"collection cr fr":"collection cr fr colled",on:{click:function(o){return t.collection(e.goods_id,e.goods_id)}}},[t._v("收藏")]),t._v(" "),o("div",{staticClass:"personportrait cr"},[o("nuxt-link",{staticClass:"agoods",attrs:{to:"/goods/"+e.goods_num,target:"_blank",alt:e.title,title:e.title}}),t._v(" "),o("img",{attrs:{src:t.$store.state.header_img+e.avatar_url,alt:e.title,title:e.title}})],1),t._v(" "),o("p",[t._v(t._s(e.title))]),t._v(" "),o("p",{staticClass:"price"},[t._v(t._s("0.00"!==e.goods_price[0].price?e.goods_price[0].price:"0.00"!==e.goods_price[1].price?e.goods_price[1].price:"0.00"!==e.goods_price[2].price?e.goods_price[2].price:e.goods_price[3].price))])]),t._v(" "),o("div",{staticClass:"personbottom"},[o("div",[o("p",[t._v(t._s(e.fans_num))]),t._v(" "),o("p",[t._v("粉丝数量")])]),t._v(" "),o("div",[o("p",[t._v(t._s(e.avg_like_num))]),t._v(" "),o("p",[t._v("平均点赞数")])])])])}),t._v(" "),t._l(t.indexData.recommendGoods["微博营销"]["意见领袖"]["运动健身"],function(e){return o("div",{directives:[{name:"show",rawName:"v-show",value:5===t.weixboclass,expression:"weixboclass===5"}],key:e.goods_id,staticClass:"personcard"},[o("div",{staticClass:"persontop"},[o("div",{staticClass:"persontopclass bgblue fl"},[t._v(t._s(e.filed_name))]),t._v(" "),o("div",{class:"-1"==t.weixincolle.indexOf(e.goods_id)?"collection cr fr":"collection cr fr colled",on:{click:function(o){return t.collection(e.goods_id,e.goods_id)}}},[t._v("收藏")]),t._v(" "),o("div",{staticClass:"personportrait cr"},[o("nuxt-link",{staticClass:"agoods",attrs:{to:"/goods/"+e.goods_num,target:"_blank",alt:e.title,title:e.title}}),t._v(" "),o("img",{attrs:{src:t.$store.state.header_img+e.avatar_url,alt:e.title,title:e.title}})],1),t._v(" "),o("p",[t._v(t._s(e.title))]),t._v(" "),o("p",{staticClass:"price"},[t._v(t._s("0.00"!==e.goods_price[0].price?e.goods_price[0].price:"0.00"!==e.goods_price[1].price?e.goods_price[1].price:"0.00"!==e.goods_price[2].price?e.goods_price[2].price:e.goods_price[3].price))])]),t._v(" "),o("div",{staticClass:"personbottom"},[o("div",[o("p",[t._v(t._s(e.fans_num))]),t._v(" "),o("p",[t._v("粉丝数量")])]),t._v(" "),o("div",[o("p",[t._v(t._s(e.avg_like_num))]),t._v(" "),o("p",[t._v("平均点赞数")])])])])})],2)]),t._v(" "),o("div",{staticClass:"banxin"},[o("div",{staticClass:"plate"},[o("div",{staticClass:"plateheader"},[o("h3",[t._v("小红书")]),t._v(" "),o("ul",[o("li",{class:1===t.videoclass?"select":"",on:{click:function(e){t.videoclass=1}}},[t._v("运动健身")]),t._v(" "),o("li",{class:2===t.videoclass?"select":"",on:{click:function(e){t.videoclass=2}}},[t._v("乐活趣玩")]),t._v(" "),o("li",{class:3===t.videoclass?"select":"",on:{click:function(e){t.videoclass=3}}},[t._v("美食餐饮")]),t._v(" "),o("li",{class:4===t.videoclass?"select":"",on:{click:function(e){t.videoclass=4}}},[t._v("美妆护肤")]),t._v(" "),o("li",{class:5===t.videoclass?"select":"",on:{click:function(e){t.videoclass=5}}},[t._v("亲子育儿")])]),t._v(" "),o("nuxt-link",{staticClass:"fr cr more",attrs:{to:"/search/weibo"}},[t._v("查看更多")])],1),t._v(" "),t._l(t.indexData.recommendGoods["视频营销"]["短视频"]["运动健身"],function(e){return o("div",{directives:[{name:"show",rawName:"v-show",value:1===t.videoclass,expression:"videoclass===1"}],key:e.goods_id,staticClass:"personcard"},[o("div",{staticClass:"persontop"},[o("div",{staticClass:"persontopclass bgred fl"},[t._v(t._s(e.filed_name))]),t._v(" "),o("div",{class:"-1"==t.weixincolle.indexOf(e.goods_id)?"collection cr fr":"collection cr fr colled",on:{click:function(o){return t.collection(e.goods_id,e.goods_id)}}},[t._v("收藏")]),t._v(" "),o("div",{staticClass:"personportrait cr"},[o("nuxt-link",{staticClass:"agoods",attrs:{to:"/goods/"+e.goods_num,target:"_blank",alt:e.title,title:e.title}}),t._v(" "),o("img",{attrs:{src:t.$store.state.header_img+e.avatar_url,alt:e.title,title:e.title}})],1),t._v(" "),o("p",[t._v(t._s(e.title))]),t._v(" "),o("p",{staticClass:"price"},[t._v(t._s("0.00"!==e.goods_price[0].price?e.goods_price[0].price:"0.00"!==e.goods_price[1].price?e.goods_price[1].price:e.goods_price[2].price))])]),t._v(" "),o("div",{staticClass:"personbottom"},[o("div",[o("p",[t._v(t._s(e.fans_num))]),t._v(" "),o("p",[t._v("粉丝数量")])]),t._v(" "),o("div",[o("p",[t._v(t._s(e.avg_like_num))]),t._v(" "),o("p",[t._v("平均点赞数")])])])])}),t._v(" "),t._l(t.indexData.recommendGoods["视频营销"]["短视频"]["乐活趣玩"],function(e){return o("div",{directives:[{name:"show",rawName:"v-show",value:2===t.videoclass,expression:"videoclass===2"}],key:e.goods_id,staticClass:"personcard"},[o("div",{staticClass:"persontop"},[o("div",{staticClass:"persontopclass bgred fl"},[t._v(t._s(e.filed_name))]),t._v(" "),o("div",{class:"-1"==t.weixincolle.indexOf(e.goods_id)?"collection cr fr":"collection cr fr colled",on:{click:function(o){return t.collection(e.goods_id,e.goods_id)}}},[t._v("收藏")]),t._v(" "),o("div",{staticClass:"personportrait cr"},[o("nuxt-link",{staticClass:"agoods",attrs:{to:"/goods/"+e.goods_num,target:"_blank",alt:e.title,title:e.title}}),t._v(" "),o("img",{attrs:{src:t.$store.state.header_img+e.avatar_url,alt:e.title,title:e.title}})],1),t._v(" "),o("p",[t._v(t._s(e.title))]),t._v(" "),o("p",{staticClass:"price"},[t._v(t._s("0.00"!==e.goods_price[0].price?e.goods_price[0].price:"0.00"!==e.goods_price[1].price?e.goods_price[1].price:e.goods_price[2].price))])]),t._v(" "),o("div",{staticClass:"personbottom"},[o("div",[o("p",[t._v(t._s(e.fans_num))]),t._v(" "),o("p",[t._v("粉丝数量")])]),t._v(" "),o("div",[o("p",[t._v(t._s(e.avg_like_num))]),t._v(" "),o("p",[t._v("平均点赞数")])])])])}),t._v(" "),t._l(t.indexData.recommendGoods["视频营销"]["短视频"]["美食餐饮"],function(e){return o("div",{directives:[{name:"show",rawName:"v-show",value:3===t.videoclass,expression:"videoclass===3"}],key:e.goods_id,staticClass:"personcard"},[o("div",{staticClass:"persontop"},[o("div",{staticClass:"persontopclass bgred fl"},[t._v(t._s(e.filed_name))]),t._v(" "),o("div",{class:"-1"==t.weixincolle.indexOf(e.goods_id)?"collection cr fr":"collection cr fr colled",on:{click:function(o){return t.collection(e.goods_id,e.goods_id)}}},[t._v("收藏")]),t._v(" "),o("div",{staticClass:"personportrait cr"},[o("nuxt-link",{staticClass:"agoods",attrs:{to:"/goods/"+e.goods_num,target:"_blank",alt:e.title,title:e.title}}),t._v(" "),o("img",{attrs:{src:t.$store.state.header_img+e.avatar_url,alt:e.title,title:e.title}})],1),t._v(" "),o("p",[t._v(t._s(e.title))]),t._v(" "),o("p",{staticClass:"price"},[t._v(t._s("0.00"!==e.goods_price[0].price?e.goods_price[0].price:"0.00"!==e.goods_price[1].price?e.goods_price[1].price:e.goods_price[2].price))])]),t._v(" "),o("div",{staticClass:"personbottom"},[o("div",[o("p",[t._v(t._s(e.fans_num))]),t._v(" "),o("p",[t._v("粉丝数量")])]),t._v(" "),o("div",[o("p",[t._v(t._s(e.avg_like_num))]),t._v(" "),o("p",[t._v("平均点赞数")])])])])}),t._v(" "),t._l(t.indexData.recommendGoods["视频营销"]["短视频"]["美妆护肤"],function(e){return o("div",{directives:[{name:"show",rawName:"v-show",value:4===t.videoclass,expression:"videoclass===4"}],key:e.goods_id,staticClass:"personcard"},[o("div",{staticClass:"persontop"},[o("div",{staticClass:"persontopclass bgred fl"},[t._v(t._s(e.filed_name))]),t._v(" "),o("div",{class:"-1"==t.weixincolle.indexOf(e.goods_id)?"collection cr fr":"collection cr fr colled",on:{click:function(o){return t.collection(e.goods_id,e.goods_id)}}},[t._v("收藏")]),t._v(" "),o("div",{staticClass:"personportrait cr"},[o("nuxt-link",{staticClass:"agoods",attrs:{to:"/goods/"+e.goods_num,target:"_blank",alt:e.title,title:e.title}}),t._v(" "),o("img",{attrs:{src:t.$store.state.header_img+e.avatar_url,alt:e.title,title:e.title}})],1),t._v(" "),o("p",[t._v(t._s(e.title))]),t._v(" "),o("p",{staticClass:"price"},[t._v(t._s("0.00"!==e.goods_price[0].price?e.goods_price[0].price:"0.00"!==e.goods_price[1].price?e.goods_price[1].price:e.goods_price[2].price))])]),t._v(" "),o("div",{staticClass:"personbottom"},[o("div",[o("p",[t._v(t._s(e.fans_num))]),t._v(" "),o("p",[t._v("粉丝数量")])]),t._v(" "),o("div",[o("p",[t._v(t._s(e.avg_like_num))]),t._v(" "),o("p",[t._v("平均点赞数")])])])])}),t._v(" "),t._l(t.indexData.recommendGoods["视频营销"]["短视频"]["亲子育儿"],function(e){return o("div",{directives:[{name:"show",rawName:"v-show",value:5===t.videoclass,expression:"videoclass===5"}],key:e.goods_id,staticClass:"personcard"},[o("div",{staticClass:"persontop"},[o("div",{staticClass:"persontopclass bgred fl"},[t._v(t._s(e.filed_name))]),t._v(" "),o("div",{class:"-1"==t.weixincolle.indexOf(e.goods_id)?"collection cr fr":"collection cr fr colled",on:{click:function(o){return t.collection(e.goods_id,e.goods_id)}}},[t._v("收藏")]),t._v(" "),o("div",{staticClass:"personportrait cr"},[o("nuxt-link",{staticClass:"agoods",attrs:{to:"/goods/"+e.goods_num,target:"_blank",alt:e.title,title:e.title}}),t._v(" "),o("img",{attrs:{src:t.$store.state.header_img+e.avatar_url,alt:e.title,title:e.title}})],1),t._v(" "),o("p",[t._v(t._s(e.title))]),t._v(" "),o("p",{staticClass:"price"},[t._v(t._s("0.00"!==e.goods_price[0].price?e.goods_price[0].price:"0.00"!==e.goods_price[1].price?e.goods_price[1].price:e.goods_price[2].price))])]),t._v(" "),o("div",{staticClass:"personbottom"},[o("div",[o("p",[t._v(t._s(e.fans_num))]),t._v(" "),o("p",[t._v("粉丝数量")])]),t._v(" "),o("div",[o("p",[t._v(t._s(e.avg_like_num))]),t._v(" "),o("p",[t._v("平均点赞数")])])])])})],2),t._v(" "),o("div",{staticClass:"plate"},[t._m(0),t._v(" "),t._l(t.indexData.information,function(e,c){return o("div",{key:c,staticClass:"meijiezixuncard"},[o("div",{staticClass:"meijiezixun cr",on:{click:function(o){return t.zixun(e.information_id)}}},[o("img",{attrs:{src:t.$store.state.header_img+e.motif_img}}),t._v(" "),o("h4",[t._v(t._s(e.title))]),t._v(" "),o("p",{staticClass:"nowrap"},[t._v(t._s(e.content))])])])})],2),t._v(" "),t._m(1)])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"plateheader"},[e("h3",[this._v("媒介资讯")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"plate",staticStyle:{"padding-bottom":"50px"}},[o("div",{staticClass:"plateheader"},[o("h3",[t._v("合作机构")])]),t._v(" "),o("div",{staticClass:"hezuo"},[o("img",{attrs:{src:"/hezuo/cooperation01.png"}})]),t._v(" "),o("div",{staticClass:"hezuo"},[o("img",{attrs:{src:"/hezuo/cooperation02.png"}})]),t._v(" "),o("div",{staticClass:"hezuo"},[o("img",{attrs:{src:"/hezuo/cooperation03.png"}})]),t._v(" "),o("div",{staticClass:"hezuo"},[o("img",{attrs:{src:"/hezuo/cooperation04.png"}})]),t._v(" "),o("div",{staticClass:"hezuo"},[o("img",{attrs:{src:"/hezuo/cooperation05.png"}})]),t._v(" "),o("div",{staticClass:"hezuo"},[o("img",{attrs:{src:"/hezuo/cooperation06.png"}})]),t._v(" "),o("div",{staticClass:"hezuo"},[o("img",{attrs:{src:"/hezuo/cooperation07.png"}})]),t._v(" "),o("div",{staticClass:"hezuo"},[o("img",{attrs:{src:"/hezuo/cooperation08.png"}})]),t._v(" "),o("div",{staticClass:"hezuo"},[o("img",{attrs:{src:"/hezuo/cooperation09.png"}})]),t._v(" "),o("div",{staticClass:"hezuo"},[o("img",{attrs:{src:"/hezuo/cooperation10.png"}})]),t._v(" "),o("div",{staticClass:"hezuo"},[o("img",{attrs:{src:"/hezuo/cooperation11.png"}})]),t._v(" "),o("div",{staticClass:"hezuo"},[o("img",{attrs:{src:"/hezuo/cooperation12.png"}})]),t._v(" "),o("div",{staticClass:"hezuo"},[o("img",{attrs:{src:"/hezuo/cooperation13.png"}})]),t._v(" "),o("div",{staticClass:"hezuo"},[o("img",{attrs:{src:"/hezuo/cooperation14.png"}})]),t._v(" "),o("div",{staticClass:"hezuo"},[o("img",{attrs:{src:"/hezuo/cooperation15.png"}})]),t._v(" "),o("div",{staticClass:"hezuo"},[o("img",{attrs:{src:"/hezuo/cooperation16.png"}})]),t._v(" "),o("div",{staticClass:"hezuo"},[o("img",{attrs:{src:"/hezuo/cooperation17.png"}})]),t._v(" "),o("div",{staticClass:"hezuo"},[o("img",{attrs:{src:"/hezuo/cooperation18.png"}})])])}],!1,null,"58e48d28",null));e.default=v.exports}}]);