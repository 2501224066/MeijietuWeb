(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{308:function(t,e,c){},309:function(t,e,c){"use strict";var v=c(308);c.n(v).a},310:function(t,e,c){"use strict";c(6);var v={data:function(){return{userdata:"",input:"",options:[{value:"1",label:"微信公众号"},{value:"2",label:"微博"},{value:"3",label:"短视频"}],value:"1"}},methods:{searchkeyword:function(){return this.$store.commit("setsearchkeyword",{modula:this.value,keyword:this.input}),"1"==this.value?this.$router.push("/search/weixin"):"2"==this.value?this.$router.push("/search/weibo"):"3"==this.value?this.$router.push("/search/video"):void 0}},mounted:function(){}},r=(c(309),c(2)),component=Object(r.a)(v,function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("div",{staticClass:"bgcf"},[c("div",{staticClass:"search"},[c("nuxt-link",{staticClass:"logo cr",attrs:{to:"/",tag:"div"}}),t._v(" "),c("div",{staticClass:"rightsearch"},[c("div",{staticClass:"searchborder"},[c("el-select",{staticClass:"elSele",staticStyle:{width:"120px"},attrs:{placeholder:"请选择"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,function(t){return c("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v(" "),c("el-input",{staticClass:"searchkey",staticStyle:{borderRadius:"0"},attrs:{placeholder:"请输入你要搜索的关键字"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),t._v(" "),c("el-button",{staticClass:"searchbtn",staticStyle:{height:"37px"},attrs:{type:"primary"},on:{click:t.searchkeyword}},[t._v("搜索")])],1),t._v(" "),c("nuxt-link",{staticClass:"shopcar",attrs:{to:"/shopcar",tag:"button"}},[c("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:"/indexicon/douh_icon002.png"}}),t._v(" 购物车("+t._s(t.$store.state.userdata.shopcart_count||"0")+")")])],1)],1),t._v(" "),c("div",{staticClass:"headerNav"},[c("nuxt-link",{staticClass:"fenlei",attrs:{to:"/"}},[t._v("营销首页")]),t._v(" "),c("nuxt-link",{style:"/search/weixin"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/weixin"}},[t._v("微信营销")]),t._v(" "),c("nuxt-link",{style:"/search/video"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/video"}},[t._v("短视频营销")]),t._v(" "),c("nuxt-link",{style:"/search/weibo"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/weibo"}},[t._v("微博营销")]),t._v(" "),c("nuxt-link",{style:"/search/selfproduct"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/selfproduct"}},[t._v("SEO")]),t._v(" "),c("nuxt-link",{style:"/search/service"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/service"}},[t._v("服务项目")])],1)])])},[],!1,null,"5cb2702d",null);e.a=component.exports},312:function(t,e,c){},313:function(t,e,c){},316:function(t,e,c){"use strict";var v=c(312);c.n(v).a},317:function(t,e,c){"use strict";var v=c(313);c.n(v).a},318:function(t,e,c){"use strict";var v=c(6),r={methods:{lianxi:function(){window.open(Object(v.d)(JSON.parse(localStorage.getItem("salesman")).salesman_qq_ID))}}},l=(c(317),c(2)),component=Object(l.a)(r,function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"ser_l"},[c("div",{staticClass:"serTab"},[c("div",{staticClass:"Tabheader"},[t._v("服务项目")]),t._v(" "),c("ul",{staticClass:"serlist"},[c("li",{class:"/search/service"==t.$route.path?"serActive":""},[c("nuxt-link",{attrs:{to:"/search/service"}},[t._v("PPT商业计划书服务")])],1),t._v(" "),c("li",{class:"/search/service/word"==t.$route.path?"serActive":""},[c("nuxt-link",{attrs:{to:"/search/service/word"}},[t._v("WORD商业计划书服务")])],1),t._v(" "),c("li",{class:"/search/service/vip"==t.$route.path?"serActive":""},[c("nuxt-link",{attrs:{to:"/search/service/vip"}},[t._v("VIP商业计划书服务")])],1),t._v(" "),c("li",{class:"/search/service/pptword"==t.$route.path?"serActive":""},[c("nuxt-link",{attrs:{to:"/search/service/pptword"}},[t._v("全套商业计划书服务")])],1),t._v(" "),c("li",{class:"/search/service/keyan"==t.$route.path?"serActive":""},[c("nuxt-link",{attrs:{to:"/search/service/keyan"}},[t._v("项目可行性研究报告")])],1),t._v(" "),c("li",{class:"/search/service/fa"==t.$route.path?"serActive":""},[c("nuxt-link",{attrs:{to:"/search/service/fa"}},[t._v("融资资讯/FA服务")])],1)])]),t._v(" "),c("div",{staticClass:"needHelp"},[c("div",{staticClass:"needHTitle"},[t._v("需要我们帮助吗")]),t._v(" "),c("div",{staticClass:"needHInfo"},[t._v("关于商业计划书、融资的任何问题，我们都乐于提供帮助。请联系客服")]),t._v(" "),c("el-button",{attrs:{type:"primary"},on:{click:t.lianxi}},[t._v("联系QQ")])],1)])},[],!1,null,"c02e4d66",null);e.a=component.exports},319:function(t,e,c){"use strict";c(316);var v=c(2),component=Object(v.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"liucheng"},[c("h2",[t._v("服务流程")]),t._v(" "),c("div",{staticClass:"liuc_c"},[c("div",[c("div"),t._v(" "),c("div",{staticClass:"liuc_ctext"},[c("p",[t._v("1. 确认需求")]),t._v(" "),c("p",[t._v("请仔细阅读出品规格和服务标准，以确认服务是否可以满足需求，如果您需要签订纸质合同，请联系我们")])]),t._v(" "),c("div",{staticClass:"liuc_ctext"},[c("p",[t._v("2. 支持购买")]),t._v(" "),c("p",[t._v("在线支付购买服务，也可以选择微信、支付宝扫码支付或者银行账户转账。")])]),t._v(" "),c("div",{staticClass:"liuc_ctext"},[c("p",[t._v("3. 建立项目组")]),t._v(" "),c("p",[t._v("组建服务团队，建立项目工作沟通群")])]),t._v(" "),c("div",{staticClass:"liuc_ctext"},[c("p",[t._v("4. 初步沟通")]),t._v(" "),c("p",[t._v("项目团队与您进行初步沟通，确定创作中心思想，您将收到服务资料需求清单")])]),t._v(" "),c("div",{staticClass:"liuc_ctext"},[c("p",[t._v("5. 资料及沟通")]),t._v(" "),c("p",[t._v("您需要按照《清单》准备资料，项目团队将随时给予您帮助")])]),t._v(" "),c("div",{staticClass:"liuc_ctext"},[c("p",[t._v("6. 目录及模板")]),t._v(" "),c("p",[t._v("制定目录及模板（PPT），并与您确认")])]),t._v(" "),c("div",{staticClass:"liuc_ctext"},[c("p",[t._v("7.撰写及交付")]),t._v(" "),c("p",[t._v("按照您确认的目录和模板（PPT）进行撰写，在约定时间内交付")])]),t._v(" "),c("div",{staticClass:"liuc_ctext"},[c("p",[t._v("8.修改服务")]),t._v(" "),c("p",[t._v("根据您的修改意见，修订商业计划书")])])])])])}],!1,null,"38a5016a",null);e.a=component.exports},368:function(t,e,c){},425:function(t,e,c){"use strict";var v=c(368);c.n(v).a},475:function(t,e,c){"use strict";c.r(e);var v=c(310),r=c(319),l=c(318),n={layout:"header",data:function(){return{select:1}},methods:{lianxi:function(){window.open("https://wpa.qq.com/msgrd?v=3&uin=28458999&site=qq&menu=yes")}},components:{headert:v.a,serL:l.a,serR:r.a}},_=(c(425),c(2)),component=Object(_.a)(n,function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"ppt"},[c("headert"),t._v(" "),c("div",{staticClass:"serbanner"}),t._v(" "),c("div",{staticClass:"banxin"},[c("serL"),t._v(" "),c("div",{staticClass:"c_right"},[c("div",{staticClass:"c_rbanner"}),t._v(" "),c("h2",[t._v("商业计划在线融资顾问/FA服务")]),t._v(" "),c("p",[t._v("商业计划在线助力创新型企业对接资本市场，针对企业类型、企业现状制定不同的股权融资方案，为企业寻求融资渠道，并提供高效的并购与IPO咨询全方位服务。")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),c("serR"),t._v(" "),t._m(2),t._v(" "),c("div",{staticClass:"lianxi"},[c("h2",{staticStyle:{color:"#fff","font-size":"34px"}},[t._v("免费咨询关于商业计划书的任何问题")]),t._v(" "),c("el-button",{attrs:{type:"success"},on:{click:t.lianxi}},[t._v("立刻联系我们")])],1)],1)],1)],1)},[function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"select_c"},[c("h2",[t._v("服务内容")]),t._v(" "),c("div",{staticClass:"select_clist"},[c("div",[t._v("协助评估、确定融资战略和操作方案；")]),t._v(" "),c("div",[t._v("协助提供、选择风险投资、私募基金机构；")]),t._v(" "),c("div",[t._v("提供融资法律咨询意见和融资协议；")]),t._v(" "),c("div",{staticStyle:{border:"none"}},[t._v("参与融资谈判，指导完成融资程序。")])])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"vc_column"},[c("div",[c("div",{staticStyle:{height:"64px"}}),t._v(" "),c("h3",[t._v("不成功，不收费")]),t._v(" "),c("p",[t._v("对结果负责任，融资不成功，不收取服务费用")])]),t._v(" "),c("div",[c("div",{staticStyle:{height:"64px"}}),t._v(" "),c("h3",[t._v("TOP资源，TOP团队")]),t._v(" "),c("p",[t._v("顶级投行、律所资源，高管均有多年行业经验")])]),t._v(" "),c("div",[c("div",{staticStyle:{height:"64px"}}),t._v(" "),c("h3",[t._v("有温度，有态度")]),t._v(" "),c("p",[t._v("融资参谋，全程陪伴企业成长，恪守职业道德")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h2",[this._v("支付方式及发票")]),this._v(" "),e("p",[this._v("请确认收款方为: 武汉中帜云媒网络科技有限公司")]),this._v(" "),e("p",[this._v("接受信用卡付款")])])}],!1,null,"65bda08a",null);e.default=component.exports}}]);