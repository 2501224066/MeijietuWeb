(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{306:function(v,t,_){},307:function(v,t,_){"use strict";var e=_(306);_.n(e).a},308:function(v,t,_){"use strict";_(7);var e={data:function(){return{userdata:"",input:"",options:[{value:"1",label:"微信公众号"},{value:"2",label:"微博"},{value:"3",label:"短视频"},{value:"4",label:"软文营销"}],value:"1"}},methods:{searchkeyword:function(){return this.$store.commit("setsearchkeyword",{modula:this.value,keyword:this.input}),"1"==this.value?this.$router.push("/search/weixin"):"2"==this.value?this.$router.push("/search/weibo"):"3"==this.value?this.$router.push("/search/video"):"4"==this.value?this.$router.push("/search/softarticle"):void 0}},mounted:function(){}},r=(_(307),_(2)),component=Object(r.a)(e,function(){var v=this,t=v.$createElement,_=v._self._c||t;return _("div",[_("div",{staticClass:"bgcf"},[_("div",{staticClass:"search"},[_("nuxt-link",{staticClass:"logo cr",attrs:{to:"/",tag:"div"}}),v._v(" "),_("div",{staticClass:"rightsearch"},[_("div",{staticClass:"searchborder"},[_("el-select",{staticClass:"elSele",staticStyle:{width:"120px"},attrs:{placeholder:"请选择"},model:{value:v.value,callback:function(t){v.value=t},expression:"value"}},v._l(v.options,function(v){return _("el-option",{key:v.value,attrs:{label:v.label,value:v.value}})}),1),v._v(" "),_("el-input",{staticClass:"searchkey",staticStyle:{borderRadius:"0"},attrs:{placeholder:"请输入你要搜索的关键字"},model:{value:v.input,callback:function(t){v.input=t},expression:"input"}}),v._v(" "),_("el-button",{staticClass:"searchbtn",staticStyle:{height:"37px"},attrs:{type:"primary"},on:{click:v.searchkeyword}},[v._v("搜索")])],1),v._v(" "),_("nuxt-link",{staticClass:"shopcar",attrs:{to:"/shopcar",tag:"button"}},[_("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:"/indexicon/douh_icon002.png"}}),v._v(" 购物车("+v._s(v.$store.state.userdata.shopcart_count||"0")+")")])],1)],1),v._v(" "),_("div",{staticClass:"headerNav"},[_("nuxt-link",{staticClass:"fenlei",attrs:{to:"/"}},[v._v("营销首页")]),v._v(" "),_("nuxt-link",{style:"/search/weixin"==v.$route.path?"color:#5141ED":"",attrs:{to:"/search/weixin"}},[v._v("微信营销")]),v._v(" "),_("nuxt-link",{style:"/search/video"==v.$route.path?"color:#5141ED":"",attrs:{to:"/search/video"}},[v._v("短视频营销")]),v._v(" "),_("nuxt-link",{style:"/search/weibo"==v.$route.path?"color:#5141ED":"",attrs:{to:"/search/weibo"}},[v._v("微博营销")]),v._v(" "),_("nuxt-link",{style:"/search/softarticle"==v.$route.path?"color:#5141ED":"",attrs:{to:"/search/softarticle"}},[v._v("软文营销")]),v._v(" "),_("nuxt-link",{style:"/search/selfproduct"==v.$route.path?"color:#5141ED":"",attrs:{to:"/search/selfproduct"}},[v._v("SEO")]),v._v(" "),_("nuxt-link",{style:"/search/service"==v.$route.path?"color:#5141ED":"",attrs:{to:"/search/service"}},[v._v("服务项目")])],1)])])},[],!1,null,"0c79bca3",null);t.a=component.exports},309:function(v,t,_){},312:function(v,t,_){"use strict";var e=_(309);_.n(e).a},313:function(v,t,_){"use strict";var e={data:function(){return{}}},r=(_(312),_(2)),component=Object(r.a)(e,function(){var v=this,t=v.$createElement,_=v._self._c||t;return _("div",[_("ul",{staticClass:"pul"},[_("li",{class:"/problem"==v.$route.path?"pactive":""},[_("nuxt-link",{attrs:{to:"/problem"}},[v._v("帮助中心")])],1),v._v(" "),_("li",{class:"/problem/advertisers"==v.$route.path?"pactive":""},[_("nuxt-link",{attrs:{to:"/problem/advertisers"}},[v._v("广告主")])],1),v._v(" "),_("li",{class:"/problem/mediaOwner"==v.$route.path?"pactive":""},[_("nuxt-link",{attrs:{to:"/problem/mediaOwner"}},[v._v("媒体主")])],1),v._v(" "),_("li",{class:"/problem/financialSecurity"==v.$route.path?"pactive":""},[_("nuxt-link",{attrs:{to:"/problem/financialSecurity"}},[v._v("资金安全")])],1),v._v(" "),_("li",{class:"/problem/companyProfile"==v.$route.path?"pactive":""},[_("nuxt-link",{attrs:{to:"/problem/companyProfile"}},[v._v("公司简介")])],1),v._v(" "),_("li",{class:"/problem/agreement"==v.$route.path?"pactive":""},[_("nuxt-link",{attrs:{to:"/problem/agreement"}},[v._v("用户协议")])],1)])])},[],!1,null,"7503a6e0",null);t.a=component.exports},333:function(v,t,_){},392:function(v,t,_){"use strict";var e=_(333);_.n(e).a},477:function(v,t,_){"use strict";_.r(t);var e=_(308),r=_(313),l={layout:"header",components:{headert:e.a,problem:r.a}},n=(_(392),_(2)),component=Object(n.a)(l,function(){var v=this.$createElement,t=this._self._c||v;return t("div",{staticClass:"pro"},[t("headert"),this._v(" "),t("div",{staticClass:"banxin"},[t("div",{staticClass:"c_left"},[t("problem")],1),this._v(" "),this._m(0)])],1)},[function(){var v=this,t=v.$createElement,_=v._self._c||t;return _("div",{staticClass:"c_right"},[_("div",{staticClass:"r_header"},[v._v("\n                用户协议\n            ")]),v._v(" "),_("div",{staticClass:"r_content"},[_("h2",[v._v("《网络服务协议》/《用户注册协议》")]),v._v(" "),_("div",[_("h3",[v._v("1.接受条款")]),v._v(" "),_("p",[v._v("媒介兔网站（以下简称“媒介免”）根据以下服务条款为您提供服务。这些条款可由媒介兔随时更新，且毋须另行通知。媒介兔使用协议（以下简称“使用协议”）一旦发生变动，媒介兔将在网页上公布修改内容。修改后的使用协议一旦在网页上公布即有效代替原来的使用协议。此外，当您使用媒介兔特殊服务时，您和媒介兔应遵守媒介兔随时公布的与该服务相关的指引和规则。前述所有的指引和规则，均构成本使用协议的一部分。\n                    ")]),v._v(" "),_("p",[v._v("\n                    您在使用媒介兔提供的各项服务之前，应仔细阅读本使用协议。如您不同意本使用协议及/或随时对其的修改，请您立即停止使用媒介兔网所提供的全部服务；您一旦使用媒介兔服务，即视为您已了解并完全同意本使用协议各项内容，包括媒介兔对使用协议随时所做的任何修改，并成为媒介兔用户（以下简称“用户”）。\n                    ")])]),v._v(" "),_("div",[_("h3",[v._v("2、服务说明")]),v._v(" "),_("p",[v._v("媒介兔在媒介兔中发布消息、话题、上传图片。除非本使用协议另有其它明示规定，其余均受到本使用协议之规范。您了解并同意，本服务仅依其当前所呈现的状况提供，对于任何用户信息或个人化设定之时效、删除、传递错误、未予储存或其它任何问题，媒介兔均不承担任何责任。媒介兔保留不经事先通知为维修保养、升级或其它目的暂停本服务任何部分的权利。\n                    ")])]),v._v(" "),_("div",[_("h3",[v._v("3、遵守法律")]),v._v(" "),_("p",[v._v("您同意遵守中华人民共和国相关法律法规的所有规定，并对以任何方式使用您的密码和您的帐号使用本服务的任何行为及其结果承担全部责任。如您的行为违反国家法律和法规的任何规定，有可能构成犯罪的，将被追究刑事责任，并由您承担全部法律责任。\n                    同时如果媒介兔有理由认为您的任何行为，包括但不限于您的任何言论和其它行为违反或可能违反国家法律和法规的任何规定，媒介兔可在任何时候不经任何事先通知终止向您提供服务。")])]),v._v(" "),_("div",[_("h3",[v._v("4、您的注册义务 ")]),v._v(" "),_("p",[v._v("为了能使用本服务，您同意以下事项：依本服务注册提示请您填写正确的注册邮箱、密码和名号，并确保今后更新的登录邮箱、名号、头像等资料的有效性和合法性。若您提供任何违法、不道德或媒介兔认为不适合在媒介兔上展示的资料；或者媒介兔有理由怀疑你的资料属于程序或恶意操作，媒介兔有权暂停或终止您的帐号，并拒绝您于现在和未来使用本服务之全部或任何部分。")]),v._v(" "),_("p",[v._v("媒介兔无须对任何用户的任何登记资料承担任何责任，包括但不限于鉴别、核实任何登记资料的真实性、正确性、完整性、适用性及/或是否为最新资料的责任。")])]),v._v(" "),_("div",[_("h3",[v._v("5、用户帐号、密码及安全")]),v._v(" "),_("p",[v._v("完成本服务的注册程序并成功注册之后，您可使用您的Email和密码，登录到您在媒介兔的帐号（下称“帐号”）。保护您的帐号安全，是您的责任。")]),v._v(" "),_("p",[v._v("您应对所有使用您的密码及帐号的活动负完全的责任。您同意：")]),v._v(" "),_("p",[v._v("1) 您的媒介兔帐号遭到未获授权的使用，或者发生其它任何安全问题时，您将立即通知媒介兔；")]),v._v(" "),_("p",[v._v("2) 如果您未保管好自己的帐号和密码，因此而产生的任何损失或损害，媒介兔无法也不承担任何责任；")]),v._v(" "),_("p",[v._v("3) 每个用户都要对其帐号中的所有行为和事件负全责。如果您未保管好自己的帐号和密码而对您、媒介兔或第三方造成的损害，您将负全部责任。")])]),v._v(" "),_("div",[_("h3",[v._v("6、媒介兔隐私权政策")]),v._v(" "),_("p",[v._v("您提供的登记资料及媒介兔保留的有关您的若干其它资料将受到中国有关隐私的法律和本公司《隐私声明》之规范")])]),v._v(" "),_("div",[_("h3",[v._v("7、提供者之责任")]),v._v(" "),_("p",[v._v("根据有关法律法规，媒介兔在此郑重提请您注意，任何经由本服务而发布、上传的文字、资讯、资料、音乐、照片、图形、视讯、信息或其它资料（以下简称“内容”），无论系公开还是私下传送，均由内容提供者承担责任。媒介兔仅为用户提供内容存储空间，无法控制经由本服务传送之内容，因此不保证内容的正确性、完整性或品质。您已预知使用本服务时，可能会接触到令人不快、不适当或令人厌恶之内容。在任何情况下，媒介兔均不为任何内容负责，但媒介兔有权依法停止传输任何前述内容并采取相应行动，包括但不限于暂停用户使用本服务的全部或部分，保存有关记录，并向有关机关报告。")])]),v._v(" "),_("div",[_("h3",[v._v("8、用户行为")]),v._v(" "),_("p",[v._v("用户同意将不会利用本服务进行任何违法或不正当的活动，包括但不限于下列行为∶")]),v._v(" "),_("p",[v._v("1) 发布或以其它方式传送含有下列内容之一的信息：")]),v._v(" "),_("div",{staticStyle:{"margin-left":"80px"}},[_("p",[v._v("* 反对宪法所确定的基本原则的；")]),v._v(" "),_("p",[v._v("* 危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；")]),v._v(" "),_("p",[v._v("* 损害国家荣誉和利益的；")]),v._v(" "),_("p",[v._v("* 煽动民族仇恨、民族歧视、破坏民族团结的；")]),v._v(" "),_("p",[v._v("* 破坏国家宗教政策，宣扬邪教和封建迷信的；")]),v._v(" "),_("p",[v._v("* 散布谣言，扰乱社会秩序，破坏社会稳定的；")]),v._v(" "),_("p",[v._v("* 散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；")]),v._v(" "),_("p",[v._v("* 侮辱或者诽谤他人，侵害他人合法权利的；")]),v._v(" "),_("p",[v._v("* 含有虚假、诈骗、有害、胁迫、侵害他人隐私、骚扰、侵害、中伤、粗俗、猥亵、或其它道德上令人反感的内容；")]),v._v(" "),_("p",[v._v("* 含有中国法律、法规、规章、条例以及任何具有法律效力之规范所限制或禁止的其它内容的；")]),v._v(" "),_("p",[v._v("* 含有媒介兔认为不适合在媒介兔展示的内容；")])]),v._v(" "),_("p",[v._v("2) 以任何方式危害他人的合法权益；")]),v._v(" "),_("p",[v._v("3) 冒充其他任何人或机构，或以虚伪不实的方式陈述或谎称与任何人或机构有关；")]),v._v(" "),_("p",[v._v("4) 依据任何法律或合约或法定关系（例如由于雇佣关系和依据保密合约所得知或揭露之内部资料、专属及机密资料）知悉但无权传送之任何内容加以发布、发送电子邮件或以其它方式传送；")]),v._v(" "),_("p",[v._v("5) 将侵害他人著作权、专利权、商标权、商业秘密、或其它专属权利（以下简称“专属权利”）之内容加以发布或以其它方式传送；")]),v._v(" "),_("p",[v._v("6) 将任何广告信函、促销资料、“垃圾邮件”、““滥发信件”、“连锁信件”、“直销”或其它任何形式的劝诱资料加以发布、发送或以其它方式传送；")]),v._v(" "),_("p",[v._v("7) 将设计目的在于干扰、破坏或限制任何计算机软件、硬件或通讯设备功能之计算机病毒（包括但不限于木马程序（trojan horses）、蠕虫（worms）、定时炸弹、删除蝇（cancelbots）（以下简称“病毒”）或其它计算机代码、档案和程序之任何资料，加以发布、发送或以其它方式传送；")]),v._v(" "),_("p",[v._v("8) 干扰或破坏本服务或与本服务相连线之服务器和网络，或违反任何关于本服务连线网络之规定、程序、政策或规范；")]),v._v(" "),_("p",[v._v("9) 跟踪、人肉搜索或以其它方式骚扰他人；")]),v._v(" "),_("p",[v._v("10) 故意或非故意地违反任何适用的当地、国家法律，以及任何具有法律效力的规则；")]),v._v(" "),_("p",[v._v("11) 未经合法授权而截获、篡改、收集、储存或删除他人个人信息、站内邮件或其它数据资料，或将获知的此类资料用于任何非法或不正当目的。")]),v._v(" "),_("p",[v._v("您已认可媒介兔未对用户的使用行为进行全面控制，您使用任何内容时，包括依赖前述内容之正确性、完整性或实用性时，您同意将自行加以判断并承担所有风险，而不依赖于媒介兔。但媒介兔依其自行之考虑，拒绝和删除可经由本服务提供之违反本条款的或其它引起媒介兔反感的任何内容。")]),v._v(" "),_("p",[v._v("您了解并同意，媒介兔依据法律法规的要求，或基于诚信为了以下目的或在合理必要范围内，认定必须将内容加以保存或揭露时，得加以保存或揭露：")]),v._v(" "),_("p",[v._v("a）遵守法律程序；")]),v._v(" "),_("p",[v._v("b）执行本使用协议；")]),v._v(" "),_("p",[v._v("c）回应任何第三人提出的权利主张；")]),v._v(" "),_("p",[v._v("d）保护媒介兔、其用户及公众之权利、财产或个人安全；")]),v._v(" "),_("p",[v._v("e）其它媒介兔认为有必要的情况。")])]),v._v(" "),_("div",[_("h3",[v._v("9、国际使用之特别警告")]),v._v(" "),_("p",[v._v("您已了解国际互联网的无国界性，同意遵守当地所有关于网上行为及内容之法律法规。您特别同意遵守有关从中国或您所在国家或地区输出信息之传输的所有适用法律法规。")])]),v._v(" "),_("div",[_("h3",[v._v("10、在媒介兔发布的公开信息")]),v._v(" "),_("p",[v._v("1) 在本使用协议中，“本服务公开使用区域”系指一般公众可以使用的区域；")]),v._v(" "),_("p",[v._v("2) 用户在媒介兔上传或发布的内容，用户应保证其为著作权人或已取得合法授权，并且该内容不会侵犯任何第三方的合法权益，用户同意授予媒介兔所有上述内容在全球范围内的免费、不可撤销的、永久的、可再许可或转让的独家使用权许可，据该许可媒介兔将有权以展示、推广及其他不为我法律所禁止的方式使用前述内容。")])]),v._v(" "),_("div",[_("h3",[v._v("11、免责声明")]),v._v(" "),_("p",[v._v("1) 用户明确同意其将文字、资讯、资料、音乐、照片、图形、视讯、信息或其它个人资料上传到互联网上，有可能被其他组织或个人复制、转载、或做其它用途的风险完全由其自己承担；因其使用媒介兔服务而产生的一切后果也由其自己承担，我们对用户不承担任何责任。")]),v._v(" "),_("p",[v._v("2) 微博、人人网等官方帐号对用户的相关文字、资讯、资料、音乐、照片、图形、视讯、信息或其它个人资料进行推广发布的，不属于对用户相关权益的侵权行为、媒介兔不承担任何责任。")]),v._v(" "),_("p",[v._v("3) 网站上针对用户的恶意评论，经用户的举报我们会采取删除处理，但不保证服务一定能满足用户的要求，也不对该恶意评论负任何法律责任。")])]),v._v(" "),_("div",[_("h3",[v._v("12、赔偿")]),v._v(" "),_("p",[v._v("由于您通过本服务提供、发布或传送之内容、您与本服务连线、您违反本使用协议、或您侵害他人任何权利因而衍生或导致任何第三人提出任何索赔或请求，包括合理的律师费，您同意赔偿媒介兔及其子公司、关联企业、高级职员、代理人、品牌共有人或其它合作伙伴及员工，并使其免受损害，并承担由此引发的全部法律责任。")])]),v._v(" "),_("div",[_("h3",[v._v("13、禁止商业行为")]),v._v(" "),_("p",[v._v("您同意不对本服务任何部分或本服务之使用或获得，进行复制、拷贝、出售、转售或用于任何其它商业目的。")])]),v._v(" "),_("div",[_("h3",[v._v("14、关于使用及储存之一般措施")]),v._v(" "),_("p",[v._v("您承认关于本服务的使用媒介兔有权制订一般措施及限制，包含但不限于本服务将保留所发布内容或其它发布内容之最长期间，以及一定期间内您使用本服务之次数上限（及每次使用时间之上限）。通过本服务发布或传送之任何信息、通讯资料和其它内容，如被删除或未予储存，您同意媒介兔毋须承担任何责任。您也同意，媒介兔有权依其自行之考虑，不论通知与否，随时变更这些一般措施及限制。")])]),v._v(" "),_("div",[_("h3",[v._v("15、服务之修改")]),v._v(" "),_("p",[v._v("媒介兔有权于任何时间暂时或永久修改或终止本服务（或其任何部分），且无论通知与否。您同意对于本服务所作的任何修改、暂停或终止，媒介兔对您和任何第三人均无需承担任何责任。")])]),v._v(" "),_("div",[_("h3",[v._v("16、终止服务")]),v._v(" "),_("p",[v._v("您同意媒介兔基于其自行之考虑，因任何理由，包含但不限于缺乏使用，或媒介兔认为您已经违反本使用协议的文字及精神，终止您的帐号或本服务之使用（或服务之任何部分），并将您在本服务内任何内容加以移除并删除。您同意依本使用协议任何规定提供之本服务，无需进行事先通知即可中断或终止，您承认并同意，媒介兔可立即关闭或删除您的帐号及您帐号中所有相关信息及文件，及/或禁止继续使用前述文件或本服务。此外，您同意若本服务之使用被中断或终止或您的帐号及相关信息和文件被关闭或删除，媒介兔对您或任何第三人均不承担任何责任。")])]),v._v(" "),_("div",[_("h3",[v._v("17、与广告商及其他第三方进行交易")]),v._v(" "),_("p",[v._v("您通过本网站与广告商及其他第三方进行任何形式的通讯或商业往来，或参与促销活动，包含相关商品或服务之付款及交付，以及达成的其它任何相关条款、条件、保证或声明，完全为您与广告商及其他第三方之间之行为。您因前述任何交易或前述广告商及其他第三方而遭受的任何性质的损失或损害，媒介兔对此不负任何法律责任。")])]),v._v(" "),_("div",[_("h3",[v._v("18、媒介兔之专属权利")]),v._v(" "),_("p",[v._v("您了解并同意，本服务及本服务所使用之相关软件（以下简称“软件”）含有受到相关知识产权及其它法律保护之专有保密资料。您也了解并同意，经由本服务或广告商向您呈现之赞助广告或信息所包含之内容，亦受到著作权、商标权、服务商标、专利权或其它专属权利之法律保护。未经媒介兔或广告商明示授权，您不得修改、出租、出借、出售、散布本服务或软件之任何部份或全部，或据以制作衍生著作，或使用擅自修改后的软件，包括但不限于为了未经授权而使用本服务之目的。媒介兔仅授予您个人、不可移转及非专属之使用权，使您得于单机计算机使用其软件之目的码，但您不得（并不得允许任何第三人）复制、修改、创作衍生著作、进行还原工程、反向组译，或以其它方式发现原始码，或出售、转让、再授权或提供软件设定担保，或以其它方式移转软件之任何权利。您同意将通过由媒介兔所提供的界面而非任何其它途径使用本服务。")])]),v._v(" "),_("div",[_("h3",[v._v("19、担保与保证")]),v._v(" "),_("p",[v._v("您明确了解并同意∶")]),v._v(" "),_("p",[v._v("1) 本使用协议的任何规定不会免除媒介兔对造成您人身伤害的、或因故意或重大过失造成您财产损失的任何责任；")]),v._v(" "),_("p",[v._v("2) 您使用本服务之风险由您个人负担。本服务系依“现状”及“现有”基础提供。媒介兔对本服务不提供任何明示或默示的担保或保证，包含但不限于商业适售性、特定目的之适用性及未侵害他人权利等担保或保证")]),v._v(" "),_("p",[v._v("3) 媒介兔不保证以下事项∶")]),v._v(" "),_("div",{staticStyle:{"margin-left":"80px"}},[_("p",[v._v("* 本服务将符合您的要求；")]),v._v(" "),_("p",[v._v("* 本服务将不受干扰、及时提供、安全可靠或不会出错；")]),v._v(" "),_("p",[v._v("* 使用本服务取得之结果正确可靠")]),v._v(" "),_("p",[v._v("* 您经由本服务购买或取得之任何产品、服务、资讯或其它信息将符合您的期望；")])]),v._v(" "),_("p",[v._v("4) 是否使用本服务下载或取得任何资料应由您自行考虑且自负风险，因任何资料之下载而导致的您电脑系统之任何损坏或数据流失等后果，由您自行承担；")]),v._v(" "),_("p",[v._v("5) 您自媒介兔或经由本服务取得的任何建议或信息，无论是书面或口头形式，除非本使用协议有明确规定，将不构成本使用协议以外之任何保证。")]),v._v(" "),_("p",[v._v("6) 如果媒介兔和/或合作单位使用您提供的肖像、姓名或其他合法权益，您同意将您的肖像、姓名和/或其他合法权益一并授权给媒介兔和/或合作单位使用。")])]),v._v(" "),_("div",[_("h3",[v._v("20、责任限制")]),v._v(" "),_("p",[v._v("您明确了解并同意，基于以下原因而造成的，包括但不限于利润、信誉、应用、数据损失或其它无形损失，媒介兔不承担任何直接、间接、附带、特别、衍生性或惩罚性赔偿责任：")]),v._v(" "),_("p",[v._v("1) 本服务之使用或无法使用；")]),v._v(" "),_("p",[v._v("2) 为替换从或通过本服务购买或取得之任何商品、数据、信息、服务，收到的讯息，或缔结之交易而发生的成本；")]),v._v(" "),_("p",[v._v("3) 您的传输或数据遭到未获授权的存取或变造；")]),v._v(" "),_("p",[v._v("4) 任何第三方在本服务中所作之声明或行为；")]),v._v(" "),_("p",[v._v("5) 与本服务相关的其它事宜，但本使用协议有明确规定的除外；")]),v._v(" "),_("p",[v._v("6) 第三方以任何方式发布或投递欺诈性信息，或诱导用户受到经济损失，媒介兔不承担任何责任。")])]),v._v(" "),_("div",[_("h3",[v._v("21、媒介兔商标信息")]),v._v(" "),_("p",[v._v("媒介兔网、媒介兔以及其它媒介兔注册商标、标志及产品、服务名称，均为媒介兔公司之商标（以下简称“媒介兔标记”）。未经媒介兔事先书面同意，您同意不将媒介兔标记以任何方式展示或使用或作其它处理，或表示您有权展示、使用或另行处理媒介兔标记。")])]),v._v(" "),_("div",[_("h3",[v._v("22、用户专属权利")]),v._v(" "),_("p",[v._v("媒介兔尊重他人知识产权，呼吁用户也要同样尊重知识产权。")]),v._v(" "),_("p",[v._v("媒介兔之服务与资料是基于“现状”提供，而且媒介兔明确地表示拒绝对于“服务”、“资料”或“产品”给予任何明示或暗示之保证，包括但不限于，得为商业使用或适合于特定目的之保证。媒介兔对于因“服务”、“资料”或“产品”所生之任何直接、间接、附带的或因此而导致之衍生性损失概不负责。")]),v._v(" "),_("p",[v._v("如果您对他人的知识产权造成了侵害，媒介兔将依国家法律法规的规定，或在适当的情形下，将依其服务条款或其相关规范性规定，删除特定内容或以至终止您对账户的使用。")]),v._v(" "),_("p",[v._v("媒介兔尊重他人的任何权利（包括知识产权），同时也要求我们的使用者也尊重他人之权利。媒介兔在适当情况下，得自行决定终止侵害或违反他人权利之使用者的帐号。")]),v._v(" "),_("p",[v._v("若您认为您的作品的著作权遭到侵害或您的知识产权被侵犯，根据《信息网络传播权保护条例》的规定，您需及时向媒介兔联系并提供详实的举证材料。或请到中华人民共和国国家版权局下载《要求删除或断开链接侵权网络内容的通知》（下称“删除通知”）的示范格式，如果您不明白“删除通知”的内容，请登录中华人民共和国国家版权局查看《要求删除或断开链接侵权网络内容的通知》填写说明。")])]),v._v(" "),_("div",[_("h3",[v._v("23、一般条款")]),v._v(" "),_("p",[v._v("1) 本使用协议、社区指导原则和免责声明构成您与媒介兔之全部协议，并规范您对于本服务之使用行为。在您使用相关服务、使用第三方提供的内容或软件时，亦应遵从所适用之附加条款及条件")]),v._v(" "),_("p",[v._v("2) 本使用协议及您与媒介兔之关系，均受到中华人民共和国法律管辖。您与媒介兔就本服务、本使用协议或其它有关事项发生的争议，应首先友好协商解决，协商不成时应提请中国国际经济贸易仲裁委员会仲裁，仲裁裁决是终局性的，对双方均有约束力；")]),v._v(" "),_("p",[v._v("3) 媒介兔未行使或执行本使用协议任何权利或规定，不构成对前述权利或权利之放弃；")]),v._v(" "),_("p",[v._v("4) 倘本使用协议之任何规定因与中华人民共和国法律抵触而无效，您依然同意应依照法律，努力使该规定所反映之当事人意向具备效力，且本使用协议其它规定仍应具有完整的效力及效果；")]),v._v(" "),_("p",[v._v("5) 本使用协议之标题仅供方便而设，不具任何法律或契约效果；")]),v._v(" "),_("p",[v._v("6) 只要您登录了媒介兔，就代表您认可以上所有协议。")]),v._v(" "),_("p",[v._v("7) 媒介兔对本使用协议享有最终解释权")])])])])}],!1,null,"5d02b064",null);t.default=component.exports}}]);