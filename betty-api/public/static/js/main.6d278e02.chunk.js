(this.webpackJsonpbetty=this.webpackJsonpbetty||[]).push([[0],{117:function(e,t,n){e.exports=n(226)},122:function(e,t,n){},123:function(e,t,n){},130:function(e,t){},132:function(e,t){},166:function(e,t){},167:function(e,t){},226:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(110),l=n.n(o),c=(n(122),n(16)),u=n(26),i=n(18),s=n(17),m=n(19),p=(n(123),n(6)),h=n(21),d=n(7);function g(){var e=Object(p.a)(["\n    color:black;\n    height:",";\n    width: ",";\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    button{\n      height: 30px;\n      width: 200px;\n\n      background-color:",";\n      border:1px solid ",";\n      border-radius:8px;\n      margin-top:20px;\n    }\n\n}\n"]);return g=function(){return e},e}var f=d.a.form(g(),(function(e){return e.alto?e.alto:"400px"}),(function(e){return e.ancho?e.ancho:"400px"}),(function(e){return e.formButtonColor?e.formButtonColor:"#77e277"}),(function(e){return e.formButtonColor?e.formButtonColor:"#77ee77"})),b=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"handleSubmit",value:function(e,t,n,a){e.preventDefault(),console.log("?",t,a),n(e,a)}},{key:"render",value:function(){var e=this,t=this.props.signup,n=this.props.edit,a=this.props.handler,o=this.props.state;return console.log("Form",o),r.a.createElement("div",{className:"Signup",onSubmit:function(n){return e.handleSubmit(n,t,a,o)},style:{Display:"flex",flexDirection:"column"}},r.a.createElement(f,{action:"submit",alto:"100vh",ancho:"600px"},r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{type:"email",name:"email",placeholder:n?"anexample@example.com":"",defaultValue:n?o.state.user.email:""}),t||n?r.a.createElement("label",{htmlFor:"name"},"Name:"):"",t||n?r.a.createElement("input",{name:"name",type:"text",placeholder:n?"Douglas J.":"",defaultValue:n?o.state.user.name:""}):"",r.a.createElement("label",{htmlFor:"password"},"Password: "),r.a.createElement("input",{name:"password",type:"password"}),t||n?r.a.createElement("label",{htmlFor:"confpassword"},'"Confirmar password:" '):"",t||n?r.a.createElement("input",{name:"confpassword",type:"password"}):"",r.a.createElement("button",{type:"submit"},t?"Register":n?"Update":"Login")))}}]),t}(a.Component),v=n(15);n(127),n(34);function E(){var e=Object(p.a)(["\n  width: 100%;\n  height: 100%;\n"]);return E=function(){return e},e}function w(){var e=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n  height: 10%;\n  width: 100%;\n"]);return w=function(){return e},e}function k(){var e=Object(p.a)(["\n  width: 5%;\n  height: 100%;\n  text-decoration: none;\n  color: black;\n"]);return k=function(){return e},e}var y=d.a.div(k()),x=d.a.nav(w());d.a.img(E()),a.Component;function j(){var e=Object(p.a)(["\n  list-style: none;\n  color: black;\n  padding: 0px;\n"]);return j=function(){return e},e}function O(){var e=Object(p.a)(['\n  height: 100%;\n  width: 20%;\n  background-color: #ffffff;\n  background-image: url("/brownsheet.jpg");\n  background-repeat: no-repeat;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);\n  h3 {\n    border-bottom: 2px solid #93592b;\n  }\n']);return O=function(){return e},e}var S=d.a.div(O()),L=d.a.ul(j()),C=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).render=function(){var e=n.props,t=e.link,a=e.content;return r.a.createElement("li",null,r.a.createElement(v.b,{style:{textDecoration:"none",color:"rgb(170, 77, 0)"},to:t},a))},n}return Object(m.a)(t,e),t}(a.Component),D=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).render=function(){var e=n.props,t=e.state,a=e.handlers,o=(e.exceptions,t.state.user);return r.a.createElement(S,null,r.a.createElement(L,null,r.a.createElement("h3",null,"Home"),r.a.createElement(C,{link:"/",content:"Front Page"})),r.a.createElement(L,null,r.a.createElement("h3",null,"User"),o?"":r.a.createElement(C,{link:"/user/login",content:"Log in"}),o?"":r.a.createElement(C,{link:"/user/signup",content:"Sign up"}),o?r.a.createElement(C,{click:a.handleLogout,content:"Log out"}):""),o?r.a.createElement(L,null,r.a.createElement("h3",null,"Trabajo"),r.a.createElement(C,{link:"/user/:userid/task/new",content:"Nuevo Trabajo"})):"")},n}return Object(m.a)(t,e),t}(a.Component),U=n(59),I=n.n(U),N=n(60),T=n.n(N);function B(){var e=Object(p.a)(['\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  // background-image: url("/sheet.jpg");\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: white;\n  width:80%\n  height:80%\n']);return B=function(){return e},e}function F(){var e=Object(p.a)(["\n  height: 100%;\n  width: 100%;\n"]);return F=function(){return e},e}function J(){var e=Object(p.a)(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-flow: row;\n"]);return J=function(){return e},e}var P=d.a.div(J()),A=d.a.div(F()),H=d.a.div(B()),R=function(e){var t=e.state,n=e.handlers;return console.log("Router ",t.state.user?"a":"b"),r.a.createElement(A,null,r.a.createElement(P,null,r.a.createElement(D,{state:t,handlers:n}),r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/"},r.a.createElement(H,null,r.a.createElement("div",{style:{height:"100%",width:"100%",display:"flex",flexDirection:"column",textAlign:"center"}},r.a.createElement("h1",{style:{color:"white"}},t.state.user?"Tareas recientes":"Bienvenido"),t.state.user?"":r.a.createElement("div",null,r.a.createElement("div",null),r.a.createElement("div",null)),t.state.user?r.a.createElement("button",{style:{width:"40%"},onClick:n.handleLogout},"Logout"):""))),r.a.createElement(h.b,{exact:!0,path:"/user/update"},r.a.createElement(H,{style:{height:"80%",width:"80%"}},r.a.createElement(b,{update:!0,handler:n.handleUpdate}))),r.a.createElement(h.b,{exact:!0,path:"/user/signup",style:{height:"100%",width:"80%"}},">",r.a.createElement(b,{signup:!0,handler:n.handleSignup,state:t})),r.a.createElement(h.b,{exact:!0,path:"/user/login"},t.state.user?r.a.createElement(h.a,{to:"/"}):r.a.createElement(H,{style:{height:"100%",width:"80%"}},r.a.createElement(b,{handler:n.handleLogin,state:t}))),r.a.createElement(h.b,{exact:!0,path:"/user/:userid/task/new"},t.state.user?r.a.createElement(h.a,{to:"/"}):r.a.createElement(H,null,r.a.createElement("form",null))),r.a.createElement(h.b,{exact:!0,path:"/task/all"}),r.a.createElement(h.b,{exact:!0,path:"/task/:taskid"}),r.a.createElement(h.b,{exact:!0,path:"/task/:taskid/documents"}),r.a.createElement(h.b,{exact:!0,path:"/tak/:taskid/document/:documentid"}),r.a.createElement(h.b,{path:"/"},r.a.createElement("h1",null,"404"),r.a.createElement(v.c,{to:"/"},r.a.createElement("button",{className:""},"Home"))))))},V=n(27),W=n.n(V),z=function(e){function t(){var e;Object(c.a)(this,t),(e=Object(i.a)(this,Object(s.a)(t).call(this))).handleLogin=function(e,t){e.preventDefault();var n=e.target,a=n.email,o=n.password;console.log("Login\n",a.value,o.value,"E",t),W.a.post("https://bettymanager.herokuapp.com/api/user/login",{email:a.value,password:o.value}).then((function(e){var n=e.data,a=n.user,o=n.token;return console.log(e.data),console.log("!"),localStorage.setItem("user",JSON.stringify(a)),localStorage.setItem("token",o),console.log("Uno",t,t.setState({user:a,token:o})),console.log("logged in",t),r.a.createElement(h.a,{to:"/"})})).catch((function(e){console.log("There was an error trying to log in:",e)}))},e.handleSignup=function(e,t){e.preventDefault();var n=e.target,a=n.email,r=n.password,o=n.name,l=n.confpassword;console.log("Signup\n",a.value,o.value,r.value,l.value),W.a.post("https://bettymanager.herokuapp.com/api/user/signup",{email:a.value,password:r.value,confpassword:l.value,name:o.value}).then((function(e){var n=e.data,a=n.user,r=n.token;console.log(a,r),localStorage.setItem("user",JSON.stringify(a)),localStorage.setItem("token",r),t.setState({user:a}),console.log("logged in",t)})).catch((function(e){console.log(e)}))},e.handleLogout=function(e){return localStorage.removeItem("user"),localStorage.removeItem("token"),r.a.createElement(h.a,{to:"/"})},e.handleUpdate=function(e,t){e.preventDefault();var n=e.target,a=n.email,r=n.password,o=n.name,l=n.confpassword;console.log("Update\n",a.value,o.value,r.value,l.value),W.a.post("https://bettymanager.herokuapp.com/api/user/update/".concat(t.state.user._id),{email:a.value,password:r.value,confpassword:l.value,name:o.value})},e.getUser=function(t,n){var a=e.state.state.user.user;W.a.post("https://bettymanager.herokuapp.com/api/user".concat(a)).then((function(e){console.log("User retrieved & found:",e)}))},e.getUserTasks=function(t,n){e.state.state.user;W.a.post("https://bettymanager.herokuapp.com/api/task/").then().catch()},e.createTask=function(e,t,n){},e.deleteTask=function(e,t,n,a){},e.updateTask=function(e,t,n,a){},e.createProcess=function(e,t,n,a){},e.deleteProcess=function(e,t,n,a,r){},e.updateProcess=function(e,t,n,a,r){},console.log(localStorage);var n=JSON.parse(localStorage.getItem("user"));return e.state={user:n,isFetching:!1},void 0!==n&&console.log("user found: ",n),e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(R,{state:{state:this.state,setState:this.setState},handlers:{handleLogin:this.handleLogin,handleSignup:this.handleSignup,handleLogout:this.handleLogout}}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));I.a.use(T.a);l.a.render(r.a.createElement((function(){return r.a.createElement(v.a,null,r.a.createElement(z,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[117,1,2]]]);
//# sourceMappingURL=main.6d278e02.chunk.js.map