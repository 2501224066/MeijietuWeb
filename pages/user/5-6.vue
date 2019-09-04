<template>
    <div>
        <div class="applyheader">
            <div :class="select == 1?'select':'cr'" @click="select=1">软文批量入驻</div>
            <div :class="select == 2?'select':'cr'" @click="select=2">自媒体批量入驻</div>
        </div>
        <div class="user_c">
            <el-button type="primary" icon="el-icon-download" @click="down">下载{{select == 1?'软文':'自媒体'}}模板</el-button>
             <el-button type="primary" icon="el-icon-upload2" @click="uploadbtn">上传Excel表格</el-button>
             <p style="margin-top:100px">1.上传前请下载Excel模板,请参照模板上传</p>
             <p>2.目前只有软文和自媒体营销可以批量上传</p>
             <p>3.上传格式.xlsx</p>
        </div>
        <el-dialog
            title="上传文件"
            :visible.sync="upload"
            width="30%">
            <el-upload
                class="upload-demo"
                :action="$store.state.imgcodehost + '/uploadFile'"
                name="file"
                :data="{upload_type:'goods_batch'}"
                :headers="{'Authorization':'Bearer'+access_token}"
                :on-success="upsuccess">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只支持xlsx文件,上传前请先下载Excel模板</div>
            </el-upload>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="upload = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import {gettoken} from '@@/assets/commen.js'
export default {
    layout: 'user',
    data() {
        return {
            select: 1,
            upload:false,
            access_token: '',
        }
    },
    methods: {
        down(){
            if(this.select == 1){
                this.$axios('/softArticleBatchExcel').then(res =>{
                    window.open(this.$store.state.header_img + res.data.data.path)
                })
            }else {
                this.$axios('/selfMediaBatchExcel').then(res =>{
                    window.open(this.$store.state.header_img + res.data.data.path)
                })
            }
           
        },
        upsuccess(res){
            let theme_id ,modular_id
            this.select == 1 ?theme_id = 9 : theme_id = ''
            this.select == 1 ?modular_id = 5 : modular_id = 4
            this.$axios.post('/goodsBatchAdd',{
                excel_path: res.data.path,
                modular_id:modular_id,
                theme_id: theme_id
            },{ headers: { Authorization: "Bearer" + localStorage.getItem('access_token') } }).then( result => {
                this.$message({message: '上传成功',type: 'success'})
            })
        },
        uploadbtn(){
            this.upload = true
            this.access_token = localStorage.getItem('access_token')
        },

    },
}
</script>
<style scoped>
.user_c{
    padding: 40px
}
.user_c p {
    color: red;
    font-size: 14px;
    margin-bottom: 10px;
}
.applyheader {
  height: 55px;
  border-bottom: 1px #d2d2d2 solid;
}
.applyheader > div {
  width: 136px;
  height: 54px;
  margin-left: 20px;
  text-align: center;
  padding: 0 10px;
  line-height: 54px;
  float: left;
}
.applyheader .select{
    border-bottom: 2px #5141ed solid;
    position: relative;
}
.applyheader .select::before{
    content: '';
    border: 5px transparent solid;
    border-bottom: 5px #5141ED solid;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-3px);
}
</style>