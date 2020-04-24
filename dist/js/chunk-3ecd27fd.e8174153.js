(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ecd27fd"],{"66c6":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"table_body"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",id:"exportTab",size:"medium "}},[n("el-table-column",{attrs:{prop:"nickname",label:"退款用户","min-width":"100"}}),n("el-table-column",{attrs:{label:"退款商品","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("img",{staticClass:"prod-img",attrs:{src:e.row.orderProductVO.cover}}),n("div",{staticClass:"prod-detail",attrs:{span:6}},[n("div",[t._v("\n                            "+t._s(e.row.orderProductVO.title)+"\n                        ")]),n("div",[t._v("\n                            x"+t._s(e.row.orderProductVO.productNum)+"\n                        ")]),n("div",[t._v("\n                            ￥"+t._s(e.row.orderProductVO.productPrice)+"\n                        ")])])]}}])}),n("el-table-column",{attrs:{prop:"refundMoney",label:"申请退款金额","min-width":"80"}}),n("el-table-column",{attrs:{label:"订单信息","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"prod-detail",attrs:{span:6}},[n("div",[t._v("\n                            总金额："+t._s(e.row.orderVO.totalPrice)+"\n                        ")]),n("div",[t._v("\n                            优惠："+t._s(e.row.orderVO.discount)+"\n                        ")]),n("div",[t._v("\n                            运费："+t._s(e.row.orderVO.freight)+"\n                        ")]),n("div",[t._v("\n                            支付金额："+t._s(e.row.orderVO.payMoney)+"\n                        ")]),n("div",[t._v("\n                            订单号："+t._s(e.row.orderVO.orderNumber)+"\n                        ")]),n("div",[t._v("\n                            退款前状态："+t._s(t.orderstatelist[e.row.orderState])+"\n                        ")])])]}}])}),n("el-table-column",{attrs:{label:"退款类型","min-width":"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n              "+t._s(t.refundTypelist[e.row.refundType])+"\n             ")]}}])}),n("el-table-column",{attrs:{label:"货物状态","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n              "+t._s(t.productstatelist[e.row.productState])+"\n             ")]}}])}),n("el-table-column",{attrs:{prop:"refundWhy",label:"退款原因","min-width":"160"}}),n("el-table-column",{attrs:{prop:"note",label:"退款说明","min-width":"160"}}),n("el-table-column",{attrs:{label:"退款状态","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n              "+t._s(t.refundstatelist[e.row.refundState])+"\n             ")]}}])}),n("el-table-column",{attrs:{prop:"gmtCreate",label:"创建时间","min-width":"160"}}),n("el-table-column",{attrs:{label:"操作","min-width":"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){t.refuseRefund(e.row.id)}}},[t._v("\n                        拒绝退款\n                    ")]),n("el-button",{attrs:{size:"mini",type:"warning"},on:{click:function(n){t.agreeRefund(e.row.id)}}},[t._v("同意退款")]),n("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("查看订单")])]}}])})],1),n("div",{staticClass:"table-footer--APP",attrs:{slot:"append"},slot:"append"},[n("el-pagination",{attrs:{"current-page":t.form.page,"page-sizes":[10,20,30,40,50,60,70,80,90],"page-size":t.form.size,layout:"total, sizes, prev, pager, next, jumper",total:t.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),n("div")],1)])},o=[],a=n("c93e"),i=(n("cadf"),n("551c"),n("097d"),n("5bf4")),s=function(t){return Object(i["a"])({url:"/orderRefund/page",method:"get",headers:{token:localStorage.getItem("token")},params:t})},l={name:"prodList",data:function(){return{refundstatelist:{0:"退款失败",1:"等待商家回应",2:"正在退款中",3:"正在退货中",4:"退款成功",5:"用户已撤销退款"},refundTypelist:{1:"只退款无需退货",2:"退货退款",3:"换货"},productstatelist:{0:"未收到货",1:"已收到货"},orderstatelist:{"-1":"已删除",0:"已关闭",1:"待付款",2:"待发货",3:"待收货",4:"已完成",5:"退款中",6:"退款完成"},orderId:"",form:{current:1,size:10},tableData:[],totalCount:0,tableLoading:!1}},components:{},methods:{getList:function(){var t=this,e=Object(a["a"])({},this.form);this.tableLoading=!0,console.log("getList"),s(e).then(function(e){console.log(e);var n=e.data.data;t.totalCount=n.total,t.tableData=n.records,t.tableLoading=!1,console.log(n.records)}).catch(function(e){t.tableLoading=!1})},refuseRefund:function(t){var e=this;console.log(t),this.$confirm("确定拒绝退款吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$message.error("该功能优化中，暂无法使用")})},agreeRefund:function(t){var e=this;console.log(t),this.$confirm("确定同意退款吗？确定后按申请退款金额将钱退回到用户钱包中","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$message.error("该功能优化中，暂无法使用")})},handleSizeChange:function(t){this.form.size=t,this.getOrderList()},handleCurrentChange:function(t){this.form.current=t,this.getOrderList()},handleAddDep:function(){this.depId=0,this.isEdit=!1,this.secondDepShow=!0},handleCheck:function(t,e){this.depId=e.pid,this.secondDepShow=!0,this.isEdit=!0}},created:function(){this.getList()}},d=l,c=(n("b2c0"),n("2877")),u=Object(c["a"])(d,r,o,!1,null,"f0f83030",null);u.options.__file="refundOrderIndex.vue";e["default"]=u.exports},b2c0:function(t,e,n){"use strict";var r=n("e94d"),o=n.n(r);o.a},e94d:function(t,e,n){}}]);