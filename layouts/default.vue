<template>
  <div>
    <!-- <div class="header">
      <el-row class="top">
        <el-col :span="4">  欢迎来到媒介兔!</el-col>
        <el-col :span="4"></el-col>
        <el-col :span="16">
          <ul class="headerright">
            <nuxt-link tag="li" v-if="userdata" class="red" to="/user">个人中心</nuxt-link>
            <li v-if="userdata" @click="zhuxiao">[退出]</li>
            <nuxt-link tag="li" v-if="userdata" to="/user">我的消息</nuxt-link>
            <li v-if="userdata">入住媒体</li>
            <nuxt-link v-if="!userdata" to="/login" class="denglu red" tag="li">请登陆</nuxt-link>
            <nuxt-link v-if="!userdata" to="/login/register" tag="li">注册</nuxt-link>
            <li>在线客服</li>
            <li style="border:none">客服热线 027-87229100</li>
          </ul>
        </el-col>
      </el-row>
    </div>
    <div class="bgcf">
      <div class="search">
      <nuxt-link to="/" class="logo" tag="div"></nuxt-link>
      <div class="meijietag"><img src="/indexicon/title.png"></div>
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
          <el-button type="primary" class="searchbtn">搜索</el-button>
        </div>
        <nuxt-link to="/shopcar" tag="button" class="shopcar"><img style="vertical-align:middle" src="/indexicon/douh_icon002.png"> 购物车(0)</nuxt-link>
      </div>
    </div>
    <div class="headerNav">
      <nuxt-link to="/" class="fenlei" tag="div">营销分类</nuxt-link>
      <nuxt-link to="/search/weixin" tag="div">微信营销</nuxt-link>
      <nuxt-link to="/search/video" tag="div" :style="$route.path=='/search/video'?'color:#5141ED':''">短视频营销</nuxt-link>
      <nuxt-link to tag="div">直播营销</nuxt-link>
      <nuxt-link to tag="div">微博营销</nuxt-link>
      <nuxt-link to tag="div">软文营销</nuxt-link>
      <nuxt-link to="/search/selfmeida" tag="div">自媒体营销</nuxt-link>
      <nuxt-link to tag="div">信息流量广告</nuxt-link>
    </div>
    </div>
    <div class="banner"></div>
    <nuxt />
    <div class="layoutfooter">
      <div class="layoutfooterContent">
          <div class="lFCitem">
              <p>常见问题</p>
              <p>广告主</p>
              <p>媒体主</p>
              <p>帮助中心</p>
          </div>
          <div class="lFCitem">
              <p>交易保障</p>
              <p>资金安全</p>
              <p>交易规则</p>
          </div>
          <div class="lFCitem">
              <p>联系客服</p>
              <p>业务咨询</p>
              <p>售后服务</p>
              <p>资金客服</p>
          </div>
            <div class="lFCitem">
              <p>关于我们</p>
              <p>公司简介 </p>
              <p>商务合作</p>
              <p>用户协议</p>
          </div>
          <div class="servicephone">
            <div>
              <p>
                <i></i> 全国客服热线
              </p>
              <p>027-133212</p>
              <p>QQ在线客服</p>
            </div>
          </div>
          <div class="erweima">
            <div></div>
            <p class="tac">二维码</p>
          </div>
        </div>
      </div>
      <div class="layoutfooter fff">
        <div class="layoutbotton">
            <div>鄂ICP备19013711号-1</div>
            <div>媒介兔(www.meijietu.cn)</div>
            <div>版本所有权:武汉中帜云媒网络</div>
            <div class="fr">举报邮箱:jubao@qq.com</div>
        </div>
    </div> -->
    <nuxt/> 
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
          value: '选项1',
          label: '朋友圈'
        }, {
          value: '选项2',
          label: '微信公众号'
        }, {
          value: '选项3',
          label: '微博'
        }, {
          value: '选项4',
          label: '短视频'
        }, {
          value: '选项5',
          label: '直播'
        }],
        value:'选项1',
    }
  },
  methods: {
   zhuxiao(){
     this.userdata = ''
      this.$store.commit('setuserdata','')
      localStorage.setItem('userdata','')
     this.$axios.post('/signOut',{},{headers:{'Authorization':'Bearer'+localStorage.getItem('access_token')}}).then(res => {
        // this.$router.push('/')
      }).catch(err => {
        // this.$router.push('/')
      })
   }
  },
  mounted() {
    if(this.$store.state.userdata ==''){
        gettoken().then(val =>{                 //刷新TOKEN,获取用户信息并记录
        if(val){
          this.$axios.post('/me',{},{headers:{'Authorization':'Bearer'+val}}).then(res =>{
          // console.log(res)
          this.userdata = res.data.data
          this.$store.commit('setuserdata',res.data.data)
          localStorage.setItem('userdata',JSON.stringify(res.data.data))
        })
        }else{
        }
      }).catch(err => {
      })
    }else {
      this.userdata = this.$store.state.userdata
    }
    
  },
}
</script>
<style scoped>
.rightsearch {
  display: flex;
}
.searchkey {
  width: 250px;
  height: 36px;
}
.searchkey input,
.searchbtn{
  border-radius: 0;
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
  height: 40px;
  margin-left: 30px;
  background:#F8F8F8;
  border:1px solid #D2D2D2;
  border-radius:3px;
}
.shopcar i {
  width: 22px;
  height: 22px;
}
.logo {
  width: 158px;
  height: 42px;
  background: url("/logo.png");
}
.searchborder{
  display: flex;
  border: 2px solid #5141ED
}
.el-input__inner{
  border-radius: 0px;
}
.headerNav {
  display: flex;
  width: 1200px;
  height: 40px;
  margin: 0 auto;
  align-items: flex-end;
}
.headerNav div {
  margin: 10px 40px 10px 0;
  cursor: pointer;
}
.headerNav div:hover{
  color: #5b0fdb
}
.headerNav .fenlei:hover{
  color: #fff;
}
.headerNav .fenlei {
  padding: 10px 30px 10px 60px;
  margin: 0;
  margin-right: 40px;
  color: #fff;
  background: #5b0fdb url('/indexicon/dhl_icon001.png') 30px 10px no-repeat
}
.banner {
  width: 100%;
  height: 400px;
  margin-bottom: -200px;
  background: url("/banner.jpg") center 0;
}
.headerright >li{
  cursor: pointer;
}
.bgcf{
  background-color: #fff;
}
</style>
