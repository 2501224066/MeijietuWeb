<template>
  <div class="all">
    <shopright></shopright>
    <div class="header">
      <el-row class="top">
        <el-col :span="8"> <img style="verticalAlign:middle" src="/indexicon/dhl_icon003.png"> 欢迎来到媒介兔!</el-col>
        <el-col :span="16">
          <ul class="headerright">
            <nuxt-link tag="li" class="red" v-if="userdata" to="/user">个人中心</nuxt-link>
            <li v-if="userdata" @click="zhuxiao">[退出]</li>
            <nuxt-link tag="li" v-if="userdata" to="/user/6">我的消息<span class="red" v-if="$store.state.userdata.unreadNewsCount!=0">[{{$store.state.userdata.unreadNewsCount}}]</span></nuxt-link>
            <nuxt-link v-if="!userdata" to="/login" class="denglu red" tag="li">请登陆</nuxt-link>
            <nuxt-link v-if="!userdata" to="/login/register" tag="li">注册</nuxt-link>
            <nuxt-link tag="li" to="/cooperation">商务合作</nuxt-link>
            <li>客服客服</li>
            <li>客服热线 027-87229100</li>
          </ul>
        </el-col>
      </el-row>
    </div>
    <logo></logo>
    <nuxt/>
    <div class="layoutfooter">
      <div class="layoutfooterContent">
        <div>
          <img style="margin:37px 0" src="/indexicon/footerlogo.png">
          <ul class="layoutful">
            <li><nuxt-link to="/problem/companyProfile">关于我们</nuxt-link> </li>
            <li><nuxt-link to="/problem">常见问题</nuxt-link> </li>
            <li><nuxt-link to="/problem/advertisers">广告主</nuxt-link> </li>
            <li><nuxt-link to="/problem/mediaOwner">媒体主</nuxt-link> </li>
            <li><nuxt-link to="/problem/financialSecurity">资金安全</nuxt-link> </li>
            <li><nuxt-link to="/problem">业务咨询</nuxt-link> </li>
            <li><nuxt-link to="/cooperation">商务合作</nuxt-link> </li>
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
            <div class="gongsi">网站常驻法律顾问：常朋辉</div>
            <div>粤公网安备: 42011102003497</div>
            <div class="fr">客服热线：027-87229100</div>
        </div>
        <div class="lfctwo" style="border:none">
          <div>媒介兔(www.meijietu.cn)</div>
          <div class="gongsi">版本所有权：武汉中帜云媒网络科技有限公司</div>
          <div >举报邮箱 kf@meijietu.cn</div>
          <div class="fr">QQ客服：28458999</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import shopright from '@@/components/shopright'
import {gettoken,hmt} from '@@/assets/commen.js'
import logo from '@@/components/Logo.vue'
export default {
  data() {
    return {
      userdata:''
    }
  },
  methods: {
    zhuxiao(){
      this.userdata = ''
      localStorage.setItem('userdata','')
      this.$store.commit('setuserdata','')
     this.$axios.post('/signOut',{},{headers:{'Authorization':'Bearer'+localStorage.getItem('access_token')}}).then(res => {
         this.$router.push('/')
      }).catch(err =>{
        this.$router.push('/')
      })
   }
  },
  mounted() {
    hmt()
    if(this.$store.state.userdata ==''){
      gettoken().then(val =>{                 //刷新TOKEN,获取用户信息并记录
        if(val){
          this.$axios.post('/me',{},{headers:{'Authorization':'Bearer'+val}}).then(res =>{
          localStorage.setItem('userdata',JSON.stringify(res.data.data))
          this.$store.commit('setuserdata',res.data.data)
          this.userdata = res.data.data
        })
        }else{
          // this.$router.push('/login')
        }
      }).catch(err => {
      })
    }else{
      this.userdata = this.$store.state.userdata
    } 
  },
  components:{
    logo,shopright
  }
};
</script>

<style scoped>
.userfooter{
  background-color: #000;
  height: 118px;
}
.usercontent{
  width: 1000px;
  /* min-height: 625px; */
  float: right;
  position: absolute;
  right: 0;
  top: 0;
}
.navMenu{
  width: 170px;
  height: 625px;
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
.top {
  display: flex;
  align-items: center;
}
.top a {
  text-decoration: none;
  margin: 0 10px;
}
.top a.denglu {
  color: red;
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
</style>
