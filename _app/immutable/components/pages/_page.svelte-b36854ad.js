import{S as X,i as Q,s as U,k as b,q as T,l as y,m as k,r as P,h as p,n as d,b as M,G as m,I as ve,u as F,B as j,g as de,J as he,K as be,d as pe,f as D,t as V,o as re,L as N,M as S,e as L,w as z,x as J,y as K,N as O,z as R,a as $,c as q,O as ye,P as oe}from"../../chunks/index-981bc336.js";import{b as se,p as me,c as ke}from"../../chunks/store-69d22bd8.js";import{P as Ce}from"../../chunks/ProductList-4a1e70a6.js";function Ee(i){let e,t=i[1].name+"",s,r,o,a,n,l;return{c(){e=b("a"),s=T(t),this.h()},l(c){e=y(c,"A",{href:!0,"data-category-name":!0,class:!0});var g=k(e);s=P(g,t),g.forEach(p),this.h()},h(){d(e,"href",r="#"+i[1].name),d(e,"data-category-name",o=i[1].name),d(e,"class",a="category "+(i[0].id===i[1].id?"category--active":"")+" svelte-1c0y5ce")},m(c,g){M(c,e,g),m(e,s),n||(l=ve(e,"click",i[3]),n=!0)},p(c,[g]){g&2&&t!==(t=c[1].name+"")&&F(s,t),g&2&&r!==(r="#"+c[1].name)&&d(e,"href",r),g&2&&o!==(o=c[1].name)&&d(e,"data-category-name",o),g&3&&a!==(a="category "+(c[0].id===c[1].id?"category--active":"")+" svelte-1c0y5ce")&&d(e,"class",a)},i:j,o:j,d(c){c&&p(e),n=!1,l()}}}const ie=40;function Be(i,e,t){let{category:s={id:0,name:""}}=e,{currentCategory:r={id:0,name:""}}=e;function o(){let n=document.getElementById(s.name);setTimeout(()=>{document.documentElement.clientHeight==document.body.scrollHeight-window.pageYOffset||window.pageYOffset+ie==n.offsetTop?(t(0,r=s),setTimeout(()=>{t(0,r=s)},100)):o()},100)}const a=n=>{n.preventDefault();let l=document.getElementById(s.name),c=l?l.offsetTop:0;window.scrollTo({top:c-ie,behavior:"smooth"}),o()};return i.$$set=n=>{"category"in n&&t(1,s=n.category),"currentCategory"in n&&t(0,r=n.currentCategory)},[r,s,o,a]}class we extends X{constructor(e){super(),Q(this,e,Be,Ee,U,{category:1,currentCategory:0})}}function ce(i,e,t){const s=i.slice();return s[3]=e[t],s}function ue(i,e){let t,s,r,o;function a(l){e[2](l)}let n={category:e[3]};return e[0]!==void 0&&(n.currentCategory=e[0]),s=new we({props:n}),N.push(()=>S(s,"currentCategory",a)),{key:i,first:null,c(){t=L(),z(s.$$.fragment),this.h()},l(l){t=L(),J(s.$$.fragment,l),this.h()},h(){this.first=t},m(l,c){M(l,t,c),K(s,l,c),o=!0},p(l,c){e=l;const g={};c&2&&(g.category=e[3]),!r&&c&1&&(r=!0,g.currentCategory=e[0],O(()=>r=!1)),s.$set(g)},i(l){o||(D(s.$$.fragment,l),o=!0)},o(l){V(s.$$.fragment,l),o=!1},d(l){l&&p(t),R(s,l)}}}function Ie(i){let e,t=[],s=new Map,r,o=i[1];const a=n=>n[3].id;for(let n=0;n<o.length;n+=1){let l=ce(i,o,n),c=a(l);s.set(c,t[n]=ue(c,l))}return{c(){e=b("div");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=y(n,"DIV",{class:!0});var l=k(e);for(let c=0;c<t.length;c+=1)t[c].l(l);l.forEach(p),this.h()},h(){d(e,"class","categories svelte-xbh343")},m(n,l){M(n,e,l);for(let c=0;c<t.length;c+=1)t[c].m(e,null);r=!0},p(n,[l]){l&3&&(o=n[1],de(),t=he(t,l,a,1,n,o,s,e,be,ue,null,ce),pe())},i(n){if(!r){for(let l=0;l<o.length;l+=1)D(t[l]);r=!0}},o(n){for(let l=0;l<t.length;l+=1)V(t[l]);r=!1},d(n){n&&p(e);for(let l=0;l<t.length;l+=1)t[l].d()}}}function Me(i,e,t){let{categories:s=[]}=e,{currentCategory:r={id:0,name:""}}=e;re(()=>{let a=document.getElementsByClassName("category");[].forEach.call(a,function(n,l,c){})});function o(a){r=a,t(0,r)}return i.$$set=a=>{"categories"in a&&t(1,s=a.categories),"currentCategory"in a&&t(0,r=a.currentCategory)},[r,s,o]}class De extends X{constructor(e){super(),Q(this,e,Me,Ie,U,{categories:1,currentCategory:0})}}function _e(i,e,t){const s=i.slice();return s[3]=e[t],s}function fe(i){let e,t,s,r,o,a,n,l,c=i[3].name+"",g,f,h=(i[0][i[3].id]||0)+"",u,C,_,v,I=i[3].description+"",w,Z,A,H=i[3].price*i[0][i[3].id]+"",G,x;return{c(){e=b("div"),t=b("div"),s=b("img"),o=$(),a=b("div"),n=b("div"),l=b("span"),g=T(c),f=b("span"),u=T(h),C=T("x"),_=$(),v=b("span"),w=T(I),Z=$(),A=b("div"),G=T(H),x=$(),this.h()},l(E){e=y(E,"DIV",{class:!0});var B=k(e);t=y(B,"DIV",{class:!0});var W=k(t);s=y(W,"IMG",{class:!0,src:!0,alt:!0}),o=q(W),a=y(W,"DIV",{class:!0});var Y=k(a);n=y(Y,"DIV",{class:!0});var ee=k(n);l=y(ee,"SPAN",{class:!0});var ae=k(l);g=P(ae,c),ae.forEach(p),f=y(ee,"SPAN",{class:!0});var te=k(f);u=P(te,h),C=P(te,"x"),te.forEach(p),ee.forEach(p),_=q(Y),v=y(Y,"SPAN",{class:!0});var ne=k(v);w=P(ne,I),ne.forEach(p),Y.forEach(p),W.forEach(p),Z=q(B),A=y(B,"DIV",{class:!0});var le=k(A);G=P(le,H),le.forEach(p),x=q(B),B.forEach(p),this.h()},h(){d(s,"class","item__img svelte-11x6ndh"),oe(s.src,r="/bipolar0wl/"+i[3].image)||d(s,"src",r),d(s,"alt",""),d(l,"class","item__name svelte-11x6ndh"),d(f,"class","item__count svelte-11x6ndh"),d(n,"class","svelte-11x6ndh"),d(v,"class","item__description svelte-11x6ndh"),d(a,"class","item__text svelte-11x6ndh"),d(t,"class","item__info svelte-11x6ndh"),d(A,"class","item__price svelte-11x6ndh"),d(e,"class","item svelte-11x6ndh")},m(E,B){M(E,e,B),m(e,t),m(t,s),m(t,o),m(t,a),m(a,n),m(n,l),m(l,g),m(n,f),m(f,u),m(f,C),m(a,_),m(a,v),m(v,w),m(e,Z),m(e,A),m(A,G),m(e,x)},p(E,B){B&2&&!oe(s.src,r="/bipolar0wl/"+E[3].image)&&d(s,"src",r),B&2&&c!==(c=E[3].name+"")&&F(g,c),B&3&&h!==(h=(E[0][E[3].id]||0)+"")&&F(u,h),B&2&&I!==(I=E[3].description+"")&&F(w,I),B&3&&H!==(H=E[3].price*E[0][E[3].id]+"")&&F(G,H)},d(E){E&&p(e)}}}function ge(i,e){let t,s,r=e[0][e[3].id]!=null&&fe(e);return{key:i,first:null,c(){t=L(),r&&r.c(),s=L(),this.h()},l(o){t=L(),r&&r.l(o),s=L(),this.h()},h(){this.first=t},m(o,a){M(o,t,a),r&&r.m(o,a),M(o,s,a)},p(o,a){e=o,e[0][e[3].id]!=null?r?r.p(e,a):(r=fe(e),r.c(),r.m(s.parentNode,s)):r&&(r.d(1),r=null)},d(o){o&&p(t),r&&r.d(o),o&&p(s)}}}function Ve(i){let e,t,s,r=[],o=new Map,a,n,l,c=i[1];const g=f=>f[3].id;for(let f=0;f<c.length;f+=1){let h=_e(i,c,f),u=g(h);o.set(u,r[f]=ge(u,h))}return{c(){e=b("div"),t=b("div"),s=b("div");for(let f=0;f<r.length;f+=1)r[f].c();a=$(),n=b("div"),l=b("textarea"),this.h()},l(f){e=y(f,"DIV",{class:!0});var h=k(e);t=y(h,"DIV",{class:!0});var u=k(t);s=y(u,"DIV",{class:!0});var C=k(s);for(let v=0;v<r.length;v+=1)r[v].l(C);C.forEach(p),u.forEach(p),a=q(h),n=y(h,"DIV",{class:!0});var _=k(n);l=y(_,"TEXTAREA",{class:!0,type:!0,placeholder:!0}),k(l).forEach(p),_.forEach(p),h.forEach(p),this.h()},h(){d(s,"class","basket__order__list svelte-11x6ndh"),d(t,"class","basket__order svelte-11x6ndh"),d(l,"class","basket__comment svelte-11x6ndh"),d(l,"type","text"),d(l,"placeholder","\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"),d(n,"class","svelte-11x6ndh"),d(e,"class","basket svelte-11x6ndh")},m(f,h){M(f,e,h),m(e,t),m(t,s);for(let u=0;u<r.length;u+=1)r[u].m(s,null);m(e,a),m(e,n),m(n,l)},p(f,[h]){h&3&&(c=f[1],r=he(r,h,g,1,f,c,o,s,ye,ge,null,_e))},i:j,o:j,d(f){f&&p(e);for(let h=0;h<r.length;h+=1)r[h].d()}}}function Ae(i,e,t){let{page:s=1}=e,r={};se.subscribe(a=>{t(0,r=a)});let o=[];return me.subscribe(a=>{t(1,o=a)}),re(async()=>{let a=window.Telegram.WebApp;a.BackButton.show(),a.BackButton.onClick(()=>{t(2,s=0),a.BackButton.hide()});for(var n=document.querySelectorAll(".basket__back a"),l=0;l<n.length;l++)n[l].addEventListener("click",function(){t(2,s=s==0?1:0)})}),i.$$set=a=>{"page"in a&&t(2,s=a.page)},[r,o,s]}class Te extends X{constructor(e){super(),Q(this,e,Ae,Ve,U,{page:2})}}function Pe(i){let e,t,s;function r(a){i[9](a)}let o={};return i[4]!==void 0&&(o.page=i[4]),e=new Te({props:o}),N.push(()=>S(e,"page",r)),{c(){z(e.$$.fragment)},l(a){J(e.$$.fragment,a)},m(a,n){K(e,a,n),s=!0},p(a,n){const l={};!t&&n&16&&(t=!0,l.page=a[4],O(()=>t=!1)),e.$set(l)},i(a){s||(D(e.$$.fragment,a),s=!0)},o(a){V(e.$$.fragment,a),s=!1},d(a){R(e,a)}}}function Ne(i){let e,t,s,r,o,a,n,l;function c(_){i[5](_)}function g(_){i[6](_)}let f={};i[1]!==void 0&&(f.categories=i[1]),i[3]!==void 0&&(f.currentCategory=i[3]),e=new De({props:f}),N.push(()=>S(e,"categories",c)),N.push(()=>S(e,"currentCategory",g));function h(_){i[7](_)}function u(_){i[8](_)}let C={products:i[2],categories:i[1]};return i[0]!==void 0&&(C.basket=i[0]),i[3]!==void 0&&(C.currentCategory=i[3]),o=new Ce({props:C}),N.push(()=>S(o,"basket",h)),N.push(()=>S(o,"currentCategory",u)),{c(){z(e.$$.fragment),r=$(),z(o.$$.fragment)},l(_){J(e.$$.fragment,_),r=q(_),J(o.$$.fragment,_)},m(_,v){K(e,_,v),M(_,r,v),K(o,_,v),l=!0},p(_,v){const I={};!t&&v&2&&(t=!0,I.categories=_[1],O(()=>t=!1)),!s&&v&8&&(s=!0,I.currentCategory=_[3],O(()=>s=!1)),e.$set(I);const w={};v&4&&(w.products=_[2]),v&2&&(w.categories=_[1]),!a&&v&1&&(a=!0,w.basket=_[0],O(()=>a=!1)),!n&&v&8&&(n=!0,w.currentCategory=_[3],O(()=>n=!1)),o.$set(w)},i(_){l||(D(e.$$.fragment,_),D(o.$$.fragment,_),l=!0)},o(_){V(e.$$.fragment,_),V(o.$$.fragment,_),l=!1},d(_){R(e,_),_&&p(r),R(o,_)}}}function Se(i){let e,t,s,r,o;const a=[Ne,Pe],n=[];function l(c,g){return c[4]==0?0:1}return s=l(i),r=n[s]=a[s](i),{c(){e=b("main"),t=b("div"),r.c(),this.h()},l(c){e=y(c,"MAIN",{class:!0});var g=k(e);t=y(g,"DIV",{class:!0});var f=k(t);r.l(f),f.forEach(p),g.forEach(p),this.h()},h(){d(t,"class","app svelte-plkv"),d(e,"class","svelte-plkv")},m(c,g){M(c,e,g),m(e,t),n[s].m(t,null),o=!0},p(c,[g]){let f=s;s=l(c),s===f?n[s].p(c,g):(de(),V(n[f],1,1,()=>{n[f]=null}),pe(),r=n[s],r?r.p(c,g):(r=n[s]=a[s](c),r.c()),D(r,1),r.m(t,null))},i(c){o||(D(r),o=!0)},o(c){V(r),o=!1},d(c){c&&p(e),n[s].d()}}}function Le(i,e,t){let s=[],r=[],o={},a={},n=0;ke.subscribe(u=>{t(1,s=u)}),me.subscribe(u=>{t(2,r=u)}),re(async()=>{let u=window.Telegram.WebApp;t(3,o=s[0]),u.expand(),u.MainButton.setText("\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0437\u0430\u043A\u0430\u0437"),u.MainButton.setParams({color:"#31b545"}),u.setBackgroundColor("secondary_bg_color"),u.MainButton.onClick(()=>{u.HapticFeedback.impactOccurred("light"),n==0?(t(4,n=1),alert(a.reduce((C,_)=>C+_,0)),alert(`\u041A \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044E ${a.reduce((C,_)=>C+_,0)} \u20BD`),u.MainButton.text="asgasgags",alert(u.MainButton.text)):(t(4,n=0),alert(u.MainButton.text),u.MainButton.text="\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0437\u0430\u043A\u0430\u0437",alert(u.MainButton.text))}),se.subscribe(C=>{t(0,a=C),Object.keys(a).length!==0?u.MainButton.show():u.MainButton.hide()})});function l(u){s=u,t(1,s)}function c(u){o=u,t(3,o)}function g(u){a=u,t(0,a)}function f(u){o=u,t(3,o)}function h(u){n=u,t(4,n)}return i.$$.update=()=>{i.$$.dirty&1&&se.set(a)},[a,s,r,o,n,l,c,g,f,h]}class He extends X{constructor(e){super(),Q(this,e,Le,Se,U,{})}}export{He as default};
