exports.ids=[22],exports.modules={118:function(e,t){},172:function(e,t,c){"use strict";c.r(t);var r=c(118),d=c.n(r);for(var n in r)"default"!==n&&function(e){c.d(t,e,function(){return r[e]})}(n);t.default=d.a},238:function(e,t,c){"use strict";c.r(t);var r=c(2),d={layout:"salesman",data:()=>({kefudata:"",currentPage:1,checkList:[],mealList:"",mealListItem:"",dingdanstatus:[{value:0,label:"已完成"},{value:1,label:"未完成"}],activeIndex:0}),mounted(){this.kefudata=JSON.parse(localStorage.getItem("kefu")),this.$axios.post("/mealPoolList",{},{headers:{Authorization:"Bearer"+localStorage.getItem("access_token")}}).then(e=>{this.mealList=e.data.data,this.mealListItem=e.data.data.data[0]}).catch(e=>{this.$message({message:"身份过期,请重新登录",type:"warning"})})},methods:{isactive(a){this.activeIndex=a},allselect(){let e=[];if(this.mealListItem.Children.forEach(t=>{e.push(t.goods_id)}),this.checkList.length==e.length)return this.checkList=[];this.checkList=e},handleCurrentChange(a){Object(r.a)().then(e=>this.$axios.post("/mealPoolList?page="+a,{},{headers:{Authorization:"Bearer"+e}})).then(e=>{this.mealList=e.data.data})},creatxuqiubtn(){if(""==localStorage.getItem("indent_num"))return this.$message({message:"请选择商品",type:"success"});let e={};this.checkList.forEach((t,c)=>{e[c]=t}),this.$axios.post("/softArticleMealCreateDemand",{goods_id_json:JSON.stringify(e),indent_num:localStorage.getItem("indent_num")},{headers:{Authorization:"Bearer"+localStorage.getItem("access_token")}}).then(e=>{this.$message({message:e.data.message,type:"success"}),localStorage.setItem("indent_num","")}).catch(e=>{this.$message.error("失败")})}}},n=c(1);var component=Object(n.a)(d,function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"dingdanall"},[e._ssrNode('<div class="header_c color666" data-v-d87a661c><span data-v-d87a661c>当前位置:软文套餐</span><span class="fr" data-v-d87a661c>'+e._ssrEscape("客服编号:"+e._s(e.kefudata.user_num))+"</span></div> "),e._ssrNode('<div class="dingdan_c" data-v-d87a661c>',"</div>",[e._ssrNode('<div class="selectinput" data-v-d87a661c><p data-v-d87a661c>软文套餐池名称</p> <p data-v-d87a661c>软文套餐池列表</p></div> '),e._ssrNode('<div style="overflow:hidden;" data-v-d87a661c>',"</div>",[e._ssrNode('<div class="c_list" data-v-d87a661c>'+e._ssrList(e.mealList.data,function(t,c){return"<div"+e._ssrClass(null,e.activeIndex===c?"activeclass":"")+" data-v-d87a661c>"+e._ssrEscape(e._s(t.pool_name))+"</div>"})+"</div> "),e._ssrNode('<div class="c_listr" data-v-d87a661c>',"</div>",e._l(e.mealListItem.Children,function(t,r){return e._ssrNode('<div class="ruanwengoods" data-v-d87a661c>',"</div>",[c("el-checkbox-group",{staticClass:"fl",staticStyle:{"margin-right":"10px"},model:{value:e.checkList,callback:function(t){e.checkList=t},expression:"checkList"}},[c("el-checkbox",{attrs:{label:t.goods_id}})],1),e._ssrNode(' <p style="margin-left:20px" data-v-d87a661c>'+e._ssrEscape(e._s(t.title))+"</p>")],2)}),0),e._ssrNode(" "),e._ssrNode('<div class="ruanwenbtn" data-v-d87a661c>',"</div>",[c("el-button",{attrs:{type:"primary"},on:{click:e.allselect}},[e._v("全选")]),e._ssrNode(" "),c("el-button",{attrs:{type:"primary"},on:{click:e.creatxuqiubtn}},[e._v("创建软文套餐需求")])],2)],2),e._ssrNode(" "),e._ssrNode('<div class="fenye" data-v-d87a661c>',"</div>",[c("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-size":15,layout:"prev, pager, next, jumper",total:e.mealList.total},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1)],2)],2)},[],!1,function(e){var t=c(172);t.__inject__&&t.__inject__(e)},"d87a661c","749f58a5");t.default=component.exports}};
//# sourceMappingURL=4839a8f93f6bcb5bdc47.js.map