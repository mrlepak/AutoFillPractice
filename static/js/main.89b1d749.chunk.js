(this["webpackJsonp38.autofill"]=this["webpackJsonp38.autofill"]||[]).push([[0],{1292:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(0),a=c.n(r),s=c(5),i=c.n(s),u=(c(13),c(2)),o=c(3),j=c.n(o),l=function(){for(var e=[],t=0;t<500;t++)e.push(j.a.commerce.product());for(var c=0;c<500;c++)e.push(j.a.random.word());return e}(),d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l,c=[];return""===e?t:(t.map((function(t){var n=t.toLowerCase(),r=e.toLowerCase();n.includes(r)&&c.push(t)})),c)},b=c(7),h=function(){var e=Object(r.useRef)(!0),t=Object(r.useState)(""),c=Object(u.a)(t,2),a=c[0],s=c[1],i=Object(r.useState)(d(a)),o=Object(u.a)(i,2),j=o[0],l=(o[1],Object(r.useState)({prev:0,next:50})),h=Object(u.a)(l,2),O=h[0],v=h[1],p=Object(r.useState)(!0),x=Object(u.a)(p,2),f=x[0],m=x[1],g=Object(r.useState)(j.slice(O.prev,O.next)),w=Object(u.a)(g,2),N=w[0],S=w[1],A=function(){N.length!==j.length?(S(N.concat(j.slice(O.prev+10,O.next+10))),v({prev:O.prev+10,next:O.next+10})):m(!1)};return Object(r.useEffect)((function(){e.current?e.current=!1:S(""!==a?d(a):d(a).slice(O.prev,O.next))}),[a]),Object(n.jsxs)("div",{className:"ui three column centered grid",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("h1",{className:"ui header",children:"AutoFilter for AutoFill"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("input",{type:"text",onChange:function(e){s(e.target.value)}})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)(b.a,{dataLength:N.length,next:A,hasMore:f,children:Object(n.jsx)("div",{children:N.map((function(e,t){return Object(n.jsx)("div",{children:e})}))})})})]})};var O=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(h,{})})};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root"))},13:function(e,t,c){}},[[1292,1,2]]]);
//# sourceMappingURL=main.89b1d749.chunk.js.map