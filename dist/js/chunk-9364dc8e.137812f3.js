(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9364dc8e"],{4088:function(e,n,t){"use strict";t.d(n,"b",function(){return i}),t.d(n,"a",function(){return c}),t.d(n,"c",function(){return a});t("cadf"),t("551c"),t("097d");var i="http://admin.zhanchengwlkj.com:8080/distribution_backstage",c={HomePage:function(){return t.e("chunk-9c2fddc2").then(t.bind(null,"ef52"))},ShopPage:function(){return Promise.all([t.e("chunk-950e3ebe"),t.e("chunk-33cfb4f3")]).then(t.bind(null,"be5a"))},ShopTypePage:function(){return Promise.all([t.e("chunk-950e3ebe"),t.e("chunk-1b14f556")]).then(t.bind(null,"d564"))},AllOrderPage:function(){return Promise.all([t.e("chunk-950e3ebe"),t.e("chunk-634ea7b4"),t.e("chunk-f3198bc2")]).then(t.bind(null,"5f2b"))},RefundOrderPage:function(){return Promise.all([t.e("chunk-950e3ebe"),t.e("chunk-3ecd27fd")]).then(t.bind(null,"66c6"))},PaymentAuditPage:function(){return Promise.all([t.e("chunk-950e3ebe"),t.e("chunk-741e3cae")]).then(t.bind(null,"8211"))},VisitorsRecord:function(){return Promise.all([t.e("chunk-950e3ebe"),t.e("chunk-6d5e6604")]).then(t.bind(null,"f655"))},MemberShipPage:function(){return Promise.all([t.e("chunk-950e3ebe"),t.e("chunk-9475b59c")]).then(t.bind(null,"b28b"))},NotFound:function(){return t.e("chunk-6ac69d0a").then(t.bind(null,"be4d"))},OrdinaryRewardPage:function(){return Promise.all([t.e("chunk-950e3ebe"),t.e("chunk-6bf6db72")]).then(t.bind(null,"54fd"))},AwardListPage:function(){return Promise.all([t.e("chunk-950e3ebe"),t.e("chunk-44a9749d")]).then(t.bind(null,"fe73"))},WalletHistoryListPage:function(){return Promise.all([t.e("chunk-950e3ebe"),t.e("chunk-1013f35d")]).then(t.bind(null,"0b4f"))},AgentInformationPage:function(){return Promise.all([t.e("chunk-950e3ebe"),t.e("chunk-25d7cd8a")]).then(t.bind(null,"b167"))},AgentLevelSetUpPage:function(){return Promise.all([t.e("chunk-950e3ebe"),t.e("chunk-03fb0bb0")]).then(t.bind(null,"0431"))},AgentAwardSetUpPage:function(){return Promise.all([t.e("chunk-950e3ebe"),t.e("chunk-d31df27e")]).then(t.bind(null,"effa"))},QuestionTypePage:function(){return Promise.all([t.e("chunk-950e3ebe"),t.e("chunk-7fead530")]).then(t.bind(null,"4c68"))},QuestionPage:function(){return Promise.all([t.e("chunk-950e3ebe"),t.e("chunk-5702e642")]).then(t.bind(null,"4bfa"))},ShopFreightPage:function(){return Promise.all([t.e("chunk-950e3ebe"),t.e("chunk-79bddf02")]).then(t.bind(null,"57da"))}},a=[{id:1,name:"产品",icon:"el-icon-message",children:[{id:2,name:"商品管理",icon:"el-icon-news",componentName:"ShopPage"},{id:5,name:"分类管理",icon:"el-icon-date",componentName:"ShopTypePage"},{id:7,name:"运费模板",icon:"el-icon-date",componentName:"ShopFreightPage"}]},{id:12,name:"订单",icon:"el-icon-message",componentName:"AllOrderPage",children:[{id:122,name:"所有订单",icon:"el-icon-date",componentName:"AllOrderPage"},{id:123,name:"待退款订单",icon:"el-icon-date",componentName:"RefundOrderPage"}]},{id:20,name:"财务",icon:"el-icon-date",children:[{id:22,name:"钱包明细",icon:"el-icon-date",componentName:"WalletHistoryListPage"}]},{id:55,name:"会员列表",icon:"el-icon-message",componentName:"MemberShipPage"},{id:56,name:"奖励",icon:"el-icon-news",children:[{id:21,name:"佣金记录",icon:"el-icon-news",componentName:"AwardListPage"}]},{id:18,name:"代理",icon:"el-icon-message",children:[{id:19,name:"代理人信息",icon:"el-icon-news",componentName:"AgentInformationPage"},{id:23,name:"代理等级设置",icon:"el-icon-news",componentName:"AgentLevelSetUpPage"},{id:468,name:"代理佣金设置",icon:"el-icon-news",componentName:"AgentAwardSetUpPage"}]},{id:100,name:"问题管理",icon:"el-icon-message",children:[{id:101,name:"问题分类",icon:"el-icon-news",componentName:"QuestionTypePage"},{id:102,name:"问题列表",icon:"el-icon-news",componentName:"QuestionPage"}]}]},"456d":function(e,n,t){var i=t("4bf8"),c=t("0d58");t("5eda")("keys",function(){return function(e){return c(i(e))}})},"5eda":function(e,n,t){var i=t("5ca1"),c=t("8378"),a=t("79e5");e.exports=function(e,n){var t=(c.Object||{})[e]||Object[e],o={};o[e]=n(t),i(i.S+i.F*a(function(){t(1)}),"Object",o)}},"7f7f":function(e,n,t){var i=t("86cc").f,c=Function.prototype,a=/^\s*function ([^ (]*)/,o="name";o in c||t("9e1e")&&i(c,o,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},"95c5":function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("el-tabs",{staticClass:"el-tab--app-content",attrs:{type:"card"},on:{"tab-click":e.clickTab,"tab-remove":e.removeTab},model:{value:e.tabActive,callback:function(n){e.tabActive=n},expression:"tabActive"}},e._l(e.tabList,function(n){return t("el-tab-pane",{key:n,attrs:{label:e.tabObj[n].name,name:n,lazy:!0,closable:"home"!==n}},[t("app-components",{staticStyle:{width:"100%"},attrs:{"tab-active":n,"tab-list":e.tabObj}})],1)}))},c=[];function a(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}function o(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(e){return a(e)||o(e)||r()}var l=t("c93e"),s=(t("7f7f"),t("ac6a"),t("456d"),t("cadf"),t("551c"),t("097d"),t("4088")),m=t("2f62"),d=function(){return t.e("chunk-2ae78b01").then(t.bind(null,"0ec7"))},h={name:"",data:function(){return{menuMap:{},tabObj:{home:{name:"首页",componentName:"HomePage"}},tabList:["home"],tabActive:"home"}},components:{AppComponents:d},computed:{itemActiveIndex:function(){return this.$store.state.menu.itemActiveIndex}},watch:{itemActiveIndex:function(e){if(e){var n=this.menuMap[e];-1===Object.keys(this.tabObj).indexOf(e)&&(this.tabList.push(e),this.$set(this.tabObj,e,{name:n.name,componentName:n.componentName})),this.tabActive=e}}},methods:Object(l["a"])({},Object(m["b"])("menu",{changeActiveItem:"changeActiveItem"}),{clickTab:function(e){"home"!==e.name?this.changeActiveItem(e.name):this.changeActiveItem("")},removeTab:function(e){if("home"!==e){var n=u(this.tabList),t=n.indexOf(e);if(this.tabList.splice(t,1),this.tabActive===e){var i=n.indexOf(e);this.tabActive=n[i-1],this.changeActiveItem(i-1===0?"":this.tabActive)}this.$delete(this.tabObj,e)}else this.changeActiveItem("")}}),created:function(){var e=this,n=function n(t){t.forEach(function(t){t.children&&t.children.length>0?n(t.children):e.menuMap[t.id]=Object(l["a"])({},t)})};n(s["c"])}},b=h,f=(t("ac3e"),t("2877")),p=Object(f["a"])(b,i,c,!1,null,null,null);p.options.__file="Index.vue";n["default"]=p.exports},ac3e:function(e,n,t){"use strict";var i=t("f407"),c=t.n(i);c.a},ac6a:function(e,n,t){for(var i=t("cadf"),c=t("0d58"),a=t("2aba"),o=t("7726"),r=t("32e9"),u=t("84f2"),l=t("2b4c"),s=l("iterator"),m=l("toStringTag"),d=u.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},b=c(h),f=0;f<b.length;f++){var p,g=b[f],P=h[g],k=o[g],v=k&&k.prototype;if(v&&(v[s]||r(v,s,d),v[m]||r(v,m,g),u[g]=d,P))for(p in i)v[p]||a(v,p,i[p],!0)}},c93e:function(e,n,t){"use strict";t.d(n,"a",function(){return c});var i=t("a322");function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},c=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(c=c.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),c.forEach(function(n){Object(i["a"])(e,n,t[n])})}return e}},f407:function(e,n,t){}}]);