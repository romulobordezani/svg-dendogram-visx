(this["webpackJsonpcock-pit"]=this["webpackJsonpcock-pit"]||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(24),c=n.n(r),l=(n(33),n(34),n(26)),o=n.n(l),s=n(17),u=n(6),j=n(103),d=n(104),h=n(27),p=n(102),f=n(105),b=n(8);var g=n(3),O={fontSize:10};function x(e){var t=e.layout,n=e.orientation,a=e.linkType,i=e.stepPercent,r=e.setLayout,c=e.setOrientation,l=e.setLinkType,o=e.setStepPercent;return Object(g.jsxs)("div",{style:O,children:[Object(g.jsx)("label",{children:"layout:"}),"\xa0",Object(g.jsxs)("select",{onClick:function(e){return e.stopPropagation()},onChange:function(e){return r(e.target.value)},value:t,children:[Object(g.jsx)("option",{value:"cartesian",children:"cartesian"}),Object(g.jsx)("option",{value:"polar",children:"polar"})]}),"\xa0\xa0",Object(g.jsx)("label",{children:"orientation:"}),"\xa0",Object(g.jsxs)("select",{onClick:function(e){return e.stopPropagation()},onChange:function(e){return c(e.target.value)},value:n,disabled:"polar"===t,children:[Object(g.jsx)("option",{value:"vertical",children:"vertical"}),Object(g.jsx)("option",{value:"horizontal",children:"horizontal"})]}),"\xa0\xa0",Object(g.jsx)("label",{children:"link:"}),"\xa0",Object(g.jsxs)("select",{onClick:function(e){return e.stopPropagation()},onChange:function(e){return l(e.target.value)},value:a,children:[Object(g.jsx)("option",{value:"diagonal",children:"diagonal"}),Object(g.jsx)("option",{value:"step",children:"step"}),Object(g.jsx)("option",{value:"curve",children:"curve"}),Object(g.jsx)("option",{value:"line",children:"line"})]}),"step"===a&&"polar"!==t&&Object(g.jsxs)(g.Fragment,{children:["\xa0\xa0",Object(g.jsx)("label",{children:"step:"}),"\xa0",Object(g.jsx)("input",{onClick:function(e){return e.stopPropagation()},type:"range",min:0,max:1,step:.1,onChange:function(e){return o(Number(e.target.value))},value:i,disabled:"step"!==a||"polar"===t})]})]})}var v=n(90),m=n(91),y=n(92),k=n(93),w=n(94),C=n(95),D=n(96),F=n(97),S=n(98),P=n(99),z=n(100),T=n(101);var L={name:"Total",amount:{initial:1000001,final:20000002},range:{initial:new Date("2019-01-02"),final:new Date("2020-01-02")},percentage:10,children:[{name:"Loja",amount:{initial:3000003,final:400000044},range:{initial:new Date("2019-01-02"),final:new Date("2020-01-02")},percentage:-20,children:[{name:"Boticario",amount:{initial:5000005,final:60000006},range:{initial:new Date("2019-01-02"),final:new Date("2020-01-02")},percentage:-30},{name:"Quem Disse Berenice",amount:{initial:7000007,final:80000008},range:{initial:new Date("2019-01-02"),final:new Date("2020-01-02")},percentage:-40},{name:"O.U.I",amount:{initial:9000009,final:1000000001},range:{initial:new Date("2019-01-02"),final:new Date("2020-01-02")},percentage:50}]},{name:"Venda Direta",amount:{initial:2000002,final:301233400},range:{initial:new Date("2019-01-02"),final:new Date("2020-01-02")},percentage:-60}]};function W(e){var t=e.width,n=e.height,i=e.margin,r=void 0===i?{top:30,left:30,right:30,bottom:70}:i,c=Object(a.useState)("cartesian"),l=Object(u.a)(c,2),o=l[0],O=l[1],W=Object(a.useState)("vertical"),M=Object(u.a)(W,2),Z=M[0],A=M[1],B=Object(a.useState)("step"),E=Object(u.a)(B,2),I=E[0],R=E[1],H=Object(a.useState)(.5),J=Object(u.a)(H,2),Y=J[0],$=J[1],N=function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2)[1];return function(){return t((function(e){return e+1}))}}(),Q=t-r.left-r.right,U=n-r.top-r.bottom,V=function(e,t,n,a){var i,r,c;return"polar"===e?(i={x:n/2,y:a/2},r=2*Math.PI,c=Math.min(n,a)/2):(i={x:0,y:0},"vertical"===t?(r=n,c=a):(r=a,c=n)),{origin:i,sizeHeight:c,sizeWidth:r}}(o,Z,Q,U),q=V.origin,G=V.sizeWidth,K=V.sizeHeight,X=function(e){var t=e.layout,n=e.linkType,a=e.orientation;return"polar"===t?"step"===n?v.a:"curve"===n?m.a:"line"===n?y.a:k.a:"vertical"===a?"step"===n?w.a:"curve"===n?C.a:"line"===n?D.a:F.a:"step"===n?S.a:"curve"===n?P.a:"line"===n?z.a:T.a}({layout:o,linkType:I,orientation:Z});return t<10?null:Object(g.jsxs)("div",{children:[Object(g.jsx)(x,{layout:o,orientation:Z,linkType:I,stepPercent:Y,setLayout:O,setOrientation:A,setLinkType:R,setStepPercent:$}),Object(g.jsx)(p.a,{width:t,height:n,children:Object(g.jsx)(j.a,{top:r.top,left:r.left,children:Object(g.jsx)(d.a,{root:Object(h.b)(L,(function(e){return e.isExpanded?null:e.children})),size:[G,K],separation:function(e,t){return(e.parent===t.parent?1:.5)/e.depth},children:function(e){return Object(g.jsxs)(j.a,{top:q.y,left:q.x,children:[e.links().map((function(e,t){return Object(g.jsx)(X,{data:e,percent:Y,stroke:"rgb(0,0,0,0.6)",strokeWidth:"1",fill:"none"},t)})),e.descendants().map((function(e,t){var n,a,i=0===e.depth;if("polar"===o){var r=Object(b.a)(e.x,e.y),c=Object(u.a)(r,2),l=c[0];n=c[1],a=l}else i?(console.log("isRoot"),n=e.y+60,a=e.x):"vertical"===Z?(n=e.y,a=e.x):(n=e.x,a=e.y);var d={y:-60,x:-100};return Object(g.jsxs)(j.a,{top:n,left:a,children:[Object(g.jsx)("rect",Object(s.a)(Object(s.a)({width:200,height:120},d),{},{style:{fill:"#FFFFFF",stroke:"#CCC"},rx:e.data.children?0:10,onClick:function(){e.data.isExpanded=!e.data.isExpanded,console.log(e),N()}})),Object(g.jsxs)(j.a,{transform:"translate(-100 -60) scale(0.66 0.66)",children:[Object(g.jsx)(f.a,{transform:"translate(19.1 29.21)",fontSize:20,fontWeight:800,children:e.data.name}),Object(g.jsx)("path",{d:"M354.06,196.22a11.11,11.11,0,1,0,11.1,11.11A11.1,11.1,0,0,0,354.06,196.22Zm-.19,19.43a1.86,1.86,0,0,1,0-3.72,1.86,1.86,0,0,1,0,3.72Zm.69-5.88h-1.75c-.58-3.4,3.74-4.36,3.74-6.81,0-1.29-.91-2.3-2.64-2.3A4.41,4.41,0,0,0,350.8,202L349.62,201A6,6,0,0,1,354,199c2.67,0,4.46,1.47,4.46,3.74C358.49,206,354.15,206.68,354.56,209.77Z",transform:"translate(-83.17 -181.74)",style:{fill:"#030202"}}),Object(g.jsx)("path",{d:"M121.46,226.22a15,15,0,1,0,15,15A15,15,0,0,0,121.46,226.22Zm.18,25.6-6.49-11.24h4.34v-8.74h4v8.74h4.64Z",transform:"translate(-83.17 -181.74) ".concat(e.data.percentage>0?"rotate(-180 122 241)":""),style:{fill:e.data.percentage>0?"green":"red"}}),Object(g.jsx)(f.a,{transform:"translate(62.85 64.75)",fontSize:24,fontWeight:400,y:3,children:"".concat(e.data.percentage,"%")}),Object(g.jsx)("text",{transform:"translate(19.1 131.86)",children:e.data.range.initial.getFullYear()}),Object(g.jsx)("text",{transform:"translate(166.19 128.6)",children:e.data.range.final.getFullYear()}),Object(g.jsx)(f.a,{transform:"translate(19.1 154.67)",fontWeight:800,children:"R$ ".concat(e.data.amount.initial,"}")}),Object(g.jsx)(f.a,{transform:"translate(166.19 152.06)",fontWeight:800,children:"R$ ".concat(e.data.amount.final)})]})]},t)}))]})}})})})]})}var M=function(){return Object(g.jsx)(o.a,{children:function(e){var t=e.width,n=e.height;return Object(g.jsx)(W,{width:t,height:n})}})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,106)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};c.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(M,{})}),document.getElementById("root")),Z()}},[[84,1,2]]]);
//# sourceMappingURL=main.a17eb741.chunk.js.map