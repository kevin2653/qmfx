(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c434b71"],{"2e81":function(e,t,n){"use strict";var o=n("6fb5"),r=n.n(o);r.a},"3c43":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-form",{ref:"dataForm",attrs:{"label-width":"150px"}},[n("el-form-item",{attrs:{label:"产品佣金金额:",rules:[{required:!0,message:"产品佣金金额不能为空"}]}},[n("el-col",{attrs:{span:8}},[n("el-input",{attrs:{placeholder:"请输入",maxlength:"50"},model:{value:e.money,callback:function(t){e.money=t},expression:"money"}})],1)],1),n("el-form-item",{attrs:{label:"代理进货价格:",rules:[{required:!0,message:"代理进货价不能为空"}]}},[n("el-col",{attrs:{span:8}},[n("el-input",{attrs:{placeholder:"请输入",maxlength:"50"},model:{value:e.price,callback:function(t){e.price=t},expression:"price"}})],1)],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)],1)},r=[],a=(n("cadf"),n("551c"),n("097d"),n("2a74")),i={name:"prodList",data:function(){return{money:0,price:"",rules:{}}},components:{},props:{awardMoney:{required:!0},levelId:{required:!0},productId:{required:!0},agentPrice:{required:!0}},methods:{dataFormSubmit:function(){var e=this;console.log("awardMoney:"+this.money),console.log("agentLevelId:"+this.levelId),console.log("productId:"+this.productId),console.log("price:"+this.price);""!=this.money&&null!=this.money||(this.money=0);var t={agentLevelId:this.levelId,productId:this.productId,awardMoney:this.money,agentPrice:this.price};Object(a["f"])(t).then(function(t){console.log(t);var n=t.data;200==n.code?(e.$message({type:"success",message:"修改成功"}),e.$emit("close-form"),e.$emit("finish-action")):e.errorMsg(n.message)}).catch(function(t){console.log(t),e.tableLoading=!1})}},mounted:function(){""!=this.awardMoney&&null!=this.awardMoney&&"null"!=this.awardMoney?(this.money=this.awardMoney,""!=this.agentPrice&&null!=this.agentPrice&&"null"!=this.agentPrice&&(this.price=this.agentPrice)):this.money=0}},s=i,l=(n("2e81"),n("2877")),c=Object(l["a"])(s,o,r,!1,null,"661535fa",null);c.options.__file="agentLevelProductAwardSetUpInfo.vue";t["default"]=c.exports},"6fb5":function(e,t,n){}}]);