(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32d6efeb"],{"516f":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"选择代理等级:",rules:[{required:!0,message:"代理等级不能为空"}]}},[a("el-select",{attrs:{clearable:"",placeholder:"全部等级"},model:{value:e.dataForm.agentLevel,callback:function(t){e.$set(e.dataForm,"agentLevel",t)},expression:"dataForm.agentLevel"}},e._l(e.agentLevelist,function(e){return a("el-option",{key:e.value,attrs:{label:e.name,value:e.value}})}))],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)],1)},o=[],r=(a("cadf"),a("551c"),a("097d"),a("5bf4")),l=function(e){return Object(r["a"])({url:"/users/update",method:"put",headers:{token:localStorage.getItem("token")},data:JSON.stringify(e)})},s={name:"membershipInfo",data:function(){return{dataForm:{agentLevel:"",id:""},agentLevelist:[{name:"普通会员",value:"0"},{name:"总代",value:"1"}]}},components:{},props:{usersId:{required:!0}},methods:{dataFormSubmit:function(){var e=this;console.log("agentLevel:"+this.dataForm.agentLevel+" id:"+this.dataForm.id);var t={id:this.usersId,agentLevel:this.dataForm.agentLevel};l(t).then(function(t){console.log(t);var a=t.data;200==a.code?(e.$message({type:"success",message:"修改成功"}),e.$emit("close-form"),e.$emit("finish-action")):e.errorMsg(a.message)}).catch(function(t){console.log(t),e.tableLoading=!1})}},mounted:function(){}},i=s,u=(a("e4a7"),a("2877")),c=Object(u["a"])(i,n,o,!1,null,"529ca83e",null);c.options.__file="membershipSetAgent.vue";t["default"]=c.exports},e4a7:function(e,t,a){"use strict";var n=a("f911"),o=a.n(n);o.a},f911:function(e,t,a){}}]);