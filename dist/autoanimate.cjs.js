var L=Object.defineProperty;var G=Object.getOwnPropertyDescriptor;var V=Object.getOwnPropertyNames;var J=Object.prototype.hasOwnProperty;var K=(t,e)=>{for(var n in e)L(t,n,{get:e[n],enumerable:!0})},Z=(t,e,n,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of V(e))!J.call(t,i)&&i!==n&&L(t,i,{get:()=>e[i],enumerable:!(o=G(e,i))||o.enumerable});return t};var tt=t=>Z(L({},"__esModule",{value:!0}),t);var gt={};K(gt,{default:()=>pt});module.exports=tt(gt);var D=new Set,f=new WeakMap,T=new WeakMap,w=new WeakMap,_=new WeakMap,et=new WeakMap,M=new WeakMap,S=new WeakMap,O=new WeakSet,g,$=0,j=0,p="__aa_tgt",W="__aa_del",N="__aa_new",nt=t=>{let e=at(t);e&&e.forEach(n=>dt(n))},ot=t=>{t.forEach(e=>{e.target===g&&rt(),f.has(e.target)&&y(e.target)})};function it(t){let e=_.get(t);e==null||e.disconnect();let n=f.get(t),o=0,i=5;n||(n=x(t),f.set(t,n));let{offsetWidth:r,offsetHeight:s}=g,d=[n.top-i,r-(n.left+i+n.width),s-(n.top+i+n.height),n.left-i].map(c=>`${-1*Math.floor(c)}px`).join(" "),l=new IntersectionObserver(()=>{++o>1&&y(t)},{root:g,threshold:1,rootMargin:d});l.observe(t),_.set(t,l)}function y(t){clearTimeout(S.get(t));let e=P(t),n=C(e)?500:e.duration;S.set(t,setTimeout(async()=>{let o=w.get(t);try{await(o==null?void 0:o.finished),f.set(t,x(t)),it(t)}catch{}},n))}function rt(){clearTimeout(S.get(g)),S.set(g,setTimeout(()=>{D.forEach(t=>q(t,e=>H(()=>y(e))))},100))}function st(t){setTimeout(()=>{et.set(t,setInterval(()=>H(y.bind(null,t)),2e3))},Math.round(2e3*Math.random()))}function H(t){typeof requestIdleCallback=="function"?requestIdleCallback(()=>t()):requestAnimationFrame(()=>t())}var k,E;typeof window<"u"&&(g=document.documentElement,k=new MutationObserver(nt),E=new ResizeObserver(ot),window.addEventListener("scroll",()=>{j=window.scrollY,$=window.scrollX}),E.observe(g));function at(t){return t.reduce((o,i)=>[...o,...Array.from(i.addedNodes),...Array.from(i.removedNodes)],[]).every(o=>o.nodeName==="#comment")?!1:t.reduce((o,i)=>{if(o===!1)return!1;if(i.target instanceof Element){if(B(i.target),!o.has(i.target)){o.add(i.target);for(let r=0;r<i.target.children.length;r++){let s=i.target.children.item(r);if(s){if(W in s)return!1;B(i.target,s),o.add(s)}}}if(i.removedNodes.length)for(let r=0;r<i.removedNodes.length;r++){let s=i.removedNodes[r];if(W in s)return!1;s instanceof Element&&(o.add(s),B(i.target,s),T.set(s,[i.previousSibling,i.nextSibling]))}}return o},new Set)}function B(t,e){!e&&!(p in t)?Object.defineProperty(t,p,{value:t}):e&&!(p in e)&&Object.defineProperty(e,p,{value:t})}function dt(t){var e;let n=t.isConnected,o=f.has(t);n&&T.has(t)&&T.delete(t),w.has(t)&&((e=w.get(t))===null||e===void 0||e.cancel()),N in t?z(t):o&&n?ft(t):o&&!n?lt(t):z(t)}function h(t){return Number(t.replace(/[^0-9.\-]/g,""))}function ct(t){let e=t.parentElement;for(;e;){if(e.scrollLeft||e.scrollTop)return{x:e.scrollLeft,y:e.scrollTop};e=e.parentElement}return{x:0,y:0}}function x(t){let e=t.getBoundingClientRect(),{x:n,y:o}=ct(t);return{top:e.top+o,left:e.left+n,width:e.width,height:e.height}}function F(t,e,n){let o=e.width,i=e.height,r=n.width,s=n.height,a=getComputedStyle(t);if(a.getPropertyValue("box-sizing")==="content-box"){let l=h(a.paddingTop)+h(a.paddingBottom)+h(a.borderTopWidth)+h(a.borderBottomWidth),c=h(a.paddingLeft)+h(a.paddingRight)+h(a.borderRightWidth)+h(a.borderLeftWidth);o-=c,r-=c,i-=l,s-=l}return[o,r,i,s].map(Math.round)}function P(t){return p in t&&M.has(t[p])?M.get(t[p]):{duration:250,easing:"ease-in-out"}}function I(t){if(p in t)return t[p]}function X(t){let e=I(t);return e?O.has(e):!1}function q(t,...e){e.forEach(n=>n(t,M.has(t)));for(let n=0;n<t.children.length;n++){let o=t.children.item(n);o&&e.forEach(i=>i(o,M.has(o)))}}function Y(t){return Array.isArray(t)?t:[t]}function C(t){return typeof t=="function"}function ft(t){let e=f.get(t),n=x(t);if(!X(t))return f.set(t,n);let o;if(!e)return;let i=P(t);if(typeof i!="function"){let r=e.left-n.left,s=e.top-n.top,[a,d,l,c]=F(t,e,n),m={transform:`translate(${r}px, ${s}px)`},u={transform:"translate(0, 0)"};a!==d&&(m.width=`${a}px`,u.width=`${d}px`),l!==c&&(m.height=`${l}px`,u.height=`${c}px`),o=t.animate([m,u],{duration:i.duration,easing:i.easing})}else{let[r]=Y(i(t,"remain",e,n));o=new Animation(r),o.play()}w.set(t,o),f.set(t,n),o.addEventListener("finish",y.bind(null,t))}function z(t){N in t&&delete t[N];let e=x(t);f.set(t,e);let n=P(t);if(!X(t))return;let o;if(typeof n!="function")o=t.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:n.duration*1.5,easing:"ease-in"});else{let[i]=Y(n(t,"add",e));o=new Animation(i),o.play()}w.set(t,o),o.addEventListener("finish",y.bind(null,t))}function R(t,e){var n;t.remove(),f.delete(t),T.delete(t),w.delete(t),(n=_.get(t))===null||n===void 0||n.disconnect(),setTimeout(()=>{if(W in t&&delete t[W],Object.defineProperty(t,N,{value:!0,configurable:!0}),e&&t instanceof HTMLElement)for(let o in e)t.style[o]=""},0)}function lt(t){var e;if(!T.has(t)||!f.has(t))return;let[n,o]=T.get(t);Object.defineProperty(t,W,{value:!0,configurable:!0});let i=window.scrollX,r=window.scrollY;if(o&&o.parentNode&&o.parentNode instanceof Element?o.parentNode.insertBefore(t,o):n&&n.parentNode?n.parentNode.appendChild(t):(e=I(t))===null||e===void 0||e.appendChild(t),!X(t))return R(t);let[s,a,d,l]=ht(t),c=P(t),m=f.get(t);(i!==$||r!==j)&&ut(t,i,r,c);let u,v={position:"absolute",top:`${s}px`,left:`${a}px`,width:`${d}px`,height:`${l}px`,margin:"0",pointerEvents:"none",transformOrigin:"center",zIndex:"100"};if(!C(c))Object.assign(t.style,v),u=t.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:c.duration,easing:"ease-out"});else{let[A,b]=Y(c(t,"remove",m));(b==null?void 0:b.styleReset)!==!1&&(v=(b==null?void 0:b.styleReset)||v,Object.assign(t.style,v)),u=new Animation(A),u.play()}w.set(t,u),u.addEventListener("finish",R.bind(null,t,v))}function ut(t,e,n,o){let i=$-e,r=j-n,s=document.documentElement.style.scrollBehavior;if(getComputedStyle(g).scrollBehavior==="smooth"&&(document.documentElement.style.scrollBehavior="auto"),window.scrollTo(window.scrollX+i,window.scrollY+r),!t.parentElement)return;let d=t.parentElement,l=d.clientHeight,c=d.clientWidth,m=performance.now();function u(){requestAnimationFrame(()=>{if(!C(o)){let v=l-d.clientHeight,A=c-d.clientWidth;m+o.duration>performance.now()?(window.scrollTo({left:window.scrollX-A,top:window.scrollY-v}),l=d.clientHeight,c=d.clientWidth,u()):document.documentElement.style.scrollBehavior=s}})}u()}function ht(t){let e=f.get(t),[n,,o]=F(t,e,x(t)),i=t.parentElement;for(;i&&(getComputedStyle(i).position==="static"||i instanceof HTMLBodyElement);)i=i.parentElement;i||(i=document.body);let r=getComputedStyle(i),s=f.get(i)||x(i),a=Math.round(e.top-s.top)-h(r.borderTopWidth),d=Math.round(e.left-s.left)-h(r.borderLeftWidth);return[a,d,n,o]}function Q(t,e={}){return k&&E&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!C(e)&&!e.disrespectUserMotionPreference||(O.add(t),getComputedStyle(t).position==="static"&&Object.assign(t.style,{position:"relative"}),q(t,y,st,i=>E==null?void 0:E.observe(i)),C(e)?M.set(t,e):M.set(t,{duration:250,easing:"ease-in-out",...e}),k.observe(t,{childList:!0}),D.add(t))),Object.freeze({parent:t,enable:()=>{O.add(t)},disable:()=>{O.delete(t)},isEnabled:()=>O.has(t)})}function U(t){t.directive("autoanimate",(e,{expression:n},{evaluate:o})=>{Q(e,n&&o(n)||{})})}var pt=U;
