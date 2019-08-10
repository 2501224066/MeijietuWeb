<template>
    <div class="pro">
        <headert></headert>
        <div class="banxin">
            <div class="c_left">
                <problem></problem>
            </div>
            <div class="c_right">
                <div class="r_header">
                    媒体主
                </div>
                <div class="r_content">
                    <div>
                        <p>1、怎么成为媒体主？媒体主能做什么？</p>
                        <p>答：在媒介兔注册时可以选择成为媒体主角色。媒体主申请入驻平台，入驻成功后通过平台接单。</p>
                    </div>
                    <div>
                        <p>2、完成订单后什么时候可以结算？</p>
                        <p>答：订单完成后广告主媒体主双方确认无误，72小时内即可到账。</p>
                    </div>
                    <div>
                        <p>3、在你们平台接单会泄漏我的私人联系方式吗？?</p>
                        <p>答：平台所有用户的联系方式，我们将加密保护措施。对于泄露、盗取用户信息的本公司会追责，情况严重者我们将予以起诉！--我的订单查看进度。</p>
                    </div>
                    <div>
                        <p>4、在平台接单后，我没有按要求完成，有违约金吗？</p>
                        <p>答：每一位媒体主都需要签署合作协议，协议中有涉及，如果您接单后，恶意违约，将赔付该笔订单的20%违约金，请须知。</p>
                    </div>
                    <div>
                        <p>5、在你们平台如何提现？</p>
                        <p>答：完成订单资金到账，提现申请提交后不超过72小时。</p>
                    </div>
                    <div>
                        <p>6、接单后发现内容违规后怎么办？</p>
                        <p>答：媒体主接单后，发现涉及违反广告法、具有煽动暴力、政治言论、色情、赌博等违法广告可以与客服联系拒接接单。</p>
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
