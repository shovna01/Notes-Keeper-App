(this["webpackJsonpkeeper-app-part-1-starting"]=this["webpackJsonpkeeper-app-part-1-starting"]||[]).push([[0],{41:function(e,t,n){e.exports=n(53)},53:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),c=n.n(l),u=n(37),o=n(21),i=n(33),m=n.n(i);var E=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement(m.a,null),"Keeper"))};var p=function(){var e=(new Date).getFullYear();return r.a.createElement("footer",null,r.a.createElement("p",null,"Copyright \xa9 ",e))},f=n(35),s=n.n(f);var v=function(e){return r.a.createElement("div",{className:"note"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.content),r.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},r.a.createElement(s.a,null)))},d=n(25),b=n(31),h=n(36),j=n.n(h),O=n(70),k=n(71);var g=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),l=n[0],c=n[1],u=Object(a.useState)({title:"",content:""}),i=Object(o.a)(u,2),m=i[0],E=i[1];function p(e){var t=e.target,n=t.name,a=t.value;E((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(d.a)({},n,a))}))}return r.a.createElement("div",null,r.a.createElement("form",{className:"create-note"},l&&r.a.createElement("input",{name:"title",onChange:p,value:m.title,placeholder:"Title"}),r.a.createElement("textarea",{name:"content",onClick:function(){c(!0)},onChange:p,value:m.content,placeholder:"Take a note...",rows:l?3:1}),r.a.createElement(k.a,{in:l},r.a.createElement(O.a,{onClick:function(t){e.onAdd(m),E({title:"",content:""}),t.preventDefault()}},r.a.createElement(j.a,null)))))};var C=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],l=t[1];function c(e){l((function(t){return t.filter((function(t,n){return n!==e}))}))}return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(g,{onAdd:function(e){l((function(t){return[].concat(Object(u.a)(t),[e])}))}}),n.map((function(e,t){return r.a.createElement(v,{key:t,id:t,title:e.title,content:e.content,onDelete:c})})),r.a.createElement(p,null))};c.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.de1e1ea3.chunk.js.map