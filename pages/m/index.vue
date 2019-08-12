<template>
    <div>
        <div class="mheader">
            <img src="/logo1.png" alt="媒介兔">
        </div>
        <div class="banner">
            <img :src="$store.state.header_img + banner[0].img" alt="">
        </div>
    </div>
</template>
<script>
import {gettoken} from '@@/assets/commen.js'
export default {
    layout:'phone',
    data() {
        return {
            banner:[{img:''}],
        }
    },
    methods: {
        
    },
    mounted() {
        this.$axios.get('/banner',{})
        .then(res => {
            this.banner = res.data.data
        })
    },
}
</script>
<style scoped>
.mheader{
    height: 40px;
}
.banner{
    width: 100%;
    overflow: hidden;
}
.banner img{
    position: relative;
    height: 160px;
    left: 50%;
    margin-left: -255px;
}
</style>
