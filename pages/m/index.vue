<template>
    <div>
        <div class="mheader">
            <img src="/m/logo01.png" alt="媒介兔">
        </div>
        <div class="banner">
            <img :src="$store.state.header_img + banner[1].img" alt="">
        </div>
        <div class="mtab">
            <div><img src="/pic/tx_mr002.png" alt=""></div>
            <div><img src="/pic/tx_mr003.png" alt=""></div>
            <div><img src="/pic/tx_mr004.png" alt=""></div>
            <div><img src="/pic/tx_mr005.png" alt=""></div>
        </div>
        <div class="mgoods">
            <div class="mgoods_header">
                热门媒体
            </div>
            <div class="mgoods_list" v-for="(item,index) in goodslist" :key="index">
                <img src="" alt="">
                <div>
                    <div>{{item.title}}</div>
                    <div>所属分类: {{item.theme_name}}</div>
                    <div>粉丝数: {{item.fans_num}}</div>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
import {gettoken} from '@@/assets/commen.js'
export default {
    layout:'phone',
    data() {
        return {
            banner:[{img:''},{img:''}],
            goodslist:[]
        }
    },
    methods: {
        
    },
    mounted() {
        this.$axios.get('/banner')
        .then(res => {
            this.banner = res.data.data
        })
        this.$axios('/recommendGoods').then(res => {
            this.goodslist = res.data.data['微信营销']['公众号']['金融理财']
        })
    },
}
</script>
<style scoped>
.mheader{
    height: 40px;
}
.mheader img{
    width: 50%;
}
.banner{
    width: 100%;
    height: 160px;
    overflow: hidden;
}
.banner img{
    position: relative;
    height: 160px;
    left: 50%;
    margin-left: -255px;
}
.mtab{
    height: 90px;
    background: #f7f7f7;
}
.mtab div{
    width: 25%;
    float: left;
    text-align: center;
    padding-top: 20px;
    height: 90px;
}
.mtab div img{
    width: 50px;
}
.mgoods_header{
    height: 35px;
    line-height: 35px;
    padding-left: 20px;
    font-size: 14px;
    border-bottom: 1px solid #ccc;
    position: relative;
}
.mgoods_header::before{
    position: absolute;
    content: '';
    width: 2px;
    height: 14px;
    background-color: #5141ed;
    top: 11px;
    left: 12px;
}
.mgoods_list{
    height: 80px;
}
</style>
