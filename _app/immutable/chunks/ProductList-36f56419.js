import{S as U,i as z,s as J,k as p,l as v,m as w,h as b,n as m,b as B,B as K,q as T,a as N,r as V,c as S,G as h,I as Y,u as A,O as ue,L as j,M as F,w as H,x as Q,P as $,y as R,N as W,f as q,t as L,z as X,g as ne,J as oe,K as ae,d as ce,e as G,o as ie}from"./index-24e95d3e.js";import{b as fe}from"./store-a10cd813.js";function de(c){let e,t,l,n,r,i,o,s,a,u,_;return{c(){e=p("div"),t=p("button"),l=T("-"),n=N(),r=p("span"),i=T(c[0]),o=N(),s=p("button"),a=T("+"),this.h()},l(g){e=v(g,"DIV",{class:!0});var k=w(e);t=v(k,"BUTTON",{class:!0});var f=w(t);l=V(f,"-"),f.forEach(b),n=S(k),r=v(k,"SPAN",{class:!0});var d=w(r);i=V(d,c[0]),d.forEach(b),o=S(k),s=v(k,"BUTTON",{class:!0});var E=w(s);a=V(E,"+"),E.forEach(b),k.forEach(b),this.h()},h(){m(t,"class","decrement svelte-5wkb6b"),m(r,"class","count svelte-5wkb6b"),m(s,"class","increment svelte-5wkb6b"),m(e,"class","counter-edit svelte-5wkb6b")},m(g,k){B(g,e,k),h(e,t),h(t,l),h(e,n),h(e,r),h(r,i),h(e,o),h(e,s),h(s,a),u||(_=[Y(t,"click",c[2]),Y(s,"click",c[1])],u=!0)},p(g,k){k&1&&A(i,g[0])},d(g){g&&b(e),u=!1,ue(_)}}}function _e(c){let e,t,l,n,r,i,o;return{c(){e=p("div"),t=p("button"),l=p("span"),n=T(c[3]),r=T(" \u20BD"),this.h()},l(s){e=v(s,"DIV",{class:!0});var a=w(e);t=v(a,"BUTTON",{class:!0});var u=w(t);l=v(u,"SPAN",{class:!0});var _=w(l);n=V(_,c[3]),r=V(_," \u20BD"),_.forEach(b),u.forEach(b),a.forEach(b),this.h()},h(){m(l,"class","svelte-5wkb6b"),m(t,"class","add-button svelte-5wkb6b"),m(e,"class","counter-new svelte-5wkb6b")},m(s,a){B(s,e,a),h(e,t),h(t,l),h(l,n),h(l,r),i||(o=Y(t,"click",c[1]),i=!0)},p:K,d(s){s&&b(e),i=!1,o()}}}function he(c){let e;function t(r,i){return r[0]==0?_e:de}let l=t(c),n=l(c);return{c(){e=p("div"),n.c(),this.h()},l(r){e=v(r,"DIV",{class:!0});var i=w(e);n.l(i),i.forEach(b),this.h()},h(){m(e,"class","counter svelte-5wkb6b")},m(r,i){B(r,e,i),n.m(e,null)},p(r,[i]){l===(l=t(r))&&n?n.p(r,i):(n.d(1),n=l(r),n&&(n.c(),n.m(e,null)))},i:K,o:K,d(r){r&&b(e),n.d()}}}function be(c,e,t){let{product:l={id:0,name:"",description:"",price:0}}=e,{basket:n={}}=e;fe.subscribe(a=>{t(4,n=a)});let r=n[l.id]||0;const i=()=>{t(0,r+=1),t(4,n[l.id]=r,n)},o=()=>{t(0,r-=1),n[l.id]&&r<=0?(delete n[l.id],t(4,n)):t(4,n[l.id]=r,n)};let s=l.price.toString();return c.$$set=a=>{"product"in a&&t(5,l=a.product),"basket"in a&&t(4,n=a.basket)},[r,i,o,s,n,l]}class ge extends U{constructor(e){super(),z(this,e,be,he,J,{product:5,basket:4})}}function ee(c){let e,t;return{c(){e=p("button"),t=T("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")},l(l){e=v(l,"BUTTON",{});var n=w(e);t=V(n,"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"),n.forEach(b)},m(l,n){B(l,e,n),h(e,t)},d(l){l&&b(e)}}}function ke(c){let e,t,l,n,r,i,o=c[1].name+"",s,a,u,_=c[1].description+"",g,k,f,d,E,C;function M(y){c[3](y)}let O={product:c[1]};c[0]!==void 0&&(O.basket=c[0]),f=new ge({props:O}),j.push(()=>F(f,"basket",M));let P=c[2].edit&&ee();return{c(){e=p("div"),t=p("img"),n=N(),r=p("div"),i=p("p"),s=T(o),a=N(),u=p("p"),g=T(_),k=N(),H(f.$$.fragment),E=N(),P&&P.c(),this.h()},l(y){e=v(y,"DIV",{class:!0});var I=w(e);t=v(I,"IMG",{class:!0,src:!0,alt:!0}),n=S(I),r=v(I,"DIV",{class:!0});var D=w(r);i=v(D,"P",{class:!0});var Z=w(i);s=V(Z,o),Z.forEach(b),a=S(D),u=v(D,"P",{class:!0});var x=w(u);g=V(x,_),x.forEach(b),k=S(D),Q(f.$$.fragment,D),D.forEach(b),E=S(I),P&&P.l(I),I.forEach(b),this.h()},h(){m(t,"class","product__img svelte-a57aa7"),$(t.src,l=c[1].image)||m(t,"src",l),m(t,"alt","Nothing here"),m(i,"class","product__name svelte-a57aa7"),m(u,"class","product__description svelte-a57aa7"),m(r,"class","product__info svelte-a57aa7"),m(e,"class","product svelte-a57aa7")},m(y,I){B(y,e,I),h(e,t),h(e,n),h(e,r),h(r,i),h(i,s),h(r,a),h(r,u),h(u,g),h(r,k),R(f,r,null),h(e,E),P&&P.m(e,null),C=!0},p(y,[I]){(!C||I&2&&!$(t.src,l=y[1].image))&&m(t,"src",l),(!C||I&2)&&o!==(o=y[1].name+"")&&A(s,o),(!C||I&2)&&_!==(_=y[1].description+"")&&A(g,_);const D={};I&2&&(D.product=y[1]),!d&&I&1&&(d=!0,D.basket=y[0],W(()=>d=!1)),f.$set(D),y[2].edit?P||(P=ee(),P.c(),P.m(e,null)):P&&(P.d(1),P=null)},i(y){C||(q(f.$$.fragment,y),C=!0)},o(y){L(f.$$.fragment,y),C=!1},d(y){y&&b(e),X(f),P&&P.d()}}}function me(c,e,t){let{product:l={id:0,name:"",description:"",price:0}}=e,{rules:n={edit:!1}}=e,{basket:r={}}=e;function i(o){r=o,t(0,r)}return c.$$set=o=>{"product"in o&&t(1,l=o.product),"rules"in o&&t(2,n=o.rules),"basket"in o&&t(0,r=o.basket)},[r,l,n,i]}class pe extends U{constructor(e){super(),z(this,e,me,ke,J,{product:1,rules:2,basket:0})}}function te(c,e,t){const l=c.slice();return l[5]=e[t],l}function se(c,e){let t,l,n,r;function i(s){e[4](s)}let o={product:e[5],rules:e[3]};return e[0]!==void 0&&(o.basket=e[0]),l=new pe({props:o}),j.push(()=>F(l,"basket",i)),{key:c,first:null,c(){t=G(),H(l.$$.fragment),this.h()},l(s){t=G(),Q(l.$$.fragment,s),this.h()},h(){this.first=t},m(s,a){B(s,t,a),R(l,s,a),r=!0},p(s,a){e=s;const u={};a&4&&(u.product=e[5]),a&8&&(u.rules=e[3]),!n&&a&1&&(n=!0,u.basket=e[0],W(()=>n=!1)),l.$set(u)},i(s){r||(q(l.$$.fragment,s),r=!0)},o(s){L(l.$$.fragment,s),r=!1},d(s){s&&b(t),X(l,s)}}}function ve(c){let e,t,l,n=c[1].name+"",r,i,o,s=[],a=new Map,u,_,g=c[2];const k=f=>f[5].id;for(let f=0;f<g.length;f+=1){let d=te(c,g,f),E=k(d);a.set(E,s[f]=se(E,d))}return{c(){e=p("div"),t=p("div"),l=p("b"),r=T(n),i=N(),o=p("div");for(let f=0;f<s.length;f+=1)s[f].c();this.h()},l(f){e=v(f,"DIV",{class:!0,id:!0});var d=w(e);t=v(d,"DIV",{class:!0});var E=w(t);l=v(E,"B",{});var C=w(l);r=V(C,n),C.forEach(b),E.forEach(b),i=S(d),o=v(d,"DIV",{class:!0});var M=w(o);for(let O=0;O<s.length;O+=1)s[O].l(M);M.forEach(b),d.forEach(b),this.h()},h(){m(t,"class","product__group__category svelte-1kw03v"),m(o,"class","product__group__produtcs svelte-1kw03v"),m(e,"class","product__group svelte-1kw03v"),m(e,"id",u=c[1].name)},m(f,d){B(f,e,d),h(e,t),h(t,l),h(l,r),h(e,i),h(e,o);for(let E=0;E<s.length;E+=1)s[E].m(o,null);_=!0},p(f,[d]){(!_||d&2)&&n!==(n=f[1].name+"")&&A(r,n),d&13&&(g=f[2],ne(),s=oe(s,d,k,1,f,g,a,o,ae,se,null,te),ce()),(!_||d&2&&u!==(u=f[1].name))&&m(e,"id",u)},i(f){if(!_){for(let d=0;d<g.length;d+=1)q(s[d]);_=!0}},o(f){for(let d=0;d<s.length;d+=1)L(s[d]);_=!1},d(f){f&&b(e);for(let d=0;d<s.length;d+=1)s[d].d()}}}function ye(c,e,t){let{category:l={id:0,name:""}}=e,{products:n=[{id:0,title:"",body:""}]}=e,{basket:r={}}=e,{rules:i={edit:!1}}=e;function o(s){r=s,t(0,r)}return c.$$set=s=>{"category"in s&&t(1,l=s.category),"products"in s&&t(2,n=s.products),"basket"in s&&t(0,r=s.basket),"rules"in s&&t(3,i=s.rules)},[r,l,n,i,o]}class we extends U{constructor(e){super(),z(this,e,ye,ve,J,{category:1,products:2,basket:0,rules:3})}}function le(c,e,t){const l=c.slice();return l[7]=e[t],l}function re(c,e){let t,l,n,r;function i(...a){return e[5](e[7],...a)}function o(a){e[6](a)}let s={category:e[7],products:e[3].filter(i),rules:e[1]};return e[0]!==void 0&&(s.basket=e[0]),l=new we({props:s}),j.push(()=>F(l,"basket",o)),{key:c,first:null,c(){t=G(),H(l.$$.fragment),this.h()},l(a){t=G(),Q(l.$$.fragment,a),this.h()},h(){this.first=t},m(a,u){B(a,t,u),R(l,a,u),r=!0},p(a,u){e=a;const _={};u&4&&(_.category=e[7]),u&12&&(_.products=e[3].filter(i)),u&2&&(_.rules=e[1]),!n&&u&1&&(n=!0,_.basket=e[0],W(()=>n=!1)),l.$set(_)},i(a){r||(q(l.$$.fragment,a),r=!0)},o(a){L(l.$$.fragment,a),r=!1},d(a){a&&b(t),X(l,a)}}}function Ee(c){let e,t=[],l=new Map,n,r=c[2];const i=o=>o[7].id;for(let o=0;o<r.length;o+=1){let s=le(c,r,o),a=i(s);l.set(a,t[o]=re(a,s))}return{c(){e=p("div");for(let o=0;o<t.length;o+=1)t[o].c();this.h()},l(o){e=v(o,"DIV",{class:!0});var s=w(e);for(let a=0;a<t.length;a+=1)t[a].l(s);s.forEach(b),this.h()},h(){m(e,"class","products svelte-olrnrw")},m(o,s){B(o,e,s);for(let a=0;a<t.length;a+=1)t[a].m(e,null);n=!0},p(o,[s]){s&15&&(r=o[2],ne(),t=oe(t,s,i,1,o,r,l,e,ae,re,null,le),ce())},i(o){if(!n){for(let s=0;s<r.length;s+=1)q(t[s]);n=!0}},o(o){for(let s=0;s<t.length;s+=1)L(t[s]);n=!1},d(o){o&&b(e);for(let s=0;s<t.length;s+=1)t[s].d()}}}function Pe(c,e,t){let{rules:l={edit:!1}}=e,{basket:n={}}=e,{categories:r=[]}=e,{products:i=[]}=e,{currentCategory:o={id:0,name:""}}=e;ie(async()=>{document.querySelectorAll(".product__group").forEach(_=>{_.addEventListener("click",function(g){},!1)}),window.addEventListener("wheel",function(_){let g=document.querySelectorAll(".product__group");for(let k=0;k<g.length;k++){let f=g[k];if(window.pageYOffset<f.offsetTop)break;t(4,o=r[k])}})});const s=(u,_)=>_.category_id==u.id;function a(u){n=u,t(0,n)}return c.$$set=u=>{"rules"in u&&t(1,l=u.rules),"basket"in u&&t(0,n=u.basket),"categories"in u&&t(2,r=u.categories),"products"in u&&t(3,i=u.products),"currentCategory"in u&&t(4,o=u.currentCategory)},[n,l,r,i,o,s,a]}class De extends U{constructor(e){super(),z(this,e,Pe,Ee,J,{rules:1,basket:0,categories:2,products:3,currentCategory:4})}}export{De as P};
