exports.ids=[26],exports.modules={121:function(t,e){},190:function(t,e,r){"use strict";r.r(e);var d=r(121),c=r.n(d);for(var o in d)"default"!==o&&function(t){r.d(e,t,function(){return d[t]})}(o);e.default=c.a},287:function(t,e,r){"use strict";r.r(e);var d=r(86),c=r(91),o={layout:"header",components:{headert:d.a,problem:c.a}},l=r(1);var component=Object(l.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pro"},[e("headert"),this._ssrNode(" "),this._ssrNode('<div class="banxin" data-v-5ddd30cc>',"</div>",[this._ssrNode('<div class="c_left" data-v-5ddd30cc>',"</div>",[e("problem")],1),this._ssrNode(' <div class="c_right" data-v-5ddd30cc><div class="r_header" data-v-5ddd30cc>\n                媒体主\n            </div> <div class="r_content" data-v-5ddd30cc><div data-v-5ddd30cc><p data-v-5ddd30cc>1、怎么成为媒体主？媒体主能做什么？</p> <p data-v-5ddd30cc>答：在媒介兔注册时可以选择成为媒体主角色。媒体主申请入驻平台，入驻成功后通过平台接单。</p></div> <div data-v-5ddd30cc><p data-v-5ddd30cc>2、完成订单后什么时候可以结算？</p> <p data-v-5ddd30cc>答：订单完成后广告主媒体主双方确认无误，72小时内即可到账。</p></div> <div data-v-5ddd30cc><p data-v-5ddd30cc>3、在你们平台接单会泄漏我的私人联系方式吗？?</p> <p data-v-5ddd30cc>答：平台所有用户的联系方式，我们将加密保护措施。对于泄露、盗取用户信息的本公司会追责，情况严重者我们将予以起诉！--我的订单查看进度。</p></div> <div data-v-5ddd30cc><p data-v-5ddd30cc>4、在平台接单后，我没有按要求完成，有违约金吗？</p> <p data-v-5ddd30cc>答：每一位媒体主都需要签署合作协议，协议中有涉及，如果您接单后，恶意违约，将赔付该笔订单的20%违约金，请须知。</p></div> <div data-v-5ddd30cc><p data-v-5ddd30cc>5、在你们平台如何提现？</p> <p data-v-5ddd30cc>答：完成订单资金到账，提现申请提交后不超过72小时。</p></div> <div data-v-5ddd30cc><p data-v-5ddd30cc>6、接单后发现内容违规后怎么办？</p> <p data-v-5ddd30cc>答：媒体主接单后，发现涉及违反广告法、具有煽动暴力、政治言论、色情、赌博等违法广告可以与客服联系拒接接单。</p></div></div></div>')],2)],2)},[],!1,function(t){var e=r(190);e.__inject__&&e.__inject__(t)},"5ddd30cc","7857e670");e.default=component.exports},84:function(t,e){},85:function(t,e,r){"use strict";r.r(e);var d=r(84),c=r.n(d);for(var o in d)"default"!==o&&function(t){r.d(e,t,function(){return d[t]})}(o);e.default=c.a},86:function(t,e,r){"use strict";r(2);var d={data:()=>({userdata:"",input:"",options:[{value:"1",label:"微信公众号"},{value:"2",label:"微博"},{value:"3",label:"短视频"},{value:"4",label:"软文营销"}],value:"1"}),methods:{searchkeyword(){return this.$store.commit("setsearchkeyword",{modula:this.value,keyword:this.input}),"1"==this.value?this.$router.push("/search/weixin"):"2"==this.value?this.$router.push("/search/weibo"):"3"==this.value?this.$router.push("/search/video"):"4"==this.value?this.$router.push("/search/softarticle"):void 0}},mounted(){}},c=r(1);var component=Object(c.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._ssrNode('<div class="bgcf" data-v-acd89136>',"</div>",[t._ssrNode('<div class="search" data-v-acd89136>',"</div>",[r("nuxt-link",{staticClass:"logo cr",attrs:{to:"/",tag:"div"}}),t._ssrNode(" "),t._ssrNode('<div class="rightsearch" data-v-acd89136>',"</div>",[t._ssrNode('<div class="searchborder" data-v-acd89136>',"</div>",[r("el-select",{staticClass:"elSele",staticStyle:{width:"120px"},attrs:{placeholder:"请选择"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._ssrNode(" "),r("el-input",{staticClass:"searchkey",staticStyle:{borderRadius:"0"},attrs:{placeholder:"请输入你要搜索的关键字"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),t._ssrNode(" "),r("el-button",{staticClass:"searchbtn",staticStyle:{height:"37px"},attrs:{type:"primary"},on:{click:t.searchkeyword}},[t._v("搜索")])],2),t._ssrNode(" "),r("nuxt-link",{staticClass:"shopcar",attrs:{to:"/shopcar",tag:"button"}},[r("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:"/indexicon/douh_icon002.png"}}),t._v(" 购物车("+t._s(t.$store.state.userdata.shopcart_count||"0")+")")])],2)],2),t._ssrNode(" "),t._ssrNode('<div class="headerNav" data-v-acd89136>',"</div>",[r("nuxt-link",{staticClass:"fenlei",attrs:{to:"/"}},[t._v("营销首页")]),t._ssrNode(" "),r("nuxt-link",{style:"/search/weixin"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/weixin"}},[t._v("微信营销")]),t._ssrNode(" "),r("nuxt-link",{style:"/search/video"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/video"}},[t._v("短视频营销")]),t._ssrNode(" "),r("nuxt-link",{style:"/search/weibo"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/weibo"}},[t._v("微博营销")]),t._ssrNode(" "),r("nuxt-link",{style:"/search/softarticle"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/softarticle"}},[t._v("软文营销")]),t._ssrNode(" "),r("nuxt-link",{style:"/search/selfmeida"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/selfmeida",target:"_blank"}},[t._v("自媒体营销")]),t._ssrNode(" "),r("nuxt-link",{style:"/search/selfproduct"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/selfproduct"}},[t._v("SEO")]),t._ssrNode(" "),r("nuxt-link",{style:"/search/service"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/service"}},[t._v("服务项目")]),t._ssrNode(" "),r("nuxt-link",{style:"/search/info"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/info"}},[t._v("信息流广告")])],2)],2)])},[],!1,function(t){var e=r(85);e.__inject__&&e.__inject__(t)},"acd89136","3a9d2297");e.a=component.exports},87:function(t,e){},90:function(t,e,r){"use strict";r.r(e);var d=r(87),c=r.n(d);for(var o in d)"default"!==o&&function(t){r.d(e,t,function(){return d[t]})}(o);e.default=c.a},91:function(t,e,r){"use strict";var d={data:()=>({})},c=r(1);var component=Object(c.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._ssrNode('<ul class="pul" data-v-7503a6e0>',"</ul>",[t._ssrNode("<li"+t._ssrClass(null,"/problem"==t.$route.path?"pactive":"")+" data-v-7503a6e0>","</li>",[r("nuxt-link",{attrs:{to:"/problem"}},[t._v("帮助中心")])],1),t._ssrNode(" "),t._ssrNode("<li"+t._ssrClass(null,"/problem/advertisers"==t.$route.path?"pactive":"")+" data-v-7503a6e0>","</li>",[r("nuxt-link",{attrs:{to:"/problem/advertisers"}},[t._v("广告主")])],1),t._ssrNode(" "),t._ssrNode("<li"+t._ssrClass(null,"/problem/mediaOwner"==t.$route.path?"pactive":"")+" data-v-7503a6e0>","</li>",[r("nuxt-link",{attrs:{to:"/problem/mediaOwner"}},[t._v("媒体主")])],1),t._ssrNode(" "),t._ssrNode("<li"+t._ssrClass(null,"/problem/financialSecurity"==t.$route.path?"pactive":"")+" data-v-7503a6e0>","</li>",[r("nuxt-link",{attrs:{to:"/problem/financialSecurity"}},[t._v("资金安全")])],1),t._ssrNode(" "),t._ssrNode("<li"+t._ssrClass(null,"/problem/companyProfile"==t.$route.path?"pactive":"")+" data-v-7503a6e0>","</li>",[r("nuxt-link",{attrs:{to:"/problem/companyProfile"}},[t._v("公司简介")])],1),t._ssrNode(" "),t._ssrNode("<li"+t._ssrClass(null,"/problem/agreement"==t.$route.path?"pactive":"")+" data-v-7503a6e0>","</li>",[r("nuxt-link",{attrs:{to:"/problem/agreement"}},[t._v("用户协议")])],1)],2)])},[],!1,function(t){var e=r(90);e.__inject__&&e.__inject__(t)},"7503a6e0","3bafb5b6");e.a=component.exports}};
//# sourceMappingURL=fd71ad7606df11e59cc5.js.map