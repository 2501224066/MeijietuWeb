<template>
    <div class="login_all">
        <div v-if="status == 1">
            <div class="mheader">
                登录
            </div>
            <div class="logo_l">
                <img src="/m/logo_m01.png" alt="媒介兔">
            </div>
            <div class="input_l">
                <div>
                    <input type="text" v-model="phone" placeholder="请输入手机号">
                </div>
                <div>
                    <input type="password"  v-model="password" placeholder="请输入密码">
                </div>
                <div class="imginput">
                    <input type="text" v-model="imgma" placeholder="图形验证码">
                    <img @click="shuaxin" class="imgCode" :src="imgCode" alt="验证码">
                    <p v-if="iserr">失败:{{errmessage}}</p>
                </div>
            </div>
            <div class="btn_l" @click="login">
                登录
            </div>
            <div class="footer_login"> 
                <span class="forgot" @click="forgot">忘记密码?</span>
                <span class="zhuce" @click="zhuce">注册账号</span>
            </div>
        </div> 
        <div v-if="status == 2">
            <div class="mheader"> <span class="el-icon-arrow-left mfanhui" @click="fanhui"></span>忘记密码</div>
            <div class="input_l" style="margin-top:50px">
                <div>
                    <input type="text" v-model="phone_f" placeholder="请输入手机号">
                </div>
                <div style="position: relative">
                    <input type="text" v-model="imgcode_f" placeholder="图形验证码">
                    <img @click="shuaxin" class="imgCode" :src="imgCode" alt="验证码">
                </div>
                <div style="position: relative">
                    <input type="text" v-model="phonecode_f" placeholder="短信验证码">
                    <div :style="iswait_f?'background-color:#c8c9cc':''" class="btnCode" @click="getPhoneCode">获取验证码</div>
                </div>
            </div>
            <div class="btn_l" @click="login_f">
                确定
            </div>
        </div>
        <div v-if="status == 3" style="margin-bottom: 50px;padding-bottom: 20px;">
            <div class="mheader"> <span class="el-icon-arrow-left mfanhui" @click="fanhui"></span>注册</div>
            <div class="selectRole">
                <div :class="selectRole==1?'select_z':''" @click="selectRole=1">广告主</div>
                <div :class="selectRole==2?'select_z':''" @click="selectRole=2">媒体主</div>
            </div>
            <div class="input_l">
                <div>
                    <input type="text" v-model="phone_z" placeholder="请输入手机号">
                </div>
                <div>
                    <input type="password" v-model="password_z" placeholder="请输入密码">
                </div>
                <div>
                    <input type="password" v-model="password_zt" placeholder="请再次输入密码">
                </div>
                <div>
                    <input type="password" v-model="nickname" placeholder="请输入昵称">
                </div>
                <div>
                    <input type="password" v-model="email" placeholder="请输入邮箱">
                </div>
                <div style="position: relative">
                    <input type="text" v-model="imgcode_z" placeholder="图形验证码">
                    <img @click="shuaxin" class="imgCode" :src="imgCode" alt="验证码">
                </div>
                <div style="position: relative">
                    <input type="text" v-model="phonecode_z" placeholder="短信验证码">
                    <div :style="iswait_z?'background-color:#c8c9cc':''" class="btnCode" @click="getPhoneCode_z">获取验证码</div>
                </div>
            </div>
             <div class="btn_l" @click="login_z">
                立即注册
            </div>
        </div>
        <div v-if="status == 4">
             <div class="mheader"> <span class="el-icon-arrow-left mfanhui" @click="fanhui"></span>重置密码</div>
              <div class="input_l" style="margin-top:50px">
                <div>
                    <input type="text" v-model="password_f" placeholder="请输入密码">
                </div>
                 <div>
                    <input type="text" v-model="password_ft" placeholder="请再次输入密码">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {gettoken} from '@@/assets/commen.js'
