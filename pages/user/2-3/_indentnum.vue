<template>
    <div class="banxin"> 
        <div class="usercontentheader">
            <div class="actived">我的消息</div>
            <el-button class="fr lianxi" type="primary" @click="kefu">联系客服</el-button>
        </div>
        <div class="up_c">
            <!-- <div class="up_citem">
                <div>媒体名称:</div>
                <div>中华国际网</div>
            </div> -->
            <div class="up_citem">
                <div>上传文档:</div>
                <div>
                    <el-upload
                        class="upload-demo"
                        :action="$store.state.imgcodehost+'/uploadFile'"
                        multiple
                        :headers="{'Authorization':'Bearer'+ $store.state.token}"
                        :data="{upload_type:'indent_word'}"
                        name="file"
                        :on-success="handleAvatarSuccess"
                        :show-file-list="false"
                        :before-upload="beforeAvatarUpload"
                    >
                        <p class="shanchuanbyn">上传资料</p>
                    </el-upload>
                    <p class="textup">1.上传资料，仅允许上传一次,不允许修改。</p>
                    <p class="textup">2.上传资料仅支持doc,docx,和rar,zip格式的压缩文件</p>
                    <p class="textup">3.多个商品，请将多个对应的word文档放入压缩包中上传。</p>
                </div>
            </div>
            <div class="up_citem">
                <div><span class="red">*</span> 客户名称:</div>
                <div><el-input v-model="kehuname" maxlength="10" placeholder="填写客户姓名"></el-input></div>
            </div>
            <div class="up_citem">
                <div><span class="red">*</span>标题:</div>
                <div><el-input v-model="title" maxlength="30" placeholder="标题字数建议16-24个字。"></el-input></div>
            </div>
            <div class="up_citem">
                <div>稿件转载链接:</div>
                <div>
                    <el-input v-model="link" maxlength="200" placeholder="例如：https://www.meijietu.cn/information/5"></el-input>
                    <p class="textup">若填写稿件链接，则以稿件链接方式发布。</p>
                </div>
            </div>
            <div class="up_citem">
                <div>备注:</div>
                <div><el-input v-model="remarks" type="textarea" maxlength="200" resize="none" placeholder="例如：文章图片需居中或图片下备注，小标题加粗等。"></el-input></div>
            </div>
            <p class="tishi"><span class="red">* </span> 号为必填项</p>
            <el-button type="primary" class="btn" @click="btn">完成</el-button>
        </div>
    </div>
</template>
<script>
export default {
    layout: 'user',
    data() {
        return {
            kehuname:'',
            title:'',
            link:'',
            remarks:'',
            demand_file:'',
        }
    },
    methods: {
        kefu(){
            window.open('https://wpa.qq.com/msgrd?v=3&uin='+JSON.parse(localStorage.getItem('salesman')).salesman_qq_ID+'&site=qq&menu=yes') 
        },
        handleAvatarSuccess(a){
            console.log(a)
            this.demand_file = a.data.path
            this.$message({message: '上传文件成功',type: 'success'})
        },
        beforeAvatarUpload(){
            
        },
        btn(){
            if(this.title === ''||this.kehuname === ''){
                return this.$message.error('有必填信息未填')
            }
            console.log(this.$route.path.split('/').reverse()[0])
            this.$axios.post('/addDemandFile',{
                indent_num: this.$route.path.split('/').reverse()[0],
                demand_file: this.demand_file,
                demand_name: this.kehuname,
                demand_title: this.title,
                demand_link: this.link,
                demand_remark: this.remarks,
            },{ headers: { Authorization: "Bearer" +this.$store.state.token}}).then(res => {
                this.$message({message: '提交成功',type: 'success'})
            })
        },
    },
    mounted() {

    },
}
</script>
<style scoped>
.banxin{
    /* width: 1200px;
    margin: 0 auto; */
    background-color: #fff;
    padding-bottom: 100px
}
.usercontentheader{
    height: 55px;
    line-height: 55px;
    text-align: center;
    border-bottom: 1px solid #888;
}
.usercontentheader div{
    height: 54px;
    margin: 0 20px;
    padding: 0 12px;
    float: left;
    color: #666;
    cursor: pointer;
}
.lianxi{
    margin:  12px 20px;
}
.up_c{
    padding-top: 20px
}
.up_citem{
    overflow: hidden;
    margin: 16px 0;
}
.up_citem > div:nth-child(1){
    width: 200px;
    float: left;
    text-align: right;
    margin-right: 20px;
}
.up_citem > div:nth-child(2){
    width: 480px;
    float: left;
}
.textup{
    color: #DE0D0D;
    font-size: 12px;
    margin: 10px 0;
}
.shanchuanbyn{
    font-size: 14px;
  padding: 8px 26px;
  background-color: #5141ed;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
}
.btn{
    margin: 16px 0 0 221px;
}
.tishi{
    margin: 10px 221px;
    font-size: 14px;
}
</style>