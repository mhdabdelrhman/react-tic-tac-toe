(this["webpackJsonptic-tac-toe-app"]=this["webpackJsonptic-tac-toe-app"]||[]).push([[0],{12:function(e,c,t){},14:function(e,c,t){"use strict";t.r(c);var n=t(1),s=t.n(n),a=t(6),r=t.n(a),i=(t(12),t(7)),l=t(4),j=t(0),d=function(e){var c=e.value,t=e.row,n=e.column,s=e.onClick;return Object(j.jsx)("div",{className:"cell",onClick:function(){return s({row:t,column:n})},children:Object(j.jsx)("span",{children:c&&c>0?1===c?"X":"O":Object(j.jsx)(j.Fragment,{children:"\xa0"})})})},b="_score",o="_player",h=function(e){var c=+localStorage.getItem(o)||1,t=JSON.parse(localStorage.getItem(b))||{x:0,o:0,tie:0},s=Object(n.useState)(t),a=Object(l.a)(s,2),r=a[0],h=(a[1],Object(n.useState)(c)),O=Object(l.a)(h,2),x=O[0],m=O[1],u=Object(n.useState)([].concat([[0,0,0],[0,0,0],[0,0,0]])),p=Object(l.a)(u,2),g=p[0],v=p[1];Object(n.useEffect)((function(){localStorage.setItem(b,JSON.stringify(r)),localStorage.setItem(o,x)}));var f=function(e){var c=e.row,t=e.column;g[c][t]>0||(g[c][t]=x,v(Object(i.a)(g)),m(1===x?2:1))};return Object(j.jsxs)("div",{className:"game",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:"Current player:"}),Object(j.jsx)("span",{className:"ms-1 py-1 px-2 text-light bg-dark rounded",children:1===x?"X":"O"})]}),Object(j.jsx)("div",{className:"mt-5",children:g.map((function(e,c){return Object(j.jsx)("div",{className:"g-row",children:e.map((function(t,n){return Object(j.jsx)(d,{value:t,row:c,column:n,onClick:f},c*e.length+n)}))},c)}))}),Object(j.jsxs)("div",{className:"mt-5",children:[Object(j.jsx)("h3",{children:"Score:"}),Object(j.jsxs)("div",{className:"d-flex justify-content-between bg-light rounded p-3",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:"Player X: "}),Object(j.jsx)("span",{className:"text-primary",children:r.x})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:"Player O: "}),Object(j.jsx)("span",{className:"text-success",children:r.o})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:"Tie: "}),Object(j.jsx)("span",{className:"text-danger",children:r.tie})]})]})]})]})},O=t.p+"static/media/logo.6ce24c58.svg";var x=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{children:Object(j.jsx)("nav",{className:"navbar navbar-dark bg-dark",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("a",{className:"navbar-brand d-flex align-items-center",href:"/",children:[Object(j.jsx)("img",{src:O,alt:"",width:"30",height:"24"}),Object(j.jsx)("span",{className:"fw-bold",children:"Tic-tac-toe"})]})})})}),Object(j.jsx)("main",{children:Object(j.jsx)("div",{className:"container my-5",children:Object(j.jsx)(h,{})})}),Object(j.jsx)("footer",{children:Object(j.jsx)("div",{className:"w-100 bg-dark text-white",children:Object(j.jsxs)("div",{className:"container py-3",children:[Object(j.jsxs)("span",{children:["Coded by",Object(j.jsx)("a",{className:"mx-1",target:"_blank",href:"https://github.com/mhdabdelrhman",children:"mhdabdelrhman"})]}),Object(j.jsxs)("span",{children:[", @Year ",(new Date).getFullYear()]})]})})})]})},m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,15)).then((function(c){var t=c.getCLS,n=c.getFID,s=c.getFCP,a=c.getLCP,r=c.getTTFB;t(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(x,{onclick:123})}),document.getElementById("root")),m()}},[[14,1,2]]]);
//# sourceMappingURL=main.c4cda1fb.chunk.js.map