<template>
    <div class="usercontent">
        <div class="usercontentheader">
            <div class="actived" >提现申请</div>
            <!-- <div :class="{actived:step==2}" @click="step=2">提现账户设置</div> -->
            <!-- <div :class="{actived:step==3}" @click="step=3">提现记录</div> -->
            <!-- <div :class="{actived:step==4}" @click="step=4">实名认证</div> -->
        </div>
        <div class="twocolumns" v-if="realname==2" v-loading="loading">
            <div >
                <div class="columnsline">
                    <div class="columnsleft">开户银行:</div>
                    <div class="columnsright">{{enterpriseInfo.bank_deposit}}</div>
                </div>
                <div class="columnsline">
                    <div class="columnsleft">开户支行:</div>
                    <div class="columnsright">{{enterpriseInfo.bank_branch}}</div>
                </div>
                <div class="columnsline">
                    <div class="columnsleft">开户姓名公司名:</div>
                    <div class="columnsright">{{enterpriseInfo.enterprise_name}}</div>
                </div>
                <div class="columnsline">
                    <div class="columnsleft">银行卡号:</div>
                    <div class="columnsright">{{enterpriseInfo.bank_card}}</div>
                </div>
                <div class="columnsline">
                    <div class="columnsleft">提现金额:</div>
                    <div class="columnsright"><el-input v-model="input" placeholder="请输入提现金额"></el-input></div>
                </div>
                <!-- <div class="columnsline">
                    <div class="columnsleft">短线验证码:</div>
                    <div class="columnsright">
                        <el-input v-model="phonecode" placeholder="请输入验证码"></el-input>
                        <el-button @click="checkImgCode" :disabled="iswait">{{iswait?'等待'+waittime+'s':'发送验证码'}}</el-button>
                    </div>
                </div> -->
                <div class="columnsline">
                    <div class="columnsleft"></div>
                    <div class="columnsright">
                        <el-button type="primary" class="tixian" @click="extract">提现</el-button>
                        <p class="smallfont">单位元,最低100元</p>
                    </div>
                </div>
            </div>
        </div>
            <div class="twocolumns" v-if="realname==1" v-loading="loading">
            <div >
                <div class="columnsline">
                    <div class="columnsleft">姓名:</div>
                    <div class="columnsright">{{peopleInfo.truename}}</div>
                </div>
                <div class="columnsline">
                    <div class="columnsleft">卡户银行:</div>
                    <div class="columnsright">{{peopleInfo.bank_deposit}}</div>
                </div>
                <div class="columnsline">
                    <div class="columnsleft">开户支行:</div>
                    <div class="columnsright">{{peopleInfo.bank_branch}}</div>
                </div>
                <div class="columnsline">
                    <div class="columnsleft">银行卡号:</div>
                    <div class="columnsright">{{peopleInfo.bank_card}}</div>
                </div>
                <div class="columnsline">
                    <div class="columnsleft">提现金额:</div>
                    <div class="columnsright"><el-input v-model="input" placeholder="请输入提现金额"></el-input></div>
                </div>
                <div class="columnsline">
                    <div class="columnsleft"></div>
                    <div class="columnsright">
                        <el-button type="primary" class="tixian" @click="extract">提现</el-button>
                        <p class="smallfont">单位元,最低100元</p>
                    </div>
                </div>
            </div>
            <!-- <div v-show="step == 2">
                <div class="columnsline">
                    <div class="columnsleft">开户银行:</div>
                    <div class="columnsright"><el-input v-model="input" placeholder="请输入开户银行"></el-input></div>
                </div>
                <div class="columnsline">
                    <div class="columnsleft">开户支行:</div>
                    <div class="columnsright"><el-input v-model="input" placeholder="请输入开户支行"></el-input></div>
                </div>
                <div class="columnsline">
                    <div class="columnsleft">开户姓名/公司名:</div>
                    <div class="columnsright"><el-input v-model="input" placeholder="请输入开户姓名/公司名"></el-input></div>
                </div>
                <div class="columnsline">
                    <div class="columnsleft">银行卡号:</div>
                    <div class="columnsright"><el-input v-model="input" placeholder="请输入银行卡号"></el-input></div>
                </div>
                <div class="columnsline">
                    <div class="columnsleft">提现金额:</div>
                    <div class="columnsright"><el-input v-model="input" placeholder="请输入提现金额"></el-input></div>
                </div>
                <div class="columnsline">
                    <div class="columnsleft">短信验证码:</div>
                    <div class="columnsright">
                        <el-input v-model="phonecode" placeholder="请输入手机验证码"></el-input>
                         <el-button @click="checkImgCode" :disabled="iswait">{{iswait?'等待'+waittime+'s':'发送验证码'}}</el-button>
                    </div>
                </div>
                 <div class="columnsline">
                    <div class="columnsleft">图片验证码:</div>
                    <div class="columnsright">
                        <el-input v-model="phonecode" placeholder="请输入图片验证码"></el-input>
                        <div class="fr" @click="shuaxin" style="margin-left:10px"><img :src="img_code"></div>
                    </div>
                </div>
                <div class="columnsline">
                    <div class="columnsleft"></div>
                    <div class="columnsright">
                        <el-button type="primary" class="tixian">保存</el-button>
                        <p class="smallfont">单位元,最低100元</p>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
