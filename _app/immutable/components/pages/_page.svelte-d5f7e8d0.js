import{S as ae,i as le,s as oe,k as p,q as V,l as b,m as y,r as A,h as m,n as d,b as O,G as f,I as we,u as F,B as U,g as ke,J as Ce,K as $e,d as Ee,f as G,t as Y,o as je,L as W,M as X,e as J,w as ee,x as te,y as se,N as Q,z as re,a as T,c as N,O as Be,P as ge}from"../../chunks/index-981bc336.js";import{b as ie,p as Ie,c as De}from"../../chunks/store-6888a841.js";import{P as Ve}from"../../chunks/ProductList-8021890c.js";function Ae(i){let e,t=i[1].name+"",s,l,o,n,a,r;return{c(){e=p("a"),s=V(t),this.h()},l(c){e=b(c,"A",{href:!0,"data-category-name":!0,class:!0});var g=y(e);s=A(g,t),g.forEach(m),this.h()},h(){d(e,"href",l="#"+i[1].name),d(e,"data-category-name",o=i[1].name),d(e,"class",n="category "+(i[0].id===i[1].id?"category--active":"")+" svelte-adoked")},m(c,g){O(c,e,g),f(e,s),a||(r=we(e,"click",i[3]),a=!0)},p(c,[g]){g&2&&t!==(t=c[1].name+"")&&F(s,t),g&2&&l!==(l="#"+c[1].name)&&d(e,"href",l),g&2&&o!==(o=c[1].name)&&d(e,"data-category-name",o),g&3&&n!==(n="category "+(c[0].id===c[1].id?"category--active":"")+" svelte-adoked")&&d(e,"class",n)},i:U,o:U,d(c){c&&m(e),a=!1,r()}}}const me=40;function Me(i,e,t){let{category:s={id:0,name:""}}=e,{currentCategory:l={id:0,name:""}}=e;function o(){let a=document.getElementById(s.name);setTimeout(()=>{document.documentElement.clientHeight==document.body.scrollHeight-window.pageYOffset||window.pageYOffset+me==a.offsetTop?(t(0,l=s),setTimeout(()=>{t(0,l=s)},100)):o()},100)}const n=a=>{a.preventDefault();let r=document.getElementById(s.name),c=r?r.offsetTop:0;window.scrollTo({top:c-me,behavior:"smooth"}),o()};return i.$$set=a=>{"category"in a&&t(1,s=a.category),"currentCategory"in a&&t(0,l=a.currentCategory)},[l,s,o,n]}class Pe extends ae{constructor(e){super(),le(this,e,Me,Ae,oe,{category:1,currentCategory:0})}}function he(i,e,t){const s=i.slice();return s[3]=e[t],s}function ve(i,e){let t,s,l,o;function n(r){e[2](r)}let a={category:e[3]};return e[0]!==void 0&&(a.currentCategory=e[0]),s=new Pe({props:a}),W.push(()=>X(s,"currentCategory",n)),{key:i,first:null,c(){t=J(),ee(s.$$.fragment),this.h()},l(r){t=J(),te(s.$$.fragment,r),this.h()},h(){this.first=t},m(r,c){O(r,t,c),se(s,r,c),o=!0},p(r,c){e=r;const g={};c&2&&(g.category=e[3]),!l&&c&1&&(l=!0,g.currentCategory=e[0],Q(()=>l=!1)),s.$set(g)},i(r){o||(G(s.$$.fragment,r),o=!0)},o(r){Y(s.$$.fragment,r),o=!1},d(r){r&&m(t),re(s,r)}}}function Te(i){let e,t=[],s=new Map,l,o=i[1];const n=a=>a[3].id;for(let a=0;a<o.length;a+=1){let r=he(i,o,a),c=n(r);s.set(c,t[a]=ve(c,r))}return{c(){e=p("div");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=b(a,"DIV",{class:!0});var r=y(e);for(let c=0;c<t.length;c+=1)t[c].l(r);r.forEach(m),this.h()},h(){d(e,"class","categories svelte-xbh343")},m(a,r){O(a,e,r);for(let c=0;c<t.length;c+=1)t[c].m(e,null);l=!0},p(a,[r]){r&3&&(o=a[1],ke(),t=Ce(t,r,n,1,a,o,s,e,$e,ve,null,he),Ee())},i(a){if(!l){for(let r=0;r<o.length;r+=1)G(t[r]);l=!0}},o(a){for(let r=0;r<t.length;r+=1)Y(t[r]);l=!1},d(a){a&&m(e);for(let r=0;r<t.length;r+=1)t[r].d()}}}function Ne(i,e,t){let{categories:s=[]}=e,{currentCategory:l={id:0,name:""}}=e;je(()=>{let n=document.getElementsByClassName("category");[].forEach.call(n,function(a,r,c){})});function o(n){l=n,t(0,l)}return i.$$set=n=>{"categories"in n&&t(1,s=n.categories),"currentCategory"in n&&t(0,l=n.currentCategory)},[l,s,o]}class Se extends ae{constructor(e){super(),le(this,e,Ne,Te,oe,{categories:1,currentCategory:0})}}function pe(i,e,t){const s=i.slice();return s[2]=e[t],s}function be(i){let e,t,s,l,o,n,a,r,c=i[2].name+"",g,h,B=(i[0][i[2].id]||0)+"",_,v,u,k,w=i[2].description+"",j,z,S,M=i[2].price+"",P,q;return{c(){e=p("div"),t=p("div"),s=p("img"),o=T(),n=p("div"),a=p("div"),r=p("span"),g=V(c),h=p("span"),_=V(B),v=V("x"),u=T(),k=p("span"),j=V(w),z=T(),S=p("div"),P=V(M),q=T(),this.h()},l(I){e=b(I,"DIV",{class:!0});var $=y(e);t=b($,"DIV",{class:!0});var L=y(t);s=b(L,"IMG",{class:!0,src:!0,alt:!0}),o=N(L),n=b(L,"DIV",{class:!0});var H=y(n);a=b(H,"DIV",{class:!0});var C=y(a);r=b(C,"SPAN",{class:!0});var E=y(r);g=A(E,c),E.forEach(m),h=b(C,"SPAN",{class:!0});var D=y(h);_=A(D,B),v=A(D,"x"),D.forEach(m),C.forEach(m),u=N(H),k=b(H,"SPAN",{class:!0});var K=y(k);j=A(K,w),K.forEach(m),H.forEach(m),L.forEach(m),z=N($),S=b($,"DIV",{class:!0});var R=y(S);P=A(R,M),R.forEach(m),q=N($),$.forEach(m),this.h()},h(){d(s,"class","item__img svelte-mxor1j"),ge(s.src,l=i[2].image)||d(s,"src",l),d(s,"alt",""),d(r,"class","item__name svelte-mxor1j"),d(h,"class","item__count svelte-mxor1j"),d(a,"class","svelte-mxor1j"),d(k,"class","item__description svelte-mxor1j"),d(n,"class","item__text svelte-mxor1j"),d(t,"class","item__info svelte-mxor1j"),d(S,"class","item__price svelte-mxor1j"),d(e,"class","item svelte-mxor1j")},m(I,$){O(I,e,$),f(e,t),f(t,s),f(t,o),f(t,n),f(n,a),f(a,r),f(r,g),f(a,h),f(h,_),f(h,v),f(n,u),f(n,k),f(k,j),f(e,z),f(e,S),f(S,P),f(e,q)},p(I,$){$&2&&!ge(s.src,l=I[2].image)&&d(s,"src",l),$&2&&c!==(c=I[2].name+"")&&F(g,c),$&3&&B!==(B=(I[0][I[2].id]||0)+"")&&F(_,B),$&2&&w!==(w=I[2].description+"")&&F(j,w),$&2&&M!==(M=I[2].price+"")&&F(P,M)},d(I){I&&m(e)}}}function ye(i,e){let t,s,l=e[0][e[2].id]!=null&&be(e);return{key:i,first:null,c(){t=J(),l&&l.c(),s=J(),this.h()},l(o){t=J(),l&&l.l(o),s=J(),this.h()},h(){this.first=t},m(o,n){O(o,t,n),l&&l.m(o,n),O(o,s,n)},p(o,n){e=o,e[0][e[2].id]!=null?l?l.p(e,n):(l=be(e),l.c(),l.m(s.parentNode,s)):l&&(l.d(1),l=null)},d(o){o&&m(t),l&&l.d(o),o&&m(s)}}}function Le(i){let e,t,s,l,o,n,a,r,c,g,h,B,_,v,u,k,w,j=[],z=new Map,S,M,P,q,I,$,L=i[1];const H=C=>C[2].id;for(let C=0;C<L.length;C+=1){let E=pe(i,L,C),D=H(E);z.set(D,j[C]=ye(D,E))}return{c(){e=p("div"),t=p("div"),s=p("a"),l=V("\u2190"),o=T(),n=p("a"),a=V("\u041C\u0430\u0433\u0430\u0437\u0438\u043D"),r=T(),c=p("div"),g=p("div"),h=p("p"),B=V("\u0412\u0430\u0448 \u0437\u0430\u043A\u0430\u0437"),_=T(),v=p("a"),u=V("\u041D\u0430\u0437\u0430\u0434"),k=T(),w=p("div");for(let C=0;C<j.length;C+=1)j[C].c();S=T(),M=p("div"),P=p("textarea"),q=T(),I=p("a"),$=V("\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"),this.h()},l(C){e=b(C,"DIV",{class:!0});var E=y(e);t=b(E,"DIV",{class:!0});var D=y(t);s=b(D,"A",{href:!0,class:!0});var K=y(s);l=A(K,"\u2190"),K.forEach(m),o=N(D),n=b(D,"A",{href:!0,class:!0});var R=y(n);a=A(R,"\u041C\u0430\u0433\u0430\u0437\u0438\u043D"),R.forEach(m),D.forEach(m),r=N(E),c=b(E,"DIV",{class:!0});var Z=y(c);g=b(Z,"DIV",{class:!0});var x=y(g);h=b(x,"P",{class:!0});var ce=y(h);B=A(ce,"\u0412\u0430\u0448 \u0437\u0430\u043A\u0430\u0437"),ce.forEach(m),_=N(x),v=b(x,"A",{href:!0,class:!0});var ue=y(v);u=A(ue,"\u041D\u0430\u0437\u0430\u0434"),ue.forEach(m),x.forEach(m),k=N(Z),w=b(Z,"DIV",{class:!0});var _e=y(w);for(let ne=0;ne<j.length;ne+=1)j[ne].l(_e);_e.forEach(m),Z.forEach(m),S=N(E),M=b(E,"DIV",{class:!0});var fe=y(M);P=b(fe,"TEXTAREA",{class:!0,type:!0,placeholder:!0}),y(P).forEach(m),fe.forEach(m),q=N(E),I=b(E,"A",{class:!0});var de=y(I);$=A(de,"\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"),de.forEach(m),E.forEach(m),this.h()},h(){d(s,"href","/"),d(s,"class","svelte-mxor1j"),d(n,"href","/"),d(n,"class","svelte-mxor1j"),d(t,"class","basket__back svelte-mxor1j"),d(h,"class","basket__order__title svelte-mxor1j"),d(v,"href","/"),d(v,"class","svelte-mxor1j"),d(g,"class","basket__order__actions svelte-mxor1j"),d(w,"class","basket__order__list svelte-mxor1j"),d(c,"class","basket__order svelte-mxor1j"),d(P,"class","basket__comment svelte-mxor1j"),d(P,"type","text"),d(P,"placeholder","\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"),d(M,"class","svelte-mxor1j"),d(I,"class","basket__buy svelte-mxor1j"),d(e,"class","basket svelte-mxor1j")},m(C,E){O(C,e,E),f(e,t),f(t,s),f(s,l),f(t,o),f(t,n),f(n,a),f(e,r),f(e,c),f(c,g),f(g,h),f(h,B),f(g,_),f(g,v),f(v,u),f(c,k),f(c,w);for(let D=0;D<j.length;D+=1)j[D].m(w,null);f(e,S),f(e,M),f(M,P),f(e,q),f(e,I),f(I,$)},p(C,[E]){E&3&&(L=C[1],j=Ce(j,E,H,1,C,L,z,w,Be,ye,null,pe))},i:U,o:U,d(C){C&&m(e);for(let E=0;E<j.length;E+=1)j[E].d()}}}function Oe(i,e,t){let s={};ie.subscribe(o=>{t(0,s=o)});let l=[];return Ie.subscribe(o=>{t(1,l=o)}),[s,l]}class qe extends ae{constructor(e){super(),le(this,e,Oe,Le,oe,{})}}function He(i){let e,t;return e=new qe({}),{c(){ee(e.$$.fragment)},l(s){te(e.$$.fragment,s)},m(s,l){se(e,s,l),t=!0},p:U,i(s){t||(G(e.$$.fragment,s),t=!0)},o(s){Y(e.$$.fragment,s),t=!1},d(s){re(e,s)}}}function Ge(i){let e,t,s,l,o,n,a,r;function c(u){i[6](u)}function g(u){i[7](u)}let h={};i[1]!==void 0&&(h.categories=i[1]),i[3]!==void 0&&(h.currentCategory=i[3]),e=new Se({props:h}),W.push(()=>X(e,"categories",c)),W.push(()=>X(e,"currentCategory",g));function B(u){i[8](u)}function _(u){i[9](u)}let v={products:i[2],categories:i[1]};return i[0]!==void 0&&(v.basket=i[0]),i[3]!==void 0&&(v.currentCategory=i[3]),o=new Ve({props:v}),W.push(()=>X(o,"basket",B)),W.push(()=>X(o,"currentCategory",_)),{c(){ee(e.$$.fragment),l=T(),ee(o.$$.fragment)},l(u){te(e.$$.fragment,u),l=N(u),te(o.$$.fragment,u)},m(u,k){se(e,u,k),O(u,l,k),se(o,u,k),r=!0},p(u,k){const w={};!t&&k&2&&(t=!0,w.categories=u[1],Q(()=>t=!1)),!s&&k&8&&(s=!0,w.currentCategory=u[3],Q(()=>s=!1)),e.$set(w);const j={};k&4&&(j.products=u[2]),k&2&&(j.categories=u[1]),!n&&k&1&&(n=!0,j.basket=u[0],Q(()=>n=!1)),!a&&k&8&&(a=!0,j.currentCategory=u[3],Q(()=>a=!1)),o.$set(j)},i(u){r||(G(e.$$.fragment,u),G(o.$$.fragment,u),r=!0)},o(u){Y(e.$$.fragment,u),Y(o.$$.fragment,u),r=!1},d(u){re(e,u),u&&m(l),re(o,u)}}}function Ye(i){let e,t,s,l,o,n,a,r,c;const g=[Ge,He],h=[];function B(_,v){return _[4]==0?0:1}return a=B(i),r=h[a]=g[a](i),{c(){e=p("main"),t=p("b"),s=V("counter - "),l=V(i[5]),o=T(),n=p("div"),r.c(),this.h()},l(_){e=b(_,"MAIN",{class:!0});var v=y(e);t=b(v,"B",{class:!0});var u=y(t);s=A(u,"counter - "),l=A(u,i[5]),u.forEach(m),o=N(v),n=b(v,"DIV",{class:!0});var k=y(n);r.l(k),k.forEach(m),v.forEach(m),this.h()},h(){d(t,"class","svelte-10l4d0h"),d(n,"class","app svelte-10l4d0h"),d(e,"class","svelte-10l4d0h")},m(_,v){O(_,e,v),f(e,t),f(t,s),f(t,l),f(e,o),f(e,n),h[a].m(n,null),c=!0},p(_,[v]){(!c||v&32)&&F(l,_[5]);let u=a;a=B(_),a===u?h[a].p(_,v):(ke(),Y(h[u],1,1,()=>{h[u]=null}),Ee(),r=h[a],r?r.p(_,v):(r=h[a]=g[a](_),r.c()),G(r,1),r.m(n,null))},i(_){c||(G(r),c=!0)},o(_){Y(r),c=!1},d(_){_&&m(e),h[a].d()}}}function ze(i,e,t){let s=[],l=[],o={},n={},a=0,r=0;De.subscribe(_=>{t(1,s=_)}),Ie.subscribe(_=>{t(2,l=_)}),je(async()=>{let _=window.Telegram.WebApp;t(3,o=s[0]),_.expand(),_.MainButton.setText("\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0437\u0430\u043A\u0430\u0437"),_.MainButton.setParams({color:"#31b545"}),_.setBackgroundColor("secondary_bg_color"),_.MainButton.onClick(()=>{t(5,r++,r),t(4,a=a==0?1:0)}),ie.subscribe(v=>{t(0,n=v),Object.keys(n).length!==0?_.MainButton.show():_.MainButton.hide()})});function c(_){s=_,t(1,s)}function g(_){o=_,t(3,o)}function h(_){n=_,t(0,n)}function B(_){o=_,t(3,o)}return i.$$.update=()=>{i.$$.dirty&1&&ie.set(n)},[n,s,l,o,a,r,c,g,h,B]}class Re extends ae{constructor(e){super(),le(this,e,ze,Ye,oe,{})}}export{Re as default};
