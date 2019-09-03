<template>
    <div class="searchborder">
        <el-select v-model="value" placeholder="请选择" style="width:120px" class="elSele">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
        <el-input v-model="input" placeholder="请输入你要搜索的关键字" class="searchkey" style="borderRadius:0"></el-input>
        <el-button type="primary" class="searchbtn" style="height:37px" @click="searchkeyword">搜索</el-button>
    </div>   
</template>
<script>
export default {
    data() {
        return {
            userdata:'',
            input:'',
            options: [{
                value: '1',
                label: '微信公众号'
                }, {
                value: '2',
                label: '微博'
                },{
                value: '3',
                label: '短视频'
                },{
                value: '4',
                label: '软文营销'
                }
            ],
            value:'1',
        }
    },
    methods: {
        searchkeyword(){
        this.$store.commit('setsearchkeyword',{modula:this.value,keyword:this.input})
        if(this.value=='1'){return this.$router.push('/search/weixin')}
        if(this.value=='2'){return this.$router.push('/search/weibo')}
        if(this.value=='3'){return this.$router.push('/search/video')}
        if(this.value=='4'){return this.$router.push('/search/softarticle')}
        }
    },
}
</script>
<style scoped>
.searchborder{
  display: flex;
  border: 2px solid #5141ED;
  border-radius: 3px;
}
.rightsearch {
  display: flex;
}
.searchkey {
  width: 270px;
  height: 36px;
  border-radius: 3px;
}
.searchkey input,
.searchbtn{
  border-radius: 0;
}
.searchbtn {
  font-size: 16px;
  line-height: 13px;
}
</style>