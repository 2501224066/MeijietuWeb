<template>
    <div>
        <div class="usercontent" v-loading="loading">
            <div class="usercontentheader">
                <div class="actived">全部传媒</div>
                <nuxt-link to="/user/5-3" tag="div">审核中的传媒</nuxt-link>
                <nuxt-link to="/user/5-4" tag="div">已入驻传媒</nuxt-link>
                <span class="kefu" @click="kefu">联系客服</span>
            </div>
            <div class="listitem contenttitle tac">
                <div>商品名称</div>
                <div>入驻平台</div>
                <div>价格</div>
                <div>当前状态</div>
                <div>商品操作</div>
            </div>
            <div class="contentitem" v-for="(item,index) in goodsBelongSelf" :key="index">
                <div class="itemtitle tijiaodate">提交审核 : {{item.created_at}}</div>
                <div class="listitem contentitem_cont">
                    <div :style="'background:url('+$store.state.header_img+item.avatar_url+') 24px 31px/98px 98px no-repeat'">
                        <p style="fontZise:16px;color:#000;"><span class="modular">{{item.modular_name}}</span>{{item.title}}</p>
                        <p>所属分类:{{item.theme_name}}</p>
                        <p>媒体领域:{{item.filed_name}}</p>
                        <p class="nowrap" style="width:200px">商品编号:{{item.goods_num}}</p>
                    </div>
                    <div>{{item.platform_name}}</div>
                    <div>
                        <p v-for="(itemp,i) in item.goods_price" v-show="itemp.price !== '0.00'" :key="i">{{itemp.priceclassify_name}}: <span class="red">￥{{itemp.price}}</span></p>
                    </div>
                    <div>{{item.verify_status==0?'审核中':item.verify_status==1?'未通过':'已上架'}}</div>
                    <div v-if="item.verify_status==2" class="cr" @click="goodsDown(item.goods_num,index)">{{item.verify_status==0?'':item.verify_status==1?'':'商品下架'}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {gettoken} from '@@/assets/commen.js'
export default {
    layout: 'user',
    data() {
        return {
            loading:true,
            goodsBelongSelf:[],
        }
    },
    mounted(){
        gettoken().then(val =>{
            return this.$axios.post('/goodsBelongSelf',{},{headers:{'Authorization':'Bearer'+val}})
        }).then(res => {
            this.goodsBelongSelf = res.data.data
            this.loading=false
        }).catch(err =>{
            this.loading=false
        })
    },
    methods: {
        kefu(){
            window.open('https://wpa.qq.com/msgrd?v=3&uin='+JSON.parse(localStorage.getItem('salesman')).salesman_qq_ID+'&site=qq&menu=yes') 
        },
        goodsDown(a,b){
            gettoken().then(val=>{
                return this.$axios.post('/goodsDown',{goods_num:a},{headers:{'Authorization':'Bearer'+val}})
            }).then(res=>{
                this.$message({message: '删除成功',type: 'success'})
                this.goodsBelongSelf.splice(b,1)
            }).catch(err=>{
                this.$message.error('失败:'+err.response.data.message)
            })
        }
    },
}
</script>

<style scoped>
.kefu{
    display: block;
    float: right;
    width: 100px;
    height: 30px;
    color: #fff;
    border-radius: 3px;
    margin: 14px 30px 0 0;
    line-height: 30px;
    font-size: 14px;
    padding-left: 20px;
    background: #5141ED url('/indexicon/lee_icon004.png') 7px 7px no-repeat;
}
.listitem >div{
    float: left;
}
.listitem >div:nth-child(1){
    width: 341px;
}
.listitem >div:nth-child(2){
    width: 135px;
}
.listitem >div:nth-child(3){
    width: 200px;
}
.listitem >div:nth-child(4){
    width: 143px;
}
.listitem >div:nth-child(5){
    width: 170px;
}
.tijiaodate{
    border-left: 3px solid #5141ED;
    line-height: 36px;
    padding-left: 26px;
}
.contenttitle{
    height: 36px;
    color: #666;
    font-size: 12px;
    background-color: #F8F7FF;
    line-height: 36px;
    border-bottom: 1px solid #d2d2d2;
}
.contentitem{
    margin-top: 30px;
    color: #888;
    font-size: 14px;
    border:1px solid #D2D2D2;
}
.itemtitle{
    height: 36px;
    background-color: #F8F7FF;
    border-bottom: 1px solid #d2d2d2;
}
.contentitem_cont{
    height: 160px;
}
.contentitem_cont>div{
    height: 160px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.contentitem_cont > div:nth-child(1){
    align-items: baseline;
    padding-left: 134px;
}
span.modular{
    display: inline-block;
    padding: 3px;
    background-color: #5141ED;
    color: #fff;
    font-size: 12px;
    border-radius: 3px;
    margin: 0 5px 5px 0;
}
.contentitem_cont p {
    margin: 2px 0;
    font-size: 14px;
}
</style>
