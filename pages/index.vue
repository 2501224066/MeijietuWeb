<template>
  <div class="allbody">
    
    <headert :banner='indexData.banner'></headert>
    <div class="banxin" style="margin-top:200px">
      <div class="plate">
        <div class="plateheader">
          <h3>微信公众号</h3>
          <ul>
            <li :class="weixinclass===1?'select':''" @click="weixinclass=1">金融理财</li>
            <li :class="weixinclass===2?'select':''" @click="weixinclass=2">情感美妆</li>
            <li :class="weixinclass===3?'select':''" @click="weixinclass=3">母婴教育</li>
            <li :class="weixinclass===4?'select':''" @click="weixinclass=4">地域美食</li>
            <li :class="weixinclass===5?'select':''" @click="weixinclass=5">时事资讯</li>
          </ul>
          <nuxt-link  class="fr cr more" to="/search/weixin">查看更多</nuxt-link>
        </div>
        <div v-show="weixinclass===1" class="personcard" v-for="item in indexData.recommendGoods['微信营销']['公众号']['金融理财']" :key="item.goods_id">
          <div class="persontop">
            <div class="persontopclass fl">{{item.filed_name}}</div>
            <div :class="weixincolle.indexOf(item.goods_id)=='-1'?'collection cr fr':'collection cr fr colled'" @click="collection(item.goods_id,item.goods_id)">收藏</div>
            <div class="personportrait cr">
              <nuxt-link :to="'/goods/'+item.goods_num" class="agoods" target="_blank"></nuxt-link>
              <img :src="$store.state.header_img + item.avatar_url">
            </div>
            <p>{{item.title}}</p>
            <p class="price">{{item.goods_price[0].price!=='0.00'?item.goods_price[0].price:item.goods_price[1].price!=='0.00'?item.goods_price[1].price:item.goods_price[2].price!=='0.00'?item.goods_price[2].price:item.goods_price[3].price}}</p>
          </div>
          <div class="personbottom">
            <div>
              <p>{{item.fans_num}}</p>
              <p>粉丝数量</p>
            </div>
            <div>
              <p>{{item.avg_read_num}}</p>
              <p>平均阅读数</p>
            </div>
          </div>
        </div>
        <div v-show="weixinclass===2" class="personcard" v-for="item in indexData.recommendGoods['微信营销']['公众号']['情感美妆']" :key="item.goods_id">
          <div class="persontop">
            <div class="persontopclass fl">{{item.filed_name}}</div>
            <div :class="weixincolle.indexOf(item.goods_id)=='-1'?'collection cr fr':'collection cr fr colled'" @click="collection(item.goods_id,item.goods_id)">收藏</div>
            <div class="personportrait cr">
              <nuxt-link :to="'/goods/'+item.goods_num" class="agoods" target="_blank"></nuxt-link>
              <img :src="$store.state.header_img + item.avatar_url">
            </div>
            <p>{{item.title}}</p>
            <p class="price">{{item.goods_price[0].price!=='0.00'?item.goods_price[0].price:item.goods_price[1].price!=='0.00'?item.goods_price[1].price:item.goods_price[2].price!=='0.00'?item.goods_price[2].price:item.goods_price[3].price}}</p>
          </div>
          <div class="personbottom">
            <div>
              <p>{{item.fans_num}}</p>
              <p>粉丝数量</p>
            </div>
            <div>
              <p>{{item.avg_read_num}}</p>
              <p>平均阅读数</p>
            </div>
          </div>
        </div>
        <div v-show="weixinclass===3" class="personcard" v-for="item in indexData.recommendGoods['微信营销']['公众号']['母婴教育']" :key="item.goods_id">
          <div class="persontop">
            <div class="persontopclass fl">{{item.filed_name}}</div>
            <div :class="weixincolle.indexOf(item.goods_id)=='-1'?'collection cr fr':'collection cr fr colled'" @click="collection(item.goods_id,item.goods_id)">收藏</div>
            <div class="personportrait cr">
              <nuxt-link :to="'/goods/'+item.goods_num" class="agoods" target="_blank"></nuxt-link>
              <img :src="$store.state.header_img + item.avatar_url">
            </div>
            <p>{{item.title}}</p>
            <p class="price">{{item.goods_price[0].price!=='0.00'?item.goods_price[0].price:item.goods_price[1].price!=='0.00'?item.goods_price[1].price:item.goods_price[2].price!=='0.00'?item.goods_price[2].price:item.goods_price[3].price}}</p>
          </div>
          <div class="personbottom">
            <div>
              <p>{{item.fans_num}}</p>
              <p>粉丝数量</p>
            </div>
            <div>
              <p>{{item.avg_read_num}}</p>
              <p>平均阅读数</p>
            </div>
          </div>
        </div>
        <div v-show="weixinclass===4" class="personcard" v-for="item in indexData.recommendGoods['微信营销']['公众号']['地域美食']" :key="item.goods_id">
          <div class="persontop">
            <div class="persontopclass fl">{{item.filed_name}}</div>
            <div :class="weixincolle.indexOf(item.goods_id)=='-1'?'collection cr fr':'collection cr fr colled'" @click="collection(item.goods_id,item.goods_id)">收藏</div>
            <div class="personportrait cr">
              <nuxt-link :to="'/goods/'+item.goods_num" class="agoods" target="_blank"></nuxt-link>
              <img :src="$store.state.header_img + item.avatar_url">
            </div>
            <p>{{item.title}}</p>
            <p class="price">{{item.goods_price[0].price!=='0.00'?item.goods_price[0].price:item.goods_price[1].price!=='0.00'?item.goods_price[1].price:item.goods_price[2].price!=='0.00'?item.goods_price[2].price:item.goods_price[3].price}}</p>
          </div>
          <div class="personbottom">
            <div>
              <p>{{item.fans_num}}</p>
              <p>粉丝数量</p>
            </div>
            <div>
              <p>{{item.avg_read_num}}</p>
              <p>平均阅读数</p>
            </div>
          </div>
        </div>
        <div v-show="weixinclass===5" class="personcard" v-for="item in indexData.recommendGoods['微信营销']['公众号']['时事资讯']" :key="item.goods_id">
          <div class="persontop">
            <div class="persontopclass fl">{{item.filed_name}}</div>
            <div :class="weixincolle.indexOf(item.goods_id)=='-1'?'collection cr fr':'collection cr fr colled'" @click="collection(item.goods_id,item.goods_id)">收藏</div>
            <div class="personportrait cr">
              <nuxt-link :to="'/goods/'+item.goods_num" class="agoods" target="_blank"></nuxt-link>
              <img :src="$store.state.header_img + item.avatar_url">
            </div>
            <p>{{item.title}}</p>
            <p class="price">{{item.goods_price[0].price!=='0.00'?item.goods_price[0].price:item.goods_price[1].price!=='0.00'?item.goods_price[1].price:item.goods_price[2].price!=='0.00'?item.goods_price[2].price:item.goods_price[3].price}}</p>
          </div>
          <div class="personbottom">
            <div>
              <p>{{item.fans_num}}</p>
              <p>粉丝数量</p>
            </div>
            <div>
              <p>{{item.avg_read_num}}</p>
              <p>平均阅读数</p>
            </div>
          </div>
        </div>
      </div>
      <div class="plate">
        <div class="plateheader">
          <h3>微博营销</h3>
          <ul>
            <li :class="weixboclass===1?'select':''" @click="weixboclass=1">IT互联网</li>
            <li :class="weixboclass===2?'select':''" @click="weixboclass=2">财经</li>
            <li :class="weixboclass===3?'select':''" @click="weixboclass=3">旅游</li>
            <li :class="weixboclass===4?'select':''" @click="weixboclass=4">医疗</li>
            <li :class="weixboclass===5?'select':''" @click="weixboclass=5">运动健身</li>
          </ul>
          <nuxt-link  class="fr cr more" to="/search/weibo">查看更多</nuxt-link>
        </div>
        <div v-show="weixboclass===1" class="personcard" v-for="item in indexData.recommendGoods['微博营销']['意见领袖']['IT互联网']" :key="item.goods_id">
          <div class="persontop">
            <div class="persontopclass bgblue fl">{{item.filed_name}}</div>
            <div :class="weixincolle.indexOf(item.goods_id)=='-1'?'collection cr fr':'collection cr fr colled'" @click="collection(item.goods_id,item.goods_id)">收藏</div>
            <div class="personportrait cr">
              <nuxt-link :to="'/goods/'+item.goods_num" class="agoods" target="_blank"></nuxt-link>
              <img :src="$store.state.header_img + item.avatar_url">
            </div>
            <p>{{item.title}}</p>
            <p class="price">{{item.goods_price[0].price!=='0.00'?item.goods_price[0].price:item.goods_price[1].price!=='0.00'?item.goods_price[1].price:item.goods_price[2].price!=='0.00'?item.goods_price[2].price:item.goods_price[3].price}}</p>
          </div>
          <div class="personbottom">
            <div>
              <p>{{item.fans_num}}</p>
              <p>粉丝数量</p>
            </div>
            <div>
              <p>{{item.avg_like_num}}</p>
              <p>平均点赞数</p>
            </div>
          </div>
        </div>
        <div v-show="weixboclass===2" class="personcard" v-for="item in indexData.recommendGoods['微博营销']['意见领袖']['财经']" :key="item.goods_id">
          <div class="persontop">
            <div class="persontopclass bgblue fl">{{item.filed_name}}</div>
            <div :class="weixincolle.indexOf(item.goods_id)=='-1'?'collection cr fr':'collection cr fr colled'" @click="collection(item.goods_id,item.goods_id)">收藏</div>
            <div class="personportrait cr">
              <nuxt-link :to="'/goods/'+item.goods_num" class="agoods" target="_blank"></nuxt-link>
              <img :src="$store.state.header_img + item.avatar_url">
            </div>
            <p>{{item.title}}</p>
            <p class="price">{{item.goods_price[0].price!=='0.00'?item.goods_price[0].price:item.goods_price[1].price!=='0.00'?item.goods_price[1].price:item.goods_price[2].price!=='0.00'?item.goods_price[2].price:item.goods_price[3].price}}</p>
          </div>
          <div class="personbottom">
            <div>
              <p>{{item.fans_num}}</p>
              <p>粉丝数量</p>
            </div>
            <div>
              <p>{{item.avg_like_num}}</p>
              <p>平均点赞数</p>
            </div>
          </div>
        </div>
        <div v-show="weixboclass===3" class="personcard" v-for="item in indexData.recommendGoods['微博营销']['意见领袖']['旅游']" :key="item.goods_id">
          <div class="persontop">
            <div class="persontopclass bgblue fl">{{item.filed_name}}</div>
            <div :class="weixincolle.indexOf(item.goods_id)=='-1'?'collection cr fr':'collection cr fr colled'" @click="collection(item.goods_id,item.goods_id)">收藏</div>
            <div class="personportrait cr" >
              <nuxt-link :to="'/goods/'+item.goods_num" class="agoods" target="_blank"></nuxt-link>
              <img :src="$store.state.header_img + item.avatar_url">
            </div>
            <p>{{item.title}}</p>
            <p class="price">{{item.goods_price[0].price!=='0.00'?item.goods_price[0].price:item.goods_price[1].price!=='0.00'?item.goods_price[1].price:item.goods_price[2].price!=='0.00'?item.goods_price[2].price:item.goods_price[3].price}}</p>
          </div>
          <div class="personbottom">
            <div>
              <p>{{item.fans_num}}</p>
              <p>粉丝数量</p>
            </div>
            <div>
              <p>{{item.avg_like_num}}</p>
              <p>平均点赞数</p>
            </div>
          </div>
        </div>
        <div v-show="weixboclass===4" class="personcard" v-for="item in indexData.recommendGoods['微博营销']['意见领袖']['医疗']" :key="item.goods_id">
          <div class="persontop">
            <div class="persontopclass bgblue fl">{{item.filed_name}}</div>
            <div :class="weixincolle.indexOf(item.goods_id)=='-1'?'collection cr fr':'collection cr fr colled'" @click="collection(item.goods_id,item.goods_id)">收藏</div>
            <div class="personportrait cr" >
              <nuxt-link :to="'/goods/'+item.goods_num" class="agoods" target="_blank"></nuxt-link>
              <img :src="$store.state.header_img + item.avatar_url">
            </div>
            <p>{{item.title}}</p>
            <p class="price">{{item.goods_price[0].price!=='0.00'?item.goods_price[0].price:item.goods_price[1].price!=='0.00'?item.goods_price[1].price:item.goods_price[2].price!=='0.00'?item.goods_price[2].price:item.goods_price[3].price}}</p>
          </div>
          <div class="personbottom">
            <div>
              <p>{{item.fans_num}}</p>
              <p>粉丝数量</p>
            </div>
            <div>
              <p>{{item.avg_like_num}}</p>
              <p>平均点赞数</p>
            </div>
          </div>
        </div>
        <div v-show="weixboclass===5" class="personcard" v-for="item in indexData.recommendGoods['微博营销']['意见领袖']['运动健身']" :key="item.goods_id">
          <div class="persontop">
            <div class="persontopclass bgblue fl">{{item.filed_name}}</div>
            <div :class="weixincolle.indexOf(item.goods_id)=='-1'?'collection cr fr':'collection cr fr colled'" @click="collection(item.goods_id,item.goods_id)">收藏</div>
            <div class="personportrait cr">
              <nuxt-link :to="'/goods/'+item.goods_num" class="agoods" target="_blank"></nuxt-link>
              <img :src="$store.state.header_img + item.avatar_url">
            </div>
            <p>{{item.title}}</p>
            <p class="price">{{item.goods_price[0].price!=='0.00'?item.goods_price[0].price:item.goods_price[1].price!=='0.00'?item.goods_price[1].price:item.goods_price[2].price!=='0.00'?item.goods_price[2].price:item.goods_price[3].price}}</p>
          </div>
          <div class="personbottom">
            <div>
              <p>{{item.fans_num}}</p>
              <p>粉丝数量</p>
            </div>
            <div>
              <p>{{item.avg_like_num}}</p>
              <p>平均点赞数</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div style="width:100%;overflow:hidden;margin-top:30px">
      <img class="bannert" src="/pic/zb_banner002.jpg">
    </div> -->
    <div class="banxin">
      <div class="plate">
        <div class="plateheader">
          <h3>小红书</h3>
          <ul>
            <li :class="videoclass===1?'select':''" @click="videoclass=1">运动健身</li>
            <li :class="videoclass===2?'select':''" @click="videoclass=2">乐活趣玩</li>
            <li :class="videoclass===3?'select':''" @click="videoclass=3">美食餐饮</li>
            <li :class="videoclass===4?'select':''" @click="videoclass=4">美妆护肤</li>
            <li :class="videoclass===5?'select':''" @click="videoclass=5">亲子育儿</li>
          </ul>
          <nuxt-link  class="fr cr more" to="/search/weibo">查看更多</nuxt-link>
        </div>
        <div v-show="videoclass===1" class="personcard" v-for="item in indexData.recommendGoods['视频营销']['短视频']['运动健身']" :key="item.goods_id">
          <div class="persontop">
            <div class="persontopclass bgred fl">{{item.filed_name}}</div>
            <div :class="weixincolle.indexOf(item.goods_id)=='-1'?'collection cr fr':'collection cr fr colled'" @click="collection(item.goods_id,item.goods_id)">收藏</div>
            <div class="personportrait cr">
              <nuxt-link :to="'/goods/'+item.goods_num" class="agoods" target="_blank"></nuxt-link>
              <img :src="$store.state.header_img + item.avatar_url">
            </div>
            <p>{{item.title}}</p>
            <p class="price">{{item.goods_price[0].price!=='0.00'?item.goods_price[0].price:item.goods_price[1].price!=='0.00'?item.goods_price[1].price:item.goods_price[2].price}}</p>
          </div>
          <div class="personbottom">
            <div>
              <p>{{item.fans_num}}</p>
              <p>粉丝数量</p>
            </div>
            <div>
              <p>{{item.avg_like_num}}</p>
              <p>平均点赞数</p>
            </div>
          </div>
        </div>
        <div v-show="videoclass===2" class="personcard" v-for="item in indexData.recommendGoods['视频营销']['短视频']['乐活趣玩']" :key="item.goods_id">
          <div class="persontop">
            <div class="persontopclass bgred fl">{{item.filed_name}}</div>
            <div :class="weixincolle.indexOf(item.goods_id)=='-1'?'collection cr fr':'collection cr fr colled'" @click="collection(item.goods_id,item.goods_id)">收藏</div>
            <div class="personportrait cr">
              <nuxt-link :to="'/goods/'+item.goods_num" class="agoods" target="_blank"></nuxt-link>
              <img :src="$store.state.header_img + item.avatar_url">
            </div>
            <p>{{item.title}}</p>
            <p class="price">{{item.goods_price[0].price!=='0.00'?item.goods_price[0].price:item.goods_price[1].price!=='0.00'?item.goods_price[1].price:item.goods_price[2].price}}</p>          </div>
          <div class="personbottom">
            <div>
              <p>{{item.fans_num}}</p>
              <p>粉丝数量</p>
            </div>
            <div>
              <p>{{item.avg_like_num}}</p>
              <p>平均点赞数</p>
            </div>
          </div>
        </div>
        <div v-show="videoclass===3" class="personcard" v-for="item in indexData.recommendGoods['视频营销']['短视频']['美食餐饮']" :key="item.goods_id">
          <div class="persontop">
            <div class="persontopclass bgred fl">{{item.filed_name}}</div>
            <div :class="weixincolle.indexOf(item.goods_id)=='-1'?'collection cr fr':'collection cr fr colled'" @click="collection(item.goods_id,item.goods_id)">收藏</div>
            <div class="personportrait cr">
              <nuxt-link :to="'/goods/'+item.goods_num" class="agoods" target="_blank"></nuxt-link>
              <img :src="$store.state.header_img + item.avatar_url">
            </div>
            <p>{{item.title}}</p>
            <p class="price">{{item.goods_price[0].price!=='0.00'?item.goods_price[0].price:item.goods_price[1].price!=='0.00'?item.goods_price[1].price:item.goods_price[2].price}}</p>          </div>
          <div class="personbottom">
            <div>
              <p>{{item.fans_num}}</p>
              <p>粉丝数量</p>
            </div>
            <div>
              <p>{{item.avg_like_num}}</p>
              <p>平均点赞数</p>
            </div>
          </div>
        </div>
        <div v-show="videoclass===4" class="personcard" v-for="item in indexData.recommendGoods['视频营销']['短视频']['美妆护肤']" :key="item.goods_id">
          <div class="persontop">
            <div class="persontopclass bgred fl">{{item.filed_name}}</div>
            <div :class="weixincolle.indexOf(item.goods_id)=='-1'?'collection cr fr':'collection cr fr colled'" @click="collection(item.goods_id,item.goods_id)">收藏</div>
            <div class="personportrait cr">
              <nuxt-link :to="'/goods/'+item.goods_num" class="agoods" target="_blank"></nuxt-link>
              <img :src="$store.state.header_img + item.avatar_url">
            </div>
            <p>{{item.title}}</p>
            <p class="price">{{item.goods_price[0].price!=='0.00'?item.goods_price[0].price:item.goods_price[1].price!=='0.00'?item.goods_price[1].price:item.goods_price[2].price}}</p>          </div>
          <div class="personbottom">
            <div>
              <p>{{item.fans_num}}</p>
              <p>粉丝数量</p>
            </div>
            <div>
              <p>{{item.avg_like_num}}</p>
              <p>平均点赞数</p>
            </div>
          </div>
        </div>
        <div v-show="videoclass===5" class="personcard" v-for="item in indexData.recommendGoods['视频营销']['短视频']['亲子育儿']" :key="item.goods_id">
          <div class="persontop">
            <div class="persontopclass bgred fl">{{item.filed_name}}</div>
            <div :class="weixincolle.indexOf(item.goods_id)=='-1'?'collection cr fr':'collection cr fr colled'" @click="collection(item.goods_id,item.goods_id)">收藏</div>
            <div class="personportrait cr">
              <nuxt-link :to="'/goods/'+item.goods_num" class="agoods" target="_blank"></nuxt-link>
              <img :src="$store.state.header_img + item.avatar_url">
            </div>
            <p>{{item.title}}</p>
            <p class="price">{{item.goods_price[0].price!=='0.00'?item.goods_price[0].price:item.goods_price[1].price!=='0.00'?item.goods_price[1].price:item.goods_price[2].price}}</p>          </div>
          <div class="personbottom">
            <div>
              <p>{{item.fans_num}}</p>
              <p>粉丝数量</p>
            </div>
            <div>
              <p>{{item.avg_like_num}}</p>
              <p>平均点赞数</p>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="plate">
        <div class="plateheader">
          <h3>直播</h3>
          <ul>
            <li class="select">推荐</li>
            <li>淘宝直播</li>
            <li>快手</li>
            <li>哔哩哔哩</li>
            <li>美拍</li>
            <li>斗鱼</li>
          </ul>
          <div class="fr more">查看更多</div>
        </div>
        <div class="personcard">
          <div class="persontop">
            <div class="persontopclass bgblue fl">美妆达人</div>
            <div class="collection fr">收藏</div>
            <div class="personportrait">
              <img src="\usericon\personal_002.png">
            </div>
            <p>雪菲---雪菲啊</p>
            <p class="price">6800.00</p>
          </div>
          <div class="personbottom">
            <div>
              <p>36.20W</p>
              <p>粉丝数量</p>
            </div>
            <div>
              <p>64</p>
              <p>平均转发数</p>
            </div>
          </div>
        </div>
        <div class="personcard">
          <div class="persontop">
            <div class="persontopclass bgblue fl">金融理财</div>
            <div class="collection fr">收藏</div>
            <div class="personportrait">
              <img src="\usericon\personal_003.png">
            </div>
            <p>雪菲---雪菲啊</p>
            <p class="price">6800.00</p>
          </div>
          <div class="personbottom">
            <div>
              <p>36.20W</p>
              <p>粉丝数量</p>
            </div>
            <div>
              <p>64</p>
              <p>平均转发数</p>
            </div>
          </div>
        </div>
        <div class="personcard">
          <div class="persontop">
            <div class="persontopclass bgblue fl">金融理财</div>
            <div class="collection fr">收藏</div>
            <div class="personportrait">
              <img src="\usericon\personal_004.png">
            </div>
            <p>雪菲---雪菲啊</p>
            <p class="price">6800.00</p>
          </div>
          <div class="personbottom">
            <div>
              <p>36.20W</p>
              <p>粉丝数量</p>
            </div>
            <div>
              <p>64</p>
              <p>平均转发数</p>
            </div>
          </div>
        </div>
        <div class="personcard">
          <div class="persontop">
            <div class="persontopclass bgblue fl">金融理财</div>
            <div class="collection fr">收藏</div>
            <div class="personportrait">
              <img src="\usericon\personal_003.png">
            </div>
            <p>雪菲---雪菲啊</p>
            <p class="price">6800.00</p>
          </div>
          <div class="personbottom">
            <div>
              <p>36.20W</p>
              <p>粉丝数量</p>
            </div>
            <div>
              <p>64</p>
              <p>平均转发数</p>
            </div>
          </div>
        </div>
        <div class="personcard">
          <div class="persontop">
            <div class="persontopclass bgblue fl">金融理财</div>
            <div class="collection fr">收藏</div>
            <div class="personportrait">
              <img src="\usericon\personal_002.png">
            </div>
            <p>雪菲---雪菲啊</p>
            <p class="price">6800.00</p>
          </div>
          <div class="personbottom">
            <div>
              <p>36.20W</p>
              <p>粉丝数量</p>
            </div>
            <div>
              <p>64</p>
              <p>平均转发数</p>
            </div>
          </div>
        </div>
      </div> -->
     
      <div class="plate">
        <div class="plateheader"><h3>媒介资讯</h3></div>
        <div class="meijiezixuncard" v-for="(item,index) in indexData.information" :key="index">
          <div class="meijiezixun cr" @click="zixun(item.information_id)">
            <img :src="$store.state.header_img + item.motif_img">
            <h4>{{item.title}}</h4>
            <p class="nowrap">{{item.content}}</p>
          </div>
        </div>
      </div>
      <div class="plate" style="padding-bottom:50px">
        <div class="plateheader"><h3>合作机构</h3></div>
        <div class="hezuo"><img src="/hezuo/cooperation01.png"></div>
        <div class="hezuo"><img src="/hezuo/cooperation02.png"></div>
        <div class="hezuo"><img src="/hezuo/cooperation03.png"></div>
        <div class="hezuo"><img src="/hezuo/cooperation04.png"></div>
        <div class="hezuo"><img src="/hezuo/cooperation05.png"></div>
        <div class="hezuo"><img src="/hezuo/cooperation06.png"></div>
        <div class="hezuo"><img src="/hezuo/cooperation07.png"></div>
        <div class="hezuo"><img src="/hezuo/cooperation08.png"></div>
        <div class="hezuo"><img src="/hezuo/cooperation09.png"></div>
        <div class="hezuo"><img src="/hezuo/cooperation10.png"></div>
        <div class="hezuo"><img src="/hezuo/cooperation11.png"></div>
        <div class="hezuo"><img src="/hezuo/cooperation12.png"></div>
        <div class="hezuo"><img src="/hezuo/cooperation13.png"></div>
        <div class="hezuo"><img src="/hezuo/cooperation14.png"></div>
        <div class="hezuo"><img src="/hezuo/cooperation15.png"></div>
        <div class="hezuo"><img src="/hezuo/cooperation16.png"></div>
        <div class="hezuo"><img src="/hezuo/cooperation17.png"></div>
        <div class="hezuo"><img src="/hezuo/cooperation18.png"></div>
      </div>
    </div>
  </div>
