<template>
    <div>
        <div v-if="status ==1">
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
                    <input type="text" v-model="password" placeholder="请输入密码">
                </div>
                <div>
                    <input type="text" v-model="imgma" placeholder="图形验证码">
                    <img @click="shuaxin" class="imgCode" :src="imgCode" alt="验证码">
                </div>
            </div>
            <div class="btn_l" @click="login">
                登录
            </div>
            <div> 
                <span class="forgot" @click="forgot">忘记密码?</span>
                <span class="zhuce" @click="zhuce">注册账号</span>
            </div>
        </div> 
    </div>
</template>
<script>
export default {
    layout: 'phone',
    data() {
        return {
            status: 1,
            phone:'',
            imgCode: '',
            password:'',
            imgma:'',
            imgToken: ''
        }
    },
    methods: {
        login(){
            console.log(this.imgma)
            this.$axios.post('/signIn',{
                phone:this.phone,
                password:this.password,
                imgCode: this.imgma,
                imgToken: this.imgToken,
            }).then(res => {
                localStorage.setItem('access_token',res.data.data.access_token)
                this.$axios.post('/me',{},{ headers: { Authorization: "Bearer" + res.data.data.access_token } }).then( result => {
                    localStorage.setItem('userdata', JSON.stringify(result.data.data))
                })
                this.$router.push('/m')
            }).catch(err =>{
                this.$message.error('失败: ' + err.response.data.message)
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
.mheader{
    margin: 18px;
    font-size: 18px;
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
.input_l div{
    height: 60px;
    line-height: 60px;
    padding: 10px 0;
    border-bottom: 1px solid #C1C1C1;
}
.imgCode{
    float: right;
    display: block;
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
</style>