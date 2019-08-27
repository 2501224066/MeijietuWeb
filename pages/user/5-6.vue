<template>
    <div>
        <div class="applyheader">
            <div>批量入驻媒体</div>
        </div>
        <div class="user_c">
            <el-button type="primary" icon="el-icon-download" @click="down">下载模板</el-button>
             <el-button type="primary" icon="el-icon-upload2" @click="uploadbtn">上传Excel表格</el-button>
             <p style="margin-top:100px">1.上传前请下载Excel模板,请参照模板上传</p>
             <p>2.目前只有软文营销可以批量上传</p>
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
            upload:false,
            access_token: '',
        }
    },
    methods: {
        down(){
            this.$axios('/softArticleBatchExcel').then(res =>{
                window.open(this.$store.state.header_img + res.data.data.path)
            })
        },
        upsuccess(res){
            console.log(res.data.path)
            this.$axios.post('/goodsBatchAdd',{
                excel_path: res.data.path,
                modular_id:5,
                theme_id:9
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
  width: 120px;
  height: 54px;
  margin-left: 20px;
  padding: 0 10px;
  line-height: 54px;
  border-bottom: 2px #5141ed solid;
}
</style>