<template>
  <div v-loading="loading">
    <div class="my_id">
      <div class="myleft">
        <div class="myid_left">
          <img v-show="$store.state.userdata!==''" style="border-radius:50%" :src="$store.state.header_img+$store.state.userdata.head_portrait">
          <div class="usernick">
            <p>
              昵称 : {{$store.state.userdata.nickname}}
              <nuxt-link
                :to="$store.state.userdata.realname_status==0?'/user/4-4':'/user/4-5'"
                style="font-size:14px;color:#5141ED;margin-left:20px;font-weigth:400"
              >实名认证</nuxt-link>
            </p>
            <p>
              {{$store.state.userdata.phone}}
              <span
                style="font-size:13px"
              >({{$store.state.userdata.identity==1?'广告主':'媒体主'}})</span>
            </p>
            <p style="font-size:12px;font-weigth=400;color=#666">用户编号 : {{$store.state.userdata.user_num}}</p>
          </div>
        </div>
        <div class="userfunds">
          <div>
            <p>账户余额</p>
            <p>{{$store.state.available_money}}元</p>
            <nuxt-link to="/user/3-2" class="tixianbtn">充值</nuxt-link>
            <nuxt-link :to="$store.state.userdata.realname_status==0?'/user/4-4':'/user/3-3'" class="tixianbtn">提现</nuxt-link>
          </div>
        </div>
      </div>
      <div class="myright">
        <div>
          <img class="kefuimg" :src="$store.state.header_img + usalsesmanInfo.salesman_head_portrait">
          <p>专属客服: {{usalsesmanInfo.salesman_name}}</p> 
        </div>
        <div>联系QQ : {{usalsesmanInfo.salesman_qq_ID}}</div>
        <div style="border:none">联系微信: {{usalsesmanInfo.salesman_weixin_ID}}</div>
      </div>
    </div>
    <div class="oder">
      <div
        v-for="(item,index) in oder"
        :key="index"
        :style="'background-image:url(/pic/personal_lmage0'+index+'.png);font-size:16px;color:#fff'"
      >{{item.title}} <span class="indentcount">{{item.count}}</span> </div>
    </div>
    <div class="myCollection" v-if="$store.state.userdata.identity==1">
      <div class="myCollection_top">
        <span>我的收藏</span>
        <div>
          <p :class="{color666:weixinlist.length==0}" @click="collectionlist=weixinlist">微信营销({{weixinlist.length}})</p>
          <p :class="{color666:weibolist.length==0}" @click="collectionlist=weibolist">微博营销({{weibolist.length}})</p>
          <p :class="{color666:videolist.length==0}" @click="collectionlist=videolist">视频营销({{videolist.length}})</p>
          <p :class="{color666:selfmeida.length==0}" @click="collectionlist=selfmeida">自媒体营销({{selfmeida.length}})</p>
          <p :class="{color666:softarticle.length==0}" @click="collectionlist=softarticle">软文营销({{softarticle.length}})</p>
        </div>
      </div>
      <div class="myCollection_content">
        <div class="collitem" v-for="(item,index) in collectionlist" :key="index">
          <div>
            <img :src="$store.state.header_img + item.goods.avatar_url" style="width:100px;border-radius:50%">
          </div>
          <div>
            <p>{{item.goods.title}}</p>
            <p>
              粉丝量:
              <span class="red">{{item.goods.fans_num}}</span>
            </p>
            <p
              class="color666 font14"
            >领域: {{item.goods.filed_name}}&nbsp;&nbsp;地区: {{item.goods.region_name}}</p>
          </div>
          <div>
            <p class="color666 font14" v-for="(item_info,i) in item.goods.goods_price" :key="i">
              {{item_info.priceclassify_name}}:
              <span style="color:red">{{item_info.price==='0.00'?'':'￥'}}{{item_info.price==='0.00'?'/':item_info.price}}</span>
            </p>
          </div>
          <div class="color666 font14">{{item.goods.title_about}}</div>
          <div>
            <p class="zixunbtn" @click="kefu">咨询客服</p>
            <div class="zixunbtn">加入购物车
              <div>
                  <div v-for="(iteminfo,index) in item.goods.goods_price" v-show="iteminfo.price!='0.00'" :key="index" @click.stop="addcar(item.goods_id,iteminfo.goods_price_id)">{{iteminfo.priceclassify_name}}</div>
              </div>
            </div>
          </div>
          <div class="delcolle cr" @click="delcolle(item.collection_id,index)"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gettoken,salesman } from "@@/assets/commen.js";
