<template>
    <div class="ppt">
        <headert></headert>
        <div class="serbanner"></div>
        <div class="banxin">
            <serL></serL>
            <div class="c_right">
                <div class="c_rbanner"></div>
                <h2>项目前期可行性研究报告用途</h2>
                <p>项目可行性研究报告的编制是确定建设项目前具有决定性意义的工作，项目可行性研究报告是在投资决策之前，对拟建项目进行全面技术经济分析的科学论证，在投资管理中，可行性研究是指对拟建项目有关的自然、社会、经济、技术等进行调研、分析比较以及预测建成后的社会经济效益。</p>
                <!-- Tab切换 -->
                <div class="select_ppt">
                    <div :class="select===1?'sele_active':''" @click="select=1" style="border-top-left-radius:8px">出品规格</div>
                    <div :class="select===2?'sele_active':''" @click="select=2">目录示例</div>
                    <div :class="select===3?'sele_active':''" @click="select=3">服务承诺</div>
                    <div :class="select===4?'sele_active':''" @click="select=4" style="border-top-right-radius:8px">服务费用</div>
                </div>
                <!-- Tab切换内容 -->
                <div class="select_c" v-show="select===1">
                    <h2>项目可研报告出品规格</h2>
                    <div class="select_clist">
                        <div><strong>文件格式： </strong>  docx，office07以上版本兼容</div>
                        <div><strong>页数： </strong>  50-100页</div>
                        <div><strong>版式： </strong> 纵向排版（财务报表为横向排版）</div>
                        <div><strong>页面尺寸： </strong>  21cm*29.7cm A4尺寸</div>
                        <div style="border:none"><strong>正文字体： </strong> 5号字体，1.5倍行距</div>
                        <p>如果您对格式有不同要求，请联系客服咨询</p>
                    </div>
                </div>
                <div class="select_c" v-show="select===2">
                    <h2>项目可研报告目录示例</h2>
                    <div class="select_clist">
                        <div>项目摘要。项目内容的摘要性说明，包括项目名称、建设单位、建设地点、建设年限、建设规模与产品方案、投资估算、运行费用与效益分析等。</div>
                        <div>项目建设的必要性和可行性。</div>
                        <div>市场（产品或服务）供求分析及预测（量化分析）。主要包括本项目、本行业（或主导产品）发展现状与前景分析、现有生产（业务）能力调查与分析、市场需求调查与预测等。</div>
                        <div>项目承担单位的基本情况（原则上应是具有相应承担能力和条件的事业单位）。包括人员状况，固定资产状况，现有建筑设施与配套仪器设备状况，专业技术水平和管理体制等。</div>
                        <div>项目地点选择分析。项目建设地点选址要直观准确，要落实具体地块位置并对与项目建设内容相关的基础状况、建设条件加以描述，不可以项目所在区域代替项目建设地点。具体内容包括项目具体地址位置（要有平面图）、项目占地范围、项目资源、交通、通讯、运输以及水文地质、供水、供电、供热、供气等条件，其它公用设施情况，地点比较选择等。</div>
                        <div>生产（操作、检测）等工艺技术方案分析。主要包括项目技术来源及技术水平、主要技术工艺流程与技术工艺参数、技术工艺和主要设备选型方案比较等；</div>
                        <div>项目建设目标（包括项目建成后要达到的生产能力目标或业务能力目标，项目建设的工程技术、工艺技术、质量水平、功能结构等目标）、任务、总体布局及总体规模</div>
                        <div>项目建设内容。项目建设内容主要包括土建工程、田间工程、配套仪器设备等。要逐项详细列明各项建设内容及相应规模（分类量化）。土建工程：详细说明土建工程名称、规模及数量、单位、建筑结构
                            及造价。建设内容、规模及建设标准应与项目建设属性与功能相匹配，属于分期建设及有特殊原因的，应加以说明。水、暖、电等公用工程和场区工程要有工程量和造价说明。田间工程：建设地点相关工程现状应加以详细描述，在此基础上，说明新（续）建工程名称、规模及
                            数量、单位、工程做法、造价估算。配套仪器设备：说明规格型号、数量及单位、价格、来源。对于单台（套）估价高于5万元的仪器设备，应说明购置原因及理由及用途。对于技术含量较高的仪器设备，需说明是否具备使用能力和条件。</div>
                        <div>投资估算和资金筹措。依据建设内容及有关建设标准或规范，分类详细估算项目固定资产投资并汇总，明确投资筹措方案。</div>
                        <div>建设期限和实施的进度安排。根据确定的建设工期和勘察设计、仪器设备采购（或研制）、工程施工、安装、试运行所需时间与进度要求，选择整个工程项目最佳实施计划方案和进度。</div>
                        <div>环境保护。对项目污染物进行无害化处理，提出处理方案和工程措施及造价。</div>
                        <div>项目组织管理与运行。主要包括项目建设期组织管理机构与职能，项目建成后组织管理机构与职能、运行管理模式与运行机制、人员配置等；同时要对运行费用进行分析，估算项目建成后维持项目正常运行的成本费用，并提出解决所需费用的合理方式方法。</div>
                        <div>效益分析与风险评价。对项目建成后的经济与社会效益测算与分析（量化分析）。特别是对项目建成后的新增固定资产和开发、生产能力，以及经济效益、社会效益等进行量化分析；</div>
                        <div style="border:none">有关证明材料（承担单位法人证明、有关配套条件或技术成果证明等</div>
                    </div>
                </div>
                <div class="select_c" v-show="select===3">
                    <h2>项目可研报告服务承诺</h2>
                    <div class="select_clist">
                        <div>免费修改服务：自交付日起，提供90日内三次以内免费修改服务（项目主体变更、替换产品和服务、商业模式变更不在售后服务范围内）</div>                    </div>
                </div>
                <div class="select_c" v-show="select===4">
                    <h2>服务费用</h2>
                    <div class="select_feiyong">
                        <div>前期可行性研究报告<span class="fr">￥19.800元</span> </div>
                        <div>其他类型可行性研究报告<span class="fr">咨询客服</span> </div>
                        <div>上门服务（/人日，最低1人日，不含差旅费用）<span class="fr">￥1,000元/人日</span> </div>
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
    background: url('/cooperation/keyan.jpg') 0 0/100% no-repeat;
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
