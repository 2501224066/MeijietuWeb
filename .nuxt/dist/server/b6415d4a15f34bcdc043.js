exports.ids=[11],exports.modules={100:function(t,e){},163:function(t,e,o){"use strict";o.r(e);var d=o(100),r=o.n(d);for(var n in d)"default"!==n&&function(t){o.d(e,t,function(){return d[t]})}(n);e.default=r.a},258:function(t,e,o){"use strict";o.r(e);var d=o(2),r={layout:"phone",data:()=>({banner:[{img:""},{img:""}],goodslist:[],value:1,iswait:!0}),methods:{goods(a){this.$router.push("/m/goods/"+a)}},mounted(){this.$axios.get("/banner").then(t=>{this.banner=t.data.data}),localStorage.getItem("mshouye")?(this.goodslist=JSON.parse(localStorage.getItem("mshouye")),this.iswait=!1):this.$axios("/recommendGoods").then(t=>{this.goodslist=t.data.data["微信营销"]["公众号"]["金融理财"],this.iswait=!1,localStorage.setItem("mshouye",JSON.stringify(this.goodslist))}),localStorage.getItem("access_token")&&Object(d.b)().then(t=>this.$axios.post("/me",{},{headers:{Authorization:"Bearer"+t}})).then(t=>{console.log(t.data.data),localStorage.setItem("userdata",this.data.data)}).catch(t=>{})}},n=o(1);var component=Object(n.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._ssrNode('<div class="mheader" data-v-6c7fa4a1><img src="/m/logo01.png" alt="媒介兔" data-v-6c7fa4a1></div> <div class="banner" data-v-6c7fa4a1><img'+t._ssrAttr("src",t.$store.state.header_img+t.banner[1].img)+" alt data-v-6c7fa4a1></div> "),t._ssrNode('<div class="mtab" data-v-6c7fa4a1>',"</div>",[o("nuxt-link",{attrs:{to:"/m/weixin",tag:"div"}},[o("img",{attrs:{src:"/m/tab01.png",alt:"微信营销"}}),o("p",[t._v("微信营销")])]),t._ssrNode(" "),o("nuxt-link",{attrs:{to:"/m/video",tag:"div"}},[o("img",{attrs:{src:"/m/tab02.png",alt:"视频营销"}}),o("p",[t._v("视频营销")])]),t._ssrNode(" "),o("nuxt-link",{attrs:{to:"/m/weibo",tag:"div"}},[o("img",{attrs:{src:"/m/tab03.png",alt:"微博营销"}}),o("p",[t._v("微博营销")])]),t._ssrNode(" "),o("nuxt-link",{attrs:{to:"/m/seo",tag:"div"}},[o("img",{attrs:{src:"/m/tab04.png",alt:"SEO"}}),o("p",[t._v("SEO")])])],2),t._ssrNode(" "),o("div",{directives:[{name:"loading",rawName:"v-loading",value:t.iswait,expression:"iswait"}],staticClass:"mgoods"},[t._ssrNode('<div class="mgoods_header" data-v-6c7fa4a1>\n            热门媒体\n        </div> '+t._ssrList(t.goodslist,function(e,o){return'<div class="mgoods_list" data-v-6c7fa4a1><img'+t._ssrAttr("src",t.$store.state.header_img+e.avatar_url)+t._ssrAttr("alt",e.title)+' class="headerImg" data-v-6c7fa4a1> <div data-v-6c7fa4a1><div class="goodstitle" data-v-6c7fa4a1>'+t._ssrEscape(t._s(e.title))+"</div> <div data-v-6c7fa4a1>"+t._ssrEscape("所属分类: "+t._s(e.theme_name))+"</div> <div data-v-6c7fa4a1>"+t._ssrEscape("粉丝数: "+t._s(e.fans_num))+'</div></div> <img src="/indexicon/mgoods01.png" alt="进入详情" class="jinru" data-v-6c7fa4a1></div>'}))])],2)},[],!1,function(t){var e=o(163);e.__inject__&&e.__inject__(t)},"6c7fa4a1","42f81422");e.default=component.exports}};
//# sourceMappingURL=b6415d4a15f34bcdc043.js.map