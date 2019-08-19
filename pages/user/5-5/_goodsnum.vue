<template>
  <div class="apply">
    <div class="applyheader">
      <div class="tac">修改传媒</div>
    </div>
    <div class="applycontent" v-if="goodsData">
      <div class="applyaline">
        <div class="applyleft">
          <span class="red">*</span>传媒分类:
        </div>
        <div class="applyright">
          {{goodsData.modular_name}}
        </div>
      </div>
      <!-- ===========================微信======================================== -->
      <div v-if="goodsData.modular_id==1">
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>账号名称:
          </div>
          <div class="applyright">
            <el-input v-model="goodsData.title" placeholder="请输入账号名称"></el-input>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>标题简介:
          </div>
          <div class="applyright">
            <el-input v-model="goodsData.title_about" placeholder="请输入标题简介"></el-input>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>微信号:
          </div>
          <div class="applyright">
            <el-input v-model="goodsData.weixin_ID" maxlength="20" placeholder="请输入微信号"></el-input>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>媒体领域:
          </div>
          <div class="applyright">
            <el-select v-model="goodsData.filed_id" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>粉丝数:
          </div>
          <div class="applyright">
            <el-input v-model="goodsData.fans_num" maxlength="10" placeholder="请输入粉丝数"></el-input>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>是否需要预约:
          </div>
          <div class="applyright">
            <el-radio-group v-model="goodsData.reserve_status">
              <el-radio :label="1">是</el-radio>
              <el-radio :label="0">否</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="applyaline" v-for="(value,key,index) in price_data" :key="index">
          <div class="applyleft">
            <span class="red">*</span>
            {{mediadata[modular_index].theme[theme_index].priceclassify[index].priceclassify_name}}价格:
          </div>
          <div class="applyright">
            <el-input v-model="price[key]" :placeholder="price_data[key]"></el-input>
          </div>
        </div>
      </div>
      <!-- =======================================微博===================================================== -->
      <div v-if="goodsData.modular_id==2">
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>微博名称:
          </div>
          <div class="applyright">
            <el-input v-model="goodsData.title" placeholder="请输入微博名称"></el-input>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>标题简介:
          </div>
          <div class="applyright">
            <el-input v-model="goodsData.title_about" placeholder="请输入标题简介"></el-input>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>微博链接:
          </div>
          <div class="applyright">
            <el-input v-model="goodsData.link" placeholder="请输入微博链接"></el-input>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>媒体领域:
          </div>
          <div class="applyright">
            <el-select v-model="goodsData.filed_id" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>是否需要预约:
          </div>
          <div class="applyright">
            <el-radio-group v-model="goodsData.reserve_status">
              <el-radio :label="1">是</el-radio>
              <el-radio :label="0">否</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>认证类型:
          </div>
          <div class="applyright">
            <el-radio-group v-model="goodsData.auth_type">
              <el-radio :label="1">已认证</el-radio>
              <el-radio :label="0">未认证</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="applyaline" v-for="(value,key,index) in price_data" :key="index">
          <div class="applyleft">
            <span class="red">*</span>
            {{mediadata[modular_index].theme[theme_index].priceclassify[index].priceclassify_name}}价格:
          </div>
          <div class="applyright">
            <el-input v-model="price[key]" :placeholder="price_data[key]"></el-input>
          </div>
        </div>
      </div>
      <!-- ========================================视频营销======================================================== -->
      <div v-if="goodsData.modular_id==3">
        <!-- <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>平台选择:
          </div>
          <div class="applyright">
            <el-select v-model="goodsData.platform_id" placeholder="请选择">
              <el-option
                v-for="item in mediadata[modular_index].theme[theme_index].platform"
                :key="item.platform_id"
                :label="item.platform_name"
                :value="item.platform_id"
              ></el-option>
            </el-select>
          </div>
        </div> -->
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>商品名称:
          </div>
          <div class="applyright">
            <el-input v-model="goodsData.title" placeholder="请输入商品名称"></el-input>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>标题简介:
          </div>
          <div class="applyright">
            <el-input v-model="goodsData.title_about" placeholder="请输入标题简介"></el-input>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>房间号/账号ID:
          </div>
          <div class="applyright">
            <el-input v-model="goodsData.room_ID" placeholder="请输入房间号/账号ID"></el-input>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>粉丝数:
          </div>
          <div class="applyright">
            <el-input v-model="goodsData.fans_num" maxlength="15" placeholder="请输入粉丝数量"></el-input>
          </div>
        </div>
       <div class="applyaline" v-for="(value,key,index) in price_data" :key="index">
          <div class="applyleft">
            <span class="red">*</span>
            {{mediadata[modular_index].theme[theme_index].priceclassify[index].priceclassify_name}}价格:
          </div>
          <div class="applyright">
            <el-input v-model="price[key]" :placeholder="price_data[key]"></el-input>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>媒体领域:
          </div>
          <div class="applyright">
            <el-select v-model="goodsData.filed_id" placeholder="请选择">
              <el-option
                v-for="item in mediadata[modular_index].theme[theme_index].filed"
                :key="item.filed_id"
                :label="item.filed_name"
                :value="item.filed_id"
              ></el-option>
            </el-select>
          </div>
        </div>
      </div>
      <!-- <div v-if="goodsData.modular_id==4">
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>平台选择:
          </div>
          <div class="applyright">
            <el-select v-model="platform_id" placeholder="请选择">
              <el-option
                v-for="item in videoGoodsAttribute[1].platform"
                :key="item.platform_id"
                :label="item.platform_name"
                :value="item.platform_id"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>直播商品名称:
          </div>
          <div class="applyright">
            <el-input v-model="goods_title" placeholder="请输入商品名称"></el-input>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>标题简介:
          </div>
          <div class="applyright">
            <el-input v-model="goods_title_about" placeholder="请输入标题简介"></el-input>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>房间号/账号ID:
          </div>
          <div class="applyright">
            <el-input v-model="weixin_ID" placeholder="请输入房间号/账号ID"></el-input>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>粉丝数:
          </div>
          <div class="applyright">
            <el-input v-model="fans_num" maxlength="10" placeholder="请输入粉丝数"></el-input>
          </div>
        </div>
        <div
          class="applyaline"
          v-for="item in videoGoodsAttribute[1].priceclassify"
          :key="item.priceclassify_id"
          v-show="item.tag == tag"
        >
          <div class="applyleft">
            <span class="red">*</span>
            {{item.priceclassify_name}}价格:
          </div>
          <div class="applyright">
            <el-input v-model="price_data[item.priceclassify_id]" maxlength="8" placeholder="请输入价格"></el-input>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>媒体领域:
          </div>
          <div class="applyright">
            <el-select v-model="filed" placeholder="请选择">
              <el-option
                v-for="item in videoGoodsAttribute[1].filed"
                :key="item.filed_id"
                :label="item.filed_name"
                :value="item.filed_id"
              ></el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div v-if="goodsData.modular_id==5">
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>所属分类:
          </div>
          <div class="applyright">
            <el-radio-group v-model="theme_index">
              <el-radio
                v-for="(item,index) in selfmediaGoodsAttribute"
                :key="item.theme_id"
                :label="index"
              >{{item.theme_name}}</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>平台选择:
          </div>
          <div class="applyright">
            <el-select v-model="platform_id" placeholder="请选择">
              <el-option
                v-for="item in selfmediaGoodsAttribute[1].platform"
                :key="item.platform_id"
                :label="item.platform_name"
                :value="item.platform_id"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>账号名称:
          </div>
          <div class="applyright">
            <el-input v-model="goods_title" placeholder="请输入账号名称"></el-input>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>标题简介:
          </div>
          <div class="applyright">
            <el-input v-model="goods_title_about" placeholder="请输入标题简介"></el-input>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>媒体领域:
          </div>
          <div class="applyright">
            <el-select v-model="filed" placeholder="请选择">
              <el-option
                v-for="item in selfmediaGoodsAttribute[theme_index].filed"
                :key="item.filed_id"
                :label="item.filed_name"
                :value="item.filed_id"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>粉丝数量:
          </div>
          <div class="applyright">
            <el-input v-model="fans_num" maxlength="8" placeholder="请输入粉丝数量"></el-input>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>价格:
          </div>
          <div class="applyright">
            <el-input v-model="price" maxlength="8" placeholder="请输入商品价格"></el-input>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>是否需要预约:
          </div>
          <div class="applyright">
            <el-radio-group v-model="isorder">
              <el-radio :label="1">是</el-radio>
              <el-radio :label="0">否</el-radio>
            </el-radio-group>
          </div>
        </div>
      </div> -->
      <!-- =====================================软文============================================================= -->
      <div v-if="goodsData.modular_id==5">
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>媒体名称:
          </div>
          <div class="applyright">
            <el-input v-model="goodsData.title" placeholder="请输入媒体名称"></el-input>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>媒体简介:
          </div>
          <div class="applyright">
            <el-input v-model="goodsData.title_about" maxlength="20" placeholder="请输入标题简介"></el-input>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            入口网址:
          </div>
          <div class="applyright">
            <el-input v-model="goodsData.web_link" placeholder="请输入入口网址"></el-input>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>案例链接:
          </div>
          <div class="applyright">
            <el-input v-model="goodsData.case_link" placeholder="请输入案例链接 "></el-input>
            <span class="elink">网址链接示例:  http://www.baidu.com</span>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>周末是否发稿:
          </div>
          <div class="applyright">
            <el-radio-group v-model="goodsData.weekend_status">
              <el-radio :label="1">是</el-radio>
              <el-radio :label="0">否</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>新闻源:
          </div>
          <div class="applyright">
            <el-radio-group v-model="goodsData.news_source_status">
              <el-radio :label="1">是</el-radio>
              <el-radio :label="0">否</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>是否收录:
          </div>
          <div class="applyright">
            <el-radio-group v-model="goodsData.included_sataus">
              <el-radio :label="1">包收录</el-radio>
              <el-radio :label="0">不包收录</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>链接类型:
          </div>
          <div class="applyright">
            <el-radio-group v-model="goodsData.link_type">
              <el-radio :label="1">可带网址</el-radio>
              <el-radio :label="0">不可带网址</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            限制标题长度:
          </div>
          <div class="applyright">
            <el-input v-model="goodsData.max_title_long" maxlength="2" placeholder="请输入限制长度"></el-input>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>媒体领域:
          </div>
          <div class="applyright">
            <el-select v-model="goodsData.filed_id" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            门户媒体:
          </div>
          <div class="applyright">
            <el-select v-model="goodsData.platform_id" placeholder="请选择">
              <el-option
                v-for="item in mediadata[modular_index].theme[theme_index].platform"
                :key="item.platform_id"
                :label="item.platform_name"
                :value="item.platform_id"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            特殊行业:
          </div>
          <div class="applyright">
            <el-select v-model="goodsData.industry_id" placeholder="请选择">
              <el-option
                v-for="item in mediadata[modular_index].theme[theme_index].industry"
                :key="item.industry_id"
                :label="item.industry_name"
                :value="item.industry_id"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>移动端权重:
          </div>
          <div class="applyright">
            <el-select v-model="goodsData.weightlevel_phone" placeholder="请选择">
              <el-option
                v-for="item in mediadata[modular_index].theme[theme_index].weightlevel"
                :key="item.weightlevel_id"
                :label="item.weightlevel_name"
                :value="item.weightlevel_id"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>PC端权重:
          </div>
          <div class="applyright">
            <el-select v-model="goodsData.weightlevel_pc" placeholder="请选择">
              <el-option
                v-for="item in mediadata[modular_index].theme[theme_index].weightlevel"
                :key="item.weightlevel_id"
                :label="item.weightlevel_name"
                :value="item.weightlevel_id"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>入口种类:
          </div>
          <div class="applyright">
            <el-select v-model="goodsData.entry_status" placeholder="请选择">
              <el-option
                v-for="item in entry_statuslist"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>成本价格(底价):
          </div>
          <div class="applyright">
            <el-input v-model="goodsData.goods_price[0].floor_price" maxlength="8" placeholder="请输入商品价格"></el-input>
          </div>
        </div>
      </div>
       <!-- <div class="applyaline">
        <div class="applyleft">商品头像:</div>
        <div class="applyright touxiang">
           <div>
            <el-upload
              class="avatar-uploader"
              :action="$store.state.imgcodehost+'/uploadImg'"
              :headers="{'Authorization':'Bearer'+ access_token}"
              :data="{upload_type:'head_portrait'}"
              :show-file-list="false"
              name="image"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon">点击上传</i>
            </el-upload>
          </div>
          <div class="uploaderp">支持大小不超过2M的jps,png图片 (可不填)</div>
        </div>
      </div> -->
      <div class="applyaline relative">
        <div class="applyleft">
          <span class="red">*</span>联系QQ:
        </div>
        <div class="applyright">
          <el-input v-model="goodsData.qq_ID" maxlength="15" placeholder="请输入联系QQ"></el-input>
        </div>
      </div>
      <div class="applyaline">
        <div class="applyleft">
          <span class="red">*</span>地区:
        </div>
        <div class="applyright">
          <el-select v-model="goodsData.region_id" placeholder="请选择">
            <el-option
              v-for="item in region"
              :key="item.region_id"
              :label="item.region_name"
              :value="item.region_id"
            ></el-option>
          </el-select>
        </div>
      </div>
      <div class="applyaline">
        <div class="applyleft">商家备注:</div>
        <div class="applyright">
          <el-input v-model="goodsData.remarks" type="textarea" maxlength="150" resize="none" placeholder="请输入备注"></el-input>
        </div>
      </div>
      <div class="applyaline">
        <div class="applyleft"></div>
        <div class="applyright">
          <el-button type="primary" @click="btn" :disabled="iswait" :loading="iswait">{{iswait?'正在修改':'立即修改'}}</el-button>
          <!-- <div class="clause">
            <p>
              我已阅读并同意
              <nuxt-link to="/problem/agreement" tag="span" class="blue cr">《媒介兔用户出售协议》</nuxt-link>
            </p>
            <p v-if="mediaclass!=6&&mediaclass!=5">
              温馨提示 :出售传媒成功交易后,媒介兔将收取传媒成交价格的
              <span class="red">10%</span>作为手续费
            </p>
            <p v-if="mediaclass==6||mediaclass==5">
              温馨提示 :该版块媒介兔不会收取手续费
            </p>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    layout:'user',
    // async asyncData({ app }) {
    //     let { data } = await app.$axios.get("/getGoodsAttribute");
    //     return { 
    //         mediadata: data.data,
    //         region : data.data[0].theme[0].region, //地区列表数据
    //     };
    // },
    data() {
        return {
            mediadata:'',
            region:'',

            goodsData:'',
            price_data:{},
            imageUrl:'',
            iswait:false,
            modular_index:'',
            theme_index:'',
            options:[],
            access_token:'',
            //==========公共参数===========
            // goods_num: '',
            // title: '',
            // title_about: '',
            // qq_ID: '',
            // modular_id: '',
            // theme_id: '',
            // filed_id: '',
            // remarks: '',
            // avatar_url: '',
            // price_json: '',
            //=====================================
            price:{},
            entry_statuslist: [{id:1,name:'没有入口'},{id:2,name:'首页入口'},{id:3,name:'频道入口'},{id:4,name:'上级入口'}],
        }
    },
    methods: {
        test(){
            console.log(this.goodsData)
        },
        updatasusses(){
           this.$message({message: '修改成功',type: 'success'})
            setTimeout(() => {
              // this.$router.push('/user/5-2')
            }, 2000);
        },
        btn(){
            console.log(this.price_data)
            if(this.goodsData.modular_id == 1){
                this.updateGoods({
                    weixin_ID:this.goodsData.weixin_ID,
                    fans_num:this.goodsData.fans_num,
                    reserve_status:this.goodsData.reserve_status,
                    region_id:this.goodsData.region_id
                }).then(res=>{
                    this.updatasusses()
                }).catch(err=>{
                    this.$message({message: '失败'+err.response.data.message,type: 'warning'})
                })
            }else if(this.goodsData.modular_id == 2){
                this.updateGoods({
                    link:this.goodsData.link,
                    auth_type:this.goodsData.auth_type,
                    reserve_status:this.goodsData.reserve_status,
                    region_id:this.goodsData.region_id
                }).then(res=>{
                    this.updatasusses()
                }).catch(err=>{
                    this.$message({message: '失败'+err.response.data.message,type: 'warning'})
                })
            }else if(this.goodsData.modular_id == 5){
                this.updateGoods({
                    max_title_long:this.goodsData.max_title_long,
                    link:this.goodsData.link,
                    case_link:this.goodsData.case_link,
                    news_source_status:this.goodsData.news_source_status,
                    entry_status:this.goodsData.entry_status,
                    included_sataus:this.goodsData.included_sataus,
                    link_type:this.goodsData.link_type,
                    weekend_status:this.goodsData.weekend_status,
                    platform_id:this.goodsData.platform_id,
                    industry_id:this.goodsData.industry_id,
                    region_id:this.goodsData.region_id,
                    phone_weightlevel_id:this.goodsData.phone_weightlevel_id,
                    pc_weightlevel_id:this.goodsData.pc_weightlevel_id,
                    price_json: JSON.stringify({'26':this.goodsData.goods_price[0].floor_price})
                }).then(res=>{
                    this.updatasusses()
                }).catch(err=>{
                    this.$message({message: '失败'+err.response.data.message,type: 'warning'})
                })
            }else if(this.goodsData.modular_id == 3){
                this.updateGoods({
                    room_ID:this.goodsData.room_ID,
                    fans_num:this.goodsData.fans_num,
                    platform_id:this.goodsData.platform_id,
                    region_id:this.goodsData.region_id
                }).then(res=>{
                    this.updatasusses()
                }).catch(err=>{
                    this.$message({message: '失败'+err.response.data.message,type: 'warning'})
                })
            }
        },
        updateGoods(a){
            for(let k in this.price){
                this.price_data[k] = this.price[k]
            }
            let params = {
                goods_num: this.goodsData.goods_num,
                title: this.goodsData.title,
                title_about: this.goodsData.title_about,
                qq_ID: this.goodsData.qq_ID,
                modular_id: this.goodsData.modular_id,
                theme_id: this.goodsData.theme_id,
                filed_id: this.goodsData.filed_id,
                remarks: this.goodsData.remarks,
                avatar_url: this.goodsData.avatar_url,
                price_json: JSON.stringify(this.price_data)
            }
            for(var k in a){
                params[k] = a[k]
            }
            console.log(params)
            return this.$axios.post('/updateGoods',params,{ headers: { Authorization: "Bearer" + localStorage.getItem('access_token') } })
        },
        handleAvatarSuccess(){},
        beforeAvatarUpload(){},
    },
    mounted() {
      this.$axios('/getGoodsAttribute').then(res => {
        this.mediadata = res.data.data
        this.region = res.data.data[0].theme[0].region
      })
        this.$axios('/oneGoodsInfo',{params:{goods_num:this.$route.params.goodsnum}}).then(res =>{
            this.goodsData = res.data.data.data[0]

            // 获取每个参数
            // this.goods_num= this.goodsData.goods_num
            // this.title= this.goodsData.title
            // this.title_about= this.goodsData.title_about
            // this.qq_ID= this.goodsData.qq_ID
            // this.modular_id= this.goodsData.modular_id
            // this.theme_id= this.goodsData.theme_id
            // this.filed_id= this.goodsData.filed_id
            // this.remarks= this.goodsData.remarks
            // this.avatar_url= this.goodsData.avatar_url


            if(this.goodsData.modular_id==1){
                this.modular_index = 0
                this.goodsData.theme_id==1?this.theme_index=0:this.theme_index=1
            }else if(this.goodsData.modular_id==2){
                this.modular_index = 1
                this.goodsData.theme_id==3?this.theme_index=0:this.theme_index=1
            }else if(this.goodsData.modular_id==3){
                this.modular_index = 2
                this.goodsData.theme_id==5?this.theme_index=0:this.theme_index=1
            }else if(this.goodsData.modular_id==4){
                this.modular_index = 3
                this.goodsData.theme_id==7?this.theme_index=0:this.theme_index=1
            }else if(this.goodsData.modular_id==5){
                this.modular_index = 4
                this.theme_index=0
            }else if(this.goodsData.modular_id==6){
                this.modular_index = 5
                this.goodsData.theme_id==10?this.theme_index=0:this.theme_index=1
            }
            this.mediadata[this.modular_index].theme[this.theme_index].filed.forEach(item => {
                this.options.push({ value: item.filed_id, label: item.filed_name });
            })
            this.goodsData.goods_price.forEach((item,index) => {
              if(this.goodsData.modular_id==3){
                if(this.tag == item.tag){this.price_data[item.priceclassify_id] = item.price}
              }else{
                this.price_data[item.priceclassify_id] = item.price
              }
            })
        }).catch(err => {
          console.log(err.response.data)
        })
    },
    computed: {
      tag: function() {
        if (this.goodsData.platform_id == 4) {
          return "小红书";
        } else if (this.goodsData.platform_id == 2) {
          return "bilibili";
        } else if (this.goodsData.platform_id == 10) {
          return "淘宝直播";
        } else {
          return "default";
        }
      }
    },

}
</script>
<style scoped>
/* 上传框样式 */
.touxiang {
  position: relative;
  left: 40px;
}
.touxiang div{
  width: 98px;
  height: 98px;
  overflow: hidden;
}
.touxiang div img{
  width: 100%;
  height: 100%;
}
.el-icon-plus:before {
  color: transparent;
  margin-left: -10px;
}
.avatar-uploader {
  border: 1px solid rgba(210, 210, 210, 1);
  border-radius: 50%;
  background: rgba(248, 248, 248, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 14px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}
.uploaderp {
  width: 116px;
  height: 31px;
  font-size: 12px;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 18px;
  position: absolute;
  left: 130px;
  top: 25px;
}
/* 上传框END */
.applycontent {
  padding-bottom: 30px;
}
.el-input {
  width: 320px;
}
.apply {
  background-color: #fff;
  border-radius: 5px;
}
.applyheader {
  height: 55px;
  border-bottom: 1px #d2d2d2 solid;
}
.applyheader > div {
  width: 120px;
  height: 54px;
  margin-left: 20px;
  padding: 0 10px;
  line-height: 54px;
  border-bottom: 2px #5141ed solid;
}
.applyleft {
  width: 200px;
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  align-items: center;
}
.applyaline {
  margin-top: 30px;
  display: flex;
}
.clause {
  margin-left: 20px;
  font-size: 12px;
  color: #888;
  float: right;
}
.el-select {
  width: 320px;
}
.tishi {
  position: absolute;
  font-size: 12px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(189, 33, 33, 1);
  right: 220px;
  top: -260px;
}
.relative {
  position: relative;
}
.el-textarea {
  width: 320px;
}
.elink{
  font-size: 14px;
  color: rgba(189, 33, 33, 1);
}
</style>