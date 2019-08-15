<template>
  <div>
    <div class="header_s">
      <div class="fl" style="padding: 10px 0 0 20px">
        <img src="/usericon/selamenlogo.png" alt="媒介兔">
      </div>
      <div class="xiala">
        <span>{{kefudata.nickname}}</span>
        <span @click="zhuxiao" style="margin-left:20px">注销</span>
      </div>
    </div>
    <div class="cont_s">
        <div class="left_s">
            <el-menu
                  :default-active="$route.path"
                  class="el-menu-vertical-demo"
                  router
                  background-color="#170F23"
                  text-color="#c2c2c2"
                  active-text-color="#fff"
                >
                <el-menu-item index="/salesman">
                <i class="iconfont icon-dingdanguanli"></i>
                <span slot="title">订单管理</span>
                </el-menu-item>
                <el-menu-item index="/salesman/goodsmanage">
                <i class="iconfont icon-shangpinguanli"></i>
                <span slot="title">商品管理</span>
                </el-menu-item>
                <!-- <el-menu-item index="/salesman">
                <i class="el-icon-setting"></i>
                <span slot="title">软文套餐</span>
                </el-menu-item> -->
                <el-menu-item index="/salesman/buyer">
                <i class="iconfont icon-guanggaozhu"></i>
                <span slot="title">广告主</span>
                </el-menu-item>
                <el-menu-item index="/salesman/seller">
                <i class="iconfont icon-meitizhu"></i>
                <span slot="title">媒体主</span>
                </el-menu-item>
                <el-menu-item index="/salesman/softArticleMeal">
                <i class="iconfont icon-ruanwentaocan"></i>
                <span slot="title">软文套餐池</span>
                </el-menu-item>
                <el-menu-item index="/salesman/creatSoftArticleMeal">
                <i class="iconfont icon-taocanchi"></i>
                <span slot="title">创建软文套餐池</span>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="right_s"><nuxt/></div>
    </div>
    
  </div>
</template>
<script>
import { gettoken } from "@@/assets/commen.js";
export default {
  data() {
    return {
      kefudata:''       //客服信息
    }
  },
  methods: {
    zhuxiao(){
      this.$router.push('/kefu')
    }
  },
  mounted() {
    this.kefudata = JSON.parse(localStorage.getItem('kefu'))
    window.document.body.style.background = '#eef2f7'
    var mytime
    var count = 1
    if(mytime){clearInterval(mytime)}
    mytime = setInterval(() => {
      gettoken()
      count +=1
    }, 360000);
  },
};
</script>
<style scoped>
.header_s {
  width: 100%;
  height: 80px;
  background-color: #170F23;
}
.left_s {
  float: left;
  width: 240px;
  height: 500px;
}
.left_s ul{
  height: 100%;
}
.el-menu-item i{
    margin-right: 5px;
    width: 24px;
    text-align: center;
    font-size: 18px;
    vertical-align: middle;
}
.right_s{
  padding-left: 240px;
  width: 100%;
  min-width: 1582px;
}
.cont_s{
    width: 100%;
}
.xiala{
  height: 80px;
  line-height: 80px;
  cursor: pointer;
  color: #fff;
  float: right;
  margin-right: 100px;
  font-size: 14px;
  border-bottom: 1px solid #5141ED;
}
</style>
