<template>
  <div class="shopcar">
    <div v-show="carlist.length!=0&&!iscreateIndent" v-loading="loading" class="banxin">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>加入购物车</el-breadcrumb-item>
        <el-breadcrumb-item>购买商品</el-breadcrumb-item>
        <el-breadcrumb-item>支付资金</el-breadcrumb-item>
        <el-breadcrumb-item>媒体执行</el-breadcrumb-item>
        <el-breadcrumb-item>交易成功</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="carheader">
        <div class="actived">全部商品</div>
        <el-button type="primary" class="fr lianxikefu" @click="kefu">联系客服</el-button>
      </div>
      <div class="cartilte">
        <div>全选</div>
        <div>商品信息</div>
        <div>价格(元)</div>
        <div>数量</div>
        <div>金额</div>
      </div>
      <div class="carlist" v-for="(item,index) in carlist" :key="index">
        <div>
          <el-checkbox-group v-model="checkList">
            <el-checkbox :label="index"></el-checkbox>
          </el-checkbox-group>
          <!-- <input type="checkbox"> -->
          <img style="width:160px;border-radius:50%" :src="$store.state.header_img + item.goods.avatar_url">
          <div>
            <h4>
              <span>{{item.goods.modular_name}}</span>
              {{item.goods.title}}
            </h4>
            <p>所属分类: {{item.goods.theme_name}}</p>
            <p>媒体领域: {{item.goods.filed_name}}</p>
            <p>商品编号: {{item.goods.goods_num}}</p>
          </div>
        </div>
        <div>{{item.goods_price.priceclassify_name}}:{{item.goods_price.price}}</div>
        <div>{{item.goods.content||'1'}}</div>
        <div class="red">￥{{item.goods_price.price}}</div>
      </div>
      <div class="jiesuan">
        <div class="fl" style="margin-left:15px">
          <el-checkbox v-model="checked" @change="allcheck">全选</el-checkbox>
        </div>
        <div class="fl" @click="shachu">删除商品</div>
        <div class="fl" @click="shoucang">移入收藏</div>
        <div class="fl" @click="qingkong">清空购物车</div>
        <div class="fr cr" @click="createIndent">生成订单</div>
        <div class="fr" style="margin-top:-6px">已选择{{checkList.length}}件 共计: <span style="font-size:20px" class="red">{{checkpir}}.00</span></div>
      </div>
    </div>
    <!-- <div v-show="carlist.length!=0&&iscreateIndent" class="banxin">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/shopcar' }">加入购物车</el-breadcrumb-item>
        <el-breadcrumb-item>购买商品</el-breadcrumb-item>
        <el-breadcrumb-item>支付资金</el-breadcrumb-item>
        <el-breadcrumb-item>媒体执行</el-breadcrumb-item>
        <el-breadcrumb-item>交易成功</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="carheader">
        <div class="actived">全部商品</div>
        <el-button type="primary" class="fr lianxikefu" @click="kefu">联系客服</el-button>
      </div>
      <div class="cartilte">
        <div>&nbsp;</div>
        <div style="paddingRight:122px">商品信息</div>
        <div>价格(元)</div>
        <div>数量</div>
        <div>金额</div>
      </div>
      <div class="carlist" v-for="(item,index) in indentlist" :key="index">
        <div>
          <img style="width:160px;border-radius:50%" :src="$store.state.header_img + item.goods.avatar_url">
          <div>
            <h4>
              <span>{{item.goods.modular_name}}</span>
              {{item.goods.title}}
            </h4>
            <p>所属分类: {{item.goods.theme_name}}</p>
            <p>媒体领域: {{item.goods.filed_name}}</p>
            <p>商品编号: {{item.goods.goods_num}}</p>
          </div>
        </div>
        <div>{{item.goods_price.priceclassify_name}}:{{item.goods_price.price}}</div>
        <div>{{item.goods.content||'1'}}</div>
        <div class="red">￥{{item.goods_price.price}}</div>
      </div>
      <div class="jiesuan">
        <div class="fr cr jiesuanbtn" @click="indentPayment">立即付款</div>
        <div class="fr" style="margin-top:-6px">已选择{{checkList.length}}件 共计: <span class="red" style="font-size:20px">{{checkpir}}.00</span></div>
      </div>
    </div> -->
    <div v-show="carlist.length==0&&!loading" v-loading="loading" class="banxin">
      <div class="nogoodstitle" v-show="!finsh">
        购物车空空的哦~，去看看心仪的媒体吧~
      </div>
      <div class="finshtitle" v-show="finsh">
        <p style="font-size:20px">成功生成订单</p>
        <p style="margin:8px 0;font-size:16px" class="color666">请联系客服取得需求文档，填写完成后上传需求文档。</p>
        <p class="red">3秒后跳转订单页面</p>
      </div>
      <!-- <div class="nogoodstilte">推荐媒体</div>
      <div class="nogoodstuijian">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div> -->
    </div>
    <div v-show="loading" v-loading="loading" element-loading-background="#f7f7f7"  class="lod"></div>
  </div>
