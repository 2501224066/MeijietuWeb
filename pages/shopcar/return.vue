<template>
    <div v-loading="loading">
        <div class="capitalheader">
            <div>
                <p>账户余额</p>
                <p class="red">{{$store.state.available_money}}元</p>
                <div>
                    <nuxt-link tag="div" to="/user/3-2" class="cr tiqian">充值</nuxt-link>
                    <nuxt-link tag="div" class="cr tiqian" :to="$store.state.userdata.realname_status==0?'/user/4-4':'/user/3-3'">提现</nuxt-link>
                </div>
                
            </div>
            <!-- <div>
                <p>本月收入</p>
                <p>4468.00元</p>
            </div> -->
        </div>
        <div class="capitalcontent">
            <div class="capitalcontenttop">
                <div class="actived">资金明细</div>
                <!-- <div>重置明细</div>
                <div>提现明细</div>
                <div>保证金</div> -->
            </div>
            <div class="capitallist listheader" style="border-top:none">
                <div>流水编号</div>
                <div>资金类型</div>
                <div>转入/转出</div>
                <div>金额</div>
                <div>交易状态</div>
                <div>日期</div>
            </div>
            <div class="capitallist" v-for="(item,index) in runwaterList.data" :key="index">
                <div>{{item.runwater_num}}</div>
                <div class="color666">{{item.type==1?'充值':item.type==2?'提现':item.type==3?'订单付款':item.type==4?'支付赔偿保证费':item.type==5?'取消订单全额退款':item.type==6?'取消订单非全额退款':item.type==7?'对方取消订单退款':'订单完成结算'}}</div>
                <div class="color666">{{item.direction==1?'转入':item.direction==2?'转出':'未知'}}</div>
                <div class="red">{{item.money}}</div>
                <div>{{item.status==0?'进行中':item.status==1?'成功':'异常'}}</div>
                <div>{{item.callback_success_time}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { gettoken } from "@@/assets/commen.js";
export default {
    layout:'user',
    data() {
        return {
            loading:true,
            wallet:'',
            runwaterList:'',
        }
    },
    mounted() {
        gettoken().then(val =>{
            return this.$axios.post('/runwaterList',{},{ headers: { Authorization: "Bearer" + val } })
        }).then(res =>{
            this.runwaterList = res.data.data
            this.loading=false
        }).catch(err => {
            this.loading=false
        })
    },
}
</script>

<style scoped>
.capitalheader{
    height: 196px;
    display: flex;
    align-items: center;
    background: #f7f7f7 url('/pic/wodezhanghu.png') no-repeat;
    background-size: 1000px 166px;
    border-radius: 5px;
    padding-bottom: 30px;
}
.capitalheader>div{
    width: 160px;
    height: 86px;
    margin: 0 50px 0 100px;
}
.capitalheader >div p:nth-child(2){
    font-size: 28px;
}
.capitalheader>div>div>div{
    float: left;
    width: 48px;
    height: 22px;
    border-radius: 5px;
}
.capitalcontent{
    background-color: #fff;
    border-radius: 5px;
    min-height: 430px;
}
.capitalcontenttop{
    height: 55px;
    border-bottom: 1px #D2D2D2 solid;
}
.capitalcontenttop div{
    float: left;
    height: 54px;
    text-align: center;
    line-height: 54px;
    padding: 0 11px;
    margin: 0 19px;
    color: #666666;
}
.capitalcontenttop div.active{
   color: #242424;
}
.capitallist.listheader{
    background-color: #F8F7FF;
    height: 34px;
    font-size: 12px;
    color: #666;
    line-height: 34px;
}
.capitallist{
    height: 54px;
    line-height: 54px;
    font-size: 14px;
    border-top: 1px #D2D2D2 solid;
}
.capitallist div{
    text-align: center;
    float: left;
}
.capitallist div:nth-child(1){
    width: 200px;
}
.capitallist div:nth-child(2){
    width: 165px;
}
.capitallist div:nth-child(3){
    width: 140px;
}
.capitallist div:nth-child(4){
    width: 158px;
}
.capitallist div:nth-child(5){
    width: 130px;
}
.capitallist div:nth-child(6){
    width: 190px;
}
.color666{
    color: #666
}
.tiqian{
    width:48px;
    height:22px;
    border:1px solid rgba(136,136,136,1);
    color: #666;
    border-radius:5px;
    font-size: 12px;
    text-align: center;
    line-height: 21px;
    margin-right: 20px;
}
.tiqian:hover{
    background:rgba(81,65,237,1);
    border: 1px solid #5141ED;
    color: #FFF;
}
</style>

