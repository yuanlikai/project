webpackJsonp([12],{JTKk:function(t,e){},iR7V:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("Content",{style:{padding:"0 16px 16px"}},[e("Breadcrumb",{style:{margin:"16px 0"}},[e("BreadcrumbItem",[this._v("开发商")]),this._v(" "),e("BreadcrumbItem",[this._v("预约管理")])],1),this._v(" "),e("Card",[e("div",{staticStyle:{height:"570px"}},[e("Table",{attrs:{columns:this.columns1,data:this.data1}})],1),this._v(" "),e("div",{staticClass:"page-list"},[e("Page",{attrs:{total:100}})],1)])],1)},staticRenderFns:[]};var n=i("VU/8")({data:function(){var t=this;return{columns1:[{title:"id",key:"book_id"},{title:"用户姓名",key:"book_nick"},{title:"用户电话",key:"book_mobile"},{title:"楼盘名称",key:"book_name"},{title:"负责人电话",key:"mobile"},{title:"添加时间",align:"center",key:"addtime",render:function(e,i){return e("p",t.getLocalTime(i.row.addtime))}}],data1:[]}},methods:{appoinList:function(){var t=this,e=this;e.Axios.post("/index.php/partner/agent/appointment",e.Qs.stringify({num:11,page:1})).then(function(i){0===i.data.error?t.data1=i.data.data.info:e.$Message.error(i.data.errMsg)})}},mounted:function(){this.appoinList()}},a,!1,function(t){i("JTKk")},null,null);e.default=n.exports}});
//# sourceMappingURL=12.dcf436a6383aef2ae07b.js.map