(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ee33d32"],{2017:function(e,r,s){"use strict";s("70ad")},"639f":function(e,r,s){"use strict";s("bcd7")},"70ad":function(e,r,s){},"9ed6":function(e,r,s){"use strict";s.r(r);var o=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"login-container"},[s("el-form",{ref:"loginForm",staticClass:"login-form login",class:e.donghua1,attrs:{model:e.loginForm,"auto-complete":"on","label-position":"left"}},[s("div",{staticClass:"title-container"},[s("h3",{staticClass:"title"},[e._v("登 录")])]),s("el-form-item",{attrs:{prop:"username"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"user"}})],1),s("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(r){e.$set(e.loginForm,"username",r)},expression:"loginForm.username"}})],1),s("el-form-item",{attrs:{prop:"password"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"password"}})],1),s("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.handleLogin(r)}},model:{value:e.loginForm.password,callback:function(r){e.$set(e.loginForm,"password",r)},expression:"loginForm.password"}}),s("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[s("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),s("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},on:{click:e.handleLogin}},[e._v("Login")]),s("span",{staticClass:"switch",on:{click:e.animation}},[e._v("注册")])],1),s("el-form",{ref:"registerForm",staticClass:"login-form you register",class:e.donghua2,attrs:{model:e.registerForm,rules:e.registerRules,"label-width":"80px"}},[s("div",{staticClass:"title-container"},[s("h3",{staticClass:"title"},[e._v("注 册")])]),s("el-form-item",{attrs:{label:"账号",prop:"userName"}},[s("el-input",{attrs:{placeholder:"请输入账号(登录用)"},model:{value:e.registerForm.userName,callback:function(r){e.$set(e.registerForm,"userName",r)},expression:"registerForm.userName"}})],1),s("el-form-item",{attrs:{label:"昵称",prop:"nickName"}},[s("el-input",{attrs:{placeholder:"请输入昵称"},model:{value:e.registerForm.nickName,callback:function(r){e.$set(e.registerForm,"nickName",r)},expression:"registerForm.nickName"}})],1),s("el-form-item",{attrs:{label:"密码",prop:"password"}},[s("el-input",{attrs:{placeholder:"请输入密码","show-password":""},model:{value:e.registerForm.password,callback:function(r){e.$set(e.registerForm,"password",r)},expression:"registerForm.password"}})],1),s("el-form-item",{attrs:{label:"确认密码",prop:"password1"}},[s("el-input",{attrs:{placeholder:"确认密码","show-password":""},model:{value:e.registerForm.password1,callback:function(r){e.$set(e.registerForm,"password1",r)},expression:"registerForm.password1"}})],1),s("el-form-item",{attrs:{label:"电话",prop:"phone"}},[s("el-input",{attrs:{placeholder:"请输入电话"},model:{value:e.registerForm.phone,callback:function(r){e.$set(e.registerForm,"phone",r)},expression:"registerForm.phone"}})],1),s("el-form-item",{attrs:{label:"店铺名称",prop:"shopName"}},[s("el-input",{attrs:{placeholder:"请输入店铺名称"},model:{value:e.registerForm.shopName,callback:function(r){e.$set(e.registerForm,"shopName",r)},expression:"registerForm.shopName"}})],1),s("el-form-item",{attrs:{label:"店铺地址",prop:"address"}},[s("el-input",{attrs:{placeholder:"请输入地址"},model:{value:e.registerForm.address,callback:function(r){e.$set(e.registerForm,"address",r)},expression:"registerForm.address"}})],1),s("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},on:{click:function(r){return e.handleRegister()}}},[e._v("注册")]),s("span",{staticClass:"switch",on:{click:e.animation}},[e._v("登录")])],1)],1)},t=[],a=s("cf45"),i=s("047a"),n=s("8c92"),l=s.n(n),m=s("897d"),d=s.n(m),c={name:"Login",data:function(){var e=this,r=function(r,s,o){var t={},i={};t.url="/SS_CRUD/HaveUserName",i.userName=s,t.send=i,Object(a["a"])(t,e).then((function(e){0==e.code?o():o(new Error(e.msg))}),(function(e){}))},s=function(r,s,o){s===e.registerForm.password?o():o(new Error("两次输入密码不正确"))},o=function(r,s,o){s===e.registerForm.password1||""===e.registerForm.password1?o():o(new Error("两次输入密码不正确"))};return{loginForm:{username:"",password:""},registerForm:{userName:"",nickName:"",password:"",password1:"",phone:"",address:"",shopName:""},loading:!1,passwordType:"password",redirect:void 0,donghua1:"",donghua2:"",num:0,registerRules:{userName:[{required:!0,message:"请输入账号",trigger:"blur"},{validator:r,trigger:"blur"}],nickName:[{required:!0,message:"请填写昵称",trigger:"blur"}],password:[{required:!0,message:"请填写密码",trigger:"blur"},{validator:o,trigger:"blur"}],password1:[{required:!0,message:"请再次填写密码",trigger:"blur"},{validator:s,trigger:"blur"}],phone:[{required:!0,message:"请填写手机号码",trigger:"blur"}],address:[{required:!0,message:"请填写店铺地址",trigger:"blur"}],shopName:[{required:!0,message:"请填写店铺名称",trigger:"blur"}]}}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{animation:function(){this.num%2==0?(this.donghua1="login1",this.donghua2="register2"):(this.donghua1="login2",this.donghua2="register1"),this.num++},showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleRegister:function(){var e=this;this.$refs.registerForm.validate((function(r){if(r){var s={},o={};o.userName=e.registerForm.userName,o.nickName=e.registerForm.nickName,o.password=d()(e.registerForm.password),o.phone=e.registerForm.phone,o.address=e.registerForm.address,o.shopName=e.registerForm.shopName,s.url="/SS_CRUD/Enroll",s.send=o,Object(a["a"])(s,e).then((function(r){console.log(r),0==r.code&&(e.$message({message:r.msg,type:"success"}),e.loginForm.username=e.registerForm.userName,e.loginForm.password=e.registerForm.password,e.handleLogin())}),(function(e){}))}}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(r){if(!r)return console.log("error submit!!"),!1;e.loading=!0;var s={},o={};s.url="/SS_CRUD/Login",o.userName=e.loginForm.username,o.password=d()(e.loginForm.password),s.send=o,Object(a["a"])(s,e).then((function(r){e.loading=!1,console.log(r),0!==r.code?e.$message.error("登陆失败"):(l.a.set("token",r.data.token),localStorage.setItem("userdata",JSON.stringify(r.data)),localStorage.setItem("funcMap",JSON.stringify(Object(i["b"])(r.data.funcMap))),e.$router.push({path:"/"})),e.loading=!1}),(function(r){e.loading=!1}))}))}}},p=c,u=(s("2017"),s("639f"),s("5d22")),g=Object(u["a"])(p,o,t,!1,null,"e7f1a14e",null);r["default"]=g.exports},bcd7:function(e,r,s){}}]);