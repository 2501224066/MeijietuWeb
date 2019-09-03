<template>
    <div>
        <headert></headert>
        <div class="searchlist a">
            <div class="fristselect">
                <div v-for="(item,index) in mediadata" :key="item.theme_id" @click="theme_index = index;qingkong()" :class="[theme_index==index?'themeclass':'']">{{item.theme_name}}</div>
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
                <div class="selecttitle">粉丝数量</div>
                <div class="selectright">
                    <div>
                        <div @click="fansnumlevel = ''"><i :class="[fansnumlevel === ''?'isselect':'']">不限</i></div>
                        <div v-for="(item,index) in mediadata[theme_index].fansnumlevel" :key="index" @click="fansnumlevel = index"><i :class="[index===fansnumlevel?'isselect':'']">{{item.fansnumlevel_name}}</i></div>
                    </div>
                </div>
            </div>
            <div class="selectalign">
                <div class="selecttitle"> 
                    <div class="checktitle" @click="checkboxshow===true?checkboxshow=false:checkboxshow=true">{{mediadata[theme_index].priceclassify[priceclassify_index].priceclassify_name}}</div>
                    <div class="checkbox" v-show="checkboxshow">
                        <div v-for="(item,index) in mediadata[theme_index].priceclassify" :key="item.priceclassify_id" @click="priceclassify_index=index;checkboxshow=false">{{item.priceclassify_name}}</div>
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
                <div class="selecttitle">认证类型</div>
                <div class="selectright">
                    <div>
                        <div @click="auth_type = ''"><i :class="[auth_type === ''?'isselect':'']">不限</i></div>
                        <div @click="auth_type=0"><i :class="[auth_type===0?'isselect':'']">未认证</i></div>
                        <div @click="auth_type=1"><i :class="[auth_type===1?'isselect':'']">已认证</i></div>
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
                        <div v-if="filed!==''" style="width:auto"><span>领域分类: {{mediadata[theme_index].filed[filed].filed_name}}</span></div>
                        <div v-if="fansnumlevel!==''" style="width:auto"><span>粉丝数量: {{mediadata[theme_index].fansnumlevel[fansnumlevel].fansnumlevel_name}}</span></div>
                        <div v-if="pricelevel!==''" style="width:auto"><span>{{mediadata[theme_index].priceclassify[priceclassify_index].priceclassify_name}}:{{mediadata[0].pricelevel[pricelevel].pricelevel_name}}</span></div>
                        <div v-if="region!==''" style="width:auto"><span>地区筛选:{{mediadata[0].region[region].region_name}}</span></div>
                    </div>
                </div>
            </div>
        </div> 
        <div class="goodslist a" v-loading="loading">
            <div class="goodslisttop">
                <el-button class="fl" type="primary">刷新</el-button>
                <el-button class="fr lianxi" type="primary" @click="kefu">联系客服</el-button>
            </div>
            <div class="goodslisttitle goodslistcontent">
                <div>媒介名称</div>
                <div>粉丝数</div>
                <div>参考报价</div>
                <div>平均转发</div>
                <div>平均评论</div>
                <div>平均点赞</div>
                <div>认证类型</div>
                <div>操作</div>
            </div>
            <div class="goodslistcontent goodslistitem" v-for="(item,index) in listdata" :key="index">
                <div>
                    <img :src="$store.state.header_img + item.avatar_url" style="width:70px;border-radius:50%">
                    <div class="textp">
                        <h4>{{item.title}}</h4>
                        <p>领域:{{item.filed_name}}</p>
                        <p>地区:{{item.region_name}}</p>
                    </div>
                </div>
                <div>{{item.fans_num>=100000?parseInt(item.fans_num/10000)+'W+':item.fans_num}}</div>
                <div>
                    <p v-for="itemt in item.goods_price" :key="itemt.priceclassify_id">
                        {{itemt.priceclassify_name}}: <span class="red fr">{{itemt.price=='0.00'?'/':itemt.price}}</span>
                    </p>
                </div>
                <div>
                    <p class="black">{{item.avg_retweet_num==false||item.avg_retweet_num==false?'/':item.avg_retweet_num>=10000?parseInt(item.avg_retweet_num/10000)+'W+':item.avg_retweet_num}}</p>
                </div>
                <div>
                     <p class="black">{{item.avg_like_num==false?'/':item.avg_like_num>=10000?parseInt(item.avg_like_num/10000)+'W+':item.avg_like_num}}</p>  
                </div>
                <div>
                     <p class="black">{{item.avg_comment_num==false?'/':item.avg_comment_num>=10000?parseInt(item.avg_comment_num/10000)+'W+':item.avg_comment_num}}</p>
                </div>
                <div>
                    <p class="black">{{item.auth_type==0?'未认证':'已认证'}}</p>
                </div>
                <div>
                    <div @click.stop="collection(item.goods_id)" class="shoucang">收藏</div>
                    <div class="addcar"> 加入购物车
                        <div>
                            <div v-for="(iteminfo,index) in item.goods_price" v-show="iteminfo.price!='0.00'" :key="index" @click.stop="addshopcar(item.goods_id,iteminfo.goods_price_id)">{{iteminfo.priceclassify_name}}</div>
                        </div>
                    </div>
                </div>
                <nuxt-link class="agoods cr" :to="'/goods/'+item.goods_num" target="_blank"></nuxt-link>
            </div>
            <div class="fenye">
                <el-pagination
                background
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="15"
                layout="prev, pager, next, jumper"
                :total="this.selectWeibo.total">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import { gettoken,selectGoods,hmt,bp } from "@@/assets/commen.js";
