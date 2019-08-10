<template>
  <div class="usercontent">
    <div class="usercontentheader">
      <div :class="!isproposal?'actived':''" @click="isproposal=false">我要投诉</div>
      <div :class="isproposal?'actived':''" @click="isproposal=true">我要建议</div>
      <el-button class="fr lianxi" type="primary">联系客服</el-button>
    </div>
    <div class="proposal" v-show="isproposal">
      <div class="rowlist">
        <div>投诉内容:</div>
        <div>
          <el-input type="textarea" :rows="4" resize="none" placeholder="填写您遇到的问题给我们" v-model="textarea"></el-input>
        </div>
      </div>
      <div class="rowlist">
          <div>您的姓名:</div>
          <div><el-input v-model="input" placeholder="请填写您的姓名"></el-input></div>
      </div>
       <div class="rowlist">
          <div>您的电话:</div>
          <div><el-input v-model="input" placeholder="请填写您的电话"></el-input></div>
      </div>
      <el-button style="width:506px;margin:10px 0 0 43px" type="primary">提交投诉</el-button>
    </div>
    <div class="proposal" v-show="!isproposal">
      <div class="rowlist">
        <div>建议内容:</div>
        <div>
          <el-input type="textarea" :rows="4" resize="none" placeholder="填写您遇到的问题给我们" v-model="textarea"></el-input>
        </div>
      </div>
      <div class="rowlist">
          <div>您的姓名:</div>
          <div><el-input v-model="input" placeholder="请填写您的姓名"></el-input></div>
      </div>
       <div class="rowlist">
          <div>您的电话:</div>
          <div><el-input v-model="input" placeholder="请填写您的电话"></el-input></div>
      </div>
      <el-button style="width:506px;margin:10px 0 0 43px" type="primary">提交建议</el-button>
    </div>
  </div>
</template>
<script>
import { gettoken } from "@@/assets/commen.js";
export default {
  layout: "user",
  data() {
    return {
        isproposal: false,
        test: "",
        textarea:'',
        input:'',
    };
  },
  mounted() {}
};
</script>
<style scoped>
.lianxi {
  margin: 10px 30px;
}
.rowlist >div {
    float: left;
}
.rowlist{
    overflow: hidden;
    margin: 0 0 30px 0
}
.rowlist >div:nth-child(1){
    padding: 10px 15px 0 40px;
}
.rowlist > div:nth-child(2){
    width: 432px;
}
.proposal{
    height: 570px;
    font-size: 14px;
    padding-top: 40px;
}
</style>
