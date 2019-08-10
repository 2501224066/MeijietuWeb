<template>
    <div>
        <ul class="pul">
            <li :class="$route.path=='/problem'?'pactive':''"><nuxt-link to="/problem">帮助中心</nuxt-link></li>
            <li :class="$route.path=='/problem/advertisers'?'pactive':''"><nuxt-link to="/problem/advertisers">广告主</nuxt-link></li>
            <li :class="$route.path=='/problem/mediaOwner'?'pactive':''"><nuxt-link to="/problem/mediaOwner">媒体主</nuxt-link></li>
            <li :class="$route.path=='/problem/financialSecurity'?'pactive':''"><nuxt-link to="/problem/financialSecurity">资金安全</nuxt-link></li>
            <!-- <li>交易规则</li> -->
            <li :class="$route.path=='/problem/companyProfile'?'pactive':''"><nuxt-link to="/problem/companyProfile">公司简介</nuxt-link></li>
            <li :class="$route.path=='/problem/agreement'?'pactive':''"><nuxt-link to="/problem/agreement">用户协议</nuxt-link></li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>
.pul{
    height: 343px;
    padding: 0;
}
.pactive{
    border-left: 4px solid #5141ED;
}
.pul li{
    height: 40px;
    margin: 7px 0;
    line-height: 40px;
    padding-left: 30px;
}
</style>
