<template>
  <div class="Order" v-loading="loading" element-loading-background="rgba(255, 2555, 255, 1)">
    <!-- element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(255, 255, 255, 0.8)"-->
    <!-- 头部信息-------------------- -->
    <div class="Orderheader">
      <p :class="indentclass==1?'actived':''" @click="indentlist=indentdata.data;indentclass=1">全部订单</p>
      <p :class="indentclass==2?'actived':''" @click="indentlist=indentstatus10;indentclass=2">失效订单</p>
      <p :class="indentclass==3?'actived':''" @click="indentlist=indentstatus0;indentclass=3">待付款</p>
      <p :class="indentclass==4?'actived':''" @click="indentlist=indentstatus1;indentclass=4">待接单</p>
      <p :class="indentclass==5?'actived':''" @click="indentlist=indentstatus4;indentclass=5">执行中</p>
      <p :class="indentclass==6?'actived':''" @click="indentlist=indentstatus7;indentclass=6">审核中</p>
      <p :class="indentclass==7?'actived':''" @click="indentlist=indentstatus8;indentclass=7">已完成</p>
      <el-button class="fr lianxi" type="primary" @click="kefu">联系客服</el-button>
    </div>
    <div class="Orderth">
      <el-row>
        <el-col :span="9">
          <p>订单详情</p>
        </el-col>
        <el-col :span="4">
          <p>价格</p>
        </el-col>
        <el-col :span="3">
          <p>数量</p>
        </el-col>
        <el-col :span="3">
          <p>订单状态</p>
        </el-col>
        <el-col :span="5">
          <p>订单操作</p>
        </el-col>
      </el-row>
    </div>
    <!-- 订单列表--------------------------------------- -->
    <div class="Orderlist" v-for="(item,index) in indentlist" :key="index">
      <div class="listheader">
        <span>{{item.create_time}}</span>
        <span style="marginLeft:16px;color:#242424">订单号:{{item.indent_num}}</span>
      </div>
      <div
        class="Orderlistcontent"
      >
        <el-row>
          <el-col :span="9">
            <img style="width:98px;border-radius: 50%;" :src="$store.state.header_img + item.indent_item.avatar_url" />
            <div style="width:160px">
              <h3 class="shopname">
                <span>{{item.indent_item.modular_name}}</span>
                {{item.indent_item.goods_title}}
              </h3>
              <p>所属分类:{{item.indent_item.theme_name}}</p>
              <p>媒体领域:综合</p>
              <!-- <p>商品编号:{{item.indent_item.goods_num}}</p> -->
            </div>
          </el-col>
          <el-col :span="4">
            <p>
              {{item.indent_item.priceclassify_name}}:
              <span
                class="red"
              >{{item.indent_item.goods_price}}</span>
            </p>
          </el-col>
          <el-col :span="3">
            <p>{{item.indent_item.goods_count}}</p>
            <!-- {{item.indent_item.status}} -->
          </el-col>
          <el-col :span="3">
            <p>{{item.status==0?'待付款':item.status==1?'待接单':item.status==4?'执行中':item.status==7?'审核中':item.status==8?'已完成':'已失效'}}</p>
          </el-col>
        </el-row>
      </div>
      <div v-if="item.status==0" class="selectbtn">
        <p v-if="item.demand_file===''" @click="upload(item.indent_num,item.demand_file)">上传需求文档</p>
        <p v-if="item.demand_file!==''" @click="fukuanindent=item.indent_num;istruefukuan=true" class="cr">去付款</p>
        <p class="quxiao" @click="istrueshanchu(item.indent_num,item.status)">删除订单</p>
      </div>
      <div v-if="item.status==1" class="selectbtn">
        <!-- <p @click="upload(item.indent_num,item.demand_file)">上传需求文档</p> -->
        <span>等待媒体主接单</span>
        <p class="quxiao" @click="oderCancel(item.indent_num,item.status)">取消订单</p>
      </div>
      <div v-if="item.status==4" class="selectbtn">
        <span>等待完成</span>
         <p class="quxiao red" @click="oderCancel(item.indent_num,item.status)">取消订单</p>
      </div>
      <div v-if="item.status==7" class="selectbtn">
        <p @click="achievements_file(index)">下载完成信息</p>
        <p @click="buyerConfirmComplete(item.indent_num)">确认完成</p>
      </div>
      <!-- <div v-if="item.status==8" class="selectbtn">
        <p>再次购买</p>
      </div> -->
    </div>
    <div class="noindent" v-show="indentlist.length==0">
      <p class="font14 color666"><i class="el-icon-warning" style="margin-right:8px"></i>没有订单，去你挑选需要的媒体吧~</p>
      <nuxt-link to="/" tag="div">去首页逛逛</nuxt-link>
    </div>
    <!-- ================================  分页   =============================== -->
    <div class="fenye" v-show="indentlist.length!==0">
        <el-pagination
          background
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="15"
          layout="prev, pager, next, jumper"
          :total="this.indentdata.total">
        </el-pagination>
    </div>
    <!-- 弹出框 -->
    <!-- <el-dialog title="注意事项" :visible.sync="shanghcuanbtn" width="30%">
      <p>1.上传资料，仅允许上传一次,不允许修改。</p>
      <p>2.上传资料仅支持doc,docx,和rar,zip格式的压缩文件</p>
      <p>3.多个商品，请将多个对应的word文档放入压缩包中上传。</p>
          <el-upload
            class="upload-demo"
            :action="$store.state.imgcodehost+'/uploadFile'"
            multiple
            :headers="{'Authorization':'Bearer'+ token}"
            :data="{upload_type:'indent_word'}"
            name="file"
            :on-success="handleAvatarSuccess"
            :show-file-list="false"
            :before-upload="beforeAvatarUpload"
          >
            <p class="shanchuanbyn">上传资料</p>
          </el-upload>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="shanghcuanbtn = false">确 定</el-button>
        <el-button @click="shanghcuanbtn = false">取 消</el-button>
      </span>
    </el-dialog> -->
    <!-- 取消订单弹出框 -->
    <el-dialog title="取消原因" :visible.sync="dialogVisible" width="30%">
      <p class="red" v-show="cancel_status!==1" style="margin-top:-20px">取消订单将扣除保证金!</p>
      <el-input type="textarea" resize="none" :rows="3" placeholder="请输入内容" v-model="cancel_cause"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="istrueCancal">确 定</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 确认付款弹出框 -->
    <el-dialog title="提示" :visible.sync="istruefukuan" width="30%">
      <span>确认付款</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="indentPayment(fukuanindent)">确 定</el-button>
        <el-button @click="istruefukuan = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { gettoken } from "@@/assets/commen.js";
