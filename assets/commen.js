import axios from 'axios'
// import { url } from '@@/static/comm.js'
// const url = 'http://develop_webapi.meijietu.cn/api'          //测试
const url = 'https://back.meijietu.cn/api'                      //线上
export const gettoken = async () => {
    var newtoken
    var oldtoken = localStorage.getItem('access_token')
    try{
        let res = await axios.post( url + '/refresh',{},{headers:{'Authorization':'Bearer'+oldtoken}})
        newtoken = res.data.data.access_token
        localStorage.setItem('access_token',newtoken)
    }catch(err){
        newtoken = ''
        // localStorage.setItem('access_token','')
    }
    return newtoken
}

export const selectGoods = (a) => {
    let params = {
        page:'1',
        modular_id:'1',
        theme_id:'',
        key_word:'',
        filed_id:'',
        platform_id:'',
        industry_id:'',
        region_id:'',
        priceclassify_id:'',
        fansnumlevel_min:'',
        fansnumlevel_max:'',
        readlevel_min:'',
        readlevel_max:'',
        likelevel_min:'',
        likelevel_max:'',
        weekend_status:'',
        included_sataus:'',
        pricelevel_min:'',
        pricelevel_max:''
    }
    if(!a){return axios(url + '/selectGoods',{params:params})}
    for(var k in a){
        if(a[k]===undefined){continue}
        params[k] = a[k]
    }
    return axios(url + '/selectGoods',{params:params})
}
export const hmt = () => {
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?b7e86657f4866b705c6e8a3073759b43";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
    })();
}
export const indentStatus = {
    0:'待付款',
    1:'已付款待接单',
    2:'待接单取消订单',
    3:'卖家拒单',
    4:'交易中',
    5:'交易中买家取消订单',
    6:'交易中卖家取消订单',
    7:'卖方完成',
    8:'全部完成',
    9:'已结算'
}
export const salesman = (a) => {
    return 'https://wpa.qq.com/msgrd?v=3&uin=' + a + '&site=qq&menu=yes'
}
