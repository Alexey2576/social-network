(this["webpackJsonpsocial-network-ts"]=this["webpackJsonpsocial-network-ts"]||[]).push([[4],{100:function(e,s,a){"use strict";a.d(s,"a",(function(){return r}));var t=a(9);function r(e,s){if(null==e)return{};var a,r,n=Object(t.a)(e,s);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)a=u[r],s.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}},101:function(e,s,a){"use strict";a.d(s,"a",(function(){return d}));var t=a(2),r=a(100),n=(a(0),a(14)),u=a(43),c=a(1),i=["isAuth"],o=function(e){return{isAuth:e.authState.isAuth}};function d(e){return Object(n.b)(o)((function(s){var a=s.isAuth,n=Object(r.a)(s,i);return a?Object(c.jsx)(e,Object(t.a)({},n)):Object(c.jsx)(u.a,{})}))}},103:function(e,s,a){e.exports={messages:"messages_messages__fmeRw",messages__addPost:"messages_messages__addPost__TbDva",messages__addPost_input:"messages_messages__addPost_input__1d9HL",messages__addPost_btn:"messages_messages__addPost_btn__N95t9",usersMessages:"messages_usersMessages__2useX"}},106:function(e,s,a){e.exports={user:"user_user__3O_Rm",user__ava:"user_user__ava__hREbY",user__name:"user_user__name__3vDoJ"}},107:function(e,s,a){e.exports={userMessages:"userMessages_userMessages__2QME_",userMessages__message:"userMessages_userMessages__message__2SzYE"}},112:function(e,s,a){"use strict";a.r(s);var t=a(21),r=a(22),n=a(24),u=a(23),c=a(0),i=a.n(c),o=a(103),d=a.n(o),m=a(106),_=a.n(m),b=a(1),g=i.a.memo((function(e){var s=e.name,a=e.ava;return Object(b.jsxs)("div",{className:_.a.user,children:[Object(b.jsx)("img",{className:_.a.user__ava,src:a,alt:""}),Object(b.jsx)("h4",{className:_.a.user__name,children:s})]})})),j=i.a.memo((function(e){var s=e.users;return Object(b.jsx)("div",{className:d.a.users,children:s.map((function(e){return Object(b.jsx)(g,{id:e.id,name:e.name,ava:e.ava},e.id)}))})})),l=a(107),f=a.n(l),O=i.a.memo((function(e){var s=e.message;return Object(b.jsx)("div",{className:f.a.userMessages,children:Object(b.jsx)("p",{className:f.a.userMessages__message,children:s})})})),p=i.a.memo((function(e){var s=e.usersMessages;return Object(b.jsx)("div",{className:d.a.usersMessages,children:s.map((function(e){return Object(b.jsx)(O,{id:e.id,message:e.message},e.id)}))})})),v=a(34),h=a(30),x=i.a.memo((function(e){var s=e.addMessageCallback;return Object(b.jsx)("div",{className:d.a.messages__addPost,children:Object(b.jsx)(v.b,{onSubmit:function(e){var a=e.message;return s(a)},render:function(e){var s=e.handleSubmit;return Object(b.jsxs)("form",{onSubmit:s,children:[Object(b.jsx)("div",{children:Object(b.jsx)(h.a,{type:"text",placeholder:"Add new message",name:"message",className:"messages__addPost_btn"})}),Object(b.jsx)("button",{type:"submit",className:d.a.messages__addPost_btn,children:"Add"})]})}})})})),M=i.a.memo((function(e){var s=e.usersMessages,a=e.users,t=e.addMessageCallback;return Object(b.jsxs)("div",{className:d.a.messages,children:[Object(b.jsx)(j,{users:a}),Object(b.jsxs)("div",{children:[Object(b.jsx)(p,{usersMessages:s}),Object(b.jsx)(x,{addMessageCallback:t})]})]})})),P=a(14),k=a(15),w=a(8),y=a.n(w),N=a(55),A=a(28),C=a(101),S=function(e){return e.messagesPage.users},E=function(e){return e.messagesPage.usersMessages},J=function(e){Object(n.a)(a,e);var s=Object(u.a)(a);function a(){var e;Object(t.a)(this,a);for(var r=arguments.length,n=new Array(r),u=0;u<r;u++)n[u]=arguments[u];return(e=s.call.apply(s,[this].concat(n))).addMessageCallback=function(s){return e.props.addMessage(s)},e}return Object(r.a)(a,[{key:"render",value:function(){return Object(b.jsx)(M,{users:this.props.users,usersMessages:this.props.usersMessages,addMessageCallback:this.addMessageCallback})}}]),a}(i.a.PureComponent);s.default=Object(A.c)(Object(P.b)((function(e){return{users:S(e),usersMessages:E(e)}}),{addMessage:function(e){return function(){var s=Object(k.a)(y.a.mark((function s(a){return y.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:a(Object(N.b)(e));case 1:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()},changeValueMessage:function(e){return function(){var s=Object(k.a)(y.a.mark((function s(a){return y.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:a(Object(N.c)(e));case 1:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()}}),C.a)(J)}}]);
//# sourceMappingURL=4.f3811651.chunk.js.map