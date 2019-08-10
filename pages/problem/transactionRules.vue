<template>
    <div class="pro">
        <headert></headert>
        <div class="banxin">
            <div class="c_left">
                <problem></problem>
            </div>
            <div class="c_right">
                <div class="r_header">
                    交易规则
                </div>
                <div class="r_content">
                    <div>
                        <p>尊敬的客户您好！</p>
                        <p class="text_c">为保障会员的资金安全，鱼爪网内部制定了严格的资金管理流程和完善的系统，进行监督监控，降低操作风险。在交易过程中，资金全程在我平台担保，确保资金的安全问题。交易完成之后放款于卖家。所以，在交易过程中完全不用担心资金的安全保障问题。即便是交易结束，我们的客服人员也会在交易结束之前与交易双方核对是否还有其他的问题，需一切妥当无误之后放款。</p>
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
    height: 500px;
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
.text_c{
    text-indent: 2em;
    margin-top: 20px;
}
</style>