<template>
    <div class="dingdanall">
        <div class="header_c color666"><span>当前位置:订单管理</span><span class="fr">客服编号:{{kefudata.user_num}}</span></div>
        <div class="dingdan_c">
            <div style="width:105px">
                <el-select v-model="selestatus" placeholder="议价状态">
                    <el-option
                    v-for="item in dingdanstatus"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
             <div class="selectinput">
                <el-input style="width:260px" v-model="buyer_num" placeholder="搜索广告主编号"></el-input>
                <el-input style="width:260px" v-model="seller_num" placeholder="搜索媒体主编号"></el-input>
                <el-input style="width:260px" v-model="indent_num" placeholder="搜索订单编号"></el-input>
                <el-button type="primary" @click="searchbtn">搜索</el-button>
            </div>
            <div class="c_list">
                <el-row class="c_title">
                    <el-col :span="4"><div>创建时间</div></el-col>
                    <el-col :span="3"><div>订单号</div></el-col>
                    <el-col :span="3"><div>广告主</div></el-col>
                    <el-col :span="2"><div>价格</div></el-col>
                    <el-col :span="3"><div>媒体主</div></el-col>
                    <el-col :span="3"><div>订单状态</div></el-col>
                    <el-col :span="3"><div>商品议价</div></el-col>
                    <el-col :span="3"><div>操作</div></el-col>
                </el-row>
                <div v-for="(item,index) in serveIndent.data" :key="index">
                    <el-col :span="4"><div>{{item.create_time}}</div></el-col>
                    <el-col :span="3"><div>{{item.indent_num}}</div></el-col>
                    <el-col :span="3"><div>{{item.buyer_name}}</div></el-col>
                    <el-col :span="2"><div>{{item.pay_amount||'/'}}</div></el-col>
                    <el-col :span="3"><div>{{item.seller_name}}</div></el-col>
                    <el-col :span="3"><div>{{indentStatus[item.status]}}</div></el-col>
                    <el-col :span="3"><div :class="item.bargaining_status==0?'red':''">{{item.bargaining_status==0?'未完成':item.bargaining_status==1?'已完成':'/'}}</div></el-col>
                    <el-col :span="3"><div class="kefucaozuo">
                        <img @click="yijiadata=item;item.indent_item.theme_name==='软文套餐'?ruanwen():yijia=true" src="/indexicon/kefucaozuo01.png" title="商品议价">
                        <img @click="xiangqing=true;xiangqingdata=item" style="margin:0 13px" title="订单详情" src="/indexicon/kefucaozuo02.png">
                        <img @click="xuquwendang(item)" src="/indexicon/kefucaozuo03.png" title="需求文档">
                    </div></el-col>
                </div>
            </div>
            <div class="fenye">
                <el-pagination
                background
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="15"
                layout="prev, pager, next, jumper"
                :total="serveIndent.total">
                </el-pagination>
            </div>
        </div>
        <!-- 议价弹出框 -->
        <el-dialog
            title="商品议价"
            :visible.sync="yijia"
            width="30%">
            <div>媒体主: {{ yijiadata.seller_name}}</div>
            <div>订单价格: {{ yijiadata.indent_amount}}</div>
            <p>媒体主收入:{{xiangqingdata.seller_income}}</p>
            <div>是否同意: 
                <el-radio style="margin-left:10px" v-model="radio" label="1">是</el-radio>
                <el-radio v-model="radio" label="2">否</el-radio>
            </div> 
            <div>议价价格:<el-input v-model="yijiaprice" style="width:200px;margin-left:10px" placeholder="请输入价格"></el-input></div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="yijiafinsh">确 定</el-button>
                <el-button @click="yijia = false">取 消</el-button>
            </span>
        </el-dialog>
        <!-- 订单详情弹出框 -->
        <el-dialog
            title="订单详情"
            :visible.sync="xiangqing"
            width="30%">
            <div class="xiangqingkuang">
                <p>创建时间:{{xiangqingdata.create_time}}</p>
                <p>订单号:{{xiangqingdata.indent_num}}</p>
                <p>客服编号:{{xiangqingdata.salesman_id}}</p>
                <p>手续费:{{xiangqingdata.compensate_fee}}</p>
                <p>订单价格:{{xiangqingdata.indent_amount}}</p>
                <p>媒体主收入:{{xiangqingdata.seller_income}}</p>
                <p>广告主昵称:{{xiangqingdata.buyer_name}}</p>
                <p>广告主电话:{{xiangqingdata.buyer_phone}}</p>
                <p>广告主编号:{{xiangqingdata.buyer_id}}</p>
                <p>媒体主昵称:{{xiangqingdata.seller_name}}</p>
                <p>媒体主电话:{{xiangqingdata.seller_phone}}</p>
                <p>媒体主编号:{{xiangqingdata.seller_num}}</p>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="xiangqing = false">确 定</el-button>
                <el-button @click="xiangqing = false">取 消</el-button>
            </span>
        </el-dialog>

    </div>
