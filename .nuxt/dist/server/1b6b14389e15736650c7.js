exports.ids=[11],exports.modules={159:function(t,o){},228:function(t,o,e){"use strict";e.r(o);var c=e(159),n=e.n(c);for(var r in c)"default"!==r&&function(t){e.d(o,t,function(){return c[t]})}(r);o.default=n.a},242:function(t,o,e){"use strict";e.r(o);var c=e(2),n={layout:"phone",async asyncData({app:t,params:o}){let{data:data}=await t.$axios("/oneGoodsInfo",{params:{goods_num:o.goodsid}});return{goodsData:data.data.data[0]}},data:()=>({goodsData:"",iscollection:!1}),mounted(){},methods:{addshop(a,b){if(""==localStorage.getItem("access_token"))return this.$router.push("/m/login");Object(c.b)().then(t=>this.$axios.post("/joinShopcart",{goods_id_json:JSON.stringify({[a]:b})},{headers:{Authorization:"Bearer"+t}})).then(t=>{alert("成功加入购物车")}).catch(t=>{this.$message.error("失败:"+t.response.data.message)})},fanhui(){this.$router.go(-1)},shoucang(a){Object(c.b)().then(t=>this.$axios.post("/collectionGoods",{goods_id_json:JSON.stringify({1:a})},{headers:{Authorization:"Bearer"+t}})).then(t=>{this.iscollection=!0,alert("收藏成功")}).catch(t=>{alert("只有广告主有收藏功能")})}}},r=e(1);var component=Object(r.a)(n,function(){var t=this,o=t.$createElement;return(t._self._c||o)("div",[t._ssrNode('<div class="mheader" data-v-61c61267><span class="el-icon-arrow-left mfanhui" data-v-61c61267></span>\n        商品详情\n    </div> <div class="goodsmessage" data-v-61c61267><div class="goodsimg" data-v-61c61267><img'+t._ssrAttr("src",t.$store.state.header_img+t.goodsData.avatar_url)+" alt data-v-61c61267> <p data-v-61c61267>"+t._ssrEscape(t._s(t.goodsData.title))+'</p></div> <div class="username" data-v-61c61267><p class="nowrap" data-v-61c61267>'+t._ssrEscape(t._s(t.goodsData.title_about))+'</p> <p data-v-61c61267>粉丝数: <span style="color:orange" data-v-61c61267>'+t._ssrEscape(t._s(t.goodsData.fans_num))+'</span> 地区: <span style="color:#242424" data-v-61c61267>'+t._ssrEscape(t._s(t.goodsData.region_name))+'</span></p> <p data-v-61c61267>领域分类: <span style="color:#242424" data-v-61c61267>'+t._ssrEscape(t._s(t.goodsData.filed_name))+'</span></p> <div class="shoucang" data-v-61c61267><img'+t._ssrAttr("src",t.iscollection?"/indexicon/shouc_icon2.png":"/indexicon/shouc_icon01.png")+' alt="收藏" data-v-61c61267></div></div> '+t._ssrList(t.goodsData.goods_price,function(o,e){return'<div class="goodsprice"'+t._ssrStyle(null,null,{display:0!=o.price?"":"none"})+" data-v-61c61267>"+t._ssrEscape("\n            "+t._s(o.priceclassify_name)+" : ")+'<span class="red" data-v-61c61267>'+t._ssrEscape("￥"+t._s(o.price)+"元")+'</span> <div class="fr shopcar" data-v-61c61267>加入购物车</div></div>'})+"</div>")])},[],!1,function(t){var o=e(228);o.__inject__&&o.__inject__(t)},"61c61267","81e0f7aa");o.default=component.exports}};
//# sourceMappingURL=1b6b14389e15736650c7.js.map