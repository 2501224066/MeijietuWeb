(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{306:function(t,e,r){},307:function(t,e,r){"use strict";var l=r(306);r.n(l).a},308:function(t,e,r){"use strict";r(7);var l={data:function(){return{userdata:"",input:"",options:[{value:"1",label:"微信公众号"},{value:"2",label:"微博"},{value:"3",label:"短视频"},{value:"4",label:"软文营销"}],value:"1"}},methods:{searchkeyword:function(){return this.$store.commit("setsearchkeyword",{modula:this.value,keyword:this.input}),"1"==this.value?this.$router.push("/search/weixin"):"2"==this.value?this.$router.push("/search/weibo"):"3"==this.value?this.$router.push("/search/video"):"4"==this.value?this.$router.push("/search/softarticle"):void 0}},mounted:function(){}},c=(r(307),r(2)),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"bgcf"},[r("div",{staticClass:"search"},[r("nuxt-link",{staticClass:"logo cr",attrs:{to:"/",tag:"div"}}),t._v(" "),r("div",{staticClass:"rightsearch"},[r("div",{staticClass:"searchborder"},[r("el-select",{staticClass:"elSele",staticStyle:{width:"120px"},attrs:{placeholder:"请选择"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v(" "),r("el-input",{staticClass:"searchkey",staticStyle:{borderRadius:"0"},attrs:{placeholder:"请输入你要搜索的关键字"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),t._v(" "),r("el-button",{staticClass:"searchbtn",staticStyle:{height:"37px"},attrs:{type:"primary"},on:{click:t.searchkeyword}},[t._v("搜索")])],1),t._v(" "),r("nuxt-link",{staticClass:"shopcar",attrs:{to:"/shopcar",tag:"button"}},[r("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:"/indexicon/douh_icon002.png"}}),t._v(" 购物车("+t._s(t.$store.state.userdata.shopcart_count||"0")+")")])],1)],1),t._v(" "),r("div",{staticClass:"headerNav"},[r("nuxt-link",{staticClass:"fenlei",attrs:{to:"/"}},[t._v("营销首页")]),t._v(" "),r("nuxt-link",{style:"/search/weixin"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/weixin"}},[t._v("微信营销")]),t._v(" "),r("nuxt-link",{style:"/search/video"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/video"}},[t._v("短视频营销")]),t._v(" "),r("nuxt-link",{style:"/search/weibo"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/weibo"}},[t._v("微博营销")]),t._v(" "),r("nuxt-link",{style:"/search/softarticle"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/softarticle"}},[t._v("软文营销")]),t._v(" "),r("nuxt-link",{style:"/search/selfproduct"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/selfproduct"}},[t._v("SEO")]),t._v(" "),r("nuxt-link",{style:"/search/service"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/service"}},[t._v("服务项目")])],1)])])},[],!1,null,"0c79bca3",null);e.a=component.exports},309:function(t,e,r){},312:function(t,e,r){"use strict";var l=r(309);r.n(l).a},313:function(t,e,r){"use strict";var l={data:function(){return{}}},c=(r(312),r(2)),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ul",{staticClass:"pul"},[r("li",{class:"/problem"==t.$route.path?"pactive":""},[r("nuxt-link",{attrs:{to:"/problem"}},[t._v("帮助中心")])],1),t._v(" "),r("li",{class:"/problem/advertisers"==t.$route.path?"pactive":""},[r("nuxt-link",{attrs:{to:"/problem/advertisers"}},[t._v("广告主")])],1),t._v(" "),r("li",{class:"/problem/mediaOwner"==t.$route.path?"pactive":""},[r("nuxt-link",{attrs:{to:"/problem/mediaOwner"}},[t._v("媒体主")])],1),t._v(" "),r("li",{class:"/problem/financialSecurity"==t.$route.path?"pactive":""},[r("nuxt-link",{attrs:{to:"/problem/financialSecurity"}},[t._v("资金安全")])],1),t._v(" "),r("li",{class:"/problem/companyProfile"==t.$route.path?"pactive":""},[r("nuxt-link",{attrs:{to:"/problem/companyProfile"}},[t._v("公司简介")])],1),t._v(" "),r("li",{class:"/problem/agreement"==t.$route.path?"pactive":""},[r("nuxt-link",{attrs:{to:"/problem/agreement"}},[t._v("用户协议")])],1)])])},[],!1,null,"7503a6e0",null);e.a=component.exports},333:function(t,e,r){},393:function(t,e,r){"use strict";var l=r(333);r.n(l).a},478:function(t,e,r){"use strict";r.r(e);var l=r(308),c=r(313),o={layout:"header",components:{headert:l.a,problem:c.a}},n=(r(393),r(2)),component=Object(n.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pro"},[e("headert"),this._v(" "),e("div",{staticClass:"banxin"},[e("div",{staticClass:"c_left"},[e("problem")],1),this._v(" "),this._m(0)])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"c_right"},[e("div",{staticClass:"r_header"},[this._v("\n                资金安全\n            ")]),this._v(" "),e("div",{staticClass:"r_content"},[e("div",[e("p",[this._v("尊敬的客户您好！")]),this._v(" "),e("p",{staticClass:"text_c"},[this._v("为保障会员的资金安全，媒介兔内部制定了严格的资金管理流程和完善的系统，进行监督监控，降低操作风险。在交易过程中，资金全程在我平台担保，确保资金的安全问题。交易完成之后放款于卖家。所以，在交易过程中完全不用担心资金的安全保障问题。即便是交易结束，我们的客服人员也会在交易结束之前与交易双方核对是否还有其他的问题，需一切妥当无误之后放款。")])])])])}],!1,null,"0a313e86",null);e.default=component.exports}}]);