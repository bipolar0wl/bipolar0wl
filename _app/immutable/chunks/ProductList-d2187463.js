import{S as U,i as J,s as K,k as E,q as z,a as S,l as P,m as I,r as N,h as m,c as T,n as p,b as j,G as h,I as $,u as L,B as ee,Q as fe,L as Q,M as Y,w as F,x as H,P as te,y as R,N as W,f as M,t as G,z as X,g as ce,J as ae,K as ue,d as ie,e as A,o as _e}from"./index-981bc336.js";import{b as de}from"./store-6888a841.js";function ge(a){let e,t,l,o,c,f,r=(a[0]==0?"":a[0])+"",s,n,d,u=a[0]==0?a[3]+"\u20BD":"+",b,v,_,i;return{c(){e=E("div"),t=E("button"),l=z("-"),c=S(),f=E("span"),s=z(r),n=S(),d=E("button"),b=z(u),this.h()},l(g){e=P(g,"DIV",{class:!0});var k=I(e);t=P(k,"BUTTON",{class:!0});var D=I(t);l=N(D,"-"),D.forEach(m),c=T(k),f=P(k,"SPAN",{class:!0});var V=I(f);s=N(V,r),V.forEach(m),n=T(k),d=P(k,"BUTTON",{class:!0});var q=I(d);b=N(q,u),q.forEach(m),k.forEach(m),this.h()},h(){p(t,"class",o="decrement "+(a[0]==0?"zero":"")+" svelte-1g23102"),p(f,"class","count svelte-1g23102"),p(d,"class",v="increment "+(a[0]==0?"zero":"")+" svelte-1g23102"),p(e,"class","counter svelte-1g23102")},m(g,k){j(g,e,k),h(e,t),h(t,l),h(e,c),h(e,f),h(f,s),h(e,n),h(e,d),h(d,b),_||(i=[$(t,"click",a[2]),$(d,"click",a[1])],_=!0)},p(g,[k]){k&1&&o!==(o="decrement "+(g[0]==0?"zero":"")+" svelte-1g23102")&&p(t,"class",o),k&1&&r!==(r=(g[0]==0?"":g[0])+"")&&L(s,r),k&1&&u!==(u=g[0]==0?g[3]+"\u20BD":"+")&&L(b,u),k&1&&v!==(v="increment "+(g[0]==0?"zero":"")+" svelte-1g23102")&&p(d,"class",v)},i:ee,o:ee,d(g){g&&m(e),_=!1,fe(i)}}}function he(a,e,t){let{product:l={id:0,name:"",description:"",price:0}}=e,{basket:o={}}=e;de.subscribe(n=>{t(4,o=n)});let c=o[l.id]||0;const f=()=>{t(0,c+=1),t(4,o[l.id]=c,o)},r=()=>{t(0,c-=1),o[l.id]&&c<=0?(delete o[l.id],t(4,o)):t(4,o[l.id]=c,o)};let s=l.price.toString();return a.$$set=n=>{"product"in n&&t(5,l=n.product),"basket"in n&&t(4,o=n.basket)},[c,f,r,s,o,l]}class be extends U{constructor(e){super(),J(this,e,he,ge,K,{product:5,basket:4})}}function se(a){let e,t;return{c(){e=E("button"),t=z("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")},l(l){e=P(l,"BUTTON",{});var o=I(e);t=N(o,"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"),o.forEach(m)},m(l,o){j(l,e,o),h(e,t)},d(l){l&&m(e)}}}function me(a){let e,t,l,o,c,f,r,s=a[1].name+"",n,d,u,b=a[1].description+"",v,_,i,g,k,D;function V(y){a[3](y)}let q={product:a[1]};a[0]!==void 0&&(q.basket=a[0]),i=new be({props:q}),Q.push(()=>Y(i,"basket",V));let w=a[2].edit&&se();return{c(){e=E("div"),t=E("img"),o=S(),c=E("div"),f=E("div"),r=E("p"),n=z(s),d=S(),u=E("p"),v=z(b),_=S(),F(i.$$.fragment),k=S(),w&&w.c(),this.h()},l(y){e=P(y,"DIV",{class:!0});var C=I(e);t=P(C,"IMG",{class:!0,src:!0,alt:!0}),o=T(C),c=P(C,"DIV",{class:!0});var B=I(c);f=P(B,"DIV",{});var O=I(f);r=P(O,"P",{class:!0});var Z=I(r);n=N(Z,s),Z.forEach(m),d=T(O),u=P(O,"P",{class:!0});var x=I(u);v=N(x,b),x.forEach(m),O.forEach(m),_=T(B),H(i.$$.fragment,B),B.forEach(m),k=T(C),w&&w.l(C),C.forEach(m),this.h()},h(){p(t,"class","product__img svelte-16lu9jb"),te(t.src,l=a[1].image)||p(t,"src",l),p(t,"alt","Nothing here"),p(r,"class","product__name svelte-16lu9jb"),p(u,"class","product__description svelte-16lu9jb"),p(c,"class","product__info svelte-16lu9jb"),p(e,"class","product svelte-16lu9jb")},m(y,C){j(y,e,C),h(e,t),h(e,o),h(e,c),h(c,f),h(f,r),h(r,n),h(f,d),h(f,u),h(u,v),h(c,_),R(i,c,null),h(e,k),w&&w.m(e,null),D=!0},p(y,[C]){(!D||C&2&&!te(t.src,l=y[1].image))&&p(t,"src",l),(!D||C&2)&&s!==(s=y[1].name+"")&&L(n,s),(!D||C&2)&&b!==(b=y[1].description+"")&&L(v,b);const B={};C&2&&(B.product=y[1]),!g&&C&1&&(g=!0,B.basket=y[0],W(()=>g=!1)),i.$set(B),y[2].edit?w||(w=se(),w.c(),w.m(e,null)):w&&(w.d(1),w=null)},i(y){D||(M(i.$$.fragment,y),D=!0)},o(y){G(i.$$.fragment,y),D=!1},d(y){y&&m(e),X(i),w&&w.d()}}}function ke(a,e,t){let{product:l={id:0,name:"",description:"",price:0}}=e,{rules:o={edit:!1}}=e,{basket:c={}}=e;function f(r){c=r,t(0,c)}return a.$$set=r=>{"product"in r&&t(1,l=r.product),"rules"in r&&t(2,o=r.rules),"basket"in r&&t(0,c=r.basket)},[c,l,o,f]}class pe extends U{constructor(e){super(),J(this,e,ke,me,K,{product:1,rules:2,basket:0})}}function le(a,e,t){const l=a.slice();return l[5]=e[t],l}function re(a,e){let t,l,o,c;function f(s){e[4](s)}let r={product:e[5],rules:e[3]};return e[0]!==void 0&&(r.basket=e[0]),l=new pe({props:r}),Q.push(()=>Y(l,"basket",f)),{key:a,first:null,c(){t=A(),F(l.$$.fragment),this.h()},l(s){t=A(),H(l.$$.fragment,s),this.h()},h(){this.first=t},m(s,n){j(s,t,n),R(l,s,n),c=!0},p(s,n){e=s;const d={};n&4&&(d.product=e[5]),n&8&&(d.rules=e[3]),!o&&n&1&&(o=!0,d.basket=e[0],W(()=>o=!1)),l.$set(d)},i(s){c||(M(l.$$.fragment,s),c=!0)},o(s){G(l.$$.fragment,s),c=!1},d(s){s&&m(t),X(l,s)}}}function ve(a){let e,t,l,o=a[1].name+"",c,f,r,s=[],n=new Map,d,u,b=a[2];const v=_=>_[5].id;for(let _=0;_<b.length;_+=1){let i=le(a,b,_),g=v(i);n.set(g,s[_]=re(g,i))}return{c(){e=E("div"),t=E("div"),l=E("b"),c=z(o),f=S(),r=E("div");for(let _=0;_<s.length;_+=1)s[_].c();this.h()},l(_){e=P(_,"DIV",{class:!0,id:!0});var i=I(e);t=P(i,"DIV",{class:!0});var g=I(t);l=P(g,"B",{});var k=I(l);c=N(k,o),k.forEach(m),g.forEach(m),f=T(i),r=P(i,"DIV",{class:!0});var D=I(r);for(let V=0;V<s.length;V+=1)s[V].l(D);D.forEach(m),i.forEach(m),this.h()},h(){p(t,"class","product__group__category svelte-ancbr3"),p(r,"class","product__group__produtcs svelte-ancbr3"),p(e,"class","product__group svelte-ancbr3"),p(e,"id",d=a[1].name)},m(_,i){j(_,e,i),h(e,t),h(t,l),h(l,c),h(e,f),h(e,r);for(let g=0;g<s.length;g+=1)s[g].m(r,null);u=!0},p(_,[i]){(!u||i&2)&&o!==(o=_[1].name+"")&&L(c,o),i&13&&(b=_[2],ce(),s=ae(s,i,v,1,_,b,n,r,ue,re,null,le),ie()),(!u||i&2&&d!==(d=_[1].name))&&p(e,"id",d)},i(_){if(!u){for(let i=0;i<b.length;i+=1)M(s[i]);u=!0}},o(_){for(let i=0;i<s.length;i+=1)G(s[i]);u=!1},d(_){_&&m(e);for(let i=0;i<s.length;i+=1)s[i].d()}}}function ye(a,e,t){let{category:l={id:0,name:""}}=e,{products:o=[{id:0,title:"",body:""}]}=e,{basket:c={}}=e,{rules:f={edit:!1}}=e;function r(s){c=s,t(0,c)}return a.$$set=s=>{"category"in s&&t(1,l=s.category),"products"in s&&t(2,o=s.products),"basket"in s&&t(0,c=s.basket),"rules"in s&&t(3,f=s.rules)},[c,l,o,f,r]}class Ee extends U{constructor(e){super(),J(this,e,ye,ve,K,{category:1,products:2,basket:0,rules:3})}}function ne(a,e,t){const l=a.slice();return l[8]=e[t],l}function oe(a,e){let t,l,o,c;function f(...n){return e[5](e[8],...n)}function r(n){e[6](n)}let s={category:e[8],products:e[3].filter(f),rules:e[1]};return e[0]!==void 0&&(s.basket=e[0]),l=new Ee({props:s}),Q.push(()=>Y(l,"basket",r)),{key:a,first:null,c(){t=A(),F(l.$$.fragment),this.h()},l(n){t=A(),H(l.$$.fragment,n),this.h()},h(){this.first=t},m(n,d){j(n,t,d),R(l,n,d),c=!0},p(n,d){e=n;const u={};d&4&&(u.category=e[8]),d&12&&(u.products=e[3].filter(f)),d&2&&(u.rules=e[1]),!o&&d&1&&(o=!0,u.basket=e[0],W(()=>o=!1)),l.$set(u)},i(n){c||(M(l.$$.fragment,n),c=!0)},o(n){G(l.$$.fragment,n),c=!1},d(n){n&&m(t),X(l,n)}}}function Pe(a){let e,t=[],l=new Map,o,c=a[2];const f=r=>r[8].id;for(let r=0;r<c.length;r+=1){let s=ne(a,c,r),n=f(s);l.set(n,t[r]=oe(n,s))}return{c(){e=E("div");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=P(r,"DIV",{class:!0});var s=I(e);for(let n=0;n<t.length;n+=1)t[n].l(s);s.forEach(m),this.h()},h(){p(e,"class","products svelte-1iufgiz")},m(r,s){j(r,e,s);for(let n=0;n<t.length;n+=1)t[n].m(e,null);o=!0},p(r,[s]){s&15&&(c=r[2],ce(),t=ae(t,s,f,1,r,c,l,e,ue,oe,null,ne),ie())},i(r){if(!o){for(let s=0;s<c.length;s+=1)M(t[s]);o=!0}},o(r){for(let s=0;s<t.length;s+=1)G(t[s]);o=!1},d(r){r&&m(e);for(let s=0;s<t.length;s+=1)t[s].d()}}}function we(a,e,t){let{rules:l={edit:!1}}=e,{basket:o={}}=e,{categories:c=[]}=e,{products:f=[]}=e,{currentCategory:r={id:0,name:""}}=e;_e(async()=>{document.querySelectorAll(".product__group").forEach(b=>{b.addEventListener("click",function(v){},!1)}),window.addEventListener("scroll",b=>{s()})});function s(u){let b=document.querySelectorAll(".product__group");for(let v=0;v<b.length;v++){let _=b[v];if(t(4,r=c[v]),window.pageYOffset<_.offsetTop)break}}const n=(u,b)=>b.category_id==u.id;function d(u){o=u,t(0,o)}return a.$$set=u=>{"rules"in u&&t(1,l=u.rules),"basket"in u&&t(0,o=u.basket),"categories"in u&&t(2,c=u.categories),"products"in u&&t(3,f=u.products),"currentCategory"in u&&t(4,r=u.currentCategory)},[o,l,c,f,r,n,d]}class De extends U{constructor(e){super(),J(this,e,we,Pe,K,{rules:1,basket:0,categories:2,products:3,currentCategory:4})}}export{De as P};
