<template>
    <div>
        <headert></headert>
        <div class="banxin" style="padding-bottom:50px">
                <div class="topleft">
                    <div class="topleftname">
                        <div>
                            <div>
                                <div class="fl touxiang">
                                    <img style="width:98px" :src="$store.state.header_img + oneGoodsInfo.avatar_url">
                                    <!-- <span>{{oneGoodsInfo.filed_name}}</span> -->
                                </div>
                                <p class="black">{{oneGoodsInfo.title}} </p>
                                <div class="ericon" v-if="oneGoodsInfo.modular_id == 1">
                                    <div>
                                        <img :src="oneGoodsInfo.qrcode_url" :alt="oneGoodsInfo.title">
                                        <p>扫一扫,查看公众号</p>
                                    </div>
                                </div>
                                <p>领域分类:{{oneGoodsInfo.filed_name}}</p>
                                <p>地区:{{oneGoodsInfo.region_name}}</p>
                                <p class="nowrap">入驻平台 :{{oneGoodsInfo.theme_name}}</p>
                            </div>
                        </div>
                        <div>
                            <p>商品编号:{{oneGoodsInfo.goods_num}}</p>
                            <div>
                                <p class="black">{{oneGoodsInfo.fans_num>=10000?parseInt(oneGoodsInfo.fans_num/10000)+'W+':oneGoodsInfo.fans_num}}</p>
                                <p>粉丝数</p>
                            </div>
                            <div>
                                <p class="black">{{oneGoodsInfo.avg_read_num>=10000?parseInt(oneGoodsInfo.avg_read_num/10000)+'W+':oneGoodsInfo.avg_read_num}}</p>
                                <p>总阅读数</p>
                            </div>
                        </div>
                        <div>
                            <p>媒体评分: 8.7分</p>
                            <p>简介:{{oneGoodsInfo.title_about}}</p>
                        </div>
                    </div>
                    <div class="quotation">
                        <div class="font14">参考报价 <span class="fr font12">注意事项：下单前请先联系客服确认投放时间和价格</span></div>
                        <div>
                            <p class="font12 color666">请选择你要投放的方式</p>
                            <div v-for="(item,index) in oneGoodsInfo.goods_price" :style="index==addcarindex?'border:1px solid #5141ED':''" @click="addcarindex=index" :key="index" v-show="item.price!=='0.00'">
                                <div :style="index==addcarindex?'color:#5141ED':''" class="priceclassify"> <p>{{item.priceclassify_name}}</p> </div> <span class="price">{{item.price}}元</span>
                            </div>
                        </div>
                    </div>
                    <div class="addshop">
                        <div class="addshopcarbtn fl" @click="addcar">加入购物车</div>
                        <div class="collectionBtn fl" @click="collection" :class="isclicksc?'collecd':''" :style="isshoucang==-1?'':'border-color:#5141ED;color:#5141ED;background-image:url(/indexicon/shouc_icon2.png)'">收藏</div>
                        <!-- <div class="bottext fr color666 font12">有10人收藏</div> -->
                    </div>
                </div>
                <div class="topright fr">
                    <img src="/pic/tx_mr002.png" alt="">
                    <div class="kefutile">
                        <span>专属客服</span>
                    </div>
                    <div class="contact">
                        <div>客服咨询: {{salesman.salesman_name}} </div>
                        <div>联系QQ : {{salesman.salesman_qq_ID}}</div>
                        <div>全国热线: 027-87229100</div>
                        <div>客服邮箱: kf@meijietu.cn</div>
                    </div>
                    <div class="contactbtn cr" @click="kefu">联系客服</div>
                </div>
            <div class="mediacontent">
                <div class="contentitem">
                    <div class="itemheader">媒体数据</div>
                    <div class="numbox" v-if="oneGoodsInfo.modular_id == '2'">
                        <div>
                            <p>点赞数</p>
                            <div><p>平均点赞</p><p>{{oneGoodsInfo.avg_like_num}}</p></div>
                            <div><p>最高点赞</p><p>{{oneGoodsInfo.max_like_num}}</p></div>
                            <div><p>总点赞数</p><p>{{oneGoodsInfo.total_like_num}}</p></div>
                        </div>
                        <div>
                            <p>评论数</p>
                            <div><p>平均评论数</p><p>{{oneGoodsInfo.avg_comment_num}}</p></div>
                            <div><p>最高评论数</p><p>{{oneGoodsInfo.max_comment_num}}</p></div>
                            <div><p>总评论数</p><p>{{oneGoodsInfo.total_comment_num}}</p></div>
                        </div>
                        <div>
                            <p>转发数</p>
                            <div><p>平均转发数</p><p>{{oneGoodsInfo.avg_retweet_num}}</p></div>
                            <div><p>最高转发数</p><p>{{oneGoodsInfo.max_retweet_num}}</p></div>
                            <div><p>总转发数</p><p>{{oneGoodsInfo.total_retweet_num}}</p></div>
                        </div>
                    </div>
                    <div class="numbox" v-if="oneGoodsInfo.modular_id == '1'">
                        <div>
                            <p>点赞数</p>
                            <div><p>平均点赞</p><p>{{oneGoodsInfo.avg_like_num}}</p></div>
                            <div><p>最高点赞</p><p>{{oneGoodsInfo.max_like_num}}</p></div>
                            <div><p>总点赞数</p><p>{{oneGoodsInfo.total_like_num}}</p></div>
                        </div>
                        <div>
                            <p>阅读数</p>
                            <div><p>平均阅读数</p><p>{{oneGoodsInfo.avg_read_num}}</p></div>
                            <div><p>最高阅读数</p><p>{{oneGoodsInfo.max_read_num}}</p></div>
                            <div><p>总阅读数</p><p>{{oneGoodsInfo.total_read_num}}</p></div>
                        </div>
                        <div>
                            <p>粉丝数</p>
                            <div><p>{{oneGoodsInfo.fans_num}}</p></div>
                        </div>
                    </div>
                    <div class="numbox" v-if="oneGoodsInfo.modular_id == '3'">
                        <div>
                            <p>点赞数</p>
                            <div><p>平均点赞</p><p>{{oneGoodsInfo.avg_like_num}}</p></div>
                            <div><p>最高点赞</p><p>{{oneGoodsInfo.max_like_num}}</p></div>
                            <div><p>总点赞数</p><p>{{oneGoodsInfo.total_like_num}}</p></div>
                        </div>
                        <div>
                            <p>笔记数</p>
                            <div><p>{{oneGoodsInfo.notes_num}}</p></div>
                        </div>
                        <div>
                            <p>粉丝数</p>
                            <div><p>{{oneGoodsInfo.fans_num}}</p></div>
                        </div>
                    </div>
                </div>
                <div class="contentitem">
                     <div class="itemheader">购买流程</div>
                     <div class="itemcont">
                         <div>
                             <p>选择媒体</p>
                             <p class="font12 color666" style="margin-top:5px">选择您需要的媒体</p>
                             <span><img src="/indexicon/goods_lc00.png"></span>
                         </div>
                         <div>
                             <p>支付资金</p>
                             <p class="font12 color666" style="margin-top:5px">确定投放支付款项</p>
                             <span><img src="/indexicon/goods_lc00.png"></span>
                         </div>
                         <div>
                             <p>客服进入</p>
                             <p class="font12 color666" style="margin-top:5px">客服进入督促订单</p>
                             <span><img src="/indexicon/goods_lc00.png"></span>
                         </div>
                         <div>
                             <p>媒体执行</p>
                             <p class="font12 color666" style="margin-top:5px">执行订单客服跟进</p>
                             <span><img src="/indexicon/goods_lc00.png"></span>
                         </div>
                         <div>
                             <p>验收完成</p>
                             <p class="font12 color666" style="margin-top:5px">验收投放，完成订单</p>
                         </div>
                     </div>
                </div>
                <!-- <div class="contentitem">
                    <div class="itemheader" style="margin:0">常见问题</div>
                    <div class="goumailiucheng">
                        <div>
                            <p>小峰：需要我自己在你们平台充值吗？</p>
                            <p>平台：客户可跟自己的来调整。</p>
                        </div>
                        <div>
                            <p>小峰：需要我自己在你们平台充值吗？</p>
                            <p>平台：客户可跟自己的来调整。</p>
                        </div>
                        <div>
                            <p>小峰：需要我自己在你们平台充值吗？</p>
                            <p>平台：客户可跟自己的来调整。</p>
                        </div>
                    </div>
                </div> -->
            </div>
            <!-- <div class="contentitem">
                <div class="itemheader" style="margin:0">相关推荐</div>
            </div> -->
        </div>
    </div>
