(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function na(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function _t(e){if($(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=le(r)?Ps(r):_t(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(le(e))return e;if(te(e))return e}}const Cs=/;(?![^(]*\))/g,Os=/:([^]+)/,Es=/\/\*.*?\*\//gs;function Ps(e){const t={};return e.replace(Es,"").split(Cs).forEach(n=>{if(n){const r=n.split(Os);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ra(e){let t="";if(le(e))t=e;else if($(e))for(let n=0;n<e.length;n++){const r=ra(e[n]);r&&(t+=r+" ")}else if(te(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ts="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Is=na(Ts);function Vi(e){return!!e||e===""}const V={},Tt=[],Se=()=>{},Ss=()=>!1,Ms=/^on[^a-z]/,tr=e=>Ms.test(e),aa=e=>e.startsWith("onUpdate:"),ve=Object.assign,ia=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ns=Object.prototype.hasOwnProperty,U=(e,t)=>Ns.call(e,t),$=Array.isArray,qt=e=>nr(e)==="[object Map]",Fs=e=>nr(e)==="[object Set]",j=e=>typeof e=="function",le=e=>typeof e=="string",oa=e=>typeof e=="symbol",te=e=>e!==null&&typeof e=="object",sa=e=>te(e)&&j(e.then)&&j(e.catch),Rs=Object.prototype.toString,nr=e=>Rs.call(e),Ls=e=>nr(e).slice(8,-1),$s=e=>nr(e)==="[object Object]",la=e=>le(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Dn=na(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),rr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},js=/-(\w)/g,Ft=rr(e=>e.replace(js,(t,n)=>n?n.toUpperCase():"")),Ds=/\B([A-Z])/g,Bt=rr(e=>e.replace(Ds,"-$1").toLowerCase()),Zi=rr(e=>e.charAt(0).toUpperCase()+e.slice(1)),vr=rr(e=>e?`on${Zi(e)}`:""),rn=(e,t)=>!Object.is(e,t),Bn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Wn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},an=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ka;const Bs=()=>Ka||(Ka=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Le;class zs{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Le,!t&&Le&&(this.index=(Le.scopes||(Le.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Le;try{return Le=this,t()}finally{Le=n}}}on(){Le=this}off(){Le=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this.active=!1}}}function Hs(e,t=Le){t&&t.active&&t.effects.push(e)}const fa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ji=e=>(e.w&tt)>0,Qi=e=>(e.n&tt)>0,Us=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=tt},Ys=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Ji(a)&&!Qi(a)?a.delete(e):t[n++]=a,a.w&=~tt,a.n&=~tt}t.length=n}},Tr=new WeakMap;let Wt=0,tt=1;const Ir=30;let Pe;const yt=Symbol(""),Sr=Symbol("");class ca{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Hs(this,r)}run(){if(!this.active)return this.fn();let t=Pe,n=Je;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Pe,Pe=this,Je=!0,tt=1<<++Wt,Wt<=Ir?Us(this):qa(this),this.fn()}finally{Wt<=Ir&&Ys(this),tt=1<<--Wt,Pe=this.parent,Je=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Pe===this?this.deferStop=!0:this.active&&(qa(this),this.onStop&&this.onStop(),this.active=!1)}}function qa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Je=!0;const eo=[];function zt(){eo.push(Je),Je=!1}function Ht(){const e=eo.pop();Je=e===void 0?!0:e}function we(e,t,n){if(Je&&Pe){let r=Tr.get(e);r||Tr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=fa()),to(a)}}function to(e,t){let n=!1;Wt<=Ir?Qi(e)||(e.n|=tt,n=!Ji(e)):n=!e.has(Pe),n&&(e.add(Pe),Pe.deps.push(e))}function He(e,t,n,r,a,i){const o=Tr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&$(e)){const l=an(r);o.forEach((c,u)=>{(u==="length"||u>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":$(e)?la(n)&&s.push(o.get("length")):(s.push(o.get(yt)),qt(e)&&s.push(o.get(Sr)));break;case"delete":$(e)||(s.push(o.get(yt)),qt(e)&&s.push(o.get(Sr)));break;case"set":qt(e)&&s.push(o.get(yt));break}if(s.length===1)s[0]&&Mr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Mr(fa(l))}}function Mr(e,t){const n=$(e)?e:[...e];for(const r of n)r.computed&&Xa(r);for(const r of n)r.computed||Xa(r)}function Xa(e,t){(e!==Pe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Ws=na("__proto__,__v_isRef,__isVue"),no=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(oa)),Ks=ua(),qs=ua(!1,!0),Xs=ua(!0),Ga=Gs();function Gs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Y(this);for(let i=0,o=this.length;i<o;i++)we(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(Y)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){zt();const r=Y(this)[t].apply(this,n);return Ht(),r}}),e}function ua(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?ul:so:t?oo:io).get(r))return r;const o=$(r);if(!e&&o&&U(Ga,a))return Reflect.get(Ga,a,i);const s=Reflect.get(r,a,i);return(oa(a)?no.has(a):Ws(a))||(e||we(r,"get",a),t)?s:de(s)?o&&la(a)?s:s.value:te(s)?e?lo(s):pa(s):s}}const Vs=ro(),Zs=ro(!0);function ro(e=!1){return function(n,r,a,i){let o=n[r];if(Rt(o)&&de(o)&&!de(a))return!1;if(!e&&(!Kn(a)&&!Rt(a)&&(o=Y(o),a=Y(a)),!$(n)&&de(o)&&!de(a)))return o.value=a,!0;const s=$(n)&&la(r)?Number(r)<n.length:U(n,r),l=Reflect.set(n,r,a,i);return n===Y(i)&&(s?rn(a,o)&&He(n,"set",r,a):He(n,"add",r,a)),l}}function Js(e,t){const n=U(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&He(e,"delete",t,void 0),r}function Qs(e,t){const n=Reflect.has(e,t);return(!oa(t)||!no.has(t))&&we(e,"has",t),n}function el(e){return we(e,"iterate",$(e)?"length":yt),Reflect.ownKeys(e)}const ao={get:Ks,set:Vs,deleteProperty:Js,has:Qs,ownKeys:el},tl={get:Xs,set(e,t){return!0},deleteProperty(e,t){return!0}},nl=ve({},ao,{get:qs,set:Zs}),da=e=>e,ar=e=>Reflect.getPrototypeOf(e);function kn(e,t,n=!1,r=!1){e=e.__v_raw;const a=Y(e),i=Y(t);n||(t!==i&&we(a,"get",t),we(a,"get",i));const{has:o}=ar(a),s=r?da:n?ga:on;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function An(e,t=!1){const n=this.__v_raw,r=Y(n),a=Y(e);return t||(e!==a&&we(r,"has",e),we(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Cn(e,t=!1){return e=e.__v_raw,!t&&we(Y(e),"iterate",yt),Reflect.get(e,"size",e)}function Va(e){e=Y(e);const t=Y(this);return ar(t).has.call(t,e)||(t.add(e),He(t,"add",e,e)),this}function Za(e,t){t=Y(t);const n=Y(this),{has:r,get:a}=ar(n);let i=r.call(n,e);i||(e=Y(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?rn(t,o)&&He(n,"set",e,t):He(n,"add",e,t),this}function Ja(e){const t=Y(this),{has:n,get:r}=ar(t);let a=n.call(t,e);a||(e=Y(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&He(t,"delete",e,void 0),i}function Qa(){const e=Y(this),t=e.size!==0,n=e.clear();return t&&He(e,"clear",void 0,void 0),n}function On(e,t){return function(r,a){const i=this,o=i.__v_raw,s=Y(o),l=t?da:e?ga:on;return!e&&we(s,"iterate",yt),o.forEach((c,u)=>r.call(a,l(c),l(u),i))}}function En(e,t,n){return function(...r){const a=this.__v_raw,i=Y(a),o=qt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),u=n?da:t?ga:on;return!t&&we(i,"iterate",l?Sr:yt),{next(){const{value:d,done:p}=c.next();return p?{value:d,done:p}:{value:s?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function Xe(e){return function(...t){return e==="delete"?!1:this}}function rl(){const e={get(i){return kn(this,i)},get size(){return Cn(this)},has:An,add:Va,set:Za,delete:Ja,clear:Qa,forEach:On(!1,!1)},t={get(i){return kn(this,i,!1,!0)},get size(){return Cn(this)},has:An,add:Va,set:Za,delete:Ja,clear:Qa,forEach:On(!1,!0)},n={get(i){return kn(this,i,!0)},get size(){return Cn(this,!0)},has(i){return An.call(this,i,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:On(!0,!1)},r={get(i){return kn(this,i,!0,!0)},get size(){return Cn(this,!0)},has(i){return An.call(this,i,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:On(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=En(i,!1,!1),n[i]=En(i,!0,!1),t[i]=En(i,!1,!0),r[i]=En(i,!0,!0)}),[e,n,t,r]}const[al,il,ol,sl]=rl();function ma(e,t){const n=t?e?sl:ol:e?il:al;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(U(n,a)&&a in r?n:r,a,i)}const ll={get:ma(!1,!1)},fl={get:ma(!1,!0)},cl={get:ma(!0,!1)},io=new WeakMap,oo=new WeakMap,so=new WeakMap,ul=new WeakMap;function dl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ml(e){return e.__v_skip||!Object.isExtensible(e)?0:dl(Ls(e))}function pa(e){return Rt(e)?e:ha(e,!1,ao,ll,io)}function pl(e){return ha(e,!1,nl,fl,oo)}function lo(e){return ha(e,!0,tl,cl,so)}function ha(e,t,n,r,a){if(!te(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=ml(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function It(e){return Rt(e)?It(e.__v_raw):!!(e&&e.__v_isReactive)}function Rt(e){return!!(e&&e.__v_isReadonly)}function Kn(e){return!!(e&&e.__v_isShallow)}function fo(e){return It(e)||Rt(e)}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function co(e){return Wn(e,"__v_skip",!0),e}const on=e=>te(e)?pa(e):e,ga=e=>te(e)?lo(e):e;function uo(e){Je&&Pe&&(e=Y(e),to(e.dep||(e.dep=fa())))}function mo(e,t){e=Y(e),e.dep&&Mr(e.dep)}function de(e){return!!(e&&e.__v_isRef===!0)}function Ot(e){return hl(e,!1)}function hl(e,t){return de(e)?e:new gl(e,t)}class gl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Y(t),this._value=n?t:on(t)}get value(){return uo(this),this._value}set value(t){const n=this.__v_isShallow||Kn(t)||Rt(t);t=n?t:Y(t),rn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:on(t),mo(this))}}function qn(e){return de(e)?e.value:e}const vl={get:(e,t,n)=>qn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return de(a)&&!de(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function po(e){return It(e)?e:new Proxy(e,vl)}var ho;class bl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[ho]=!1,this._dirty=!0,this.effect=new ca(t,()=>{this._dirty||(this._dirty=!0,mo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=Y(this);return uo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}ho="__v_isReadonly";function yl(e,t,n=!1){let r,a;const i=j(e);return i?(r=e,a=Se):(r=e.get,a=e.set),new bl(r,a,i||!a,n)}function Qe(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){vn(i,t,n)}return a}function Me(e,t,n,r){if(j(e)){const i=Qe(e,t,n,r);return i&&sa(i)&&i.catch(o=>{vn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Me(e[i],t,n,r));return a}function vn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Qe(l,null,10,[e,o,s]);return}}_l(e,n,a,r)}function _l(e,t,n,r=!0){console.error(e)}let sn=!1,Nr=!1;const ue=[];let $e=0;const St=[];let ze=null,pt=0;const go=Promise.resolve();let va=null;function xl(e){const t=va||go;return e?t.then(this?e.bind(this):e):t}function wl(e){let t=$e+1,n=ue.length;for(;t<n;){const r=t+n>>>1;ln(ue[r])<e?t=r+1:n=r}return t}function ba(e){(!ue.length||!ue.includes(e,sn&&e.allowRecurse?$e+1:$e))&&(e.id==null?ue.push(e):ue.splice(wl(e.id),0,e),vo())}function vo(){!sn&&!Nr&&(Nr=!0,va=go.then(_o))}function kl(e){const t=ue.indexOf(e);t>$e&&ue.splice(t,1)}function bo(e){$(e)?St.push(...e):(!ze||!ze.includes(e,e.allowRecurse?pt+1:pt))&&St.push(e),vo()}function ei(e,t=sn?$e+1:0){for(;t<ue.length;t++){const n=ue[t];n&&n.pre&&(ue.splice(t,1),t--,n())}}function yo(e){if(St.length){const t=[...new Set(St)];if(St.length=0,ze){ze.push(...t);return}for(ze=t,ze.sort((n,r)=>ln(n)-ln(r)),pt=0;pt<ze.length;pt++)ze[pt]();ze=null,pt=0}}const ln=e=>e.id==null?1/0:e.id,Al=(e,t)=>{const n=ln(e)-ln(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function _o(e){Nr=!1,sn=!0,ue.sort(Al);const t=Se;try{for($e=0;$e<ue.length;$e++){const n=ue[$e];n&&n.active!==!1&&Qe(n,null,14)}}finally{$e=0,ue.length=0,yo(),sn=!1,va=null,(ue.length||St.length)&&_o()}}function Cl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||V;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[u]||V;p&&(a=n.map(x=>le(x)?x.trim():x)),d&&(a=n.map(an))}let s,l=r[s=vr(t)]||r[s=vr(Ft(t))];!l&&i&&(l=r[s=vr(Bt(t))]),l&&Me(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Me(c,e,6,a)}}function xo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!j(e)){const l=c=>{const u=xo(c,t,!0);u&&(s=!0,ve(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(te(e)&&r.set(e,null),null):($(i)?i.forEach(l=>o[l]=null):ve(o,i),te(e)&&r.set(e,o),o)}function ir(e,t){return!e||!tr(t)?!1:(t=t.slice(2).replace(/Once$/,""),U(e,t[0].toLowerCase()+t.slice(1))||U(e,Bt(t))||U(e,t))}let me=null,wo=null;function Xn(e){const t=me;return me=e,wo=e&&e.type.__scopeId||null,t}function Xt(e,t=me,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&ci(-1);const i=Xn(t);let o;try{o=e(...a)}finally{Xn(i),r._d&&ci(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function br(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:u,renderCache:d,data:p,setupState:x,ctx:P,inheritAttrs:T}=e;let D,w;const g=Xn(e);try{if(n.shapeFlag&4){const F=a||r;D=Ee(u.call(F,F,d,i,x,p,P)),w=l}else{const F=t;D=Ee(F.length>1?F(i,{attrs:l,slots:s,emit:c}):F(i,null)),w=t.props?l:El(l)}}catch(F){Qt.length=0,vn(F,e,1),D=se(De)}let y=D;if(w&&T!==!1){const F=Object.keys(w),{shapeFlag:R}=y;F.length&&R&7&&(o&&F.some(aa)&&(w=Pl(w,o)),y=jt(y,w))}return n.dirs&&(y=jt(y),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&(y.transition=n.transition),D=y,Xn(g),D}function Ol(e){let t;for(let n=0;n<e.length;n++){const r=e[n];if(cn(r)){if(r.type!==De||r.children==="v-if"){if(t)return;t=r}}else return}return t}const El=e=>{let t;for(const n in e)(n==="class"||n==="style"||tr(n))&&((t||(t={}))[n]=e[n]);return t},Pl=(e,t)=>{const n={};for(const r in e)(!aa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Tl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ti(r,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(o[p]!==r[p]&&!ir(c,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ti(r,o,c):!0:!!o;return!1}function ti(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!ir(n,i))return!0}return!1}function ya({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Il=e=>e.__isSuspense,Sl={name:"Suspense",__isSuspense:!0,process(e,t,n,r,a,i,o,s,l,c){e==null?Nl(t,n,r,a,i,o,s,l,c):Fl(e,t,n,r,a,o,s,l,c)},hydrate:Rl,create:_a,normalize:Ll},Ml=Sl;function fn(e,t){const n=e.props&&e.props[t];j(n)&&n()}function Nl(e,t,n,r,a,i,o,s,l){const{p:c,o:{createElement:u}}=l,d=u("div"),p=e.suspense=_a(e,a,r,t,d,n,i,o,s,l);c(null,p.pendingBranch=e.ssContent,d,null,r,p,i,o),p.deps>0?(fn(e,"onPending"),fn(e,"onFallback"),c(null,e.ssFallback,t,n,r,null,i,o),Mt(p,e.ssFallback)):p.resolve()}function Fl(e,t,n,r,a,i,o,s,{p:l,um:c,o:{createElement:u}}){const d=t.suspense=e.suspense;d.vnode=t,t.el=e.el;const p=t.ssContent,x=t.ssFallback,{activeBranch:P,pendingBranch:T,isInFallback:D,isHydrating:w}=d;if(T)d.pendingBranch=p,Ze(p,T)?(l(T,p,d.hiddenContainer,null,a,d,i,o,s),d.deps<=0?d.resolve():D&&(l(P,x,n,r,a,null,i,o,s),Mt(d,x))):(d.pendingId++,w?(d.isHydrating=!1,d.activeBranch=T):c(T,a,d),d.deps=0,d.effects.length=0,d.hiddenContainer=u("div"),D?(l(null,p,d.hiddenContainer,null,a,d,i,o,s),d.deps<=0?d.resolve():(l(P,x,n,r,a,null,i,o,s),Mt(d,x))):P&&Ze(p,P)?(l(P,p,n,r,a,d,i,o,s),d.resolve(!0)):(l(null,p,d.hiddenContainer,null,a,d,i,o,s),d.deps<=0&&d.resolve()));else if(P&&Ze(p,P))l(P,p,n,r,a,d,i,o,s),Mt(d,p);else if(fn(t,"onPending"),d.pendingBranch=p,d.pendingId++,l(null,p,d.hiddenContainer,null,a,d,i,o,s),d.deps<=0)d.resolve();else{const{timeout:g,pendingId:y}=d;g>0?setTimeout(()=>{d.pendingId===y&&d.fallback(x)},g):g===0&&d.fallback(x)}}function _a(e,t,n,r,a,i,o,s,l,c,u=!1){const{p:d,m:p,um:x,n:P,o:{parentNode:T,remove:D}}=c,w=an(e.props&&e.props.timeout),g={vnode:e,parent:t,parentComponent:n,isSVG:o,container:r,hiddenContainer:a,anchor:i,deps:0,pendingId:0,timeout:typeof w=="number"?w:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(y=!1){const{vnode:F,activeBranch:R,pendingBranch:B,pendingId:H,effects:W,parentComponent:G,container:ie}=g;if(g.isHydrating)g.isHydrating=!1;else if(!y){const st=R&&B.transition&&B.transition.mode==="out-in";st&&(R.transition.afterLeave=()=>{H===g.pendingId&&p(B,ie,lt,0)});let{anchor:lt}=g;R&&(lt=P(R),x(R,G,g,!0)),st||p(B,ie,lt,0)}Mt(g,B),g.pendingBranch=null,g.isInFallback=!1;let oe=g.parent,ot=!1;for(;oe;){if(oe.pendingBranch){oe.effects.push(...W),ot=!0;break}oe=oe.parent}ot||bo(W),g.effects=[],fn(F,"onResolve")},fallback(y){if(!g.pendingBranch)return;const{vnode:F,activeBranch:R,parentComponent:B,container:H,isSVG:W}=g;fn(F,"onFallback");const G=P(R),ie=()=>{g.isInFallback&&(d(null,y,H,G,B,null,W,s,l),Mt(g,y))},oe=y.transition&&y.transition.mode==="out-in";oe&&(R.transition.afterLeave=ie),g.isInFallback=!0,x(R,B,null,!0),oe||ie()},move(y,F,R){g.activeBranch&&p(g.activeBranch,y,F,R),g.container=y},next(){return g.activeBranch&&P(g.activeBranch)},registerDep(y,F){const R=!!g.pendingBranch;R&&g.deps++;const B=y.vnode.el;y.asyncDep.catch(H=>{vn(H,y,0)}).then(H=>{if(y.isUnmounted||g.isUnmounted||g.pendingId!==y.suspenseId)return;y.asyncResolved=!0;const{vnode:W}=y;zr(y,H,!1),B&&(W.el=B);const G=!B&&y.subTree.el;F(y,W,T(B||y.subTree.el),B?null:P(y.subTree),g,o,l),G&&D(G),ya(y,W.el),R&&--g.deps===0&&g.resolve()})},unmount(y,F){g.isUnmounted=!0,g.activeBranch&&x(g.activeBranch,n,y,F),g.pendingBranch&&x(g.pendingBranch,n,y,F)}};return g}function Rl(e,t,n,r,a,i,o,s,l){const c=t.suspense=_a(t,r,n,e.parentNode,document.createElement("div"),null,a,i,o,s,!0),u=l(e,c.pendingBranch=t.ssContent,n,c,i,o);return c.deps===0&&c.resolve(),u}function Ll(e){const{shapeFlag:t,children:n}=e,r=t&32;e.ssContent=ni(r?n.default:n),e.ssFallback=r?ni(n.fallback):se(De)}function ni(e){let t;if(j(e)){const n=Lt&&e._c;n&&(e._d=!1,ae()),e=e(),n&&(e._d=!0,t=Ce,jo())}return $(e)&&(e=Ol(e)),e=Ee(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(n=>n!==e)),e}function $l(e,t){t&&t.pendingBranch?$(e)?t.effects.push(...e):t.effects.push(e):bo(e)}function Mt(e,t){e.activeBranch=t;const{vnode:n,parentComponent:r}=e,a=n.el=t.el;r&&r.subTree===n&&(r.vnode.el=a,ya(r,a))}function jl(e,t){if(ce){let n=ce.provides;const r=ce.parent&&ce.parent.provides;r===n&&(n=ce.provides=Object.create(r)),n[e]=t}}function zn(e,t,n=!1){const r=ce||me;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&j(t)?t.call(r.proxy):t}}const Pn={};function Gt(e,t,n){return ko(e,t,n)}function ko(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=V){const s=ce;let l,c=!1,u=!1;if(de(e)?(l=()=>e.value,c=Kn(e)):It(e)?(l=()=>e,r=!0):$(e)?(u=!0,c=e.some(y=>It(y)||Kn(y)),l=()=>e.map(y=>{if(de(y))return y.value;if(It(y))return gt(y);if(j(y))return Qe(y,s,2)})):j(e)?t?l=()=>Qe(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),Me(e,s,3,[p])}:l=Se,t&&r){const y=l;l=()=>gt(y())}let d,p=y=>{d=w.onStop=()=>{Qe(y,s,4)}},x;if(un)if(p=Se,t?n&&Me(t,s,3,[l(),u?[]:void 0,p]):l(),a==="sync"){const y=Nf();x=y.__watcherHandles||(y.__watcherHandles=[])}else return Se;let P=u?new Array(e.length).fill(Pn):Pn;const T=()=>{if(w.active)if(t){const y=w.run();(r||c||(u?y.some((F,R)=>rn(F,P[R])):rn(y,P)))&&(d&&d(),Me(t,s,3,[y,P===Pn?void 0:u&&P[0]===Pn?[]:P,p]),P=y)}else w.run()};T.allowRecurse=!!t;let D;a==="sync"?D=T:a==="post"?D=()=>ye(T,s&&s.suspense):(T.pre=!0,s&&(T.id=s.uid),D=()=>ba(T));const w=new ca(l,D);t?n?T():P=w.run():a==="post"?ye(w.run.bind(w),s&&s.suspense):w.run();const g=()=>{w.stop(),s&&s.scope&&ia(s.scope.effects,w)};return x&&x.push(g),g}function Dl(e,t,n){const r=this.proxy,a=le(e)?e.includes(".")?Ao(r,e):()=>r[e]:e.bind(r,r);let i;j(t)?i=t:(i=t.handler,n=t);const o=ce;nt(this);const s=ko(a,i.bind(r),n);return o?nt(o):et(),s}function Ao(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function gt(e,t){if(!te(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),de(e))gt(e.value,t);else if($(e))for(let n=0;n<e.length;n++)gt(e[n],t);else if(Fs(e)||qt(e))e.forEach(n=>{gt(n,t)});else if($s(e))for(const n in e)gt(e[n],t);return e}function xa(e){return j(e)?{setup:e,name:e.name}:e}const Vt=e=>!!e.type.__asyncLoader,Co=e=>e.type.__isKeepAlive;function Bl(e,t){Oo(e,"a",t)}function zl(e,t){Oo(e,"da",t)}function Oo(e,t,n=ce){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(or(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Co(a.parent.vnode)&&Hl(r,t,n,a),a=a.parent}}function Hl(e,t,n,r){const a=or(t,e,r,!0);Eo(()=>{ia(r[t],a)},n)}function or(e,t,n=ce,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;zt(),nt(n);const s=Me(t,n,e,o);return et(),Ht(),s});return r?a.unshift(i):a.push(i),i}}const Ke=e=>(t,n=ce)=>(!un||e==="sp")&&or(e,(...r)=>t(...r),n),Ul=Ke("bm"),Yl=Ke("m"),Wl=Ke("bu"),Kl=Ke("u"),ql=Ke("bum"),Eo=Ke("um"),Xl=Ke("sp"),Gl=Ke("rtg"),Vl=Ke("rtc");function Zl(e,t=ce){or("ec",e,t)}function yr(e,t){const n=me;if(n===null)return e;const r=fr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=V]=t[i];o&&(j(o)&&(o={mounted:o,updated:o}),o.deep&&gt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function ut(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(zt(),Me(l,n,8,[e.el,s,e,t]),Ht())}}const Jl=Symbol();function Fr(e,t,n,r){let a;const i=n&&n[r];if($(e)||le(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(te(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}function Po(e,t,n={},r,a){if(me.isCE||me.parent&&Vt(me.parent)&&me.parent.isCE)return t!=="default"&&(n.name=t),se("slot",n,r&&r());let i=e[t];i&&i._c&&(i._d=!1),ae();const o=i&&To(i(n)),s=$t(ge,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&e._===1?64:-2);return!a&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),i&&i._c&&(i._d=!0),s}function To(e){return e.some(t=>cn(t)?!(t.type===De||t.type===ge&&!To(t.children)):!0)?e:null}const Rr=e=>e?Uo(e)?fr(e)||e.proxy:Rr(e.parent):null,Zt=ve(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Rr(e.parent),$root:e=>Rr(e.root),$emit:e=>e.emit,$options:e=>wa(e),$forceUpdate:e=>e.f||(e.f=()=>ba(e.update)),$nextTick:e=>e.n||(e.n=xl.bind(e.proxy)),$watch:e=>Dl.bind(e)}),_r=(e,t)=>e!==V&&!e.__isScriptSetup&&U(e,t),Ql={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const x=o[t];if(x!==void 0)switch(x){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(_r(r,t))return o[t]=1,r[t];if(a!==V&&U(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&U(c,t))return o[t]=3,i[t];if(n!==V&&U(n,t))return o[t]=4,n[t];Lr&&(o[t]=0)}}const u=Zt[t];let d,p;if(u)return t==="$attrs"&&we(e,"get",t),u(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==V&&U(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,U(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return _r(a,t)?(a[t]=n,!0):r!==V&&U(r,t)?(r[t]=n,!0):U(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==V&&U(e,o)||_r(t,o)||(s=i[0])&&U(s,o)||U(r,o)||U(Zt,o)||U(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:U(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Lr=!0;function ef(e){const t=wa(e),n=e.proxy,r=e.ctx;Lr=!1,t.beforeCreate&&ri(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:u,beforeMount:d,mounted:p,beforeUpdate:x,updated:P,activated:T,deactivated:D,beforeDestroy:w,beforeUnmount:g,destroyed:y,unmounted:F,render:R,renderTracked:B,renderTriggered:H,errorCaptured:W,serverPrefetch:G,expose:ie,inheritAttrs:oe,components:ot,directives:st,filters:lt}=t;if(c&&tf(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const Q in o){const q=o[Q];j(q)&&(r[Q]=q.bind(n))}if(a){const Q=a.call(n,n);te(Q)&&(e.data=pa(Q))}if(Lr=!0,i)for(const Q in i){const q=i[Q],ft=j(q)?q.bind(n,n):j(q.get)?q.get.bind(n,n):Se,xn=!j(q)&&j(q.set)?q.set.bind(n):Se,ct=Ae({get:ft,set:xn});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>ct.value,set:Ne=>ct.value=Ne})}if(s)for(const Q in s)Io(s[Q],r,n,Q);if(l){const Q=j(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(q=>{jl(q,Q[q])})}u&&ri(u,e,"c");function pe(Q,q){$(q)?q.forEach(ft=>Q(ft.bind(n))):q&&Q(q.bind(n))}if(pe(Ul,d),pe(Yl,p),pe(Wl,x),pe(Kl,P),pe(Bl,T),pe(zl,D),pe(Zl,W),pe(Vl,B),pe(Gl,H),pe(ql,g),pe(Eo,F),pe(Xl,G),$(ie))if(ie.length){const Q=e.exposed||(e.exposed={});ie.forEach(q=>{Object.defineProperty(Q,q,{get:()=>n[q],set:ft=>n[q]=ft})})}else e.exposed||(e.exposed={});R&&e.render===Se&&(e.render=R),oe!=null&&(e.inheritAttrs=oe),ot&&(e.components=ot),st&&(e.directives=st)}function tf(e,t,n=Se,r=!1){$(e)&&(e=$r(e));for(const a in e){const i=e[a];let o;te(i)?"default"in i?o=zn(i.from||a,i.default,!0):o=zn(i.from||a):o=zn(i),de(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function ri(e,t,n){Me($(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Io(e,t,n,r){const a=r.includes(".")?Ao(n,r):()=>n[r];if(le(e)){const i=t[e];j(i)&&Gt(a,i)}else if(j(e))Gt(a,e.bind(n));else if(te(e))if($(e))e.forEach(i=>Io(i,t,n,r));else{const i=j(e.handler)?e.handler.bind(n):t[e.handler];j(i)&&Gt(a,i,e)}}function wa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Gn(l,c,o,!0)),Gn(l,t,o)),te(t)&&i.set(t,l),l}function Gn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Gn(e,i,n,!0),a&&a.forEach(o=>Gn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=nf[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const nf={data:ai,props:mt,emits:mt,methods:mt,computed:mt,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:mt,directives:mt,watch:af,provide:ai,inject:rf};function ai(e,t){return t?e?function(){return ve(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function rf(e,t){return mt($r(e),$r(t))}function $r(e){if($(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function he(e,t){return e?[...new Set([].concat(e,t))]:t}function mt(e,t){return e?ve(ve(Object.create(null),e),t):t}function af(e,t){if(!e)return t;if(!t)return e;const n=ve(Object.create(null),e);for(const r in t)n[r]=he(e[r],t[r]);return n}function of(e,t,n,r=!1){const a={},i={};Wn(i,lr,1),e.propsDefaults=Object.create(null),So(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:pl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function sf(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=Y(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(ir(e.emitsOptions,p))continue;const x=t[p];if(l)if(U(i,p))x!==i[p]&&(i[p]=x,c=!0);else{const P=Ft(p);a[P]=jr(l,s,P,x,e,!1)}else x!==i[p]&&(i[p]=x,c=!0)}}}else{So(e,t,a,i)&&(c=!0);let u;for(const d in s)(!t||!U(t,d)&&((u=Bt(d))===d||!U(t,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(a[d]=jr(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!U(t,d))&&(delete i[d],c=!0)}c&&He(e,"set","$attrs")}function So(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Dn(l))continue;const c=t[l];let u;a&&U(a,u=Ft(l))?!i||!i.includes(u)?n[u]=c:(s||(s={}))[u]=c:ir(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=Y(n),c=s||V;for(let u=0;u<i.length;u++){const d=i[u];n[d]=jr(a,l,d,c[d],e,!U(c,d))}}return o}function jr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=U(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&j(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(nt(a),r=c[n]=l.call(null,t),et())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Bt(n))&&(r=!0))}return r}function Mo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!j(e)){const u=d=>{l=!0;const[p,x]=Mo(d,t,!0);ve(o,p),x&&s.push(...x)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return te(e)&&r.set(e,Tt),Tt;if($(i))for(let u=0;u<i.length;u++){const d=Ft(i[u]);ii(d)&&(o[d]=V)}else if(i)for(const u in i){const d=Ft(u);if(ii(d)){const p=i[u],x=o[d]=$(p)||j(p)?{type:p}:Object.assign({},p);if(x){const P=li(Boolean,x.type),T=li(String,x.type);x[0]=P>-1,x[1]=T<0||P<T,(P>-1||U(x,"default"))&&s.push(d)}}}const c=[o,s];return te(e)&&r.set(e,c),c}function ii(e){return e[0]!=="$"}function oi(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function si(e,t){return oi(e)===oi(t)}function li(e,t){return $(t)?t.findIndex(n=>si(n,e)):j(t)&&si(t,e)?0:-1}const No=e=>e[0]==="_"||e==="$stable",ka=e=>$(e)?e.map(Ee):[Ee(e)],lf=(e,t,n)=>{if(t._n)return t;const r=Xt((...a)=>ka(t(...a)),n);return r._c=!1,r},Fo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(No(a))continue;const i=e[a];if(j(i))t[a]=lf(a,i,r);else if(i!=null){const o=ka(i);t[a]=()=>o}}},Ro=(e,t)=>{const n=ka(t);e.slots.default=()=>n},ff=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Y(t),Wn(t,"_",n)):Fo(t,e.slots={})}else e.slots={},t&&Ro(e,t);Wn(e.slots,lr,1)},cf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=V;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ve(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Fo(t,a)),o=t}else t&&(Ro(e,t),o={default:1});if(i)for(const s in a)!No(s)&&!(s in o)&&delete a[s]};function Lo(){return{app:null,config:{isNativeTag:Ss,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uf=0;function df(e,t){return function(r,a=null){j(r)||(r=Object.assign({},r)),a!=null&&!te(a)&&(a=null);const i=Lo(),o=new Set;let s=!1;const l=i.app={_uid:uf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Ff,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&j(c.install)?(o.add(c),c.install(l,...u)):j(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,d){if(!s){const p=se(r,a);return p.appContext=i,u&&t?t(p,c):e(p,c,d),s=!0,l._container=c,c.__vue_app__=l,fr(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l}};return l}}function Dr(e,t,n,r,a=!1){if($(e)){e.forEach((p,x)=>Dr(p,t&&($(t)?t[x]:t),n,r,a));return}if(Vt(r)&&!a)return;const i=r.shapeFlag&4?fr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,u=s.refs===V?s.refs={}:s.refs,d=s.setupState;if(c!=null&&c!==l&&(le(c)?(u[c]=null,U(d,c)&&(d[c]=null)):de(c)&&(c.value=null)),j(l))Qe(l,s,12,[o,u]);else{const p=le(l),x=de(l);if(p||x){const P=()=>{if(e.f){const T=p?U(d,l)?d[l]:u[l]:l.value;a?$(T)&&ia(T,i):$(T)?T.includes(i)||T.push(i):p?(u[l]=[i],U(d,l)&&(d[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else p?(u[l]=o,U(d,l)&&(d[l]=o)):x&&(l.value=o,e.k&&(u[e.k]=o))};o?(P.id=-1,ye(P,n)):P()}}}const ye=$l;function mf(e){return pf(e)}function pf(e,t){const n=Bs();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:p,setScopeId:x=Se,insertStaticContent:P}=e,T=(f,m,h,b=null,v=null,A=null,O=!1,k=null,C=!!m.dynamicChildren)=>{if(f===m)return;f&&!Ze(f,m)&&(b=wn(f),Ne(f,v,A,!0),f=null),m.patchFlag===-2&&(C=!1,m.dynamicChildren=null);const{type:_,ref:M,shapeFlag:I}=m;switch(_){case sr:D(f,m,h,b);break;case De:w(f,m,h,b);break;case xr:f==null&&g(m,h,b,O);break;case ge:ot(f,m,h,b,v,A,O,k,C);break;default:I&1?R(f,m,h,b,v,A,O,k,C):I&6?st(f,m,h,b,v,A,O,k,C):(I&64||I&128)&&_.process(f,m,h,b,v,A,O,k,C,kt)}M!=null&&v&&Dr(M,f&&f.ref,A,m||f,!m)},D=(f,m,h,b)=>{if(f==null)r(m.el=s(m.children),h,b);else{const v=m.el=f.el;m.children!==f.children&&c(v,m.children)}},w=(f,m,h,b)=>{f==null?r(m.el=l(m.children||""),h,b):m.el=f.el},g=(f,m,h,b)=>{[f.el,f.anchor]=P(f.children,m,h,b,f.el,f.anchor)},y=({el:f,anchor:m},h,b)=>{let v;for(;f&&f!==m;)v=p(f),r(f,h,b),f=v;r(m,h,b)},F=({el:f,anchor:m})=>{let h;for(;f&&f!==m;)h=p(f),a(f),f=h;a(m)},R=(f,m,h,b,v,A,O,k,C)=>{O=O||m.type==="svg",f==null?B(m,h,b,v,A,O,k,C):G(f,m,v,A,O,k,C)},B=(f,m,h,b,v,A,O,k)=>{let C,_;const{type:M,props:I,shapeFlag:N,transition:L,dirs:z}=f;if(C=f.el=o(f.type,A,I&&I.is,I),N&8?u(C,f.children):N&16&&W(f.children,C,null,b,v,A&&M!=="foreignObject",O,k),z&&ut(f,null,b,"created"),I){for(const K in I)K!=="value"&&!Dn(K)&&i(C,K,null,I[K],A,f.children,b,v,Be);"value"in I&&i(C,"value",null,I.value),(_=I.onVnodeBeforeMount)&&Re(_,b,f)}H(C,f,f.scopeId,O,b),z&&ut(f,null,b,"beforeMount");const X=(!v||v&&!v.pendingBranch)&&L&&!L.persisted;X&&L.beforeEnter(C),r(C,m,h),((_=I&&I.onVnodeMounted)||X||z)&&ye(()=>{_&&Re(_,b,f),X&&L.enter(C),z&&ut(f,null,b,"mounted")},v)},H=(f,m,h,b,v)=>{if(h&&x(f,h),b)for(let A=0;A<b.length;A++)x(f,b[A]);if(v){let A=v.subTree;if(m===A){const O=v.vnode;H(f,O,O.scopeId,O.slotScopeIds,v.parent)}}},W=(f,m,h,b,v,A,O,k,C=0)=>{for(let _=C;_<f.length;_++){const M=f[_]=k?Ve(f[_]):Ee(f[_]);T(null,M,m,h,b,v,A,O,k)}},G=(f,m,h,b,v,A,O)=>{const k=m.el=f.el;let{patchFlag:C,dynamicChildren:_,dirs:M}=m;C|=f.patchFlag&16;const I=f.props||V,N=m.props||V;let L;h&&dt(h,!1),(L=N.onVnodeBeforeUpdate)&&Re(L,h,m,f),M&&ut(m,f,h,"beforeUpdate"),h&&dt(h,!0);const z=v&&m.type!=="foreignObject";if(_?ie(f.dynamicChildren,_,k,h,b,z,A):O||q(f,m,k,null,h,b,z,A,!1),C>0){if(C&16)oe(k,m,I,N,h,b,v);else if(C&2&&I.class!==N.class&&i(k,"class",null,N.class,v),C&4&&i(k,"style",I.style,N.style,v),C&8){const X=m.dynamicProps;for(let K=0;K<X.length;K++){const ne=X[K],Oe=I[ne],At=N[ne];(At!==Oe||ne==="value")&&i(k,ne,Oe,At,v,f.children,h,b,Be)}}C&1&&f.children!==m.children&&u(k,m.children)}else!O&&_==null&&oe(k,m,I,N,h,b,v);((L=N.onVnodeUpdated)||M)&&ye(()=>{L&&Re(L,h,m,f),M&&ut(m,f,h,"updated")},b)},ie=(f,m,h,b,v,A,O)=>{for(let k=0;k<m.length;k++){const C=f[k],_=m[k],M=C.el&&(C.type===ge||!Ze(C,_)||C.shapeFlag&70)?d(C.el):h;T(C,_,M,null,b,v,A,O,!0)}},oe=(f,m,h,b,v,A,O)=>{if(h!==b){if(h!==V)for(const k in h)!Dn(k)&&!(k in b)&&i(f,k,h[k],null,O,m.children,v,A,Be);for(const k in b){if(Dn(k))continue;const C=b[k],_=h[k];C!==_&&k!=="value"&&i(f,k,_,C,O,m.children,v,A,Be)}"value"in b&&i(f,"value",h.value,b.value)}},ot=(f,m,h,b,v,A,O,k,C)=>{const _=m.el=f?f.el:s(""),M=m.anchor=f?f.anchor:s("");let{patchFlag:I,dynamicChildren:N,slotScopeIds:L}=m;L&&(k=k?k.concat(L):L),f==null?(r(_,h,b),r(M,h,b),W(m.children,h,M,v,A,O,k,C)):I>0&&I&64&&N&&f.dynamicChildren?(ie(f.dynamicChildren,N,h,v,A,O,k),(m.key!=null||v&&m===v.subTree)&&Aa(f,m,!0)):q(f,m,h,M,v,A,O,k,C)},st=(f,m,h,b,v,A,O,k,C)=>{m.slotScopeIds=k,f==null?m.shapeFlag&512?v.ctx.activate(m,h,b,O,C):lt(m,h,b,v,A,O,C):Ba(f,m,C)},lt=(f,m,h,b,v,A,O)=>{const k=f.component=Cf(f,b,v);if(Co(f)&&(k.ctx.renderer=kt),Ef(k),k.asyncDep){if(v&&v.registerDep(k,pe),!f.el){const C=k.subTree=se(De);w(null,C,m,h)}return}pe(k,f,m,h,v,A,O)},Ba=(f,m,h)=>{const b=m.component=f.component;if(Tl(f,m,h))if(b.asyncDep&&!b.asyncResolved){Q(b,m,h);return}else b.next=m,kl(b.update),b.update();else m.el=f.el,b.vnode=m},pe=(f,m,h,b,v,A,O)=>{const k=()=>{if(f.isMounted){let{next:M,bu:I,u:N,parent:L,vnode:z}=f,X=M,K;dt(f,!1),M?(M.el=z.el,Q(f,M,O)):M=z,I&&Bn(I),(K=M.props&&M.props.onVnodeBeforeUpdate)&&Re(K,L,M,z),dt(f,!0);const ne=br(f),Oe=f.subTree;f.subTree=ne,T(Oe,ne,d(Oe.el),wn(Oe),f,v,A),M.el=ne.el,X===null&&ya(f,ne.el),N&&ye(N,v),(K=M.props&&M.props.onVnodeUpdated)&&ye(()=>Re(K,L,M,z),v)}else{let M;const{el:I,props:N}=m,{bm:L,m:z,parent:X}=f,K=Vt(m);if(dt(f,!1),L&&Bn(L),!K&&(M=N&&N.onVnodeBeforeMount)&&Re(M,X,m),dt(f,!0),I&&gr){const ne=()=>{f.subTree=br(f),gr(I,f.subTree,f,v,null)};K?m.type.__asyncLoader().then(()=>!f.isUnmounted&&ne()):ne()}else{const ne=f.subTree=br(f);T(null,ne,h,b,f,v,A),m.el=ne.el}if(z&&ye(z,v),!K&&(M=N&&N.onVnodeMounted)){const ne=m;ye(()=>Re(M,X,ne),v)}(m.shapeFlag&256||X&&Vt(X.vnode)&&X.vnode.shapeFlag&256)&&f.a&&ye(f.a,v),f.isMounted=!0,m=h=b=null}},C=f.effect=new ca(k,()=>ba(_),f.scope),_=f.update=()=>C.run();_.id=f.uid,dt(f,!0),_()},Q=(f,m,h)=>{m.component=f;const b=f.vnode.props;f.vnode=m,f.next=null,sf(f,m.props,b,h),cf(f,m.children,h),zt(),ei(),Ht()},q=(f,m,h,b,v,A,O,k,C=!1)=>{const _=f&&f.children,M=f?f.shapeFlag:0,I=m.children,{patchFlag:N,shapeFlag:L}=m;if(N>0){if(N&128){xn(_,I,h,b,v,A,O,k,C);return}else if(N&256){ft(_,I,h,b,v,A,O,k,C);return}}L&8?(M&16&&Be(_,v,A),I!==_&&u(h,I)):M&16?L&16?xn(_,I,h,b,v,A,O,k,C):Be(_,v,A,!0):(M&8&&u(h,""),L&16&&W(I,h,b,v,A,O,k,C))},ft=(f,m,h,b,v,A,O,k,C)=>{f=f||Tt,m=m||Tt;const _=f.length,M=m.length,I=Math.min(_,M);let N;for(N=0;N<I;N++){const L=m[N]=C?Ve(m[N]):Ee(m[N]);T(f[N],L,h,null,v,A,O,k,C)}_>M?Be(f,v,A,!0,!1,I):W(m,h,b,v,A,O,k,C,I)},xn=(f,m,h,b,v,A,O,k,C)=>{let _=0;const M=m.length;let I=f.length-1,N=M-1;for(;_<=I&&_<=N;){const L=f[_],z=m[_]=C?Ve(m[_]):Ee(m[_]);if(Ze(L,z))T(L,z,h,null,v,A,O,k,C);else break;_++}for(;_<=I&&_<=N;){const L=f[I],z=m[N]=C?Ve(m[N]):Ee(m[N]);if(Ze(L,z))T(L,z,h,null,v,A,O,k,C);else break;I--,N--}if(_>I){if(_<=N){const L=N+1,z=L<M?m[L].el:b;for(;_<=N;)T(null,m[_]=C?Ve(m[_]):Ee(m[_]),h,z,v,A,O,k,C),_++}}else if(_>N)for(;_<=I;)Ne(f[_],v,A,!0),_++;else{const L=_,z=_,X=new Map;for(_=z;_<=N;_++){const _e=m[_]=C?Ve(m[_]):Ee(m[_]);_e.key!=null&&X.set(_e.key,_)}let K,ne=0;const Oe=N-z+1;let At=!1,Ua=0;const Yt=new Array(Oe);for(_=0;_<Oe;_++)Yt[_]=0;for(_=L;_<=I;_++){const _e=f[_];if(ne>=Oe){Ne(_e,v,A,!0);continue}let Fe;if(_e.key!=null)Fe=X.get(_e.key);else for(K=z;K<=N;K++)if(Yt[K-z]===0&&Ze(_e,m[K])){Fe=K;break}Fe===void 0?Ne(_e,v,A,!0):(Yt[Fe-z]=_+1,Fe>=Ua?Ua=Fe:At=!0,T(_e,m[Fe],h,null,v,A,O,k,C),ne++)}const Ya=At?hf(Yt):Tt;for(K=Ya.length-1,_=Oe-1;_>=0;_--){const _e=z+_,Fe=m[_e],Wa=_e+1<M?m[_e+1].el:b;Yt[_]===0?T(null,Fe,h,Wa,v,A,O,k,C):At&&(K<0||_!==Ya[K]?ct(Fe,h,Wa,2):K--)}}},ct=(f,m,h,b,v=null)=>{const{el:A,type:O,transition:k,children:C,shapeFlag:_}=f;if(_&6){ct(f.component.subTree,m,h,b);return}if(_&128){f.suspense.move(m,h,b);return}if(_&64){O.move(f,m,h,kt);return}if(O===ge){r(A,m,h);for(let I=0;I<C.length;I++)ct(C[I],m,h,b);r(f.anchor,m,h);return}if(O===xr){y(f,m,h);return}if(b!==2&&_&1&&k)if(b===0)k.beforeEnter(A),r(A,m,h),ye(()=>k.enter(A),v);else{const{leave:I,delayLeave:N,afterLeave:L}=k,z=()=>r(A,m,h),X=()=>{I(A,()=>{z(),L&&L()})};N?N(A,z,X):X()}else r(A,m,h)},Ne=(f,m,h,b=!1,v=!1)=>{const{type:A,props:O,ref:k,children:C,dynamicChildren:_,shapeFlag:M,patchFlag:I,dirs:N}=f;if(k!=null&&Dr(k,null,h,f,!0),M&256){m.ctx.deactivate(f);return}const L=M&1&&N,z=!Vt(f);let X;if(z&&(X=O&&O.onVnodeBeforeUnmount)&&Re(X,m,f),M&6)As(f.component,h,b);else{if(M&128){f.suspense.unmount(h,b);return}L&&ut(f,null,m,"beforeUnmount"),M&64?f.type.remove(f,m,h,v,kt,b):_&&(A!==ge||I>0&&I&64)?Be(_,m,h,!1,!0):(A===ge&&I&384||!v&&M&16)&&Be(C,m,h),b&&za(f)}(z&&(X=O&&O.onVnodeUnmounted)||L)&&ye(()=>{X&&Re(X,m,f),L&&ut(f,null,m,"unmounted")},h)},za=f=>{const{type:m,el:h,anchor:b,transition:v}=f;if(m===ge){ks(h,b);return}if(m===xr){F(f);return}const A=()=>{a(h),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:O,delayLeave:k}=v,C=()=>O(h,A);k?k(f.el,A,C):C()}else A()},ks=(f,m)=>{let h;for(;f!==m;)h=p(f),a(f),f=h;a(m)},As=(f,m,h)=>{const{bum:b,scope:v,update:A,subTree:O,um:k}=f;b&&Bn(b),v.stop(),A&&(A.active=!1,Ne(O,f,m,h)),k&&ye(k,m),ye(()=>{f.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},Be=(f,m,h,b=!1,v=!1,A=0)=>{for(let O=A;O<f.length;O++)Ne(f[O],m,h,b,v)},wn=f=>f.shapeFlag&6?wn(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el),Ha=(f,m,h)=>{f==null?m._vnode&&Ne(m._vnode,null,null,!0):T(m._vnode||null,f,m,null,null,null,h),ei(),yo(),m._vnode=f},kt={p:T,um:Ne,m:ct,r:za,mt:lt,mc:W,pc:q,pbc:ie,n:wn,o:e};let hr,gr;return t&&([hr,gr]=t(kt)),{render:Ha,hydrate:hr,createApp:df(Ha,hr)}}function dt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Aa(e,t,n=!1){const r=e.children,a=t.children;if($(r)&&$(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ve(a[i]),s.el=o.el),n||Aa(o,s)),s.type===sr&&(s.el=o.el)}}function hf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const gf=e=>e.__isTeleport,Jt=e=>e&&(e.disabled||e.disabled===""),fi=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Br=(e,t)=>{const n=e&&e.to;return le(n)?t?t(n):null:n},vf={__isTeleport:!0,process(e,t,n,r,a,i,o,s,l,c){const{mc:u,pc:d,pbc:p,o:{insert:x,querySelector:P,createText:T,createComment:D}}=c,w=Jt(t.props);let{shapeFlag:g,children:y,dynamicChildren:F}=t;if(e==null){const R=t.el=T(""),B=t.anchor=T("");x(R,n,r),x(B,n,r);const H=t.target=Br(t.props,P),W=t.targetAnchor=T("");H&&(x(W,H),o=o||fi(H));const G=(ie,oe)=>{g&16&&u(y,ie,oe,a,i,o,s,l)};w?G(n,B):H&&G(H,W)}else{t.el=e.el;const R=t.anchor=e.anchor,B=t.target=e.target,H=t.targetAnchor=e.targetAnchor,W=Jt(e.props),G=W?n:B,ie=W?R:H;if(o=o||fi(B),F?(p(e.dynamicChildren,F,G,a,i,o,s),Aa(e,t,!0)):l||d(e,t,G,ie,a,i,o,s,!1),w)W||Tn(t,n,R,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const oe=t.target=Br(t.props,P);oe&&Tn(t,oe,null,c,0)}else W&&Tn(t,B,H,c,1)}$o(t)},remove(e,t,n,r,{um:a,o:{remove:i}},o){const{shapeFlag:s,children:l,anchor:c,targetAnchor:u,target:d,props:p}=e;if(d&&i(u),(o||!Jt(p))&&(i(c),s&16))for(let x=0;x<l.length;x++){const P=l[x];a(P,t,n,!0,!!P.dynamicChildren)}},move:Tn,hydrate:bf};function Tn(e,t,n,{o:{insert:r},m:a},i=2){i===0&&r(e.targetAnchor,t,n);const{el:o,anchor:s,shapeFlag:l,children:c,props:u}=e,d=i===2;if(d&&r(o,t,n),(!d||Jt(u))&&l&16)for(let p=0;p<c.length;p++)a(c[p],t,n,2);d&&r(s,t,n)}function bf(e,t,n,r,a,i,{o:{nextSibling:o,parentNode:s,querySelector:l}},c){const u=t.target=Br(t.props,l);if(u){const d=u._lpa||u.firstChild;if(t.shapeFlag&16)if(Jt(t.props))t.anchor=c(o(e),t,s(e),n,r,a,i),t.targetAnchor=d;else{t.anchor=o(e);let p=d;for(;p;)if(p=o(p),p&&p.nodeType===8&&p.data==="teleport anchor"){t.targetAnchor=p,u._lpa=t.targetAnchor&&o(t.targetAnchor);break}c(d,t,u,n,r,a,i)}$o(t)}return t.anchor&&o(t.anchor)}const yf=vf;function $o(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const ge=Symbol(void 0),sr=Symbol(void 0),De=Symbol(void 0),xr=Symbol(void 0),Qt=[];let Ce=null;function ae(e=!1){Qt.push(Ce=e?null:[])}function jo(){Qt.pop(),Ce=Qt[Qt.length-1]||null}let Lt=1;function ci(e){Lt+=e}function Do(e){return e.dynamicChildren=Lt>0?Ce||Tt:null,jo(),Lt>0&&Ce&&Ce.push(e),e}function xe(e,t,n,r,a,i){return Do(re(e,t,n,r,a,i,!0))}function $t(e,t,n,r,a){return Do(se(e,t,n,r,a,!0))}function cn(e){return e?e.__v_isVNode===!0:!1}function Ze(e,t){return e.type===t.type&&e.key===t.key}const lr="__vInternal",Bo=({key:e})=>e??null,Hn=({ref:e,ref_key:t,ref_for:n})=>e!=null?le(e)||de(e)||j(e)?{i:me,r:e,k:t,f:!!n}:e:null;function re(e,t=null,n=null,r=0,a=null,i=e===ge?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Bo(t),ref:t&&Hn(t),scopeId:wo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:me};return s?(Ca(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=le(n)?8:16),Lt>0&&!o&&Ce&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ce.push(l),l}const se=_f;function _f(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Jl)&&(e=De),cn(e)){const s=jt(e,t,!0);return n&&Ca(s,n),Lt>0&&!i&&Ce&&(s.shapeFlag&6?Ce[Ce.indexOf(e)]=s:Ce.push(s)),s.patchFlag|=-2,s}if(Sf(e)&&(e=e.__vccOpts),t){t=xf(t);let{class:s,style:l}=t;s&&!le(s)&&(t.class=ra(s)),te(l)&&(fo(l)&&!$(l)&&(l=ve({},l)),t.style=_t(l))}const o=le(e)?1:Il(e)?128:gf(e)?64:te(e)?4:j(e)?2:0;return re(e,t,n,r,a,o,i,!0)}function xf(e){return e?fo(e)||lr in e?ve({},e):e:null}function jt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?wf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Bo(s),ref:t&&t.ref?n&&a?$(a)?a.concat(Hn(t)):[a,Hn(t)]:Hn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ge?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&jt(e.ssContent),ssFallback:e.ssFallback&&jt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function zo(e=" ",t=0){return se(sr,null,e,t)}function Ho(e="",t=!1){return t?(ae(),$t(De,null,e)):se(De,null,e)}function Ee(e){return e==null||typeof e=="boolean"?se(De):$(e)?se(ge,null,e.slice()):typeof e=="object"?Ve(e):se(sr,null,String(e))}function Ve(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:jt(e)}function Ca(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if($(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Ca(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(lr in t)?t._ctx=me:a===3&&me&&(me.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:me},n=32):(t=String(t),r&64?(n=16,t=[zo(t)]):n=8);e.children=t,e.shapeFlag|=n}function wf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=ra([t.class,r.class]));else if(a==="style")t.style=_t([t.style,r.style]);else if(tr(a)){const i=t[a],o=r[a];o&&i!==o&&!($(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Re(e,t,n,r=null){Me(e,t,7,[n,r])}const kf=Lo();let Af=0;function Cf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||kf,i={uid:Af++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new zs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mo(r,a),emitsOptions:xo(r,a),emit:null,emitted:null,propsDefaults:V,inheritAttrs:r.inheritAttrs,ctx:V,data:V,props:V,attrs:V,slots:V,refs:V,setupState:V,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Cl.bind(null,i),e.ce&&e.ce(i),i}let ce=null;const Of=()=>ce||me,nt=e=>{ce=e,e.scope.on()},et=()=>{ce&&ce.scope.off(),ce=null};function Uo(e){return e.vnode.shapeFlag&4}let un=!1;function Ef(e,t=!1){un=t;const{props:n,children:r}=e.vnode,a=Uo(e);of(e,n,a,t),ff(e,r);const i=a?Pf(e,t):void 0;return un=!1,i}function Pf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=co(new Proxy(e.ctx,Ql));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?If(e):null;nt(e),zt();const i=Qe(r,e,0,[e.props,a]);if(Ht(),et(),sa(i)){if(i.then(et,et),t)return i.then(o=>{zr(e,o,t)}).catch(o=>{vn(o,e,0)});e.asyncDep=i}else zr(e,i,t)}else Yo(e,t)}function zr(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:te(t)&&(e.setupState=po(t)),Yo(e,n)}let ui;function Yo(e,t,n){const r=e.type;if(!e.render){if(!t&&ui&&!r.render){const a=r.template||wa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ve(ve({isCustomElement:i,delimiters:s},o),l);r.render=ui(a,c)}}e.render=r.render||Se}nt(e),zt(),ef(e),Ht(),et()}function Tf(e){return new Proxy(e.attrs,{get(t,n){return we(e,"get","$attrs"),t[n]}})}function If(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Tf(e))},slots:e.slots,emit:e.emit,expose:t}}function fr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(po(co(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Zt)return Zt[n](e)},has(t,n){return n in t||n in Zt}}))}function Sf(e){return j(e)&&"__vccOpts"in e}const Ae=(e,t)=>yl(e,t,un);function di(e){const t=Of();let n=e();return et(),sa(n)&&(n=n.catch(r=>{throw nt(t),r})),[n,()=>nt(t)]}function Wo(e,t,n){const r=arguments.length;return r===2?te(t)&&!$(t)?cn(t)?se(e,null,[t]):se(e,t):se(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&cn(n)&&(n=[n]),se(e,t,n))}const Mf=Symbol(""),Nf=()=>zn(Mf),Ff="3.2.45",Rf="http://www.w3.org/2000/svg",ht=typeof document<"u"?document:null,mi=ht&&ht.createElement("template"),Lf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?ht.createElementNS(Rf,e):ht.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>ht.createTextNode(e),createComment:e=>ht.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ht.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{mi.innerHTML=r?`<svg>${e}</svg>`:e;const s=mi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function $f(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function jf(e,t,n){const r=e.style,a=le(n);if(n&&!a){for(const i in n)Hr(r,i,n[i]);if(t&&!le(t))for(const i in t)n[i]==null&&Hr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const pi=/\s*!important$/;function Hr(e,t,n){if($(n))n.forEach(r=>Hr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Df(e,t);pi.test(n)?e.setProperty(Bt(r),n.replace(pi,""),"important"):e[r]=n}}const hi=["Webkit","Moz","ms"],wr={};function Df(e,t){const n=wr[t];if(n)return n;let r=Ft(t);if(r!=="filter"&&r in e)return wr[t]=r;r=Zi(r);for(let a=0;a<hi.length;a++){const i=hi[a]+r;if(i in e)return wr[t]=i}return t}const gi="http://www.w3.org/1999/xlink";function Bf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(gi,t.slice(6,t.length)):e.setAttributeNS(gi,t,n);else{const i=Is(t);n==null||i&&!Vi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function zf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Vi(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function Ct(e,t,n,r){e.addEventListener(t,n,r)}function Hf(e,t,n,r){e.removeEventListener(t,n,r)}function Uf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Yf(t);if(r){const c=i[t]=qf(r,a);Ct(e,s,c,l)}else o&&(Hf(e,s,o,l),i[t]=void 0)}}const vi=/(?:Once|Passive|Capture)$/;function Yf(e){let t;if(vi.test(e)){t={};let r;for(;r=e.match(vi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Bt(e.slice(2)),t]}let kr=0;const Wf=Promise.resolve(),Kf=()=>kr||(Wf.then(()=>kr=0),kr=Date.now());function qf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Me(Xf(r,n.value),t,5,[r])};return n.value=e,n.attached=Kf(),n}function Xf(e,t){if($(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const bi=/^on[a-z]/,Gf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?$f(e,r,a):t==="style"?jf(e,n,r):tr(t)?aa(t)||Uf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Vf(e,t,r,a))?zf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Bf(e,t,r,a))};function Vf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&bi.test(t)&&j(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||bi.test(t)&&le(n)?!1:t in e}const yi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return $(t)?n=>Bn(t,n):t};function Zf(e){e.target.composing=!0}function _i(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ar={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=yi(a);const i=r||a.props&&a.props.type==="number";Ct(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=an(s)),e._assign(s)}),n&&Ct(e,"change",()=>{e.value=e.value.trim()}),t||(Ct(e,"compositionstart",Zf),Ct(e,"compositionend",_i),Ct(e,"change",_i))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=yi(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&an(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},Jf=["ctrl","shift","alt","meta"],Qf={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Jf.some(n=>e[`${n}Key`]&&!t.includes(n))},xi=(e,t)=>(n,...r)=>{for(let a=0;a<t.length;a++){const i=Qf[t[a]];if(i&&i(n,t))return}return e(n,...r)},ec=ve({patchProp:Gf},Lf);let wi;function tc(){return wi||(wi=mf(ec))}const nc=(...e)=>{const t=tc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=rc(r);if(!a)return;const i=t._component;!j(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function rc(e){return le(e)?document.querySelector(e):e}const ac="/MyMyGradient/assets/logo_svg-c531726f.svg",ic="/MyMyGradient/assets/github_svg-d7cf66d7.svg";const cr=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},oc={class:"Header"},sc={class:"Header-box"},lc={class:"Header-hero"},fc=["src"],cc={class:"Header-title"},uc={class:"Header-social"},dc={href:"https://github.com/plaga2001/MyMyGradient",target:"_blank",rel:"noopener external"},mc=["src"],pc={__name:"HeaderLayout",setup(e){return(t,n)=>(ae(),xe("header",oc,[re("div",sc,[re("div",lc,[re("img",{src:qn(ac),alt:"mymygradient's logo",title:"mymygradient's logo",class:"Header-logo"},null,8,fc),re("h1",cc,[Po(t.$slots,"title",{},void 0,!0)])]),re("div",uc,[re("a",dc,[re("img",{src:qn(ic),alt:"github's logo"},null,8,mc)])])])]))}},hc=cr(pc,[["__scopeId","data-v-ecea182a"]]);const gc={},vc={class:"GridCard"};function bc(e,t){return ae(),xe("div",vc,[Po(e.$slots,"default",{},void 0,!0)])}const yc=cr(gc,[["render",bc],["__scopeId","data-v-8293b583"]]),_c="/MyMyGradient/assets/range_svg-29d5103c.svg";const xc=["onClick"],wc=re("svg",{xmlns:"http://www.w3.org/2000/svg",class:"Gradient-copy",viewBox:"0 96 960 960"},[re("path",{d:"M180 975q-24 0-42-18t-18-42V312h60v603h474v60H180Zm120-120q-24 0-42-18t-18-42V235q0-24 18-42t42-18h440q24 0 42 18t18 42v560q0 24-18 42t-42 18H300Zm0-60h440V235H300v560Zm0 0V235v560Z"})],-1),kc=[wc],Ac=["onClick"],Cc=re("svg",{class:"Gradient-exitSvg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 96 960 960"},[re("path",{d:"m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"})],-1),Oc=[Cc],Ec={__name:"GradientShow",props:{deg:{require:!0,type:String},colors:{require:!0,type:String},mainColor:{require:!0,type:String}},setup(e){const t=e,n=Ot(!1);function r(){navigator.clipboard.writeText(`background: linear-gradient(${t.deg}deg, ${t.colors});`)}function a(){document.body.classList.toggle("hidden"),n.value=!n.value}return(i,o)=>(ae(),xe("div",{class:"Gradient",style:_t({background:`linear-gradient(${t.deg}deg, ${t.colors})`,"--color":t.mainColor}),onClick:xi(a,["self"])},[re("button",{onClick:r,title:"copy code on clipboard"},kc),(ae(),$t(yf,{to:"body"},[n.value?(ae(),xe("div",{key:0,class:"Gradient-show",style:_t({background:`linear-gradient(${t.deg}deg, ${t.colors})`}),onClick:xi(a,["self"])},[re("button",{class:"Gradient-exitButton",onClick:a,title:"exit show gradient"},Oc)],12,Ac)):Ho("",!0)]))],12,xc))}};const Pc={class:"Card"},Tc={class:"Card-controllerbox"},Ic=["src"],Sc={class:"Card-lengthBox"},Mc=["onUpdate:modelValue"],Nc={class:"Card-inputColorBox"},Fc=["onUpdate:modelValue"],Rc={__name:"GradientCard",props:{gradientColor:{require:!0,type:Object},deg:{require:!0,type:String}},setup(e){const t=e,n=Ot(t.deg),r=Ot(t.gradientColor),a=Ot(null),i=Ot(!0);function o(){a.value=r.value.map(l=>`${l.color} ${l.length}%`).join(),r.value.length===4&&(i.value=!1)}function s(){r.value.forEach(l=>{l.length/=2}),r.value.push({color:"#34DCDF",length:100})}return o(),Gt(r.value,o),(l,c)=>(ae(),xe("div",Pc,[se(Ec,{deg:n.value,colors:a.value,"main-color":r.value[0].color},null,8,["deg","colors","main-color"]),re("div",Tc,[re("img",{src:qn(_c),alt:"range input",title:"range input",class:"Card-svg",style:_t({transform:`rotate(${n.value}deg)`})},null,12,Ic),yr(re("input",{type:"range",min:"0",max:"360",class:"Card-range","onUpdate:modelValue":c[0]||(c[0]=u=>n.value=u)},null,512),[[Ar,n.value]])]),re("div",Sc,[(ae(!0),xe(ge,null,Fr(r.value,(u,d)=>yr((ae(),xe("input",{type:"range",key:d,style:_t({"--color":u.color}),class:"Card-length",max:"100",min:"0","onUpdate:modelValue":p=>u.length=p},null,12,Mc)),[[Ar,u.length]])),128))]),re("div",Nc,[(ae(!0),xe(ge,null,Fr(r.value,(u,d)=>yr((ae(),xe("input",{type:"color",key:d,"onUpdate:modelValue":p=>u.color=p,class:"Card-inputColor"},null,8,Fc)),[[Ar,u.color]])),128)),i.value?(ae(),xe("div",{key:0,class:"Card-addColor",onClick:s},"+")):Ho("",!0)])]))}},Lc=cr(Rc,[["__scopeId","data-v-c7477e41"]]),$c={__name:"CardsWrapperModule",async setup(e){let t,n;const r=Ot(null);return r.value=([t,n]=di(async()=>([t,n]=di(()=>fetch("data/gradients.json")),t=await t,n(),t).json()),t=await t,n(),t),(a,i)=>(ae(),$t(yc,null,{default:Xt(()=>[(ae(!0),xe(ge,null,Fr(r.value,o=>(ae(),$t(Lc,{key:o.id,"gradient-color":o.colors,deg:o.deg},null,8,["gradient-color","deg"]))),128))]),_:1}))}};const jc={},Dc={class:"Loader"};function Bc(e,t){return ae(),xe("div",Dc)}const zc=cr(jc,[["render",Bc],["__scopeId","data-v-770e6105"]]);const Hc={__name:"App",setup(e){return(t,n)=>(ae(),xe(ge,null,[se(hc,null,{title:Xt(()=>[zo(" MyMyGradient ")]),_:1}),(ae(),$t(Ml,null,{default:Xt(()=>[se($c)]),fallback:Xt(()=>[se(zc)]),_:1}))],64))}};function ki(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ki(Object(n),!0).forEach(function(r){fe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ki(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Vn(e){return Vn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Vn(e)}function Uc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ai(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Yc(e,t,n){return t&&Ai(e.prototype,t),n&&Ai(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Oa(e,t){return Kc(e)||Xc(e,t)||Ko(e,t)||Vc()}function bn(e){return Wc(e)||qc(e)||Ko(e)||Gc()}function Wc(e){if(Array.isArray(e))return Ur(e)}function Kc(e){if(Array.isArray(e))return e}function qc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Xc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Ko(e,t){if(e){if(typeof e=="string")return Ur(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ur(e,t)}}function Ur(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Gc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ci=function(){},Ea={},qo={},Xo=null,Go={mark:Ci,measure:Ci};try{typeof window<"u"&&(Ea=window),typeof document<"u"&&(qo=document),typeof MutationObserver<"u"&&(Xo=MutationObserver),typeof performance<"u"&&(Go=performance)}catch{}var Zc=Ea.navigator||{},Oi=Zc.userAgent,Ei=Oi===void 0?"":Oi,rt=Ea,J=qo,Pi=Xo,In=Go;rt.document;var qe=!!J.documentElement&&!!J.head&&typeof J.addEventListener=="function"&&typeof J.createElement=="function",Vo=~Ei.indexOf("MSIE")||~Ei.indexOf("Trident/"),Sn,Mn,Nn,Fn,Rn,Ue="___FONT_AWESOME___",Yr=16,Zo="fa",Jo="svg-inline--fa",xt="data-fa-i2svg",Wr="data-fa-pseudo-element",Jc="data-fa-pseudo-element-pending",Pa="data-prefix",Ta="data-icon",Ti="fontawesome-i2svg",Qc="async",eu=["HTML","HEAD","STYLE","SCRIPT"],Qo=function(){try{return!0}catch{return!1}}(),Z="classic",ee="sharp",Ia=[Z,ee];function yn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Z]}})}var dn=yn((Sn={},fe(Sn,Z,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),fe(Sn,ee,{fa:"solid",fass:"solid","fa-solid":"solid"}),Sn)),mn=yn((Mn={},fe(Mn,Z,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),fe(Mn,ee,{solid:"fass"}),Mn)),pn=yn((Nn={},fe(Nn,Z,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),fe(Nn,ee,{fass:"fa-solid"}),Nn)),tu=yn((Fn={},fe(Fn,Z,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),fe(Fn,ee,{"fa-solid":"fass"}),Fn)),nu=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,es="fa-layers-text",ru=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,au=yn((Rn={},fe(Rn,Z,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),fe(Rn,ee,{900:"fass"}),Rn)),ts=[1,2,3,4,5,6,7,8,9,10],iu=ts.concat([11,12,13,14,15,16,17,18,19,20]),ou=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],vt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},hn=new Set;Object.keys(mn[Z]).map(hn.add.bind(hn));Object.keys(mn[ee]).map(hn.add.bind(hn));var su=[].concat(Ia,bn(hn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",vt.GROUP,vt.SWAP_OPACITY,vt.PRIMARY,vt.SECONDARY]).concat(ts.map(function(e){return"".concat(e,"x")})).concat(iu.map(function(e){return"w-".concat(e)})),en=rt.FontAwesomeConfig||{};function lu(e){var t=J.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function fu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(J&&typeof J.querySelector=="function"){var cu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];cu.forEach(function(e){var t=Oa(e,2),n=t[0],r=t[1],a=fu(lu(n));a!=null&&(en[r]=a)})}var ns={styleDefault:"solid",familyDefault:"classic",cssPrefix:Zo,replacementClass:Jo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};en.familyPrefix&&(en.cssPrefix=en.familyPrefix);var Dt=E(E({},ns),en);Dt.autoReplaceSvg||(Dt.observeMutations=!1);var S={};Object.keys(ns).forEach(function(e){Object.defineProperty(S,e,{enumerable:!0,set:function(n){Dt[e]=n,tn.forEach(function(r){return r(S)})},get:function(){return Dt[e]}})});Object.defineProperty(S,"familyPrefix",{enumerable:!0,set:function(t){Dt.cssPrefix=t,tn.forEach(function(n){return n(S)})},get:function(){return Dt.cssPrefix}});rt.FontAwesomeConfig=S;var tn=[];function uu(e){return tn.push(e),function(){tn.splice(tn.indexOf(e),1)}}var Ge=Yr,je={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function du(e){if(!(!e||!qe)){var t=J.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=J.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return J.head.insertBefore(t,r),e}}var mu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function gn(){for(var e=12,t="";e-- >0;)t+=mu[Math.random()*62|0];return t}function Ut(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Sa(e){return e.classList?Ut(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function rs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function pu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(rs(e[n]),'" ')},"").trim()}function ur(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ma(e){return e.size!==je.size||e.x!==je.x||e.y!==je.y||e.rotate!==je.rotate||e.flipX||e.flipY}function hu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function gu(e){var t=e.transform,n=e.width,r=n===void 0?Yr:n,a=e.height,i=a===void 0?Yr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Vo?l+="translate(".concat(t.x/Ge-r/2,"em, ").concat(t.y/Ge-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ge,"em), calc(-50% + ").concat(t.y/Ge,"em)) "):l+="translate(".concat(t.x/Ge,"em, ").concat(t.y/Ge,"em) "),l+="scale(".concat(t.size/Ge*(t.flipX?-1:1),", ").concat(t.size/Ge*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var vu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function as(){var e=Zo,t=Jo,n=S.cssPrefix,r=S.replacementClass,a=vu;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Ii=!1;function Cr(){S.autoAddCss&&!Ii&&(du(as()),Ii=!0)}var bu={mixout:function(){return{dom:{css:as,insertCss:Cr}}},hooks:function(){return{beforeDOMElementCreation:function(){Cr()},beforeI2svg:function(){Cr()}}}},Ye=rt||{};Ye[Ue]||(Ye[Ue]={});Ye[Ue].styles||(Ye[Ue].styles={});Ye[Ue].hooks||(Ye[Ue].hooks={});Ye[Ue].shims||(Ye[Ue].shims=[]);var Ie=Ye[Ue],is=[],yu=function e(){J.removeEventListener("DOMContentLoaded",e),Zn=1,is.map(function(t){return t()})},Zn=!1;qe&&(Zn=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),Zn||J.addEventListener("DOMContentLoaded",yu));function _u(e){qe&&(Zn?setTimeout(e,0):is.push(e))}function _n(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?rs(e):"<".concat(t," ").concat(pu(r),">").concat(i.map(_n).join(""),"</").concat(t,">")}function Si(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var xu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Or=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?xu(n,a):n,l,c,u;for(r===void 0?(l=1,u=t[i[0]]):(l=0,u=r);l<o;l++)c=i[l],u=s(u,t[c],c,t);return u};function wu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Kr(e){var t=wu(e);return t.length===1?t[0].toString(16):null}function ku(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Mi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function qr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Mi(t);typeof Ie.hooks.addPack=="function"&&!a?Ie.hooks.addPack(e,Mi(t)):Ie.styles[e]=E(E({},Ie.styles[e]||{}),i),e==="fas"&&qr("fa",t)}var Ln,$n,jn,Et=Ie.styles,Au=Ie.shims,Cu=(Ln={},fe(Ln,Z,Object.values(pn[Z])),fe(Ln,ee,Object.values(pn[ee])),Ln),Na=null,os={},ss={},ls={},fs={},cs={},Ou=($n={},fe($n,Z,Object.keys(dn[Z])),fe($n,ee,Object.keys(dn[ee])),$n);function Eu(e){return~su.indexOf(e)}function Pu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Eu(a)?a:null}var us=function(){var t=function(i){return Or(Et,function(o,s,l){return o[l]=Or(s,i,{}),o},{})};os=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),ss=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),cs=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Et||S.autoFetchSvg,r=Or(Au,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});ls=r.names,fs=r.unicodes,Na=dr(S.styleDefault,{family:S.familyDefault})};uu(function(e){Na=dr(e.styleDefault,{family:S.familyDefault})});us();function Fa(e,t){return(os[e]||{})[t]}function Tu(e,t){return(ss[e]||{})[t]}function bt(e,t){return(cs[e]||{})[t]}function ds(e){return ls[e]||{prefix:null,iconName:null}}function Iu(e){var t=fs[e],n=Fa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function at(){return Na}var Ra=function(){return{prefix:null,iconName:null,rest:[]}};function dr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Z:n,a=dn[r][e],i=mn[r][e]||mn[r][a],o=e in Ie.styles?e:null;return i||o||null}var Ni=(jn={},fe(jn,Z,Object.keys(pn[Z])),fe(jn,ee,Object.keys(pn[ee])),jn);function mr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},fe(t,Z,"".concat(S.cssPrefix,"-").concat(Z)),fe(t,ee,"".concat(S.cssPrefix,"-").concat(ee)),t),o=null,s=Z;(e.includes(i[Z])||e.some(function(c){return Ni[Z].includes(c)}))&&(s=Z),(e.includes(i[ee])||e.some(function(c){return Ni[ee].includes(c)}))&&(s=ee);var l=e.reduce(function(c,u){var d=Pu(S.cssPrefix,u);if(Et[u]?(u=Cu[s].includes(u)?tu[s][u]:u,o=u,c.prefix=u):Ou[s].indexOf(u)>-1?(o=u,c.prefix=dr(u,{family:s})):d?c.iconName=d:u!==S.replacementClass&&u!==i[Z]&&u!==i[ee]&&c.rest.push(u),!a&&c.prefix&&c.iconName){var p=o==="fa"?ds(c.iconName):{},x=bt(c.prefix,c.iconName);p.prefix&&(o=null),c.iconName=p.iconName||x||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!Et.far&&Et.fas&&!S.autoFetchSvg&&(c.prefix="fas")}return c},Ra());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ee&&(Et.fass||S.autoFetchSvg)&&(l.prefix="fass",l.iconName=bt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=at()||"fas"),l}var Su=function(){function e(){Uc(this,e),this.definitions={}}return Yc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),qr(s,o[s]);var l=pn[Z][s];l&&qr(l,o[s]),us()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(d){typeof d=="string"&&(n[s][d]=c)}),n[s][l]=c}),n}}]),e}(),Fi=[],Pt={},Nt={},Mu=Object.keys(Nt);function Nu(e,t){var n=t.mixoutsTo;return Fi=e,Pt={},Object.keys(Nt).forEach(function(r){Mu.indexOf(r)===-1&&delete Nt[r]}),Fi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Vn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Pt[o]||(Pt[o]=[]),Pt[o].push(i[o])})}r.provides&&r.provides(Nt)}),n}function Xr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Pt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function wt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Pt[e]||[];a.forEach(function(i){i.apply(null,n)})}function We(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Nt[e]?Nt[e].apply(null,t):void 0}function Gr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||at();if(t)return t=bt(n,t)||t,Si(ms.definitions,n,t)||Si(Ie.styles,n,t)}var ms=new Su,Fu=function(){S.autoReplaceSvg=!1,S.observeMutations=!1,wt("noAuto")},Ru={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return qe?(wt("beforeI2svg",t),We("pseudoElements2svg",t),We("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;S.autoReplaceSvg===!1&&(S.autoReplaceSvg=!0),S.observeMutations=!0,_u(function(){$u({autoReplaceSvgRoot:n}),wt("watch",t)})}},Lu={icon:function(t){if(t===null)return null;if(Vn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:bt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=dr(t[0]);return{prefix:r,iconName:bt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(S.cssPrefix,"-"))>-1||t.match(nu))){var a=mr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||at(),iconName:bt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=at();return{prefix:i,iconName:bt(i,t)||t}}}},ke={noAuto:Fu,config:S,dom:Ru,parse:Lu,library:ms,findIconDefinition:Gr,toHtml:_n},$u=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?J:n;(Object.keys(Ie.styles).length>0||S.autoFetchSvg)&&qe&&S.autoReplaceSvg&&ke.dom.i2svg({node:r})};function pr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return _n(r)})}}),Object.defineProperty(e,"node",{get:function(){if(qe){var r=J.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function ju(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Ma(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=ur(E(E({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Du(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(S.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function La(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,u=e.titleId,d=e.extra,p=e.watchable,x=p===void 0?!1:p,P=r.found?r:n,T=P.width,D=P.height,w=a==="fak",g=[S.replacementClass,i?"".concat(S.cssPrefix,"-").concat(i):""].filter(function(G){return d.classes.indexOf(G)===-1}).filter(function(G){return G!==""||!!G}).concat(d.classes).join(" "),y={children:[],attributes:E(E({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:g,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(T," ").concat(D)})},F=w&&!~d.classes.indexOf("fa-fw")?{width:"".concat(T/D*16*.0625,"em")}:{};x&&(y.attributes[xt]=""),l&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(u||gn())},children:[l]}),delete y.attributes.title);var R=E(E({},y),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:E(E({},F),d.styles)}),B=r.found&&n.found?We("generateAbstractMask",R)||{children:[],attributes:{}}:We("generateAbstractIcon",R)||{children:[],attributes:{}},H=B.children,W=B.attributes;return R.children=H,R.attributes=W,s?Du(R):ju(R)}function Ri(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[xt]="");var u=E({},o.styles);Ma(a)&&(u.transform=gu({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var d=ur(u);d.length>0&&(c.style=d);var p=[];return p.push({tag:"span",attributes:c,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Bu(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=ur(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Er=Ie.styles;function Vr(e){var t=e[0],n=e[1],r=e.slice(4),a=Oa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(S.cssPrefix,"-").concat(vt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(vt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(vt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var zu={found:!1,width:512,height:512};function Hu(e,t){!Qo&&!S.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Zr(e,t){var n=t;return t==="fa"&&S.styleDefault!==null&&(t=at()),new Promise(function(r,a){if(We("missingIconAbstract"),n==="fa"){var i=ds(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Er[t]&&Er[t][e]){var o=Er[t][e];return r(Vr(o))}Hu(e,t),r(E(E({},zu),{},{icon:S.showMissingIcons&&e?We("missingIconAbstract")||{}:{}}))})}var Li=function(){},Jr=S.measurePerformance&&In&&In.mark&&In.measure?In:{mark:Li,measure:Li},Kt='FA "6.2.1"',Uu=function(t){return Jr.mark("".concat(Kt," ").concat(t," begins")),function(){return ps(t)}},ps=function(t){Jr.mark("".concat(Kt," ").concat(t," ends")),Jr.measure("".concat(Kt," ").concat(t),"".concat(Kt," ").concat(t," begins"),"".concat(Kt," ").concat(t," ends"))},$a={begin:Uu,end:ps},Un=function(){};function $i(e){var t=e.getAttribute?e.getAttribute(xt):null;return typeof t=="string"}function Yu(e){var t=e.getAttribute?e.getAttribute(Pa):null,n=e.getAttribute?e.getAttribute(Ta):null;return t&&n}function Wu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(S.replacementClass)}function Ku(){if(S.autoReplaceSvg===!0)return Yn.replace;var e=Yn[S.autoReplaceSvg];return e||Yn.replace}function qu(e){return J.createElementNS("http://www.w3.org/2000/svg",e)}function Xu(e){return J.createElement(e)}function hs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?qu:Xu:n;if(typeof e=="string")return J.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(hs(o,{ceFn:r}))}),a}function Gu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Yn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(hs(a),n)}),n.getAttribute(xt)===null&&S.keepOriginalSource){var r=J.createComment(Gu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Sa(n).indexOf(S.replacementClass))return Yn.replace(t);var a=new RegExp("".concat(S.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===S.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return _n(s)}).join(`
`);n.setAttribute(xt,""),n.innerHTML=o}};function ji(e){e()}function gs(e,t){var n=typeof t=="function"?t:Un;if(e.length===0)n();else{var r=ji;S.mutateApproach===Qc&&(r=rt.requestAnimationFrame||ji),r(function(){var a=Ku(),i=$a.begin("mutate");e.map(a),i(),n()})}}var ja=!1;function vs(){ja=!0}function Qr(){ja=!1}var Jn=null;function Di(e){if(Pi&&S.observeMutations){var t=e.treeCallback,n=t===void 0?Un:t,r=e.nodeCallback,a=r===void 0?Un:r,i=e.pseudoElementsCallback,o=i===void 0?Un:i,s=e.observeMutationsRoot,l=s===void 0?J:s;Jn=new Pi(function(c){if(!ja){var u=at();Ut(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!$i(d.addedNodes[0])&&(S.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&S.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&$i(d.target)&&~ou.indexOf(d.attributeName))if(d.attributeName==="class"&&Yu(d.target)){var p=mr(Sa(d.target)),x=p.prefix,P=p.iconName;d.target.setAttribute(Pa,x||u),P&&d.target.setAttribute(Ta,P)}else Wu(d.target)&&a(d.target)})}}),qe&&Jn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Vu(){Jn&&Jn.disconnect()}function Zu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Ju(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=mr(Sa(e));return a.prefix||(a.prefix=at()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Tu(a.prefix,e.innerText)||Fa(a.prefix,Kr(e.innerText))),!a.iconName&&S.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Qu(e){var t=Ut(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return S.autoA11y&&(n?t["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(r||gn()):(t["aria-hidden"]="true",t.focusable="false")),t}function ed(){return{iconName:null,title:null,titleId:null,prefix:null,transform:je,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Bi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ju(e),r=n.iconName,a=n.prefix,i=n.rest,o=Qu(e),s=Xr("parseNodeAttributes",{},e),l=t.styleParser?Zu(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:je,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var td=Ie.styles;function bs(e){var t=S.autoReplaceSvg==="nest"?Bi(e,{styleParser:!1}):Bi(e);return~t.extra.classes.indexOf(es)?We("generateLayersText",e,t):We("generateSvgReplacementMutation",e,t)}var it=new Set;Ia.map(function(e){it.add("fa-".concat(e))});Object.keys(dn[Z]).map(it.add.bind(it));Object.keys(dn[ee]).map(it.add.bind(it));it=bn(it);function zi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!qe)return Promise.resolve();var n=J.documentElement.classList,r=function(d){return n.add("".concat(Ti,"-").concat(d))},a=function(d){return n.remove("".concat(Ti,"-").concat(d))},i=S.autoFetchSvg?it:Ia.map(function(u){return"fa-".concat(u)}).concat(Object.keys(td));i.includes("fa")||i.push("fa");var o=[".".concat(es,":not([").concat(xt,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(xt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ut(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=$a.begin("onTree"),c=s.reduce(function(u,d){try{var p=bs(d);p&&u.push(p)}catch(x){Qo||x.name==="MissingIcon"&&console.error(x)}return u},[]);return new Promise(function(u,d){Promise.all(c).then(function(p){gs(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(p){l(),d(p)})})}function nd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;bs(e).then(function(n){n&&gs([n],t)})}function rd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Gr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Gr(a||{})),e(r,E(E({},n),{},{mask:a}))}}var ad=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?je:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,u=c===void 0?null:c,d=n.title,p=d===void 0?null:d,x=n.titleId,P=x===void 0?null:x,T=n.classes,D=T===void 0?[]:T,w=n.attributes,g=w===void 0?{}:w,y=n.styles,F=y===void 0?{}:y;if(t){var R=t.prefix,B=t.iconName,H=t.icon;return pr(E({type:"icon"},t),function(){return wt("beforeDOMElementCreation",{iconDefinition:t,params:n}),S.autoA11y&&(p?g["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(P||gn()):(g["aria-hidden"]="true",g.focusable="false")),La({icons:{main:Vr(H),mask:l?Vr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:R,iconName:B,transform:E(E({},je),a),symbol:o,title:p,maskId:u,titleId:P,extra:{attributes:g,styles:F,classes:D}})})}},id={mixout:function(){return{icon:rd(ad)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=zi,n.nodeCallback=nd,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?J:r,i=n.callback,o=i===void 0?function(){}:i;return zi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,u=r.mask,d=r.maskId,p=r.extra;return new Promise(function(x,P){Promise.all([Zr(a,s),u.iconName?Zr(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(T){var D=Oa(T,2),w=D[0],g=D[1];x([n,La({icons:{main:w,mask:g},prefix:s,iconName:a,transform:l,symbol:c,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(P)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=ur(s);l.length>0&&(a.style=l);var c;return Ma(o)&&(c=We("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},od={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return pr({type:"layer"},function(){wt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(S.cssPrefix,"-layers")].concat(bn(i)).join(" ")},children:o}]})}}}},sd={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,d=u===void 0?{}:u;return pr({type:"counter",content:n},function(){return wt("beforeDOMElementCreation",{content:n,params:r}),Bu({content:n.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat(S.cssPrefix,"-layers-counter")].concat(bn(s))}})})}}}},ld={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?je:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,d=u===void 0?{}:u,p=r.styles,x=p===void 0?{}:p;return pr({type:"text",content:n},function(){return wt("beforeDOMElementCreation",{content:n,params:r}),Ri({content:n,transform:E(E({},je),i),title:s,extra:{attributes:d,styles:x,classes:["".concat(S.cssPrefix,"-layers-text")].concat(bn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Vo){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/c,l=u.height/c}return S.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ri({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},fd=new RegExp('"',"ug"),Hi=[1105920,1112319];function cd(e){var t=e.replace(fd,""),n=ku(t,0),r=n>=Hi[0]&&n<=Hi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Kr(a?t[0]:t),isSecondary:r||a}}function Ui(e,t){var n="".concat(Jc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ut(e.children),o=i.filter(function(H){return H.getAttribute(Wr)===t})[0],s=rt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(ru),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?ee:Z,x=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?mn[p][l[2].toLowerCase()]:au[p][c],P=cd(d),T=P.value,D=P.isSecondary,w=l[0].startsWith("FontAwesome"),g=Fa(x,T),y=g;if(w){var F=Iu(T);F.iconName&&F.prefix&&(g=F.iconName,x=F.prefix)}if(g&&!D&&(!o||o.getAttribute(Pa)!==x||o.getAttribute(Ta)!==y)){e.setAttribute(n,y),o&&e.removeChild(o);var R=ed(),B=R.extra;B.attributes[Wr]=t,Zr(g,x).then(function(H){var W=La(E(E({},R),{},{icons:{main:H,mask:Ra()},prefix:x,iconName:y,extra:B,watchable:!0})),G=J.createElement("svg");t==="::before"?e.insertBefore(G,e.firstChild):e.appendChild(G),G.outerHTML=W.map(function(ie){return _n(ie)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function ud(e){return Promise.all([Ui(e,"::before"),Ui(e,"::after")])}function dd(e){return e.parentNode!==document.head&&!~eu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Wr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Yi(e){if(qe)return new Promise(function(t,n){var r=Ut(e.querySelectorAll("*")).filter(dd).map(ud),a=$a.begin("searchPseudoElements");vs(),Promise.all(r).then(function(){a(),Qr(),t()}).catch(function(){a(),Qr(),n()})})}var md={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Yi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?J:r;S.searchPseudoElements&&Yi(a)}}},Wi=!1,pd={mixout:function(){return{dom:{unwatch:function(){vs(),Wi=!0}}}},hooks:function(){return{bootstrap:function(){Di(Xr("mutationObserverCallbacks",{}))},noAuto:function(){Vu()},watch:function(n){var r=n.observeMutationsRoot;Wi?Qr():Di(Xr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ki=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},hd={mixout:function(){return{parse:{transform:function(n){return Ki(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ki(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(u)},p={transform:"translate(".concat(o/2*-1," -256)")},x={outer:s,inner:d,path:p};return{tag:"g",attributes:E({},x.outer),children:[{tag:"g",attributes:E({},x.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),x.path)}]}]}}}},Pr={x:0,y:0,width:"100%",height:"100%"};function qi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function gd(e){return e.tag==="g"?e.children:[e]}var vd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?mr(a.split(" ").map(function(o){return o.trim()})):Ra();return i.prefix||(i.prefix=at()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,u=i.icon,d=o.width,p=o.icon,x=hu({transform:l,containerWidth:d,iconWidth:c}),P={tag:"rect",attributes:E(E({},Pr),{},{fill:"white"})},T=u.children?{children:u.children.map(qi)}:{},D={tag:"g",attributes:E({},x.inner),children:[qi(E({tag:u.tag,attributes:E(E({},u.attributes),x.path)},T))]},w={tag:"g",attributes:E({},x.outer),children:[D]},g="mask-".concat(s||gn()),y="clip-".concat(s||gn()),F={tag:"mask",attributes:E(E({},Pr),{},{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[P,w]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:gd(p)},F]};return r.push(R,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(g,")")},Pr)}),{children:r,attributes:a}}}},bd={provides:function(t){var n=!1;rt.matchMedia&&(n=rt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},yd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},_d=[bu,id,od,sd,ld,md,pd,hd,vd,bd,yd];Nu(_d,{mixoutsTo:ke});ke.noAuto;var ys=ke.config,_s=ke.library;ke.dom;var Qn=ke.parse;ke.findIconDefinition;ke.toHtml;var xd=ke.icon;ke.layer;var wd=ke.text;ke.counter;function Xi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Te(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xi(Object(n),!0).forEach(function(r){be(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function er(e){return er=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},er(e)}function be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function kd(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Ad(e,t){if(e==null)return{};var n=kd(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ea(e){return Cd(e)||Od(e)||Ed(e)||Pd()}function Cd(e){if(Array.isArray(e))return ta(e)}function Od(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ed(e,t){if(e){if(typeof e=="string")return ta(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ta(e,t)}}function ta(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Pd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Td=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},xs={exports:{}};(function(e){(function(t){var n=function(w,g,y){if(!c(g)||d(g)||p(g)||x(g)||l(g))return g;var F,R=0,B=0;if(u(g))for(F=[],B=g.length;R<B;R++)F.push(n(w,g[R],y));else{F={};for(var H in g)Object.prototype.hasOwnProperty.call(g,H)&&(F[w(H,y)]=n(w,g[H],y))}return F},r=function(w,g){g=g||{};var y=g.separator||"_",F=g.split||/(?=[A-Z])/;return w.split(F).join(y)},a=function(w){return P(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(g,y){return y?y.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},i=function(w){var g=a(w);return g.substr(0,1).toUpperCase()+g.substr(1)},o=function(w,g){return r(w,g).toLowerCase()},s=Object.prototype.toString,l=function(w){return typeof w=="function"},c=function(w){return w===Object(w)},u=function(w){return s.call(w)=="[object Array]"},d=function(w){return s.call(w)=="[object Date]"},p=function(w){return s.call(w)=="[object RegExp]"},x=function(w){return s.call(w)=="[object Boolean]"},P=function(w){return w=w-0,w===w},T=function(w,g){var y=g&&"process"in g?g.process:g;return typeof y!="function"?w:function(F,R){return y(F,w,R)}},D={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(w,g){return n(T(a,g),w)},decamelizeKeys:function(w,g){return n(T(o,g),w,g)},pascalizeKeys:function(w,g){return n(T(i,g),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=D:t.humps=D})(Td)})(xs);var Id=xs.exports,Sd=["class","style"];function Md(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Id.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Nd(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Da(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Da(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.class=Nd(u);break;case"style":l.style=Md(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Ad(n,Sd);return Wo(e.tag,Te(Te(Te({},t),{},{class:a.class,style:Te(Te({},a.style),o)},a.attrs),s),r)}var ws=!1;try{ws=!0}catch{}function Fd(){if(!ws&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function nn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?be({},e,t):{}}function Rd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},be(t,"fa-".concat(e.size),e.size!==null),be(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),be(t,"fa-pull-".concat(e.pull),e.pull!==null),be(t,"fa-swap-opacity",e.swapOpacity),be(t,"fa-bounce",e.bounce),be(t,"fa-shake",e.shake),be(t,"fa-beat",e.beat),be(t,"fa-fade",e.fade),be(t,"fa-beat-fade",e.beatFade),be(t,"fa-flash",e.flash),be(t,"fa-spin-pulse",e.spinPulse),be(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Gi(e){if(e&&er(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Qn.icon)return Qn.icon(e);if(e===null)return null;if(er(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Ld=xa({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=Ae(function(){return Gi(t.icon)}),i=Ae(function(){return nn("classes",Rd(t))}),o=Ae(function(){return nn("transform",typeof t.transform=="string"?Qn.transform(t.transform):t.transform)}),s=Ae(function(){return nn("mask",Gi(t.mask))}),l=Ae(function(){return xd(a.value,Te(Te(Te(Te({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Gt(l,function(u){if(!u)return Fd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=Ae(function(){return l.value?Da(l.value.abstract[0],{},r):null});return function(){return c.value}}});xa({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=ys.familyPrefix,i=Ae(function(){return["".concat(a,"-layers")].concat(ea(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Wo("div",{class:i.value},r.default?r.default():[])}}});xa({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=ys.familyPrefix,i=Ae(function(){return nn("classes",[].concat(ea(t.counter?["".concat(a,"-layers-counter")]:[]),ea(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=Ae(function(){return nn("transform",typeof t.transform=="string"?Qn.transform(t.transform):t.transform)}),s=Ae(function(){var c=wd(t.value.toString(),Te(Te({},o.value),i.value)),u=c.abstract;return t.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=Ae(function(){return Da(s.value,{},r)});return function(){return l.value}}});var $d={prefix:"fas",iconName:"square-up-right",icon:[448,512,[8599,"external-link-square-alt"],"f360","M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 160c-6.5 0-12.3 3.9-14.8 9.9s-1.1 12.9 3.5 17.4l40 40-71 71C114 302 112 306.9 112 312s2 10 5.7 13.7l36.7 36.7c3.6 3.6 8.5 5.7 13.7 5.7s10-2 13.7-5.7l71-71 40 40c4.6 4.6 11.5 5.9 17.4 3.5s9.9-8.3 9.9-14.8V176c0-8.8-7.2-16-16-16H160z"]},jd={prefix:"fas",iconName:"copy",icon:[512,512,[],"f0c5","M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z"]};_s.add(jd);_s.add($d);nc(Hc).component("font-awesome-icon",Ld).mount("#app");
