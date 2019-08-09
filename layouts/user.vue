<template>
  <div class="all">
    <div class="header">
      <el-row class="top">
      <el-col :span="8"> <nuxt-link to="/" tag="div" class="cr"><img style="verticalAlign:middle" src="/indexicon/dhl_icon003.png"> 媒介兔首页</nuxt-link> </el-col>
       <el-col :span="16">
          <ul class="headerright">
            <li v-if="userdata" class="red">个人中心</li>
            <li v-if="userdata" @click="zhuxiao">[退出]</li>
            <nuxt-link tag="li" v-if="userdata" to="/user/6">我的消息<span class="red" v-if="$store.state.userdata.unreadNewsCount!=0">[{{$store.state.userdata.unreadNewsCount}}]</span></nuxt-link>
            <nuxt-link v-if="!userdata" to="/login" class="denglu red" tag="li">请登陆</nuxt-link>
            <nuxt-link v-if="!userdata" to="/login/register" tag="li">注册</nuxt-link>
            <nuxt-link tag="li" to="/cooperation">商务合作</nuxt-link>
            <li @click="kefu">在线客服</li>
            <li class="lastli">客服热线 027-87229100</li>
          </ul>
        </el-col>
      </el-row>
    </div>
    <div class="h">
      <div class="search">
        <nuxt-link to="/" class="logo cr" tag="div"></nuxt-link>
        <nuxt-link to="/shopcar" tag="button" class="shopcar"><img style="vertical-align:middle" src="/indexicon/douh_icon002.png"> 购物车({{$store.state.userdata.shopcart_count||'0'}})</nuxt-link>        
      </div>
    </div>
    <div class="c">
      <div class="navMenu">
          <el-menu
            :default-active="$route.path"
            unique-opened
            router
            class="el-menu-vertical-demo"
          >
            <el-menu-item index="/user">
              <i class="iconfont icon-gerenzhongxinICON"></i>
              <span slot="title">个人中心</span>
            </el-menu-item>
            <el-menu-item :index="$store.state.userdata.identity == 2?'/user/2':'/user/2-1'">
              <i class="iconfont icon-dingdanICON"></i>
              <span slot="title">我的订单</span>
            </el-menu-item>
            <el-submenu index="/user/3">
              <template slot="title">
                <i class="iconfont icon-zijinzhongxinICON"></i>
                <span>资金管理</span>
              </template>
                <el-menu-item index="/user/3-1">我的账户</el-menu-item>
                <el-menu-item index="/user/3-2">我要充值</el-menu-item>
                <el-menu-item :index="realname_status==0?'/user/4-4':'/user/3-3'">我要提现</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="iconfont icon-zhanghaoshezhiICON"></i>
                <span>账号设置</span>
              </template>
              <el-menu-item index="/user/4-1">个人资料</el-menu-item>
              <el-menu-item index="/user/4-2">修改手机号</el-menu-item>
              <el-menu-item index="/user/4-3">修改登录密码</el-menu-item>
              <el-menu-item :index="realname_status==0?'/user/4-4':'/user/4-5'">实名认证</el-menu-item>
            </el-submenu>
            <el-submenu index="5" v-if="$store.state.userdata.identity==2">
              <template slot="title">
                <i class="iconfont icon-wodechuanmeiICON"></i>
                <span>我的传媒</span>
              </template>
              <el-menu-item index="/user/5-1">申请传媒入驻</el-menu-item>
              <el-menu-item index="/user/5-2">全部传媒</el-menu-item>
              <el-menu-item index="/user/5-3">审核中的传媒</el-menu-item>
              <el-menu-item index="/user/5-4">已入驻的传媒</el-menu-item>
            </el-submenu>
            <el-menu-item index="/user/6">
              <i class="iconfont icon-xiaoxizhongxinICON"></i>
              <span slot="title">消息中心</span>
            </el-menu-item>
            <el-menu-item index="/user/7">
              <i class="iconfont icon-tousuICON"></i>
              <span slot="title">投诉与建议</span>
            </el-menu-item>
            <el-menu-item index="/user/8" v-if="$store.state.userdata.identity==2">
              <i class="iconfont icon-taocanchi"></i>
              <span slot="title">软文订单</span>
            </el-menu-item>
          </el-menu>
      </div>
      <div class="usercontent">
        <nuxt/>
      </div>
    </div>
    <div class="layoutfooter">
      <div class="layoutfooterContent">
        <div>
          <img style="margin:37px 0" src="/indexicon/footerlogo.png">
          <ul class="layoutful">
            <li><nuxt-link to="/problem">关于我们</nuxt-link> </li>
            <li><nuxt-link to="/problem">常见问题</nuxt-link> </li>
            <li><nuxt-link to="/problem/advertisers">广告主</nuxt-link> </li>
            <li><nuxt-link to="/problem/mediaOwner">媒体主</nuxt-link> </li>
            <li><nuxt-link to="/problem/financialSecurity">资金安全</nuxt-link> </li>
            <li><nuxt-link to="/problem">业务咨询</nuxt-link> </li>
            <li><nuxt-link to="cooperation">商务合作</nuxt-link> </li>
            <li><nuxt-link to="/problem/agreement">用户协议</nuxt-link> </li>
          </ul>
          <div class="erweima">
            <div>
              <!-- <img src="/hezuo/meijieerweima.png"> -->
            </div>
            <p class="tac">媒介兔公众号</p>
          </div>
        </div> 
        <div class="lfctwo">
            <div>鄂ICP备19013711号-1</div>
            <div>网站常驻法律顾问：常朋辉</div>
            <div class="fr">客服热线：027-87229100</div>
        </div>
        <div class="lfctwo" style="border:none">
          <div>媒介兔(www.meijietu.cn)</div>
          <div class="gongsi">版本所有权：武汉中帜云媒网络科技有限公司</div>
          <div >客服邮箱 kf@meijietu.cn</div>
          <div class="fr">QQ客服：28458999</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {gettoken,hmt} from '@@/assets/commen.js'
