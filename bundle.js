(()=>{"use strict";var e={679:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(81),o=n.n(i),r=n(645),a=n.n(r)()(o());a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans&family=Poiret+One&family=Roboto&display=swap);"]),a.push([e.id,'@keyframes title-background{0%{transform:scale(100%)}100%{transform:scale(650%)}}*{box-sizing:border-box;margin:0;padding:0}body{font-family:"Open Sans",sans-serif;text-align:center;height:100vh;background:repeating-linear-gradient(45deg, #e4ecf1 0px, #e4ecf1 10px, #e0e9ef 10px, #e0e9ef 40px)}h1,h2{font-family:"Poiret One",cursive;color:rgba(34,51,104,.9)}h1{font-size:32px;background:linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #fff 50%, rgba(255, 255, 255, 0) 100%);padding:.1em}@media screen and (min-width: 768px){h1{font-size:38px}}h2{font-size:24px;background:linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.6823529412) 50%, rgba(255, 255, 255, 0) 100%);padding-bottom:.3em}@media screen and (min-width: 768px){h2{font-size:30px}}a{text-decoration:none;color:rgba(34,51,104,.9)}.container{max-width:1440px;margin:auto}header{display:flex;flex-direction:column;padding:20px}@media screen and (min-width: 768px){header{padding-top:40px}}ul{display:inline-flex;justify-content:center;align-items:center;flex-wrap:wrap;list-style-type:none}ul li{display:flex;justify-content:space-between;flex-direction:column;background-color:#fff;width:300px;height:220px;box-shadow:0 0 20px rgba(0,0,0,.1);border-radius:10px;overflow:hidden;margin:10px 25px 20px}@media screen and (min-width: 768px){ul li{transform:scale(110%);margin:20px 35px 30px}}ul li .live-link{width:100%;height:84%;display:inline-flex;flex-direction:column;justify-content:center;position:relative}ul li .live-link img{transition:500ms}ul li .live-link h3{font-family:"Roboto",sans-serif;display:flex;align-items:center;justify-content:center;position:absolute;bottom:0;width:300px;height:35px;z-index:3;font-weight:400;transition:500ms;padding-bottom:3px;background:rgba(255,255,255,.7294117647)}ul li .live-link:hover img{transform:scale(110%)}ul li .live-link:hover h3{overflow:hidden}ul li .live-link:hover h3::before{content:"";left:43%;position:absolute;background:rgba(224,229,245,.9);width:50px;height:50px;animation:title-background 500ms forwards;z-index:-1}ul li .code-link{bottom:0;display:flex;gap:7px;justify-content:center;background:#afc4e4;align-items:center;height:35px;transition:300ms;z-index:5;overflow:hidden;position:relative}ul li .code-link:hover{background-color:rgba(90,117,201,.9);overflow:hidden;color:#fff}',""]);const l=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(a[s]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);i&&a[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var r={},a=[],l=0;l<e.length;l++){var s=e[l],c=i.base?s[0]+i.base:s[0],d=r[c]||0,p="".concat(c," ").concat(d);r[c]=d+1;var f=n(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)t[f].references++,t[f].updater(u);else{var h=o(u,i);i.byIndex=l,t.splice(l,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var r=i(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var l=n(r[a]);t[l].references--}for(var s=i(e,o),c=0;c<r.length;c++){var d=n(r[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=s}}},569:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,o&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={id:i,exports:{}};return e[i](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),i=n(795),o=n.n(i),r=n(569),a=n.n(r),l=n(565),s=n.n(l),c=n(216),d=n.n(c),p=n(589),f=n.n(p),u=n(679),h={};h.styleTagTransform=f(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),t()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;const g=document.getElementById("list");[{title:"fylo-landing-page",liveLink:"https://ivan-f-sokolov.github.io/fylo-landing-page",codeLink:"https://github.com/ivan-f-sokolov/fylo-landing-page"},{title:"slick-slider",liveLink:"https://ivan-f-sokolov.github.io/slick-slider",codeLink:"https://github.com/ivan-f-sokolov/slick-slider"},{title:"stopwatch",liveLink:"https://ivan-f-sokolov.github.io/stopwatch",codeLink:"https://github.com/ivan-f-sokolov/stopwatch"},{title:"link-tree",liveLink:"https://ivan-f-sokolov.github.io/link-tree",codeLink:"https://github.com/ivan-f-sokolov/link-tree"},{title:"documentation",liveLink:"https://ivan-f-sokolov.github.io/documentation",codeLink:"https://github.com/ivan-f-sokolov/documentation"}].forEach((({title:e,liveLink:t,codeLink:n})=>{const i=document.createElement("li");let o=function(e){return e[0].toUpperCase()+e.slice(1).split("-").join(" ")}(e);i.innerHTML=`\n        <a href="${t}" class="live-link" target="blank">\n            <img src="./images/${e}.png" alt="${o}">\n            <h3>${o}</h3>\n        </a>\n        <a href="${n}" class="code-link" target="blank">\n            <i class="fa-brands fa-github"></i>\n            <p>Code</p>\n        </a>\n    `,g.appendChild(i)}))})()})();