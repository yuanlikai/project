webpackJsonp([17],{NIy6:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("Content",{style:{padding:"0 16px 16px"}},[t("Breadcrumb",{style:{margin:"16px 0"}},[t("BreadcrumbItem",[e._v("报备")]),e._v(" "),t("BreadcrumbItem",[e._v("带看报备")]),e._v(" "),t("BreadcrumbItem",[e._v("添加报备 ")])],1),e._v(" "),t("Card",[t("div",{staticStyle:{height:"570px"}},[t("Row",[t("Form",{ref:"formValidate",attrs:{model:e.formValidate,rules:e.ruleValidate,"label-width":80}},[t("Col",{attrs:{span:"8"}},[t("FormItem",{attrs:{label:"楼盘名称",prop:"name"}},[t("Input",{attrs:{placeholder:"Enter your name"},model:{value:e.formValidate.name,callback:function(a){e.$set(e.formValidate,"name",a)},expression:"formValidate.name"}})],1),e._v(" "),t("FormItem",{attrs:{label:"客户姓名",prop:"name"}},[t("Input",{attrs:{placeholder:"Enter your name"},model:{value:e.formValidate.name,callback:function(a){e.$set(e.formValidate,"name",a)},expression:"formValidate.name"}})],1),e._v(" "),t("FormItem",{attrs:{label:"客户号码",prop:"name"}},[t("Input",{attrs:{placeholder:"Enter your name"},model:{value:e.formValidate.name,callback:function(a){e.$set(e.formValidate,"name",a)},expression:"formValidate.name"}})],1),e._v(" "),t("FormItem",{attrs:{label:"看房时间",prop:"name"}},[t("DatePicker",{attrs:{type:"date",placeholder:"Select date"},model:{value:e.formValidate.date,callback:function(a){e.$set(e.formValidate,"date",a)},expression:"formValidate.date"}})],1),e._v(" "),t("FormItem",{attrs:{label:"看房人数",prop:"name"}},[t("Input",{attrs:{placeholder:"Enter your name"},model:{value:e.formValidate.name,callback:function(a){e.$set(e.formValidate,"name",a)},expression:"formValidate.name"}})],1),e._v(" "),t("FormItem",[t("Button",{attrs:{type:"primary"},on:{click:function(a){e.handleSubmit("formValidate")}}},[e._v("Submit")]),e._v(" "),t("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(a){e.handleReset("formValidate")}}},[e._v("Reset")])],1)],1),e._v(" "),t("Col",{attrs:{span:"8"}},[t("FormItem",{attrs:{label:"公司",prop:"name"}},[t("Input",{attrs:{placeholder:"Enter your name"},model:{value:e.formValidate.name,callback:function(a){e.$set(e.formValidate,"name",a)},expression:"formValidate.name"}})],1),e._v(" "),t("FormItem",{attrs:{label:"分行",prop:"name"}},[t("Input",{attrs:{placeholder:"Enter your name"},model:{value:e.formValidate.name,callback:function(a){e.$set(e.formValidate,"name",a)},expression:"formValidate.name"}})],1),e._v(" "),t("FormItem",{attrs:{label:"市场对接人",prop:"name"}},[t("Input",{attrs:{placeholder:"Enter your name"},model:{value:e.formValidate.name,callback:function(a){e.$set(e.formValidate,"name",a)},expression:"formValidate.name"}})],1),e._v(" "),t("FormItem",{attrs:{label:"对接人号码",prop:"name"}},[t("Input",{attrs:{placeholder:"Enter your name"},model:{value:e.formValidate.name,callback:function(a){e.$set(e.formValidate,"name",a)},expression:"formValidate.name"}})],1),e._v(" "),t("FormItem",{attrs:{label:"报备人号码",prop:"name"}},[t("Input",{attrs:{placeholder:"Enter your name"},model:{value:e.formValidate.name,callback:function(a){e.$set(e.formValidate,"name",a)},expression:"formValidate.name"}})],1)],1)],1)],1)],1)])],1)},staticRenderFns:[]},l=t("VU/8")({data:function(){return{formValidate:{name:"",mail:"",city:"",gender:"",interest:[],date:"",time:"",desc:""},ruleValidate:{name:[{required:!0,message:"The name cannot be empty",trigger:"blur"}],mail:[{required:!0,message:"Mailbox cannot be empty",trigger:"blur"},{type:"email",message:"Incorrect email format",trigger:"blur"}],city:[{required:!0,message:"Please select the city",trigger:"change"}],gender:[{required:!0,message:"Please select gender",trigger:"change"}],interest:[{required:!0,type:"array",min:1,message:"Choose at least one hobby",trigger:"change"},{type:"array",max:2,message:"Choose two hobbies at best",trigger:"change"}],date:[{required:!0,type:"date",message:"Please select the date",trigger:"change"}],time:[{required:!0,type:"string",message:"Please select time",trigger:"change"}],desc:[{required:!0,message:"Please enter a personal introduction",trigger:"blur"},{type:"string",min:20,message:"Introduce no less than 20 words",trigger:"blur"}]}}},methods:{handleSubmit:function(e){var a=this;this.$refs[e].validate(function(e){e?a.$Message.success("Success!"):a.$Message.error("Fail!")})},handleReset:function(e){this.$refs[e].resetFields()}}},r,!1,null,null,null);a.default=l.exports}});