export default {
  data() {
    return {
      realname_status:0,
      userdata: this.$store.state.userdata
    }
  },
  methods: {
    kefu(){
      window.open('https://wpa.qq.com/msgrd?v=3&uin=28458999&site=qq&menu=yes')
    },
    zhuxiao(){
      this.userdata = ''
      localStorage.setItem('userdata','')
      this.$store.commit('setuserdata','')
     this.$axios.post('/signOut',{},{headers:{'Authorization':'Bearer'+localStorage.getItem('access_token')}}).then(res => {
        localStorage.setItem('access_token','')
        this.$router.push('/')
      }).catch(err => {
        this.$router.push('/')
      })
    },
  },
  mounted() {
    hmt()
    var mytime ,count
    if(mytime){clearInterval(mytime)}
    mytime = setInterval(() => {
      gettoken().catch(err=>{
        clearInterval(mytime)
      })
      count +=1
    }, 360000);
     gettoken().then(val =>{ 
      if(val){  
        let walletInfo ;            //得到钱包资金数据
        this.$axios.post('/walletInfo',{},{headers:{'Authorization':'Bearer'+val}}).then(res=>{
          this.$store.commit('setmoney',res.data.data.available_money)
        }).catch(err=>{
          this.$axios.post('/createWallet',{},{headers:{'Authorization':'Bearer'+val}})
        })
        //刷新TOKEN,获取用户信息并记录
        this.$axios.post('/me',{},{headers:{'Authorization':'Bearer'+val}}).then(res =>{
          localStorage.setItem('userdata',JSON.stringify(res.data.data))
          this.$store.commit('setuserdata',res.data.data)
          this.userdata = res.data.data
          this.realname_status = res.data.data.realname_status
        })
      }else{
        this.$message({message: '请登录',type: 'success'})
        this.$store.commit('setuserdata','')
        localStorage.setItem('userdata','')
        this.$router.push('/')
      }
    }).catch(err => {
      localStorage.setItem('userdata','')
      this.$store.commit('setuserdata','')
    })
  },
};
</script>

<style lang="css" scoped>
/* @import "@assets/icon/iconfont.css"; */
.shopcar{
  width: 108px;
  height: 40px;
  margin-left: 30px;
  background:#F8F8F8;
  border:1px solid #D2D2D2;
  border-radius:3px;
  position: absolute;
  right: 10px;
  top: 21px
}
.shopcar i {
  width: 22px;
  height: 22px;
}
.el-menu{
 border: none;
}
.el-menu-item>span,
div.el-submenu__title>span{
  font-size: 16px;
}
.el-submenu [class^=el-icon-]{
  width: 20px;
  height: 20px;
  color: transparent;
}
.el-submenu .el-menu-item{
  text-indent: 20px;
}
.el-menu-item.is-active i{
  color: #409EFF;
}
.el-menu-item i{
  /* color: transparent; */
  font-size: 18px;
  color: #303133;
}
.usercontent{
  width: 1000px;
  float: right;
}
.c {
  width: 1200px;
  /* 组件高度 */
  /* height: 1200px;         */
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}
.navMenu{
  width: 180px;
  min-height: 625px;
  float: left;
  background-color: #fff;
  overflow: hidden;
  border-radius: 5px;
}
.all {
  background-color: #f7f7f7;
}
a {
  text-decoration: none;
}
.header {
  width: 100%;
  background-color: #f7f7f7;
  height: 33px;
}
.header .top {
  font-size: 12px;
  color: #656565;
  width: 1200px;
  margin: 0 auto;
  height: 100%;
}
.w {
  width: 100%;
  height: 126px;
  background-color: #f7f7f7;
}
.search {
  display: flex;
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 20px;
  height: 86px;
  align-items: center;
}
.h {
  width: 100%;
  background-color: #fff;
}
.logo {
  width: 301px;
  height: 39px;
  background: url("/logo1.png");
}
</style>
