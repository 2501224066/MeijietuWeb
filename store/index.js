import Vue from 'vue'
import Vuex from 'vuex'
// import city from './modules/city'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    state:{
        userdata:'',
        // imgcodehost:'http://develop_webapi.meijietu.cn/api',       //域名
        imgcodehost:'https://back.meijietu.cn/api',       //域名
        available_money:'/',                              //个人钱包
        indentBelongSelf:'',                              //个人收藏
        // header_img:'https://zhong-zhi-chuan-mei.oss-cn-beijing.aliyuncs.com/',   //OSS地址
        header_img:'https://cdn.meijietu.cn/',   //OSS地址
        salesman:'',                                      //客服信息
        searchkeyword:'',                                 //搜索字段
        indexdata:'',                                     //首页数据
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