import { gettoken } from "@@/assets/commen.js";
export default {
    layout:'user',
    data() {
        return {
            step: 1,
            loading:true,
            phonecode:'',
            input:'',
            iswait:false,
            waittime:60,
            img_token:'',           //图片验证TOKEN
            img_code:'',
            enterpriseInfo:'',       //企业实名信息
            peopleInfo:''            //个人实名认证信息
        }
    },
    methods: {
        checkImgCode() {
            this.$axios
              .get("/smsVerifCode", {
                params: {
                  phone: this.$store.state.userdata.phone,
                  code_type: "checkPhone"
                }
              })
              .then(result => {
                // ========================验证码发送,再次发送需要等待60s===========================
                this.iswait = true;
                var mytime = setInterval(() => {
                  if (this.waittime == 0) {
                    this.iswait = false;
                    this.waittime = 60;
                    clearInterval(mytime);
                  }
                  this.waittime -= 1;
                }, 1000);
                this.$message({
                    message: '短信已发送,请等待',
                    type: 'success'
                })
                //====================================================================================
              })
              .catch(error => {
                this.$message.error(error.response.data.message)
              });
        },
        extract(){
            gettoken().then(val=>{
                return this.$axios.post('/extract',{money:this.input},{headers: {Authorization: "Bearer" +val}})
            }).then(res=>{
                this.$message({message: '成功',type: 'success'})
            }).catch(err=>{
                this.$message.error('失败: '+err.response.data.message)
            })
        },
        shuaxin(){
            this.$axios('/getImgCode').then(res=>{
                this.img_token = res.data.data.img_token
                this.img_code = res.data.data.img_code
            })
        }
    },
    mounted() {
        // if(this.$store.state.userdata.realname_status==0){return this.}
        this.$axios('/getImgCode').then(res=>{
            this.img_token = res.data.data.img_token
            this.img_code = res.data.data.img_code
        })
        if(this.realname==2){
            gettoken().then(val =>{
                return this.$axios.post('/realnameEnterpriseInfo',{},{ headers: { Authorization: "Bearer" + val } })
            }).then(res=>{
                this.enterpriseInfo= res.data.data
                this.loading=false
            }).catch(err =>{
                this.$message.error(err.response.data.message)
                this.loading = false
            })
        }else if(this.realname==1){
            gettoken().then(val =>{
                return this.$axios.post('/realnamePeopleInfo',{},{ headers: { Authorization: "Bearer" + val } })
            }).then(res=>{
                this.peopleInfo= res.data.data
                this.loading=false
            }).catch(err =>{
                this.$message.error(err.response.data.message)
                this.loading = false
            })
        }
    },
    computed: {
        realname:function(){
            return this.$store.state.userdata.realname_status
        }
    },
}
</script>

<style scoped>
.el-input{
    width: 206px;
}
.codebtn{
    width:120px;
    height:38px;
    border:1px solid rgba(136,136,136,1);
    border-radius:3px;
}
.tixian{
    width:168px;
    height:38px;
    margin: 10px 0;
}
.smallfont{
    font-size: 12px;
    color: #888;
    padding-bottom: 30px;
}
</style>
