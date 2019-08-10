<template>
    <div class="pro">
        <headert></headert>
        <div class="banxin">
            <div class="c_left">
                <problem></problem>
            </div>
            <div class="c_right">
                <div class="r_header">
                    公司简介
                </div>
                <div class="r_content">
                    <div>
                        <img src="/pic/gongsijianjie.jpg">
                    </div>
                    <div>
                        <p style="text-indent:2em">
                            <span class="red">武汉中帜云媒网络科技有限公司</span>致力于全网全行业优势资源整合，为各领域客户提供透明、高效、精准、专业的一站式营销推广解决方案。我们整合新浪微博大V号、微信意见领袖、网红直播、短视频、自媒体平台、信息流、新闻源等全网优势资源，降低客户在广告投放过程中的信息搜集对比时间，公开广告信息、增加广告交易透明度，节省广告主广告投放成本，降低媒体广告方业务营销成本，让广告交易更加便捷、更有保障。
                        </p>
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
    font-weight: 700;
    border-bottom: 1px solid #D2D2D2;
}
.r_content{
    padding: 50px 36px 0 30px;
}
.r_content>div{
    padding-bottom: 50px;
}
</style>
