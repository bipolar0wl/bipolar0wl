import{S as ae,i as le,s as oe,k as p,q as $,l as v,m as b,r as N,h as g,n as d,b as O,G as u,I as Ie,u as Q,B as x,g as Ce,J as Ee,K as Ae,d as je,f as G,t as W,o as ce,L as z,M as F,e as J,w as ee,x as te,y as se,N as K,z as re,a as T,c as P,O as De,P as me}from"../../chunks/index-981bc336.js";import{b as ie,p as we,c as Be}from"../../chunks/store-6888a841.js";import{P as Ve}from"../../chunks/ProductList-d2187463.js";function Me(c){let e,t=c[1].name+"",s,l,o,r,a,n;return{c(){e=p("a"),s=$(t),this.h()},l(i){e=v(i,"A",{href:!0,"data-category-name":!0,class:!0});var _=b(e);s=N(_,t),_.forEach(g),this.h()},h(){d(e,"href",l="#"+c[1].name),d(e,"data-category-name",o=c[1].name),d(e,"class",r="category "+(c[0].id===c[1].id?"category--active":"")+" svelte-adoked")},m(i,_){O(i,e,_),u(e,s),a||(n=Ie(e,"click",c[3]),a=!0)},p(i,[_]){_&2&&t!==(t=i[1].name+"")&&Q(s,t),_&2&&l!==(l="#"+i[1].name)&&d(e,"href",l),_&2&&o!==(o=i[1].name)&&d(e,"data-category-name",o),_&3&&r!==(r="category "+(i[0].id===i[1].id?"category--active":"")+" svelte-adoked")&&d(e,"class",r)},i:x,o:x,d(i){i&&g(e),a=!1,n()}}}const he=40;function Te(c,e,t){let{category:s={id:0,name:""}}=e,{currentCategory:l={id:0,name:""}}=e;function o(){let a=document.getElementById(s.name);setTimeout(()=>{document.documentElement.clientHeight==document.body.scrollHeight-window.pageYOffset||window.pageYOffset+he==a.offsetTop?(t(0,l=s),setTimeout(()=>{t(0,l=s)},100)):o()},100)}const r=a=>{a.preventDefault();let n=document.getElementById(s.name),i=n?n.offsetTop:0;window.scrollTo({top:i-he,behavior:"smooth"}),o()};return c.$$set=a=>{"category"in a&&t(1,s=a.category),"currentCategory"in a&&t(0,l=a.currentCategory)},[l,s,o,r]}class Pe extends ae{constructor(e){super(),le(this,e,Te,Me,oe,{category:1,currentCategory:0})}}function pe(c,e,t){const s=c.slice();return s[3]=e[t],s}function ve(c,e){let t,s,l,o;function r(n){e[2](n)}let a={category:e[3]};return e[0]!==void 0&&(a.currentCategory=e[0]),s=new Pe({props:a}),z.push(()=>F(s,"currentCategory",r)),{key:c,first:null,c(){t=J(),ee(s.$$.fragment),this.h()},l(n){t=J(),te(s.$$.fragment,n),this.h()},h(){this.first=t},m(n,i){O(n,t,i),se(s,n,i),o=!0},p(n,i){e=n;const _={};i&2&&(_.category=e[3]),!l&&i&1&&(l=!0,_.currentCategory=e[0],K(()=>l=!1)),s.$set(_)},i(n){o||(G(s.$$.fragment,n),o=!0)},o(n){W(s.$$.fragment,n),o=!1},d(n){n&&g(t),re(s,n)}}}function $e(c){let e,t=[],s=new Map,l,o=c[1];const r=a=>a[3].id;for(let a=0;a<o.length;a+=1){let n=pe(c,o,a),i=r(n);s.set(i,t[a]=ve(i,n))}return{c(){e=p("div");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=v(a,"DIV",{class:!0});var n=b(e);for(let i=0;i<t.length;i+=1)t[i].l(n);n.forEach(g),this.h()},h(){d(e,"class","categories svelte-xbh343")},m(a,n){O(a,e,n);for(let i=0;i<t.length;i+=1)t[i].m(e,null);l=!0},p(a,[n]){n&3&&(o=a[1],Ce(),t=Ee(t,n,r,1,a,o,s,e,Ae,ve,null,pe),je())},i(a){if(!l){for(let n=0;n<o.length;n+=1)G(t[n]);l=!0}},o(a){for(let n=0;n<t.length;n+=1)W(t[n]);l=!1},d(a){a&&g(e);for(let n=0;n<t.length;n+=1)t[n].d()}}}function Ne(c,e,t){let{categories:s=[]}=e,{currentCategory:l={id:0,name:""}}=e;ce(()=>{let r=document.getElementsByClassName("category");[].forEach.call(r,function(a,n,i){})});function o(r){l=r,t(0,l)}return c.$$set=r=>{"categories"in r&&t(1,s=r.categories),"currentCategory"in r&&t(0,l=r.currentCategory)},[l,s,o]}class Se extends ae{constructor(e){super(),le(this,e,Ne,$e,oe,{categories:1,currentCategory:0})}}function be(c,e,t){const s=c.slice();return s[3]=e[t],s}function ye(c){let e,t,s,l,o,r,a,n,i=c[3].name+"",_,h,B=(c[0][c[3].id]||0)+"",m,w,f,E,I=c[3].description+"",C,Y,S,V=c[3].price+"",M,q;return{c(){e=p("div"),t=p("div"),s=p("img"),o=T(),r=p("div"),a=p("div"),n=p("span"),_=$(i),h=p("span"),m=$(B),w=$("x"),f=T(),E=p("span"),C=$(I),Y=T(),S=p("div"),M=$(V),q=T(),this.h()},l(j){e=v(j,"DIV",{class:!0});var A=b(e);t=v(A,"DIV",{class:!0});var L=b(t);s=v(L,"IMG",{class:!0,src:!0,alt:!0}),o=P(L),r=v(L,"DIV",{class:!0});var H=b(r);a=v(H,"DIV",{class:!0});var y=b(a);n=v(y,"SPAN",{class:!0});var k=b(n);_=N(k,i),k.forEach(g),h=v(y,"SPAN",{class:!0});var D=b(h);m=N(D,B),w=N(D,"x"),D.forEach(g),y.forEach(g),f=P(H),E=v(H,"SPAN",{class:!0});var R=b(E);C=N(R,I),R.forEach(g),H.forEach(g),L.forEach(g),Y=P(A),S=v(A,"DIV",{class:!0});var X=b(S);M=N(X,V),X.forEach(g),q=P(A),A.forEach(g),this.h()},h(){d(s,"class","item__img svelte-mxor1j"),me(s.src,l=c[3].image)||d(s,"src",l),d(s,"alt",""),d(n,"class","item__name svelte-mxor1j"),d(h,"class","item__count svelte-mxor1j"),d(a,"class","svelte-mxor1j"),d(E,"class","item__description svelte-mxor1j"),d(r,"class","item__text svelte-mxor1j"),d(t,"class","item__info svelte-mxor1j"),d(S,"class","item__price svelte-mxor1j"),d(e,"class","item svelte-mxor1j")},m(j,A){O(j,e,A),u(e,t),u(t,s),u(t,o),u(t,r),u(r,a),u(a,n),u(n,_),u(a,h),u(h,m),u(h,w),u(r,f),u(r,E),u(E,C),u(e,Y),u(e,S),u(S,M),u(e,q)},p(j,A){A&2&&!me(s.src,l=j[3].image)&&d(s,"src",l),A&2&&i!==(i=j[3].name+"")&&Q(_,i),A&3&&B!==(B=(j[0][j[3].id]||0)+"")&&Q(m,B),A&2&&I!==(I=j[3].description+"")&&Q(C,I),A&2&&V!==(V=j[3].price+"")&&Q(M,V)},d(j){j&&g(e)}}}function ke(c,e){let t,s,l=e[0][e[3].id]!=null&&ye(e);return{key:c,first:null,c(){t=J(),l&&l.c(),s=J(),this.h()},l(o){t=J(),l&&l.l(o),s=J(),this.h()},h(){this.first=t},m(o,r){O(o,t,r),l&&l.m(o,r),O(o,s,r)},p(o,r){e=o,e[0][e[3].id]!=null?l?l.p(e,r):(l=ye(e),l.c(),l.m(s.parentNode,s)):l&&(l.d(1),l=null)},d(o){o&&g(t),l&&l.d(o),o&&g(s)}}}function Le(c){let e,t,s,l,o,r,a,n,i,_,h,B,m,w,f,E,I,C=[],Y=new Map,S,V,M,q,j,A,L=c[1];const H=y=>y[3].id;for(let y=0;y<L.length;y+=1){let k=be(c,L,y),D=H(k);Y.set(D,C[y]=ke(D,k))}return{c(){e=p("div"),t=p("div"),s=p("a"),l=$("\u2190"),o=T(),r=p("a"),a=$("\u041C\u0430\u0433\u0430\u0437\u0438\u043D"),n=T(),i=p("div"),_=p("div"),h=p("p"),B=$("\u0412\u0430\u0448 \u0437\u0430\u043A\u0430\u0437"),m=T(),w=p("a"),f=$("\u041D\u0430\u0437\u0430\u0434"),E=T(),I=p("div");for(let y=0;y<C.length;y+=1)C[y].c();S=T(),V=p("div"),M=p("textarea"),q=T(),j=p("a"),A=$("\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"),this.h()},l(y){e=v(y,"DIV",{class:!0});var k=b(e);t=v(k,"DIV",{class:!0});var D=b(t);s=v(D,"A",{href:!0,class:!0});var R=b(s);l=N(R,"\u2190"),R.forEach(g),o=P(D),r=v(D,"A",{href:!0,class:!0});var X=b(r);a=N(X,"\u041C\u0430\u0433\u0430\u0437\u0438\u043D"),X.forEach(g),D.forEach(g),n=P(k),i=v(k,"DIV",{class:!0});var U=b(i);_=v(U,"DIV",{class:!0});var Z=b(_);h=v(Z,"P",{class:!0});var ue=b(h);B=N(ue,"\u0412\u0430\u0448 \u0437\u0430\u043A\u0430\u0437"),ue.forEach(g),m=P(Z),w=v(Z,"A",{href:!0,class:!0});var _e=b(w);f=N(_e,"\u041D\u0430\u0437\u0430\u0434"),_e.forEach(g),Z.forEach(g),E=P(U),I=v(U,"DIV",{class:!0});var fe=b(I);for(let ne=0;ne<C.length;ne+=1)C[ne].l(fe);fe.forEach(g),U.forEach(g),S=P(k),V=v(k,"DIV",{class:!0});var de=b(V);M=v(de,"TEXTAREA",{class:!0,type:!0,placeholder:!0}),b(M).forEach(g),de.forEach(g),q=P(k),j=v(k,"A",{class:!0});var ge=b(j);A=N(ge,"\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"),ge.forEach(g),k.forEach(g),this.h()},h(){d(s,"href","/"),d(s,"class","svelte-mxor1j"),d(r,"href","/"),d(r,"class","svelte-mxor1j"),d(t,"class","basket__back svelte-mxor1j"),d(h,"class","basket__order__title svelte-mxor1j"),d(w,"href","/"),d(w,"class","svelte-mxor1j"),d(_,"class","basket__order__actions svelte-mxor1j"),d(I,"class","basket__order__list svelte-mxor1j"),d(i,"class","basket__order svelte-mxor1j"),d(M,"class","basket__comment svelte-mxor1j"),d(M,"type","text"),d(M,"placeholder","\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"),d(V,"class","svelte-mxor1j"),d(j,"class","basket__buy svelte-mxor1j"),d(e,"class","basket svelte-mxor1j")},m(y,k){O(y,e,k),u(e,t),u(t,s),u(s,l),u(t,o),u(t,r),u(r,a),u(e,n),u(e,i),u(i,_),u(_,h),u(h,B),u(_,m),u(_,w),u(w,f),u(i,E),u(i,I);for(let D=0;D<C.length;D+=1)C[D].m(I,null);u(e,S),u(e,V),u(V,M),u(e,q),u(e,j),u(j,A)},p(y,[k]){k&3&&(L=y[1],C=Ee(C,k,H,1,y,L,Y,I,De,ke,null,be))},i:x,o:x,d(y){y&&g(e);for(let k=0;k<C.length;k+=1)C[k].d()}}}function Oe(c,e,t){let{page:s=1}=e,l={};ie.subscribe(r=>{t(0,l=r)});let o=[];return we.subscribe(r=>{t(1,o=r)}),ce(async()=>{window.Telegram.WebApp;for(var r=document.querySelectorAll(".basket__back a"),a=0;a<r.length;a++)r[a].addEventListener("click",function(){t(2,s=s==0?1:0)})}),c.$$set=r=>{"page"in r&&t(2,s=r.page)},[l,o,s]}class qe extends ae{constructor(e){super(),le(this,e,Oe,Le,oe,{page:2})}}function He(c){let e,t,s;function l(r){c[9](r)}let o={};return c[4]!==void 0&&(o.page=c[4]),e=new qe({props:o}),z.push(()=>F(e,"page",l)),{c(){ee(e.$$.fragment)},l(r){te(e.$$.fragment,r)},m(r,a){se(e,r,a),s=!0},p(r,a){const n={};!t&&a&16&&(t=!0,n.page=r[4],K(()=>t=!1)),e.$set(n)},i(r){s||(G(e.$$.fragment,r),s=!0)},o(r){W(e.$$.fragment,r),s=!1},d(r){re(e,r)}}}function Ge(c){let e,t,s,l,o,r,a,n;function i(f){c[5](f)}function _(f){c[6](f)}let h={};c[1]!==void 0&&(h.categories=c[1]),c[3]!==void 0&&(h.currentCategory=c[3]),e=new Se({props:h}),z.push(()=>F(e,"categories",i)),z.push(()=>F(e,"currentCategory",_));function B(f){c[7](f)}function m(f){c[8](f)}let w={products:c[2],categories:c[1]};return c[0]!==void 0&&(w.basket=c[0]),c[3]!==void 0&&(w.currentCategory=c[3]),o=new Ve({props:w}),z.push(()=>F(o,"basket",B)),z.push(()=>F(o,"currentCategory",m)),{c(){ee(e.$$.fragment),l=T(),ee(o.$$.fragment)},l(f){te(e.$$.fragment,f),l=P(f),te(o.$$.fragment,f)},m(f,E){se(e,f,E),O(f,l,E),se(o,f,E),n=!0},p(f,E){const I={};!t&&E&2&&(t=!0,I.categories=f[1],K(()=>t=!1)),!s&&E&8&&(s=!0,I.currentCategory=f[3],K(()=>s=!1)),e.$set(I);const C={};E&4&&(C.products=f[2]),E&2&&(C.categories=f[1]),!r&&E&1&&(r=!0,C.basket=f[0],K(()=>r=!1)),!a&&E&8&&(a=!0,C.currentCategory=f[3],K(()=>a=!1)),o.$set(C)},i(f){n||(G(e.$$.fragment,f),G(o.$$.fragment,f),n=!0)},o(f){W(e.$$.fragment,f),W(o.$$.fragment,f),n=!1},d(f){re(e,f),f&&g(l),re(o,f)}}}function We(c){let e,t,s,l,o;const r=[Ge,He],a=[];function n(i,_){return i[4]==0?0:1}return s=n(c),l=a[s]=r[s](c),{c(){e=p("main"),t=p("div"),l.c(),this.h()},l(i){e=v(i,"MAIN",{class:!0});var _=b(e);t=v(_,"DIV",{class:!0});var h=b(t);l.l(h),h.forEach(g),_.forEach(g),this.h()},h(){d(t,"class","app svelte-10l4d0h"),d(e,"class","svelte-10l4d0h")},m(i,_){O(i,e,_),u(e,t),a[s].m(t,null),o=!0},p(i,[_]){let h=s;s=n(i),s===h?a[s].p(i,_):(Ce(),W(a[h],1,1,()=>{a[h]=null}),je(),l=a[s],l?l.p(i,_):(l=a[s]=r[s](i),l.c()),G(l,1),l.m(t,null))},i(i){o||(G(l),o=!0)},o(i){W(l),o=!1},d(i){i&&g(e),a[s].d()}}}function Ye(c,e,t){let s=[],l=[],o={},r={},a=0;Be.subscribe(m=>{t(1,s=m)}),we.subscribe(m=>{t(2,l=m)}),ce(async()=>{let m=window.Telegram.WebApp;t(3,o=s[0]),m.expand(),m.MainButton.setText("\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0437\u0430\u043A\u0430\u0437"),m.MainButton.setParams({color:"#31b545"}),m.setBackgroundColor("secondary_bg_color"),m.MainButton.onClick(()=>{t(4,a=a==0?1:0)}),ie.subscribe(w=>{t(0,r=w),Object.keys(r).length!==0?m.MainButton.show():m.MainButton.hide()})});function n(m){s=m,t(1,s)}function i(m){o=m,t(3,o)}function _(m){r=m,t(0,r)}function h(m){o=m,t(3,o)}function B(m){a=m,t(4,a)}return c.$$.update=()=>{c.$$.dirty&1&&ie.set(r)},[r,s,l,o,a,n,i,_,h,B]}class Ke extends ae{constructor(e){super(),le(this,e,Ye,We,oe,{})}}export{Ke as default};
