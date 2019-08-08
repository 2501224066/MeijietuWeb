<template>
  <div>
    <shopright></shopright>
    <div class="header">
      <el-row class="top">
        <el-col :span="4">
          欢迎来到媒介兔!
        </el-col>
        <el-col :span="4"></el-col>
        <el-col :span="16">
          <ul class="headerright">
            <li v-if="userdata"><nuxt-link style="color:red" to="/user">个人中心</nuxt-link></li>
            <li v-if="userdata" @click="zhuxiao">[退出]</li>
            <li v-if="userdata"><nuxt-link  to="/user/6">我的消息<span class="red" v-if="$store.state.userdata&&$store.state.userdata.unreadNewsCount!=0">[{{$store.state.userdata.unreadNewsCount}}]</span></nuxt-link></li>
            <li v-if="!userdata"><nuxt-link to="/login" class="denglu red">请登陆</nuxt-link></li>
            <li v-if="!userdata"><nuxt-link to="/login/register">免费注册</nuxt-link></li>
            <li><nuxt-link to="/cooperation">商务合作</nuxt-link></li>
            <li @click="kefu">在线客服</li>
            <li class="lastli">客服热线 027-87229100</li>
          </ul>
        </el-col>
      </el-row>
    </div>
    <nuxt/>
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
import { gettoken } from "@@/assets/commen.js";
import headert from '@@/components/header';
import shopright from '@@/components/shopright'
export default {
  data() {
    return {
      userdata: "",
      input: "",
      options: [
        {
          value: "选项1",
          label: "朋友圈"
        },
        {
          value: "选项2",
          label: "微信公众号"
        },
        {
          value: "选项3",
          label: "微博"
        },
        {
          value: "选项4",
          label: "短视频"
        },
        {
          value: "选项5",
          label: "直播"
        }
      ],
      value: "选项1"
    };
  },
  methods: {
    zhuxiao() {
      this.userdata = "";
      this.$store.commit("setuserdata", "");
      localStorage.setItem('userdata','')
      this.$axios
        .post(
          "/signOut",
          {},
          {
            headers: {
              Authorization: "Bearer" + localStorage.getItem("access_token")
            }
          }
        )
        .then(res => {
          // this.$router.push('/')
        })
        .catch(err => {
          // this.$router.push('/')
        });
    },
    kefu(){
      window.open('https://wpa.qq.com/msgrd?v=3&uin=28458999&site=qq&menu=yes')
    }
  },
  components:{
    headert,shopright
  },
  mounted() {
    // if( /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){
    //   this.$router.push('/m')
    // }else{
    //   console.log('PC')
    // }
    if (this.$store.state.userdata == "") {
      gettoken()
        .then(val => {
          //刷新TOKEN,获取用户信息并记录
          if (val) {
            this.$axios
              .post("/me", {}, { headers: { Authorization: "Bearer" + val } })
              .then(res => {
                this.userdata = res.data.data;
                this.$store.commit("setuserdata", res.data.data);
                localStorage.setItem("userdata", JSON.stringify(res.data.data));
              });
          } else {
            this.userdata=''
          }
        })
        .catch(err => {
          this.userdata = ''
        });
    } else {
      this.userdata = this.$store.state.userdata;
    }
    if(localStorage.getItem('userdata')!=''){
      this.userdata = JSON.parse(localStorage.getItem('userdata')) 
    }
  }
};
</script>