<template>
    <div>
        <headert></headert>
        <div class="searchlist a">
            <div class="fristselect">
                <div v-for="(item,index) in mediadata" :key="item.theme_id" @click="theme_index = index;qingkong()" :class="[theme_index==index?'themeclass':'']">{{item.theme_name}}</div>
            </div>
            <div class="selectalign">
                <div class="selecttitle">平台分类</div>
                <div class="selectright">
                    <div :class="[pingtai?'':'on']">
                        <div @click="platform = ''"><i :class="[platform === ''?'isselect':'']">不限</i></div>
                        <div v-for="(item,index) in mediadata[theme_index].platform" :key="index" @click="platform = index"><i :class="[index===platform?'isselect':'']">{{item.platform_name}}</i></div>
                    </div>
                </div>
                <a href="javascript:;" class="zhankai" @click="pingtai == true?pingtai=false:pingtai=true">展开 <span></span></a>
            </div>
            <div class="selectalign">
                <div class="selecttitle">领域分类</div>
                <div class="selectright">
                    <div :class="[hold?'':'on']">
                        <div @click="filed = ''"><i :class="[filed === ''?'isselect':'']">不限</i></div>
                        <div v-for="(item,index) in mediadata[theme_index].filed" :key="index" @click="filed = index"><i :class="[index===filed?'isselect':'']">{{item.filed_name}}</i></div>
                    </div>
                </div>
                <a href="javascript:;" class="zhankai" @click="ishold">展开 <span></span></a>
            </div>
            <div class="selectalign">
                <div class="selecttitle"> 
                    <div class="checktitle" @click="checkboxshow===true?checkboxshow=false:checkboxshow=true">{{mediadata[theme_index].priceclassify[priceclassify_index].priceclassify_name}}</div>
                    <div class="checkbox" v-show="checkboxshow">
                        <div v-for="(item,index) in mediadata[theme_index].priceclassify" :key="item.priceclassify_id" v-show="item.tag==tag" @click="priceclassify_index=index;checkboxshow=false">{{item.priceclassify_name}}</div>
                    </div>
                </div>
                <div class="selectright">
                    <div>
                        <div @click="pricelevel = ''"><i :class="[pricelevel === ''?'isselect':'']">不限</i></div>
                        <div v-for="(item,index) in mediadata[0].pricelevel" :key="index" @click="pricelevel = index"><i :class="[index===pricelevel?'isselect':'']">{{item.pricelevel_name}}</i></div>
                    </div>
                </div>
            </div>
            <div class="selectalign">
                <div class="selecttitle">粉丝数</div>
                <div class="selectright">
                    <div>
                        <div @click="fansnumlevel = ''"><i :class="[fansnumlevel === ''?'isselect':'']">不限</i></div>
                        <div v-for="(item,index) in mediadata[theme_index].fansnumlevel" :key="index" @click="fansnumlevel = index"><i :class="[index===fansnumlevel?'isselect':'']">{{item.fansnumlevel_name}}</i></div>
                    </div>
                </div>
            </div>
            <div class="selectalign">
                <div class="selecttitle">地区筛选</div>
                <div class="selectright">
                    <div :class="[diqu?'':'on']">
                        <div @click="region = ''"><i :class="[region === ''?'isselect':'']">不限</i></div>
                        <div v-for="(item,index) in mediadata[0].region" :key="index" @click="region = index"><i :class="[index===region?'isselect':'']">{{item.region_name}}</i></div>
                    </div>
                </div>
                <a href="javascript:;" class="zhankai" @click="diquhold">展开 <span></span></a>
            </div>
            <div class="selectalign">
                <div class="selecttitle">已选条件</div>
                <div class="selectright">
                    <div>
                        <div @click="qingkong"><i>清空</i></div>
                        <div v-if="platform!==''" style="width:auto"><span>领域分类: {{mediadata[theme_index].platform[platform].platform_name}}</span></div>
                        <div v-if="filed!==''" style="width:auto"><span>领域分类: {{mediadata[theme_index].filed[filed].filed_name}}</span></div>
                        <div v-if="fansnumlevel!==''" style="width:auto"><span>粉丝数量: {{mediadata[theme_index].fansnumlevel[fansnumlevel].fansnumlevel_name}}</span></div>
                        <div v-if="pricelevel!==''" style="width:auto"><span>{{mediadata[theme_index].priceclassify[priceclassify_index].priceclassify_name}}:{{mediadata[0].pricelevel[pricelevel].pricelevel_name}}</span></div>
                        <div v-if="region!==''" style="width:auto"><span>地区筛选:{{mediadata[0].region[region].region_name}}</span></div>
                    </div>
                </div>
                <el-button type="primary" class="selectGoods" @click="selectGoods">搜索</el-button>
            </div>
        </div> 
        <!-- 搜索商品列表页 -->
        <!-- <div class="goodslist a">                                   
            <div class="goodslisttop">
                <el-button class="fl" type="primary">刷新</el-button>
                <el-button class="fr" type="primary">联系客服</el-button>
                <el-button class="fr">价格</el-button>
            </div>
            <div class="goodslisttitle goodslistcontent">
                <div>媒介名称</div>
                <div>参考报价</div>
                <div>平台</div>
                <div>粉丝量</div>
                <div>互动量</div>
                <div>操作</div>
            </div>
            <div class="goodslistcontent goodslistitem" v-for="(item,index) in listdata" :key="index">
                <div>
                    <img src="/pic/tx_mr001.png" style="width:70px">
                    <div class="textp">
                        <h4>{{item.goods_title}}</h4>
                        <p>领域:{{item.filed_name}}</p>
                        <p>地区:{{item.region_name}}</p>
                    </div>
                </div>
                <div>
                    <p v-for="itemt in item.price_info" :key="itemt.priceclassify_id">
                        {{itemt.priceclassify_name}}: <span class="red fr">{{itemt.price}}</span>
                    </p>
                </div>
                <div></div>
                <div>{{item.fans_num}}</div>
                <div>
                    <p>平均阅读数: {{item.avg_read_num==false||item.avg_read_num==false?'/':item.avg_read_num>=10000?parseInt(item.avg_read_num/10000)+'W+':item.avg_read_num}}</p>
                    <p>平均点赞数: {{item.avg_like_num==false?'/':item.avg_like_num>=10000?parseInt(item.avg_like_num/10000)+'W+':item.avg_like_num}}</p>  
                    <p>平均评论数: {{item.avg_comment_num==false?'/':item.avg_comment_num>=10000?parseInt(item.avg_comment_num/10000)+'W+':item.avg_comment_num}}</p>
                </div>
                <div>
                    <div @click="collection(item.goods_id)">收藏</div>
                    <div class="addcar">加入购物车
                        <div>
                            <div v-for="(iteminfo,index) in item.price_info" v-show="iteminfo.price!=''" :key="index" @click="addshopcar(item.goods_id,item.modular_type,iteminfo.priceclassify_id,iteminfo.price)">{{iteminfo.priceclassify_name}}</div>
                        </div>
                    </div>
                </div>
            </div>
              <el-pagination
                @current-change="handleCurrentChange"
                :current-page="1"
                layout="total, prev, pager, next, jumper"
                :total="2">
                </el-pagination>
        </div> -->
    </div>
