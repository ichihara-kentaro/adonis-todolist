(function(t){function e(e){for(var o,a,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)a=i[d],n[a]&&p.push(n[a][0]),n[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],o=!0,i=1;i<r.length;i++){var c=r[i];0!==n[c]&&(o=!1)}o&&(s.splice(e--,1),t=a(a.s=r[0]))}return t}var o={},n={app:0},s=[];function a(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=o,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(r,o,function(e){return t[e]}.bind(null,o));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"05b0":function(t,e,r){},"17ea":function(t,e,r){"use strict";var o=r("31b8"),n=r.n(o);n.a},2856:function(t,e,r){},"2cfd":function(t,e,r){"use strict";var o=r("e3a0"),n=r.n(o);n.a},"31b8":function(t,e,r){},4242:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("bf40");var o=r("31bd"),n=r("ce5b"),s=r.n(n),a=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("Toolbar"),r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n      "),r("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),r("router-view")],1)],1)},c=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-toolbar",{attrs:{color:"green",dark:"",fixed:""}},[r("v-toolbar-side-icon"),r("v-toolbar-title",{staticClass:"mr-4"},[t._v("VUE TODO")]),r("v-toolbar-items",[t.isLoggedIn?r("v-btn",{attrs:{flat:""}},[r("v-icon",[t._v("playlist_add_check")]),t._v("\n        Projects")],1):t._e()],1),r("v-spacer"),r("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[t.isLoggedIn?t._e():r("v-btn",{attrs:{flat:"",to:"/register"}},[r("v-icon",{staticClass:"mr-2"},[t._v("account_box")]),t._v("\n      Register\n    ")],1),t.isLoggedIn?t._e():r("v-btn",{attrs:{flat:"",to:"/login"}},[r("v-icon",{staticClass:"mr-2"},[t._v("fingerprint")]),t._v("\n      Login\n    ")],1),t.isLoggedIn?r("v-btn",{attrs:{flat:""},on:{click:t.logout}},[r("v-icon",{staticClass:"mr-2"},[t._v("exit_to_app")]),t._v("\n      Logout\n    ")],1):t._e(),r("v-btn",{attrs:{flat:""}},[r("v-icon",{staticClass:"mr-2"},[t._v("ondemand_video")]),t._v("\n      How this was Made\n    ")],1)],1)],1)},u=[],d=r("2f62"),p={computed:{...Object(d["c"])("authentication",["isLoggedIn"])},methods:{...Object(d["b"])("authentication",["logout"])}},v=p,f=(r("60f8"),r("2877")),m=Object(f["a"])(v,l,u,!1,null,null,null);m.options.__file="Toolbar.vue";var g=m.exports,b={components:{Toolbar:g}},j=b,_=(r("5c0b"),Object(f["a"])(j,i,c,!1,null,null,null));_.options.__file="App.vue";var h=_.exports,k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"white elevation-2"},[r("v-toolbar",{attrs:{flat:"",dense:"",dark:"",color:"green"}},[r("v-toolbar-title",[t._v("\n      "+t._s(t.title)+"\n    ")])],1),r("div",{staticClass:"pl-4 pr-4 pt-2 pd-2"},[t._t("default",[t._v("No slot content defined.")])],2)],1)},E=[],P={props:{title:String}},w=P,x=(r("645c"),Object(f["a"])(w,k,E,!1,null,null,null));x.options.__file="Panel.vue";var O=x.exports,T=r("8c4f"),y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",[r("v-flex",{attrs:{xs4:""}},[r("Projects")],1),t.currentProject?r("v-flex",{staticClass:"pl-4",attrs:{xs8:""}},[r("Tasks")],1):t._e()],1)],1)},C=[],M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Panel",{attrs:{title:"Projects"}},[t._l(t.projects,function(e){return r("div",{key:e.id,staticClass:"project mt-2 mb-2"},[r("EditableRecord",{attrs:{isEditMode:e.isEditMode,title:e.title},on:{onInput:function(r){t.setProjectTitle({project:e,title:r})},onClick:function(r){t.projectClicked(e)},onEdit:function(r){t.setEditMode(e)},onSave:function(r){t.saveProject(e)},onDelete:function(r){t.deleteProject(e)}}})],1)}),r("CreateRecord",{attrs:{placeholder:"My project is....",value:t.newProjectName},on:{onInput:t.setNewProjectName,create:t.createProject}})],2)},N=[],$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{staticClass:"mt-4",attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs8:""}},[r("v-text-field",{attrs:{placeholder:t.placeholder,value:t.value},on:{input:function(e){t.$emit("onInput",e)},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.$emit("create")}}})],1),r("v-flex",{staticClass:"text-xs-right",attrs:{xs4:""}},[r("v-btn",{staticClass:"mt-2",attrs:{dark:"",color:"green"},on:{click:function(e){t.$emit("create")}}},[r("v-icon",{staticClass:"mr-2"},[t._v("add_circle")]),t._v("\n      Create\n    ")],1)],1)],1)},R=[],L={props:["placeholder","value"]},I=L,S=(r("da8b"),Object(f["a"])(I,$,R,!1,null,null,null));S.options.__file="CreateRecord.vue";var D=S.exports,A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{staticClass:"text-xs-left",attrs:{xs9:""}},[t._t("default"),t.isEditMode?t._e():r("span",{on:{click:function(e){t.$emit("onClick")}}},[t._v("\n      "+t._s(t.title)+"\n    ")]),t.isEditMode?r("v-text-field",{attrs:{autofocus:"",value:t.title},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.$emit("onSave")},input:function(e){t.$emit("onInput",e)}}}):t._e()],2),r("v-flex",{staticClass:"text-xs-right",attrs:{xs3:""}},[t.isEditMode?t._e():r("v-icon",{on:{click:function(e){t.$emit("onEdit")}}},[t._v("\n      edit\n    ")]),t.isEditMode?r("v-icon",{on:{click:function(e){t.$emit("onSave")}}},[t._v("\n      check\n    ")]):t._e(),r("v-icon",{on:{click:function(e){t.$emit("onDelete")}}},[t._v("\n      delete\n    ")])],1)],1)},U=[],F={props:["isEditMode","title","record"]},H=F,J=(r("c93e"),Object(f["a"])(H,A,U,!1,null,null,null));J.options.__file="EditableRecord.vue";var Y=J.exports,z={mounted(){this.fetchProjects()},components:{CreateRecord:D,EditableRecord:Y},computed:{...Object(d["e"])("projects",["newProjectName","projects"])},methods:{projectClicked(t){this.setCurrentProject(t),this.fetchTasksForProject(t)},...Object(d["d"])("projects",["setNewProjectName","setEditMode","setProjectTitle","setCurrentProject"]),...Object(d["b"])("projects",["createProject","fetchProjects","saveProject","deleteProject"]),...Object(d["b"])("tasks",["fetchTasksForProject"])}},B=z,V=(r("f6ca"),Object(f["a"])(B,M,N,!1,null,null,null));V.options.__file="Projects.vue";var q=V.exports,G=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Panel",{attrs:{title:"Tasks"}},[t._l(t.tasks,function(e){return r("div",{key:e.id,staticClass:"task mt-2 mb-2"},[r("EditableRecord",{attrs:{isEditMode:e.isEditMode,title:e.description},on:{onInput:function(r){t.setTaskDescription({task:e,description:r})},onEdit:function(r){t.setEditMode(e)},onSave:function(r){t.saveTask(e)},onDelete:function(r){t.deleteTask(e)}}},[r("v-icon",{on:{click:function(r){t.checkClicked(e)}}},[t._v("\n      "+t._s(e.completed?"check_box":"check_box_outline_blank")+"\n    ")])],1)],1)}),r("CreateRecord",{attrs:{placeholder:"I need to...",value:t.newTaskName},on:{onInput:t.setNewTaskName,create:t.createTask}})],2)},K=[],Q={components:{CreateRecord:D,EditableRecord:Y},computed:{...Object(d["e"])("tasks",["tasks","newTaskName"])},methods:{...Object(d["b"])("tasks",["createTask","saveTask","deleteTask"]),...Object(d["d"])("tasks",["setNewTaskName","setTaskDescription","setEditMode","toggleCompleted"]),checkClicked(t){this.toggleCompleted(t),this.saveTask(t)}}},W=Q,X=(r("17ea"),Object(f["a"])(W,G,K,!1,null,null,null));X.options.__file="Tasks.vue";var Z=X.exports,tt={components:{Projects:q,Tasks:Z},mounted(){if(!this.isLoggedIn)return gt.push("/login")},computed:{...Object(d["e"])("projects",["currentProject"]),...Object(d["c"])("authentication",["isLoggedIn"])}},et=tt,rt=Object(f["a"])(et,y,C,!1,null,null,null);rt.options.__file="Projects.vue";var ot=rt.exports,nt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs6:"","offset-xs3":""}},[r("h1",[t._v("Login")]),r("v-text-field",{attrs:{label:"Email",placeholder:"Email",value:t.loginEmail},on:{input:t.setLoginEmail}}),r("v-text-field",{attrs:{label:"Password",placeholder:"Password",type:"password",autocomplete:"new-password",value:t.loginPassword},on:{input:t.setLoginPassword}}),r("v-alert",{attrs:{type:"error",value:t.loginError}},[t._v("\n        "+t._s(t.loginError)+"\n      ")]),r("v-btn",{attrs:{color:"green",dark:""},on:{click:t.login}},[r("v-icon",{staticClass:"mr-2"},[t._v("fingerprint")]),t._v("\n        Login\n      ")],1)],1)],1)],1)},st=[],at={computed:{...Object(d["e"])("authentication",["loginEmail","loginPassword","loginError"])},methods:{...Object(d["d"])("authentication",["setLoginEmail","setLoginPassword"]),...Object(d["b"])("authentication",["login"])}},it=at,ct=(r("d6db"),Object(f["a"])(it,nt,st,!1,null,null,null));ct.options.__file="Login.vue";var lt=ct.exports,ut=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs6:"","offset-xs3":""}},[r("h1",[t._v("Register")]),r("v-text-field",{attrs:{label:"Email",placeholder:"Email",value:t.registerEmail},on:{input:t.setRegisterEmail}}),r("v-text-field",{attrs:{label:"Password",placeholder:"Password",type:"password",autocomplete:"new-password",value:t.registerPassword},on:{input:t.setRegisterPassword}}),r("v-alert",{attrs:{type:"error",value:t.registerError}},[t._v("\n        "+t._s(t.registerError)+"\n      ")]),r("v-btn",{attrs:{color:"green",dark:""},on:{click:t.register}},[r("v-icon",{staticClass:"mr-2"},[t._v("account_circle")]),t._v("\n        Register\n      ")],1)],1)],1)],1)},dt=[],pt={computed:{...Object(d["e"])("authentication",["registerEmail","registerPassword","registerError"])},methods:{...Object(d["d"])("authentication",["setRegisterEmail","setRegisterPassword"]),...Object(d["b"])("authentication",["register"])}},vt=pt,ft=(r("2cfd"),Object(f["a"])(vt,ut,dt,!1,null,null,null));ft.options.__file="Register.vue";var mt=ft.exports;a["default"].use(T["a"]);var gt=new T["a"]({mode:"history",base:"/",routes:[{path:"/",name:"projects",component:ot},{path:"/login",name:"login",component:lt},{path:"/register",name:"register",component:mt}]}),bt=r("0e44"),jt=r("bc3a"),_t=r.n(jt),ht=()=>{return _t.a.create({baseURL:wt.state.baseUrl,timeout:5e3,headers:{Authorization:`Bearer ${wt.state.authentication.token}`}})},kt={namespaced:!0,state:{registerEmail:"hello YOOOOO!",registerPassword:"world",registerError:null,loginEmail:"hello YOOOOO!",loginPassword:"world",loginError:null,token:null},actions:{logout({commit:t}){t("setToken",null),gt.push("/login")},register({commit:t,state:e}){return t("setRegisterError",null),ht().post("/auth/register",{email:e.registerEmail,password:e.registerPassword}).then(({data:e})=>{t("setToken",e.token),gt.push("/")}).catch(()=>{t("setRegisterError","An error has occured trying to create your account.")})},login({commit:t,state:e}){return t("setLoginError",null),ht().post("/auth/login",{email:e.loginEmail,password:e.loginPassword}).then(({data:e})=>{t("setToken",e.token),gt.push("/")}).catch(()=>{t("setLoginError","An error has occured trying to login.")})}},getters:{isLoggedIn(t){return!!t.token}},mutations:{setToken(t,e){t.token=e},setRegisterError(t,e){t.registerError=e},setRegisterEmail(t,e){t.registerEmail=e},setRegisterPassword(t,e){t.registerPassword=e},setLoginError(t,e){t.loginError=e},setLoginEmail(t,e){t.loginEmail=e},setLoginPassword(t,e){t.loginPassword=e}}},Et={namespaced:!0,state:{projects:[],currentProject:null,newProjectName:null},actions:{saveProject({commit:t},e){return ht().patch(`/projects/${e.id}`,e).then(()=>{t("unsetEditMode",e)})},deleteProject({commit:t},e){return ht().delete(`/projects/${e.id}`).then(()=>{t("deleteProject",e)})},fetchProjects({commit:t}){return ht().get("/projects").then(({data:e})=>{t("setProjects",e)})},createProject({commit:t,state:e}){return ht().post("/projects",{title:e.newProjectName}).then(({data:e})=>{t("appendProject",e),t("setNewProjectName",null)})}},getters:{},mutations:{setCurrentProject(t,e){t.currentProject=e},setNewProjectName(t,e){t.newProjectName=e},appendProject(t,e){t.projects.push(e)},setProjects(t,e){t.projects=e},setProjectTitle(t,{project:e,title:r}){e.title=r},setEditMode(t,e){a["default"].set(e,"isEditMode",!0)},unsetEditMode(t,e){a["default"].set(e,"isEditMode",!1)},deleteProject(t,e){t.projects.splice(t.projects.indexOf(e),1)}}},Pt={namespaced:!0,state:{tasks:[],newTaskName:null},actions:{saveTask({commit:t},e){return ht().patch(`/tasks/${e.id}`,e).then(()=>{t("unsetEditMode",e)})},deleteTask({commit:t},e){return ht().delete(`/tasks/${e.id}`).then(()=>{t("deleteTask",e)})},fetchTasksForProject({commit:t},e){return ht().get(`/projects/${e.id}/tasks`).then(({data:e})=>{t("setTasks",e)})},createTask({commit:t,state:e,rootState:r}){return ht().post(`/projects/${r.projects.currentProject.id}/tasks`,{description:e.newTaskName}).then(({data:e})=>{t("appendTask",e),t("setNewTaskName",null)})}},getters:{},mutations:{setTasks(t,e){t.tasks=e},setNewTaskName(t,e){t.newTaskName=e},appendTask(t,e){t.tasks.push(e)},setTaskDescription(t,{task:e,description:r}){e.description=r},setEditMode(t,e){a["default"].set(e,"isEditMode",!0)},unsetEditMode(t,e){a["default"].set(e,"isEditMode",!1)},deleteTask(t,e){t.tasks.splice(t.tasks.indexOf(e),1)},toggleCompleted(t,e){e.completed=!e.completed}}};a["default"].use(d["a"]);var wt=new d["a"].Store({strict:!0,state:{baseUrl:"/api"},modules:{authentication:kt,projects:Et,tasks:Pt},mutations:{},actions:{},plugins:[Object(bt["a"])()]});a["default"].config.productionTip=!1,a["default"].use(s.a),Object(o["sync"])(wt,gt),a["default"].component("Panel",O),new a["default"]({router:gt,store:wt,render:t=>t(h)}).$mount("#app")},"56da":function(t,e,r){},"5c0b":function(t,e,r){"use strict";var o=r("2856"),n=r.n(o);n.a},"60f8":function(t,e,r){"use strict";var o=r("4242"),n=r.n(o);n.a},"645c":function(t,e,r){"use strict";var o=r("7a8b"),n=r.n(o);n.a},"7a8b":function(t,e,r){},b9f2:function(t,e,r){},c93e:function(t,e,r){"use strict";var o=r("56da"),n=r.n(o);n.a},d6db:function(t,e,r){"use strict";var o=r("05b0"),n=r.n(o);n.a},da8b:function(t,e,r){"use strict";var o=r("fea3"),n=r.n(o);n.a},e3a0:function(t,e,r){},f6ca:function(t,e,r){"use strict";var o=r("b9f2"),n=r.n(o);n.a},fea3:function(t,e,r){}});
//# sourceMappingURL=app.18ff3e93.js.map