</template>
<script>
import { gettoken } from "@@/assets/commen.js";
import returnVue from './return.vue';
export default {
  layout: "shop",
  data() {
    return {
      loading: true,
      finsh:false,
      carlist: [],        //购物车商品详细数据数组[]
      checkList: [],      //选中商品索引数组[0,2]
      checked: false,     
      list_num: [],       //商品列表索引数组[0,1,2]
      iscreateIndent: false,
      indentlist:[],
      indent_num:'',
      btnwait:false,
    };
  },
  methods: {
    kefu(){
            window.open('https://wpa.qq.com/msgrd?v=3&uin='+JSON.parse(localStorage.getItem('salesman')).salesman_qq_ID+'&site=qq&menu=yes') 
        },
    allcheck() {
      if (this.checked) {
        this.checkList = this.list_num;
      } else {
        this.checkList = [];
      }
    },
    shachu(){                                   //---------------------删除选中
      if(this.checkList.length==0){return this.$message({message: '请选择商品',type: 'warning'})}
        if(this.btnwait){return this.$message({message: '操作太频繁,请稍后',type: 'warning'})}
        this.btnwait=true
        let delShopcart = {}
        this.checkList.forEach((item,index) => {
          delShopcart[index] =  this.carlist[item].shopcart_id
        });
        gettoken().then(val => {
            return  this.$axios.post('/delShopcart',{shopcart_id_json:JSON.stringify(delShopcart)},{ headers: { Authorization: "Bearer" + val } })
        }).then(res =>{
          this.$message({
            message: '删除成功',
            type: 'success'
          })
          this.checkList.sort((a,b)=>{return b-a})
          this.checkList.forEach(item => {
            this.carlist.splice(item,1)
          })
          this.checkList=[]
          this.btnwait = false
        }).catch(err=>{
           this.$message.error('删除失败')
           this.btnwait = false
        })
    },
    shoucang(){                                     //--------------移入收藏
      if(this.btnwait){return this.$message({message: '操作太频繁,请稍后',type: 'warning'})}
      if(this.checkList.length==0){return this.$message({message: '请选择商品',type: 'warning'})}
      this.btnwait=true
        let collectionGoods = {}
        this.checkList.forEach((item,index) => {
          collectionGoods[index+1] =  this.carlist[item].goods_id
        })
        gettoken().then(val => {
              return this.$axios.post('/collectionGoods',{
                    goods_id_json:JSON.stringify(collectionGoods)
                },{ headers: { Authorization: "Bearer" + val } })
        }).then(res=>{
          this.$message({message: '成功加入收藏',type: 'success'})
          this.btnwait = false
        }).catch(err=>{
          this.$message.error('收藏失败:'+err.response.data.message)
          this.btnwait = false
        })
    },
    qingkong(){                                         //------------清空购物车
      if(this.btnwait){return this.$message({message: '操作太频繁,请稍后',type: 'warning'})}
        this.btnwait=true
        let delShopcart = {}
        this.carlist.forEach((item,index) => {
          delShopcart[index] =  item.shopcart_id
        });
        gettoken().then(val => {
            return  this.$axios.post('/delShopcart',{shopcart_id_json:JSON.stringify(delShopcart)},{ headers: { Authorization: "Bearer" + val } })
        }).then(res =>{
            this.carlist=[]
            this.$message({
              message: '成功清空',
              type: 'success'
            })
            this.btnwait = false
        }).catch(err =>{
          this.$message.error('删除失败')
          this.btnwait = false
        })
    },
    createIndent(){                       //==============================结算创建订单
      if(this.checkList.length==0){return this.$message({message: '请选择商品',type: 'warning'})}
      if(this.btnwait){return this.$message({message: '操作太频繁,请稍后',type: 'warning'})}
      this.btnwait=true
      this.loading = true
      let info = []
      this.checkList.forEach(item => {
         this.indentlist.push(this.carlist[item])
        info.push({goods_id : this.carlist[item].goods_id,
        goods_price_id : this.carlist[item].goods_price_id,
        goods_count : this.carlist[item].goods_count})
      })
      gettoken().then(val => {
        return this.$axios.post('/createIndent',{
              info:JSON.stringify(info)
        },{ headers: { Authorization: "Bearer" + val } })
      }).then(res => {                                            //成功生成订单
        // if(res.data.status_code == 200){
        //   this.iscreateIndent = true
        // }
        // this.indent_num = JSON.stringify(res.data.data.indent_num_arr)
        this.loading = false
        this.btnwait = false
        this.carlist.length==0
        this.finsh = true
        setTimeout(()=>{
          this.$router.push('/user/2-1')
        },2000)
      }).catch(err => {
        this.loading = false
        this.$message.error('结算失败')
        this.btnwait = false
      })
    },
    indentPayment(){                        //结算付款
      if(this.btnwait){return this.$message({message: '操作太频繁,请稍后',type: 'warning'})}
      this.btnwait=true
      gettoken().then(val=>{
        return this.$axios.post('/indentPayment',{indent_num:this.indent_num},{ headers: { Authorization: "Bearer" + val } })
      }).then(res=>{
        this.$message({message: '购买成功',type: 'success'})
        this.carlist.length = 0
        this.finsh = true
        setTimeout(()=>{
          this.$router.push('/user/2-1')
        },3000)
      }).catch(err=>{
        this.$message.error('付款失败:'+err.response.data.message)
        if(err.response.data.message=='钱包余额不足'){
            return this.$router.push('/user/3-2')
          }
        this.btnwait = false
        this.iscreateIndent =false
      })
    }
  },
  mounted() {
    gettoken()
      .then(val => {
        return this.$axios.post(
          "/getShopcart",
          {},
          { headers: { Authorization: "Bearer" + val } }
        );
      })
      .then(res => {
        this.carlist = res.data;
        for (let i = 0; i < this.carlist.length; i++) {
          this.list_num.push(i);
        }
        this.loading = false
      })
      .catch(err => {
        this.loading = false
      });
  },
  computed: {
    checkpir(){
      let price = 0;
      this.checkList.forEach(item => {
        price += Number(this.carlist[item].goods_price.price) 
      })
      return price
    },
  },
};
</script>

