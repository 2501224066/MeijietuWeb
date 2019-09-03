<template>
    <div>
         <div class="mheader">
            <span class="el-icon-arrow-left mfanhui" @click="fanhui"></span>
            商品详情
        </div>
        <div class="goodsmessage">
            <div class="goodsimg">
                <img :src="$store.state.header_img+goodsData.avatar_url" alt="">
                <p>{{goodsData.title}}</p>
            </div> 
             <div class="username">
                <p class="nowrap">{{goodsData.title_about}}</p>
                <p>粉丝数: <span style="color:orange">{{goodsData.fans_num}}</span> 地区: <span style="color:#242424">{{goodsData.region_name}}</span>  </p>
                <p>领域分类: <span style="color:#242424">{{goodsData.filed_name}}</span> </p>
                <div class="shoucang" @click="shoucang(goodsData.goods_id)">
                    <img :src="iscollection?'/indexicon/shouc_icon2.png':'/indexicon/shouc_icon01.png'" alt="收藏">
                </div>
            </div>
            <div class="goodsprice" v-for="(item,index) in goodsData.goods_price" :key="index" v-show="item.price != 0">
                {{item.priceclassify_name}} : <span class="red">￥{{item.price}}元</span>  
                <div class="fr shopcar" @click="addshop(item.goods_id,item.goods_price_id)">加入购物车</div>
            </div>
        </div>
    </div>
</template>
<script>
import {gettoken} from '@@/assets/commen.js'
export default {
    layout: 'phone',
    async asyncData({app,params}) {
        let { data } = await app.$axios('/oneGoodsInfo',{params:{
            goods_num: params.goodsid,
        }})
        return { goodsData:data.data.data[0] }
    },
    data() {
        return {
            goodsData:'',
            iscollection: false,
        }
    },
    mounted() {

    },
    methods: {
        addshop(a,b){
            if(localStorage.getItem('access_token') == ''){return this.$router.push('/m/login')}
            gettoken().then(val =>{
                return this.$axios.post('/joinShopcart',{
                    goods_id_json: JSON.stringify({[a]:b})
                },{ headers: { Authorization: "Bearer" + val } })
            }).then( res => {
                alert('成功加入购物车')
            }).catch(err => {
                this.$message.error('失败:' + err.response.data.message)
            })
        },
        fanhui(){
           this.$router.go(-1)
        },
        shoucang(a){
            gettoken().then( val => {
                return this.$axios.post('/collectionGoods',{goods_id_json: JSON.stringify({1:a})},{ headers: { Authorization: "Bearer" + val } })
            }).then(res => {
                this.iscollection = true
                alert('收藏成功')
            }).catch(err => {
                alert('只有广告主有收藏功能')
            })
        } 
    },
}
</script>
<style scoped>
.mheader{
    text-align: center;
    width: 100%;
    font-size: 20px;
    height: 50px;
    line-height: 45px;
    border-bottom: 1px solid #ccc;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    z-index: 99;
}
.mfanhui{
    font-size: 24px;
    float: left;
    margin: 13px 0 0 12px;
}
.goodsimg{
    width: 100%;
    height: 157px;
    text-align: center;
    background: url('/m/goodsimg.png') no-repeat center top;
    background-size: 100% 157px;
}
.goodsimg img {
    width: 54px;
    margin-top: 40px;
    border-radius: 50%;
}
.username{
    padding: 18px;
    padding-right: 30px;
    position: relative;
}
.goodsimg p {
    font-size: 18px;
    margin-bottom: 20px;
    color: #fff;
}
.username p:nth-child(2),
.username p:nth-child(3) {
    font-size: 14px;
    color: #888
}
.goodsprice{
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    padding: 0 15px;

}
.goodsprice:nth-child(odd){
    background-color: #F8FCFF
}
.goodsmessage{
    background-color: #fff;
    margin-top: 50px;
    position: relative;
}
.shoucang{
    width: 20px;
    height: 20px;
    position: absolute;
    right: 10px;
    top: 20px;
}
.shoucang img {
    width: 20px;
}
.shopcar{
    width: 95px;
    background: url('/indexicon/lee_icon001.png') 0 10px no-repeat;
    color: #888;
    padding-left: 25px;
}
</style>