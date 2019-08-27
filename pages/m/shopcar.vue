<template>
    <div>
        <div class="mheader">购物车</div>
        <div class="goodslist" v-for="(item,index) in shopcar" :key="index">
            <img :src="$store.state.header_img + item.goods.avatar_url" :alt="item.goods.title">
            <div>
                <p>{{item.goods.title}}</p>
                <p>{{item.goods.modular_name}}</p>
                <p>{{item.goods.filed_name}}</p>
            </div>
            <div>{{item.goods_price.priceclassify_name}}:{{item.goods_price.price}}</div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            shopcar: '',
        }
    },
    mounted() {
        this.$aixos.post('/getShopcart').then( res => {
            this.shopcar = res.data
        }).catch(err => {
            console.log(err.response.data.message)
        })
    },
}
</script>
<style scoped>
.mheader {
    height: 44px;
    padding: 0 12px;
    line-height: 44px;
    font-size: 18px;
    border-bottom: 1px solid #D2D2D2;
}
.goodslist{
    height: 90px;
    padding: 20px;
}
</style>