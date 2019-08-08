<template>
    <div class="ser_l">
        <div class="serTab">
            <div class="Tabheader">服务项目</div>
            <ul class="serlist">
                <li :class="$route.path=='/search/service'?'serActive':''"><nuxt-link to="/search/service">PPT商业计划书服务</nuxt-link></li>
                <li :class="$route.path=='/search/service/word'?'serActive':''"><nuxt-link to="/search/service/word">WORD商业计划书服务</nuxt-link></li>
                <li :class="$route.path=='/search/service/vip'?'serActive':''"><nuxt-link to="/search/service/vip">VIP商业计划书服务</nuxt-link></li>
                <li :class="$route.path=='/search/service/pptword'?'serActive':''"><nuxt-link to="/search/service/pptword">全套商业计划书服务</nuxt-link></li>
                <li :class="$route.path=='/search/service/keyan'?'serActive':''"><nuxt-link to="/search/service/keyan">项目可行性研究报告</nuxt-link></li>
                <li :class="$route.path=='/search/service/fa'?'serActive':''"><nuxt-link to="/search/service/fa">融资资讯/FA服务</nuxt-link></li>
            </ul>
        </div>
        <div class="needHelp">
            <div class="needHTitle">需要我们帮助吗</div>
            <div class="needHInfo">关于商业计划书、融资的任何问题，我们都乐于提供帮助。请联系客服</div>
            <!-- <div class="from">
                <input type="text" placeholder="姓名">
                <input type="text" placeholder="电子邮件">
                <input type="text" placeholder="电话*">
                <input type="text" placeholder="城市">
                <input type="text" placeholder="公司">
                <textarea placeholder="留言" rows="4"></textarea>    
            </div> -->
            <!-- <p style="margin:0 0 20px">
                <input type="checkbox">
                <span class="temr_text">同意商业计划在线通过您提供的信息与您联系</span>
            </p> -->
            <el-button @click="lianxi" type="primary">联系QQ</el-button>
        </div>
    </div>
</template>

<script>
import { salesman } from "@@/assets/commen.js";
export default {
    methods: {
        lianxi(){
            window.open(salesman(JSON.parse(localStorage.getItem('salesman')).salesman_qq_ID))
        }
    },
}
</script>
<style scoped>
.ser_l{
    float: left;
    width: 335px;
}
.serTab{
    width: 335px;
    height: 275px;
    background-color: #f5f5f5;
    color: #242424;
    padding: 25px 25px 15px;
}
.Tabheader,
.needHTitle{
    font: normal bold 18px/24px "Open Sans Condensed",Helvetica,Arial,Verdana,sans-serif;
    margin: 0 0 15px;
    color: #242424;
}
.serlist{
    margin: 0;
    padding: 0;
}
.serlist li{
    padding-left: 23px;
    margin-top: 13px;
    position: relative;
}
.serlist li::before{
    content: '>';
    width: 14px;
    height: 14px;
    position: absolute;
    display: block;
    left: 0;
    top: 4px;
    color: rgba(140,149,162,.5);
    font-size: 15px;
    font-weight: 700;
    background-color: rgba(140,149,162,.15);
    line-height: 11px;
    text-align: center;
}
.serlist li a{
    font-size: 14px;
    line-height: 14px;
    font-weight: 700;
}
.serlist li a:hover{
    color: #5141ed;
}
.serlist .serActive a{
    color: #5141ed ;
}
.needHelp{
    width: 335px;
    height: 200px;
    background-color: #f5f5f5;
    margin-top: 30px;
    padding: 25px 25px 15px;
    color: #8c95a2;
    font-size: 14px;
}
.needHInfo{
    margin-bottom: 10px;
}
.from > input{
    width: 285px;
    height: 43px;
    border: 1px solid #e0e1e1;
    padding: 5px 15px;
    margin: 0 0 15px;
}
textarea{   
    width: 285px;
    border: 1px solid #e0e1e1;
    padding: 5px 15px;
    resize:none;
    line-height: 20px;
    margin: 0 0 15px;
}
.temr_text{
    font-size: 12px
}

</style>
