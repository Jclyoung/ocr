(this.webpackJsonpocr=this.webpackJsonpocr||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),s=n(5),i=n.n(s),o=(n(12),n(4)),u=n(3),j=n.n(u),l=n(6),g=(n(14),window.Tesseract),d=Object(c.jsx)("img",{className:"img",src:"assets/card1.jpg",alt:""});var f=function(){var e=g.createWorker({logger:function(e){return console.log(e)}}),t=function(){var t=Object(l.a)(j.a.mark((function t(){var n,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.load();case 2:return t.next=4,e.loadLanguage("eng");case 4:return t.next=6,e.initialize("eng");case 6:return t.next=8,e.recognize(b||"assets/card1.jpg");case 8:n=t.sent,c=n.data.text,i(c);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n=Object(a.useState)("Scanning Image..."),r=Object(o.a)(n,2),s=r[0],i=r[1],u=Object(a.useState)(""),f=Object(o.a)(u,2),b=f[0],x=f[1],m=function(e){e.image;return Object(c.jsx)("img",{className:"img",src:URL.createObjectURL(b),alt:""})};return Object(a.useEffect)((function(){t()})),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("div",{className:"img",children:[Object(c.jsx)("h1",{children:"image to test"}),"a",Object(c.jsx)("form",{children:Object(c.jsx)("input",{type:"file",name:"file",onChange:function(e){console.log("event",e.target.files[0]),x(e.target.files[0]),console.log("new state: ",b),e.preventDefault()}})}),b?Object(c.jsx)(m,{image:b}):d]}),Object(c.jsxs)("div",{className:"text-main",children:[Object(c.jsx)("h1",{children:"new rendered text"}),Object(c.jsx)("p",{children:s})]})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.37c5e242.chunk.js.map