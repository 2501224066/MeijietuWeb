<template>
    <div class="pro">
        <headert></headert>
        <div class="banxin">
            <div class="c_left">
                <problem></problem>
            </div>
            <div class="c_right">
                <div class="r_header">
                    帮助中心
                </div>
                <div class="r_content">
                    <div>
                        <p>1、媒介兔平台可以为我提供什么？</p>
                        <p>答：媒介兔平台为广告主提供媒体内容创作、整合营销推广（新闻营销、微信KOL、微博KOL、自媒体推广、视频直播推广等），旨在打通广告主与资源主交易壁垒，去除中间商赚差价，打造“广告主与资源主直接交易”的创新交易模式。</p>
                    </div>
                    <div>
                        <p>2、注册时为什么要选择广告主和媒体主？</p>
                        <p>答：选择不同角色在平台上使用的功能不同，广告主为买方，媒体主为卖方。</p>
                    </div>
                    <div>
                        <p>3、媒体发布有什么限制吗？</p>
                        <p>答：含有违规内容、文章广告内容过多、媒体自身调整、涉及违反广告法、具有煽动暴力、色情、赌博等信息，则一律不予发布。</p>
                    </div>
                    <div>
                        <p>4、新闻发布有什么局限性？</p>
                        <p>答：拒稿的原因主要有：文章含有违规内容、文章广告内容过多、媒体自身调整、重大政策影响等。详情咨询QQ客服。</p>
                    </div>
                    <div>
                        <p>5、怎么购买付款？</p>
                        <p>答：广告主需要把选择好的商品加入到购物车，然后在购物车内付款。</p>
                    </div>
                    <div>
                        <p>6、下单之后可以退单或者换媒体资源重新投放吗？款项如何操作？</p>
                        <p>答：广告主下单之后，若稿件尚未发布，可与平台协商退款，所退款项将直接进入平台账户之中。如需更换媒体资源，与客服沟通确认即可。</p>
                    </div>
                    <div>
                        <p>7、可以提供发票吗？</p>
                        <p>答：开具增值税普通发票、增值税专用发票，均需6个税点，由平台提供。如果开收据的话，没有税点。</p>
                    </div>
                    <div>
                        <p>8、投放的广告软文，链接有时效性吗？</p>
                        <p>答：一般来说，文章投放到媒体上，其链接是永久存在的。详情咨询QQ客服。</p>
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
