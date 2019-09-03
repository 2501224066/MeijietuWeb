<template>
    <div class="inall">
        <div class="mheader">我的订单</div>
        <div class="status">
            <div :class="indentdata == indent_all?'actived_i':''" @click="indentdata = indent_all">全部</div>
            <div :class="indentdata == indent_a?'actived_i':''" @click="indentdata = indent_a">待付款</div>
            <div :class="indentdata == indent_b?'actived_i':''" @click="indentdata = indent_b">待接单</div>
            <div :class="indentdata == indent_c?'actived_i':''" @click="indentdata = indent_c">执行中</div>
            <div :class="indentdata == indent_d?'actived_i':''" @click="indentdata = indent_d">审核中</div>
            <div :class="indentdata == indent_e?'actived_i':''" @click="indentdata = indent_e">已完成</div>
        </div>
        <div class="indentitem" v-for="(item,index) in indentdata" :key="index">
            <div class="itemHeader"> 
                <span>订单号 ：{{item.indent_num}}</span> 
                <span>{{item.status==0?'待付款':item.status==1?'待接单':item.status==4?'执行中':item.status==7?'审核中':item.status==8?'已完成':'已失效'}}</span>
            </div>
            <div class="indenttitle">
                <img :src="$store.state.header_img + item.indent_item.avatar_url" alt="">
                <div class="title">
                    <p>{{item.indent_item.goods_title}}</p>
                    <p>所属分类: {{item.indent_item.modular_name}}</p>
                    <p>媒体领域: {{item.indent_item.theme_name}}</p>
                </div>
                <div class="price">
                    <p>合计：￥{{item.indent_item.goods_price}}</p>
                    <p>请登录PC端进行付款</p>
                </div>
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
            indentdata: [],
            indent_all: [],
            indent_a: [],
            indent_b: [],
            indent_c: [],
            indent_d: [],
            indent_e: [],
        }
    },
    mounted() {
        gettoken().then(val => {
            return this.$axios.post('/indentBelongSelf',{},{ headers: { Authorization: "Bearer" + val } })
        }).then(res => {
            this.indentdata = res.data.data.data
            this.indent_all = res.data.data.data
            this.indentdata.forEach(item => {
                if(item.status == 0){
                    this.indent_a.push(item)
                }else if(item.status == 1){
                    this.indent_b.push(item)
                }else if(item.status == 4){
                    this.indent_c.push(item)
                }else if(item.status == 7){
                    this.indent_d.push(item)
                }else if(item.status == 8){
                    this.indent_e.push(item)
                }
            });
        })
    },
}
</script>
<style scoped>
.inall{
    margin-bottom: 60px;
}
.mheader{
    background-color: #fff;
    text-align: center;
    height: 45px;
    line-height: 45px;
}
.status{
    width: 100%;
    height: 50px;
    padding: 15px;
    overflow: hidden;
    font-size: 11px;
    color: #888;
}
.status > div {
    float: left;
    width: 16%;
    text-align: center;
}
.status .actived_i {
    color: #5141ED;

}
.indentitem{
    width: 90%;
    height: 180px;
    background-color: #fff;
    margin: 0 auto;
    margin-bottom: 20px;
    border-radius: 5px;
    padding: 11px;
}
.indenttitle img{
    width: 73px;
    border-radius: 50%;
    float: left;
}
.itemHeader{
    font-size: 11px;
}
.itemHeader span:nth-child(2) {
    float: right;
    color: #FF7200;
}
.title {
    height: 73px;
    margin: 8px 0 0 88px;
}
.title > p:nth-child(2),
.title > p:nth-child(3) {
    font-size: 14px;
    color: #888;
}
.price {
    text-align: right;
    margin-top: 6px;
}
.price > p:nth-child(2) {
    font-size: 12px;
    color: #888;
}
</style>