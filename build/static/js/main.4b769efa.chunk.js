(this["webpackJsonpproject-one"]=this["webpackJsonpproject-one"]||[]).push([[0],{38:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),r=c(27),o=c.n(r),i=(c(38),c(24),c(39),c(18)),l=c(5),a=c(28),j=c(29),d=c(32),b=c(31),h=c(16);c(25),c(43),c(53);h.a.initializeApp({apiKey:"AIzaSyDzcaQsMg9-3vSzg8ekuOxdMg9OuG_oEzo",authDomain:"ssn-project-b13d6.firebaseapp.com",databaseURL:"https://ssn-project-b13d6-default-rtdb.firebaseio.com",projectId:"ssn-project-b13d6",storageBucket:"ssn-project-b13d6.appspot.com",messagingSenderId:"743494701844",appId:"1:743494701844:web:359881ba2bbb5279efa801"});var p=h.a.storage(),O=h.a.database(),u=h.a.auth(),x=h.a.database.ServerValue.TIMESTAMP,m=(p.TaskState,c(0)),E=function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(){return Object(a.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(m.jsxs)("nav",{className:"navbar navbar-expand-md bg-dark navbar-dark",children:[Object(m.jsx)("nav",{className:"navbar navbar-light bg-dark",children:Object(m.jsx)("div",{className:"container-fluid ",children:Object(m.jsxs)("a",{className:"navbar-brand",href:"index.html",children:[Object(m.jsx)("img",{src:"https://github.com/OwoyineJosephHastings/Acada/blob/main/resorces/images/logo.png?raw=true",alt:"",width:"30",height:"24",className:"d-inline-block align-top"}),"ACADA"]})})}),Object(m.jsx)("a",{className:"navbar-brand",href:"/",children:"Home"}),Object(m.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar",children:Object(m.jsx)("span",{className:"navbar-toggler-icon"})}),Object(m.jsx)("div",{className:"collapse navbar-collapse",id:"collapsibleNavbar",children:Object(m.jsxs)("ul",{className:"navbar-nav",children:[Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)("a",{className:"nav-link",href:"/",children:"Dashboard"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)("a",{className:"nav-link",href:"notes",children:"Academic notes"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)("a",{className:"nav-link",href:"notes",children:"Past Papers"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)("button",{className:"btn btn-outline-danger",onClick:function(e){return u.signOut()},children:"Signout"})})]})})]})}}]),c}(n.Component),g=c(13),C=c(7),f=c(8),v=s.a.createContext(),M=function(e){var t=e.children,c=Object(n.useState)(null),s=Object(f.a)(c,2),r=s[0],o=s[1];return Object(n.useEffect)((function(){u.onAuthStateChanged(o)}),[]),Object(m.jsx)(v.Provider,{value:{currentUser:r},children:t})},S=Object(l.f)((function(e){var t=e.history,c=Object(n.useState)({email:"",password:""}),s=Object(f.a)(c,2),r=s[0],o=s[1];if(Object(n.useContext)(v).currentUser)return Object(m.jsx)(l.a,{to:"/"});var a=r.email,j=r.password,d=function(e){o(Object(C.a)(Object(C.a)({},r),{},Object(g.a)({},e.target.name,e.target.value)))};return Object(m.jsx)("form",{children:Object(m.jsxs)("fieldset",{children:[Object(m.jsx)("legend",{children:Object(m.jsx)("h1",{children:" ACADA LOGIN"})}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"email",children:"Email"}),Object(m.jsx)("input",{type:"email",placeholder:"Enter your Email",id:"email",name:"email",value:a,onChange:d,required:!0})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"password",children:"User password"}),Object(m.jsx)("input",{name:"password",type:"password",placeholder:"Password",id:"password",value:j,onChange:d,required:!0})]}),Object(m.jsxs)("div",{className:"form-group",style:{display:"flex"},children:[Object(m.jsx)("button",{type:"button",onClick:function(e){e.preventDefault(),u.signInWithEmailAndPassword(a,j).then((function(e){var c=e.user;console.log(c),t.push("/")})).catch((function(e){var t=e.code,c=e.message;console.log(t,c)}))},children:"Login"}),"Need an acount? ",Object(m.jsx)(i.b,{to:"/signup",children:"Sign up"})]})]})})}));var N=function(e){return Object(m.jsxs)("div",{className:"row bg-light w-50 sm-w-100 border border-white ",id:"resource",style:{display:"flex",padding:"1px"},children:[Object(m.jsx)("img",{className:"col-3",width:"80%",height:"90%",alt:"icon ",src:"https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg"}),Object(m.jsxs)("div",{className:"col-9",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h6",{children:e.name}),Object(m.jsx)("p",{children:"Description "}),Object(m.jsxs)("span",{children:[e.downloads," downloads"]})]}),Object(m.jsx)("div",{children:Object(m.jsx)("a",{href:e.download_link,role:"button",className:"btn btn-outline-success",onClick:function(e){console.log(e.target.getAttribute("href"))},children:"Download"})})]})]})},y=function(){var e=Object(n.useState)({year:"Year 1",semester:"Semester 1",courseCode:"",resource:"Lecture Notes"}),t=Object(f.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)([]),o=Object(f.a)(r,2),i=o[0],l=o[1],a=c.year,j=c.semester,d=c.courseCode,b=c.resource,h=function(e){s(Object(C.a)(Object(C.a)({},c),{},Object(g.a)({},e.target.name,e.target.value)))};return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:Object(m.jsx)("b",{children:"Welcome to ACAD-Resources"})}),Object(m.jsx)("h6",{children:a+", "+j+", "+d+", "+b})]}),0!==i.length&&Object(m.jsx)("div",{className:"container-fluid  sm-100",style:{display:"flex",flexWrap:"wrap",padding:"1px"},children:i.map((function(e,t){return e.name&&e.download_link&&Object(m.jsx)(N,Object(C.a)({class:""},e))}))}),Object(m.jsx)("hr",{}),Object(m.jsx)("form",{className:"form",children:Object(m.jsxs)("fieldset",{className:"fieldset",children:[Object(m.jsx)("legend",{children:"Choose Specific Notes"}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"year",children:"Year"}),Object(m.jsxs)("select",{name:"year",onChange:h,value:a,id:"year",className:"form-control",children:[Object(m.jsx)("option",{children:"Year 1"}),Object(m.jsx)("option",{children:"Year 2"}),Object(m.jsx)("option",{children:"Year 3"}),Object(m.jsx)("option",{children:"Year 4"})]})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"semester",children:"Semester"}),Object(m.jsxs)("select",{name:"semester",onChange:h,value:j,id:"semester",className:"form-control",children:[Object(m.jsx)("option",{children:"Semester 1"}),Object(m.jsx)("option",{children:"Semester 2"})]})]}),Object(m.jsxs)("div",{className:"for-group",children:[Object(m.jsx)("label",{htmlFor:"courseCode",children:"Course Code:"}),Object(m.jsxs)("select",{name:"courseCode",value:d,onChange:h,className:"form-control",id:"courseCode",children:["Year 1"===a&&"Semester 1"===j&&Object(m.jsxs)("optgroup",{label:"SEMESTER ONE",children:[Object(m.jsx)("option",{children:"Select Course"}),Object(m.jsx)("option",{children:"EMT1101"}),Object(m.jsx)("option",{children:"TEC1101"}),Object(m.jsx)("option",{children:"MEC1101"}),Object(m.jsx)("option",{children:"MEC1102"}),Object(m.jsx)("option",{children:"MEC1103"})]}),"Year 1"===a&&"Semester 2"===j&&Object(m.jsxs)("optgroup",{label:"SEMESTER TWO",children:[Object(m.jsx)("option",{children:"Select Course"}),Object(m.jsx)("option",{children:"EMT1201"}),Object(m.jsx)("option",{children:"EMT1204"}),Object(m.jsx)("option",{children:"MEC1202"}),Object(m.jsx)("option",{children:"MEC1203"}),Object(m.jsx)("option",{children:"MEC1204"})]}),"Year 2"===a&&"Semester 1"===j&&Object(m.jsxs)("optgroup",{label:"SEMESTER ONE",children:[Object(m.jsx)("option",{children:"Select Course"}),Object(m.jsx)("option",{children:"EMT2101"}),Object(m.jsx)("option",{children:"TEC2101"}),Object(m.jsx)("option",{children:"MEC2101"}),Object(m.jsx)("option",{children:"MEC2102"}),Object(m.jsx)("option",{children:"MEC2103"})]}),"Year 2"===a&&"Semester 2"===j&&Object(m.jsxs)("optgroup",{label:"SEMESTER TWO",children:[Object(m.jsx)("option",{children:"Select Course"}),Object(m.jsx)("option",{children:"MEC2201"}),Object(m.jsx)("option",{children:"MEC2202"}),Object(m.jsx)("option",{children:"MEC2203"}),Object(m.jsx)("option",{children:"MEC2204"}),Object(m.jsx)("option",{children:"MEC2205"})]}),"Year 3"===a&&"Semester 1"===j&&Object(m.jsxs)("optgroup",{label:"SEMESTER ONE",children:[Object(m.jsx)("option",{children:"Select Course"}),Object(m.jsx)("option",{children:"MEC3101"}),Object(m.jsx)("option",{children:"MEC3102"}),Object(m.jsx)("option",{children:"MEC3103"}),Object(m.jsx)("option",{children:"MEC3104"}),Object(m.jsx)("option",{children:"MEC3105"})]}),"Year 3"===a&&"Semester 2"===j&&Object(m.jsxs)("optgroup",{label:"SEMESTER TWO",children:[Object(m.jsx)("option",{children:"Select Course"}),Object(m.jsx)("option",{children:"MEC3201"}),Object(m.jsx)("option",{children:"MEC3202"}),Object(m.jsx)("option",{children:"MEC3203"}),Object(m.jsx)("option",{children:"MEC3204"}),Object(m.jsx)("option",{children:"MEC3205"})]}),"Year 4"===a&&"Semester 1"===j&&Object(m.jsxs)("optgroup",{label:"SEMESTER ONE",children:[Object(m.jsx)("option",{children:"Select Course"}),Object(m.jsx)("option",{children:"MEC4101"}),Object(m.jsx)("option",{children:"MEC4102"}),Object(m.jsx)("option",{children:"MEC4103"}),Object(m.jsx)("option",{children:"MEC4104"}),Object(m.jsx)("option",{children:"MEC4105"}),Object(m.jsx)("option",{children:"MEC4106"}),Object(m.jsx)("option",{children:"MEC4107"})]}),"Year 4"===a&&"Semester 2"===j&&Object(m.jsxs)("optgroup",{label:"SEMESTER TWO",children:[Object(m.jsx)("option",{children:"Select Course"}),Object(m.jsx)("option",{children:"MEC4201"}),Object(m.jsx)("option",{children:"MEC4202"}),Object(m.jsx)("option",{children:"MEC4203"}),Object(m.jsx)("option",{children:"MEC4204"}),Object(m.jsx)("option",{children:"MEC4205"}),Object(m.jsx)("option",{children:"MEC4206"}),Object(m.jsx)("option",{children:"MEC4207"}),Object(m.jsx)("option",{children:"MEC4208"}),Object(m.jsx)("option",{children:"MEC4209"})]})]})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"resourceType",children:"Resources Type"}),Object(m.jsxs)("select",{name:"resource",value:b,onChange:h,id:"resourceType",className:"form-control",children:[Object(m.jsx)("option",{children:"Lecture Notes"}),Object(m.jsx)("option",{children:"Tests"}),Object(m.jsx)("option",{children:"Assignments"}),Object(m.jsx)("option",{children:"Project Reports"})]})]}),Object(m.jsx)("div",{className:"for-group",children:Object(m.jsx)("button",{type:"button",id:"submit",className:"btn-lg btn-primary ",style:{minWidth:"10rem"},onClick:function(e){e.preventDefault(),e.target.setAttribute("disabled",!0);var t=O.ref("university/makerere/cedat/school of engineering/mechanical engineering/"+a+"/"+j+"/"+d+"/"+b),c=[];t.once("value",(function(e){e.forEach((function(e){var t=e.key,n=e.val();c.push(n,t)}))})).then((function(t){l(c),e.target.removeAttribute("disabled")})).catch((function(t){l(null),e.target.removeAttribute("disabled")}))},children:"Load"})})]})})]})},w=Object(l.f)((function(e){var t=e.history,c=Object(n.useState)({email:"",password:"",passwordRetype:""}),s=Object(f.a)(c,2),r=s[0],o=s[1],i=Object(n.useState)(null),l=Object(f.a)(i,2),a=l[0],j=l[1],d=r.email,b=r.password,h=r.passwordRetype,p=function(e){o(Object(C.a)(Object(C.a)({},r),{},Object(g.a)({},e.target.name,e.target.value)))};return Object(m.jsx)("form",{onSubmit:function(e){e.preventDefault(),b===h?u.createUserWithEmailAndPassword(d,b).then((function(e){j(null),t.push("/")})).catch((function(e){var t=e.message;j(t)})):j("Passwords do not match")},children:Object(m.jsxs)("fieldset",{children:[Object(m.jsx)("legend",{children:Object(m.jsx)("h3",{children:" CREATE NEW ACOUNT"})}),a&&Object(m.jsxs)("div",{class:"alert alert-danger alert-dismissible fade show",role:"alert",children:[Object(m.jsx)("strong",{children:"Oh Sorry! "})," ",a,Object(m.jsx)("button",{type:"button",class:"close","data-dismiss":"alert","aria-label":"Close",onClick:function(e){return j(null)},children:Object(m.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"email",children:"Email"}),Object(m.jsx)("input",{type:"email",placeholder:"Enter your Email",id:"email",name:"email",value:d,onChange:p,required:!0})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"password",children:"User password"}),Object(m.jsx)("input",{name:"password",type:"password",placeholder:"Password",id:"password",value:b,onChange:p,required:!0})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"passwordRetype",children:"Comfirm Password"}),Object(m.jsx)("input",{name:"passwordRetype",type:"password",placeholder:"Password Comfirmation",id:"passwordRetype",value:h,onChange:p,required:!0})]}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("button",{children:"Sign up"})})]})})}));var T=function(){var e=Object(n.useState)({year:"Year 1",semester:"Semester 1",courseCode:null,resource:"Lecture Notes",fileName:null}),t=Object(f.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(),o=Object(f.a)(r,2),i=o[0],l=o[1],a=c.year,j=c.semester,d=c.courseCode,b=c.resource,h=c.fileName,u=Object(n.useState)(null),E=Object(f.a)(u,2),v=E[0],M=E[1],S=Object(n.useState)(null),N=Object(f.a)(S,2),y=N[0],w=N[1],T=Object(n.useState)("alert alert-danger"),R=Object(f.a)(T,2),k=R[0],Y=R[1],A=["application/pdf","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.ms-powerpoint"],F=function(e){s(Object(C.a)(Object(C.a)({},c),{},Object(g.a)({},e.target.name,e.target.value)))};return Object(m.jsx)("form",{className:"form",children:Object(m.jsxs)("fieldset",{className:"fieldset",children:[Object(m.jsx)("legend",{children:"Specify Resource to Upload"}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"year",children:"Year"}),Object(m.jsxs)("select",{name:"year",onChange:F,value:a,id:"year",className:"form-control",children:[Object(m.jsx)("option",{children:"Year 1"}),Object(m.jsx)("option",{children:"Year 2"}),Object(m.jsx)("option",{children:"Year 3"}),Object(m.jsx)("option",{children:"Year 4"})]})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"semester",children:"Semester"}),Object(m.jsxs)("select",{name:"semester",onChange:F,value:j,id:"semester",className:"form-control",children:[Object(m.jsx)("option",{children:"Semester 1"}),Object(m.jsx)("option",{children:"Semester 2"})]})]}),Object(m.jsxs)("div",{className:"for-group",children:[Object(m.jsx)("label",{htmlFor:"courseCode",children:"Course Code:"}),Object(m.jsxs)("select",{name:"courseCode",value:d,onChange:F,onClick:function(e){return w(null)},className:"form-control",id:"courseCode",children:["Year 1"===a&&"Semester 1"===j&&Object(m.jsxs)("optgroup",{label:"SEMESTER ONE",children:[Object(m.jsx)("option",{children:"Select Course"}),Object(m.jsx)("option",{children:"EMT1101"}),Object(m.jsx)("option",{children:"TEC1101"}),Object(m.jsx)("option",{children:"MEC1101"}),Object(m.jsx)("option",{children:"MEC1102"}),Object(m.jsx)("option",{children:"MEC1103"})]}),"Year 1"===a&&"Semester 2"===j&&Object(m.jsxs)("optgroup",{label:"SEMESTER TWO",children:[Object(m.jsx)("option",{children:"Select Course"}),Object(m.jsx)("option",{children:"EMT1201"}),Object(m.jsx)("option",{children:"EMT1204"}),Object(m.jsx)("option",{children:"MEC1202"}),Object(m.jsx)("option",{children:"MEC1203"}),Object(m.jsx)("option",{children:"MEC1204"})]}),"Year 2"===a&&"Semester 1"===j&&Object(m.jsxs)("optgroup",{label:"SEMESTER ONE",children:[Object(m.jsx)("option",{children:"Select Course"}),Object(m.jsx)("option",{children:"EMT2101"}),Object(m.jsx)("option",{children:"TEC2101"}),Object(m.jsx)("option",{children:"MEC2101"}),Object(m.jsx)("option",{children:"MEC2102"}),Object(m.jsx)("option",{children:"MEC2103"})]}),"Year 2"===a&&"Semester 2"===j&&Object(m.jsxs)("optgroup",{label:"SEMESTER TWO",children:[Object(m.jsx)("option",{children:"Select Course"}),Object(m.jsx)("option",{children:"MEC2201"}),Object(m.jsx)("option",{children:"MEC2202"}),Object(m.jsx)("option",{children:"MEC2203"}),Object(m.jsx)("option",{children:"MEC2204"}),Object(m.jsx)("option",{children:"MEC2205"})]}),"Year 3"===a&&"Semester 1"===j&&Object(m.jsxs)("optgroup",{label:"SEMESTER ONE",children:[Object(m.jsx)("option",{children:"Select Course"}),Object(m.jsx)("option",{children:"MEC3101"}),Object(m.jsx)("option",{children:"MEC3102"}),Object(m.jsx)("option",{children:"MEC3103"}),Object(m.jsx)("option",{children:"MEC3104"}),Object(m.jsx)("option",{children:"MEC3105"})]}),"Year 3"===a&&"Semester 2"===j&&Object(m.jsxs)("optgroup",{label:"SEMESTER TWO",children:[Object(m.jsx)("option",{children:"Select Course"}),Object(m.jsx)("option",{children:"MEC3201"}),Object(m.jsx)("option",{children:"MEC3202"}),Object(m.jsx)("option",{children:"MEC3203"}),Object(m.jsx)("option",{children:"MEC3204"}),Object(m.jsx)("option",{children:"MEC3205"})]}),"Year 4"===a&&"Semester 1"===j&&Object(m.jsxs)("optgroup",{label:"SEMESTER ONE",children:[Object(m.jsx)("option",{children:"Select Course"}),Object(m.jsx)("option",{children:"MEC4101"}),Object(m.jsx)("option",{children:"MEC4102"}),Object(m.jsx)("option",{children:"MEC4103"}),Object(m.jsx)("option",{children:"MEC4104"}),Object(m.jsx)("option",{children:"MEC4105"}),Object(m.jsx)("option",{children:"MEC4106"}),Object(m.jsx)("option",{children:"MEC4107"})]}),"Year 4"===a&&"Semester 2"===j&&Object(m.jsxs)("optgroup",{label:"SEMESTER TWO",children:[Object(m.jsx)("option",{children:"Select Course"}),Object(m.jsx)("option",{children:"MEC4201"}),Object(m.jsx)("option",{children:"MEC4202"}),Object(m.jsx)("option",{children:"MEC4203"}),Object(m.jsx)("option",{children:"MEC4204"}),Object(m.jsx)("option",{children:"MEC4205"}),Object(m.jsx)("option",{children:"MEC4206"}),Object(m.jsx)("option",{children:"MEC4207"}),Object(m.jsx)("option",{children:"MEC4208"}),Object(m.jsx)("option",{children:"MEC4209"})]})]})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"resourceType",children:"Resources Type"}),Object(m.jsxs)("select",{name:"resource",value:b,onChange:F,id:"resourceType",className:"form-control",children:[Object(m.jsx)("option",{children:"Lecture Notes"}),Object(m.jsx)("option",{children:"Tests"}),Object(m.jsx)("option",{children:"Assignments"}),Object(m.jsx)("option",{children:"Project Reports"})]})]}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("input",{type:"text",value:h,name:"fileName",onChange:F,placeholder:"Enter File Name",className:"form-control",id:"file_name",required:!0})}),Object(m.jsxs)("div",{className:"form-group",children:[y&&Object(m.jsx)("div",{class:k,role:"alert",children:y}),Object(m.jsx)("input",{type:"file",onChange:function(e){e.preventDefault();var t=e.target.files[0];t&&A.includes(t.type)?(M(t),Y("alert alert-danger"),w(null)):(console.log(t.type),Y("alert alert-danger"),w("File type Not allowed"))},id:"file_input",className:"form-control"}),v&&Object(m.jsx)("div",{className:"progress",children:Object(m.jsxs)("div",{id:"progress-bar",className:"progress-bar",role:"progressbar",style:{width:i+"%"},children:[i,"%"]})})]}),Object(m.jsxs)("div",{className:"for-group",children:[Object(m.jsx)("p",{}),Object(m.jsx)("button",{type:"submit",id:"submit",className:"btn btn-primary",onClick:function(e){if(e.preventDefault(),h)if(v)if(d){var t=p.ref("university/makerere/cedat/school of engineering/mechanical engineering/"+a+"/"+j+"/"+d+"/"+b+"/"+v.name);console.log(x);var c=t.put(v);c.on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;switch(l(Math.round(t)),e.state){case"RUNNING":console.log(e.state)}}),(function(e){Y("alert alert-danger"),w(e)}),(function(){c.snapshot.ref.getDownloadURL().then((function(e){var t=O.ref("university/makerere/cedat/school of engineering/mechanical engineering/"+a+"/"+j+"/"+d+"/"+b+"/"+h).set({uplodedAt:x,downloads:0,name:v.name,download_link:e});t.catch((function(e){Y("alert alert-danger"),w(e.message())})),t.then((function(e){s({year:"Year 1",semester:"Semester 1",courseCode:null,resource:"Lecture Notes",fileName:null}),M(null),w(null),alert("Successfully Uploaded \n Thank you!\n Feel free to share More")}))}))})),w(null)}else Y("alert alert-danger"),w("choose a course code from the list");else Y("alert alert-danger"),w("Select only allowed file to Upload");else Y("alert alert-danger"),w("Please Fill in the file name")},children:"Upload Resource"})]})]})})},R=c(33),k=function(e){var t=e.component,c=Object(R.a)(e,["component"]),s=Object(n.useContext)(v).currentUser;return Object(m.jsx)(l.b,Object(C.a)(Object(C.a)({},c),{},{render:function(e){return s?Object(m.jsx)(t,Object(C.a)({},e)):Object(m.jsx)(l.a,{to:"/login"})}}))};var Y=function(){return Object(m.jsx)(M,{children:Object(m.jsxs)(i.a,{children:[Object(m.jsx)(l.b,{exact:!0,path:"/",component:E}),Object(m.jsx)(k,{exact:!0,path:"/",component:y}),Object(m.jsx)(l.b,{exact:!0,path:"/login",component:S}),Object(m.jsx)(l.b,{exact:!0,path:"/signup",component:w}),Object(m.jsx)(k,{exact:!0,path:"/upload",component:T})]})})};o.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(Y,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.4b769efa.chunk.js.map