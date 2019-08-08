<template>
    <div class="ppt">
        <headert></headert>
        <div class="serbanner"></div>
        <div class="banxin">
            <serL></serL>
            <div class="c_right">
                <div class="c_rbanner"></div>
                <h2>详细版/WORD商业计划书适用范围</h2>
                <p>商业计划书WORD，我们也称之为“详细版商业计划书”，一般用于详细描述项目，论述项目可行性，用于引入投资、申请政府扶持、补贴或资助，或者用于制定公司战略规划和执行方案。</p>
                <ul>
                    <li><span style="font-weight:700">优点：</span> 内容翔实、逻辑严谨。</li>
                    <li><span style="font-weight:700">缺点：</span> 对于阅读者并不够友好，不适用于投递或者路演。</li>
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
                <div class="select_c" v-show="select===3">
                    <h2>PPT商业计划书服务承诺</h2>
                    <div class="select_clist">
                        <div><strong>全额退款承诺：</strong> 服务款到账日起，在约定的工作日内没有提供初稿，您可以申请全额退款</div>
                        <div style="border:none"><strong>免费修改服务： </strong> 自交付日起，提供90日内三次以内免费修改服务（项目主体变更、替换产品和服务、商业模式变更不在售后服务范围内）</div>
                    </div>
                </div>
                <div class="select_c" v-show="select===4">
                    <h2>WORD商业计划书服务费用</h2>
                    <div class="select_feiyong">
                        <div>WORD商业计划书（10工作日内交稿）<span class="fr">￥5.888元</span> </div>
                        <div>WORD商业计划书（7工作日内交稿）<span class="fr">￥6.888元</span> </div>
                        <div>WORD商业计划书（5工作日内交稿）<span class="fr">￥8.888元</span> </div>
                        <div>WORD商业计划书英文翻译（每页费用）<span class="fr">￥200元</span> </div>
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
    background: url('/cooperation/word.jpg') 0 0/100% no-repeat;
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
