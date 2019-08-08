<template>
  <div class="usercontent" v-loading="loading">
    <div class="usercontentheader">
      <div :class="[rechargestep == 1?'actived':'']" @click="rechargestep=1">在线充值</div>
      <div :class="[rechargestep == 3?'actived':'']" @click="rechargestep=3">支付宝充值</div>
      <div :class="[rechargestep == 2?'actived':'']" @click="rechargestep=2">银行转账</div>
    </div>
    <div v-show="rechargestep==1">
      <div class="amount">
        <span style="lineHeight:40px">充值金额 :</span>
        <el-input v-model="amount" placeholder="请输入充值金额" style="width:130px"></el-input>
        <br>
        <el-button type="primary" class="btn" @click="recharge">充值</el-button>
        <p>充值单位: 元</p>
      </div>
    </div>
    <div v-show="rechargestep==3">
      <div class="amount">
        <span style="lineHeight:40px">充值金额 :</span>
        <el-input v-model="amount" placeholder="请输入充值金额" style="width:130px"></el-input>
        <br>
        <el-button type="primary" class="btn" @click="alirecharge">充值</el-button>
        <p>充值单位: 元</p>
      </div>
    </div>
    <div class="zhuanzhang" v-show="rechargestep==2">
      <div class="conitem">
        <div>开户银行：</div>
        <div>武汉农村商业银行中央商务区支行</div>
      </div>
      <div class="conitem">
        <div>银行账号：</div>
        <div>2106 8033 8910 016</div>
      </div>
      <div class="conitem">
        <div>公司名称：  </div>
        <div>武汉中帜云媒网络科技有限公司</div>
      </div>
      <div class="conitem">
        <div>银行行号：  </div>
        <div>4025 2109 0019</div>
      </div>
    </div>
    <div class="tixing">
        <p>充值提醒</p>
        <p>1.每次充值金额不低于100元，您在支付过程中出现的问题随时咨询客服。</p>
        <p>2.目前充值支持网银借记卡、微信支付。</p>
        <p>3..如您需要开具发票,请在订单完成后与客服咨询。</p>
      </div>
  </div>
</template>

<script>
import { gettoken } from "@@/assets/commen.js";
export default {
  layout: "user",
  data() {
    return {
      loading:false,
      amount: "",
      rechargestep: 1
    };
  },
  methods: {
    recharge() {
      this.loading = true
      gettoken()
        .then(val => {
          return this.$axios.post(
            "/lianLianPayRecharge",
            { money: this.amount },
            { headers: { Authorization: "Bearer" + val } }
          );
        })
        .then(res => {
          function post(URL, PARAMS) {
            var temp = document.createElement("form");
            temp.action = URL;
            temp.method = "post";
            temp.target = "_blank";
            temp.style.display = "none";
            for (var x in PARAMS) {
              var opt = document.createElement("textarea");
              opt.name = x;
              opt.value = PARAMS[x];
              temp.appendChild(opt);
            }
            document.body.appendChild(temp);
            temp.submit();
            return temp;
          }
          //调用方法 如
          post(res.data.data.link, res.data.data.post);
          this.loading= false
        }).catch(err => {
          this.loading= false
          alert('失败'+err.response.massage)
        })
    },
    // 支付宝充值
    alirecharge(){
      this.loading = true
      gettoken()
        .then(val => {
          return this.$axios.post(
            "/aliPayRecharge",
            { money: this.amount },
            { headers: { Authorization: "Bearer" + val } }
          );
        })
        .then(res => {
            this.loading= false
            let div = document.createElement('div');
            div.innerHTML = res.data; // html code
            document.body.appendChild(div);
            document.forms['alipay_submit'].submit();
        }).catch(err => {
          this.loading= false
          alert('失败')
        })
    }
  }
};
</script>

<style scoped>
.usercontent{
  height: 622px;
}
.banklogo {
  overflow: hidden;
  padding-top: 10px;
}
.banklogo > div {
  width: 200px;
  height: 50px;
  margin: 30px 0 0 40px;
  background-color: red;
  float: left;
}
.amount {
  padding: 50px 0 70px 40px;
  font-size: 14px;
}
.tixing{
  padding-left: 40px;
  margin-top: 100px;
}
.amount > p,
.tixing > p {
  font-size: 12px;
  color: #888;
  padding-top: 7px;
}
.btn {
  width: 205px;
  height: 40px;
  margin: 24px 0 10px 0;
}
.zhuanzhang{
  padding: 60px;
}
.conitem{
  overflow: hidden;
  margin-bottom: 12px;
}
.conitem > div{
  float: left;
}
</style>
