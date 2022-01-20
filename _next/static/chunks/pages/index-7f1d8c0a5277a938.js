(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9124)}])},9124:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return x}});var r=t(5893),o=t(9008),a=t(7294),c=t(261),i=t.n(c);function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function l(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return s(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return s(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=function(e){var n=e.query,t=(0,a.useState)([]),o=t[0],c=t[1],s=(0,a.useState)({column:"",direction:""}),u=s[0],f=s[1],h=function(e){return e===u.column&&"asc"===u.direction?(0,r.jsx)(r.Fragment,{children:"\u25b2"}):e===u.column&&"desc"===u.direction?(0,r.jsx)(r.Fragment,{children:"\u25bc"}):void 0};return(0,a.useEffect)((function(){var e=l(o);e.sort((function(e,n){switch(u.direction){case"asc":return e[u.column]<n[u.column]?-1:e[u.column]>n[u.column]?1:0;case"desc":return e[u.column]>n[u.column]?-1:e[u.column]<n[u.column]?1:0}})),c(e)}),[u]),(0,a.useEffect)((function(){n?fetch("https://openlibrary.org/search.json?q=".concat(n,"&fields=author_name,title,cover_i,first_publish_year")).then((function(e){if(e.ok)return e.json();throw e})).then((function(e){c(e.docs)})).catch((function(e){return console.error(e)})):c([])}),[n]),o.length?(0,r.jsxs)("table",{className:i()["fea-book-table"],cellSpacing:0,children:[(0,r.jsxs)("colgroup",{children:[(0,r.jsx)("col",{span:"1",style:{width:"20%"}}),(0,r.jsx)("col",{span:"1",style:{width:"30%"}}),(0,r.jsx)("col",{span:"1",style:{width:"20%"}}),(0,r.jsx)("col",{span:"1",style:{width:"25%"}})]}),(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsxs)("th",{onClick:function(){return f({column:"title",direction:"title"===u.column&&"asc"===u.direction?"desc":"asc"})},children:["Title ",h("title")]}),(0,r.jsx)("th",{children:"Book Cover"}),(0,r.jsx)("th",{children:"Author"}),(0,r.jsxs)("th",{onClick:function(){return f({column:"first_publish_year",direction:"first_publish_year"===u.column&&"asc"===u.direction?"desc":"asc"})},children:["Published Date ",h("first_publish_year")]})]})}),(0,r.jsx)("tbody",{children:o&&o.map((function(e,n){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{tabIndex:0,children:e.title}),(0,r.jsx)("td",{tabIndex:0,children:(0,r.jsx)("img",{alt:"".concat(e.title," by: ").concat(e.author_name,". Published: ").concat(e.first_publish_year),src:e.cover_i&&"https://covers.openlibrary.org/b/id/".concat(e.cover_i,".jpg")})}),(0,r.jsx)("td",{tabIndex:0,children:e.author_name||"Not Available..."}),(0,r.jsx)("td",{tabIndex:0,children:e.first_publish_year})]},n+(e.author_name||""))}))})]}):(0,r.jsx)("p",{className:i()["fea-no-books"],children:"No Books to Display..."})},f=t(1812),h=t.n(f),d=t(6486),p=t.n(d),b=function(e){var n=e.onChange,t=e.label,o=e.style,c=(0,a.useRef)(p().debounce((function(e){return n(e)}),500)).current;return(0,r.jsxs)("div",{className:h()["fea-input-wrapper"],style:o,children:[(0,r.jsx)("input",{className:h()["fea-input"],name:"bookSearch",placeholder:t,id:"bookSearch",onChange:function(e){c(e)},type:"text",tabIndex:"0"}),(0,r.jsx)("label",{htmlFor:"bookSearch",className:h()["fea-input-label"],children:t})]})},_=t(7041),m=t.n(_);function x(){var e=(0,a.useState)(),n=e[0],t=e[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:"React Assessment - Book Search"}),(0,r.jsx)("meta",{name:"description",content:"React Assessment for Chris Doyle"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("main",{className:m()["fea-layout"],children:[(0,r.jsx)("p",{className:m()["fea-header"],children:"OpenLibrary Book Search"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(b,{onChange:function(e){var n=e.target.value;return t(n.replaceAll(" ","+"))},label:"Search Here!","aria-label":"Search Books Here",style:{marginBottom:"1.5em"}}),(0,r.jsx)(u,{query:n})]})]})]})}},261:function(e){e.exports={"fea-book-table":"book-table_fea-book-table__x8cCj","fea-no-books":"book-table_fea-no-books__puvtD"}},1812:function(e){e.exports={"fea-input-wrapper":"input_fea-input-wrapper__SvTFL","fea-input":"input_fea-input__0Vv1I","fea-input-label":"input_fea-input-label__59gDS"}},7041:function(e){e.exports={"fea-layout":"styles_fea-layout__kNJz2","fea-header":"styles_fea-header__6U_s0"}}},function(e){e.O(0,[662,774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);