import{S as X,i as Q,s as U,k as b,q as A,l as y,m as k,r as P,h as p,n as d,b as M,G as h,I as ve,u as F,B as j,g as de,J as me,K as be,d as pe,f as D,t as T,o as re,L as N,M as S,e as L,w as z,x as J,y as K,N as O,z as R,a as $,c as q,O as ye,P as oe}from"../../chunks/index-981bc336.js";import{b as se,p as he,c as ke}from"../../chunks/store-69d22bd8.js";import{P as Ce}from"../../chunks/ProductList-4a1e70a6.js";function Ee(i){let e,t=i[1].name+"",s,r,o,l,a,n;return{c(){e=b("a"),s=A(t),this.h()},l(c){e=y(c,"A",{href:!0,"data-category-name":!0,class:!0});var g=k(e);s=P(g,t),g.forEach(p),this.h()},h(){d(e,"href",r="#"+i[1].name),d(e,"data-category-name",o=i[1].name),d(e,"class",l="category "+(i[0].id===i[1].id?"category--active":"")+" svelte-1c0y5ce")},m(c,g){M(c,e,g),h(e,s),a||(n=ve(e,"click",i[3]),a=!0)},p(c,[g]){g&2&&t!==(t=c[1].name+"")&&F(s,t),g&2&&r!==(r="#"+c[1].name)&&d(e,"href",r),g&2&&o!==(o=c[1].name)&&d(e,"data-category-name",o),g&3&&l!==(l="category "+(c[0].id===c[1].id?"category--active":"")+" svelte-1c0y5ce")&&d(e,"class",l)},i:j,o:j,d(c){c&&p(e),a=!1,n()}}}const ie=40;function we(i,e,t){let{category:s={id:0,name:""}}=e,{currentCategory:r={id:0,name:""}}=e;function o(){let a=document.getElementById(s.name);setTimeout(()=>{document.documentElement.clientHeight==document.body.scrollHeight-window.pageYOffset||window.pageYOffset+ie==a.offsetTop?(t(0,r=s),setTimeout(()=>{t(0,r=s)},100)):o()},100)}const l=a=>{a.preventDefault();let n=document.getElementById(s.name),c=n?n.offsetTop:0;window.scrollTo({top:c-ie,behavior:"smooth"}),o()};return i.$$set=a=>{"category"in a&&t(1,s=a.category),"currentCategory"in a&&t(0,r=a.currentCategory)},[r,s,o,l]}class Be extends X{constructor(e){super(),Q(this,e,we,Ee,U,{category:1,currentCategory:0})}}function ce(i,e,t){const s=i.slice();return s[3]=e[t],s}function ue(i,e){let t,s,r,o;function l(n){e[2](n)}let a={category:e[3]};return e[0]!==void 0&&(a.currentCategory=e[0]),s=new Be({props:a}),N.push(()=>S(s,"currentCategory",l)),{key:i,first:null,c(){t=L(),z(s.$$.fragment),this.h()},l(n){t=L(),J(s.$$.fragment,n),this.h()},h(){this.first=t},m(n,c){M(n,t,c),K(s,n,c),o=!0},p(n,c){e=n;const g={};c&2&&(g.category=e[3]),!r&&c&1&&(r=!0,g.currentCategory=e[0],O(()=>r=!1)),s.$set(g)},i(n){o||(D(s.$$.fragment,n),o=!0)},o(n){T(s.$$.fragment,n),o=!1},d(n){n&&p(t),R(s,n)}}}function Ie(i){let e,t=[],s=new Map,r,o=i[1];const l=a=>a[3].id;for(let a=0;a<o.length;a+=1){let n=ce(i,o,a),c=l(n);s.set(c,t[a]=ue(c,n))}return{c(){e=b("div");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=y(a,"DIV",{class:!0});var n=k(e);for(let c=0;c<t.length;c+=1)t[c].l(n);n.forEach(p),this.h()},h(){d(e,"class","categories svelte-xbh343")},m(a,n){M(a,e,n);for(let c=0;c<t.length;c+=1)t[c].m(e,null);r=!0},p(a,[n]){n&3&&(o=a[1],de(),t=me(t,n,l,1,a,o,s,e,be,ue,null,ce),pe())},i(a){if(!r){for(let n=0;n<o.length;n+=1)D(t[n]);r=!0}},o(a){for(let n=0;n<t.length;n+=1)T(t[n]);r=!1},d(a){a&&p(e);for(let n=0;n<t.length;n+=1)t[n].d()}}}function Me(i,e,t){let{categories:s=[]}=e,{currentCategory:r={id:0,name:""}}=e;re(()=>{let l=document.getElementsByClassName("category");[].forEach.call(l,function(a,n,c){})});function o(l){r=l,t(0,r)}return i.$$set=l=>{"categories"in l&&t(1,s=l.categories),"currentCategory"in l&&t(0,r=l.currentCategory)},[r,s,o]}class De extends X{constructor(e){super(),Q(this,e,Me,Ie,U,{categories:1,currentCategory:0})}}function _e(i,e,t){const s=i.slice();return s[3]=e[t],s}function fe(i){let e,t,s,r,o,l,a,n,c=i[3].name+"",g,f,m=(i[0][i[3].id]||0)+"",u,C,_,v,I=i[3].description+"",B,Z,V,H=i[3].price*i[0][i[3].id]+"",G,x;return{c(){e=b("div"),t=b("div"),s=b("img"),o=$(),l=b("div"),a=b("div"),n=b("span"),g=A(c),f=b("span"),u=A(m),C=A("x"),_=$(),v=b("span"),B=A(I),Z=$(),V=b("div"),G=A(H),x=$(),this.h()},l(E){e=y(E,"DIV",{class:!0});var w=k(e);t=y(w,"DIV",{class:!0});var W=k(t);s=y(W,"IMG",{class:!0,src:!0,alt:!0}),o=q(W),l=y(W,"DIV",{class:!0});var Y=k(l);a=y(Y,"DIV",{class:!0});var ee=k(a);n=y(ee,"SPAN",{class:!0});var ae=k(n);g=P(ae,c),ae.forEach(p),f=y(ee,"SPAN",{class:!0});var te=k(f);u=P(te,m),C=P(te,"x"),te.forEach(p),ee.forEach(p),_=q(Y),v=y(Y,"SPAN",{class:!0});var le=k(v);B=P(le,I),le.forEach(p),Y.forEach(p),W.forEach(p),Z=q(w),V=y(w,"DIV",{class:!0});var ne=k(V);G=P(ne,H),ne.forEach(p),x=q(w),w.forEach(p),this.h()},h(){d(s,"class","item__img svelte-1m2r319"),oe(s.src,r="/bipolar0wl/"+i[3].image)||d(s,"src",r),d(s,"alt",""),d(n,"class","item__name svelte-1m2r319"),d(f,"class","item__count svelte-1m2r319"),d(a,"class","svelte-1m2r319"),d(v,"class","item__description svelte-1m2r319"),d(l,"class","item__text svelte-1m2r319"),d(t,"class","item__info svelte-1m2r319"),d(V,"class","item__price svelte-1m2r319"),d(e,"class","item svelte-1m2r319")},m(E,w){M(E,e,w),h(e,t),h(t,s),h(t,o),h(t,l),h(l,a),h(a,n),h(n,g),h(a,f),h(f,u),h(f,C),h(l,_),h(l,v),h(v,B),h(e,Z),h(e,V),h(V,G),h(e,x)},p(E,w){w&2&&!oe(s.src,r="/bipolar0wl/"+E[3].image)&&d(s,"src",r),w&2&&c!==(c=E[3].name+"")&&F(g,c),w&3&&m!==(m=(E[0][E[3].id]||0)+"")&&F(u,m),w&2&&I!==(I=E[3].description+"")&&F(B,I),w&3&&H!==(H=E[3].price*E[0][E[3].id]+"")&&F(G,H)},d(E){E&&p(e)}}}function ge(i,e){let t,s,r=e[0][e[3].id]!=null&&fe(e);return{key:i,first:null,c(){t=L(),r&&r.c(),s=L(),this.h()},l(o){t=L(),r&&r.l(o),s=L(),this.h()},h(){this.first=t},m(o,l){M(o,t,l),r&&r.m(o,l),M(o,s,l)},p(o,l){e=o,e[0][e[3].id]!=null?r?r.p(e,l):(r=fe(e),r.c(),r.m(s.parentNode,s)):r&&(r.d(1),r=null)},d(o){o&&p(t),r&&r.d(o),o&&p(s)}}}function Te(i){let e,t,s,r=[],o=new Map,l,a,n,c=i[1];const g=f=>f[3].id;for(let f=0;f<c.length;f+=1){let m=_e(i,c,f),u=g(m);o.set(u,r[f]=ge(u,m))}return{c(){e=b("div"),t=b("div"),s=b("div");for(let f=0;f<r.length;f+=1)r[f].c();l=$(),a=b("div"),n=b("textarea"),this.h()},l(f){e=y(f,"DIV",{class:!0});var m=k(e);t=y(m,"DIV",{class:!0});var u=k(t);s=y(u,"DIV",{class:!0});var C=k(s);for(let v=0;v<r.length;v+=1)r[v].l(C);C.forEach(p),u.forEach(p),l=q(m),a=y(m,"DIV",{class:!0});var _=k(a);n=y(_,"TEXTAREA",{class:!0,type:!0,placeholder:!0}),k(n).forEach(p),_.forEach(p),m.forEach(p),this.h()},h(){d(s,"class","basket__order__list svelte-1m2r319"),d(t,"class","basket__order svelte-1m2r319"),d(n,"class","basket__comment svelte-1m2r319"),d(n,"type","text"),d(n,"placeholder","\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"),d(a,"class","svelte-1m2r319"),d(e,"class","basket svelte-1m2r319")},m(f,m){M(f,e,m),h(e,t),h(t,s);for(let u=0;u<r.length;u+=1)r[u].m(s,null);h(e,l),h(e,a),h(a,n)},p(f,[m]){m&3&&(c=f[1],r=me(r,m,g,1,f,c,o,s,ye,ge,null,_e))},i:j,o:j,d(f){f&&p(e);for(let m=0;m<r.length;m+=1)r[m].d()}}}function Ve(i,e,t){let{page:s=1}=e,r={};se.subscribe(l=>{t(0,r=l)});let o=[];return he.subscribe(l=>{t(1,o=l)}),re(async()=>{let l=window.Telegram.WebApp;l.BackButton.show(),l.BackButton.onClick(()=>{t(2,s=s==0?1:0),l.BackButton.hide()});for(var a=document.querySelectorAll(".basket__back a"),n=0;n<a.length;n++)a[n].addEventListener("click",function(){t(2,s=s==0?1:0)})}),i.$$set=l=>{"page"in l&&t(2,s=l.page)},[r,o,s]}class Ae extends X{constructor(e){super(),Q(this,e,Ve,Te,U,{page:2})}}function Pe(i){let e,t,s;function r(l){i[9](l)}let o={};return i[4]!==void 0&&(o.page=i[4]),e=new Ae({props:o}),N.push(()=>S(e,"page",r)),{c(){z(e.$$.fragment)},l(l){J(e.$$.fragment,l)},m(l,a){K(e,l,a),s=!0},p(l,a){const n={};!t&&a&16&&(t=!0,n.page=l[4],O(()=>t=!1)),e.$set(n)},i(l){s||(D(e.$$.fragment,l),s=!0)},o(l){T(e.$$.fragment,l),s=!1},d(l){R(e,l)}}}function Ne(i){let e,t,s,r,o,l,a,n;function c(_){i[5](_)}function g(_){i[6](_)}let f={};i[1]!==void 0&&(f.categories=i[1]),i[3]!==void 0&&(f.currentCategory=i[3]),e=new De({props:f}),N.push(()=>S(e,"categories",c)),N.push(()=>S(e,"currentCategory",g));function m(_){i[7](_)}function u(_){i[8](_)}let C={products:i[2],categories:i[1]};return i[0]!==void 0&&(C.basket=i[0]),i[3]!==void 0&&(C.currentCategory=i[3]),o=new Ce({props:C}),N.push(()=>S(o,"basket",m)),N.push(()=>S(o,"currentCategory",u)),{c(){z(e.$$.fragment),r=$(),z(o.$$.fragment)},l(_){J(e.$$.fragment,_),r=q(_),J(o.$$.fragment,_)},m(_,v){K(e,_,v),M(_,r,v),K(o,_,v),n=!0},p(_,v){const I={};!t&&v&2&&(t=!0,I.categories=_[1],O(()=>t=!1)),!s&&v&8&&(s=!0,I.currentCategory=_[3],O(()=>s=!1)),e.$set(I);const B={};v&4&&(B.products=_[2]),v&2&&(B.categories=_[1]),!l&&v&1&&(l=!0,B.basket=_[0],O(()=>l=!1)),!a&&v&8&&(a=!0,B.currentCategory=_[3],O(()=>a=!1)),o.$set(B)},i(_){n||(D(e.$$.fragment,_),D(o.$$.fragment,_),n=!0)},o(_){T(e.$$.fragment,_),T(o.$$.fragment,_),n=!1},d(_){R(e,_),_&&p(r),R(o,_)}}}function Se(i){let e,t,s,r,o;const l=[Ne,Pe],a=[];function n(c,g){return c[4]==0?0:1}return s=n(i),r=a[s]=l[s](i),{c(){e=b("main"),t=b("div"),r.c(),this.h()},l(c){e=y(c,"MAIN",{class:!0});var g=k(e);t=y(g,"DIV",{class:!0});var f=k(t);r.l(f),f.forEach(p),g.forEach(p),this.h()},h(){d(t,"class","app svelte-plkv"),d(e,"class","svelte-plkv")},m(c,g){M(c,e,g),h(e,t),a[s].m(t,null),o=!0},p(c,[g]){let f=s;s=n(c),s===f?a[s].p(c,g):(de(),T(a[f],1,1,()=>{a[f]=null}),pe(),r=a[s],r?r.p(c,g):(r=a[s]=l[s](c),r.c()),D(r,1),r.m(t,null))},i(c){o||(D(r),o=!0)},o(c){T(r),o=!1},d(c){c&&p(e),a[s].d()}}}function Le(i,e,t){let s=[],r=[],o={},l={},a=0;ke.subscribe(u=>{t(1,s=u)}),he.subscribe(u=>{t(2,r=u)}),re(async()=>{let u=window.Telegram.WebApp;t(3,o=s[0]),u.expand(),u.MainButton.setText("\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0437\u0430\u043A\u0430\u0437"),u.MainButton.setParams({color:"#31b545"}),u.setBackgroundColor("secondary_bg_color"),u.MainButton.onClick(()=>{u.HapticFeedback.impactOccurred("light"),a==0?(u.MainButton.setText(`\u041A \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044E ${l.reduce((C,_)=>C+_,0)} \u20BD`),t(4,a=1)):(u.MainButton.setText("\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0437\u0430\u043A\u0430\u0437"),t(4,a=0))}),se.subscribe(C=>{t(0,l=C),Object.keys(l).length!==0?u.MainButton.show():u.MainButton.hide()})});function n(u){s=u,t(1,s)}function c(u){o=u,t(3,o)}function g(u){l=u,t(0,l)}function f(u){o=u,t(3,o)}function m(u){a=u,t(4,a)}return i.$$.update=()=>{i.$$.dirty&1&&se.set(l)},[l,s,r,o,a,n,c,g,f,m]}class He extends X{constructor(e){super(),Q(this,e,Le,Se,U,{})}}export{He as default};
