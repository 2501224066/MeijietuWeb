<template>
    <div class="usercontent">
        <div class="usercontentheader">
            <div class="actived">我的消息</div>
        </div>
        <div class="userc_titel com">
            <!-- <div>
                 <el-checkbox v-model="checked"></el-checkbox>
            </div> -->
            <div>标题</div>
            <div>内容消息</div>
            <div>时间</div>
        </div>
        <div class="userc_c com" v-for="(item,index) in xiaoxiData.data" :key="index">
            <!-- <div>
                <el-checkbox-group v-model="checkList">
                    <el-checkbox :label="index"></el-checkbox>
                </el-checkbox-group>
            </div> -->
            <div>系统消息</div>
            <div>{{item.content}}</div>
            <div>{{item.release_time}}</div>
        </div>
         <div class="fenye">
            <el-pagination
            background
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="15"
            layout="prev, pager, next, jumper"
            :total="this.xiaoxiData.total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
import {gettoken} from '@@/assets/commen.js'
export default {
    layout:'user',
    data() {
        return {
            checked: false,
            checkList: [],
            xiaoxiData: '',
            currentPage:1,
        }
    },
    mounted() {
        this.$axios.post('/newsBelongSelf',{read_status:''},{headers:{'Authorization':'Bearer'+localStorage.getItem('access_token')}}).then(res=>{
            this.xiaoxiData = res.data.data
        }).catch(err => {
            if(err.response.data.message=='Token has expired'){
                gettoken().then(val=>{
                   return this.$axios.post('/newsBelongSelf',{read_status:''},{headers:{'Authorization':'Bearer'+val}})
                }).then(res=>{
                    this.xiaoxiData = res.data.data
                }).catch(err =>{
                    this.$message.error('身份验证失效')
                })
            }
        })
    },
    methods: {
        handleCurrentChange(a){
            gettoken().then(val =>{
                return this.$axios.post('/newsBelongSelf?page='+a,{read_status:''},{headers:{'Authorization':'Bearer'+localStorage.getItem('access_token')}})
            }).then(res=>{
                this.xiaoxiData = res.data.data
            })
        }
    },
}
</script>
<style scoped>
.userc_titel{
    height: 38px;
    background-color: #F8F7FF;
    overflow: hidden;
    text-align: center;
    line-height: 38px;
    padding: 0 30px;
    font-size: 12px;
    color: #666;
}
.userc_c{
    padding: 30px;
    overflow: hidden;
    text-align: center;
    font-size: 14px;
}
.com{
    border-bottom: 1px #D2D2D2 solid;
}
.com > div{
    float: left;
}
.com > div:nth-child(1){
    width: 120px;
}
.com > div:nth-child(2){
    width: 626px;
}
.com > div:nth-child(3){
    width: 190px;
}
.fenye{
    margin: 30px 360px;
}
</style>
