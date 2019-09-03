<template>
    <div>
        <headert></headert>
        <!-- <div class="searchlist a">
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
        </div>  -->
        <div class="goodslist a" v-loading="loading">
            <div class="goodslisttop">
                <el-button class="fr lianxi" type="primary" @click="kefu">联系客服</el-button>
            </div>
            <div class="goodslisttitle goodslistcontent">
                <div>媒介名称</div>
                <div>简介</div>
                <div>参考报价</div>
                <div>分类</div>
                <div>操作</div>
            </div>
            <div class="goodslistcontent goodslistitem" v-for="(item,index) in listdata" :key="index">
                <div class="cr">
                    <!-- <img :src="$store.state.header_img + item.avatar_url" style="width:70px;border-radius:50%"> -->
                    <div class="textp">
                        <h4>{{item.title}}</h4>
                    </div>
                </div>
                <div class="cr">{{item.title_about}}</div>
                <div class="cr">
                    <p v-for="itemt in item.goods_price" :key="itemt.priceclassify_id" class="tac">
                        <span class="red">{{itemt.price=='0.00'?'/':itemt.price}}</span>
                    </p>
                </div>
                <div class="cr">
                   <p>{{item.filed_name}}</p>
                </div>
                <div>
                    <div @click.stop="collection(item.goods_id,index)" :class="issoucanglist.indexOf(index)==-1?'shoucang':'isshoucang'">收藏</div>
                    <div class="addcar" @click.stop="addshopcar(item.goods_id,item.goods_price.goods_price_id)"> 加入购物车</div>
                </div>
                <!-- <nuxt-link class="agoods" :to="'/goods/'+item.goods_num"></nuxt-link> -->
            </div>
            <div class="fenye">
                <el-pagination
                background
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="15"
                layout="prev, pager, next, jumper"
                :total="this.selectWeixin.total">
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
        let { data:selectgoods } = await selectGoods({modular_id:6,theme_id:11})
        return { mediadata: data.data[5].theme ,listdata : selectgoods.data.data,
            selectWeixin : selectgoods.data };    
    },
    head(){
        return{
            title:'搜索引擎优化|搜索引擎营销|SEO|SEM - 媒介兔-全行业&全流程_获客整合营销平台',
            meta:[
                {hid: 'description', name: 'description', content: '搜索引擎获客尽在媒介兔,发掘成本更低、效果更好的搜索引擎营销方法.' },
                {hid:'keywords',name:'keywords',content:'框架户,端口户,高返户,百度开户,搜狗开户,神马开户,360开户,搜索引擎优化,搜索引擎营销,SEO,SEM,全网霸屏,问答营销,论坛营销'}
            ]
        }
    },
    data() {
        return {
            loading:false,
            listdata:[],
            theme_index:0,
            filed:'',//筛选领域分类
            fansnumlevel:'',//筛选粉丝数量
            readlevel:'',//筛选平均阅读数/点赞数
            priceclassify_index: 0,  //多图文索引
            hold:true,
            diqu:true,
            pricelevel:'',//筛选多图文价格
            region:'',//筛选地区
            checkboxshow: false,
            selectWeixin:'', //搜索结果
            currentPage:1,
            keyword:'',
            issoucanglist:[],
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
            this.region = this.filed =this.fansnumlevel=this.pricelevel=this.readlevel=''
            this.priceclassify_index =0
        },
        selectGoods(a){
            let readlevel_min='',readlevel_max='';
            if(this.theme_index==0&&this.readlevel!==''){
                readlevel_min =this.mediadata[0].readlevel[this.readlevel].readlevel_min;
                readlevel_max =this.mediadata[0].readlevel[this.readlevel].readlevel_max;
            }else if(this.theme_index==1&&this.readlevel!==''){
                readlevel_min =this.mediadata[1].likelevel[this.readlevel].likelevel_min;
                readlevel_max =this.mediadata[1].likelevel[this.readlevel].likelevel_max;
            }
            this.keyword = this.$store.state.searchkeyword.keyword
            let params = {    
                page:a||'1',
                modular_id: 6,
                theme_id:11,
            }    
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
                this.$store.state.userdata.shopcart_count += 1
                this.btnwait = false
                this.$message({ message: '恭喜你，加入购物车成功',type: 'success'})
            }).catch(err => {
                this.btnwait = false
                if(err.response.status == 401){
                    return this.$message({ message: '加入购物车失败', type: 'warning'})
                }
                this.$message({ message: err.response.data.message, type: 'warning'})
            })
        },
        collection(a,b){                                       //======加入收藏
            if(this.btnwait){return this.$message({message: '操作太频繁,请稍后',type: 'warning'})}
            if(this.$store.state.userdata == ''){return this.$router.push('/login')}
            if(this.$store.state.userdata.identity == 2){return this.$message({message: '媒体主没有此功能',type: 'warning'})}
            this.btnwait=true
            this.issoucanglist.push(b)
            gettoken().then(val => {
                return this.$axios.post('/collectionGoods',{
                    goods_id_json:JSON.stringify({1:a})
                },{ headers: { Authorization: "Bearer" + val } })
            }).then(res =>{
                this.btnwait = false
                this.$message({ message: '恭喜你，收藏成功',type: 'success'})
            }).catch(err =>{
                this.btnwait = false
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
        bp()
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
        readlevel: function(){
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
            this.keyword = a.keyword
            this.loading = true
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
.isshoucang{
    color: #5141ED;
    font-size: 14px;
    padding-bottom: 11px;
    padding-left: 76px;
    background: url('/indexicon/shouc_icon2.png') 52px 3px no-repeat;
    cursor: pointer;
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
    padding: 4px 12px;
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
    width: 109px;
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
    padding: 0 70px 0 62px;
}
.goodslistitem>div:nth-child(2){
    color: skyblue;
}
.goodslistitem>div:nth-child(1),
.goodslistitem>div:nth-child(2),
.goodslistitem>div:nth-child(5){
    display: flex;
    justify-content: center;
    align-items: center;
}
.goodslistitem>div:nth-child(1){
    justify-content: left
}
.goodslistitem>div:nth-child(4){
    display: flex;
    flex-direction:column;
    justify-content: center;
    padding: 0 20px 0 70px;
}
.goodslistitem>div:nth-child(5){
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
    padding: 0 14px;
}
.goodslistcontent>div:nth-child(3){
    width: 180px;
}
.goodslistcontent>div:nth-child(2){
    width: 200px;
    padding: 0 7px;
}
.goodslistcontent>div:nth-child(4),
.goodslistcontent>div:nth-child(5){
    width: 249px;
}
</style>
