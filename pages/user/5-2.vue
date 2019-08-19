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
                        <p v-for="(itemp,i) in item.goods_price" v-show="itemp.price !== '0.00'&&itemp.floor_price == 0" :key="i">{{itemp.priceclassify_name}}: <span class="red">￥{{itemp.price}}</span></p>
                        <p v-if="item.goods_price[0].floor_price != 0">价格: <span class="red">{{item.goods_price[0].floor_price}}</span> </p>
                    </div>
                    <div>{{item.verify_status==0?'审核中':item.verify_status==1?'未通过':item.status==1?'已上架':'已下架'}}</div>
                    <div v-if="item.verify_status==2">
                        <span class="cr xiajia" v-if="item.status == 1" @click="goodsDown(item.goods_num,index)">{{item.verify_status==0?'':item.verify_status==1?'':'商品下架'}}</span>
                        <span class="xiugai cr" v-if="item.status == 1" @click="xiugai(item.goods_num)">修改商品</span>
                        <span v-if="item.status == 2">{{item.verify_status==0?'':item.verify_status==1?'':'商品已下架'}}</span>
                    </div>
                    <div v-if="item.verify_status==1">
                        <!-- <span class="xiugai cr" @click="xiugai(item.goods_num)">修改商品</span> -->
                    </div>
                    <div v-if="item.verify_status==0" class="cr" @click="goodsDown(item.goods_num,index)">
                        <span>请等待</span>
                    </div>
                </div>
            </div>
            <div class="fenye">
                <el-pagination
                background
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="15"
                layout="prev, pager, next, jumper"
                :total="15">
                </el-pagination>
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
            currentPage:1,
        }
    },
    mounted(){
        this.$axios.post('/goodsBelongSelf',{},{headers:{'Authorization':'Bearer'+ localStorage.getItem('access_token')}})
        .then(res => {
            this.goodsBelongSelf = res.data.data
            // this.total = res.data
            this.loading=false
        }).catch(err => {
            this.loading=false
        })
    },
    methods: {
        kefu(){
            window.open('https://wpa.qq.com/msgrd?v=3&uin='+JSON.parse(localStorage.getItem('salesman')).salesman_qq_ID+'&site=qq&menu=yes') 
        },
        goodsDown(a,b){
            this.$axios.post('/goodsDown',{goods_num:a},{headers:{'Authorization':'Bearer'+localStorage.getItem('access_token')}})
            .then(res=>{
                this.$message({message: '下架成功',type: 'success'})
                this.goodsBelongSelf.splice(b,1)
            }).catch(err=>{
                this.$message.error('失败:'+err.response.data.message)
            })
        },
        handleCurrentChange(a){
            this.$axios.post('/goodsBelongSelf?page=' + a,{},{headers:{'Authorization':'Bearer'+localStorage.getItem('access_token')}})
            .then(res => {
                this.goodsBelongSelf = res.data.data
                this.loading=false
            }).catch(err => {
                this.loading=false
            })
        },
        xiugai(a){
            this.$router.push('/user/5-5/' + a)
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
.fenye{
    margin: 30px 300px;
}
.xiajia{
    display: inline-block;
    width: 80px;
    height: 26px;
    background-color: #DE0D0D;
    border-radius: 5px;
    color: #fff;
    text-align: center;
    line-height: 26px;
    margin-bottom: 15px;
}
.xiugai{
    display: inline-block;
    width: 80px;
    height: 26px;
    background-color: #5141ED;
    border-radius: 5px;
    color: #fff;
    text-align: center;
    line-height: 26px;
    margin-bottom: 15px;
}
</style>
