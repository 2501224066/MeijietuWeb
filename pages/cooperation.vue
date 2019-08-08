<template>
    <div>
        <headert></headert>
        <div class="topbanner"><img src="/cooperation/banner001.jpg"></div>
        <div class="secondbanner"><img src="/cooperation/banner002.jpg"></div>
        <div class="banxin">
            <div class="contcard">
                <div class="cardtitle" style="height:570px">
                    <h2>媒介兔代理优势</h2>
                    <p>AGENCY ADVANTAGE</p>
                    <div class="agency">
                        <div>
                            <h3>海量资源</h3>
                            <p>全媒体一站式投放，聚合渠道优势资源，更有效地服务自己的客户。</p>
                        </div>
                        <div>
                            <h3>海量资源</h3>
                            <p>全媒体一站式投放，聚合渠道优势资源，更有效地服务自己的客户。</p>
                        </div>
                        <div>
                            <h3>海量资源</h3>
                            <p>全媒体一站式投放，聚合渠道优势资源，更有效地服务自己的客户。</p>
                        </div>
                        <div>
                            <h3>海量资源</h3>
                            <p>全媒体一站式投放，聚合渠道优势资源，更有效地服务自己的客户。</p>
                        </div>
                        <div>
                            <h3>海量资源</h3>
                            <p>全媒体一站式投放，聚合渠道优势资源，更有效地服务自己的客户。</p>
                        </div>
                        <div>
                            <h3>海量资源</h3>
                            <p>全媒体一站式投放，聚合渠道优势资源，更有效地服务自己的客户。</p>
                        </div>
                        <img style="margin:92px 361px;" src="/cooperation/center001.png">
                    </div>
                </div>
            </div>
            <div class="contcard">
                <div class="cardtitle">
                    <h2>市场前景</h2>
                    <p>MARKET PROSPECT</p>
                    <div class="cardcont">
                        <img src="/cooperation/market01.png">
                        <div class="fr">
                            <h3>新媒体行业</h3>
                            <p>近年来，我国新媒体行业的市场规模保持高速扩张之势。据前瞻产业研究院发布的统计数据显示，2011年中国新媒体行业市场规模已达2268.1亿元,并呈现除逐年高速增长态势,2013年中国新媒体行业市场规模突破3000亿元,2015年中国新媒体行业市场规模突破了5000亿元,截止至2017中国新媒体行业市场规模增长至7558.4亿元,同比增长21.5%。</p>
                            <p>初步测算2019年中国新媒体行业市场规模将突破1万亿元。未来随着行业相关规范的出台，以及5G等相关互联网技术的成熟与普及，我国新媒体行业将迎来发展期，未来市场前景十分可观。</p>
                            <span>一万亿元</span><span>2019年</span><span>发展期</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contcard">
                <div class="cardtitle">
                    <h2>盈利空间</h2>
                    <p>PROFIT SPACE</p>
                    <div class="cardcont">
                        <img class="fr" src="/cooperation/market02.png">
                        <div class="fl">
                            <h3>线上流量</h3>
                            <p>互联网营销以其精准度高、互动性强以及营销成本相对较低等显著特性，吸引了越来越多的广告主。截至2018年12月，我国网民规模达8.29亿，互联网普及率为59.60%。我国手机网民规模增至8.17亿，网民中使用手机上网人群的占比由2017年的97.5%提升至98.6%。互联网广告已成为广告客户的主要投放方式之一，市场规模也在持续高速增长。</p>
                            <p>互联网造就的“粉丝经济”力量巨大，互联网放大了个体价值，微博、抖音等不同平台造就了追星的综合生态，并且这种线上流量能快速实现线下变现。</p>
                            <span>粉丝经济</span><span>互联网普及</span><span>互联网广告</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contcard">
                <div class="cardtitle">
                    <h2>合作流程</h2>
                    <p>COOPERATION PROCESS</p>
                    <div class="tac process">
                        <img src="/cooperation/banner003.png">
                        <span>提交代理申请</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="hq">
            <div class="banxin">
                <div class="contcard">
                    <div class="cardtitle">
                        <h2>媒介兔代理等级</h2>
                        <p>AGENT LEVEL</p>
                        <div class="daili">
                            <img src="/cooperation/banner004.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import headert from '@@/components/nobanner.vue';
export default {
    layout:'header',
    components:{
        headert
    },
    mounted(){
        window.document.body.style.background = '#fff'
    }
}
</script>
<style scoped>
.topbanner{
    width: 100%;
    overflow: hidden;
    text-align: center;
}
.secondbanner{
    text-align: center;
    width: 1200px;
    margin: 70px auto;
}
.banxin{
    width: 1200px;
    margin: 0 auto;
}
/* 每个版块样式 */
.cardtitle > h2{
    font-size: 30px;
    font-weight: 400;
}
.cardtitle > p{
    font-size: 18px;
    color: #888;
}
/* 代理优势 */
.agency{
    position: relative;
}
.agency div{
    position: absolute;
    padding-left: 80px;
}
.agency > div > h3{
    font-size: 22px;
    font-weight: 400;
}
.agency > div > p{
    color: #888;
    font-size: 16px;
    line-height: 21px;
    width: 200px;
}
.agency div:nth-child(1){
    background: url('/cooperation/001.png') 5px 10px no-repeat;
    left: 30px;
    top: 40px;
}
.agency div:nth-child(2){
    background: url('/cooperation/002.png') 5px 10px no-repeat;
    left: 67px;
    top: 204px;
}
.agency div:nth-child(3){
    background: url('/cooperation/003.png') 5px 10px no-repeat;
    left: 123px;
    top: 354px;
}
.agency div:nth-child(4){
    background: url('/cooperation/004.png') 5px 10px no-repeat;
    left: 896px;
    top: 40px;
}
.agency div:nth-child(5){
    background: url('/cooperation/005.png') 5px 10px no-repeat;
    left: 840px;
    top: 204px;
}
.agency div:nth-child(6){
    background: url('/cooperation/006.png') 5px 10px no-repeat;
    left: 777px;
    top: 354px;
}
/* 市场前景 */
.cardcont{
    overflow: hidden;
    padding: 40px
}
.cardcont > div{
    width: 666px;
}
.cardcont > div > h3{
    font-size: 20px;
    width: 103px;
    font-weight: 400;
    padding-bottom: 10px;
    border-bottom: 1px solid #F53323;
    margin-bottom: 5px;
}
.cardcont > div > p{
    font-size: 16px;
    color: #888;
    line-height: 24px;
    letter-spacing: 1px;
    margin-bottom: 15px;
}
.cardcont > div > span {
    display: inline-block;
    padding: 3px 8px;
    background-color: #00BBEC;
    color: #fff;
    font-size: 14px;
    border-radius: 3px;
    margin-right: 8px;
}
/* 合作流程 */
.process{
    padding: 40px;
}
.process span {
    display: inline-block;
    padding: 12px 60px;
    background-color: #20C4EE;
    color: #fff;
    margin-top: 50px;
    font-size: 30px;
    border-radius: 5px;
}
.hq{
    width: 100%;
    background-color: #E1F6FB;
    padding-top: 70px;
}
.daili{
    padding: 40px 0 70px 0;
}
</style>
