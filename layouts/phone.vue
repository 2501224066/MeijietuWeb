<template>
    <div class="all_m">
        <nuxt/>
        <div class="mfooter">
            <div class="indexPage" @click="index"><img src="/m/footer01.png" alt="首页"><p>首页</p> </div>
            <div class="shopCar" @click="shopcar"><img src="/m/footer02.png" alt="购物车"><p>购物车</p> </div>
            <div class="my" @click="my"><img src="/m/footer03.png" alt="我的"><p>我的</p> </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        my(){
            if(!localStorage.getItem('userdata')){
                return this.$router.push('/m/login')
            }
            this.$router.push('/m/my')
        },
        shopcar(){
            this.$router.push('/m/shopcar')
        },
        index(){
            this.$router.push('/m')
        }
    },
    mounted() {
        window.document.body.style.background = '#f2f2f2'
    },
}
</script>
<style scoped>
.all_m{
    padding-bottom: 50px;
}
.mfooter{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: #fff;
    border-top: #666;
    border-top: 1px solid #ccc;
    font-size: 12px;
}
.mfooter div {
    float: left;
    width: 33%;
    height: 100%;
    text-align: center;
    color: #888;
    padding-top: 5px;
}
.mfooter div img{
    width: 20px;
    height: 20px;
}
/* .indexPage{
    background: url() 49px 4px/24px 24px no-repeat;
}
.shopCar {
    background: url('/m/footer02.png') 49px 4px/24px 24px no-repeat;
}
.my {
    background: url('/m/footer03.png') 49px 4px/24px 24px no-repeat;
} */
</style>

