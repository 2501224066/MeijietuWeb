(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{306:function(t,e,v){},307:function(t,e,v){"use strict";var c=v(306);v.n(c).a},308:function(t,e,v){"use strict";v(7);var c={data:function(){return{userdata:"",input:"",options:[{value:"1",label:"微信公众号"},{value:"2",label:"微博"},{value:"3",label:"短视频"},{value:"4",label:"软文营销"}],value:"1"}},methods:{searchkeyword:function(){return this.$store.commit("setsearchkeyword",{modula:this.value,keyword:this.input}),"1"==this.value?this.$router.push("/search/weixin"):"2"==this.value?this.$router.push("/search/weibo"):"3"==this.value?this.$router.push("/search/video"):"4"==this.value?this.$router.push("/search/softarticle"):void 0}},mounted:function(){}},_=(v(307),v(2)),component=Object(_.a)(c,function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",[v("div",{staticClass:"bgcf"},[v("div",{staticClass:"search"},[v("nuxt-link",{staticClass:"logo cr",attrs:{to:"/",tag:"div"}}),t._v(" "),v("div",{staticClass:"rightsearch"},[v("div",{staticClass:"searchborder"},[v("el-select",{staticClass:"elSele",staticStyle:{width:"120px"},attrs:{placeholder:"请选择"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,function(t){return v("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v(" "),v("el-input",{staticClass:"searchkey",staticStyle:{borderRadius:"0"},attrs:{placeholder:"请输入你要搜索的关键字"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),t._v(" "),v("el-button",{staticClass:"searchbtn",staticStyle:{height:"37px"},attrs:{type:"primary"},on:{click:t.searchkeyword}},[t._v("搜索")])],1),t._v(" "),v("nuxt-link",{staticClass:"shopcar",attrs:{to:"/shopcar",tag:"button"}},[v("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:"/indexicon/douh_icon002.png"}}),t._v(" 购物车("+t._s(t.$store.state.userdata.shopcart_count||"0")+")")])],1)],1),t._v(" "),v("div",{staticClass:"headerNav"},[v("nuxt-link",{staticClass:"fenlei",attrs:{to:"/"}},[t._v("营销首页")]),t._v(" "),v("nuxt-link",{style:"/search/weixin"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/weixin"}},[t._v("微信营销")]),t._v(" "),v("nuxt-link",{style:"/search/video"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/video"}},[t._v("短视频营销")]),t._v(" "),v("nuxt-link",{style:"/search/weibo"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/weibo"}},[t._v("微博营销")]),t._v(" "),v("nuxt-link",{style:"/search/softarticle"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/softarticle"}},[t._v("软文营销")]),t._v(" "),v("nuxt-link",{style:"/search/selfproduct"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/selfproduct"}},[t._v("SEO")]),t._v(" "),v("nuxt-link",{style:"/search/service"==t.$route.path?"color:#5141ED":"",attrs:{to:"/search/service"}},[t._v("服务项目")])],1)])])},[],!1,null,"0c79bca3",null);e.a=component.exports},310:function(t,e,v){},311:function(t,e,v){},314:function(t,e,v){"use strict";var c=v(310);v.n(c).a},315:function(t,e,v){"use strict";var c=v(311);v.n(c).a},316:function(t,e,v){"use strict";var c=v(7),_={methods:{lianxi:function(){window.open(Object(c.e)(JSON.parse(localStorage.getItem("salesman")).salesman_qq_ID))}}},r=(v(315),v(2)),component=Object(r.a)(_,function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"ser_l"},[v("div",{staticClass:"serTab"},[v("div",{staticClass:"Tabheader"},[t._v("服务项目")]),t._v(" "),v("ul",{staticClass:"serlist"},[v("li",{class:"/search/service"==t.$route.path?"serActive":""},[v("nuxt-link",{attrs:{to:"/search/service"}},[t._v("PPT商业计划书服务")])],1),t._v(" "),v("li",{class:"/search/service/word"==t.$route.path?"serActive":""},[v("nuxt-link",{attrs:{to:"/search/service/word"}},[t._v("WORD商业计划书服务")])],1),t._v(" "),v("li",{class:"/search/service/vip"==t.$route.path?"serActive":""},[v("nuxt-link",{attrs:{to:"/search/service/vip"}},[t._v("VIP商业计划书服务")])],1),t._v(" "),v("li",{class:"/search/service/pptword"==t.$route.path?"serActive":""},[v("nuxt-link",{attrs:{to:"/search/service/pptword"}},[t._v("全套商业计划书服务")])],1),t._v(" "),v("li",{class:"/search/service/keyan"==t.$route.path?"serActive":""},[v("nuxt-link",{attrs:{to:"/search/service/keyan"}},[t._v("项目可行性研究报告")])],1),t._v(" "),v("li",{class:"/search/service/fa"==t.$route.path?"serActive":""},[v("nuxt-link",{attrs:{to:"/search/service/fa"}},[t._v("融资资讯/FA服务")])],1)])]),t._v(" "),v("div",{staticClass:"needHelp"},[v("div",{staticClass:"needHTitle"},[t._v("需要我们帮助吗")]),t._v(" "),v("div",{staticClass:"needHInfo"},[t._v("关于商业计划书、融资的任何问题，我们都乐于提供帮助。请联系客服")]),t._v(" "),v("el-button",{attrs:{type:"primary"},on:{click:t.lianxi}},[t._v("联系QQ")])],1)])},[],!1,null,"c02e4d66",null);e.a=component.exports},317:function(t,e,v){"use strict";v(314);var c=v(2),component=Object(c.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"liucheng"},[v("h2",[t._v("服务流程")]),t._v(" "),v("div",{staticClass:"liuc_c"},[v("div",[v("div"),t._v(" "),v("div",{staticClass:"liuc_ctext"},[v("p",[t._v("1. 确认需求")]),t._v(" "),v("p",[t._v("请仔细阅读出品规格和服务标准，以确认服务是否可以满足需求，如果您需要签订纸质合同，请联系我们")])]),t._v(" "),v("div",{staticClass:"liuc_ctext"},[v("p",[t._v("2. 支持购买")]),t._v(" "),v("p",[t._v("在线支付购买服务，也可以选择微信、支付宝扫码支付或者银行账户转账。")])]),t._v(" "),v("div",{staticClass:"liuc_ctext"},[v("p",[t._v("3. 建立项目组")]),t._v(" "),v("p",[t._v("组建服务团队，建立项目工作沟通群")])]),t._v(" "),v("div",{staticClass:"liuc_ctext"},[v("p",[t._v("4. 初步沟通")]),t._v(" "),v("p",[t._v("项目团队与您进行初步沟通，确定创作中心思想，您将收到服务资料需求清单")])]),t._v(" "),v("div",{staticClass:"liuc_ctext"},[v("p",[t._v("5. 资料及沟通")]),t._v(" "),v("p",[t._v("您需要按照《清单》准备资料，项目团队将随时给予您帮助")])]),t._v(" "),v("div",{staticClass:"liuc_ctext"},[v("p",[t._v("6. 目录及模板")]),t._v(" "),v("p",[t._v("制定目录及模板（PPT），并与您确认")])]),t._v(" "),v("div",{staticClass:"liuc_ctext"},[v("p",[t._v("7.撰写及交付")]),t._v(" "),v("p",[t._v("按照您确认的目录和模板（PPT）进行撰写，在约定时间内交付")])]),t._v(" "),v("div",{staticClass:"liuc_ctext"},[v("p",[t._v("8.修改服务")]),t._v(" "),v("p",[t._v("根据您的修改意见，修订商业计划书")])])])])])}],!1,null,"38a5016a",null);e.a=component.exports},372:function(t,e,v){},435:function(t,e,v){"use strict";var c=v(372);v.n(c).a},453:function(t,e,v){"use strict";v.r(e);var c=v(308),_=v(317),r=v(316),l={layout:"header",data:function(){return{select:1}},methods:{lianxi:function(){window.open("https://wpa.qq.com/msgrd?v=3&uin=28458999&site=qq&menu=yes")}},components:{headert:c.a,serL:r.a,serR:_.a}},n=(v(435),v(2)),component=Object(n.a)(l,function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"ppt"},[v("headert"),t._v(" "),v("div",{staticClass:"serbanner"}),t._v(" "),v("div",{staticClass:"banxin"},[v("serL"),t._v(" "),v("div",{staticClass:"c_right"},[v("div",{staticClass:"c_rbanner"}),t._v(" "),v("h2",[t._v("全套商业计划书使用范围")]),t._v(" "),v("p",[t._v("商业计划书的使用场景包括：投递、路演、项目可行性研究讨论。")]),t._v(" "),t._m(0),t._v(" "),v("div",{staticClass:"select_ppt"},[v("div",{class:1===t.select?"sele_active":"",staticStyle:{"border-top-left-radius":"8px"},on:{click:function(e){t.select=1}}},[t._v("出品规格")]),t._v(" "),v("div",{class:2===t.select?"sele_active":"",on:{click:function(e){t.select=2}}},[t._v("PPT目录示例")]),t._v(" "),v("div",{class:3===t.select?"sele_active":"",on:{click:function(e){t.select=3}}},[t._v("WORD目录示例")]),t._v(" "),v("div",{class:4===t.select?"sele_active":"",on:{click:function(e){t.select=4}}},[t._v("服务承诺")]),t._v(" "),v("div",{class:5===t.select?"sele_active":"",staticStyle:{"border-top-right-radius":"8px"},on:{click:function(e){t.select=5}}},[t._v("服务费用")])]),t._v(" "),v("div",{directives:[{name:"show",rawName:"v-show",value:1===t.select,expression:"select===1"}],staticClass:"select_c"},[v("h2",[t._v("PPT商业计划书出品规格")]),t._v(" "),t._m(1),t._v(" "),v("h2",[t._v("WORD商业计划书出品规格")]),t._v(" "),t._m(2)]),t._v(" "),v("div",{directives:[{name:"show",rawName:"v-show",value:2===t.select,expression:"select===2"}],staticClass:"select_c"},[v("h2",[t._v("PPT商业计划书文件内容")]),t._v(" "),t._m(3)]),t._v(" "),v("div",{directives:[{name:"show",rawName:"v-show",value:3===t.select,expression:"select===3"}],staticClass:"select_c"},[v("h2",[t._v("WORD商业计划书目录示例")]),t._v(" "),t._m(4)]),t._v(" "),v("div",{directives:[{name:"show",rawName:"v-show",value:4===t.select,expression:"select===4"}],staticClass:"select_c"},[v("h2",[t._v("PPT商业计划书服务承诺")]),t._v(" "),t._m(5)]),t._v(" "),v("div",{directives:[{name:"show",rawName:"v-show",value:5===t.select,expression:"select===5"}],staticClass:"select_c"},[v("h2",[t._v("全套商业计划书服务费用")]),t._v(" "),t._m(6)]),t._v(" "),v("serR"),t._v(" "),t._m(7),t._v(" "),v("div",{staticClass:"lianxi"},[v("h2",{staticStyle:{color:"#fff","font-size":"34px"}},[t._v("免费咨询关于商业计划书的任何问题")]),t._v(" "),v("el-button",{attrs:{type:"success"},on:{click:t.lianxi}},[t._v("立刻联系我们")])],1)],1)],1)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("选择全套代写服务/PPT+WORD，不仅能确保您应付各种场景，而且整个商业计划书的逻辑严谨，经得起反复推敲和盘问。"),e("strong",[this._v("如果您的项目处于概念和初创阶段，我们强烈建议您选择这一服务")])])},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"select_clist",staticStyle:{"margin-bottom":"20px"}},[v("div",[v("strong",[t._v("文件格式： ")]),t._v("  pptx文件，office2007以上版本兼容")]),t._v(" "),v("div",[v("strong",[t._v("页数： ")]),t._v("  14-20页")]),t._v(" "),v("div",[v("strong",[t._v("版式： ")]),t._v(" 16.9")]),t._v(" "),v("div",[v("strong",[t._v("页面尺寸： ")]),t._v("  27.51cm*19.05cm")]),t._v(" "),v("div",{staticStyle:{border:"none"}},[v("strong",[t._v("页面效果：")]),t._v("  纯静态无动画")])])},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"select_clist"},[v("div",[v("strong",[t._v("文件格式： ")]),t._v("  docx，office07以上版本兼容")]),t._v(" "),v("div",[v("strong",[t._v("页数： ")]),t._v("  20-40页")]),t._v(" "),v("div",[v("strong",[t._v("版式： ")]),t._v(" 纵向排版（财务报表为横向排版）")]),t._v(" "),v("div",[v("strong",[t._v("页面尺寸： ")]),t._v(" 21cm*29.7cm A4尺寸")]),t._v(" "),v("div",{staticStyle:{border:"none"}},[v("strong",[t._v("页面效果：")]),t._v("  5号字体，1.5倍行距")]),t._v(" "),v("p",[t._v("如果您对格式有不同要求，请联系客服咨询")])])},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"select_clist"},[v("div",[v("strong",[t._v("封     面： ")]),t._v("  公司名称、LOGO、SLOGAN，1页")]),t._v(" "),v("div",[v("strong",[t._v("公司介绍： ")]),t._v("  总结描述企业亮点, 1页")]),t._v(" "),v("div",[v("strong",[t._v("团队介绍： ")]),t._v("  列出团队关键人员(管理层,核心技术人员)信息，1-2页")]),t._v(" "),v("div",[v("strong",[t._v("市场痛点： ")]),t._v("  市场痛点描述，指出某些市场需求没有被充分满足，1页")]),t._v(" "),v("div",[v("strong",[t._v("解决方案： ")]),t._v("  产品和服务如何抓住市场机会,解决市场痛点，1-2页")]),t._v(" "),v("div",[v("strong",[t._v("市场前景： ")]),t._v("  潜在客户和基础目标客户分析，1-2页")]),t._v(" "),v("div",[v("strong",[t._v("竞争分析： ")]),t._v("  竞争对手简要描述，1页")]),t._v(" "),v("div",[v("strong",[t._v("市场推广： ")]),t._v("  市场投放的主要手段，1页")]),t._v(" "),v("div",[v("strong",[t._v("销售渠道： ")]),t._v("  销售渠道和转化方式，1-2页")]),t._v(" "),v("div",[v("strong",[t._v("项目现状： ")]),t._v("  已经完成的业绩和项目进度，1页")]),t._v(" "),v("div",[v("strong",[t._v("未来规划： ")]),t._v("  跟项目发展有关的重大事件的里程碑，1页")]),t._v(" "),v("div",[v("strong",[t._v("财务预测： ")]),t._v("  财务预测数据图表展示，1页")]),t._v(" "),v("div",[v("strong",[t._v("融资计划： ")]),t._v("  融资目标和资金使用计划，1页")]),t._v(" "),v("div",{staticStyle:{border:"none"}},[v("strong",[t._v("封     底： ")]),t._v("  联系方式/SLOGAN，1页")])])},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"select_clist"},[v("div",[v("strong",[t._v("执行摘要 1.1、 ")]),t._v("  市场机会 市场痛点、产品服务和团队情况概述 0.5-1页")]),t._v(" "),v("div",[v("strong",[t._v("执行摘要 1.2、 ")]),t._v("  未来展望 财务预测概述和融资需求概述 0.5-1页")]),t._v(" "),v("div",[v("strong",[t._v("市场分析 2.1、 ")]),t._v("  市场痛点 市场痛点描述，产品服务的描述 2-3页")]),t._v(" "),v("div",[v("strong",[t._v("市场分析 2.2、 ")]),t._v("  市场定位 描述目标市场和主要目标客户，预测目标市场趋势，描述如何分步骤分阶段进入目标市场 2-3页")]),t._v(" "),v("div",[v("strong",[t._v("市场分析 2.3、 ")]),t._v("  竞争分析 描述产品服务的竞争格局，定义产品和服务的竞争优势 2-3页")]),t._v(" "),v("div",[v("strong",[t._v("运营发展 3.1、 ")]),t._v("  市场销售 市场推广方式，销售转化模式，销售团队布局和管理 2-3页")]),t._v(" "),v("div",[v("strong",[t._v("运营发展 3.2、 ")]),t._v("  运营支持 营业场所、系统支持、设备支持 1-2页")]),t._v(" "),v("div",[v("strong",[t._v("运营发展 3.3、 ")]),t._v("  未来里程碑 阶段计划目标及衡量运营状况的数据指标 1-2页")]),t._v(" "),v("div",[v("strong",[t._v("公司介绍 4.1、 ")]),t._v("  公司概况 描述公司发展历程、企业股权结构 1-2页")]),t._v(" "),v("div",[v("strong",[t._v("公司介绍 4.2、 ")]),t._v("  人力资源 管理团队及核心成员，人力资源规划 2-3页")]),t._v(" "),v("div",[v("strong",[t._v("财务与融资 5.1、 ")]),t._v("  财务预测 描述财务预测方法，对营业收入和利润进行预测 1-2页")]),t._v(" "),v("div",[v("strong",[t._v("财务与融资 5.2、 ")]),t._v("  融资计划 资金用途和融资计划 1页")]),t._v(" "),v("div",[v("strong",[t._v("附件 6.1、 ")]),t._v("  利润表 按月展开的未来3年利润表预测 3页")]),t._v(" "),v("div",[v("strong",[t._v("附件 6.2、 ")]),t._v("  资产负债表 按月展开的未来3年资产负债表 3页")]),t._v(" "),v("div",{staticStyle:{border:"none"}},[v("strong",[t._v("附件 6.3、 ")]),t._v("  现金流量表 按月展开的未来3年现金流量表 3页")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"select_clist"},[e("div",[e("strong",[this._v("全额退款承诺：")]),this._v(" 服务款到账日起，在约定的工作日内没有提供初稿，您可以申请全额退款")]),this._v(" "),e("div",{staticStyle:{border:"none"}},[e("strong",[this._v("免费修改服务： ")]),this._v(" 自交付日起，提供90日内三次以内免费修改服务（项目主体变更、替换产品和服务、商业模式变更不在售后服务范围内）")])])},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"select_feiyong"},[v("div",[t._v("7工作日交付PPT/10工作日交付WORD"),v("span",{staticClass:"fr"},[t._v("￥9.776元")])]),t._v(" "),v("div",[t._v("5工作日交付PPT/7工作日交付WORD"),v("span",{staticClass:"fr"},[t._v("￥12.776元")])]),t._v(" "),v("div",[t._v("3工作日交付PPT/5工作日交付WORD"),v("span",{staticClass:"fr"},[t._v("￥17.776元")])]),t._v(" "),v("div",[t._v("PPT商业计划书英文翻译（每页费用）"),v("span",{staticClass:"fr"},[t._v("￥100元")])]),t._v(" "),v("div",[t._v("WORD商业计划书英文翻译（每页费用）"),v("span",{staticClass:"fr"},[t._v("￥200元")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h2",[this._v("支付方式及发票")]),this._v(" "),e("p",[this._v("请确认收款方为: 武汉中帜云媒网络科技有限公司")]),this._v(" "),e("p",[this._v("接受信用卡付款")])])}],!1,null,"703ad4b8",null);e.default=component.exports}}]);