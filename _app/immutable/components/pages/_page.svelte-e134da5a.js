import{S as X,i as Q,s as Z,k as y,q as T,l as k,m as C,r as D,h as v,n as h,b as M,G as m,I as de,u as F,B as z,g as he,J as pe,K as be,d as me,f as N,t as P,o as re,L as S,M as L,e as q,w as J,x as K,y as R,N as H,z as U,a as A,c as V,O as ye,P as oe}from"../../chunks/index-981bc336.js";import{b as se,p as ve,c as ke}from"../../chunks/store-69d22bd8.js";import{P as Ce}from"../../chunks/ProductList-4a1e70a6.js";function Ee(i){let e,t=i[1].name+"",s,r,o,a,l,n;return{c(){e=y("a"),s=T(t),this.h()},l(c){e=k(c,"A",{href:!0,"data-category-name":!0,class:!0});var p=C(e);s=D(p,t),p.forEach(v),this.h()},h(){h(e,"href",r="#"+i[1].name),h(e,"data-category-name",o=i[1].name),h(e,"class",a="category "+(i[0].id===i[1].id?"category--active":"")+" svelte-1c0y5ce")},m(c,p){M(c,e,p),m(e,s),l||(n=de(e,"click",i[3]),l=!0)},p(c,[p]){p&2&&t!==(t=c[1].name+"")&&F(s,t),p&2&&r!==(r="#"+c[1].name)&&h(e,"href",r),p&2&&o!==(o=c[1].name)&&h(e,"data-category-name",o),p&3&&a!==(a="category "+(c[0].id===c[1].id?"category--active":"")+" svelte-1c0y5ce")&&h(e,"class",a)},i:z,o:z,d(c){c&&v(e),l=!1,n()}}}const ie=40;function we(i,e,t){let{category:s={id:0,name:""}}=e,{currentCategory:r={id:0,name:""}}=e;function o(){let l=document.getElementById(s.name);setTimeout(()=>{document.documentElement.clientHeight==document.body.scrollHeight-window.pageYOffset||window.pageYOffset+ie==l.offsetTop?(t(0,r=s),setTimeout(()=>{t(0,r=s)},100)):o()},100)}const a=l=>{l.preventDefault();let n=document.getElementById(s.name),c=n?n.offsetTop:0;window.scrollTo({top:c-ie,behavior:"smooth"}),o()};return i.$$set=l=>{"category"in l&&t(1,s=l.category),"currentCategory"in l&&t(0,r=l.currentCategory)},[r,s,o,a]}class Be extends X{constructor(e){super(),Q(this,e,we,Ee,Z,{category:1,currentCategory:0})}}function ce(i,e,t){const s=i.slice();return s[3]=e[t],s}function ue(i,e){let t,s,r,o;function a(n){e[2](n)}let l={category:e[3]};return e[0]!==void 0&&(l.currentCategory=e[0]),s=new Be({props:l}),S.push(()=>L(s,"currentCategory",a)),{key:i,first:null,c(){t=q(),J(s.$$.fragment),this.h()},l(n){t=q(),K(s.$$.fragment,n),this.h()},h(){this.first=t},m(n,c){M(n,t,c),R(s,n,c),o=!0},p(n,c){e=n;const p={};c&2&&(p.category=e[3]),!r&&c&1&&(r=!0,p.currentCategory=e[0],H(()=>r=!1)),s.$set(p)},i(n){o||(N(s.$$.fragment,n),o=!0)},o(n){P(s.$$.fragment,n),o=!1},d(n){n&&v(t),U(s,n)}}}function Ie(i){let e,t=[],s=new Map,r,o=i[1];const a=l=>l[3].id;for(let l=0;l<o.length;l+=1){let n=ce(i,o,l),c=a(n);s.set(c,t[l]=ue(c,n))}return{c(){e=y("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=k(l,"DIV",{class:!0});var n=C(e);for(let c=0;c<t.length;c+=1)t[c].l(n);n.forEach(v),this.h()},h(){h(e,"class","categories svelte-xbh343")},m(l,n){M(l,e,n);for(let c=0;c<t.length;c+=1)t[c].m(e,null);r=!0},p(l,[n]){n&3&&(o=l[1],he(),t=pe(t,n,a,1,l,o,s,e,be,ue,null,ce),me())},i(l){if(!r){for(let n=0;n<o.length;n+=1)N(t[n]);r=!0}},o(l){for(let n=0;n<t.length;n+=1)P(t[n]);r=!1},d(l){l&&v(e);for(let n=0;n<t.length;n+=1)t[n].d()}}}function Me(i,e,t){let{categories:s=[]}=e,{currentCategory:r={id:0,name:""}}=e;re(()=>{let a=document.getElementsByClassName("category");[].forEach.call(a,function(l,n,c){})});function o(a){r=a,t(0,r)}return i.$$set=a=>{"categories"in a&&t(1,s=a.categories),"currentCategory"in a&&t(0,r=a.currentCategory)},[r,s,o]}class Te extends X{constructor(e){super(),Q(this,e,Me,Ie,Z,{categories:1,currentCategory:0})}}function _e(i,e,t){const s=i.slice();return s[3]=e[t],s}function fe(i){let e,t,s,r,o,a,l,n,c=i[3].name+"",p,f,g=(i[0][i[3].id]||0)+"",b,u,_,d,B=i[3].description+"",I,$,O,W=i[3].price*i[0][i[3].id]+"",G,x;return{c(){e=y("div"),t=y("div"),s=y("img"),o=A(),a=y("div"),l=y("div"),n=y("span"),p=T(c),f=y("span"),b=T(g),u=T("x"),_=A(),d=y("span"),I=T(B),$=A(),O=y("div"),G=T(W),x=A(),this.h()},l(E){e=k(E,"DIV",{class:!0});var w=C(e);t=k(w,"DIV",{class:!0});var Y=C(t);s=k(Y,"IMG",{class:!0,src:!0,alt:!0}),o=V(Y),a=k(Y,"DIV",{class:!0});var j=C(a);l=k(j,"DIV",{class:!0});var ee=C(l);n=k(ee,"SPAN",{class:!0});var ae=C(n);p=D(ae,c),ae.forEach(v),f=k(ee,"SPAN",{class:!0});var te=C(f);b=D(te,g),u=D(te,"x"),te.forEach(v),ee.forEach(v),_=V(j),d=k(j,"SPAN",{class:!0});var ne=C(d);I=D(ne,B),ne.forEach(v),j.forEach(v),Y.forEach(v),$=V(w),O=k(w,"DIV",{class:!0});var le=C(O);G=D(le,W),le.forEach(v),x=V(w),w.forEach(v),this.h()},h(){h(s,"class","item__img svelte-11x6ndh"),oe(s.src,r="/bipolar0wl/"+i[3].image)||h(s,"src",r),h(s,"alt",""),h(n,"class","item__name svelte-11x6ndh"),h(f,"class","item__count svelte-11x6ndh"),h(l,"class","svelte-11x6ndh"),h(d,"class","item__description svelte-11x6ndh"),h(a,"class","item__text svelte-11x6ndh"),h(t,"class","item__info svelte-11x6ndh"),h(O,"class","item__price svelte-11x6ndh"),h(e,"class","item svelte-11x6ndh")},m(E,w){M(E,e,w),m(e,t),m(t,s),m(t,o),m(t,a),m(a,l),m(l,n),m(n,p),m(l,f),m(f,b),m(f,u),m(a,_),m(a,d),m(d,I),m(e,$),m(e,O),m(O,G),m(e,x)},p(E,w){w&2&&!oe(s.src,r="/bipolar0wl/"+E[3].image)&&h(s,"src",r),w&2&&c!==(c=E[3].name+"")&&F(p,c),w&3&&g!==(g=(E[0][E[3].id]||0)+"")&&F(b,g),w&2&&B!==(B=E[3].description+"")&&F(I,B),w&3&&W!==(W=E[3].price*E[0][E[3].id]+"")&&F(G,W)},d(E){E&&v(e)}}}function ge(i,e){let t,s,r=e[0][e[3].id]!=null&&fe(e);return{key:i,first:null,c(){t=q(),r&&r.c(),s=q(),this.h()},l(o){t=q(),r&&r.l(o),s=q(),this.h()},h(){this.first=t},m(o,a){M(o,t,a),r&&r.m(o,a),M(o,s,a)},p(o,a){e=o,e[0][e[3].id]!=null?r?r.p(e,a):(r=fe(e),r.c(),r.m(s.parentNode,s)):r&&(r.d(1),r=null)},d(o){o&&v(t),r&&r.d(o),o&&v(s)}}}function De(i){let e,t,s,r=[],o=new Map,a,l,n,c=i[1];const p=f=>f[3].id;for(let f=0;f<c.length;f+=1){let g=_e(i,c,f),b=p(g);o.set(b,r[f]=ge(b,g))}return{c(){e=y("div"),t=y("div"),s=y("div");for(let f=0;f<r.length;f+=1)r[f].c();a=A(),l=y("div"),n=y("textarea"),this.h()},l(f){e=k(f,"DIV",{class:!0});var g=C(e);t=k(g,"DIV",{class:!0});var b=C(t);s=k(b,"DIV",{class:!0});var u=C(s);for(let d=0;d<r.length;d+=1)r[d].l(u);u.forEach(v),b.forEach(v),a=V(g),l=k(g,"DIV",{class:!0});var _=C(l);n=k(_,"TEXTAREA",{class:!0,type:!0,placeholder:!0}),C(n).forEach(v),_.forEach(v),g.forEach(v),this.h()},h(){h(s,"class","basket__order__list svelte-11x6ndh"),h(t,"class","basket__order svelte-11x6ndh"),h(n,"class","basket__comment svelte-11x6ndh"),h(n,"type","text"),h(n,"placeholder","\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"),h(l,"class","svelte-11x6ndh"),h(e,"class","basket svelte-11x6ndh")},m(f,g){M(f,e,g),m(e,t),m(t,s);for(let b=0;b<r.length;b+=1)r[b].m(s,null);m(e,a),m(e,l),m(l,n)},p(f,[g]){g&3&&(c=f[1],r=pe(r,g,p,1,f,c,o,s,ye,ge,null,_e))},i:z,o:z,d(f){f&&v(e);for(let g=0;g<r.length;g+=1)r[g].d()}}}function Ae(i,e,t){let{page:s=1}=e,r={};se.subscribe(a=>{t(0,r=a)});let o=[];return ve.subscribe(a=>{t(1,o=a)}),re(async()=>{let a=window.Telegram.WebApp;a.BackButton.show(),a.BackButton.onClick(()=>{t(2,s=0),a.BackButton.hide()});for(var l=document.querySelectorAll(".basket__back a"),n=0;n<l.length;n++)l[n].addEventListener("click",function(){t(2,s=s==0?1:0)})}),i.$$set=a=>{"page"in a&&t(2,s=a.page)},[r,o,s]}class Ve extends X{constructor(e){super(),Q(this,e,Ae,De,Z,{page:2})}}function Ne(i){let e,t,s;function r(a){i[10](a)}let o={};return i[4]!==void 0&&(o.page=i[4]),e=new Ve({props:o}),S.push(()=>L(e,"page",r)),{c(){J(e.$$.fragment)},l(a){K(e.$$.fragment,a)},m(a,l){R(e,a,l),s=!0},p(a,l){const n={};!t&&l&16&&(t=!0,n.page=a[4],H(()=>t=!1)),e.$set(n)},i(a){s||(N(e.$$.fragment,a),s=!0)},o(a){P(e.$$.fragment,a),s=!1},d(a){U(e,a)}}}function Pe(i){let e,t,s,r,o,a,l,n;function c(_){i[6](_)}function p(_){i[7](_)}let f={};i[1]!==void 0&&(f.categories=i[1]),i[3]!==void 0&&(f.currentCategory=i[3]),e=new Te({props:f}),S.push(()=>L(e,"categories",c)),S.push(()=>L(e,"currentCategory",p));function g(_){i[8](_)}function b(_){i[9](_)}let u={products:i[2],categories:i[1]};return i[0]!==void 0&&(u.basket=i[0]),i[3]!==void 0&&(u.currentCategory=i[3]),o=new Ce({props:u}),S.push(()=>L(o,"basket",g)),S.push(()=>L(o,"currentCategory",b)),{c(){J(e.$$.fragment),r=A(),J(o.$$.fragment)},l(_){K(e.$$.fragment,_),r=V(_),K(o.$$.fragment,_)},m(_,d){R(e,_,d),M(_,r,d),R(o,_,d),n=!0},p(_,d){const B={};!t&&d&2&&(t=!0,B.categories=_[1],H(()=>t=!1)),!s&&d&8&&(s=!0,B.currentCategory=_[3],H(()=>s=!1)),e.$set(B);const I={};d&4&&(I.products=_[2]),d&2&&(I.categories=_[1]),!a&&d&1&&(a=!0,I.basket=_[0],H(()=>a=!1)),!l&&d&8&&(l=!0,I.currentCategory=_[3],H(()=>l=!1)),o.$set(I)},i(_){n||(N(e.$$.fragment,_),N(o.$$.fragment,_),n=!0)},o(_){P(e.$$.fragment,_),P(o.$$.fragment,_),n=!1},d(_){U(e,_),_&&v(r),U(o,_)}}}function Oe(i){let e,t,s,r,o,a,l,n,c,p;const f=[Pe,Ne],g=[];function b(u,_){return u[4]==0?0:1}return s=b(i),r=g[s]=f[s](i),{c(){e=y("main"),t=y("div"),r.c(),o=A(),a=y("button"),l=T("click me"),this.h()},l(u){e=k(u,"MAIN",{class:!0});var _=C(e);t=k(_,"DIV",{class:!0});var d=C(t);r.l(d),o=V(d),a=k(d,"BUTTON",{class:!0});var B=C(a);l=D(B,"click me"),B.forEach(v),d.forEach(v),_.forEach(v),this.h()},h(){h(a,"class","svelte-plkv"),h(t,"class","app svelte-plkv"),h(e,"class","svelte-plkv")},m(u,_){M(u,e,_),m(e,t),g[s].m(t,null),m(t,o),m(t,a),m(a,l),n=!0,c||(p=de(a,"click",i[5]),c=!0)},p(u,[_]){let d=s;s=b(u),s===d?g[s].p(u,_):(he(),P(g[d],1,1,()=>{g[d]=null}),me(),r=g[s],r?r.p(u,_):(r=g[s]=f[s](u),r.c()),N(r,1),r.m(t,o))},i(u){n||(N(r),n=!0)},o(u){P(r),n=!1},d(u){u&&v(e),g[s].d(),c=!1,p()}}}function Se(i,e,t){let s=[],r=[],o={},a={},l=0;ke.subscribe(u=>{t(1,s=u)}),ve.subscribe(u=>{t(2,r=u)}),re(async()=>{let u=window.Telegram.WebApp;t(3,o=s[0]),u.expand(),u.MainButton.setText("\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0437\u0430\u043A\u0430\u0437"),u.MainButton.setParams({color:"#31b545"}),u.setBackgroundColor("secondary_bg_color"),u.MainButton.onClick(()=>{alert(window.Telegram.WebApp.MainButton),u.HapticFeedback.impactOccurred("light"),l==0?(t(4,l=1),alert(u.MainButton)):(t(4,l=0),alert(u.MainButton)),alert(3)}),se.subscribe(_=>{t(0,a=_),Object.keys(a).length!==0?u.MainButton.show():u.MainButton.hide()})});function n(){l==0?(t(4,l=1),alert("-")):(alert("+"),t(4,l=0))}function c(u){s=u,t(1,s)}function p(u){o=u,t(3,o)}function f(u){a=u,t(0,a)}function g(u){o=u,t(3,o)}function b(u){l=u,t(4,l)}return i.$$.update=()=>{i.$$.dirty&1&&se.set(a)},[a,s,r,o,l,n,c,p,f,g,b]}class We extends X{constructor(e){super(),Q(this,e,Se,Oe,Z,{})}}export{We as default};
