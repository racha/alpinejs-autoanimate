var S=new Set,d=new WeakMap,y=new WeakMap,v=new WeakMap,N=new WeakMap,R=new WeakMap,M=new WeakMap,x=new WeakMap,O=new WeakSet,l,g="__aa_tgt",W="__aa_del",B=t=>{let e=X(t);e&&e.forEach(n=>Y(n))},D=t=>{t.forEach(e=>{e.target===l&&I(),d.has(e.target)&&b(e.target)})};function F(t){let e=N.get(t);e?.disconnect();let n=d.get(t),o=0,i=5;n||(n=E(t),d.set(t,n));let{offsetWidth:s,offsetHeight:r}=l,u=[n.top-i,s-(n.left+i+n.width),r-(n.top+i+n.height),n.left-i].map(p=>`${-1*Math.floor(p)}px`).join(" "),c=new IntersectionObserver(()=>{++o>1&&b(t)},{root:l,threshold:1,rootMargin:u});c.observe(t),N.set(t,c)}function b(t){clearTimeout(x.get(t));let e=T(t),n=typeof e=="function"?500:e.duration;x.set(t,setTimeout(async()=>{let o=v.get(t);(!o||await o.finished)&&(d.set(t,E(t)),F(t))},n))}function I(){clearTimeout(x.get(l)),x.set(l,setTimeout(()=>{S.forEach(t=>_(t,e=>$(()=>b(e))))},100))}function q(t){setTimeout(()=>{R.set(t,setInterval(()=>$(b.bind(null,t)),2e3))},Math.round(2e3*Math.random()))}function $(t){typeof requestIdleCallback=="function"?requestIdleCallback(()=>t()):requestAnimationFrame(()=>t())}var P,w;typeof window<"u"&&(l=document.documentElement,P=new MutationObserver(B),w=new ResizeObserver(D),w.observe(l));function X(t){return t.reduce((o,i)=>[...o,...Array.from(i.addedNodes),...Array.from(i.removedNodes)],[]).every(o=>o.nodeName==="#comment")?!1:t.reduce((o,i)=>{if(o===!1)return!1;if(i.target instanceof Element){if(C(i.target),!o.has(i.target)){o.add(i.target);for(let s=0;s<i.target.children.length;s++){let r=i.target.children.item(s);if(!!r){if(W in r)return!1;C(i.target,r),o.add(r)}}}if(i.removedNodes.length)for(let s=0;s<i.removedNodes.length;s++){let r=i.removedNodes[s];if(W in r)return!1;r instanceof Element&&(o.add(r),C(i.target,r),y.set(r,[i.previousSibling,i.nextSibling]))}}return o},new Set)}function C(t,e){!e&&!(g in t)?Object.defineProperty(t,g,{value:t}):e&&!(g in e)&&Object.defineProperty(e,g,{value:t})}function Y(t){var e;let n=l.contains(t),o=d.has(t);n&&y.has(t)&&y.delete(t),v.has(t)&&((e=v.get(t))===null||e===void 0||e.cancel()),o&&n?H(t):o&&!n?U(t):Q(t)}function f(t){return Number(t.replace(/[^0-9.\-]/g,""))}function E(t){let e=t.getBoundingClientRect();return{top:e.top+window.scrollY,left:e.left+window.scrollX,width:e.width,height:e.height}}function z(t,e,n){let o=e.width,i=e.height,s=n.width,r=n.height,a=getComputedStyle(t);if(a.getPropertyValue("box-sizing")==="content-box"){let c=f(a.paddingTop)+f(a.paddingBottom)+f(a.borderTopWidth)+f(a.borderBottomWidth),p=f(a.paddingLeft)+f(a.paddingRight)+f(a.borderRightWidth)+f(a.borderLeftWidth);o-=p,s-=p,i-=c,r-=c}return[o,s,i,r].map(Math.round)}function T(t){return g in t&&M.has(t[g])?M.get(t[g]):{duration:250,easing:"ease-in-out"}}function L(t){if(g in t)return t[g]}function A(t){let e=L(t);return e?O.has(e):!1}function _(t,...e){e.forEach(n=>n(t,M.has(t)));for(let n=0;n<t.children.length;n++){let o=t.children.item(n);o&&e.forEach(i=>i(o,M.has(o)))}}function H(t){let e=d.get(t),n=E(t);if(!A(t))return d.set(t,n);let o;if(!e)return;let i=T(t);if(typeof i!="function"){let s=e.left-n.left,r=e.top-n.top,[a,u,c,p]=z(t,e,n),h={transform:`translate(${s}px, ${r}px)`},m={transform:"translate(0, 0)"};a!==u&&(h.width=`${a}px`,m.width=`${u}px`),c!==p&&(h.height=`${c}px`,m.height=`${p}px`),o=t.animate([h,m],{duration:i.duration,easing:i.easing})}else o=new Animation(i(t,"remain",e,n)),o.play();v.set(t,o),d.set(t,n),o.addEventListener("finish",b.bind(null,t))}function Q(t){let e=E(t);d.set(t,e);let n=T(t);if(!A(t))return;let o;typeof n!="function"?o=t.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:n.duration*1.5,easing:"ease-in"}):(o=new Animation(n(t,"add",e)),o.play()),v.set(t,o),o.addEventListener("finish",b.bind(null,t))}function U(t){var e;if(!y.has(t)||!d.has(t))return;let[n,o]=y.get(t);Object.defineProperty(t,W,{value:!0}),o&&o.parentNode&&o.parentNode instanceof Element?o.parentNode.insertBefore(t,o):n&&n.parentNode?n.parentNode.appendChild(t):(e=L(t))===null||e===void 0||e.appendChild(t);function i(){var m;t.remove(),d.delete(t),y.delete(t),v.delete(t),(m=N.get(t))===null||m===void 0||m.disconnect()}if(!A(t))return i();let[s,r,a,u]=G(t),c=T(t),p=d.get(t),h;Object.assign(t.style,{position:"absolute",top:`${s}px`,left:`${r}px`,width:`${a}px`,height:`${u}px`,margin:0,pointerEvents:"none",transformOrigin:"center",zIndex:100}),typeof c!="function"?h=t.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:c.duration,easing:"ease-out"}):(h=new Animation(c(t,"remove",p)),h.play()),v.set(t,h),h.addEventListener("finish",i)}function G(t){let e=d.get(t),[n,,o]=z(t,e,E(t)),i=t.parentElement;for(;i&&(getComputedStyle(i).position==="static"||i instanceof HTMLBodyElement);)i=i.parentElement;i||(i=document.body);let s=getComputedStyle(i),r=d.get(i)||E(i),a=Math.round(e.top-r.top)-f(s.borderTopWidth),u=Math.round(e.left-r.left)-f(s.borderLeftWidth);return[a,u,n,o]}function k(t,e={}){return P&&w&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&typeof e!="function"&&!e.disrespectUserMotionPreference||(O.add(t),getComputedStyle(t).position==="static"&&Object.assign(t.style,{position:"relative"}),_(t,b,q,i=>w?.observe(i)),typeof e=="function"?M.set(t,e):M.set(t,{duration:250,easing:"ease-in-out",...e}),P.observe(t,{childList:!0}),S.add(t))),Object.freeze({parent:t,enable:()=>{O.add(t)},disable:()=>{O.delete(t)},isEnabled:()=>O.has(t)})}function j(t){t.directive("autoanimate",(e,{expression:n},{evaluate:o})=>{k(e,n&&o(n)||{})})}var tt=j;export{tt as default};
