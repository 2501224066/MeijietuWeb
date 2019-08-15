<template>
<div>
    <div class="bgcf">
      <div class="search">
      <div class="lo">
        <nuxt-link to="/" class="logo cr"></nuxt-link>
        <h1>KOL,广告投放平台,营销推广,微信公众号,微博,小红书,视频,网红直播,短视频</h1>
      </div>
      <div class="rightsearch">
        <div class="searchborder">
          <el-select v-model="value" placeholder="请选择" style="width:120px" class="elSele">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
          <el-input v-model="input" placeholder="请输入你要搜索的关键字" class="searchkey" style="borderRadius:0"></el-input>
          <el-button type="primary" class="searchbtn" style="height:37px" @click="searchkeyword">搜索</el-button>
        </div>
        <nuxt-link to="/shopcar" tag="button" class="shopcar"><img style="vertical-align:middle" src="/indexicon/douh_icon002.png"> 购物车({{$store.state.userdata.shopcart_count||'0'}})</nuxt-link>
      </div>
    </div>
    <div class="headerNav">
      <nuxt-link to="/" class="fenlei">营销首页</nuxt-link>
      <nuxt-link to="/search/weixin" :style="$route.path=='/search/weixin'?'color:#5141ED':''">微信营销</nuxt-link>
      <nuxt-link to="/search/video" :style="$route.path=='/search/video'?'color:#5141ED':''">短视频营销</nuxt-link>
      <!-- <nuxt-link to tag="div">直播营销</nuxt-link> -->
      <nuxt-link to="/search/weibo" :style="$route.path=='/search/weibo'?'color:#5141ED':''">微博营销</nuxt-link>
      <nuxt-link to="/search/softarticle" :style="$route.path=='/search/softarticle'?'color:#5141ED':''">软文营销</nuxt-link>
      <!-- <nuxt-link to="/search/selfmeida" :style="$route.path=='/search/selfmeida'?'color:#5141ED':''">自媒体营销</nuxt-link> -->
      <nuxt-link to="/search/selfproduct" :style="$route.path=='/search/selfproduct'?'color:#5141ED':''">SEO</nuxt-link>
      <nuxt-link to="/search/service" :style="$route.path=='/search/service'?'color:#5141ED':''">服务项目</nuxt-link>
    </div>
    </div>
    <div class="banner">
      <el-carousel height="480px">
        <el-carousel-item v-for="(item,index) in banner" :key="item.id">
          <!-- <div class="banneritem" :style="'background-image:url('+$store.state.header_img +banner[0].img+')'"></div> -->
          <img @click="liaojie(index)" class="bannerimg" :src="$store.state.header_img +item.img">
        </el-carousel-item>
      </el-carousel>
    </div>
    </div>
</template>

<script>
import {gettoken} from '@@/assets/commen.js'
export default {
  data() {
    return {
      userdata:'',
      input:'',
      options: [{
          value: '1',
          label: '微信公众号'
        }, {
          value: '2',
          label: '微博'
        },{
          value: '3',
          label: '短视频'
        }],
        value:'1',
    }
  },
  props:['banner'],
  methods: {
    searchkeyword(){
      this.$store.commit('setsearchkeyword',{modula:this.value,keyword:this.input})
      if(this.value=='1'){return this.$router.push('/search/weixin')}
      if(this.value=='2'){return this.$router.push('/search/weibo')}
      if(this.value=='3'){return this.$router.push('/search/video')}
    },
    liaojie(a){
      if(a===0){
        window.open('https://wpa.qq.com/msgrd?v=3&uin=1999868&site=qq&menu=yes')
      }else{
        window.open('https://wpa.qq.com/msgrd?v=3&uin=28458999&site=qq&menu=yes')
      }
    }
  },
  mounted(){
  },
}
</script>
<style scoped>
.rightsearch {
  display: flex;
}
.searchkey {
  width: 270px;
  height: 36px;
  border-radius: 3px;
}
.searchkey input,
.searchbtn{
  border-radius: 0;
}
.searchbtn {
  font-size: 16px;
  line-height: 13px;
}
.search {
  display: flex;
  width: 1200px;
  margin: 0 auto;
  height: 86px;
  align-items: center;
  justify-content: space-between;
}
.shopcar{
  width: 108px;
  height: 41px;
  margin-left: 30px;
  background:#F8F8F8;
  border:1px solid #D2D2D2;
  border-radius:3px;
}
.shopcar i {
  width: 22px;
  height: 22px;
}
.lo{
  position: relative;
}
.lo h1{
  position: absolute;
  left: -99999px;
}
.logo {
  display: block;
  width: 301px;
  height: 39px;
  background: url("/logo1.png") no-repeat;
}
.searchborder{
  display: flex;
  border: 2px solid #5141ED;
  border-radius: 3px;
}
.headerNav {
  display: flex;
  width: 1200px;
  height: 40px;
  margin: 0 auto;
  align-items: flex-end;
  font-weight: 600;
}
.headerNav div ,
.headerNav a{
  margin: 10px 40px 10px 0;
  cursor: pointer;
  color: #000;
}
.headerNav div:hover,
.headerNav a:hover{
  color: #5141ED
}
.headerNav .fenlei:hover{
  color: #fff;
}
.headerNav .fenlei {
  padding: 10px 30px 10px 60px;
  margin: 0;
  margin-right: 40px;
  color: #fff;
  background: #5141ED url('/indexicon/dhl_icon001.png') 30px 10px no-repeat
}
.banner {
  width: 100%;
  height: 480px;
  margin-bottom: -200px;
  background:  center 0;
  min-width: 1200px;
}
.headerright >li{
  cursor: pointer;
}
.bgcf{
  background-color: #fff;
}
.bannerimg{
  position: relative;
  left: 50%;
  margin-left: -960px;
  cursor: pointer;
}
/* .liaojie{
  position: absolute;

} */
</style>