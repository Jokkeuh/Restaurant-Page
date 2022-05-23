(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(81),o=n.n(r),i=n(645),a=n.n(i),d=n(667),s=n.n(d),c=new URL(n(863),n.b),l=new URL(n(18),n.b),p=new URL(n(759),n.b),u=new URL(n(833),n.b),b=new URL(n(62),n.b),m=new URL(n(659),n.b),h=a()(o()),g=s()(c),x=s()(l),f=s()(p),v=s()(u),A=s()(b),y=s()(m);h.push([e.id,'@font-face {\n    font-family: "myFont";\n    src: url('+g+');\n    font-weight: 600;\n    font-style: normal;\n}\n@font-face {\n    font-family: "myFont2" ;\n    src: url('+x+");\n    font-weight: 600;\n    font-style: normal;\n}\n\n\n.imgOne{\n    position: absolute;\n    border: 2px solid rgba(1, 20, 0, 0.411);\n    border-radius: 3%;\n    padding: 25px;\n    width: 200px;\n    height: 200px;\n    background-image: url("+f+");\n    background-size: 100%;\n    overflow: hidden;\n    z-index: 1;\n\n\n    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;\n    \n\n\n}\n.imgTwo{\n    position: absolute;\n    order: 5;\n    border: 2px solid black;\n    border-radius: 3%;\n    margin-left: 25%;\n    height: 150px;\n    width: 250px;\n    bottom: 10%;\n    background-image: url("+v+");\n    background-size: 100%;\n    background-repeat: no-repeat;\n    overflow: hidden;\n    z-index: 1;\n    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;\n}\n\n.container {\n    margin: -15px;\n    background-image: url("+A+');\n    background-size: cover;\n    font-family: "myFont2";\n    \n    background-repeat: no-repeat;\n    background-position-x: fixed;\n    background-position-y: fixed;\n}\n\n\n\n\n\n.contentPage1,\n.contentPage2,\n.contentPage3{\n    padding: 10px;\n    text-align: center;\n    display: flex;\n    flex-direction: column-reverse;\n    margin-left: auto;\n    margin-right: auto;\n    min-width: 300px;\n    width: 50%;\n    height: 125vh;\n    background-color: #e2d9c59f;\n    z-index: 0;\n    bottom: 0px;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n.viewScreen {\n    display: flex;\n    text-align: center;\n    width: 100%;\n    height: 65%;\n    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;\n\n    \n}\n\n.textPageOne{\n    order: 1;\n    display: inline;\n    overflow: hidden;\n    background-color: rgba(0, 0, 0, 0.507);\n    color: white;\n    float: left;\n    border-radius: 2%;\n    max-height: 10rem;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;\n}\n\n.paraPageOne{\n    padding: 5px;\n    text-align: right;\n    position: inherit;\n    font-size: 16px;\n    word-spacing: 2px;\n}\n\n\n.titleOnPageOne{\n    font-family: "myFont";\n    font-size: 80px;\n    font-weight: bolder;\n\n}\n\n.header{\n    z-index: 25;\n    display: flex;\n    top:  -5px;\n    position: fixed;\n    left: -5px;\n    width: 100%;\n    height: 125px;\n    border-radius: 2%;\n    z-index: 2;\n    background-color: #646262b6;\n    box-shadow: rgb(12, 51, 0) 0px 20px 30px -10px;\n    \n}\n\n.logo{\n    position: absolute;\n    top: 10px;\n    margin-left: 25px;\n    border: 2px solid black;\n    border-radius: 25%;\n    width: 100px;\n    height: 100px;\n    background-image: url('+y+");\n    background-size: 110%;\n    background-repeat: no-repeat;\n    background-position-x: 50% ;\n    background-position-y: 50% ;\n\n}\n\n\n\n.navTab{\n    \n    display: flex;\n    justify-content: center;\n    margin-left: auto;\n    margin-right: auto;\n    width: 300px;\n    height: 50px;\n    margin-top: 74px;\n    gap: 25px;\n    z-index: 25;\n}\n.navTab > button {\n\n    width: 50px;\n    height: 50px;\n    border: 1px solid  rgb(255, 255, 255);\n    \n}\n\n.navTab > div{\n    position: relative;\n    z-index: 25;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;text-align: center;\n    font-size: 20px;\n    border-top-left-radius: 25%;\n    border-top-right-radius: 25%;\n    border-bottom: 0px solid rgb(255, 255, 255);\n\n    \n\n}\n\n.homeBtn, .contactBtn, .menuBtn{\n\n    display: flex;\n    position: absolute;\n    top: 0px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: auto;\n    margin-bottom: auto;\n    /*border-style: none;*/\n    width: 80px;\n    height: 60px;\n    background: rgba(0, 0, 0, 0);\n    border-style: none;\n    z-index: 100;\n\n}\n.menuBtn{\n    \n\n}\n.contactBtn{\n    \n\n}\n\n.navHome{\n    width: 75px;\n    height: 50px;\n    border: 1px solid black;\n    background-color: rgb(5, 145, 0);\n    color: white;\n}\n\n\n\n.navMenu{\n    width: 75px;\n    height: 50px;\n    border: 1px solid black;\n    background-color: rgb(255, 255, 255);\n}\n\n\n.navContact{\n    width: 75px;\n    height: 50px;\n    border: 1px solid black;\n    background-color: rgb(179, 0, 0);\n    color: white;\n}\n\n\n\n\n\n.footer{\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    bottom: 0px;\n    width: 100%;\n    height: 3rem;\n    font-size: 12px;\n    background-color: #262906;\n    z-index: 3;\n    border-top-left-radius: 10%;\n    \n    gap: 150px;\n\n}\n\n.footerAdres{\n    width: 250px;\n    height: 25px;\n    flex-direction: row-reverse;\n    \n}\n\n.footerPhone{\n    width: 250px;\n    height: 25px;\n    flex-direction: row-reverse;\n\n\n}",""]);const w=h},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(a[s]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],d=0;d<e.length;d++){var s=e[d],c=r.base?s[0]+r.base:s[0],l=i[c]||0,p="".concat(c," ").concat(l);i[c]=l+1;var u=n(p),b={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(b);else{var m=o(b,r);r.byIndex=d,t.splice(d,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var d=n(i[a]);t[d].references--}for(var s=r(e,o),c=0;c<i.length;c++){var l=n(i[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},18:(e,t,n)=>{e.exports=n.p+"199f8081722487c0837a.otf"},863:(e,t,n)=>{e.exports=n.p+"c6eb7cf640af62acad8d.ttf"},759:(e,t,n)=>{e.exports=n.p+"27225797d3fa4760a8af.jpg"},62:(e,t,n)=>{e.exports=n.p+"a90248056ef224e7b455.jpg"},659:(e,t,n)=>{e.exports=n.p+"081c1b914d58edaa23bd.jpg"},833:(e,t,n)=>{e.exports=n.p+"f9abb1aa35f7e8ff1c16.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{const e=()=>{const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div"),d=document.createElement("div"),s=document.createElement("div"),c=document.createElement("div"),l=document.createElement("div"),p=document.createElement("div"),u=document.createElement("button"),b=document.createElement("button"),m=document.createElement("button"),h=document.createElement("div"),g=document.createElement("div"),x=document.createElement("div"),f=document.createElement("div"),v=document.createElement("div"),A=document.createElement("div"),y=document.createElement("div"),w=document.createElement("p");t.setAttribute("id","container"),t.setAttribute("class","container"),n.setAttribute("id","contentPage1"),n.setAttribute("class","contentPage1"),r.setAttribute("id","header"),r.setAttribute("class","header"),i.setAttribute("id","logo"),i.setAttribute("class","logo"),o.setAttribute("id","footer"),o.setAttribute("class","footer"),h.setAttribute("class","footerAdres"),g.setAttribute("class","footerPhone"),s.setAttribute("id","navTab"),s.setAttribute("class","navTab"),c.setAttribute("id","navHome"),c.setAttribute("class","navHome"),u.setAttribute("type","button"),u.setAttribute("id","homeBtn"),u.setAttribute("class","homeBtn"),l.setAttribute("id","navMenu"),l.setAttribute("class","navMenu"),b.setAttribute("id","menuBtn"),b.setAttribute("class","menuBtn"),p.setAttribute("id","navContact"),p.setAttribute("class","navContact"),m.setAttribute("id","contactBtn"),m.setAttribute("class","contactBtn"),a.setAttribute("id","imgOne"),a.setAttribute("class","imgOne"),d.setAttribute("id","imgTwo"),d.setAttribute("class","imgTwo"),x.setAttribute("id","viewScreen"),x.setAttribute("class","viewScreen"),f.setAttribute("id","textPageOne"),f.setAttribute("class","textPageOne"),w.setAttribute("id","paraPageOne"),w.setAttribute("class","paraPageOne"),v.setAttribute("id","titleOnPageOne"),v.setAttribute("class","titleOnPageOne"),A.setAttribute("id","aboutUs"),A.setAttribute("class","aboutUs"),y.setAttribute("id","hoursInfo"),y.setAttribute("class","hoursInfo"),document.body.appendChild(e),e.appendChild(t),t.appendChild(n),t.appendChild(r),t.appendChild(o),r.appendChild(i),r.appendChild(s),o.appendChild(h),o.appendChild(g),x.appendChild(f),f.appendChild(w),x.appendChild(A),x.appendChild(y),n.appendChild(x),n.appendChild(v),n.appendChild(a),n.appendChild(d),s.appendChild(c),s.appendChild(l),s.appendChild(p),c.innerText="Home",c.appendChild(u),l.innerText="Menu",l.appendChild(b),p.innerText="Contact",p.appendChild(m),h.innerText="Crackhouselane nr 344",g.innerText="GSM 032 494456923",v.innerText="Welcome to the Italian Taste!",w.innerText="The Italian Taste is transforming your dining experience. This much loved Italian restaurant situated in the heart of Surbiton now offers a wider variety of traditional authentic Italian cuisine and an improved selection of fine wines and cocktails.Our restaurant offers a warm relaxing ambience for an enjoyable dining experience. Our culinary chef’s are renowned for their passion in cooking Italian cuisine."};var t=n(379),r=n.n(t),o=n(795),i=n.n(o),a=n(569),d=n.n(a),s=n(565),c=n.n(s),l=n(216),p=n.n(l),u=n(589),b=n.n(u),m=n(426),h={};h.styleTagTransform=b(),h.setAttributes=c(),h.insert=d().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=p(),r()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals,console.log("Twerkt"),e(),(()=>{const t=document.getElementById("homeBtn"),n=document.getElementById("menuBtn"),r=document.getElementById("contactBtn");let o=!1,i=!1,a=!1;const d=()=>{const t=document.getElementById("header"),n=document.getElementById("contentPage1"),r=document.getElementById("contentPage2");document.getElementById("container"),!0===o&&(console.log("last check home"),t.style.boxShadow="rgb(12 51 0) 0px 20px 30px -10px",r.style.display="none",n.style.display="",e()),!0===i&&(console.log("last check menu"),t.style.boxShadow="rgb(255 255 255) 0px 20px 30px -10px",n.style.display="none",r.style.display="",(()=>{const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div"),d=document.createElement("div"),s=document.createElement("div"),c=document.createElement("button"),l=document.createElement("button"),p=document.createElement("button"),u=document.createElement("div"),b=document.createElement("div"),m=document.createElement("div"),h=document.createElement("div"),g=document.createElement("div");container.setAttribute("id","container"),container.setAttribute("class","container"),t.setAttribute("id","contentPage2"),t.setAttribute("class","contentPage2"),n.setAttribute("id","header"),n.setAttribute("class","header"),o.setAttribute("id","logo"),o.setAttribute("class","logo"),r.setAttribute("id","footer"),r.setAttribute("class","footer"),u.setAttribute("class","footerAdres"),b.setAttribute("class","footerPhone"),i.setAttribute("id","navTab"),i.setAttribute("class","navTab"),a.setAttribute("id","navHome"),a.setAttribute("class","navHome"),c.setAttribute("type","button"),c.setAttribute("id","homeBtn"),c.setAttribute("class","homeBtn"),d.setAttribute("id","navMenu"),d.setAttribute("class","navMenu"),l.setAttribute("id","menuBtn"),l.setAttribute("class","menuBtn"),s.setAttribute("id","navContact"),s.setAttribute("class","navContact"),p.setAttribute("id","contactBtn"),p.setAttribute("class","contactBtn"),m.setAttribute("id","viewScreen"),m.setAttribute("class","viewScreen"),h.setAttribute("id","aboutUs"),h.setAttribute("class","aboutUs"),g.setAttribute("id","hoursInfo"),g.setAttribute("class","hoursInfo"),document.body.appendChild(e),e.appendChild(container),container.appendChild(t),container.appendChild(n),container.appendChild(r),n.appendChild(o),n.appendChild(i),r.appendChild(u),r.appendChild(b),m.appendChild(h),m.appendChild(g),t.appendChild(m),i.appendChild(a),i.appendChild(d),i.appendChild(s),a.innerText="Home",a.appendChild(c),d.innerText="Menu",d.appendChild(l),s.innerText="Contact",s.appendChild(p)})()),!0===a&&(console.log("last check contact"),t.style.boxShadow="rgb(118 8 0) 0px 20px 30px -10px")};t.addEventListener("click",(()=>{o=!0,i=!1,a=!1,d()})),n.addEventListener("click",(()=>{o=!1,i=!0,a=!1,d()})),r.addEventListener("click",(()=>{o=!1,i=!1,a=!0,d()}))})()})()})();