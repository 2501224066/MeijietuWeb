import Vue from 'vue'
import Vuex from 'vuex'
// import { url } from '@@/static/comm.js'
Vue.use(Vuex)

const store = () => new Vuex.Store({
    state:{
        userdata:'',
        imgcodehost:'http://develop_webapi.meijietu.cn/api',       //域名 测试
        // imgcodehost:'https://back.meijietu.cn/api',       //域名 线上
        // imgcodehost: url,
        available_money:'/',                              //个人钱包
        indentBelongSelf:'',                              //个人收藏
        // header_img:'https://zhong-zhi-chuan-mei.oss-cn-beijing.aliyuncs.com/',   //OSS地址
        header_img:'https://cdn.meijietu.cn/',   //OSS地址
        salesman:'',                                      //客服信息
        searchkeyword:'',                                 //搜索字段
        indexdata:'',                                     //首页数据
        token:'',                                         //token
    },
    mutations:{
        setuserdata(state,data){
            state.userdata = data
        },
        setmoney(state,data){
          state.available_money = data
        },
        setindent(state,data){
          state.indentBelongSelf = data
        },
        setsalesman(state,data){
          state.salesman = data
        },
        setsearchkeyword(state,data){
          state.searchkeyword = data
        },
        setindexdata(state,data){
          state.indexdata = data
        },
        settoken(state,data){
          state.token = data
        }
    },
  modules: {
    // city,
  },
  actions: {
    // nuxtServerInit({ commit }, { req }) {
    //   if (req.session.user) {
    //     commit('city', req.session.user)
    //   }
    // }
  }
})

export default store
