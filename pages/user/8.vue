<template>
    <div class="usercontent">
        <div class="usercontentheader">
            <div class="actived">我的需求</div>
        </div>
        <div class="userc_titel com">
            <div>创建时间</div>
            <div>软文名称</div>
            <div>文档下载</div>
            <div>操作</div>
        </div>
        <div class="userc_c com" v-for="(item,index) in xuqiudata.data" :key="index">
            
            <div>{{item.created_at}}</div>
            <div>{{item.title}}</div>
            <div>
                <p class="cr blue" @click="downword(item.word)">下载需求文档</p>
            </div>
            <div class="isaccept" v-if="item.status==1">
                <p @click="acceptDemand(item.demand_num)">接受订单</p>
                <p @click="refuseDemand(item.demand_num)">拒绝订单</p>
            </div>
            <div class="needword" v-if="item.status==4">
                <p @click="finshOder=true;demand_num=item.demand_num">完成订单</p>
            </div>
            <div v-if="item.status==5">
                <p>等待结算</p>
            </div>
            <div v-if="item.status==2">
                <p>失效订单</p>
            </div>
        </div>
        <div class="fenye">
            <el-pagination
            background
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="15"
            layout="prev, pager, next, jumper"
            :total="this.xuqiudata.total">
            </el-pagination>
        </div>
        <!-- 弹出框 -->
        <el-dialog
            title="提交完成链接地址"
            :visible.sync="finshOder"
            width="30%">
            <el-input v-model="link" placeholder="请输入完成链接"></el-input>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="finshOdertrue">确 定</el-button>
                <el-button @click="finshOder = false">取 消</el-button>
            </span>
        </el-dialog>
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
            xuqiudata: '',
            finshOder: false,
            demand_num:'',
            link:'',
            currentPage:1,
        }
    },
    mounted() {
        this.$axios.post('/demandBelongSelf',{},{headers:{'Authorization':'Bearer'+localStorage.getItem('access_token')}}).then(res=>{
            this.xuqiudata = res.data.data
        }).catch(err => {
            if(err.response.data.message=='Token has expired'){
                gettoken().then(val=>{
                   return this.$axios.post('/newsBelongSelf',{},{headers:{'Authorization':'Bearer'+val}})
                }).then(res=>{
                    this.xuqiudata = res.data.data
                }).catch(err =>{
                    this.$message.error('身份验证失效')
                })
            }
        })
    },
    methods: {
        downword(a){
            window.open(this.$store.state.header_img + a)
        },
        finshOdertrue(){
            this.finshOder = false
            gettoken().then(val =>{
                return this.$axios.post('/completeDemand',{
                    demand_num:this.demand_num,
                    back_link:this.link
                },{headers:{'Authorization':'Bearer'+val}})
            }).then(res => {
                this.$message({message: '提交成功,等待审核',type: 'success'})
            }).catch(err => {
                this.$message.error('失败')
            })
        },
        acceptDemand(a){    //接受订单
            gettoken().then(val => {
                return this.$axios.post('/acceptDemand',{demand_num:a},{headers:{'Authorization':'Bearer'+val}})
            }).then(res=>{
                this.$message({message: '接受订单成功',type: 'success'})
            }).catch(err =>{
                this.$message.error('失败')
            })
        },
        refuseDemand(a){        //拒绝订单
            gettoken().then(val => {
                return this.$axios.post('/acceptDemand',{demand_num:a},{headers:{'Authorization':'Bearer'+val}})
            }).then(res=>{
                this.$message({message: '拒绝订单成功',type: 'success'})
            }).catch(err =>{
                this.$message.error('失败')
            })
        },
        handleCurrentChange(a){
            gettoken().then(val => {
                return this.$axios.post('/demandBelongSelf?page='+a,{},{headers:{'Authorization':'Bearer'+localStorage.getItem('access_token')}})
            }).then(res=>{
                this.xuqiudata = res.data.data
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
    padding: 0 15px;
    font-size: 12px;
    color: #666;
}
.userc_c{
    padding: 15px;
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
    width: 200px;
}
.com > div:nth-child(2){
    width: 300px;
}
.com > div:nth-child(3){
    width: 200px;
}
.com > div:nth-child(4){
    width: 200px;
}
.isaccept{
    padding-left: 60px;
}
.isaccept p{
    width: 80px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    border-radius: 5px;
    background-color: red;
    color: #fff;
    cursor: pointer;
}
.isaccept p:nth-child(1){
    background-color: blue;
    margin-bottom: 10px;
}
.needword p{
    cursor: pointer;
    color: blue;
}
.fenye{
    margin: 30px 300px;
}
</style>
