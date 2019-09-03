<template>
    <div class="rightbtn">
        <div class="cr" @click="$router.push('/shopcar')"><p>购物车</p><span v-if="$store.state.userdata&&$store.state.userdata.shopcart_count">{{$store.state.userdata.shopcart_count}}</span></div>
        <div class="cr" @click="kefu"><p>联系客服</p></div>
    </div>
</template>
<script>
export default {
    methods: {
        kefu(){
          window.open('https://wpa.qq.com/msgrd?v=3&uin='+JSON.parse(localStorage.getItem('salesman')).salesman_qq_ID+'&site=qq&menu=yes') 
        },
    },
}
</script>
<style scoped>
.rightbtn{
  position: fixed;
  right: 0px;
  top:50%;
}
.rightbtn > div{
  width: 38px;
  height: 34px;
  border-radius: 3px 0 0 3px;
}
.rightbtn > div > p{
  width: 75px;
  height: 34px;
  background-color: #6030E2;
  position: relative;
  left: -73px;
  color: #fff;
  border-radius: 3px 0 0 3px;
  text-align: center;
  line-height: 34px;
  display: none;
}
.rightbtn > div:nth-child(1){
  background: #e1e1e1 url('/indexicon/lee_icon001.png') 8px 8px no-repeat;
  margin-bottom: 6px;
}
.rightbtn > div:nth-child(1):hover{
  background: #6030E2 url('/indexicon/lee_icon003.png') 8px 8px no-repeat;
}
.rightbtn > div:hover p{
  display: block;
}
.rightbtn > div:nth-child(2){
  background: #e1e1e1 url('/indexicon/lee_icon002.png') 8px 8px no-repeat;
  margin-bottom: 6px;
}
.rightbtn > div:nth-child(2):hover{
  background: #6030E2 url('/indexicon/lee_icon004.png') 8px 8px no-repeat;
}
.rightbtn span{
  position: absolute;
  display: block;
  text-align: center;
  right: 1px;
  top: -10px;
  width: 20px;
  height: 20px;
  background-color: red;
  color: #fff;
  border-radius: 50%;
}
</style>
