webpackJsonp([7],{JFFk:function(t,e){},WP1F:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){var t=this;return{columns1:[{title:"id",key:"order_id"},{title:"用户姓名",key:"user_name"},{title:"用户手机",key:"user_mobile"},{title:"楼盘名称",key:"hou_ses_name"},{title:"订单号",key:"order"},{title:"支付时间",key:"addtime",render:function(e,r){return e("p",t.getLocalTime(r.row.addtime))}},{title:"支付方式",key:"order_status",render:function(t,e){var r=void 0;switch(e.row.order_status){case 0:r="待支付";break;case 1:r="已支付"}return t("p",{style:{color:0===e.row.order_status?"#F16646":"#3590F1"}},r)}},{title:"支付状态",key:"order_pay",render:function(t,e){var r=void 0;switch(e.row.order_pay){case 0:r="支付宝";break;case 1:r="微信";break;case 2:r="银联"}return t("p",r)}}],data1:[]}},methods:{orderList:function(){var t=this,e=this;e.Axios.post("/index.php/partner/hou/order",e.Qs.stringify({num:11,page:1})).then(function(r){0===r.data.error?(console.log(r.data),t.data1=r.data.data.info):e.$Message.error(r.data.errMsg)})}},mounted:function(){this.orderList()}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("Content",{style:{padding:"0 16px 16px"}},[e("Breadcrumb",{style:{margin:"16px 0"}},[e("BreadcrumbItem",[this._v("开发商")]),this._v(" "),e("BreadcrumbItem",[this._v("订单管理")])],1),this._v(" "),e("Card",[e("div",{staticStyle:{height:"600px"}},[e("Table",{attrs:{columns:this.columns1,data:this.data1}})],1),this._v(" "),e("div",{staticClass:"page-list"},[e("Page",{attrs:{total:100}})],1)])],1)},staticRenderFns:[]};var i=r("VU/8")(a,s,!1,function(t){r("JFFk")},null,null);e.default=i.exports}});
//# sourceMappingURL=7.0777c79f688958408503.js.map