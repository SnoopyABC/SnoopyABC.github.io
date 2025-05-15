const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutView-j-xt6F1L.js","assets/AboutView-BUb6di8L.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Yl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ft={},lr=[],bn=()=>{},op=()=>!1,wo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),$l=n=>n.startsWith("onUpdate:"),It=Object.assign,jl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},ap=Object.prototype.hasOwnProperty,rt=(n,e)=>ap.call(n,e),Ve=Array.isArray,cr=n=>Ro(n)==="[object Map]",Zf=n=>Ro(n)==="[object Set]",Ge=n=>typeof n=="function",xt=n=>typeof n=="string",pi=n=>typeof n=="symbol",dt=n=>n!==null&&typeof n=="object",Jf=n=>(dt(n)||Ge(n))&&Ge(n.then)&&Ge(n.catch),Qf=Object.prototype.toString,Ro=n=>Qf.call(n),lp=n=>Ro(n).slice(8,-1),eh=n=>Ro(n)==="[object Object]",Kl=n=>xt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Gr=Yl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Co=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},cp=/-(\w)/g,fi=Co(n=>n.replace(cp,(e,t)=>t?t.toUpperCase():"")),up=/\B([A-Z])/g,zi=Co(n=>n.replace(up,"-$1").toLowerCase()),th=Co(n=>n.charAt(0).toUpperCase()+n.slice(1)),Yo=Co(n=>n?`on${th(n)}`:""),li=(n,e)=>!Object.is(n,e),$o=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},nh=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},fp=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let zc;const Po=()=>zc||(zc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zl(n){if(Ve(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=xt(i)?mp(i):Zl(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(xt(n)||dt(n))return n}const hp=/;(?![^(]*\))/g,dp=/:([^]+)/,pp=/\/\*[^]*?\*\//g;function mp(n){const e={};return n.replace(pp,"").split(hp).forEach(t=>{if(t){const i=t.split(dp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Jl(n){let e="";if(xt(n))e=n;else if(Ve(n))for(let t=0;t<n.length;t++){const i=Jl(n[t]);i&&(e+=i+" ")}else if(dt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const gp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_p=Yl(gp);function ih(n){return!!n||n===""}const rh=n=>!!(n&&n.__v_isRef===!0),sh=n=>xt(n)?n:n==null?"":Ve(n)||dt(n)&&(n.toString===Qf||!Ge(n.toString))?rh(n)?sh(n.value):JSON.stringify(n,oh,2):String(n),oh=(n,e)=>rh(e)?oh(n,e.value):cr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[jo(i,s)+" =>"]=r,t),{})}:Zf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>jo(t))}:pi(e)?jo(e):dt(e)&&!Ve(e)&&!eh(e)?String(e):e,jo=(n,e="")=>{var t;return pi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qt;class ah{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=qt,!e&&qt&&(this.index=(qt.scopes||(qt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=qt;try{return qt=this,e()}finally{qt=t}}}on(){qt=this}off(){qt=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function vp(n){return new ah(n)}function xp(){return qt}let ut;const Ko=new WeakSet;class lh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,qt&&qt.active&&qt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ko.has(this)&&(Ko.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||uh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Vc(this),fh(this);const e=ut,t=hn;ut=this,hn=!0;try{return this.fn()}finally{hh(this),ut=e,hn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)tc(e);this.deps=this.depsTail=void 0,Vc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ko.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ha(this)&&this.run()}get dirty(){return Ha(this)}}let ch=0,Wr,Xr;function uh(n,e=!1){if(n.flags|=8,e){n.next=Xr,Xr=n;return}n.next=Wr,Wr=n}function Ql(){ch++}function ec(){if(--ch>0)return;if(Xr){let e=Xr;for(Xr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Wr;){let e=Wr;for(Wr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function fh(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function hh(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),tc(i),Mp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Ha(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(dh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function dh(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===es))return;n.globalVersion=es;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Ha(n)){n.flags&=-3;return}const t=ut,i=hn;ut=n,hn=!0;try{fh(n);const r=n.fn(n._value);(e.version===0||li(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ut=t,hn=i,hh(n),n.flags&=-3}}function tc(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)tc(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Mp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let hn=!0;const ph=[];function mi(){ph.push(hn),hn=!1}function gi(){const n=ph.pop();hn=n===void 0?!0:n}function Vc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ut;ut=void 0;try{e()}finally{ut=t}}}let es=0;class Sp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class nc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ut||!hn||ut===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ut)t=this.activeLink=new Sp(ut,this),ut.deps?(t.prevDep=ut.depsTail,ut.depsTail.nextDep=t,ut.depsTail=t):ut.deps=ut.depsTail=t,mh(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ut.depsTail,t.nextDep=void 0,ut.depsTail.nextDep=t,ut.depsTail=t,ut.deps===t&&(ut.deps=i)}return t}trigger(e){this.version++,es++,this.notify(e)}notify(e){Ql();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ec()}}}function mh(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)mh(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ka=new WeakMap,Ni=Symbol(""),Ga=Symbol(""),ts=Symbol("");function Rt(n,e,t){if(hn&&ut){let i=ka.get(n);i||ka.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new nc),r.map=i,r.key=t),r.track()}}function zn(n,e,t,i,r,s){const o=ka.get(n);if(!o){es++;return}const a=l=>{l&&l.trigger()};if(Ql(),e==="clear")o.forEach(a);else{const l=Ve(n),c=l&&Kl(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===ts||!pi(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(ts)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ni)),cr(n)&&a(o.get(Ga)));break;case"delete":l||(a(o.get(Ni)),cr(n)&&a(o.get(Ga)));break;case"set":cr(n)&&a(o.get(Ni));break}}ec()}function Gi(n){const e=it(n);return e===n?e:(Rt(e,"iterate",ts),dn(n)?e:e.map(Ft))}function ic(n){return Rt(n=it(n),"iterate",ts),n}const yp={__proto__:null,[Symbol.iterator](){return Zo(this,Symbol.iterator,Ft)},concat(...n){return Gi(this).concat(...n.map(e=>Ve(e)?Gi(e):e))},entries(){return Zo(this,"entries",n=>(n[1]=Ft(n[1]),n))},every(n,e){return Cn(this,"every",n,e,void 0,arguments)},filter(n,e){return Cn(this,"filter",n,e,t=>t.map(Ft),arguments)},find(n,e){return Cn(this,"find",n,e,Ft,arguments)},findIndex(n,e){return Cn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Cn(this,"findLast",n,e,Ft,arguments)},findLastIndex(n,e){return Cn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Cn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Jo(this,"includes",n)},indexOf(...n){return Jo(this,"indexOf",n)},join(n){return Gi(this).join(n)},lastIndexOf(...n){return Jo(this,"lastIndexOf",n)},map(n,e){return Cn(this,"map",n,e,void 0,arguments)},pop(){return Pr(this,"pop")},push(...n){return Pr(this,"push",n)},reduce(n,...e){return Hc(this,"reduce",n,e)},reduceRight(n,...e){return Hc(this,"reduceRight",n,e)},shift(){return Pr(this,"shift")},some(n,e){return Cn(this,"some",n,e,void 0,arguments)},splice(...n){return Pr(this,"splice",n)},toReversed(){return Gi(this).toReversed()},toSorted(n){return Gi(this).toSorted(n)},toSpliced(...n){return Gi(this).toSpliced(...n)},unshift(...n){return Pr(this,"unshift",n)},values(){return Zo(this,"values",Ft)}};function Zo(n,e,t){const i=ic(n),r=i[e]();return i!==n&&!dn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const Ep=Array.prototype;function Cn(n,e,t,i,r,s){const o=ic(n),a=o!==n&&!dn(n),l=o[e];if(l!==Ep[e]){const f=l.apply(n,s);return a?Ft(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,Ft(f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Hc(n,e,t,i){const r=ic(n);let s=t;return r!==n&&(dn(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,Ft(a),l,n)}),r[e](s,...i)}function Jo(n,e,t){const i=it(n);Rt(i,"iterate",ts);const r=i[e](...t);return(r===-1||r===!1)&&oc(t[0])?(t[0]=it(t[0]),i[e](...t)):r}function Pr(n,e,t=[]){mi(),Ql();const i=it(n)[e].apply(n,t);return ec(),gi(),i}const bp=Yl("__proto__,__v_isRef,__isVue"),gh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(pi));function Tp(n){pi(n)||(n=String(n));const e=it(this);return Rt(e,"has",n),e.hasOwnProperty(n)}class _h{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Np:Sh:s?Mh:xh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ve(e);if(!r){let l;if(o&&(l=yp[t]))return l;if(t==="hasOwnProperty")return Tp}const a=Reflect.get(e,t,Ct(e)?e:i);return(pi(t)?gh.has(t):bp(t))||(r||Rt(e,"get",t),s)?a:Ct(a)?o&&Kl(t)?a:a.value:dt(a)?r?Eh(a):Io(a):a}}class vh extends _h{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=Fi(s);if(!dn(i)&&!Fi(i)&&(s=it(s),i=it(i)),!Ve(e)&&Ct(s)&&!Ct(i))return l?!1:(s.value=i,!0)}const o=Ve(e)&&Kl(t)?Number(t)<e.length:rt(e,t),a=Reflect.set(e,t,i,Ct(e)?e:r);return e===it(r)&&(o?li(i,s)&&zn(e,"set",t,i):zn(e,"add",t,i)),a}deleteProperty(e,t){const i=rt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&zn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!pi(t)||!gh.has(t))&&Rt(e,"has",t),i}ownKeys(e){return Rt(e,"iterate",Ve(e)?"length":Ni),Reflect.ownKeys(e)}}class Ap extends _h{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const wp=new vh,Rp=new Ap,Cp=new vh(!0);const Wa=n=>n,Es=n=>Reflect.getPrototypeOf(n);function Pp(n,e,t){return function(...i){const r=this.__v_raw,s=it(r),o=cr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Wa:e?Xa:Ft;return!e&&Rt(s,"iterate",l?Ga:Ni),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function bs(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Ip(n,e){const t={get(r){const s=this.__v_raw,o=it(s),a=it(r);n||(li(r,a)&&Rt(o,"get",r),Rt(o,"get",a));const{has:l}=Es(o),c=e?Wa:n?Xa:Ft;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Rt(it(r),"iterate",Ni),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=it(s),a=it(r);return n||(li(r,a)&&Rt(o,"has",r),Rt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=it(a),c=e?Wa:n?Xa:Ft;return!n&&Rt(l,"iterate",Ni),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return It(t,n?{add:bs("add"),set:bs("set"),delete:bs("delete"),clear:bs("clear")}:{add(r){!e&&!dn(r)&&!Fi(r)&&(r=it(r));const s=it(this);return Es(s).has.call(s,r)||(s.add(r),zn(s,"add",r,r)),this},set(r,s){!e&&!dn(s)&&!Fi(s)&&(s=it(s));const o=it(this),{has:a,get:l}=Es(o);let c=a.call(o,r);c||(r=it(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?li(s,u)&&zn(o,"set",r,s):zn(o,"add",r,s),this},delete(r){const s=it(this),{has:o,get:a}=Es(s);let l=o.call(s,r);l||(r=it(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&zn(s,"delete",r,void 0),c},clear(){const r=it(this),s=r.size!==0,o=r.clear();return s&&zn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Pp(r,n,e)}),t}function rc(n,e){const t=Ip(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(rt(t,r)&&r in i?t:i,r,s)}const Dp={get:rc(!1,!1)},Lp={get:rc(!1,!0)},Up={get:rc(!0,!1)};const xh=new WeakMap,Mh=new WeakMap,Sh=new WeakMap,Np=new WeakMap;function Fp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Op(n){return n.__v_skip||!Object.isExtensible(n)?0:Fp(lp(n))}function Io(n){return Fi(n)?n:sc(n,!1,wp,Dp,xh)}function yh(n){return sc(n,!1,Cp,Lp,Mh)}function Eh(n){return sc(n,!0,Rp,Up,Sh)}function sc(n,e,t,i,r){if(!dt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=Op(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function qr(n){return Fi(n)?qr(n.__v_raw):!!(n&&n.__v_isReactive)}function Fi(n){return!!(n&&n.__v_isReadonly)}function dn(n){return!!(n&&n.__v_isShallow)}function oc(n){return n?!!n.__v_raw:!1}function it(n){const e=n&&n.__v_raw;return e?it(e):n}function bh(n){return!rt(n,"__v_skip")&&Object.isExtensible(n)&&nh(n,"__v_skip",!0),n}const Ft=n=>dt(n)?Io(n):n,Xa=n=>dt(n)?Eh(n):n;function Ct(n){return n?n.__v_isRef===!0:!1}function ds(n){return Th(n,!1)}function Bp(n){return Th(n,!0)}function Th(n,e){return Ct(n)?n:new zp(n,e)}class zp{constructor(e,t){this.dep=new nc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:it(e),this._value=t?e:Ft(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||dn(e)||Fi(e);e=i?e:it(e),li(e,t)&&(this._rawValue=e,this._value=i?e:Ft(e),this.dep.trigger())}}function kn(n){return Ct(n)?n.value:n}const Vp={get:(n,e,t)=>e==="__v_raw"?n:kn(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ct(r)&&!Ct(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Ah(n){return qr(n)?n:new Proxy(n,Vp)}class Hp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new nc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=es-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ut!==this)return uh(this,!0),!0}get value(){const e=this.dep.track();return dh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function kp(n,e,t=!1){let i,r;return Ge(n)?i=n:(i=n.get,r=n.set),new Hp(i,r,t)}const Ts={},ho=new WeakMap;let Ri;function Gp(n,e=!1,t=Ri){if(t){let i=ho.get(t);i||ho.set(t,i=[]),i.push(n)}}function Wp(n,e,t=ft){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=y=>r?y:dn(y)||r===!1||r===0?si(y,1):si(y);let u,f,h,d,g=!1,v=!1;if(Ct(n)?(f=()=>n.value,g=dn(n)):qr(n)?(f=()=>c(n),g=!0):Ve(n)?(v=!0,g=n.some(y=>qr(y)||dn(y)),f=()=>n.map(y=>{if(Ct(y))return y.value;if(qr(y))return c(y);if(Ge(y))return l?l(y,2):y()})):Ge(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){mi();try{h()}finally{gi()}}const y=Ri;Ri=u;try{return l?l(n,3,[d]):n(d)}finally{Ri=y}}:f=bn,e&&r){const y=f,D=r===!0?1/0:r;f=()=>si(y(),D)}const m=xp(),p=()=>{u.stop(),m&&m.active&&jl(m.effects,u)};if(s&&e){const y=e;e=(...D)=>{y(...D),p()}}let A=v?new Array(n.length).fill(Ts):Ts;const b=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const D=u.run();if(r||g||(v?D.some((I,P)=>li(I,A[P])):li(D,A))){h&&h();const I=Ri;Ri=u;try{const P=[D,A===Ts?void 0:v&&A[0]===Ts?[]:A,d];l?l(e,3,P):e(...P),A=D}finally{Ri=I}}}else u.run()};return a&&a(b),u=new lh(f),u.scheduler=o?()=>o(b,!1):b,d=y=>Gp(y,!1,u),h=u.onStop=()=>{const y=ho.get(u);if(y){if(l)l(y,4);else for(const D of y)D();ho.delete(u)}},e?i?b(!0):A=u.run():o?o(b.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function si(n,e=1/0,t){if(e<=0||!dt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Ct(n))si(n.value,e,t);else if(Ve(n))for(let i=0;i<n.length;i++)si(n[i],e,t);else if(Zf(n)||cr(n))n.forEach(i=>{si(i,e,t)});else if(eh(n)){for(const i in n)si(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&si(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ps(n,e,t,i){try{return i?n(...i):n()}catch(r){Do(r,e,t)}}function Tn(n,e,t,i){if(Ge(n)){const r=ps(n,e,t,i);return r&&Jf(r)&&r.catch(s=>{Do(s,e,t)}),r}if(Ve(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Tn(n[s],e,t,i));return r}}function Do(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ft;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){mi(),ps(s,null,10,[n,l,c]),gi();return}}Xp(n,t,r,i,o)}function Xp(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Ot=[];let vn=-1;const ur=[];let ni=null,sr=0;const wh=Promise.resolve();let po=null;function Rh(n){const e=po||wh;return n?e.then(this?n.bind(this):n):e}function qp(n){let e=vn+1,t=Ot.length;for(;e<t;){const i=e+t>>>1,r=Ot[i],s=ns(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function ac(n){if(!(n.flags&1)){const e=ns(n),t=Ot[Ot.length-1];!t||!(n.flags&2)&&e>=ns(t)?Ot.push(n):Ot.splice(qp(e),0,n),n.flags|=1,Ch()}}function Ch(){po||(po=wh.then(Ih))}function Yp(n){Ve(n)?ur.push(...n):ni&&n.id===-1?ni.splice(sr+1,0,n):n.flags&1||(ur.push(n),n.flags|=1),Ch()}function kc(n,e,t=vn+1){for(;t<Ot.length;t++){const i=Ot[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ot.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Ph(n){if(ur.length){const e=[...new Set(ur)].sort((t,i)=>ns(t)-ns(i));if(ur.length=0,ni){ni.push(...e);return}for(ni=e,sr=0;sr<ni.length;sr++){const t=ni[sr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ni=null,sr=0}}const ns=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Ih(n){try{for(vn=0;vn<Ot.length;vn++){const e=Ot[vn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ps(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;vn<Ot.length;vn++){const e=Ot[vn];e&&(e.flags&=-2)}vn=-1,Ot.length=0,Ph(),po=null,(Ot.length||ur.length)&&Ih()}}let yn=null,Dh=null;function mo(n){const e=yn;return yn=n,Dh=n&&n.type.__scopeId||null,e}function qa(n,e=yn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Zc(-1);const s=mo(e);let o;try{o=n(...r)}finally{mo(s),i._d&&Zc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Mi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(mi(),Tn(l,t,8,[n.el,a,n,e]),gi())}}const $p=Symbol("_vte"),jp=n=>n.__isTeleport;function lc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,lc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Vi(n,e){return Ge(n)?It({name:n.name},e,{setup:n}):n}function Lh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function go(n,e,t,i,r=!1){if(Ve(n)){n.forEach((g,v)=>go(g,e&&(Ve(e)?e[v]:e),t,i,r));return}if(Yr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&go(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?hc(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ft?a.refs={}:a.refs,f=a.setupState,h=it(f),d=f===ft?()=>!1:g=>rt(h,g);if(c!=null&&c!==l&&(xt(c)?(u[c]=null,d(c)&&(f[c]=null)):Ct(c)&&(c.value=null)),Ge(l))ps(l,a,12,[o,u]);else{const g=xt(l),v=Ct(l);if(g||v){const m=()=>{if(n.f){const p=g?d(l)?f[l]:u[l]:l.value;r?Ve(p)&&jl(p,s):Ve(p)?p.includes(s)||p.push(s):g?(u[l]=[s],d(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else g?(u[l]=o,d(l)&&(f[l]=o)):v&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,Xt(m,t)):m()}}}Po().requestIdleCallback;Po().cancelIdleCallback;const Yr=n=>!!n.type.__asyncLoader,Uh=n=>n.type.__isKeepAlive;function Kp(n,e){Nh(n,"a",e)}function Zp(n,e){Nh(n,"da",e)}function Nh(n,e,t=Bt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Lo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Uh(r.parent.vnode)&&Jp(i,e,t,r),r=r.parent}}function Jp(n,e,t,i){const r=Lo(e,n,i,!0);cc(()=>{jl(i[e],r)},t)}function Lo(n,e,t=Bt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{mi();const a=_s(t),l=Tn(e,t,n,o);return a(),gi(),l});return i?r.unshift(s):r.push(s),s}}const qn=n=>(e,t=Bt)=>{(!ss||n==="sp")&&Lo(n,(...i)=>e(...i),t)},Qp=qn("bm"),Fh=qn("m"),em=qn("bu"),tm=qn("u"),nm=qn("bum"),cc=qn("um"),im=qn("sp"),rm=qn("rtg"),sm=qn("rtc");function om(n,e=Bt){Lo("ec",n,e)}const am=Symbol.for("v-ndc"),Ya=n=>n?nd(n)?hc(n):Ya(n.parent):null,$r=It(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ya(n.parent),$root:n=>Ya(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Bh(n),$forceUpdate:n=>n.f||(n.f=()=>{ac(n.update)}),$nextTick:n=>n.n||(n.n=Rh.bind(n.proxy)),$watch:n=>Rm.bind(n)}),Qo=(n,e)=>n!==ft&&!n.__isScriptSetup&&rt(n,e),lm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Qo(i,e))return o[e]=1,i[e];if(r!==ft&&rt(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&rt(c,e))return o[e]=3,s[e];if(t!==ft&&rt(t,e))return o[e]=4,t[e];$a&&(o[e]=0)}}const u=$r[e];let f,h;if(u)return e==="$attrs"&&Rt(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==ft&&rt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,rt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Qo(r,e)?(r[e]=t,!0):i!==ft&&rt(i,e)?(i[e]=t,!0):rt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==ft&&rt(n,o)||Qo(e,o)||(a=s[0])&&rt(a,o)||rt(i,o)||rt($r,o)||rt(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:rt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Gc(n){return Ve(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let $a=!0;function cm(n){const e=Bh(n),t=n.proxy,i=n.ctx;$a=!1,e.beforeCreate&&Wc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:A,destroyed:b,unmounted:y,render:D,renderTracked:I,renderTriggered:P,errorCaptured:B,serverPrefetch:T,expose:E,inheritAttrs:L,components:ee,directives:q,filters:ne}=e;if(c&&um(c,i,null),o)for(const re in o){const H=o[re];Ge(H)&&(i[re]=H.bind(t))}if(r){const re=r.call(t,t);dt(re)&&(n.data=Io(re))}if($a=!0,s)for(const re in s){const H=s[re],me=Ge(H)?H.bind(t,t):Ge(H.get)?H.get.bind(t,t):bn,xe=!Ge(H)&&Ge(H.set)?H.set.bind(t):bn,Ae=ln({get:me,set:xe});Object.defineProperty(i,re,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:Ie=>Ae.value=Ie})}if(a)for(const re in a)Oh(a[re],i,t,re);if(l){const re=Ge(l)?l.call(t):l;Reflect.ownKeys(re).forEach(H=>{to(H,re[H])})}u&&Wc(u,n,"c");function K(re,H){Ve(H)?H.forEach(me=>re(me.bind(t))):H&&re(H.bind(t))}if(K(Qp,f),K(Fh,h),K(em,d),K(tm,g),K(Kp,v),K(Zp,m),K(om,B),K(sm,I),K(rm,P),K(nm,A),K(cc,y),K(im,T),Ve(E))if(E.length){const re=n.exposed||(n.exposed={});E.forEach(H=>{Object.defineProperty(re,H,{get:()=>t[H],set:me=>t[H]=me})})}else n.exposed||(n.exposed={});D&&n.render===bn&&(n.render=D),L!=null&&(n.inheritAttrs=L),ee&&(n.components=ee),q&&(n.directives=q),T&&Lh(n)}function um(n,e,t=bn){Ve(n)&&(n=ja(n));for(const i in n){const r=n[i];let s;dt(r)?"default"in r?s=Gn(r.from||i,r.default,!0):s=Gn(r.from||i):s=Gn(r),Ct(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Wc(n,e,t){Tn(Ve(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Oh(n,e,t,i){let r=i.includes(".")?Jh(t,i):()=>t[i];if(xt(n)){const s=e[n];Ge(s)&&no(r,s)}else if(Ge(n))no(r,n.bind(t));else if(dt(n))if(Ve(n))n.forEach(s=>Oh(s,e,t,i));else{const s=Ge(n.handler)?n.handler.bind(t):e[n.handler];Ge(s)&&no(r,s,n)}}function Bh(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>_o(l,c,o,!0)),_o(l,e,o)),dt(e)&&s.set(e,l),l}function _o(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&_o(n,s,t,!0),r&&r.forEach(o=>_o(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=fm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const fm={data:Xc,props:qc,emits:qc,methods:Hr,computed:Hr,beforeCreate:Ut,created:Ut,beforeMount:Ut,mounted:Ut,beforeUpdate:Ut,updated:Ut,beforeDestroy:Ut,beforeUnmount:Ut,destroyed:Ut,unmounted:Ut,activated:Ut,deactivated:Ut,errorCaptured:Ut,serverPrefetch:Ut,components:Hr,directives:Hr,watch:dm,provide:Xc,inject:hm};function Xc(n,e){return e?n?function(){return It(Ge(n)?n.call(this,this):n,Ge(e)?e.call(this,this):e)}:e:n}function hm(n,e){return Hr(ja(n),ja(e))}function ja(n){if(Ve(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ut(n,e){return n?[...new Set([].concat(n,e))]:e}function Hr(n,e){return n?It(Object.create(null),n,e):e}function qc(n,e){return n?Ve(n)&&Ve(e)?[...new Set([...n,...e])]:It(Object.create(null),Gc(n),Gc(e??{})):e}function dm(n,e){if(!n)return e;if(!e)return n;const t=It(Object.create(null),n);for(const i in e)t[i]=Ut(n[i],e[i]);return t}function zh(){return{app:null,config:{isNativeTag:op,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pm=0;function mm(n,e){return function(i,r=null){Ge(i)||(i=It({},i)),r!=null&&!dt(r)&&(r=null);const s=zh(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:pm++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:jm,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Ge(u.install)?(o.add(u),u.install(c,...f)):Ge(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||bt(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,hc(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Tn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=fr;fr=c;try{return u()}finally{fr=f}}};return c}}let fr=null;function to(n,e){if(Bt){let t=Bt.provides;const i=Bt.parent&&Bt.parent.provides;i===t&&(t=Bt.provides=Object.create(i)),t[n]=e}}function Gn(n,e,t=!1){const i=Bt||yn;if(i||fr){const r=fr?fr._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ge(e)?e.call(i&&i.proxy):e}}const Vh={},Hh=()=>Object.create(Vh),kh=n=>Object.getPrototypeOf(n)===Vh;function gm(n,e,t,i=!1){const r={},s=Hh();n.propsDefaults=Object.create(null),Gh(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:yh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function _m(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=it(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Uo(n.emitsOptions,h))continue;const d=e[h];if(l)if(rt(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=fi(h);r[g]=Ka(l,a,g,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{Gh(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!rt(e,f)&&((u=zi(f))===f||!rt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Ka(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!rt(e,f))&&(delete s[f],c=!0)}c&&zn(n.attrs,"set","")}function Gh(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Gr(l))continue;const c=e[l];let u;r&&rt(r,u=fi(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Uo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=it(t),c=a||ft;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Ka(r,l,f,c[f],n,!rt(c,f))}}return o}function Ka(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=rt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ge(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=_s(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===zi(t))&&(i=!0))}return i}const vm=new WeakMap;function Wh(n,e,t=!1){const i=t?vm:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ge(n)){const u=f=>{l=!0;const[h,d]=Wh(f,e,!0);It(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return dt(n)&&i.set(n,lr),lr;if(Ve(s))for(let u=0;u<s.length;u++){const f=fi(s[u]);Yc(f)&&(o[f]=ft)}else if(s)for(const u in s){const f=fi(u);if(Yc(f)){const h=s[u],d=o[f]=Ve(h)||Ge(h)?{type:h}:It({},h),g=d.type;let v=!1,m=!0;if(Ve(g))for(let p=0;p<g.length;++p){const A=g[p],b=Ge(A)&&A.name;if(b==="Boolean"){v=!0;break}else b==="String"&&(m=!1)}else v=Ge(g)&&g.name==="Boolean";d[0]=v,d[1]=m,(v||rt(d,"default"))&&a.push(f)}}const c=[o,a];return dt(n)&&i.set(n,c),c}function Yc(n){return n[0]!=="$"&&!Gr(n)}const Xh=n=>n[0]==="_"||n==="$stable",uc=n=>Ve(n)?n.map(Mn):[Mn(n)],xm=(n,e,t)=>{if(e._n)return e;const i=qa((...r)=>uc(e(...r)),t);return i._c=!1,i},qh=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Xh(r))continue;const s=n[r];if(Ge(s))e[r]=xm(r,s,i);else if(s!=null){const o=uc(s);e[r]=()=>o}}},Yh=(n,e)=>{const t=uc(e);n.slots.default=()=>t},$h=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},Mm=(n,e,t)=>{const i=n.slots=Hh();if(n.vnode.shapeFlag&32){const r=e._;r?($h(i,e,t),t&&nh(i,"_",r,!0)):qh(e,i)}else e&&Yh(n,e)},Sm=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=ft;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:$h(r,e,t):(s=!e.$stable,qh(e,r)),o=e}else e&&(Yh(n,e),o={default:1});if(s)for(const a in r)!Xh(a)&&o[a]==null&&delete r[a]},Xt=Nm;function ym(n){return Em(n)}function Em(n,e){const t=Po();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=bn,insertStaticContent:g}=n,v=(w,R,x,Q=null,$=null,G=null,Z=void 0,le=null,j=!!R.dynamicChildren)=>{if(w===R)return;w&&!Ir(w,R)&&(Q=U(w),Ie(w,$,G,!0),w=null),R.patchFlag===-2&&(j=!1,R.dynamicChildren=null);const{type:M,ref:_,shapeFlag:C}=R;switch(M){case No:m(w,R,x,Q);break;case is:p(w,R,x,Q);break;case ta:w==null&&A(R,x,Q,Z);break;case xn:ee(w,R,x,Q,$,G,Z,le,j);break;default:C&1?D(w,R,x,Q,$,G,Z,le,j):C&6?q(w,R,x,Q,$,G,Z,le,j):(C&64||C&128)&&M.process(w,R,x,Q,$,G,Z,le,j,ae)}_!=null&&$&&go(_,w&&w.ref,G,R||w,!R)},m=(w,R,x,Q)=>{if(w==null)i(R.el=a(R.children),x,Q);else{const $=R.el=w.el;R.children!==w.children&&c($,R.children)}},p=(w,R,x,Q)=>{w==null?i(R.el=l(R.children||""),x,Q):R.el=w.el},A=(w,R,x,Q)=>{[w.el,w.anchor]=g(w.children,R,x,Q,w.el,w.anchor)},b=({el:w,anchor:R},x,Q)=>{let $;for(;w&&w!==R;)$=h(w),i(w,x,Q),w=$;i(R,x,Q)},y=({el:w,anchor:R})=>{let x;for(;w&&w!==R;)x=h(w),r(w),w=x;r(R)},D=(w,R,x,Q,$,G,Z,le,j)=>{R.type==="svg"?Z="svg":R.type==="math"&&(Z="mathml"),w==null?I(R,x,Q,$,G,Z,le,j):T(w,R,$,G,Z,le,j)},I=(w,R,x,Q,$,G,Z,le)=>{let j,M;const{props:_,shapeFlag:C,transition:V,dirs:W}=w;if(j=w.el=o(w.type,G,_&&_.is,_),C&8?u(j,w.children):C&16&&B(w.children,j,null,Q,$,ea(w,G),Z,le),W&&Mi(w,null,Q,"created"),P(j,w,w.scopeId,Z,Q),_){for(const pe in _)pe!=="value"&&!Gr(pe)&&s(j,pe,null,_[pe],G,Q);"value"in _&&s(j,"value",null,_.value,G),(M=_.onVnodeBeforeMount)&&_n(M,Q,w)}W&&Mi(w,null,Q,"beforeMount");const k=bm($,V);k&&V.beforeEnter(j),i(j,R,x),((M=_&&_.onVnodeMounted)||k||W)&&Xt(()=>{M&&_n(M,Q,w),k&&V.enter(j),W&&Mi(w,null,Q,"mounted")},$)},P=(w,R,x,Q,$)=>{if(x&&d(w,x),Q)for(let G=0;G<Q.length;G++)d(w,Q[G]);if($){let G=$.subTree;if(R===G||ed(G.type)&&(G.ssContent===R||G.ssFallback===R)){const Z=$.vnode;P(w,Z,Z.scopeId,Z.slotScopeIds,$.parent)}}},B=(w,R,x,Q,$,G,Z,le,j=0)=>{for(let M=j;M<w.length;M++){const _=w[M]=le?ii(w[M]):Mn(w[M]);v(null,_,R,x,Q,$,G,Z,le)}},T=(w,R,x,Q,$,G,Z)=>{const le=R.el=w.el;let{patchFlag:j,dynamicChildren:M,dirs:_}=R;j|=w.patchFlag&16;const C=w.props||ft,V=R.props||ft;let W;if(x&&Si(x,!1),(W=V.onVnodeBeforeUpdate)&&_n(W,x,R,w),_&&Mi(R,w,x,"beforeUpdate"),x&&Si(x,!0),(C.innerHTML&&V.innerHTML==null||C.textContent&&V.textContent==null)&&u(le,""),M?E(w.dynamicChildren,M,le,x,Q,ea(R,$),G):Z||H(w,R,le,null,x,Q,ea(R,$),G,!1),j>0){if(j&16)L(le,C,V,x,$);else if(j&2&&C.class!==V.class&&s(le,"class",null,V.class,$),j&4&&s(le,"style",C.style,V.style,$),j&8){const k=R.dynamicProps;for(let pe=0;pe<k.length;pe++){const ce=k[pe],we=C[ce],Ce=V[ce];(Ce!==we||ce==="value")&&s(le,ce,we,Ce,$,x)}}j&1&&w.children!==R.children&&u(le,R.children)}else!Z&&M==null&&L(le,C,V,x,$);((W=V.onVnodeUpdated)||_)&&Xt(()=>{W&&_n(W,x,R,w),_&&Mi(R,w,x,"updated")},Q)},E=(w,R,x,Q,$,G,Z)=>{for(let le=0;le<R.length;le++){const j=w[le],M=R[le],_=j.el&&(j.type===xn||!Ir(j,M)||j.shapeFlag&70)?f(j.el):x;v(j,M,_,null,Q,$,G,Z,!0)}},L=(w,R,x,Q,$)=>{if(R!==x){if(R!==ft)for(const G in R)!Gr(G)&&!(G in x)&&s(w,G,R[G],null,$,Q);for(const G in x){if(Gr(G))continue;const Z=x[G],le=R[G];Z!==le&&G!=="value"&&s(w,G,le,Z,$,Q)}"value"in x&&s(w,"value",R.value,x.value,$)}},ee=(w,R,x,Q,$,G,Z,le,j)=>{const M=R.el=w?w.el:a(""),_=R.anchor=w?w.anchor:a("");let{patchFlag:C,dynamicChildren:V,slotScopeIds:W}=R;W&&(le=le?le.concat(W):W),w==null?(i(M,x,Q),i(_,x,Q),B(R.children||[],x,_,$,G,Z,le,j)):C>0&&C&64&&V&&w.dynamicChildren?(E(w.dynamicChildren,V,x,$,G,Z,le),(R.key!=null||$&&R===$.subTree)&&jh(w,R,!0)):H(w,R,x,_,$,G,Z,le,j)},q=(w,R,x,Q,$,G,Z,le,j)=>{R.slotScopeIds=le,w==null?R.shapeFlag&512?$.ctx.activate(R,x,Q,Z,j):ne(R,x,Q,$,G,Z,j):fe(w,R,j)},ne=(w,R,x,Q,$,G,Z)=>{const le=w.component=Gm(w,Q,$);if(Uh(w)&&(le.ctx.renderer=ae),Wm(le,!1,Z),le.asyncDep){if($&&$.registerDep(le,K,Z),!w.el){const j=le.subTree=bt(is);p(null,j,R,x)}}else K(le,w,R,x,$,G,Z)},fe=(w,R,x)=>{const Q=R.component=w.component;if(Lm(w,R,x))if(Q.asyncDep&&!Q.asyncResolved){re(Q,R,x);return}else Q.next=R,Q.update();else R.el=w.el,Q.vnode=R},K=(w,R,x,Q,$,G,Z)=>{const le=()=>{if(w.isMounted){let{next:C,bu:V,u:W,parent:k,vnode:pe}=w;{const ve=Kh(w);if(ve){C&&(C.el=pe.el,re(w,C,Z)),ve.asyncDep.then(()=>{w.isUnmounted||le()});return}}let ce=C,we;Si(w,!1),C?(C.el=pe.el,re(w,C,Z)):C=pe,V&&$o(V),(we=C.props&&C.props.onVnodeBeforeUpdate)&&_n(we,k,C,pe),Si(w,!0);const Ce=jc(w),ue=w.subTree;w.subTree=Ce,v(ue,Ce,f(ue.el),U(ue),w,$,G),C.el=Ce.el,ce===null&&Um(w,Ce.el),W&&Xt(W,$),(we=C.props&&C.props.onVnodeUpdated)&&Xt(()=>_n(we,k,C,pe),$)}else{let C;const{el:V,props:W}=R,{bm:k,m:pe,parent:ce,root:we,type:Ce}=w,ue=Yr(R);Si(w,!1),k&&$o(k),!ue&&(C=W&&W.onVnodeBeforeMount)&&_n(C,ce,R),Si(w,!0);{we.ce&&we.ce._injectChildStyle(Ce);const ve=w.subTree=jc(w);v(null,ve,x,Q,w,$,G),R.el=ve.el}if(pe&&Xt(pe,$),!ue&&(C=W&&W.onVnodeMounted)){const ve=R;Xt(()=>_n(C,ce,ve),$)}(R.shapeFlag&256||ce&&Yr(ce.vnode)&&ce.vnode.shapeFlag&256)&&w.a&&Xt(w.a,$),w.isMounted=!0,R=x=Q=null}};w.scope.on();const j=w.effect=new lh(le);w.scope.off();const M=w.update=j.run.bind(j),_=w.job=j.runIfDirty.bind(j);_.i=w,_.id=w.uid,j.scheduler=()=>ac(_),Si(w,!0),M()},re=(w,R,x)=>{R.component=w;const Q=w.vnode.props;w.vnode=R,w.next=null,_m(w,R.props,Q,x),Sm(w,R.children,x),mi(),kc(w),gi()},H=(w,R,x,Q,$,G,Z,le,j=!1)=>{const M=w&&w.children,_=w?w.shapeFlag:0,C=R.children,{patchFlag:V,shapeFlag:W}=R;if(V>0){if(V&128){xe(M,C,x,Q,$,G,Z,le,j);return}else if(V&256){me(M,C,x,Q,$,G,Z,le,j);return}}W&8?(_&16&&Me(M,$,G),C!==M&&u(x,C)):_&16?W&16?xe(M,C,x,Q,$,G,Z,le,j):Me(M,$,G,!0):(_&8&&u(x,""),W&16&&B(C,x,Q,$,G,Z,le,j))},me=(w,R,x,Q,$,G,Z,le,j)=>{w=w||lr,R=R||lr;const M=w.length,_=R.length,C=Math.min(M,_);let V;for(V=0;V<C;V++){const W=R[V]=j?ii(R[V]):Mn(R[V]);v(w[V],W,x,null,$,G,Z,le,j)}M>_?Me(w,$,G,!0,!1,C):B(R,x,Q,$,G,Z,le,j,C)},xe=(w,R,x,Q,$,G,Z,le,j)=>{let M=0;const _=R.length;let C=w.length-1,V=_-1;for(;M<=C&&M<=V;){const W=w[M],k=R[M]=j?ii(R[M]):Mn(R[M]);if(Ir(W,k))v(W,k,x,null,$,G,Z,le,j);else break;M++}for(;M<=C&&M<=V;){const W=w[C],k=R[V]=j?ii(R[V]):Mn(R[V]);if(Ir(W,k))v(W,k,x,null,$,G,Z,le,j);else break;C--,V--}if(M>C){if(M<=V){const W=V+1,k=W<_?R[W].el:Q;for(;M<=V;)v(null,R[M]=j?ii(R[M]):Mn(R[M]),x,k,$,G,Z,le,j),M++}}else if(M>V)for(;M<=C;)Ie(w[M],$,G,!0),M++;else{const W=M,k=M,pe=new Map;for(M=k;M<=V;M++){const ge=R[M]=j?ii(R[M]):Mn(R[M]);ge.key!=null&&pe.set(ge.key,M)}let ce,we=0;const Ce=V-k+1;let ue=!1,ve=0;const Pe=new Array(Ce);for(M=0;M<Ce;M++)Pe[M]=0;for(M=W;M<=C;M++){const ge=w[M];if(we>=Ce){Ie(ge,$,G,!0);continue}let Oe;if(ge.key!=null)Oe=pe.get(ge.key);else for(ce=k;ce<=V;ce++)if(Pe[ce-k]===0&&Ir(ge,R[ce])){Oe=ce;break}Oe===void 0?Ie(ge,$,G,!0):(Pe[Oe-k]=M+1,Oe>=ve?ve=Oe:ue=!0,v(ge,R[Oe],x,null,$,G,Z,le,j),we++)}const Ne=ue?Tm(Pe):lr;for(ce=Ne.length-1,M=Ce-1;M>=0;M--){const ge=k+M,Oe=R[ge],ze=ge+1<_?R[ge+1].el:Q;Pe[M]===0?v(null,Oe,x,ze,$,G,Z,le,j):ue&&(ce<0||M!==Ne[ce]?Ae(Oe,x,ze,2):ce--)}}},Ae=(w,R,x,Q,$=null)=>{const{el:G,type:Z,transition:le,children:j,shapeFlag:M}=w;if(M&6){Ae(w.component.subTree,R,x,Q);return}if(M&128){w.suspense.move(R,x,Q);return}if(M&64){Z.move(w,R,x,ae);return}if(Z===xn){i(G,R,x);for(let C=0;C<j.length;C++)Ae(j[C],R,x,Q);i(w.anchor,R,x);return}if(Z===ta){b(w,R,x);return}if(Q!==2&&M&1&&le)if(Q===0)le.beforeEnter(G),i(G,R,x),Xt(()=>le.enter(G),$);else{const{leave:C,delayLeave:V,afterLeave:W}=le,k=()=>i(G,R,x),pe=()=>{C(G,()=>{k(),W&&W()})};V?V(G,k,pe):pe()}else i(G,R,x)},Ie=(w,R,x,Q=!1,$=!1)=>{const{type:G,props:Z,ref:le,children:j,dynamicChildren:M,shapeFlag:_,patchFlag:C,dirs:V,cacheIndex:W}=w;if(C===-2&&($=!1),le!=null&&go(le,null,x,w,!0),W!=null&&(R.renderCache[W]=void 0),_&256){R.ctx.deactivate(w);return}const k=_&1&&V,pe=!Yr(w);let ce;if(pe&&(ce=Z&&Z.onVnodeBeforeUnmount)&&_n(ce,R,w),_&6)de(w.component,x,Q);else{if(_&128){w.suspense.unmount(x,Q);return}k&&Mi(w,null,R,"beforeUnmount"),_&64?w.type.remove(w,R,x,ae,Q):M&&!M.hasOnce&&(G!==xn||C>0&&C&64)?Me(M,R,x,!1,!0):(G===xn&&C&384||!$&&_&16)&&Me(j,R,x),Q&&$e(w)}(pe&&(ce=Z&&Z.onVnodeUnmounted)||k)&&Xt(()=>{ce&&_n(ce,R,w),k&&Mi(w,null,R,"unmounted")},x)},$e=w=>{const{type:R,el:x,anchor:Q,transition:$}=w;if(R===xn){te(x,Q);return}if(R===ta){y(w);return}const G=()=>{r(x),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(w.shapeFlag&1&&$&&!$.persisted){const{leave:Z,delayLeave:le}=$,j=()=>Z(x,G);le?le(w.el,G,j):j()}else G()},te=(w,R)=>{let x;for(;w!==R;)x=h(w),r(w),w=x;r(R)},de=(w,R,x)=>{const{bum:Q,scope:$,job:G,subTree:Z,um:le,m:j,a:M}=w;$c(j),$c(M),Q&&$o(Q),$.stop(),G&&(G.flags|=8,Ie(Z,w,R,x)),le&&Xt(le,R),Xt(()=>{w.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},Me=(w,R,x,Q=!1,$=!1,G=0)=>{for(let Z=G;Z<w.length;Z++)Ie(w[Z],R,x,Q,$)},U=w=>{if(w.shapeFlag&6)return U(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const R=h(w.anchor||w.el),x=R&&R[$p];return x?h(x):R};let ie=!1;const oe=(w,R,x)=>{w==null?R._vnode&&Ie(R._vnode,null,null,!0):v(R._vnode||null,w,R,null,null,null,x),R._vnode=w,ie||(ie=!0,kc(),Ph(),ie=!1)},ae={p:v,um:Ie,m:Ae,r:$e,mt:ne,mc:B,pc:H,pbc:E,n:U,o:n};return{render:oe,hydrate:void 0,createApp:mm(oe)}}function ea({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Si({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function bm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function jh(n,e,t=!1){const i=n.children,r=e.children;if(Ve(i)&&Ve(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=ii(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&jh(o,a)),a.type===No&&(a.el=o.el)}}function Tm(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Kh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Kh(e)}function $c(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Am=Symbol.for("v-scx"),wm=()=>Gn(Am);function no(n,e,t){return Zh(n,e,t)}function Zh(n,e,t=ft){const{immediate:i,deep:r,flush:s,once:o}=t,a=It({},t),l=e&&i||!e&&s!=="post";let c;if(ss){if(s==="sync"){const d=wm();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=bn,d.resume=bn,d.pause=bn,d}}const u=Bt;a.call=(d,g,v)=>Tn(d,u,g,v);let f=!1;s==="post"?a.scheduler=d=>{Xt(d,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():ac(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=Wp(n,e,a);return ss&&(c?c.push(h):l&&h()),h}function Rm(n,e,t){const i=this.proxy,r=xt(n)?n.includes(".")?Jh(i,n):()=>i[n]:n.bind(i,i);let s;Ge(e)?s=e:(s=e.handler,t=e);const o=_s(this),a=Zh(r,s.bind(i),t);return o(),a}function Jh(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Cm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${fi(e)}Modifiers`]||n[`${zi(e)}Modifiers`];function Pm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ft;let r=t;const s=e.startsWith("update:"),o=s&&Cm(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>xt(u)?u.trim():u)),o.number&&(r=t.map(fp)));let a,l=i[a=Yo(e)]||i[a=Yo(fi(e))];!l&&s&&(l=i[a=Yo(zi(e))]),l&&Tn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Tn(c,n,6,r)}}function Qh(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ge(n)){const l=c=>{const u=Qh(c,e,!0);u&&(a=!0,It(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(dt(n)&&i.set(n,null),null):(Ve(s)?s.forEach(l=>o[l]=null):It(o,s),dt(n)&&i.set(n,o),o)}function Uo(n,e){return!n||!wo(e)?!1:(e=e.slice(2).replace(/Once$/,""),rt(n,e[0].toLowerCase()+e.slice(1))||rt(n,zi(e))||rt(n,e))}function jc(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:v}=n,m=mo(n);let p,A;try{if(t.shapeFlag&4){const y=r||i,D=y;p=Mn(c.call(D,y,u,f,d,h,g)),A=a}else{const y=e;p=Mn(y.length>1?y(f,{attrs:a,slots:o,emit:l}):y(f,null)),A=e.props?a:Im(a)}}catch(y){jr.length=0,Do(y,n,1),p=bt(is)}let b=p;if(A&&v!==!1){const y=Object.keys(A),{shapeFlag:D}=b;y.length&&D&7&&(s&&y.some($l)&&(A=Dm(A,s)),b=pr(b,A,!1,!0))}return t.dirs&&(b=pr(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&lc(b,t.transition),p=b,mo(m),p}const Im=n=>{let e;for(const t in n)(t==="class"||t==="style"||wo(t))&&((e||(e={}))[t]=n[t]);return e},Dm=(n,e)=>{const t={};for(const i in n)(!$l(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Lm(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Kc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!Uo(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Kc(i,o,c):!0:!!o;return!1}function Kc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Uo(t,s))return!0}return!1}function Um({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const ed=n=>n.__isSuspense;function Nm(n,e){e&&e.pendingBranch?Ve(n)?e.effects.push(...n):e.effects.push(n):Yp(n)}const xn=Symbol.for("v-fgt"),No=Symbol.for("v-txt"),is=Symbol.for("v-cmt"),ta=Symbol.for("v-stc"),jr=[];let Yt=null;function ms(n=!1){jr.push(Yt=n?null:[])}function Fm(){jr.pop(),Yt=jr[jr.length-1]||null}let rs=1;function Zc(n,e=!1){rs+=n,n<0&&Yt&&e&&(Yt.hasOnce=!0)}function Om(n){return n.dynamicChildren=rs>0?Yt||lr:null,Fm(),rs>0&&Yt&&Yt.push(n),n}function gs(n,e,t,i,r,s){return Om(Fo(n,e,t,i,r,s,!0))}function vo(n){return n?n.__v_isVNode===!0:!1}function Ir(n,e){return n.type===e.type&&n.key===e.key}const td=({key:n})=>n??null,io=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?xt(n)||Ct(n)||Ge(n)?{i:yn,r:n,k:e,f:!!t}:n:null);function Fo(n,e=null,t=null,i=0,r=null,s=n===xn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&td(e),ref:e&&io(e),scopeId:Dh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:yn};return a?(fc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=xt(t)?8:16),rs>0&&!o&&Yt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Yt.push(l),l}const bt=Bm;function Bm(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===am)&&(n=is),vo(n)){const a=pr(n,e,!0);return t&&fc(a,t),rs>0&&!s&&Yt&&(a.shapeFlag&6?Yt[Yt.indexOf(n)]=a:Yt.push(a)),a.patchFlag=-2,a}if($m(n)&&(n=n.__vccOpts),e){e=zm(e);let{class:a,style:l}=e;a&&!xt(a)&&(e.class=Jl(a)),dt(l)&&(oc(l)&&!Ve(l)&&(l=It({},l)),e.style=Zl(l))}const o=xt(n)?1:ed(n)?128:jp(n)?64:dt(n)?4:Ge(n)?2:0;return Fo(n,e,t,i,r,o,s,!0)}function zm(n){return n?oc(n)||kh(n)?It({},n):n:null}function pr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?Vm(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&td(c),ref:e&&e.ref?t&&s?Ve(s)?s.concat(io(e)):[s,io(e)]:io(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==xn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&pr(n.ssContent),ssFallback:n.ssFallback&&pr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&lc(u,l.clone(u)),u}function Za(n=" ",e=0){return bt(No,null,n,e)}function Mn(n){return n==null||typeof n=="boolean"?bt(is):Ve(n)?bt(xn,null,n.slice()):vo(n)?ii(n):bt(No,null,String(n))}function ii(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:pr(n)}function fc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ve(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),fc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!kh(e)?e._ctx=yn:r===3&&yn&&(yn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ge(e)?(e={default:e,_ctx:yn},t=32):(e=String(e),i&64?(t=16,e=[Za(e)]):t=8);n.children=e,n.shapeFlag|=t}function Vm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Jl([e.class,i.class]));else if(r==="style")e.style=Zl([e.style,i.style]);else if(wo(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ve(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function _n(n,e,t,i=null){Tn(n,e,7,[t,i])}const Hm=zh();let km=0;function Gm(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Hm,s={uid:km++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ah(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wh(i,r),emitsOptions:Qh(i,r),emit:null,emitted:null,propsDefaults:ft,inheritAttrs:i.inheritAttrs,ctx:ft,data:ft,props:ft,attrs:ft,slots:ft,refs:ft,setupState:ft,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Pm.bind(null,s),n.ce&&n.ce(s),s}let Bt=null,xo,Ja;{const n=Po(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};xo=e("__VUE_INSTANCE_SETTERS__",t=>Bt=t),Ja=e("__VUE_SSR_SETTERS__",t=>ss=t)}const _s=n=>{const e=Bt;return xo(n),n.scope.on(),()=>{n.scope.off(),xo(e)}},Jc=()=>{Bt&&Bt.scope.off(),xo(null)};function nd(n){return n.vnode.shapeFlag&4}let ss=!1;function Wm(n,e=!1,t=!1){e&&Ja(e);const{props:i,children:r}=n.vnode,s=nd(n);gm(n,i,s,e),Mm(n,r,t);const o=s?Xm(n,e):void 0;return e&&Ja(!1),o}function Xm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,lm);const{setup:i}=t;if(i){mi();const r=n.setupContext=i.length>1?Ym(n):null,s=_s(n),o=ps(i,n,0,[n.props,r]),a=Jf(o);if(gi(),s(),(a||n.sp)&&!Yr(n)&&Lh(n),a){if(o.then(Jc,Jc),e)return o.then(l=>{Qc(n,l)}).catch(l=>{Do(l,n,0)});n.asyncDep=o}else Qc(n,o)}else id(n)}function Qc(n,e,t){Ge(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:dt(e)&&(n.setupState=Ah(e)),id(n)}function id(n,e,t){const i=n.type;n.render||(n.render=i.render||bn);{const r=_s(n);mi();try{cm(n)}finally{gi(),r()}}}const qm={get(n,e){return Rt(n,"get",""),n[e]}};function Ym(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,qm),slots:n.slots,emit:n.emit,expose:e}}function hc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Ah(bh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in $r)return $r[t](n)},has(e,t){return t in e||t in $r}})):n.proxy}function $m(n){return Ge(n)&&"__vccOpts"in n}const ln=(n,e)=>kp(n,e,ss);function rd(n,e,t){const i=arguments.length;return i===2?dt(e)&&!Ve(e)?vo(e)?bt(n,null,[e]):bt(n,e):bt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&vo(t)&&(t=[t]),bt(n,e,t))}const jm="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qa;const eu=typeof window<"u"&&window.trustedTypes;if(eu)try{Qa=eu.createPolicy("vue",{createHTML:n=>n})}catch{}const sd=Qa?n=>Qa.createHTML(n):n=>n,Km="http://www.w3.org/2000/svg",Zm="http://www.w3.org/1998/Math/MathML",Bn=typeof document<"u"?document:null,tu=Bn&&Bn.createElement("template"),Jm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Bn.createElementNS(Km,n):e==="mathml"?Bn.createElementNS(Zm,n):t?Bn.createElement(n,{is:t}):Bn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Bn.createTextNode(n),createComment:n=>Bn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Bn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{tu.innerHTML=sd(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=tu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Qm=Symbol("_vtc");function eg(n,e,t){const i=n[Qm];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const nu=Symbol("_vod"),tg=Symbol("_vsh"),ng=Symbol(""),ig=/(^|;)\s*display\s*:/;function rg(n,e,t){const i=n.style,r=xt(t);let s=!1;if(t&&!r){if(e)if(xt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ro(i,a,"")}else for(const o in e)t[o]==null&&ro(i,o,"");for(const o in t)o==="display"&&(s=!0),ro(i,o,t[o])}else if(r){if(e!==t){const o=i[ng];o&&(t+=";"+o),i.cssText=t,s=ig.test(t)}}else e&&n.removeAttribute("style");nu in n&&(n[nu]=s?i.display:"",n[tg]&&(i.display="none"))}const iu=/\s*!important$/;function ro(n,e,t){if(Ve(t))t.forEach(i=>ro(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=sg(n,e);iu.test(t)?n.setProperty(zi(i),t.replace(iu,""),"important"):n[i]=t}}const ru=["Webkit","Moz","ms"],na={};function sg(n,e){const t=na[e];if(t)return t;let i=fi(e);if(i!=="filter"&&i in n)return na[e]=i;i=th(i);for(let r=0;r<ru.length;r++){const s=ru[r]+i;if(s in n)return na[e]=s}return e}const su="http://www.w3.org/1999/xlink";function ou(n,e,t,i,r,s=_p(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(su,e.slice(6,e.length)):n.setAttributeNS(su,e,t):t==null||s&&!ih(t)?n.removeAttribute(e):n.setAttribute(e,s?"":pi(t)?String(t):t)}function au(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?sd(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=ih(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function og(n,e,t,i){n.addEventListener(e,t,i)}function ag(n,e,t,i){n.removeEventListener(e,t,i)}const lu=Symbol("_vei");function lg(n,e,t,i,r=null){const s=n[lu]||(n[lu]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=cg(e);if(i){const c=s[e]=hg(i,r);og(n,a,c,l)}else o&&(ag(n,a,o,l),s[e]=void 0)}}const cu=/(?:Once|Passive|Capture)$/;function cg(n){let e;if(cu.test(n)){e={};let i;for(;i=n.match(cu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):zi(n.slice(2)),e]}let ia=0;const ug=Promise.resolve(),fg=()=>ia||(ug.then(()=>ia=0),ia=Date.now());function hg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Tn(dg(i,t.value),e,5,[i])};return t.value=n,t.attached=fg(),t}function dg(n,e){if(Ve(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const uu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,pg=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?eg(n,i,o):e==="style"?rg(n,t,i):wo(e)?$l(e)||lg(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):mg(n,e,i,o))?(au(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ou(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!xt(i))?au(n,fi(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),ou(n,e,i,o))};function mg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&uu(e)&&Ge(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return uu(e)&&xt(t)?!1:e in n}const gg=It({patchProp:pg},Jm);let fu;function _g(){return fu||(fu=ym(gg))}const vg=(...n)=>{const e=_g().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Mg(i);if(!r)return;const s=e._component;!Ge(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,xg(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function xg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Mg(n){return xt(n)?document.querySelector(n):n}/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Sg=Symbol();var hu;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(hu||(hu={}));function yg(){const n=vp(!0),e=n.run(()=>ds({}));let t=[],i=[];const r=bh({install(s){r._a=s,s.provide(Sg,r),s.config.globalProperties.$pinia=r,i.forEach(o=>t.push(o)),i=[]},use(s){return this._a?t.push(s):i.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const or=typeof document<"u";function od(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Eg(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&od(n.default)}const nt=Object.assign;function ra(n,e){const t={};for(const i in e){const r=e[i];t[i]=mn(r)?r.map(n):n(r)}return t}const Kr=()=>{},mn=Array.isArray,ad=/#/g,bg=/&/g,Tg=/\//g,Ag=/=/g,wg=/\?/g,ld=/\+/g,Rg=/%5B/g,Cg=/%5D/g,cd=/%5E/g,Pg=/%60/g,ud=/%7B/g,Ig=/%7C/g,fd=/%7D/g,Dg=/%20/g;function dc(n){return encodeURI(""+n).replace(Ig,"|").replace(Rg,"[").replace(Cg,"]")}function Lg(n){return dc(n).replace(ud,"{").replace(fd,"}").replace(cd,"^")}function el(n){return dc(n).replace(ld,"%2B").replace(Dg,"+").replace(ad,"%23").replace(bg,"%26").replace(Pg,"`").replace(ud,"{").replace(fd,"}").replace(cd,"^")}function Ug(n){return el(n).replace(Ag,"%3D")}function Ng(n){return dc(n).replace(ad,"%23").replace(wg,"%3F")}function Fg(n){return n==null?"":Ng(n).replace(Tg,"%2F")}function os(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const Og=/\/$/,Bg=n=>n.replace(Og,"");function sa(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=kg(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:os(o)}}function zg(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function du(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Vg(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&mr(e.matched[i],t.matched[r])&&hd(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function mr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function hd(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Hg(n[t],e[t]))return!1;return!0}function Hg(n,e){return mn(n)?pu(n,e):mn(e)?pu(e,n):n===e}function pu(n,e){return mn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function kg(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const jn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var as;(function(n){n.pop="pop",n.push="push"})(as||(as={}));var Zr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Zr||(Zr={}));function Gg(n){if(!n)if(or){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Bg(n)}const Wg=/^[^#]+#/;function Xg(n,e){return n.replace(Wg,"#")+e}function qg(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Oo=()=>({left:window.scrollX,top:window.scrollY});function Yg(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=qg(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function mu(n,e){return(history.state?history.state.position-e:-1)+n}const tl=new Map;function $g(n,e){tl.set(n,e)}function jg(n){const e=tl.get(n);return tl.delete(n),e}let Kg=()=>location.protocol+"//"+location.host;function dd(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),du(l,"")}return du(t,n)+i+r}function Zg(n,e,t,i){let r=[],s=[],o=null;const a=({state:h})=>{const d=dd(n,location),g=t.value,v=e.value;let m=0;if(h){if(t.value=d,e.value=h,o&&o===g){o=null;return}m=v?h.position-v.position:0}else i(d);r.forEach(p=>{p(t.value,g,{delta:m,type:as.pop,direction:m?m>0?Zr.forward:Zr.back:Zr.unknown})})};function l(){o=t.value}function c(h){r.push(h);const d=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(d),d}function u(){const{history:h}=window;h.state&&h.replaceState(nt({},h.state,{scroll:Oo()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function gu(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Oo():null}}function Jg(n){const{history:e,location:t}=window,i={value:dd(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:Kg()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function o(l,c){const u=nt({},e.state,gu(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=nt({},r.value,e.state,{forward:l,scroll:Oo()});s(u.current,u,!0);const f=nt({},gu(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function Qg(n){n=Gg(n);const e=Jg(n),t=Zg(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=nt({location:"",base:n,go:i,createHref:Xg.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function e_(n){return typeof n=="string"||n&&typeof n=="object"}function pd(n){return typeof n=="string"||typeof n=="symbol"}const md=Symbol("");var _u;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(_u||(_u={}));function gr(n,e){return nt(new Error,{type:n,[md]:!0},e)}function Pn(n,e){return n instanceof Error&&md in n&&(e==null||!!(n.type&e))}const vu="[^/]+?",t_={sensitive:!1,strict:!1,start:!0,end:!0},n_=/[.+*?^${}()[\]/\\]/g;function i_(n,e){const t=nt({},t_,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(n_,"\\$&"),d+=40;else if(h.type===1){const{value:g,repeatable:v,optional:m,regexp:p}=h;s.push({name:g,repeatable:v,optional:m});const A=p||vu;if(A!==vu){d+=10;try{new RegExp(`(${A})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${g}" (${A}): `+y.message)}}let b=v?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;f||(b=m&&c.length<2?`(?:/${b})`:"/"+b),m&&(b+="?"),r+=b,d+=20,m&&(d+=-8),v&&(d+=-20),A===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",g=s[h-1];f[g.name]=d&&g.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:v,optional:m}=d,p=g in c?c[g]:"";if(mn(p)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const A=mn(p)?p.join("/"):p;if(!A)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=A}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function r_(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function gd(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=r_(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(xu(i))return 1;if(xu(r))return-1}return r.length-i.length}function xu(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const s_={type:0,value:""},o_=/[a-zA-Z0-9_]/;function a_(n){if(!n)return[[]];if(n==="/")return[[s_]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:o_.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function l_(n,e,t){const i=i_(a_(n.path),t),r=nt(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function c_(n,e){const t=[],i=new Map;e=Eu({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,h,d){const g=!d,v=Su(f);v.aliasOf=d&&d.record;const m=Eu(e,f),p=[v];if("alias"in f){const y=typeof f.alias=="string"?[f.alias]:f.alias;for(const D of y)p.push(Su(nt({},v,{components:d?d.record.components:v.components,path:D,aliasOf:d?d.record:v})))}let A,b;for(const y of p){const{path:D}=y;if(h&&D[0]!=="/"){const I=h.record.path,P=I[I.length-1]==="/"?"":"/";y.path=h.record.path+(D&&P+D)}if(A=l_(y,h,m),d?d.alias.push(A):(b=b||A,b!==A&&b.alias.push(A),g&&f.name&&!yu(A)&&o(f.name)),_d(A)&&l(A),v.children){const I=v.children;for(let P=0;P<I.length;P++)s(I[P],A,d&&d.children[P])}d=d||A}return b?()=>{o(b)}:Kr}function o(f){if(pd(f)){const h=i.get(f);h&&(i.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function l(f){const h=h_(f,t);t.splice(h,0,f),f.record.name&&!yu(f)&&i.set(f.record.name,f)}function c(f,h){let d,g={},v,m;if("name"in f&&f.name){if(d=i.get(f.name),!d)throw gr(1,{location:f});m=d.record.name,g=nt(Mu(h.params,d.keys.filter(b=>!b.optional).concat(d.parent?d.parent.keys.filter(b=>b.optional):[]).map(b=>b.name)),f.params&&Mu(f.params,d.keys.map(b=>b.name))),v=d.stringify(g)}else if(f.path!=null)v=f.path,d=t.find(b=>b.re.test(v)),d&&(g=d.parse(v),m=d.record.name);else{if(d=h.name?i.get(h.name):t.find(b=>b.re.test(h.path)),!d)throw gr(1,{location:f,currentLocation:h});m=d.record.name,g=nt({},h.params,f.params),v=d.stringify(g)}const p=[];let A=d;for(;A;)p.unshift(A.record),A=A.parent;return{name:m,path:v,params:g,matched:p,meta:f_(p)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function Mu(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Su(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:u_(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function u_(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function yu(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function f_(n){return n.reduce((e,t)=>nt(e,t.meta),{})}function Eu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function h_(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;gd(n,e[s])<0?i=s:t=s+1}const r=d_(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function d_(n){let e=n;for(;e=e.parent;)if(_d(e)&&gd(n,e)===0)return e}function _d({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function p_(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(ld," "),o=s.indexOf("="),a=os(o<0?s:s.slice(0,o)),l=o<0?null:os(s.slice(o+1));if(a in e){let c=e[a];mn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function bu(n){let e="";for(let t in n){const i=n[t];if(t=Ug(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(mn(i)?i.map(s=>s&&el(s)):[i&&el(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function m_(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=mn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const g_=Symbol(""),Tu=Symbol(""),pc=Symbol(""),vd=Symbol(""),nl=Symbol("");function Dr(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function ri(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(gr(4,{from:t,to:e})):h instanceof Error?l(h):e_(h)?l(gr(2,{from:e,to:h})):(o&&i.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function oa(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(od(l)){const u=(l.__vccOpts||l)[e];u&&s.push(ri(u,t,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=Eg(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&ri(d,t,i,o,a,r)()}))}}return s}function Au(n){const e=Gn(pc),t=Gn(vd),i=ln(()=>{const l=kn(n.to);return e.resolve(l)}),r=ln(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(mr.bind(null,u));if(h>-1)return h;const d=wu(l[c-2]);return c>1&&wu(u)===d&&f[f.length-1].path!==d?f.findIndex(mr.bind(null,l[c-2])):h}),s=ln(()=>r.value>-1&&M_(t.params,i.value.params)),o=ln(()=>r.value>-1&&r.value===t.matched.length-1&&hd(t.params,i.value.params));function a(l={}){if(x_(l)){const c=e[kn(n.replace)?"replace":"push"](kn(n.to)).catch(Kr);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:ln(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function __(n){return n.length===1?n[0]:n}const v_=Vi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Au,setup(n,{slots:e}){const t=Io(Au(n)),{options:i}=Gn(pc),r=ln(()=>({[Ru(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Ru(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&__(e.default(t));return n.custom?s:rd("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),il=v_;function x_(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function M_(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!mn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function wu(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Ru=(n,e,t)=>n??e??t,S_=Vi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Gn(nl),r=ln(()=>n.route||i.value),s=Gn(Tu,0),o=ln(()=>{let c=kn(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=ln(()=>r.value.matched[o.value]);to(Tu,ln(()=>o.value+1)),to(g_,a),to(nl,r);const l=ds();return no(()=>[l.value,a.value,n.name],([c,u,f],[h,d,g])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!mr(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return Cu(t.default,{Component:h,route:c});const d=f.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=rd(h,nt({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Cu(t.default,{Component:m,route:c})||m}}});function Cu(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const xd=S_;function y_(n){const e=c_(n.routes,n),t=n.parseQuery||p_,i=n.stringifyQuery||bu,r=n.history,s=Dr(),o=Dr(),a=Dr(),l=Bp(jn);let c=jn;or&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ra.bind(null,U=>""+U),f=ra.bind(null,Fg),h=ra.bind(null,os);function d(U,ie){let oe,ae;return pd(U)?(oe=e.getRecordMatcher(U),ae=ie):ae=U,e.addRoute(ae,oe)}function g(U){const ie=e.getRecordMatcher(U);ie&&e.removeRoute(ie)}function v(){return e.getRoutes().map(U=>U.record)}function m(U){return!!e.getRecordMatcher(U)}function p(U,ie){if(ie=nt({},ie||l.value),typeof U=="string"){const x=sa(t,U,ie.path),Q=e.resolve({path:x.path},ie),$=r.createHref(x.fullPath);return nt(x,Q,{params:h(Q.params),hash:os(x.hash),redirectedFrom:void 0,href:$})}let oe;if(U.path!=null)oe=nt({},U,{path:sa(t,U.path,ie.path).path});else{const x=nt({},U.params);for(const Q in x)x[Q]==null&&delete x[Q];oe=nt({},U,{params:f(x)}),ie.params=f(ie.params)}const ae=e.resolve(oe,ie),Ue=U.hash||"";ae.params=u(h(ae.params));const w=zg(i,nt({},U,{hash:Lg(Ue),path:ae.path})),R=r.createHref(w);return nt({fullPath:w,hash:Ue,query:i===bu?m_(U.query):U.query||{}},ae,{redirectedFrom:void 0,href:R})}function A(U){return typeof U=="string"?sa(t,U,l.value.path):nt({},U)}function b(U,ie){if(c!==U)return gr(8,{from:ie,to:U})}function y(U){return P(U)}function D(U){return y(nt(A(U),{replace:!0}))}function I(U){const ie=U.matched[U.matched.length-1];if(ie&&ie.redirect){const{redirect:oe}=ie;let ae=typeof oe=="function"?oe(U):oe;return typeof ae=="string"&&(ae=ae.includes("?")||ae.includes("#")?ae=A(ae):{path:ae},ae.params={}),nt({query:U.query,hash:U.hash,params:ae.path!=null?{}:U.params},ae)}}function P(U,ie){const oe=c=p(U),ae=l.value,Ue=U.state,w=U.force,R=U.replace===!0,x=I(oe);if(x)return P(nt(A(x),{state:typeof x=="object"?nt({},Ue,x.state):Ue,force:w,replace:R}),ie||oe);const Q=oe;Q.redirectedFrom=ie;let $;return!w&&Vg(i,ae,oe)&&($=gr(16,{to:Q,from:ae}),Ae(ae,ae,!0,!1)),($?Promise.resolve($):E(Q,ae)).catch(G=>Pn(G)?Pn(G,2)?G:xe(G):H(G,Q,ae)).then(G=>{if(G){if(Pn(G,2))return P(nt({replace:R},A(G.to),{state:typeof G.to=="object"?nt({},Ue,G.to.state):Ue,force:w}),ie||Q)}else G=ee(Q,ae,!0,R,Ue);return L(Q,ae,G),G})}function B(U,ie){const oe=b(U,ie);return oe?Promise.reject(oe):Promise.resolve()}function T(U){const ie=te.values().next().value;return ie&&typeof ie.runWithContext=="function"?ie.runWithContext(U):U()}function E(U,ie){let oe;const[ae,Ue,w]=E_(U,ie);oe=oa(ae.reverse(),"beforeRouteLeave",U,ie);for(const x of ae)x.leaveGuards.forEach(Q=>{oe.push(ri(Q,U,ie))});const R=B.bind(null,U,ie);return oe.push(R),Me(oe).then(()=>{oe=[];for(const x of s.list())oe.push(ri(x,U,ie));return oe.push(R),Me(oe)}).then(()=>{oe=oa(Ue,"beforeRouteUpdate",U,ie);for(const x of Ue)x.updateGuards.forEach(Q=>{oe.push(ri(Q,U,ie))});return oe.push(R),Me(oe)}).then(()=>{oe=[];for(const x of w)if(x.beforeEnter)if(mn(x.beforeEnter))for(const Q of x.beforeEnter)oe.push(ri(Q,U,ie));else oe.push(ri(x.beforeEnter,U,ie));return oe.push(R),Me(oe)}).then(()=>(U.matched.forEach(x=>x.enterCallbacks={}),oe=oa(w,"beforeRouteEnter",U,ie,T),oe.push(R),Me(oe))).then(()=>{oe=[];for(const x of o.list())oe.push(ri(x,U,ie));return oe.push(R),Me(oe)}).catch(x=>Pn(x,8)?x:Promise.reject(x))}function L(U,ie,oe){a.list().forEach(ae=>T(()=>ae(U,ie,oe)))}function ee(U,ie,oe,ae,Ue){const w=b(U,ie);if(w)return w;const R=ie===jn,x=or?history.state:{};oe&&(ae||R?r.replace(U.fullPath,nt({scroll:R&&x&&x.scroll},Ue)):r.push(U.fullPath,Ue)),l.value=U,Ae(U,ie,oe,R),xe()}let q;function ne(){q||(q=r.listen((U,ie,oe)=>{if(!de.listening)return;const ae=p(U),Ue=I(ae);if(Ue){P(nt(Ue,{replace:!0,force:!0}),ae).catch(Kr);return}c=ae;const w=l.value;or&&$g(mu(w.fullPath,oe.delta),Oo()),E(ae,w).catch(R=>Pn(R,12)?R:Pn(R,2)?(P(nt(A(R.to),{force:!0}),ae).then(x=>{Pn(x,20)&&!oe.delta&&oe.type===as.pop&&r.go(-1,!1)}).catch(Kr),Promise.reject()):(oe.delta&&r.go(-oe.delta,!1),H(R,ae,w))).then(R=>{R=R||ee(ae,w,!1),R&&(oe.delta&&!Pn(R,8)?r.go(-oe.delta,!1):oe.type===as.pop&&Pn(R,20)&&r.go(-1,!1)),L(ae,w,R)}).catch(Kr)}))}let fe=Dr(),K=Dr(),re;function H(U,ie,oe){xe(U);const ae=K.list();return ae.length?ae.forEach(Ue=>Ue(U,ie,oe)):console.error(U),Promise.reject(U)}function me(){return re&&l.value!==jn?Promise.resolve():new Promise((U,ie)=>{fe.add([U,ie])})}function xe(U){return re||(re=!U,ne(),fe.list().forEach(([ie,oe])=>U?oe(U):ie()),fe.reset()),U}function Ae(U,ie,oe,ae){const{scrollBehavior:Ue}=n;if(!or||!Ue)return Promise.resolve();const w=!oe&&jg(mu(U.fullPath,0))||(ae||!oe)&&history.state&&history.state.scroll||null;return Rh().then(()=>Ue(U,ie,w)).then(R=>R&&Yg(R)).catch(R=>H(R,U,ie))}const Ie=U=>r.go(U);let $e;const te=new Set,de={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:v,resolve:p,options:n,push:y,replace:D,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:K.add,isReady:me,install(U){const ie=this;U.component("RouterLink",il),U.component("RouterView",xd),U.config.globalProperties.$router=ie,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>kn(l)}),or&&!$e&&l.value===jn&&($e=!0,y(r.location).catch(Ue=>{}));const oe={};for(const Ue in jn)Object.defineProperty(oe,Ue,{get:()=>l.value[Ue],enumerable:!0});U.provide(pc,ie),U.provide(vd,yh(oe)),U.provide(nl,l);const ae=U.unmount;te.add(U),U.unmount=function(){te.delete(U),te.size<1&&(c=jn,q&&q(),q=null,l.value=jn,$e=!1,re=!1),ae()}}};function Me(U){return U.reduce((ie,oe)=>ie.then(()=>T(oe)),Promise.resolve())}return de}function E_(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>mr(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>mr(c,l))||r.push(l))}return[t,i,r]}const b_={class:"nav"},T_=Vi({__name:"App",setup(n){return(e,t)=>(ms(),gs(xn,null,[Fo("div",b_,[bt(kn(il),{class:"link",to:"/"},{default:qa(()=>t[0]||(t[0]=[Za("Home")])),_:1}),bt(kn(il),{class:"link",to:"/about"},{default:qa(()=>t[1]||(t[1]=[Za("Cat 3d Model")])),_:1})]),bt(kn(xd))],64))}}),vs=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},A_=vs(T_,[["__scopeId","data-v-8830a259"]]),w_="modulepreload",R_=function(n){return"/"+n},Pu={},C_=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let o=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=o(t.map(c=>{if(c=R_(c),c in Pu)return;Pu[c]=!0;const u=c.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":w_,u||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),u)return new Promise((d,g)=>{h.addEventListener("load",d),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mc="176",P_=0,Iu=1,I_=2,Md=1,D_=2,On=3,hi=0,Ht=1,Vn=2,ci=0,hr=1,Du=2,Lu=3,Uu=4,L_=5,Ii=100,U_=101,N_=102,F_=103,O_=104,B_=200,z_=201,V_=202,H_=203,rl=204,sl=205,k_=206,G_=207,W_=208,X_=209,q_=210,Y_=211,$_=212,j_=213,K_=214,ol=0,al=1,ll=2,_r=3,cl=4,ul=5,fl=6,hl=7,Sd=0,Z_=1,J_=2,ui=0,Q_=1,ev=2,tv=3,nv=4,iv=5,rv=6,sv=7,Nu="attached",ov="detached",yd=300,vr=301,xr=302,dl=303,pl=304,Bo=306,ml=1e3,Li=1001,gl=1002,jt=1003,av=1004,As=1005,En=1006,aa=1007,Ui=1008,An=1009,Ed=1010,bd=1011,ls=1012,gc=1013,Oi=1014,fn=1015,xs=1016,_c=1017,vc=1018,cs=1020,Td=35902,Ad=1021,wd=1022,en=1023,us=1026,fs=1027,xc=1028,Mc=1029,Rd=1030,Sc=1031,yc=1033,so=33776,oo=33777,ao=33778,lo=33779,_l=35840,vl=35841,xl=35842,Ml=35843,Sl=36196,yl=37492,El=37496,bl=37808,Tl=37809,Al=37810,wl=37811,Rl=37812,Cl=37813,Pl=37814,Il=37815,Dl=37816,Ll=37817,Ul=37818,Nl=37819,Fl=37820,Ol=37821,co=36492,Bl=36494,zl=36495,Cd=36283,Vl=36284,Hl=36285,kl=36286,Mo=2300,Gl=2301,la=2302,Fu=2400,Ou=2401,Bu=2402,lv=2500,WE=0,XE=1,qE=2,cv=3200,uv=3201,Pd=0,fv=1,oi="",Qt="srgb",Mr="srgb-linear",So="linear",at="srgb",Wi=7680,zu=519,hv=512,dv=513,pv=514,Id=515,mv=516,gv=517,_v=518,vv=519,Wl=35044,Vu="300 es",Hn=2e3,yo=2001;class Er{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hu=1234567;const Jr=Math.PI/180,Sr=180/Math.PI;function pn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]).toLowerCase()}function Xe(n,e,t){return Math.max(e,Math.min(t,n))}function Ec(n,e){return(n%e+e)%e}function xv(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Mv(n,e,t){return n!==e?(t-n)/(e-n):0}function Qr(n,e,t){return(1-t)*n+t*e}function Sv(n,e,t,i){return Qr(n,e,1-Math.exp(-t*i))}function yv(n,e=1){return e-Math.abs(Ec(n,e*2)-e)}function Ev(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function bv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Tv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Av(n,e){return n+Math.random()*(e-n)}function wv(n){return n*(.5-Math.random())}function Rv(n){n!==void 0&&(Hu=n);let e=Hu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cv(n){return n*Jr}function Pv(n){return n*Sr}function Iv(n){return(n&n-1)===0&&n!==0}function Dv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Lv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Uv(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),d=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function cn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const YE={DEG2RAD:Jr,RAD2DEG:Sr,generateUUID:pn,clamp:Xe,euclideanModulo:Ec,mapLinear:xv,inverseLerp:Mv,lerp:Qr,damp:Sv,pingpong:yv,smoothstep:Ev,smootherstep:bv,randInt:Tv,randFloat:Av,randFloatSpread:wv,seededRandom:Rv,degToRad:Cv,radToDeg:Pv,isPowerOfTwo:Iv,ceilPowerOfTwo:Dv,floorPowerOfTwo:Lv,setQuaternionFromProperEuler:Uv,normalize:ot,denormalize:cn};class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,i,r,s,o,a,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],v=r[0],m=r[3],p=r[6],A=r[1],b=r[4],y=r[7],D=r[2],I=r[5],P=r[8];return s[0]=o*v+a*A+l*D,s[3]=o*m+a*b+l*I,s[6]=o*p+a*y+l*P,s[1]=c*v+u*A+f*D,s[4]=c*m+u*b+f*I,s[7]=c*p+u*y+f*P,s[2]=h*v+d*A+g*D,s[5]=h*m+d*b+g*I,s[8]=h*p+d*y+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=t*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ca.makeScale(e,t)),this}rotate(e){return this.premultiply(ca.makeRotation(-e)),this}translate(e,t){return this.premultiply(ca.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ca=new ke;function Dd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function hs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Nv(){const n=hs("canvas");return n.style.display="block",n}const ku={};function uo(n){n in ku||(ku[n]=!0,console.warn(n))}function Fv(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Ov(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Bv(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Gu=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wu=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zv(){const n={enabled:!0,workingColorSpace:Mr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===at&&(r.r=Wn(r.r),r.g=Wn(r.g),r.b=Wn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(r.r=dr(r.r),r.g=dr(r.g),r.b=dr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===oi?So:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Mr]:{primaries:e,whitePoint:i,transfer:So,toXYZ:Gu,fromXYZ:Wu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:i,transfer:at,toXYZ:Gu,fromXYZ:Wu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),n}const Ze=zv();function Wn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function dr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Xi;class Vv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Xi===void 0&&(Xi=hs("canvas")),Xi.width=e.width,Xi.height=e.height;const r=Xi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Xi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Wn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wn(t[i]/255)*255):t[i]=Wn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Hv=0;class bc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hv++}),this.uuid=pn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ua(r[o].image)):s.push(ua(r[o]))}else s=ua(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ua(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Vv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kv=0;class Pt extends Er{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,i=Li,r=Li,s=En,o=Ui,a=en,l=An,c=Pt.DEFAULT_ANISOTROPY,u=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kv++}),this.uuid=pn(),this.name="",this.source=new bc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ml:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case gl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ml:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case gl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=yd;Pt.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,i=0,r=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,y=(d+1)/2,D=(p+1)/2,I=(u+h)/4,P=(f+v)/4,B=(g+m)/4;return b>y&&b>D?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=I/i,s=P/i):y>D?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=I/r,s=B/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=P/s,r=B/s),this.set(i,r,s,t),this}let A=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(f-v)/A,this.z=(h-u)/A,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gv extends Er{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth?i.depth:1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const r={width:e,height:t,depth:this.depth};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},i);const s=new Pt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new bc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends Gv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ld extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wv extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class br{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*v,A=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const D=Math.sqrt(b),I=Math.atan2(D,p*A);m=Math.sin(m*I)/D,a=Math.sin(a*I)/D}const y=a*A;if(l=l*m+h*y,c=c*m+d*y,u=u*m+g*y,f=f*m+v*y,m===1-a){const D=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=D,c*=D,u*=D,f*=D}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fa.copy(this).projectOnVector(e),this.sub(fa)}reflect(e){return this.sub(fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fa=new z,Xu=new br;class _i{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,sn):sn.fromBufferAttribute(s,o),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ws.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ws.copy(i.boundingBox)),ws.applyMatrix4(e.matrixWorld),this.union(ws)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lr),Rs.subVectors(this.max,Lr),qi.subVectors(e.a,Lr),Yi.subVectors(e.b,Lr),$i.subVectors(e.c,Lr),Kn.subVectors(Yi,qi),Zn.subVectors($i,Yi),yi.subVectors(qi,$i);let t=[0,-Kn.z,Kn.y,0,-Zn.z,Zn.y,0,-yi.z,yi.y,Kn.z,0,-Kn.x,Zn.z,0,-Zn.x,yi.z,0,-yi.x,-Kn.y,Kn.x,0,-Zn.y,Zn.x,0,-yi.y,yi.x,0];return!ha(t,qi,Yi,$i,Rs)||(t=[1,0,0,0,1,0,0,0,1],!ha(t,qi,Yi,$i,Rs))?!1:(Cs.crossVectors(Kn,Zn),t=[Cs.x,Cs.y,Cs.z],ha(t,qi,Yi,$i,Rs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const In=[new z,new z,new z,new z,new z,new z,new z,new z],sn=new z,ws=new _i,qi=new z,Yi=new z,$i=new z,Kn=new z,Zn=new z,yi=new z,Lr=new z,Rs=new z,Cs=new z,Ei=new z;function ha(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ei.fromArray(n,s);const a=r.x*Math.abs(Ei.x)+r.y*Math.abs(Ei.y)+r.z*Math.abs(Ei.z),l=e.dot(Ei),c=t.dot(Ei),u=i.dot(Ei);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Xv=new _i,Ur=new z,da=new z;class Yn{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Xv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);const t=Ur.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ur,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(da.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(da)),this.expandByPoint(Ur.copy(e.center).sub(da))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new z,pa=new z,Ps=new z,Jn=new z,ma=new z,Is=new z,ga=new z;class zo{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.origin).addScaledVector(this.direction,t),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){pa.copy(e).add(t).multiplyScalar(.5),Ps.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(pa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ps),a=Jn.dot(this.direction),l=-Jn.dot(Ps),c=Jn.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const v=1/u;f*=v,h*=v,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(pa).addScaledVector(Ps,h),d}intersectSphere(e,t){Dn.subVectors(e.center,this.origin);const i=Dn.dot(this.direction),r=Dn.dot(Dn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,i,r,s){ma.subVectors(t,e),Is.subVectors(i,e),ga.crossVectors(ma,Is);let o=this.direction.dot(ga),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Jn.subVectors(this.origin,e);const l=a*this.direction.dot(Is.crossVectors(Jn,Is));if(l<0)return null;const c=a*this.direction.dot(ma.cross(Jn));if(c<0||l+c>o)return null;const u=-a*Jn.dot(ga);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(e,t,i,r,s,o,a,l,c,u,f,h,d,g,v,m){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,d,g,v,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,d,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ji.setFromMatrixColumn(e,0).length(),s=1/ji.setFromMatrixColumn(e,1).length(),o=1/ji.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,v=c*f;t[0]=h+v*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,v=c*f;t[0]=h-v*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qv,e,Yv)}lookAt(e,t,i){const r=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Qn.crossVectors(i,Gt),Qn.lengthSq()===0&&(Math.abs(i.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Qn.crossVectors(i,Gt)),Qn.normalize(),Ds.crossVectors(Gt,Qn),r[0]=Qn.x,r[4]=Ds.x,r[8]=Gt.x,r[1]=Qn.y,r[5]=Ds.y,r[9]=Gt.y,r[2]=Qn.z,r[6]=Ds.z,r[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],A=i[3],b=i[7],y=i[11],D=i[15],I=r[0],P=r[4],B=r[8],T=r[12],E=r[1],L=r[5],ee=r[9],q=r[13],ne=r[2],fe=r[6],K=r[10],re=r[14],H=r[3],me=r[7],xe=r[11],Ae=r[15];return s[0]=o*I+a*E+l*ne+c*H,s[4]=o*P+a*L+l*fe+c*me,s[8]=o*B+a*ee+l*K+c*xe,s[12]=o*T+a*q+l*re+c*Ae,s[1]=u*I+f*E+h*ne+d*H,s[5]=u*P+f*L+h*fe+d*me,s[9]=u*B+f*ee+h*K+d*xe,s[13]=u*T+f*q+h*re+d*Ae,s[2]=g*I+v*E+m*ne+p*H,s[6]=g*P+v*L+m*fe+p*me,s[10]=g*B+v*ee+m*K+p*xe,s[14]=g*T+v*q+m*re+p*Ae,s[3]=A*I+b*E+y*ne+D*H,s[7]=A*P+b*L+y*fe+D*me,s[11]=A*B+b*ee+y*K+D*xe,s[15]=A*T+b*q+y*re+D*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*d-i*l*d)+v*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+m*(+t*c*f-t*a*d-s*o*f+i*o*d+s*a*u-i*c*u)+p*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],A=f*m*c-v*h*c+v*l*d-a*m*d-f*l*p+a*h*p,b=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,y=u*v*c-g*f*c+g*a*d-o*v*d-u*a*p+o*f*p,D=g*f*l-u*v*l-g*a*h+o*v*h+u*a*m-o*f*m,I=t*A+i*b+r*y+s*D;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return e[0]=A*P,e[1]=(v*h*s-f*m*s-v*r*d+i*m*d+f*r*p-i*h*p)*P,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*p+i*l*p)*P,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*d-i*l*d)*P,e[4]=b*P,e[5]=(u*m*s-g*h*s+g*r*d-t*m*d-u*r*p+t*h*p)*P,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*p-t*l*p)*P,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*P,e[8]=y*P,e[9]=(g*f*s-u*v*s-g*i*d+t*v*d+u*i*p-t*f*p)*P,e[10]=(o*v*s-g*a*s+g*i*c-t*v*c-o*i*p+t*a*p)*P,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*d-t*a*d)*P,e[12]=D*P,e[13]=(u*v*r-g*f*r+g*i*h-t*v*h-u*i*m+t*f*m)*P,e[14]=(g*a*r-o*v*r-g*i*l+t*v*l+o*i*m-t*a*m)*P,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,v=o*u,m=o*f,p=a*f,A=l*c,b=l*u,y=l*f,D=i.x,I=i.y,P=i.z;return r[0]=(1-(v+p))*D,r[1]=(d+y)*D,r[2]=(g-b)*D,r[3]=0,r[4]=(d-y)*I,r[5]=(1-(h+p))*I,r[6]=(m+A)*I,r[7]=0,r[8]=(g+b)*P,r[9]=(m-A)*P,r[10]=(1-(h+v))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ji.set(r[0],r[1],r[2]).length();const o=ji.set(r[4],r[5],r[6]).length(),a=ji.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],on.copy(this);const c=1/s,u=1/o,f=1/a;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=f,on.elements[9]*=f,on.elements[10]*=f,t.setFromRotationMatrix(on),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Hn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let d,g;if(a===Hn)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===yo)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Hn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,d=(i+r)*u;let g,v;if(a===Hn)g=(o+s)*f,v=-2*f;else if(a===yo)g=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ji=new z,on=new qe,qv=new z(0,0,0),Yv=new z(1,1,1),Qn=new z,Ds=new z,Gt=new z,qu=new qe,Yu=new br;class wn{constructor(e=0,t=0,i=0,r=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return qu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yu.setFromEuler(this),this.setFromQuaternion(Yu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class Ud{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $v=0;const $u=new z,Ki=new br,Ln=new qe,Ls=new z,Nr=new z,jv=new z,Kv=new br,ju=new z(1,0,0),Ku=new z(0,1,0),Zu=new z(0,0,1),Ju={type:"added"},Zv={type:"removed"},Zi={type:"childadded",child:null},_a={type:"childremoved",child:null};class gt extends Er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$v++}),this.uuid=pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new z,t=new wn,i=new br,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qe},normalMatrix:{value:new ke}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ud,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(ju,e)}rotateY(e){return this.rotateOnAxis(Ku,e)}rotateZ(e){return this.rotateOnAxis(Zu,e)}translateOnAxis(e,t){return $u.copy(e).applyQuaternion(this.quaternion),this.position.add($u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ju,e)}translateY(e){return this.translateOnAxis(Ku,e)}translateZ(e){return this.translateOnAxis(Zu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ls.copy(e):Ls.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Nr,Ls,this.up):Ln.lookAt(Ls,Nr,this.up),this.quaternion.setFromRotationMatrix(Ln),r&&(Ln.extractRotation(r.matrixWorld),Ki.setFromRotationMatrix(Ln),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ju),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zv),_a.child=e,this.dispatchEvent(_a),_a.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ju),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,e,jv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,Kv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?{min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}:void 0,boundingSphere:a.boundingSphere?{radius:a.boundingSphere.radius,center:a.boundingSphere.center.toArray()}:void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}gt.DEFAULT_UP=new z(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new z,Un=new z,va=new z,Nn=new z,Ji=new z,Qi=new z,Qu=new z,xa=new z,Ma=new z,Sa=new z,ya=new Qe,Ea=new Qe,ba=new Qe;class un{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),an.subVectors(e,t),r.cross(an);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){an.subVectors(r,t),Un.subVectors(i,t),va.subVectors(e,t);const o=an.dot(an),a=an.dot(Un),l=an.dot(va),c=Un.dot(Un),u=Un.dot(va),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Nn.x),l.addScaledVector(o,Nn.y),l.addScaledVector(a,Nn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return ya.setScalar(0),Ea.setScalar(0),ba.setScalar(0),ya.fromBufferAttribute(e,t),Ea.fromBufferAttribute(e,i),ba.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ya,s.x),o.addScaledVector(Ea,s.y),o.addScaledVector(ba,s.z),o}static isFrontFacing(e,t,i,r){return an.subVectors(i,t),Un.subVectors(e,t),an.cross(Un).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),an.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return un.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ji.subVectors(r,i),Qi.subVectors(s,i),xa.subVectors(e,i);const l=Ji.dot(xa),c=Qi.dot(xa);if(l<=0&&c<=0)return t.copy(i);Ma.subVectors(e,r);const u=Ji.dot(Ma),f=Qi.dot(Ma);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ji,o);Sa.subVectors(e,s);const d=Ji.dot(Sa),g=Qi.dot(Sa);if(g>=0&&d<=g)return t.copy(s);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Qi,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Qu.subVectors(s,r),a=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(Qu,a);const p=1/(m+v+h);return o=v*p,a=h*p,t.copy(i).addScaledVector(Ji,o).addScaledVector(Qi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Us={h:0,s:0,l:0};function Ta(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=Ec(e,1),t=Xe(t,0,1),i=Xe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ta(o,s,e+1/3),this.g=Ta(o,s,e),this.b=Ta(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=Qt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const i=Nd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wn(e.r),this.g=Wn(e.g),this.b=Wn(e.b),this}copyLinearToSRGB(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return Ze.fromWorkingColorSpace(wt.copy(this),e),Math.round(Xe(wt.r*255,0,255))*65536+Math.round(Xe(wt.g*255,0,255))*256+Math.round(Xe(wt.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(wt.copy(this),t);const i=wt.r,r=wt.g,s=wt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=Qt){Ze.fromWorkingColorSpace(wt.copy(this),e);const t=wt.r,i=wt.g,r=wt.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(Us);const i=Qr(ei.h,Us.h,t),r=Qr(ei.s,Us.s,t),s=Qr(ei.l,Us.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wt=new Ye;Ye.NAMES=Nd;let Jv=0;class Hi extends Er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=pn(),this.name="",this.type="Material",this.blending=hr,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rl,this.blendDst=sl,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hr&&(i.blending=this.blending),this.side!==hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rl&&(i.blendSrc=this.blendSrc),this.blendDst!==sl&&(i.blendDst=this.blendDst),this.blendEquation!==Ii&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_r&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Tc extends Hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Sd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new z,Ns=new Je;let Qv=0;class tn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Wl,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ns.fromBufferAttribute(this,t),Ns.applyMatrix3(e),this.setXY(t,Ns.x,Ns.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=cn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wl&&(e.usage=this.usage),e}}class Fd extends tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Od extends tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Xn extends tn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ex=0;const Jt=new qe,Aa=new gt,er=new z,Wt=new _i,Fr=new _i,yt=new z;class $n extends Er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dd(e)?Od:Fd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,i){return Jt.makeTranslation(e,t,i),this.applyMatrix4(Jt),this}scale(e,t,i){return Jt.makeScale(e,t,i),this.applyMatrix4(Jt),this}lookAt(e){return Aa.lookAt(e),Aa.updateMatrix(),this.applyMatrix4(Aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Wt.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Fr.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(Wt.min,Fr.min),Wt.expandByPoint(yt),yt.addVectors(Wt.max,Fr.max),Wt.expandByPoint(yt)):(Wt.expandByPoint(Fr.min),Wt.expandByPoint(Fr.max))}Wt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(yt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)yt.fromBufferAttribute(a,c),l&&(er.fromBufferAttribute(e,c),yt.add(er)),r=Math.max(r,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let B=0;B<i.count;B++)a[B]=new z,l[B]=new z;const c=new z,u=new z,f=new z,h=new Je,d=new Je,g=new Je,v=new z,m=new z;function p(B,T,E){c.fromBufferAttribute(i,B),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,E),h.fromBufferAttribute(s,B),d.fromBufferAttribute(s,T),g.fromBufferAttribute(s,E),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(L),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(L),a[B].add(v),a[T].add(v),a[E].add(v),l[B].add(m),l[T].add(m),l[E].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let B=0,T=A.length;B<T;++B){const E=A[B],L=E.start,ee=E.count;for(let q=L,ne=L+ee;q<ne;q+=3)p(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const b=new z,y=new z,D=new z,I=new z;function P(B){D.fromBufferAttribute(r,B),I.copy(D);const T=a[B];b.copy(T),b.sub(D.multiplyScalar(D.dot(T))).normalize(),y.crossVectors(I,T);const L=y.dot(l[B])<0?-1:1;o.setXYZW(B,b.x,b.y,b.z,L)}for(let B=0,T=A.length;B<T;++B){const E=A[B],L=E.start,ee=E.count;for(let q=L,ne=L+ee;q<ne;q+=3)P(e.getX(q+0)),P(e.getX(q+1)),P(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new tn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $n,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ef=new qe,bi=new zo,Fs=new Yn,tf=new z,Os=new z,Bs=new z,zs=new z,wa=new z,Vs=new z,nf=new z,Hs=new z;class $t extends gt{constructor(e=new $n,t=new Tc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Vs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(wa.fromBufferAttribute(f,e),o?Vs.addScaledVector(wa,u):Vs.addScaledVector(wa.sub(t),u))}t.add(Vs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fs.copy(i.boundingSphere),Fs.applyMatrix4(s),bi.copy(e.ray).recast(e.near),!(Fs.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Fs,tf)===null||bi.origin.distanceToSquared(tf)>(e.far-e.near)**2))&&(ef.copy(s).invert(),bi.copy(e.ray).applyMatrix4(ef),!(i.boundingBox!==null&&bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,bi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=o[m.materialIndex],A=Math.max(m.start,d.start),b=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=A,D=b;y<D;y+=3){const I=a.getX(y),P=a.getX(y+1),B=a.getX(y+2);r=ks(this,p,e,i,c,u,f,I,P,B),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const A=a.getX(m),b=a.getX(m+1),y=a.getX(m+2);r=ks(this,o,e,i,c,u,f,A,b,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=o[m.materialIndex],A=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=A,D=b;y<D;y+=3){const I=y,P=y+1,B=y+2;r=ks(this,p,e,i,c,u,f,I,P,B),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const A=m,b=m+1,y=m+2;r=ks(this,o,e,i,c,u,f,A,b,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function tx(n,e,t,i,r,s,o,a){let l;if(e.side===Ht?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===hi,a),l===null)return null;Hs.copy(a),Hs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Hs);return c<t.near||c>t.far?null:{distance:c,point:Hs.clone(),object:n}}function ks(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Os),n.getVertexPosition(l,Bs),n.getVertexPosition(c,zs);const u=tx(n,e,t,i,Os,Bs,zs,nf);if(u){const f=new z;un.getBarycoord(nf,Os,Bs,zs,f),r&&(u.uv=un.getInterpolatedAttribute(r,a,l,c,f,new Je)),s&&(u.uv1=un.getInterpolatedAttribute(s,a,l,c,f,new Je)),o&&(u.normal=un.getInterpolatedAttribute(o,a,l,c,f,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new z,materialIndex:0};un.getNormal(Os,Bs,zs,h.normal),u.face=h,u.barycoord=f}return u}class Tr extends $n{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Xn(c,3)),this.setAttribute("normal",new Xn(u,3)),this.setAttribute("uv",new Xn(f,2));function g(v,m,p,A,b,y,D,I,P,B,T){const E=y/P,L=D/B,ee=y/2,q=D/2,ne=I/2,fe=P+1,K=B+1;let re=0,H=0;const me=new z;for(let xe=0;xe<K;xe++){const Ae=xe*L-q;for(let Ie=0;Ie<fe;Ie++){const $e=Ie*E-ee;me[v]=$e*A,me[m]=Ae*b,me[p]=ne,c.push(me.x,me.y,me.z),me[v]=0,me[m]=0,me[p]=I>0?1:-1,u.push(me.x,me.y,me.z),f.push(Ie/P),f.push(1-xe/B),re+=1}}for(let xe=0;xe<B;xe++)for(let Ae=0;Ae<P;Ae++){const Ie=h+Ae+fe*xe,$e=h+Ae+fe*(xe+1),te=h+(Ae+1)+fe*(xe+1),de=h+(Ae+1)+fe*xe;l.push(Ie,$e,de),l.push($e,te,de),H+=6}a.addGroup(d,H,T),d+=H,h+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Nt(n){const e={};for(let t=0;t<n.length;t++){const i=yr(n[t]);for(const r in i)e[r]=i[r]}return e}function nx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Bd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const ix={clone:yr,merge:Nt};var rx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends Hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rx,this.fragmentShader=sx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.uniformsGroups=nx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class zd extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=Hn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new z,rf=new Je,sf=new Je;class Vt extends zd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ti.x,ti.y).multiplyScalar(-e/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ti.x,ti.y).multiplyScalar(-e/ti.z)}getViewSize(e,t){return this.getViewBounds(e,rf,sf),t.subVectors(sf,rf)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Jr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const tr=-90,nr=1;class ox extends gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vt(tr,nr,e,t);r.layers=this.layers,this.add(r);const s=new Vt(tr,nr,e,t);s.layers=this.layers,this.add(s);const o=new Vt(tr,nr,e,t);o.layers=this.layers,this.add(o);const a=new Vt(tr,nr,e,t);a.layers=this.layers,this.add(a);const l=new Vt(tr,nr,e,t);l.layers=this.layers,this.add(l);const c=new Vt(tr,nr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Hn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Vd extends Pt{constructor(e=[],t=vr,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ax extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Vd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:En}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Tr(5,5,5),s=new di({name:"CubemapFromEquirect",uniforms:yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:ci});s.uniforms.tEquirect.value=t;const o=new $t(r,s),a=t.minFilter;return t.minFilter===Ui&&(t.minFilter=En),new ox(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Gs extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lx={type:"move"};class Ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lx)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Gs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class cx extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class $E{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wl,this.updateRanges=[],this.version=0,this.uuid=pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Lt=new z;class Hd{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=cn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=cn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new tn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Hd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const of=new z,af=new Qe,lf=new Qe,ux=new z,cf=new qe,Ws=new z,Ca=new Yn,uf=new qe,Pa=new zo;class jE extends $t{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Nu,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new _i),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ws),this.boundingBox.expandByPoint(Ws)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Yn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ws),this.boundingSphere.expandByPoint(Ws)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ca.copy(this.boundingSphere),Ca.applyMatrix4(r),e.ray.intersectsSphere(Ca)!==!1&&(uf.copy(r).invert(),Pa.copy(e.ray).applyMatrix4(uf),!(this.boundingBox!==null&&Pa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Pa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Qe,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Nu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ov?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;af.fromBufferAttribute(r.attributes.skinIndex,e),lf.fromBufferAttribute(r.attributes.skinWeight,e),of.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=lf.getComponent(s);if(o!==0){const a=af.getComponent(s);cf.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(ux.copy(of).applyMatrix4(cf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class fx extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class kd extends Pt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=jt,u=jt,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ff=new qe,hx=new qe;class Gd{constructor(e=[],t=[]){this.uuid=pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new qe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:hx;ff.multiplyMatrices(a,t[s]),ff.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Gd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new kd(t,e,e,en,fn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new fx),this.bones.push(o),this.boneInverses.push(new qe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class hf extends tn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ir=new qe,df=new qe,Xs=[],pf=new _i,dx=new qe,Or=new $t,Br=new Yn;class KE extends $t{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hf(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,dx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _i),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ir),pf.copy(e.boundingBox).applyMatrix4(ir),this.boundingBox.union(pf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ir),Br.copy(e.boundingSphere).applyMatrix4(ir),this.boundingSphere.union(Br)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Or.geometry=this.geometry,Or.material=this.material,Or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Br.copy(this.boundingSphere),Br.applyMatrix4(i),e.ray.intersectsSphere(Br)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ir),df.multiplyMatrices(i,ir),Or.matrixWorld=df,Or.raycast(e,Xs);for(let o=0,a=Xs.length;o<a;o++){const l=Xs[o];l.instanceId=s,l.object=this,t.push(l)}Xs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new hf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new kd(new Float32Array(r*this.count),r,this.count,xc,fn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ia=new z,px=new z,mx=new ke;class Ci{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ia.subVectors(i,t).cross(px.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ia),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||mx.getNormalMatrix(e),r=this.coplanarPoint(Ia).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new Yn,qs=new z;class Ac{constructor(e=new Ci,t=new Ci,i=new Ci,r=new Ci,s=new Ci,o=new Ci){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Hn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],g=r[9],v=r[10],m=r[11],p=r[12],A=r[13],b=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,m-d,y-p).normalize(),i[1].setComponents(l+s,h+c,m+d,y+p).normalize(),i[2].setComponents(l+o,h+u,m+g,y+A).normalize(),i[3].setComponents(l-o,h-u,m-g,y-A).normalize(),i[4].setComponents(l-a,h-f,m-v,y-b).normalize(),t===Hn)i[5].setComponents(l+a,h+f,m+v,y+b).normalize();else if(t===yo)i[5].setComponents(a,f,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(qs.x=r.normal.x>0?e.max.x:e.min.x,qs.y=r.normal.y>0?e.max.y:e.min.y,qs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gx extends Hi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Eo=new z,bo=new z,mf=new qe,zr=new zo,Ys=new Yn,Da=new z,gf=new z;class Wd extends gt{constructor(e=new $n,t=new gx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Eo.fromBufferAttribute(t,r-1),bo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Eo.distanceTo(bo);e.setAttribute("lineDistance",new Xn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ys.copy(i.boundingSphere),Ys.applyMatrix4(r),Ys.radius+=s,e.ray.intersectsSphere(Ys)===!1)return;mf.copy(r).invert(),zr.copy(e.ray).applyMatrix4(mf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=c){const p=u.getX(v),A=u.getX(v+1),b=$s(this,e,zr,l,p,A,v);b&&t.push(b)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(d),p=$s(this,e,zr,l,v,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=c){const p=$s(this,e,zr,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=$s(this,e,zr,l,g-1,d,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function $s(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(Eo.fromBufferAttribute(a,r),bo.fromBufferAttribute(a,s),t.distanceSqToSegment(Eo,bo,Da,gf)>i)return;Da.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Da);if(!(c<e.near||c>e.far))return{distance:c,point:gf.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const _f=new z,vf=new z;class ZE extends Wd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)_f.fromBufferAttribute(t,r),vf.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+_f.distanceTo(vf);e.setAttribute("lineDistance",new Xn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class JE extends Wd{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class _x extends Hi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xf=new qe,Xl=new zo,js=new Yn,Ks=new z;class QE extends gt{constructor(e=new $n,t=new _x){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),js.copy(i.boundingSphere),js.applyMatrix4(r),js.radius+=s,e.ray.intersectsSphere(js)===!1)return;xf.copy(r).invert(),Xl.copy(e.ray).applyMatrix4(xf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,v=d;g<v;g++){const m=c.getX(g);Ks.fromBufferAttribute(f,m),Mf(Ks,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,v=d;g<v;g++)Ks.fromBufferAttribute(f,g),Mf(Ks,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Mf(n,e,t,i,r,s,o){const a=Xl.distanceSqToPoint(n);if(a<t){const l=new z;Xl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Xd extends Pt{constructor(e,t,i=Oi,r,s,o,a=jt,l=jt,c,u=us){if(u!==us&&u!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Vo extends $n{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const A=p*h-o;for(let b=0;b<c;b++){const y=b*f-s;g.push(y,-A,0),v.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){const b=A+c*p,y=A+c*(p+1),D=A+1+c*(p+1),I=A+1+c*p;d.push(b,y,I),d.push(y,D,I)}this.setIndex(d),this.setAttribute("position",new Xn(g,3)),this.setAttribute("normal",new Xn(v,3)),this.setAttribute("uv",new Xn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.width,e.height,e.widthSegments,e.heightSegments)}}class vx extends Hi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pd,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class eb extends vx{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class xx extends Hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Mx extends Hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Zs(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Sx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function yx(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Sf(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function qd(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push(...o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class Ho{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ex extends Ho{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fu,endingEnd:Fu}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ou:s=e,a=2*t-i;break;case Bu:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ou:o=e,l=2*i-t;break;case Bu:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(i-t)/(r-t),v=g*g,m=v*g,p=-h*m+2*h*v-h*g,A=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*g+1,b=(-1-d)*m+(1.5+d)*v+.5*g,y=d*m-d*v;for(let D=0;D!==a;++D)s[D]=p*o[u+D]+A*o[c+D]+b*o[l+D]+y*o[f+D];return s}}class bx extends Ho{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),f=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*u;return s}}class Tx extends Ho{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class gn{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zs(t,this.TimeBufferType),this.values=Zs(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Zs(e.times,Array),values:Zs(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Tx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ex(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Mo:t=this.InterpolantFactoryMethodDiscrete;break;case Gl:t=this.InterpolantFactoryMethodLinear;break;case la:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mo;case this.InterpolantFactoryMethodLinear:return Gl;case this.InterpolantFactoryMethodSmooth:return la}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&Sx(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===la,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const f=a*i,h=f-i,d=f+i;for(let g=0;g!==i;++g){const v=t[f+g];if(v!==t[h+g]||v!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*i,h=o*i;for(let d=0;d!==i;++d)t[h+d]=t[f+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=Gl;class Ar extends gn{constructor(e,t,i){super(e,t,i)}}Ar.prototype.ValueTypeName="bool";Ar.prototype.ValueBufferType=Array;Ar.prototype.DefaultInterpolation=Mo;Ar.prototype.InterpolantFactoryMethodLinear=void 0;Ar.prototype.InterpolantFactoryMethodSmooth=void 0;class Yd extends gn{constructor(e,t,i,r){super(e,t,i,r)}}Yd.prototype.ValueTypeName="color";class To extends gn{constructor(e,t,i,r){super(e,t,i,r)}}To.prototype.ValueTypeName="number";class Ax extends Ho{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)br.slerpFlat(s,0,o,c-a,o,c,l);return s}}class ko extends gn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Ax(this.times,this.values,this.getValueSize(),e)}}ko.prototype.ValueTypeName="quaternion";ko.prototype.InterpolantFactoryMethodSmooth=void 0;class wr extends gn{constructor(e,t,i){super(e,t,i)}}wr.prototype.ValueTypeName="string";wr.prototype.ValueBufferType=Array;wr.prototype.DefaultInterpolation=Mo;wr.prototype.InterpolantFactoryMethodLinear=void 0;wr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ao extends gn{constructor(e,t,i,r){super(e,t,i,r)}}Ao.prototype.ValueTypeName="vector";class tb{constructor(e="",t=-1,i=[],r=lv){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=pn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(Rx(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(gn.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=yx(l);l=Sf(l,1,u),c=Sf(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new To(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let h=r[f];h||(r[f]=h=[]),h.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(f,h,d,g,v){if(d.length!==0){const m=[],p=[];qd(d,m,p,g),m.length!==0&&v.push(new f(h,m,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let v=0;v<h[g].morphTargets.length;v++)d[h[g].morphTargets[v]]=-1;for(const v in d){const m=[],p=[];for(let A=0;A!==h[g].morphTargets.length;++A){const b=h[g];m.push(b.time),p.push(b.morphTarget===v?1:0)}r.push(new To(".morphTargetInfluence["+v+"]",m,p))}l=d.length*o}else{const d=".bones["+t[f].name+"]";i(Ao,d+".position",h,"pos",r),i(ko,d+".quaternion",h,"rot",r),i(Ao,d+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function wx(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return To;case"vector":case"vector2":case"vector3":case"vector4":return Ao;case"color":return Yd;case"quaternion":return ko;case"bool":case"boolean":return Ar;case"string":return wr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Rx(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=wx(n.type);if(n.times===void 0){const t=[],i=[];qd(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const ai={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Cx{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const Px=new Cx;class Ms{constructor(e){this.manager=e!==void 0?e:Px,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ms.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fn={};class Ix extends Error{constructor(e,t){super(e),this.response=t}}class nb extends Ms{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ai.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Fn[e]!==void 0){Fn[e].push({onLoad:t,onProgress:i,onError:r});return}Fn[e]=[],Fn[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Fn[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,g=d!==0;let v=0;const m=new ReadableStream({start(p){A();function A(){f.read().then(({done:b,value:y})=>{if(b)p.close();else{v+=y.byteLength;const D=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:d});for(let I=0,P=u.length;I<P;I++){const B=u[I];B.onProgress&&B.onProgress(D)}p.enqueue(y),A()}},b=>{p.error(b)})}}});return new Response(m)}else throw new Ix(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{ai.add(e,c);const u=Fn[e];delete Fn[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Fn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Fn[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Dx extends Ms{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ai.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=hs("img");function l(){u(),ai.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Lx extends Ms{constructor(e){super(e)}load(e,t,i,r){const s=new Pt,o=new Dx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Go extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const La=new qe,yf=new z,Ef=new z;class wc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ac,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;yf.setFromMatrixPosition(e.matrixWorld),t.position.copy(yf),Ef.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ef),t.updateMatrixWorld(),La.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(La),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(La)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ux extends wc{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Sr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ib extends Go{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Ux}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const bf=new qe,Vr=new z,Ua=new z;class Nx extends wc{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Vr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Vr),Ua.copy(i.position),Ua.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ua),i.updateMatrixWorld(),r.makeTranslation(-Vr.x,-Vr.y,-Vr.z),bf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bf)}}class Fx extends Go{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Nx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class $d extends zd{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ox extends wc{constructor(){super(new $d(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rb extends Go{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Ox}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class sb extends Go{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ob{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class ab extends Ms{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ai.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return ai.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),ai.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});ai.add(e,l),s.manager.itemStart(e)}}class Bx extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class lb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Tf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Tf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Tf(){return performance.now()}const Rc="\\[\\]\\.:\\/",zx=new RegExp("["+Rc+"]","g"),Cc="[^"+Rc+"]",Vx="[^"+Rc.replace("\\.","")+"]",Hx=/((?:WC+[\/:])*)/.source.replace("WC",Cc),kx=/(WCOD+)?/.source.replace("WCOD",Vx),Gx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cc),Wx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cc),Xx=new RegExp("^"+Hx+kx+Gx+Wx+"$"),qx=["material","materials","bones","map"];class Yx{constructor(e,t,i){const r=i||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class lt{constructor(e,t,i){this.path=t,this.parsedPath=i||lt.parseTrackName(t),this.node=lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new lt.Composite(e,t,i):new lt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zx,"")}static parseTrackName(e){const t=Xx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);qx.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}lt.Composite=Yx;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Af(n,e,t,i){const r=$x(i);switch(t){case Ad:return n*e;case xc:return n*e/r.components*r.byteLength;case Mc:return n*e/r.components*r.byteLength;case Rd:return n*e*2/r.components*r.byteLength;case Sc:return n*e*2/r.components*r.byteLength;case wd:return n*e*3/r.components*r.byteLength;case en:return n*e*4/r.components*r.byteLength;case yc:return n*e*4/r.components*r.byteLength;case so:case oo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ao:case lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vl:case Ml:return Math.max(n,16)*Math.max(e,8)/4;case _l:case xl:return Math.max(n,8)*Math.max(e,8)/2;case Sl:case yl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case El:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Tl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Al:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case wl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Cl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Pl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Il:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Dl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Nl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Fl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ol:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case co:case Bl:case zl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Cd:case Vl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Hl:case kl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $x(n){switch(n){case An:case Ed:return{byteLength:1,components:1};case ls:case bd:case xs:return{byteLength:2,components:1};case _c:case vc:return{byteLength:2,components:4};case Oi:case gc:case fn:return{byteLength:4,components:1};case Td:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jd(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function jx(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],v=f[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,f[h]=v)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const v=f[d];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Kx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,t0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,n0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,i0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,r0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,s0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,o0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,a0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,l0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,c0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,u0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,g0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,v0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,x0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,M0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,S0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,y0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,b0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,T0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,A0="gl_FragColor = linearToOutputTexel( gl_FragColor );",w0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,R0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,C0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,P0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,I0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,D0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,L0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,N0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,F0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,O0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,B0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,V0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,H0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,k0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,G0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,W0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,X0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,q0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Y0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,j0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,K0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Z0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,J0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Q0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_M=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,MM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,EM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,TM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,DM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,LM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,UM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,NM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,OM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,GM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,WM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,XM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$M=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,KM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,iS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,uS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_S=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,MS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ES=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:Kx,alphahash_pars_fragment:Zx,alphamap_fragment:Jx,alphamap_pars_fragment:Qx,alphatest_fragment:e0,alphatest_pars_fragment:t0,aomap_fragment:n0,aomap_pars_fragment:i0,batching_pars_vertex:r0,batching_vertex:s0,begin_vertex:o0,beginnormal_vertex:a0,bsdfs:l0,iridescence_fragment:c0,bumpmap_pars_fragment:u0,clipping_planes_fragment:f0,clipping_planes_pars_fragment:h0,clipping_planes_pars_vertex:d0,clipping_planes_vertex:p0,color_fragment:m0,color_pars_fragment:g0,color_pars_vertex:_0,color_vertex:v0,common:x0,cube_uv_reflection_fragment:M0,defaultnormal_vertex:S0,displacementmap_pars_vertex:y0,displacementmap_vertex:E0,emissivemap_fragment:b0,emissivemap_pars_fragment:T0,colorspace_fragment:A0,colorspace_pars_fragment:w0,envmap_fragment:R0,envmap_common_pars_fragment:C0,envmap_pars_fragment:P0,envmap_pars_vertex:I0,envmap_physical_pars_fragment:k0,envmap_vertex:D0,fog_vertex:L0,fog_pars_vertex:U0,fog_fragment:N0,fog_pars_fragment:F0,gradientmap_pars_fragment:O0,lightmap_pars_fragment:B0,lights_lambert_fragment:z0,lights_lambert_pars_fragment:V0,lights_pars_begin:H0,lights_toon_fragment:G0,lights_toon_pars_fragment:W0,lights_phong_fragment:X0,lights_phong_pars_fragment:q0,lights_physical_fragment:Y0,lights_physical_pars_fragment:$0,lights_fragment_begin:j0,lights_fragment_maps:K0,lights_fragment_end:Z0,logdepthbuf_fragment:J0,logdepthbuf_pars_fragment:Q0,logdepthbuf_pars_vertex:eM,logdepthbuf_vertex:tM,map_fragment:nM,map_pars_fragment:iM,map_particle_fragment:rM,map_particle_pars_fragment:sM,metalnessmap_fragment:oM,metalnessmap_pars_fragment:aM,morphinstance_vertex:lM,morphcolor_vertex:cM,morphnormal_vertex:uM,morphtarget_pars_vertex:fM,morphtarget_vertex:hM,normal_fragment_begin:dM,normal_fragment_maps:pM,normal_pars_fragment:mM,normal_pars_vertex:gM,normal_vertex:_M,normalmap_pars_fragment:vM,clearcoat_normal_fragment_begin:xM,clearcoat_normal_fragment_maps:MM,clearcoat_pars_fragment:SM,iridescence_pars_fragment:yM,opaque_fragment:EM,packing:bM,premultiplied_alpha_fragment:TM,project_vertex:AM,dithering_fragment:wM,dithering_pars_fragment:RM,roughnessmap_fragment:CM,roughnessmap_pars_fragment:PM,shadowmap_pars_fragment:IM,shadowmap_pars_vertex:DM,shadowmap_vertex:LM,shadowmask_pars_fragment:UM,skinbase_vertex:NM,skinning_pars_vertex:FM,skinning_vertex:OM,skinnormal_vertex:BM,specularmap_fragment:zM,specularmap_pars_fragment:VM,tonemapping_fragment:HM,tonemapping_pars_fragment:kM,transmission_fragment:GM,transmission_pars_fragment:WM,uv_pars_fragment:XM,uv_pars_vertex:qM,uv_vertex:YM,worldpos_vertex:$M,background_vert:jM,background_frag:KM,backgroundCube_vert:ZM,backgroundCube_frag:JM,cube_vert:QM,cube_frag:eS,depth_vert:tS,depth_frag:nS,distanceRGBA_vert:iS,distanceRGBA_frag:rS,equirect_vert:sS,equirect_frag:oS,linedashed_vert:aS,linedashed_frag:lS,meshbasic_vert:cS,meshbasic_frag:uS,meshlambert_vert:fS,meshlambert_frag:hS,meshmatcap_vert:dS,meshmatcap_frag:pS,meshnormal_vert:mS,meshnormal_frag:gS,meshphong_vert:_S,meshphong_frag:vS,meshphysical_vert:xS,meshphysical_frag:MS,meshtoon_vert:SS,meshtoon_frag:yS,points_vert:ES,points_frag:bS,shadow_vert:TS,shadow_frag:AS,sprite_vert:wS,sprite_frag:RS},_e={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Sn={basic:{uniforms:Nt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Nt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ye(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Nt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Nt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Nt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ye(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Nt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Nt([_e.points,_e.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Nt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Nt([_e.common,_e.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Nt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Nt([_e.sprite,_e.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Nt([_e.common,_e.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Nt([_e.lights,_e.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Sn.physical={uniforms:Nt([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Js={r:0,b:0,g:0},Ai=new wn,CS=new qe;function PS(n,e,t,i,r,s,o){const a=new Ye(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function v(b){let y=!1;const D=g(b);D===null?p(a,l):D&&D.isColor&&(p(D,1),y=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,y){const D=g(y);D&&(D.isCubeTexture||D.mapping===Bo)?(u===void 0&&(u=new $t(new Tr(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:yr(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,P,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ai.copy(y.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),u.material.uniforms.envMap.value=D,u.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(CS.makeRotationFromEuler(Ai)),u.material.toneMapped=Ze.getTransfer(D.colorSpace)!==at,(f!==D||h!==D.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=D,h=D.version,d=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new $t(new Vo(2,2),new di({name:"BackgroundMaterial",uniforms:yr(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(D.colorSpace)!==at,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(f!==D||h!==D.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=D,h=D.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,y){b.getRGB(Js,Bd(n)),i.buffers.color.setClear(Js.r,Js.g,Js.b,y,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:v,addToRenderList:m,dispose:A}}function IS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(E,L,ee,q,ne){let fe=!1;const K=f(q,ee,L);s!==K&&(s=K,c(s.object)),fe=d(E,q,ee,ne),fe&&g(E,q,ee,ne),ne!==null&&e.update(ne,n.ELEMENT_ARRAY_BUFFER),(fe||o)&&(o=!1,y(E,L,ee,q),ne!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function f(E,L,ee){const q=ee.wireframe===!0;let ne=i[E.id];ne===void 0&&(ne={},i[E.id]=ne);let fe=ne[L.id];fe===void 0&&(fe={},ne[L.id]=fe);let K=fe[q];return K===void 0&&(K=h(l()),fe[q]=K),K}function h(E){const L=[],ee=[],q=[];for(let ne=0;ne<t;ne++)L[ne]=0,ee[ne]=0,q[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:ee,attributeDivisors:q,object:E,attributes:{},index:null}}function d(E,L,ee,q){const ne=s.attributes,fe=L.attributes;let K=0;const re=ee.getAttributes();for(const H in re)if(re[H].location>=0){const xe=ne[H];let Ae=fe[H];if(Ae===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(Ae=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(Ae=E.instanceColor)),xe===void 0||xe.attribute!==Ae||Ae&&xe.data!==Ae.data)return!0;K++}return s.attributesNum!==K||s.index!==q}function g(E,L,ee,q){const ne={},fe=L.attributes;let K=0;const re=ee.getAttributes();for(const H in re)if(re[H].location>=0){let xe=fe[H];xe===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(xe=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(xe=E.instanceColor));const Ae={};Ae.attribute=xe,xe&&xe.data&&(Ae.data=xe.data),ne[H]=Ae,K++}s.attributes=ne,s.attributesNum=K,s.index=q}function v(){const E=s.newAttributes;for(let L=0,ee=E.length;L<ee;L++)E[L]=0}function m(E){p(E,0)}function p(E,L){const ee=s.newAttributes,q=s.enabledAttributes,ne=s.attributeDivisors;ee[E]=1,q[E]===0&&(n.enableVertexAttribArray(E),q[E]=1),ne[E]!==L&&(n.vertexAttribDivisor(E,L),ne[E]=L)}function A(){const E=s.newAttributes,L=s.enabledAttributes;for(let ee=0,q=L.length;ee<q;ee++)L[ee]!==E[ee]&&(n.disableVertexAttribArray(ee),L[ee]=0)}function b(E,L,ee,q,ne,fe,K){K===!0?n.vertexAttribIPointer(E,L,ee,ne,fe):n.vertexAttribPointer(E,L,ee,q,ne,fe)}function y(E,L,ee,q){v();const ne=q.attributes,fe=ee.getAttributes(),K=L.defaultAttributeValues;for(const re in fe){const H=fe[re];if(H.location>=0){let me=ne[re];if(me===void 0&&(re==="instanceMatrix"&&E.instanceMatrix&&(me=E.instanceMatrix),re==="instanceColor"&&E.instanceColor&&(me=E.instanceColor)),me!==void 0){const xe=me.normalized,Ae=me.itemSize,Ie=e.get(me);if(Ie===void 0)continue;const $e=Ie.buffer,te=Ie.type,de=Ie.bytesPerElement,Me=te===n.INT||te===n.UNSIGNED_INT||me.gpuType===gc;if(me.isInterleavedBufferAttribute){const U=me.data,ie=U.stride,oe=me.offset;if(U.isInstancedInterleavedBuffer){for(let ae=0;ae<H.locationSize;ae++)p(H.location+ae,U.meshPerAttribute);E.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let ae=0;ae<H.locationSize;ae++)m(H.location+ae);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let ae=0;ae<H.locationSize;ae++)b(H.location+ae,Ae/H.locationSize,te,xe,ie*de,(oe+Ae/H.locationSize*ae)*de,Me)}else{if(me.isInstancedBufferAttribute){for(let U=0;U<H.locationSize;U++)p(H.location+U,me.meshPerAttribute);E.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let U=0;U<H.locationSize;U++)m(H.location+U);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let U=0;U<H.locationSize;U++)b(H.location+U,Ae/H.locationSize,te,xe,Ae*de,Ae/H.locationSize*U*de,Me)}}else if(K!==void 0){const xe=K[re];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(H.location,xe);break;case 3:n.vertexAttrib3fv(H.location,xe);break;case 4:n.vertexAttrib4fv(H.location,xe);break;default:n.vertexAttrib1fv(H.location,xe)}}}}A()}function D(){B();for(const E in i){const L=i[E];for(const ee in L){const q=L[ee];for(const ne in q)u(q[ne].object),delete q[ne];delete L[ee]}delete i[E]}}function I(E){if(i[E.id]===void 0)return;const L=i[E.id];for(const ee in L){const q=L[ee];for(const ne in q)u(q[ne].object),delete q[ne];delete L[ee]}delete i[E.id]}function P(E){for(const L in i){const ee=i[L];if(ee[E.id]===void 0)continue;const q=ee[E.id];for(const ne in q)u(q[ne].object),delete q[ne];delete ee[E.id]}}function B(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:B,resetDefaultState:T,dispose:D,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:A}}function DS(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v]*h[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function LS(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==en&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const B=P===xs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==An&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==fn&&!B)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:D,maxSamples:I}}function US(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ci,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const A=s?0:i,b=A*4;let y=p.clippingState||null;l.value=y,y=u(g,h,b,d);for(let D=0;D!==b;++D)y[D]=t[D];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,A=h.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,y=d;b!==v;++b,y+=4)o.copy(f[b]).applyMatrix4(A,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function NS(n){let e=new WeakMap;function t(o,a){return a===dl?o.mapping=vr:a===pl&&(o.mapping=xr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===dl||a===pl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ax(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const ar=4,wf=[.125,.215,.35,.446,.526,.582],Di=20,Na=new $d,Rf=new Ye;let Fa=null,Oa=0,Ba=0,za=!1;const Pi=(1+Math.sqrt(5))/2,rr=1/Pi,Cf=[new z(-Pi,rr,0),new z(Pi,rr,0),new z(-rr,0,Pi),new z(rr,0,Pi),new z(0,Pi,-rr),new z(0,Pi,rr),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],FS=new z;class Pf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=FS}=s;Fa=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Df(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fa,Oa,Ba),this._renderer.xr.enabled=za,e.scissorTest=!1,Qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vr||e.mapping===xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fa=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:xs,format:en,colorSpace:Mr,depthBuffer:!1},r=If(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=If(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=OS(s)),this._blurMaterial=BS(s,e,t)}return r}_compileMaterial(e){const t=new $t(this._lodPlanes[0],e);this._renderer.compile(t,Na)}_sceneToCubeUV(e,t,i,r,s){const l=new Vt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Rf),f.toneMapping=ui,f.autoClear=!1;const g=new Tc({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),v=new $t(new Tr,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(Rf),m=!0);for(let A=0;A<6;A++){const b=A%3;b===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[A],s.y,s.z)):b===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[A]));const y=this._cubeSize;Qs(r,b*y,A>2?y:0,y,y),f.setRenderTarget(r),m&&f.render(v,l),f.render(e,l)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===vr||e.mapping===xr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Df());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new $t(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Qs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Na)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Cf[(r-s-1)%Cf.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new $t(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Di-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):Di;m>Di&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Di}`);const p=[];let A=0;for(let P=0;P<Di;++P){const B=P/v,T=Math.exp(-B*B/2);p.push(T),P===0?A+=T:P<m&&(A+=2*T)}for(let P=0;P<p.length;P++)p[P]=p[P]/A;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-i;const y=this._sizeLods[r],D=3*y*(r>b-ar?r-b+ar:0),I=4*(this._cubeSize-y);Qs(t,D,I,3*y,2*y),l.setRenderTarget(t),l.render(f,Na)}}function OS(n){const e=[],t=[],i=[];let r=n;const s=n-ar+1+wf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ar?l=wf[o-n+ar-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,v=3,m=2,p=1,A=new Float32Array(v*g*d),b=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let I=0;I<d;I++){const P=I%3*2/3-1,B=I>2?0:-1,T=[P,B,0,P+2/3,B,0,P+2/3,B+1,0,P,B,0,P+2/3,B+1,0,P,B+1,0];A.set(T,v*g*I),b.set(h,m*g*I);const E=[I,I,I,I,I,I];y.set(E,p*g*I)}const D=new $n;D.setAttribute("position",new tn(A,v)),D.setAttribute("uv",new tn(b,m)),D.setAttribute("faceIndex",new tn(y,p)),e.push(D),r>ar&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function If(n,e,t){const i=new Bi(n,e,t);return i.texture.mapping=Bo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function BS(n,e,t){const i=new Float32Array(Di),r=new z(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Df(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Lf(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Pc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===dl||l===pl,u=l===vr||l===xr;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Pf(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new Pf(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function VS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&uo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function HS(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let v=0;if(d!==null){const A=d.array;v=d.version;for(let b=0,y=A.length;b<y;b+=3){const D=A[b+0],I=A[b+1],P=A[b+2];h.push(D,I,I,P,P,D)}}else if(g!==void 0){const A=g.array;v=g.version;for(let b=0,y=A.length/3-1;b<y;b+=3){const D=b+0,I=b+1,P=b+2;h.push(D,I,I,P,P,D)}}else return;const m=new(Dd(h)?Od:Fd)(h,1);m.version=v;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function kS(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*o),t.update(d,i,1)}function c(h,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,h*o,g),t.update(d,i,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function f(h,d,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,v,0,g);let p=0;for(let A=0;A<g;A++)p+=d[A]*v[A];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function GS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function WS(n,e,t){const i=new WeakMap,r=new Qe;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let T=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let b=0;d===!0&&(b=1),g===!0&&(b=2),v===!0&&(b=3);let y=a.attributes.position.count*b,D=1;y>e.maxTextureSize&&(D=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const I=new Float32Array(y*D*4*f),P=new Ld(I,y,D,f);P.type=fn,P.needsUpdate=!0;const B=b*4;for(let E=0;E<f;E++){const L=m[E],ee=p[E],q=A[E],ne=y*D*4*E;for(let fe=0;fe<L.count;fe++){const K=fe*B;d===!0&&(r.fromBufferAttribute(L,fe),I[ne+K+0]=r.x,I[ne+K+1]=r.y,I[ne+K+2]=r.z,I[ne+K+3]=0),g===!0&&(r.fromBufferAttribute(ee,fe),I[ne+K+4]=r.x,I[ne+K+5]=r.y,I[ne+K+6]=r.z,I[ne+K+7]=0),v===!0&&(r.fromBufferAttribute(q,fe),I[ne+K+8]=r.x,I[ne+K+9]=r.y,I[ne+K+10]=r.z,I[ne+K+11]=q.itemSize===4?r.w:1)}}h={count:f,texture:P,size:new Je(y,D)},i.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function XS(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Kd=new Pt,Uf=new Xd(1,1),Zd=new Ld,Jd=new Wv,Qd=new Vd,Nf=[],Ff=[],Of=new Float32Array(16),Bf=new Float32Array(9),zf=new Float32Array(4);function Rr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Nf[r];if(s===void 0&&(s=new Float32Array(r),Nf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function St(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Wo(n,e){let t=Ff[e];t===void 0&&(t=new Int32Array(e),Ff[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function qS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function YS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2fv(this.addr,e),St(t,e)}}function $S(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;n.uniform3fv(this.addr,e),St(t,e)}}function jS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4fv(this.addr,e),St(t,e)}}function KS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;zf.set(i),n.uniformMatrix2fv(this.addr,!1,zf),St(t,i)}}function ZS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;Bf.set(i),n.uniformMatrix3fv(this.addr,!1,Bf),St(t,i)}}function JS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;Of.set(i),n.uniformMatrix4fv(this.addr,!1,Of),St(t,i)}}function QS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ey(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2iv(this.addr,e),St(t,e)}}function ty(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3iv(this.addr,e),St(t,e)}}function ny(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4iv(this.addr,e),St(t,e)}}function iy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ry(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2uiv(this.addr,e),St(t,e)}}function sy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3uiv(this.addr,e),St(t,e)}}function oy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4uiv(this.addr,e),St(t,e)}}function ay(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Uf.compareFunction=Id,s=Uf):s=Kd,t.setTexture2D(e||s,r)}function ly(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Jd,r)}function cy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Qd,r)}function uy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Zd,r)}function fy(n){switch(n){case 5126:return qS;case 35664:return YS;case 35665:return $S;case 35666:return jS;case 35674:return KS;case 35675:return ZS;case 35676:return JS;case 5124:case 35670:return QS;case 35667:case 35671:return ey;case 35668:case 35672:return ty;case 35669:case 35673:return ny;case 5125:return iy;case 36294:return ry;case 36295:return sy;case 36296:return oy;case 35678:case 36198:case 36298:case 36306:case 35682:return ay;case 35679:case 36299:case 36307:return ly;case 35680:case 36300:case 36308:case 36293:return cy;case 36289:case 36303:case 36311:case 36292:return uy}}function hy(n,e){n.uniform1fv(this.addr,e)}function dy(n,e){const t=Rr(e,this.size,2);n.uniform2fv(this.addr,t)}function py(n,e){const t=Rr(e,this.size,3);n.uniform3fv(this.addr,t)}function my(n,e){const t=Rr(e,this.size,4);n.uniform4fv(this.addr,t)}function gy(n,e){const t=Rr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function _y(n,e){const t=Rr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function vy(n,e){const t=Rr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function xy(n,e){n.uniform1iv(this.addr,e)}function My(n,e){n.uniform2iv(this.addr,e)}function Sy(n,e){n.uniform3iv(this.addr,e)}function yy(n,e){n.uniform4iv(this.addr,e)}function Ey(n,e){n.uniform1uiv(this.addr,e)}function by(n,e){n.uniform2uiv(this.addr,e)}function Ty(n,e){n.uniform3uiv(this.addr,e)}function Ay(n,e){n.uniform4uiv(this.addr,e)}function wy(n,e,t){const i=this.cache,r=e.length,s=Wo(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Kd,s[o])}function Ry(n,e,t){const i=this.cache,r=e.length,s=Wo(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Jd,s[o])}function Cy(n,e,t){const i=this.cache,r=e.length,s=Wo(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Qd,s[o])}function Py(n,e,t){const i=this.cache,r=e.length,s=Wo(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Zd,s[o])}function Iy(n){switch(n){case 5126:return hy;case 35664:return dy;case 35665:return py;case 35666:return my;case 35674:return gy;case 35675:return _y;case 35676:return vy;case 5124:case 35670:return xy;case 35667:case 35671:return My;case 35668:case 35672:return Sy;case 35669:case 35673:return yy;case 5125:return Ey;case 36294:return by;case 36295:return Ty;case 36296:return Ay;case 35678:case 36198:case 36298:case 36306:case 35682:return wy;case 35679:case 36299:case 36307:return Ry;case 35680:case 36300:case 36308:case 36293:return Cy;case 36289:case 36303:case 36311:case 36292:return Py}}class Dy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=fy(t.type)}}class Ly{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Iy(t.type)}}class Uy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Va=/(\w+)(\])?(\[|\.)?/g;function Vf(n,e){n.seq.push(e),n.map[e.id]=e}function Ny(n,e,t){const i=n.name,r=i.length;for(Va.lastIndex=0;;){const s=Va.exec(i),o=Va.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Vf(t,c===void 0?new Dy(a,n,e):new Ly(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Uy(a),Vf(t,f)),t=f}}}class fo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Ny(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Hf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Fy=37297;let Oy=0;function By(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const kf=new ke;function zy(n){Ze._getMatrix(kf,Ze.workingColorSpace,n);const e=`mat3( ${kf.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case So:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Gf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+By(n.getShaderSource(e),o)}else return r}function Vy(n,e){const t=zy(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Hy(n,e){let t;switch(e){case Q_:t="Linear";break;case ev:t="Reinhard";break;case tv:t="Cineon";break;case nv:t="ACESFilmic";break;case rv:t="AgX";break;case sv:t="Neutral";break;case iv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const eo=new z;function ky(){Ze.getLuminanceCoefficients(eo);const n=eo.x.toFixed(4),e=eo.y.toFixed(4),t=eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kr).join(`
`)}function Wy(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Xy(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function kr(n){return n!==""}function Wf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qy=/^[ \t]*#include +<([\w\d./]+)>/gm;function ql(n){return n.replace(qy,$y)}const Yy=new Map;function $y(n,e){let t=We[e];if(t===void 0){const i=Yy.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ql(t)}const jy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qf(n){return n.replace(jy,Ky)}function Ky(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Yf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Zy(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Md?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===D_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===On&&(e="SHADOWMAP_TYPE_VSM"),e}function Jy(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case vr:case xr:e="ENVMAP_TYPE_CUBE";break;case Bo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qy(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case xr:e="ENVMAP_MODE_REFRACTION";break}return e}function eE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Sd:e="ENVMAP_BLENDING_MULTIPLY";break;case Z_:e="ENVMAP_BLENDING_MIX";break;case J_:e="ENVMAP_BLENDING_ADD";break}return e}function tE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function nE(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Zy(t),c=Jy(t),u=Qy(t),f=eE(t),h=tE(t),d=Gy(t),g=Wy(s),v=r.createProgram();let m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(kr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(kr).join(`
`),p.length>0&&(p+=`
`)):(m=[Yf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),p=[Yf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?We.tonemapping_pars_fragment:"",t.toneMapping!==ui?Hy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Vy("linearToOutputTexel",t.outputColorSpace),ky(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(kr).join(`
`)),o=ql(o),o=Wf(o,t),o=Xf(o,t),a=ql(a),a=Wf(a,t),a=Xf(a,t),o=qf(o),a=qf(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=A+m+o,y=A+p+a,D=Hf(r,r.VERTEX_SHADER,b),I=Hf(r,r.FRAGMENT_SHADER,y);r.attachShader(v,D),r.attachShader(v,I),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function P(L){if(n.debug.checkShaderErrors){const ee=r.getProgramInfoLog(v).trim(),q=r.getShaderInfoLog(D).trim(),ne=r.getShaderInfoLog(I).trim();let fe=!0,K=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(fe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,D,I);else{const re=Gf(r,D,"vertex"),H=Gf(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+ee+`
`+re+`
`+H)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(q===""||ne==="")&&(K=!1);K&&(L.diagnostics={runnable:fe,programLog:ee,vertexShader:{log:q,prefix:m},fragmentShader:{log:ne,prefix:p}})}r.deleteShader(D),r.deleteShader(I),B=new fo(r,v),T=Xy(r,v)}let B;this.getUniforms=function(){return B===void 0&&P(this),B};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(v,Fy)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Oy++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=I,this}let iE=0;class rE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new sE(e),t.set(e,i)),i}}class sE{constructor(e){this.id=iE++,this.code=e,this.usedTimes=0}}function oE(n,e,t,i,r,s,o){const a=new Ud,l=new rE,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,E,L,ee,q){const ne=ee.fog,fe=q.geometry,K=T.isMeshStandardMaterial?ee.environment:null,re=(T.isMeshStandardMaterial?t:e).get(T.envMap||K),H=re&&re.mapping===Bo?re.image.height:null,me=g[T.type];T.precision!==null&&(d=r.getMaxPrecision(T.precision),d!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));const xe=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,Ae=xe!==void 0?xe.length:0;let Ie=0;fe.morphAttributes.position!==void 0&&(Ie=1),fe.morphAttributes.normal!==void 0&&(Ie=2),fe.morphAttributes.color!==void 0&&(Ie=3);let $e,te,de,Me;if(me){const st=Sn[me];$e=st.vertexShader,te=st.fragmentShader}else $e=T.vertexShader,te=T.fragmentShader,l.update(T),de=l.getVertexShaderID(T),Me=l.getFragmentShaderID(T);const U=n.getRenderTarget(),ie=n.state.buffers.depth.getReversed(),oe=q.isInstancedMesh===!0,ae=q.isBatchedMesh===!0,Ue=!!T.map,w=!!T.matcap,R=!!re,x=!!T.aoMap,Q=!!T.lightMap,$=!!T.bumpMap,G=!!T.normalMap,Z=!!T.displacementMap,le=!!T.emissiveMap,j=!!T.metalnessMap,M=!!T.roughnessMap,_=T.anisotropy>0,C=T.clearcoat>0,V=T.dispersion>0,W=T.iridescence>0,k=T.sheen>0,pe=T.transmission>0,ce=_&&!!T.anisotropyMap,we=C&&!!T.clearcoatMap,Ce=C&&!!T.clearcoatNormalMap,ue=C&&!!T.clearcoatRoughnessMap,ve=W&&!!T.iridescenceMap,Pe=W&&!!T.iridescenceThicknessMap,Ne=k&&!!T.sheenColorMap,ge=k&&!!T.sheenRoughnessMap,Oe=!!T.specularMap,ze=!!T.specularColorMap,ct=!!T.specularIntensityMap,N=pe&&!!T.transmissionMap,ye=pe&&!!T.thicknessMap,J=!!T.gradientMap,se=!!T.alphaMap,be=T.alphaTest>0,Ee=!!T.alphaHash,He=!!T.extensions;let pt=ui;T.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(pt=n.toneMapping);const Tt={shaderID:me,shaderType:T.type,shaderName:T.name,vertexShader:$e,fragmentShader:te,defines:T.defines,customVertexShaderID:de,customFragmentShaderID:Me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,batching:ae,batchingColor:ae&&q._colorsTexture!==null,instancing:oe,instancingColor:oe&&q.instanceColor!==null,instancingMorph:oe&&q.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:U===null?n.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Mr,alphaToCoverage:!!T.alphaToCoverage,map:Ue,matcap:w,envMap:R,envMapMode:R&&re.mapping,envMapCubeUVHeight:H,aoMap:x,lightMap:Q,bumpMap:$,normalMap:G,displacementMap:h&&Z,emissiveMap:le,normalMapObjectSpace:G&&T.normalMapType===fv,normalMapTangentSpace:G&&T.normalMapType===Pd,metalnessMap:j,roughnessMap:M,anisotropy:_,anisotropyMap:ce,clearcoat:C,clearcoatMap:we,clearcoatNormalMap:Ce,clearcoatRoughnessMap:ue,dispersion:V,iridescence:W,iridescenceMap:ve,iridescenceThicknessMap:Pe,sheen:k,sheenColorMap:Ne,sheenRoughnessMap:ge,specularMap:Oe,specularColorMap:ze,specularIntensityMap:ct,transmission:pe,transmissionMap:N,thicknessMap:ye,gradientMap:J,opaque:T.transparent===!1&&T.blending===hr&&T.alphaToCoverage===!1,alphaMap:se,alphaTest:be,alphaHash:Ee,combine:T.combine,mapUv:Ue&&v(T.map.channel),aoMapUv:x&&v(T.aoMap.channel),lightMapUv:Q&&v(T.lightMap.channel),bumpMapUv:$&&v(T.bumpMap.channel),normalMapUv:G&&v(T.normalMap.channel),displacementMapUv:Z&&v(T.displacementMap.channel),emissiveMapUv:le&&v(T.emissiveMap.channel),metalnessMapUv:j&&v(T.metalnessMap.channel),roughnessMapUv:M&&v(T.roughnessMap.channel),anisotropyMapUv:ce&&v(T.anisotropyMap.channel),clearcoatMapUv:we&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:ge&&v(T.sheenRoughnessMap.channel),specularMapUv:Oe&&v(T.specularMap.channel),specularColorMapUv:ze&&v(T.specularColorMap.channel),specularIntensityMapUv:ct&&v(T.specularIntensityMap.channel),transmissionMapUv:N&&v(T.transmissionMap.channel),thicknessMapUv:ye&&v(T.thicknessMap.channel),alphaMapUv:se&&v(T.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(G||_),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!fe.attributes.uv&&(Ue||se),fog:!!ne,useFog:T.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ie,skinning:q.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Ie,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:pt,decodeVideoTexture:Ue&&T.map.isVideoTexture===!0&&Ze.getTransfer(T.map.colorSpace)===at,decodeVideoTextureEmissive:le&&T.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(T.emissiveMap.colorSpace)===at,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Vn,flipSided:T.side===Ht,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:He&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&T.extensions.multiDraw===!0||ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Tt.vertexUv1s=c.has(1),Tt.vertexUv2s=c.has(2),Tt.vertexUv3s=c.has(3),c.clear(),Tt}function p(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)E.push(L),E.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(A(E,T),b(E,T),E.push(n.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function A(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function b(T,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),T.push(a.mask)}function y(T){const E=g[T.type];let L;if(E){const ee=Sn[E];L=ix.clone(ee.uniforms)}else L=T.uniforms;return L}function D(T,E){let L;for(let ee=0,q=u.length;ee<q;ee++){const ne=u[ee];if(ne.cacheKey===E){L=ne,++L.usedTimes;break}}return L===void 0&&(L=new nE(n,E,T,s),u.push(L)),L}function I(T){if(--T.usedTimes===0){const E=u.indexOf(T);u[E]=u[u.length-1],u.pop(),T.destroy()}}function P(T){l.remove(T)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:D,releaseProgram:I,releaseShaderCache:P,programs:u,dispose:B}}function aE(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function lE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function $f(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function jf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,d,g,v,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=v,p.group=m),e++,p}function a(f,h,d,g,v,m){const p=o(f,h,d,g,v,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,g,v,m){const p=o(f,h,d,g,v,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||lE),i.length>1&&i.sort(h||$f),r.length>1&&r.sort(h||$f)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function cE(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new jf,n.set(i,[o])):r>=s.length?(o=new jf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function uE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ye};break;case"SpotLight":t={position:new z,direction:new z,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function fE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let hE=0;function dE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function pE(n){const e=new uE,t=fE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new qe,o=new qe;function a(c){let u=0,f=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,A=0,b=0,y=0,D=0,I=0,P=0;c.sort(dE);for(let T=0,E=c.length;T<E;T++){const L=c[T],ee=L.color,q=L.intensity,ne=L.distance,fe=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=ee.r*q,f+=ee.g*q,h+=ee.b*q;else if(L.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(L.sh.coefficients[K],q);P++}else if(L.isDirectionalLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const re=L.shadow,H=t.get(L);H.shadowIntensity=re.intensity,H.shadowBias=re.bias,H.shadowNormalBias=re.normalBias,H.shadowRadius=re.radius,H.shadowMapSize=re.mapSize,i.directionalShadow[d]=H,i.directionalShadowMap[d]=fe,i.directionalShadowMatrix[d]=L.shadow.matrix,A++}i.directional[d]=K,d++}else if(L.isSpotLight){const K=e.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(ee).multiplyScalar(q),K.distance=ne,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,i.spot[v]=K;const re=L.shadow;if(L.map&&(i.spotLightMap[D]=L.map,D++,re.updateMatrices(L),L.castShadow&&I++),i.spotLightMatrix[v]=re.matrix,L.castShadow){const H=t.get(L);H.shadowIntensity=re.intensity,H.shadowBias=re.bias,H.shadowNormalBias=re.normalBias,H.shadowRadius=re.radius,H.shadowMapSize=re.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=fe,y++}v++}else if(L.isRectAreaLight){const K=e.get(L);K.color.copy(ee).multiplyScalar(q),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=K,m++}else if(L.isPointLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){const re=L.shadow,H=t.get(L);H.shadowIntensity=re.intensity,H.shadowBias=re.bias,H.shadowNormalBias=re.normalBias,H.shadowRadius=re.radius,H.shadowMapSize=re.mapSize,H.shadowCameraNear=re.camera.near,H.shadowCameraFar=re.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=fe,i.pointShadowMatrix[g]=L.shadow.matrix,b++}i.point[g]=K,g++}else if(L.isHemisphereLight){const K=e.get(L);K.skyColor.copy(L.color).multiplyScalar(q),K.groundColor.copy(L.groundColor).multiplyScalar(q),i.hemi[p]=K,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const B=i.hash;(B.directionalLength!==d||B.pointLength!==g||B.spotLength!==v||B.rectAreaLength!==m||B.hemiLength!==p||B.numDirectionalShadows!==A||B.numPointShadows!==b||B.numSpotShadows!==y||B.numSpotMaps!==D||B.numLightProbes!==P)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=y+D-I,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=P,B.directionalLength=d,B.pointLength=g,B.spotLength=v,B.rectAreaLength=m,B.hemiLength=p,B.numDirectionalShadows=A,B.numPointShadows=b,B.numSpotShadows=y,B.numSpotMaps=D,B.numLightProbes=P,i.version=hE++)}function l(c,u){let f=0,h=0,d=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const b=c[p];if(b.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(b.isSpotLight){const y=i.spot[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(b.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Kf(n){const e=new pE(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function mE(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Kf(n),e.set(r,[a])):s>=o.length?(a=new Kf(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const gE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_E=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vE(n,e,t){let i=new Ac;const r=new Je,s=new Je,o=new Qe,a=new xx({depthPacking:uv}),l=new Mx,c={},u=t.maxTextureSize,f={[hi]:Ht,[Ht]:hi,[Vn]:Vn},h=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:gE,fragmentShader:_E}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new $n;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new $t(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Md;let p=this.type;this.render=function(I,P,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const T=n.getRenderTarget(),E=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),ee=n.state;ee.setBlending(ci),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const q=p!==On&&this.type===On,ne=p===On&&this.type!==On;for(let fe=0,K=I.length;fe<K;fe++){const re=I[fe],H=re.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const me=H.getFrameExtents();if(r.multiply(me),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/me.x),r.x=s.x*me.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/me.y),r.y=s.y*me.y,H.mapSize.y=s.y)),H.map===null||q===!0||ne===!0){const Ae=this.type!==On?{minFilter:jt,magFilter:jt}:{};H.map!==null&&H.map.dispose(),H.map=new Bi(r.x,r.y,Ae),H.map.texture.name=re.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const xe=H.getViewportCount();for(let Ae=0;Ae<xe;Ae++){const Ie=H.getViewport(Ae);o.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),ee.viewport(o),H.updateMatrices(re,Ae),i=H.getFrustum(),y(P,B,H.camera,re,this.type)}H.isPointLightShadow!==!0&&this.type===On&&A(H,B),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,E,L)};function A(I,P){const B=e.update(v);h.defines.VSM_SAMPLES!==I.blurSamples&&(h.defines.VSM_SAMPLES=I.blurSamples,d.defines.VSM_SAMPLES=I.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Bi(r.x,r.y)),h.uniforms.shadow_pass.value=I.map.texture,h.uniforms.resolution.value=I.mapSize,h.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(P,null,B,h,v,null),d.uniforms.shadow_pass.value=I.mapPass.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(P,null,B,d,v,null)}function b(I,P,B,T){let E=null;const L=B.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(L!==void 0)E=L;else if(E=B.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const ee=E.uuid,q=P.uuid;let ne=c[ee];ne===void 0&&(ne={},c[ee]=ne);let fe=ne[q];fe===void 0&&(fe=E.clone(),ne[q]=fe,P.addEventListener("dispose",D)),E=fe}if(E.visible=P.visible,E.wireframe=P.wireframe,T===On?E.side=P.shadowSide!==null?P.shadowSide:P.side:E.side=P.shadowSide!==null?P.shadowSide:f[P.side],E.alphaMap=P.alphaMap,E.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,E.map=P.map,E.clipShadows=P.clipShadows,E.clippingPlanes=P.clippingPlanes,E.clipIntersection=P.clipIntersection,E.displacementMap=P.displacementMap,E.displacementScale=P.displacementScale,E.displacementBias=P.displacementBias,E.wireframeLinewidth=P.wireframeLinewidth,E.linewidth=P.linewidth,B.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const ee=n.properties.get(E);ee.light=B}return E}function y(I,P,B,T,E){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&E===On)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,I.matrixWorld);const q=e.update(I),ne=I.material;if(Array.isArray(ne)){const fe=q.groups;for(let K=0,re=fe.length;K<re;K++){const H=fe[K],me=ne[H.materialIndex];if(me&&me.visible){const xe=b(I,me,T,E);I.onBeforeShadow(n,I,P,B,q,xe,H),n.renderBufferDirect(B,null,q,xe,I,H),I.onAfterShadow(n,I,P,B,q,xe,H)}}}else if(ne.visible){const fe=b(I,ne,T,E);I.onBeforeShadow(n,I,P,B,q,fe,null),n.renderBufferDirect(B,null,q,fe,I,null),I.onAfterShadow(n,I,P,B,q,fe,null)}}const ee=I.children;for(let q=0,ne=ee.length;q<ne;q++)y(ee[q],P,B,T,E)}function D(I){I.target.removeEventListener("dispose",D);for(const B in c){const T=c[B],E=I.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}const xE={[ol]:al,[ll]:fl,[cl]:hl,[_r]:ul,[al]:ol,[fl]:ll,[hl]:cl,[ul]:_r};function ME(n,e){function t(){let N=!1;const ye=new Qe;let J=null;const se=new Qe(0,0,0,0);return{setMask:function(be){J!==be&&!N&&(n.colorMask(be,be,be,be),J=be)},setLocked:function(be){N=be},setClear:function(be,Ee,He,pt,Tt){Tt===!0&&(be*=pt,Ee*=pt,He*=pt),ye.set(be,Ee,He,pt),se.equals(ye)===!1&&(n.clearColor(be,Ee,He,pt),se.copy(ye))},reset:function(){N=!1,J=null,se.set(-1,0,0,0)}}}function i(){let N=!1,ye=!1,J=null,se=null,be=null;return{setReversed:function(Ee){if(ye!==Ee){const He=e.get("EXT_clip_control");Ee?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),ye=Ee;const pt=be;be=null,this.setClear(pt)}},getReversed:function(){return ye},setTest:function(Ee){Ee?U(n.DEPTH_TEST):ie(n.DEPTH_TEST)},setMask:function(Ee){J!==Ee&&!N&&(n.depthMask(Ee),J=Ee)},setFunc:function(Ee){if(ye&&(Ee=xE[Ee]),se!==Ee){switch(Ee){case ol:n.depthFunc(n.NEVER);break;case al:n.depthFunc(n.ALWAYS);break;case ll:n.depthFunc(n.LESS);break;case _r:n.depthFunc(n.LEQUAL);break;case cl:n.depthFunc(n.EQUAL);break;case ul:n.depthFunc(n.GEQUAL);break;case fl:n.depthFunc(n.GREATER);break;case hl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}se=Ee}},setLocked:function(Ee){N=Ee},setClear:function(Ee){be!==Ee&&(ye&&(Ee=1-Ee),n.clearDepth(Ee),be=Ee)},reset:function(){N=!1,J=null,se=null,be=null,ye=!1}}}function r(){let N=!1,ye=null,J=null,se=null,be=null,Ee=null,He=null,pt=null,Tt=null;return{setTest:function(st){N||(st?U(n.STENCIL_TEST):ie(n.STENCIL_TEST))},setMask:function(st){ye!==st&&!N&&(n.stencilMask(st),ye=st)},setFunc:function(st,nn,Rn){(J!==st||se!==nn||be!==Rn)&&(n.stencilFunc(st,nn,Rn),J=st,se=nn,be=Rn)},setOp:function(st,nn,Rn){(Ee!==st||He!==nn||pt!==Rn)&&(n.stencilOp(st,nn,Rn),Ee=st,He=nn,pt=Rn)},setLocked:function(st){N=st},setClear:function(st){Tt!==st&&(n.clearStencil(st),Tt=st)},reset:function(){N=!1,ye=null,J=null,se=null,be=null,Ee=null,He=null,pt=null,Tt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,v=!1,m=null,p=null,A=null,b=null,y=null,D=null,I=null,P=new Ye(0,0,0),B=0,T=!1,E=null,L=null,ee=null,q=null,ne=null;const fe=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,re=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(H)[1]),K=re>=1):H.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),K=re>=2);let me=null,xe={};const Ae=n.getParameter(n.SCISSOR_BOX),Ie=n.getParameter(n.VIEWPORT),$e=new Qe().fromArray(Ae),te=new Qe().fromArray(Ie);function de(N,ye,J,se){const be=new Uint8Array(4),Ee=n.createTexture();n.bindTexture(N,Ee),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<J;He++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,se,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(ye+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return Ee}const Me={};Me[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),Me[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Me[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),U(n.DEPTH_TEST),o.setFunc(_r),$(!1),G(Iu),U(n.CULL_FACE),x(ci);function U(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function ie(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function oe(N,ye){return f[N]!==ye?(n.bindFramebuffer(N,ye),f[N]=ye,N===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ye),N===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function ae(N,ye){let J=d,se=!1;if(N){J=h.get(ye),J===void 0&&(J=[],h.set(ye,J));const be=N.textures;if(J.length!==be.length||J[0]!==n.COLOR_ATTACHMENT0){for(let Ee=0,He=be.length;Ee<He;Ee++)J[Ee]=n.COLOR_ATTACHMENT0+Ee;J.length=be.length,se=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,se=!0);se&&n.drawBuffers(J)}function Ue(N){return g!==N?(n.useProgram(N),g=N,!0):!1}const w={[Ii]:n.FUNC_ADD,[U_]:n.FUNC_SUBTRACT,[N_]:n.FUNC_REVERSE_SUBTRACT};w[F_]=n.MIN,w[O_]=n.MAX;const R={[B_]:n.ZERO,[z_]:n.ONE,[V_]:n.SRC_COLOR,[rl]:n.SRC_ALPHA,[q_]:n.SRC_ALPHA_SATURATE,[W_]:n.DST_COLOR,[k_]:n.DST_ALPHA,[H_]:n.ONE_MINUS_SRC_COLOR,[sl]:n.ONE_MINUS_SRC_ALPHA,[X_]:n.ONE_MINUS_DST_COLOR,[G_]:n.ONE_MINUS_DST_ALPHA,[Y_]:n.CONSTANT_COLOR,[$_]:n.ONE_MINUS_CONSTANT_COLOR,[j_]:n.CONSTANT_ALPHA,[K_]:n.ONE_MINUS_CONSTANT_ALPHA};function x(N,ye,J,se,be,Ee,He,pt,Tt,st){if(N===ci){v===!0&&(ie(n.BLEND),v=!1);return}if(v===!1&&(U(n.BLEND),v=!0),N!==L_){if(N!==m||st!==T){if((p!==Ii||y!==Ii)&&(n.blendEquation(n.FUNC_ADD),p=Ii,y=Ii),st)switch(N){case hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Du:n.blendFunc(n.ONE,n.ONE);break;case Lu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Du:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Lu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}A=null,b=null,D=null,I=null,P.set(0,0,0),B=0,m=N,T=st}return}be=be||ye,Ee=Ee||J,He=He||se,(ye!==p||be!==y)&&(n.blendEquationSeparate(w[ye],w[be]),p=ye,y=be),(J!==A||se!==b||Ee!==D||He!==I)&&(n.blendFuncSeparate(R[J],R[se],R[Ee],R[He]),A=J,b=se,D=Ee,I=He),(pt.equals(P)===!1||Tt!==B)&&(n.blendColor(pt.r,pt.g,pt.b,Tt),P.copy(pt),B=Tt),m=N,T=!1}function Q(N,ye){N.side===Vn?ie(n.CULL_FACE):U(n.CULL_FACE);let J=N.side===Ht;ye&&(J=!J),$(J),N.blending===hr&&N.transparent===!1?x(ci):x(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const se=N.stencilWrite;a.setTest(se),se&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),le(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?U(n.SAMPLE_ALPHA_TO_COVERAGE):ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(N){E!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),E=N)}function G(N){N!==P_?(U(n.CULL_FACE),N!==L&&(N===Iu?n.cullFace(n.BACK):N===I_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ie(n.CULL_FACE),L=N}function Z(N){N!==ee&&(K&&n.lineWidth(N),ee=N)}function le(N,ye,J){N?(U(n.POLYGON_OFFSET_FILL),(q!==ye||ne!==J)&&(n.polygonOffset(ye,J),q=ye,ne=J)):ie(n.POLYGON_OFFSET_FILL)}function j(N){N?U(n.SCISSOR_TEST):ie(n.SCISSOR_TEST)}function M(N){N===void 0&&(N=n.TEXTURE0+fe-1),me!==N&&(n.activeTexture(N),me=N)}function _(N,ye,J){J===void 0&&(me===null?J=n.TEXTURE0+fe-1:J=me);let se=xe[J];se===void 0&&(se={type:void 0,texture:void 0},xe[J]=se),(se.type!==N||se.texture!==ye)&&(me!==J&&(n.activeTexture(J),me=J),n.bindTexture(N,ye||Me[N]),se.type=N,se.texture=ye)}function C(){const N=xe[me];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function V(){try{n.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function W(){try{n.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function k(){try{n.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{n.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{n.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(){try{n.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{n.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{n.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{n.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{n.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(N){$e.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),$e.copy(N))}function ge(N){te.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),te.copy(N))}function Oe(N,ye){let J=c.get(ye);J===void 0&&(J=new WeakMap,c.set(ye,J));let se=J.get(N);se===void 0&&(se=n.getUniformBlockIndex(ye,N.name),J.set(N,se))}function ze(N,ye){const se=c.get(ye).get(N);l.get(ye)!==se&&(n.uniformBlockBinding(ye,se,N.__bindingPointIndex),l.set(ye,se))}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},me=null,xe={},f={},h=new WeakMap,d=[],g=null,v=!1,m=null,p=null,A=null,b=null,y=null,D=null,I=null,P=new Ye(0,0,0),B=0,T=!1,E=null,L=null,ee=null,q=null,ne=null,$e.set(0,0,n.canvas.width,n.canvas.height),te.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:U,disable:ie,bindFramebuffer:oe,drawBuffers:ae,useProgram:Ue,setBlending:x,setMaterial:Q,setFlipSided:$,setCullFace:G,setLineWidth:Z,setPolygonOffset:le,setScissorTest:j,activeTexture:M,bindTexture:_,unbindTexture:C,compressedTexImage2D:V,compressedTexImage3D:W,texImage2D:ve,texImage3D:Pe,updateUBOMapping:Oe,uniformBlockBinding:ze,texStorage2D:Ce,texStorage3D:ue,texSubImage2D:k,texSubImage3D:pe,compressedTexSubImage2D:ce,compressedTexSubImage3D:we,scissor:Ne,viewport:ge,reset:ct}}function SE(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,_){return d?new OffscreenCanvas(M,_):hs("canvas")}function v(M,_,C){let V=1;const W=j(M);if((W.width>C||W.height>C)&&(V=C/Math.max(W.width,W.height)),V<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const k=Math.floor(V*W.width),pe=Math.floor(V*W.height);f===void 0&&(f=g(k,pe));const ce=_?g(k,pe):f;return ce.width=k,ce.height=pe,ce.getContext("2d").drawImage(M,0,0,k,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+k+"x"+pe+")."),ce}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),M;return M}function m(M){return M.generateMipmaps}function p(M){n.generateMipmap(M)}function A(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(M,_,C,V,W=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let k=_;if(_===n.RED&&(C===n.FLOAT&&(k=n.R32F),C===n.HALF_FLOAT&&(k=n.R16F),C===n.UNSIGNED_BYTE&&(k=n.R8)),_===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(k=n.R8UI),C===n.UNSIGNED_SHORT&&(k=n.R16UI),C===n.UNSIGNED_INT&&(k=n.R32UI),C===n.BYTE&&(k=n.R8I),C===n.SHORT&&(k=n.R16I),C===n.INT&&(k=n.R32I)),_===n.RG&&(C===n.FLOAT&&(k=n.RG32F),C===n.HALF_FLOAT&&(k=n.RG16F),C===n.UNSIGNED_BYTE&&(k=n.RG8)),_===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(k=n.RG8UI),C===n.UNSIGNED_SHORT&&(k=n.RG16UI),C===n.UNSIGNED_INT&&(k=n.RG32UI),C===n.BYTE&&(k=n.RG8I),C===n.SHORT&&(k=n.RG16I),C===n.INT&&(k=n.RG32I)),_===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(k=n.RGB8UI),C===n.UNSIGNED_SHORT&&(k=n.RGB16UI),C===n.UNSIGNED_INT&&(k=n.RGB32UI),C===n.BYTE&&(k=n.RGB8I),C===n.SHORT&&(k=n.RGB16I),C===n.INT&&(k=n.RGB32I)),_===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(k=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(k=n.RGBA16UI),C===n.UNSIGNED_INT&&(k=n.RGBA32UI),C===n.BYTE&&(k=n.RGBA8I),C===n.SHORT&&(k=n.RGBA16I),C===n.INT&&(k=n.RGBA32I)),_===n.RGB&&C===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),_===n.RGBA){const pe=W?So:Ze.getTransfer(V);C===n.FLOAT&&(k=n.RGBA32F),C===n.HALF_FLOAT&&(k=n.RGBA16F),C===n.UNSIGNED_BYTE&&(k=pe===at?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function y(M,_){let C;return M?_===null||_===Oi||_===cs?C=n.DEPTH24_STENCIL8:_===fn?C=n.DEPTH32F_STENCIL8:_===ls&&(C=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Oi||_===cs?C=n.DEPTH_COMPONENT24:_===fn?C=n.DEPTH_COMPONENT32F:_===ls&&(C=n.DEPTH_COMPONENT16),C}function D(M,_){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==jt&&M.minFilter!==En?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function I(M){const _=M.target;_.removeEventListener("dispose",I),B(_),_.isVideoTexture&&u.delete(_)}function P(M){const _=M.target;_.removeEventListener("dispose",P),E(_)}function B(M){const _=i.get(M);if(_.__webglInit===void 0)return;const C=M.source,V=h.get(C);if(V){const W=V[_.__cacheKey];W.usedTimes--,W.usedTimes===0&&T(M),Object.keys(V).length===0&&h.delete(C)}i.remove(M)}function T(M){const _=i.get(M);n.deleteTexture(_.__webglTexture);const C=M.source,V=h.get(C);delete V[_.__cacheKey],o.memory.textures--}function E(M){const _=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(_.__webglFramebuffer[V]))for(let W=0;W<_.__webglFramebuffer[V].length;W++)n.deleteFramebuffer(_.__webglFramebuffer[V][W]);else n.deleteFramebuffer(_.__webglFramebuffer[V]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[V])}else{if(Array.isArray(_.__webglFramebuffer))for(let V=0;V<_.__webglFramebuffer.length;V++)n.deleteFramebuffer(_.__webglFramebuffer[V]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let V=0;V<_.__webglColorRenderbuffer.length;V++)_.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[V]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const C=M.textures;for(let V=0,W=C.length;V<W;V++){const k=i.get(C[V]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),o.memory.textures--),i.remove(C[V])}i.remove(M)}let L=0;function ee(){L=0}function q(){const M=L;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),L+=1,M}function ne(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function fe(M,_){const C=i.get(M);if(M.isVideoTexture&&Z(M),M.isRenderTargetTexture===!1&&M.version>0&&C.__version!==M.version){const V=M.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(C,M,_);return}}t.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+_)}function K(M,_){const C=i.get(M);if(M.version>0&&C.__version!==M.version){te(C,M,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+_)}function re(M,_){const C=i.get(M);if(M.version>0&&C.__version!==M.version){te(C,M,_);return}t.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+_)}function H(M,_){const C=i.get(M);if(M.version>0&&C.__version!==M.version){de(C,M,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+_)}const me={[ml]:n.REPEAT,[Li]:n.CLAMP_TO_EDGE,[gl]:n.MIRRORED_REPEAT},xe={[jt]:n.NEAREST,[av]:n.NEAREST_MIPMAP_NEAREST,[As]:n.NEAREST_MIPMAP_LINEAR,[En]:n.LINEAR,[aa]:n.LINEAR_MIPMAP_NEAREST,[Ui]:n.LINEAR_MIPMAP_LINEAR},Ae={[hv]:n.NEVER,[vv]:n.ALWAYS,[dv]:n.LESS,[Id]:n.LEQUAL,[pv]:n.EQUAL,[_v]:n.GEQUAL,[mv]:n.GREATER,[gv]:n.NOTEQUAL};function Ie(M,_){if(_.type===fn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===En||_.magFilter===aa||_.magFilter===As||_.magFilter===Ui||_.minFilter===En||_.minFilter===aa||_.minFilter===As||_.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,me[_.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,me[_.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,me[_.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,xe[_.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,xe[_.minFilter]),_.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,Ae[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===jt||_.minFilter!==As&&_.minFilter!==Ui||_.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const C=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function $e(M,_){let C=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",I));const V=_.source;let W=h.get(V);W===void 0&&(W={},h.set(V,W));const k=ne(_);if(k!==M.__cacheKey){W[k]===void 0&&(W[k]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,C=!0),W[k].usedTimes++;const pe=W[M.__cacheKey];pe!==void 0&&(W[M.__cacheKey].usedTimes--,pe.usedTimes===0&&T(_)),M.__cacheKey=k,M.__webglTexture=W[k].texture}return C}function te(M,_,C){let V=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(V=n.TEXTURE_3D);const W=$e(M,_),k=_.source;t.bindTexture(V,M.__webglTexture,n.TEXTURE0+C);const pe=i.get(k);if(k.version!==pe.__version||W===!0){t.activeTexture(n.TEXTURE0+C);const ce=Ze.getPrimaries(Ze.workingColorSpace),we=_.colorSpace===oi?null:Ze.getPrimaries(_.colorSpace),Ce=_.colorSpace===oi||ce===we?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let ue=v(_.image,!1,r.maxTextureSize);ue=le(_,ue);const ve=s.convert(_.format,_.colorSpace),Pe=s.convert(_.type);let Ne=b(_.internalFormat,ve,Pe,_.colorSpace,_.isVideoTexture);Ie(V,_);let ge;const Oe=_.mipmaps,ze=_.isVideoTexture!==!0,ct=pe.__version===void 0||W===!0,N=k.dataReady,ye=D(_,ue);if(_.isDepthTexture)Ne=y(_.format===fs,_.type),ct&&(ze?t.texStorage2D(n.TEXTURE_2D,1,Ne,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,Ne,ue.width,ue.height,0,ve,Pe,null));else if(_.isDataTexture)if(Oe.length>0){ze&&ct&&t.texStorage2D(n.TEXTURE_2D,ye,Ne,Oe[0].width,Oe[0].height);for(let J=0,se=Oe.length;J<se;J++)ge=Oe[J],ze?N&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ge.width,ge.height,ve,Pe,ge.data):t.texImage2D(n.TEXTURE_2D,J,Ne,ge.width,ge.height,0,ve,Pe,ge.data);_.generateMipmaps=!1}else ze?(ct&&t.texStorage2D(n.TEXTURE_2D,ye,Ne,ue.width,ue.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue.width,ue.height,ve,Pe,ue.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,ue.width,ue.height,0,ve,Pe,ue.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ze&&ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Ne,Oe[0].width,Oe[0].height,ue.depth);for(let J=0,se=Oe.length;J<se;J++)if(ge=Oe[J],_.format!==en)if(ve!==null)if(ze){if(N)if(_.layerUpdates.size>0){const be=Af(ge.width,ge.height,_.format,_.type);for(const Ee of _.layerUpdates){const He=ge.data.subarray(Ee*be/ge.data.BYTES_PER_ELEMENT,(Ee+1)*be/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,Ee,ge.width,ge.height,1,ve,He)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ge.width,ge.height,ue.depth,ve,ge.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,Ne,ge.width,ge.height,ue.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ge.width,ge.height,ue.depth,ve,Pe,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,Ne,ge.width,ge.height,ue.depth,0,ve,Pe,ge.data)}else{ze&&ct&&t.texStorage2D(n.TEXTURE_2D,ye,Ne,Oe[0].width,Oe[0].height);for(let J=0,se=Oe.length;J<se;J++)ge=Oe[J],_.format!==en?ve!==null?ze?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,ge.width,ge.height,ve,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,J,Ne,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?N&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ge.width,ge.height,ve,Pe,ge.data):t.texImage2D(n.TEXTURE_2D,J,Ne,ge.width,ge.height,0,ve,Pe,ge.data)}else if(_.isDataArrayTexture)if(ze){if(ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Ne,ue.width,ue.height,ue.depth),N)if(_.layerUpdates.size>0){const J=Af(ue.width,ue.height,_.format,_.type);for(const se of _.layerUpdates){const be=ue.data.subarray(se*J/ue.data.BYTES_PER_ELEMENT,(se+1)*J/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,se,ue.width,ue.height,1,ve,Pe,be)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ve,Pe,ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,ue.width,ue.height,ue.depth,0,ve,Pe,ue.data);else if(_.isData3DTexture)ze?(ct&&t.texStorage3D(n.TEXTURE_3D,ye,Ne,ue.width,ue.height,ue.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ve,Pe,ue.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,ue.width,ue.height,ue.depth,0,ve,Pe,ue.data);else if(_.isFramebufferTexture){if(ct)if(ze)t.texStorage2D(n.TEXTURE_2D,ye,Ne,ue.width,ue.height);else{let J=ue.width,se=ue.height;for(let be=0;be<ye;be++)t.texImage2D(n.TEXTURE_2D,be,Ne,J,se,0,ve,Pe,null),J>>=1,se>>=1}}else if(Oe.length>0){if(ze&&ct){const J=j(Oe[0]);t.texStorage2D(n.TEXTURE_2D,ye,Ne,J.width,J.height)}for(let J=0,se=Oe.length;J<se;J++)ge=Oe[J],ze?N&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ve,Pe,ge):t.texImage2D(n.TEXTURE_2D,J,Ne,ve,Pe,ge);_.generateMipmaps=!1}else if(ze){if(ct){const J=j(ue);t.texStorage2D(n.TEXTURE_2D,ye,Ne,J.width,J.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Pe,ue)}else t.texImage2D(n.TEXTURE_2D,0,Ne,ve,Pe,ue);m(_)&&p(V),pe.__version=k.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function de(M,_,C){if(_.image.length!==6)return;const V=$e(M,_),W=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+C);const k=i.get(W);if(W.version!==k.__version||V===!0){t.activeTexture(n.TEXTURE0+C);const pe=Ze.getPrimaries(Ze.workingColorSpace),ce=_.colorSpace===oi?null:Ze.getPrimaries(_.colorSpace),we=_.colorSpace===oi||pe===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Ce=_.isCompressedTexture||_.image[0].isCompressedTexture,ue=_.image[0]&&_.image[0].isDataTexture,ve=[];for(let se=0;se<6;se++)!Ce&&!ue?ve[se]=v(_.image[se],!0,r.maxCubemapSize):ve[se]=ue?_.image[se].image:_.image[se],ve[se]=le(_,ve[se]);const Pe=ve[0],Ne=s.convert(_.format,_.colorSpace),ge=s.convert(_.type),Oe=b(_.internalFormat,Ne,ge,_.colorSpace),ze=_.isVideoTexture!==!0,ct=k.__version===void 0||V===!0,N=W.dataReady;let ye=D(_,Pe);Ie(n.TEXTURE_CUBE_MAP,_);let J;if(Ce){ze&&ct&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Oe,Pe.width,Pe.height);for(let se=0;se<6;se++){J=ve[se].mipmaps;for(let be=0;be<J.length;be++){const Ee=J[be];_.format!==en?Ne!==null?ze?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,be,0,0,Ee.width,Ee.height,Ne,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,be,Oe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,be,0,0,Ee.width,Ee.height,Ne,ge,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,be,Oe,Ee.width,Ee.height,0,Ne,ge,Ee.data)}}}else{if(J=_.mipmaps,ze&&ct){J.length>0&&ye++;const se=j(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Oe,se.width,se.height)}for(let se=0;se<6;se++)if(ue){ze?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ve[se].width,ve[se].height,Ne,ge,ve[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Oe,ve[se].width,ve[se].height,0,Ne,ge,ve[se].data);for(let be=0;be<J.length;be++){const He=J[be].image[se].image;ze?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,be+1,0,0,He.width,He.height,Ne,ge,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,be+1,Oe,He.width,He.height,0,Ne,ge,He.data)}}else{ze?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ne,ge,ve[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Oe,Ne,ge,ve[se]);for(let be=0;be<J.length;be++){const Ee=J[be];ze?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,be+1,0,0,Ne,ge,Ee.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,be+1,Oe,Ne,ge,Ee.image[se])}}}m(_)&&p(n.TEXTURE_CUBE_MAP),k.__version=W.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function Me(M,_,C,V,W,k){const pe=s.convert(C.format,C.colorSpace),ce=s.convert(C.type),we=b(C.internalFormat,pe,ce,C.colorSpace),Ce=i.get(_),ue=i.get(C);if(ue.__renderTarget=_,!Ce.__hasExternalTextures){const ve=Math.max(1,_.width>>k),Pe=Math.max(1,_.height>>k);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?t.texImage3D(W,k,we,ve,Pe,_.depth,0,pe,ce,null):t.texImage2D(W,k,we,ve,Pe,0,pe,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),G(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,W,ue.__webglTexture,0,$(_)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,W,ue.__webglTexture,k),t.bindFramebuffer(n.FRAMEBUFFER,null)}function U(M,_,C){if(n.bindRenderbuffer(n.RENDERBUFFER,M),_.depthBuffer){const V=_.depthTexture,W=V&&V.isDepthTexture?V.type:null,k=y(_.stencilBuffer,W),pe=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=$(_);G(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,k,_.width,_.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,k,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,k,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,M)}else{const V=_.textures;for(let W=0;W<V.length;W++){const k=V[W],pe=s.convert(k.format,k.colorSpace),ce=s.convert(k.type),we=b(k.internalFormat,pe,ce,k.colorSpace),Ce=$(_);C&&G(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,we,_.width,_.height):G(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce,we,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,we,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ie(M,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=i.get(_.depthTexture);V.__renderTarget=_,(!V.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),fe(_.depthTexture,0);const W=V.__webglTexture,k=$(_);if(_.depthTexture.format===us)G(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0);else if(_.depthTexture.format===fs)G(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function oe(M){const _=i.get(M),C=M.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==M.depthTexture){const V=M.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),V){const W=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,V.removeEventListener("dispose",W)};V.addEventListener("dispose",W),_.__depthDisposeCallback=W}_.__boundDepthTexture=V}if(M.depthTexture&&!_.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");const V=M.texture.mipmaps;V&&V.length>0?ie(_.__webglFramebuffer[0],M):ie(_.__webglFramebuffer,M)}else if(C){_.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[V]),_.__webglDepthbuffer[V]===void 0)_.__webglDepthbuffer[V]=n.createRenderbuffer(),U(_.__webglDepthbuffer[V],M,!1);else{const W=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,k)}}else{const V=M.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),U(_.__webglDepthbuffer,M,!1);else{const W=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,k)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(M,_,C){const V=i.get(M);_!==void 0&&Me(V.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&oe(M)}function Ue(M){const _=M.texture,C=i.get(M),V=i.get(_);M.addEventListener("dispose",P);const W=M.textures,k=M.isWebGLCubeRenderTarget===!0,pe=W.length>1;if(pe||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=_.version,o.memory.textures++),k){C.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(_.mipmaps&&_.mipmaps.length>0){C.__webglFramebuffer[ce]=[];for(let we=0;we<_.mipmaps.length;we++)C.__webglFramebuffer[ce][we]=n.createFramebuffer()}else C.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){C.__webglFramebuffer=[];for(let ce=0;ce<_.mipmaps.length;ce++)C.__webglFramebuffer[ce]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(pe)for(let ce=0,we=W.length;ce<we;ce++){const Ce=i.get(W[ce]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),o.memory.textures++)}if(M.samples>0&&G(M)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let ce=0;ce<W.length;ce++){const we=W[ce];C.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[ce]);const Ce=s.convert(we.format,we.colorSpace),ue=s.convert(we.type),ve=b(we.internalFormat,Ce,ue,we.colorSpace,M.isXRRenderTarget===!0),Pe=$(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,ve,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,C.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),U(C.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),Ie(n.TEXTURE_CUBE_MAP,_);for(let ce=0;ce<6;ce++)if(_.mipmaps&&_.mipmaps.length>0)for(let we=0;we<_.mipmaps.length;we++)Me(C.__webglFramebuffer[ce][we],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we);else Me(C.__webglFramebuffer[ce],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(_)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let ce=0,we=W.length;ce<we;ce++){const Ce=W[ce],ue=i.get(Ce);t.bindTexture(n.TEXTURE_2D,ue.__webglTexture),Ie(n.TEXTURE_2D,Ce),Me(C.__webglFramebuffer,M,Ce,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),m(Ce)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ce=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,V.__webglTexture),Ie(ce,_),_.mipmaps&&_.mipmaps.length>0)for(let we=0;we<_.mipmaps.length;we++)Me(C.__webglFramebuffer[we],M,_,n.COLOR_ATTACHMENT0,ce,we);else Me(C.__webglFramebuffer,M,_,n.COLOR_ATTACHMENT0,ce,0);m(_)&&p(ce),t.unbindTexture()}M.depthBuffer&&oe(M)}function w(M){const _=M.textures;for(let C=0,V=_.length;C<V;C++){const W=_[C];if(m(W)){const k=A(M),pe=i.get(W).__webglTexture;t.bindTexture(k,pe),p(k),t.unbindTexture()}}}const R=[],x=[];function Q(M){if(M.samples>0){if(G(M)===!1){const _=M.textures,C=M.width,V=M.height;let W=n.COLOR_BUFFER_BIT;const k=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(M),ce=_.length>1;if(ce)for(let Ce=0;Ce<_.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const we=M.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Ce=0;Ce<_.length;Ce++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[Ce]);const ue=i.get(_[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ue,0)}n.blitFramebuffer(0,0,C,V,0,0,C,V,W,n.NEAREST),l===!0&&(R.length=0,x.length=0,R.push(n.COLOR_ATTACHMENT0+Ce),M.depthBuffer&&M.resolveDepthBuffer===!1&&(R.push(k),x.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,x)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,R))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let Ce=0;Ce<_.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,pe.__webglColorRenderbuffer[Ce]);const ue=i.get(_[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const _=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function $(M){return Math.min(r.maxSamples,M.samples)}function G(M){const _=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Z(M){const _=o.render.frame;u.get(M)!==_&&(u.set(M,_),M.update())}function le(M,_){const C=M.colorSpace,V=M.format,W=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||C!==Mr&&C!==oi&&(Ze.getTransfer(C)===at?(V!==en||W!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),_}function j(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=ee,this.setTexture2D=fe,this.setTexture2DArray=K,this.setTexture3D=re,this.setTextureCube=H,this.rebindTextures=ae,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=w,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=G}function yE(n,e){function t(i,r=oi){let s;const o=Ze.getTransfer(r);if(i===An)return n.UNSIGNED_BYTE;if(i===_c)return n.UNSIGNED_SHORT_4_4_4_4;if(i===vc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Td)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ed)return n.BYTE;if(i===bd)return n.SHORT;if(i===ls)return n.UNSIGNED_SHORT;if(i===gc)return n.INT;if(i===Oi)return n.UNSIGNED_INT;if(i===fn)return n.FLOAT;if(i===xs)return n.HALF_FLOAT;if(i===Ad)return n.ALPHA;if(i===wd)return n.RGB;if(i===en)return n.RGBA;if(i===us)return n.DEPTH_COMPONENT;if(i===fs)return n.DEPTH_STENCIL;if(i===xc)return n.RED;if(i===Mc)return n.RED_INTEGER;if(i===Rd)return n.RG;if(i===Sc)return n.RG_INTEGER;if(i===yc)return n.RGBA_INTEGER;if(i===so||i===oo||i===ao||i===lo)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===so)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===so)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===oo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ao)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===lo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_l||i===vl||i===xl||i===Ml)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===_l)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ml)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sl||i===yl||i===El)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Sl||i===yl)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===El)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===bl||i===Tl||i===Al||i===wl||i===Rl||i===Cl||i===Pl||i===Il||i===Dl||i===Ll||i===Ul||i===Nl||i===Fl||i===Ol)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===bl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Tl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Al)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Rl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Cl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Pl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Il)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Dl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ll)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ul)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ol)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===co||i===Bl||i===zl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===co)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cd||i===Vl||i===Hl||i===kl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===co)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Vl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===cs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const EE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class TE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Pt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new di({vertexShader:EE,fragmentShader:bE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $t(new Vo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AE extends Er{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const v=new TE,m=t.getContextAttributes();let p=null,A=null;const b=[],y=[],D=new Je;let I=null;const P=new Vt;P.viewport=new Qe;const B=new Vt;B.viewport=new Qe;const T=[P,B],E=new Bx;let L=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let de=b[te];return de===void 0&&(de=new Ra,b[te]=de),de.getTargetRaySpace()},this.getControllerGrip=function(te){let de=b[te];return de===void 0&&(de=new Ra,b[te]=de),de.getGripSpace()},this.getHand=function(te){let de=b[te];return de===void 0&&(de=new Ra,b[te]=de),de.getHandSpace()};function q(te){const de=y.indexOf(te.inputSource);if(de===-1)return;const Me=b[de];Me!==void 0&&(Me.update(te.inputSource,te.frame,c||o),Me.dispatchEvent({type:te.type,data:te.inputSource}))}function ne(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",ne),r.removeEventListener("inputsourceschange",fe);for(let te=0;te<b.length;te++){const de=y[te];de!==null&&(y[te]=null,b[te].disconnect(de))}L=null,ee=null,v.reset(),e.setRenderTarget(p),d=null,h=null,f=null,r=null,A=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",ne),r.addEventListener("inputsourceschange",fe),m.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(D),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,U=null,ie=null;m.depth&&(ie=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=m.stencil?fs:us,U=m.stencil?cs:Oi);const oe={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(oe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),A=new Bi(h.textureWidth,h.textureHeight,{format:en,type:An,depthTexture:new Xd(h.textureWidth,h.textureHeight,U,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,Me),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),A=new Bi(d.framebufferWidth,d.framebufferHeight,{format:en,type:An,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),$e.setContext(r),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function fe(te){for(let de=0;de<te.removed.length;de++){const Me=te.removed[de],U=y.indexOf(Me);U>=0&&(y[U]=null,b[U].disconnect(Me))}for(let de=0;de<te.added.length;de++){const Me=te.added[de];let U=y.indexOf(Me);if(U===-1){for(let oe=0;oe<b.length;oe++)if(oe>=y.length){y.push(Me),U=oe;break}else if(y[oe]===null){y[oe]=Me,U=oe;break}if(U===-1)break}const ie=b[U];ie&&ie.connect(Me)}}const K=new z,re=new z;function H(te,de,Me){K.setFromMatrixPosition(de.matrixWorld),re.setFromMatrixPosition(Me.matrixWorld);const U=K.distanceTo(re),ie=de.projectionMatrix.elements,oe=Me.projectionMatrix.elements,ae=ie[14]/(ie[10]-1),Ue=ie[14]/(ie[10]+1),w=(ie[9]+1)/ie[5],R=(ie[9]-1)/ie[5],x=(ie[8]-1)/ie[0],Q=(oe[8]+1)/oe[0],$=ae*x,G=ae*Q,Z=U/(-x+Q),le=Z*-x;if(de.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(le),te.translateZ(Z),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),ie[10]===-1)te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const j=ae+Z,M=Ue+Z,_=$-le,C=G+(U-le),V=w*Ue/M*j,W=R*Ue/M*j;te.projectionMatrix.makePerspective(_,C,V,W,j,M),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function me(te,de){de===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(de.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let de=te.near,Me=te.far;v.texture!==null&&(v.depthNear>0&&(de=v.depthNear),v.depthFar>0&&(Me=v.depthFar)),E.near=B.near=P.near=de,E.far=B.far=P.far=Me,(L!==E.near||ee!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),L=E.near,ee=E.far),P.layers.mask=te.layers.mask|2,B.layers.mask=te.layers.mask|4,E.layers.mask=P.layers.mask|B.layers.mask;const U=te.parent,ie=E.cameras;me(E,U);for(let oe=0;oe<ie.length;oe++)me(ie[oe],U);ie.length===2?H(E,P,B):E.projectionMatrix.copy(P.projectionMatrix),xe(te,E,U)};function xe(te,de,Me){Me===null?te.matrix.copy(de.matrixWorld):(te.matrix.copy(Me.matrixWorld),te.matrix.invert(),te.matrix.multiply(de.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Sr*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(te){l=te,h!==null&&(h.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(E)};let Ae=null;function Ie(te,de){if(u=de.getViewerPose(c||o),g=de,u!==null){const Me=u.views;d!==null&&(e.setRenderTargetFramebuffer(A,d.framebuffer),e.setRenderTarget(A));let U=!1;Me.length!==E.cameras.length&&(E.cameras.length=0,U=!0);for(let ae=0;ae<Me.length;ae++){const Ue=Me[ae];let w=null;if(d!==null)w=d.getViewport(Ue);else{const x=f.getViewSubImage(h,Ue);w=x.viewport,ae===0&&(e.setRenderTargetTextures(A,x.colorTexture,x.depthStencilTexture),e.setRenderTarget(A))}let R=T[ae];R===void 0&&(R=new Vt,R.layers.enable(ae),R.viewport=new Qe,T[ae]=R),R.matrix.fromArray(Ue.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(Ue.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(w.x,w.y,w.width,w.height),ae===0&&(E.matrix.copy(R.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),U===!0&&E.cameras.push(R)}const ie=r.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const ae=f.getDepthInformation(Me[0]);ae&&ae.isValid&&ae.texture&&v.init(e,ae,r.renderState)}}for(let Me=0;Me<b.length;Me++){const U=y[Me],ie=b[Me];U!==null&&ie!==void 0&&ie.update(U,de,c||o)}Ae&&Ae(te,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),g=null}const $e=new jd;$e.setAnimationLoop(Ie),this.setAnimationLoop=function(te){Ae=te},this.dispose=function(){}}}const wi=new wn,wE=new qe;function RE(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Bd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,A,b,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,A,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ht&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ht&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),b=A.envMap,y=A.envMapRotation;b&&(m.envMap.value=b,wi.copy(y),wi.x*=-1,wi.y*=-1,wi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),m.envMapRotation.value.setFromMatrix4(wE.makeRotationFromEuler(wi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function CE(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,b){const y=b.program;i.uniformBlockBinding(A,y)}function c(A,b){let y=r[A.id];y===void 0&&(g(A),y=u(A),r[A.id]=y,A.addEventListener("dispose",m));const D=b.program;i.updateUBOMapping(A,D);const I=e.render.frame;s[A.id]!==I&&(h(A),s[A.id]=I)}function u(A){const b=f();A.__bindingPointIndex=b;const y=n.createBuffer(),D=A.__size,I=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,D,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,y),y}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const b=r[A.id],y=A.uniforms,D=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let I=0,P=y.length;I<P;I++){const B=Array.isArray(y[I])?y[I]:[y[I]];for(let T=0,E=B.length;T<E;T++){const L=B[T];if(d(L,I,T,D)===!0){const ee=L.__offset,q=Array.isArray(L.value)?L.value:[L.value];let ne=0;for(let fe=0;fe<q.length;fe++){const K=q[fe],re=v(K);typeof K=="number"||typeof K=="boolean"?(L.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,ee+ne,L.__data)):K.isMatrix3?(L.__data[0]=K.elements[0],L.__data[1]=K.elements[1],L.__data[2]=K.elements[2],L.__data[3]=0,L.__data[4]=K.elements[3],L.__data[5]=K.elements[4],L.__data[6]=K.elements[5],L.__data[7]=0,L.__data[8]=K.elements[6],L.__data[9]=K.elements[7],L.__data[10]=K.elements[8],L.__data[11]=0):(K.toArray(L.__data,ne),ne+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ee,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(A,b,y,D){const I=A.value,P=b+"_"+y;if(D[P]===void 0)return typeof I=="number"||typeof I=="boolean"?D[P]=I:D[P]=I.clone(),!0;{const B=D[P];if(typeof I=="number"||typeof I=="boolean"){if(B!==I)return D[P]=I,!0}else if(B.equals(I)===!1)return B.copy(I),!0}return!1}function g(A){const b=A.uniforms;let y=0;const D=16;for(let P=0,B=b.length;P<B;P++){const T=Array.isArray(b[P])?b[P]:[b[P]];for(let E=0,L=T.length;E<L;E++){const ee=T[E],q=Array.isArray(ee.value)?ee.value:[ee.value];for(let ne=0,fe=q.length;ne<fe;ne++){const K=q[ne],re=v(K),H=y%D,me=H%re.boundary,xe=H+me;y+=me,xe!==0&&D-xe<re.storage&&(y+=D-xe),ee.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=y,y+=re.storage}}}const I=y%D;return I>0&&(y+=D-I),A.__size=y,A.__cache={},this}function v(A){const b={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=48,b.storage=48):A.isMatrix4?(b.boundary=64,b.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),b}function m(A){const b=A.target;b.removeEventListener("dispose",m);const y=o.indexOf(b.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(const A in r)n.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class PE{constructor(e={}){const{canvas:t=Nv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const A=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let D=!1;this._outputColorSpace=Qt;let I=0,P=0,B=null,T=-1,E=null;const L=new Qe,ee=new Qe;let q=null;const ne=new Ye(0);let fe=0,K=t.width,re=t.height,H=1,me=null,xe=null;const Ae=new Qe(0,0,K,re),Ie=new Qe(0,0,K,re);let $e=!1;const te=new Ac;let de=!1,Me=!1;const U=new qe,ie=new qe,oe=new z,ae=new Qe,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let w=!1;function R(){return B===null?H:1}let x=i;function Q(S,F){return t.getContext(S,F)}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mc}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),x===null){const F="webgl2";if(x=Q(F,S),x===null)throw Q(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let $,G,Z,le,j,M,_,C,V,W,k,pe,ce,we,Ce,ue,ve,Pe,Ne,ge,Oe,ze,ct,N;function ye(){$=new VS(x),$.init(),ze=new yE(x,$),G=new LS(x,$,e,ze),Z=new ME(x,$),G.reverseDepthBuffer&&h&&Z.buffers.depth.setReversed(!0),le=new GS(x),j=new aE,M=new SE(x,$,Z,j,G,ze,le),_=new NS(y),C=new zS(y),V=new jx(x),ct=new IS(x,V),W=new HS(x,V,le,ct),k=new XS(x,W,V,le),Ne=new WS(x,G,M),ue=new US(j),pe=new oE(y,_,C,$,G,ct,ue),ce=new RE(y,j),we=new cE,Ce=new mE($),Pe=new PS(y,_,C,Z,k,d,l),ve=new vE(y,k,G),N=new CE(x,le,G,Z),ge=new DS(x,$,le),Oe=new kS(x,$,le),le.programs=pe.programs,y.capabilities=G,y.extensions=$,y.properties=j,y.renderLists=we,y.shadowMap=ve,y.state=Z,y.info=le}ye();const J=new AE(y,x);this.xr=J,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const S=$.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=$.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(S){S!==void 0&&(H=S,this.setSize(K,re,!1))},this.getSize=function(S){return S.set(K,re)},this.setSize=function(S,F,X=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=S,re=F,t.width=Math.floor(S*H),t.height=Math.floor(F*H),X===!0&&(t.style.width=S+"px",t.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(K*H,re*H).floor()},this.setDrawingBufferSize=function(S,F,X){K=S,re=F,H=X,t.width=Math.floor(S*X),t.height=Math.floor(F*X),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(L)},this.getViewport=function(S){return S.copy(Ae)},this.setViewport=function(S,F,X,Y){S.isVector4?Ae.set(S.x,S.y,S.z,S.w):Ae.set(S,F,X,Y),Z.viewport(L.copy(Ae).multiplyScalar(H).round())},this.getScissor=function(S){return S.copy(Ie)},this.setScissor=function(S,F,X,Y){S.isVector4?Ie.set(S.x,S.y,S.z,S.w):Ie.set(S,F,X,Y),Z.scissor(ee.copy(Ie).multiplyScalar(H).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(S){Z.setScissorTest($e=S)},this.setOpaqueSort=function(S){me=S},this.setTransparentSort=function(S){xe=S},this.getClearColor=function(S){return S.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,X=!0){let Y=0;if(S){let O=!1;if(B!==null){const he=B.texture.format;O=he===yc||he===Sc||he===Mc}if(O){const he=B.texture.type,Se=he===An||he===Oi||he===ls||he===cs||he===_c||he===vc,Te=Pe.getClearColor(),Re=Pe.getClearAlpha(),Be=Te.r,Fe=Te.g,De=Te.b;Se?(g[0]=Be,g[1]=Fe,g[2]=De,g[3]=Re,x.clearBufferuiv(x.COLOR,0,g)):(v[0]=Be,v[1]=Fe,v[2]=De,v[3]=Re,x.clearBufferiv(x.COLOR,0,v))}else Y|=x.COLOR_BUFFER_BIT}F&&(Y|=x.DEPTH_BUFFER_BIT),X&&(Y|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Pe.dispose(),we.dispose(),Ce.dispose(),j.dispose(),_.dispose(),C.dispose(),k.dispose(),ct.dispose(),N.dispose(),pe.dispose(),J.dispose(),J.removeEventListener("sessionstart",Dc),J.removeEventListener("sessionend",Lc),vi.stop()};function se(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const S=le.autoReset,F=ve.enabled,X=ve.autoUpdate,Y=ve.needsUpdate,O=ve.type;ye(),le.autoReset=S,ve.enabled=F,ve.autoUpdate=X,ve.needsUpdate=Y,ve.type=O}function Ee(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function He(S){const F=S.target;F.removeEventListener("dispose",He),pt(F)}function pt(S){Tt(S),j.remove(S)}function Tt(S){const F=j.get(S).programs;F!==void 0&&(F.forEach(function(X){pe.releaseProgram(X)}),S.isShaderMaterial&&pe.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,X,Y,O,he){F===null&&(F=Ue);const Se=O.isMesh&&O.matrixWorld.determinant()<0,Te=ep(S,F,X,Y,O);Z.setMaterial(Y,Se);let Re=X.index,Be=1;if(Y.wireframe===!0){if(Re=W.getWireframeAttribute(X),Re===void 0)return;Be=2}const Fe=X.drawRange,De=X.attributes.position;let je=Fe.start*Be,et=(Fe.start+Fe.count)*Be;he!==null&&(je=Math.max(je,he.start*Be),et=Math.min(et,(he.start+he.count)*Be)),Re!==null?(je=Math.max(je,0),et=Math.min(et,Re.count)):De!=null&&(je=Math.max(je,0),et=Math.min(et,De.count));const _t=et-je;if(_t<0||_t===1/0)return;ct.setup(O,Y,Te,X,Re);let mt,Ke=ge;if(Re!==null&&(mt=V.get(Re),Ke=Oe,Ke.setIndex(mt)),O.isMesh)Y.wireframe===!0?(Z.setLineWidth(Y.wireframeLinewidth*R()),Ke.setMode(x.LINES)):Ke.setMode(x.TRIANGLES);else if(O.isLine){let Le=Y.linewidth;Le===void 0&&(Le=1),Z.setLineWidth(Le*R()),O.isLineSegments?Ke.setMode(x.LINES):O.isLineLoop?Ke.setMode(x.LINE_LOOP):Ke.setMode(x.LINE_STRIP)}else O.isPoints?Ke.setMode(x.POINTS):O.isSprite&&Ke.setMode(x.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)uo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ke.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if($.get("WEBGL_multi_draw"))Ke.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Le=O._multiDrawStarts,Et=O._multiDrawCounts,tt=O._multiDrawCount,rn=Re?V.get(Re).bytesPerElement:1,ki=j.get(Y).currentProgram.getUniforms();for(let kt=0;kt<tt;kt++)ki.setValue(x,"_gl_DrawID",kt),Ke.render(Le[kt]/rn,Et[kt])}else if(O.isInstancedMesh)Ke.renderInstances(je,_t,O.count);else if(X.isInstancedBufferGeometry){const Le=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Et=Math.min(X.instanceCount,Le);Ke.renderInstances(je,_t,Et)}else Ke.render(je,_t)};function st(S,F,X){S.transparent===!0&&S.side===Vn&&S.forceSinglePass===!1?(S.side=Ht,S.needsUpdate=!0,ys(S,F,X),S.side=hi,S.needsUpdate=!0,ys(S,F,X),S.side=Vn):ys(S,F,X)}this.compile=function(S,F,X=null){X===null&&(X=S),p=Ce.get(X),p.init(F),b.push(p),X.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),S!==X&&S.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const Y=new Set;return S.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const he=O.material;if(he)if(Array.isArray(he))for(let Se=0;Se<he.length;Se++){const Te=he[Se];st(Te,X,O),Y.add(Te)}else st(he,X,O),Y.add(he)}),p=b.pop(),Y},this.compileAsync=function(S,F,X=null){const Y=this.compile(S,F,X);return new Promise(O=>{function he(){if(Y.forEach(function(Se){j.get(Se).currentProgram.isReady()&&Y.delete(Se)}),Y.size===0){O(S);return}setTimeout(he,10)}$.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let nn=null;function Rn(S){nn&&nn(S)}function Dc(){vi.stop()}function Lc(){vi.start()}const vi=new jd;vi.setAnimationLoop(Rn),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(S){nn=S,J.setAnimationLoop(S),S===null?vi.stop():vi.start()},J.addEventListener("sessionstart",Dc),J.addEventListener("sessionend",Lc),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(F),F=J.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,F,B),p=Ce.get(S,b.length),p.init(F),b.push(p),ie.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),te.setFromProjectionMatrix(ie),Me=this.localClippingEnabled,de=ue.init(this.clippingPlanes,Me),m=we.get(S,A.length),m.init(),A.push(m),J.enabled===!0&&J.isPresenting===!0){const he=y.xr.getDepthSensingMesh();he!==null&&Xo(he,F,-1/0,y.sortObjects)}Xo(S,F,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(me,xe),w=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,w&&Pe.addToRenderList(m,S),this.info.render.frame++,de===!0&&ue.beginShadows();const X=p.state.shadowsArray;ve.render(X,S,F),de===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,O=m.transmissive;if(p.setupLights(),F.isArrayCamera){const he=F.cameras;if(O.length>0)for(let Se=0,Te=he.length;Se<Te;Se++){const Re=he[Se];Nc(Y,O,S,Re)}w&&Pe.render(S);for(let Se=0,Te=he.length;Se<Te;Se++){const Re=he[Se];Uc(m,S,Re,Re.viewport)}}else O.length>0&&Nc(Y,O,S,F),w&&Pe.render(S),Uc(m,S,F);B!==null&&P===0&&(M.updateMultisampleRenderTarget(B),M.updateRenderTargetMipmap(B)),S.isScene===!0&&S.onAfterRender(y,S,F),ct.resetDefaultState(),T=-1,E=null,b.pop(),b.length>0?(p=b[b.length-1],de===!0&&ue.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Xo(S,F,X,Y){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||te.intersectsSprite(S)){Y&&ae.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ie);const Se=k.update(S),Te=S.material;Te.visible&&m.push(S,Se,Te,X,ae.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||te.intersectsObject(S))){const Se=k.update(S),Te=S.material;if(Y&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ae.copy(S.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),ae.copy(Se.boundingSphere.center)),ae.applyMatrix4(S.matrixWorld).applyMatrix4(ie)),Array.isArray(Te)){const Re=Se.groups;for(let Be=0,Fe=Re.length;Be<Fe;Be++){const De=Re[Be],je=Te[De.materialIndex];je&&je.visible&&m.push(S,Se,je,X,ae.z,De)}}else Te.visible&&m.push(S,Se,Te,X,ae.z,null)}}const he=S.children;for(let Se=0,Te=he.length;Se<Te;Se++)Xo(he[Se],F,X,Y)}function Uc(S,F,X,Y){const O=S.opaque,he=S.transmissive,Se=S.transparent;p.setupLightsView(X),de===!0&&ue.setGlobalState(y.clippingPlanes,X),Y&&Z.viewport(L.copy(Y)),O.length>0&&Ss(O,F,X),he.length>0&&Ss(he,F,X),Se.length>0&&Ss(Se,F,X),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Nc(S,F,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new Bi(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?xs:An,minFilter:Ui,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const he=p.state.transmissionRenderTarget[Y.id],Se=Y.viewport||L;he.setSize(Se.z*y.transmissionResolutionScale,Se.w*y.transmissionResolutionScale);const Te=y.getRenderTarget();y.setRenderTarget(he),y.getClearColor(ne),fe=y.getClearAlpha(),fe<1&&y.setClearColor(16777215,.5),y.clear(),w&&Pe.render(X);const Re=y.toneMapping;y.toneMapping=ui;const Be=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),de===!0&&ue.setGlobalState(y.clippingPlanes,Y),Ss(S,X,Y),M.updateMultisampleRenderTarget(he),M.updateRenderTargetMipmap(he),$.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let De=0,je=F.length;De<je;De++){const et=F[De],_t=et.object,mt=et.geometry,Ke=et.material,Le=et.group;if(Ke.side===Vn&&_t.layers.test(Y.layers)){const Et=Ke.side;Ke.side=Ht,Ke.needsUpdate=!0,Fc(_t,X,Y,mt,Ke,Le),Ke.side=Et,Ke.needsUpdate=!0,Fe=!0}}Fe===!0&&(M.updateMultisampleRenderTarget(he),M.updateRenderTargetMipmap(he))}y.setRenderTarget(Te),y.setClearColor(ne,fe),Be!==void 0&&(Y.viewport=Be),y.toneMapping=Re}function Ss(S,F,X){const Y=F.isScene===!0?F.overrideMaterial:null;for(let O=0,he=S.length;O<he;O++){const Se=S[O],Te=Se.object,Re=Se.geometry,Be=Se.group;let Fe=Se.material;Fe.allowOverride===!0&&Y!==null&&(Fe=Y),Te.layers.test(X.layers)&&Fc(Te,F,X,Re,Fe,Be)}}function Fc(S,F,X,Y,O,he){S.onBeforeRender(y,F,X,Y,O,he),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(y,F,X,Y,S,he),O.transparent===!0&&O.side===Vn&&O.forceSinglePass===!1?(O.side=Ht,O.needsUpdate=!0,y.renderBufferDirect(X,F,Y,O,S,he),O.side=hi,O.needsUpdate=!0,y.renderBufferDirect(X,F,Y,O,S,he),O.side=Vn):y.renderBufferDirect(X,F,Y,O,S,he),S.onAfterRender(y,F,X,Y,O,he)}function ys(S,F,X){F.isScene!==!0&&(F=Ue);const Y=j.get(S),O=p.state.lights,he=p.state.shadowsArray,Se=O.state.version,Te=pe.getParameters(S,O.state,he,F,X),Re=pe.getProgramCacheKey(Te);let Be=Y.programs;Y.environment=S.isMeshStandardMaterial?F.environment:null,Y.fog=F.fog,Y.envMap=(S.isMeshStandardMaterial?C:_).get(S.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,Be===void 0&&(S.addEventListener("dispose",He),Be=new Map,Y.programs=Be);let Fe=Be.get(Re);if(Fe!==void 0){if(Y.currentProgram===Fe&&Y.lightsStateVersion===Se)return Bc(S,Te),Fe}else Te.uniforms=pe.getUniforms(S),S.onBeforeCompile(Te,y),Fe=pe.acquireProgram(Te,Re),Be.set(Re,Fe),Y.uniforms=Te.uniforms;const De=Y.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(De.clippingPlanes=ue.uniform),Bc(S,Te),Y.needsLights=np(S),Y.lightsStateVersion=Se,Y.needsLights&&(De.ambientLightColor.value=O.state.ambient,De.lightProbe.value=O.state.probe,De.directionalLights.value=O.state.directional,De.directionalLightShadows.value=O.state.directionalShadow,De.spotLights.value=O.state.spot,De.spotLightShadows.value=O.state.spotShadow,De.rectAreaLights.value=O.state.rectArea,De.ltc_1.value=O.state.rectAreaLTC1,De.ltc_2.value=O.state.rectAreaLTC2,De.pointLights.value=O.state.point,De.pointLightShadows.value=O.state.pointShadow,De.hemisphereLights.value=O.state.hemi,De.directionalShadowMap.value=O.state.directionalShadowMap,De.directionalShadowMatrix.value=O.state.directionalShadowMatrix,De.spotShadowMap.value=O.state.spotShadowMap,De.spotLightMatrix.value=O.state.spotLightMatrix,De.spotLightMap.value=O.state.spotLightMap,De.pointShadowMap.value=O.state.pointShadowMap,De.pointShadowMatrix.value=O.state.pointShadowMatrix),Y.currentProgram=Fe,Y.uniformsList=null,Fe}function Oc(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=fo.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function Bc(S,F){const X=j.get(S);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function ep(S,F,X,Y,O){F.isScene!==!0&&(F=Ue),M.resetTextureUnits();const he=F.fog,Se=Y.isMeshStandardMaterial?F.environment:null,Te=B===null?y.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Mr,Re=(Y.isMeshStandardMaterial?C:_).get(Y.envMap||Se),Be=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Fe=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),De=!!X.morphAttributes.position,je=!!X.morphAttributes.normal,et=!!X.morphAttributes.color;let _t=ui;Y.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(_t=y.toneMapping);const mt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ke=mt!==void 0?mt.length:0,Le=j.get(Y),Et=p.state.lights;if(de===!0&&(Me===!0||S!==E)){const Dt=S===E&&Y.id===T;ue.setState(Y,S,Dt)}let tt=!1;Y.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Et.state.version||Le.outputColorSpace!==Te||O.isBatchedMesh&&Le.batching===!1||!O.isBatchedMesh&&Le.batching===!0||O.isBatchedMesh&&Le.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Le.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Le.instancing===!1||!O.isInstancedMesh&&Le.instancing===!0||O.isSkinnedMesh&&Le.skinning===!1||!O.isSkinnedMesh&&Le.skinning===!0||O.isInstancedMesh&&Le.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Le.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Le.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Le.instancingMorph===!1&&O.morphTexture!==null||Le.envMap!==Re||Y.fog===!0&&Le.fog!==he||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ue.numPlanes||Le.numIntersection!==ue.numIntersection)||Le.vertexAlphas!==Be||Le.vertexTangents!==Fe||Le.morphTargets!==De||Le.morphNormals!==je||Le.morphColors!==et||Le.toneMapping!==_t||Le.morphTargetsCount!==Ke)&&(tt=!0):(tt=!0,Le.__version=Y.version);let rn=Le.currentProgram;tt===!0&&(rn=ys(Y,F,O));let ki=!1,kt=!1,Cr=!1;const ht=rn.getUniforms(),Kt=Le.uniforms;if(Z.useProgram(rn.program)&&(ki=!0,kt=!0,Cr=!0),Y.id!==T&&(T=Y.id,kt=!0),ki||E!==S){Z.buffers.depth.getReversed()?(U.copy(S.projectionMatrix),Ov(U),Bv(U),ht.setValue(x,"projectionMatrix",U)):ht.setValue(x,"projectionMatrix",S.projectionMatrix),ht.setValue(x,"viewMatrix",S.matrixWorldInverse);const zt=ht.map.cameraPosition;zt!==void 0&&zt.setValue(x,oe.setFromMatrixPosition(S.matrixWorld)),G.logarithmicDepthBuffer&&ht.setValue(x,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ht.setValue(x,"isOrthographic",S.isOrthographicCamera===!0),E!==S&&(E=S,kt=!0,Cr=!0)}if(O.isSkinnedMesh){ht.setOptional(x,O,"bindMatrix"),ht.setOptional(x,O,"bindMatrixInverse");const Dt=O.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),ht.setValue(x,"boneTexture",Dt.boneTexture,M))}O.isBatchedMesh&&(ht.setOptional(x,O,"batchingTexture"),ht.setValue(x,"batchingTexture",O._matricesTexture,M),ht.setOptional(x,O,"batchingIdTexture"),ht.setValue(x,"batchingIdTexture",O._indirectTexture,M),ht.setOptional(x,O,"batchingColorTexture"),O._colorsTexture!==null&&ht.setValue(x,"batchingColorTexture",O._colorsTexture,M));const Zt=X.morphAttributes;if((Zt.position!==void 0||Zt.normal!==void 0||Zt.color!==void 0)&&Ne.update(O,X,rn),(kt||Le.receiveShadow!==O.receiveShadow)&&(Le.receiveShadow=O.receiveShadow,ht.setValue(x,"receiveShadow",O.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Kt.envMap.value=Re,Kt.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&F.environment!==null&&(Kt.envMapIntensity.value=F.environmentIntensity),kt&&(ht.setValue(x,"toneMappingExposure",y.toneMappingExposure),Le.needsLights&&tp(Kt,Cr),he&&Y.fog===!0&&ce.refreshFogUniforms(Kt,he),ce.refreshMaterialUniforms(Kt,Y,H,re,p.state.transmissionRenderTarget[S.id]),fo.upload(x,Oc(Le),Kt,M)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(fo.upload(x,Oc(Le),Kt,M),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ht.setValue(x,"center",O.center),ht.setValue(x,"modelViewMatrix",O.modelViewMatrix),ht.setValue(x,"normalMatrix",O.normalMatrix),ht.setValue(x,"modelMatrix",O.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Dt=Y.uniformsGroups;for(let zt=0,qo=Dt.length;zt<qo;zt++){const xi=Dt[zt];N.update(xi,rn),N.bind(xi,rn)}}return rn}function tp(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function np(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(S,F,X){const Y=j.get(S);Y.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),j.get(S.texture).__webglTexture=F,j.get(S.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:X,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){const X=j.get(S);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0};const ip=x.createFramebuffer();this.setRenderTarget=function(S,F=0,X=0){B=S,I=F,P=X;let Y=!0,O=null,he=!1,Se=!1;if(S){const Re=j.get(S);if(Re.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(x.FRAMEBUFFER,null),Y=!1;else if(Re.__webglFramebuffer===void 0)M.setupRenderTarget(S);else if(Re.__hasExternalTextures)M.rebindTextures(S,j.get(S.texture).__webglTexture,j.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const De=S.depthTexture;if(Re.__boundDepthTexture!==De){if(De!==null&&j.has(De)&&(S.width!==De.image.width||S.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(S)}}const Be=S.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Se=!0);const Fe=j.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Fe[F])?O=Fe[F][X]:O=Fe[F],he=!0):S.samples>0&&M.useMultisampledRTT(S)===!1?O=j.get(S).__webglMultisampledFramebuffer:Array.isArray(Fe)?O=Fe[X]:O=Fe,L.copy(S.viewport),ee.copy(S.scissor),q=S.scissorTest}else L.copy(Ae).multiplyScalar(H).floor(),ee.copy(Ie).multiplyScalar(H).floor(),q=$e;if(X!==0&&(O=ip),Z.bindFramebuffer(x.FRAMEBUFFER,O)&&Y&&Z.drawBuffers(S,O),Z.viewport(L),Z.scissor(ee),Z.setScissorTest(q),he){const Re=j.get(S.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+F,Re.__webglTexture,X)}else if(Se){const Re=j.get(S.texture),Be=F;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,Re.__webglTexture,X,Be)}else if(S!==null&&X!==0){const Re=j.get(S.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Re.__webglTexture,X)}T=-1},this.readRenderTargetPixels=function(S,F,X,Y,O,he,Se){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=j.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te){Z.bindFramebuffer(x.FRAMEBUFFER,Te);try{const Re=S.texture,Be=Re.format,Fe=Re.type;if(!G.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!G.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-Y&&X>=0&&X<=S.height-O&&x.readPixels(F,X,Y,O,ze.convert(Be),ze.convert(Fe),he)}finally{const Re=B!==null?j.get(B).__webglFramebuffer:null;Z.bindFramebuffer(x.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(S,F,X,Y,O,he,Se){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=j.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te)if(F>=0&&F<=S.width-Y&&X>=0&&X<=S.height-O){Z.bindFramebuffer(x.FRAMEBUFFER,Te);const Re=S.texture,Be=Re.format,Fe=Re.type;if(!G.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!G.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const De=x.createBuffer();x.bindBuffer(x.PIXEL_PACK_BUFFER,De),x.bufferData(x.PIXEL_PACK_BUFFER,he.byteLength,x.STREAM_READ),x.readPixels(F,X,Y,O,ze.convert(Be),ze.convert(Fe),0);const je=B!==null?j.get(B).__webglFramebuffer:null;Z.bindFramebuffer(x.FRAMEBUFFER,je);const et=x.fenceSync(x.SYNC_GPU_COMMANDS_COMPLETE,0);return x.flush(),await Fv(x,et,4),x.bindBuffer(x.PIXEL_PACK_BUFFER,De),x.getBufferSubData(x.PIXEL_PACK_BUFFER,0,he),x.deleteBuffer(De),x.deleteSync(et),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,X=0){const Y=Math.pow(2,-X),O=Math.floor(S.image.width*Y),he=Math.floor(S.image.height*Y),Se=F!==null?F.x:0,Te=F!==null?F.y:0;M.setTexture2D(S,0),x.copyTexSubImage2D(x.TEXTURE_2D,X,0,0,Se,Te,O,he),Z.unbindTexture()};const rp=x.createFramebuffer(),sp=x.createFramebuffer();this.copyTextureToTexture=function(S,F,X=null,Y=null,O=0,he=null){he===null&&(O!==0?(uo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=O,O=0):he=0);let Se,Te,Re,Be,Fe,De,je,et,_t;const mt=S.isCompressedTexture?S.mipmaps[he]:S.image;if(X!==null)Se=X.max.x-X.min.x,Te=X.max.y-X.min.y,Re=X.isBox3?X.max.z-X.min.z:1,Be=X.min.x,Fe=X.min.y,De=X.isBox3?X.min.z:0;else{const Zt=Math.pow(2,-O);Se=Math.floor(mt.width*Zt),Te=Math.floor(mt.height*Zt),S.isDataArrayTexture?Re=mt.depth:S.isData3DTexture?Re=Math.floor(mt.depth*Zt):Re=1,Be=0,Fe=0,De=0}Y!==null?(je=Y.x,et=Y.y,_t=Y.z):(je=0,et=0,_t=0);const Ke=ze.convert(F.format),Le=ze.convert(F.type);let Et;F.isData3DTexture?(M.setTexture3D(F,0),Et=x.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(M.setTexture2DArray(F,0),Et=x.TEXTURE_2D_ARRAY):(M.setTexture2D(F,0),Et=x.TEXTURE_2D),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,F.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,F.unpackAlignment);const tt=x.getParameter(x.UNPACK_ROW_LENGTH),rn=x.getParameter(x.UNPACK_IMAGE_HEIGHT),ki=x.getParameter(x.UNPACK_SKIP_PIXELS),kt=x.getParameter(x.UNPACK_SKIP_ROWS),Cr=x.getParameter(x.UNPACK_SKIP_IMAGES);x.pixelStorei(x.UNPACK_ROW_LENGTH,mt.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,mt.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Be),x.pixelStorei(x.UNPACK_SKIP_ROWS,Fe),x.pixelStorei(x.UNPACK_SKIP_IMAGES,De);const ht=S.isDataArrayTexture||S.isData3DTexture,Kt=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){const Zt=j.get(S),Dt=j.get(F),zt=j.get(Zt.__renderTarget),qo=j.get(Dt.__renderTarget);Z.bindFramebuffer(x.READ_FRAMEBUFFER,zt.__webglFramebuffer),Z.bindFramebuffer(x.DRAW_FRAMEBUFFER,qo.__webglFramebuffer);for(let xi=0;xi<Re;xi++)ht&&(x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,j.get(S).__webglTexture,O,De+xi),x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,j.get(F).__webglTexture,he,_t+xi)),x.blitFramebuffer(Be,Fe,Se,Te,je,et,Se,Te,x.DEPTH_BUFFER_BIT,x.NEAREST);Z.bindFramebuffer(x.READ_FRAMEBUFFER,null),Z.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else if(O!==0||S.isRenderTargetTexture||j.has(S)){const Zt=j.get(S),Dt=j.get(F);Z.bindFramebuffer(x.READ_FRAMEBUFFER,rp),Z.bindFramebuffer(x.DRAW_FRAMEBUFFER,sp);for(let zt=0;zt<Re;zt++)ht?x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Zt.__webglTexture,O,De+zt):x.framebufferTexture2D(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Zt.__webglTexture,O),Kt?x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Dt.__webglTexture,he,_t+zt):x.framebufferTexture2D(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Dt.__webglTexture,he),O!==0?x.blitFramebuffer(Be,Fe,Se,Te,je,et,Se,Te,x.COLOR_BUFFER_BIT,x.NEAREST):Kt?x.copyTexSubImage3D(Et,he,je,et,_t+zt,Be,Fe,Se,Te):x.copyTexSubImage2D(Et,he,je,et,Be,Fe,Se,Te);Z.bindFramebuffer(x.READ_FRAMEBUFFER,null),Z.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else Kt?S.isDataTexture||S.isData3DTexture?x.texSubImage3D(Et,he,je,et,_t,Se,Te,Re,Ke,Le,mt.data):F.isCompressedArrayTexture?x.compressedTexSubImage3D(Et,he,je,et,_t,Se,Te,Re,Ke,mt.data):x.texSubImage3D(Et,he,je,et,_t,Se,Te,Re,Ke,Le,mt):S.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,he,je,et,Se,Te,Ke,Le,mt.data):S.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,he,je,et,mt.width,mt.height,Ke,mt.data):x.texSubImage2D(x.TEXTURE_2D,he,je,et,Se,Te,Ke,Le,mt);x.pixelStorei(x.UNPACK_ROW_LENGTH,tt),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,rn),x.pixelStorei(x.UNPACK_SKIP_PIXELS,ki),x.pixelStorei(x.UNPACK_SKIP_ROWS,kt),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Cr),he===0&&F.generateMipmaps&&x.generateMipmap(Et),Z.unbindTexture()},this.copyTextureToTexture3D=function(S,F,X=null,Y=null,O=0){return uo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,F,X,Y,O)},this.initRenderTarget=function(S){j.get(S).__webglFramebuffer===void 0&&M.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?M.setTextureCube(S,0):S.isData3DTexture?M.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?M.setTexture2DArray(S,0):M.setTexture2D(S,0),Z.unbindTexture()},this.resetState=function(){I=0,P=0,B=null,Z.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}const IE="/assets/cat-7F61-RBF.png",DE=Vi({__name:"ThreeCanvas",setup(n,{expose:e}){const t=ds(null);let i,r,s,o;function a(f){return new Promise((h,d)=>{new Lx().load(f,h,void 0,d)})}Fh(async()=>{r=new cx,s=new Vt(75,window.innerWidth/window.innerHeight,.1,1e3),s.position.z=3,o=new PE({antialias:!0}),o.setSize(window.innerWidth,window.innerHeight),t.value&&t.value.appendChild(o.domElement);const f=new Tr(1,1,1),h=await a(IE);h.anisotropy=o.capabilities.getMaxAnisotropy();const d=new Tc({map:h,color:16777215});i=new $t(f,d),i.position.x=0,i.rotation.x=Math.PI/4,i.rotation.y=Math.PI/4,r.add(i);const g=new Fx(16777215,1,100);g.position.set(0,0,10),r.add(g),o.render(r,s),window.addEventListener("resize",c)}),cc(()=>{window.removeEventListener("resize",c)});const l=()=>Math.floor(Math.random()*16777215),c=()=>{const f=window.innerWidth,h=window.innerHeight;s.aspect=f/h,s.updateProjectionMatrix(),o.setSize(f,h),o.render(r,s)};return e({rotateOnce:()=>{const h=performance.now(),d=i.rotation.x,g=i.rotation.y,v=.5*Math.PI;i.material.color.set(l());function m(p){const A=p-h,b=Math.min(A/500,1);i.rotation.x=d+v*b,i.rotation.y=g+v*b,o.render(r,s),b<1&&requestAnimationFrame(m)}requestAnimationFrame(m)}}),(f,h)=>(ms(),gs("div",{ref_key:"container",ref:t,class:"three-container"},null,512))}}),LE=vs(DE,[["__scopeId","data-v-b471e957"]]),UE=Vi({__name:"RotateButton",emits:["rotate"],setup(n){return(e,t)=>(ms(),gs("button",{class:"btn",onClick:t[0]||(t[0]=i=>e.$emit("rotate"))},"🔄 Колдуем понос"))}}),NE=vs(UE,[["__scopeId","data-v-d3aa95d7"]]),FE="/assets/general-gyurMcV5.mp3",OE=Vi({__name:"GlobalMusicButton",setup(n){const e=ds(!1),t=new Audio(FE);t.volume=.1,t.loop=!0;const i=()=>{e.value?t.pause():t.play(),e.value=!e.value};return(r,s)=>(ms(),gs("button",{class:"btn",onClick:i}," ▶️ "+sh(e.value?"Выключить":"Включить")+" музон ",1))}}),BE=vs(OE,[["__scopeId","data-v-a8dba3be"]]),zE="/assets/magic-CI88dX4b.mp3",VE={class:"button_wrapper"},HE=Vi({__name:"HomeView",setup(n){const e=()=>{var r;(r=t.value)==null||r.rotateOnce();const i=new Audio(zE);i.volume=.2,i.loop=!1,i.play()},t=ds(null);return(i,r)=>(ms(),gs("main",null,[bt(LE,{ref_key:"canvasRef",ref:t},null,512),Fo("div",VE,[bt(NE,{onRotate:e}),bt(BE)])]))}}),kE=vs(HE,[["__scopeId","data-v-7e46e104"]]),GE=y_({history:Qg("/"),routes:[{path:"/",name:"home",component:kE},{path:"/about",name:"about",component:()=>C_(()=>import("./AboutView-j-xt6F1L.js"),__vite__mapDeps([0,1]))}]}),Ic=vg(A_);Ic.use(yg());Ic.use(GE);Ic.mount("#app");export{fx as $,jE as A,tn as B,Ye as C,rb as D,$t as E,nb as F,ZE as G,Wd as H,KE as I,JE as J,QE as K,Ms as L,eb as M,As as N,gt as O,Fx as P,br as Q,ml as R,Qt as S,WE as T,Gs as U,Je as V,Vt as W,YE as X,$d as Y,Gd as Z,tb as _,qE as a,Mo as a0,Gl as a1,Hd as a2,Pt as a3,Ao as a4,To as a5,ko as a6,Ze as a7,hi as a8,Ho as a9,_i as aa,Yn as ab,Vi as ac,ds as ad,Fh as ae,cx as af,PE as ag,sb as ah,lb as ai,no as aj,cc as ak,gs as al,ms as am,vs as an,Fo as ao,sh as ap,bt as aq,XE as b,ob as c,Mr as d,ib as e,qe as f,z as g,hf as h,Lx as i,ab as j,$E as k,Ui as l,aa as m,av as n,En as o,jt as p,gl as q,Li as r,_x as s,Hi as t,gx as u,vx as v,Vn as w,Tc as x,lt as y,$n as z};
