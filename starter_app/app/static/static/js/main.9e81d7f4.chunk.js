(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),l=(a(101),a(17)),s=a.n(l),i=a(23),u=a(18),p=a(27),m=a(11),d=a(152),f=a(146),b=a(81),g=a(139),E=a(141),h=a(143),x=a(144),y=a(145),v=a(53),O=a.n(v),j=Object(g.a)({navbar:{backgroundColor:"#0079bf",height:"72 px"},login:{color:"white"},toolbar:{display:"flex",justifyContent:"space-between"},logo:{color:"white",textDecoration:"none",fontFamily:"Brush Script MT",fontSize:"40px",padding:"0",margin:"0"},icon:{fontSize:"40px",paddingTop:"15px",margin:"0"}});var w=function(){var e=j();return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{className:e.navbar,position:"sticky"},r.a.createElement(h.a,{className:e.toolbar},r.a.createElement(d.a,null,r.a.createElement(p.b,{className:e.logo,to:"/"},r.a.createElement(O.a,{className:e.icon}),"Jello")),r.a.createElement(d.a,{className:e.topRight},r.a.createElement(x.a,{className:e.login,variant:"text"},r.a.createElement(y.a,{href:"/login",className:e.login},"Log in")),r.a.createElement(x.a,{variant:"contained"},r.a.createElement(y.a,{href:"/signup"},"Sign up"))))))},S=Object(g.a)({blueBox:{color:"white",backgroundColor:"#0079bf",height:"1021px"}});var k=function(){var e=S();return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{className:e.blueBox},r.a.createElement(f.a,null,r.a.createElement(b.a,{variant:"h1"},"Trello helps teams work more collaboratively and get more done."),r.a.createElement(b.a,{variant:"h2"},"Trello\u2019s boards, lists, and cards enable teams to organize and prioritize projects in a fun, flexible, and rewarding way."))))},C=a(56),R=a.n(C),T=function(e){return{type:"auth/SET_USER",user:e}},I=function(e,t){return function(){var a=Object(i.a)(s.a.mark((function a(n){var r,o,c;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e&&t){a.next=2;break}return a.abrupt("return");case 2:return r=R.a.get("XSRF-TOKEN"),a.next=5,fetch("/api/session/",{method:"put",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":r},body:JSON.stringify({username:e,password:t})});case 5:return o=a.sent,a.next=8,o.json();case 8:return c=a.sent,o.ok&&!c.errors?(n(T(c)),o.data=c):(o.errors=c.errors,n(B(c.errors))),a.abrupt("return",o);case 11:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},N=function(e,t,a){return function(){var n=Object(i.a)(s.a.mark((function n(r){var o,c,l;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e&&a&&t){n.next=2;break}return n.abrupt("return");case 2:return o=R.a.get("XSRF-TOKEN"),n.next=5,fetch("/api/session/",{method:"post",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":o},body:JSON.stringify({username:e,email:t,password:a})});case 5:return c=n.sent,n.next=8,c.json();case 8:return l=n.sent,c.ok&&!l.errors?(r({type:"auth/SIGNUP",user:l}),c.data=l):(c.errors=l.errors,r(B(l.errors))),n.abrupt("return",c);case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},B=function(e){return{type:"auth/REGISTER_ERRORS",errors:e}};var F=a(41),U=a(16),z=a(151),D=a(147),L=(a(109),Object(g.a)((function(e){var t;return{root:(t={border:"2px solid #e2e2e1",overflow:"hidden",paddingLeft:"10px",paddingTop:"4px",paddingBottom:"4px",marginTop:"14px",borderRadius:4,backgroundColor:"#fcfcfb",transition:e.transitions.create(["border-color","box-shadow"])},Object(F.a)(t,"transition","background-color .2s ease-in-out 0s,border-color .2s ease-in-out 0s"),Object(F.a)(t,"&$focused",{border:"2px solid rgb(94, 158, 214)",backgroundColor:"#fff"}),t),focused:{}}})));function P(e){var t=L();return r.a.createElement(z.a,Object.assign({InputProps:{classes:t,disableUnderline:!0}},e))}var A=Object(g.a)({container:{display:"flex",flexDirection:"column",alignItems:"center",background:"white",height:"100%",padding:"30px",boxShadow:"rgba(0,0,0,0.1) 0 0 10px"},TextField:{margin:"10px"},logo:{color:"#2196f3",textDecoration:"none",fontFamily:"Brush Script MT",fontSize:"80px",padding:"0",margin:"0"},Button:{backgroundColor:"#5AAC44",color:"white",marginTop:"10px",textDecoration:"none","&:hover":{backgroundColor:"#61BD4F"}},logInButton:{background:"transparent",color:"grey",border:"1px solid grey",textTransform:"none",fontSize:"13px",margin:"5px"}});var _=function(){var e=A(),t=Object(U.b)(),a=Object(n.useState)(""),o=Object(u.a)(a,2),c=o[0],l=o[1],m=Object(n.useState)(""),d=Object(u.a)(m,2),b=d[0],g=d[1],E=Object(n.useState)(""),h=Object(u.a)(E,2),y=h[0],v=h[1],O=Object(n.useState)(""),j=Object(u.a)(O,2),w=j[0],S=j[1],k=Object(n.useState)({}),C=Object(u.a)(k,2),R=C[0],T=C[1],I=Object(n.useState)([]),F=Object(u.a)(I,2),z=F[0],L=F[1],_=Object(U.c)((function(e){return e.auth.errors}));return Object(n.useEffect)((function(){t({type:"auth/CLEAR_ERRORS"})}),[]),Object(n.useEffect)((function(){R!=={}&&function(){var e=Object(i.a)(s.a.mark((function e(){var a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=R.username,n=R.email,r=R.password,e.next=5,t(N(a,n,r));case 5:e.sent;case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[R]),Object(n.useEffect)((function(){_&&L(Object.values(_))}),[_]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"main-content-sign-up"},r.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},r.a.createElement("div",{style:{width:"100%",color:"#2196f3",display:"flex",justifyContent:"center",textDecoration:"none",fontFamily:"Brush Script MT",justifySelf:"center",fontSize:"80px"}},"Jello")),r.a.createElement(f.a,{fixed:!0,maxWidth:"sm",classes:{root:e.container}},r.a.createElement("h1",{className:"login-and-signup-header"},"Sign up for your account"),r.a.createElement(D.a,{style:{width:"100%",margin:"10px"}}),r.a.createElement("div",{style:{color:"red",display:"flex",flexDirection:"column",alignContent:"center"}},z?z.map((function(e,t){return r.a.createElement("p",{style:{marginTop:"3px",marginBottom:"3px"},key:t},z[t])})):""),r.a.createElement("form",{className:"signup-form",method:"POST",action:"/api/session",onSubmit:function(e){e.preventDefault(),c||t(B({8:"please enter a username"})),w||t(B({10:"please enter an email address"})),b&&y||t(B({11:"please enter a password and confirm it"})),b!==y&&t(B({9:"password fields do not match"})),b===y&&c&&w&&T({username:c,email:w,password:b})}},r.a.createElement(P,{InputLabelProps:{style:{color:"grey"}},type:"text",size:"medium",placeholder:"username",name:"username",value:c,onChange:function(e){l(e.target.value)}}),r.a.createElement(P,{InputLabelProps:{style:{color:"grey"}},type:"text",size:"medium",placeholder:"email",name:"email",value:w,onChange:function(e){S(e.target.value)}}),r.a.createElement(P,{InputLabelProps:{style:{color:"grey"}},type:"password",size:"medium",placeholder:"password",name:"password",value:b,onChange:function(e){g(e.target.value)}}),r.a.createElement(P,{InputLabelProps:{style:{color:"grey"}},style:{color:"red"},type:"password",size:"medium",placeholder:"confirm password",name:"confirmPassword",value:y,onChange:function(e){v(e.target.value)}}),r.a.createElement(x.a,{size:"small",classes:{root:e.Button},type:"submit"},"Sign Up and Log In")),r.a.createElement(D.a,{style:{width:"100%",margin:"24px"}}),r.a.createElement(p.b,{id:"login-navlink",to:"/login"},r.a.createElement("p",{id:"signUpText"},"Already have an account?  Log In")))))},J=a(4),M=(a(110),Object(g.a)((function(e){var t;return{root:(t={border:"2px solid #e2e2e1",overflow:"hidden",paddingLeft:"10px",paddingTop:"4px",paddingBottom:"4px",marginTop:"14px",borderRadius:4,backgroundColor:"#fcfcfb",transition:e.transitions.create(["border-color","box-shadow"])},Object(F.a)(t,"transition","background-color .2s ease-in-out 0s,border-color .2s ease-in-out 0s"),Object(F.a)(t,"&$focused",{border:"2px solid rgb(94, 158, 214)",backgroundColor:"#fff"}),t),focused:{}}})));function G(e){var t=M();return r.a.createElement(z.a,Object.assign({InputProps:{classes:t,disableUnderline:!0}},e))}var K=Object(g.a)((function(e){return{container:{display:"flex",flexDirection:"column",alignItems:"center",background:"white",height:"100%",padding:"30px",boxShadow:"rgba(0,0,0,0.1) 0 0 10px"},TextField:{margin:"10px",backgroundColor:"#EDEFF0","&:hover":{backgroundColor:"#fff"}},margin:{margin:e.spacing(1)},Button:{marginTop:"10px",backgroundColor:"#5AAC44",color:"white","&:hover":{backgroundColor:"#61BD4F"}},signUpButton:{background:"transparent",color:"grey",border:"1px solid grey",textTransform:"none",textDecoration:"none",fontSize:"13px",margin:"5px"}}})),W=Object(J.a)((function(e){return{root:{color:"white",paddingRight:"10px",paddingLeft:"10px",backgroundColor:"grey","&:hover":{backgroundColor:"#2196f3 !important"}}}}))(x.a);var X=function(){var e=K(),t=Object(U.b)(),a=(Object(U.c)((function(e){return e.auth.user})),Object(n.useState)("")),o=Object(u.a)(a,2),c=o[0],l=o[1],m=Object(n.useState)(""),d=Object(u.a)(m,2),b=d[0],g=d[1],E=Object(n.useState)({}),h=Object(u.a)(E,2),y=h[0],v=h[1],O=Object(n.useState)(""),j=Object(u.a)(O,2),w=j[0],S=j[1],k=Object(U.c)((function(e){return e.auth.errors}));return Object(n.useEffect)((function(){t({type:"auth/CLEAR_ERRORS"})}),[]),Object(n.useEffect)((function(){y!=={}&&function(){var e=Object(i.a)(s.a.mark((function e(){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=y.username,n=y.password,!a||!n){e.next=6;break}return e.next=5,t(I(a,n));case 5:e.sent;case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[y]),Object(n.useEffect)((function(){k&&S(Object.values(k))}),[k]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"main-content-login"},r.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},r.a.createElement("div",{style:{width:"100%",color:"#2196f3",display:"flex",justifyContent:"center",textDecoration:"none",fontFamily:"Brush Script MT",justifySelf:"center",fontSize:"80px"}},"Jello")),r.a.createElement(f.a,{fixed:!0,maxWidth:"sm",classes:{root:e.container}},r.a.createElement("h1",{className:"login-and-signup-header"},"Welcome to Jello"),r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement(W,{size:"small"},"Login As a Demo User")),r.a.createElement(D.a,{style:{width:"100%",margin:"10px"}}),r.a.createElement("div",{style:{color:"red",display:"flex",flexDirection:"column"}},w?w.map((function(e,t){return r.a.createElement("p",{style:{marginTop:"3px",marginBottom:"3px"},key:t},w[t])})):""),r.a.createElement("form",{className:"login-form",method:"PUT",action:"/api/session",onSubmit:function(e){e.preventDefault(),c&&b||t(B({1:"please enter a username and password!"})),v({username:c,password:b})}},r.a.createElement("div",{id:"login-form-fields",style:{width:"100%",display:"flex",flexDirection:"column"}},r.a.createElement(G,{InputLabelProps:{style:{color:"grey"}},type:"text",placeholder:"username",size:"medium",name:"password",value:c,onChange:function(e){l(e.target.value)}}),r.a.createElement(G,{InputLabelProps:{style:{color:"grey"}},type:"password",placeholder:"password",size:"medium",name:"password",value:b,onChange:function(e){g(e.target.value)}})),r.a.createElement(x.a,{size:"small",classes:{root:e.Button},type:"submit"},"Log in")),r.a.createElement(D.a,{style:{width:"100%",margin:"24px"}}),r.a.createElement(p.b,{id:"signup-navlink",to:"/signup"},r.a.createElement("p",{className:"is-white",id:"signUpText"},"Don't have an account?  Sign Up")))))},V=a(150),$=a(148),H=a(153),Y=a(149),q=a(72),Q=a.n(q),Z=a(73),ee=a.n(Z),te=a(74),ae=a.n(te),ne=a(75),re=a.n(ne),oe=a(76),ce=a.n(oe),le=a(77),se=a.n(le),ie=a(154),ue=a(79),pe=a(155),me=function(){var e=U.b,t=Object(n.useState)(null),a=Object(u.a)(t,2),o=a[0],c=a[1],l=Object(U.c)((function(e){return e.auth.user})),p=l.username?l.username[0].toUpperCase():null,m=function(e){return c(null)};return r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{onClick:function(e){return c(e.taget)}},r.a.createElement(ie.a,null,p)),r.a.createElement(ue.a,{anchorEl:o,getContentAnchorEl:null,keepMounted:!0,open:!!o,onClose:m,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},r.a.createElement(pe.a,{onClick:function(t){m(),e(function(){var e=Object(i.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/session",{method:"delete",headers:{"Content-Type":"application/json"}});case 2:return(a=e.sent).ok&&t({type:"auth/REMOVE_USER"}),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"Log Out")))},de=Object(g.a)({appbar:{backgroundColor:"#0079bf"},toolbar:{display:"flex",justifyContent:"space-between"},left:{display:"flex"}}),fe=function(){var e=de();return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{position:"static",className:e.appbar},r.a.createElement(h.a,{className:e.toolbar},r.a.createElement(d.a,{className:e.left},r.a.createElement($.a,{onClick:function(e){}},r.a.createElement(Q.a,null)),r.a.createElement($.a,{onClick:function(e){}},r.a.createElement(ee.a,null)),r.a.createElement($.a,{onClick:function(e){}},r.a.createElement(O.a,null),"Boards"),r.a.createElement(H.a,{className:e.searchInput},r.a.createElement(Y.a,{position:"end"},r.a.createElement(ae.a,null)))),r.a.createElement(d.a,null,r.a.createElement($.a,{onClick:function(e){}},r.a.createElement(re.a,null)),r.a.createElement($.a,{onClick:function(e){}},r.a.createElement(ce.a,null)),r.a.createElement($.a,{onClick:function(e){}},r.a.createElement(se.a,null)),r.a.createElement(me,null)))))},be=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Your Boards Will Be Here Someday, but not soon"))},ge=function(e){var t=e.component,a=e.path,n=e.currentUserId,o=e.exact;return r.a.createElement(m.b,{path:a,exact:o,render:function(e){return n?r.a.createElement(t,e):r.a.createElement(m.a,{to:"/"})}})},Ee=function(e){var t=e.component,a=e.path,n=e.currentUserId,o=e.exact;return r.a.createElement(m.b,{path:a,exact:o,render:function(e){return n?r.a.createElement(m.a,{to:"/users/".concat(n,"/boards")}):r.a.createElement(t,e)}})};var he,xe=function(){var e=Object(n.useState)(!0),t=Object(u.a)(e,2),a=t[0],o=t[1],c=Object(U.b)();Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/session/current_user");case 2:if(!(t=e.sent).ok){e.next=9;break}return e.next=6,t.json();case 6:t.data=e.sent,c(T(t.data.user)),console.log(t.data.user);case 9:o(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]);var l=Object(U.c)((function(e){return e.auth.user}));return a?r.a.createElement("p",null,"loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,null),r.a.createElement(p.a,null,l.id?r.a.createElement(fe,null):r.a.createElement(w,null),r.a.createElement(m.d,null,r.a.createElement(ge,{exact:!0,path:"/users/:userid/boards",component:be,currentUserId:l.id}),r.a.createElement(Ee,{exact:!0,path:"/signup",component:_,currentUserId:l.id}),r.a.createElement(Ee,{exact:!0,path:"/login",component:X,currentUserId:l.id}),r.a.createElement(Ee,{exact:!0,path:"/",component:k,currentUserId:l.id}))))},ye=a(42),ve=a(78),Oe=Object(ye.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{id:null}},t=arguments.length>1?arguments[1]:void 0,a=Object.assign({},e),n=Object.assign({},e.errors);switch(t.type){case"auth/SET_USER":return a.user=t.user,a;case"auth/SIGNUP":return console.log(t.user),t.user;case"auth/REGISTER_ERRORS":console.log(t.errors),a.errors=n;var r=Object.keys(t.errors);return r.forEach((function(e){a.errors[e]=t.errors[e]})),console.log(a),a;case"auth/REMOVE_USER":return{};case"auth/CLEAR_ERRORS":return a.errors={},a;default:return e}}});he=Object(ye.a)(ve.a);var je,we=Object(ye.d)(Oe,je,he);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U.a,{store:we},r.a.createElement(xe,null))),document.getElementById("root"))},96:function(e,t,a){e.exports=a(111)}},[[96,1,2]]]);
//# sourceMappingURL=main.9e81d7f4.chunk.js.map