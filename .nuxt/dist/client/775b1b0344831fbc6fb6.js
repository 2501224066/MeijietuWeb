(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{307:function(t,e,r){},308:function(t,e,r){"use strict";var l=r(307);r.n(l).a},309:function(t,e,r){"use strict";r(7);var l={data:function(){return{userdata:"",input:"",options:[{value:"1",label:"微信公众号"},{value:"2",label:"微博"},{value:"3",label:"短视频"},{value:"4",label:"软文营销"}],value:"1"}},methods:{searchkeyword:function(){return this.$store.commit("setsearchkeyword",{modula:this.value,keyword:this.input}),"1"==this.value?this.$router.push("/search/weixin"):"2"==this.value?this.$router.push("/search/weibo"):"3"==this.value?this.$router.push("/search/video"):"4"==this.value?this.$router.push("/search/softarticle"):void 0}},mounted:function(){}},o=(r(308),r(2)),component=Object(o.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"bgcf"},[r("div",{staticClass:"search"},[r("nuxt-link",{staticClass:"logo cr",attrs:{to:"/",tag:"div"}}),t._v(" "),r("div",{staticClass:"rightsearch"},[r("div",{staticClass:"searchborder"},[r("el-select",{staticClass:"elSele",staticStyle:{width:"120px"},attrs:{placeholder:"请选择"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v(" "),r("el-input",{staticClass:"searchkey",staticStyle:{borderRadius:"0"},attrs:{placeholder:"请输入你要搜索的关键字"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),t._v(" "),r("el-button",{staticClass:"searchbtn",staticStyle:{height:"37px"},attrs:{type:"primary"},on:{click:t.searchkeyword}},[t._v("搜索")])],1),t._v(" "),r("nuxt-link",{staticClass:"shopcar",attrs:{to:"/shopcar",tag:"button"}},[r("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:"/indexicon/douh_icon002.png"}}),t._v(" 购物车("+t._s(t.$store.state.userdata.shopcart_count||"0")+")")])],1)],1),t._v(" "),r("div",{staticClass:"headerNav"},[r("nuxt-link",{staticClass:"fenlei",attrs:{to:"/"}},[t._v("营销首页")]),t._v(" "),r("nuxt-link",{style:"/search/weixin"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/weixin"}},[t._v("微信营销")]),t._v(" "),r("nuxt-link",{style:"/search/video"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/video"}},[t._v("短视频营销")]),t._v(" "),r("nuxt-link",{style:"/search/weibo"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/weibo"}},[t._v("微博营销")]),t._v(" "),r("nuxt-link",{style:"/search/softarticle"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/softarticle"}},[t._v("软文营销")]),t._v(" "),r("nuxt-link",{style:"/search/selfproduct"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/selfproduct"}},[t._v("SEO")]),t._v(" "),r("nuxt-link",{style:"/search/service"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/service"}},[t._v("服务项目")]),t._v(" "),r("nuxt-link",{style:"/search/info"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/info"}},[t._v("信息流广告")])],1)])])},[],!1,null,"79b15291",null);e.a=component.exports},310:function(t,e,r){},313:function(t,e,r){"use strict";var l=r(310);r.n(l).a},314:function(t,e,r){"use strict";var l={data:function(){return{}}},o=(r(313),r(2)),component=Object(o.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ul",{staticClass:"pul"},[r("li",{class:"/problem"==t.$route.path?"pactive":""},[r("nuxt-link",{attrs:{to:"/problem"}},[t._v("帮助中心")])],1),t._v(" "),r("li",{class:"/problem/advertisers"==t.$route.path?"pactive":""},[r("nuxt-link",{attrs:{to:"/problem/advertisers"}},[t._v("广告主")])],1),t._v(" "),r("li",{class:"/problem/mediaOwner"==t.$route.path?"pactive":""},[r("nuxt-link",{attrs:{to:"/problem/mediaOwner"}},[t._v("媒体主")])],1),t._v(" "),r("li",{class:"/problem/financialSecurity"==t.$route.path?"pactive":""},[r("nuxt-link",{attrs:{to:"/problem/financialSecurity"}},[t._v("资金安全")])],1),t._v(" "),r("li",{class:"/problem/companyProfile"==t.$route.path?"pactive":""},[r("nuxt-link",{attrs:{to:"/problem/companyProfile"}},[t._v("公司简介")])],1),t._v(" "),r("li",{class:"/problem/agreement"==t.$route.path?"pactive":""},[r("nuxt-link",{attrs:{to:"/problem/agreement"}},[t._v("用户协议")])],1)])])},[],!1,null,"7503a6e0",null);e.a=component.exports},326:function(t,e,r){},399:function(t,e,r){"use strict";var l=r(326);r.n(l).a},478:function(t,e,r){"use strict";r.r(e);var l=r(309),o=r(314),c={layout:"header",components:{headert:l.a,problem:o.a}},n=(r(399),r(2)),component=Object(n.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pro"},[e("headert"),this._v(" "),e("div",{staticClass:"banxin"},[e("div",{staticClass:"c_left"},[e("problem")],1),this._v(" "),this._m(0)])],1)},[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"c_right"},[r("div",{staticClass:"r_header"},[t._v("\n                帮助中心\n            ")]),t._v(" "),r("div",{staticClass:"r_content"},[r("div",[r("p",[t._v("1、媒介兔平台可以为我提供什么？")]),t._v(" "),r("p",[t._v("答：媒介兔平台为广告主提供媒体内容创作、整合营销推广（新闻营销、微信KOL、微博KOL、自媒体推广、视频直播推广等），旨在打通广告主与资源主交易壁垒，去除中间商赚差价，打造“广告主与资源主直接交易”的创新交易模式。")])]),t._v(" "),r("div",[r("p",[t._v("2、注册时为什么要选择广告主和媒体主？")]),t._v(" "),r("p",[t._v("答：选择不同角色在平台上使用的功能不同，广告主为买方，媒体主为卖方。")])]),t._v(" "),r("div",[r("p",[t._v("3、媒体发布有什么限制吗？")]),t._v(" "),r("p",[t._v("答：含有违规内容、文章广告内容过多、媒体自身调整、涉及违反广告法、具有煽动暴力、色情、赌博等信息，则一律不予发布。")])]),t._v(" "),r("div",[r("p",[t._v("4、新闻发布有什么局限性？")]),t._v(" "),r("p",[t._v("答：拒稿的原因主要有：文章含有违规内容、文章广告内容过多、媒体自身调整、重大政策影响等。详情咨询QQ客服。")])]),t._v(" "),r("div",[r("p",[t._v("5、怎么购买付款？")]),t._v(" "),r("p",[t._v("答：广告主需要把选择好的商品加入到购物车，然后在购物车内付款。")])]),t._v(" "),r("div",[r("p",[t._v("6、下单之后可以退单或者换媒体资源重新投放吗？款项如何操作？")]),t._v(" "),r("p",[t._v("答：广告主下单之后，若稿件尚未发布，可与平台协商退款，所退款项将直接进入平台账户之中。如需更换媒体资源，与客服沟通确认即可。")])]),t._v(" "),r("div",[r("p",[t._v("7、可以提供发票吗？")]),t._v(" "),r("p",[t._v("答：开具增值税普通发票、增值税专用发票，均需6个税点，由平台提供。如果开收据的话，没有税点。")])]),t._v(" "),r("div",[r("p",[t._v("8、投放的广告软文，链接有时效性吗？")]),t._v(" "),r("p",[t._v("答：一般来说，文章投放到媒体上，其链接是永久存在的。详情咨询QQ客服。")])])])])}],!1,null,"a34de2b2",null);e.default=component.exports}}]);