(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{341:function(e,t,n){},400:function(e,t,n){"use strict";var r=n(341);n.n(r).a},460:function(e,t,n){"use strict";n.r(t);var r=n(6),l={layout:"salesman",data:function(){return{kefudata:"",indentStatus:r.c,user_num:"",phone:"",nickname:"",currentPage:1,serveUser:"",dingdanstatus:[{value:1,label:"订单状态"}]}},mounted:function(){var e=this;this.kefudata=JSON.parse(localStorage.getItem("kefu")),this.$axios.post("/serveUserSelect",{user_num:"",phone:"",nickname:"",identity:"2"},{headers:{Authorization:"Bearer"+localStorage.getItem("access_token")}}).then(function(t){e.serveUser=t.data.data}).catch(function(t){e.$message({message:"身份过期,请重新登录"+t.response.data.message,type:"warning"})})},methods:{handleCurrentChange:function(a){var e=this;this.$axios.post("/serveUserSelect?page="+a,{user_num:"",phone:"",nickname:"",identity:"2"},{headers:{Authorization:"Bearer"+localStorage.getItem("access_token")}}).then(function(t){e.serveUser=t.data.data})},searchbtn:function(){}}},c=(n(400),n(2)),component=Object(c.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dingdanall"},[n("div",{staticClass:"header_c color666"},[n("span",[e._v("当前位置:媒体主")]),n("span",{staticClass:"fr"},[e._v("客服编号:"+e._s(e.kefudata.user_num))])]),e._v(" "),n("div",{staticClass:"dingdan_c"},[n("div",{staticClass:"selectinput"},[n("el-input",{staticStyle:{width:"260px"},attrs:{placeholder:"搜索用户编号"},model:{value:e.user_num,callback:function(t){e.user_num=t},expression:"user_num"}}),e._v(" "),n("el-input",{staticStyle:{width:"260px"},attrs:{placeholder:"搜索用户手机号"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),e._v(" "),n("el-input",{staticStyle:{width:"260px"},attrs:{placeholder:"搜索用户昵称"},model:{value:e.nickname,callback:function(t){e.nickname=t},expression:"nickname"}}),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.searchbtn}},[e._v("搜索")])],1),e._v(" "),n("div",{staticClass:"c_list"},[n("el-row",{staticClass:"c_title"},[n("el-col",{attrs:{span:3}},[n("div",[e._v("用户编号")])]),e._v(" "),n("el-col",{attrs:{span:3}},[n("div",[e._v("登录手机号")])]),e._v(" "),n("el-col",{attrs:{span:3}},[n("div",[e._v("昵称")])]),e._v(" "),n("el-col",{attrs:{span:3}},[n("div",[e._v("性别")])]),e._v(" "),n("el-col",{attrs:{span:3}},[n("div",[e._v("注册时间")])]),e._v(" "),n("el-col",{attrs:{span:3}},[n("div",[e._v("用户余额")])]),e._v(" "),n("el-col",{attrs:{span:3}},[n("div",[e._v("实名认证")])]),e._v(" "),n("el-col",{attrs:{span:3}},[n("div",[e._v("操作")])])],1),e._v(" "),e._l(e.serveUser.data,function(t,r){return n("el-row",{key:r},[n("el-col",{attrs:{span:3}},[n("div",[e._v(e._s(t.user_num))])]),e._v(" "),n("el-col",{attrs:{span:3}},[n("div",[e._v(e._s(t.phone))])]),e._v(" "),n("el-col",{attrs:{span:3}},[n("div",[e._v(e._s(t.nickname))])]),e._v(" "),n("el-col",{attrs:{span:3}},[n("div",[e._v(e._s(1==t.sex?"男":2==t.sex?"女":"未知"))])]),e._v(" "),n("el-col",{attrs:{span:3}},[n("div",[e._v(e._s(t.created_at))])]),e._v(" "),n("el-col",{attrs:{span:3}},[n("div",[e._v(e._s(t.wallet.available_money))])]),e._v(" "),n("el-col",{attrs:{span:3}},[n("div",[e._v(e._s(0==t.realname_status?"未认证":1==t.realname_status?"个人认证":"企业认证"))])]),e._v(" "),n("el-col",{attrs:{span:3}},[n("div",[n("img",{staticClass:"cr",attrs:{src:"/indexicon/kefucaozuo03.png",title:"详细信息"}})])])],1)})],2),e._v(" "),n("div",{staticClass:"fenye"},[n("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-size":15,layout:"prev, pager, next, jumper",total:e.serveUser.total},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1)])])},[],!1,null,"09ad2925",null);t.default=component.exports}}]);