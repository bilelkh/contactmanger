(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,a,t){e.exports=t(64)},36:function(e,a,t){},37:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(27),o=t.n(c),l=(t(36),t(5)),s=t(6),i=t(8),m=t(7),u=t(9),p=(t(37),t(2)),d=t.n(p),h=t(10),f=t(30),b=t(16),v=t(11),E=t.n(v),y=r.a.createContext(),N=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(b.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==a.payload})});case"ADD_CONTACT":return Object(b.a)({},e,{contacts:[a.payload].concat(Object(f.a)(e.contacts))});case"UPDATE_CONTACT":return Object(b.a)({},e,{contacts:e.contacts.map(function(e){return e.id===a.payload.id?e=a.payload:e})});default:return e}},g=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){t.setState(function(a){return N(a,e)})}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(h.a)(d.a.mark(function e(){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://jsonplaceholder.typicode.com/users");case 2:a=e.sent,this.setState({contacts:a.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(y.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),C=y.Consumer,O=t(66),j=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},t.onDeleteClick=function(){var e=Object(h.a)(d.a.mark(function e(a,t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.delete("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:e.sent,t({type:"DELETE_CONTACT",payload:a}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:"DELETE_CONTACT",payload:a});case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props.contact,t=a.id,n=a.name,c=a.email,o=a.phone,l=this.state.showContactInfo;return r.a.createElement(C,null,function(a){var s=a.dispatch;return r.a.createElement("div",{className:"card card-body mb-4 mt-2"},r.a.createElement("h4",null,n," ",r.a.createElement("i",{onClick:e.onShowClick=function(){return e.setState({showContactInfo:!e.state.showContactInfo})},className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-trash-alt float-right ",style:{cursor:"pointer",color:"red"},onClick:e.onDeleteClick.bind(e,t,s)}),r.a.createElement(O.a,{to:"contact/edit/".concat(t)},r.a.createElement("i",{className:"fas fa-edit float-right mr-2",style:{cursor:"pointer",color:"red"}}))),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item "},"Email:",c),r.a.createElement("li",{className:"list-group-item "},"Phone:",o)):null)})}}]),a}(n.Component),k=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(C,null,function(e){var a=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),a.map(function(e){return r.a.createElement(j,{contact:e,key:e.id})}))})}}]),a}(n.Component);function x(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple application to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))}function w(){return r.a.createElement("div",{className:"text-center mt-5"},r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry,that page not exist"))}var A=t(13),S=t(1),T=t.n(S),D=t(28),q=t.n(D),P=function(e){var a=e.label,t=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"mt-1",htmlFor:"name"},a),r.a.createElement("input",{type:o,name:t,placeholder:c,className:q()("form-control form-control-lg",{"is-invalid":s}),value:n,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};P.prototype={label:T.a.string.isRequired,name:T.a.string.isRequired,value:T.a.string.isRequired,placeholder:T.a.string.isRequired,type:T.a.string.isRequired,onChange:T.a.func.isRequired,error:T.a.string},P.defaultProps={type:"text"};var _=P,R=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onSubmit=function(){var e=Object(h.a)(d.a.mark(function e(a,n){var r,c,o,l,s,i,m;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=t.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return t.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return t.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return t.setState({errors:{phone:"Name is required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},i=t.props.match.params.id,e.next=15,E.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),s);case 15:m=e.sent,a({type:"UPDATE_CONTACT",payload:m.data}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 19:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}(),t.onChange=function(e){return t.setState(Object(A.a)({},e.target.name,e.target.value))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(h.a)(d.a.mark(function e(){var a,t,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,E.a.get("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:t=e.sent,n=t.data,console.log("contact",n),this.setState({name:n.name,email:n.email,phone:"1-770-736-8031 x56442"});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(C,null,function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3 mt-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(_,{label:"Name",name:"name",placeholder:"Enter Name...",className:"form-control form-control-lg",value:t,onChange:e.onChange,error:o.name}),r.a.createElement(_,{type:"email",name:"email",placeholder:"Enter Email...",className:"form-control form-control-lg",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(_,{type:"text",name:"phone",placeholder:"Enter Phone...",className:"form-control form-control-lg",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",className:"btn btn-dark text-uppercase",value:"Update Contact"}))))})}}]),a}(n.Component),I=(t(59),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onSubmit=function(){var e=Object(h.a)(d.a.mark(function e(a,n){var r,c,o,l,s,i;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=t.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return t.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return t.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return t.setState({errors:{phone:"Name is required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},e.next=14,E.a.post("https://jsonplaceholder.typicode.com/users",s);case 14:i=e.sent,a({type:"ADD_CONTACT",payload:i.data}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 18:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}(),t.onChange=function(e){return t.setState(Object(A.a)({},e.target.name,e.target.value))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(C,null,function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3 mt-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(_,{label:"Name",name:"name",placeholder:"Enter Name...",className:"form-control form-control-lg",value:t,onChange:e.onChange,error:o.name}),r.a.createElement(_,{type:"email",name:"email",placeholder:"Enter Email...",className:"form-control form-control-lg",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(_,{type:"number",name:"phone",placeholder:"Enter Phone...",className:"form-control form-control-lg",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",className:"btn btn-dark text-uppercase",value:"Add Contact"}))))})}}]),a}(n.Component)),L=t(67),M=t(69),F=t(68),U=function(e){var a=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 p-2"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},a),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(O.a,{to:"/",className:"nav-link text-uppercase"},r.a.createElement("i",{className:"fas fa-home  mr-1"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(O.a,{to:"/contact/add",className:"nav-link text-uppercase"},r.a.createElement("i",{className:"fas fa-save mr-1"})," Add CONTACT")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(O.a,{to:"/About",className:"nav-link text-uppercase"},r.a.createElement("i",{className:"fas fa-question  mr-1"})," About"))))))};U.defaultProps={branding:"My contact App"};var B=U,J=(t(62),function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(g,null,r.a.createElement(L.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(B,{branding:"Contact manger"}),r.a.createElement("div",{className:"container"},r.a.createElement(M.a,null,r.a.createElement(F.a,{exact:!0,path:"/",component:k}),r.a.createElement(F.a,{exact:!0,path:"/contact/add",component:I}),r.a.createElement(F.a,{exact:!0,path:"/contact/edit/:id",component:R}),r.a.createElement(F.a,{exact:!0,path:"/about",component:x}),r.a.createElement(F.a,{component:w}))))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.7c36f607.chunk.js.map