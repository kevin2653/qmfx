(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49b70406"],{"4e30":function(t,e,a){"use strict";var o=a("d0e9"),n=a.n(o);n.a},b304:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-form",{ref:"dataForm",attrs:{model:t.dataForm,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"问题标题:",rules:[{required:!0,message:"标题不能为空"}]}},[a("el-col",{attrs:{span:8}},[a("el-input",{attrs:{placeholder:"请输入",maxlength:"50"},model:{value:t.dataForm.title,callback:function(e){t.$set(t.dataForm,"title",e)},expression:"dataForm.title"}})],1)],1),a("el-form-item",{staticStyle:{"margin-top":"10px"},attrs:{label:"问题分类"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.dataForm.typeId,callback:function(e){t.$set(t.dataForm,"typeId",e)},expression:"dataForm.typeId"}},t._l(t.typelist,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),a("el-form-item",{attrs:{label:"问题回答:"}},[a("div",{staticStyle:{"text-align":"left"},attrs:{id:"editorElem"}})]),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dataFormSubmit()}}},[t._v("确定")])],1)],1)],1)},n=[],i=a("c93e"),s=a("b07e"),c=a("bc3a"),r=a.n(c),l=a("1a0b"),d=a.n(l),m={name:"prodList",data:function(){return{dataForm:{title:"",content:"",typeId:""},form:{size:50,current:1},item:{},typelist:[],rules:{}}},components:{},props:{updateId:{required:!0}},methods:{getDetail:function(t){var e=this;this.tableLoading=!0,Object(s["c"])(t).then(function(t){var a=t.data.data;console.log(a),e.item=a,e.dataForm=e.item;var o=new d.a("#editorElem");o.customConfig.uploadImgShowBase64=!0,o.customConfig.onchange=function(t){e.dataForm.content=t},o.customConfig.customUploadImg=function(t,e){var a=new FormData;a.append("files",t[0]),r.a.post("http://admin.zhanchengwlkj.com:8080/distribution_backstage/file/addFile",a,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){var a=t.data;e(a.data)})},o.customConfig.uploadImgShowBase64=!0,o.create(),o.txt.html(e.dataForm.content)}).catch(function(t){})},getQuestionTypeList:function(){var t=this,e=Object(i["a"])({},this.form);Object(s["f"])(e).then(function(e){console.log(e.data.data);var a=e.data.data;t.typelist=a}).catch(function(t){})},dataFormSubmit:function(){var t=this;console.log("title:"+this.dataForm.title+" id:"+this.updateId+" content:"+this.dataForm.content);var e={title:this.dataForm.title,content:this.dataForm.content,typeId:this.dataForm.typeId};0==this.updateId?Object(s["g"])(e).then(function(e){var a=e.data;200===a.code?(t.$message({type:"success",message:"添加成功"}),t.backhtmls(),t.$emit("finish-action")):t.$message.error(e.data.msg)}).catch(function(t){}):(e.id=this.updateId,Object(s["i"])(e).then(function(e){console.log(e);var a=e.data;200==a.code?(t.$message({type:"success",message:"修改成功"}),t.$emit("close-form"),t.$emit("finish-action")):t.errorMsg(a.message)}).catch(function(e){console.log(e),t.tableLoading=!1}))},backhtmls:function(){this.$emit("close-form")}},mounted:function(){var t=this;if(0==this.updateId){var e=new d.a("#editorElem");e.customConfig.uploadImgShowBase64=!0,e.customConfig.onchange=function(e){t.dataForm.content=e},e.customConfig.customUploadImg=function(t,e){var a=new FormData;a.append("files",t[0]),r.a.post("http://admin.zhanchengwlkj.com:8080/distribution_backstage/file/addFile",a,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){var a=t.data;e(a.data)})},e.customConfig.uploadImgShowBase64=!0,e.create()}else this.getDetail(this.updateId);this.getQuestionTypeList()}},u=m,f=(a("4e30"),a("2877")),p=Object(f["a"])(u,o,n,!1,null,"b63c7f26",null);p.options.__file="questionInfo.vue";e["default"]=p.exports},d0e9:function(t,e,a){}}]);