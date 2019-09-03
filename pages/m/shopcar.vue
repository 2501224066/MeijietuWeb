<template>
    <div class="shopall">
        <div class="mheader">购物车</div>
        <div class="goodslist" v-for="(item,index) in shopcar" :key="index">
            <img :src="$store.state.header_img + item.goods.avatar_url" :alt="item.goods.title">
            <div class="goodstitle">
                <p>{{item.goods.title}}</p>
                <p>{{item.goods.modular_name}}</p>
                <span>{{item.goods.filed_name}}</span>
            </div>
            <div class="goodsprice">{{item.goods_price.priceclassify_name}}:{{item.goods_price.price}}</div>
        </div>
        <div class="heji">
            <p @click="jiesuan">结算</p>
            <p>合计:<span class="red">￥{{checkpir}}</span></p>
        </div>
        <div class="alert" v-show="isjiesuan">
            <div>
                <p>订单操作请登录媒介兔网站进行！</p>
                <p>www.meijietu.cn</p>
                <div class="truebtn cr" @click="truebtn">确定</div>
            </div>
        </div>
    </div>
</template>
<script>
import {gettoken} from '@@/assets/commen.js'
export default {
    layout: 'phone',
    data() {
        return {
            shopcar: [],
            isjiesuan: false,
        }
    },
    mounted() {
        gettoken().then(val => {
            return this.$axios.post('/getShopcart',{},{ headers: { Authorization: "Bearer" + val } })
        })
        .then( res => {
            console.log(res,'res')
            this.shopcar = res.data
        }).catch(err => {
            console.log(err.response,'err')
            this.$router.push('/m/login')
        })
    },
    methods: {
        jiesuan(){
            this.isjiesuan = true
        },
        truebtn(){
            this.isjiesuan = false 
        }
    },
    computed: {
        checkpir(){
            let price = 0;
            this.shopcar.forEach(item => {
                price += Number(item.goods_price.price) 
            })
            return price
        },
    },
}
</script>
<style scoped>
/* .shopall{
    background-color: #fff;
} */
.mheader {
    height: 44px;
    padding: 0 12px;
    line-height: 44px;
    background-color: #fff;
    font-size: 18px;
    border-bottom: 1px solid #D2D2D2;
}
.goodslist{
    height: 90px;
    padding: 20px;
    padding-top: 12px;
    font-size: 12px;
    background-color: #fff;
    border-bottom: 1px solid #d2d2d2;
}
.goodslist img{
    width: 49px;
    height: 49px;
}
.goodstitle{
    width: 100px;
    display: inline-block;
}
.goodsprice{
    float: right;
    margin-top: 25px;
}
.goodstitle p:nth-child(2){
    color: #888;
    margin: 5px 0;
}
.goodstitle span {
    display: inline-block;
    color: #fff;
    background-color: #7769F9;
    padding: 2px 5px;
    font-size: 8px;
    border-radius: 5px;
}
.heji {
    overflow: hidden;
    margin-top: 70px;
    height: 50px;
    background-color: #fff;
}
.heji p {
    float: right;
}
.heji p:nth-child(1) {
    width: 106px;
    height: 100%;
    color: #fff;
    background-color: #FF7200;
    text-align: center;
    line-height: 50px;
    margin-left: 20px;
    font-size: 18px
}
.heji p:nth-child(2) {
    line-height: 50px;
}
.red{
    margin-left: 20px;
}
.alert{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 9
}
.alert > div{
    width: 270px;
    height: 250px;
    margin: 130px auto;
    background-color: #fff;
    border-radius: 5px;
    text-align: center;
}
.truebtn{
    width: 128px;
    height: 26px;
    color: #fff;
    background-color: #5141ED;
    text-align: center;
    line-height: 26px;
    margin: 20px auto;
    border-radius: 5px;
    z-index: 10;
}
.alert > div > p:nth-child(1) {
    font-size: 12px;
    color: #888;
}
.alert > div > p:nth-child(2) {
    font-size: 15px;
    color: #5141ED;
}
</style>