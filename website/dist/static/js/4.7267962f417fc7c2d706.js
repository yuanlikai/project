webpackJsonp([4],{R7Pr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s("M+bi"),e=s.n(i),n={name:"home",data:function(){return{sta1:!1,modal6:!1,city:"上海市",hotMap:"月销量热力图",class1:"快餐便当",terrace:"全部",radius:"2.0",switch1:!1,stacData:!0,hotMapStatus:!0,value2:3e3,data1:[],citylist:e.a,cityListb:["上海市"],model1:"上海市1"}},methods:{Menux:function(t){console.log(t)},Dropcli:function(t){console.log(t),"s"===t?this.modal6=!0:this.model1=t},abcd:function(){console.log(1)},asyncOK:function(){},setSeach:function(){this.stacData=!0},inpR:function(){document.getElementsByClassName("tangram-suggestion-main")[0].style.display="block"},getN:function(t){console.log(t),-1===this.cityListb.indexOf(t+"市")&&this.cityListb.push(t+"市"),this.model1=t+"市",console.log(),this.modal6=!1}},mounted:function(){var t=this,a=new BMap.Map("container"),s=new BMap.Point(121.47,31.23);function i(t){return document.getElementById(t)}a.centerAndZoom(s,14);var e,n=new BMap.Autocomplete({input:"suggestId",location:a});function o(t,a){var s=new BMap.Map("container"),i=new BMap.Point(t,a);function e(){this.defaultAnchor=BMAP_ANCHOR_TOP_LEFT,this.defaultOffset=new BMap.Size(10,10)}s.centerAndZoom(i,14),e.prototype=new BMap.Control,e.prototype.initialize=function(t){document.getElementById("md-add").onclick=function(a){t.setZoom(t.getZoom()+1)},document.getElementById("md-remove").onclick=function(a){t.setZoom(t.getZoom()-1)}};var n=new e;s.addControl(n),s.enableScrollWheelZoom();var l=new BMap.Icon("https://smh-map.oss-cn-beijing.aliyuncs.com/sj.png",new BMap.Size(60,60)),c=new BMap.Marker(i,{icon:l});s.addOverlay(c),s.addOverlay(c),c.enableDragging(),c.addEventListener("dragend",function(t){o(t.point.lng,t.point.lat)}),c.setAnimation(BMAP_ANIMATION_BOUNCE);var r=new BMap.Circle(i,3e3,{strokeColor:"blue",strokeWeight:2,strokeOpacity:.5,fillColor:"rgba(81, 90, 110, .1)"});s.addOverlay(c),s.addOverlay(r);var d;(d=document.createElement("canvas")).getContext&&d.getContext("2d")||alert("热力图目前只支持有canvas支持的浏览器,您所使用的浏览器不能使用热力图功能~");var p=new BMapLib.HeatmapOverlay({radius:20});s.addOverlay(p),p.setDataSet({data:[{lng:121.471,lat:31.24,count:100},{lng:121.472,lat:31.22,count:100},{lng:121.473,lat:31.21,count:100},{lng:121.474,lat:31.2,count:100},{lng:121.475,lat:31.24,count:100},{lng:121.476,lat:31.223,count:100},{lng:121.477,lat:31.221,count:100},{lng:121.478,lat:31.221,count:100}],max:100}),p.hide(),p.show()}n.addEventListener("onhighlight",function(t){var a="",s=t.fromitem.value,e="";t.fromitem.index>-1&&(e=s.province+s.city+s.district+s.street+s.business),a="FromItem<br />index = "+t.fromitem.index+"<br />value = "+e,e="",t.toitem.index>-1&&(e=(s=t.toitem.value).province+s.city+s.district+s.street+s.business),a+="<br />ToItem<br />index = "+t.toitem.index+"<br />value = "+e,i("searchResultPanel").innerHTML=a}),n.addEventListener("onconfirm",function(s){var n=s.item.value;e=n.province+n.city+n.district+n.street+n.business,i("searchResultPanel").innerHTML="onconfirm<br />index = "+s.item.index+"<br />myValue = "+e,function(){a.clearOverlays();var s=new BMap.LocalSearch(a,{onSearchComplete:function(){s.getResults().getPoi(0)||t.$Message.error("搜索无结果，请确认信息");var a=s.getResults().getPoi(0).point;o(a.lng,a.lat)}});s.search("上海市"+e),t.hotMapStatus=!0}()}),document.getElementById("ios-disc-outline").onclick=function(t){o(121.481348,31.235087)},o(121.481348,31.235087)}},o={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("Modal",{attrs:{title:"地区选择"},on:{"on-ok":t.asyncOK},model:{value:t.modal6,callback:function(a){t.modal6=a},expression:"modal6"}},[s("div",{staticStyle:{"max-height":"450px",overflow:"hidden","overflow-y":"auto"}},t._l(t.citylist,function(a,i){return s("Row",{key:i,staticStyle:{"border-bottom":"1px solid #eeeeee",padding:"20px 0 10px 0"}},[s("Col",{staticStyle:{"font-size":"14px"},attrs:{span:"3"}},[t._v(t._s(a.p))]),t._v(" "),s("Col",{staticStyle:{"font-size":"14px"},attrs:{span:"21"}},t._l(a.c,function(a,i){return s("span",{key:i},[s("Button",{staticClass:"site-btn",attrs:{type:"dashed",size:"small"},on:{click:function(s){t.getN(a.n)}}},[t._v(t._s(a.n))])],1)}))],1)}))]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"content-search"},[s("Dropdown",{attrs:{trigger:"click"},on:{"on-click":t.Dropcli}},[s("div",[s("Button",{attrs:{size:"large"}},[t._v("\n          "+t._s(t.model1)+"\n          "),s("Icon",{attrs:{type:"ios-arrow-down"}})],1)],1),t._v(" "),s("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[s("DropdownItem",{attrs:{disabled:""},on:{click:function(t){t.stopPropagation()}}},[t._v("最近选择")]),t._v(" "),t._l(t.cityListb,function(a,i){return s("DropdownItem",{key:i,attrs:{name:a},on:{click:function(t){}}},[t._v(t._s(a))])}),t._v(" "),s("DropdownItem",{staticStyle:{color:"#5cadff","font-size":"12px"},attrs:{name:"s",divided:""},on:{click:function(a){a.stopPropagation(),t.modal6=!0}}},[t._v("切换城市"),s("Icon",{attrs:{type:"ios-shuffle"}})],1)],2)],1),t._v(" "),s("Button",{staticStyle:{float:"right","font-size":"15px"},attrs:{type:"primary",size:"large",icon:"ios-search"}}),t._v(" "),s("div",{staticClass:"map-srarch"},[s("div",{attrs:{id:"l-map"}}),t._v(" "),s("div",{attrs:{id:"r-result"}},[s("input",{attrs:{type:"text",id:"suggestId",size:"20"},on:{mouseover:t.inpR}})]),t._v(" "),s("div",{staticStyle:{width:"150px",height:"auto",display:"none",border:"1px solid #C0C0C0"},attrs:{id:"searchResultPanel"}})])],1),t._v(" "),t.hotMapStatus?s("div",{class:{"search-tj":!0,"search-tj-add":!t.stacData}},[s("Button",{attrs:{ghost:""},on:{click:function(a){t.stacData=!1}}},[t._v("订单热力图\n      "),s("Icon",{attrs:{type:"ios-cog-outline",size:"16"}})],1),t._v(" "),t.stacData?s("Row",{staticStyle:{"margin-top":"10px"}},[s("Col",{staticStyle:{color:"#5cadff","margin-top":"12px"},attrs:{span:"8"}},[t._v("平台："+t._s(t.terrace))]),t._v(" "),s("Col",{staticStyle:{color:"#5cadff","margin-top":"12px"},attrs:{span:"8"}},[t._v("半径："+t._s(t.radius)+"km")]),t._v(" "),s("Col",{staticStyle:{color:"#5cadff","margin-top":"12px"},attrs:{span:"8"}},[t._v("品类："+t._s(t.class1))])],1):t._e(),t._v(" "),t.stacData?t._e():s("div",{staticClass:"box"},[s("Row",{staticStyle:{"margin-top":"20px"}},[s("Col",{staticStyle:{color:"#5cadff","margin-top":"8px","padding-left":"8px"},attrs:{span:"7"}},[t._v("平台选择")]),t._v(" "),s("Col",{staticStyle:{color:"#ffffff","margin-top":"8px"},attrs:{span:"17"}},[s("RadioGroup",{staticStyle:{width:"100%"},model:{value:t.terrace,callback:function(a){t.terrace=a},expression:"terrace"}},[s("Row",[s("Col",{attrs:{span:"8"}},[s("Radio",{attrs:{label:"全部"}},[s("span",{staticStyle:{"font-size":"15px"}},[t._v("全部")])])],1),t._v(" "),s("Col",{staticStyle:{"margin-bottom":"12px"},attrs:{span:"8"}},[s("Radio",{attrs:{label:"饿了么"}},[s("span",{staticStyle:{"font-size":"15px"}},[t._v("饿了么")])])],1),t._v(" "),s("Col",{staticStyle:{"margin-bottom":"12px"},attrs:{span:"8"}},[s("Radio",{attrs:{label:"美团"}},[s("span",{staticStyle:{"font-size":"15px"}},[t._v("美团")])])],1)],1)],1)],1)],1),t._v(" "),s("Row",[s("Col",{staticStyle:{color:"#5cadff","margin-top":"14px","padding-left":"10px"},attrs:{span:"7"}},[t._v("热力半径/km")]),t._v(" "),s("Col",{staticStyle:{color:"#ffffff","margin-top":"14px"},attrs:{span:"17"}},[s("RadioGroup",{staticStyle:{width:"100%"},model:{value:t.radius,callback:function(a){t.radius=a},expression:"radius"}},[s("Row",[s("Col",{staticStyle:{"margin-bottom":"12px"},attrs:{span:"8"}},[s("Radio",{attrs:{label:"2.0"}},[s("span",{staticStyle:{"font-size":"15px"}},[t._v("2.0")])])],1),t._v(" "),s("Col",{staticStyle:{"margin-bottom":"12px"},attrs:{span:"8"}},[s("Radio",{attrs:{label:"3.0"}},[s("span",{staticStyle:{"font-size":"15px"}},[t._v("3.0")])])],1),t._v(" "),s("Col",{staticStyle:{"margin-bottom":"12px"},attrs:{span:"8"}},[s("Radio",{attrs:{label:"5.0"}},[s("span",{staticStyle:{"font-size":"15px"}},[t._v("5.0")])])],1)],1)],1)],1)],1),t._v(" "),s("Row",[s("Col",{staticStyle:{color:"#5cadff","margin-top":"14px","padding-left":"10px"},attrs:{span:"7"}},[t._v("品类")]),t._v(" "),s("Col",{staticStyle:{color:"#ffffff","margin-top":"14px"},attrs:{span:"17"}},[s("RadioGroup",{staticStyle:{width:"100%"},model:{value:t.class1,callback:function(a){t.class1=a},expression:"class1"}},[s("Row",[s("Col",{staticStyle:{"margin-bottom":"12px"},attrs:{span:"12"}},[s("Radio",{attrs:{label:"快餐便当"}},[s("span",{staticStyle:{"font-size":"15px"}},[t._v("快餐便当")])])],1),t._v(" "),s("Col",{staticStyle:{"margin-bottom":"12px"},attrs:{span:"12"}},[s("Radio",{attrs:{label:"甜品"}},[s("span",{staticStyle:{"font-size":"15px"}},[t._v("甜品")])])],1)],1)],1)],1)],1),t._v(" "),s("Row",[s("Col",{staticStyle:{color:"#5cadff","margin-top":"24px","padding-left":"10px"},attrs:{span:"7"}}),t._v(" "),s("Col",{staticStyle:{color:"#ffffff","margin-top":"24px"},attrs:{span:"17"}},[s("Button",{staticStyle:{"font-size":"15px"},attrs:{size:"small",type:"primary",ghost:""},on:{click:function(a){t.setSeach()}}},[s("Icon",{staticStyle:{"margin-top":"-4px"},attrs:{type:"md-refresh",size:"22"}}),t._v("\n            确定\n          ")],1)],1)],1)],1)],1):t._e(),t._v(" "),t.sta1?s("Row",{staticClass:"content-data",attrs:{id:"content-data"}},[s("Col",{attrs:{span:"24"}},[s("Row",[s("Col",{attrs:{span:"12"}},[s("li",{staticClass:"build-item-li left build-item ani-time pointer"},[s("img",{staticClass:"build2",attrs:{src:"https://system.chachadian.cn/web/201812271745/assets/images/build2-s.png",alt:""}}),t._v(" "),s("div",{staticClass:"build-desc"},[s("p",{staticClass:"building-type text-middle"},[t._v("写字楼")]),t._v(" "),s("p",{staticClass:"building-count color text-middle"},[s("span",[t._v("760+")]),t._v("\n                座\n              ")])])])]),t._v(" "),s("Col",{attrs:{span:"12"}},[s("li",{staticClass:"build-item-li left build-item ani-time pointer",staticStyle:{float:"right"}},[s("img",{staticClass:"build2",attrs:{src:"https://system.chachadian.cn/web/201812271745/assets/images/build3-s.png",alt:""}}),t._v(" "),s("div",{staticClass:"build-desc"},[s("p",{staticClass:"building-type text-middle"},[t._v("大学")]),t._v(" "),s("p",{staticClass:"building-count color text-middle"},[s("span",[t._v("760+")]),t._v("\n                所\n              ")])])])]),t._v(" "),s("Col",{attrs:{span:"12"}},[s("li",{staticClass:"build-item-li left build-item ani-time pointer"},[s("img",{staticClass:"build2",attrs:{src:"https://system.chachadian.cn/web/201812271745/assets/images/build1-s.png",alt:""}}),t._v(" "),s("div",{staticClass:"build-desc"},[s("p",{staticClass:"building-type text-middle"},[t._v("居民小区")]),t._v(" "),s("p",{staticClass:"building-count color text-middle"},[s("span",[t._v("760+")]),t._v("\n                个\n              ")])])])]),t._v(" "),s("Col",{attrs:{span:"12"}},[s("li",{staticClass:"build-item-li left build-item ani-time pointer",staticStyle:{float:"right"}},[s("img",{staticClass:"build2",attrs:{src:"https://system.chachadian.cn/web/201812271745/assets/images/build4-s.png",alt:""}}),t._v(" "),s("div",{staticClass:"build-desc"},[s("p",{staticClass:"building-type text-middle"},[t._v("医院")]),t._v(" "),s("p",{staticClass:"building-count color text-middle"},[s("span",[t._v("760+")]),t._v("\n                个\n              ")])])])])],1)],1),t._v(" "),s("p",{staticStyle:{float:"left","font-size":"18px","margin-top":"4px"}},[t._v("月销量热力图")]),t._v(" "),s("Col",{attrs:{span:"24"}},[s("Row",[s("Col",{staticStyle:{"margin-top":"8px"},attrs:{span:"24"}},[s("Row",[s("Col",{staticClass:"data-list-text",staticStyle:{"margin-bottom":"8px"},attrs:{span:"24"}},[t._v("全城月销量总数："),s("span",{staticStyle:{"font-weight":"700"}},[t._v("7504.50万单")])]),t._v(" "),s("Col",{staticClass:"data-list-text",staticStyle:{"margin-bottom":"8px"},attrs:{span:"24"}},[t._v("区域商铺总数："),s("span",{staticStyle:{"font-weight":"700"}},[t._v("12321家")])]),t._v(" "),s("Col",{staticClass:"data-list-text",staticStyle:{"margin-bottom":"8px"},attrs:{span:"24"}},[t._v("区域月销量总数："),s("span",{staticStyle:{"font-weight":"700"}},[t._v("2504.50万单")])]),t._v(" "),s("Col",{staticClass:"data-list-text",staticStyle:{"margin-bottom":"8px"},attrs:{span:"24"}},[t._v("平均单店月销量："),s("span",{staticStyle:{"font-weight":"700"}},[t._v("452单")])])],1)],1)],1)],1)],1):t._e(),t._v(" "),s("Button",{staticClass:"detailBtn",attrs:{type:"primary"},on:{click:function(a){t.sta1=!t.sta1}}},[t._v(t._s(!0===t.sta1?"隐藏详情":"显示详情")+" "),t.sta1?t._e():s("Icon",{attrs:{type:"md-arrow-dropdown"}}),t.sta1?s("Icon",{attrs:{type:"md-arrow-dropup"}}):t._e()],1),t._v(" "),s("div",{staticClass:"center xuanf",staticStyle:{bottom:"460px"}},[s("div",{staticClass:"center-left"},[s("Button",{staticStyle:{background:"rgba(0,0,0,.9)"},attrs:{icon:"ios-disc-outline",id:"ios-disc-outline",size:"small",type:"primary"}})],1)]),t._v(" "),s("ButtonGroup",{staticClass:"xuanf",staticStyle:{opacity:".95"},attrs:{vertical:""}},[s("Button",{staticStyle:{background:"rgba(0,0,0,.9)"},attrs:{icon:"md-add",id:"md-add",type:"primary",size:"small"}}),t._v(" "),s("Button",{staticStyle:{background:"rgba(0,0,0,.9)"},attrs:{icon:"md-remove",id:"md-remove",type:"primary",size:"small"}})],1),t._v(" "),s("div",{staticClass:"center xuanf",staticStyle:{bottom:"365px"}},[s("div",{staticClass:"center-left"},[s("Poptip",{attrs:{trigger:"hover",title:"关注公众号，了解更多资讯",content:"content",placement:"left"}},[s("Button",{staticStyle:{background:"rgba(0,0,0,.9)"},attrs:{icon:"logo-snapchat",size:"small",type:"primary"}}),t._v(" "),s("div",{staticClass:"api",attrs:{slot:"content"},slot:"content"},[s("img",{staticStyle:{width:"200px"},attrs:{src:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1547803661&di=725bd0778edf709325c21215eae45667&src=http://i2.sinaimg.cn/dy/c/2014-07-18/1405623657_VbFlfN.jpg",alt:""}})])],1)],1)]),t._v(" "),s("div",{staticClass:"center xuanf",staticStyle:{bottom:"330px"}},[s("div",{staticClass:"center-left"},[s("Poptip",{attrs:{trigger:"hover",title:"客服热线",content:"3006-522-555",placement:"left"}},[s("Button",{staticStyle:{background:"rgba(0,0,0,.9)"},attrs:{icon:"ios-chatbubbles",size:"small",type:"primary"}})],1)],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"content-map"},[a("div",{attrs:{id:"container"}})])}]};var l=s("VU/8")(n,o,!1,function(t){s("rgNM")},"data-v-76eca72d",null);a.default=l.exports},rgNM:function(t,a){}});
//# sourceMappingURL=4.7267962f417fc7c2d706.js.map