<template>
    <div class="my">
        <div class="mheader">
           <img :src="$store.state.header_img + userdata.head_portrait" alt="头像">
           <div>
               <p>{{userdata.nickname}}</p>
               <p>{{userdata.phone}}</p>
               <p>账户余额: {{money}}</p>
               <span></span>
               <p></p>
           </div>
        </div>
        <div class="myindent">我的订单 <span class="allindent">全部订单</span></div>
        <div class="status">
            <div><img src="/m/status01.png" alt="待付款"><p>待付款</p></div>
            <div><img src="/m/status04.png" alt="待接单"><p>待接单</p></div>
            <div><img src="/m/status05.png" alt="执行中"><p>执行中</p></div>
            <div><img src="/m/status02.png" alt="审核中"><p>审核中</p></div>
            <div><img src="/m/status03.png" alt="已完成"><p>已完成</p></div>
        </div>
        <div class="jiange"></div>
        <div class="mysc">
            我的收藏
        </div>
        <div class="myzj">
            资金管理
        </div>
        <div class="quit">
            退出登录
        </div>
    </div>
</template>
<script>
import {gettoken} from '@@/assets/commen.js'
export default {
    layout: 'phone',
    data() {
        return {
            userdata:{},
            money:'',
        }
    },
    mounted(){
        if(localStorage.getItem('userdata')){
            this.userdata = JSON.parse(localStorage.getItem('userdata'))
        }else {
            return this.$router.push('/m/login')
        }
        gettoken().then( val => {
            return this.$axios.post('/walletInfo',{},{ headers: { Authorization: "Bearer" + val } })
        }).then( res => {
            this.money = res.data.data.available_money
        }).catch( err => {
            console.log(err.response.data.message)
            return this.$router.push('/m/login')
        })
    }
}
</script>
<style scoped>
.my{
    background-color: #f2f2f2;
    min-height: 100%;
}
.mheader{
    width: 100%;
    height: 149px;
    padding: 40px 20px;
    background-color: #7443F5;
    color: #fff;
}
.mheader img{
    width: 78px;
    border-radius: 50%;
    float: left;
    margin-right: 10px;
}
.mheader div{
    float: left;
}
.status{
    background-color: #fff;
    text-align: center;
    padding-top: 10px;
    height: 88px;
}
.status div{
    width: 20%;
    height: 100%;
    text-align: center;
    float: left;
    font-size: 12px;
}
.status div img{
    width: 40px;
}
.myindent{
    background-color: #fff;
    padding: 15px 10px;
    border-bottom: 1px solid #C1C1C1;
}
.allindent{
    float: right;
    color: #888;
    font-size: 12px;
}
.jiange{
    height: 20px;
    width: 100%;
}
.mysc{
    padding: 20px 16px 20px 60px;
    background: #fff url('/m/myicon01.png') 20px 20px/22px 22px no-repeat;
    border-bottom: 1px solid #c1c1c1;
}
.myzj{
    padding: 20px 16px 20px 60px;
    background: #fff url('/m/myicon02.png') 20px 20px/22px 22px no-repeat;
}
.quit{
    background-color: #fff;
    text-align: center;
    line-height: 40px;
    position: fixed;
    bottom: 60px;
    left: 0;
    width: 100%;
    height: 40px;
}
</style>