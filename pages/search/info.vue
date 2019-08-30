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
                <h3 class="direc_h">精准的定向能力 瞄准活跃目标客户 <span>让花费的每一分广告费更有价值</span></h3>
                <div><p>地理位置</p><span>根据用户所处商圈、地标、国内省市、国外地区等位置进行定向</span></div>
                <div><p>基本信息</p><span>根据年龄、性别、上网场景(公共场所、家庭、公司、学校)等信息进行定向</span></div>
                <div><p>用户状态</p><span>根据学历、婚恋、生活状态、商业兴趣(旅游、汽车、金融...)等状态定向</span></div>
                <div><p>社会关系</p><span>根据用户的粉丝属性(明星、节目、赛事)进行定向</span></div>
                <div><p>消费能力</p><span>根据消费水平、居住社区价格、游戏内付费水平等进行定向</span></div>
                <div><p>用户行为</p><span>根据上网设备、APP行为(活跃、消费...)、付费用户、应用安装等条件定向</span></div>
                <img src="/info/banner02.png" alt="">
            </div>
        </div>
        <div class="channel banxin">
            <h3>媒介兔为您提供多种渠道资源</h3>
            <p>依托海量优质渠道，为广告主提供智能的渠道投放策略</p>
            <div class="plantTabel">
                <div>
                    <div><img src="/info/plant1.png" alt="腾讯"></div>
                    <div>每天有超过8亿用户使用微信、QQ、QQ空间等众多腾讯产品及第三方应用，他们分享自己感兴趣的内容，浏览商业信息。我们帮助您与这些受众建立联系,将优质商业信息推送给真正想要的人。</div>
                    <div><div @click="kefu" class="guwen">营销顾问</div></div>
                </div>
                <div>
                    <div><img src="/info/plant2.png" alt="新浪"></div>
                    <div>注册用户超过5亿，每天超过1亿主流用户通过新浪了解世界。，每天超过10万优质媒体及意见领袖贡献内容，每天发布微博内容超过60分钟,人均好友超过200人,唯一的媒体平台:流量和新用户增长每年都保持在30%。</div>
                    <div><div @click="kefu" class="guwen">营销顾问</div></div>
                </div>
                <div>
                    <div><img src="/info/plant3.png" alt="今日头条"></div>
                    <div>是一款基于数据挖掘的推荐引擎产品，它为用户推荐有价值的、个性化的信息，提供连接人与信息的新型服务，是国内移动互联网领域成长最快的产品服务之一。</div>
                    <div><div @click="kefu" class="guwen">营销顾问</div></div>
                </div>
                <div>
                    <div><img src="/info/plant4.png" alt="美图"></div>
                    <div>以“让世界变得更美”为使命，怀揣着“打招美丽生态链，让每个人都使用美图产品”的愿景，创造了一系列软硬件产品群，为15亿爱美人士提供服务，改变了用户创造与分享美的方式，也使自拍文化深入人心。</div>
                    <div><div @click="kefu" class="guwen">营销顾问</div></div>
                </div>
            </div>
        </div>
        <div class="advertising banxin">
            <h3>您的广告会出现的位置</h3>
            <p>锁定合适您商业目标的条件人群</p>
            <div class="aphone">
                <div @click="aphone = 1" :class="aphone == 1?'activep':''">开屏广告</div>
                <div @click="aphone = 2" :class="aphone == 2?'activep':''">插屏广告</div>
                <div @click="aphone = 3" :class="aphone == 3?'activep':''">横幅广告</div>
                <div style="border:none" @click="aphone = 4" :class="aphone == 4?'activep':''">视频暂停广告</div>
            </div>
            <div v-show="aphone == 1" class="phoneimg">
                <img src="/info/phone01.png" alt="">
                <img src="/info/phone02.png" alt="">
            </div>
            <div v-show="aphone == 2" class="phoneimg">
                <img src="/info/phone03.png" alt="">
                <img src="/info/phone04.png" alt="">
            </div>
            <div v-show="aphone == 3" class="phoneimg">
                <img src="/info/phone05.png" alt="">
                <img src="/info/phone06.png" alt="">
            </div>
            <div v-show="aphone == 4" class="phoneimg">
                <img src="/info/phone07.png" alt="">
                <img src="/info/phone08.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import {salesman} from '@@/assets/commen.js'
export default {
    layout:'header',
    data() {
        return {
            aphone:1,
        }
    },
    methods: {
        kefu(){
            // console.log(localStorage.getItem('salesman'))
            window.open(salesman(JSON.parse(localStorage.getItem('salesman')).salesman_qq_ID))
        }
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
    background-color: #F8F8F8;
}
.direc_h{
    font-size: 30px;
    text-align: center;
    position: relative;
}
.direc_h span{
    position: absolute;
    color: #888;
    font-size: 14px;
    bottom: -60px;
    left: 526px;
}
.direc_h::before{
    content: '';
    width: 29px;
    height: 4px;
    display: block;
    background-color: #EEA318;
    position: absolute;
    left: 600px;
    bottom: -26px;
}
.direc{
    padding-top: 75px;
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
    position: absolute;
    width: 237px;
    height: 114px;
    box-shadow:0px 0px 13px 0px rgba(145,146,149,0.4);
    border-radius: 5px;
    padding: 12px 12px;
    background-color: #fff;
}
.direc div:nth-child(2){
    left: 7px;
    top: 213px;
}
.direc div:nth-child(3){
    left: 6px;
    top: 367px;
}
.direc div:nth-child(4){
    left: 6px;
    top: 525px;
}
.direc div:nth-child(5){
    left: 970px;
    top: 213px;
}
.direc div:nth-child(6){
    left: 970px;
    top: 366px;
}
.direc div:nth-child(7){
    left: 970px;
    top: 525px;
}
.direc div p{
    font-size: 18px;
    text-align: center;
    margin-bottom: 5px;
}
.direc div span{
    font-size: 15px;
    color: #888;
}
/* 资源 */
.channel h3,
.advertising h3{
    font-size: 30px;
    padding: 80px 0 40px 0;
    text-align: center;
    position: relative;
}
.channel h3::before,
.advertising h3::before{
    content: '';
    display: block;
    position: absolute;
    width: 29px;
    height: 4px;
    background-color: #EEA318;
    left: 600px;
    bottom: 18px;
    border-radius: 4px;
}
.channel > p,
.advertising > p{
    text-align: center;
    font-size: 14px;
    color: #888;
    margin-bottom: 48px;
}
.plantTabel > div{
    width: 100%;
    height: 160px;
    border: 1px solid #E2E2E2;
}
.plantTabel > div > div{
    float: left;
    height: 160px;
}
.plantTabel >div> div:nth-child(1){
    display: flex;
    width: 257px;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #E2E2E2;
}
.plantTabel >div > div:nth-child(2){
    width: 672px;
    padding: 46px 56px;
    border-right: 1px dashed #E2E2E2;
}
.guwen{
    width: 122px;
    height: 34px;
    color: #fff;
    background: #478AF1 url('/indexicon/lee_icon004.png') 89px 9px no-repeat;
    border-radius: 5px;
    margin: 60px 70px;
    padding: 0 13px;
    line-height: 34px;
    cursor: pointer;
}
.aphone{
    width: 100%;
    margin: 40px 0;
    overflow: hidden;
}
.aphone div{
    width: 25%;
    float: left;
    text-align: center;
    color: #888;
    cursor: pointer;
    border-right: 1px solid #888;
}

.aphone div.activep{
    color: #478AF1;
}
.phoneimg{
    height: 650px;
}
.phoneimg img:nth-child(1){
    margin: 0 260px;
}
</style>