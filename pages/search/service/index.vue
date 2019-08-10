<template>
    <div class="ppt">
        <headert></headert>
        <div class="serbanner"></div>
        <div class="banxin">
            <serL></serL>
            <div class="c_right">
                <div class="c_rbanner"></div>
                <h2>PPT商业计划书适用范围</h2>
                <p>商业计划书PPT，我们也称之为“简版商业计划书”，一般用于供潜在投资人阅读的项目概述、向股东及核心管理层描述项目、或者用于向商业合作伙伴初步展示项目。</p>
                <ul>
                    <li><span style="font-weight:700">优点：</span> 目前最流行的格式，简洁美观，便于阅读。</li>
                    <li><span style="font-weight:700">缺点：</span> 由于篇幅限制，难以做出足够详细深入的阐述。</li>
                </ul>
                <!-- Tab切换 -->
                <div class="select_ppt">
                    <div :class="select===1?'sele_active':''" @click="select=1" style="border-top-left-radius:8px">出品规格</div>
                    <div :class="select===2?'sele_active':''" @click="select=2">目录示例</div>
                    <div :class="select===3?'sele_active':''" @click="select=3">服务承诺</div>
                    <div :class="select===4?'sele_active':''" @click="select=4" style="border-top-right-radius:8px">服务费用</div>
                </div>
                <!-- Tab切换内容 -->
                <div class="select_c" v-show="select===1">
                    <h2>PPT商业计划书出品规格</h2>
                    <div class="select_clist">
                        <div><strong>文件格式： </strong>  pptx文件，office2007以上版本兼容</div>
                        <div><strong>页数： </strong>  14-20页</div>
                        <div><strong>版式： </strong> 16.9</div>
                        <div><strong>页面尺寸： </strong>  27.51cm*19.05cm</div>
                        <div style="border:none"><strong>页面效果：</strong>  纯静态无动画</div>
                        <p>如果您对格式有不同要求，请联系客服咨询</p>
                    </div>
                </div>
                <div class="select_c" v-show="select===2">
                    <h2>PPT商业计划书文件内容</h2>
                    <div class="select_clist">
                        <div><strong>封&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;面： </strong>  公司名称、LOGO、SLOGAN，1页</div>
                        <div><strong>公司介绍： </strong>  总结描述企业亮点, 1页</div>
                        <div><strong>团队介绍： </strong>  列出团队关键人员(管理层,核心技术人员)信息，1-2页</div>
                        <div><strong>市场痛点： </strong>  市场痛点描述，指出某些市场需求没有被充分满足，1页</div>
                        <div><strong>解决方案： </strong>  产品和服务如何抓住市场机会,解决市场痛点，1-2页</div>
                        <div><strong>市场前景： </strong>  潜在客户和基础目标客户分析，1-2页</div>
                        <div><strong>竞争分析： </strong>  竞争对手简要描述，1页</div>
                        <div><strong>市场推广： </strong>  市场投放的主要手段，1页</div>
                        <div><strong>销售渠道： </strong>  销售渠道和转化方式，1-2页</div>
                        <div><strong>项目现状： </strong>  已经完成的业绩和项目进度，1页</div>
                        <div><strong>未来规划： </strong>  跟项目发展有关的重大事件的里程碑，1页</div>
                        <div><strong>财务预测： </strong>  财务预测数据图表展示，1页</div>
                        <div><strong>融资计划： </strong>  融资目标和资金使用计划，1页</div>
                        <div style="border:none"><strong>封&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;底： </strong>  联系方式/SLOGAN，1页</div>
                    </div>
                </div>
                <div class="select_c" v-show="select===3">
                    <h2>PPT商业计划书服务承诺</h2>
                    <div class="select_clist">
                        <div><strong>全额退款承诺：</strong> 服务款到账日起，在约定的工作日内没有提供初稿，您可以申请全额退款</div>
                        <div style="border:none"><strong>免费修改服务： </strong> 自交付日起，提供90日内三次以内免费修改服务（项目主体变更、替换产品和服务、商业模式变更不在售后服务范围内）</div>
                    </div>
                </div>
                <div class="select_c" v-show="select===4">
                    <h2>服务费用</h2>
                    <div class="select_feiyong">
                        <div>PPT商业计划书（7工日内交稿，20页以内）<span class="fr">￥3.888元</span> </div>
                        <div>PPT商业计划书（5工日内交稿，20页以内）<span class="fr">￥5.888元</span> </div>
                        <div>PPT商业计划书（3工日内交稿，20页以内）<span class="fr">￥8.888元</span> </div>
                        <div>PPT商业计划书篇幅增加（>20页，每页费用）<span class="fr">￥200元</span> </div>
                        <div>PPT商业计划书英文翻译（每页费用）<span class="fr">￥100元</span> </div>
                    </div>
                </div>
                <!-- 服务流程 -->
                <serR></serR>
                <!-- 支付方式 -->
                <div>
                    <h2>支付方式及发票</h2>
                    <p>请确认收款方为: 武汉中帜云媒网络科技有限公司</p>
                    <p>接受信用卡付款</p>
                </div>
                <!-- 联系我们 -->
                <div class="lianxi">
                    <h2 style="color:#fff;font-size:34px">免费咨询关于商业计划书的任何问题</h2>
                    <el-button type="success" @click="lianxi">立刻联系我们</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import headert from '@@/components/nobanner.vue';
