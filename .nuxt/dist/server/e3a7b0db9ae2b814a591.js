exports.ids=[10],exports.modules={107:function(e,t){},161:function(e,t,r){"use strict";r.r(t);var o=r(107),l=r.n(o);for(var d in o)"default"!==d&&function(e){r.d(t,e,function(){return o[e]})}(d);t.default=l.a},253:function(e,t,r){"use strict";r.r(t);var o=r(86),l=r(91),d={layout:"header",components:{headert:o.a,problem:l.a}},n=r(1);var component=Object(n.a)(d,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"pro"},[t("headert"),this._ssrNode(" "),this._ssrNode('<div class="banxin" data-v-6e41e6f6>',"</div>",[this._ssrNode('<div class="c_left" data-v-6e41e6f6>',"</div>",[t("problem")],1),this._ssrNode(' <div class="c_right" data-v-6e41e6f6><div class="r_header" data-v-6e41e6f6>\n                广告主\n            </div> <div class="r_content" data-v-6e41e6f6><div data-v-6e41e6f6><p data-v-6e41e6f6>1、怎么成为广告主？广告主能做什么？</p> <p data-v-6e41e6f6>答：在媒介兔注册时可以选择成为广告主角色。广告主可在平台购买广告投放，专职客服服务。</p></div> <div data-v-6e41e6f6><p data-v-6e41e6f6>2、怎么样充值资金到账号？能提现吗？</p> <p data-v-6e41e6f6>答：进入个人中心页面可以充值。广告主提现不超过72小时内即可到账。</p></div> <div data-v-6e41e6f6><p data-v-6e41e6f6>3、订单怎么查看进度?</p> <p data-v-6e41e6f6>答：进入个人中心--我的订单查看进度。</p></div> <div data-v-6e41e6f6><p data-v-6e41e6f6>4、如果媒体主拒绝接单或者流单怎么办？拒绝接单或者流单可以退款吗？</p> <p data-v-6e41e6f6>答：拒单与流单后，平台会与媒体主沟通拒单原因，可根据实际情况修改文案或者重新选择媒体主进行投放。当媒体主拒单或者流单情况下，您是可以申请退款的，当天将为您处理退款事宜。</p></div> <div data-v-6e41e6f6><p data-v-6e41e6f6>5、媒介兔按照什么收费？</p> <p data-v-6e41e6f6>答：广告主只需要按照平台展示的对应价格进行付费即可。</p></div> <div data-v-6e41e6f6><p data-v-6e41e6f6>6、为何平台上价格会变动？</p> <p data-v-6e41e6f6>答：由于自媒体主的账号会随着粉丝数量的变化而产生营销价值变化，基本上每个月自媒体主的报价都是不同的，所以不能以挂售价格为准，敬请亲的理解。</p></div></div></div>')],2)],2)},[],!1,function(e){var t=r(161);t.__inject__&&t.__inject__(e)},"6e41e6f6","420eaa37");t.default=component.exports},84:function(e,t){},85:function(e,t,r){"use strict";r.r(t);var o=r(84),l=r.n(o);for(var d in o)"default"!==d&&function(e){r.d(t,e,function(){return o[e]})}(d);t.default=l.a},86:function(e,t,r){"use strict";r(2);var o={data:()=>({userdata:"",input:"",options:[{value:"1",label:"微信公众号"},{value:"2",label:"微博"},{value:"3",label:"短视频"}],value:"1"}),methods:{searchkeyword(){return this.$store.commit("setsearchkeyword",{modula:this.value,keyword:this.input}),"1"==this.value?this.$router.push("/search/weixin"):"2"==this.value?this.$router.push("/search/weibo"):"3"==this.value?this.$router.push("/search/video"):void 0}},mounted(){}},l=r(1);var component=Object(l.a)(o,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._ssrNode('<div class="bgcf" data-v-5cb2702d>',"</div>",[e._ssrNode('<div class="search" data-v-5cb2702d>',"</div>",[r("nuxt-link",{staticClass:"logo cr",attrs:{to:"/",tag:"div"}}),e._ssrNode(" "),e._ssrNode('<div class="rightsearch" data-v-5cb2702d>',"</div>",[e._ssrNode('<div class="searchborder" data-v-5cb2702d>',"</div>",[r("el-select",{staticClass:"elSele",staticStyle:{width:"120px"},attrs:{placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._ssrNode(" "),r("el-input",{staticClass:"searchkey",staticStyle:{borderRadius:"0"},attrs:{placeholder:"请输入你要搜索的关键字"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}}),e._ssrNode(" "),r("el-button",{staticClass:"searchbtn",staticStyle:{height:"37px"},attrs:{type:"primary"},on:{click:e.searchkeyword}},[e._v("搜索")])],2),e._ssrNode(" "),r("nuxt-link",{staticClass:"shopcar",attrs:{to:"/shopcar",tag:"button"}},[r("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:"/indexicon/douh_icon002.png"}}),e._v(" 购物车("+e._s(e.$store.state.userdata.shopcart_count||"0")+")")])],2)],2),e._ssrNode(" "),e._ssrNode('<div class="headerNav" data-v-5cb2702d>',"</div>",[r("nuxt-link",{staticClass:"fenlei",attrs:{to:"/"}},[e._v("营销首页")]),e._ssrNode(" "),r("nuxt-link",{style:"/search/weixin"==e.$route.path?"color:#5141ED":"",attrs:{to:"/search/weixin"}},[e._v("微信营销")]),e._ssrNode(" "),r("nuxt-link",{style:"/search/video"==e.$route.path?"color:#5141ED":"",attrs:{to:"/search/video"}},[e._v("短视频营销")]),e._ssrNode(" "),r("nuxt-link",{style:"/search/weibo"==e.$route.path?"color:#5141ED":"",attrs:{to:"/search/weibo"}},[e._v("微博营销")]),e._ssrNode(" "),r("nuxt-link",{style:"/search/selfproduct"==e.$route.path?"color:#5141ED":"",attrs:{to:"/search/selfproduct"}},[e._v("SEO")]),e._ssrNode(" "),r("nuxt-link",{style:"/search/service"==e.$route.path?"color:#5141ED":"",attrs:{to:"/search/service"}},[e._v("服务项目")])],2)],2)])},[],!1,function(e){var t=r(85);t.__inject__&&t.__inject__(e)},"5cb2702d","3a9d2297");t.a=component.exports},87:function(e,t){},90:function(e,t,r){"use strict";r.r(t);var o=r(87),l=r.n(o);for(var d in o)"default"!==d&&function(e){r.d(t,e,function(){return o[e]})}(d);t.default=l.a},91:function(e,t,r){"use strict";var o={data:()=>({})},l=r(1);var component=Object(l.a)(o,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._ssrNode('<ul class="pul" data-v-7503a6e0>',"</ul>",[e._ssrNode("<li"+e._ssrClass(null,"/problem"==e.$route.path?"pactive":"")+" data-v-7503a6e0>","</li>",[r("nuxt-link",{attrs:{to:"/problem"}},[e._v("帮助中心")])],1),e._ssrNode(" "),e._ssrNode("<li"+e._ssrClass(null,"/problem/advertisers"==e.$route.path?"pactive":"")+" data-v-7503a6e0>","</li>",[r("nuxt-link",{attrs:{to:"/problem/advertisers"}},[e._v("广告主")])],1),e._ssrNode(" "),e._ssrNode("<li"+e._ssrClass(null,"/problem/mediaOwner"==e.$route.path?"pactive":"")+" data-v-7503a6e0>","</li>",[r("nuxt-link",{attrs:{to:"/problem/mediaOwner"}},[e._v("媒体主")])],1),e._ssrNode(" "),e._ssrNode("<li"+e._ssrClass(null,"/problem/financialSecurity"==e.$route.path?"pactive":"")+" data-v-7503a6e0>","</li>",[r("nuxt-link",{attrs:{to:"/problem/financialSecurity"}},[e._v("资金安全")])],1),e._ssrNode(" "),e._ssrNode("<li"+e._ssrClass(null,"/problem/companyProfile"==e.$route.path?"pactive":"")+" data-v-7503a6e0>","</li>",[r("nuxt-link",{attrs:{to:"/problem/companyProfile"}},[e._v("公司简介")])],1),e._ssrNode(" "),e._ssrNode("<li"+e._ssrClass(null,"/problem/agreement"==e.$route.path?"pactive":"")+" data-v-7503a6e0>","</li>",[r("nuxt-link",{attrs:{to:"/problem/agreement"}},[e._v("用户协议")])],1)],2)])},[],!1,function(e){var t=r(90);t.__inject__&&t.__inject__(e)},"7503a6e0","3bafb5b6");t.a=component.exports}};
//# sourceMappingURL=e3a7b0db9ae2b814a591.js.map