exports.ids=[11],exports.modules={159:function(e,t){},228:function(e,t,o){"use strict";o.r(t);var n=o(159),r=o.n(n);for(var d in n)"default"!==d&&function(e){o.d(t,e,function(){return n[e]})}(d);t.default=r.a},242:function(e,t,o){"use strict";o.r(t);var n=o(2),r={layout:"phone",async asyncData({app:e,params:t}){let{data:data}=await e.$axios("/oneGoodsInfo",{params:{goods_num:t.goodsid}});return{goodsData:data.data.data[0]}},data:()=>({goodsData:"",iscollection:!1}),mounted(){},methods:{addshop(a,b){if(""==localStorage.getItem("access_token"))return this.$router.push("/m/login");Object(n.b)().then(e=>this.$axios.post("/joinShopcart",{goods_id_json:JSON.stringify({[a]:b})},{headers:{Authorization:"Bearer"+e}})).then(e=>{alert("成功加入购物车")}).catch(e=>{this.$message.error("失败:"+e.response.data.message)})},fanhui(){this.$router.go(-1)},shoucang(a){Object(n.b)().then(e=>this.$axios.post("/collectionGoods",{goods_id_json:JSON.stringify({1:a})},{headers:{Authorization:"Bearer"+e}})).then(e=>{this.iscollection=!0,this.$message({message:"收藏成功",type:"success"})}).catch(e=>{this.$message.error("失败:只有广告主拥有此功能")})}}},d=o(1);var component=Object(d.a)(r,function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._ssrNode('<div class="mheader" data-v-6b67b21e><span class="el-icon-arrow-left mfanhui" data-v-6b67b21e></span>\n        商品详情\n    </div> <div class="goodsmessage" data-v-6b67b21e><div class="goodsimg" data-v-6b67b21e><img'+e._ssrAttr("src",e.$store.state.header_img+e.goodsData.avatar_url)+" alt data-v-6b67b21e> <p data-v-6b67b21e>"+e._ssrEscape(e._s(e.goodsData.title))+'</p></div> <div class="username" data-v-6b67b21e><p class="nowrap" data-v-6b67b21e>'+e._ssrEscape(e._s(e.goodsData.title_about))+'</p> <p data-v-6b67b21e>粉丝数: <span style="color:orange" data-v-6b67b21e>'+e._ssrEscape(e._s(e.goodsData.fans_num))+'</span> 地区: <span style="color:#242424" data-v-6b67b21e>'+e._ssrEscape(e._s(e.goodsData.region_name))+'</span></p> <p data-v-6b67b21e>领域分类: <span style="color:#242424" data-v-6b67b21e>'+e._ssrEscape(e._s(e.goodsData.filed_name))+'</span></p> <div class="shoucang" data-v-6b67b21e><img'+e._ssrAttr("src",e.iscollection?"/indexicon/shouc_icon2.png":"/indexicon/shouc_icon01.png")+' alt="收藏" data-v-6b67b21e></div></div> '+e._ssrList(e.goodsData.goods_price,function(t,o){return'<div class="goodsprice"'+e._ssrStyle(null,null,{display:0!=t.price?"":"none"})+" data-v-6b67b21e>"+e._ssrEscape("\n            "+e._s(t.priceclassify_name)+" : ")+'<span class="red" data-v-6b67b21e>'+e._ssrEscape("￥"+e._s(t.price)+"元")+'</span> <div class="fr shopcar" data-v-6b67b21e>加入购物车</div></div>'})+"</div>")])},[],!1,function(e){var t=o(228);t.__inject__&&t.__inject__(e)},"6b67b21e","81e0f7aa");t.default=component.exports}};
//# sourceMappingURL=f3e0f07b0871cb2835e2.js.map