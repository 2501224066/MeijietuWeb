exports.ids=[46],exports.modules={134:function(t,d){},188:function(t,d,e){"use strict";e.r(d);var v=e(134),r=e.n(v);for(var c in v)"default"!==c&&function(t){e.d(d,t,function(){return v[t]})}(c);d.default=r.a},211:function(t,d,e){"use strict";e.r(d);var v=e(2),r={layout:"user",data:()=>({loading:!0,userdata:"",realnamedata:""}),mounted(){Object(v.a)().then(t=>this.$axios.post("/me",{},{headers:{Authorization:"Bearer"+t}}).then(d=>(this.userdata=d.data.data.realname_status,localStorage.setItem("userdata",JSON.stringify(d.data)),1==this.userdata?this.$axios.post("/realnamePeopleInfo",{},{headers:{Authorization:"Bearer"+t}}):2==this.userdata?this.$axios.post("/realnameEnterpriseInfo",{},{headers:{Authorization:"Bearer"+t}}):void 0))).then(t=>{this.realnamedata=t.data.data,this.loading=!1}).catch(t=>{this.loading=!1})}},c=e(1);var component=Object(c.a)(r,function(){var t=this,d=t.$createElement;return(t._self._c||d)("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"white"},[t._ssrNode('<div class="certiheader" data-v-4757895a>'+t._ssrEscape(t._s(1==t.userdata?"个人实名认证":"企业实名认证"))+"</div> "+(1==t.userdata?'<div class="certicontent" data-v-4757895a><div data-v-4757895a><div class="certleft" data-v-4757895a>真实姓名 :</div> <div class="certright" data-v-4757895a>'+t._ssrEscape(t._s(t.realnamedata.truename))+'</div></div> <div data-v-4757895a><div class="certleft" data-v-4757895a>身份证号 :</div> <div class="certright" data-v-4757895a>'+t._ssrEscape(t._s(t.realnamedata.identity_card_ID))+'</div></div> <div data-v-4757895a><div class="certleft" data-v-4757895a>绑定手机 :</div> <div class="certright" data-v-4757895a>'+t._ssrEscape(t._s(t.realnamedata.bank_band_phone))+'</div></div> <div data-v-4757895a><div class="certleft" data-v-4757895a>开户银行 :</div> <div class="certright" data-v-4757895a>'+t._ssrEscape(t._s(t.realnamedata.bank_deposit))+'</div></div> <div data-v-4757895a><div class="certleft" data-v-4757895a>开户支行 :</div> <div class="certright" data-v-4757895a>'+t._ssrEscape(t._s(t.realnamedata.bank_branch))+'</div></div> <div data-v-4757895a><div class="certleft" data-v-4757895a>开户地区 :</div> <div class="certright" data-v-4757895a>'+t._ssrEscape(t._s(t.realnamedata.bank_where))+'</div></div> <div data-v-4757895a><div class="certleft" data-v-4757895a>银行卡号 :</div> <div class="certright" data-v-4757895a>'+t._ssrEscape(t._s(t.realnamedata.bank_card))+"</div></div></div>":"\x3c!----\x3e")+" "+(2==t.userdata?'<div class="certicontent" data-v-4757895a><div data-v-4757895a><div class="certleft" data-v-4757895a>企业名称 :</div> <div class="certright" data-v-4757895a>'+t._ssrEscape(t._s(t.realnamedata.enterprise_name))+'</div></div> <div data-v-4757895a><div class="certleft" data-v-4757895a>统一社会信用代码 :</div> <div class="certright" data-v-4757895a>'+t._ssrEscape(t._s(t.realnamedata.social_credit_code))+'</div></div> <div data-v-4757895a><div class="certleft" data-v-4757895a>绑定手机 :</div> <div class="certright" data-v-4757895a>'+t._ssrEscape(t._s(t.realnamedata.bank_band_phone))+'</div></div> <div data-v-4757895a><div class="certleft" data-v-4757895a>开户银行 :</div> <div class="certright" data-v-4757895a>'+t._ssrEscape(t._s(t.realnamedata.bank_deposit))+'</div></div> <div data-v-4757895a><div class="certleft" data-v-4757895a>开户支行 :</div> <div class="certright" data-v-4757895a>'+t._ssrEscape(t._s(t.realnamedata.bank_branch))+'</div></div> <div data-v-4757895a><div class="certleft" data-v-4757895a>开户地区 :</div> <div class="certright" data-v-4757895a>'+t._ssrEscape(t._s(t.realnamedata.bank_where))+'</div></div> <div data-v-4757895a><div class="certleft" data-v-4757895a>银行卡号 :</div> <div class="certright" data-v-4757895a>'+t._ssrEscape(t._s(t.realnamedata.bank_card))+"</div></div></div>":"\x3c!----\x3e"))])},[],!1,function(t){var d=e(188);d.__inject__&&d.__inject__(t)},"4757895a","312bb4af");d.default=component.exports}};
//# sourceMappingURL=f1a6b029afa58b12743e.js.map