</template>

<script>
import { gettoken,hmt } from "@@/assets/commen.js";
import headert from '@@/components/header.vue';
export default {
    layout:'header',
   async asyncData({app}) {
        let { data } = await app.$axios.get("/getGoodsAttribute");
    return { mediadata: data.data[2].theme };    
    },
    data() {
        return {
            listdata:[],
            theme_index:0,
            filed:'',//筛选领域分类
            fansnumlevel:'',//筛选粉丝数量
            platform:'',//筛选平台
            priceclassify_index: 0,  //多图文索引
            pingtai:true, //是否收起
            hold:true,
            diqu:true,
            pricelevel:'',//筛选多图文价格
            region:'',//筛选地区
            checkboxshow: false,
            selectWeixin:'', //搜索结果
        }
    },
     components:{
        headert
    },
    methods: {
        ishold(){
            if(this.hold ==true){
                this.hold = false
            }else{
                this.hold = true
            }
        },
        diquhold(){
            if(this.diqu ==true){
                this.diqu = false
            }else{
                this.diqu = true
            }
        },
        qingkong(){
            this.filed =this.fansnumlevel=this.pricelevel=this.readlevel=''
            this.region=this.priceclassify_index =0
        },
        selectGoods(){
            let params = {    
                modular_id: 1,
                theme_id:this.mediadata[this.theme_index].theme_id,
                keyword:'',
                filed_id:this.mediadata[this.theme_index].filed[this.filed]&&this.mediadata[this.theme_index].filed[this.filed].filed_id||'',
                fansnumlevel_min:this.mediadata[this.theme_index].fansnumlevel[this.fansnumlevel]&&JSON.stringify(this.mediadata[this.theme_index].fansnumlevel[this.fansnumlevel].fansnumlevel_min)||'',
                fansnumlevel_max:this.mediadata[this.theme_index].fansnumlevel[this.fansnumlevel]&&this.mediadata[this.theme_index].fansnumlevel[this.fansnumlevel].fansnumlevel_max||'',
                priceclassify_id:this.mediadata[this.theme_index].priceclassify[this.priceclassify_index]&&this.mediadata[this.theme_index].priceclassify[this.priceclassify_index].priceclassify_id||'',
                pricelevel_min:this.mediadata[0].pricelevel[this.pricelevel]&&JSON.stringify(this.mediadata[0].pricelevel[this.pricelevel].pricelevel_min)||'',
                pricelevel_max:this.mediadata[0].pricelevel[this.pricelevel]&&this.mediadata[0].pricelevel[this.pricelevel].pricelevel_max||'',
                platform_id:this.mediadata[this.theme_index].platform[this.platform]&&this.mediadata[this.theme_index].platform[this.platform].platform_id||'',
                region_id:this.mediadata[0].region[this.region]&&this.mediadata[0].region[this.region].region_id||'',
            }
           for(var key in params){
               if(params.pricelevel_max ==''){
                   delete params.priceclassify_id
               }
               if(params[key] == ''&&params[key] !== 0&&params[key] !== '0'){
                   delete params[key]
               }
           }
            this.$axios.get('/selectGoods',{params:params}).then(res =>{
                this.listdata = res.data.data.data
                this.selectWeixin = res.data.data
            }).catch(err => {
            })
        },
        addshopcar(a,b,c,d){
            gettoken().then(val => {
                return this.$axios.post('/joinShopcart',{
                goods_id:a,
                modular_type:b,
                priceclassify_id:c,
                price:d
            },{ headers: { Authorization: "Bearer" + val } })
            })
            .then(res => {
            }).catch(err => {
                alert(err.response.data.message)
            })
        },
        handleCurrentChange(val){
            // this.$axios.get('/selectWeixinGoods',{params:{
            //     page:val
            // }})
        },
        collection(a){                                       //======加入收藏
            gettoken().then(val => {
                return this.$axios.post('/collectionGoods',{
                    goods_id_json:JSON.stringify({1:a})
                },{ headers: { Authorization: "Bearer" + val } })
            }).then(res =>{
            }).catch(err =>{
                alert(err.response.data.message)
            })
        }
    },
    mounted() {
        hmt()
        // this.$axios('/selectGoods',{params:{
        //     theme_id:1,
        //     keyword:'',
        //     filed_id:'',
        //     fansnumlevel_min:'',
        //     fansnumlevel_max:'',
        //     priceclassify_id:1,
        //     pricelevel_min:'',
        //     pricelevel_max:'',
        //     readlevel_min:'',
        //     readlevel_max:'',
        //     region_id:''
        // }}).then(res => {
        //     this.listdata = res.data.data.data
        //     this.selectWeixin = res.data.data
        // }).catch(err => {
        // })
    },
    computed:{
        tag: function() {
      if (this.platform == 3 &&this.theme_index==0) {
        return "小红书";
      } else if (this.platform == 1&&this.theme_index==0) {
        return "bilibili";
      } else if (this.platform == 9&&this.theme_index==1) {
        return "淘宝直播";
      } else {
        return "default";
      }
    }
    }
}
</script>

