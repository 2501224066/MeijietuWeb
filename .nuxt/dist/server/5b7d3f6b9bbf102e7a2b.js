exports.ids=[13],exports.modules={109:function(t,e){},164:function(t,e,r){"use strict";r.r(e);var o=r(109),l=r.n(o);for(var n in o)"default"!==n&&function(t){r.d(e,t,function(){return o[t]})}(n);e.default=l.a},246:function(t,e,r){"use strict";r.r(e);var o=r(85),l=r(90),n={layout:"header",components:{headert:o.a,problem:l.a}},c=r(1);var component=Object(c.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pro"},[e("headert"),this._ssrNode(" "),this._ssrNode('<div class="banxin" data-v-60330726>',"</div>",[this._ssrNode('<div class="c_left" data-v-60330726>',"</div>",[e("problem")],1),this._ssrNode(' <div class="c_right" data-v-60330726><div class="r_header" data-v-60330726>\n                公司简介\n            </div> <div class="r_content" data-v-60330726><div data-v-60330726><img src="/pic/gongsijianjie.jpg" data-v-60330726></div> <div data-v-60330726><p style="text-indent:2em" data-v-60330726><span class="red" data-v-60330726>武汉中帜云媒网络科技有限公司</span>致力于全网全行业优势资源整合，为各领域客户提供透明、高效、精准、专业的一站式营销推广解决方案。我们整合新浪微博大V号、微信意见领袖、网红直播、短视频、自媒体平台、信息流、新闻源等全网优势资源，降低客户在广告投放过程中的信息搜集对比时间，公开广告信息、增加广告交易透明度，节省广告主广告投放成本，降低媒体广告方业务营销成本，让广告交易更加便捷、更有保障。\n                    </p></div></div></div>')],2)],2)},[],!1,function(t){var e=r(164);e.__inject__&&e.__inject__(t)},"60330726","23dd30ad");e.default=component.exports},83:function(t,e){},84:function(t,e,r){"use strict";r.r(e);var o=r(83),l=r.n(o);for(var n in o)"default"!==n&&function(t){r.d(e,t,function(){return o[t]})}(n);e.default=l.a},85:function(t,e,r){"use strict";r(2);var o={data:()=>({userdata:"",input:"",options:[{value:"1",label:"微信公众号"},{value:"2",label:"微博"},{value:"3",label:"短视频"},{value:"4",label:"软文营销"}],value:"1"}),methods:{searchkeyword(){return this.$store.commit("setsearchkeyword",{modula:this.value,keyword:this.input}),"1"==this.value?this.$router.push("/search/weixin"):"2"==this.value?this.$router.push("/search/weibo"):"3"==this.value?this.$router.push("/search/video"):"4"==this.value?this.$router.push("/search/softarticle"):void 0}},mounted(){}},l=r(1);var component=Object(l.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._ssrNode('<div class="bgcf" data-v-0c79bca3>',"</div>",[t._ssrNode('<div class="search" data-v-0c79bca3>',"</div>",[r("nuxt-link",{staticClass:"logo cr",attrs:{to:"/",tag:"div"}}),t._ssrNode(" "),t._ssrNode('<div class="rightsearch" data-v-0c79bca3>',"</div>",[t._ssrNode('<div class="searchborder" data-v-0c79bca3>',"</div>",[r("el-select",{staticClass:"elSele",staticStyle:{width:"120px"},attrs:{placeholder:"请选择"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._ssrNode(" "),r("el-input",{staticClass:"searchkey",staticStyle:{borderRadius:"0"},attrs:{placeholder:"请输入你要搜索的关键字"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),t._ssrNode(" "),r("el-button",{staticClass:"searchbtn",staticStyle:{height:"37px"},attrs:{type:"primary"},on:{click:t.searchkeyword}},[t._v("搜索")])],2),t._ssrNode(" "),r("nuxt-link",{staticClass:"shopcar",attrs:{to:"/shopcar",tag:"button"}},[r("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:"/indexicon/douh_icon002.png"}}),t._v(" 购物车("+t._s(t.$store.state.userdata.shopcart_count||"0")+")")])],2)],2),t._ssrNode(" "),t._ssrNode('<div class="headerNav" data-v-0c79bca3>',"</div>",[r("nuxt-link",{staticClass:"fenlei",attrs:{to:"/"}},[t._v("营销首页")]),t._ssrNode(" "),r("nuxt-link",{style:"/search/weixin"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/weixin"}},[t._v("微信营销")]),t._ssrNode(" "),r("nuxt-link",{style:"/search/video"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/video"}},[t._v("短视频营销")]),t._ssrNode(" "),r("nuxt-link",{style:"/search/weibo"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/weibo"}},[t._v("微博营销")]),t._ssrNode(" "),r("nuxt-link",{style:"/search/softarticle"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/softarticle"}},[t._v("软文营销")]),t._ssrNode(" "),r("nuxt-link",{style:"/search/selfproduct"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/selfproduct"}},[t._v("SEO")]),t._ssrNode(" "),r("nuxt-link",{style:"/search/service"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/service"}},[t._v("服务项目")])],2)],2)])},[],!1,function(t){var e=r(84);e.__inject__&&e.__inject__(t)},"0c79bca3","3a9d2297");e.a=component.exports},86:function(t,e){},89:function(t,e,r){"use strict";r.r(e);var o=r(86),l=r.n(o);for(var n in o)"default"!==n&&function(t){r.d(e,t,function(){return o[t]})}(n);e.default=l.a},90:function(t,e,r){"use strict";var o={data:()=>({})},l=r(1);var component=Object(l.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._ssrNode('<ul class="pul" data-v-7503a6e0>',"</ul>",[t._ssrNode("<li"+t._ssrClass(null,"/problem"==t.$route.path?"pactive":"")+" data-v-7503a6e0>","</li>",[r("nuxt-link",{attrs:{to:"/problem"}},[t._v("帮助中心")])],1),t._ssrNode(" "),t._ssrNode("<li"+t._ssrClass(null,"/problem/advertisers"==t.$route.path?"pactive":"")+" data-v-7503a6e0>","</li>",[r("nuxt-link",{attrs:{to:"/problem/advertisers"}},[t._v("广告主")])],1),t._ssrNode(" "),t._ssrNode("<li"+t._ssrClass(null,"/problem/mediaOwner"==t.$route.path?"pactive":"")+" data-v-7503a6e0>","</li>",[r("nuxt-link",{attrs:{to:"/problem/mediaOwner"}},[t._v("媒体主")])],1),t._ssrNode(" "),t._ssrNode("<li"+t._ssrClass(null,"/problem/financialSecurity"==t.$route.path?"pactive":"")+" data-v-7503a6e0>","</li>",[r("nuxt-link",{attrs:{to:"/problem/financialSecurity"}},[t._v("资金安全")])],1),t._ssrNode(" "),t._ssrNode("<li"+t._ssrClass(null,"/problem/companyProfile"==t.$route.path?"pactive":"")+" data-v-7503a6e0>","</li>",[r("nuxt-link",{attrs:{to:"/problem/companyProfile"}},[t._v("公司简介")])],1),t._ssrNode(" "),t._ssrNode("<li"+t._ssrClass(null,"/problem/agreement"==t.$route.path?"pactive":"")+" data-v-7503a6e0>","</li>",[r("nuxt-link",{attrs:{to:"/problem/agreement"}},[t._v("用户协议")])],1)],2)])},[],!1,function(t){var e=r(89);e.__inject__&&e.__inject__(t)},"7503a6e0","3bafb5b6");e.a=component.exports}};
//# sourceMappingURL=5b7d3f6b9bbf102e7a2b.js.map