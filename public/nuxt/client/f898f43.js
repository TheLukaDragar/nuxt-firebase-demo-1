/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{526:function(e,n,t){(function(n){var t=function(e){var n=/\blang(?:uage)?-([\w-]+)\b/i,t=0,r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof o?new o(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function e(n,t){var o,l;switch(t=t||{},r.util.type(n)){case"Object":if(l=r.util.objId(n),t[l])return t[l];for(var c in o={},t[l]=o,n)n.hasOwnProperty(c)&&(o[c]=e(n[c],t));return o;case"Array":return l=r.util.objId(n),t[l]?t[l]:(o=[],t[l]=o,n.forEach((function(n,i){o[i]=e(n,t)})),o);default:return n}},getLanguage:function(element){for(;element&&!n.test(element.className);)element=element.parentElement;return element?(element.className.match(n)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(t){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(t.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var i in n)if(n[i].src==e)return n[i]}return null}},isActive:function(element,e,n){for(var t="no-"+e;element;){var r=element.classList;if(r.contains(e))return!0;if(r.contains(t))return!1;element=element.parentElement}return!!n}},languages:{extend:function(e,n){var t=r.util.clone(r.languages[e]);for(var o in n)t[o]=n[o];return t},insertBefore:function(e,n,t,o){var l=(o=o||r.languages)[e],c={};for(var d in l)if(l.hasOwnProperty(d)){if(d==n)for(var f in t)t.hasOwnProperty(f)&&(c[f]=t[f]);t.hasOwnProperty(d)||(c[d]=l[d])}var h=o[e];return o[e]=c,r.languages.DFS(r.languages,(function(n,t){t===h&&n!=e&&(this[n]=c)})),c},DFS:function e(n,t,o,l){l=l||{};var c=r.util.objId;for(var i in n)if(n.hasOwnProperty(i)){t.call(n,i,n[i],o||i);var d=n[i],f=r.util.type(d);"Object"!==f||l[c(d)]?"Array"!==f||l[c(d)]||(l[c(d)]=!0,e(d,t,i,l)):(l[c(d)]=!0,e(d,t,null,l))}}},plugins:{},highlightAll:function(e,n){r.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var o={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",o),o.elements=Array.prototype.slice.apply(o.container.querySelectorAll(o.selector)),r.hooks.run("before-all-elements-highlight",o);for(var element,i=0;element=o.elements[i++];)r.highlightElement(element,!0===n,o.callback)},highlightElement:function(element,t,o){var l=r.util.getLanguage(element),c=r.languages[l];element.className=element.className.replace(n,"").replace(/\s+/g," ")+" language-"+l;var d=element.parentElement;d&&"pre"===d.nodeName.toLowerCase()&&(d.className=d.className.replace(n,"").replace(/\s+/g," ")+" language-"+l);var f={element:element,language:l,grammar:c,code:element.textContent};function h(e){f.highlightedCode=e,r.hooks.run("before-insert",f),f.element.innerHTML=f.highlightedCode,r.hooks.run("after-highlight",f),r.hooks.run("complete",f),o&&o.call(f.element)}if(r.hooks.run("before-sanity-check",f),!f.code)return r.hooks.run("complete",f),void(o&&o.call(f.element));if(r.hooks.run("before-highlight",f),f.grammar)if(t&&e.Worker){var m=new Worker(r.filename);m.onmessage=function(e){h(e.data)},m.postMessage(JSON.stringify({language:f.language,code:f.code,immediateClose:!0}))}else h(r.highlight(f.code,f.grammar,f.language));else h(r.util.encode(f.code))},highlight:function(text,e,n){var t={code:text,grammar:e,language:n};return r.hooks.run("before-tokenize",t),t.tokens=r.tokenize(t.code,t.grammar),r.hooks.run("after-tokenize",t),o.stringify(r.util.encode(t.tokens),t.language)},tokenize:function(text,e){var n=e.rest;if(n){for(var t in n)e[t]=n[t];delete e.rest}var r=new d;return f(r,r.head,text),c(text,r,e,r.head,0),function(e){var n=[],t=e.head.next;for(;t!==e.tail;)n.push(t.value),t=t.next;return n}(r)},hooks:{all:{},add:function(e,n){var t=r.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=r.hooks.all[e];if(t&&t.length)for(var o,i=0;o=t[i++];)o(n)}},Token:o};function o(e,content,n,t){this.type=e,this.content=content,this.alias=n,this.length=0|(t||"").length}function l(pattern,e,text,n){pattern.lastIndex=e;var t=pattern.exec(text);if(t&&n&&t[1]){var r=t[1].length;t.index+=r,t[0]=t[0].slice(r)}return t}function c(text,e,n,t,d,m){for(var k in n)if(n.hasOwnProperty(k)&&n[k]){var v=n[k];v=Array.isArray(v)?v:[v];for(var y=0;y<v.length;++y){if(m&&m.cause==k+","+y)return;var w=v[y],F=w.inside,x=!!w.lookbehind,A=!!w.greedy,$=w.alias;if(A&&!w.pattern.global){var S=w.pattern.toString().match(/[imsuy]*$/)[0];w.pattern=RegExp(w.pattern.source,S+"g")}for(var pattern=w.pattern||w,E=t.next,_=d;E!==e.tail&&!(m&&_>=m.reach);_+=E.value.length,E=E.next){var j=E.value;if(e.length>text.length)return;if(!(j instanceof o)){var C,z=1;if(A){if(!(C=l(pattern,_,text,x)))break;var P=C.index,O=C.index+C[0].length,p=_;for(p+=E.value.length;P>=p;)p+=(E=E.next).value.length;if(_=p-=E.value.length,E.value instanceof o)continue;for(var T=E;T!==e.tail&&(p<O||"string"==typeof T.value);T=T.next)z++,p+=T.value.length;z--,j=text.slice(_,p),C.index-=_}else if(!(C=l(pattern,0,j,x)))continue;P=C.index;var M=C[0],N=j.slice(0,P),L=j.slice(P+M.length),D=_+j.length;m&&D>m.reach&&(m.reach=D);var H=E.prev;N&&(H=f(e,H,N),_+=N.length),h(e,H,z),E=f(e,H,new o(k,F?r.tokenize(M,F):M,$,M)),L&&f(e,E,L),z>1&&c(text,e,n,E.prev,_,{cause:k+","+y,reach:D})}}}}}function d(){var head={value:null,prev:null,next:null},e={value:null,prev:head,next:null};head.next=e,this.head=head,this.tail=e,this.length=0}function f(e,n,t){var r=n.next,o={value:t,prev:n,next:r};return n.next=o,r.prev=o,e.length++,o}function h(e,n,t){for(var r=n.next,i=0;i<t&&r!==e.tail;i++)r=r.next;n.next=r,r.prev=n,e.length-=i}if(e.Prism=r,o.stringify=function e(n,t){if("string"==typeof n)return n;if(Array.isArray(n)){var s="";return n.forEach((function(n){s+=e(n,t)})),s}var o={type:n.type,content:e(n.content,t),tag:"span",classes:["token",n.type],attributes:{},language:t},l=n.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(o.classes,l):o.classes.push(l)),r.hooks.run("wrap",o);var c="";for(var d in o.attributes)c+=" "+d+'="'+(o.attributes[d]||"").replace(/"/g,"&quot;")+'"';return"<"+o.tag+' class="'+o.classes.join(" ")+'"'+c+">"+o.content+"</"+o.tag+">"},!e.document)return e.addEventListener?(r.disableWorkerMessageHandler||e.addEventListener("message",(function(n){var t=JSON.parse(n.data),o=t.language,code=t.code,l=t.immediateClose;e.postMessage(r.highlight(code,r.languages[o],o)),l&&e.close()}),!1),r):r;var script=r.util.currentScript();function m(){r.manual||r.highlightAll()}if(script&&(r.filename=script.src,script.hasAttribute("data-manual")&&(r.manual=!0)),!r.manual){var k=document.readyState;"loading"===k||"interactive"===k&&script&&script.defer?document.addEventListener("DOMContentLoaded",m):window.requestAnimationFrame?window.requestAnimationFrame(m):window.setTimeout(m,16)}return r}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=t),void 0!==n&&(n.Prism=t),t.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(e,n){var r={};r["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[n]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};o["language-"+n]={pattern:/[\s\S]+/,inside:t.languages[n]};var l={};l[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:o},t.languages.insertBefore("markup","cdata",l)}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(e){var n=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:RegExp("[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+n.source+")*(?=\\s*\\{)"),string:{pattern:n,greedy:!0},property:/(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var t=e.languages.markup;t&&(t.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,lookbehind:!0,inside:{"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{style:{pattern:/(["'])[\s\S]+(?=["']$)/,lookbehind:!0,alias:"language-css",inside:e.languages.css},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},"attr-name":/^style/i}}},t.tag))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-flags":/[a-z]+$/,"regex-delimiter":/^\/|\/$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}}}),t.languages.markup&&t.languages.markup.tag.addInlined("script","javascript"),t.languages.js=t.languages.javascript,function(){if("undefined"!=typeof self&&self.Prism&&self.document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e=window.Prism,n={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},t="data-src-status",r="loading",o="loaded",l='pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])',c=/\blang(?:uage)?-([\w-]+)\b/i;e.hooks.add("before-highlightall",(function(e){e.selector+=", "+l})),e.hooks.add("before-sanity-check",(function(c){var pre=c.element;if(pre.matches(l)){c.code="",pre.setAttribute(t,r);var code=pre.appendChild(document.createElement("CODE"));code.textContent="Loading…";var d=pre.getAttribute("data-src"),h=c.language;if("none"===h){var m=(/\.(\w+)$/.exec(d)||[,"none"])[1];h=n[m]||m}f(code,h),f(pre,h);var k=e.plugins.autoloader;k&&k.loadLanguages(h);var v=new XMLHttpRequest;v.open("GET",d,!0),v.onreadystatechange=function(){var n,r;4==v.readyState&&(v.status<400&&v.responseText?(pre.setAttribute(t,o),code.textContent=v.responseText,e.highlightElement(code)):(pre.setAttribute(t,"failed"),v.status>=400?code.textContent=(n=v.status,r=v.statusText,"✖ Error "+n+" while fetching file: "+r):code.textContent="✖ Error: File does not exist or is empty"))},v.send(null)}})),e.plugins.fileHighlight={highlight:function(n){for(var element,t=(n||document).querySelectorAll(l),i=0;element=t[i++];)e.highlightElement(element)}};var d=!1;e.fileHighlight=function(){d||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),d=!0),e.plugins.fileHighlight.highlight.apply(this,arguments)}}function f(element,e){var n=element.className;n=n.replace(c," ")+" language-"+e,element.className=n.replace(/\s+/g," ").trim()}}()}).call(this,t(68))},527:function(e,n,t){var content=t(629);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(18).default)("c9b4c6b2",content,!0,{sourceMap:!1})},629:function(e,n,t){var r=t(17)((function(i){return i[1]}));r.push([e.i,'code[class*=language-],pre[class*=language-]{\n  color:#ccc;\n  background:none;\n  font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;\n  font-size:1em;\n  text-align:left;\n  white-space:pre;\n  word-spacing:normal;\n  word-break:normal;\n  word-wrap:normal;\n  line-height:1.5;\n  -moz-tab-size:4;\n  -o-tab-size:4;\n  tab-size:4;\n  -webkit-hyphens:none;\n  -ms-hyphens:none;\n  hyphens:none\n}\n\npre[class*=language-]{\n  padding:1em;\n  margin:.5em 0;\n  overflow:auto\n}\n\n:not(pre)>code[class*=language-],pre[class*=language-]{\n  background:#2d2d2d\n}\n\n:not(pre)>code[class*=language-]{\n  padding:.1em;\n  border-radius:.3em;\n  white-space:normal\n}\n\n.token.block-comment,.token.cdata,.token.comment,.token.doctype,.token.prolog{\n  color:#999\n}\n\n.token.punctuation{\n  color:#ccc\n}\n\n.token.attr-name,.token.deleted,.token.namespace,.token.tag{\n  color:#e2777a\n}\n\n.token.function-name{\n  color:#6196cc\n}\n\n.token.boolean,.token.function,.token.number{\n  color:#f08d49\n}\n\n.token.class-name,.token.constant,.token.property,.token.symbol{\n  color:#f8c555\n}\n\n.token.atrule,.token.builtin,.token.important,.token.keyword,.token.selector{\n  color:#cc99cd\n}\n\n.token.attr-value,.token.char,.token.regex,.token.string,.token.variable{\n  color:#7ec699\n}\n\n.token.entity,.token.operator,.token.url{\n  color:#67cdcc\n}\n\n.token.bold,.token.important{\n  font-weight:700\n}\n\n.token.italic{\n  font-style:italic\n}\n\n.token.entity{\n  cursor:help\n}\n\n.token.inserted{\n  color:green\n}',""]),r.locals={},e.exports=r}}]);