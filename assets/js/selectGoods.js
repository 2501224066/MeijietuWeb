import axios from 'axios'
export const selectGoods = async (a) => {
    let params = {
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
    for(var k in a){
        params.k = a.k
    }
    return axios('https://back.meijietu.cn/api/selectGoods',{params:params})
}