<template>
    <div>
        <div class="iheader">
            <div class="banxin">
            </div>
        </div>
        <div class="ihelp banxin">
            <h3 class="ihelp_title">帮助解决企业营销推广难题</h3>
            <p class="ihelp_p">没有定位、没有规划、没有渠道、没有经验</p>
            <div class="ihelp_list">
                <div class="ihelp_item">
                    <img src="/info/icon01.png" alt="营销定位">
                    <p>营销定位</p>
                    <p>推广客户不精准,光体验不买账,浪费资源</p>
                </div>
                <div class="ihelp_item">
                    <img src="/info/icon02.png" alt="营销定位">
                    <p>推广规划</p>
                    <p>产品推广无计划，销量不稳定，客户无法快速裂变。</p>
                </div>
                <div class="ihelp_item">
                    <img src="/info/icon03.png" alt="营销定位">
                    <p>销售渠道</p>
                    <p>缺乏行业资源渠道少，客户少，销量少。</p>
                </div>
                <div class="ihelp_item">
                    <img src="/info/icon04.png" alt="营销定位">
                    <p>操作经验</p>
                    <p>参加了网络营销培训。想重视网络推广，却无法执行？</p>
                </div>
            </div>
            <h3 class="ihelp_title">汇聚多种渠道光谷 帮助品牌无死角触达客户</h3>
            <p class="ihelp_p">让花费的每一分广告费更有价值</p>
            <img class="ihelp_img" src="/info/banner04.png" alt="">
            <div class="ihelp_num zuo">
                <p>6亿</p>
                <span>平均月活跃用户数</span>
            </div>
            <div class="ihelp_num zhong">
                <p>15亿</p>
                <span>每日广告曝光数量</span>
            </div>
            <div class="ihelp_num">
                <p>70分钟</p>
                <span>日均访问时长</span>
            </div>
        </div>
        <div class="directional">
            <div class="banxin direc">
                
                <h3 class="direc_h">精准的定向能力 瞄准活跃目标客户</h3>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <img src="/info/banner02.png" alt="">
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
.ihelp_title{
    padding: 75px 0 40px 0;
    font-size: 30px;
    text-align: center;
    position: relative;
}
.ihelp_title::before{
    content: '';
    width: 30px;
    height: 4px;
    display: block;
    background-color: #EEA318;
    position: absolute;
    bottom: 16px;
    left: 48%;
    border-radius: 4px;
}
.ihelp_p{
    font-size: 14px;
    color: #888;
    text-align: center;
    margin-bottom: 50px;
}
.ihelp_item{
    width: 210px;
    text-align: center;
    float: left;
    margin-right: 90px;
}
.ihelp_item p:nth-child(2){
    font-size: 24px;
    margin: 20px 0 10px 0;
}
.ihelp_item p:nth-child(3){
    color: #888;
}
.ihelp_list{
    overflow: hidden;
}
.ihelp_img {
    margin-left: 90px;
    margin-bottom: 50px;
}
.ihelp_num {
    text-align: center;
    display: inline-block;
}
.ihelp_num p{
    color: #DE0D0D;
    font-size: 52px;
}
.ihelp_num span{
    color: #888;
    font-size: 18px;
}
.ihelp_num.zhong{
    margin: 0 315px;
}
.ihelp_num.zuo{
    margin-left: 35px;
}
/* 精准的定向能力 */
.directional{
    width: 100%;
    height: 715px;
}
.direc{
    height: 715px;
    position: relative;
    background: url('/info/banner03.png') no-repeat center 190px;
}
.direc img{
    position: absolute;
    top: 266px;
    left: 236px;
}
.direc div{
    width: 237px;
    height: 114px;
    box-shadow:0px 0px 13px 0px rgba(145,146,149,0.4);
    border-radius: 5px;
}
</style>