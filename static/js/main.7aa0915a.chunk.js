(this["webpackJsonptic-tac-toe-app"]=this["webpackJsonptic-tac-toe-app"]||[]).push([[0],{14:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(8),r=c.n(a),i=(c(14),c(6)),l=c(4),j=c(20),o=c(21),b=c(9),d=c.n(b),h=c(0),O=function(e){var t=e.value,c=e.row,n=e.column,s=e.onClick;return Object(h.jsx)("div",{className:"cell",onClick:function(){return s({row:c,column:n})},children:Object(h.jsx)("span",{children:t&&0!==t?1===t?"X":"O":Object(h.jsx)(h.Fragment,{children:"\xa0"})})})},m="_score",x="_player",u=function(e){var t=[[0,0,0],[0,0,0],[0,0,0]],c=+localStorage.getItem(x)||-1,s=JSON.parse(localStorage.getItem(m))||{x:0,o:0,tie:0},a=Object(n.useState)([]),r=Object(l.a)(a,2),b=r[0],u=r[1],f=Object(n.useState)(s),p=Object(l.a)(f,2),v=p[0],g=p[1],N=Object(n.useState)(c),w=Object(l.a)(N,2),y=w[0],k=w[1],S=Object(n.useState)([].concat(t)),C=Object(l.a)(S,2),F=C[0],I=C[1];Object(n.useEffect)((function(){localStorage.setItem(m,JSON.stringify(v)),localStorage.setItem(x,y)}));var T=function(e){var c=e.row,n=e.column;if(0===F[c][n]){b.push(function(){for(var e=[],t=0;t<F.length;t++)e[t]=F[t].slice();return e}()),u(Object(i.a)(b)),F[c][n]=y,I(Object(i.a)(F)),k(-1*y);var s=function(){for(var e=0,t=0,c=0;c<3;c++){for(var n=0,s=0,a=0;a<3;a++)n+=F[c][a],s+=F[a][c],c===a&&(e+=F[c][a],t+=F[c][2-a]);if(3===n||3===s)return 1;if(-3===n||-3===s)return-1}return 3===e||3===t?1:-3===e||-3===t?-1:0}();if(0!==s||function(){for(var e=0;e<3;e++)for(var t=0;t<3;t++)if(0===F[e][t])return!1;return!0}()){var a=v.x,r=v.o,l=v.tie,j="";1===s?(g({x:a+1,o:r,tie:l}),j="X won"):-1===s?(g({x:a,o:r+1,tie:l}),j="O won"):(g({x:a,o:r,tie:l+1}),j="Tie"),d.a.fire({title:j,text:0!==s?"Wonderful":"Try again!!!",icon:0!==s?"success":"warning",timer:2e3,timerProgressBar:!0,allowOutsideClick:!1,position:"top",showConfirmButton:!1}).then((function(){I([].concat(t)),u([])}))}}},P=Object(h.jsx)(h.Fragment,{});return b.length>0&&(P=Object(h.jsx)("button",{title:"Undo",className:"btn btn-primary btn-sm",onClick:function(){var e=b.pop();u(Object(i.a)(b)),I(e),k(-1*y)},children:Object(h.jsx)(j.a,{})})),Object(h.jsxs)("div",{className:"game",children:[Object(h.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"Current player:"}),Object(h.jsx)("span",{className:"btn btn-success btn-sm ms-1",children:1===y?"X":"O"})]}),P]}),Object(h.jsx)("div",{className:"mt-5",children:F.map((function(e,t){return Object(h.jsx)("div",{className:"g-row",children:e.map((function(c,n){return Object(h.jsx)(O,{value:c,row:t,column:n,onClick:T},t*e.length+n)}))},t)}))}),Object(h.jsxs)("div",{className:"mt-5",children:[Object(h.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[Object(h.jsx)("h3",{children:"Score:"}),Object(h.jsx)("button",{title:"Reset score",className:"btn btn-primary btn-sm",onClick:function(){g({x:0,o:0,tie:0})},children:Object(h.jsx)(o.a,{})})]}),Object(h.jsxs)("div",{className:"d-flex justify-content-between bg-light rounded p-3 mt-2",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"Player X: "}),Object(h.jsx)("span",{className:"text-primary",children:v.x})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"Player O: "}),Object(h.jsx)("span",{className:"text-success",children:v.o})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"Tie: "}),Object(h.jsx)("span",{className:"text-danger",children:v.tie})]})]})]})]})},f=c.p+"static/media/logo.6ce24c58.svg";var p=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("header",{children:Object(h.jsx)("nav",{className:"navbar navbar-dark bg-dark",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("a",{className:"navbar-brand d-flex align-items-center",href:"/",children:[Object(h.jsx)("img",{src:f,alt:"",width:"30",height:"24"}),Object(h.jsx)("span",{className:"fw-bold",children:"Tic-tac-toe"})]})})})}),Object(h.jsx)("main",{children:Object(h.jsx)("div",{className:"container my-5",children:Object(h.jsx)(u,{})})}),Object(h.jsx)("footer",{children:Object(h.jsx)("div",{className:"w-100 bg-dark text-white",children:Object(h.jsxs)("div",{className:"container py-3",children:[Object(h.jsxs)("span",{children:["Coded by",Object(h.jsx)("a",{className:"mx-1",target:"_blank",rel:"noreferrer",href:"https://github.com/mhdabdelrhman",children:"mhdabdelrhman"})]}),Object(h.jsxs)("span",{children:[", @Year ",(new Date).getFullYear()]})]})})})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,22)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(p,{onclick:123})}),document.getElementById("root")),v()}},[[18,1,2]]]);
//# sourceMappingURL=main.7aa0915a.chunk.js.map