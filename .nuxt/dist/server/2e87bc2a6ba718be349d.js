exports.ids=[13],exports.modules={108:function(t,d){},168:function(t,d,e){"use strict";e.r(d);var c=e(108),v=e.n(c);for(var n in c)"default"!==n&&function(t){e.d(d,t,function(){return c[t]})}(n);d.default=v.a},232:function(t,d,e){"use strict";e.r(d);var c=e(2),v={layout:"phone",data:()=>({userdata:{},money:""}),mounted(){if(!localStorage.getItem("userdata"))return this.$router.push("/m/login");this.userdata=JSON.parse(localStorage.getItem("userdata")),Object(c.b)().then(t=>this.$axios.post("/walletInfo",{},{headers:{Authorization:"Bearer"+t}})).then(t=>{this.money=t.data.data.available_money}).catch(t=>(console.log(t.response.data.message),this.$router.push("/m/login")))}},n=e(1);var component=Object(n.a)(v,function(){var t=this,d=t.$createElement;return(t._self._c||d)("div",[t._ssrNode('<div class="mheader" data-v-0c19607f><img'+t._ssrAttr("src",t.$store.state.header_img+t.userdata.head_portrait)+' alt="头像" data-v-0c19607f> <div data-v-0c19607f><p data-v-0c19607f>'+t._ssrEscape(t._s(t.userdata.nickname))+"</p> <p data-v-0c19607f>"+t._ssrEscape(t._s(t.userdata.phone))+"</p> <p data-v-0c19607f>"+t._ssrEscape("账户余额: "+t._s(t.money))+'</p> <span data-v-0c19607f></span> <p data-v-0c19607f></p></div></div> <div class="myindent" data-v-0c19607f>我的订单 <span class="allindent" data-v-0c19607f>全部订单</span></div> <div class="status" data-v-0c19607f><div data-v-0c19607f><img src="/m/status01.png" alt="待付款" data-v-0c19607f><p data-v-0c19607f>待付款</p></div> <div data-v-0c19607f><img src="/m/status04.png" alt="待接单" data-v-0c19607f><p data-v-0c19607f>待接单</p></div> <div data-v-0c19607f><img src="/m/status05.png" alt="执行中" data-v-0c19607f><p data-v-0c19607f>执行中</p></div> <div data-v-0c19607f><img src="/m/status02.png" alt="审核中" data-v-0c19607f><p data-v-0c19607f>审核中</p></div> <div data-v-0c19607f><img src="/m/status03.png" alt="已完成" data-v-0c19607f><p data-v-0c19607f>已完成</p></div></div> <div class="jiange" data-v-0c19607f></div> <div class="mysc" data-v-0c19607f>\n        我的收藏\n    </div> <div class="myzj" data-v-0c19607f>\n        资金管理\n    </div> <div class="quit" data-v-0c19607f>\n        退出登录\n    </div>')])},[],!1,function(t){var d=e(168);d.__inject__&&d.__inject__(t)},"0c19607f","6d472642");d.default=component.exports}};
//# sourceMappingURL=2e87bc2a6ba718be349d.js.map