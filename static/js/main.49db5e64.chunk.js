(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1084:function(e,t,a){},1085:function(e,t,a){},1086:function(e,t,a){},1087:function(e,t,a){},1088:function(e,t,a){},1089:function(e,t,a){},1090:function(e,t,a){},1091:function(e,t,a){"use strict";a.r(t);var n,r=a(0),s=a.n(r),c=a(10),o=a.n(c),i=(a(22),a(23),a(24),a(5)),l=a(2),u=a(25),m=a(34),d=a(35),p=a(1),v=(n=10,Array.from({length:n},function(){return g()})),f=p.mapKeys(v,"user_id"),E=function(e){var t={};return p.forEach(v,function(a){var n;t[a.user_id]=Object(l.a)({},p.mapKeys((n=e,Array.from({length:n},function(e,t){return{number:t,text:m.sentence(),is_user_msg:d.random.boolean()}})),"number"))}),t};g(),E(10);function g(){return{name:d.name.findName(),email:d.internet.email(),profile_pic:d.internet.avatar(),status:m.sentence(),user_id:u.generate()}}var h="SET_ACTIVE_USER_ID",_="SEND_MESSAGE";var y=a(3),b=a(1),N=a.n(b);var w=Object(i.a)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g();return arguments.length>1&&arguments[1],e},messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E(10),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:var a=t.payload,n=a.message,r=a.userId,s=e[r],c=+N.a.keys(s).pop()+1;return Object(l.a)({},e,Object(y.a)({},r,Object(l.a)({},s,Object(y.a)({},c,{number:c,text:n,is_user_msg:!0}))));default:return e}},typing:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TYPING_VALUE":return t.payload;case _:return"";default:return e}},contacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f;arguments.length>1&&arguments[1];return e},activeUserId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return t.payload;default:return e}}}),U=Object(i.b)(w),S=function(e){return{type:h,payload:e}};function I(e){var t=e.user_id;U.dispatch(S(t))}var j=function(e){var t=e.user,a=t.name,n=t.profile_pic,r=t.status;return s.a.createElement("div",{className:"User",onClick:I.bind(null,t)},s.a.createElement("img",{src:n,alt:a,className:"User__pic"}),s.a.createElement("div",{className:"User__details"},s.a.createElement("p",{className:"User__details-name"},a),s.a.createElement("p",{className:"User__details-status"},r)))},k=function(e){var t=e.contacts;return s.a.createElement("div",null,s.a.createElement("aside",{className:"Sidebar"},t.map(function(e){return s.a.createElement(j,{user:e,key:e.user_id})})))},O=(a(1084),a(1085),function(e){var t=e.user,a=t.name,n=t.profile_pic,r=t.status,c=a.split(" ")[0];return s.a.createElement("div",{className:"Empty"},s.a.createElement("h1",{className:"Empty__name"},"Welcome, ",c," "),s.a.createElement("img",{src:n,alt:a,className:"Empty__img"}),s.a.createElement("p",{className:"Empty__status"},s.a.createElement("b",null,"Status:")," ",r),s.a.createElement("button",{className:"Empty__btn"},"Start a conversation"),s.a.createElement("p",{className:"Empty__info"},"Search for someone to start chatting with or go to Contacts to see who is available"))}),T=(a(1086),function(e){var t=e.user,a=t.name,n=t.status,r=t.profile_pic;return s.a.createElement("header",{className:"Header"},s.a.createElement("img",{className:"Header__picture",alt:"profile",src:r}),s.a.createElement("h1",{className:"Header__name"},a),s.a.createElement("p",{className:"Header__status"},n))}),C=a(12),A=a(13),R=a(15),B=a(14),D=a(16),H=(a(1087),function(e){var t=e.message,a=t.text,n=t.is_user_msg;return s.a.createElement("span",{className:"Chat ".concat(n?"is-user-msg":"")},a)}),M=function(e){function t(e){var a;return Object(C.a)(this,t),(a=Object(R.a)(this,Object(B.a)(t).call(this,e))).scrollToBottom=function(){a.chatsRef.current.scrollTop=a.chatsRef.current.scrollHeight},a.chatsRef=s.a.createRef(),a}return Object(D.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"render",value:function(){return s.a.createElement("div",{className:"Chats",ref:this.chatsRef},this.props.messages.map(function(e){return s.a.createElement(H,{message:e,key:e.number})}))}}]),t}(r.Component),x=(a(1088),function(e){var t=e.value,a=U.getState();return s.a.createElement("form",{className:"Message",onSubmit:function(e){e.preventDefault();var t=a.typing,n=a.activeUserId;U.dispatch({type:_,payload:{message:t,userId:n}})}},s.a.createElement("input",{className:"Message__input",onChange:function(e){U.dispatch({type:"SET_TYPING_VALUE",payload:e.target.value})},value:t,placeholder:"write a message"}))}),W=(a(1089),function(e){var t=e.activeUserId,a=U.getState(),n=a.typing,r=a.contacts[t],c=a.messages[t];return s.a.createElement("div",{className:"ChatWindow"},s.a.createElement(T,{user:r}),s.a.createElement(M,{messages:N.a.values(c)}),s.a.createElement(x,{value:n}))}),F=function(e){var t=e.user,a=e.activeUserId;return s.a.createElement("div",{className:"Main"},a?s.a.createElement("div",null,s.a.createElement(W,{activeUserId:a})):s.a.createElement(O,{user:t,activeUserId:a}))};a(1090);var G=function(){var e=U.getState(),t=e.user,a=e.contacts,n=e.activeUserId;return s.a.createElement("div",{className:"App"},s.a.createElement(k,{contacts:N.a.values(a)}),s.a.createElement(F,{user:t,activeUserId:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=function(){return console.log("%c Rendered with","background: purple; color: #FFF"),console.log(U.getState()),o.a.render(s.a.createElement(G,null),document.getElementById("root"))};V(),U.subscribe(V),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},17:function(e,t,a){e.exports=a(1091)},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){}},[[17,1,2]]]);
//# sourceMappingURL=main.49db5e64.chunk.js.map