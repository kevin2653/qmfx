(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-957e43e2"],{"214f":function(t,e,a){"use strict";var o=a("32e9"),r=a("2aba"),i=a("79e5"),l=a("be13"),s=a("2b4c");t.exports=function(t,e,a){var d=s(t),n=a(l,d,""[t]),c=n[0],u=n[1];i(function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})&&(r(String.prototype,t,c),o(RegExp.prototype,d,2==e?function(t,e){return u.call(t,this,e)}:function(t){return u.call(t,this)}))}},"24ec":function(t,e,a){"use strict";var o=a("5e8c"),r=a.n(o);r.a},33290:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mod-prod-info"},[a("el-form",{ref:"dataForm",attrs:{model:t.dataForm,rules:t.rules,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"商品名称:",prop:"title",rules:[{required:!0,message:"商品名称不能为空"}]}},[a("el-col",{attrs:{span:8}},[a("el-input",{attrs:{placeholder:"请输入",maxlength:"50"},model:{value:t.dataForm.title,callback:function(e){t.$set(t.dataForm,"title",e)},expression:"dataForm.title"}})],1)],1),a("el-form-item",{attrs:{label:"商品视频:"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"http://admin.zhanchengwlkj.com:8080/distribution_backstage/file/addFile",accept:".mp4,.qlv,.qsv,.ogg,.flv,.avi,.wmv,.rmvb",data:t.video,"show-file-list":!1,name:"files","before-upload":t.beforeUploadVideo,"on-success":t.handleVideoSuccess,"on-progress":t.uploadVideoProcess}},[""!=t.dataForm.video&&0==t.videoFlag?a("video",{attrs:{src:t.dataForm.video,width:"350",height:"180",controls:"controls"}},[t._v("您的浏览器不支持视频播放")]):""==t.dataForm.video&&0==t.videoFlag?a("i",{staticClass:"el-icon-plus avatar-uploader-icon"}):t._e(),1==t.videoFlag?a("el-progress",{staticStyle:{"margin-top":"30px"},attrs:{type:"circle",percentage:t.videoUploadPercent}}):t._e()],1),a("el-button",{on:{click:t.delvidio}},[t._v("删除")])],1),a("el-form-item",{attrs:{label:"商品主图:",prop:"picfile"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"http://admin.zhanchengwlkj.com:8080/distribution_backstage/file/addFile","show-file-list":!1,"auto-upload":!0,name:"files","on-success":t.uploadImg,"before-upload":t.beforeAvatarUpload}},[t.dataForm.cover?a("img",{staticClass:"avatar",attrs:{src:t.dataForm.cover}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",{attrs:{label:"商品图片:"}},[a("el-upload",{attrs:{action:"http://admin.zhanchengwlkj.com:8080/distribution_backstage/file/addFile","list-type":"picture-card",name:"files","file-list":t.dataForm.productImageList,"auto-upload":!0,"on-success":t.uploadImgTwo,"on-preview":t.handlePictureCardPreview,"on-remove":t.handleRemove}},[a("i",{staticClass:"el-icon-plus"})]),a("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1),a("el-form-item",{staticStyle:{"margin-top":"10px"},attrs:{label:"商品分类(必选)"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.dataForm.typeId,callback:function(e){t.$set(t.dataForm,"typeId",e)},expression:"dataForm.typeId"}},t._l(t.prodtypelist,function(t){return a("el-option",{key:t.tid,attrs:{label:t.title,value:t.tid}})}))],1),a("el-form-item",{attrs:{label:"商品货号:",prop:"productNumber",rules:[{required:!0,message:"商品货号不能为空"}]}},[a("el-col",{attrs:{span:8}},[a("el-input",{attrs:{placeholder:"请输入",maxlength:"50"},model:{value:t.dataForm.productNumber,callback:function(e){t.$set(t.dataForm,"productNumber",e)},expression:"dataForm.productNumber"}})],1)],1),a("el-form-item",{attrs:{label:"库存:",prop:"totalStock",rules:[{required:!0,message:"库存不能为空"}]}},[a("el-col",{attrs:{span:8}},[a("el-input",{attrs:{placeholder:"请输入",maxlength:"50"},model:{value:t.dataForm.totalStock,callback:function(e){t.$set(t.dataForm,"totalStock",e)},expression:"dataForm.totalStock"}})],1)],1),a("el-form-item",{attrs:{label:"商品零售价:",prop:"price",rules:[{required:!0,message:"商品零售价不能为空"}]}},[a("el-col",{attrs:{span:8}},[a("el-input",{attrs:{placeholder:"请输入",maxlength:"50"},model:{value:t.dataForm.price,callback:function(e){t.$set(t.dataForm,"price",e)},expression:"dataForm.price"}})],1)],1),a("el-form-item",{attrs:{label:"运费模板："}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.dataForm.retailFreightId,callback:function(e){t.$set(t.dataForm,"retailFreightId",e)},expression:"dataForm.retailFreightId"}},t._l(t.freightlist,function(t){return a("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})}))],1),a("el-form-item",{attrs:{label:"简介:",prop:"productIntro"}},[a("el-col",{attrs:{span:8}},[a("el-input",{attrs:{placeholder:"请输入",maxlength:"50"},model:{value:t.dataForm.productIntro,callback:function(e){t.$set(t.dataForm,"productIntro",e)},expression:"dataForm.productIntro"}})],1)],1),a("el-form-item",{attrs:{label:"商品详情："}},[a("div",{staticStyle:{"text-align":"left"},attrs:{id:"editorElem"}})]),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dataFormSubmit()}}},[t._v("确定")])],1)],1)],1)},r=[],i=(a("7f7f"),a("cadf"),a("551c"),a("097d"),a("a27a")),l=a("bc3a"),s=a.n(l);a("6b54"),a("a481"),a("2b0e"),a("a18c"),a("4360");var d=a("1a0b"),n=a.n(d),c={name:"editor",data:function(){return{videoFlag:!1,videoUploadPercent:"0%",transportId:null,shopid:0,video:{},shopup:"1",shopdown:"1",value1:"",attrtext:"",attributeDepList:[],category:{list:[],selected:[],props:{value:"categoryId",label:"categoryName"}},rules:{checkList:[{type:"array",required:!0,message:"请选择代理购买方式",trigger:"change"}],picfile:[{required:!0,message:"请上传图片"}]},showvidio:"",fileList:[],prodtypelist:[],allfreight:"",AttributeDepShow:!1,secondDepShow:!1,imageShowUrl:"",shoptypelist:[],skuList:[],prodName:"",dialogImageUrl:"",dialogVisible:!1,dataForm:{cover:"",typeId:"",productImageList:[]},tags:[],retailFreightId:"",freightlist:[]}},components:{},props:{depId:{required:!0}},computed:{defalutSku:function(){return this.$store.state.prod.defalutSku}},activated:function(){this.dataForm.prodId=this.$route.query.prodId,this.getDataList()},methods:{getDataList:function(){},delvidio:function(){this.dataForm.video=""},handleRemove:function(t,e){for(var a=0;a<this.dataForm.productImageList.length;a++)t.url==this.dataForm.productImageList[a].url&&this.dataForm.productImageList.splice(a,1)},uploadImgTwo:function(t){this.dataForm.productImageList.push({sort:0,url:t.data})},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},removeDomain:function(t){for(var e=0;e<this.attributeDepList.length;e++)this.attributeDepList[e].name==t.name&&this.attributeDepList.splice(e,1)},delshoptype:function(t){for(var e=0;e<this.shoptypelist.length;e++)this.shoptypelist[e].tid==t&&this.shoptypelist.splice(e,1)},uploadImg:function(t){this.dataForm.cover=t.data,this.imageShowUrl=t.data,this.rules.picfile=[{required:!0,message:"请上传图片"}],""!=this.dataForm.cover&&(this.rules.picfile=[])},beforeAvatarUpload:function(t){var e="image/jpeg"===t.type||"image/png"===t.type,a=t.size/1024/1024<2;return e||this.$message.error("上传头像图片只能是 JPG或者PNG 格式!"),a||this.$message.error("上传头像图片大小不能超过 2MB!"),e&&a},beforeUploadVideo:function(t){var e=t.size/1024/1024<2e3;if(!e)return this.$message.error("上传视频大小不能超过2000MB哦!"),!1},uploadVideoProcess:function(t,e,a){this.videoFlag=!0,this.videoUploadPercent=parseInt(e.percentage)},handleVideoSuccess:function(t,e){this.videoFlag=!1,this.videoUploadPercent=0,this.dataForm.video="",console.log(this.dataForm.video),this.dataForm.video=t.data},dataFormSubmit:function(){var t=this;this.$refs["dataForm"].validate(function(e){if(e)if(0!=t.shopid){var a={cover:t.dataForm.cover,detailMobile:t.dataForm.detailMobile,price:t.dataForm.price,typeId:t.dataForm.typeId,productImageList:t.dataForm.productImageList,productIntro:t.dataForm.productIntro,productNumber:t.dataForm.productNumber,sales:t.dataForm.sales,title:t.dataForm.title,totalStock:t.dataForm.totalStock,video:t.dataForm.video,pid:t.shopid,retailFreightId:t.dataForm.retailFreightId};Object(i["g"])(a).then(function(e){var a=e.data;200==a.code?(t.$message({type:"success",message:"修改产品成功"}),t.$emit("close-form"),t.$emit("finish-action")):t.errorMsg(a.message)}).catch(function(e){console.log(e),t.tableLoading=!1})}else{var o={cover:t.dataForm.cover,detailMobile:t.dataForm.detailMobile,price:t.dataForm.price,typeId:t.dataForm.typeId,productImageList:t.dataForm.productImageList,productIntro:t.dataForm.productIntro,productNumber:t.dataForm.productNumber,sales:t.dataForm.sales,title:t.dataForm.title,totalStock:t.dataForm.totalStock,video:t.dataForm.video,retailFreightId:t.dataForm.retailFreightId};Object(i["f"])(o).then(function(e){var a=e.data;200==a.code?(t.$message({type:"success",message:"添加产品成功"}),t.$emit("close-form"),t.$emit("finish-action")):t.errorMsg(a.message)}).catch(function(e){console.log(e),t.tableLoading=!1})}})},getproddetail:function(t){var e=this;Object(i["b"])(t).then(function(t){var a=t.data.data;console.log(a),e.dataForm=a;var o=new n.a("#editorElem");o.customConfig.onchange=function(t){e.dataForm.detailMobile=t},e.rules.picfile=[{required:!0,message:"请上传图片"}],""!=e.dataForm.cover&&(e.rules.picfile=[]),o.customConfig.customUploadImg=function(t,e){var a=new FormData;a.append("files",t[0]),s.a.post("http://admin.zhanchengwlkj.com:8080/distribution_backstage/file/addFile",a,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){var a=t.data;e(a.data)})},o.customConfig.uploadImgShowBase64=!0,o.create(),o.txt.html(e.dataForm.detailMobile)}).catch(function(t){e.tableLoading=!1})},errorMsg:function(t){this.$message({message:t,type:"error",duration:1500})},getfreightlist:function(){var t=this,e={current:1,size:100};Object(i["d"])(e).then(function(e){var a=e.data.data.records;t.freightlist=a}).catch(function(e){t.tableLoading=!1})},geprodTypelist:function(){var t=this,e={current:1,size:100};Object(i["e"])(e).then(function(e){var a=e.data.data;t.prodtypelist=a}).catch(function(e){t.tableLoading=!1})}},mounted:function(){var t=this;if(0!=this.depId)this.shopid=this.depId,this.getproddetail(this.depId);else{var e=new n.a("#editorElem");e.customConfig.uploadImgShowBase64=!0,e.customConfig.onchange=function(e){t.dataForm.detailMobile=e},e.customConfig.customUploadImg=function(t,e){var a=new FormData;a.append("files",t[0]),s.a.post("http://admin.zhanchengwlkj.com:8080/distribution_backstage/file/addFile",a,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){var a=t.data;e(a.data)})},e.customConfig.uploadImgShowBase64=!0,e.create()}this.geprodTypelist(),this.getfreightlist()}},u=c,p=(a("24ec"),a("2877")),m=Object(p["a"])(u,o,r,!1,null,"ec843784",null);m.options.__file="prodInfo.vue";e["default"]=m.exports},"5e8c":function(t,e,a){},"7f7f":function(t,e,a){var o=a("86cc").f,r=Function.prototype,i=/^\s*function ([^ (]*)/,l="name";l in r||a("9e1e")&&o(r,l,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},a481:function(t,e,a){a("214f")("replace",2,function(t,e,a){return[function(o,r){"use strict";var i=t(this),l=void 0==o?void 0:o[e];return void 0!==l?l.call(o,i,r):a.call(String(i),o,r)},a]})}}]);