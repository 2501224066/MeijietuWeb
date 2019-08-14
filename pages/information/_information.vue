<template>
    <div>
        <headert></headert>
        <div class="zixunbanxin">
            <div class="zixuncont">
                <p>当前位置：媒介兔>媒介资讯</p>
                <div class="zixunleft fl">
                    <h2>{{informationInfo.info.title}}</h2>
                    <p class="zixundate">{{informationInfo.info.time}} {{informationInfo.info.author}} <span>阅读:{{informationInfo.info.read_num}}</span> </p>
                    <!-- <textarea  readonly class="zixuncontent" v-model="informationInfo.info.content" ref="textarea"></textarea> -->
                    <no-ssr placeholder="Loading...">
                        <!-- 此组件仅在客户端呈现 -->
                        <!-- <MarkdownRun :mark="informationInfo.info.content"/> -->
                        <mavon-editor :editable="false" :subfield="false" :toolbarsFlag='false' :defaultOpen="'preview'" v-model="informationInfo.info.content"/>
                    </no-ssr>
                    <div class="fanye">
                        <p class="cr" @click="upinfo">上一篇:{{informationInfo.up&&informationInfo.up.title||'没有上一篇了'}}</p>
                        <p class="cr" @click="downinfo">下一篇:{{informationInfo.down&&informationInfo.down.title||'没有下一篇了'}}</p>
                    </div>
                </div>
                <!-- <div class="zixunright fr" v-if="!loading">
                    <div class="titler">热门媒介推荐</div>
                    <div class="contentr" v-for="(item,index) in indexdata.recommendGoods['视频营销']['短视频']['运动健身']" :key="index">
                        <p class="usernamer"><span>{{item.modular_name}}</span>{{item.title}}</p>
                        <p style="margin:10px 0">领域: {{item.filed_name}}</p>
                        <p>价格: <span class="red font16">￥{{item.goods_price[0].price}}</span></p>
                        <img :src="$store.state.header_img + item.avatar_url" >
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import headert from '@@/components/nobanner.vue';
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
    layout:'header',
    async asyncData({app,params}) {
        let { data } = await app.$axios('/information',{params:{
            information_id:params.information
        }})
        return { informationInfo:data.data }
    },
    data() {
        return {
            informationInfo:'',
            indexdata:'',
            loading: true,
        }
    },
    mounted() {
        // this.$axios('/indexPage').then(res=>{
        //     this.indexdata = res.data.data
        //     this.loading = false
        // }).catch(err => {
        //     this.loading = false
        // })
        
        // this.$refs.textarea.style.height = this.$refs.textarea.scrollHeight + 'px'
    },
    methods: {
        downinfo(){
            if(this.informationInfo.down===null){return}
            this.$router.push('/information/'+this.informationInfo.down.information_id)
        },
        upinfo(){
            if(this.informationInfo.up===null){return}
            this.$router.push('/information/'+this.informationInfo.up.information_id)
        }
    },
    components:{
        headert,mavonEditor
    }
}
</script>
<style scoped>
.zixunbanxin{
    min-height: 600px;
    background-color: #F8F8F8;
    padding-bottom: 50px;
}
.zixuncont{
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
}
.zixuncont > p{
    color: #666;
    padding: 15px 0;
    font-size: 14px;
}
.zixunleft{
    width: 860px;
    background-color: #fff;
    min-height: 760px;
    padding: 26px;
}
p.zixundate{
    color: #666;
    padding: 5px 30px 26px 0;
    border-bottom: 1px solid #D2D2D2;
}
p.zixundate span{
    float: right;
}
h2{
    font-size: 24px;
    font-weight: 500;
}
.fanye{
    padding: 30px 0 5px 0;
    color: #666;
    border-top: 1px solid #D2D2D2;
}
.fanye p{
    margin-bottom: 16px;        
}
.contimage {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
}
/* .zixuncontent{
    width: 100%;
    border: none;
    resize: none;
    text-indent: 2em;
    font-size: 18px;
    margin-bottom: 20px;
    font-family: '微软雅黑';
}
.zixuncontent:focus{
    outline: none;
} */
.zixunright{
    width: 320px;
    padding: 20px;
    background-color: #fff;
}
.titler{
    padding-bottom: 16px;
    font-size: 20px;
}
.contentr{
    height: 140px;
    border-top: 1px solid #D2D2D2;
    padding: 25px 0;
    position: relative;
}
.contentr img{
    width: 80px;
    position: absolute;
    right: 8px;
    top: 27px;
    border-radius: 50%;

}
.contentr p.usernamer{
    color: #242424;
    font-size: 16px;
}
.contentr p.usernamer span{
    padding: 2px 3px;
    background-color: #5141ED;
    font-size: 12px;
    color: #fff;
    margin-right: 5px;
    border-radius: 3px;
}
.contentr p{
    font-size: 14px;
    color: #666;
}
</style>