import headert from '@@/components/header.vue';
export default {
    layout:'header',
   async asyncData({app}) {
        let { data } = await app.$axios.get("/getGoodsAttribute");
        // let { data:selectgoods } = await app.$axios('/selectGoods',{params:{
        //     theme_id:3,
        //     modular_id:2,
        // }})
        let { data:selectgoods } = await selectGoods({theme_id:3,modular_id:2,})
        return { mediadata: data.data[1].theme ,listdata : selectgoods.data.data,
            selectWeibo : selectgoods.data };    
    },
    head(){
        return{
            title:'微博营销|微博推广|微博KOL|微信大V|微博大号 - 媒介兔-全行业&全流程_获客整合营销平台'
        }
    },
    data() {
        return {
            loading:false,
            listdata:[],
            theme_index:0,
            filed:'',//筛选领域分类
            fansnumlevel:'',//筛选粉丝数量
            priceclassify_index: 0,  //多图文索引
            hold:true,
            diqu:true,
            pricelevel:'',//筛选多图文价格
            region:'',//筛选地区
            checkboxshow: false,
            // selectWeibo:'', //搜索结果
            currentPage:1,
            auth_type:'',      //认证类型
            keyword:'',
            btnwait:false,
        }
    },
    methods: {
        kefu(){
            window.open('https://wpa.qq.com/msgrd?v=3&uin='+JSON.parse(localStorage.getItem('salesman')).salesman_qq_ID+'&site=qq&menu=yes') 
        },
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
            this.region = this.filed =this.fansnumlevel=this.pricelevel=''
            this.priceclassify_index =0
        },
        selectGoods(a){
            this.keyword = this.$store.state.searchkeyword.keyword
            let params = {    
                page:a||'1',
                modular_id: 2,
                theme_id:this.mediadata[this.theme_index].theme_id,
                keyword:this.keyword||'',
                auth_type:this.auth_type,
                filed_id:this.mediadata[this.theme_index].filed[this.filed]&&this.mediadata[this.theme_index].filed[this.filed].filed_id||'',
                fansnumlevel_min:this.mediadata[this.theme_index].fansnumlevel[this.fansnumlevel]&&JSON.stringify(this.mediadata[this.theme_index].fansnumlevel[this.fansnumlevel].fansnumlevel_min)||'',
                fansnumlevel_max:this.mediadata[this.theme_index].fansnumlevel[this.fansnumlevel]&&this.mediadata[this.theme_index].fansnumlevel[this.fansnumlevel].fansnumlevel_max||'',
                priceclassify_id:this.mediadata[this.theme_index].priceclassify[this.priceclassify_index]&&this.mediadata[this.theme_index].priceclassify[this.priceclassify_index].priceclassify_id||'',
                pricelevel_min:this.mediadata[0].pricelevel[this.pricelevel]&&JSON.stringify(this.mediadata[0].pricelevel[this.pricelevel].pricelevel_min)||'',
                pricelevel_max:this.mediadata[0].pricelevel[this.pricelevel]&&this.mediadata[0].pricelevel[this.pricelevel].pricelevel_max||'',
                region_id:this.mediadata[0].region[this.region]&&this.mediadata[0].region[this.region].region_id||''
            }

 
         if(params.pricelevel_max==''){params.priceclassify_id=''}
            selectGoods(params).then(res =>{
                this.listdata = res.data.data.data
                this. selectWeibo= res.data.data
                this.loading = false
            }).catch(err => {
                this.loading = false
            })
            this.$store.commit('setsearchkeyword','')
        },
        addshopcar(a,b){
            if(this.btnwait){return this.$message({message: '操作太频繁,请稍后',type: 'warning'})}
            if(this.$store.state.userdata===''){
                return this.$message({
                    message: '需要登陆才能加入购物车',
                    type: 'warning'
                })
            }
            if(this.$store.state.userdata.identity != 1){return this.$message({message: '你尚未拥有此功能',type: 'warning'})}
            this.btnwait=true
            gettoken().then(val => {
                return this.$axios.post('/joinShopcart',{
                goods_id_json:JSON.stringify({[a]:b})
            },{ headers: { Authorization: "Bearer" + val } })
            })
            .then(res => {
                this.btnwait=false
                this.$store.state.userdata.shopcart_count += 1
                this.$message({ message: '恭喜你，加入购物车成功',type: 'success'})
            }).catch(err => {
                this.btnwait=false
                if(err.response.status == 401){
                    return this.$message({ message: '加入购物车失败', type: 'warning'})
                }
                this.$message({ message: err.response.data.message, type: 'warning'})
            })
        },
        collection(a){                                       //======加入收藏
            if(this.btnwait){return this.$message({message: '操作太频繁,请稍后',type: 'warning'})}
            if(this.$store.state.userdata == ''){return this.$router.push('/login')}
            if(this.$store.state.userdata.identity == 2){return this.$message({message: '媒体主没有此功能',type: 'warning'})}
                this.btnwait=true
            gettoken().then(val => {
                return this.$axios.post('/collectionGoods',{
                    goods_id_json:JSON.stringify({1:a})
                },{ headers: { Authorization: "Bearer" + val } })
            }).then(res =>{
                this.btnwait=false
                this.$message({ message: '恭喜你，收藏成功',type: 'success'})
            }).catch(err =>{
                this.btnwait=false
                this.issoucanglist.shift()
                this.$message.error('收藏失败:'+err.response.data.message)
            })
        },
        getGoodsdetails(val){                          //进入商品详情页
            this.$router.push('/goods/'+val)
        },
        handleCurrentChange(val){                        //商品翻页功能
            this.loading = true
            this.selectGoods(val)
        }
    },
    mounted() {
        bp
        hmt()
        window.document.body.style.background = '#eef2f7'
        if(this.$store.state.searchkeyword !=''){
            this.selectGoods()
        }
    },
    components:{
        headert
    },
    watch:{
        auth_type: function(){
            this.loading = true
            this.currentPage =1
            this.selectGoods()
        },
        theme_index: function(){
            this.loading = true
            this.currentPage =1
            this.selectGoods()
        },
        filed: function(){
            this.loading = true
            this.currentPage =1
            this.selectGoods()
        },
        fansnumlevel: function(){
            this.loading = true
            this.currentPage =1
            this.selectGoods()
        },
        priceclassify_index: function(){
            this.loading = true
            this.currentPage =1
            this.selectGoods()
        },
        pricelevel: function(){
            this.loading = true
            this.currentPage =1
            this.selectGoods()
        },
        region: function(){
            this.loading = true
            this.currentPage =1
            this.selectGoods()
        },
        searchkeyword: function(a){
            if(a==''){return}
            this.selectGoods()
        }
    },
    computed: {
        searchkeyword(){
            return this.$store.state.searchkeyword
        }
    }
}
</script>

