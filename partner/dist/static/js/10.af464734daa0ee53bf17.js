webpackJsonp([10],{Axw2:function(t,e){},"Lk+m":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={components:{PagIng:n("rVKb").a},data:function(){var t=this;return{spinShow:!1,total:1,columns1:[{title:"id",width:80,align:"center",key:"book_id"},{title:"预约人",key:"book_nick"},{title:"电话",key:"book_mobile"},{title:"楼盘名称",key:"book_name"},{title:"负责人电话",key:"mobile"},{title:"添加时间",align:"center",key:"addtime",render:function(e,n){return e("p",t.getLocalTime(n.row.addtime))}}],data1:[]}},methods:{cut:function(t){this.appionList(t)},appionList:function(){var t=this;t.spinShow=!t.spinShow,t.Axios.post("/partner/agent/appointment",t.Qs.stringify({num:11,page:1})).then(function(e){0===e.data.error?(t.total=e.data.data.nodes,t.data1=e.data.data.info):t.$Message.error(e.data.errMsg),t.spinShow=!t.spinShow})}},mounted:function(){this.appionList()}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Content",{style:{padding:"0 16px 16px"}},[n("Breadcrumb",{style:{margin:"16px 0"}},[n("BreadcrumbItem",[t._v("经纪人/中介")]),t._v(" "),n("BreadcrumbItem",[t._v("预约管理")])],1),t._v(" "),n("Card",[n("div",{staticStyle:{height:"570px"}},[n("Table",{attrs:{columns:t.columns1,data:t.data1}}),t._v(" "),t.spinShow?n("Spin",{attrs:{size:"large",fix:""}}):t._e()],1),t._v(" "),n("PagIng",{attrs:{page:t.total},on:{cut:t.cut}})],1)],1)},staticRenderFns:[]};var o=n("VU/8")(a,i,!1,function(t){n("Axw2")},null,null);e.default=o.exports}});