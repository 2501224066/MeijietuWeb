(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{307:function(t,e,r){},308:function(t,e,r){"use strict";var l=r(307);r.n(l).a},309:function(t,e,r){"use strict";r(7);var l={data:function(){return{userdata:"",input:"",options:[{value:"1",label:"微信公众号"},{value:"2",label:"微博"},{value:"3",label:"短视频"},{value:"4",label:"软文营销"}],value:"1"}},methods:{searchkeyword:function(){return this.$store.commit("setsearchkeyword",{modula:this.value,keyword:this.input}),"1"==this.value?this.$router.push("/search/weixin"):"2"==this.value?this.$router.push("/search/weibo"):"3"==this.value?this.$router.push("/search/video"):"4"==this.value?this.$router.push("/search/softarticle"):void 0}},mounted:function(){}},o=(r(308),r(2)),component=Object(o.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"bgcf"},[r("div",{staticClass:"search"},[r("nuxt-link",{staticClass:"logo cr",attrs:{to:"/",tag:"div"}}),t._v(" "),r("div",{staticClass:"rightsearch"},[r("div",{staticClass:"searchborder"},[r("el-select",{staticClass:"elSele",staticStyle:{width:"120px"},attrs:{placeholder:"请选择"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v(" "),r("el-input",{staticClass:"searchkey",staticStyle:{borderRadius:"0"},attrs:{placeholder:"请输入你要搜索的关键字"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),t._v(" "),r("el-button",{staticClass:"searchbtn",staticStyle:{height:"37px"},attrs:{type:"primary"},on:{click:t.searchkeyword}},[t._v("搜索")])],1),t._v(" "),r("nuxt-link",{staticClass:"shopcar",attrs:{to:"/shopcar",tag:"button"}},[r("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:"/indexicon/douh_icon002.png"}}),t._v(" 购物车("+t._s(t.$store.state.userdata.shopcart_count||"0")+")")])],1)],1),t._v(" "),r("div",{staticClass:"headerNav"},[r("nuxt-link",{staticClass:"fenlei",attrs:{to:"/"}},[t._v("营销首页")]),t._v(" "),r("nuxt-link",{style:"/search/weixin"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/weixin"}},[t._v("微信营销")]),t._v(" "),r("nuxt-link",{style:"/search/video"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/video"}},[t._v("短视频营销")]),t._v(" "),r("nuxt-link",{style:"/search/weibo"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/weibo"}},[t._v("微博营销")]),t._v(" "),r("nuxt-link",{style:"/search/softarticle"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/softarticle"}},[t._v("软文营销")]),t._v(" "),r("nuxt-link",{style:"/search/selfmeida"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/selfmeida",target:"_blank"}},[t._v("自媒体营销")]),t._v(" "),r("nuxt-link",{style:"/search/selfproduct"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/selfproduct"}},[t._v("SEO")]),t._v(" "),r("nuxt-link",{style:"/search/service"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/service"}},[t._v("服务项目")]),t._v(" "),r("nuxt-link",{style:"/search/info"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/info"}},[t._v("信息流广告")])],1)])])},[],!1,null,"acd89136",null);e.a=component.exports},310:function(t,e,r){},313:function(t,e,r){"use strict";var l=r(310);r.n(l).a},314:function(t,e,r){"use strict";var l={data:function(){return{}}},o=(r(313),r(2)),component=Object(o.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ul",{staticClass:"pul"},[r("li",{class:"/problem"==t.$route.path?"pactive":""},[r("nuxt-link",{attrs:{to:"/problem"}},[t._v("帮助中心")])],1),t._v(" "),r("li",{class:"/problem/advertisers"==t.$route.path?"pactive":""},[r("nuxt-link",{attrs:{to:"/problem/advertisers"}},[t._v("广告主")])],1),t._v(" "),r("li",{class:"/problem/mediaOwner"==t.$route.path?"pactive":""},[r("nuxt-link",{attrs:{to:"/problem/mediaOwner"}},[t._v("媒体主")])],1),t._v(" "),r("li",{class:"/problem/financialSecurity"==t.$route.path?"pactive":""},[r("nuxt-link",{attrs:{to:"/problem/financialSecurity"}},[t._v("资金安全")])],1),t._v(" "),r("li",{class:"/problem/companyProfile"==t.$route.path?"pactive":""},[r("nuxt-link",{attrs:{to:"/problem/companyProfile"}},[t._v("公司简介")])],1),t._v(" "),r("li",{class:"/problem/agreement"==t.$route.path?"pactive":""},[r("nuxt-link",{attrs:{to:"/problem/agreement"}},[t._v("用户协议")])],1)])])},[],!1,null,"7503a6e0",null);e.a=component.exports},345:function(t,e,r){},414:function(t,e,r){"use strict";var l=r(345);r.n(l).a},493:function(t,e,r){"use strict";r.r(e);var l=r(309),o=r(314),c={layout:"header",components:{headert:l.a,problem:o.a}},n=(r(414),r(2)),component=Object(n.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pro"},[e("headert"),this._v(" "),e("div",{staticClass:"banxin"},[e("div",{staticClass:"c_left"},[e("problem")],1),this._v(" "),this._m(0)])],1)},[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"c_right"},[r("div",{staticClass:"r_header"},[t._v("\n                广告主\n            ")]),t._v(" "),r("div",{staticClass:"r_content"},[r("div",[r("p",[t._v("1、怎么成为广告主？广告主能做什么？")]),t._v(" "),r("p",[t._v("答：在媒介兔注册时可以选择成为广告主角色。广告主可在平台购买广告投放，专职客服服务。")])]),t._v(" "),r("div",[r("p",[t._v("2、怎么样充值资金到账号？能提现吗？")]),t._v(" "),r("p",[t._v("答：进入个人中心页面可以充值。广告主提现不超过72小时内即可到账。")])]),t._v(" "),r("div",[r("p",[t._v("3、订单怎么查看进度?")]),t._v(" "),r("p",[t._v("答：进入个人中心--我的订单查看进度。")])]),t._v(" "),r("div",[r("p",[t._v("4、如果媒体主拒绝接单或者流单怎么办？拒绝接单或者流单可以退款吗？")]),t._v(" "),r("p",[t._v("答：拒单与流单后，平台会与媒体主沟通拒单原因，可根据实际情况修改文案或者重新选择媒体主进行投放。当媒体主拒单或者流单情况下，您是可以申请退款的，当天将为您处理退款事宜。")])]),t._v(" "),r("div",[r("p",[t._v("5、媒介兔按照什么收费？")]),t._v(" "),r("p",[t._v("答：广告主只需要按照平台展示的对应价格进行付费即可。")])]),t._v(" "),r("div",[r("p",[t._v("6、为何平台上价格会变动？")]),t._v(" "),r("p",[t._v("答：由于自媒体主的账号会随着粉丝数量的变化而产生营销价值变化，基本上每个月自媒体主的报价都是不同的，所以不能以挂售价格为准，敬请亲的理解。")])])])])}],!1,null,"6e41e6f6",null);e.default=component.exports}}]);