<style scoped>
.el-button{
    padding: 8px 20px;
}
.lianxi.el-button{
    padding: 8px 12px 8px 28px;
    background-image: url('/indexicon/lee_icon004.png');
    background-repeat: no-repeat;
    background-position: 5px 6px;
}
.a{
    width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 3px;
    box-shadow:0px 3px 7px 0px rgba(0, 0, 0, 0.11);
}
.fenye{
    padding: 20px 300px;
}
/* 搜素每行 */
.searchlist > div{       
    font-size: 14px;
    border-bottom: 1px solid #D2D2D2;
}
.fristselect >div{
    width: 80px;
    text-align: center;
    padding: 7px 0;
    border-radius: 3px;
    margin: 13px -2px 13px 18px;
    display: inline-block;
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
    padding: 0 20px 13px 195px;
    margin-top: 14px;
    position: relative;
}
.selectright > div.on{
    height: auto;
}
.selectright > div{
    height: 29px;
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
    margin: 10px 0 0 12px;
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
    width: 105px;
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
    height: 7px;
    display: inline-block;
    background-image: url('/usericon/top_icon_button002.png');
    background-repeat: no-repeat;
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
    border-top: 1px solid #D2D2D2;
    border-bottom: 1px solid #D2D2D2;
}
.goodslistcontent{
    display: flex;
    height: 150px;
    border-bottom: 1px solid #D2D2D2;
}
.goodslistitem{
    position: relative;
}
.agoods{
    display: block;
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    width: 950px;
}
.goodslistitem>div{
    height: 150px;
}
.goodslistitem:hover{
    border-radius:3px;
    box-shadow:0px 0px 10px 1px rgba(179,173,246,0.33);
}
.shoucang{
    color: #888;
    font-size: 14px;
    padding-bottom: 11px;
    padding-left: 76px;
    background: url('/indexicon/shouc_icon01.png') 52px 3px no-repeat;
    cursor: pointer;
}
.addcar{
    width: 120px;
    height: 35px;
    color: #888;
    text-align: center;
    padding-left: 20px;
    line-height: 34px;
    position: relative;
    border-radius: 3px;
    font-size: 14px;
    border:1px solid #D2D2D2;
    background: url('/indexicon/lee_icon001.png') 8px 7px no-repeat;
    cursor: pointer;
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
    background: url('/indexicon/douh_icon003.png') 8px 8px no-repeat
}
.goodslistitem>div:nth-child(3){
    display: flex;
    flex-direction:column;
    justify-content: center;
    padding: 0 50px 0 42px;
}
.goodslistitem>div:nth-child(1),
.goodslistitem>div:nth-child(2),
.goodslistitem>div:nth-child(8){
    display: flex;
    justify-content: center;
    align-items: center;
}
/* .goodslistitem>div:nth-child(4){
    display: flex;
    flex-direction:column;
    justify-content: center;
    padding: 0 20px 0 70px;
} */
.goodslistitem>div:nth-child(8){
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
    margin-left: 30px;
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
    width: 320px;
    padding-left: 55px;
}
.goodslistcontent>div:nth-child(3){
    width: 260px;
}
.goodslistcontent>div:nth-child(2){
    width: 80px;
}
.goodslistcontent>div:nth-child(4),
.goodslistcontent>div:nth-child(5),
.goodslistcontent>div:nth-child(6),
.goodslistcontent>div:nth-child(7){
    width: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.goodslistcontent>div:nth-child(8){
    width: 249px;
}
</style>