</template>
<script>
import { gettoken,indentStatus } from "@@/assets/commen.js";
export default {
    layout:'salesman',
    data() {
        return {
            kefudata:'',
            indentStatus:indentStatus,
            select:'',               //搜索内容
            yijia:false,             //议价弹出框
            yijiadata:'',            //议价用户数据
            radio:'',                //是否同意议价
            yijiaprice:'',           //议价价格
            xiangqing:false,         //商品详情弹出框   
            xiangqingdata:'',         //商品详情数据
            selestatus: '',
            currentPage:1,
            serveIndent:'',          //订单数据
            dingdanstatus:[{value:0,label:'已完成'},{value:1,label:'未完成'}],
            buyer_num:'',               //筛选广告主编号
            seller_num:'',              //媒体主编号    
            indent_num:'',              //订单编号
        }
    },
    mounted() {
        this.kefudata = JSON.parse(localStorage.getItem('kefu'))
        this.getselect() 
    },
    methods: {
        getselect(){
            this.$axios.post('/serveIndentSelect?page='+this.currentPage,{buyer_num:this.buyer_num,seller_num:this.seller_num,indent_num:this.indent_num,bargaining_status:this.selestatus},{headers:{'Authorization':'Bearer'+localStorage.getItem('access_token')}})
            .then(res=>{
                this.serveIndent = res.data.data
            }).catch(err =>{
                this.$message({message: '身份过期,请重新登录',type: 'warning'})
            })
        },
        handleCurrentChange(a){
            this.$axios.post('/serveIndentSelect?page='+a,{buyer_num:this.buyer_num,seller_num:this.seller_num,indent_num:this.indent_num,bargaining_status:this.selestatus},{headers:{'Authorization':'Bearer'+localStorage.getItem('access_token')}})
            .then(res=>{
                this.serveIndent = res.data.data
            })
        },
        yijiafinsh(){       //议价完成按钮
            this.$axios.post('/indentBargaining',{indent_num:this.yijiadata.indent_num,seller_income:this.yijiaprice},{headers:{'Authorization':'Bearer'+localStorage.getItem('access_token')}})
            .then(res =>{
                this.$message({message: '议价成功',type: 'success'})
                this.getselect() 
            }).catch(err =>{
                this.$message.error('失败: '+err.response.data.message)
            })
            this.yijia = false
        },
        searchbtn(){
            this.$axios.post('/serveIndentSelect',{buyer_num:this.buyer_num,seller_num:this.seller_num,indent_num:this.indent_num,bargaining_status:this.selestatus},{headers:{'Authorization':'Bearer'+localStorage.getItem('access_token')}})
            .then(res=>{
                this.serveIndent = res.data.data
            })
        },
        xuquwendang(a){              //需求文档
            window.open(this.$store.state.header_img+a.demand_file)
        },
        ruanwen(){                   //软文套餐订单
            localStorage.setItem('indent_num',this.yijiadata.indent_num)
            this.$router.push('/salesman/softArticleMeal')
        }
    },
}
</script>
<style scoped>
.el-dialog__body > div{
    margin: 10px 0;
    font-size: 16px;
}
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
    position: relative;
}
.c_title{
    background-color: #F8F8F8;
}
.c_list > div > div{
    float: left;
    line-height: 39px;
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
.selectinput{
    position: absolute;
    top: 20px;
    left: 130px;
    width: 890px;
}
.xiangqingkuang p{
    line-height: 30px;
    font-size: 16px;
}
</style>