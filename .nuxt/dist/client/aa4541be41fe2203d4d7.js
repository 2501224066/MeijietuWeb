(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{370:function(t,e,o){},436:function(t,e,o){"use strict";var n=o(370);o.n(n).a},509:function(t,e,o){"use strict";o.r(e);o(7);var n={layout:"user",data:function(){return{upload:!1,access_token:""}},methods:{down:function(){var t=this;this.$axios("/softArticleBatchExcel").then(function(e){window.open(t.$store.state.header_img+e.data.data.path)})},upsuccess:function(t){var e=this;console.log(t.data.path),this.$axios.post("/goodsBatchAdd",{excel_path:t.data.path,modular_id:5,theme_id:9},{headers:{Authorization:"Bearer"+localStorage.getItem("access_token")}}).then(function(t){e.$message({message:"上传成功",type:"success"})})},uploadbtn:function(){this.upload=!0,this.access_token=localStorage.getItem("access_token")}}},c=(o(436),o(2)),component=Object(c.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._m(0),t._v(" "),o("div",{staticClass:"user_c"},[o("el-button",{attrs:{type:"primary",icon:"el-icon-download"},on:{click:t.down}},[t._v("下载模板")]),t._v(" "),o("el-button",{attrs:{type:"primary",icon:"el-icon-upload2"},on:{click:t.uploadbtn}},[t._v("上传Excel表格")]),t._v(" "),o("p",{staticStyle:{"margin-top":"100px"}},[t._v("1.上传前请下载Excel模板,请参照模板上传")]),t._v(" "),o("p",[t._v("2.目前只有软文营销可以批量上传")]),t._v(" "),o("p",[t._v("3.上传格式.xlsx")])],1),t._v(" "),o("el-dialog",{attrs:{title:"上传文件",visible:t.upload,width:"30%"},on:{"update:visible":function(e){t.upload=e}}},[o("el-upload",{staticClass:"upload-demo",attrs:{action:t.$store.state.imgcodehost+"/uploadFile",name:"file",data:{upload_type:"goods_batch"},headers:{Authorization:"Bearer"+t.access_token},"on-success":t.upsuccess}},[o("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),t._v(" "),o("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只支持xlsx文件,上传前请先下载Excel模板")])],1),t._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.upload=!1}}},[t._v("确 定")])],1)],1)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"applyheader"},[e("div",[this._v("批量入驻媒体")])])}],!1,null,"62379923",null);e.default=component.exports}}]);