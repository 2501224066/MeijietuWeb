(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{308:function(t,e,c){},309:function(t,e,c){"use strict";var r=c(308);c.n(r).a},310:function(t,e,c){"use strict";c(6);var r={data:function(){return{userdata:"",input:"",options:[{value:"1",label:"微信公众号"},{value:"2",label:"微博"},{value:"3",label:"短视频"}],value:"1"}},methods:{searchkeyword:function(){return this.$store.commit("setsearchkeyword",{modula:this.value,keyword:this.input}),"1"==this.value?this.$router.push("/search/weixin"):"2"==this.value?this.$router.push("/search/weibo"):"3"==this.value?this.$router.push("/search/video"):void 0}},mounted:function(){}},v=(c(309),c(2)),component=Object(v.a)(r,function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("div",{staticClass:"bgcf"},[c("div",{staticClass:"search"},[c("nuxt-link",{staticClass:"logo cr",attrs:{to:"/",tag:"div"}}),t._v(" "),c("div",{staticClass:"rightsearch"},[c("div",{staticClass:"searchborder"},[c("el-select",{staticClass:"elSele",staticStyle:{width:"120px"},attrs:{placeholder:"请选择"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,function(t){return c("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v(" "),c("el-input",{staticClass:"searchkey",staticStyle:{borderRadius:"0"},attrs:{placeholder:"请输入你要搜索的关键字"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),t._v(" "),c("el-button",{staticClass:"searchbtn",staticStyle:{height:"37px"},attrs:{type:"primary"},on:{click:t.searchkeyword}},[t._v("搜索")])],1),t._v(" "),c("nuxt-link",{staticClass:"shopcar",attrs:{to:"/shopcar",tag:"button"}},[c("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:"/indexicon/douh_icon002.png"}}),t._v(" 购物车("+t._s(t.$store.state.userdata.shopcart_count||"0")+")")])],1)],1),t._v(" "),c("div",{staticClass:"headerNav"},[c("nuxt-link",{staticClass:"fenlei",attrs:{to:"/"}},[t._v("营销首页")]),t._v(" "),c("nuxt-link",{style:"/search/weixin"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/weixin"}},[t._v("微信营销")]),t._v(" "),c("nuxt-link",{style:"/search/video"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/video"}},[t._v("短视频营销")]),t._v(" "),c("nuxt-link",{style:"/search/weibo"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/weibo"}},[t._v("微博营销")]),t._v(" "),c("nuxt-link",{style:"/search/selfproduct"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/selfproduct"}},[t._v("SEO")]),t._v(" "),c("nuxt-link",{style:"/search/service"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/service"}},[t._v("服务项目")])],1)])])},[],!1,null,"5cb2702d",null);e.a=component.exports},321:function(t,e,c){},378:function(t,e,c){"use strict";var r=c(321);c.n(r).a},470:function(t,e,c){"use strict";c.r(e);var r={layout:"header",components:{headert:c(310).a},mounted:function(){window.document.body.style.background="#fff"}},v=(c(378),c(2)),component=Object(v.a)(r,function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("headert"),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"topbanner"},[e("img",{attrs:{src:"/cooperation/banner001.jpg"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"secondbanner"},[e("img",{attrs:{src:"/cooperation/banner002.jpg"}})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"banxin"},[c("div",{staticClass:"contcard"},[c("div",{staticClass:"cardtitle",staticStyle:{height:"570px"}},[c("h2",[t._v("媒介兔代理优势")]),t._v(" "),c("p",[t._v("AGENCY ADVANTAGE")]),t._v(" "),c("div",{staticClass:"agency"},[c("div",[c("h3",[t._v("海量资源")]),t._v(" "),c("p",[t._v("全媒体一站式投放，聚合渠道优势资源，更有效地服务自己的客户。")])]),t._v(" "),c("div",[c("h3",[t._v("海量资源")]),t._v(" "),c("p",[t._v("全媒体一站式投放，聚合渠道优势资源，更有效地服务自己的客户。")])]),t._v(" "),c("div",[c("h3",[t._v("海量资源")]),t._v(" "),c("p",[t._v("全媒体一站式投放，聚合渠道优势资源，更有效地服务自己的客户。")])]),t._v(" "),c("div",[c("h3",[t._v("海量资源")]),t._v(" "),c("p",[t._v("全媒体一站式投放，聚合渠道优势资源，更有效地服务自己的客户。")])]),t._v(" "),c("div",[c("h3",[t._v("海量资源")]),t._v(" "),c("p",[t._v("全媒体一站式投放，聚合渠道优势资源，更有效地服务自己的客户。")])]),t._v(" "),c("div",[c("h3",[t._v("海量资源")]),t._v(" "),c("p",[t._v("全媒体一站式投放，聚合渠道优势资源，更有效地服务自己的客户。")])]),t._v(" "),c("img",{staticStyle:{margin:"92px 361px"},attrs:{src:"/cooperation/center001.png"}})])])]),t._v(" "),c("div",{staticClass:"contcard"},[c("div",{staticClass:"cardtitle"},[c("h2",[t._v("市场前景")]),t._v(" "),c("p",[t._v("MARKET PROSPECT")]),t._v(" "),c("div",{staticClass:"cardcont"},[c("img",{attrs:{src:"/cooperation/market01.png"}}),t._v(" "),c("div",{staticClass:"fr"},[c("h3",[t._v("新媒体行业")]),t._v(" "),c("p",[t._v("近年来，我国新媒体行业的市场规模保持高速扩张之势。据前瞻产业研究院发布的统计数据显示，2011年中国新媒体行业市场规模已达2268.1亿元,并呈现除逐年高速增长态势,2013年中国新媒体行业市场规模突破3000亿元,2015年中国新媒体行业市场规模突破了5000亿元,截止至2017中国新媒体行业市场规模增长至7558.4亿元,同比增长21.5%。")]),t._v(" "),c("p",[t._v("初步测算2019年中国新媒体行业市场规模将突破1万亿元。未来随着行业相关规范的出台，以及5G等相关互联网技术的成熟与普及，我国新媒体行业将迎来发展期，未来市场前景十分可观。")]),t._v(" "),c("span",[t._v("一万亿元")]),c("span",[t._v("2019年")]),c("span",[t._v("发展期")])])])])]),t._v(" "),c("div",{staticClass:"contcard"},[c("div",{staticClass:"cardtitle"},[c("h2",[t._v("盈利空间")]),t._v(" "),c("p",[t._v("PROFIT SPACE")]),t._v(" "),c("div",{staticClass:"cardcont"},[c("img",{staticClass:"fr",attrs:{src:"/cooperation/market02.png"}}),t._v(" "),c("div",{staticClass:"fl"},[c("h3",[t._v("线上流量")]),t._v(" "),c("p",[t._v("互联网营销以其精准度高、互动性强以及营销成本相对较低等显著特性，吸引了越来越多的广告主。截至2018年12月，我国网民规模达8.29亿，互联网普及率为59.60%。我国手机网民规模增至8.17亿，网民中使用手机上网人群的占比由2017年的97.5%提升至98.6%。互联网广告已成为广告客户的主要投放方式之一，市场规模也在持续高速增长。")]),t._v(" "),c("p",[t._v("互联网造就的“粉丝经济”力量巨大，互联网放大了个体价值，微博、抖音等不同平台造就了追星的综合生态，并且这种线上流量能快速实现线下变现。")]),t._v(" "),c("span",[t._v("粉丝经济")]),c("span",[t._v("互联网普及")]),c("span",[t._v("互联网广告")])])])])]),t._v(" "),c("div",{staticClass:"contcard"},[c("div",{staticClass:"cardtitle"},[c("h2",[t._v("合作流程")]),t._v(" "),c("p",[t._v("COOPERATION PROCESS")]),t._v(" "),c("div",{staticClass:"tac process"},[c("img",{attrs:{src:"/cooperation/banner003.png"}}),t._v(" "),c("span",[t._v("提交代理申请")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hq"},[e("div",{staticClass:"banxin"},[e("div",{staticClass:"contcard"},[e("div",{staticClass:"cardtitle"},[e("h2",[this._v("媒介兔代理等级")]),this._v(" "),e("p",[this._v("AGENT LEVEL")]),this._v(" "),e("div",{staticClass:"daili"},[e("img",{attrs:{src:"/cooperation/banner004.png",alt:""}})])])])])])}],!1,null,"6cc15e5a",null);e.default=component.exports}}]);