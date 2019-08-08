<template>
    <div class="white" v-loading='loading'>
        <div class="certiheader">{{userdata==1?'个人实名认证':'企业实名认证'}}</div>
        <div class="certicontent" v-if="userdata == 1">
            <div>
                <div class="certleft">真实姓名 :</div>
                <div class="certright">{{realnamedata.truename}}</div>
            </div>
            <div>
                <div class="certleft">身份证号 :</div>
                <div class="certright">{{realnamedata.identity_card_ID}}</div>
            </div>
            <div>
                <div class="certleft">绑定手机 :</div>
                <div class="certright">{{realnamedata.bank_band_phone}}</div>
            </div>
            <div>
                <div class="certleft">开户银行 :</div>
                <div class="certright">{{realnamedata.bank_deposit}}</div>
            </div>
            <div>
                <div class="certleft">开户支行 :</div>
                <div class="certright">{{realnamedata.bank_branch}}</div>
            </div>
            <div>
                <div class="certleft">开户地区 :</div>
                <div class="certright">{{realnamedata.bank_where}}</div>
            </div>
            <div>
                <div class="certleft">银行卡号 :</div>
                <div class="certright">{{realnamedata.bank_card}}</div>
            </div>
        </div>
          <div class="certicontent" v-if="userdata == 2">
            <div>
                <div class="certleft">企业名称 :</div>
                <div class="certright">{{realnamedata.enterprise_name}}</div>
            </div>
            <div>
                <div class="certleft">统一社会信用代码 :</div>
                <div class="certright">{{realnamedata.social_credit_code}}</div>
            </div>
            <div>
                <div class="certleft">绑定手机 :</div>
                <div class="certright">{{realnamedata.bank_band_phone}}</div>
            </div>
            <div>
                <div class="certleft">开户银行 :</div>
                <div class="certright">{{realnamedata.bank_deposit}}</div>
            </div>
            <div>
                <div class="certleft">开户支行 :</div>
                <div class="certright">{{realnamedata.bank_branch}}</div>
            </div>
            <div>
                <div class="certleft">开户地区 :</div>
                <div class="certright">{{realnamedata.bank_where}}</div>
            </div>
            <div>
                <div class="certleft">银行卡号 :</div>
                <div class="certright">{{realnamedata.bank_card}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import {gettoken} from '@@/assets/commen.js'

export default {
    layout:'user',
    data() {
        return {
            loading:true,
            userdata:'',
            realnamedata:'',
        }
    },
    mounted() {
        gettoken().then(val => {
            return this.$axios.post('/me',{},{headers:{'Authorization':'Bearer'+val}}).then(res =>{
            this.userdata = res.data.data.realname_status
            localStorage.setItem('userdata',JSON.stringify(res.data))
            if(this.userdata==1){
                return this.$axios.post('/realnamePeopleInfo',{},{headers:{'Authorization':'Bearer'+val}})
            }else if(this.userdata==2){
                return this.$axios.post('/realnameEnterpriseInfo',{},{headers:{'Authorization':'Bearer'+val}})
            }
        })
        }).then(res => {
            this.realnamedata = res.data.data
            this.loading = false
        }).catch(err => {
            this.loading = false 
        })
        
    },
}
</script>

<style scoped>
.white{
    background-color: #fff;
}
.certiheader{
    height: 55px;
    line-height: 55px;
    padding-left: 30px;
    border-bottom: 1px #D2D2D2 solid;
}
.certicontent{
    height: 540px;
}
.certicontent > div{
    margin-top: 30px;
    display: flex;
}
.certicontent .certleft {
    width: 200px;
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
}
</style>

