webpackJsonp([10],{"3W8I":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={components:{PagIng:n("rVKb").a},data:function(){return{spinShow:!1,total:1,columns1:[{title:"id",align:"center",width:80,key:"put_id"},{title:"楼盘名称",align:"center",key:"hou_name"},{title:"报备时间",align:"center",key:"put_seetime"},{title:"报备手机号",align:"center",key:"user_mobile"},{title:"公司",align:"center",key:"put_firm"},{title:"踩盘时间",align:"center",key:"put_seetime"},{title:"踩盘人数",align:"center",width:100,key:"put_num"},{title:"对接人/手机号",align:"center",render:function(t,e){return t("p",e.row.put_butt+" / "+e.row.put_mobile)}},{title:"来往方式",align:"center",key:"put_status",render:function(t,e){return t("p",0===e.row.put_status?"自驾":"班车")}}],data1:[]}},methods:{cut:function(t){this.diskList(t)},diskList:function(t){var e=this;e.spinShow=!e.spinShow,e.Axios.post("/partner/par/put",e.Qs.stringify({type:0,num:11,page:t})).then(function(t){0===t.data.error?(e.total=t.data.data.nodes,e.data1=t.data.data.info):e.$Message.error(t.data.errMsg),e.spinShow=!e.spinShow})}},mounted:function(){this.diskList(1)}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Content",{style:{padding:"0 16px 16px"}},[n("Breadcrumb",{style:{margin:"16px 0"}},[n("BreadcrumbItem",[t._v("报备")]),t._v(" "),n("BreadcrumbItem",[t._v("踩盘报备")])],1),t._v(" "),n("Card",[n("div",{staticStyle:{height:"570px"}},[n("Table",{attrs:{columns:t.columns1,data:t.data1}}),t._v(" "),t.spinShow?n("Spin",{attrs:{size:"large",fix:""}}):t._e()],1),t._v(" "),n("PagIng",{ref:"pag",attrs:{page:t.total},on:{cut:t.cut}})],1)],1)},staticRenderFns:[]};var r=n("VU/8")(a,i,!1,function(t){n("eVnf")},"data-v-78e1d11a",null);e.default=r.exports},eVnf:function(t,e){}});