export default {
  layout: "user",
  data() {
    return {
      currentPage:1,       //当前页数
      istruefukuan: false, //确认付款弹出框
      shanghcuanbtn:false, //上传弹出框
      fukuanindent: "",   //确认付款订单号
      dialogVisible: false, //取消订单弹出框
      loading: true,
      indent_num: "",     //上传资料订单号
      indentdata: "",     //个人订单全部数据
      token:'',           //不能删
      indentclass: 1,
      indentlist: [],
      indentstatus0: [],  //订单的状态分类列表
      indentstatus1: [],
      indentstatus4: [],
      indentstatus7: [],
      indentstatus8: [],
      indentstatus10: [],
      cancel_cause: "", //取消订单理由
      cancel_status: "", //要取消订单的状态分类
      cancel_indent: "", //要取消订单的订单号
      gengxin_status: 1,
      btnwait:false,       //按钮节流阀
    };
  },
  mounted() {
    this.$axios
      .post(
        "/indentBelongSelf",
        {},
        {
          headers: {
            Authorization: "Bearer" + this.$store.state.token
          }
        }
      )
      .then(res => {
        this.indentdata = res.data.data;
        this.indentlist = res.data.data.data;
        this.indentlist.forEach(item => {
          if (item.status == 0) {
            this.indentstatus0.push(item);
          } else if (item.status == 1) {
            this.indentstatus1.push(item);
          } else if (item.status == 4) {
            this.indentstatus4.push(item);
          } else if (item.status == 7) {
            this.indentstatus7.push(item);
          } else if (item.status == 8 && item.status == 9) {
            this.indentstatus8.push(item);
          } else {
            this.indentstatus10.push(item);
          }
        });
        this.loading = false;
        this.token = localStorage.getItem('access_token')
      })
      .catch(err => {
        gengxin(1)
        this.token = localStorage.getItem('access_token')
        this.loading = false;
      });
  },
  methods: {
    gengxin(a){
      this.loading=true
      if(!a){this.currentPage=1}
      this.$axios
      .post(
        "/indentBelongSelf?page=" + a,
        {},
        {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("access_token")
          }
        }
      )
      .then(res => {
        this.indentdata = res.data.data;
        this.indentlist = res.data.data.data;
        this.indentlist.forEach(item => {
          if (item.status == 0) {
            this.indentstatus0.push(item);
          } else if (item.status == 1) {
            this.indentstatus1.push(item);
          } else if (item.status == 4) {
            this.indentstatus4.push(item);
          } else if (item.status == 7) {
            this.indentstatus7.push(item);
          } else if (item.status == 8 && item.status == 9) {
            this.indentstatus8.push(item);
          } else {
            this.indentstatus10.push(item);
          }
        });
        this.loading = false;
      })
      .catch(err => {
        this.loading = false;
      });
    },
    kefu(){
            window.open('https://wpa.qq.com/msgrd?v=3&uin='+JSON.parse(localStorage.getItem('salesman')).salesman_qq_ID+'&site=qq&menu=yes') 
        },
    handleAvatarSuccess(res, file) {
      this.$axios
        .post(
          "/addDemandFile",
          { indent_num: this.indent_num, demand_file: res.data.path },
          { headers: { Authorization: "Bearer" + localStorage.getItem("access_token")} }
        )
        .then(res => {
          this.$axios
            .post(
              "/indentBelongSelf",
              {},
              {
                headers: {
                  Authorization: "Bearer" + localStorage.getItem("access_token")
                }
              }
            )
            .then(res => {
              this.indentdata = res.data.data;
              this.indentlist = res.data.data.data;
              this.indentlist.forEach(item => {
                if (item.status == 0) {
                  this.indentstatus0.push(item);
                } else if (item.status == 1) {
                  this.indentstatus1.push(item);
                } else if (item.status == 4) {
                  this.indentstatus4.push(item);
                } else if (item.status == 7) {
                  this.indentstatus7.push(item);
                } else if (item.status == 8 || item.status == 9) {
                  this.indentstatus8.push(item);
                } else {
                  this.indentstatus1.push(item);
                }
              });
              this.loading = false;
            })
            .catch(err => {
              this.loading = false;
            });
          this.$message({message: '上传成功',type: 'success'})
        })
        .catch(err => {
          this.loading = false;
          this.$message.error('上传失败:'+err.response.data.message)
        });
    },
    handleCurrentChange(a){                     //分页跳转
      this.loading=true
      this.gengxin(a)
    },
    upload(a,b){
      if(b!==''){return this.$message({message: '只能上传一次',type: 'warning'})}
      if(this.btnwait){return this.$message({message: '操作太频繁,请稍后',type: 'warning'})}
      // this.$router.push('/user/2-3/' + a)
      window.open('/user/2-3/' + a)
      // this.shanghcuanbtn=true
      // this.indent_num=a
    },
    beforeAvatarUpload() {
      this.loading = true;
      this.token = localStorage.getItem('access_token')
      this.shanghcuanbtn = false
    },
    //删除订单
    oderCancel(a, b) {
      if(this.btnwait){return this.$message({message: '操作太频繁,请稍后',type: 'warning'})}
      this.cancel_status = b;
      this.cancel_indent = a;
      this.dialogVisible = true;
      console.log(a,b)
    },
    istrueshanchu(a,b){              //未付款删除订单
      if(this.btnwait){return this.$message({message: '操作太频繁,请稍后',type: 'warning'})}
      this.btnwait = true
      if(b == 0){
        this.$axios.post('/deleteIndentBeforePayment',{indent_num: a},{ headers: { Authorization: "Bearer" + localStorage.getItem('access_token') } }).then(res=>{
          this.$message({message: '删除成功',type: 'success'})
          this.gengxin_status+=1
          this.loading = false;
          this.btnwait = false
        }).catch(err =>{
          this.$message.error('失败:'+err.response.data.message)
          this.loading = false;
          this.btnwait = false
        })
      }else{this.$message.error('订单状态错误');this.btnwait = false}
    },
    istrueCancal() {
      if(this.btnwait){return this.$message({message: '操作太频繁,请稍后',type: 'warning'})}
      this.btnwait = true
      setTimeout(()=>{
        this.btnwait = false
      },3000)
      this.dialogVisible = false;
      this.loading = true;
      if (this.$store.state.userdata.identity !== 1) {
        return console.log(
          "用户身份错误" + this.$store.state.userdata.identity
        );
      }
      // =====================调用 * 待付款,待接单 * 转态下取消订单接口=============================
      if (this.cancel_status == 1) {
        this.$axios
          .post(
            "/acceptIndentBeforeCancel",
            {
              indent_num: this.cancel_indent,
              cancel_cause: this.cancel_cause
            },
            { headers: { Authorization: "Bearer" + localStorage.getItem("access_token") } }
          )
          .then(res => {
            this.$message({message: '取消成功',type: 'success'})
            this.gengxin_status+=1
            this.loading = false;
          })
          .catch(err => {
            this.$message.error('失败:'+err.response.data.message)
            this.loading = false;
          });
      } else if (this.cancel_status == 4) {
        // =======================交易中广告主取消订单==================
        this.$axios
          .post(
            "/inTransactionBuyerCancel",
            {
              indent_num: this.cancel_indent,
              cancel_cause: this.cancel_cause
            },
            { headers: { Authorization: "Bearer" + localStorage.getItem("access_token") } }
          )
          .then(res => {
            this.$message({message: '取消成功',type: 'success'})
            this.gengxin_status+=1
            this.loading = false;
          })
          .catch(err => {
            this.$message.error('失败:'+err.response.data.message)
            this.loading = false;
          });
      } else {
        this.loading = false;
        this.$message.error("订单状态错误" + this.cancel_status)
      }
    },
    buyerConfirmComplete(a) {
      //买家(广告主)确定订单完成
      if(this.btnwait){return this.$message({message: '操作太频繁,请稍后',type: 'warning'})}
      this.btnwait = true
      this.loading = true;
      this.$axios
        .post(
          "/buyerConfirmComplete",
          {
            indent_num: a
          },
          { headers: { Authorization: "Bearer" + localStorage.getItem("access_token")} }
        )
        .then(res => {
          this.$message({message: '确定成功',type: 'success'})
          this.gengxin_status+=1
          this.loading = false;
          this.btnwait = false
        })
        .catch(err => {
          this.loading = false;
          this.btnwait = false
        });
    },
    indentPayment(a) {
      //广告主确认付款
      if(this.btnwait){return this.$message({message: '操作太频繁,请稍后',type: 'warning'})}
      this.btnwait = true
      this.loading = true;
      this.istruefukuan = false;
      this.$axios
        .post(
          "/indentPayment",
          { indent_num: a },
          { headers: { Authorization: "Bearer" + localStorage.getItem("access_token")} }
        )
        .then(res => {
          this.$message({message: '付款成功',type: 'success'})
          this.gengxin_status+=1
          this.loading = false
          this.btnwait = false
        })
        .catch(err => {
          this.$message.error('付款失败:'+err.response.data.message)
          this.btnwait = false
           if(err.response.data.message=='钱包余额不足'){
            return this.$router.push('/user/3-2')
          }
          this.loading = false;
        });
    },
    achievements_file(a) {
      let href = this.indentdata.data[a].achievements_file;
      if (href == "") {
        return this.$message({message: '媒体主还未上传',type: 'warning'})
      }
      window.open(this.$store.state.header_img + href);
    }
  },
   watch: {
    gengxin_status: function(){
      this.gengxin()
    }
  },
};
</script>

