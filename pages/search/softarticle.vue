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
                <div class="selecttitle">媒体门户</div>
                <div class="selectright">
                    <div :class="[pintai?'':'on']">
                        <div @click="platform = ''"><i :class="[platform === ''?'isselect':'']">不限</i></div>
                        <div v-for="(item,index) in mediadata[theme_index].platform" :key="index" @click="platform = index"><i :class="[index===platform?'isselect':'']">{{item.platform_name}}</i></div>
                    </div>
                </div>
                <a href="javascript:;" class="zhankai" @click="ispintai">展开 <span></span></a>
            </div>
             <div class="selectalign">
                <div class="selecttitle"> 价格(元)</div>
                <div class="selectright">
                    <div>
                        <div @click="pricelevel = ''"><i :class="[pricelevel === ''?'isselect':'']">不限</i></div>
                        <div v-for="(item,index) in mediadata[0].pricelevel" :key="index" @click="pricelevel = index"><i :class="[index===pricelevel?'isselect':'']">{{item.pricelevel_name}}</i></div>
                    </div>
                </div>
            </div>
            <div class="selectalign">
                <div class="selecttitle">收录效果</div>
                <div class="selectright">
                    <div>
                        <div @click="included_sataus = ''"><i :class="[included_sataus=== ''?'isselect':'']">不限</i></div>
                        <div @click="included_sataus = '0'"><i :class="[included_sataus==='0'?'isselect':'']">不包收录</i></div>
                        <div @click="included_sataus = '1'"><i :class="[included_sataus==='1'?'isselect':'']">包收录</i></div>
                    </div>
                </div>
            </div>
             <div class="selectalign">
                <div class="selecttitle">周末接稿</div>
                <div class="selectright">
                    <div>
                        <div @click="weekend_status = ''"><i :class="[weekend_status=== ''?'isselect':'']">不限</i></div>
                        <div @click="weekend_status = '1'"><i :class="[weekend_status==='1'?'isselect':'']">周末可发</i></div>
                        <div @click="weekend_status = '0'"><i :class="[weekend_status==='0'?'isselect':'']">周末不可发</i></div>
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
                        <div v-if="platform!==''" style="width:auto"><span>媒体门户: {{mediadata[theme_index].platform[platform].platform_name}}</span></div>
                        <div v-if="pricelevel!==''" style="width:auto"><span>价格(元):{{mediadata[0].pricelevel[pricelevel].pricelevel_name}}</span></div>
                        <div v-if="included_sataus!==''" style="width:auto"><span>收录效果: {{included_sataus==='0'?'不包收录':'包收录'}}</span></div>
                        <div v-if="weekend_status!==''" style="width:auto"><span>周末接稿: {{weekend_status==='0'?'周末不可发':'周末可发'}}</span></div>
                        <div v-if="region!==''" style="width:auto"><span>地区筛选:{{mediadata[0].region[region].region_name}}</span></div>
                    </div>
                </div>
            </div>
        </div> 
        <div class="goodslist a" v-loading="loading">
            <div class="goodslisttop">
                <el-button class="fl" type="primary" @click="alladd">批量价入购物车</el-button>
                <el-button class="fr lianxi" type="primary" @click="kefu">联系客服</el-button>
            </div>
            <div class="goodslisttitle goodslistcontent">
                <div style="padding-left:40px;"><el-checkbox v-model="isquanxuan">全选</el-checkbox></div>
                <div>媒介名称</div>
                <div>参考报价</div>
                <div>电脑权重</div>
                <div>移动权重</div>
                <div>新闻源</div>
                <div>链接情况</div>
                <div>备注</div>
                <div>操作</div>
            </div>
            <div class="goodslistcontent goodslistitem" v-for="(item,index) in listdata" :key="index">
                <el-checkbox-group :class="index == 0? 'frist':''" v-model="checkList">
                    <el-checkbox :label="index"></el-checkbox>
                </el-checkbox-group>
                <div>
                    <div class="textp">
                        <h4 style="width:160px" class="nowrap">{{item.title}}</h4>
                        <div class="ruanwenlink">
                            <!-- <nuxt-link :to="{name:'item.case_link'}" targer='_blank'>入口</nuxt-link> -->
                            <span v-if="!item.link">入口</span>
                            <a :href="item.link" rel="nofollow" target='_blank' v-if="item.link">入口</a>
                            <a :href="item.case_link" rel="nofollow" target='_blank' v-if="item.case_link">案例</a>
                        </div>
                        <p>领域:{{item.filed_name}}</p>
                        <p class="nowrap" style="width:160px" :title="item.title_about">简介:{{item.title_about}}</p>
                    </div>
                </div>
                 <div>
                    <p>
                        <span class="red fr">￥{{item.goods_price[0].price=='0.00'?'/':item.goods_price[0].price}}</span>
                    </p>
                </div>
                <div>
                    <img :src="$store.state.header_img + item.phone_weightlevel_img" alt="item.title">
                </div>
                <div>
                    <img :src="$store.state.header_img + item.pc_weightlevel_img" alt="item.title">
                </div>
                <div>
                    <p>{{item.news_source_status==0?'非新闻源':item.news_source_status==1?'新闻源':'/'}}</p>
                </div>
                <div><p>{{item.link_type==0?'不可带网址':item.link_type==1?'可带网址':'/'}}</p></div>
                <div :title="item.remarks">
                    {{item.remarks}}
                </div>
                <div>
                    <div @click.stop="collection(item.goods_id,index)" :class="issoucanglist.indexOf(index)==-1?'shoucang':'isshoucang'">收藏</div>
                    <div class="addcar" @click.stop="addshopcar(item.goods_id,item.goods_price[0].goods_price_id)"> 加入购物车 </div>
                </div>
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
        let { data:selectgoods } = await selectGoods({modular_id: 5})
        return { mediadata: data.data[4].theme ,listdata : selectgoods.data.data,
            selectWeixin : selectgoods.data };    
    },
    head(){
        return{
            title:'软文营销|软文推广|软文KOL|软文套餐 - 媒介兔-全行业&全流程_获客整合营销平台'
        }
    },
    data() {
        return {
            isquanxuan:false,
            loading:false,
            listdata:[],
            theme_index:0,
            filed:'',//筛选领域分类
            platform:'',//筛选平台
            included_sataus:'',//筛选收录效果
            weekend_status:'', //筛选周末可发
            hold:true,
            diqu:true,
            pintai:true,
            pricelevel:'',//筛选多图文价格
            region:'',//筛选地区
            selectWeixin:'', //搜索结果
            currentPage:1,
            keyword:'',
            issoucanglist:[],
            btnwait:false,
            checkList:[],
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
        ispintai(){
            if(this.pintai ==true){
                this.pintai = false
            }else{
                this.pintai = true
            }
        },
        // quanxuan(){
        //     if(this.checkList.length == this.listdata.length){return this.checkList = []}
        //     for(let i=0;i<this.listdata.length;i++){
        //         this.checkList.push(i)
        //     }
        // },
        qingkong(){
            this.region = this.filed =this.pricelevel=''
        },
        selectGoods(a){
            this.keyword = this.$store.state.searchkeyword.keyword
            let params = {    
                page:a||'1',
                modular_id: 5,
                theme_id: '',
                priceclassify_id: 26,
                key_word: this.keyword,
                filed_id:this.mediadata[this.theme_index].filed[this.filed]&&this.mediadata[this.theme_index].filed[this.filed].filed_id||'',
                pricelevel_min:this.mediadata[0].pricelevel[this.pricelevel]&&JSON.stringify(this.mediadata[0].pricelevel[this.pricelevel].pricelevel_min)||'',
                pricelevel_max:this.mediadata[0].pricelevel[this.pricelevel]&&this.mediadata[0].pricelevel[this.pricelevel].pricelevel_max||'',
                region_id:this.mediadata[0].region[this.region]&&this.mediadata[0].region[this.region].region_id||'',
                weekend_status: this.weekend_status,
                included_sataus: this.included_sataus,
                platform_id: this.mediadata[this.theme_index].platform[this.platform]&&this.mediadata[this.theme_index].platform[this.platform].platform_id||'',
            }        
            selectGoods(params).then(res=>{
                this.listdata = res.data.data.data
                this.selectWeixin = res.data.data
                this.loading = false
            }).catch(err=>{
                this.loading = false
            })
            this.$store.commit('setsearchkeyword','')
        },
        addshopcar(a,b){
            if(this.btnwait){return this.$message({message: '操作太频繁,请稍后',type: 'warning'})}
            if(localStorage.getItem('userdata')===''){
                return this.$message({
                    message: '需要登陆才能加入购物车',
                    type: 'warning'
                })
            }
            if(JSON.parse(localStorage.getItem('userdata')).identity != 1){return this.$message({message: '你尚未拥有此功能',type: 'warning'})}
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
        handleCurrentChange(val){                        //商品翻页功能
            this.loading = true
            this.selectGoods(val)
        },
        alladd(){
            if(this.btnwait){return this.$message({message: '操作太频繁,请稍后',type: 'warning'})}
            if(this.checkList.length == 0){return this.$message({message: '请选择商品',type: 'warning'})}
            if(localStorage.getItem('userdata')===''){
                return this.$message({
                    message: '需要登陆才能加入购物车',
                    type: 'warning'
                })
            }
            this.btnwait=true
            let goodidjson = {}
            this.checkList.forEach(item => {
                goodidjson[this.listdata[item].goods_id] = this.listdata[item].goods_price[0].goods_price_id
            });
            gettoken().then(val => {
                return this.$axios.post('/joinShopcart',{
                    goods_id_json:JSON.stringify(goodidjson)
                },{ headers: { Authorization: "Bearer" + val } })
            }).then(res => {
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
        isquanxuan: function(a){
            console.log('isquanxuan',a)
            // if(this.checkList.length == this.listdata.length){return this.checkList = []}
            if(!a){return this.checkList = []}
            for(let i=0;i<this.listdata.length;i++){
                this.checkList.push(i)
            }
        },
        platform: function(){
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
        included_sataus: function(){
            this.loading = true
            this.currentPage =1
            this.selectGoods()
        },
        weekend_status: function(){
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
        },
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
.goodslistitem>div:nth-child(1),
.goodslistitem>div:nth-child(3),
.goodslistitem>div:nth-child(4),
.goodslistitem>div:nth-child(5),
.goodslistitem>div:nth-child(6),
.goodslistitem>div:nth-child(7),
.goodslistitem>div:nth-child(8),
.goodslistitem>div:nth-child(9){
    display: flex;
    justify-content: center;
    align-items: center;
}
.goodslistitem>div:nth-child(1){
    padding-left: 20px;
}
.goodslistitem>div:nth-child(2){
    display: flex;
    align-items: center;
    padding-left: 10px;
}
.goodslistitem>div:nth-child(8){
    padding: 20px 0;
    overflow: hidden;
}
.goodslistitem>div:nth-child(9){
    flex-direction: column;
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
}
.goodslistitem p{
    color: #242424;
    font-size: 14px;
    margin-top: 4px;
}
.goodslistitem h4{
    font-weight: 400;
}
.goodslistcontent>div:nth-child(1){
    width: 90px;
}
.goodslistcontent>div:nth-child(2){
    width: 150px;
}
.goodslistcontent>div:nth-child(3),
.goodslistcontent>div:nth-child(4),
.goodslistcontent>div:nth-child(5){
    width: 100px;
}
.goodslistcontent>div:nth-child(6),
.goodslistcontent>div:nth-child(7){
    width: 110px;
}
.goodslistcontent>div:nth-child(8){
    width: 200px;
    margin: 0 30px;
}
.goodslistcontent>div:nth-child(9){
    width: 180px;
}
.ruanwenlink{
    height: 30px;
    padding-top:  5px;
}
.ruanwenlink a{
    display: inline-block;
    width: 40px;
    height: 20px;
    border-radius: 3px;
    border: 1px solid #5141ED;
    text-align: center;
    line-height: 18px;
    font-size: 12px;
    color: #5141ED;
}
.ruanwenlink span{
    display: inline-block;
    width: 40px;
    height: 20px;
    border-radius: 3px;
    border: 1px solid #d2d2d2;
    text-align: center;
    line-height: 18px;
    font-size: 12px;
    color: #d2d2d2;
}
.goodslistitem div.frist{
    padding-left: 7px; 
}
</style>
