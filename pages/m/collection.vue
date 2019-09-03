<template>
    <div>
        <div class="mheader"> <span class="el-icon-arrow-left mfanhui" @click="fanhui"></span>我的收藏</div>
        <div class="coll">
            <div class="collitem" v-for="(item,index) in colldata" :key="index"> 
                <img :src="$store.state.header_img + item.goods.avatar_url" alt="">
                <div class="colltitle">
                    <p>{{item.goods.title}}</p>
                    <p>所属分类： {{item.goodstheme_name}}</p>
                    <p>领域：{{item.goods.filed_name}}</p>
                </div>
                <span></span>
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
            colldata: [],
        }
    },
    methods: {
        fanhui(){
            this.$router.push('/m/my')
            // this.$router.go(-1)
        },
    },
    mounted() {
        gettoken().then(val => {
            return this.$axios.post('/getCollection',{},{ headers: { Authorization: "Bearer" + val } })
        }).then( res => {
            this.colldata = res.data
        })
    },
}
</script>

<style scoped>
.mheader{
    text-align: center;
    width: 100%;
    font-size: 18px;
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
.coll{
    padding-top: 50px;
}
.collitem {
    width: 90%;
    height: 100px;
    margin: 8px auto;
    padding: 15px 12px;
    background-color: #fff;
    border-radius: 5px;
}
.collitem img{
    width: 73px;
    border-radius: 50%;
    display: block;
    float: left;
    margin-right: 10px
}
.colltitle{
    float: left;
    font-size: 14px;
    color: #888;
    margin-top: 5px;
}
.colltitle p:nth-child(1) {
    font-size: 16px;
    color: #242424;
}
</style>