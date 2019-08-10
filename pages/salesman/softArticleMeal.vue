<template>
    <div class="dingdanall">
        <div class="header_c color666"><span>当前位置:软文套餐</span><span class="fr">客服编号:{{kefudata.user_num}}</span></div>
        <div class="dingdan_c">
             <div class="selectinput">
                 <p>软文套餐池名称</p>
                 <p>软文套餐池列表</p>
            </div>
            <div style="overflow:hidden;">
                <div class="c_list">
                    <div :class="activeIndex===index?'activeclass':''" @click="checkList=[];mealListItem=item;isactive(index)" v-for="(item, index) in mealList.data" :key="index">{{item.pool_name}}</div>
                </div>
                
                <div class="c_listr">
                    <div class="ruanwengoods" v-for="(item, index) in mealListItem.Children" :key="index">
                        <el-checkbox-group style="margin-right:10px" class="fl" v-model="checkList">
                            <el-checkbox :label="item.goods_id"></el-checkbox>
                        </el-checkbox-group>
                        <p style="margin-left:20px">{{item.title}}</p>
                    </div>
                </div>
                <div class="ruanwenbtn">
                    <el-button  type="primary" @click="allselect">全选</el-button>
                    <el-button type="primary" @click="creatxuqiubtn">创建软文套餐需求</el-button>
                </div>
            </div>
            <div class="fenye">
                <el-pagination
                background
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="15"
                layout="prev, pager, next, jumper"
                :total="mealList.total">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
import { gettoken } from "@@/assets/commen.js";
export default {
    layout:'salesman',
    data() {
        return {
            kefudata:'',
            currentPage:1,
            checkList:[],
            mealList:'',                //套餐池数据
            mealListItem:'',
            dingdanstatus:[{value:0,label:'已完成'},{value:1,label:'未完成'}],
            activeIndex:0,
        }
    },
    mounted() {
        this.kefudata = JSON.parse(localStorage.getItem('kefu'))
        this.$axios.post('/mealPoolList',{},{headers:{'Authorization':'Bearer'+localStorage.getItem('access_token')}})
        .then(res=>{
            this.mealList = res.data.data
            this.mealListItem = res.data.data.data[0]
        }).catch(err =>{
            this.$message({message: '身份过期,请重新登录',type: 'warning'})
        })
    },
    methods: {
        isactive(a){
            this.activeIndex = a
        },
        allselect(){
            let alllist = []
            this.mealListItem.Children.forEach(item => {
               alllist.push(item.goods_id) 
            })
            if(this.checkList.length == alllist.length){return this.checkList=[]}
            this.checkList = alllist
        },
        handleCurrentChange(a){
            gettoken().then(val=>{
                return this.$axios.post('/mealPoolList?page='+a,{},{headers:{'Authorization':'Bearer'+val}})
            }).then(res=>{
                this.mealList = res.data.data
            })
        },
        creatxuqiubtn(){
            if(localStorage.getItem('indent_num')==''){return this.$message({message: '请选择商品',type: 'success'})}
            let goods_id_json = {}
            this.checkList.forEach((item,index) => {
                goods_id_json[index] = item
            });
            this.$axios.post('/softArticleMealCreateDemand',
            {goods_id_json:JSON.stringify(goods_id_json),indent_num:localStorage.getItem('indent_num')},
            {headers:{'Authorization':'Bearer'+localStorage.getItem('access_token')}}).then(res=>{
                this.$message({message: res.data.message,type: 'success'})
                localStorage.setItem('indent_num','')
            }).catch(err => {
                this.$message.error('失败')
            })
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
    overflow: hidden;
}
.c_list{
    float: left;
    margin: 0 100px;
    width: 300px;
    background-color: #F8F8F8;
    border: 1px solid #D2D2D2;
    min-height: 300px;
}
.c_list >div{
    cursor: pointer;
    height: 30px;
    line-height: 30px;
    padding-left: 20px;
    border-bottom: 1px solid #D2D2D2;
}
.c_listr{
    min-height: 300px;
    width: 500px;
    float: left;
    background-color: #fff;
    border: 1px solid #D2D2D2;
}
.c_listr>div{
    padding: 5px 15px;
}
.fenye{
    padding: 20px 0 20px 466px;
}
.kefucaozuo img{
    cursor: pointer;
}
.selectinput{
    height: 80px;
    line-height: 80px;
    font-weight: 600;
    font-size: 16px;
    padding-left: 188px;
}
.selectinput p{
    float: left;
    margin-right: 388px;
}
.ruanwengoods{
    width: 50%;
    float: left;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.ruanwenbtn{
    float: left;
    padding-left: 8px;
    width: 200px
}
.ruanwenbtn >button{
    margin-bottom: 20px;
}
.el-button+.el-button{
    margin-left: 0;
}
.activeclass{
    color: #5141ED;
}
</style>