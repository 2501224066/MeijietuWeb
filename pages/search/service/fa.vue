<template>
    <div class="ppt">
        <headert></headert>
        <div class="serbanner"></div>
        <div class="banxin">
            <serL></serL>
            <div class="c_right">
                <div class="c_rbanner"></div>
                <h2>商业计划在线融资顾问/FA服务</h2>
                <p>商业计划在线助力创新型企业对接资本市场，针对企业类型、企业现状制定不同的股权融资方案，为企业寻求融资渠道，并提供高效的并购与IPO咨询全方位服务。</p>
                <!-- Tab切换内容 -->
                <div class="select_c">
                    <h2>服务内容</h2>
                    <div class="select_clist">
                        <div>协助评估、确定融资战略和操作方案；</div>
                        <div>协助提供、选择风险投资、私募基金机构；</div>
                        <div>提供融资法律咨询意见和融资协议；</div>
                        <div style="border:none">参与融资谈判，指导完成融资程序。</div>
                    </div>
                </div>
                <div class="vc_column">
                    <div>
                        <div style="height:64px"><img src="/cooperation/faicon01.png" alt=""></div>
                        <h3>不成功，不收费</h3>
                        <p>对结果负责任，融资不成功，不收取服务费用</p>
                    </div>
                    <div>
                        <div style="height:64px"><img src="/cooperation/faicon02.png" alt=""></div>
                        <h3>TOP资源，TOP团队</h3>
                        <p>顶级投行、律所资源，高管均有多年行业经验</p>
                    </div>
                    <div>
                        <div style="height:64px"><img src="/cooperation/faicon03.png" alt=""></div>
                        <h3>有温度，有态度</h3>
                        <p>融资参谋，全程陪伴企业成长，恪守职业道德</p>
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
.vc_column{
    height: 235px;
    width: 100%;
    overflow: hidden;
}
.vc_column>div{
    width: 33%;
    height: 235px;
    float: left;
    text-align: center;
    padding: 35px 15px 0;
    background-color: #f5f5f5;
    overflow: hidden;
}
.vc_column>div>h3{
    font-size: 20px;
    margin: 25px 0 15px;
}
.ppt{
    background-color: #fff;
}
.serbanner{
    width: 100%;
    height: 170px;
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
    background: url('/cooperation/fa.jpg') 0 0/100% no-repeat;
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
</style>
