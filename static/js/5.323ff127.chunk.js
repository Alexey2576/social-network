(this["webpackJsonpsocial-network-ts"]=this["webpackJsonpsocial-network-ts"]||[]).push([[5],{100:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(9);function o(e,t){if(null==e)return{};var r,o,a=Object(n.a)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}},101:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(2),o=r(100),a=(r(0),r(14)),c=r(43),s=r(1),i=["isAuth"],u=function(e){return{isAuth:e.authState.isAuth}};function l(e){return Object(a.b)(u)((function(t){var r=t.isAuth,a=Object(o.a)(t,i);return r?Object(s.jsx)(e,Object(n.a)({},a)):Object(s.jsx)(c.a,{})}))}},102:function(e,t,r){e.exports={profile:"profile_profile__2gMKd",profile__postTitle:"profile_profile__postTitle__H2b-o",profile__info:"profile_profile__info__1_Kve",profile__info_img:"profile_profile__info_img__3MAes",profile__info_text:"profile_profile__info_text__jjPkj",profile__posts:"profile_profile__posts__15hxo",profile__addPost:"profile_profile__addPost__3MWLG",profile__addPost_input:"profile_profile__addPost_input__1wZ-Y",profile__addPost_btn:"profile_profile__addPost_btn__1Nt5B"}},104:function(e,t,r){"use strict";t.a=r.p+"static/media/ava.c429bb80.png"},105:function(e,t,r){e.exports={post:"post_post__2yxHn",post_message:"post_post_message__2IZXH",post_like:"post_post_like__8OBoH"}},111:function(e,t,r){"use strict";r.r(t);var n=r(2),o=r(22),a=r(21),c=r(24),s=r(23),i=r(100),u=r(0),l=r.n(u),p=r(102),f=r.n(p),b=r(38),d=r(15),j=r(16),h=r(8),O=r.n(h),x=r(1),_=l.a.memo((function(e){var t=e.status,r=e.authId,n=e.userIdFromURL,o=e.updateStatusCallback,a=Object(u.useState)(!1),c=Object(j.a)(a,2),s=c[0],i=c[1],l=Object(u.useState)(""),p=Object(j.a)(l,2),f=p[0],b=p[1];Object(u.useEffect)((function(){b(t||"")}),[t]);return Object(x.jsx)(x.Fragment,{children:s?Object(x.jsx)("input",{autoFocus:!0,type:"text",value:f,onBlur:function(){o(f),i(!1)},onChange:function(e){return b(e.currentTarget.value)}}):t||r!==Number(n)?Object(x.jsx)("span",{onDoubleClick:function(){r===Number(n)&&i(!0)},children:f}):Object(x.jsx)("button",{onClick:function(){return i(!0)},children:"+"})})})),m=function(e){Object(c.a)(r,e);var t=Object(s.a)(r);function r(e){var n;return Object(a.a)(this,r),(n=t.call(this,e)).state={error:null,errorInfo:null},n}return Object(o.a)(r,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.errorInfo?Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"Something went wrong."}),Object(x.jsxs)("details",{style:{whiteSpace:"pre-wrap"},children:[this.state.error&&this.state.error.toString(),Object(x.jsx)("br",{}),this.state.errorInfo.componentStack]})]}):this.props.children}}]),r}(l.a.Component),v=r(104),k=r(30),g=r(34),P=r(17),y=["profileUserInfo","updatePhotoCallback","authId","updateProfileDataCallback"],S=l.a.memo((function(e){var t=e.profileUserInfo,r=e.updatePhotoCallback,o=e.authId,a=e.updateProfileDataCallback,c=Object(i.a)(e,y),s=t.fullName,l=t.userId,p=t.photos,h=t.contacts,k=Object.keys(t.contacts),g=Object(u.useState)(!1),S=Object(j.a)(g,2),I=S[0],N=S[1],D=function(){var e=Object(d.a)(O.a.mark((function e(t){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(t);case 2:if(1!==(r=e.sent).resultCode){e.next=7;break}return e.abrupt("return",Object(b.a)({},P.a,r.messages[0]));case 7:N(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)(m,{children:Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:f.a.profile__info,children:[Object(x.jsxs)("div",{className:f.a.profile__info_img,children:[Object(x.jsx)("img",{src:null!==p.large?p.large:v.a,alt:"Profile photo"}),o===Number(l)&&Object(x.jsx)("div",{children:Object(x.jsx)("input",{type:"file",onChange:function(e){return e.target.files&&r(e.target.files[0])}})})]}),Object(x.jsxs)("div",{className:f.a.profile__info_text,children:[Object(x.jsx)("h3",{children:s}),Object(x.jsx)(_,Object(n.a)(Object(n.a)({},c),{},{authId:o})),Object(x.jsx)("h4",{children:h.github})]})]}),I?Object(x.jsx)(w,{onSubmit:D,contactsKeys:k,initialValues:t}):Object(x.jsx)(C,{profileUserInfo:t,setEditMode:N,contactsKeys:k})]})})})),C=function(e){var t=e.profileUserInfo,r=e.setEditMode,n=e.contactsKeys;return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h4",{children:"aboutMe"}),Object(x.jsx)("span",{children:t.aboutMe})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h4",{children:"lookingForAJob"}),Object(x.jsx)("span",{children:t.lookingForAJob?"Yes":"No"})]}),t.lookingForAJob&&Object(x.jsxs)("div",{children:[Object(x.jsx)("h4",{children:"lookingForAJobDescription"}),Object(x.jsx)("span",{children:t.lookingForAJobDescription})]}),n.map((function(e){return Object(x.jsx)(I,{contactKey:e,value:t.contacts[e]},e)})),Object(x.jsx)("button",{onClick:function(){return r(!0)},children:"Edit"})]})},I=function(e){var t=e.contactKey,r=e.value;return Object(x.jsxs)("div",{children:[Object(x.jsx)("h4",{children:t}),Object(x.jsx)("span",{children:null!==r?r:"no"})]})},w=function(e){var t=e.onSubmit,r=e.contactsKeys,n=e.initialValues;return Object(x.jsx)(g.b,{onSubmit:t,initialValues:n,render:function(e){var t=e.handleSubmit,n=e.submitError;return Object(x.jsxs)("form",{onSubmit:t,children:[Object(x.jsx)("h2",{children:"Profile Info"}),Object(x.jsx)("div",{children:Object(x.jsx)(k.a,{type:"text",placeholder:"fullName",name:"fullName"})}),Object(x.jsx)("div",{children:Object(x.jsx)(k.a,{type:"text",placeholder:"aboutMe",name:"aboutMe"})}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{children:"lookingForAJob"}),Object(x.jsx)(k.a,{type:"checkbox",name:"lookingForAJob"})]}),Object(x.jsx)("div",{children:Object(x.jsx)(k.a,{type:"text",placeholder:"lookingForAJobDescription",name:"lookingForAJobDescription"})}),Object(x.jsx)("h2",{children:"Contacts"}),r.map((function(e){return Object(x.jsx)(k.a,{type:"text",placeholder:e,name:"contacts.".concat(e),submitError:n})})),Object(x.jsx)("button",{type:"submit",children:"Submit"}),n&&Object(x.jsx)("span",{style:{color:"red"},children:n})]})}})},N=l.a.memo((function(e){var t=e.addPostCallback;return Object(x.jsx)(m,{children:Object(x.jsx)("div",{className:f.a.profile__addPost,children:Object(x.jsx)(g.b,{onSubmit:function(e){var r=e.post;return t(r)},render:function(e){var t=e.handleSubmit;return Object(x.jsxs)("form",{onSubmit:t,children:[Object(x.jsx)("div",{children:Object(x.jsx)(k.a,{type:"text",placeholder:"Add new message",name:"post",className:"messages__addPost_btn"})}),Object(x.jsx)("button",{type:"submit",className:f.a.messages__addPost_btn,children:"Add"})]})}})})})})),D=r(105),U=r.n(D),F=function(e){return Object(x.jsxs)("div",{className:U.a.post,children:[Object(x.jsx)("p",{className:U.a.post_message,children:e.message}),Object(x.jsx)("button",{className:U.a.post_like,children:e.like})]})},A=function(e){var t=e.posts;return Object(x.jsxs)(m,{children:[Object(x.jsx)("h3",{className:f.a.profile__postTitle,children:"My posts"}),Object(x.jsx)("div",{className:f.a.profile__posts,children:t.map((function(e){return Object(x.jsx)(F,{id:e.id,message:e.message,like:e.like},e.id)}))})]})},J=["posts","addPostCallback"],M=l.a.memo((function(e){var t=e.posts,r=e.addPostCallback,o=Object(i.a)(e,J);return Object(x.jsxs)("div",{className:f.a.profile,children:[Object(x.jsx)(S,Object(n.a)({},o)),Object(x.jsx)(A,{posts:t}),Object(x.jsx)(N,{addPostCallback:r})]})})),T=r(14),K=r(31),L=r(33),E=function(e){return function(){var t=Object(d.a)(O.a.mark((function t(r){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e){t.next=6;break}return t.next=4,K.b.getProfile(e.toString());case 4:n=t.sent,r(Object(L.e)(n));case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("profileThunk -> getProfileUserInfo ",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},R=r(4);var H=r(28),B=r(101),V=function(e){return e.profilePage.profileUserInfo},Y=function(e){return e.profilePage.posts},Z=function(e){return e.authState.id},G=function(e){return e.profilePage.status},W=function(e){Object(c.a)(r,e);var t=Object(s.a)(r);function r(){var e;Object(a.a)(this,r);for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).loadProfileData=function(){var t=Number(e.props.userIdFromURL);t||(t=e.props.authId),e.props.getProfileUserInfo(t),e.props.getProfileStatus(t)},e.componentDidMount=function(){return e.loadProfileData()},e.componentDidUpdate=function(t){var r=e.props.userIdFromURL,n=t.userIdFromURL,o=t.profileUserInfo.photos.large,a=e.props.profileUserInfo.photos.large;(r!==n||a!==o)&&e.loadProfileData()},e.addPostCallback=function(t){return e.props.addPost(t)},e.updateStatusCallback=function(t){return e.props.updateProfileStatus(t)},e.updatePhotoCallback=function(t){return e.props.uploadProfilePhoto(t)},e.updateProfileDataCallback=function(t){return e.props.updateProfileData(t)},e.render=function(){return Object(x.jsx)(M,Object(n.a)(Object(n.a)({},e.props),{},{userIdFromURL:e.props.userIdFromURL,updateProfileDataCallback:e.updateProfileDataCallback,updatePhotoCallback:e.updatePhotoCallback,addPostCallback:e.addPostCallback,updateStatusCallback:e.updateStatusCallback}))},e}return Object(o.a)(r)}(l.a.Component);t.default=Object(H.c)(Object(T.b)((function(e){return{profileUserInfo:V(e),posts:Y(e),authId:Z(e),status:G(e)}}),{getProfileUserInfo:E,addPost:function(e){return function(){var t=Object(d.a)(O.a.mark((function t(r){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r(Object(L.b)(e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getProfileStatus:function(e){return function(){var t=Object(d.a)(O.a.mark((function t(r){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e){t.next=6;break}return t.next=4,K.b.getStatus(e.toString());case 4:n=t.sent,r(Object(L.d)(n));case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("profileThunk -> getProfileStatus ",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},updateProfileStatus:function(e){return function(){var t=Object(d.a)(O.a.mark((function t(r){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,K.b.updateStatus(e);case 3:0===t.sent.resultCode&&r(Object(L.d)(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("profileThunk -> updateProfileStatus ",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},uploadProfilePhoto:function(e){return function(){var t=Object(d.a)(O.a.mark((function t(r){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,K.b.uploadPhoto(e);case 3:0===(n=t.sent).resultCode&&r(Object(L.c)(n.data)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("profileThunk -> uploadProfilePhoto ",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},updateProfileData:function(e){return function(){var t=Object(d.a)(O.a.mark((function t(r,n){var o,a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o=n().authState.id,t.next=4,K.b.updateProfile(e);case 4:if(0!==(a=t.sent).resultCode){t.next=8;break}return t.next=8,r(E(o));case 8:return t.abrupt("return",a);case 11:t.prev=11,t.t0=t.catch(0),console.log("profileThunk -> updateProfileData ",t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,r){return t.apply(this,arguments)}}()}}),(function(e){return function(t){var r=Object(R.g)().userID,o=Object(R.f)();return Object(x.jsx)(e,Object(n.a)(Object(n.a)({},t),{},{userIdFromURL:r,navigate:o}))}}),B.a)(W)}}]);
//# sourceMappingURL=5.323ff127.chunk.js.map