<style scoped>
.lod{
  width: 1200px;
  height: 600px;
  margin: 0 auto;
}
.el-breadcrumb {
  position: absolute;
  right: 0;
  top: -80px;
}
.banxin {
  width: 1200px;
  margin: 0 auto;
  position: relative;
}
.carheader {
  height: 56px;
  background-color: #fff;
  padding: 12px 30px 0 30px;
  border-bottom: 1px solid #d2d2d2;
}
.carheader > div {
  width: 110px;
  height: 43px;
  padding-top: 5px;
  text-align: center;
  float: left;
}
.cartilte {
  height: 40px;
  overflow: hidden;
  background-color: #f8f7ff;
  border-bottom: 1px solid #d2d2d2;
  line-height: 40px;
  font-size: 14px;
  color: #666;
}
.cartilte > div {
  float: left;
}
.cartilte > div:nth-child(1) {
  padding-left: 40px;
  width: 215px;
}
.cartilte > div:nth-child(2) {
  width: 315px;
}
.cartilte > div:nth-child(3) {
  width: 305px;
}
.cartilte > div:nth-child(4) {
  width: 252px;
}
.carlist {
  height: 160px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}
.carlist > div {
  height: 160px;
  float: left;
}
.carlist > div:nth-child(1) {
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.carlist > div:nth-child(1) p {
  color: #666;
  width: 180px;
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.carlist > div:nth-child(1) h4 {
  font-weight: 400;
  margin-bottom: 10px;
   width: 180px;
    white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.carlist > div:nth-child(1) h4 span {
  display: inline-block;
  padding: 2px 8px;
  font-size: 12px;
  background-color: #5141ed;
  color: #fff;
  border-radius: 3px;
}
.carlist > div:nth-child(1) img {
  padding: 0 30px;
}
.carlist > div:nth-child(2) {
  width: 270px;
  text-align: center;
  line-height: 160px;
}
.carlist > div:nth-child(3) {
  width: 256px;
  text-align: center;
  line-height: 160px;
}
.carlist > div:nth-child(4) {
  width: 220px;
  text-align: center;
  line-height: 160px;
  padding-left: 39px;
}
.jiesuan {
  height: 61px;
  padding-top: 20px;
  margin: 40px 0 50px 0;
  background-color: #fff;
  font-size: 14px;
  color: #242424;
  border-radius: 3px;
  border: 1px solid rgba(210, 210, 210, 1)
}
.jiesuan div.fl {
  width: 120px;
  text-align: center;
  display: inline-block;
  cursor: pointer;
}
.jiesuan div:nth-child(5),
.jiesuan .jiesuanbtn{
  height: 60px;
  width: 156px;
  background-color: #DE0D0D;
  color: #fff;
  font-size: 24px;
  line-height: 60px;
  position: relative;
  top: -20px;
  left: 0;
  text-align: center;
  margin-left: 20px;
}
.jiesuan div:nth-child(6) span{
  font-size: 20px;
}
.nogoodstitle{
  height: 400px;
  line-height: 400px;
  padding-left: 100px;
  text-align: center;
  background: url('/pic/noshopcar01.png') 390px 160px no-repeat;
  font-size: 14px;
  color: #242424;
}
.finshtitle{
  height: 400px;
  padding-top: 127px;
  padding-left: 435px;
  background: url('/indexicon/register_scess.png') 370px 134px no-repeat;
  font-size: 14px;
  color: #242424;
}
.nogoodstuijian{
  overflow: hidden;
}
.nogoodstuijian > div{
  width: 230px;
  height: 280px;
  float: left;
  background-color: #fff;
  margin-right: 10px;
}
.lianxikefu{
  margin: -3px -2px 0 0;
  padding-left:34px;
  background-image: url('/indexicon/lee_icon003.png');
  background-position: 8px 8px;
  background-repeat: no-repeat;
}
</style>
