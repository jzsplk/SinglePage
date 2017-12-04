window.Modernizr=function(e,t,n){function r(e){v.cssText=e}function o(e,t){return r(w.join(e+";")+(t||""))}function i(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var r in e){var o=e[r];if(!a(o,"-")&&v[o]!==n)return"pfx"!=t||o}return!1}function s(e,t,r){for(var o in e){var a=t[e[o]];if(a!==n)return!1===r?e[o]:i(a,"function")?a.bind(r||t):a}return!1}function l(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+S.join(r+" ")+r).split(" ");return i(t,"string")||i(t,"undefined")?c(o,t):(o=(e+" "+C.join(r+" ")+r).split(" "),s(o,t,n))}function u(){d.input=function(n){for(var r=0,o=n.length;r<o;r++)N[n[r]]=n[r]in y;return N.list&&(N.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),N}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),d.inputtypes=function(e){for(var r=0,o,i,a,c=e.length;r<c;r++)y.setAttribute("type",i=e[r]),o="text"!==y.type,o&&(y.value=b,y.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(i)&&y.style.WebkitAppearance!==n?(m.appendChild(y),a=t.defaultView,o=a.getComputedStyle&&"textfield"!==a.getComputedStyle(y,null).WebkitAppearance&&0!==y.offsetHeight,m.removeChild(y)):/^(search|tel)$/.test(i)||(o=/^(url|email)$/.test(i)?y.checkValidity&&!1===y.checkValidity():y.value!=b)),j[e[r]]=!!o;return j}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var f="2.6.2",d={},p=!0,m=t.documentElement,h="modernizr",g=t.createElement(h),v=g.style,y=t.createElement("input"),b=":)",E={}.toString,w=" -webkit- -moz- -o- -ms- ".split(" "),x="Webkit Moz O ms",S=x.split(" "),C=x.toLowerCase().split(" "),k={svg:"http://www.w3.org/2000/svg"},T={},j={},N={},M=[],P=M.slice,A,L=function(e,n,r,o){var i,a,c,s,l=t.createElement("div"),u=t.body,f=u||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:h+(r+1),l.appendChild(c);return i=["&#173;",'<style id="s',h,'">',e,"</style>"].join(""),l.id=h,(u?l:f).innerHTML+=i,f.appendChild(l),u||(f.style.background="",f.style.overflow="hidden",s=m.style.overflow,m.style.overflow="hidden",m.appendChild(f)),a=n(l,e),u?l.parentNode.removeChild(l):(f.parentNode.removeChild(f),m.style.overflow=s),!!a},z=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t).matches;var r;return L("@media "+t+" { #"+h+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},D=function(){function e(e,o){o=o||t.createElement(r[e]||"div"),e="on"+e;var a=e in o;return a||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),a=i(o[e],"function"),i(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,a}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),F={}.hasOwnProperty,O;O=i(F,"undefined")||i(F.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return F.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=P.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(P.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(P.call(arguments)))};return r}),T.flexbox=function(){return l("flexWrap")},T.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},T.canvastext=function(){return!!d.canvas&&!!i(t.createElement("canvas").getContext("2d").fillText,"function")},T.webgl=function(){return!!e.WebGLRenderingContext},T.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:L(["@media (",w.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},T.geolocation=function(){return"geolocation"in navigator},T.postmessage=function(){return!!e.postMessage},T.websqldatabase=function(){return!!e.openDatabase},T.indexedDB=function(){return!!l("indexedDB",e)},T.hashchange=function(){return D("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},T.history=function(){return!!e.history&&!!history.pushState},T.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},T.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},T.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),a(v.backgroundColor,"rgba")},T.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),a(v.backgroundColor,"rgba")||a(v.backgroundColor,"hsla")},T.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(v.background)},T.backgroundsize=function(){return l("backgroundSize")},T.borderimage=function(){return l("borderImage")},T.borderradius=function(){return l("borderRadius")},T.boxshadow=function(){return l("boxShadow")},T.textshadow=function(){return""===t.createElement("div").style.textShadow},T.opacity=function(){return o("opacity:.55"),/^0.55$/.test(v.opacity)},T.cssanimations=function(){return l("animationName")},T.csscolumns=function(){return l("columnCount")},T.cssgradients=function(){var e="background-image:";return r((e+"-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));"+e)+w.join("linear-gradient(left top,#9f9, white);"+e)).slice(0,-e.length)),a(v.backgroundImage,"gradient")},T.cssreflections=function(){return l("boxReflect")},T.csstransforms=function(){return!!l("transform")},T.csstransforms3d=function(){var e=!!l("perspective");return e&&"webkitPerspective"in m.style&&L("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e},T.csstransitions=function(){return l("transition")},T.fontface=function(){var e;return L('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),i=o.sheet||o.styleSheet,a=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])}),e},T.generatedcontent=function(){var e;return L(["#",h,"{font:0/0 a}#",h,':after{content:"',b,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},T.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(e){}return n},T.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(e){}return n},T.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(e){return!1}},T.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(e){return!1}},T.webworkers=function(){return!!e.Worker},T.applicationcache=function(){return!!e.applicationCache},T.svg=function(){return!!t.createElementNS&&!!t.createElementNS(k.svg,"svg").createSVGRect},T.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==k.svg},T.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(E.call(t.createElementNS(k.svg,"animate")))},T.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(E.call(t.createElementNS(k.svg,"clipPath")))};for(var B in T)O(T,B)&&(A=B.toLowerCase(),d[A]=T[B](),M.push((d[A]?"":"no-")+A));return d.input||u(),d.addTest=function(e,t){if("object"==typeof e)for(var r in e)O(e,r)&&d.addTest(r,e[r]);else{if(e=e.toLowerCase(),d[e]!==n)return d;t="function"==typeof t?t():t,m.className+=" "+(t?"":"no-")+e,d[e]=t}return d},r(""),g=y=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=v.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=h[e[p]];return t||(t={},m++,e[p]=m,h[m]=t),t}function i(e,n,r){if(n||(n=t),g)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():f.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),i.canHaveChildren&&!u.test(e)?r.frag.appendChild(i):i}function a(e,n){if(e||(e=t),g)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,c=r(),s=c.length;a<s;a++)i.createElement(c[a]);return i}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return v.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(v,t.frag)}function s(e){e||(e=t);var r=o(e);return v.shivCSS&&!d&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),g||c(e,r),e}var l=e.html5||{},u=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,d,p="_html5shiv",m=0,h={},g;!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",d="hidden"in e,g=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){d=!0,g=!0}}();var v={elements:l.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:!1!==l.shivCSS,supportsUnknownElements:g,shivMethods:!1!==l.shivMethods,type:"default",shivDocument:s,createElement:i,createDocumentFragment:a};e.html5=v,s(t)}(this,t),d._version=f,d._prefixes=w,d._domPrefixes=C,d._cssomPrefixes=S,d.mq=z,d.hasEvent=D,d.testProp=function(e){return c([e])},d.testAllProps=l,d.testStyles=L,d.prefixed=function(e,t,n){return t?l(e,t,n):l(e,"pfx")},m.className=m.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+" js "+M.join(" "),d}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==m.call(e)}function o(e){return"string"==typeof e}function i(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=h.shift();g=1,e?e.t?d(function(){("c"==e.t?j.injectCss:j.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):g=0}function s(e,n,r,o,i,s,l){function u(t){if(!m&&a(f.readyState)&&(E.r=m=1,!g&&c(),f.onload=f.onreadystatechange=null,t)){"img"!=e&&d(function(){b.removeChild(f)},50);for(var r in C[n])C[n].hasOwnProperty(r)&&C[n][r].onload()}}var l=l||j.errorTimeout,f=t.createElement(e),m=0,v=0,E={t:r,s:n,e:i,a:s,x:l};1===C[n]&&(v=1,C[n]=[]),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){u.call(this,v)},h.splice(o,0,E),"img"!=e&&(v||2===C[n]?(b.insertBefore(f,y?null:p),d(u,l)):C[n].push(f))}function l(e,t,n,r,i){return g=0,t=t||"j",o(e)?s("c"==t?w:E,e,t,this.i++,n,r,i):(h.splice(this.i++,0,e),1==h.length&&c()),this}function u(){var e=j;return e.loader={load:l,i:0},e}var f=t.documentElement,d=e.setTimeout,p=t.getElementsByTagName("script")[0],m={}.toString,h=[],g=0,v="MozAppearance"in f.style,y=v&&!!t.createRange().compareNode,b=y?f:p.parentNode,f=e.opera&&"[object Opera]"==m.call(e.opera),f=!!t.attachEvent&&!f,E=v?"object":f?"script":"img",w=f?"script":E,x=Array.isArray||function(e){return"[object Array]"==m.call(e)},S=[],C={},k={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}},T,j;j=function(e){function t(e){var e=e.split("!"),t=S.length,n=e.pop(),r=e.length,n={url:n,origUrl:n,prefixes:e},o,i,a;for(i=0;i<r;i++)a=e[i].split("="),(o=k[a.shift()])&&(n=o(n,a));for(i=0;i<t;i++)n=S[i](n);return n}function a(e,o,i,a,c){var s=t(e),l=s.autoCallback;s.url.split(".").pop().split("?").shift(),s.bypass||(o&&(o=r(o)?o:o[e]||o[a]||o[e.split("/").pop().split("?")[0]]),s.instead?s.instead(e,o,i,a,c):(C[s.url]?s.noexec=!0:C[s.url]=1,i.load(s.url,s.forceCSS||!s.forceJS&&"css"==s.url.split(".").pop().split("?").shift()?"c":n,s.noexec,s.attrs,s.timeout),(r(o)||r(l))&&i.load(function(){u(),o&&o(s.origUrl,c,a),l&&l(s.origUrl,c,a),C[s.url]=2})))}function c(e,t){function n(e,n){if(e){if(o(e))n||(l=function(){var e=[].slice.call(arguments);u.apply(this,e),f()}),a(e,l,t,0,c);else if(Object(e)===e)for(p in d=function(){var t=0,n;for(n in e)e.hasOwnProperty(n)&&t++;return t}(),e)e.hasOwnProperty(p)&&(!n&&!--d&&(r(l)?l=function(){var e=[].slice.call(arguments);u.apply(this,e),f()}:l[p]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),f()}}(u[p])),a(e[p],l,t,p,c))}else!n&&f()}var c=!!e.test,s=e.load||e.both,l=e.callback||i,u=l,f=e.complete||i,d,p;n(c?e.yep:e.nope,!!s),s&&n(s)}var s,l,f=this.yepnope.loader;if(o(e))a(e,0,f,0);else if(x(e))for(s=0;s<e.length;s++)l=e[s],o(l)?a(l,0,f,0):x(l)?j(l):Object(l)===l&&c(l,f);else Object(e)===e&&c(e,f)},j.addPrefix=function(e,t){k[e]=t},j.addFilter=function(e){S.push(e)},j.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",T=function(){t.removeEventListener("DOMContentLoaded",T,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,s,l){var u=t.createElement("script"),f,m,o=o||j.errorTimeout;u.src=e;for(m in r)u.setAttribute(m,r[m]);n=l?c:n||i,u.onreadystatechange=u.onload=function(){!f&&a(u.readyState)&&(f=1,n(),u.onload=u.onreadystatechange=null)},d(function(){f||(f=1,n(1))},o),s?u.onload():p.parentNode.insertBefore(u,p)},e.yepnope.injectCss=function(e,n,r,o,a,s){var o=t.createElement("link"),l,n=s?c:n||i;o.href=e,o.rel="stylesheet",o.type="text/css";for(l in r)o.setAttribute(l,r[l]);a||(p.parentNode.insertBefore(o,p),d(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};