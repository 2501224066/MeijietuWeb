<template>
    <div>
        <div class="mheader">
            <img src="/m/logo01.png" alt="媒介兔">
        </div>
        <div class="banner">
            <img :src="$store.state.header_img + banner[1].img" alt="">
        </div>
        <div class="mtab">
            <nuxt-link to="/m/weixin" tag="div"><img src="/m/tab01.png" alt="微信营销"><p>微信营销</p></nuxt-link>
            <nuxt-link to="/m/video" tag="div"><img src="/m/tab02.png" alt="视频营销"><p>视频营销</p></nuxt-link>
            <nuxt-link to="/m/weibo" tag="div"><img src="/m/tab03.png" alt="微博营销"><p>微博营销</p></nuxt-link>
            <nuxt-link to="/m/seo" tag="div"><img src="/m/tab04.png" alt="SEO"><p>SEO</p></nuxt-link>
            <!-- <div><img src="/m/tab01.png" alt="微信营销"><p>微信营销</p></div>
            <div><img src="/m/tab02.png" alt="视频营销"><p>视频营销</p></div>
            <div><img src="/m/tab03.png" alt="微博营销"><p>微博营销</p></div>
            <div><img src="/m/tab04.png" alt="SEO"><p>SEO</p></div> -->
        </div>

        <div class="mgoods">
            <div class="mgoods_header">
                热门媒体
            </div>
            <div class="mgoods_list" v-for="(item,index) in goodslist" :key="index">
                <img class="headerImg" :src="$store.state.header_img + item.avatar_url" :alt="item.title">
                <div>
                    <div class="goodstitle">{{item.title}}</div>
                    <div>所属分类: {{item.theme_name}}</div>
                    <div>粉丝数: {{item.fans_num}}</div>
                </div>
                <img class="jinru" src="/indexicon/mgoods01.png" alt="进入详情">
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
            goodslist:[],
            value:1,
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
        if(localStorage.getItem('access_token')){
            gettoken().then(val => {
                return this.$axios.post('/me',{},{ headers: { Authorization: "Bearer" + val } })
            }) .then(res => {
                console.log(res.data.data)
            }).catch(err => {
                
            })
        }
    },
}
</script>
<style scoped>
.mheader{
    padding: 5px;
    height: 24px;
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
    padding-top: 12px;
    height: 90px;
}
.mtab div img{
    width: 50px;
}
.mtab p{
    font-size: 12px
}
.mgoods{
    margin-bottom: 38px;
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
    height: 106px;
    margin: 0 20px;
    padding: 15px 0;
    border-bottom: 1px solid #eee;
}
.mgoods_list > div {
    float: left;
    margin-left: 10px;
    font-size: 12px;
    color: #666;
}
.headerImg{
    float: left;
    width: 73px;
    border-radius: 50%
}
.goodstitle{
    margin-top: 10px;
    font-size: 14px;
    color: #242424;
}
.jinru{
    width: 16px;
    float: right;
    margin: 30px 10px 0 0;
}
</style>
