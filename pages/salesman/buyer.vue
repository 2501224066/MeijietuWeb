<template>
    <div class="dingdanall">
        <div class="header_c color666"><span>当前位置:广告主</span><span class="fr">客服编号:{{kefudata.user_num}}</span></div>
        <div class="dingdan_c">
            <div class="selectinput">
                <el-input style="width:260px" v-model="user_num" placeholder="搜索用户编号"></el-input>
                <el-input style="width:260px" v-model="phone" placeholder="搜索用户手机号"></el-input>
                <el-input style="width:260px" v-model="nickname" placeholder="搜索用户昵称"></el-input>
                <el-button type="primary" @click="searchbtn">搜索</el-button>
            </div>
            <div class="c_list">
                <el-row class="c_title">
                    <el-col :span="3"><div>用户编号</div></el-col>
                    <el-col :span="3"><div>登录手机号</div></el-col>
                    <el-col :span="3"><div>昵称</div></el-col>
                    <el-col :span="3"><div>性别</div></el-col>
                    <el-col :span="3"><div>注册时间</div></el-col>
                    <el-col :span="3"><div>用户余额</div></el-col>
                    <el-col :span="3"><div>实名认证</div></el-col>
                    <el-col :span="3"><div>操作</div></el-col>
                </el-row>
                <el-row v-for="(item,index) in serveUser.data" :key="index">
                    <el-col :span="3"><div>{{item.user_num}}</div></el-col>
                    <el-col :span="3"><div>{{item.phone}}</div></el-col>
                    <el-col :span="3"><div>{{item.nickname}}</div></el-col>
                    <el-col :span="3"><div>{{item.sex==1?'男':item.sex==2?'女':'未知'}}</div></el-col>
                    <el-col :span="3"><div>{{item.created_at}}</div></el-col>
                    <el-col :span="3"><div>{{item.wallet.available_money}}</div></el-col>
                    <el-col :span="3"> <div>{{item.realname_status==0?'未认证':item.realname_status==1?'个人认证':'企业认证'}}</div></el-col>
                    <el-col :span="3">
                        <div><img class="cr" src="/indexicon/kefucaozuo03.png" title="详细信息"></div>
                    </el-col>
                </el-row>
            </div>
            <div class="fenye">
                <el-pagination
                background
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="15"
                layout="prev, pager, next, jumper"
                :total="serveUser.total">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
import { gettoken,indentStatus } from "@@/assets/commen.js";
export default {
    layout:'salesman',
    data() {
        return {
            kefudata:'',                //客服信息
            indentStatus:indentStatus,
            user_num:'',                //筛选用户编号
            phone:'',                   //筛选用户手机号  
            nickname:'',                //筛选用户昵称 
            currentPage:1,
            serveUser:'',               //用户数据
            dingdanstatus:[{value:1,label:'订单状态'}],
        }
    },
    mounted() {
        this.kefudata = JSON.parse(localStorage.getItem('kefu'))
        this.$axios.post('/serveUserSelect',{user_num:'',phone:'',nickname:'',identity:'1'},{headers:{'Authorization':'Bearer'+localStorage.getItem('access_token')}})
        .then(res=>{
            this.serveUser = res.data.data
        })
    },
    methods: {
        handleCurrentChange(a){
            this.$axios.post('/serveUserSelect?page='+a,{user_num:this.user_num,phone:this.phone,nickname:this.nickname,identity:'1'},{headers:{'Authorization':'Bearer'+localStorage.getItem('access_token')}})
            .then(res=>{
                this.serveUser = res.data.data
            })
        },
        searchbtn(){
            this.$axios.post('/serveUserSelect',{user_num:this.user_num,phone:this.phone,nickname:this.nickname,identity:'1'},{headers:{'Authorization':'Bearer'+localStorage.getItem('access_token')}})
            .then(res =>{
                this.serveUser = res.data.data
            })
        }
    },
}
</script>
<style scoped>
.header_c{
    height: 42px;
    line-height: 42px;
    padding: 0 40px 0 16px;
    background-color: #fff;
    box-shadow:0px 0px 8px 0px rgba(0, 0, 0, 0.08)
}
.dingdanall{
    font-size: 14px;
}
.dingdan_c{
    margin: 20px;
    padding: 20px;
    background-color: #fff;
}
.c_title{
    background-color: #F8F8F8;
}
.c_list > div > div{
    float: left;
    line-height: 39px;
    height: 40px;
    padding-left: 16px;
    border-bottom: 1px solid #D2D2D2;
    border-right: 1px solid #D2D2D2;
}
.c_list{
    margin-top: 20px;
    border-top: 1px solid #D2D2D2;
    border-left: 1px solid #D2D2D2;
}
.c_list > div{
    height: 40px;
}
.fenye{
    padding: 20px 0 20px 500px;
}
.kefucaozuo img{
    cursor: pointer;
}
</style>