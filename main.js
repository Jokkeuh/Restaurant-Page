(()=>{"use strict";var n,e,t,r,o,i,a,d,s,c,p,l,u,b,x={426:(n,e,t)=>{t.d(e,{Z:()=>A});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),d=t(667),s=t.n(d),c=new URL(t(863),t.b),p=new URL(t(18),t.b),l=new URL(t(759),t.b),u=new URL(t(833),t.b),b=new URL(t(62),t.b),x=new URL(t(659),t.b),h=a()(o()),g=s()(c),f=s()(p),m=s()(l),v=s()(u),w=s()(b),y=s()(x);h.push([n.id,'@font-face {\n    font-family: "myFont";\n    src: url('+g+');\n    font-weight: 600;\n    font-style: normal;\n}\n@font-face {\n    font-family: "myFont2" ;\n    src: url('+f+");\n    font-weight: 600;\n    font-style: normal;\n}\n\n\n.imgOne{\n    position: absolute;\n    border: 2px solid rgba(1, 20, 0, 0.411);\n    border-radius: 3%;\n    padding: 25px;\n    width: 200px;\n    height: 200px;\n    background-image: url("+m+");\n    background-size: 100%;\n    overflow: hidden;\n    z-index: 1;\n\n\n    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;\n    \n\n\n}\n.imgTwo{\n    position: absolute;\n    order: 5;\n    border: 2px solid black;\n    border-radius: 3%;\n    margin-left: 25%;\n    height: 150px;\n    width: 250px;\n    bottom: 10%;\n    background-image: url("+v+");\n    background-size: 100%;\n    background-repeat: no-repeat;\n    overflow: hidden;\n    z-index: 1;\n    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;\n}\n\n.container {\n    margin: -15px;\n    background-image: url("+w+');\n    background-size: cover;\n    font-family: "myFont2";\n    \n    background-repeat: no-repeat;\n    background-position-x: fixed;\n    background-position-y: fixed;\n}\n\n\n\n\n\n.contentPage1{\n    padding: 10px;\n    text-align: center;\n    display: flex;\n    flex-direction: column-reverse;\n    margin-left: auto;\n    margin-right: auto;\n    min-width: 300px;\n    width: 50%;\n    height: 125vh;\n    background-color: #e2d9c59f;\n    z-index: 0;\n    bottom: 0px;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n.viewScreen {\n    display: flex;\n    text-align: center;\n    width: 100%;\n    height: 65%;\n    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;\n\n    \n}\n\n.textPageOne{\n    order: 1;\n    display: inline;\n    overflow: hidden;\n    background-color: rgba(0, 0, 0, 0.507);\n    color: white;\n    float: left;\n    border-radius: 2%;\n    max-height: 10rem;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;\n}\n\n.paraPageOne{\n    padding: 5px;\n    text-align: right;\n    position: inherit;\n    font-size: 16px;\n    word-spacing: 2px;\n}\n\n\n.titleOnPageOne{\n    font-family: "myFont";\n    font-size: 80px;\n    font-weight: bolder;\n\n}\n\n.header{\n    z-index: 25;\n    display: flex;\n    top:  -5px;\n    position: fixed;\n    left: -5px;\n    width: 100%;\n    height: 125px;\n    border-radius: 2%;\n    z-index: 2;\n    background-color: #646262b6;\n    box-shadow: rgb(12, 51, 0) 0px 20px 30px -10px;\n    \n}\n\n.logo{\n    position: absolute;\n    top: 10px;\n    margin-left: 25px;\n    border: 2px solid black;\n    border-radius: 25%;\n    width: 100px;\n    height: 100px;\n    background-image: url('+y+");\n    background-size: 110%;\n    background-repeat: no-repeat;\n    background-position-x: 50% ;\n    background-position-y: 50% ;\n\n}\n\n\n\n.navTab{\n    \n    display: flex;\n    justify-content: center;\n    margin-left: auto;\n    margin-right: auto;\n    width: 300px;\n    height: 50px;\n    margin-top: 74px;\n    gap: 25px;\n    z-index: 25;\n}\n.navTab > button {\n\n    width: 50px;\n    height: 50px;\n    border: 1px solid  rgb(255, 255, 255);\n    \n}\n\n.navTab > div{\n    position: relative;\n    z-index: 25;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;text-align: center;\n    font-size: 20px;\n    border-top-left-radius: 25%;\n    border-top-right-radius: 25%;\n    border-bottom: 0px solid rgb(255, 255, 255);\n\n    \n\n}\n\n.homeBtn, .contactBtn, .menuBtn{\n\n    display: flex;\n    position: absolute;\n    top: 0px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: auto;\n    margin-bottom: auto;\n    /*border-style: none;*/\n    width: 80px;\n    height: 60px;\n    background: rgba(0, 0, 0, 0);\n    border-style: none;\n\n}\n.menuBtn{\n    \n\n}\n.contactBtn{\n    \n\n}\n\n.navHome{\n    width: 75px;\n    height: 50px;\n    border: 1px solid black;\n    background-color: rgb(5, 145, 0);\n    color: white;\n}\n\n\n\n.navMenu{\n    width: 75px;\n    height: 50px;\n    border: 1px solid black;\n    background-color: rgb(255, 255, 255);\n}\n\n\n.navContact{\n    width: 75px;\n    height: 50px;\n    border: 1px solid black;\n    background-color: rgb(179, 0, 0);\n    color: white;\n}\n\n\n\n\n\n.footer{\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    bottom: 0px;\n    width: 100%;\n    height: 3rem;\n    font-size: 12px;\n    background-color: #262906;\n    z-index: 3;\n    border-top-left-radius: 10%;\n    \n    gap: 150px;\n\n}\n\n.footerAdres{\n    width: 250px;\n    height: 25px;\n    flex-direction: row-reverse;\n    \n}\n\n.footerPhone{\n    width: 250px;\n    height: 25px;\n    flex-direction: row-reverse;\n\n\n}",""]);const A=h},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(a[s]=!0)}for(var c=0;c<n.length;c++){var p=[].concat(n[c]);r&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],d=0;d<n.length;d++){var s=n[d],c=r.base?s[0]+r.base:s[0],p=i[c]||0,l="".concat(c," ").concat(p);i[c]=p+1;var u=t(l),b={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(b);else{var x=o(b,r);r.byIndex=d,e.splice(d,0,{identifier:l,updater:x,references:1})}a.push(l)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var d=t(i[a]);e[d].references--}for(var s=r(n,o),c=0;c<i.length;c++){var p=t(i[c]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},18:(n,e,t)=>{n.exports=t.p+"199f8081722487c0837a.otf"},863:(n,e,t)=>{n.exports=t.p+"c6eb7cf640af62acad8d.ttf"},759:(n,e,t)=>{n.exports=t.p+"27225797d3fa4760a8af.jpg"},62:(n,e,t)=>{n.exports=t.p+"a90248056ef224e7b455.jpg"},659:(n,e,t)=>{n.exports=t.p+"081c1b914d58edaa23bd.jpg"},833:(n,e,t)=>{n.exports=t.p+"f9abb1aa35f7e8ff1c16.jpg"}},h={};function g(n){var e=h[n];if(void 0!==e)return e.exports;var t=h[n]={id:n,exports:{}};return x[n](t,t.exports,g),t.exports}g.m=x,g.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return g.d(e,{a:e}),e},g.d=(n,e)=>{for(var t in e)g.o(e,t)&&!g.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),g.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;g.g.importScripts&&(n=g.g.location+"");var e=g.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=n})(),g.b=document.baseURI||self.location.href,g.nc=void 0,n=g(379),e=g.n(n),t=g(795),r=g.n(t),o=g(569),i=g.n(o),a=g(565),d=g.n(a),s=g(216),c=g.n(s),p=g(589),l=g.n(p),u=g(426),(b={}).styleTagTransform=l(),b.setAttributes=d(),b.insert=i().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=c(),e()(u.Z,b),u.Z&&u.Z.locals&&u.Z.locals,console.log("Twerkt"),(()=>{const n=document.getElementById("content"),e=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div"),d=document.createElement("div"),s=document.createElement("div"),c=document.createElement("div"),p=document.createElement("div"),l=document.createElement("div"),u=document.createElement("button"),b=document.createElement("button"),x=document.createElement("button"),h=document.createElement("div"),g=document.createElement("div"),f=document.createElement("div"),m=document.createElement("div"),v=document.createElement("div"),w=document.createElement("div"),y=document.createElement("div"),A=document.createElement("p");let k=!1,C=!1,E=!1;const T=()=>{const n=document.getElementById("header");!0===k&&(console.log("last check home"),n.style.boxShadow="rgb(12 51 0) 0px 20px 30px -10px"),!0===C&&(console.log("last check menu"),n.style.boxShadow="rgb(255 255 255) 0px 20px 30px -10px"),!0===E&&(console.log("last check contact"),n.style.boxShadow="rgb(118 8 0) 0px 20px 30px -10px")};e.setAttribute("id","container"),e.setAttribute("class","container"),t.setAttribute("id","contentPage1"),t.setAttribute("class","contentPage1"),r.setAttribute("id","header"),r.setAttribute("class","header"),i.setAttribute("id","logo"),i.setAttribute("class","logo"),o.setAttribute("id","footer"),o.setAttribute("class","footer"),h.setAttribute("class","footerAdres"),g.setAttribute("class","footerPhone"),s.setAttribute("id","navTab"),s.setAttribute("class","navTab"),c.setAttribute("id","navHome"),c.setAttribute("class","navHome"),u.setAttribute("type","button"),u.setAttribute("id","homeBtn"),u.setAttribute("class","homeBtn"),u.addEventListener("click",(()=>{k=!0,C=!1,E=!1,T()})),p.setAttribute("id","navMenu"),p.setAttribute("class","navMenu"),b.setAttribute("id","menuBtn"),b.setAttribute("class","menuBtn"),b.addEventListener("click",(()=>{k=!1,C=!0,E=!1,T()})),l.setAttribute("id","navContact"),l.setAttribute("class","navContact"),x.setAttribute("id","contactBtn"),x.setAttribute("class","contactBtn"),x.addEventListener("click",(()=>{k=!1,C=!1,E=!0,T()})),a.setAttribute("id","imgOne"),a.setAttribute("class","imgOne"),d.setAttribute("id","imgTwo"),d.setAttribute("class","imgTwo"),f.setAttribute("id","viewScreen"),f.setAttribute("class","viewScreen"),m.setAttribute("id","textPageOne"),m.setAttribute("class","textPageOne"),A.setAttribute("id","paraPageOne"),A.setAttribute("class","paraPageOne"),v.setAttribute("id","titleOnPageOne"),v.setAttribute("class","titleOnPageOne"),w.setAttribute("id","aboutUs"),w.setAttribute("class","aboutUs"),y.setAttribute("id","hoursInfo"),y.setAttribute("class","hoursInfo"),console.log("runrun"),document.body.appendChild(n),n.appendChild(e),e.appendChild(t),e.appendChild(r),e.appendChild(o),r.appendChild(i),r.appendChild(s),o.appendChild(h),o.appendChild(g),f.appendChild(m),m.appendChild(A),f.appendChild(w),f.appendChild(y),t.appendChild(f),t.appendChild(v),t.appendChild(a),t.appendChild(d),s.appendChild(c),s.appendChild(p),s.appendChild(l),c.innerText="Home",c.appendChild(u),p.innerText="Menu",p.appendChild(b),l.innerText="Contact",l.appendChild(x),h.innerText="Crackhouselane nr 344",g.innerText="GSM 032 494456923",v.innerText="Welcome to the Italian Taste!",A.innerText="The Italian Taste is transforming your dining experience. This much loved Italian restaurant situated in the heart of Surbiton now offers a wider variety of traditional authentic Italian cuisine and an improved selection of fine wines and cocktails.Our restaurant offers a warm relaxing ambience for an enjoyable dining experience. Our culinary chef’s are renowned for their passion in cooking Italian cuisine."})()})();