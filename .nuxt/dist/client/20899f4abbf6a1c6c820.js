(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{375:function(t,e,r){},446:function(t,e,r){"use strict";var v=r(375);r.n(v).a},527:function(t,e,r){"use strict";r.r(e);var v=r(7),d={layout:"user",data:function(){return{loading:!0,userdata:"",realnamedata:""}},mounted:function(){var t=this;Object(v.b)().then(function(e){return t.$axios.post("/me",{},{headers:{Authorization:"Bearer"+e}}).then(function(r){return t.userdata=r.data.data.realname_status,localStorage.setItem("userdata",JSON.stringify(r.data)),1==t.userdata?t.$axios.post("/realnamePeopleInfo",{},{headers:{Authorization:"Bearer"+e}}):2==t.userdata?t.$axios.post("/realnameEnterpriseInfo",{},{headers:{Authorization:"Bearer"+e}}):void 0})}).then(function(e){t.realnamedata=e.data.data,t.loading=!1}).catch(function(e){t.loading=!1})}},c=(r(446),r(2)),component=Object(c.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"white"},[r("div",{staticClass:"certiheader"},[t._v(t._s(1==t.userdata?"个人实名认证":"企业实名认证"))]),t._v(" "),1==t.userdata?r("div",{staticClass:"certicontent"},[r("div",[r("div",{staticClass:"certleft"},[t._v("真实姓名 :")]),t._v(" "),r("div",{staticClass:"certright"},[t._v(t._s(t.realnamedata.truename))])]),t._v(" "),r("div",[r("div",{staticClass:"certleft"},[t._v("身份证号 :")]),t._v(" "),r("div",{staticClass:"certright"},[t._v(t._s(t.realnamedata.identity_card_ID))])]),t._v(" "),r("div",[r("div",{staticClass:"certleft"},[t._v("绑定手机 :")]),t._v(" "),r("div",{staticClass:"certright"},[t._v(t._s(t.realnamedata.bank_band_phone))])]),t._v(" "),r("div",[r("div",{staticClass:"certleft"},[t._v("开户银行 :")]),t._v(" "),r("div",{staticClass:"certright"},[t._v(t._s(t.realnamedata.bank_deposit))])]),t._v(" "),r("div",[r("div",{staticClass:"certleft"},[t._v("开户支行 :")]),t._v(" "),r("div",{staticClass:"certright"},[t._v(t._s(t.realnamedata.bank_branch))])]),t._v(" "),r("div",[r("div",{staticClass:"certleft"},[t._v("开户地区 :")]),t._v(" "),r("div",{staticClass:"certright"},[t._v(t._s(t.realnamedata.bank_where))])]),t._v(" "),r("div",[r("div",{staticClass:"certleft"},[t._v("银行卡号 :")]),t._v(" "),r("div",{staticClass:"certright"},[t._v(t._s(t.realnamedata.bank_card))])])]):t._e(),t._v(" "),2==t.userdata?r("div",{staticClass:"certicontent"},[r("div",[r("div",{staticClass:"certleft"},[t._v("企业名称 :")]),t._v(" "),r("div",{staticClass:"certright"},[t._v(t._s(t.realnamedata.enterprise_name))])]),t._v(" "),r("div",[r("div",{staticClass:"certleft"},[t._v("统一社会信用代码 :")]),t._v(" "),r("div",{staticClass:"certright"},[t._v(t._s(t.realnamedata.social_credit_code))])]),t._v(" "),r("div",[r("div",{staticClass:"certleft"},[t._v("绑定手机 :")]),t._v(" "),r("div",{staticClass:"certright"},[t._v(t._s(t.realnamedata.bank_band_phone))])]),t._v(" "),r("div",[r("div",{staticClass:"certleft"},[t._v("开户银行 :")]),t._v(" "),r("div",{staticClass:"certright"},[t._v(t._s(t.realnamedata.bank_deposit))])]),t._v(" "),r("div",[r("div",{staticClass:"certleft"},[t._v("开户支行 :")]),t._v(" "),r("div",{staticClass:"certright"},[t._v(t._s(t.realnamedata.bank_branch))])]),t._v(" "),r("div",[r("div",{staticClass:"certleft"},[t._v("开户地区 :")]),t._v(" "),r("div",{staticClass:"certright"},[t._v(t._s(t.realnamedata.bank_where))])]),t._v(" "),r("div",[r("div",{staticClass:"certleft"},[t._v("银行卡号 :")]),t._v(" "),r("div",{staticClass:"certright"},[t._v(t._s(t.realnamedata.bank_card))])])]):t._e()])},[],!1,null,"4757895a",null);e.default=component.exports}}]);