import serR from '@@/components/service_liucheng.vue';
import serL from '@@/components/service_left.vue';
export default {
    layout:'header',
    data() {
        return {
            select:1,
        }
    },
    methods: {
        lianxi(){
            window.open('https://wpa.qq.com/msgrd?v=3&uin=28458999&site=qq&menu=yes')
        }
    },
    components:{
        headert,serL,serR
    },
}
</script>
<style scoped>
.ppt{
    background-color: #fff;
}
.serbanner{
    width: 100%;
    height: 200px;
    background: url('/cooperation/fuwubanner.jpg') no-repeat;
    margin-bottom: 50px;
}
.banxin{
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
}
.c_right{
    float: right;
    width: 815px;
}
.c_rbanner{
    width: 815px;
    height: 300px;
    background: url('/cooperation/ppt.jpg') 0 0/100% no-repeat;
    margin-bottom: 35px;
}
h2{
    font: normal bold 34px/40px "Open Sans Condensed",Helvetica,Arial,Verdana,sans-serif;
    margin-bottom: 20px;
    font-size: 26px;
    line-height: 32px;
}
p{
    font-size: 15px;
    margin-bottom: 10px;
    color: #444;
}
.c_right ul li{
    list-style: disc;
}
/* tap切换模块 */
.select_ppt{
    height: 37px;
    padding-left: 185px;
    margin-top: 35px;
    border-bottom: 1px solid rgba(0,0,0,.2);
}
.select_ppt>div{
    color: rgb(116, 119, 123);
    background-color: rgb(231, 236, 234);
    float: left;
    padding: 8px;
    width: 110px;
    height: 37px;
    text-align: center;
    cursor: pointer;
}
.select_ppt>div:hover{
    color: #fff;
    background-color: rgb(31, 54, 92);
}
.select_ppt >div.sele_active{
    color: #fff;
    background-color: rgb(31, 54, 92);
}
.select_c{
    padding: 12px 15px;
}
.select_clist>div{
    padding: 0 0 10px 24px;
    font-size: 15px;
    color: #74777b;
    border-bottom: 1px solid #ccc;
    margin-bottom: 9px;
    position: relative;
}
.select_clist>div::before{
    content: '>';
    width: 14px;
    height: 14px;
    position: absolute;
    display: block;
    left: 0;
    top: 4px;
    color: #fff;
    font-size: 11px;
    background-color: #72c152;
    border-radius: 50%;
    line-height: 12px;
    text-align: center;
}
.select_feiyong>div{
    height: 35px;
    padding-bottom: 12px;
    margin-bottom: 35px;
    color: #1f365c;
    font-size: 15px;
    font-weight: 700;
    border-bottom: 1px solid rgba(51,51,51,.12)
}
.select_feiyong>div span {
    color: #72c152;
}
/* Tab模块 END */
.lianxi{
    height: 162px;
    border-radius: 5px;
    padding: 28px;
    text-align: center;
    background-color: #1f365c;
    margin-bottom: 50px;
}
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.select_c{
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: fadeInLeft;
}
</style>