</template>

<script>
import headert from '@@/components/indexbanner.vue';
import {gettoken,hmt} from '@@/assets/commen.js'
export default {
  async asyncData({app,params}) {
    // let { data } = await app.$axios('/indexPage')
    let { data:recommendGoods } = await app.$axios('/recommendGoods')
    let { data:banner } = await app.$axios('/banner')
    let { data:information } = await app.$axios('/information')
    return { indexData:{
      recommendGoods:recommendGoods.data,
      banner:banner.data,
      information:information.data
      } }
  },
  layout:'header',
  data() {
    return {
      input: "",
      weixinclass:1,
      weixboclass:1,
      videoclass: 1,
      weixincolle:[],     //商品收藏goods_id数组
      iswait:false,
    };
  },
  components: {
    headert
  },
  methods: {
    collection(a,b){
      if(this.iswait==true){return this.$message({message: '请稍等',type: 'warning'})}
      this.iswait = true
      if(this.$store.state.userdata == ''){return this.$router.push('/login')}
      this.weixincolle.push(b)
      gettoken().then(val=>{
        return this.$axios.post('/collectionGoods',{goods_id_json:JSON.stringify({1:a})},{headers:{'Authorization':'Bearer'+val}})
      }).then(res =>{
        this.$message({message: '收藏成功',type: 'success'})
        this.iswait=false
      }).catch(err =>{
        this.$message.error('收藏失败'+err.response.data.message)
         this.weixincolle.shift()
        this.iswait=false
      })
    },
    getGoodsdetails(val){                          //进入商品详情页
      this.$router.push('/goods/'+val)
    },
    zixun(a){
      this.$router.push('/information/'+a)
    }
  },
  mounted() {
    hmt()
    // localStorage.setItem('salesman',JSON.stringify(this.indexData.randomSalesman))
    if(localStorage.getItem('salesman')==''){
      this.$axios('/randomSalesman',{},{headers:{'Authorization':'Bearer'+localStorage.getItem('access_token')}}).then(res=>{
        localStorage.setItem('salesman',JSON.stringify(res.data.data))
      })
    }
    
    // this.$store.commit('setsalesman',this.indexData)
  },
}
</script>