<style scoped>
.a{
    width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 3px;
    box-shadow:0px 3px 7px 0px rgba(0, 0, 0, 0.11);
}
/* 搜素每行 */
.searchlist > div{       
    font-size: 14px;
    border-bottom: 1px solid #D2D2D2;
}
.fristselect >div{
    width: 80px;
    text-align: center;
    padding: 10px 0;
    border-radius: 3px;
    margin: 6px 20px;
    display: inline-block;
    margin-top: 8px;
    border: 1px solid #D2D2D2;
    cursor: pointer;
}
.fristselect .themeclass{
    background-color: #5141ED;
    color: #fff;
    border: none;
}
.selectalign {
    border-bottom: 1px solid #D2D2D2;
    position: relative;
}
.selectalign i {
    padding: 5px 12px;
    font-size: 14px;
    font-style: normal;
    color: #888;
    border-radius: 3px;
    cursor: pointer;
}
.selectalign > .selecttitle {
    width: 120px;
    height: 56px;
    position: absolute;
    left: 0;
    top:0;
    text-align: center;
    line-height: 56px;
}
.selectright{
    width: 1050px;
    display: inline-block;
    padding: 0 20px 10px 168px;
    margin-top: 10px;
    position: relative;
}
.selectright > div.on{
    height: auto;
}
.selectright > div{
    height: 28px;
    overflow: hidden;
}
.selectright>div >div:first-of-type{
    position: absolute;
    width: 55px;
    left: 112px;
    top: 0;
}
.selectright>div >div{
    float: left;
    width: 105px;
    padding-top: 5px;
    margin-bottom: 10px;
}
.selectright .isselect{
    background-color: #5141ED;
    color: #fff;
}
.checktitle{
    width: 90px;
    height: 35px;
    border: 1px solid #D2D2D2;
    border-radius: 3px;
    line-height: 35px;
    margin: 6px 0 0 12px;
    text-align: left;
    position: relative;
    cursor: pointer;
    padding: 0 22px 0 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    z-index: 9;
}
.checktitle::before{
    content: '';
    width: 10px;
    height: 5px;
    display: block;
    position: absolute;
    right: 10px;
    top: 16px;
    background-image: url('/usericon/top_icon_button002.png');
}
.checkbox{
    width: 116px;
    border: 1px solid #D2D2D2;
    border-radius: 3px;
    line-height: 32px;
    margin-left: 12px;
    text-align: left;
    padding-left: 10px;
    cursor: pointer;
    background-color: #fff;
    position: relative;
    z-index: 99;
}
.checkbox div{
    width: 105px;
    height: 32px;
}
.checkbox div:hover{
    color: #5141ED;
}
.zhankai{
    position: absolute;
    right: 15px;
    top: 20px;
    color: #888;
}
.zhankai span{
    width: 9px;
    height: 5px;
    display: inline-block;
    background-image: url('/usericon/top_icon_button002.png');
}
.selectGoods{
    position: absolute;
    right: 50px;
    top: 5px;
}
.selectright span{
    padding: 3px 10px;
    margin-right: 20px;
    font-size: 14px;
    font-style: normal;
    color: #5141ED;
    border-radius: 3px;
    border: 1px solid #5141ED;
    border-radius: 3px;
}
.goodslist{
    min-height:600px;
    margin: 20px auto 60px auto;
}
.goodslisttop{
    padding: 16px 28px;
    height: 64px;
}
.goodslisttitle.goodslistcontent{
    height: 40px;
    text-align: center;
    line-height: 40px;
    display: flex;
    background-color: #F8F7FF;
    font-size: 12px;
    color: #666;
    border: 1px solid #D2D2D2;
    
}
.goodslistcontent{
    display: flex;
    height: 150px;
    border-bottom: 1px solid #D2D2D2;
}
.goodslistitem>div{
    height: 150px;
}
.goodslistitem:hover{
    border-radius:3px;
    box-shadow:0px 0px 10px 1px rgba(179,173,246,0.33);
}
.addcar{
    width: 120px;
    height: 35px;
    margin-top: 20px;
    text-align: center;
    line-height: 34px;
    position: relative;
    border-radius: 3px;
    font-size: 14px;
    border:1px solid rgba(81,65,237,1);
}
.addcar > div{
    position:absolute;
    width: 158px;
    padding: 20px 20px 8px 20px;
    bottom: 42px;
    left: -38px;
    display: none;
    box-shadow:0px 0px 10px 1px rgba(179,173,246,0.33);
    border-radius:3px;
    background-color: #fff;
}
.addcar > div::before{
    content: '';
    bottom: -10px;
    left: 0px;
    right: 0px;
    height: 10px;
    display: block;
    position: absolute;
}
.addcar > div::after{
    content: '';
    width: 0;
    height: 0;
    bottom: -8px;
    right: 10.5px;
    display: block;
    position: absolute;
    border-style: solid;
    border-width: 8px 8px 0;
    border-color: #fff transparent transparent;
}
.addcar:hover > div,
.addcar > div:hover{
    display: block
}
.addcar > div>div{
    height: 32px;
    margin-bottom: 12px;
    background-color: #5141ED;
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
}
.goodslistitem:hover .addcar{
    border-color: #5141ED;
    color: #5141ED;
}
.goodslistitem>div:nth-child(2){
    display: flex;
    flex-direction:column;
    justify-content: center;
    padding: 0 20px 0 45px;
}
.goodslistitem>div:nth-child(1),
.goodslistitem>div:nth-child(3),
.goodslistitem>div:nth-child(4),
.goodslistitem>div:nth-child(6){
    display: flex;
    justify-content: center;
    align-items: center;
}
.goodslistitem>div:nth-child(5){
    display: flex;
    flex-direction:column;
    justify-content: center;
    padding: 0 20px 0 20px;
}
.goodslistitem>div:nth-child(6){
    flex-direction:column;
}
.el-checkbox__inner{
    width:18px;
    height:18px;
    background:rgba(248,248,248,1);
    border:1px solid rgba(136,136,136,1);
    border-radius:3px;
}
.el-checkbox__label{
    display:none;
}
.el-checkbox-group{
    width: 60px;
}
.goodslistitem>div .textp{
    width: 120px;
    margin-left: 12px;
}
.goodslistitem p{
    color: #666;
    font-size: 14px;
    margin-top: 4px;
}
.goodslistitem h4{
    font-weight: 400;
}
.goodslistcontent>div:nth-child(1){
    width: 340px;
}
.goodslistcontent>div:nth-child(2){
    width: 220px;
}
.goodslistcontent>div:nth-child(3),
.goodslistcontent>div:nth-child(4){
    width: 140px;
}
.goodslistcontent>div:nth-child(5),
.goodslistcontent>div:nth-child(6){
    width: 180px;
}
</style>
