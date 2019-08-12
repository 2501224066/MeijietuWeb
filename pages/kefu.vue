<template>
    <div>
       <div class="loginform">
           <div class="logintop">
               <div class="blue bold hand">客服账户登陆</div>
           </div>
           <div class="logincontent">
               <el-input v-model="phone" maxlength="13" placeholder="请输入手机号" style="marginTop:30px"></el-input>
               <el-input v-model="password" maxlength="16" show-password placeholder="请输入密码"></el-input>
                <div class="tupianyanzheng">
                    <el-input v-model="photocheck" maxlength="6" placeholder="请输入图片验证码"></el-input>
                    <div class="photocheckd cr" @click="shuaxinyanzheng"><img :src="imgCode"></div>
               </div>
               <div class="zidonglongin">
                   <el-checkbox v-model="checked" size="mini"></el-checkbox><span class="zidongbtn">自动登陆</span>
               </div>
               <el-button class="loginbtn" :disabled="loging" @click="login"><span v-show="loging">正在</span>登陆 <i v-show="loging" class="el-icon-loading"></i> </el-button>
           </div>
        </div> 
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%">
            <span>{{text}}</span>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import {gettoken} from '@@/assets/commen.js'
export default {
    layout:'login',
    data() {
        return {
            loging:false,
            iswait:false,
            waittime:60,
            dialogVisible:false,
            text:'图片验证码错误',
            yanzhengphoto:'',
            phone:'',
            phonecheck:'',
            photocheck:'',
            checked: true,
            phototoken:'234662',
            imgCode:'',
            password:'',
        }
    },
    methods: {
        login(){
            this.loging = true
                this.$axios.post('/signIn',{
                    phone:this.phone,
                    password:this.password,
                    imgCode:this.photocheck,
                    imgToken:this.phototoken
                }).then((r)=>{
                    let res = r.data
                    if(res.data.access_token){
                        localStorage.setItem('access_token',res.data.access_token)
                        this.$axios.post('/me',{},{headers:{'Authorization':'Bearer'+res.data.access_token}}).then(result => {
                            localStorage.setItem('kefu',JSON.stringify(result.data.data))
                            if(result.data.data.identity==3){return this.$router.push('/salesman')}
                            alert(result.data.data.identity,'result.data.data.identity')
                            this.loging = false
                        })
                    }else{
                         this.shuaxinyanzheng()
                         this.loging = false
                    }
                }).catch((err)=>{
                    this.text = err.response.data.message
                    this.dialogVisible = true
                    this.shuaxinyanzheng()
                    this.loging = false
                })
        },
        shuaxinyanzheng(){
            this.$axios('/getImgCode').then(res =>{
                this.imgCode = res.data.data.img_code
                this.phototoken = res.data.data.img_token
            })
        }
    },
    mounted() {
        window.document.body.style.background = '#fff'
        this.$axios('/getImgCode').then(res =>{
            this.imgCode = res.data.data.img_code
            this.phototoken = res.data.data.img_token
        })
    },
}
</script>

<style lang="css" scoped>
.hand:hover{
    cursor: pointer;
}
.loginform{
    position: relative;
    width:420px;
    height:400px;
    background:rgba(255,255,255,1);
    box-shadow:0px 4px 8px 0px rgba(0, 0, 0, 0.11);
    border-radius:10px;
    margin: 92px auto;
}
 .logincontent .phonecheckuang.el-input{
    width:240px;
    height:38px;
    margin-right: 0;
}
.loginform .logintop{
    width: 100%;
    height: 58px;
    border-bottom: 1px #d2d2d2 solid;
    font-weight:300;
    color:rgba(36,36,36,1);
}
.loginform .logintop div:nth-child(1){
    display: inline-block;
    margin: 20px 0;
    padding: 0 50px;
    font-size:18px;
}
.red{
    font-weight:400;
    color:rgba(222,13,13,1);
}
.loginform .logintop div:nth-child(2){
    display: inline-block;
    margin: 20px 38px;
    font-size:18px;
}
.logincontent .el-input {
    width:360px;
    height:38px;
    border-radius:4px;
    margin: 16px 38px;
}
.logincontent .tupianyanzheng .el-input{
    width:240px;
    height:38px;
    border-radius:4px;
}
.photocheckd{
    width: 106px;
    height: 38px;
    position: absolute;
    left: 284px;
    top: 228px;
}
.phonecheckdp{
    width: 106px;
    height: 38px;
    position: absolute;
    left: 284px;
    top: 157px;
}
.zidonglongin{
    margin: 0 38px;
    font-size:12px;
    font-weight:300;
    color:rgba(36,36,36,1);
}
.fright{
    margin-left: 40px;
    float: right;
}
.zidongbtn{
    margin-left: -23px;
    margin-right: 20px;
}
.loginbtn.el-button{
    width:360px;
    height:38px;
    background:#5141ED;
    border-radius:3px;
    color: #fff;
    margin: 25px 38px;
}
</style>