<style scoped>
.noindent{
  height: 360px;
  padding: 162px 0 0 337px;
}
.noindent div{
  padding: 5px 18px;
  font-size: 14px;
  width: 106px;
  margin-top: 15px;
  cursor: pointer;
  color: #fff;
  background-color: #DE0D0D;
  border-radius: 3px;
}
.fenye{
    padding: 20px 300px;
}
/* 遮罩层样式 */
.el-dialog__header {
  background-color: #f8f7ff;
  padding-top: 13px;
}
.el-dialog__title {
  font-size: 16px;
}
/* 联系客服按钮 */
.lianxi {
  margin: 10px 30px;
}
.Order {
  background-color: #fff;
  color: #666;
  font-size: 14px;
  min-height: 625px;
}
.Orderheader {
  height: 53px;
}
.Orderheader p {
  float: left;
  height: 52px;
  font-size: 16px;
  line-height: 52px;
  padding: 0 11px;
  margin: 0 16px;
  color: #888;
  cursor: pointer;
}
p.active {
  border-bottom: 2px #5141ed solid;
}
.Orderth {
  height: 36px;
  line-height: 34px;
  font-size: 14px;
  text-align: center;
  background-color: #f8f7ff;
  border-top: 1px solid #d2d2d2;
  border-bottom: 1px solid #d2d2d2;
}
.Orderlist {
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(210, 210, 210, 1);
  margin-top: 30px;
  color: #666;
  position: relative;
}
.Orderlistcontent {
  height: 122px;
}
.Orderlist .listheader {
  background-color: #f8f7ff;
  height: 36px;
  line-height: 34px;
  border-bottom: 1px solid #d2d2d2;
  padding-left: 22px;
  font-size: 14px;
}
.Orderlistcontent .el-row > div {
  height: 122px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.Orderlistcontent .el-row > div:nth-child(1) {
  flex-direction: row;
}
.Orderlistcontent .el-row .el-col img {
  margin-right: 20px;
}
.Orderlist > div.selectbtn {
  position: absolute;
  min-width: 98px;
  bottom: 0px;
  right: 60px;
  height: 120px;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
}
.selectbtn >p{
  text-align: center;
  margin-top: 5px;
  cursor: pointer;
}
.shopname {
  font-size: 16px;
  color: #242424;
  font-weight: 400;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.Orderlist > div.selectbtn  p{
  padding: 5px 7px;
  margin-bottom: 5px;
  background-color: #5141ed;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  text-align: center;
}
.selectbtn span{
  display: block;
  padding: 5px 7px;
  margin-bottom: 5px;
  color: #666;
}
.Orderlist > div.selectbtn p.quxiao{
  background-color: #DE0D0D
}
.shopname span {
  display: inline-block;
  padding: 3px 8px;
  background-color: #5141ed;
  color: #fff;
  font-size: 12px;
  border-radius: 3px;
  margin-right: 5px;
}
.shanchuanbyn{
  padding: 8px 10px;
  margin-top: 10px;
  background-color: #5141ed;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
}
</style>
