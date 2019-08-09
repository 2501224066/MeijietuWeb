<template>
    <div class="ppt">
        <headert></headert>
        <div class="serbanner"></div>
        <div class="banxin">
            <serL></serL>
            <div class="c_right">
                <div class="c_rbanner"></div>
                <div class="vc_general ">
                    <h2>每月仅三席!</h2>
                    <p>商业计划书由商业计划在线CEO/CFO/COO亲自担任项目经理，主笔完成。每月仅三席！</p>
                    <el-button @click="yuding" type="success">即刻预定</el-button>
                </div>
                <!-- <div class="ceo">
                    <div></div>
                    <div></div>
                    <div></div>
                </div> -->
                <p>商业计划在线的团队核心成员有风险投资公司的高管，曾经投资过上百家公司，并且为大量各种行业、各种规模的企业提供商业咨询服务；也有财富500强的高级管理人员，并主导创办和运营过多家企业。这些宝贵的经验财富让我们对商业计划书有着特别深刻的理解。</p>
                <div class="select_cr">
                    <h2>不止于商业计划书</h2>
                    <div class="select_clistr">
                        <div><strong>商业模式诊断： </strong>  与您一起分析市场，梳理商业模式，提出建议</div>
                        <div><strong>股权设计咨询： </strong>  提出公司股权结构和公司治理结构的优化意见</div>
                        <div><strong>融资策划咨询： </strong>  与您一起分析财务，制定正确的企业融资战略</div>
                        <p>VIP商业计划书服务远不止于商业计划书本身，在商业计划书的撰写过程中，会给您在商业模式、股权设计和融资战略方面予以宝贵的经验和建议支持。</p>
                    </div>
                </div>
                <!-- Tab切换 -->
                <div class="select_ppt">
                    <div :class="select===1?'sele_active':''" @click="select=1" style="border-top-left-radius:8px">出品规格</div>
                    <div :class="select===2?'sele_active':''" @click="select=2">PPT目录示例</div>
                    <div :class="select===3?'sele_active':''" @click="select=3">WORD目录示例</div>
                    <div :class="select===4?'sele_active':''" @click="select=4">服务承诺</div>
                    <div :class="select===5?'sele_active':''" @click="select=5" style="border-top-right-radius:8px">服务费用</div>
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
                    </div>
                    <h2>WORD商业计划书出品规格</h2>
                    <div class="select_clist">
                        <div><strong>文件格式： </strong>  docx，office07以上版本兼容</div>
                        <div><strong>页数： </strong>  20-40页</div>
                        <div><strong>版式： </strong> 纵向排版（财务报表为横向排版）</div>
                        <div><strong>页面尺寸： </strong> 21cm*29.7cm A4尺寸</div>
                        <div style="border:none"><strong>页面效果：</strong>  5号字体，1.5倍行距</div>
                        <p>如果您对格式有不同要求，请联系客服咨询</p>
                    </div>
                </div>
                <div class="select_c" v-show="select===2">
                    <h2>PPT商业计划书目录示例</h2>
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
                    <h2>WORD商业计划书目录示例</h2>
                    <div class="select_clist">
                        <div><strong>执行摘要 1.1、 </strong>  市场机会 市场痛点、产品服务和团队情况概述 0.5-1页</div>
                        <div><strong>执行摘要 1.2、 </strong>  未来展望 财务预测概述和融资需求概述 0.5-1页</div>
                        <div><strong>市场分析 2.1、 </strong>  市场痛点 市场痛点描述，产品服务的描述 2-3页</div>
                        <div><strong>市场分析 2.2、 </strong>  市场定位 描述目标市场和主要目标客户，预测目标市场趋势，描述如何分步骤分阶段进入目标市场 2-3页</div>
                        <div><strong>市场分析 2.3、 </strong>  竞争分析 描述产品服务的竞争格局，定义产品和服务的竞争优势 2-3页</div>
                        <div><strong>运营发展 3.1、 </strong>  市场销售 市场推广方式，销售转化模式，销售团队布局和管理 2-3页</div>
                        <div><strong>运营发展 3.2、 </strong>  运营支持 营业场所、系统支持、设备支持 1-2页</div>
                        <div><strong>运营发展 3.3、 </strong>  未来里程碑 阶段计划目标及衡量运营状况的数据指标 1-2页</div>
                        <div><strong>公司介绍 4.1、 </strong>  公司概况 描述公司发展历程、企业股权结构 1-2页</div>
                        <div><strong>公司介绍 4.2、 </strong>  人力资源 管理团队及核心成员，人力资源规划 2-3页</div>
                        <div><strong>财务与融资 5.1、 </strong>  财务预测 描述财务预测方法，对营业收入和利润进行预测 1-2页</div>
                        <div><strong>财务与融资 5.2、 </strong>  融资计划 资金用途和融资计划 1页</div>
                        <div><strong>附件 6.1、 </strong>  利润表 按月展开的未来3年利润表预测 3页</div>
                        <div><strong>附件 6.2、 </strong>  资产负债表 按月展开的未来3年资产负债表 3页</div>
                        <div style="border:none"><strong>附件 6.3、 </strong>  现金流量表 按月展开的未来3年现金流量表 3页</div>
                    </div>
                </div>
                <div class="select_c" v-show="select===4">
                    <h2>商业计划书服务承诺</h2>
                    <div class="select_clist">
                        <div><strong>全额退款承诺：</strong> 服务款到账日起，在约定的工作日内没有提供初稿，您可以申请全额退款</div>
                        <div style="border:none"><strong>免费修改服务： </strong> 自交付日起，提供90日内三次以内免费修改服务（项目主体变更、替换产品和服务、商业模式变更不在售后服务范围内）</div>
                    </div>
                </div>
                <div class="select_c" v-show="select===5">
                    <h2>VIP商业计划书服务费用</h2>
                    <div class="select_feiyong">
                        <div>PPT/简版商业计划书<span class="fr">￥19,888元</span> </div>
                        <div>WORD/详细版商业计划书<span class="fr">￥21,888元</span> </div>
                        <div>全套商业计划书PPT/WORD<span class="fr">￥29,888元</span> </div>
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
import {gettoken} from '@@/assets/commen.js'
export default {
    layout:'header',
    data() {
        return {
            select:1,
        }
    },
    methods: {
        lianxi(){
            window.open(salesman(JSON.parse(localStorage.getItem('salesman')).salesman_qq_ID))
        },
        yuding(){
            window.open(salesman(JSON.parse(localStorage.getItem('salesman')).salesman_qq_ID))
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
    background: url('/cooperation/vip.jpg') 0 0/100% no-repeat;
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
    padding-left: 89px;
    margin-top: 35px;
    border-bottom: 1px solid rgba(0,0,0,.2);
}
.select_ppt>div{
    color: rgb(116, 119, 123);
    background-color: rgb(231, 236, 234);
    float: left;
    padding: 8px;
    width: 132px;
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
.select_c,
.select_cr{
    padding: 12px 15px;
}
.select_clist{
    margin-bottom: 20px
}
.select_clistr>div{
    padding: 0 0 10px 24px;
    font-size: 15px;
    color: #444;
    border-bottom: 1px solid #ccc;
    margin-bottom: 9px;
    position: relative;
}
.select_clist>div{
    padding: 0 0 10px 24px;
    font-size: 15px;
    color: #74777b;
    border-bottom: 1px solid #ccc;
    margin-bottom: 9px;
    position: relative;
}
.select_clistr>div::before{
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
    text-align: center
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
.vc_general{
    height: 195px;
    padding: 28px;
    background-color: #f7f7f7;
    border-radius: 5px;
    margin-bottom: 40px;
}
.ceo >div{
    float: left;
    height: 300px;
    width: 240px;
    margin-right: 30px;
    background-color: #f8f8f8;
    margin-bottom: 30px;
}
</style>
