exports.ids=[15],exports.modules={111:function(t,d){},180:function(t,d,e){"use strict";e.r(d);var c=e(111),r=e.n(c);for(var n in c)"default"!==n&&function(t){e.d(d,t,function(){return c[t]})}(n);d.default=r.a},303:function(t,d,e){"use strict";e.r(d);var c=e(2),r={layout:"phone",data:()=>({userdata:{},money:""}),mounted(){if(!localStorage.getItem("userdata"))return this.$router.push("/m/login");this.userdata=JSON.parse(localStorage.getItem("userdata")),Object(c.b)().then(t=>this.$axios.post("/walletInfo",{},{headers:{Authorization:"Bearer"+t}})).then(t=>{this.money=t.data.data.available_money}).catch(t=>(console.log(t.response.data.message),this.$router.push("/m/login")))},methods:{signOut(){localStorage.setItem("access_token",""),localStorage.setItem("userdata",""),this.$router.push("/m")},indent(){this.$router.push("/m/indent")},coll(){this.$router.push("/m/collection")}}},n=e(1);var component=Object(n.a)(r,function(){var t=this,d=t.$createElement;return(t._self._c||d)("div",{staticClass:"my"},[t._ssrNode('<div class="mheader" data-v-13f03dca><img'+t._ssrAttr("src",t.$store.state.header_img+t.userdata.head_portrait)+' alt="头像" data-v-13f03dca> <div data-v-13f03dca><p data-v-13f03dca>'+t._ssrEscape(t._s(t.userdata.nickname))+"</p> <p data-v-13f03dca>"+t._ssrEscape(t._s(t.userdata.phone))+"</p> <p data-v-13f03dca>"+t._ssrEscape("账户余额: "+t._s(t.money))+'</p> <span data-v-13f03dca></span> <p data-v-13f03dca></p></div></div> <div class="myindent" data-v-13f03dca>我的订单 <span class="allindent" data-v-13f03dca>全部订单 <i class="el-icon-arrow-right" data-v-13f03dca></i></span></div> <div class="status" data-v-13f03dca><div data-v-13f03dca><img src="/m/status01.png" alt="待付款" data-v-13f03dca><p data-v-13f03dca>待付款</p></div> <div data-v-13f03dca><img src="/m/status04.png" alt="待接单" data-v-13f03dca><p data-v-13f03dca>待接单</p></div> <div data-v-13f03dca><img src="/m/status05.png" alt="执行中" data-v-13f03dca><p data-v-13f03dca>执行中</p></div> <div data-v-13f03dca><img src="/m/status02.png" alt="审核中" data-v-13f03dca><p data-v-13f03dca>审核中</p></div> <div data-v-13f03dca><img src="/m/status03.png" alt="已完成" data-v-13f03dca><p data-v-13f03dca>已完成</p></div></div> <div class="jiange" data-v-13f03dca></div> <div class="mysc" data-v-13f03dca>\n        我的收藏\n    </div> <div class="myzj" data-v-13f03dca>\n        资金管理\n    </div> <div class="quit" data-v-13f03dca>\n        退出登录\n    </div>')])},[],!1,function(t){var d=e(180);d.__inject__&&d.__inject__(t)},"13f03dca","6d472642");d.default=component.exports}};
//# sourceMappingURL=8fb935b7838a78856358.js.map