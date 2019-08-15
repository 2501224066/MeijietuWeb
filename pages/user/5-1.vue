<template>
  <div class="apply">
    <div class="applyheader">
      <div>申请传媒入住</div>
    </div>
    <div class="applycontent">
      <div class="applyaline">
        <div class="applyleft">
          <span class="red">*</span>传媒分类:
        </div>
        <div class="applyright">
          <el-radio-group v-model="mediaclass" @change="qiehuan">
            <el-radio :label="6">软文</el-radio>
            <el-radio :label="1">微信营销</el-radio>
            <el-radio :label="2">微博营销</el-radio>
            <el-radio :label="3">短视频</el-radio>
            <el-radio :label="4">直播</el-radio>
            <el-radio :label="5">自媒体营销</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div v-if="mediaclass==1">
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>所属分类:
          </div>
          <div class="applyright">
            <el-radio-group v-model="theme_index">
              <el-radio
                v-for="(item,index) in mediadata"
                :key="item.theme_id"
                :label="index"
              >{{item.theme_name}}</el-radio>
            </el-radio-group>
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
            <span class="red">*</span>微信号:
          </div>
          <div class="applyright">
            <el-input v-model="weixin_ID" maxlength="20" placeholder="请输入微信号"></el-input>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>媒体领域:
          </div>
          <div class="applyright">
            <el-select v-model="filed" placeholder="请选择">
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
            <el-input v-model="fans_num" maxlength="10" placeholder="请输入粉丝数"></el-input>
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
        <div class="applyaline" v-for="item in mediadatatitle" :key="item.priceclassify_id">
          <div class="applyleft">
            <span class="red">*</span>
            {{item.priceclassify_name}}价格:
          </div>
          <div class="applyright">
            <el-input v-model="price_data[item.priceclassify_id]" placeholder="请输入价格"></el-input>
          </div>
        </div>
      </div>
      <div v-if="mediaclass==2">
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>所属分类:
          </div>
          <div class="applyright">
            <el-radio-group v-model="theme_index">
              <el-radio
                v-for="(item,index) in weiboGoodsAttribute"
                :key="item.theme_id"
                :label="index"
              >{{item.theme_name}}</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>微博名称:
          </div>
          <div class="applyright">
            <el-input v-model="goods_title" placeholder="请输入微博名称"></el-input>
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
            <span class="red">*</span>微博链接:
          </div>
          <div class="applyright">
            <el-input v-model="weixin_ID" placeholder="请输入微博链接"></el-input>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>媒体领域:
          </div>
          <div class="applyright">
            <el-select v-model="filed" placeholder="请选择">
              <el-option
                v-for="item in weiboGoodsAttribute[theme_index].filed"
                :key="item.filed_id"
                :label="item.filed_name"
                :value="item.filed_id"
              ></el-option>
            </el-select>
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
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>认证类型:
          </div>
          <div class="applyright">
            <el-radio-group v-model="authtype_id">
              <el-radio :label="1">已认证</el-radio>
              <el-radio :label="2">未认证</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div
          class="applyaline"
          v-for="item in weiboGoodsAttribute[theme_index].priceclassify"
          :key="item.priceclassify_id"
        >
          <div class="applyleft">
            <span class="red">*</span>
            {{item.priceclassify_name}}价格:
          </div>
          <div class="applyright">
            <el-input v-model="price_data[item.priceclassify_id]" maxlength="8" placeholder="请输入价格"></el-input>
          </div>
        </div>
      </div>
      <!-- 短视频 -->
      <div v-if="mediaclass==3">
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>平台选择:
          </div>
          <div class="applyright">
            <el-select v-model="platform_id" placeholder="请选择">
              <el-option
                v-for="item in videoGoodsAttribute[0].platform"
                :key="item.platform_id"
                :label="item.platform_name"
                :value="item.platform_id"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>商品名称:
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
            <el-input v-model="fans_num" maxlength="15" placeholder="请输入粉丝数量"></el-input>
          </div>
        </div>
        <div
          class="applyaline"
          v-for="item in videoGoodsAttribute[0].priceclassify"
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
                v-for="item in videoGoodsAttribute[0].filed"
                :key="item.filed_id"
                :label="item.filed_name"
                :value="item.filed_id"
              ></el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div v-if="mediaclass==4">
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
      <div v-if="mediaclass==5">
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
      </div>
      <div v-if="mediaclass==6">
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>媒体名称:
          </div>
          <div class="applyright">
            <el-input v-model="goods_title" placeholder="请输入媒体名称"></el-input>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>媒体简介:
          </div>
          <div class="applyright">
            <el-input v-model="goods_title_about" placeholder="请输入标题简介"></el-input>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            入口网址:
          </div>
          <div class="applyright">
            <el-input v-model="web_link" placeholder="请输入入口网址"></el-input>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>案例链接:
          </div>
          <div class="applyright">
            <el-input v-model="case_link" placeholder="请输入案例链接 "></el-input>
            <span class="elink">网址链接示例:  http://www.baidu.com</span>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>周末是否发稿:
          </div>
          <div class="applyright">
            <el-radio-group v-model="weekend_send">
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
            <el-radio-group v-model="news_source">
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
            <el-radio-group v-model="included_sataus">
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
            <el-radio-group v-model="link_type">
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
            <el-input v-model="max_title_long" maxlength="2" placeholder="请输入限制长度"></el-input>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            <span class="red">*</span>媒体领域:
          </div>
          <div class="applyright">
            <el-select v-model="filed" placeholder="请选择">
              <el-option
                v-for="item in softarticleGoodsAttribute[0].filed"
                :key="item.filed_id"
                :label="item.filed_name"
                :value="item.filed_id"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="applyaline">
          <div class="applyleft">
            门户媒体:
          </div>
          <div class="applyright">
            <el-select v-model="platform_id" placeholder="请选择">
              <el-option
                v-for="item in softarticleGoodsAttribute[0].platform"
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
            <el-select v-model="industry_id" placeholder="请选择">
              <el-option
                v-for="item in softarticleGoodsAttribute[0].industry"
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
            <el-select v-model="weightlevel_phone" placeholder="请选择">
              <el-option
                v-for="item in softarticleGoodsAttribute[0].weightlevel"
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
            <el-select v-model="weightlevel_pc" placeholder="请选择">
              <el-option
                v-for="item in softarticleGoodsAttribute[0].weightlevel"
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
            <el-select v-model="entry_status" placeholder="请选择">
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
            <span class="red">*</span>价格:
          </div>
          <div class="applyright">
            <el-input v-model="price" maxlength="8" placeholder="请输入商品价格"></el-input>
          </div>
        </div>
      </div>
       <div class="applyaline">
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
      </div>
      <div class="applyaline relative">
        <span class="tishi">价格为0或空的时候表示不接单</span>
        <div class="applyleft">
          <span class="red">*</span>联系QQ:
        </div>
        <div class="applyright">
          <el-input v-model="qq_ID" maxlength="15" placeholder="请输入联系QQ"></el-input>
        </div>
      </div>
      <div class="applyaline">
        <div class="applyleft">
          <span class="red">*</span>地区:
        </div>
        <div class="applyright">
          <el-select v-model="region_id" placeholder="请选择">
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
          <el-input v-model="remarks" type="textarea" maxlength="150" resize="none" placeholder="请输入备注"></el-input>
        </div>
      </div>
      <div class="applyaline">
        <div class="applyleft"></div>
        <div class="applyright">
          <el-button type="primary" @click="btn" :disabled="iswait" :loading="iswait">{{iswait?'正在申请':'立即申请'}}</el-button>
          <div class="clause">
            <p>
              我已阅读并同意
              <nuxt-link to="/problem/agreement" tag="span" class="blue cr">《媒介兔用户出售协议》</nuxt-link>
            </p>
            <p v-if="mediaclass!=6&&mediaclass!=5">
              温馨提示 :出售传媒成功交易后,媒介兔将收取传媒成交价格的
              <span class="red">10%</span>作为手续费
            </p>
            <p v-if="mediaclass!=6&&mediaclass!=5">
              温馨提示 :该版块媒介兔不会收取手续费
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gettoken } from "@@/assets/commen.js";
export default {
  layout: "user",
  async asyncData({ app }) {
    let { data } = await app.$axios.get("/getGoodsAttribute");
    return { mediadata: data.data[0].theme,
      region : data.data[0].theme[0].region, //地区列表数据
      weixinGoodsAttribute: data.data[0].theme,
      weiboGoodsAttribute :data.data[1].theme,
      videoGoodsAttribute : data.data[2].theme,
      selfmediaGoodsAttribute : data.data[3].theme,
      softarticleGoodsAttribute : data.data[4].theme,};
  },
  data() {
    return {
      mediaclass: 6,
      theme_index: 0,
      filed: "", //领域
      isorder: "", //是否预约
      platform_id: "", //选择平台
      goods_title: "", //商品名称
      goods_title_about: "", //商品简介
      weixin_ID: "", //微信账号   微博链接
      fans_num: "", //粉丝数量
      region_id: "", //地区编号ID
      remarks: "", //商家备注
      qq_ID: "", //联系QQ
      price_data: {}, //价格种类信息
      price: "", //自媒体 软文 商品价格
      iswait: false,

      web_link: "", //软文链接
      authtype_id: "", //微博认证类型
      weekend_send: "", //软文 是否周末发稿
      news_source: "", //软文 是否新闻源
      sendspeed_id: "", //软文 发稿速度
      industry_id: "", //行业选择
      entry_status: "", //入口状态

      included_sataus: "", //软文   是否包收录
      weightlevel_phone: "", //软文     移动端权重 
      weightlevel_pc: "",  //软文     PC端权重
      link_type: "",       //软文    链接类型
      max_title_long: "",  //软文    限制标题长度
      case_link: "",  //软文   案例链接
      entry_statuslist: [{id:1,name:'没有入口'},{id:2,name:'首页入口'},{id:3,name:'频道入口'},{id:4,name:'上级入口'}],
      head_portrait:'',
      imageUrl:'',
      access_token: '',
      isshangchuan: false,
    };
  },
  methods: {
    succsethen(a){        //入驻成功回调函数
      this.$message({ message: '恭喜你，申请入驻传媒成功',type: 'success'})
      this.iswait = false;
      this.platform_id=this.qq_ID = this.filed = this.goods_title = this.isorder = this.weixin_ID = this.goods_title_about=this.fans_num=this.region_id=this.imageUrl=""
      this.price_data = {};
    },
    errorthen(a){         //申请失败回调函数
      this.$message.error('申请失败:'+a.response.data.message)
      this.iswait = false;
      this.price_data={}
    },
    btn() {
      if(this.isshangchuan){return this.$message({message: '正在上传头像',type: 'success'})}
      if(this.iswait == true){return}
      this.iswait = true
      this.mediadata[this.theme_index].priceclassify.forEach(item => {            //价格种类若不选则为0
        if(!this.price_data[item.priceclassify_id]){
          this.price_data[item.priceclassify_id]='0'
        }
      });
      if (this.mediaclass == 1) {
        gettoken()
          .then(val => {
            //申请微信营销按钮
            return this.$axios.post(
              "/createGoods",
              {
                avatar_url:this.head_portrait,
                theme_id: this.mediadata[this.theme_index].theme_id,
                modular_id: 1,
                title: this.goods_title,
                title_about: this.goods_title_about,
                filed_id: this.filed,
                qq_ID: this.qq_ID,
                remarks: this.remarks,
                price_json: JSON.stringify(this.price_data),
                region_id: this.region_id,
                weixin_ID: this.weixin_ID,
                fans_num: this.fans_num,
                reserve_status: this.isorder
              },
              { headers: { Authorization: "Bearer" + val } }
            );
          })
          .then(res => {
            this.succsethen(res)
          })
          .catch(err => {
            this.errorthen(err)
          });  
      }
      if (this.mediaclass == 2) {
        gettoken()
          .then(val => {
            //申请微博营销按钮
            return this.$axios.post(
              "/createGoods",
              {
                avatar_url:this.head_portrait,
                theme_id: this.weiboGoodsAttribute[this.theme_index].theme_id,
                modular_id: 2,
                title: this.goods_title,
                title_about: this.goods_title_about,
                filed_id: this.filed,
                qq_ID: this.qq_ID,
                remarks: this.remarks,
                price_json: JSON.stringify(this.price_data),
                link:this.weixin_ID,
                region_id: this.region_id,
                auth_type:this.authtype_id,
                reserve_status: this.isorder,
              },
              { headers: { Authorization: "Bearer" + val } }
            );
          })
          .then(res => {
            this.succsethen(res)
          })
          .catch(err => {
            this.errorthen(err)
          });
      }
      if (this.mediaclass == 3 || this.mediaclass == 4) {
        gettoken()
          .then(val => {
            let theme_id;
            if (this.mediaclass == 3) {
              theme_id = this.videoGoodsAttribute[0].theme_id;
            } else if (this.mediaclass == 4) {
              theme_id = this.videoGoodsAttribute[1].theme_id;
            }
            //申请视频销按钮
            return this.$axios.post(
              "/createGoods",
              {
                avatar_url:this.head_portrait,
                theme_id: theme_id,
                modular_id: 3,
                title: this.goods_title,
                title_about: this.goods_title_about,
                filed_id: this.filed,
                qq_ID: this.qq_ID,
                remarks: this.remarks,
                price_json: JSON.stringify(this.price_data),
                room_ID:this.weixin_ID,
                fans_num:this.fans_num,
                platform_id:this.platform_id,
                region_id: this.region_id,
              },
              { headers: { Authorization: "Bearer" + val } }
            );
          })
          .then(res => {
            this.succsethen(res)
          })
          .catch(err => {
            this.errorthen(err)
          });
      }
      if (this.mediaclass == 5) {
        gettoken()
          .then(val => {
            //申请网络营销按钮
            return this.$axios.post(
              "/createGoods",
              {
                avatar_url:this.head_portrait,
                theme_id: this.selfmediaGoodsAttribute[this.theme_index].theme_id,
                modular_id: 4,
                title: this.goods_title,
                title_about: this.goods_title_about,
                filed_id: this.filed,
                qq_ID: this.qq_ID,
                remarks: this.remarks,
                price_json: JSON.stringify(this.price_data),
                reserve_status: this.isorder,
                platform_id: this.platform_id,
                region_id: this.region_id,
              },
              { headers: { Authorization: "Bearer" + val } }
            );
          })
          .then(res => {
            this.succsethen(res)
          })
          .catch(err => {
            this.errorthen(err)
          });
      }
      if (this.mediaclass == 6) {
        if(this.platform_id==''){this.platform_id = '50'}
        if(this.industry_id==''){this.industry_id = '1'}
        if(this.max_title_long == ''){this.max_title_long = '0'}
        gettoken()
          .then(val => {
            //申请软文营销按钮
            return this.$axios.post(
              "/createGoods",
              {
                avatar_url:this.head_portrait,
                theme_id: this.softarticleGoodsAttribute[0].theme_id,
                title: this.goods_title,
                title_about: this.goods_title_about,
                qq_ID: this.qq_ID,
                modular_id: 5,
                filed_id: this.filed,
                remarks: this.remarks,
                price_json: JSON.stringify({26:this.price}),
                max_title_long:this.max_title_long,
                link: this.web_link,
                news_source_status: this.news_source,
                entry_status:this.entry_status,
                included_sataus:this.included_sataus,
                link_type:this.link_type,
                weekend_status: this.weekend_send,
                platform_id: this.platform_id,
                industry_id: this.industry_id,
                region_id: this.region_id,
                phone_weightlevel_id:this.weightlevel_phone,
                pc_weightlevel_id:this.weightlevel_pc,
                case_link:this.case_link
              },
              { headers: { Authorization: "Bearer" + val } }
            );
          })
          .then(res => {
            this.succsethen(res)
          })
          .catch(err => {
            this.errorthen(err)
          });
      }
    },
    qiehuan(val) {
      this.platform_id = this.filed = this.goods_title = this.isorder = this.weixin_ID = this.goods_title_about=this.fans_num=this.region_id=this.imageUrl=""
      this.price_data = {};
      if(val==1){
        this.mediadata = this.weixinGoodsAttribute
      }else if(val==2){
        this.mediadata = this.weiboGoodsAttribute
      }else if(val==3||val==4){
        this.mediadata = this.videoGoodsAttribute
      }else if(val==5){
        this.mediadata = this.selfmediaGoodsAttribute
      }else if(val==6){
        this.mediadata = this.softarticleGoodsAttribute
      }
    },
    handleAvatarSuccess(res, file) {
      this.isshangchuan = false
      this.imageUrl = URL.createObjectURL(file.raw);
      this.head_portrait = res.data.path
    },
    beforeAvatarUpload(){
      this.access_token =localStorage.getItem('access_token')
      this.isshangchuan = true
    }
  },
  mounted() {
    setTimeout(() => {
      this.access_token =localStorage.getItem('access_token')
    }, 2000);
      
  },
  computed: {
    options: function() {
      //媒体类型多选框
      let opt = [];
      this.mediadata[this.theme_index].filed.forEach(item => {
        opt.push({ value: item.filed_id, label: item.filed_name });
      });
      return opt;
    },
    mediadatatitle: function() {
      return this.mediadata[this.theme_index].priceclassify;
    },
    tag: function() {
      if (this.platform_id == 4) {
        return "小红书";
      } else if (this.platform_id == 2) {
        return "bilibili";
      } else if (this.platform_id == 10) {
        return "淘宝直播";
      } else {
        return "default";
      }
    }
  }
};
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