export default {
  layout: "user",
  data() {
    return {
      loading:true,
      oder: [
        { title: "全部订单", count: 0 },
        { title: "待接单", count: 0 },
        { title: "执行中", count: 0 },
        { title: "审核中", count: 0 },
        { title: "已完成", count: 0 }
      ],
      collectionlist: "",
      weixinlist: [],
      weibolist: [],
      videolist: [],
      selfmeida: [],
      softarticle: [],
      usalsesmanInfo: "",
      token:'',
      waitbtn:false,
    };
  },
  mounted() {
        this.token = localStorage.getItem('access_token')
        //查询客服信息
        this.$axios
          .post(
            "/salsesmanInfo",
            {},
            { headers: { Authorization: "Bearer" + localStorage.getItem('access_token') } }
          )
          .then(res => {
            this.usalsesmanInfo = res.data.data;
            localStorage.setItem('salesman',JSON.stringify(res.data.data))
          })
          .catch(err => {
            this.usalsesmanInfo = JSON.parse(localStorage.getItem('salesman'))
            // if(err.response.data.message == 'The token has been blacklisted'){return this.again()}
            this.$axios.post(
              "/distributionSalsesman",
              {},
              { headers: { Authorization: "Bearer" + localStorage.getItem('access_token') } }
            );
          });
          //查询自己的订单
          if(this.$store.state.userdata.identity == 2||this.$store.state.userdata===''){           //媒体主订单
            if(this.$store.state.indentBelongSelf == ''){
              this.$axios.post('/indentBelongSelf',{},{headers:{'Authorization':'Bearer'+localStorage.getItem('access_token')}}).then(res => {
                this.$store.commit('setindent',res.data.data)
                res.data.data.data.forEach(item => {
                  this.oder[0].count+=1
                  if(item.status==1){this.oder[1].count+=1}
                  if(item.status==4){this.oder[2].count+=1}
                  if(item.status==7){this.oder[3].count+=1}
                  if(item.status==8&&item.status==9){this.oder[4].count+=1}
                })
                this.loading=false
              })
            }else {
              this.$store.state.indentBelongSelf.data.forEach(item => {
                this.oder[0].count+=1
                  if(item.status==1){this.oder[1].count+=1}
                  if(item.status==4){this.oder[2].count+=1}
                  if(item.status==7){this.oder[3].count+=1}
                  if(item.status==8&&item.status==9){this.oder[4].count+=1}
                })
                this.loading=false
            }
          }
        if(this.$store.state.userdata.identity ==1){          //广告主订单
        this.oder[0].title = '待付款'
          if(this.$store.state.indentBelongSelf == ''){
              this.$axios.post('/indentBelongSelf',{},{headers:{'Authorization':'Bearer'+localStorage.getItem('access_token')}}).then(res => {
                this.$store.commit('setindent',res.data.data)
                res.data.data.data.forEach(item => {
                  if(item.status==0){this.oder[0].count+=1}
                  if(item.status==1){this.oder[1].count+=1}
                  if(item.status==4){this.oder[2].count+=1}
                  if(item.status==7){this.oder[3].count+=1}
                  if(item.status==8&&item.status==9){this.oder[4].count+=1}
                })
                this.loading=false
              })
            }else {
              this.$store.state.indentBelongSelf.data.forEach(item => {
                  if(item.status==0){this.oder[0].count+=1}
                  if(item.status==1){this.oder[1].count+=1}
                  if(item.status==4){this.oder[2].count+=1}
                  if(item.status==7){this.oder[3].count+=1}
                  if(item.status==8&&item.status==9){this.oder[4].count+=1}
                })
                this.loading=false
            }
        }
        return this.$axios.post(
          "/getCollection",
          {},
          { headers: { Authorization: "Bearer" + localStorage.getItem('access_token') } }
        )
      .then(res => {
        this.collectionlist = res.data;
        if(this.collectionlist[0].goods===null){this.loading=false;return this.collectionlist=[]}
        this.collectionlist.forEach(item => {
          if (item.goods.modular_id == 1) {
            this.weixinlist.push(item);
          } else if (item.goods.modular_id == 2) {
            this.weibolist.push(item);
          } else if (item.goods.modular_id == 3) {
            this.videolist.push(item);
          } else if (item.goods.modular_id == 4) {
            this.selfmeida.push(item);
          } else if (item.goods.modular_id == 5) {
            this.softarticle.push(item);
          }
        });
        this.loading = false
      })
      .catch(err => {
        this.loading = false
      });
  },
  methods: {
    getagain(){
      this.token = localStorage.getItem('access_token')
        //查询客服信息
        this.$axios
          .post(
            "/salsesmanInfo",
            {},
            { headers: { Authorization: "Bearer" + localStorage.getItem('access_token') } }
          )
          .then(res => {
            this.usalsesmanInfo = res.data.data;
            localStorage.setItem('salesman',JSON.stringify(res.data.data))
          })
          .catch(err => {
            // if(err.response.data.message == 'The token has been blacklisted'){return}
            this.$axios.post(
              "/distributionSalsesman",
              {},
              { headers: { Authorization: "Bearer" + localStorage.getItem('access_token') } }
            );
          });
          //查询自己的订单
          if(this.$store.state.userdata.identity == 2||this.$store.state.userdata===''){           //媒体主订单
            if(this.$store.state.indentBelongSelf == ''){
              this.$axios.post('/indentBelongSelf',{},{headers:{'Authorization':'Bearer'+localStorage.getItem('access_token')}}).then(res => {
                this.$store.commit('setindent',res.data.data)
                res.data.data.data.forEach(item => {
                  this.oder[0].count+=1
                  if(item.status==1){this.oder[1].count+=1}
                  if(item.status==4){this.oder[2].count+=1}
                  if(item.status==7){this.oder[3].count+=1}
                  if(item.status==8&&item.status==9){this.oder[4].count+=1}
                })
                this.loading=false
              })
            }else {
              this.$store.state.indentBelongSelf.data.forEach(item => {
                this.oder[0].count+=1
                  if(item.status==1){this.oder[1].count+=1}
                  if(item.status==4){this.oder[2].count+=1}
                  if(item.status==7){this.oder[3].count+=1}
                  if(item.status==8&&item.status==9){this.oder[4].count+=1}
                })
                this.loading=false
            }
          }
        if(this.$store.state.userdata.identity ==1){          //广告主订单
        this.oder[0].title = '待付款'
          if(this.$store.state.indentBelongSelf == ''){
              this.$axios.post('/indentBelongSelf',{},{headers:{'Authorization':'Bearer'+localStorage.getItem('access_token')}}).then(res => {
                this.$store.commit('setindent',res.data.data)
                res.data.data.data.forEach(item => {
                  if(item.status==0){this.oder[0].count+=1}
                  if(item.status==1){this.oder[1].count+=1}
                  if(item.status==4){this.oder[2].count+=1}
                  if(item.status==7){this.oder[3].count+=1}
                  if(item.status==8&&item.status==9){this.oder[4].count+=1}
                })
                this.loading=false
              })
            }else {
              this.$store.state.indentBelongSelf.data.forEach(item => {
                  if(item.status==0){this.oder[0].count+=1}
                  if(item.status==1){this.oder[1].count+=1}
                  if(item.status==4){this.oder[2].count+=1}
                  if(item.status==7){this.oder[3].count+=1}
                  if(item.status==8&&item.status==9){this.oder[4].count+=1}
                })
                this.loading=false
            }
        }
        return this.$axios.post(
          "/getCollection",
          {},
          { headers: { Authorization: "Bearer" + localStorage.getItem('access_token') } }
        )
      .then(res => {
        this.collectionlist = res.data;
        if(this.collectionlist[0].goods===null){this.loading=false;return this.collectionlist=[]}
        this.collectionlist.forEach(item => {
          if (item.goods.modular_id == 1) {
            this.weixinlist.push(item);
          } else if (item.goods.modular_id == 2) {
            this.weibolist.push(item);
          } else if (item.goods.modular_id == 3) {
            this.videolist.push(item);
          } else if (item.goods.modular_id == 4) {
            this.selfmeida.push(item);
          } else if (item.goods.modular_id == 5) {
            this.softarticle.push(item);
          }
        });
        this.loading = false
      })
      .catch(err => {
        this.loading = false
      });
    },
    addcar(a,b){
      if(this.waitbtn){this.$message({message: '操作太频繁,请稍后',type: 'warning'})}
      this.waitbtn = true
      this.$axios.post('/joinShopcart',{goods_id_json:JSON.stringify({[a]:b})},{headers:{'Authorization':'Bearer'+localStorage.getItem('access_token')}}).then(res=>{
        this.$message({
          message: '恭喜你，加入购物车成功',
          type: 'success'
        })
        this.$store.state.userdata.shopcart_count += 1
        this.waitbtn = false
      }).catch(err =>{
        this.$message.error('加入购物车失败:'+err.response.data.message);
        this.waitbtn = false
      })
    },
    delcolle(a,b){
      if(this.waitbtn){this.$message({message: '操作太频繁,请稍后',type: 'warning'})}
      this.waitbtn = true
      this.collectionlist.splice(b,1)
        return this.$axios.post('/delCollection',{collection_id_json:JSON.stringify({'0':a})},{headers:{'Authorization':'Bearer'+localStorage.getItem('access_token')}})
      .then(res => {
        this.$message({message: '删除收藏成功',type: 'success'})
        this.waitbtn = false
      }).catch(err => {
        this.waitbtn = false
        this.$message.error('失败: ' + err.response.data.message)
      })
    },
    kefu(){
            window.open('https://wpa.qq.com/msgrd?v=3&uin='+JSON.parse(localStorage.getItem('salesman')).salesman_qq_ID+'&site=qq&menu=yes') 
        },
  },
};
</script>

