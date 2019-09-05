<template>
    <div>
        <div class="mheader">
            <span class="el-icon-arrow-left mfanhui" @click="fanhui"></span>
            媒体分类
        </div>
        <div class="fenlei">
            <nuxt-link to="/m/weixin">微信营销</nuxt-link>
            <nuxt-link to="/m/video">短视频营销</nuxt-link>
            <nuxt-link class="blue" to="/m/weibo">微博营销</nuxt-link>
            <nuxt-link to="/m/seo">套餐SEO</nuxt-link>
        </div>
        <div class="select">
        </div>
        <div class="goodslist">
            <div class="goodsitem" v-for="(item,index) in goodsData.data" :key="index" @click="goods(item.goods_num)">
                <img :src="$store.state.header_img + item.avatar_url" :alt="item.title">
                <div class="username">
                    <p><span>{{item.filed_name}}</span>{{item.title}}</p>
                    <p class="norwap">{{item.title_about}}</p>
                    <p>粉丝数:{{item.fans_num}}</p>
                </div>
                <span class="jinru"></span>
            </div>
        </div>
    </div>
</template>
<script>
import {gettoken,selectGoods} from '@@/assets/commen.js'
export default {
    layout:'phone',
    data() {
        return {
            goodsData:'',
        }
    },
    mounted() {
        selectGoods({modular_id:2}) .then(res => {
            this.goodsData = res.data.data
        })
    },  
    methods: {
       goods(a){
           this.$router.push('/m/goods/'+a)
       },
       fanhui(){
        this.$router.push('/m')
        //    this.$router.go(-1)
       } 
    },
}
</script>
<style scoped>
.mheader{
    width: 100%;
    text-align: center;
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
.goodslist{
    font-size: 12px;
    background-color: #fff;
    margin-bottom: 50px;
}
.goodsitem{
    padding-top: 10px;
    border-bottom: 1px solid #d2d2d2;
    position: relative;
}
.goodsitem img{
    position: absolute;
    left: 16px;
    top: 35px;
    width: 80px;
    border-radius: 50%;
}
.username{
    padding-left: 120px;
    max-width: 80%;
    height: 120px;
}
.username p:nth-child(1){
    margin: 10px 0;
    font-size: 15px
}
.username p:nth-child(1) span{
    font-size: 10px;
    float: left;
    padding: 2px 5px;
    background-color: #7769F9;
    color: #fff;
    border-radius: 10px;
    margin-right: 5px;
}
.username p:nth-child(2){
    font-size: 12px;
    color: #888;
    overflow: hidden;
    max-height: 50px ;
}
.username p:nth-child(3){
    font-size: 11px;
    margin: 5px 0;
    color: #FF7200;
}
.fenlei{
    background-color: #fff;
    margin-top: 50px;
    /* height: 100px; */
    overflow: hidden;
    color: #888;
    font-size: 15px;
    border-bottom: 1px solid #d2d2d2;
}
.fenlei a{
    display: block;
    float: left;
    width: 25%;
    text-align: center;
    padding: 20px 0;
}
.select{
    width: 100%;
    height: 20px;
    background-color: #F2F2F2;
}
.jinru{
    display: block;
    width: 16px;
    height: 16px;
    position: absolute;
    right: 39px;
    top: 67px;
    background: url('/indexicon/mgoods01.png') 0 0/16px 16px no-repeat;
}
</style>