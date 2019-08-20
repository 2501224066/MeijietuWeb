<template>
    <div class="dingdanall">
        <div class="header_c color666"><span>当前位置:创建软文套餐池</span><span class="fr">客服编号:{{kefudata.user_num}}</span></div>
        <div class="dingdan_c">
            <div class="selectinput">
                <el-input style="width:260px" v-model="key_word" placeholder="搜索软文关键字"></el-input>
                <el-input style="width:260px" v-model="goods_num" placeholder="搜索软文商品编号"></el-input>
                <!-- <el-input style="width:260px" v-model="nickname" placeholder="搜索用户昵称"></el-input> -->
                <el-button type="primary" @click="searchbtn">搜索</el-button>
                <el-button type="primary" @click="chongzhibtn">重置</el-button>
            </div>
            <div class="c_list">
                <el-row class="c_title">
                    <el-col :span="1"><div>全选</div></el-col>
                    <el-col :span="5"><div>软文商品编号</div></el-col>
                    <el-col :span="3"><div>软文名称</div></el-col>
                    <el-col :span="2"><div>平台</div></el-col>
                    <el-col :span="2"><div>联系QQ</div></el-col>
                    <el-col :span="3"><div>链接</div></el-col>
                    <el-col :span="3"><div>案例链接</div></el-col>
                    <el-col :span="3"><div>领域</div></el-col>
                    <el-col :span="2"><div>操作</div></el-col>
                </el-row>
                <el-row v-for="(item,index) in ruanwendata.data" :key="index">
                    <el-col :span="1" class="goodslistitem">   
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox :label="index"></el-checkbox>
                        </el-checkbox-group>
                    </el-col>
                    <el-col :span="5"><div>{{item.goods_num}}</div></el-col>
                    <el-col :span="3"><div>{{item.title}}</div></el-col>
                    <el-col :span="2"><div>{{item.platform_name}}</div></el-col>
                    <el-col :span="2"><div>{{item.qq_ID}}</div></el-col>
                    <el-col :span="3"><div>{{item.link}}</div></el-col>
                    <el-col :span="3"><div>{{item.case_link}}</div></el-col>
                    <el-col :span="3"> <div>{{item.filed_name}}</div></el-col>
                    <el-col :span="2">
                        <div ><img class="cr img" src="/indexicon/kefucaozuo03.png" title="详细信息"></div>
                    </el-col>
                </el-row>
            </div>
             <el-button type="primary" class="creatbtn" @click="dialogVisible=true">创建套餐池</el-button>
            <div class="fenye">
                <el-pagination
                background
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="15"
                layout="prev, pager, next, jumper"
                :total="ruanwendata.total">
                </el-pagination>
            </div>
        </div>
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%">
            <span>套餐池名称:</span>
            <el-input v-model="mealname" placeholder="请输入套餐池名称"></el-input>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="creatmeal">确 定</el-button>
                <el-button @click="dialogVisible = false">取 消</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import { gettoken,indentStatus,selectGoods } from "@@/assets/commen.js";
export default {
    layout:'salesman',
    data() {
        return {
            kefudata:'',                 //客服信息
            indentStatus:indentStatus,
            key_word:'',                //筛选软文关键字
            goods_num:'',                   //筛选软文商品编号 
            nickname:'',                //筛选用户昵称
            currentPage:1,
            ruanwendata:'',               //软文数据
            dingdanstatus:[{value:1,label:'订单状态'}],
            checkList:[],
            mealname:'',                    //套餐池名称
            dialogVisible:false,
            waitbtn:false,              //提交按钮节流阀
        }
    },
    mounted() {
        this.kefudata = JSON.parse(localStorage.getItem('kefu'))
        selectGoods({modular_id:5,theme_id:9})
        .then(res=>{
            this.ruanwendata = res.data.data
        }).catch(err => {
            this.$message({message: '身份过期,请重新登录',type: 'warning'})
        })
    },
    methods: {
        creatmeal(){
            if(this.waitbtn==true){return}
            this.waitbtn = true
            let goods_id_json = {}
            if(this.checkList===[]){return this.$message({message: '请选择软文商品',type: 'success'})}
            this.checkList.forEach(item => {
                goods_id_json[item] = this.ruanwendata.data[item].goods_id
            });
            this.$axios.post('/createMealPool',{goods_id_json:JSON.stringify(goods_id_json),pool_name:this.mealname},{headers:{'Authorization':'Bearer'+localStorage.getItem('access_token')}})
            .then(res => {
                this.$message({message: '创建成功',type: 'success'})
                this.dialogVisible = false
                this.waitbtn = false
            }).catch(err =>{
                this.$message.error('创建失败'+err.response.data.message)
                this.dialogVisible = false
                this.waitbtn = false
            })
        },
        handleCurrentChange(a){
            selectGoods({modular_id:5,theme_id:9,page:a})
                .then(res=>{
                    this.ruanwendata = res.data.data
                }).catch(err => {
                    this.$message({message: '失败',type: 'warning'})
                })
        },
        searchbtn(){
            if(this.goods_num !==''){
                this.$axios('/oneGoodsInfo',{params:{goods_num:this.goods_num}}).then(res=>{
                    this.ruanwendata = res.data.data
                })
            }else if(this.key_word !== ''){
                selectGoods({modular_id:5,theme_id:9,key_word:this.key_word}).then(res=>{
                    this.ruanwendata = res.data.data
                })
            }else{
                this.$message({message: '请输入搜索条件',type: 'warning'})
            }
        },
        chongzhibtn(){
            this.key_word = this.goods_num = ''
            selectGoods({modular_id:5,theme_id:9})
                .then(res=>{
                    this.ruanwendata = res.data.data
                }).catch(err => {
                    this.$message({message: '失败',type: 'warning'})
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
    padding-left: 13px;
    overflow: hidden;
    border-bottom: 1px solid #D2D2D2;
    border-right: 1px solid #D2D2D2;
}
.img{
    margin: 12px 10px;
}
.el-checkbox-group{
    margin-left: 6px;
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
.creatbtn{
    margin-top: 20px;
}
</style>