(this["webpackJsonpnews-byte"]=this["webpackJsonpnews-byte"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},,function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(9),i=c.n(s),a=(c(17),c(4)),l=(c(18),c(19),["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]),o=["January","February","March","April","May","June","July","August","September","October","November","December"],d=function(e){return e<10?"0".concat(e):e},j=function(e,t){var c=new Date(e),n={time:"".concat(d(c.getHours()),":").concat(d(c.getMinutes())),date:c.getDate(),day:l[c.getDay()],month:o[c.getMonth()],year:c.getFullYear()};return t?"".concat(n.day," ").concat(n.date," ").concat(n.month,", ").concat(n.year," ").concat(n.time):n},u=c(5),h=c(0),b=function(e){var t=e.article,c=e.id,n=e.index,r=e.titleFontSize,s=e.showDetails,i=j(t.publishedAt,!0);return Object(h.jsx)("div",{className:"fp-cell fp-cell--".concat(c),children:Object(h.jsx)("div",{className:"fp-item",children:Object(h.jsxs)("div",{className:"center-news-wrap",children:[Object(h.jsx)(u.b,{to:"/article/".concat(n),children:Object(h.jsx)("div",{className:"news-image",children:Object(h.jsx)("img",{src:t.urlToImage,alt:"Image: "+t.title})})}),Object(h.jsxs)("div",{className:"news-details",children:[Object(h.jsx)("thin-print",{children:"".concat(t.author||t.source.name," \u25cf ").concat(i)}),Object(h.jsx)("a",{href:t.url,target:"_blank",rel:"noreferrer",className:"news-source",children:t.source.name}),Object(h.jsxs)(u.b,{to:"/article/".concat(n),children:[Object(h.jsx)("news-title",{style:{fontSize:r},children:t.title}),s&&Object(h.jsx)("div",{className:"news-description",children:t.description})]})]})]})})})},x=(c(21),function(e){var t=e.article,c=e.index;return t?Object(h.jsx)("div",{className:"fp-cell fp-cell--".concat(c),children:Object(h.jsxs)("div",{className:"other-news-wrap",children:[Object(h.jsxs)("div",{className:"news-details",children:[Object(h.jsx)("thin-print",{children:"".concat(t.author||t.source.name," \u25cf ").concat(j(t.publishedAt,!0))}),Object(h.jsx)("a",{href:t.url,target:"_blank",rel:"noreferrer",className:"news-source",children:t.source.name}),Object(h.jsx)(u.b,{to:"/article/".concat(c),children:Object(h.jsx)("news-title",{children:t.title})})]}),Object(h.jsx)(u.b,{to:"/article/".concat(c),children:Object(h.jsx)("div",{className:"float-image",children:Object(h.jsx)("img",{src:t.urlToImage,alt:"Image: "+t.title})})})]})}):Object(h.jsx)(h.Fragment,{})}),O=(c(22),function(e){var t=e.article,c=e.id,n=e.index;e.mobileView,e.showImage;return t?Object(h.jsx)("div",{className:"fp-cell fp-cell--".concat(c),children:Object(h.jsx)("div",{className:"side-news-wrap",children:Object(h.jsxs)("div",{className:"news-details",children:[Object(h.jsxs)(u.b,{to:"/article/".concat(n),children:[Object(h.jsx)("img",{style:{width:"100%"},src:t.urlToImage,alt:"Image: "+t.title}),Object(h.jsx)("news-title",{children:t.title}),Object(h.jsx)("thin-print",{children:"".concat(t.author||t.source.name," \u25cf ").concat(j(t.publishedAt,!0))})]}),Object(h.jsx)("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:"news-source",children:t.source.name})]})})}):Object(h.jsx)(h.Fragment,{})}),m=function(e){var t=e.articles,c=e.bodySize,n=e.serverError;return t.length>0&&c?Object(h.jsx)("div",{children:c.width>720?Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"frontpage",children:[Object(h.jsxs)("div",{className:"fp-cell fp-cell--1",children:[Object(h.jsx)(O,{article:t[5],index:5,id:"A"}),Object(h.jsx)(O,{article:t[6],index:6,id:"B"}),Object(h.jsx)(O,{article:t[7],index:7,id:"C"})]}),Object(h.jsx)(b,{article:t[0],index:0,id:"2",titleFontSize:"30px"}),Object(h.jsx)("div",{className:"fp-cell fp-cell--3",children:Object(h.jsx)(b,{article:t[4],index:4,id:"X",titleFontSize:"20px",showDetails:!0})}),Object(h.jsxs)("div",{className:"fp-cell fp-cell--4",children:[Object(h.jsx)(b,{article:t[1],index:1,id:"5",titleFontSize:"20px"}),Object(h.jsx)(b,{article:t[2],index:2,id:"6",titleFontSize:"20px"}),Object(h.jsx)(b,{article:t[3],index:3,id:"7",titleFontSize:"20px"})]})]}),Object(h.jsx)("div",{className:"other-pages",children:t.slice(8).map((function(e,t){return Object(h.jsx)(x,{article:e,index:t+8},e.title)}))})]}):t.map((function(e,t){return Object(h.jsx)(O,{article:e,id:t,index:t,mobileView:!0},e.title)}))}):Object(h.jsx)("div",{className:"loading-text",children:n?"Seems like the server is down. Please try after some time.":"Loading articles. Please wait.."})},f=c(10),p=c.n(f);c(24);var v=function(e){var t,c=e.articles,n=j(new Date),r="".concat(n.day," ").concat(n.month," ").concat(n.date,", ").concat(n.year),s=(t=p.a.toWords(c.length)).charAt(0).toUpperCase()+t.slice(1);return Object(h.jsxs)("div",{className:"masthead-box",children:[Object(h.jsxs)("div",{className:"paper-name-box",children:[Object(h.jsx)("div",{className:"weather"}),Object(h.jsx)("div",{className:"paper-name",children:Object(h.jsx)("h1",{children:"NEWS BYTES"})})]}),Object(h.jsxs)("div",{className:"paper-calendar",children:["Pune, IN - ",r," - ",s," Articles"]})]})},g=c(8),w=c.n(g),N=c(11),y=function(){var e=Object(N.a)(w.a.mark((function e(){var t,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://news-bytes.glitch.me/news");case 3:return t=e.sent,console.log(t),e.next=7,t.json();case 7:return c=e.sent,e.abrupt("return",{success:!0,articles:c});case 11:return e.prev=11,e.t0=e.catch(0),console.log("Error while fetching news articles: ",e.t0),e.abrupt("return",{success:!1,articles:[]});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),S=c(12),k=c(2),E=(c(26),function(e){var t=e.articles,c=Object(k.g)().id;console.log(t[c]);var n=t[c];return t.length>0&&c<t.length?Object(h.jsxs)("div",{className:"article-wrap",children:[Object(h.jsx)("news-title",{children:n.title}),Object(h.jsx)("div",{className:"news-description",children:n.description}),Object(h.jsx)("thin-print",{children:"".concat(n.author||n.source.name," \u25cf ").concat(j(n.publishedAt,!0))}),Object(h.jsx)("img",{className:"news-img",src:n.urlToImage,alt:"Image: "+n.title}),Object(h.jsx)("div",{className:"news-content",children:n.content}),Object(h.jsxs)("a",{href:n.url,target:"_blank",rel:"noreferrer",className:"news-source",children:["Read full article from ",n.source.name," "]})]}):t.length>0&c>t.length?Object(h.jsx)("div",{className:"loading-text",children:"404: Not Found"}):Object(h.jsx)("div",{className:"loading-text",children:"Loading articles. Please wait.."})}),T=function(e){var t=r.a.useState(),c=Object(a.a)(t,2),n=c[0],s=c[1];return r.a.useLayoutEffect((function(){s(e.current.getBoundingClientRect())}),[e]),Object(S.a)(e,(function(e){return s(e.contentRect)})),n},A=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],r=t[1],s=Object(n.useRef)(null),i=T(s),l=Object(n.useState)(!1),o=Object(a.a)(l,2),d=o[0],j=o[1];return Object(n.useEffect)((function(){y().then((function(e){var t=e.success,c=e.articles;t?(console.log(c),r(c)):j(!0)}))}),[]),Object(h.jsxs)(u.a,{children:[Object(h.jsx)("div",{ref:s,children:Object(h.jsx)(v,{articles:c})}),Object(h.jsxs)(k.c,{children:[Object(h.jsx)(k.a,{path:"/",element:Object(h.jsx)(m,{articles:c,bodySize:i,serverError:d,exact:!0})}),Object(h.jsx)(k.a,{path:"/article/:id",element:Object(h.jsx)(E,{articles:c})})]})]})},F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var c=e.installing;null!=c&&(c.onstatechange=function(){"installed"===c.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(A,{})}),document.getElementById("root")),console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/news-bytes",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0})),function(e){if("serviceWorker"in navigator){if(new URL("/news-bytes",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/news-bytes").concat("/news-byes","/service-worker.js");F?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(c){var n=c.headers.get("content-type");404===c.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):W(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):W(t,e)}))}}()}],[[27,1,2]]]);
//# sourceMappingURL=main.8693057b.chunk.js.map