import{S as U,i as z,s as J,k as p,l as v,m as w,h as b,n as m,b as V,B as K,q as D,a as B,r as T,c as N,G as h,I as Y,u as A,O as ue,L as j,M as F,w as H,x as Q,P as $,y as R,N as W,f as O,t as L,z as X,g as ne,J as oe,K as ce,d as ae,e as G,o as ie}from"./index-24e95d3e.js";import{b as fe}from"./store-a10cd813.js";function de(a){let e,t,l,n,r,u,o,s,c,d,i;return{c(){e=p("div"),t=p("button"),l=D("-"),n=B(),r=p("span"),u=D(a[0]),o=B(),s=p("button"),c=D("+"),this.h()},l(g){e=v(g,"DIV",{class:!0});var k=w(e);t=v(k,"BUTTON",{class:!0});var f=w(t);l=T(f,"-"),f.forEach(b),n=N(k),r=v(k,"SPAN",{class:!0});var _=w(r);u=T(_,a[0]),_.forEach(b),o=N(k),s=v(k,"BUTTON",{class:!0});var E=w(s);c=T(E,"+"),E.forEach(b),k.forEach(b),this.h()},h(){m(t,"class","decrement svelte-5wkb6b"),m(r,"class","count svelte-5wkb6b"),m(s,"class","increment svelte-5wkb6b"),m(e,"class","counter-edit svelte-5wkb6b")},m(g,k){V(g,e,k),h(e,t),h(t,l),h(e,n),h(e,r),h(r,u),h(e,o),h(e,s),h(s,c),d||(i=[Y(t,"click",a[2]),Y(s,"click",a[1])],d=!0)},p(g,k){k&1&&A(u,g[0])},d(g){g&&b(e),d=!1,ue(i)}}}function _e(a){let e,t,l,n,r,u,o;return{c(){e=p("div"),t=p("button"),l=p("span"),n=D(a[3]),r=D(" \u20BD"),this.h()},l(s){e=v(s,"DIV",{class:!0});var c=w(e);t=v(c,"BUTTON",{class:!0});var d=w(t);l=v(d,"SPAN",{class:!0});var i=w(l);n=T(i,a[3]),r=T(i," \u20BD"),i.forEach(b),d.forEach(b),c.forEach(b),this.h()},h(){m(l,"class","svelte-5wkb6b"),m(t,"class","add-button svelte-5wkb6b"),m(e,"class","counter-new svelte-5wkb6b")},m(s,c){V(s,e,c),h(e,t),h(t,l),h(l,n),h(l,r),u||(o=Y(t,"click",a[1]),u=!0)},p:K,d(s){s&&b(e),u=!1,o()}}}function he(a){let e;function t(r,u){return r[0]==0?_e:de}let l=t(a),n=l(a);return{c(){e=p("div"),n.c(),this.h()},l(r){e=v(r,"DIV",{class:!0});var u=w(e);n.l(u),u.forEach(b),this.h()},h(){m(e,"class","counter svelte-5wkb6b")},m(r,u){V(r,e,u),n.m(e,null)},p(r,[u]){l===(l=t(r))&&n?n.p(r,u):(n.d(1),n=l(r),n&&(n.c(),n.m(e,null)))},i:K,o:K,d(r){r&&b(e),n.d()}}}function be(a,e,t){let{product:l={id:0,name:"",description:"",price:0}}=e,{basket:n={}}=e;fe.subscribe(c=>{t(4,n=c)});let r=n[l.id]||0;const u=()=>{t(0,r+=1),t(4,n[l.id]=r,n)},o=()=>{t(0,r-=1),n[l.id]&&r<=0?(delete n[l.id],t(4,n)):t(4,n[l.id]=r,n)};let s=l.price.toString();return a.$$set=c=>{"product"in c&&t(5,l=c.product),"basket"in c&&t(4,n=c.basket)},[r,u,o,s,n,l]}class ge extends U{constructor(e){super(),z(this,e,be,he,J,{product:5,basket:4})}}function ee(a){let e,t;return{c(){e=p("button"),t=D("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")},l(l){e=v(l,"BUTTON",{});var n=w(e);t=T(n,"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"),n.forEach(b)},m(l,n){V(l,e,n),h(e,t)},d(l){l&&b(e)}}}function ke(a){let e,t,l,n,r,u,o=a[1].name+"",s,c,d,i=a[1].description+"",g,k,f,_,E,q;function M(y){a[3](y)}let S={product:a[1]};a[0]!==void 0&&(S.basket=a[0]),f=new ge({props:S}),j.push(()=>F(f,"basket",M));let P=a[2].edit&&ee();return{c(){e=p("div"),t=p("img"),n=B(),r=p("div"),u=p("p"),s=D(o),c=B(),d=p("p"),g=D(i),k=B(),H(f.$$.fragment),E=B(),P&&P.c(),this.h()},l(y){e=v(y,"DIV",{class:!0});var I=w(e);t=v(I,"IMG",{class:!0,src:!0,alt:!0}),n=N(I),r=v(I,"DIV",{class:!0});var C=w(r);u=v(C,"P",{class:!0});var Z=w(u);s=T(Z,o),Z.forEach(b),c=N(C),d=v(C,"P",{class:!0});var x=w(d);g=T(x,i),x.forEach(b),k=N(C),Q(f.$$.fragment,C),C.forEach(b),E=N(I),P&&P.l(I),I.forEach(b),this.h()},h(){m(t,"class","product__img svelte-qw9k9b"),$(t.src,l=a[1].image)||m(t,"src",l),m(t,"alt","Nothing here"),m(u,"class","product__name svelte-qw9k9b"),m(d,"class","product__description svelte-qw9k9b"),m(r,"class","product__info svelte-qw9k9b"),m(e,"class","product svelte-qw9k9b")},m(y,I){V(y,e,I),h(e,t),h(e,n),h(e,r),h(r,u),h(u,s),h(r,c),h(r,d),h(d,g),h(r,k),R(f,r,null),h(e,E),P&&P.m(e,null),q=!0},p(y,[I]){(!q||I&2&&!$(t.src,l=y[1].image))&&m(t,"src",l),(!q||I&2)&&o!==(o=y[1].name+"")&&A(s,o),(!q||I&2)&&i!==(i=y[1].description+"")&&A(g,i);const C={};I&2&&(C.product=y[1]),!_&&I&1&&(_=!0,C.basket=y[0],W(()=>_=!1)),f.$set(C),y[2].edit?P||(P=ee(),P.c(),P.m(e,null)):P&&(P.d(1),P=null)},i(y){q||(O(f.$$.fragment,y),q=!0)},o(y){L(f.$$.fragment,y),q=!1},d(y){y&&b(e),X(f),P&&P.d()}}}function me(a,e,t){let{product:l={id:0,name:"",description:"",price:0}}=e,{rules:n={edit:!1}}=e,{basket:r={}}=e;function u(o){r=o,t(0,r)}return a.$$set=o=>{"product"in o&&t(1,l=o.product),"rules"in o&&t(2,n=o.rules),"basket"in o&&t(0,r=o.basket)},[r,l,n,u]}class pe extends U{constructor(e){super(),z(this,e,me,ke,J,{product:1,rules:2,basket:0})}}function te(a,e,t){const l=a.slice();return l[5]=e[t],l}function se(a,e){let t,l,n,r;function u(s){e[4](s)}let o={product:e[5],rules:e[3]};return e[0]!==void 0&&(o.basket=e[0]),l=new pe({props:o}),j.push(()=>F(l,"basket",u)),{key:a,first:null,c(){t=G(),H(l.$$.fragment),this.h()},l(s){t=G(),Q(l.$$.fragment,s),this.h()},h(){this.first=t},m(s,c){V(s,t,c),R(l,s,c),r=!0},p(s,c){e=s;const d={};c&4&&(d.product=e[5]),c&8&&(d.rules=e[3]),!n&&c&1&&(n=!0,d.basket=e[0],W(()=>n=!1)),l.$set(d)},i(s){r||(O(l.$$.fragment,s),r=!0)},o(s){L(l.$$.fragment,s),r=!1},d(s){s&&b(t),X(l,s)}}}function ve(a){let e,t,l,n=a[1].name+"",r,u,o,s=[],c=new Map,d,i,g=a[2];const k=f=>f[5].id;for(let f=0;f<g.length;f+=1){let _=te(a,g,f),E=k(_);c.set(E,s[f]=se(E,_))}return{c(){e=p("div"),t=p("div"),l=p("b"),r=D(n),u=B(),o=p("div");for(let f=0;f<s.length;f+=1)s[f].c();this.h()},l(f){e=v(f,"DIV",{class:!0,id:!0});var _=w(e);t=v(_,"DIV",{class:!0});var E=w(t);l=v(E,"B",{});var q=w(l);r=T(q,n),q.forEach(b),E.forEach(b),u=N(_),o=v(_,"DIV",{class:!0});var M=w(o);for(let S=0;S<s.length;S+=1)s[S].l(M);M.forEach(b),_.forEach(b),this.h()},h(){m(t,"class","product__group__category svelte-o3x2mp"),m(o,"class","product__group__produtcs svelte-o3x2mp"),m(e,"class","product__group svelte-o3x2mp"),m(e,"id",d=a[1].name)},m(f,_){V(f,e,_),h(e,t),h(t,l),h(l,r),h(e,u),h(e,o);for(let E=0;E<s.length;E+=1)s[E].m(o,null);i=!0},p(f,[_]){(!i||_&2)&&n!==(n=f[1].name+"")&&A(r,n),_&13&&(g=f[2],ne(),s=oe(s,_,k,1,f,g,c,o,ce,se,null,te),ae()),(!i||_&2&&d!==(d=f[1].name))&&m(e,"id",d)},i(f){if(!i){for(let _=0;_<g.length;_+=1)O(s[_]);i=!0}},o(f){for(let _=0;_<s.length;_+=1)L(s[_]);i=!1},d(f){f&&b(e);for(let _=0;_<s.length;_+=1)s[_].d()}}}function ye(a,e,t){let{category:l={id:0,name:""}}=e,{products:n=[{id:0,title:"",body:""}]}=e,{basket:r={}}=e,{rules:u={edit:!1}}=e;function o(s){r=s,t(0,r)}return a.$$set=s=>{"category"in s&&t(1,l=s.category),"products"in s&&t(2,n=s.products),"basket"in s&&t(0,r=s.basket),"rules"in s&&t(3,u=s.rules)},[r,l,n,u,o]}class we extends U{constructor(e){super(),z(this,e,ye,ve,J,{category:1,products:2,basket:0,rules:3})}}function le(a,e,t){const l=a.slice();return l[8]=e[t],l}function re(a,e){let t,l,n,r;function u(...c){return e[5](e[8],...c)}function o(c){e[6](c)}let s={category:e[8],products:e[3].filter(u),rules:e[1]};return e[0]!==void 0&&(s.basket=e[0]),l=new we({props:s}),j.push(()=>F(l,"basket",o)),{key:a,first:null,c(){t=G(),H(l.$$.fragment),this.h()},l(c){t=G(),Q(l.$$.fragment,c),this.h()},h(){this.first=t},m(c,d){V(c,t,d),R(l,c,d),r=!0},p(c,d){e=c;const i={};d&4&&(i.category=e[8]),d&12&&(i.products=e[3].filter(u)),d&2&&(i.rules=e[1]),!n&&d&1&&(n=!0,i.basket=e[0],W(()=>n=!1)),l.$set(i)},i(c){r||(O(l.$$.fragment,c),r=!0)},o(c){L(l.$$.fragment,c),r=!1},d(c){c&&b(t),X(l,c)}}}function Ee(a){let e,t=[],l=new Map,n,r=a[2];const u=o=>o[8].id;for(let o=0;o<r.length;o+=1){let s=le(a,r,o),c=u(s);l.set(c,t[o]=re(c,s))}return{c(){e=p("div");for(let o=0;o<t.length;o+=1)t[o].c();this.h()},l(o){e=v(o,"DIV",{class:!0});var s=w(e);for(let c=0;c<t.length;c+=1)t[c].l(s);s.forEach(b),this.h()},h(){m(e,"class","products svelte-1bi10gg")},m(o,s){V(o,e,s);for(let c=0;c<t.length;c+=1)t[c].m(e,null);n=!0},p(o,[s]){s&15&&(r=o[2],ne(),t=oe(t,s,u,1,o,r,l,e,ce,re,null,le),ae())},i(o){if(!n){for(let s=0;s<r.length;s+=1)O(t[s]);n=!0}},o(o){for(let s=0;s<t.length;s+=1)L(t[s]);n=!1},d(o){o&&b(e);for(let s=0;s<t.length;s+=1)t[s].d()}}}function Pe(a,e,t){let{rules:l={edit:!1}}=e,{basket:n={}}=e,{categories:r=[]}=e,{products:u=[]}=e,{currentCategory:o={id:0,name:""}}=e;ie(async()=>{document.querySelectorAll(".product__group").forEach(g=>{g.addEventListener("click",function(k){},!1)}),window.addEventListener("scroll",g=>{s()})});function s(i){let g=document.querySelectorAll(".product__group");for(let k=0;k<g.length;k++){let f=g[k];if(t(4,o=r[k]),window.pageYOffset<f.offsetTop)break}}const c=(i,g)=>g.category_id==i.id;function d(i){n=i,t(0,n)}return a.$$set=i=>{"rules"in i&&t(1,l=i.rules),"basket"in i&&t(0,n=i.basket),"categories"in i&&t(2,r=i.categories),"products"in i&&t(3,u=i.products),"currentCategory"in i&&t(4,o=i.currentCategory)},[n,l,r,u,o,c,d]}class Ce extends U{constructor(e){super(),z(this,e,Pe,Ee,J,{rules:1,basket:0,categories:2,products:3,currentCategory:4})}}export{Ce as P};
