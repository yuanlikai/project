webpackJsonp([2],{"+2Tb":function(e,t,a){"use strict";var o=a("PaUB"),s={props:["title1","phone"],data:function(){return{time:60,loading:!0,disabled:!0,codeText:"获取验证码",modal1:!1,formValidate:{mobile:"",code:"",pwd:""},ruleValidate:{mobile:[{required:!0,message:"请输入您的手机号",trigger:"blur"}],code:[{required:!0,message:"请输入您的手机验证",trigger:"blur"}],pwd:[{required:!0,message:"请输入您的新密码",trigger:"blur"}]}}},methods:{getCode:function(){var e=this;if(60===e.time){var t=setInterval(function(){0===e.time?(e.codeText="获取验证码",e.time=60,window.clearInterval(t)):(e.time--,e.codeText=e.time+"s")},1e3);e.Axios.post("/partner/login/mobile",e.Qs.stringify({mobile:e.formValidate.mobile})).then(function(t){e.$Message.success("验证码已发送")})}else e.$Message.warning("客官稍后再获取")},handleSubmit:function(e){var t=this;t.$refs[e].validate(function(e){e?t.Axios.post("/partner/login/updatapwd",t.Qs.stringify({mobile:t.formValidate.mobile,code:t.formValidate.code,pwd:t.formValidate.pwd})).then(function(e){if(0===e.data.error){t.modal1=!1,t.handleReset("formValidate"),t.$router.push("/"),t.$Message.success("密码已修改，请登录");var a=document.cookie.match(/[^ =;]+(?=\=)/g);if(a)for(var o=a.length;o--;)document.cookie=a[o]+"=0;expires="+new Date(0).toUTCString()}else t.loading=!1,t.$Message.error(e.data.errMsg)}):(t.loading=!1,t.$Message.error("Fail!"))})},handleReset:function(e){this.$refs[e].resetFields()},ok:function(){},cancel:function(){this.handleReset("formValidate")},phooos:function(){return this.phone}},mounted:function(){o.a.cookie("token")?this.disabled=!0:this.disabled=!1}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("Modal",{attrs:{title:e.title1,loading:e.loading,styles:{width:"400px"}},on:{"on-ok":function(t){e.handleSubmit("formValidate")},"on-cancel":e.cancel},model:{value:e.modal1,callback:function(t){e.modal1=t},expression:"modal1"}},[a("Form",{ref:"formValidate",staticStyle:{padding:"0 10px"},attrs:{model:e.formValidate,rules:e.ruleValidate,"label-width":80}},[a("FormItem",{attrs:{label:"手机号",prop:"mobile"}},[a("Input",{attrs:{disabled:e.disabled,maxlength:11,placeholder:"请输入您的手机号"},model:{value:e.formValidate.mobile,callback:function(t){e.$set(e.formValidate,"mobile",t)},expression:"formValidate.mobile"}})],1),e._v(" "),a("FormItem",{attrs:{label:"验证码",prop:"code"}},[a("Input",{attrs:{search:"","enter-button":e.codeText,maxlength:4,placeholder:"请输入您的验证码"},on:{"on-search":function(t){e.getCode()}},model:{value:e.formValidate.code,callback:function(t){e.$set(e.formValidate,"code",t)},expression:"formValidate.code"}})],1),e._v(" "),a("FormItem",{attrs:{label:"新密码",prop:"pwd"}},[a("Input",{attrs:{maxlength:16,placeholder:"请输入您的新密码",type:"password"},model:{value:e.formValidate.pwd,callback:function(t){e.$set(e.formValidate,"pwd",t)},expression:"formValidate.pwd"}})],1)],1)],1),e._v("\n  "+e._s(e.formValidate.mobile=e.phone)+"\n")],1)},staticRenderFns:[]};var r=a("VU/8")(s,i,!1,function(e){a("mKvv")},null,null);t.a=r.exports},Cl3J:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("PaUB"),s={components:{alterPas:a("+2Tb").a},data:function(){return{status:o.a.cookie("class_id"),user:{},formValidate:{},ruleValidate:{user_nick:[{required:!0,message:"The name cannot be empty",trigger:"blur"}],user_mobile:[{required:!0,message:"The name cannot be empty",trigger:"blur"}]},defaultList:[],imgName:"",visible:!1,uploadList:[],ctive:sessionStorage.getItem("meu"),modal6:!1,loading:!0}},methods:{getUser:function(){var e=this;e.Axios.post("/partner/login/user").then(function(t){e.formValidate=t.data.data,e.defaultList.push({name:"bc7521e033abdd1e92222d733590f104",url:t.data.data.user_headpic}),setTimeout(function(){e.uploadList=e.$refs.upload.fileList},0)})},asyncOK:function(){var e=this;e.formValidate.user_nick.length<2?(e.$Message.error("请输入2~12位昵称"),e.loading=!1):e.Axios.post("/partner/login/userupdata",e.Qs.stringify({key:"nick",value:e.formValidate.user_nick})).then(function(t){0===t.data.error&&(e.$Message.success("修改成功"),e.loading=!1),e.modal6=!1})},handleSuccess:function(e,t){var a=this;a.Axios.post("/partner/login/userupdata",a.Qs.stringify({key:"pic",value:"http://img.gsfzd.com/"+e})).then(function(t){0===t.data.error?(a.$Message.success("修改成功"),a.formValidate.user_headpic="http://img.gsfzd.com/"+e):a.$Message.error(e.data.errMsg)}),t.url="http://img.gsfzd.com/"+e,t.name="7eb99afb9d5f317c912f08b5212fd69a"},handleView:function(e){this.imgName=e,this.visible=!0},handleRemove:function(e){this.$refs.upload.fileList;this.$refs.upload.fileList.splice(0,1)},handleFormatError:function(e){this.$Notice.warning({title:"The file format is incorrect",desc:"File format of "+e.name+" is incorrect, please select jpg or png."})},handleMaxSize:function(e){this.$Notice.warning({title:"Exceeding file size limit",desc:"File  "+e.name+" is too large, no more than 2M."})},handleBeforeUpload:function(){this.handleRemove();var e=this.uploadList.length<1;return e||this.$Notice.warning({title:"Up to five pictures can be uploaded."}),e},tate:function(e){switch(e){case"1":this.modal6=!0;break;case"2":this.$refs.pas.modal1=!0;break;case"3":var t=document.cookie.match(/[^ =;]+(?=\=)/g);if(t)for(var a=t.length;a--;)document.cookie=t[a]+"=0;expires="+new Date(0).toUTCString();this.$Message.success("退出登录成功"),this.$router.push("/")}},sect:function(e){var t=this;switch(e){case"1-1":sessionStorage.setItem("meu",e),t.$router.push("/deve/houses");break;case"1-2":sessionStorage.setItem("meu",e),t.$router.push("/deve/appoin");break;case"1-3":sessionStorage.setItem("meu",e),t.$router.push("/deve/order");break;case"1-4":sessionStorage.setItem("meu",e),t.$router.push("/deve/collect");break;case"2-1":sessionStorage.setItem("meu",e),t.$router.push("/partner/disk");break;case"2-2":sessionStorage.setItem("meu",e),t.$router.push("/partner/look");break;case"2-3":sessionStorage.setItem("meu",e),t.$router.push("/partner/place");break;case"3-1":sessionStorage.setItem("meu",e),t.$router.push("/broker/houses");break;case"3-2":sessionStorage.setItem("meu",e),t.$router.push("/broker/appoin");break;case"3-3":sessionStorage.setItem("meu",e),t.$router.push("/broker/collect");break;case"4-1":sessionStorage.setItem("meu",e),t.$router.push("/report/disk");break;case"4-2":sessionStorage.setItem("meu",e),t.$router.push("/report/look")}}},mounted:function(){this.getUser(),this.uploadList=this.$refs.upload.fileList}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"layout"},[a("Sider",{style:{position:"fixed",height:"100vh",left:0,overflow:"auto"}},[a("Menu",{attrs:{"active-name":e.ctive,theme:"dark",width:"auto","open-names":[e.ctive.split("-")[0]]},on:{"on-select":e.sect}},[a("img",{staticClass:"layout-logo",attrs:{src:"https://gsfhuodong.oss-cn-hangzhou.aliyuncs.com/logo.png",alt:""}}),e._v(" "),1==e.status?a("Submenu",{attrs:{name:"1"}},[a("template",{slot:"title"},[e._v("\n          开发商\n        ")]),e._v(" "),a("MenuItem",{attrs:{name:"1-1"}},[e._v("楼盘管理")]),e._v(" "),a("MenuItem",{attrs:{name:"1-2"}},[e._v("预约管理")]),e._v(" "),a("MenuItem",{attrs:{name:"1-3"}},[e._v("订单管理")]),e._v(" "),a("MenuItem",{attrs:{name:"1-4"}},[e._v("收藏管理")])],2):a("Submenu",{attrs:{name:"3"}},[a("template",{slot:"title"},[e._v("\n          经纪人/中介\n        ")]),e._v(" "),a("MenuItem",{attrs:{name:"3-1"}},[e._v("房源管理")]),e._v(" "),a("MenuItem",{attrs:{name:"3-2"}},[e._v("预约管理")]),e._v(" "),a("MenuItem",{attrs:{name:"3-3"}},[e._v("收藏管理")])],2)],1)],1),e._v(" "),a("Layout",{style:{marginLeft:"200px"}},[a("Header",{style:{background:"#fff",boxShadow:"0 2px 3px 2px rgba(0,0,0,.1)"}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("p",{staticStyle:{"font-size":"14px"}},[e._v("上海贵上房产营销策划有限公司")])]),e._v(" "),a("Col",{staticStyle:{"text-align":"right"},attrs:{span:"12"}},[a("Dropdown",{on:{"on-click":e.tate}},[a("a",{attrs:{href:"javascript:void(0)"}},[a("Avatar",{attrs:{src:e.formValidate.user_headpic}}),e._v(" "),a("Icon",{attrs:{type:"md-arrow-dropdown",color:"#515a6e",size:"18"}})],1),e._v(" "),a("DropdownMenu",{staticStyle:{"text-align":"left"},attrs:{slot:"list"},slot:"list"},[a("DropdownItem",{attrs:{name:"1"}},[e._v("个人资料")]),e._v(" "),a("DropdownItem",{attrs:{name:"2"}},[e._v("修改密码")]),e._v(" "),a("DropdownItem",{attrs:{name:"3"}},[e._v("退出登录")])],1)],1)],1)],1)],1),e._v(" "),a("router-view")],1),e._v(" "),a("Modal",{attrs:{title:"编辑个人资料",loading:e.loading},on:{"on-ok":e.asyncOK},model:{value:e.modal6,callback:function(t){e.modal6=t},expression:"modal6"}},[a("Row",[a("Col",{staticStyle:{"text-align":"center"},attrs:{span:"8"}},[e._l(e.uploadList,function(t){return a("div",{staticClass:"demo-upload-list"},["finished"===t.status?[a("img",{attrs:{src:t.url}}),e._v(" "),a("div",{staticClass:"demo-upload-list-cover"},[a("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(a){e.handleView(t.url)}}})],1)]:[t.showProgress?a("Progress",{attrs:{percent:t.percentage,"hide-info":""}}):e._e()]],2)}),e._v(" "),a("p",[a("Upload",{ref:"upload",staticStyle:{display:"inline-block",width:"58px"},attrs:{"show-upload-list":!1,"default-file-list":e.defaultList,"on-success":e.handleSuccess,format:["jpg","jpeg","png"],"max-size":2048,"with-credentials":!0,"on-format-error":e.handleFormatError,"on-exceeded-size":e.handleMaxSize,"before-upload":e.handleBeforeUpload,type:"drag",action:"/apis/publics/picture/imgouter"}},[a("div",{staticStyle:{width:"58px",height:"30px","line-height":"30px",color:"#000"}},[e._v("\n            更换头像\n          ")])])],1),e._v(" "),a("Modal",{attrs:{title:"View Image"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[e.visible?a("img",{staticStyle:{width:"100%"},attrs:{src:e.imgName}}):e._e()])],2),e._v(" "),a("Col",{attrs:{span:"16"}},[a("Form",{ref:"formValidate",attrs:{model:e.formValidate,rules:e.ruleValidate,"label-width":80}},[a("FormItem",{attrs:{label:"昵称",prop:"user_nick"}},[a("Input",{staticStyle:{width:"150px"},attrs:{maxlength:12,placeholder:"请填写您的昵称"},model:{value:e.formValidate.user_nick,callback:function(t){e.$set(e.formValidate,"user_nick",t)},expression:"formValidate.user_nick"}})],1),e._v(" "),a("FormItem",{attrs:{label:"手机号",prop:"user_mobile"}},[a("Input",{staticStyle:{width:"150px"},attrs:{disabled:!0,placeholder:"您的用户名"},model:{value:e.formValidate.user_mobile,callback:function(t){e.$set(e.formValidate,"user_mobile",t)},expression:"formValidate.user_mobile"}})],1)],1)],1)],1)],1),e._v(" "),a("alterPas",{ref:"pas",attrs:{title1:"修改密码",phone:e.formValidate.user_mobile}})],1)},staticRenderFns:[]};var r=a("VU/8")(s,i,!1,function(e){a("VlF1"),a("StXZ")},"data-v-339b569e",null);t.default=r.exports},PaUB:function(e,t,a){"use strict";var o=function(){var e=void 0,t=document;this.cookie=function(a,o,s){if(o!=e)if(s!=e){var i=new Date;i.setTime(i.getTime()+24*s.expires*60*60*1e3),t.cookie=encodeURIComponent(a)+"="+encodeURIComponent(o)+";expires="+i.toGMTString()}else t.cookie=encodeURIComponent(a)+"="+encodeURIComponent(o);else{s=t.cookie.split("; ");for(var r=0;r<s.length;r++){var n=s[r].split("=");if(n[0]==decodeURIComponent(a))return decodeURIComponent(n[1])}}}},s=new o;o.prototype.removeCookie=function(e){s.cookie(e,"",{expires:-1})},t.a=s},StXZ:function(e,t){},VlF1:function(e,t){},mKvv:function(e,t){}});