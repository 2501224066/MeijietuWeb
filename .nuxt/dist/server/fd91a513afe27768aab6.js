exports.ids=[14],exports.modules={100:function(t,e){},155:function(t,e,r){"use strict";r.r(e);var d=r(100),o=r.n(d);for(var l in d)"default"!==l&&function(t){r.d(e,t,function(){return d[t]})}(l);e.default=o.a},243:function(t,e,r){"use strict";r.r(e);var d=r(86),o=r(91),l={layout:"header",components:{headert:d.a,problem:o.a}},n=r(1);var component=Object(n.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pro"},[e("headert"),this._ssrNode(" "),this._ssrNode('<div class="banxin" data-v-a34de2b2>',"</div>",[this._ssrNode('<div class="c_left" data-v-a34de2b2>',"</div>",[e("problem")],1),this._ssrNode(' <div class="c_right" data-v-a34de2b2><div class="r_header" data-v-a34de2b2>\n                帮助中心\n            </div> <div class="r_content" data-v-a34de2b2><div data-v-a34de2b2><p data-v-a34de2b2>1、媒介兔平台可以为我提供什么？</p> <p data-v-a34de2b2>答：媒介兔平台为广告主提供媒体内容创作、整合营销推广（新闻营销、微信KOL、微博KOL、自媒体推广、视频直播推广等），旨在打通广告主与资源主交易壁垒，去除中间商赚差价，打造“广告主与资源主直接交易”的创新交易模式。</p></div> <div data-v-a34de2b2><p data-v-a34de2b2>2、注册时为什么要选择广告主和媒体主？</p> <p data-v-a34de2b2>答：选择不同角色在平台上使用的功能不同，广告主为买方，媒体主为卖方。</p></div> <div data-v-a34de2b2><p data-v-a34de2b2>3、媒体发布有什么限制吗？</p> <p data-v-a34de2b2>答：含有违规内容、文章广告内容过多、媒体自身调整、涉及违反广告法、具有煽动暴力、色情、赌博等信息，则一律不予发布。</p></div> <div data-v-a34de2b2><p data-v-a34de2b2>4、新闻发布有什么局限性？</p> <p data-v-a34de2b2>答：拒稿的原因主要有：文章含有违规内容、文章广告内容过多、媒体自身调整、重大政策影响等。详情咨询QQ客服。</p></div> <div data-v-a34de2b2><p data-v-a34de2b2>5、怎么购买付款？</p> <p data-v-a34de2b2>答：广告主需要把选择好的商品加入到购物车，然后在购物车内付款。</p></div> <div data-v-a34de2b2><p data-v-a34de2b2>6、下单之后可以退单或者换媒体资源重新投放吗？款项如何操作？</p> <p data-v-a34de2b2>答：广告主下单之后，若稿件尚未发布，可与平台协商退款，所退款项将直接进入平台账户之中。如需更换媒体资源，与客服沟通确认即可。</p></div> <div data-v-a34de2b2><p data-v-a34de2b2>7、可以提供发票吗？</p> <p data-v-a34de2b2>答：开具增值税普通发票、增值税专用发票，均需6个税点，由平台提供。如果开收据的话，没有税点。</p></div> <div data-v-a34de2b2><p data-v-a34de2b2>8、投放的广告软文，链接有时效性吗？</p> <p data-v-a34de2b2>答：一般来说，文章投放到媒体上，其链接是永久存在的。详情咨询QQ客服。</p></div></div></div>')],2)],2)},[],!1,function(t){var e=r(155);e.__inject__&&e.__inject__(t)},"a34de2b2","56292aa1");e.default=component.exports},84:function(t,e){},85:function(t,e,r){"use strict";r.r(e);var d=r(84),o=r.n(d);for(var l in d)"default"!==l&&function(t){r.d(e,t,function(){return d[t]})}(l);e.default=o.a},86:function(t,e,r){"use strict";r(2);var d={data:()=>({userdata:"",input:"",options:[{value:"1",label:"微信公众号"},{value:"2",label:"微博"},{value:"3",label:"短视频"}],value:"1"}),methods:{searchkeyword(){return this.$store.commit("setsearchkeyword",{modula:this.value,keyword:this.input}),"1"==this.value?this.$router.push("/search/weixin"):"2"==this.value?this.$router.push("/search/weibo"):"3"==this.value?this.$router.push("/search/video"):void 0}},mounted(){}},o=r(1);var component=Object(o.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._ssrNode('<div class="bgcf" data-v-5cb2702d>',"</div>",[t._ssrNode('<div class="search" data-v-5cb2702d>',"</div>",[r("nuxt-link",{staticClass:"logo cr",attrs:{to:"/",tag:"div"}}),t._ssrNode(" "),t._ssrNode('<div class="rightsearch" data-v-5cb2702d>',"</div>",[t._ssrNode('<div class="searchborder" data-v-5cb2702d>',"</div>",[r("el-select",{staticClass:"elSele",staticStyle:{width:"120px"},attrs:{placeholder:"请选择"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._ssrNode(" "),r("el-input",{staticClass:"searchkey",staticStyle:{borderRadius:"0"},attrs:{placeholder:"请输入你要搜索的关键字"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),t._ssrNode(" "),r("el-button",{staticClass:"searchbtn",staticStyle:{height:"37px"},attrs:{type:"primary"},on:{click:t.searchkeyword}},[t._v("搜索")])],2),t._ssrNode(" "),r("nuxt-link",{staticClass:"shopcar",attrs:{to:"/shopcar",tag:"button"}},[r("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:"/indexicon/douh_icon002.png"}}),t._v(" 购物车("+t._s(t.$store.state.userdata.shopcart_count||"0")+")")])],2)],2),t._ssrNode(" "),t._ssrNode('<div class="headerNav" data-v-5cb2702d>',"</div>",[r("nuxt-link",{staticClass:"fenlei",attrs:{to:"/"}},[t._v("营销首页")]),t._ssrNode(" "),r("nuxt-link",{style:"/search/weixin"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/weixin"}},[t._v("微信营销")]),t._ssrNode(" "),r("nuxt-link",{style:"/search/video"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/video"}},[t._v("短视频营销")]),t._ssrNode(" "),r("nuxt-link",{style:"/search/weibo"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/weibo"}},[t._v("微博营销")]),t._ssrNode(" "),r("nuxt-link",{style:"/search/selfproduct"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/selfproduct"}},[t._v("SEO")]),t._ssrNode(" "),r("nuxt-link",{style:"/search/service"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/service"}},[t._v("服务项目")])],2)],2)])},[],!1,function(t){var e=r(85);e.__inject__&&e.__inject__(t)},"5cb2702d","3a9d2297");e.a=component.exports},87:function(t,e){},90:function(t,e,r){"use strict";r.r(e);var d=r(87),o=r.n(d);for(var l in d)"default"!==l&&function(t){r.d(e,t,function(){return d[t]})}(l);e.default=o.a},91:function(t,e,r){"use strict";var d={data:()=>({})},o=r(1);var component=Object(o.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._ssrNode('<ul class="pul" data-v-7503a6e0>',"</ul>",[t._ssrNode("<li"+t._ssrClass(null,"/problem"==t.$route.path?"pactive":"")+" data-v-7503a6e0>","</li>",[r("nuxt-link",{attrs:{to:"/problem"}},[t._v("帮助中心")])],1),t._ssrNode(" "),t._ssrNode("<li"+t._ssrClass(null,"/problem/advertisers"==t.$route.path?"pactive":"")+" data-v-7503a6e0>","</li>",[r("nuxt-link",{attrs:{to:"/problem/advertisers"}},[t._v("广告主")])],1),t._ssrNode(" "),t._ssrNode("<li"+t._ssrClass(null,"/problem/mediaOwner"==t.$route.path?"pactive":"")+" data-v-7503a6e0>","</li>",[r("nuxt-link",{attrs:{to:"/problem/mediaOwner"}},[t._v("媒体主")])],1),t._ssrNode(" "),t._ssrNode("<li"+t._ssrClass(null,"/problem/financialSecurity"==t.$route.path?"pactive":"")+" data-v-7503a6e0>","</li>",[r("nuxt-link",{attrs:{to:"/problem/financialSecurity"}},[t._v("资金安全")])],1),t._ssrNode(" "),t._ssrNode("<li"+t._ssrClass(null,"/problem/companyProfile"==t.$route.path?"pactive":"")+" data-v-7503a6e0>","</li>",[r("nuxt-link",{attrs:{to:"/problem/companyProfile"}},[t._v("公司简介")])],1),t._ssrNode(" "),t._ssrNode("<li"+t._ssrClass(null,"/problem/agreement"==t.$route.path?"pactive":"")+" data-v-7503a6e0>","</li>",[r("nuxt-link",{attrs:{to:"/problem/agreement"}},[t._v("用户协议")])],1)],2)])},[],!1,function(t){var e=r(90);e.__inject__&&e.__inject__(t)},"7503a6e0","3bafb5b6");e.a=component.exports}};
//# sourceMappingURL=fd91a513afe27768aab6.js.map