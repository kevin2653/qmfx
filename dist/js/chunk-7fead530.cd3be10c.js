(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fead530"],{"4c68":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"header"},[n("p",[t._v("问题分类列表")]),n("el-button",{attrs:{type:"primary"},on:{click:t.addProtype}},[t._v("添加分类")])],1),n("div",{staticClass:"table_body"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",id:"exportTab",size:"medium "}},[n("el-table-column",{attrs:{prop:"id",label:"编号","min-width":"100"}}),n("el-table-column",{attrs:{prop:"name",label:"名称","min-width":"180"}}),n("el-table-column",{attrs:{prop:"sort",label:"排序","min-width":"180"}}),n("el-table-column",{attrs:{label:"操作","min-width":"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){t.handleChange(e.row.id)}}},[t._v("修改")]),n("el-button",{attrs:{size:"mini",type:"danger",plain:""},on:{click:function(n){t.deleteItem(e.row.id)}}},[t._v("删除")])]}}])})],1),n("div",{staticClass:"table-footer--APP",attrs:{slot:"append"},slot:"append"},[n("el-pagination",{attrs:{"current-page":t.form.current,"page-sizes":[10,20,30,40,50,60,70,80,90],"page-size":t.form.size,layout:"total, sizes, prev, pager, next, jumper",total:t.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),n("div",[n("el-dialog",{attrs:{title:this.isEdit?"修改分类":"添加分类","append-to-body":!0,visible:t.secondDepShow,width:"60%"},on:{"update:visible":function(e){t.secondDepShow=e}}},[t.secondDepShow?n("second-index",{attrs:{"update-id":t.updateId},on:{"finish-action":t.getList,"close-form":function(e){t.secondDepShow=!1}}}):t._e()],1)],1)],1)])},a=[],i=n("c93e"),r=(n("cadf"),n("551c"),n("097d"),n("b07e")),s=function(){return n.e("chunk-66745b02").then(n.bind(null,"b3c7"))},d={name:"prodList",data:function(){return{form:{size:50,current:1},shopClassification:"",tableData:[],totalCount:0,tableLoading:!1,updateId:0,isEdit:!1,secondDepShow:!1}},components:{SecondIndex:s},methods:{addProtype:function(){this.handleAddType(0)},handleAddType:function(t){console.log("handleAddType typeids:"+t),this.updateId=t,this.isEdit=!1,this.secondDepShow=!0},handleChange:function(t){console.log("handleChange typeids:"+t),this.updateId=t,this.isEdit=!0,this.secondDepShow=!0},handleSizeChange:function(t){this.form.size=t,this.getList()},handleCurrentChange:function(t){this.form.current=t,this.getList()},getList:function(){var t=this,e=Object(i["a"])({},this.form);this.tableLoading=!0,Object(r["f"])(e).then(function(e){console.log(e.data.data);var n=e.data.data;t.totalCount=n.length,t.tableData=n,t.tableLoading=!1}).catch(function(e){t.tableLoading=!1})},deleteItem:function(t){var e=this;Object(r["b"])(t).then(function(t){var n=t.data,o="success";200===n.code?e.getList():o="error",e.$message({type:o,message:"success"===o?"删除成功！":n.message})})}},created:function(){this.getList()}},u=d,c=(n("b866"),n("2877")),l=Object(c["a"])(u,o,a,!1,null,"0e1de3a6",null);l.options.__file="questionTypeIndex.vue";e["default"]=l.exports},abb4:function(t,e,n){},b07e:function(t,e,n){"use strict";n.d(e,"d",function(){return a}),n.d(e,"a",function(){return i}),n.d(e,"c",function(){return r}),n.d(e,"i",function(){return s}),n.d(e,"g",function(){return d}),n.d(e,"f",function(){return u}),n.d(e,"b",function(){return c}),n.d(e,"j",function(){return l}),n.d(e,"h",function(){return h}),n.d(e,"e",function(){return p});var o=n("5bf4"),a=function(t){return Object(o["a"])({url:"/question/page",method:"get",headers:{token:localStorage.getItem("token")},params:t})},i=function(t){return Object(o["a"])({url:"/question/delete",method:"DELETE",headers:{token:localStorage.getItem("token")},params:t})},r=function(t){return Object(o["a"])({url:"/question/info/"+t,method:"get"})},s=function(t){return Object(o["a"])({url:"/question/update",method:"put",headers:{token:localStorage.getItem("token")},data:JSON.stringify(t)})},d=function(t){return Object(o["a"])({url:"/question/save",method:"post",headers:{token:localStorage.getItem("token")},data:JSON.stringify(t)})},u=function(t){return Object(o["a"])({url:"/questionTypes/list",method:"get",headers:{token:localStorage.getItem("token")},params:t})},c=function(t){return Object(o["a"])({url:"/questionTypes/delete/"+t,method:"DELETE",headers:{token:localStorage.getItem("token")}})},l=function(t){return Object(o["a"])({url:"/questionTypes/update",method:"put",headers:{token:localStorage.getItem("token")},data:JSON.stringify(t)})},h=function(t){return Object(o["a"])({url:"/questionTypes/save",method:"post",headers:{token:localStorage.getItem("token")},data:JSON.stringify(t)})},p=function(t){return Object(o["a"])({url:"/questionTypes/info/"+t,method:"get",headers:{token:localStorage.getItem("token")}})}},b866:function(t,e,n){"use strict";var o=n("abb4"),a=n.n(o);a.a}}]);