// import Vue from 'vue'
// import Button from 'vant/lib/button';
// import 'vant/lib/button/index.css';
// Vue.use(Button)
export default {
    layout: 'phone',
    data() {
        return {
            status: 1,
            phone:'',
            imgCode: '',
            password:'',
            imgma:'',
            imgToken: '',
            iserr: false,
            errmessage:'',
            // 忘记密码
            phone_f: '',
            imgcode_f: '',
            iswait_f: false,
            nextToken:'',
            phonecode_f:'',
            // 注册账号
            iswait_z:false,
            phone_z: '',
            imgcode_z: '',
            phonecode_z:'',
            selectRole:1,
            password_z: '',
            password_zt: '',
            email:'',
            nickname:'',
        }
    },
    methods: {
        fanhui(){
            this.status = 1
        },
        login(){
            this.iserr = false
            this.$axios.post('/signIn',{
                phone:this.phone,
                password:this.password,
                imgCode: this.imgma,
                imgToken: this.imgToken,
            }).then(res => {
                localStorage.setItem('access_token',res.data.data.access_token)
                this.$router.push('/m/my')
            }).catch(err =>{
                this.errmessage = err.response.data.message
                this.iserr = true
            })
        },
        shuaxin(){
            this.$axios('/getImgCode').then(res => {
                this.imgCode = res.data.data.img_code
                this.imgToken = res.data.data.img_token
            })
        },
        forgot(){
            this.status = 2
        },
        zhuce(){
            this.status = 3
        },
        // 忘记密码
        getPhoneCode(){
            if(this.iswait_f){return}
            if(this.phone_f ==''||this.imgcode_f == ''){this.$message.error('手机号和验证码不得为空')}
            this.$axios('/checkImgCode',{params:{imgToken:this.imgToken,imgCode:this.imgcode_f}}).then(res =>{}).catch(err => {
                return this.$message.error('验证码输入错误')
            })

            this.$axios('/smsVerifCode',{params:{phone: this.phone_f,code_type:'resetPass'}})
            .then(res => {
                this.$message({message: '短信发送成功,请等待',type: 'success'})
                this.iswait_f = true
            }).catch(err => {
                this.$message.error('失败:' + err.response.data.message)
            })
        },
        login_f(){
            this.$axios.post("/checkPhone", {
                phone: this.phone_f,
                smsCode: this.phonecode_f,
                type: 2
            }).then(res => {
                this.nextToken = res.data.data.nextToken;
                this.status = 4;
            }).catch(err => {
                this.$message.error('失败:'+err.response.data.message)
            });
        },
        // 注册账号
         getPhoneCode_z(){
            if(this.iswait_z){return}
            if(this.phone_z ==''||this.imgcode_z == ''){this.$message.error('手机号和验证码不得为空')}
            this.$axios('/checkImgCode',{params:{imgToken:this.imgToken,imgCode:this.imgcode_z}}).then(res =>{}).catch(err => {
                return this.$message.error('验证码输入错误')
            })

            this.$axios('/smsVerifCode',{params:{phone: this.phone_z,code_type:'resetPass'}})
            .then(res => {
                this.$message({message: '短信发送成功,请等待',type: 'success'})
                this.iswait_z = true
            }).catch(err => {
                this.$message.error('失败:' + err.response.data.message)
            })
        },
        login_z(){
            let identity
            if(this.selectRole ==1){identity=1}
            this.$axios.post("/register", {
                email: this.email,
                password: this.password_z,
                password_confirmation: this.password_zt,
                nickname: this.nickname,
                nextToken: this.nextToken,
                phone: this.phone_z,
                identity: this.radio,
                salesman_id:'',
                agent_domain: 'http://' + document.domain
            }).then(res => {
                this.$message({message: '注册成功',type: 'success'})
                setTimeout(()=>{
                    this.$router.push('/login')
                },1000)
            }).catch(err => {
                this.text = err.response.data.message;
                this.dialogVisible = true;
                this.waitfinsh = false
            });
        }
    },
    mounted(){
        this.$axios('/getImgCode').then(res => {
            this.imgCode = res.data.data.img_code
            this.imgToken = res.data.data.img_token
        })
    }
}
</script>
<style scoped>
.login_all{
    background-color: #fff;
    min-height: 500px;
}
.mheader{
    text-align: center;
    width: 100%;
    font-size: 18px;
    height: 50px;
    line-height: 45px;
    background-color: #fff;
    position: relative;
}
.mfanhui{
    position: absolute;
    font-size: 18px;
    left: 13px;
    top: 14px;
}
input{
    border: none;
}
input:focus{
    border: none;
    outline: none;
}
.logo_l{
    text-align: center;
}
.logo_l img{
    width: 86px;
    height: 86px;
    margin: 20px auto;
}
.input_l{
    padding: 0 30px;
}
.input_l > div{
    height: 60px;
    line-height: 60px;
    padding: 10px 0;
    border-bottom: 1px solid #C1C1C1;
}
.btn_l{
    height: 41px;
    margin: 40px 30px 20px 30px;
    background-color: #5141ED;
    color: #fff;
    text-align: center;
    line-height: 41px;
    font-size: 17px;
    border-radius: 5px;
}
.forgot{
    font-size: 12px;
    color: #888;
    float: left;
    margin-left: 30px;
}
.zhuce{
    font-size: 12px;
    color: red;
    float: right;
    margin-right: 30px;
}
.imginput{
    position: relative;
}
.imginput p{
    font-size: 14px;
    height: 20px;
    line-height: 20px;
    color: red;
}
.imgCode{
   position: absolute;
    right: 0;
    top: 10px;
}
.footer_login{
    overflow: hidden;
    padding-bottom: 50px;
}
.imgforgot{
    position: relative;
}
/* 忘记密码 */
.btnCode{
    width: 75px;
    height: 28px;
    font-size: 11px;
    line-height: 28px;
    position: absolute;
    right: 0;
    top: 18px;
    background-color: #7769F9;
    color: #fff;
    text-align: center;
    border-radius: 5px;
}
.selectRole{
    width: 70%;
    height: 50px;
    padding-top: 22px;
    margin: 20px auto;
    text-align: center;
    color: #888;
}
.selectRole div{
    float: left;
    width: 50%;
}
.selectRole div.select_z{
    color: #5141ED;
    position: relative;
}
.select_z::before{
    content: '';
    width: 20px;
    height: 2px;
    border-radius: 2px;
    background-color: #5141ED;
    position: absolute;
    left: 43%;
    bottom: -10px;
}
</style>