</template>

<script>
import headert from '@@/components/header.vue';
import { gettoken,hmt,bp } from "@@/assets/commen.js";
export default {
    layout:'header',
    async asyncData({app,params}) {
        let { data } = await app.$axios('/oneGoodsInfo',{params:{
            goods_num: params.goodsid,
        }})
        return { oneGoodsInfo:data.data.data[0] }
    },
    data() {
        return {
            addcarindex:0,
            iswait:false,
            isclicksc:false,
            salesman:''
        }
    },
    head(){
        return{
            title:this.oneGoodsInfo.title+'_媒介兔-全行业&全流程_获客整合营销平台',
            meta:[
                {hid: 'description', name: 'description', content: this.oneGoodsInfo.title + '-' + this.oneGoodsInfo.title_about}
            ]
        }
    },
    mounted() {
        bp()
        hmt()
        window.document.body.style.background = '#f8f8f8'
        this.salesman =JSON.parse(localStorage.getItem('salesman'))||{} 
    },
    methods: {
        addcar(){
            if(this.addcarindex===''){ return this.$message({message: '请选择商品种类',type: 'warning'})}
            if(this.iswait==true){return this.$message({message: '请稍等',type: 'warning'})}
            if(this.$store.state.userdata==''){
                return this.$router.push('/login')
            }
            if(this.$store.state.userdata.identity != 1){return this.$message({message: '你尚未拥有此功能',type: 'warning'})}
            this.iswait = true
            gettoken().then(val=>{
                return this.$axios.post('/joinShopcart',{
                    goods_id_json:JSON.stringify({[this.oneGoodsInfo.goods_id]:this.oneGoodsInfo.goods_price[this.addcarindex].goods_price_id})
                },{headers:{'Authorization':'Bearer'+val}})
            }).then(res=>{
                this.$store.state.userdata.shopcart_count += 1
                this.$message({message: '添加成功',type: 'success'})
                this.iswait=false
            }).catch(err=>{
                this.$message.error('添加失败'+err.response.data.message)
                this.iswait=false
            })
        },
        collection(){
            if(this.isshoucang!=-1){return this.$message({message: '已收藏',type: 'warning'})}
            if(this.iswait==true){return this.$message({message: '请稍等',type: 'warning'})}
            this.isclicksc=true
            this.iswait = true
            if(this.$store.state.userdata==''){
                return this.$router.push('/login')
            }
            gettoken().then(val=>{
                return this.$axios.post('/collectionGoods',{goods_id_json:JSON.stringify({1:this.oneGoodsInfo.goods_id})},{headers:{'Authorization':'Bearer'+val}})
            }).then(res=>{
                this.$message({message: '收藏成功',type: 'success'})
                
                this.iswait=false
            }).catch(err=>{
                this.$message.error('收藏失败'+err.response.data.message)
                this.iswait=false
                this.isclicksc=false
            })
        },
        kefu(){
            window.open('https://wpa.qq.com/msgrd?v=3&uin='+JSON.parse(localStorage.getItem('salesman')).salesman_qq_ID+'&site=qq&menu=yes') 
        },
    },
    computed:{
        collectionArr(){
            return this.$store.state.userdata.collectionArr
        },
        isshoucang(){
            return this.collectionArr instanceof Array?this.collectionArr.indexOf(this.oneGoodsInfo.goods_id):-1
        }
    },
    components:{
        headert
    },
}
</script>
<style scoped>
.banxin{
    width: 1200px;
    margin: 0 auto;
}
.topleft{
    width:924px;
    height:446px;
    padding: 30px;
    display: inline-block;
    background:rgba(255,255,255,1);
    border-radius:3px;
    box-shadow:0px 3px 7px 0px rgba(0, 0, 0, 0.11);
}
.topright{
    width: 264px;
    height: 446px;
    padding: 30px;
    margin-left: 6px;
    background:rgba(255,255,255,1);
    border-radius:3px;
    box-shadow:0px 3px 7px 0px rgba(0, 0, 0, 0.11);
    display: flex;
    flex-direction: column;
    align-items: center;
}
.mediacontent{
    margin-top: 10px;
    background:rgba(255,255,255,1);
    border-radius:3px;
    box-shadow:0px 3px 7px 0px rgba(0, 0, 0, 0.11);
}
.topleftname{
    height: 140px;
    display: flex;
}
.topleftname p {
    color: #666;
    font-size: 14px;
    margin: 3px 0;
}
.topleftname p.black{
    color: #242424;
    font-size: 19px;
}
.topleftname > div:nth-child(1){
    width: 333px;
    height: 102px;
    border-right: 1px dashed #D2D2D2;
    /* background-image: url('/pic/tx_mr002.png'); */
    /* background-repeat: no-repeat; */
}
.topleftname > div:nth-child(2){
    width: 288px;
    text-align: center;
    border-right: 1px dashed #D2D2D2;
    height: 102px;
}
.topleftname > div:nth-child(2)>div{
    width: 50%;
    float: left;
    margin-top: 20px;
}
.topleftname > div:nth-child(3){
    width: 240px;
    padding-left: 40px;
}
.touxiang{
    width: 108px;
    height: 118px;
    margin-right: 20px;
    padding: 5px;
    position: relative;
    background: url('/pic/goodsbgc.png') no-repeat
}
.touxiang span{
    position: absolute;
    display: block;
    left: 20px;
    bottom: 10px;
    padding: 5px 10px;
    background-color: #5141ED;
    border-radius: 12px;
    font-size: 12px;
    color: #fff;   
}
.touxiang img{
    border-radius: 50%;
}
.quotation{
    height: 176px;
    margin-bottom: 25px;
    border-radius:3px;
}
.quotation>div:nth-child(1){
    height: 40px;
    line-height: 40px;
    background:linear-gradient(88deg,rgba(87,71,241,1) 0%,rgba(64,87,251,1) 100%);
    padding: 0 15px;
    color: #fff;
}
.quotation>div:nth-child(2){
    overflow: hidden;
    background-color: #F8F7FF;
    padding: 16px 14px 35px 14px;
}
.quotation>div:nth-child(2)>div{
    border: 1px solid #888;
    float: left;
    border-radius: 3px;
    margin: 5px 19px 0 0;
    cursor: pointer;
}
.addshopcarbtn{
    width:134px;
    height:42px;
    background-color: #5141ED;
    line-height: 42px;
    padding-left: 46px;
    border-radius:3px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    background-image: url('/indexicon/lee_icon003.png');
    background-repeat: no-repeat;
    background-position: 20px 11px;
    margin: 0 30px; 
}
.collectionBtn{
    width: 90px;
    height: 42px;
    text-align: center;
    line-height: 42px;
    border: 1px solid #D2D2D2;
    border-radius: 3px;
    padding-left: 25px;
    font-size: 14px;
    color: #666;
    background: 18px 14px url('/indexicon/shouc_icon01.png') no-repeat;
    cursor: pointer;
}
.bottext{
    margin-top: 30px;
}
.kefutile{
    margin-top:25px;
    border-bottom: 1px dashed #ccc;
    width: 100%;
    position: relative;
}
.kefutile span{
    position: absolute;
    left: 68px;
    top: -13px;
    background-color: #fff;
}
.contact{
    width: 100%;
    height: 180px;
    background-color: #F8F7FF;
    margin-top: 40px;
    border-radius: 3px 3px 0 0;
}
.contact>div{
    height: 45px;
    border-bottom: 1px dashed #D2D2D2;
    padding-left: 21px;
    line-height: 45px;
    color: #666;
    font-size: 14px;
}
.contactbtn{
    width:204px;
    height:42px;
    background:rgba(81,65,237,1) 42px 12px url('/indexicon/lee_icon004.png') no-repeat;
    border-radius:0px 0px 3px 3px;
    text-align: center;
    line-height: 42px;
    color: #fff;
    font-size: 14px;
}
.contentitem{
    padding: 34px 30px;
    border-bottom: 1px solid #D2D2D2;
}
.contentitem .itemheader {
    padding: 0 10px;
    font-size: 24px;
    border-left: 3px solid #5141ED;
    margin-bottom: 19px;
}
.numbox{
    display: flex;
    justify-content: space-between;
}
.numbox>div{
    width: 360px;
    height: 118px;
    float: left;
    /* background-color: orange; */
    font-size: 14px;
    border-radius: 5px;
}
.numbox>div:nth-child(1){
    background: url('/pic/goods_num01.png') no-repeat
}
.numbox>div:nth-child(2){
    background: url('/pic/goods_num02.png') no-repeat
}
.numbox>div:nth-child(3){
    background: url('/pic/goods_num03.png') no-repeat
}
.numbox>div>div{
    width: 120px;
    text-align: center;
    line-height: 24px;
    color: #fff;
    float: left;
}
.numbox>div>p{
    width: 300px;
    float: left;
    color: #fff;
    font-size: 16px;
    margin: 16px
}
.itemcont{
 height: 75px;
}
.itemcont >div{
    height: 75px;
    width: 210px;
    display: flex;
    align-items:flex-start;
    justify-content: center;
    padding-left: 100px;
    flex-direction: column;
    float: left;
    position: relative;
}
.itemcont >div:nth-child(1){
    background: url('/indexicon/goods_lc01.png') 55px 21px no-repeat;
}
.itemcont >div:nth-child(2){
    background: url('/indexicon/goods_lc02.png') 55px 21px no-repeat;
}
.itemcont >div:nth-child(3){
    background: url('/indexicon/goods_lc03.png') 55px 21px no-repeat;
}
.itemcont >div:nth-child(4){
    background: url('/indexicon/goods_lc04.png') 55px 21px no-repeat;
}
.itemcont >div:nth-child(5){
    background: url('/indexicon/goods_lc05.png') 55px 21px no-repeat;
}
.itemcont >div span{
    position: absolute;
    right: -35px;
    top: 28px;
}
.goumailiucheng{
    margin-left: 20px;
}
.goumailiucheng > div{
    height: 110px;
    border-bottom: 1px dashed #D2D2D2;
    padding-top: 27px;
}
.goumailiucheng > div:nth-child(3){
    border-bottom: none;
    height: 80px;
}
.goumailiucheng > div p{
    margin-bottom: 8px
}
.collecd{
    border-color:#5141ED;
    color:#5141ED;
    background-image:url(/indexicon/shouc_icon2.png)
}
.priceclassify{
    width: 68px;
    height: 62px;
    padding: 10px 10px 10px 12px;
    float: left;
    font-size: 14px;
    color: #666;
    border-right: 1px dashed #d2d2d2;
    display: table;
}
.priceclassify p{
    display: table-cell; 
    vertical-align:middle; 
    text-align:center;
}
.price{
    font-size: 20px;
    color: #DE0D0D;
    line-height: 60px;
    padding: 0 10px;
}
.ericon{
    position: relative;
    width: 21px;
    height: 21px;
    display: inline-block;
    top: 5px;
    margin: 2px 5px;
    z-index: 9;
    background: url('/indexicon/woa_code.webp') no-repeat
}
.ericon > div{
    display: none;
    top: -53px;
    left: 35px;
    width: 146px;
    height: 164px;
    overflow: hidden;
    border-radius: 6px;
    position: absolute;
    background-color: #fff;
    padding: 8px 13px 0 13px;
    box-shadow: 0 2px 24px 0 rgba(164,176,203,.3);
}
.ericon img {
    width: 120px;
    height: 120px;
    display: block;
}
.ericon:hover{
    background: url('/indexicon/woa_code_h.webp') no-repeat
}
.ericon:hover div{
    display: block;
    z-index: 10;
}
.ericon p {
    color: #666;
    font-size: 12px;
    margin-top: 6px;
    line-height: 12px;
    text-align: center;
}
</style>
