(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>z});var o=t(81),r=t.n(o),i=t(645),a=t.n(i),d=t(667),p=t.n(d),s=new URL(t(863),t.b),c=new URL(t(18),t.b),l=new URL(t(583),t.b),u=new URL(t(759),t.b),b=new URL(t(833),t.b),m=new URL(t(62),t.b),g=new URL(t(174),t.b),x=new URL(t(13),t.b),h=new URL(t(768),t.b),f=new URL(t(584),t.b),v=new URL(t(659),t.b),w=a()(r()),y=p()(s),A=p()(c),C=p()(l),E=p()(u),k=p()(b),I=p()(m),T=p()(g),P=p()(x),L=p()(h),B=p()(f),O=p()(v);w.push([n.id,'@font-face {\n    font-family: "myFont";\n    src: url('+y+');\n    font-weight: 600;\n    font-style: normal;\n}\n@font-face {\n    font-family: "myFont2" ;\n    src: url('+A+');\n    font-weight: 600;\n    font-style: normal;\n}\n@font-face {\n    font-family: "myFont3";\n    src: url('+C+");\n    font-weight: 600;\n    font-style: normal;\n}\n\n*{\n    margin: 0px;\n}\n\n\n.imgOne{\n    position: absolute;\n    border: 2px solid rgba(1, 20, 0, 0.411);\n    border-radius: 3%;\n    padding: 25px;\n    width: 200px;\n    height: 200px;\n    background-image: url("+E+");\n    background-size: 100%;\n    overflow: hidden;\n    z-index: 1;\n\n\n    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;\n    \n\n\n}\n.imgTwo{\n    position: absolute;\n    border: 2px solid black;\n    border-radius: 3%;\n    margin-left: 25%;\n    height: 150px;\n    width: 250px;\n    bottom: 0px;\n    background-image: url("+k+");\n    background-size: 100%;\n    background-repeat: no-repeat;\n    overflow: hidden;\n    z-index: 1;\n    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;\n}\n\n.content{\n\n    max-width: 100%;  \n    margin: 0px;\n    \n    background-image: url("+I+');\n    background-size: cover;\n    font-family: "myFont2";\n    \n    background-repeat: no-repeat;\n    background-position-x: fixed;\n    background-position-y: fixed;\n    \n}\n\n\n/*form, formInput, nameInput, phoneInput, questionInput,submitBtn*/\n\n.formInput{\n    font-size: 30px;\n    display: grid;\n    grid-template-rows: 95px 95px;\n    \n    margin: 0px;\n    background-color: rgba(97, 26, 26, 0.068);\n    height: 100vh;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n    \n    \n}\n\n.submitBtn{\n    border-radius: 15px;\n    height: 50px;\n    max-width: 150px;\n    min-width: 100px;\n    position: absolute;\n    bottom: 10%;\n    right: 25%;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n}\n\n.formInput label{\n    \n    width: 50%;\n    height: 50px ;\n    \n}\n\n.nameInput,\n.phoneInput,\n.questionInput,\n.emailInput{\n    \n    position: absolute;\n    width: 80%;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n    \n}\n.nameInput{\n    right: 0px;\n    top: 5%;\n    background-color: rgba(128, 128, 128, 0.521);\n\n}\n.emailInput{\n    right: 0px;\n    top: 17.5%;\n    background-color: rgba(128, 128, 128, 0.521);\n}\n.phoneInput{\n    right: 0px;\n    top:30%;\n    background-color: rgba(128, 128, 128, 0.521);\n\n}\n.questionInput{\n    right: 0px;\n    top: 45%;\n    height: 50vh;\n    width: 95%;\n    background-color: rgba(128, 128, 128, 0.521);\n}\n\n\n\n\n.menuContainer{\n    position: absolute;\n    width: 50%;\n    height: 150vh;\n    border: 2px solid rgba(230, 223, 223, 0.452);\n    background-image: url('+T+');\n    background-size: 100%;\n    background-repeat: no-repeat;\n    z-index: 1;\n\n\n}\n.contactEmployeeContainer{\n    \n    position: absolute;\n    text-align: end;\n    font-family: "myFont3";\n    justify-content: end;\n    bottom: -50%;\n    width: 50%;\n    height: 25%;\n    \n}\n\n.contactEmployee{\n    text-align: center;\n    justify-content: center;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 100px;\n    width: 100;\n    height: 50%;\n}\n\n.listEmployee{\n\n\n}\n\n\n.formContainer{\n    position: absolute;\n    top: 15%;\n    \n    width: 50%;\n    height: 100%;\n}\n\n.titleOnPageTwo{\n    justify-content: center;\n    width: 100%;\n    position: absolute;\n    font-size: 55px;\n    font-family: "myFont";\n    color: black;\n    top:10%;\n\n}\n\n.imagesP2{\n    display: flex;\n    gap: 25px   ;\n    border: 3px solid rgba(0, 0, 0, 0.349);\n    position: absolute;\n    bottom: 31.5vh;\n    border-radius: 2%;\n    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;\n\n    width: 100%;\n    height:12vh;\n}\n\n.imgOneP2{\n    \n    height: 100%;\n    width: 50%;\n    background-image: url('+P+");\n    background-size: 100%;\n    background-position: bottom;\n    background-repeat: no-repeat;\n    border-right: 3px solid rgba(70, 70, 70, 0.349);\n    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;\n    \n    \n    \n\n}\n.imgTwoP2{\n    \n    height: 100%;\n    width: 50%;\n    background-image: url("+L+");\n    background-size: 100%;\n    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;    \n    border-left: 3px solid rgba(70, 70, 70, 0.349);\n    background-repeat: no-repeat;\n    background-position: bottom;\n    border-right: 3px solid rgba(70, 70, 70, 0.349);\n}\n.imgThreeP2{\n    height: 100%;\n    width: 50%;\n    background-image: url("+B+');\n    background-size: 100%;\n    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;\n    background-repeat: no-repeat;\n    background-position: bottom;\n    border-left: 3px solid rgba(70, 70, 70, 0.349);\n\n}\n\n\n\n\n\n#contentPage1,\n#contentPage2,\n#contentPage3{\n    padding: 10px;\n    text-align: center;\n    display: flex;\n    flex-direction: column-reverse;\n    margin-left: auto;\n    margin-right: auto;\n    min-width: 300px;\n    width: 50%;\n    height: 150vh;\n    background-color: #e2d9c59f;\n    z-index: 0;\n    bottom: 0px;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n.viewScreen {\n    display: flex;\n    text-align: center;\n    width: 100%;\n    height: 65%;\n    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;\n}\n\n.textPageOne{\n    order: 1;\n    display: inline;\n    overflow: hidden;\n    background-color: rgba(0, 0, 0, 0.507);\n    color: white;\n    float: left;\n    border-radius: 2%;\n    max-height: 10rem;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;\n}\n\n.paraPageOne{\n    padding: 5px;\n    text-align: right;\n    position: inherit;\n    font-size: 16px;\n    word-spacing: 2px;\n}\n\n\n.titleOnPageOne{\n    font-family: "myFont";\n    font-size: 80px;\n    font-weight: bolder;\n\n}\n\n.header{\n    z-index: 25;\n    display: flex;\n    top:  -5px;\n    position: fixed;\n    left: -5px;\n    width: 100%;\n    height: 125px;\n    border-radius: 2%;\n    z-index: 2;\n    background-color: #646262b6;\n    box-shadow: rgb(12, 51, 0) 0px 20px 30px -10px;\n    \n}\n\n.logo{\n    position: absolute;\n    top: 10px;\n    margin-left: 25px;\n    border: 2px solid black;\n    border-radius: 25%;\n    width: 100px;\n    height: 100px;\n    background-image: url('+O+");\n    background-size: 110%;\n    background-repeat: no-repeat;\n    background-position-x: 50% ;\n    background-position-y: 50% ;\n\n}\n\n\n\n.navTab{\n    \n    display: flex;\n    justify-content: center;\n    margin-left: auto;\n    margin-right: auto;\n    width: 300px;\n    height: 50px;\n    margin-top: 74px;\n    gap: 25px;\n    z-index: 25;\n}\n.navTab > button {\n\n    width: 50px;\n    height: 50px;\n    border: 1px solid  rgb(255, 255, 255);\n    \n}\n\n.navTab > div{\n    position: relative;\n    z-index: 25;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;text-align: center;\n    font-size: 20px;\n    border-top-left-radius: 25%;\n    border-top-right-radius: 25%;\n    border-bottom: 0px solid rgb(255, 255, 255);\n\n    \n\n}\n\n.homeBtn, .contactBtn, .menuBtn{\n\n    display: flex;\n    position: absolute;\n    top: 0px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: auto;\n    margin-bottom: auto;\n    /*border-style: none;*/\n    width: 80px;\n    height: 60px;\n    background: rgba(0, 0, 0, 0);\n    border-style: none;\n    z-index: 100;\n\n}\n.menuBtn{\n    \n\n}\n.contactBtn{\n    \n\n}\n\n.navHome{\n    width: 75px;\n    height: 50px;\n    border: 1px solid black;\n    background-color: rgb(5, 145, 0);\n    color: white;\n}\n\n\n\n.navMenu{\n    width: 75px;\n    height: 50px;\n    border: 1px solid black;\n    background-color: rgb(255, 255, 255);\n}\n\n\n.navContact{\n    width: 75px;\n    height: 50px;\n    border: 1px solid black;\n    background-color: rgb(179, 0, 0);\n    color: white;\n}\n\n\n\n\n\n.footer{\n    position: fixed;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    bottom: 0%;\n    width: 100%;\n    height: 3rem;\n    font-size: 12px;\n    background-color: #01200b6c;\n    z-index: 3;\n    border-top-left-radius: 10%;\n    \n    gap: 150px;\n\n}\n\n.footerAdres{\n    width: 250px;\n    height: 25px;\n    flex-direction: row-reverse;\n    \n}\n\n.footerPhone{\n    width: 250px;\n    height: 25px;\n    flex-direction: row-reverse;\n\n\n}",""]);const z=w},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var d=0;d<this.length;d++){var p=this[d][0];null!=p&&(a[p]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);o&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),e.push(c))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],d=0;d<n.length;d++){var p=n[d],s=o.base?p[0]+o.base:p[0],c=i[s]||0,l="".concat(s," ").concat(c);i[s]=c+1;var u=t(l),b={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==u)e[u].references++,e[u].updater(b);else{var m=r(b,o);o.byIndex=d,e.splice(d,0,{identifier:l,updater:m,references:1})}a.push(l)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var d=t(i[a]);e[d].references--}for(var p=o(n,r),s=0;s<i.length;s++){var c=t(i[s]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}i=p}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},18:(n,e,t)=>{n.exports=t.p+"199f8081722487c0837a.otf"},863:(n,e,t)=>{n.exports=t.p+"c6eb7cf640af62acad8d.ttf"},583:(n,e,t)=>{n.exports=t.p+"2836e8bfc7ead477e8e0.ttf"},13:(n,e,t)=>{n.exports=t.p+"d00d5b0af654af6f84c9.jpg"},584:(n,e,t)=>{n.exports=t.p+"f42a196c3c8f687bb149.jpg"},768:(n,e,t)=>{n.exports=t.p+"df660e85b6ec0b64df02.jpg"},759:(n,e,t)=>{n.exports=t.p+"27225797d3fa4760a8af.jpg"},62:(n,e,t)=>{n.exports=t.p+"a90248056ef224e7b455.jpg"},174:(n,e,t)=>{n.exports=t.p+"fc1d38e1e4bef0f90aab.png"},659:(n,e,t)=>{n.exports=t.p+"081c1b914d58edaa23bd.jpg"},833:(n,e,t)=>{n.exports=t.p+"f9abb1aa35f7e8ff1c16.jpg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=document.getElementById("content"),e=document.createElement("div");e.setAttribute("class","fillIn"),e.setAttribute("id","fillIn");const o=()=>{const t=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div"),d=document.createElement("div"),p=document.createElement("p");r.setAttribute("id","contentPage1"),r.setAttribute("class","contentPage"),t.setAttribute("id","imgOne"),t.setAttribute("class","imgOne"),o.setAttribute("id","imgTwo"),o.setAttribute("class","imgTwo"),i.setAttribute("id","viewScreen"),i.setAttribute("class","viewScreen"),a.setAttribute("id","textPageOne"),a.setAttribute("class","textPageOne"),p.setAttribute("id","paraPageOne"),p.setAttribute("class","paraPageOne"),d.setAttribute("id","titleOnPageOne"),d.setAttribute("class","titleOnPageOne"),document.body.appendChild(n),n.appendChild(e),e.appendChild(r),i.appendChild(a),a.appendChild(p),r.appendChild(i),r.appendChild(d),r.appendChild(t),r.appendChild(o),d.innerText="Welcome to the Italian Taste!",p.innerText="The Italian Taste is transforming your dining experience. This much loved Italian restaurant situated in the heart of Surbiton now offers a wider variety of traditional authentic Italian cuisine and an improved selection of fine wines and cocktails.Our restaurant offers a warm relaxing ambience for an enjoyable dining experience. Our culinary chef’s are renowned for their passion in cooking Italian cuisine."};var r=t(379),i=t.n(r),a=t(795),d=t.n(a),p=t(569),s=t.n(p),c=t(565),l=t.n(c),u=t(216),b=t.n(u),m=t(589),g=t.n(m),x=t(426),h={};h.styleTagTransform=g(),h.setAttributes=l(),h.insert=s().bind(null,"head"),h.domAPI=d(),h.insertStyleElement=b(),i()(x.Z,h),x.Z&&x.Z.locals&&x.Z.locals,o(),(()=>{const n=document.getElementById("content"),e=document.createElement("div"),t=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div"),d=document.createElement("button"),p=document.createElement("button"),s=document.createElement("button");e.setAttribute("id","header"),e.setAttribute("class","header"),t.setAttribute("id","logo"),t.setAttribute("class","logo"),o.setAttribute("id","navTab"),o.setAttribute("class","navTab"),r.setAttribute("id","navHome"),r.setAttribute("class","navHome"),d.setAttribute("type","button"),d.setAttribute("id","homeBtn"),d.setAttribute("class","homeBtn"),i.setAttribute("id","navMenu"),i.setAttribute("class","navMenu"),p.setAttribute("id","menuBtn"),p.setAttribute("class","menuBtn"),a.setAttribute("id","navContact"),a.setAttribute("class","navContact"),s.setAttribute("id","contactBtn"),s.setAttribute("class","contactBtn"),n.appendChild(e),e.appendChild(t),e.appendChild(o),o.appendChild(r),o.appendChild(i),o.appendChild(a),r.appendChild(d),i.appendChild(p),a.appendChild(s),r.innerText="Home",r.appendChild(d),i.innerText="Menu",i.appendChild(p),a.innerText="Contact",a.appendChild(s)})(),(()=>{const n=document.createElement("div"),e=document.createElement("div"),t=document.createElement("div"),o=document.getElementById("content");n.setAttribute("id","footer"),n.setAttribute("class","footer"),e.setAttribute("class","footerAdres"),t.setAttribute("class","footerPhone"),document.body.appendChild(o),o.appendChild(n),header.appendChild(logo),header.appendChild(navTab),n.appendChild(e),n.appendChild(t),e.innerText="CRACKHOUSELANE 3420",t.innerText="reach us at 555-78420"})();const f=document.getElementById("fillIn"),v=document.querySelectorAll("contentPage"),w=()=>{f.replaceChildren()};(()=>{const t=document.getElementById("homeBtn"),r=document.getElementById("menuBtn"),i=document.getElementById("contactBtn");let a=!1,d=!1,p=!1;const s=()=>{const n=document.getElementById("header");!0===a&&(console.log("last check home"),n.style.boxShadow="rgb(12 51 0) 0px 20px 30px -10px"),!0===d&&(console.log("last check menu"),n.style.boxShadow="rgb(255 255 255) 0px 20px 30px -10px"),!0===p&&(console.log("last check contact"),n.style.boxShadow="rgb(118 8 0) 0px 20px 30px -10px")};t.addEventListener("click",(()=>{w(),a=!0,d=!1,p=!1,o(),s(),console.log(f)})),r.addEventListener("click",(()=>{w(),a=!1,d=!0,p=!1,s(),(()=>{const n=document.getElementById("content"),t=document.createElement("div");n.appendChild(e);const o=document.createElement("div");o.setAttribute("id","menuContainer"),o.setAttribute("class","menuContainer");const r=document.createElement("div"),i=document.createElement("p");r.setAttribute("id","menuTitle"),r.setAttribute("class","menuTitle"),i.setAttribute("id","titleOnPageTwo"),i.setAttribute("class","titleOnPageTwo");const a=document.createElement("div"),d=document.createElement("div"),p=document.createElement("div"),s=document.createElement("div");s.setAttribute("id","imagesP2"),s.setAttribute("class","imagesP2"),a.setAttribute("id","imgOneP2"),a.setAttribute("class","imgOneP2"),d.setAttribute("id","imgTwoP2"),d.setAttribute("class","imgTwoP2"),p.setAttribute("id","imgThreeP2"),p.setAttribute("class","imgThreeP2"),t.setAttribute("id","contentPage2"),t.setAttribute("class","contentPage"),e.appendChild(t),t.appendChild(o),o.appendChild(r),o.appendChild(r),r.appendChild(i),r.appendChild(i),o.appendChild(s),s.appendChild(a),s.appendChild(d),s.appendChild(p),i.innerText="MENU"})()})),i.addEventListener("click",(()=>{w(),a=!1,d=!1,p=!0,s(),(()=>{n.appendChild(e);const t=document.createElement("div");t.setAttribute("class","contactEmployeeContainer"),t.setAttribute("id","contactEmployeeContainer");const o=document.createElement("div");o.setAttribute("class","contactEmployee"),o.setAttribute("id","contactEmployee");const r=document.createElement("lu");r.setAttribute("class","ListEmployee"),r.setAttribute("id","ListEmployee");const i=document.createElement("div");i.setAttribute("class","formContainer"),i.setAttribute("id","formContainer");const a=document.createElement("form");a.setAttribute("class","form"),a.setAttribute("id","form");const d=document.createElement("div");d.setAttribute("class","formInput"),d.setAttribute("id","formInput");const p=document.createElement("input");p.setAttribute("class","nameInput"),p.setAttribute("id","nameInput");const s=document.createElement("input");s.setAttribute("id","emailInput"),s.setAttribute("class","emailInput"),s.setAttribute("type","email");const c=document.createElement("input");c.setAttribute("class","phoneInput"),c.setAttribute("id","phoneInput"),c.setAttribute("type","phone");const l=document.createElement("Input");l.setAttribute("class","questionInput"),l.setAttribute("id","questionInput"),l.setAttribute("type","text");const u=document.createElement("button");u.setAttribute("class","submitBtn"),u.setAttribute("id","submitBtn"),u.addEventListener("click",(()=>{window.alert("Thanks for contacting us!, we'll let you know soon")}));const b=document.createElement("label");b.setAttribute("for","nameInput"),b.innerHTML="name";const m=document.createElement("label");m.setAttribute("for","emailInput"),m.innerHTML="email";const g=document.createElement("label");g.setAttribute("for","phoneInput"),g.innerHTML="phone";const x=document.createElement("label");x.setAttribute("for","questionInput"),x.innerHTML="Ask us a question!";let h=document.createElement("p");const f=document.createElement("div");f.setAttribute("id","contentPage3"),f.setAttribute("class","contentPage"),console.log(n),console.log(f),document.body.appendChild(n),n.appendChild(e),e.appendChild(f),e.setAttribute("id","fillInContainer"),f.appendChild(i),f.appendChild(t),i.appendChild(a),t.appendChild(o),o.appendChild(r),a.appendChild(d),d.appendChild(b),d.appendChild(m),d.appendChild(g),d.appendChild(x),d.appendChild(p),d.appendChild(s),d.appendChild(c),d.appendChild(l),d.appendChild(u),(()=>{const n=document.createElement("li");n.innerText="DikkieZjaka @ totallyLegit.com";const e=document.createElement("li");e.textContent="JorenDom @ totallyLegit.com";const t=document.createElement("li");t.textContent="JokkeuhTristan @ totallyLegitreally.com",h=[n,e,t],p.innerText="Name",u.innerHTML="Send";for(let n=0;n<h.length;n++)r.appendChild(h[n])})()})(),console.log(v)}))})()})()})();