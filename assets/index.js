(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}html{font-size:100%;font-family:Arial,sans-serif;line-height:1.25}body{display:flex;flex-direction:column;font-family:inherit;line-height:inherit;margin:0}html,body{height:100%}.a11y-hidden{position:absolute;left:auto;height:1px;width:1px;top:0;overflow:hidden;clip:rect(1px 1px 1px 1px)}.header{position:relative;display:flex;flex:0 0 auto;align-items:center;height:5.75rem;margin-bottom:1.875rem;padding:0 2.5rem;font-family:Arial,sans-serif;border-bottom:1px solid #F0F0F0}@media (max-width: 768px){.header{height:4rem;margin-bottom:0;padding:0 0 0 1.25rem;border-bottom:none}}.header__logo{flex:0 0 auto;width:6.75rem;height:2.3125rem;margin-right:3.25rem;background:no-repeat 50% 50% url(/shri2023-performance/assets/logo-313d155c.svg);background-size:contain}.header__menu{display:none;width:3.5rem;height:100%;margin:0 0 0 auto;padding:0;background:50% 50% no-repeat transparent url(/shri2023-performance/assets/icon_list_m@1x-82ae556e.svg);border:none;border-radius:0;appearance:none;cursor:pointer}@media (max-width: 768px){.header__menu{display:block}}.header__links{display:flex;gap:1.75rem;margin:0;padding:0;list-style:none}@media (max-width: 768px){.header__links{display:none;position:absolute;z-index:1;top:100%;left:0;box-sizing:border-box;flex-direction:column;width:100%;padding:1.25rem;background:#fff;box-shadow:0 2px 6px #c5baba80}.header__links_opened{display:flex;visibility:visible}}.header__item{margin:0;padding:0}.header__link{font-weight:700;opacity:.6;text-decoration:none;color:#333}.header__link:hover,.header__link_current{opacity:1}.main{display:grid;flex:0 0 auto;grid-template-columns:50% 50%;gap:1.625rem;padding:0 2.5rem}@media (max-width: 768px){.main{padding:0 1.25rem}}@media (max-width: 1024px){.main{grid-template-columns:100%}}.main__devices{grid-column-start:1;grid-column-end:3}@media (max-width: 1024px){.main__devices{grid-column-end:2}}.section__title-header{margin:0;font-size:1.125rem;font-weight:700;color:#333}.section__title{display:flex;align-items:baseline;margin:0 0 1.25rem}@media (max-width: 768px){.section__title{gap:1rem}.section__main-title{display:none}}.section__select{display:none;margin:0 0 0 auto;padding:.4375rem 1.9375rem .5rem 1rem;border:none;border-radius:1.25rem;font-size:.8125rem;font-family:inherit;font-weight:700;background:no-repeat calc(100% - 1rem) 50% #FFD93E url(/shri2023-performance/assets/arrow-down-b8bc77a6.svg);appearance:none}@media (max-width: 768px){.section__select{display:block}}.section__tabs{display:flex;gap:.625rem;align-items:baseline;margin:0 0 0 .8125rem;padding:0;list-style:none}@media (max-width: 768px){.section__tabs{display:none}}.section__tab{flex:0 0 auto;padding:.4375rem .9375rem .5rem;font-size:.8125rem;font-weight:700;background:#F7F7F7;border-radius:1024px;cursor:pointer}.section__tab_active{background:#FFD93E}.section__tab:not(.section__tab_active):hover{background:#fff;box-shadow:0 2px 6px #c5baba80}.hero-dashboard{position:relative;box-sizing:border-box;display:flex;gap:.9375rem;height:20.6875rem;background:no-repeat 50% 50% url(/shri2023-performance/assets/bg@2x-361d59a0.webp);background-size:1260px;border-radius:1.25rem}@media (max-width: 768px){.hero-dashboard{flex-direction:column;gap:1.25rem;height:auto;margin-bottom:.3125rem}}.hero-dashboard__primary{flex:1 1 auto;padding:1.25rem 0 1.25rem 1.25rem}@media (max-width: 768px){.hero-dashboard__primary{padding:1.25rem 1.25rem 0}}.hero-dashboard__title{margin:.375rem 0;font-size:1.6875rem;font-weight:700;color:#333}@media (max-width: 768px){.hero-dashboard__title{font-size:1.125rem}}.hero-dashboard__subtitle{margin:.375rem 0 0;font-size:.875rem;color:#333}@media (max-width: 768px){.hero-dashboard__subtitle{margin:.3125rem 0 0;font-size:.75rem}}.hero-dashboard__info{display:flex;gap:1.125rem;margin:1.5625rem 0 0;padding:0;list-style:none}@media (max-width: 768px){.hero-dashboard__info{margin-top:.9375rem}}.hero-dashboard__item{margin:0;padding:0}.hero-dashboard__item-title{font-size:.875rem;color:#858585}@media (max-width: 768px){.hero-dashboard__item-title{font-size:.75rem}}.hero-dashboard__item-details{display:flex;align-items:center;margin-top:.25rem;font-size:2.25rem;font-weight:700;color:#333}@media (max-width: 768px){.hero-dashboard__item-details{margin-top:.3125rem;font-size:1.5rem}}.hero-dashboard__icon{width:1.625rem;height:1.625rem;margin-left:.3125rem;background-position:50% 50%;background-repeat:no-repeat;background-size:contain}@media (max-width: 768px){.hero-dashboard__icon{width:1.375rem;height:1.375rem}}.hero-dashboard__icon_rain{background-image:url(/shri2023-performance/assets/cloud-drizzle-e95483f4.svg)}.hero-dashboard__schedule{display:flex;flex:0 0 auto;flex-direction:column;gap:.9375rem;margin:0;padding:1.25rem 1.5625rem 1.25rem 0;overflow:auto;list-style:none;scrollbar-width:none}.hero-dashboard__schedule::-webkit-scrollbar{display:none}@media (max-width: 768px){.hero-dashboard__schedule{flex-direction:row;padding:0 1.25rem 1.25rem}}.event__button{position:relative;display:flex;flex-direction:column;justify-content:end;gap:.1875rem;width:100%;min-width:12.5rem;height:7.5rem;margin:0;padding:.875rem;border-radius:1.25rem;border:none;background:#F7F7F7;text-align:left;cursor:pointer;appearance:none}.event_slim .event__button{height:6.25rem}.event__button:hover{background:#fff;box-shadow:0 2px 6px #c5baba80}.event__icon{position:absolute;top:.875rem;left:.875rem;width:1.5rem;height:1.5rem;background-repeat:no-repeat;background-position:50% 50%;background-size:contain}.event__icon_temp{background-image:url(/shri2023-performance/assets/icon_temperature-d536906b.svg)}.event__icon_temp2{background-image:url(/shri2023-performance/assets/icon_temperature_2-ee5bee96.svg)}.event__icon_light{background-image:url(/shri2023-performance/assets/icon_sun-1b90f101.svg)}.event__icon_light2{background-image:url(/shri2023-performance/assets/icon_sun_2-8d63781e.svg)}.event__icon_schedule{background-image:url(/shri2023-performance/assets/icon_scheduled-15de844a.svg)}.event__title{margin:0;font-size:.875rem;font-weight:700;color:#333}.event__subtitle{font-size:.75rem;color:#858585}.event-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:.9375rem;margin:0;padding:0;list-style:none}@media (max-width: 768px){.event-grid{display:flex;padding-bottom:.3125rem;overflow:auto;scrollbar-width:none}.event-grid::-webkit-scrollbar{display:none}}.section__panel{padding-bottom:.625rem;overflow-x:auto;scrollbar-width:none}.section__panel::-webkit-scrollbar{display:none}.section__panel_hidden{display:none}.section__panel-list{display:flex;gap:.9375rem;margin:0;padding:0;list-style:none}.section__panel-wrapper{position:relative}.section__arrow{position:absolute;top:0;right:0;width:18px;bottom:10px;background:no-repeat 50% 50% url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAcCAMAAABbGh8VAAAANlBMVEUAAAA1NTU1NTVQUFA6Ojo2NjY1NTU+Pj42NjY5OTk1NTU1NTVEREQ0NDQ3Nzc3Nzc4ODhKSkph+8ozAAAAEnRSTlMATTMEFkcnCzscQTgPRC0jEgh/JOC6AAAAc0lEQVQoz2XQSRLAIAgEQEjcd///2UhO4HDs0oIZsuMcXfMwTwNvZebHSDrim5JdjvSoJIoUI11kK2n+SHqVLJGqxbFs15J/oVsG3b+CzQVCQR19RUNbWAo7qA5siGXcy9PahIshF6SHtKZJeEYtVUkL8wH2kQKvmrvs5wAAAABJRU5ErkJggg==);transform:rotate(180deg);cursor:pointer}.section__arrow:hover{opacity:.7}.footer{display:flex;flex:0 0 auto;align-items:center;height:4rem;margin-top:auto;padding:0 2.5rem}@media (max-width: 768px){.footer{flex-direction:column;align-items:flex-start;gap:.9375rem;height:auto;padding-top:1rem;padding-bottom:1rem}}.footer__list{display:flex;align-items:baseline;gap:.9375rem;margin:0;padding:0;list-style:none}@media (max-width: 768px){.footer__list{flex-direction:column;align-items:flex-start}}.footer__link{font-size:.75rem;color:#858585;text-decoration:none}.footer__link:hover{color:#000}.footer__copyright{margin-left:auto;font-size:.75rem;color:#858585}@media (max-width: 768px){.footer__copyright{margin-left:0}}")),document.head.appendChild(e)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function _(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=_(r);fetch(r.href,i)}})();var z,u,Se,P,ie,Pe,Q,F={},$e=[],qe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,j=Array.isArray;function S(e,t){for(var _ in t)e[_]=t[_];return e}function Ee(e){var t=e.parentNode;t&&t.removeChild(e)}function B(e,t,_){var n,r,i,a={};for(i in t)i=="key"?n=t[i]:i=="ref"?r=t[i]:a[i]=t[i];if(arguments.length>2&&(a.children=arguments.length>3?z.call(arguments,2):_),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)a[i]===void 0&&(a[i]=e.defaultProps[i]);return U(e,a,n,r,null)}function U(e,t,_,n,r){var i={type:e,props:t,key:_,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:r??++Se};return r==null&&u.vnode!=null&&u.vnode(i),i}function E(e){return e.children}function L(e,t){this.props=e,this.context=t}function x(e,t){if(t==null)return e.__?x(e.__,e.__.__k.indexOf(e)+1):null;for(var _;t<e.__k.length;t++)if((_=e.__k[t])!=null&&_.__e!=null)return _.__e;return typeof e.type=="function"?x(e):null}function Ce(e){var t,_;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((_=e.__k[t])!=null&&_.__e!=null){e.__e=e.__c.base=_.__e;break}return Ce(e)}}function re(e){(!e.__d&&(e.__d=!0)&&P.push(e)&&!R.__r++||ie!==u.debounceRendering)&&((ie=u.debounceRendering)||Pe)(R)}function R(){var e,t,_,n,r,i,a,s;for(P.sort(Q);e=P.shift();)e.__d&&(t=P.length,n=void 0,r=void 0,a=(i=(_=e).__v).__e,(s=_.__P)&&(n=[],(r=S({},i)).__v=i.__v+1,te(s,i,r,_.__n,s.ownerSVGElement!==void 0,i.__h!=null?[a]:null,n,a??x(i),i.__h),De(n,i),i.__e!=a&&Ce(i)),P.length>t&&P.sort(Q));R.__r=0}function we(e,t,_,n,r,i,a,s,o,d){var l,m,h,f,p,C,v,y=n&&n.__k||$e,N=y.length;for(_.__k=[],l=0;l<t.length;l++)if((f=_.__k[l]=(f=t[l])==null||typeof f=="boolean"||typeof f=="function"?null:typeof f=="string"||typeof f=="number"||typeof f=="bigint"?U(null,f,null,null,f):j(f)?U(E,{children:f},null,null,null):f.__b>0?U(f.type,f.props,f.key,f.ref?f.ref:null,f.__v):f)!=null){if(f.__=_,f.__b=_.__b+1,(h=y[l])===null||h&&f.key==h.key&&f.type===h.type)y[l]=void 0;else for(m=0;m<N;m++){if((h=y[m])&&f.key==h.key&&f.type===h.type){y[m]=void 0;break}h=null}te(e,f,h=h||F,r,i,a,s,o,d),p=f.__e,(m=f.ref)&&h.ref!=m&&(v||(v=[]),h.ref&&v.push(h.ref,null,f),v.push(m,f.__c||p,f)),p!=null?(C==null&&(C=p),typeof f.type=="function"&&f.__k===h.__k?f.__d=o=xe(f,o,e):o=He(e,f,h,y,p,o),typeof _.type=="function"&&(_.__d=o)):o&&h.__e==o&&o.parentNode!=e&&(o=x(h))}for(_.__e=C,l=N;l--;)y[l]!=null&&(typeof _.type=="function"&&y[l].__e!=null&&y[l].__e==_.__d&&(_.__d=Ae(n).nextSibling),Te(y[l],y[l]));if(v)for(l=0;l<v.length;l++)Oe(v[l],v[++l],v[++l])}function xe(e,t,_){for(var n,r=e.__k,i=0;r&&i<r.length;i++)(n=r[i])&&(n.__=e,t=typeof n.type=="function"?xe(n,t,_):He(_,n,n,r,n.__e,t));return t}function V(e,t){return t=t||[],e==null||typeof e=="boolean"||(j(e)?e.some(function(_){V(_,t)}):t.push(e)),t}function He(e,t,_,n,r,i){var a,s,o;if(t.__d!==void 0)a=t.__d,t.__d=void 0;else if(_==null||r!=i||r.parentNode==null)e:if(i==null||i.parentNode!==e)e.appendChild(r),a=null;else{for(s=i,o=0;(s=s.nextSibling)&&o<n.length;o+=1)if(s==r)break e;e.insertBefore(r,i),a=i}return a!==void 0?a:r.nextSibling}function Ae(e){var t,_,n;if(e.type==null||typeof e.type=="string")return e.__e;if(e.__k){for(t=e.__k.length-1;t>=0;t--)if((_=e.__k[t])&&(n=Ae(_)))return n}return null}function ze(e,t,_,n,r){var i;for(i in _)i==="children"||i==="key"||i in t||I(e,i,null,_[i],n);for(i in t)r&&typeof t[i]!="function"||i==="children"||i==="key"||i==="value"||i==="checked"||_[i]===t[i]||I(e,i,t[i],_[i],n)}function le(e,t,_){t[0]==="-"?e.setProperty(t,_??""):e[t]=_==null?"":typeof _!="number"||qe.test(t)?_:_+"px"}function I(e,t,_,n,r){var i;e:if(t==="style")if(typeof _=="string")e.style.cssText=_;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)_&&t in _||le(e.style,t,"");if(_)for(t in _)n&&_[t]===n[t]||le(e.style,t,_[t])}else if(t[0]==="o"&&t[1]==="n")i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=_,_?n||e.addEventListener(t,i?ae:oe,i):e.removeEventListener(t,i?ae:oe,i);else if(t!=="dangerouslySetInnerHTML"){if(r)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t in e)try{e[t]=_??"";break e}catch{}typeof _=="function"||(_==null||_===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,_))}}function oe(e){return this.l[e.type+!1](u.event?u.event(e):e)}function ae(e){return this.l[e.type+!0](u.event?u.event(e):e)}function te(e,t,_,n,r,i,a,s,o){var d,l,m,h,f,p,C,v,y,N,A,w,ne,D,Z,g=t.type;if(t.constructor!==void 0)return null;_.__h!=null&&(o=_.__h,s=t.__e=_.__e,t.__h=null,i=[s]),(d=u.__b)&&d(t);try{e:if(typeof g=="function"){if(v=t.props,y=(d=g.contextType)&&n[d.__c],N=d?y?y.props.value:d.__:n,_.__c?C=(l=t.__c=_.__c).__=l.__E:("prototype"in g&&g.prototype.render?t.__c=l=new g(v,N):(t.__c=l=new L(v,N),l.constructor=g,l.render=Ze),y&&y.sub(l),l.props=v,l.state||(l.state={}),l.context=N,l.__n=n,m=l.__d=!0,l.__h=[],l._sb=[]),l.__s==null&&(l.__s=l.state),g.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=S({},l.__s)),S(l.__s,g.getDerivedStateFromProps(v,l.__s))),h=l.props,f=l.state,l.__v=t,m)g.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(g.getDerivedStateFromProps==null&&v!==h&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(v,N),!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(v,l.__s,N)===!1||t.__v===_.__v){for(t.__v!==_.__v&&(l.props=v,l.state=l.__s,l.__d=!1),l.__e=!1,t.__e=_.__e,t.__k=_.__k,t.__k.forEach(function(O){O&&(O.__=t)}),A=0;A<l._sb.length;A++)l.__h.push(l._sb[A]);l._sb=[],l.__h.length&&a.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(v,l.__s,N),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(h,f,p)})}if(l.context=N,l.props=v,l.__P=e,w=u.__r,ne=0,"prototype"in g&&g.prototype.render){for(l.state=l.__s,l.__d=!1,w&&w(t),d=l.render(l.props,l.state,l.context),D=0;D<l._sb.length;D++)l.__h.push(l._sb[D]);l._sb=[]}else do l.__d=!1,w&&w(t),d=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++ne<25);l.state=l.__s,l.getChildContext!=null&&(n=S(S({},n),l.getChildContext())),m||l.getSnapshotBeforeUpdate==null||(p=l.getSnapshotBeforeUpdate(h,f)),we(e,j(Z=d!=null&&d.type===E&&d.key==null?d.props.children:d)?Z:[Z],t,_,n,r,i,a,s,o),l.base=t.__e,t.__h=null,l.__h.length&&a.push(l),C&&(l.__E=l.__=null),l.__e=!1}else i==null&&t.__v===_.__v?(t.__k=_.__k,t.__e=_.__e):t.__e=je(_.__e,t,_,n,r,i,a,o);(d=u.diffed)&&d(t)}catch(O){t.__v=null,(o||i!=null)&&(t.__e=s,t.__h=!!o,i[i.indexOf(s)]=null),u.__e(O,t,_)}}function De(e,t){u.__c&&u.__c(t,e),e.some(function(_){try{e=_.__h,_.__h=[],e.some(function(n){n.call(_)})}catch(n){u.__e(n,_.__v)}})}function je(e,t,_,n,r,i,a,s){var o,d,l,m=_.props,h=t.props,f=t.type,p=0;if(f==="svg"&&(r=!0),i!=null){for(;p<i.length;p++)if((o=i[p])&&"setAttribute"in o==!!f&&(f?o.localName===f:o.nodeType===3)){e=o,i[p]=null;break}}if(e==null){if(f===null)return document.createTextNode(h);e=r?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,h.is&&h),i=null,s=!1}if(f===null)m===h||s&&e.data===h||(e.data=h);else{if(i=i&&z.call(e.childNodes),d=(m=_.props||F).dangerouslySetInnerHTML,l=h.dangerouslySetInnerHTML,!s){if(i!=null)for(m={},p=0;p<e.attributes.length;p++)m[e.attributes[p].name]=e.attributes[p].value;(l||d)&&(l&&(d&&l.__html==d.__html||l.__html===e.innerHTML)||(e.innerHTML=l&&l.__html||""))}if(ze(e,h,m,r,s),l)t.__k=[];else if(we(e,j(p=t.props.children)?p:[p],t,_,n,r&&f!=="foreignObject",i,a,i?i[0]:_.__k&&x(_,0),s),i!=null)for(p=i.length;p--;)i[p]!=null&&Ee(i[p]);s||("value"in h&&(p=h.value)!==void 0&&(p!==e.value||f==="progress"&&!p||f==="option"&&p!==m.value)&&I(e,"value",p,m.value,!1),"checked"in h&&(p=h.checked)!==void 0&&p!==e.checked&&I(e,"checked",p,m.checked,!1))}return e}function Oe(e,t,_){try{typeof e=="function"?e(t):e.current=t}catch(n){u.__e(n,_)}}function Te(e,t,_){var n,r;if(u.unmount&&u.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||Oe(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(i){u.__e(i,t)}n.base=n.__P=null,e.__c=void 0}if(n=e.__k)for(r=0;r<n.length;r++)n[r]&&Te(n[r],t,_||typeof e.type!="function");_||e.__e==null||Ee(e.__e),e.__=e.__e=e.__d=void 0}function Ze(e,t,_){return this.constructor(e,_)}function Ye(e,t,_){var n,r,i;u.__&&u.__(e,t),r=(n=typeof _=="function")?null:_&&_.__k||t.__k,i=[],te(t,e=(!n&&_||t).__k=B(E,null,[e]),r||F,F,t.ownerSVGElement!==void 0,!n&&_?[_]:r?null:t.firstChild?z.call(t.childNodes):null,i,!n&&_?_:r?r.__e:t.firstChild,n),De(i,e)}z=$e.slice,u={__e:function(e,t,_,n){for(var r,i,a;t=t.__;)if((r=t.__c)&&!r.__)try{if((i=r.constructor)&&i.getDerivedStateFromError!=null&&(r.setState(i.getDerivedStateFromError(e)),a=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,n||{}),a=r.__d),a)return r.__E=r}catch(s){e=s}throw e}},Se=0,L.prototype.setState=function(e,t){var _;_=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=S({},this.state),typeof e=="function"&&(e=e(S({},_),this.props)),e&&S(_,e),e!=null&&this.__v&&(t&&this._sb.push(t),re(this))},L.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),re(this))},L.prototype.render=E,P=[],Pe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Q=function(e,t){return e.__v.__b-t.__v.__b},R.__r=0;var H,b,Y,ce,X=0,Ue=[],M=[],se=u.__b,ue=u.__r,fe=u.diffed,he=u.__c,de=u.unmount;function _e(e,t){u.__h&&u.__h(b,e,X||t),X=0;var _=b.__H||(b.__H={__:[],__h:[]});return e>=_.__.length&&_.__.push({__V:M}),_.__[e]}function q(e){return X=1,Ke(Be,e)}function Ke(e,t,_){var n=_e(H++,2);if(n.t=e,!n.__c&&(n.__=[_?_(t):Be(void 0,t),function(s){var o=n.__N?n.__N[0]:n.__[0],d=n.t(o,s);o!==d&&(n.__N=[d,n.__[1]],n.__c.setState({}))}],n.__c=b,!b.u)){var r=function(s,o,d){if(!n.__c.__H)return!0;var l=n.__c.__H.__.filter(function(h){return h.__c});if(l.every(function(h){return!h.__N}))return!i||i.call(this,s,o,d);var m=!1;return l.forEach(function(h){if(h.__N){var f=h.__[0];h.__=h.__N,h.__N=void 0,f!==h.__[0]&&(m=!0)}}),!(!m&&n.__c.props===s)&&(!i||i.call(this,s,o,d))};b.u=!0;var i=b.shouldComponentUpdate,a=b.componentWillUpdate;b.componentWillUpdate=function(s,o,d){if(this.__e){var l=i;i=void 0,r(s,o,d),i=l}a&&a.call(this,s,o,d)},b.shouldComponentUpdate=r}return n.__N||n.__}function Ge(e,t){var _=_e(H++,3);!u.__s&&Fe(_.__H,t)&&(_.__=e,_.i=t,b.__H.__h.push(_))}function Me(e){return X=5,We(function(){return{current:e}},[])}function We(e,t){var _=_e(H++,7);return Fe(_.__H,t)?(_.__V=e(),_.i=t,_.__h=e,_.__V):_.__}function Qe(){for(var e;e=Ue.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(W),e.__H.__h.forEach(J),e.__H.__h=[]}catch(t){e.__H.__h=[],u.__e(t,e.__v)}}u.__b=function(e){b=null,se&&se(e)},u.__r=function(e){ue&&ue(e),H=0;var t=(b=e.__c).__H;t&&(Y===b?(t.__h=[],b.__h=[],t.__.forEach(function(_){_.__N&&(_.__=_.__N),_.__V=M,_.__N=_.i=void 0})):(t.__h.forEach(W),t.__h.forEach(J),t.__h=[],H=0)),Y=b},u.diffed=function(e){fe&&fe(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Ue.push(t)!==1&&ce===u.requestAnimationFrame||((ce=u.requestAnimationFrame)||Je)(Qe)),t.__H.__.forEach(function(_){_.i&&(_.__H=_.i),_.__V!==M&&(_.__=_.__V),_.i=void 0,_.__V=M})),Y=b=null},u.__c=function(e,t){t.some(function(_){try{_.__h.forEach(W),_.__h=_.__h.filter(function(n){return!n.__||J(n)})}catch(n){t.some(function(r){r.__h&&(r.__h=[])}),t=[],u.__e(n,_.__v)}}),he&&he(e,t)},u.unmount=function(e){de&&de(e);var t,_=e.__c;_&&_.__H&&(_.__H.__.forEach(function(n){try{W(n)}catch(r){t=r}}),_.__H=void 0,t&&u.__e(t,_.__v))};var pe=typeof requestAnimationFrame=="function";function Je(e){var t,_=function(){clearTimeout(n),pe&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(_,100);pe&&(t=requestAnimationFrame(_))}function W(e){var t=b,_=e.__c;typeof _=="function"&&(e.__c=void 0,_()),b=t}function J(e){var t=b;e.__c=e.__(),b=t}function Fe(e,t){return!e||e.length!==t.length||t.some(function(_,n){return _!==e[n]})}function Be(e,t){return typeof t=="function"?t(e):t}function et(e,t){for(var _ in t)e[_]=t[_];return e}function ee(e,t){for(var _ in e)if(_!=="__source"&&!(_ in t))return!0;for(var n in t)if(n!=="__source"&&e[n]!==t[n])return!0;return!1}function me(e){this.props=e}function Re(e,t){function _(r){var i=this.props.ref,a=i==r.ref;return!a&&i&&(i.call?i(null):i.current=null),t?!t(this.props,r)||!a:ee(this.props,r)}function n(r){return this.shouldComponentUpdate=_,B(e,r)}return n.displayName="Memo("+(e.displayName||e.name)+")",n.prototype.isReactComponent=!0,n.__f=!0,n}(me.prototype=new L).isPureReactComponent=!0,me.prototype.shouldComponentUpdate=function(e,t){return ee(this.props,e)||ee(this.state,t)};var ve=u.__b;u.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),ve&&ve(e)};var tt=u.__e;u.__e=function(e,t,_,n){if(e.then){for(var r,i=t;i=i.__;)if((r=i.__c)&&r.__c)return t.__e==null&&(t.__e=_.__e,t.__k=_.__k),r.__c(e,t)}tt(e,t,_,n)};var be=u.unmount;function Ve(e,t,_){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(n){typeof n.__c=="function"&&n.__c()}),e.__c.__H=null),(e=et({},e)).__c!=null&&(e.__c.__P===_&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(n){return Ve(n,t,_)})),e}function Ie(e,t,_){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(n){return Ie(n,t,_)}),e.__c&&e.__c.__P===t&&(e.__e&&_.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=_)),e}function K(){this.__u=0,this.t=null,this.__b=null}function Xe(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function T(){this.u=null,this.o=null}u.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),be&&be(e)},(K.prototype=new L).__c=function(e,t){var _=t.__c,n=this;n.t==null&&(n.t=[]),n.t.push(_);var r=Xe(n.__v),i=!1,a=function(){i||(i=!0,_.__R=null,r?r(s):s())};_.__R=a;var s=function(){if(!--n.__u){if(n.state.__a){var d=n.state.__a;n.__v.__k[0]=Ie(d,d.__c.__P,d.__c.__O)}var l;for(n.setState({__a:n.__b=null});l=n.t.pop();)l.forceUpdate()}},o=t.__h===!0;n.__u++||o||n.setState({__a:n.__b=n.__v.__k[0]}),e.then(a,a)},K.prototype.componentWillUnmount=function(){this.t=[]},K.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var _=document.createElement("div"),n=this.__v.__k[0].__c;this.__v.__k[0]=Ve(this.__b,_,n.__O=n.__P)}this.__b=null}var r=t.__a&&B(E,null,e.fallback);return r&&(r.__h=null),[B(E,null,t.__a?null:e.children),r]};var ye=function(e,t,_){if(++_[1]===_[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(_=e.u;_;){for(;_.length>3;)_.pop()();if(_[1]<_[0])break;e.u=_=_[2]}};(T.prototype=new L).__a=function(e){var t=this,_=Xe(t.__v),n=t.o.get(e);return n[0]++,function(r){var i=function(){t.props.revealOrder?(n.push(r),ye(t,e,n)):r()};_?_(i):i()}},T.prototype.render=function(e){this.u=null,this.o=new Map;var t=V(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var _=t.length;_--;)this.o.set(t[_],this.u=[1,0,this.u]);return e.children},T.prototype.componentDidUpdate=T.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,_){ye(e,_,t)})};var _t=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,nt=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,it=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,rt=/[A-Z0-9]/g,lt=typeof document<"u",ot=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};L.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(L.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var ge=u.event;function at(){}function ct(){return this.cancelBubble}function st(){return this.defaultPrevented}u.event=function(e){return ge&&(e=ge(e)),e.persist=at,e.isPropagationStopped=ct,e.isDefaultPrevented=st,e.nativeEvent=e};var ut={enumerable:!1,configurable:!0,get:function(){return this.class}},Ne=u.vnode;u.vnode=function(e){typeof e.type=="string"&&function(t){var _=t.props,n=t.type,r={};for(var i in _){var a=_[i];if(!(i==="value"&&"defaultValue"in _&&a==null||lt&&i==="children"&&n==="noscript"||i==="class"||i==="className")){var s=i.toLowerCase();i==="defaultValue"&&"value"in _&&_.value==null?i="value":i==="download"&&a===!0?a="":s==="ondoubleclick"?i="ondblclick":s!=="onchange"||n!=="input"&&n!=="textarea"||ot(_.type)?s==="onfocus"?i="onfocusin":s==="onblur"?i="onfocusout":it.test(i)?i=s:n.indexOf("-")===-1&&nt.test(i)?i=i.replace(rt,"-$&").toLowerCase():a===null&&(a=void 0):s=i="oninput",s==="oninput"&&r[i=s]&&(i="oninputCapture"),r[i]=a}}n=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=V(_.children).forEach(function(o){o.props.selected=r.value.indexOf(o.props.value)!=-1})),n=="select"&&r.defaultValue!=null&&(r.value=V(_.children).forEach(function(o){o.props.selected=r.multiple?r.defaultValue.indexOf(o.props.value)!=-1:r.defaultValue==o.props.value})),_.class&&!_.className?(r.class=_.class,Object.defineProperty(r,"className",ut)):(_.className&&!_.class||_.class&&_.className)&&(r.class=r.className=_.className),t.props=r}(e),e.$$typeof=_t,Ne&&Ne(e)};var ke=u.__r;u.__r=function(e){ke&&ke(e),e.__c};var Le=u.diffed;u.diffed=function(e){Le&&Le(e);var t=e.props,_=e.__e;_!=null&&e.type==="textarea"&&"value"in t&&t.value!==_.value&&(_.value=t.value==null?"":t.value)};var ft=0;function c(e,t,_,n,r,i){var a,s,o={};for(s in t)s=="ref"?a=t[s]:o[s]=t[s];var d={type:e,props:o,key:_,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--ft,__source:r,__self:i};if(typeof e=="function"&&(a=e.defaultProps))for(s in a)o[s]===void 0&&(o[s]=a[s]);return u.vnode&&u.vnode(d),d}const k=Re(e=>{const t=Me(),{setSize:_}=e;return Ge(()=>{const n=t.current.offsetWidth;_&&n&&_(r=>r+n)}),c("li",{ref:t,className:"event"+(e.slim?" event_slim":""),children:c("button",{className:"event__button",children:[c("span",{className:`event__icon event__icon_${e.icon}`,role:"img","aria-label":e.iconLabel}),c("h4",{className:"event__title",children:e.title}),e.subtitle&&c("span",{className:"event__subtitle",children:e.subtitle})]})})}),ht=Re(({tabItems:e,setSize:t})=>We(()=>e.map((n,r)=>c(k,{...n,setSize:t},r)),[e,t])),$={all:{title:"Все",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"D-Link Omna 180 Cam",subtitle:"Включится в 17:00"},{icon:"temp",iconLabel:"Температура",title:"Elgato Eve Degree Connected",subtitle:"Выключено до 17:00"},{icon:"light",iconLabel:"Освещение",title:"LIFX Mini Day & Dusk A60 E27",subtitle:"Включится в 17:00"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"}]},kitchen:{title:"Кухня",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включено"},{icon:"temp",iconLabel:"Температура",title:"Elgato Eve Degree Connected",subtitle:"Выключено до 17:00"}]},hall:{title:"Зал",items:[{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Выключено"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Выключено"}]},lights:{title:"Лампочки",items:[{icon:"light",iconLabel:"Освещение",title:"D-Link Omna 180 Cam",subtitle:"Включится в 17:00"},{icon:"light",iconLabel:"Освещение",title:"LIFX Mini Day & Dusk A60 E27",subtitle:"Включится в 17:00"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"}]},cameras:{title:"Камеры",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"}]}};for(let e=0;e<6;++e)$.all.items=$.all.items.concat($.all.items);const G=Object.keys($);function dt(){const e=Me(null),[t,_]=q(new URLSearchParams(location.search).get("tab")||"all"),[n,r]=q(0),i=e.current&&n>e.current.offsetWidth,a=o=>{r(0),_(o)},s=()=>{const o=e.current.querySelector(".section__panel:not(.section__panel_hidden)");o&&o.scrollTo({left:o.scrollLeft+400,behavior:"smooth"})};return c("main",{className:"main",children:[c("section",{className:"section main__general",children:[c("h2",{className:"section__title section__title-header section__main-title",children:"Главное"}),c("div",{className:"hero-dashboard",children:[c("div",{className:"hero-dashboard__primary",children:[c("h3",{className:"hero-dashboard__title",children:"Привет, Геннадий!"}),c("p",{className:"hero-dashboard__subtitle",children:"Двери и окна закрыты, сигнализация включена."}),c("ul",{className:"hero-dashboard__info",children:[c("li",{className:"hero-dashboard__item",children:[c("div",{className:"hero-dashboard__item-title",children:"Дома"}),c("div",{className:"hero-dashboard__item-details",children:["+23",c("span",{className:"a11y-hidden",children:"°"})]})]}),c("li",{className:"hero-dashboard__item",children:[c("div",{className:"hero-dashboard__item-title",children:"За окном"}),c("div",{className:"hero-dashboard__item-details",children:["+19",c("span",{className:"a11y-hidden",children:"°"}),c("div",{className:"hero-dashboard__icon hero-dashboard__icon_rain",role:"img","aria-label":"Дождь"})]})]})]})]}),c("ul",{className:"hero-dashboard__schedule",children:[c(k,{icon:"temp",iconLabel:"Температура",title:"Philips Cooler",subtitle:"Начнет охлаждать в 16:30"}),c(k,{icon:"light",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включится в 17:00"}),c(k,{icon:"light",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включится в 17:00"})]})]})]}),c("section",{className:"section main__scripts",children:[c("h2",{className:"section__title section__title-header",children:"Избранные сценарии"}),c("ul",{className:"event-grid",children:[c(k,{slim:!0,icon:"light2",iconLabel:"Освещение",title:"Выключить весь свет в доме и во дворе"}),c(k,{slim:!0,icon:"schedule",iconLabel:"Расписание",title:"Я ухожу"}),c(k,{slim:!0,icon:"light2",iconLabel:"Освещение",title:"Включить свет в коридоре"}),c(k,{slim:!0,icon:"temp2",iconLabel:"Температура",title:"Набрать горячую ванну",subtitle:"Начнётся в 18:00"}),c(k,{slim:!0,icon:"temp2",iconLabel:"Температура",title:"Сделать пол тёплым во всей квартире"})]})]}),c("section",{className:"section main__devices",children:[c("div",{className:"section__title",children:[c("h2",{className:"section__title-header",children:"Избранные устройства"}),c("select",{className:"section__select",defaultValue:"all",onInput:o=>a(o.target.value),children:G.map(o=>c("option",{value:o,children:$[o].title},o))}),c("ul",{role:"tablist",className:"section__tabs",children:G.map(o=>c("li",{role:"tab","aria-selected":o===t?"true":"false",tabIndex:o===t?"0":void 0,className:"section__tab"+(o===t?" section__tab_active":""),id:`tab_${o}`,"aria-controls":`panel_${o}`,onClick:()=>a(o),children:$[o].title},o))})]}),c("div",{className:"section__panel-wrapper",ref:e,children:[G.map(o=>c("div",{role:"tabpanel",className:"section__panel"+(o===t?"":" section__panel_hidden"),"aria-hidden":o===t?"false":"true",id:`panel_${o}`,"aria-labelledby":`tab_${o}`,children:c("ul",{className:"section__panel-list",children:c(ht,{tabItems:$[o].items,setSize:o===t?r:null})})},o)),i&&c("div",{className:"section__arrow",onClick:s})]})]})]})}const pt=()=>{let[e,t]=q(!1),[_,n]=q(!1);const r=()=>{_||n(!0),t(!e)};return c("header",{className:"header",children:[c("a",{href:"/",className:"header__logo","aria-label":"Яндекс.Дом"}),c("button",{className:"header__menu","aria-expanded":e?"true":"false",onClick:r,children:c("span",{className:"header__menu-text a11y-hidden",children:e?"Закрыть меню":"Открыть меню"})}),c("ul",{className:"header__links"+(e?" header__links_opened":""),children:[c("li",{className:"header__item",children:c("a",{className:"header__link header__link_current",href:"/","aria-current":"page",children:"Сводка"})}),c("li",{className:"header__item",children:c("a",{className:"header__link",href:"/devices",children:"Устройства"})}),c("li",{className:"header__item",children:c("a",{className:"header__link",href:"/scripts",children:"Сценарии"})})]})]})};Ye(c(E,{children:[c(pt,{}),c(dt,{})]}),document.getElementById("app"));