<style scoped>
.allbody {
  width: 100%;
  background-color: #f7f7f7;
}
.banxin {
  width: 1200px;
  margin: 0 auto;
}
.plateheader {
  overflow: hidden;
  margin-bottom: 20px;
}
.plateheader h3 {
  float: left;
  font-size: 30px;
  font-weight: 400;
  margin-right: 20px;
}
.plateheader ul {
  list-style: none;
  float: left;
  padding: 0 0 6px 0;
  font-size: 14px;
  color: #666;
}
.plateheader ul li {
  float: left;
  padding: 6px 4px;
  margin: 0 18px;
  cursor: pointer;
}
.plateheader ul li.select{
  color: #5141ED;
  border-bottom: 2px #5141ED solid;
}
.plate{
  padding-top: 25px;
   zoom: 1;
}
.plate:before,.plate:after {
  content: "";
  display: block;
  clear: both;
}
.more{
  display: block;
  line-height: 40px;
  font-size: 14px;
  color: #666;
  padding-right: 30px;
  background: url('/indexicon/shouc_icon04.png') 60px 14px no-repeat;
}
.personcard{
  width:230px;
  height:278px;
  float: left;
  margin-right: 10px;
  border-radius:3px;
  background-color: #fff;
  transition: all 0.2s linear;
}
.personcard:hover{
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  transform: translate3d(0,-2px,0)
}
.persontop{
  height: 224px;
  padding: 16px 20px;
  border-bottom:1px #D2D2D2 solid;
  text-align: center;
}
.persontopclass{
  width:68px;
  height:22px;
  background:rgba(97,211,12,1);
  border-radius:11px;
  font-size: 12px;
  color: #fff;
  line-height: 22px;
}
.persontopclass.bgblue{
  background-color: #5141ED;
}
.persontopclass.bgred{
  background-color: #F96163;
}
.collection{
  width: 50px;
  font-size: 14px;
  color: #888;
}
.collection::before{
  content: '';
  display: block;
  float: right;
  width: 20px;
  height: 18px;
  background: url('/indexicon/shouc_icon1.png') 4px 3px no-repeat;
}
.collection.colled{
  color: #5141ED;
}
.collection.colled::before{
  background: url('/indexicon/shouc_icon2.png') 4px 3px no-repeat;
}
.personportrait{
  width: 100px;
  height: 100px;
  margin: 35px auto;
  margin-bottom: 12px;
  position: relative;
}
.personportrait img{
  width:100px;
  border-radius:50%
}
.agoods{
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
}
.price{
  color: #DE0D0D;
  font-size: 14px;
  font-weight: bold;
  margin-top: 6px;
}
.personbottom div{
  width: 50%;
  float: left;
  padding: 8px 20px
}
.personbottom div p:nth-child(1){
  font-size: 14px;
}
.personbottom div p:nth-child(2){
  font-size: 12px;
  color: #888;
}
.meijiezixun{
  width: 390px;
  height: 284px;
  float: left;
  margin-right: 10px;
  background-color: #fff;
}
.meijiezixun img{
  width: 390px;
  height: 210px;
}
.meijiezixun h4{
  font-size: 18px;
  font-weight: 400;
  margin: 5px 0 5px 19px
}
.meijiezixun p{
  font-size: 14px;
  color: #666;
  margin-left: 19px
}
.hezuo{
  float: left;
  margin: 5px
}
.bannert{
  position: relative;
  left: 50%;
  margin-left: -960px;
}
</style>
