import{S as U,i as z,s as J,k as v,l as p,m as w,h as g,n as m,b as V,B as K,q as L,a as B,r as T,c as N,G as b,I as Y,u as A,O as ue,L as j,M as F,w as H,x as Q,P as $,y as R,N as W,f as O,t as q,z as X,g as ne,J as oe,K as ce,d as ae,e as G,o as ie}from"./index-24e95d3e.js";import{b as fe}from"./store-a10cd813.js";function de(a){let e,t,r,n,l,u,o,s,c,d,i;return{c(){e=v("div"),t=v("button"),r=L("-"),n=B(),l=v("span"),u=L(a[0]),o=B(),s=v("button"),c=L("+"),this.h()},l(h){e=p(h,"DIV",{class:!0});var k=w(e);t=p(k,"BUTTON",{class:!0});var f=w(t);r=T(f,"-"),f.forEach(g),n=N(k),l=p(k,"SPAN",{class:!0});var _=w(l);u=T(_,a[0]),_.forEach(g),o=N(k),s=p(k,"BUTTON",{class:!0});var E=w(s);c=T(E,"+"),E.forEach(g),k.forEach(g),this.h()},h(){m(t,"class","decrement svelte-5wkb6b"),m(l,"class","count svelte-5wkb6b"),m(s,"class","increment svelte-5wkb6b"),m(e,"class","counter-edit svelte-5wkb6b")},m(h,k){V(h,e,k),b(e,t),b(t,r),b(e,n),b(e,l),b(l,u),b(e,o),b(e,s),b(s,c),d||(i=[Y(t,"click",a[2]),Y(s,"click",a[1])],d=!0)},p(h,k){k&1&&A(u,h[0])},d(h){h&&g(e),d=!1,ue(i)}}}function _e(a){let e,t,r,n,l,u,o;return{c(){e=v("div"),t=v("button"),r=v("span"),n=L(a[3]),l=L(" \u20BD"),this.h()},l(s){e=p(s,"DIV",{class:!0});var c=w(e);t=p(c,"BUTTON",{class:!0});var d=w(t);r=p(d,"SPAN",{class:!0});var i=w(r);n=T(i,a[3]),l=T(i," \u20BD"),i.forEach(g),d.forEach(g),c.forEach(g),this.h()},h(){m(r,"class","svelte-5wkb6b"),m(t,"class","add-button svelte-5wkb6b"),m(e,"class","counter-new svelte-5wkb6b")},m(s,c){V(s,e,c),b(e,t),b(t,r),b(r,n),b(r,l),u||(o=Y(t,"click",a[1]),u=!0)},p:K,d(s){s&&g(e),u=!1,o()}}}function he(a){let e;function t(l,u){return l[0]==0?_e:de}let r=t(a),n=r(a);return{c(){e=v("div"),n.c(),this.h()},l(l){e=p(l,"DIV",{class:!0});var u=w(e);n.l(u),u.forEach(g),this.h()},h(){m(e,"class","counter svelte-5wkb6b")},m(l,u){V(l,e,u),n.m(e,null)},p(l,[u]){r===(r=t(l))&&n?n.p(l,u):(n.d(1),n=r(l),n&&(n.c(),n.m(e,null)))},i:K,o:K,d(l){l&&g(e),n.d()}}}function be(a,e,t){let{product:r={id:0,name:"",description:"",price:0}}=e,{basket:n={}}=e;fe.subscribe(c=>{t(4,n=c)});let l=n[r.id]||0;const u=()=>{t(0,l+=1),t(4,n[r.id]=l,n)},o=()=>{t(0,l-=1),n[r.id]&&l<=0?(delete n[r.id],t(4,n)):t(4,n[r.id]=l,n)};let s=r.price.toString();return a.$$set=c=>{"product"in c&&t(5,r=c.product),"basket"in c&&t(4,n=c.basket)},[l,u,o,s,n,r]}class ge extends U{constructor(e){super(),z(this,e,be,he,J,{product:5,basket:4})}}function ee(a){let e,t;return{c(){e=v("button"),t=L("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")},l(r){e=p(r,"BUTTON",{});var n=w(e);t=T(n,"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"),n.forEach(g)},m(r,n){V(r,e,n),b(e,t)},d(r){r&&g(e)}}}function ke(a){let e,t,r,n,l,u,o=a[1].name+"",s,c,d,i=a[1].description+"",h,k,f,_,E,C;function M(y){a[3](y)}let S={product:a[1]};a[0]!==void 0&&(S.basket=a[0]),f=new ge({props:S}),j.push(()=>F(f,"basket",M));let P=a[2].edit&&ee();return{c(){e=v("div"),t=v("img"),n=B(),l=v("div"),u=v("p"),s=L(o),c=B(),d=v("p"),h=L(i),k=B(),H(f.$$.fragment),E=B(),P&&P.c(),this.h()},l(y){e=p(y,"DIV",{class:!0});var I=w(e);t=p(I,"IMG",{class:!0,src:!0,alt:!0}),n=N(I),l=p(I,"DIV",{class:!0});var D=w(l);u=p(D,"P",{class:!0});var Z=w(u);s=T(Z,o),Z.forEach(g),c=N(D),d=p(D,"P",{class:!0});var x=w(d);h=T(x,i),x.forEach(g),k=N(D),Q(f.$$.fragment,D),D.forEach(g),E=N(I),P&&P.l(I),I.forEach(g),this.h()},h(){m(t,"class","product__img svelte-a57aa7"),$(t.src,r=a[1].image)||m(t,"src",r),m(t,"alt","Nothing here"),m(u,"class","product__name svelte-a57aa7"),m(d,"class","product__description svelte-a57aa7"),m(l,"class","product__info svelte-a57aa7"),m(e,"class","product svelte-a57aa7")},m(y,I){V(y,e,I),b(e,t),b(e,n),b(e,l),b(l,u),b(u,s),b(l,c),b(l,d),b(d,h),b(l,k),R(f,l,null),b(e,E),P&&P.m(e,null),C=!0},p(y,[I]){(!C||I&2&&!$(t.src,r=y[1].image))&&m(t,"src",r),(!C||I&2)&&o!==(o=y[1].name+"")&&A(s,o),(!C||I&2)&&i!==(i=y[1].description+"")&&A(h,i);const D={};I&2&&(D.product=y[1]),!_&&I&1&&(_=!0,D.basket=y[0],W(()=>_=!1)),f.$set(D),y[2].edit?P||(P=ee(),P.c(),P.m(e,null)):P&&(P.d(1),P=null)},i(y){C||(O(f.$$.fragment,y),C=!0)},o(y){q(f.$$.fragment,y),C=!1},d(y){y&&g(e),X(f),P&&P.d()}}}function me(a,e,t){let{product:r={id:0,name:"",description:"",price:0}}=e,{rules:n={edit:!1}}=e,{basket:l={}}=e;function u(o){l=o,t(0,l)}return a.$$set=o=>{"product"in o&&t(1,r=o.product),"rules"in o&&t(2,n=o.rules),"basket"in o&&t(0,l=o.basket)},[l,r,n,u]}class ve extends U{constructor(e){super(),z(this,e,me,ke,J,{product:1,rules:2,basket:0})}}function te(a,e,t){const r=a.slice();return r[5]=e[t],r}function se(a,e){let t,r,n,l;function u(s){e[4](s)}let o={product:e[5],rules:e[3]};return e[0]!==void 0&&(o.basket=e[0]),r=new ve({props:o}),j.push(()=>F(r,"basket",u)),{key:a,first:null,c(){t=G(),H(r.$$.fragment),this.h()},l(s){t=G(),Q(r.$$.fragment,s),this.h()},h(){this.first=t},m(s,c){V(s,t,c),R(r,s,c),l=!0},p(s,c){e=s;const d={};c&4&&(d.product=e[5]),c&8&&(d.rules=e[3]),!n&&c&1&&(n=!0,d.basket=e[0],W(()=>n=!1)),r.$set(d)},i(s){l||(O(r.$$.fragment,s),l=!0)},o(s){q(r.$$.fragment,s),l=!1},d(s){s&&g(t),X(r,s)}}}function pe(a){let e,t,r,n=a[1].name+"",l,u,o,s=[],c=new Map,d,i,h=a[2];const k=f=>f[5].id;for(let f=0;f<h.length;f+=1){let _=te(a,h,f),E=k(_);c.set(E,s[f]=se(E,_))}return{c(){e=v("div"),t=v("div"),r=v("b"),l=L(n),u=B(),o=v("div");for(let f=0;f<s.length;f+=1)s[f].c();this.h()},l(f){e=p(f,"DIV",{class:!0,id:!0});var _=w(e);t=p(_,"DIV",{class:!0});var E=w(t);r=p(E,"B",{});var C=w(r);l=T(C,n),C.forEach(g),E.forEach(g),u=N(_),o=p(_,"DIV",{class:!0});var M=w(o);for(let S=0;S<s.length;S+=1)s[S].l(M);M.forEach(g),_.forEach(g),this.h()},h(){m(t,"class","product__group__category svelte-1kw03v"),m(o,"class","product__group__produtcs svelte-1kw03v"),m(e,"class","product__group svelte-1kw03v"),m(e,"id",d=a[1].name)},m(f,_){V(f,e,_),b(e,t),b(t,r),b(r,l),b(e,u),b(e,o);for(let E=0;E<s.length;E+=1)s[E].m(o,null);i=!0},p(f,[_]){(!i||_&2)&&n!==(n=f[1].name+"")&&A(l,n),_&13&&(h=f[2],ne(),s=oe(s,_,k,1,f,h,c,o,ce,se,null,te),ae()),(!i||_&2&&d!==(d=f[1].name))&&m(e,"id",d)},i(f){if(!i){for(let _=0;_<h.length;_+=1)O(s[_]);i=!0}},o(f){for(let _=0;_<s.length;_+=1)q(s[_]);i=!1},d(f){f&&g(e);for(let _=0;_<s.length;_+=1)s[_].d()}}}function ye(a,e,t){let{category:r={id:0,name:""}}=e,{products:n=[{id:0,title:"",body:""}]}=e,{basket:l={}}=e,{rules:u={edit:!1}}=e;function o(s){l=s,t(0,l)}return a.$$set=s=>{"category"in s&&t(1,r=s.category),"products"in s&&t(2,n=s.products),"basket"in s&&t(0,l=s.basket),"rules"in s&&t(3,u=s.rules)},[l,r,n,u,o]}class we extends U{constructor(e){super(),z(this,e,ye,pe,J,{category:1,products:2,basket:0,rules:3})}}function re(a,e,t){const r=a.slice();return r[8]=e[t],r}function le(a,e){let t,r,n,l;function u(...c){return e[5](e[8],...c)}function o(c){e[6](c)}let s={category:e[8],products:e[3].filter(u),rules:e[1]};return e[0]!==void 0&&(s.basket=e[0]),r=new we({props:s}),j.push(()=>F(r,"basket",o)),{key:a,first:null,c(){t=G(),H(r.$$.fragment),this.h()},l(c){t=G(),Q(r.$$.fragment,c),this.h()},h(){this.first=t},m(c,d){V(c,t,d),R(r,c,d),l=!0},p(c,d){e=c;const i={};d&4&&(i.category=e[8]),d&12&&(i.products=e[3].filter(u)),d&2&&(i.rules=e[1]),!n&&d&1&&(n=!0,i.basket=e[0],W(()=>n=!1)),r.$set(i)},i(c){l||(O(r.$$.fragment,c),l=!0)},o(c){q(r.$$.fragment,c),l=!1},d(c){c&&g(t),X(r,c)}}}function Ee(a){let e,t=[],r=new Map,n,l=a[2];const u=o=>o[8].id;for(let o=0;o<l.length;o+=1){let s=re(a,l,o),c=u(s);r.set(c,t[o]=le(c,s))}return{c(){e=v("div");for(let o=0;o<t.length;o+=1)t[o].c();this.h()},l(o){e=p(o,"DIV",{class:!0});var s=w(e);for(let c=0;c<t.length;c+=1)t[c].l(s);s.forEach(g),this.h()},h(){m(e,"class","products svelte-olrnrw")},m(o,s){V(o,e,s);for(let c=0;c<t.length;c+=1)t[c].m(e,null);n=!0},p(o,[s]){s&15&&(l=o[2],ne(),t=oe(t,s,u,1,o,l,r,e,ce,le,null,re),ae())},i(o){if(!n){for(let s=0;s<l.length;s+=1)O(t[s]);n=!0}},o(o){for(let s=0;s<t.length;s+=1)q(t[s]);n=!1},d(o){o&&g(e);for(let s=0;s<t.length;s+=1)t[s].d()}}}function Pe(a,e,t){let{rules:r={edit:!1}}=e,{basket:n={}}=e,{categories:l=[]}=e,{products:u=[]}=e,{currentCategory:o={id:0,name:""}}=e;ie(async()=>{document.querySelectorAll(".product__group").forEach(h=>{h.addEventListener("click",function(k){},!1)}),window.addEventListener("wheel",h=>{s()}),window.addEventListener("touchmove",h=>{s()}),window.addEventListener("touchstart",h=>{s()}),window.addEventListener("touchend",h=>{s()}),window.addEventListener("touchcancel",h=>{s()})});function s(i){let h=document.querySelectorAll(".product__group");for(let k=0;k<h.length;k++){let f=h[k];if(window.pageYOffset<f.offsetTop)break;t(4,o=l[k])}}const c=(i,h)=>h.category_id==i.id;function d(i){n=i,t(0,n)}return a.$$set=i=>{"rules"in i&&t(1,r=i.rules),"basket"in i&&t(0,n=i.basket),"categories"in i&&t(2,l=i.categories),"products"in i&&t(3,u=i.products),"currentCategory"in i&&t(4,o=i.currentCategory)},[n,r,l,u,o,c,d]}class De extends U{constructor(e){super(),z(this,e,Pe,Ee,J,{rules:1,basket:0,categories:2,products:3,currentCategory:4})}}export{De as P};
