(function(){var h,k=this,m=function(a){return void 0!==a},n=function(a,b,c){a=a.split(".");c=c||k;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&m(b)?c[d]=b:c=c[d]?c[d]:c[d]={}},aa=function(a,b){for(var c=a.split("."),d=b||k,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d},p=function(){},ba=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==
c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},q=function(a){return"function"==ba(a)},ca=function(a){var b=typeof a;return"object"==
b&&null!=a||"function"==b},da=function(a,b,c){return a.call.apply(a.bind,arguments)},ea=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},r=function(a,b,c){r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?da:ea;return r.apply(null,arguments)},
fa=Date.now||function(){return+new Date},s=function(a,b){function c(){}c.prototype=b.prototype;a.Ha=b.prototype;a.prototype=new c;a.Ga=function(a,c,f){return b.prototype[c].apply(a,Array.prototype.slice.call(arguments,2))}};Function.prototype.bind=Function.prototype.bind||function(a,b){if(1<arguments.length){var c=Array.prototype.slice.call(arguments,1);c.unshift(this,a);return r.apply(null,c)}return r(this,a)};n("help.common.helpapiservice.Environment.PROD","https://clients6.google.com",void 0);n("help.common.helpapiservice.Environment.STAGING","https://content-googleapis-staging.sandbox.google.com",void 0);n("help.common.helpapiservice.Environment.TEST","https://content-googleapis-test.sandbox.google.com",void 0);var t=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};s(t,Error);var ga=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},ha=function(a,b){return a<b?-1:a>b?1:0};var v=Array.prototype,ia=v.some?function(a,b,c){return v.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"==typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1},ja=function(a){return v.concat.apply(v,arguments)},ka=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var la=function(a){var b={type:"text/javascript",charset:"UTF-8",src:"https://ssl.gstatic.com/inproduct_help/guidedhelp/guide_inproduct.js"},c;for(c in b)a.call(void 0,b[c],c,b)},ma="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),na=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ma.length;f++)c=ma[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var oa={Pa:"GHELP_SEARCH",Oa:"GHELP_AUTOCOMPLETE",Qa:"GHELP_SUGGEST",Na:"GHELP_ARTICLE",Sa:"LINK",Ra:"HELPCENTER",La:"EMAIL",Ja:"CHAT",Ma:"FORUM",Ta:"MARKETING",Va:"ONEBOX",Ka:"CUSTOM",Ia:"AUTO",Wa:"TESTING"};var pa=function(a){this.k=a};pa.prototype.navigate=function(a,b){var c=this.k;b?c.open(a,b):0==a.indexOf("#")?c.location.hash=a:c.history?(c.history.pushState({},"",a),c.history.pushState({},"",a),c.history.back()):c.location.pathname=a};var qa=function(){return!0};var ra="StopIteration"in k?k.StopIteration:Error("StopIteration"),sa=function(){};sa.prototype.next=function(){throw ra;};sa.prototype.ta=function(){return this};var w=function(a,b){this.l={};this.c=[];this.M=this.b=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){var e;if(a instanceof w)e=a.B(),d=a.s();else{var c=[],f=0;for(e in a)c[f++]=e;e=c;c=[];f=0;for(d in a)c[f++]=a[d];d=c}for(c=0;c<e.length;c++)this.set(e[c],d[c])}};w.prototype.s=function(){x(this);for(var a=[],b=0;b<this.c.length;b++)a.push(this.l[this.c[b]]);return a};
w.prototype.B=function(){x(this);return this.c.concat()};w.prototype.v=function(a){return B(this.l,a)};w.prototype.remove=function(a){return B(this.l,a)?(delete this.l[a],this.b--,this.M++,this.c.length>2*this.b&&x(this),!0):!1};var x=function(a){if(a.b!=a.c.length){for(var b=0,c=0;b<a.c.length;){var d=a.c[b];B(a.l,d)&&(a.c[c++]=d);b++}a.c.length=c}if(a.b!=a.c.length){for(var e={},c=b=0;b<a.c.length;)d=a.c[b],B(e,d)||(a.c[c++]=d,e[d]=1),b++;a.c.length=c}};h=w.prototype;
h.get=function(a,b){return B(this.l,a)?this.l[a]:b};h.set=function(a,b){B(this.l,a)||(this.b++,this.c.push(a),this.M++);this.l[a]=b};h.forEach=function(a,b){for(var c=this.B(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};h.clone=function(){return new w(this)};
h.ta=function(a){x(this);var b=0,c=this.c,d=this.l,e=this.M,f=this,g=new sa;g.next=function(){for(;;){if(e!=f.M)throw Error("The map has changed since the iterator was created");if(b>=c.length)throw ra;var g=c[b++];return a?g:d[g]}};return g};var B=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var C;t:{var ta=k.navigator;if(ta){var ua=ta.userAgent;if(ua){C=ua;break t}}C=""}var D=function(a){return-1!=C.indexOf(a)};var va=D("Opera")||D("OPR"),E=D("Trident")||D("MSIE"),wa=D("Gecko")&&-1==C.toLowerCase().indexOf("webkit")&&!(D("Trident")||D("MSIE")),xa=-1!=C.toLowerCase().indexOf("webkit"),ya=function(){var a=k.document;return a?a.documentMode:void 0},za=function(){var a="",b;if(va&&k.opera)return a=k.opera.version,q(a)?a():a;wa?b=/rv\:([^\);]+)(\)|;)/:E?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:xa&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(C))?a[1]:"");return E&&(b=ya(),b>parseFloat(a))?String(b):a}(),Aa={},Ba=function(a){if(!Aa[a]){for(var b=
0,c=ga(String(za)).split("."),d=ga(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",l=d[f]||"",u=RegExp("(\\d*)(\\D*)","g"),y=RegExp("(\\d*)(\\D*)","g");do{var z=u.exec(g)||["","",""],A=y.exec(l)||["","",""];if(0==z[0].length&&0==A[0].length)break;b=ha(0==z[1].length?0:parseInt(z[1],10),0==A[1].length?0:parseInt(A[1],10))||ha(0==z[2].length,0==A[2].length)||ha(z[2],A[2])}while(0==b)}Aa[a]=0<=b}},Ca=k.document,Da=Ca&&E?ya()||("CSS1Compat"==Ca.compatMode?parseInt(za,
10):5):void 0;var F=function(){this.$={}};F.prototype.register=function(a,b,c){this.$[a]={Z:b,P:c||qa}};F.prototype.P=function(a){a=this.$[a];return!!a&&a.P()};F.prototype.register=F.prototype.register;var Ea;if(!(Ea=!wa&&!E)){var Fa;if(Fa=E)Fa=E&&9<=Da;Ea=Fa}Ea||wa&&Ba("1.9.1");E&&Ba("9");var Ha=function(a){la(function(b,c){"style"==c?a.style.cssText=b:"class"==c?a.className=b:"for"==c?a.htmlFor=b:c in Ga?a.setAttribute(Ga[c],b):0==c.lastIndexOf("aria-",0)||0==c.lastIndexOf("data-",0)?a.setAttribute(c,b):a[c]=b})},Ga={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};var Ia=function(a){k.setTimeout(function(){throw a;},0)},Ja,Ka=function(){var a=k.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&(a=function(){var a=document.createElement("iframe");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=r(function(a){if(a.origin==
d||a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!D("Trident")&&!D("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){c=c.next;var a=c.ja;c.ja=null;a()};return function(a){d.next={ja:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("script")?function(a){var b=document.createElement("script");b.onreadystatechange=
function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){k.setTimeout(a,0)}};var Oa=function(a,b){G||La();Ma||(G(),Ma=!0);H.push(new Na(a,b))},G,La=function(){if(k.Promise&&k.Promise.resolve){var a=k.Promise.resolve();G=function(){a.then(Pa)}}else G=function(){var a=Pa;!q(k.setImmediate)||k.Window&&k.Window.prototype.setImmediate==k.setImmediate?(Ja||(Ja=Ka()),Ja(a)):k.setImmediate(a)}},Ma=!1,H=[],Pa=function(){for(;H.length;){var a=H;H=[];for(var b=0;b<a.length;b++){var c=a[b];try{c.va.call(c.scope)}catch(d){Ia(d)}}}Ma=!1},Na=function(a,b){this.va=a;this.scope=b};var Qa=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0},Ra=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};var J=function(a,b){this.g=0;this.m=void 0;this.h=this.i=null;this.N=this.V=!1;try{var c=this;a.call(b,function(a){I(c,2,a)},function(a){I(c,3,a)})}catch(d){I(this,3,d)}},Sa=function(){return new J(function(a){a(void 0)})},Ta=function(){return new J(function(a,b){b(void 0)})};J.prototype.then=function(a,b,c){return Ua(this,q(a)?a:null,q(b)?b:null,c)};Qa(J);var K=function(a){Ua(a,null,p,void 0)};J.prototype.cancel=function(a){0==this.g&&Oa(function(){var b=new L(a);Va(this,b)},this)};
var Va=function(a,b){if(0==a.g)if(a.i){var c=a.i;if(c.h){for(var d=0,e=-1,f=0,g;g=c.h[f];f++)if(g=g.O)if(d++,g==a&&(e=f),0<=e&&1<d)break;0<=e&&(0==c.g&&1==d?Va(c,b):(d=c.h.splice(e,1)[0],Wa(c),d.W(b)))}}else I(a,3,b)},Ya=function(a,b){a.h&&a.h.length||2!=a.g&&3!=a.g||Xa(a);a.h||(a.h=[]);a.h.push(b)},Ua=function(a,b,c,d){var e={O:null,ea:null,W:null};e.O=new J(function(a,g){e.ea=b?function(c){try{var e=b.call(d,c);a(e)}catch(y){g(y)}}:a;e.W=c?function(b){try{var e=c.call(d,b);!m(e)&&b instanceof L?
g(b):a(e)}catch(y){g(y)}}:g});e.O.i=a;Ya(a,e);return e.O};J.prototype.fa=function(a){this.g=0;I(this,2,a)};J.prototype.ga=function(a){this.g=0;I(this,3,a)};
var I=function(a,b,c){if(0==a.g){if(a==c)b=3,c=new TypeError("Promise cannot resolve to itself");else{if(Ra(c)){a.g=1;c.then(a.fa,a.ga,a);return}if(ca(c))try{var d=c.then;if(q(d)){Za(a,c,d);return}}catch(e){b=3,c=e}}a.m=c;a.g=b;Xa(a);3!=b||c instanceof L||$a(a,c)}},Za=function(a,b,c){a.g=1;var d=!1,e=function(b){d||(d=!0,a.fa(b))},f=function(b){d||(d=!0,a.ga(b))};try{c.call(b,e,f)}catch(g){f(g)}},Xa=function(a){a.V||(a.V=!0,Oa(a.ra,a))};
J.prototype.ra=function(){for(;this.h&&this.h.length;){var a=this.h;this.h=[];for(var b=0;b<a.length;b++){var c=a[b],d=this.m;2==this.g?c.ea(d):(Wa(this),c.W(d))}}this.V=!1};var Wa=function(a){for(;a&&a.N;a=a.i)a.N=!1},$a=function(a,b){a.N=!0;Oa(function(){a.N&&ab.call(null,b)})},ab=Ia,L=function(a){t.call(this,a)};s(L,t);/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var M=function(a,b){this.I=[];this.ca=a;this.ba=b||null;this.G=this.C=!1;this.m=void 0;this.U=this.ka=this.S=!1;this.K=0;this.i=null;this.Q=0};M.prototype.cancel=function(a){if(this.C)this.m instanceof M&&this.m.cancel();else{if(this.i){var b=this.i;delete this.i;a?b.cancel(a):(b.Q--,0>=b.Q&&b.cancel())}this.ca?this.ca.call(this.ba,this):this.U=!0;this.C||(a=new N,O(this),P(this,!1,a))}};M.prototype.da=function(a,b){this.S=!1;P(this,a,b)};
var P=function(a,b,c){a.C=!0;a.m=c;a.G=!b;bb(a)},O=function(a){if(a.C){if(!a.U)throw new cb;a.U=!1}};M.prototype.Z=function(a){O(this);P(this,!0,a)};var db=function(a,b,c){a.I.push([b,c,void 0]);a.C&&bb(a)};M.prototype.then=function(a,b,c){var d,e,f=new J(function(a,b){d=a;e=b});db(this,d,function(a){a instanceof N?f.cancel():e(a)});return f.then(a,b,c)};Qa(M);
var eb=function(a){return ia(a.I,function(a){return q(a[1])})},bb=function(a){if(a.K&&a.C&&eb(a)){var b=a.K,c=Q[b];c&&(k.clearTimeout(c.L),delete Q[b]);a.K=0}a.i&&(a.i.Q--,delete a.i);for(var b=a.m,d=c=!1;a.I.length&&!a.S;){var e=a.I.shift(),f=e[0],g=e[1],e=e[2];if(f=a.G?g:f)try{var l=f.call(e||a.ba,b);m(l)&&(a.G=a.G&&(l==b||l instanceof Error),a.m=b=l);Ra(b)&&(d=!0,a.S=!0)}catch(u){b=u,a.G=!0,eb(a)||(c=!0)}}a.m=b;d&&(l=r(a.da,a,!0),d=r(a.da,a,!1),b instanceof M?(db(b,l,d),b.ka=!0):b.then(l,d));c&&
(b=new fb(b),Q[b.L]=b,a.K=b.L)},cb=function(){t.call(this)};s(cb,t);cb.prototype.message="Deferred has already fired";var N=function(){t.call(this)};s(N,t);N.prototype.message="Deferred was canceled";var fb=function(a){this.L=k.setTimeout(r(this.qa,this),0);this.pa=a};fb.prototype.qa=function(){delete Q[this.L];throw this.pa;};var Q={};var jb=function(){var a={},b=a.document||document,c=document.createElement("SCRIPT"),d={ha:c,ia:void 0},e=new M(gb,d),f=null,g=null!=a.timeout?a.timeout:5E3;0<g&&(f=window.setTimeout(function(){R(c,!0);var a=new hb(1,"Timeout reached for loading script https://ssl.gstatic.com/inproduct_help/guidedhelp/guide_inproduct.js");O(e);P(e,!1,a)},g),d.ia=f);c.onload=c.onreadystatechange=function(){c.readyState&&"loaded"!=c.readyState&&"complete"!=c.readyState||(R(c,a.Fa||!1,f),e.Z(null))};c.onerror=function(){R(c,
!0,f);var a=new hb(0,"Error while loading script https://ssl.gstatic.com/inproduct_help/guidedhelp/guide_inproduct.js");O(e);P(e,!1,a)};Ha(c);ib(b).appendChild(c);return e},ib=function(a){var b=a.getElementsByTagName("HEAD");return b&&0!=b.length?b[0]:a.documentElement},gb=function(){if(this&&this.ha){var a=this.ha;a&&"SCRIPT"==a.tagName&&R(a,!0,this.ia)}},R=function(a,b,c){null!=c&&k.clearTimeout(c);a.onload=p;a.onerror=p;a.onreadystatechange=p;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},
0)},hb=function(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);t.call(this,c);this.code=a};s(hb,t);var kb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,mb=function(a){if(lb){lb=!1;var b=k.location;if(b){var c=b.href;if(c&&(c=(c=mb(c)[3]||null)?decodeURI(c):c)&&c!=b.hostname)throw lb=!0,Error();}}return a.match(kb)},lb=xa;var S=function(a,b){var c;if(a instanceof S)this.d=m(b)?b:a.d,nb(this,a.p),c=a.u,T(this),this.u=c,c=a.n,T(this),this.n=c,ob(this,a.D),c=a.j,T(this),this.j=c,pb(this,a.e.clone()),c=a.t,T(this),this.t=c;else if(a&&(c=mb(String(a)))){this.d=!!b;nb(this,c[1]||"",!0);var d=c[2]||"";T(this);this.u=U(d);d=c[3]||"";T(this);this.n=U(d,!0);ob(this,c[4]);d=c[5]||"";T(this);this.j=U(d,!0);pb(this,c[6]||"",!0);c=c[7]||"";T(this);this.t=U(c)}else this.d=!!b,this.e=new V(null,0,this.d)};h=S.prototype;h.p="";
h.u="";h.n="";h.D=null;h.j="";h.t="";h.xa=!1;h.d=!1;h.toString=function(){var a=[],b=this.p;b&&a.push(W(b,qb,!0),":");if(b=this.n){a.push("//");var c=this.u;c&&a.push(W(c,qb,!0),"@");a.push(encodeURIComponent(String(b)).replace(/%25([0-9a-fA-F]{2})/g,"%$1"));b=this.D;null!=b&&a.push(":",String(b))}if(b=this.j)this.n&&"/"!=b.charAt(0)&&a.push("/"),a.push(W(b,"/"==b.charAt(0)?rb:sb,!0));(b=this.e.toString())&&a.push("?",b);(b=this.t)&&a.push("#",W(b,tb));return a.join("")};
h.resolve=function(a){var b=this.clone(),c=!!a.p;c?nb(b,a.p):c=!!a.u;if(c){var d=a.u;T(b);b.u=d}else c=!!a.n;c?(d=a.n,T(b),b.n=d):c=null!=a.D;d=a.j;if(c)ob(b,a.D);else if(c=!!a.j){if("/"!=d.charAt(0))if(this.n&&!this.j)d="/"+d;else{var e=b.j.lastIndexOf("/");-1!=e&&(d=b.j.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){for(var d=0==e.lastIndexOf("/",0),e=e.split("/"),f=[],g=0;g<e.length;){var l=e[g++];"."==l?d&&g==e.length&&f.push(""):".."==l?((1<f.length||
1==f.length&&""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(l),d=!0)}d=f.join("/")}else d=e}c?(T(b),b.j=d):c=""!==a.e.toString();c?pb(b,U(a.e.toString())):c=!!a.t;c&&(a=a.t,T(b),b.t=a);return b};h.clone=function(){return new S(this)};
var nb=function(a,b,c){T(a);a.p=c?U(b,!0):b;a.p&&(a.p=a.p.replace(/:$/,""))},ob=function(a,b){T(a);if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.D=b}else a.D=null},pb=function(a,b,c){T(a);b instanceof V?(a.e=b,a.e.Y(a.d)):(c||(b=W(b,ub)),a.e=new V(b,0,a.d))},T=function(a){if(a.xa)throw Error("Tried to modify a read-only Uri");};S.prototype.Y=function(a){this.d=a;this.e&&this.e.Y(a);return this};
var U=function(a,b){return a?b?decodeURI(a):decodeURIComponent(a):""},W=function(a,b,c){return"string"==typeof a?(a=encodeURI(a).replace(b,vb),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},vb=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},qb=/[#\/\?@]/g,sb=/[\#\?:]/g,rb=/[\#\?]/g,ub=/[\#\?@]/g,tb=/#/g,V=function(a,b,c){this.f=a||null;this.d=!!c},Y=function(a){if(!a.a&&(a.a=new w,a.b=0,a.f))for(var b=a.f.split("&"),c=0;c<b.length;c++){var d=b[c].indexOf("="),
e=null,f=null;0<=d?(e=b[c].substring(0,d),f=b[c].substring(d+1)):e=b[c];e=decodeURIComponent(e.replace(/\+/g," "));e=X(a,e);a.add(e,f?decodeURIComponent(f.replace(/\+/g," ")):"")}};h=V.prototype;h.a=null;h.b=null;h.add=function(a,b){Y(this);this.f=null;a=X(this,a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.b++;return this};h.remove=function(a){Y(this);a=X(this,a);return this.a.v(a)?(this.f=null,this.b-=this.a.get(a).length,this.a.remove(a)):!1};h.v=function(a){Y(this);a=X(this,a);return this.a.v(a)};
h.B=function(){Y(this);for(var a=this.a.s(),b=this.a.B(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};h.s=function(a){Y(this);var b=[];if("string"==typeof a)this.v(a)&&(b=ja(b,this.a.get(X(this,a))));else{a=this.a.s();for(var c=0;c<a.length;c++)b=ja(b,a[c])}return b};h.set=function(a,b){Y(this);this.f=null;a=X(this,a);this.v(a)&&(this.b-=this.a.get(a).length);this.a.set(a,[b]);this.b++;return this};
h.get=function(a,b){var c=a?this.s(a):[];return 0<c.length?String(c[0]):b};h.toString=function(){if(this.f)return this.f;if(!this.a)return"";for(var a=[],b=this.a.B(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.s(d),f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}return this.f=a.join("&")};h.clone=function(){var a=new V;a.f=this.f;this.a&&(a.a=this.a.clone(),a.b=this.b);return a};
var X=function(a,b){var c=String(b);a.d&&(c=c.toLowerCase());return c};V.prototype.Y=function(a){a&&!this.d&&(Y(this),this.f=null,this.a.forEach(function(a,c){var d=c.toLowerCase();c!=d&&(this.remove(c),this.remove(d),0<a.length&&(this.f=null,this.a.set(X(this,d),ka(a)),this.b+=a.length))},this));this.d=a};var wb=function(a){this.aa=a},xb=/\s*;\s*/;h=wb.prototype;h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');m(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(fa()+1E3*c)).toUTCString();this.aa.cookie=a+"="+b+e+d+c+f};
h.get=function(a,b){for(var c=a+"=",d=(this.aa.cookie||"").split(xb),e=0,f;f=d[e];e++){if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};h.remove=function(a,b,c){var d=this.v(a);this.set(a,"",0,b,c);return d};h.B=function(){return yb(this).keys};h.s=function(){return yb(this).sa};h.v=function(a){return m(this.get(a))};
var yb=function(a){a=(a.aa.cookie||"").split(xb);for(var b=[],c=[],d,e,f=0;e=a[f];f++)d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,sa:c}},zb=new wb(document);zb.Ua=3950;var Ab=function(){var a=(zb.get("GuidedHelpResume")||"").split(":"),b=a[2],c;t:{for(c in oa)if(oa[c]==b){c=!0;break t}c=!1}return{w:parseInt(a[0],10)||0,o:a[1]||"",source:(c?b:void 0)||"CUSTOM"}};var Bb={},Z=function(a,b){return Cb({H:b.H,document:b.document,r:b.r||"https://clients6.google.com",q:b.q,A:b.A,locale:b.locale}).then(function(){var c=b.o,d=b.na,e=b.oa,f=b.source||"CUSTOM";return aa("help.guide.loadFlow")(a,c,d,e,f)})},Eb=function(a,b,c,d,e,f,g,l,u){if(!Db().w)return!1;a=u||"";l=l||void 0;d=d||void 0;e=Db();b=e.w?Z(e.w,{q:a,document:g,r:l,A:b,locale:c,source:e.source,o:e.o,H:d}):Ta();K(b);return!0},Db=function(){var a;a=window.top.location;a=a instanceof S?a.clone():new S(a,void 0);
var b=a.e.get("ghstartsource")||"";return{w:parseInt(a.e.get("ghstartflowid"),10)||0,o:a.e.get("ghstartstepid")||"",source:{helpcenter:"HELPCENTER",email:"EMAIL",chat:"CHAT",forum:"FORUM",marketing:"MARKETING",onebox:"ONEBOX",testing:"TESTING"}[b]||"LINK"}},Cb=function(a){var b;window.guidedhelp=window.guidedhelp||{};window.guidedhelp.loaded?b=Sa():(Fb||(Fb=jb().then()),b=Fb);return b.then(function(){var b=a.A,d=a.locale,e=a.H,f=a.document,g=a.r,l=a.q;aa("help.guide.init")(b,d,e,f,g,l,Bb)})},Fb=null,
Gb=function(a,b,c,d,e,f,g,l,u){if(!Ab().w)return!1;a=u||"";g=g||void 0;l=l||void 0;d=d||void 0;e=Ab();e.w?(zb.remove("GuidedHelpResume","/",""),b=Z(e.w,{q:a,document:g,r:l,A:b,locale:c,na:!1,o:e.o||void 0,H:d,source:e.source})):b=Ta();K(b);return!0};n("hgb.loadFlow",function(a,b,c,d,e,f,g,l,u,y,z,A){K(Z(a,{q:A||"",oa:u||!1,document:y||void 0,r:z||void 0,A:c,locale:d,H:e||void 0,source:"CUSTOM",o:l||void 0}))},void 0);n("hgb.resumeCookiedFlow",Gb,void 0);n("hgb.startFlowFromUrl",Eb,void 0);var Hb=function(a,b,c){a.timeOfStartCall=(new Date).getTime();if(b&&JSON&&JSON.stringify){var d=JSON.stringify(b);200>=d.length&&(a.psdJson=d)}d=c||k;d.GOOGLE_FEEDBACK_START_ARGUMENTS=arguments;var e=a.serverUri||"//www.google.com/tools/feedback",f=d.GOOGLE_FEEDBACK_START;if(f)f.apply(d,arguments);else{var e=e+"/load.js?",g;for(g in a)f=a[g],null!=f&&!ca(f)&&(e+=encodeURIComponent(g)+"="+encodeURIComponent(f)+"&");g=d.document;d=g.createElement("script");d.src=e;g.body.appendChild(d)}};
n("userfeedback.api.startFeedback",Hb,void 0);var Ib=function(a,b){var c=a.serverUri||"//www.gstatic.com/feedback";k.GOOGLE_HELP_SESSION_ARGUMENTS=arguments;var d=window.document,e=d.createElement("script");e.src=c+"/session_load.js";d.body.appendChild(e)};n("userfeedback.api.help.resumeOpenHelpSession",Ib,void 0);n("userfeedback.api.help.startHelpWithChatSupport",function(a,b){a.flow="help";Hb(a,b)},void 0);var Jb=function(a,b){Ib(a,b);var c=a.serverUri||"//www.google.com/tools/feedback";k.GOOGLE_HELP_CHAT_ARGUMENTS=arguments;var d=window.document,e=d.createElement("script");e.src=c+"/chat_load.js";d.body.appendChild(e)};n("userfeedback.api.help.loadChatSupport",Jb,void 0);var $=function(a,b){this.la=a;this.ma=b.receiverUri;this.F=b.locale||b.locale||"en";this.k=b.window||b.window||top;this.X=b.Ea||b.productData||{};this.T=b.r||b.environment||"https://clients6.google.com";this.J=b.Da||b.helpCenterPath||"";this.R=b.q||b.apiKey||""};n("help.service.Lazy",$,void 0);$.create=function(a,b){var c=new $(a,b);Gb(0,c.J,c.F,null,0,0,c.k.document,c.T,c.R)||Eb(0,c.J,c.F,null,0,0,c.k.document,c.T,c.R);return c};$.prototype.Aa=function(a){Kb();Hb(Lb(this,a),this.X,this.k)};
$.prototype.startFeedback=$.prototype.Aa;$.prototype.Ba=function(a,b){var c=b||{};K(Z(a,{q:this.R,document:this.k.document,r:this.T,A:this.J,locale:this.F,o:c.stepId,source:c.source}))};$.prototype.startGuide=$.prototype.Ba;
$.prototype.Ca=function(a){var b=a||{};Kb();Hb(Mb(this,a),this.X,this.k);if(b.enableCache){var c;a=null;try{(c=this.k.localStorage||null)&&(a=c["helpPanelHtml_"+this.F])}catch(d){}if(c=a)if(a=this.k.document,b=b.customZIndex,!a.getElementById("google-feedback-wizard")){var e={id:"google-feedback-wizard",style:"border: 0; vertical-align:bottom; background: none; display: block; width: 100%; height: 100%; z-index: 10000000; top: -100%; left: 0; visibility: visible; opacity: 1;position: fixed",frameborder:"0",
allowTransparency:"true"},f=a.createElement("iframe"),g;for(g in e)f.setAttribute(g,e[g]);b&&(f.style.zIndex=b);a.body.appendChild(f);g=f.contentDocument||f.contentWindow.document;g.open();g.write(c);g.close()}}};$.prototype.startHelp=$.prototype.Ca;
var Lb=function(a,b){var c=b||{};return{bucket:c.bucket,locale:a.F,serverUri:a.ma,productId:a.la,productVersion:c.productVersion,authuser:c.authuser,abuseLink:c.abuseLink,customZIndex:c.customZIndex,flow:"wizard"}},Mb=function(a,b){var c=b||{},d=Lb(a,b);na(d,{anchor:c.anchor,flow:"help",helpCenterContext:c.context,helpCenterPath:a.J,enableSendFeedback:c.enableSendFeedback||!1,enableCache:c.enableCache,defaultHelpArticleId:c.defaultHelpArticleId,newApi:!0});return d};
$.prototype.ya=function(a){var b=a||{};a=Mb(this,a);na(a,{escalationJSONString:b.escalationJSONString});Jb(a,this.X)};$.prototype.loadChatSupport=$.prototype.ya;$.prototype.za=function(a,b,c){Nb(this).register(a,b,c)};$.prototype.registerCommand=$.prototype.za;$.prototype.ua=function(a,b){var c=Nb(this).$[a];c&&c.P()&&c.Z.apply(null,b||[])};$.prototype.executeCommand=$.prototype.ua;$.prototype.wa=function(a){return Nb(this).P(a)};$.prototype.isCommandApplicable=$.prototype.wa;
var Kb=function(){var a=window.GOOGLE_FEEDBACK_DESTROY_FUNCTION;a&&a()},Nb=function(a){var b;b=aa("help.globals.commands",top);b||(b=new F,n("help.globals.commands",b,top),a=new pa(a.k),b.register("_coreNavigate",r(a.navigate,a)));return b};})();