(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fca631a"],{"1f34":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("div",{staticClass:"top"},[-1!==e.funcMap.indexOf("userAdd")?a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-plus"},on:{click:function(t){return e.addOrUpdate()}}},[e._v("新增")]):e._e()],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.dataList,"header-cell-style":{background:"#f8f8f9"}}},[a("el-table-column",{attrs:{prop:"nickName",label:"员工名称"}}),a("el-table-column",{attrs:{prop:"phone",label:"联系方式"}}),a("el-table-column",{attrs:{prop:"roleName",label:"员工角色"}}),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间"}}),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return["Y"!=t.row.manager&&-1!==e.funcMap.indexOf("userUpt")?a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){return e.addOrUpdate(t.row)}}},[a("i",{staticClass:"el-icon-edit-outline"}),e._v("修改")]):e._e(),"Y"!=t.row.manager&&-1!==e.funcMap.indexOf("userDel")?a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){return e.del(t.row)}}},[a("i",{staticClass:"el-icon-delete"}),e._v("删除")]):e._e()]}}])})],1),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.count},on:{"current-change":e.currentChange}}),a("add-or-update",{ref:"aou",on:{getRoleList:function(t){return e.getRoleList()}}})],1)},r=[],n=a("31ca"),s=a("cf45"),l={components:{addOrUpdate:n["default"]},data:function(){return{count:null,page:1,listLoading:!1,dataList:[],funcMap:[]}},mounted:function(){this.getRoleList(),this.funcMap=JSON.parse(localStorage.getItem("funcMap"))},methods:{currentChange:function(e){this.page!==e&&(this.page=e,this.getRoleList())},addOrUpdate:function(e){this.$refs.aou.init(e)},getRoleList:function(){var e=this,t={},a={};t.url="/SS_CRUD/SelectUser",a.page=this.page,a.shopId=JSON.parse(localStorage.getItem("userdata")).shopId,t.send=a,Object(s["a"])(t,this).then((function(t){console.log(t),0==t.code&&(e.count=t.data.count,e.dataList=t.data.list)}),(function(e){}))},del:function(e){var t=this;this.$confirm("此操作将永久删除该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var a={},o={};a.url="/SS_CRUD/DeleteUser",o.userId=e.userId,a.send=o,Object(s["a"])(a,t).then((function(e){console.log(e),0==e.code?(t.getRoleList(),t.$message({type:"success",message:"删除成功!"})):t.$message({type:"error",message:e.msg})}),(function(e){}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))}}},i=l,d=(a("36ad"),a("5d22")),c=Object(d["a"])(i,o,r,!1,null,null,null);t["default"]=c.exports},"31ca":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"新增角色",visible:e.dialogVisible,width:"50%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"dataForm",staticClass:"demo-ruleForm",attrs:{model:e.dataForm,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"员工名称",prop:"userName"}},[a("el-input",{attrs:{placeholder:"员工账号，登录用"},model:{value:e.dataForm.userName,callback:function(t){e.$set(e.dataForm,"userName",t)},expression:"dataForm.userName"}})],1),a("el-form-item",{attrs:{label:"员工昵称",prop:"nickName"}},[a("el-input",{attrs:{placeholder:"员工昵称"},model:{value:e.dataForm.nickName,callback:function(t){e.$set(e.dataForm,"nickName",t)},expression:"dataForm.nickName"}})],1),a("el-form-item",{attrs:{label:"员工角色",prop:"roleId"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.dataForm.roleId,callback:function(t){e.$set(e.dataForm,"roleId",t)},expression:"dataForm.roleId"}},e._l(e.roleList,(function(e){return a("el-option",{key:e.roleId,attrs:{label:e.roleName,value:e.roleId}})})),1)],1),a("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[a("el-input",{attrs:{placeholder:"员工手机号"},model:{value:e.dataForm.phone,callback:function(t){e.$set(e.dataForm,"phone",t)},expression:"dataForm.phone"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addOrUpdate()}}},[e._v("确 定")])],1)],1)},r=[],n=a("047a"),s=a("cf45"),l=a("897d"),i=a.n(l),d={data:function(){return{dialogVisible:!1,dataForm:{userName:"",nickName:"",roleId:"",phone:""},id:"",roleList:[],rules:{nickName:[{required:!0,message:"请填写员工昵称",trigger:"blur"}],userName:[{required:!0,message:"请填写员工名称",trigger:"blur"}],roleId:[{required:!0,message:"请选择员工角色",trigger:"change"}],phone:[{required:!0,message:"请填写员工手机号",trigger:"blur"}]}}},mounted:function(){this.tree=Object(n["e"])(),this.getAllRole()},methods:{init:function(e){this.dialogVisible=!0,this.id="",this.dataForm.userName="",this.dataForm.nickName="",this.dataForm.roleId="",this.dataForm.phone="",e&&(this.id=e.userId,this.dataForm.userName=e.userName,this.dataForm.nickName=e.nickName,this.dataForm.roleId=e.roleId,this.dataForm.phone=e.phone)},getAllRole:function(){var e=this,t={},a={};t.url="/SS_CRUD/GetAllRole",a.shopId=JSON.parse(localStorage.getItem("userdata")).shopId,t.send=a,Object(s["a"])(t,this).then((function(t){console.log(t),0==t.code&&(e.roleList=t.data.list)}),(function(e){}))},addOrUpdate:function(){var e=this;this.$refs.dataForm.validate((function(t){if(t){var a={},o={};a.url=e.id?"/SS_CRUD/UpdateUser":"/SS_CRUD/AddUser",e.id&&(o.userId=e.id),o.shopId=JSON.parse(localStorage.getItem("userdata")).shopId,o.userName=e.dataForm.userName,o.nickName=e.dataForm.nickName,o.roleId=e.dataForm.roleId,o.phone=e.dataForm.phone,o.password=i()("123456"),a.send=o,Object(s["a"])(a,e).then((function(t){console.log(t),0===t.code?(e.$emit("getRoleList"),e.dialogVisible=!1,e.$message({message:t.msg,type:"success"})):e.$message({message:t.msg,type:"error"})}),(function(e){}))}}))}}},c=d,u=a("5d22"),m=Object(u["a"])(c,o,r,!1,null,null,null);t["default"]=m.exports},"36ad":function(e,t,a){"use strict";a("fe42")},fe42:function(e,t,a){}}]);