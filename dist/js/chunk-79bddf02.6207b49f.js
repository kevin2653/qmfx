(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79bddf02"],{3230:function(t,e,n){"use strict";var i=n("fdd7"),a=n.n(i);a.a},"57da":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"header"},[n("p",[t._v("运费模板列表")]),n("el-button",{attrs:{type:"primary"},on:{click:t.addProtype}},[t._v("添加运费模板")])],1),n("div",{staticClass:"table_body"},[t._l(t.tableData,function(e,i){return n("div",{key:i,staticStyle:{border:"1px solid #000","margin-bottom":"10px"}},[n("div",{staticClass:"freightbox"},[n("label",{staticStyle:{float:"left",display:"block"}},[t._v(t._s(e.title)+"("+t._s(e.freightNum)+"个商品使用)")]),n("label",{staticStyle:{float:"right",display:"block"}},[n("span",[t._v("最后展开时间:"+t._s(e.gmtModified)+" ")]),n("span",{staticStyle:{"margin-right":"10px"},on:{click:function(n){t.changeProtype(e.id)}}},[t._v("编辑")]),n("el-dropdown",{on:{command:function(n){return t.handleCommand(e.id,n)}}},[n("span",{staticClass:"el-dropdown-link"},[t._v("\n                            更多"),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"4",disabled:e.freightNum>=1}},[t._v("删除模板")])],1)],1),n("span",{staticStyle:{"margin-left":"10px"},on:{click:function(n){t.changeform(i,e.id)}}},[t._v(t._s(e.isshow?"关闭":"展开"))])],1)]),1==e.isshow?n("div",[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableform,"row-key":"id",border:"",size:"medium "}},[n("el-table-column",{attrs:{prop:"title",label:"运送方式","min-width":"180"}}),n("el-table-column",{attrs:{prop:"title",label:"配送区域","min-width":"180"}}),n("el-table-column",{attrs:{prop:"firstNumber",label:"首件(件)","min-width":"180"}}),n("el-table-column",{attrs:{prop:"firstPrice",label:"首费","min-width":"180"}}),n("el-table-column",{attrs:{prop:"renewNumber",label:"续件(件)","min-width":"180"}}),n("el-table-column",{attrs:{prop:"renewPrice",label:"续费","min-width":"180"}})],1)],1):t._e()])}),n("div",{staticClass:"table-footer--APP",attrs:{slot:"append"},slot:"append"},[n("el-pagination",{attrs:{"current-page":t.form.current,"page-sizes":[10,20,30,40,50,60,70,80,90],"page-size":t.form.size,layout:"total, sizes, prev, pager, next, jumper",total:t.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],2),n("div",[n("el-dialog",{attrs:{title:this.isEdit?"修改运费模板":"添加运费模板","append-to-body":!0,visible:t.secondDepShow,width:"80%"},on:{"update:visible":function(e){t.secondDepShow=e}}},[t.secondDepShow?n("second-index",{attrs:{"prodgroup-id":t.groupId},on:{"finish-action":t.getAllFrieghtList,"close-form":function(e){t.secondDepShow=!1}}}):t._e()],1)],1)])},a=[],o=n("c93e"),s=(n("cadf"),n("551c"),n("097d"),n("fbf5")),r=function(){return n.e("chunk-107b2fa0").then(n.bind(null,"3de7"))},l={name:"prodList",data:function(){return{form:{size:10,current:1},formtwo:{size:10,current:1},nowindex:"",tableData:[],totalCount:0,tableLoading:!1,isEdit:!1,groupId:0,secondDepShow:!1}},components:{SecondIndex:r},methods:{changeform:function(t,e){if(t==this.nowindex&&""!==this.nowindex)this.tableData[t].isshow?this.getFrieghtList(t,e,1):this.tableData[t].isshow=!this.tableData[t].isshow;else{for(var n=0;n<this.tableData.length;n++)this.tableData[n].isshow=!1;this.nowindex=t,this.getFrieghtList(t,e,2)}},getFrieghtList:function(t,e,n){var i=this;Object(o["a"])({},this.form);this.tableLoading=!0,Object(s["d"])(e).then(function(e){var a=e.data.data;i.tableData[t].tableform=a.freightRegionList,i.tableData[t].isshow=1!=n||!i.tableData[t].isshow}).catch(function(t){i.tableLoading=!1})},handleCommand:function(t,e){var n=this;console.log(e),console.log(t),4==e&&Object(s["b"])(t).then(function(t){t.data.data;n.$message({type:"success",message:"删除成功"}),n.getAllFrieghtList()}).catch(function(t){n.tableLoading=!1})},getAllFrieghtList:function(){var t=this,e=Object(o["a"])({},this.formtwo);this.tableLoading=!0,Object(s["c"])(e).then(function(e){for(var n=e.data.data,i=n.records,a=0;a<i.length;a++)i[a].isshow=!1;t.tableData=i,t.totalCount=n.total}).catch(function(e){t.tableLoading=!1})},handleAddType:function(){this.groupId=0,this.isEdit=!1,this.secondDepShow=!0},handleChange:function(t){this.groupId=t,this.isEdit=!1,this.secondDepShow=!0},handleDel:function(t){var e=this,n={pgids:t};deleteGroupAPI(n).then(function(t){var n=t.data,i="success";200===n.code?e.getGroupList():i="error",e.$message({type:i,message:"success"===i?"删除成功！":n.msg})})},handleSizeChange:function(t){this.form.size=t,this.getAllFrieghtList()},handleCurrentChange:function(t){this.form.current=t,this.getAllFrieghtList()},changeProtype:function(t){this.handleChange(t)},addProtype:function(){this.handleAddType()}},created:function(){this.getAllFrieghtList()}},d=l,c=(n("3230"),n("2877")),h=Object(c["a"])(d,i,a,!1,null,"6fb7d716",null);h.options.__file="freightTemplateList.vue";e["default"]=h.exports},fbf5:function(t,e,n){"use strict";n.d(e,"d",function(){return a}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return s}),n.d(e,"e",function(){return r}),n.d(e,"b",function(){return l});var i=n("5bf4"),a=function(t){return Object(i["a"])({url:"/freights/info/"+t,method:"get"})},o=function(t){return Object(i["a"])({url:"/freights/list",method:"get",headers:{token:localStorage.getItem("token")},params:t})},s=function(t){return Object(i["a"])({url:"/freights/save",method:"post",headers:{token:localStorage.getItem("token")},data:t})},r=function(t){return Object(i["a"])({url:"/freights/update",method:"put",headers:{token:localStorage.getItem("token")},data:t})},l=function(t){return Object(i["a"])({url:"/freights/delete/"+t,method:"DELETE",headers:{token:localStorage.getItem("token")}})}},fdd7:function(t,e,n){}}]);