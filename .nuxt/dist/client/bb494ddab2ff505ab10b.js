(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{308:function(t,e,r){},309:function(t,e,r){"use strict";var l=r(308);r.n(l).a},310:function(t,e,r){"use strict";r(6);var l={data:function(){return{userdata:"",input:"",options:[{value:"1",label:"微信公众号"},{value:"2",label:"微博"},{value:"3",label:"短视频"}],value:"1"}},methods:{searchkeyword:function(){return this.$store.commit("setsearchkeyword",{modula:this.value,keyword:this.input}),"1"==this.value?this.$router.push("/search/weixin"):"2"==this.value?this.$router.push("/search/weibo"):"3"==this.value?this.$router.push("/search/video"):void 0}},mounted:function(){}},c=(r(309),r(2)),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"bgcf"},[r("div",{staticClass:"search"},[r("nuxt-link",{staticClass:"logo cr",attrs:{to:"/",tag:"div"}}),t._v(" "),r("div",{staticClass:"rightsearch"},[r("div",{staticClass:"searchborder"},[r("el-select",{staticClass:"elSele",staticStyle:{width:"120px"},attrs:{placeholder:"请选择"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v(" "),r("el-input",{staticClass:"searchkey",staticStyle:{borderRadius:"0"},attrs:{placeholder:"请输入你要搜索的关键字"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),t._v(" "),r("el-button",{staticClass:"searchbtn",staticStyle:{height:"37px"},attrs:{type:"primary"},on:{click:t.searchkeyword}},[t._v("搜索")])],1),t._v(" "),r("nuxt-link",{staticClass:"shopcar",attrs:{to:"/shopcar",tag:"button"}},[r("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:"/indexicon/douh_icon002.png"}}),t._v(" 购物车("+t._s(t.$store.state.userdata.shopcart_count||"0")+")")])],1)],1),t._v(" "),r("div",{staticClass:"headerNav"},[r("nuxt-link",{staticClass:"fenlei",attrs:{to:"/"}},[t._v("营销首页")]),t._v(" "),r("nuxt-link",{style:"/search/weixin"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/weixin"}},[t._v("微信营销")]),t._v(" "),r("nuxt-link",{style:"/search/video"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/video"}},[t._v("短视频营销")]),t._v(" "),r("nuxt-link",{style:"/search/weibo"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/weibo"}},[t._v("微博营销")]),t._v(" "),r("nuxt-link",{style:"/search/softarticle"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/softarticle"}},[t._v("软文营销")]),t._v(" "),r("nuxt-link",{style:"/search/selfproduct"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/selfproduct"}},[t._v("SEO")]),t._v(" "),r("nuxt-link",{style:"/search/service"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/service"}},[t._v("服务项目")])],1)])])},[],!1,null,"40ef6b90",null);e.a=component.exports},311:function(t,e,r){},314:function(t,e,r){"use strict";var l=r(311);r.n(l).a},315:function(t,e,r){"use strict";var l={data:function(){return{}}},c=(r(314),r(2)),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ul",{staticClass:"pul"},[r("li",{class:"/problem"==t.$route.path?"pactive":""},[r("nuxt-link",{attrs:{to:"/problem"}},[t._v("帮助中心")])],1),t._v(" "),r("li",{class:"/problem/advertisers"==t.$route.path?"pactive":""},[r("nuxt-link",{attrs:{to:"/problem/advertisers"}},[t._v("广告主")])],1),t._v(" "),r("li",{class:"/problem/mediaOwner"==t.$route.path?"pactive":""},[r("nuxt-link",{attrs:{to:"/problem/mediaOwner"}},[t._v("媒体主")])],1),t._v(" "),r("li",{class:"/problem/financialSecurity"==t.$route.path?"pactive":""},[r("nuxt-link",{attrs:{to:"/problem/financialSecurity"}},[t._v("资金安全")])],1),t._v(" "),r("li",{class:"/problem/companyProfile"==t.$route.path?"pactive":""},[r("nuxt-link",{attrs:{to:"/problem/companyProfile"}},[t._v("公司简介")])],1),t._v(" "),r("li",{class:"/problem/agreement"==t.$route.path?"pactive":""},[r("nuxt-link",{attrs:{to:"/problem/agreement"}},[t._v("用户协议")])],1)])])},[],!1,null,"7503a6e0",null);e.a=component.exports},336:function(t,e,r){},396:function(t,e,r){"use strict";var l=r(336);r.n(l).a},482:function(t,e,r){"use strict";r.r(e);var l=r(310),c=r(315),n={layout:"header",components:{headert:l.a,problem:c.a}},o=(r(396),r(2)),component=Object(o.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pro"},[e("headert"),this._v(" "),e("div",{staticClass:"banxin"},[e("div",{staticClass:"c_left"},[e("problem")],1),this._v(" "),this._m(0)])],1)},[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"c_right"},[r("div",{staticClass:"r_header"},[t._v("\n                媒体主\n            ")]),t._v(" "),r("div",{staticClass:"r_content"},[r("div",[r("p",[t._v("1、怎么成为媒体主？媒体主能做什么？")]),t._v(" "),r("p",[t._v("答：在媒介兔注册时可以选择成为媒体主角色。媒体主申请入驻平台，入驻成功后通过平台接单。")])]),t._v(" "),r("div",[r("p",[t._v("2、完成订单后什么时候可以结算？")]),t._v(" "),r("p",[t._v("答：订单完成后广告主媒体主双方确认无误，72小时内即可到账。")])]),t._v(" "),r("div",[r("p",[t._v("3、在你们平台接单会泄漏我的私人联系方式吗？?")]),t._v(" "),r("p",[t._v("答：平台所有用户的联系方式，我们将加密保护措施。对于泄露、盗取用户信息的本公司会追责，情况严重者我们将予以起诉！--我的订单查看进度。")])]),t._v(" "),r("div",[r("p",[t._v("4、在平台接单后，我没有按要求完成，有违约金吗？")]),t._v(" "),r("p",[t._v("答：每一位媒体主都需要签署合作协议，协议中有涉及，如果您接单后，恶意违约，将赔付该笔订单的20%违约金，请须知。")])]),t._v(" "),r("div",[r("p",[t._v("5、在你们平台如何提现？")]),t._v(" "),r("p",[t._v("答：完成订单资金到账，提现申请提交后不超过72小时。")])]),t._v(" "),r("div",[r("p",[t._v("6、接单后发现内容违规后怎么办？")]),t._v(" "),r("p",[t._v("答：媒体主接单后，发现涉及违反广告法、具有煽动暴力、政治言论、色情、赌博等违法广告可以与客服联系拒接接单。")])])])])}],!1,null,"5ddd30cc",null);e.default=component.exports}}]);