webpackJsonp([11],{Cl3J:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(){var e=void 0,t=document;this.cookie=function(o,s,r){if(s!=e)if(r!=e){var a=new Date;a.setTime(a.getTime()+24*r.expires*60*60*1e3),t.cookie=encodeURIComponent(o)+"="+encodeURIComponent(s)+";expires="+a.toGMTString()}else t.cookie=encodeURIComponent(o)+"="+encodeURIComponent(s);else{r=t.cookie.split("; ");for(var n=0;n<r.length;n++){var i=r[n].split("=");if(i[0]==decodeURIComponent(o))return decodeURIComponent(i[1])}}}},r=new s;s.prototype.removeCookie=function(e){r.cookie(e,"",{expires:-1})};var a={data:function(){return{ctive:sessionStorage.getItem("meu")}},methods:{tate:function(e){console.log(e);switch(e){case"1":break;case"2":var t=document.cookie.match(/[^ =;]+(?=\=)/g);if(t)for(var o=t.length;o--;)document.cookie=t[o]+"=0;expires="+new Date(0).toUTCString();this.$Message.success("退出登录成功"),this.$router.push("/")}},sect:function(e){var t=this;switch(e){case"1-1":sessionStorage.setItem("meu",e),t.$router.push("/deve/houses");break;case"1-2":sessionStorage.setItem("meu",e),t.$router.push("/deve/appoin");break;case"1-3":sessionStorage.setItem("meu",e),t.$router.push("/deve/order");break;case"1-4":sessionStorage.setItem("meu",e),t.$router.push("/deve/collect");break;case"2-1":sessionStorage.setItem("meu",e),t.$router.push("/partner/disk");break;case"2-2":sessionStorage.setItem("meu",e),t.$router.push("/partner/look");break;case"2-3":sessionStorage.setItem("meu",e),t.$router.push("/partner/place");break;case"3-1":sessionStorage.setItem("meu",e),t.$router.push("/broker/houses");break;case"3-2":sessionStorage.setItem("meu",e),t.$router.push("/broker/appoin");break;case"3-3":sessionStorage.setItem("meu",e),t.$router.push("/broker/collect");break;case"4-1":sessionStorage.setItem("meu",e),t.$router.push("/report/disk");break;case"4-2":sessionStorage.setItem("meu",e),t.$router.push("/report/look")}}},mounted:function(){}},n={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"layout"},[o("Sider",{style:{position:"fixed",height:"100vh",left:0,overflow:"auto"}},[o("Menu",{attrs:{"active-name":e.ctive,theme:"dark",width:"auto","open-names":[e.ctive.split("-")[0]]},on:{"on-select":e.sect}},[o("img",{staticClass:"layout-logo",attrs:{src:"https://gsfhuodong.oss-cn-hangzhou.aliyuncs.com/logo.png",alt:""}}),e._v(" "),o("Submenu",{attrs:{name:"1"}},[o("template",{slot:"title"},[e._v("\n          开发商\n        ")]),e._v(" "),o("MenuItem",{attrs:{name:"1-1"}},[e._v("楼盘管理")]),e._v(" "),o("MenuItem",{attrs:{name:"1-2"}},[e._v("预约管理")]),e._v(" "),o("MenuItem",{attrs:{name:"1-3"}},[e._v("订单管理")]),e._v(" "),o("MenuItem",{attrs:{name:"1-4"}},[e._v("收藏管理")])],2),e._v(" "),e._v("6387\n        "),e._v(" "),o("Submenu",{attrs:{name:"3"}},[o("template",{slot:"title"},[e._v("\n          经纪人/中介\n        ")]),e._v(" "),o("MenuItem",{attrs:{name:"3-1"}},[e._v("房源管理")]),e._v(" "),o("MenuItem",{attrs:{name:"3-2"}},[e._v("预约管理")]),e._v(" "),o("MenuItem",{attrs:{name:"3-3"}},[e._v("收藏管理")])],2)],1)],1),e._v(" "),o("Layout",{style:{marginLeft:"200px"}},[o("Header",{style:{background:"#fff",boxShadow:"0 2px 3px 2px rgba(0,0,0,.1)"}},[o("Row",[o("Col",{attrs:{span:"12"}},[o("p",{staticStyle:{"font-size":"14px"}},[e._v("上海贵上房产营销策划有限公司")])]),e._v(" "),o("Col",{staticStyle:{"text-align":"right"},attrs:{span:"12"}},[o("Dropdown",{on:{"on-click":e.tate}},[o("a",{attrs:{href:"javascript:void(0)"}},[o("Avatar",{attrs:{src:"https://i.loli.net/2017/08/21/599a521472424.jpg"}}),e._v(" "),o("Icon",{attrs:{type:"md-arrow-dropdown",color:"#515a6e",size:"18"}})],1),e._v(" "),o("DropdownMenu",{staticStyle:{"text-align":"left"},attrs:{slot:"list"},slot:"list"},[o("DropdownItem",{attrs:{name:"1"}},[e._v("个人资料")]),e._v(" "),o("DropdownItem",{attrs:{name:"2"}},[e._v("退出登录")])],1)],1)],1)],1)],1),e._v(" "),o("router-view")],1)],1)},staticRenderFns:[]};var i=o("VU/8")(a,n,!1,function(e){o("SVh4")},"data-v-4ca0a1ba",null);t.default=i.exports},SVh4:function(e,t){}});