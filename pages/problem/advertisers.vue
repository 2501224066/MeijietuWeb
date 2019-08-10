<template>
    <div class="pro">
        <headert></headert>
        <div class="banxin">
            <div class="c_left">
                <problem></problem>
            </div>
            <div class="c_right">
                <div class="r_header">
                    广告主
                </div>
                <div class="r_content">
                    <div>
                        <p>1、怎么成为广告主？广告主能做什么？</p>
                        <p>答：在媒介兔注册时可以选择成为广告主角色。广告主可在平台购买广告投放，专职客服服务。</p>
                    </div>
                    <div>
                        <p>2、怎么样充值资金到账号？能提现吗？</p>
                        <p>答：进入个人中心页面可以充值。广告主提现不超过72小时内即可到账。</p>
                    </div>
                    <div>
                        <p>3、订单怎么查看进度?</p>
                        <p>答：进入个人中心--我的订单查看进度。</p>
                    </div>
                    <div>
                        <p>4、如果媒体主拒绝接单或者流单怎么办？拒绝接单或者流单可以退款吗？</p>
                        <p>答：拒单与流单后，平台会与媒体主沟通拒单原因，可根据实际情况修改文案或者重新选择媒体主进行投放。当媒体主拒单或者流单情况下，您是可以申请退款的，当天将为您处理退款事宜。</p>
                    </div>
                    <div>
                        <p>5、媒介兔按照什么收费？</p>
                        <p>答：广告主只需要按照平台展示的对应价格进行付费即可。</p>
                    </div>
                    <div>
                        <p>6、为何平台上价格会变动？</p>
                        <p>答：由于自媒体主的账号会随着粉丝数量的变化而产生营销价值变化，基本上每个月自媒体主的报价都是不同的，所以不能以挂售价格为准，敬请亲的理解。</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import headert from '@@/components/nobanner.vue';
import problem from '@@/components/problem.vue';
export default {
    layout:'header',
    components:{
        headert,problem
    }
}
</script>
<style scoped>
.pro{
    background-color: #f7f7f7;
}
.banxin{
    width: 1200px;
    margin: 0 auto;
    padding: 30px 0;
    overflow: hidden;
}
.c_left{
    float: left;
    width: 200px;
    height: 343px;
    background-color: #fff;
}
.c_right{
    float: right;
    width: 980px;
    background-color: #fff;
    font-size: 18px;
}
.r_header{
    height: 65px;
    text-align: center;
    line-height: 65px;
    border-bottom: 1px solid #D2D2D2;
    font-weight: 700;
}
.r_content{
    padding: 50px 36px 0 30px;
}
.r_content>div{
    padding-bottom: 50px;
}
</style>