<style scoped>
.el-menu{
  border: none;
}
.myCollection_content .collitem div.delcolle{
  width: 18px;
  height: 18px;
  background: url('/usericon/personal_scicon01_.png') no-repeat;
  right: 16px;
  top: 16px;
  border: none;
}
/* 用户资料块 */
.tixianbtn {
  display: inline-block;
  margin-right: 10px;
  border: 1px solid #666;
  color: #666;
  font-size: 12px;
  border-radius: 3px;
  padding: 2px 11px;
  cursor: pointer;
}
.tixianbtn:hover {
  color: #de0d0d;
  border-color: #de0d0d;
}
.usernick {
  padding: 11px 120px;
  height: 100px;
}
.usernick p {
  margin-bottom: 14px;
}
.indentcount{
  font-size: 24px;
  float: right;
  margin: 4px 64px;
}
.my_id {
  width: 1000px;
  height: 291px;
  border-radius: 5px;
  background-color: #f7f7f7;
}
.myleft {
  width: 796px;
  height: 290px;
  float: left;
  padding: 30px;
  border-radius: 5px;
  background: url('/pic/gerenxinxi.png') no-repeat;
}
.myright {
  width: 184px;
  height: 289px;
  background-color: #fff;
  float: right;
  border-radius: 5px;
}
.myright >div{
  padding: 15px 0 15px 13px;
  border-bottom: 1px dashed #D2D2D2;
  font-size: 14px;
}
.myright >div:nth-child(1){
  height: 180px;
  
}
.myright >div:nth-child(1) img{
  margin: 15px 0 13px 27px;
}
.myid_left {
  width: 500px;
  display: inline-block;
}
.myid_left img {
  width: 100px;
  height: 100px;
  float: left;
}
.userfunds {
  height: 130px;
  display: flex;
  justify-content: flex-start;
}
.userfunds div {
  height: 85px;
  padding: 45px 150px 0 20px;
}
.userfunds div p:nth-child(2) {
  font-size: 28px;
  margin: 5px 0;
  font-weight: 400;
}
.userfunds div a {
  color: #666;
}
/* 订单数量 */
.oder {
  padding: 30px 0 36px 0;
  display: flex;
  justify-content: space-between;
  background-color: #f8f8f8;
}
.oder div {
  width: 184px;
  height: 98px;
  border-radius: 5px;
  padding: 20px;
  background-repeat: no-repeat;
}
/* 收藏模块 */
.myCollection {
  background-color: #fff;
  border-radius: 5px;
}
.myCollection_top {
  height: 63px;
  padding: 0 29px;
  border-bottom: 1px #d2d2d2 solid;
}
.myCollection_top span {
  padding-top: 20px;
  display: inline-block;
}
.myCollection_top div {
  display: flex;
  height: 63px;
  width: 500px;
  justify-content: space-between;
  align-items: center;
  float: right;
}
.myCollection_top div p {
  cursor: pointer;
  font-size: 14px;
}
.myCollection_content div {
  height: 180px;
  border-bottom: 1px solid #d2d2d2;
  padding-left: 30px;
}
.collitem > div {
  float: left;
  position: relative;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
}
.collitem > div:nth-child(1) {
  width: 130px;
}
.collitem > div:nth-child(2) {
  width: 230px;
  align-items: flex-start;
}
.collitem > div:nth-child(3) {
  width: 200px;
  align-items: flex-start;
}
.collitem > div:nth-child(4) {
  width: 260px;
}
.collitem > div:nth-child(5) {
  width: 110px;
}
.collitem p,
.zixunbtn{
  margin: 3px 0;
}
.myCollection_content .zixunbtn {
  width: 76px;
  height: 28px;
  border: 1px solid rgba(210, 210, 210, 1);
  border-radius: 5px;
  font-size: 14px;
  color: #666;
  text-align: center;
  line-height: 25px;
  cursor: pointer;
  padding-left: 0;
  position: relative;
}
.myCollection_content .zixunbtn:hover {
  width: 76px;
  height: 28px;
  border: 1px solid #5141ed;
  border-radius: 5px;
  font-size: 14px;
  color: #5141ed;
  text-align: center;
  line-height: 25px;
  cursor: pointer;
}
.myCollection_content .zixunbtn:hover >div{
  display: block;
}
.myCollection_content .zixunbtn >div{
    position: absolute;
    height: auto;
    width: 158px;
    padding: 20px 20px 8px;
    bottom: 35px;
    left: -70px;
    display: none;
    box-shadow: 0 0 10px 1px rgba(179,173,246,.33);
    border-radius: 3px;
    background-color: #fff;
    z-index: 9;
}
.zixunbtn >div>div{
    height: 32px;
    margin-bottom: 12px;
    background-color: #5141ed;
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
    padding-left: 0;
    line-height: 32px;
}
.zixunbtn > div::before{
    content: '';
    bottom: -10px;
    left: 0px;
    right: 0px;
    height: 10px;
    display: block;
    position: absolute;
}
.zixunbtn > div::after{
    content: '';
    width: 0;
    height: 0;
    bottom: -8px;
    right: 10.5px;
    display: block;
    position: absolute;
    border-style: solid;
    border-width: 8px 8px 0;
    border-color: #fff transparent transparent;
}
.kefuimg{
  width: 98px;
  height: 98px;
  border-radius: 50%
}
</style>