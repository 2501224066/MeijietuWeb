<template>
    <div>
         <div class="mheader">
            <span class="el-icon-arrow-left mfanhui" @click="fanhui"></span>
            商品详情
        </div>
        <div class="goodsmessage">
            <img class="goodsimg" :src="$store.state.header_img+goodsData.avatar_url" alt="">
             <div class="username">
                <p><span>{{goodsData.filed_name}}</span>{{goodsData.title}}</p>
                <p class="norwap">{{goodsData.title_about}}</p>
                <p>地区: <span>{{goodsData.region_name}}</span>  粉丝数:{{goodsData.fans_num}}</p>
                <div class="shoucang">
                    <img src="/indexicon/shouc_icon01.png" alt="收藏">
                </div>
            </div>
            <div class="goodsprice" v-for="(item,index) in goodsData.goods_price" :key="index">
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
    data() {
        return {
            goodsData:'',
        }
    },
    mounted() {
        let a = this.$route.path.split('/')[3]
        this.$axios('/oneGoodsInfo?goods_num='+ a).then( res => {
            console.log(res.data.data.data[0])
            this.goodsData = res.data.data.data[0]
        })
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
            })
        },
        fanhui(){
           this.$router.go(-1)
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
}
.mfanhui{
    font-size: 24px;
    float: left;
    margin: 13px 0 0 12px;
}
.goodsimg{
    width: 100%;
}
.username{
    padding: 20px;
    position: relative;
}
.username p:nth-child(1){
    font-size: 18px;
    margin-bottom: 20px;
}
.username p:nth-child(1) span {
    display: inline-block;
    padding: 3px 7px;
    background-color: #7769F9;
    color: #fff;
    border-radius: 10px;
    font-size: 12px;
    margin-right: 5px;
}
.username p:nth-child(2) {
    font-size: 14px;
    color: #888
}
.goodsprice{
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    padding: 0 15px;

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