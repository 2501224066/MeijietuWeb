<template>
    <div class="dingdanall">
        <div class="header_c color666"><span>当前位置:商品管理</span><span class="fr">客服编号:{{kefudata.user_num}}</span></div>
        <div class="dingdan_c">
            <div style="width:105px">
                <el-select v-model="selestatus" placeholder="全部商品">
                    <el-option
                    v-for="item in dingdanstatus"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="selectinput">
                <el-input style="width:260px" v-model="selectuser" placeholder="输入媒体主编号"></el-input>
                <el-input style="width:260px" v-model="select" placeholder="输入商品编号"></el-input>
                <el-button type="primary" @click="searchbtn">搜索</el-button>
            </div>
            <div class="c_list">
                <el-row class="c_title">
                    <el-col :span="4"><div>创建时间</div></el-col>
                    <el-col :span="4"><div>商品名称</div></el-col>
                    <el-col :span="2"><div>价格</div></el-col>
                    <el-col :span="4"><div>商品编号</div></el-col>
                    <el-col :span="2"><div>商品模块</div></el-col>
                    <el-col :span="3"><div>媒体主</div></el-col>
                    <el-col :span="2"><div>商品状态</div></el-col>
                    <el-col :span="3"><div>操作</div></el-col>
                </el-row>
                <el-row class="hovercolor" v-for="(item,index) in serveGoodsData" :key="index">
                    <el-col :span="4"><div>{{item.created_at}}</div></el-col>
                    <el-col :span="4"><div>{{item.title}}</div></el-col>
                    <el-col :span="2"><div>￥{{item.goods_price[0].price}}</div></el-col>
                    <el-col :span="4"><div>{{item.goods_num}}</div></el-col>
                    <el-col :span="2"><div>{{item.modular_name}}</div></el-col>
                    <el-col :span="3"><div>{{item.user_nickname}}</div></el-col>
                    <el-col :span="2"><div :class="item.verify_status===0?'red':''">{{item.verify_status===0?'待审核':item.verify_status===1?'未通过':'已通过'}}</div></el-col>
                    <el-col :span="3"><div class="kefucaozuo">
                        <img @click="goodsxiangqin=true;goodsdata=item;goodsindex=index" style="margin-right:10px" src="/indexicon/kefucaozuo01.png" title="商品详情">
                        <img v-if="item.modular_settlement_type==2&&item.goods_price[0].price==0" @click="ruanwen=true;ruanwendata=item" src="/indexicon/kefucaozuo02.png" title="软文商品设置价格">
                    </div>
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
                :total="total">
                </el-pagination>
            </div>
        </div>
        <!-- 商品详情 -->
        <el-dialog
            title="商品详情"
            :visible.sync="goodsxiangqin"
            width="30%">
            <div class="goodscontent">
                <div>
                    <div>传媒分类:</div>
                    <div>{{goodsdata.modular_name}}</div>
                </div>
                <div>
                    <div>领域分类:</div>
                    <div>{{goodsdata.theme_name}}</div>
                </div>
                <div>
                    <div>商品名称:</div>
                    <div>{{goodsdata.title}}</div>
                </div>
                <div>
                    <div>简介:</div>
                    <div>{{goodsdata.title_about||''}}</div>
                </div>
                <div>
                    <div>QQ号码:</div>
                    <div>{{goodsdata.qq_ID}}</div>
                </div>
                <div>
                    <div>媒体领域:</div>
                    <div>{{goodsdata.filed_name}}</div>
                </div>
                <div>
                    <div>粉丝数:</div>
                    <div>{{goodsdata.fans_num}}</div>
                </div>
                <div>
                    <div>是否需要预约:</div>
                    <div>{{goodsdata.reserve_status==0?'否':'是'}}</div>
                </div>
                <div v-for="(item,index) in goodsdata.goods_price" :key="index">
                    <div>{{item.priceclassify_name}} <span v-if="goodsdata.modular_settlement_type==2">/底价:</span></div>
                    <div>{{item.price}}<span v-if="goodsdata.modular_settlement_type==2">/{{item.floor_price}}</span></div>
                </div>
                <div>
                    <div>商品简介</div>
                    <div>{{goodsdata.remarks}}</div>
                </div>
                <div v-if="goodsdata.verify_status==0">
                    <div><span class="red">*</span> 是否同意</div>
                    <div>
                        <el-radio style="margin-left:10px" v-model="radio" label="2">同意申请</el-radio>
                        <el-radio v-model="radio" label="1">拒绝申请</el-radio>
                    </div>
                </div>
                <div v-if="goodsdata.verify_status==0">
                    <div><span class="red">*</span> 拒绝理由</div>
                    <div>
                        <el-input v-model="jujueliyou" placeholder="如果拒绝申请,则必填*"></el-input>
                    </div>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="goodsfinsh">确 定</el-button>
                <el-button @click="goodsxiangqin = false">关 闭</el-button>
            </span>
        </el-dialog>
          <el-dialog
            title="商品价格设置"
            :visible.sync="ruanwen"
            width="30%">
            <div>底价: <span class="red">{{ruanwendata.goods_price[0].floor_price}}</span></div>
            <el-input v-model="ruanwenprice" placeholder="请输入默认价格"></el-input>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="ruanwenfinsh">确 定</el-button>
                <el-button @click="ruanwen = false">关 闭</el-button>
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
            kefudata:'',               //客服信息
            indentStatus:indentStatus,
            selestatus: '',            //筛选商品审核状态  
            select:'',               //搜索商品编号
            selectuser:'',           //搜索媒体主编号
            goodsxiangqin:false,     //商品详情弹出框
            goodsdata:'',            //单个商品详情数据 
            goodsindex:'',           //单个商品索引
            radio: '',               //是否同意申请
            jujueliyou:'',           //拒绝申请理由 
            ruanwen:false,              //软文价格设置弹出框
            ruanwendata:{goods_price:[{floor_price:''}]},             //软文数据
            ruanwenprice:'',            //软文价格
            currentPage:1,
            total: 0,                  //商品数
            serveGoodsData:'',      //数据列表
            dingdanstatus:[{value:0,label:'待审核'},{value:1,label:'未通过'},{value:2,label:'已通过'}]
        }
    },
    mounted() {
        this.kefudata = JSON.parse(localStorage.getItem('kefu'))
        this.getselect()
    },
    methods: {
        getselect(){
            this.$axios.post('/serveGoodsSelect?page='+this.currentPage,{user_num:this.selectuser,goods_num:this.select,verify_status:this.selestatus},{headers:{'Authorization':'Bearer'+localStorage.getItem('access_token')}})
                .then(res=>{
                    this.total = res.data.data.total
                    this.serveGoodsData =res.data.data.data
                }).catch(err =>{
                    this.$message({message: '失败',type: 'warning'})
            })
        },
        handleCurrentChange(a){
            this.$axios.post('/serveGoodsSelect?page='+a,{user_num: this.selectuser,goods_num: this.select,verify_status:this.selestatus},{headers:{'Authorization':'Bearer'+localStorage.getItem('access_token')}})
            .then(res=>{
                this.total = res.data.data.total
                this.serveGoodsData =res.data.data.data
            })
        },
        goodsfinsh(){
            if(this.goodsdata.verify_status!==0){return this.goodsxiangqin = false}
            this.$axios.post('/goodsVerify',{
                    goods_num: this.goodsdata.goods_num,
                    verify_status: this.radio,
                    verify_cause: this.jujueliyou
                },{headers:{'Authorization':'Bearer'+localStorage.getItem('access_token')}})
            .then(res => {
                this.$message({message: '商品审核成功',type: 'success'})
                this.getselect()
            }).catch(err => {
                this.$message.error('失败:'+err.response.data.message)
            })
            this.goodsxiangqin = false
        },
        ruanwenfinsh(){
            this.$axios.post('/setPrice',{
                goods_num: this.ruanwendata.goods_num,
                price: this.ruanwenprice
            },{headers:{'Authorization':'Bearer'+localStorage.getItem('access_token')}}).then(res => {
                this.ruanwen = false
                this.$message({message: '设置成功',type: 'success'})
                this.getselect()
            }).catch(err=>{
                this.$message.error('失败'+err.response.data.message)
                this.ruanwen = false
            })
        },
        searchbtn(){
             this.$axios.post('/serveGoodsSelect',{
                   user_num: this.selectuser,
                   goods_num: this.select,
                   verify_status: this.selestatus
                },{headers:{'Authorization':'Bearer'+localStorage.getItem('access_token')}})
            .then(res => {
                this.total = res.data.data.total
                this.serveGoodsData = res.data.data.data
            }).catch(err => {
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
    position: relative;
}
.c_title{
    background-color: #F8F8F8;
}
.c_list > div > div{
    float: left;
    height: 40px;
    overflow: hidden;
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
    width: 676px;
}
.goodscontent>div{
    overflow: hidden;
    margin-bottom: 20px;
    font-size: 16px;
}
/* .goodscontent>div>div{
    
} */
.goodscontent>div>div:nth-child(1){
    float: left;
    color: #666;
    width: 130px;
    text-align: right;
    margin-right: 10px;
}
.goodscontent>div>div:nth-child(2){
    margin-left: 140px;
    color: #242424;
}
</style>