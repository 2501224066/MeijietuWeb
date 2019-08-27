<template>
    <div>
        <div class="iheader">
            <div class="banxin">
            </div>
        </div>
        <div class="ihelp banxin">
            <h3>帮助解决企业营销推广难题</h3>
            <p>没有定位、没有规划、没有渠道、没有经验</p>
            <div class="ihelp_item">
                <div>
                    <img src="/info/icon01.png" alt="营销定位">
                    <p>营销定位</p>
                    <p>
                        推广客户不精准
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout:'header',
    data() {
        return {
            
        }
    },
    methods: {
        
    },
}
</script>
<style scoped>
.iheader{
    width: 100%;
    height: 620px;
    background: url('/info/banner01.png') no-repeat center top;
}
.banxin{
    width: 1200px;
    margin: 0 auto;
}
.ihelp{
    height: 1044px;
}
.ihelp_item{
    width: 232px;
}
</style>