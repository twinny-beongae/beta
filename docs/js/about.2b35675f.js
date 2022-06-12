(self["webpackChunktwinny_beongae"]=self["webpackChunktwinny_beongae"]||[]).push([[443],{5787:function(e,t,n){var i=n(7976),s=TypeError;e.exports=function(e,t){if(i(t,e))return e;throw s("Incorrect invocation")}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},2801:function(e,t,n){"use strict";var i=n(2109),s=n(5005),r=n(9114),o=n(3070).f,a=n(2597),h=n(5787),l=n(9587),c=n(6277),u=n(3678),d=n(7741),p=n(1913),_="DOMException",f=s("Error"),g=s(_),m=function(){h(this,y);var e=arguments.length,t=c(e<1?void 0:arguments[0]),n=c(e<2?void 0:arguments[1],"Error"),i=new g(t,n),s=f(t);return s.name=_,o(i,"stack",r(1,d(s.stack,1))),l(i,this,m),i},y=m.prototype=g.prototype,v="stack"in f(_),C="stack"in new g(1,2),w=v&&!C;i({global:!0,constructor:!0,forced:p||w},{DOMException:w?m:g});var b=s(_),E=b.prototype;if(E.constructor!==b)for(var I in p||o(E,"constructor",r(1,b)),u)if(a(u,I)){var T=u[I],S=T.s;a(b,S)||o(b,S,r(6,T.c))}},6454:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Hl}});var i=n(3396);const s=(0,i._)("div",{class:"about"},[(0,i._)("h1",null,"This is an about page")],-1);function r(e,t,n,r,o,a){return(0,i.wg)(),(0,i.iD)(i.HY,null,[s,(0,i._)("button",{onClick:t[0]||(t[0]=(...e)=>a.increaseAppointmentTime&&a.increaseAppointmentTime(...e))},"update")],64)}n(1703),n(2801),n(6699);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},a=function(e,t){if(!e)throw h(t)},h=function(e){return new Error("Firebase Database ("+o.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},l=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296===(64512&s)&&i+1<e.length&&56320===(64512&e.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},c=function(e){const t=[];let n=0,i=0;while(n<e.length){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=e[n++],o=e[n++],a=e[n++],h=((7&s)<<18|(63&r)<<12|(63&o)<<6|63&a)-65536;t[i++]=String.fromCharCode(55296+(h>>10)),t[i++]=String.fromCharCode(56320+(1023&h))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return t.join("")},u={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<e.length;s+=3){const t=e[s],r=s+1<e.length,o=r?e[s+1]:0,a=s+2<e.length,h=a?e[s+2]:0,l=t>>2,c=(3&t)<<4|o>>4;let u=(15&o)<<2|h>>6,d=63&h;a||(d=64,r||(u=64)),i.push(n[l],n[c],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(l(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):c(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<e.length;){const t=n[e.charAt(s++)],r=s<e.length,o=r?n[e.charAt(s)]:0;++s;const a=s<e.length,h=a?n[e.charAt(s)]:64;++s;const l=s<e.length,c=l?n[e.charAt(s)]:64;if(++s,null==t||null==o||null==h||null==c)throw Error();const u=t<<2|o>>4;if(i.push(u),64!==h){const e=o<<4&240|h>>2;if(i.push(e),64!==c){const e=h<<6&192|c;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},d=function(e){const t=l(e);return u.encodeByteArray(t,!0)},p=function(e){return d(e).replace(/\./g,"")},_=function(e){try{return u.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function f(e){return g(void 0,e)}function g(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&m(n)&&(e[n]=g(e[n],t[n]));return e}function m(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function v(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function C(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(v())}function w(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function b(){return!0===o.NODE_CLIENT||!0===o.NODE_ADMIN}function E(){return"object"===typeof indexedDB}function I(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(tn){t(tn)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const T="FirebaseError";class S extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=T,Object.setPrototypeOf(this,S.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,k.prototype.create)}}class k{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],r=s?N(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`,a=new S(i,o,n);return a}}function N(e,t){return e.replace(R,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}const R=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e){return JSON.parse(e)}function x(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=function(e){let t={},n={},i={},s="";try{const r=e.split(".");t=P(_(r[0])||""),n=P(_(r[1])||""),s=r[2],i=n["d"]||{},delete n["d"]}catch(r){}return{header:t,claims:n,data:i,signature:s}},A=function(e){const t=D(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},O=function(e){const t=D(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function M(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function L(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function F(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function q(e,t,n){const i={};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=t.call(n,e[s],s,e));return i}function W(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const n=e[s],r=t[s];if(U(n)&&U(r)){if(!W(n,r))return!1}else if(n!==r)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function U(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class B{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let c=0;c<16;c++)n[c]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let c=0;c<16;c++)n[c]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let c=16;c<80;c++){const e=n[c-3]^n[c-8]^n[c-14]^n[c-16];n[c]=4294967295&(e<<1|e>>>31)}let i,s,r=this.chain_[0],o=this.chain_[1],a=this.chain_[2],h=this.chain_[3],l=this.chain_[4];for(let c=0;c<80;c++){c<40?c<20?(i=h^o&(a^h),s=1518500249):(i=o^a^h,s=1859775393):c<60?(i=o&a|h&(o|a),s=2400959708):(i=o^a^h,s=3395469782);const e=(r<<5|r>>>27)+i+l+s+n[c]&4294967295;l=h,h=a,a=4294967295&(o<<30|o>>>2),o=r,r=e}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const s=this.buf_;let r=this.inbuf_;while(i<t){if(0===r)while(i<=n)this.compress_(e,i),i+=this.blockSize;if("string"===typeof e){while(i<t)if(s[r]=e.charCodeAt(i),++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}else while(i<t)if(s[r]=e[i],++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}this.inbuf_=r,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let i=0;i<5;i++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[i]>>t&255,++n;return e}}function j(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const z=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const t=s-55296;i++,a(i<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(i)-56320;s=65536+(t<<10)+n}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},V=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $(e){return e&&e._delegate?e._delegate:e}class Y{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new y;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),i=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(X(e))try{this.getOrInitializeService({instanceIdentifier:G})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=G){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=G){return this.instances.has(e)}getOptions(e=G){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,r]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(s);n===e&&r.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Q(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}return n||null}normalizeInstanceIdentifier(e=G){return this.component?this.component.multipleInstances?e:G:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function Q(e){return e===G?void 0:e}function X(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new K(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z=[];var ee;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(ee||(ee={}));const te={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},ne=ee.INFO,ie={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},se=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),s=ie[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${i}]  ${e.name}:`,...n)};class re{constructor(e){this.name=e,this._logLevel=ne,this._logHandler=se,this._userLogHandler=null,Z.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?te[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const oe=(e,t)=>t.some((t=>e instanceof t));let ae,he;function le(){return ae||(ae=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ce(){return he||(he=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ue=new WeakMap,de=new WeakMap,pe=new WeakMap,_e=new WeakMap,fe=new WeakMap;function ge(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",r)},s=()=>{t(be(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&ue.set(t,e)})).catch((()=>{})),fe.set(t,e),t}function me(e){if(de.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",r),e.removeEventListener("abort",r)},s=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",r),e.addEventListener("abort",r)}));de.set(e,t)}let ye={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return de.get(e);if("objectStoreNames"===t)return e.objectStoreNames||pe.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return be(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function ve(e){ye=e(ye)}function Ce(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?ce().includes(e)?function(...t){return e.apply(Ee(this),t),be(ue.get(this))}:function(...t){return be(e.apply(Ee(this),t))}:function(t,...n){const i=e.call(Ee(this),t,...n);return pe.set(i,t.sort?t.sort():[t]),be(i)}}function we(e){return"function"===typeof e?Ce(e):(e instanceof IDBTransaction&&me(e),oe(e,le())?new Proxy(e,ye):e)}function be(e){if(e instanceof IDBRequest)return ge(e);if(_e.has(e))return _e.get(e);const t=we(e);return t!==e&&(_e.set(e,t),fe.set(t,e)),t}const Ee=e=>fe.get(e);function Ie(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(e,t),a=be(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(be(o.result),e.oldVersion,e.newVersion,be(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{r&&e.addEventListener("close",(()=>r())),s&&e.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const Te=["get","getKey","getAll","getAllKeys","count"],Se=["put","add","delete","clear"],ke=new Map;function Ne(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(ke.get(t))return ke.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=Se.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!Te.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&r.done]))[0]};return ke.set(t,r),r}ve((e=>({...e,get:(t,n,i)=>Ne(t,n)||e.get(t,n,i),has:(t,n)=>!!Ne(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Re{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(Pe(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function Pe(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const xe="@firebase/app",De="0.7.26",Ae=new re("@firebase/app"),Oe="@firebase/app-compat",Me="@firebase/analytics-compat",Le="@firebase/analytics",Fe="@firebase/app-check-compat",qe="@firebase/app-check",We="@firebase/auth",Ue="@firebase/auth-compat",He="@firebase/database",Be="@firebase/database-compat",je="@firebase/functions",ze="@firebase/functions-compat",Ve="@firebase/installations",$e="@firebase/installations-compat",Ye="@firebase/messaging",Ge="@firebase/messaging-compat",Ke="@firebase/performance",Qe="@firebase/performance-compat",Xe="@firebase/remote-config",Je="@firebase/remote-config-compat",Ze="@firebase/storage",et="@firebase/storage-compat",tt="@firebase/firestore",nt="@firebase/firestore-compat",it="firebase",st="9.8.3",rt="[DEFAULT]",ot={[xe]:"fire-core",[Oe]:"fire-core-compat",[Le]:"fire-analytics",[Me]:"fire-analytics-compat",[qe]:"fire-app-check",[Fe]:"fire-app-check-compat",[We]:"fire-auth",[Ue]:"fire-auth-compat",[He]:"fire-rtdb",[Be]:"fire-rtdb-compat",[je]:"fire-fn",[ze]:"fire-fn-compat",[Ve]:"fire-iid",[$e]:"fire-iid-compat",[Ye]:"fire-fcm",[Ge]:"fire-fcm-compat",[Ke]:"fire-perf",[Qe]:"fire-perf-compat",[Xe]:"fire-rc",[Je]:"fire-rc-compat",[Ze]:"fire-gcs",[et]:"fire-gcs-compat",[tt]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[it]:"fire-js-all"},at=new Map,ht=new Map;function lt(e,t){try{e.container.addComponent(t)}catch(n){Ae.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ct(e){const t=e.name;if(ht.has(t))return Ae.debug(`There were multiple attempts to register component ${t}.`),!1;ht.set(t,e);for(const n of at.values())lt(n,e);return!0}function ut(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dt={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},pt=new k("app","Firebase",dt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _t{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Y("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft=st;function gt(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:rt,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw pt.create("bad-app-name",{appName:String(i)});const s=at.get(i);if(s){if(W(e,s.options)&&W(n,s.config))return s;throw pt.create("duplicate-app",{appName:i})}const r=new J(i);for(const a of ht.values())r.addComponent(a);const o=new _t(e,n,r);return at.set(i,o),o}function mt(e=rt){const t=at.get(e);if(!t)throw pt.create("no-app",{appName:e});return t}function yt(e,t,n){var i;let s=null!==(i=ot[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const e=[`Unable to register library "${s}" with version "${t}":`];return r&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ae.warn(e.join(" "))}ct(new Y(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vt="firebase-heartbeat-database",Ct=1,wt="firebase-heartbeat-store";let bt=null;function Et(){return bt||(bt=Ie(vt,Ct,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(wt)}}}).catch((e=>{throw pt.create("storage-open",{originalErrorMessage:e.message})}))),bt}async function It(e){var t;try{const t=await Et();return t.transaction(wt).objectStore(wt).get(St(e))}catch(n){throw pt.create("storage-get",{originalErrorMessage:null===(t=n)||void 0===t?void 0:t.message})}}async function Tt(e,t){var n;try{const n=await Et(),i=n.transaction(wt,"readwrite"),s=i.objectStore(wt);return await s.put(t,St(e)),i.done}catch(i){throw pt.create("storage-set",{originalErrorMessage:null===(n=i)||void 0===n?void 0:n.message})}}function St(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=1024,Nt=2592e6;class Rt{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Dt(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Pt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Nt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Pt(),{heartbeatsToSend:t,unsentEntries:n}=xt(this._heartbeatsCache.heartbeats),i=p(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Pt(){const e=new Date;return e.toISOString().substring(0,10)}function xt(e,t=kt){const n=[];let i=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),At(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),At(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Dt{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!E()&&I().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await It(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Tt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Tt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function At(e){return p(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(e){ct(new Y("platform-logger",(e=>new Re(e)),"PRIVATE")),ct(new Y("heartbeat",(e=>new Rt(e)),"PRIVATE")),yt(xe,De,e),yt(xe,De,"esm2017"),yt("fire-js","")}Ot("");var Mt="firebase",Lt="9.8.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
yt(Mt,Lt,"app");const Ft="@firebase/database",qt="0.13.1";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wt="";function Ut(e){Wt=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),x(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:P(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return M(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Ht(t)}}catch(t){}return new Bt},zt=jt("localStorage"),Vt=jt("sessionStorage"),$t=new re("@firebase/database"),Yt=function(){let e=1;return function(){return e++}}(),Gt=function(e){const t=z(e),n=new B;n.update(t);const i=n.digest();return u.encodeByteArray(i)},Kt=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"===typeof i&&"number"===typeof i.length?t+=Kt.apply(null,i):t+="object"===typeof i?x(i):i,t+=" "}return t};let Qt=null,Xt=!0;const Jt=function(e,t){a(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?($t.logLevel=ee.VERBOSE,Qt=$t.log.bind($t),t&&Vt.set("logging_enabled",!0)):"function"===typeof e?Qt=e:(Qt=null,Vt.remove("logging_enabled"))},Zt=function(...e){if(!0===Xt&&(Xt=!1,null===Qt&&!0===Vt.get("logging_enabled")&&Jt(!0)),Qt){const t=Kt.apply(null,e);Qt(t)}},en=function(e){return function(...t){Zt(e,...t)}},tn=function(...e){const t="FIREBASE INTERNAL ERROR: "+Kt(...e);$t.error(t)},nn=function(...e){const t=`FIREBASE FATAL ERROR: ${Kt(...e)}`;throw $t.error(t),new Error(t)},sn=function(...e){const t="FIREBASE WARNING: "+Kt(...e);$t.warn(t)},rn=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&sn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},on=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},an=function(e){if(b()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},hn="[MIN_NAME]",ln="[MAX_NAME]",cn=function(e,t){if(e===t)return 0;if(e===hn||t===ln)return-1;if(t===hn||e===ln)return 1;{const n=En(e),i=En(t);return null!==n?null!==i?n-i===0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},un=function(e,t){return e===t?0:e<t?-1:1},dn=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+x(t))},pn=function(e){if("object"!==typeof e||null===e)return x(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=x(t[i]),n+=":",n+=pn(e[t[i]]);return n+="}",n},_n=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function fn(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const gn=function(e){a(!on(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let s,r,o,h,l;0===e?(r=0,o=0,s=1/e===-1/0?1:0):(s=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(h=Math.min(Math.floor(Math.log(e)/Math.LN2),i),r=h+i,o=Math.round(e*Math.pow(2,n-h)-Math.pow(2,n))):(r=0,o=Math.round(e/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=t;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let e=parseInt(u.substr(l,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},mn=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},yn=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function vn(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}const Cn=new RegExp("^-?(0*)\\d{1,10}$"),wn=-2147483648,bn=2147483647,En=function(e){if(Cn.test(e)){const t=Number(e);if(t>=wn&&t<=bn)return t}return null},In=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw sn("Exception was thrown by user callback.",e),t}),Math.floor(0))}},Tn=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Sn=function(e,t){const n=setTimeout(e,t);return"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kn{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){sn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(Zt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',sn(e)}}class Rn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Rn.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pn="5",xn="v",Dn="s",An="r",On="f",Mn=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ln="ls",Fn="p",qn="ac",Wn="websocket",Un="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hn{constructor(e,t,n,i,s=!1,r="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=zt.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&zt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Bn(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function jn(e,t,n){let i;if(a("string"===typeof t,"typeof type must == string"),a("object"===typeof n,"typeof params must == object"),t===Wn)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==Un)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}Bn(e)&&(n["ns"]=e.namespace);const s=[];return fn(n,((e,t)=>{s.push(e+"="+t)})),i+s.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.counters_={}}incrementCounter(e,t=1){M(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return f(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn={},$n={};function Yn(e){const t=e.toString();return Vn[t]||(Vn[t]=new zn),Vn[t]}function Gn(e,t){const n=e.toString();return $n[n]||($n[n]=t()),$n[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&In((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="start",Xn="close",Jn="pLPCommand",Zn="pRTLPCB",ei="id",ti="pw",ni="ser",ii="cb",si="seg",ri="ts",oi="d",ai="dframe",hi=1870,li=30,ci=hi-li,ui=25e3,di=3e4;class pi{constructor(e,t,n,i,s,r,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=en(e),this.stats_=Yn(t),this.urlFn=e=>(this.appCheckToken&&(e[qn]=this.appCheckToken),jn(t,Un,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Kn(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(di)),an((()=>{if(this.isClosed_)return;this.scriptTagHolder=new _i(((...e)=>{const[t,n,i,s,r]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===Qn)this.id=n,this.password=i;else{if(t!==Xn)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[Qn]="t",e[ni]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[ii]=this.scriptTagHolder.uniqueCallbackIdentifier),e[xn]=Pn,this.transportSessionId&&(e[Dn]=this.transportSessionId),this.lastSessionId&&(e[Ln]=this.lastSessionId),this.applicationId&&(e[Fn]=this.applicationId),this.appCheckToken&&(e[qn]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&Mn.test(location.hostname)&&(e[An]=On);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){pi.forceAllow_=!0}static forceDisallow(){pi.forceDisallow_=!0}static isAvailable(){return!b()&&(!!pi.forceAllow_||!pi.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!mn()&&!yn())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=x(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=d(t),i=_n(n,ci);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(b())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[ai]="t",n[ei]=e,n[ti]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=x(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class _i{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,b())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=Yt(),window[Jn+this.uniqueCallbackIdentifier]=e,window[Zn+this.uniqueCallbackIdentifier]=t,this.myIFrame=_i.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(s){Zt("frame writing exception"),s.stack&&Zt(s.stack),Zt(s)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||Zt("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ei]=this.myID,e[ti]=this.myPW,e[ni]=this.currentSerial;let t=this.urlFn(e),n="",i=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+li+n.length<=hi))break;{const e=this.pendingSegs.shift();n=n+"&"+si+i+"="+e.seg+"&"+ri+i+"="+e.ts+"&"+oi+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(ui)),s=()=>{clearTimeout(i),n()};this.addTag(e,s)}addTag(e,t){b()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Zt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=16384,gi=45e3;let mi=null;"undefined"!==typeof MozWebSocket?mi=MozWebSocket:"undefined"!==typeof WebSocket&&(mi=WebSocket);class yi{constructor(e,t,n,i,s,r,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=en(this.connId),this.stats_=Yn(t),this.connURL=yi.connectionURL_(t,r,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,s){const r={};return r[xn]=Pn,!b()&&"undefined"!==typeof location&&location.hostname&&Mn.test(location.hostname)&&(r[An]=On),t&&(r[Dn]=t),n&&(r[Ln]=n),i&&(r[qn]=i),s&&(r[Fn]=s),jn(e,Wn,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,zt.set("previous_websocket_failure",!0);try{let e;if(b()){const e=this.nodeAdmin?"AdminNode":"Node",t={headers:{"User-Agent":`Firebase/${Pn}/${Wt}/${process.platform}/${e}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(t.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(t.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",BASE_URL:"/beta/"},i=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];i&&(t["proxy"]={origin:i})}this.mySock=new mi(this.connURL,[],e)}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){yi.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==mi&&!yi.forceDisallow_}static previouslyFailed(){return zt.isInMemoryStorage||!0===zt.get("previous_websocket_failure")}markConnectionHealthy(){zt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=P(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(a(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=x(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=_n(t,fi);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(gi))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}yi.responsesRequiredToBeHealthy=2,yi.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[pi,yi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=yi&&yi["isAvailable"]();let n=t&&!yi.previouslyFailed();if(e.webSocketOnly&&(t||sn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[yi];else{const e=this.transports_=[];for(const t of vi.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t);vi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}vi.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ci=6e4,wi=5e3,bi=10240,Ei=102400,Ii="t",Ti="d",Si="s",ki="r",Ni="e",Ri="o",Pi="a",xi="n",Di="p",Ai="h";class Oi{constructor(e,t,n,i,s,r,o,a,h,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=a,this.onKill_=h,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=en("c:"+this.id+":"),this.transportManager_=new vi(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e["healthyTimeout"]||0;i>0&&(this.healthyTimeout_=Sn((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ei?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>bi?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ii in e){const t=e[Ii];t===Pi?this.upgradeIfSecondaryHealthy_():t===ki?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Ri&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=dn("t",e),n=dn("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Di,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Pi,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:xi,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=dn("t",e),n=dn("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=dn(Ii,e);if(Ti in e){const n=e[Ti];if(t===Ai)this.onHandshake_(n);else if(t===xi){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Si?this.onConnectionShutdown_(n):t===ki?this.onReset_(n):t===Ni?tn("Server Error: "+n):t===Ri?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):tn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Pn!==n&&sn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Sn((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(Ci))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Sn((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(wi))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Di,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(zt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this.allowedEvents_=e,this.listeners_={},a(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===t&&(!n||n===i[s].context))return void i.splice(s,1)}validateEventType_(e){a(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi extends Li{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||C()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new Fi}getInitialEvent(e){return a("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=32,Wi=768;class Ui{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function Hi(){return new Ui("")}function Bi(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ji(e){return e.pieces_.length-e.pieceNum_}function zi(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Ui(e.pieces_,t)}function Vi(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function $i(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function Yi(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Gi(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Ui(t,0)}function Ki(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof Ui)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new Ui(n,0)}function Qi(e){return e.pieceNum_>=e.pieces_.length}function Xi(e,t){const n=Bi(e),i=Bi(t);if(null===n)return t;if(n===i)return Xi(zi(e),zi(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Ji(e,t){const n=Yi(e,0),i=Yi(t,0);for(let s=0;s<n.length&&s<i.length;s++){const e=cn(n[s],i[s]);if(0!==e)return e}return n.length===i.length?0:n.length<i.length?-1:1}function Zi(e,t){if(ji(e)!==ji(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function es(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(ji(e)>ji(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class ts{constructor(e,t){this.errorPrefix_=t,this.parts_=Yi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=V(this.parts_[n]);ss(this)}}function ns(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=V(t),ss(e)}function is(e){const t=e.parts_.pop();e.byteLength_-=V(t),e.parts_.length>0&&(e.byteLength_-=1)}function ss(e){if(e.byteLength_>Wi)throw new Error(e.errorPrefix_+"has a key path longer than "+Wi+" bytes ("+e.byteLength_+").");if(e.parts_.length>qi)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+qi+") or object contains a cycle "+rs(e))}function rs(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os extends Li{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new os}getInitialEvent(e){return a("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=1e3,hs=3e5,ls=3e3,cs=3e4,us=1.3,ds=3e4,ps="server_kill",_s=3;class fs extends Mi{constructor(e,t,n,i,s,r,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=fs.nextPersistentConnectionId_++,this.log_=en("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=as,this.maxReconnectDelay_=hs,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!b())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");os.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&Fi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(x(s)),a(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new y,n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const i=e["d"];"ok"===e["s"]?(this.onDataUpdate_(n["p"],i,!1,null),t.resolve(i)):t.reject(i)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_||setTimeout((()=>{const e=this.outstandingGets_[s];void 0!==e&&i===e&&(delete this.outstandingGets_[s],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+s+" timed out on connection"),t.reject(new Error("Client is offline.")))}),ls),this.connected_&&this.sendGet_(s),t.promise}listen(e,t,n,i){this.initConnection_();const s=e._queryIdentifier,r=e._path.toString();this.log_("Listen called for "+r+" "+s),this.listens.has(r)||this.listens.set(r,new Map),a(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),a(!this.listens.get(r).has(s),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(r).set(s,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n},r="q";e.tag&&(s["q"]=t._queryObject,s["t"]=e.tag),s["h"]=e.hashFn(),this.sendRequest(r,s,(s=>{const r=s["d"],o=s["s"];fs.warnOnListenWarnings_(r,t);const a=this.listens.get(n)&&this.listens.get(n).get(i);a===e&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,r))}))}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&M(e,"w")){const n=L(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();sn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||O(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=cs)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=A(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t["s"],i=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),a(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const s=this.removeListen_(n,i);s&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e},r="n";i&&(s["q"]=n,s["t"]=i),this.sendRequest(r,s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,(e=>{i&&setTimeout((()=>{i(e["s"],e["d"])}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,s){this.initConnection_();const r={p:t,d:n};void 0!==s&&(r["h"]=s),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n["s"],n["d"])}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+x(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):tn("Unrecognized action received from server: "+x(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){a(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=as,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=as,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>ds&&(this.reconnectDelay_=as),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*us)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+fs.nextConnectionId_++,s=this.lastSessionId;let r=!1,o=null;const h=function(){o?o.close():(r=!0,n())},l=function(e){a(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:h,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);r?Zt("getToken() completed but was canceled"):(Zt("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=h&&h.token,o=new Oi(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{sn(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(ps)}),s))}catch(tn){this.log_("Failed to get token: "+tn),r||(this.repoInfo_.nodeAdmin&&sn(tn),h())}}}interrupt(e){Zt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Zt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],F(this.interruptReasons_)&&(this.reconnectDelay_=as,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>pn(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new Ui(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){Zt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=_s&&(this.reconnectDelay_=cs,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Zt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=_s&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";b()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+Wt.replace(/\./g,"-")]=1,C()?e["framework.cordova"]=1:w()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Fi.getInstance().currentlyOnline();return F(this.interruptReasons_)&&e}}fs.nextPersistentConnectionId_=0,fs.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gs{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new gs(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new gs(hn,e),i=new gs(hn,t);return 0!==this.compare(n,i)}minPost(){return gs.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ys;class vs extends ms{static get __EMPTY_NODE(){return ys}static set __EMPTY_NODE(e){ys=e}compare(e,t){return cn(e.name,t.name)}isDefinedOn(e){throw h("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return gs.MIN}maxPost(){return new gs(ln,ys)}makePost(e,t){return a("string"===typeof e,"KeyIndex indexValue must always be a string."),new gs(e,ys)}toString(){return".key"}}const Cs=new vs;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,t,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;while(!e.isEmpty())if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse_?e.left:e.right;else{if(0===r){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class bs{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:bs.RED,this.left=null!=i?i:Is.EMPTY_NODE,this.right=null!=s?s:Is.EMPTY_NODE}copy(e,t,n,i,s){return new bs(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Is.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Is.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,bs.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,bs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}bs.RED=!0,bs.BLACK=!1;class Es{copy(e,t,n,i,s){return this}insert(e,t,n){return new bs(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Is{constructor(e,t=Is.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Is(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,bs.BLACK,null,null))}remove(e){return new Is(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,bs.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ws(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ws(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ws(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ws(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ts(e,t){return cn(e.name,t.name)}function Ss(e,t){return cn(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ks;function Ns(e){ks=e}Is.EMPTY_NODE=new Es;const Rs=function(e){return"number"===typeof e?"number:"+gn(e):"string:"+e},Ps=function(e){if(e.isLeafNode()){const t=e.val();a("string"===typeof t||"number"===typeof t||"object"===typeof t&&M(t,".sv"),"Priority must be a string or number.")}else a(e===ks||e.isEmpty(),"priority of unexpected type.");a(e===ks||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let xs,Ds,As;class Os{constructor(e,t=Os.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,a(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Ps(this.priorityNode_)}static set __childrenNodeConstructor(e){xs=e}static get __childrenNodeConstructor(){return xs}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Os(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Os.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Qi(e)?this:".priority"===Bi(e)?this.priorityNode_:Os.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Os.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Bi(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(a(".priority"!==n||1===ji(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Os.__childrenNodeConstructor.EMPTY_NODE.updateChild(zi(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Rs(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?gn(this.value_):this.value_,this.lazyHash_=Gt(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Os.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Os.__childrenNodeConstructor?-1:(a(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=Os.VALUE_TYPE_ORDER.indexOf(t),s=Os.VALUE_TYPE_ORDER.indexOf(n);return a(i>=0,"Unknown leaf type: "+t),a(s>=0,"Unknown leaf type: "+n),i===s?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function Ms(e){Ds=e}function Ls(e){As=e}Os.VALUE_TYPE_ORDER=["object","boolean","number","string"];class Fs extends ms{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),s=n.compareTo(i);return 0===s?cn(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return gs.MIN}maxPost(){return new gs(ln,new Os("[PRIORITY-POST]",As))}makePost(e,t){const n=Ds(e);return new gs(t,new Os("[PRIORITY-POST]",n))}toString(){return".priority"}}const qs=new Fs,Ws=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e){const t=e=>parseInt(Math.log(e)/Ws,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=n(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Hs=function(e,t,n,i){e.sort(t);const s=function(t,i){const r=i-t;let o,a;if(0===r)return null;if(1===r)return o=e[t],a=n?n(o):o,new bs(a,o.node,bs.BLACK,null,null);{const h=parseInt(r/2,10)+t,l=s(t,h),c=s(h+1,i);return o=e[h],a=n?n(o):o,new bs(a,o.node,bs.BLACK,l,c)}},r=function(t){let i=null,r=null,o=e.length;const a=function(t,i){const r=o-t,a=o;o-=t;const l=s(r+1,a),c=e[r],u=n?n(c):c;h(new bs(u,c.node,i,null,l))},h=function(e){i?(i.left=e,i=e):(r=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,bs.BLACK):(a(i,bs.BLACK),a(i,bs.RED))}return r},o=new Us(e.length),a=r(o);return new Is(i||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bs;const js={};class zs{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return a(js&&qs,"ChildrenNode.ts has not been loaded"),Bs=Bs||new zs({".priority":js},{".priority":qs}),Bs}get(e){const t=L(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Is?t:null}hasIndex(e){return M(this.indexSet_,e.toString())}addIndex(e,t){a(e!==Cs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const s=t.getIterator(gs.Wrap);let r,o=s.getNext();while(o)i=i||e.isDefinedOn(o.node),n.push(o),o=s.getNext();r=i?Hs(n,e.getCompare()):js;const h=e.toString(),l=Object.assign({},this.indexSet_);l[h]=e;const c=Object.assign({},this.indexes_);return c[h]=r,new zs(c,l)}addToIndexes(e,t){const n=q(this.indexes_,((n,i)=>{const s=L(this.indexSet_,i);if(a(s,"Missing index implementation for "+i),n===js){if(s.isDefinedOn(e.node)){const n=[],i=t.getIterator(gs.Wrap);let r=i.getNext();while(r)r.name!==e.name&&n.push(r),r=i.getNext();return n.push(e),Hs(n,s.getCompare())}return js}{const i=t.get(e.name);let s=n;return i&&(s=s.remove(new gs(e.name,i))),s.insert(e,e.node)}}));return new zs(n,this.indexSet_)}removeFromIndexes(e,t){const n=q(this.indexes_,(n=>{if(n===js)return n;{const i=t.get(e.name);return i?n.remove(new gs(e.name,i)):n}}));return new zs(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vs;class $s{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Ps(this.priorityNode_),this.children_.isEmpty()&&a(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Vs||(Vs=new $s(new Is(Ss),null,zs.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Vs}updatePriority(e){return this.children_.isEmpty()?this:new $s(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Vs:t}}getChild(e){const t=Bi(e);return null===t?this:this.getImmediateChild(t).getChild(zi(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(a(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new gs(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?Vs:this.priorityNode_;return new $s(i,r,s)}}updateChild(e,t){const n=Bi(e);if(null===n)return t;{a(".priority"!==Bi(e)||1===ji(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(zi(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,s=!0;if(this.forEachChild(qs,((r,o)=>{t[r]=o.val(e),n++,s&&$s.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1})),!e&&s&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Rs(this.getPriority().val())+":"),this.forEachChild(qs,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":Gt(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new gs(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new gs(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new gs(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,gs.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)<0)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,gs.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)>0)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Gs?-1:0}withIndex(e){if(e===Cs||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new $s(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Cs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(qs),n=t.getIterator(qs);let i=e.getNext(),s=n.getNext();while(i&&s){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=e.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(e){return e===Cs?null:this.indexMap_.get(e.toString())}}$s.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Ys extends $s{constructor(){super(new Is(Ss),$s.EMPTY_NODE,zs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return $s.EMPTY_NODE}isEmpty(){return!1}}const Gs=new Ys;Object.defineProperties(gs,{MIN:{value:new gs(hn,$s.EMPTY_NODE)},MAX:{value:new gs(ln,Gs)}}),vs.__EMPTY_NODE=$s.EMPTY_NODE,Os.__childrenNodeConstructor=$s,Ns(Gs),Ls(Gs);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ks=!0;function Qs(e,t=null){if(null===e)return $s.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),a(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new Os(n,Qs(t))}if(e instanceof Array||!Ks){let n=$s.EMPTY_NODE;return fn(e,((t,i)=>{if(M(e,t)&&"."!==t.substring(0,1)){const e=Qs(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Qs(t))}{const n=[];let i=!1;const s=e;if(fn(s,((e,t)=>{if("."!==e.substring(0,1)){const s=Qs(t);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new gs(e,s)))}})),0===n.length)return $s.EMPTY_NODE;const r=Hs(n,Ts,(e=>e.name),Ss);if(i){const e=Hs(n,qs.getCompare());return new $s(r,Qs(t),new zs({".priority":e},{".priority":qs}))}return new $s(r,Qs(t),zs.Default)}}Ms(Qs);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xs extends ms{constructor(e){super(),this.indexPath_=e,a(!Qi(e)&&".priority"!==Bi(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),s=n.compareTo(i);return 0===s?cn(e.name,t.name):s}makePost(e,t){const n=Qs(e),i=$s.EMPTY_NODE.updateChild(this.indexPath_,n);return new gs(t,i)}maxPost(){const e=$s.EMPTY_NODE.updateChild(this.indexPath_,Gs);return new gs(ln,e)}toString(){return Yi(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js extends ms{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?cn(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return gs.MIN}maxPost(){return gs.MAX}makePost(e,t){const n=Qs(e);return new gs(t,n)}toString(){return".value"}}const Zs=new Js,er="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){let e=0;const t=[]})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tr(e){return{type:"value",snapshotNode:e}}function nr(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function ir(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function sr(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function rr(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this.index_=e}updateChild(e,t,n,i,s,r){a(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=r&&(n.isEmpty()?e.hasChild(t)?r.trackChildChange(ir(t,o)):a(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?r.trackChildChange(nr(t,n)):r.trackChildChange(sr(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(qs,((e,i)=>{t.hasChild(e)||n.trackChildChange(ir(e,i))})),t.isLeafNode()||t.forEachChild(qs,((t,i)=>{if(e.hasChild(t)){const s=e.getImmediateChild(t);s.equals(i)||n.trackChildChange(sr(t,i,s))}else n.trackChildChange(nr(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?$s.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this.indexedFilter_=new or(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ar.getStartPost_(e),this.endPost_=ar.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,i,s,r){return this.matches(new gs(t,n))||(n=$s.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,s,r)}updateFullNode(e,t,n){t.isLeafNode()&&(t=$s.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority($s.EMPTY_NODE);const s=this;return t.forEachChild(qs,((e,t)=>{s.matches(new gs(e,t))||(i=i.updateImmediateChild(e,$s.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e){this.rangedFilter_=new ar(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,i,s,r){return this.rangedFilter_.matches(new gs(t,n))||(n=$s.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,s,r):this.fullLimitUpdateChild_(e,t,n,s,r)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=$s.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=$s.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();let s;if(s=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!s)break;i=i.updateImmediateChild(t.name,t.node),n++}}else{let e,n,s,r;if(i=t.withIndex(this.index_),i=i.updatePriority($s.EMPTY_NODE),this.reverse_){r=i.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();s=(e,n)=>t(n,e)}else r=i.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),s=this.index_.getCompare();let o=0,a=!1;while(r.hasNext()){const t=r.getNext();!a&&s(e,t)<=0&&(a=!0);const h=a&&o<this.limit_&&s(t,n)<=0;h?o++:i=i.updateImmediateChild(t.name,$s.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,s){let r;if(this.reverse_){const e=this.index_.getCompare();r=(t,n)=>e(n,t)}else r=this.index_.getCompare();const o=e;a(o.numChildren()===this.limit_,"");const h=new gs(t,n),l=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),c=this.rangedFilter_.matches(h);if(o.hasChild(t)){const e=o.getImmediateChild(t);let a=i.getChildAfterChild(this.index_,l,this.reverse_);while(null!=a&&(a.name===t||o.hasChild(a.name)))a=i.getChildAfterChild(this.index_,a,this.reverse_);const u=null==a?1:r(a,h),d=c&&!n.isEmpty()&&u>=0;if(d)return null!=s&&s.trackChildChange(sr(t,n,e)),o.updateImmediateChild(t,n);{null!=s&&s.trackChildChange(ir(t,e));const n=o.updateImmediateChild(t,$s.EMPTY_NODE),i=null!=a&&this.rangedFilter_.matches(a);return i?(null!=s&&s.trackChildChange(nr(a.name,a.node)),n.updateImmediateChild(a.name,a.node)):n}}return n.isEmpty()?e:c&&r(l,h)>=0?(null!=s&&(s.trackChildChange(ir(l.name,l.node)),s.trackChildChange(nr(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(l.name,$s.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=qs}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return a(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return a(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:hn}hasEnd(){return this.endSet_}getIndexEndValue(){return a(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return a(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ln}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return a(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===qs}copy(){const e=new lr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function cr(e){return e.loadsAllData()?new or(e.getIndex()):e.hasLimit()?new hr(e):new ar(e)}function ur(e){const t={};if(e.isDefault())return t;let n;return e.index_===qs?n="$priority":e.index_===Zs?n="$value":e.index_===Cs?n="$key":(a(e.index_ instanceof Xs,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=x(n),e.startSet_&&(t["startAt"]=x(e.indexStartValue_),e.startNameSet_&&(t["startAt"]+=","+x(e.indexStartName_))),e.endSet_&&(t["endAt"]=x(e.indexEndValue_),e.endNameSet_&&(t["endAt"]+=","+x(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function dr(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_)),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_)),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==qs&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends Mi{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=en("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(a(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const r=pr.getListenId_(e,n),o={};this.listens_[r]=o;const a=ur(e._queryParams);this.restRequest_(s+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(s,a,!1,n),L(this.listens_,r)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=pr.getListenId_(e,t);delete this.listens_[n]}get(e){const t=ur(e._queryParams),n=e._path.toString(),i=new y;return this.restRequest_(n+".json",t,((e,t)=>{let s=t;404===e&&(s=null,e=null),null===e?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,s])=>{i&&i.accessToken&&(t["auth"]=i.accessToken),s&&s.token&&(t["ac"]=s.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+H(t);this.log_("Sending REST request for "+r);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+r+" received. status:",o.status,"response:",o.responseText);let t=null;if(o.status>=200&&o.status<300){try{t=P(o.responseText)}catch(e){sn("Failed to parse JSON response for "+r+": "+o.responseText)}n(null,t)}else 401!==o.status&&404!==o.status&&sn("Got unsuccessful REST response for "+r+" Status: "+o.status),n(o.status);n=null}},o.open("GET",r,!0),o.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(){this.rootNode_=$s.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(){return{value:null,children:new Map}}function gr(e,t,n){if(Qi(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=Bi(t);e.children.has(i)||e.children.set(i,fr());const s=e.children.get(i);t=zi(t),gr(s,t,n)}}function mr(e,t,n){null!==e.value?n(t,e.value):yr(e,((e,i)=>{const s=new Ui(t.toString()+"/"+e);mr(i,s,n)}))}function yr(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&fn(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=1e4,wr=3e4,br=3e5;class Er{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new vr(e);const n=Cr+(wr-Cr)*Math.random();Sn(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;fn(e,((e,i)=>{i>0&&M(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),Sn(this.reportStats_.bind(this),Math.floor(2*Math.random()*br))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ir;function Tr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Sr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function kr(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Ir||(Ir={}));class Nr{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Ir.ACK_USER_WRITE,this.source=Tr()}operationForChild(e){if(Qi(this.path)){if(null!=this.affectedTree.value)return a(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ui(e));return new Nr(Hi(),t,this.revert)}}return a(Bi(this.path)===e,"operationForChild called for unrelated child."),new Nr(zi(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,t){this.source=e,this.path=t,this.type=Ir.LISTEN_COMPLETE}operationForChild(e){return Qi(this.path)?new Rr(this.source,Hi()):new Rr(this.source,zi(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Ir.OVERWRITE}operationForChild(e){return Qi(this.path)?new Pr(this.source,Hi(),this.snap.getImmediateChild(e)):new Pr(this.source,zi(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Ir.MERGE}operationForChild(e){if(Qi(this.path)){const t=this.children.subtree(new Ui(e));return t.isEmpty()?null:t.value?new Pr(this.source,Hi(),t.value):new xr(this.source,Hi(),t)}return a(Bi(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new xr(this.source,zi(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Qi(e))return this.isFullyInitialized()&&!this.filtered_;const t=Bi(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Or(e,t,n,i){const s=[],r=[];return t.forEach((t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&r.push(rr(t.childName,t.snapshotNode))})),Mr(e,s,"child_removed",t,i,n),Mr(e,s,"child_added",t,i,n),Mr(e,s,"child_moved",r,i,n),Mr(e,s,"child_changed",t,i,n),Mr(e,s,"value",t,i,n),s}function Mr(e,t,n,i,s,r){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>Fr(e,t,n))),o.forEach((n=>{const i=Lr(e,n,r);s.forEach((s=>{s.respondsTo(n.type)&&t.push(s.createEvent(i,e.query_))}))}))}function Lr(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function Fr(e,t,n){if(null==t.childName||null==n.childName)throw h("Should only compare child_ events.");const i=new gs(t.childName,t.snapshotNode),s=new gs(n.childName,n.snapshotNode);return e.index_.compare(i,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(e,t){return{eventCache:e,serverCache:t}}function Wr(e,t,n,i){return qr(new Dr(t,n,i),e.serverCache)}function Ur(e,t,n,i){return qr(e.eventCache,new Dr(t,n,i))}function Hr(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Br(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jr;const zr=()=>(jr||(jr=new Is(un)),jr);class Vr{constructor(e,t=zr()){this.value=e,this.children=t}static fromObject(e){let t=new Vr(null);return fn(e,((e,n)=>{t=t.set(new Ui(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Hi(),value:this.value};if(Qi(e))return null;{const n=Bi(e),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(zi(e),t);if(null!=s){const e=Ki(new Ui(n),s.path);return{path:e,value:s.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Qi(e))return this;{const t=Bi(e),n=this.children.get(t);return null!==n?n.subtree(zi(e)):new Vr(null)}}set(e,t){if(Qi(e))return new Vr(t,this.children);{const n=Bi(e),i=this.children.get(n)||new Vr(null),s=i.set(zi(e),t),r=this.children.insert(n,s);return new Vr(this.value,r)}}remove(e){if(Qi(e))return this.children.isEmpty()?new Vr(null):new Vr(null,this.children);{const t=Bi(e),n=this.children.get(t);if(n){const i=n.remove(zi(e));let s;return s=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&s.isEmpty()?new Vr(null):new Vr(this.value,s)}return this}}get(e){if(Qi(e))return this.value;{const t=Bi(e),n=this.children.get(t);return n?n.get(zi(e)):null}}setTree(e,t){if(Qi(e))return t;{const n=Bi(e),i=this.children.get(n)||new Vr(null),s=i.setTree(zi(e),t);let r;return r=s.isEmpty()?this.children.remove(n):this.children.insert(n,s),new Vr(this.value,r)}}fold(e){return this.fold_(Hi(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,s)=>{n[i]=s.fold_(Ki(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Hi(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(Qi(e))return null;{const i=Bi(e),s=this.children.get(i);return s?s.findOnPath_(zi(e),Ki(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Hi(),t)}foreachOnPath_(e,t,n){if(Qi(e))return this;{this.value&&n(t,this.value);const i=Bi(e),s=this.children.get(i);return s?s.foreachOnPath_(zi(e),Ki(t,i),n):new Vr(null)}}foreach(e){this.foreach_(Hi(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(Ki(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e){this.writeTree_=e}static empty(){return new $r(new Vr(null))}}function Yr(e,t,n){if(Qi(t))return new $r(new Vr(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const s=i.path;let r=i.value;const o=Xi(s,t);return r=r.updateChild(o,n),new $r(e.writeTree_.set(s,r))}{const i=new Vr(n),s=e.writeTree_.setTree(t,i);return new $r(s)}}}function Gr(e,t,n){let i=e;return fn(n,((e,n)=>{i=Yr(i,Ki(t,e),n)})),i}function Kr(e,t){if(Qi(t))return $r.empty();{const n=e.writeTree_.setTree(t,new Vr(null));return new $r(n)}}function Qr(e,t){return null!=Xr(e,t)}function Xr(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Xi(n.path,t)):null}function Jr(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(qs,((e,n)=>{t.push(new gs(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new gs(e,n.value))})),t}function Zr(e,t){if(Qi(t))return e;{const n=Xr(e,t);return new $r(null!=n?new Vr(n):e.writeTree_.subtree(t))}}function eo(e){return e.writeTree_.isEmpty()}function to(e,t){return no(Hi(),e.writeTree_,t)}function no(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,s)=>{".priority"===t?(a(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):n=no(Ki(e,t),s,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(Ki(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(e,t){return ko(t,e)}function so(e,t,n,i,s){a(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:s}),s&&(e.visibleWrites=Yr(e.visibleWrites,t,n)),e.lastWriteId=i}function ro(e,t,n,i){a(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=Gr(e.visibleWrites,t,n),e.lastWriteId=i}function oo(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function ao(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));a(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,r=!1,o=e.allWrites.length-1;while(s&&o>=0){const t=e.allWrites[o];t.visible&&(o>=n&&ho(t,i.path)?s=!1:es(i.path,t.path)&&(r=!0)),o--}if(s){if(r)return lo(e),!0;if(i.snap)e.visibleWrites=Kr(e.visibleWrites,i.path);else{const t=i.children;fn(t,(t=>{e.visibleWrites=Kr(e.visibleWrites,Ki(i.path,t))}))}return!0}return!1}function ho(e,t){if(e.snap)return es(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&es(Ki(e.path,n),t))return!0;return!1}function lo(e){e.visibleWrites=uo(e.allWrites,co,Hi()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function co(e){return e.visible}function uo(e,t,n){let i=$r.empty();for(let s=0;s<e.length;++s){const r=e[s];if(t(r)){const e=r.path;let t;if(r.snap)es(n,e)?(t=Xi(n,e),i=Yr(i,t,r.snap)):es(e,n)&&(t=Xi(e,n),i=Yr(i,Hi(),r.snap.getChild(t)));else{if(!r.children)throw h("WriteRecord should have .snap or .children");if(es(n,e))t=Xi(n,e),i=Gr(i,t,r.children);else if(es(e,n))if(t=Xi(e,n),Qi(t))i=Gr(i,Hi(),r.children);else{const e=L(r.children,Bi(t));if(e){const n=e.getChild(zi(t));i=Yr(i,Hi(),n)}}}}}return i}function po(e,t,n,i,s){if(i||s){const r=Zr(e.visibleWrites,t);if(!s&&eo(r))return n;if(s||null!=n||Qr(r,Hi())){const r=function(e){return(e.visible||s)&&(!i||!~i.indexOf(e.writeId))&&(es(e.path,t)||es(t,e.path))},o=uo(e.allWrites,r,t),a=n||$s.EMPTY_NODE;return to(o,a)}return null}{const i=Xr(e.visibleWrites,t);if(null!=i)return i;{const i=Zr(e.visibleWrites,t);if(eo(i))return n;if(null!=n||Qr(i,Hi())){const e=n||$s.EMPTY_NODE;return to(i,e)}return null}}}function _o(e,t,n){let i=$s.EMPTY_NODE;const s=Xr(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(qs,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const s=Zr(e.visibleWrites,t);return n.forEachChild(qs,((e,t)=>{const n=to(Zr(s,new Ui(e)),t);i=i.updateImmediateChild(e,n)})),Jr(s).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}{const n=Zr(e.visibleWrites,t);return Jr(n).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}}function fo(e,t,n,i,s){a(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Ki(t,n);if(Qr(e.visibleWrites,r))return null;{const t=Zr(e.visibleWrites,r);return eo(t)?s.getChild(n):to(t,s.getChild(n))}}function go(e,t,n,i){const s=Ki(t,n),r=Xr(e.visibleWrites,s);if(null!=r)return r;if(i.isCompleteForChild(n)){const t=Zr(e.visibleWrites,s);return to(t,i.getNode().getImmediateChild(n))}return null}function mo(e,t){return Xr(e.visibleWrites,t)}function yo(e,t,n,i,s,r,o){let a;const h=Zr(e.visibleWrites,t),l=Xr(h,Hi());if(null!=l)a=l;else{if(null==n)return[];a=to(h,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let h=n.getNext();while(h&&e.length<s)0!==t(h,i)&&e.push(h),h=n.getNext();return e}}function vo(){return{visibleWrites:$r.empty(),allWrites:[],lastWriteId:-1}}function Co(e,t,n,i){return po(e.writeTree,e.treePath,t,n,i)}function wo(e,t){return _o(e.writeTree,e.treePath,t)}function bo(e,t,n,i){return fo(e.writeTree,e.treePath,t,n,i)}function Eo(e,t){return mo(e.writeTree,Ki(e.treePath,t))}function Io(e,t,n,i,s,r){return yo(e.writeTree,e.treePath,t,n,i,s,r)}function To(e,t,n){return go(e.writeTree,e.treePath,t,n)}function So(e,t){return ko(Ki(e.treePath,t),e.writeTree)}function ko(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;a("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),a(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const s=i.type;if("child_added"===t&&"child_removed"===s)this.changeMap.set(n,sr(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===s)this.changeMap.set(n,ir(n,i.oldSnap));else if("child_changed"===t&&"child_added"===s)this.changeMap.set(n,nr(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==s)throw h("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,sr(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const Po=new Ro;class xo{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Dr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return To(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Br(this.viewCache_),s=Io(this.writes_,i,t,1,n,e);return 0===s.length?null:s[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(e){return{filter:e}}function Ao(e,t){a(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),a(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function Oo(e,t,n,i,s){const r=new No;let o,l;if(n.type===Ir.OVERWRITE){const h=n;h.source.fromUser?o=qo(e,t,h.path,h.snap,i,s,r):(a(h.source.fromServer,"Unknown source."),l=h.source.tagged||t.serverCache.isFiltered()&&!Qi(h.path),o=Fo(e,t,h.path,h.snap,i,s,l,r))}else if(n.type===Ir.MERGE){const h=n;h.source.fromUser?o=Uo(e,t,h.path,h.children,i,s,r):(a(h.source.fromServer,"Unknown source."),l=h.source.tagged||t.serverCache.isFiltered(),o=Bo(e,t,h.path,h.children,i,s,l,r))}else if(n.type===Ir.ACK_USER_WRITE){const a=n;o=a.revert?Vo(e,t,a.path,i,s,r):jo(e,t,a.path,a.affectedTree,i,s,r)}else{if(n.type!==Ir.LISTEN_COMPLETE)throw h("Unknown operation type: "+n.type);o=zo(e,t,n.path,i,r)}const c=r.getChanges();return Mo(t,o,c),{viewCache:o,changes:c}}function Mo(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Hr(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(tr(Hr(t)))}}function Lo(e,t,n,i,s,r){const o=t.eventCache;if(null!=Eo(i,n))return t;{let h,l;if(Qi(n))if(a(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Br(t),s=n instanceof $s?n:$s.EMPTY_NODE,o=wo(i,s);h=e.filter.updateFullNode(t.eventCache.getNode(),o,r)}else{const n=Co(i,Br(t));h=e.filter.updateFullNode(t.eventCache.getNode(),n,r)}else{const c=Bi(n);if(".priority"===c){a(1===ji(n),"Can't have a priority with additional path components");const s=o.getNode();l=t.serverCache.getNode();const r=bo(i,n,s,l);h=null!=r?e.filter.updatePriority(s,r):o.getNode()}else{const a=zi(n);let u;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const e=bo(i,n,o.getNode(),l);u=null!=e?o.getNode().getImmediateChild(c).updateChild(a,e):o.getNode().getImmediateChild(c)}else u=To(i,c,t.serverCache);h=null!=u?e.filter.updateChild(o.getNode(),c,u,a,s,r):o.getNode()}}return Wr(t,h,o.isFullyInitialized()||Qi(n),e.filter.filtersNodes())}}function Fo(e,t,n,i,s,r,o,a){const h=t.serverCache;let l;const c=o?e.filter:e.filter.getIndexedFilter();if(Qi(n))l=c.updateFullNode(h.getNode(),i,null);else if(c.filtersNodes()&&!h.isFiltered()){const e=h.getNode().updateChild(n,i);l=c.updateFullNode(h.getNode(),e,null)}else{const e=Bi(n);if(!h.isCompleteForPath(n)&&ji(n)>1)return t;const s=zi(n),r=h.getNode().getImmediateChild(e),o=r.updateChild(s,i);l=".priority"===e?c.updatePriority(h.getNode(),o):c.updateChild(h.getNode(),e,o,s,Po,null)}const u=Ur(t,l,h.isFullyInitialized()||Qi(n),c.filtersNodes()),d=new xo(s,u,r);return Lo(e,u,n,s,d,a)}function qo(e,t,n,i,s,r,o){const a=t.eventCache;let h,l;const c=new xo(s,t,r);if(Qi(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,o),h=Wr(t,l,!0,e.filter.filtersNodes());else{const s=Bi(n);if(".priority"===s)l=e.filter.updatePriority(t.eventCache.getNode(),i),h=Wr(t,l,a.isFullyInitialized(),a.isFiltered());else{const r=zi(n),l=a.getNode().getImmediateChild(s);let u;if(Qi(r))u=i;else{const e=c.getCompleteChild(s);u=null!=e?".priority"===Vi(r)&&e.getChild(Gi(r)).isEmpty()?e:e.updateChild(r,i):$s.EMPTY_NODE}if(l.equals(u))h=t;else{const n=e.filter.updateChild(a.getNode(),s,u,r,c,o);h=Wr(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return h}function Wo(e,t){return e.eventCache.isCompleteForChild(t)}function Uo(e,t,n,i,s,r,o){let a=t;return i.foreach(((i,h)=>{const l=Ki(n,i);Wo(t,Bi(l))&&(a=qo(e,a,l,h,s,r,o))})),i.foreach(((i,h)=>{const l=Ki(n,i);Wo(t,Bi(l))||(a=qo(e,a,l,h,s,r,o))})),a}function Ho(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Bo(e,t,n,i,s,r,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let h,l=t;h=Qi(n)?i:new Vr(null).setTree(n,i);const c=t.serverCache.getNode();return h.children.inorderTraversal(((n,i)=>{if(c.hasChild(n)){const h=t.serverCache.getNode().getImmediateChild(n),c=Ho(e,h,i);l=Fo(e,l,new Ui(n),c,s,r,o,a)}})),h.children.inorderTraversal(((n,i)=>{const h=!t.serverCache.isCompleteForChild(n)&&void 0===i.value;if(!c.hasChild(n)&&!h){const h=t.serverCache.getNode().getImmediateChild(n),c=Ho(e,h,i);l=Fo(e,l,new Ui(n),c,s,r,o,a)}})),l}function jo(e,t,n,i,s,r,o){if(null!=Eo(s,n))return t;const a=t.serverCache.isFiltered(),h=t.serverCache;if(null!=i.value){if(Qi(n)&&h.isFullyInitialized()||h.isCompleteForPath(n))return Fo(e,t,n,h.getNode().getChild(n),s,r,a,o);if(Qi(n)){let i=new Vr(null);return h.getNode().forEachChild(Cs,((e,t)=>{i=i.set(new Ui(e),t)})),Bo(e,t,n,i,s,r,a,o)}return t}{let l=new Vr(null);return i.foreach(((e,t)=>{const i=Ki(n,e);h.isCompleteForPath(i)&&(l=l.set(e,h.getNode().getChild(i)))})),Bo(e,t,n,l,s,r,a,o)}}function zo(e,t,n,i,s){const r=t.serverCache,o=Ur(t,r.getNode(),r.isFullyInitialized()||Qi(n),r.isFiltered());return Lo(e,o,n,i,Po,s)}function Vo(e,t,n,i,s,r){let o;if(null!=Eo(i,n))return t;{const h=new xo(i,t,s),l=t.eventCache.getNode();let c;if(Qi(n)||".priority"===Bi(n)){let n;if(t.serverCache.isFullyInitialized())n=Co(i,Br(t));else{const e=t.serverCache.getNode();a(e instanceof $s,"serverChildren would be complete if leaf node"),n=wo(i,e)}c=e.filter.updateFullNode(l,n,r)}else{const s=Bi(n);let a=To(i,s,t.serverCache);null==a&&t.serverCache.isCompleteForChild(s)&&(a=l.getImmediateChild(s)),c=null!=a?e.filter.updateChild(l,s,a,zi(n),h,r):t.eventCache.getNode().hasChild(s)?e.filter.updateChild(l,s,$s.EMPTY_NODE,zi(n),h,r):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Co(i,Br(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,r)))}return o=t.serverCache.isFullyInitialized()||null!=Eo(i,Hi()),Wr(t,c,o,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new or(n.getIndex()),s=cr(n);this.processor_=Do(s);const r=t.serverCache,o=t.eventCache,a=i.updateFullNode($s.EMPTY_NODE,r.getNode(),null),h=s.updateFullNode($s.EMPTY_NODE,o.getNode(),null),l=new Dr(a,r.isFullyInitialized(),i.filtersNodes()),c=new Dr(h,o.isFullyInitialized(),s.filtersNodes());this.viewCache_=qr(c,l),this.eventGenerator_=new Ar(this.query_)}get query(){return this.query_}}function Yo(e){return e.viewCache_.serverCache.getNode()}function Go(e,t){const n=Br(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Qi(t)&&!n.getImmediateChild(Bi(t)).isEmpty())?n.getChild(t):null}function Ko(e){return 0===e.eventRegistrations_.length}function Qo(e,t){e.eventRegistrations_.push(t)}function Xo(e,t,n){const i=[];if(n){a(null==t,"A cancel should cancel all event registrations.");const s=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,s);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const s=e.eventRegistrations_[i];if(s.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(s)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function Jo(e,t,n,i){t.type===Ir.MERGE&&null!==t.source.queryId&&(a(Br(e.viewCache_),"We should always have a full cache before handling merges"),a(Hr(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,r=Oo(e.processor_,s,t,n,i);return Ao(e.processor_,r.viewCache),a(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=r.viewCache,ea(e,r.changes,r.viewCache.eventCache.getNode(),null)}function Zo(e,t){const n=e.viewCache_.eventCache,i=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(qs,((e,t)=>{i.push(nr(e,t))}))}return n.isFullyInitialized()&&i.push(tr(n.getNode())),ea(e,i,n.getNode(),t)}function ea(e,t,n,i){const s=i?[i]:e.eventRegistrations_;return Or(e.eventGenerator_,t,n,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ta,na;class ia{constructor(){this.views=new Map}}function sa(e){a(!ta,"__referenceConstructor has already been defined"),ta=e}function ra(){return a(ta,"Reference.ts has not been loaded"),ta}function oa(e){return 0===e.views.size}function aa(e,t,n,i){const s=t.source.queryId;if(null!==s){const r=e.views.get(s);return a(null!=r,"SyncTree gave us an op for an invalid query."),Jo(r,t,n,i)}{let s=[];for(const r of e.views.values())s=s.concat(Jo(r,t,n,i));return s}}function ha(e,t,n,i,s){const r=t._queryIdentifier,o=e.views.get(r);if(!o){let e=Co(n,s?i:null),r=!1;e?r=!0:i instanceof $s?(e=wo(n,i),r=!1):(e=$s.EMPTY_NODE,r=!1);const o=qr(new Dr(e,r,!1),new Dr(i,s,!1));return new $o(t,o)}return o}function la(e,t,n,i,s,r){const o=ha(e,t,i,s,r);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),Qo(o,n),Zo(o,n)}function ca(e,t,n,i){const s=t._queryIdentifier,r=[];let o=[];const a=fa(e);if("default"===s)for(const[h,l]of e.views.entries())o=o.concat(Xo(l,n,i)),Ko(l)&&(e.views.delete(h),l.query._queryParams.loadsAllData()||r.push(l.query));else{const t=e.views.get(s);t&&(o=o.concat(Xo(t,n,i)),Ko(t)&&(e.views.delete(s),t.query._queryParams.loadsAllData()||r.push(t.query)))}return a&&!fa(e)&&r.push(new(ra())(t._repo,t._path)),{removed:r,events:o}}function ua(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function da(e,t){let n=null;for(const i of e.views.values())n=n||Go(i,t);return n}function pa(e,t){const n=t._queryParams;if(n.loadsAllData())return ga(e);{const n=t._queryIdentifier;return e.views.get(n)}}function _a(e,t){return null!=pa(e,t)}function fa(e){return null!=ga(e)}function ga(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(e){a(!na,"__referenceConstructor has already been defined"),na=e}function ya(){return a(na,"Reference.ts has not been loaded"),na}let va=1;class Ca{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Vr(null),this.pendingWriteTree_=vo(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function wa(e,t,n,i,s){return so(e.pendingWriteTree_,t,n,i,s),s?Aa(e,new Pr(Tr(),t,n)):[]}function ba(e,t,n,i){ro(e.pendingWriteTree_,t,n,i);const s=Vr.fromObject(n);return Aa(e,new xr(Tr(),t,s))}function Ea(e,t,n=!1){const i=oo(e.pendingWriteTree_,t),s=ao(e.pendingWriteTree_,t);if(s){let t=new Vr(null);return null!=i.snap?t=t.set(Hi(),!0):fn(i.children,(e=>{t=t.set(new Ui(e),!0)})),Aa(e,new Nr(i.path,t,n))}return[]}function Ia(e,t,n){return Aa(e,new Pr(Sr(),t,n))}function Ta(e,t,n){const i=Vr.fromObject(n);return Aa(e,new xr(Sr(),t,i))}function Sa(e,t){return Aa(e,new Rr(Sr(),t))}function ka(e,t,n){const i=Wa(e,n);if(i){const n=Ua(i),s=n.path,r=n.queryId,o=Xi(s,t),a=new Rr(kr(r),o);return Ha(e,s,a)}return[]}function Na(e,t,n,i){const s=t._path,r=e.syncPointTree_.get(s);let o=[];if(r&&("default"===t._queryIdentifier||_a(r,t))){const a=ca(r,t,n,i);oa(r)&&(e.syncPointTree_=e.syncPointTree_.remove(s));const h=a.removed;o=a.events;const l=-1!==h.findIndex((e=>e._queryParams.loadsAllData())),c=e.syncPointTree_.findOnPath(s,((e,t)=>fa(t)));if(l&&!c){const t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){const n=Ba(t);for(let t=0;t<n.length;++t){const i=n[t],s=i.query,r=La(e,i);e.listenProvider_.startListening(ja(s),Fa(e,s),r.hashFn,r.onComplete)}}}if(!c&&h.length>0&&!i)if(l){const n=null;e.listenProvider_.stopListening(ja(t),n)}else h.forEach((t=>{const n=e.queryToTagMap.get(qa(t));e.listenProvider_.stopListening(ja(t),n)}));za(e,h)}return o}function Ra(e,t,n,i){const s=Wa(e,i);if(null!=s){const i=Ua(s),r=i.path,o=i.queryId,a=Xi(r,t),h=new Pr(kr(o),a,n);return Ha(e,r,h)}return[]}function Pa(e,t,n,i){const s=Wa(e,i);if(s){const i=Ua(s),r=i.path,o=i.queryId,a=Xi(r,t),h=Vr.fromObject(n),l=new xr(kr(o),a,h);return Ha(e,r,l)}return[]}function xa(e,t,n){const i=t._path;let s=null,r=!1;e.syncPointTree_.foreachOnPath(i,((e,t)=>{const n=Xi(e,i);s=s||da(t,n),r=r||fa(t)}));let o,h=e.syncPointTree_.get(i);if(h?(r=r||fa(h),s=s||da(h,Hi())):(h=new ia,e.syncPointTree_=e.syncPointTree_.set(i,h)),null!=s)o=!0;else{o=!1,s=$s.EMPTY_NODE;const t=e.syncPointTree_.subtree(i);t.foreachChild(((e,t)=>{const n=da(t,Hi());n&&(s=s.updateImmediateChild(e,n))}))}const l=_a(h,t);if(!l&&!t._queryParams.loadsAllData()){const n=qa(t);a(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=Va();e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}const c=io(e.pendingWriteTree_,i);let u=la(h,t,n,c,s,o);if(!l&&!r){const n=pa(h,t);u=u.concat($a(e,t,n))}return u}function Da(e,t,n){const i=!0,s=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Xi(e,t),s=da(n,i);if(s)return s}));return po(s,t,r,n,i)}function Aa(e,t){return Oa(t,e.syncPointTree_,null,io(e.pendingWriteTree_,Hi()))}function Oa(e,t,n,i){if(Qi(e.path))return Ma(e,t,n,i);{const s=t.get(Hi());null==n&&null!=s&&(n=da(s,Hi()));let r=[];const o=Bi(e.path),a=e.operationForChild(o),h=t.children.get(o);if(h&&a){const e=n?n.getImmediateChild(o):null,t=So(i,o);r=r.concat(Oa(a,h,e,t))}return s&&(r=r.concat(aa(s,e,i,n))),r}}function Ma(e,t,n,i){const s=t.get(Hi());null==n&&null!=s&&(n=da(s,Hi()));let r=[];return t.children.inorderTraversal(((t,s)=>{const o=n?n.getImmediateChild(t):null,a=So(i,t),h=e.operationForChild(t);h&&(r=r.concat(Ma(h,s,o,a)))})),s&&(r=r.concat(aa(s,e,i,n))),r}function La(e,t){const n=t.query,i=Fa(e,n);return{hashFn:()=>{const e=Yo(t)||$s.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?ka(e,n._path,i):Sa(e,n._path);{const i=vn(t,n);return Na(e,n,null,i)}}}}function Fa(e,t){const n=qa(t);return e.queryToTagMap.get(n)}function qa(e){return e._path.toString()+"$"+e._queryIdentifier}function Wa(e,t){return e.tagToQueryMap.get(t)}function Ua(e){const t=e.indexOf("$");return a(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Ui(e.substr(0,t))}}function Ha(e,t,n){const i=e.syncPointTree_.get(t);a(i,"Missing sync point for query tag that we're tracking");const s=io(e.pendingWriteTree_,t);return aa(i,n,s,null)}function Ba(e){return e.fold(((e,t,n)=>{if(t&&fa(t)){const e=ga(t);return[e]}{let e=[];return t&&(e=ua(t)),fn(n,((t,n)=>{e=e.concat(n)})),e}}))}function ja(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(ya())(e._repo,e._path):e}function za(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=qa(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function Va(){return va++}function $a(e,t,n){const i=t._path,s=Fa(e,t),r=La(e,n),o=e.listenProvider_.startListening(ja(t),s,r.hashFn,r.onComplete),h=e.syncPointTree_.subtree(i);if(s)a(!fa(h.value),"If we're adding a query, it shouldn't be shadowed");else{const t=h.fold(((e,t,n)=>{if(!Qi(e)&&t&&fa(t))return[ga(t).query];{let e=[];return t&&(e=e.concat(ua(t).map((e=>e.query)))),fn(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(ja(i),Fa(e,i))}}return o}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ya(t)}node(){return this.node_}}class Ga{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ki(this.path_,e);return new Ga(this.syncTree_,t)}node(){return Da(this.syncTree_,this.path_)}}const Ka=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},Qa=function(e,t,n){return e&&"object"===typeof e?(a(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?Xa(e[".sv"],t,n):"object"===typeof e[".sv"]?Ja(e[".sv"],t):void a(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Xa=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:a(!1,"Unexpected server value: "+e)}},Ja=function(e,t,n){e.hasOwnProperty("increment")||a(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e["increment"];"number"!==typeof i&&a(!1,"Unexpected increment value: "+i);const s=t.node();if(a(null!==s&&"undefined"!==typeof s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const r=s,o=r.getValue();return"number"!==typeof o?i:o+i},Za=function(e,t,n,i){return th(t,new Ga(n,e),i)},eh=function(e,t,n){return th(e,new Ya(t),n)};function th(e,t,n){const i=e.getPriority().val(),s=Qa(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const i=e,r=Qa(i.getValue(),t,n);return r!==i.getValue()||s!==i.getPriority().val()?new Os(r,Qs(s)):e}{const i=e;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new Os(s))),i.forEachChild(qs,((e,i)=>{const s=th(i,t.getImmediateChild(e),n);s!==i&&(r=r.updateImmediateChild(e,s))})),r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function ih(e,t){let n=t instanceof Ui?t:new Ui(t),i=e,s=Bi(n);while(null!==s){const e=L(i.node.children,s)||{children:{},childCount:0};i=new nh(s,i,e),n=zi(n),s=Bi(n)}return i}function sh(e){return e.node.value}function rh(e,t){e.node.value=t,dh(e)}function oh(e){return e.node.childCount>0}function ah(e){return void 0===sh(e)&&!oh(e)}function hh(e,t){fn(e.node.children,((n,i)=>{t(new nh(n,e,i))}))}function lh(e,t,n,i){n&&!i&&t(e),hh(e,(e=>{lh(e,t,!0,i)})),n&&i&&t(e)}function ch(e,t,n){let i=n?e:e.parent;while(null!==i){if(t(i))return!0;i=i.parent}return!1}function uh(e){return new Ui(null===e.parent?e.name:uh(e.parent)+"/"+e.name)}function dh(e){null!==e.parent&&ph(e.parent,e.name,e)}function ph(e,t,n){const i=ah(n),s=M(e.node.children,t);i&&s?(delete e.node.children[t],e.node.childCount--,dh(e)):i||s||(e.node.children[t]=n.node,e.node.childCount++,dh(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=/[\[\].#$\/\u0000-\u001F\u007F]/,fh=/[\[\].#$\u0000-\u001F\u007F]/,gh=10485760,mh=function(e){return"string"===typeof e&&0!==e.length&&!_h.test(e)},yh=function(e){return"string"===typeof e&&0!==e.length&&!fh.test(e)},vh=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),yh(e)},Ch=function(e){return null===e||"string"===typeof e||"number"===typeof e&&!on(e)||e&&"object"===typeof e&&M(e,".sv")},wh=function(e,t,n){const i=n instanceof Ui?new ts(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+rs(i));if("function"===typeof t)throw new Error(e+"contains a function "+rs(i)+" with contents = "+t.toString());if(on(t))throw new Error(e+"contains "+t.toString()+" "+rs(i));if("string"===typeof t&&t.length>gh/3&&V(t)>gh)throw new Error(e+"contains a string greater than "+gh+" utf8 bytes "+rs(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,s=!1;if(fn(t,((t,r)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(s=!0,!mh(t)))throw new Error(e+" contains an invalid key ("+t+") "+rs(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');ns(i,t),wh(e,r,i),is(i)})),n&&s)throw new Error(e+' contains ".value" child '+rs(i)+" in addition to actual children.")}},bh=function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const s=Yi(i);for(let t=0;t<s.length;t++)if(".priority"===s[t]&&t===s.length-1);else if(!mh(s[t]))throw new Error(e+"contains an invalid key ("+s[t]+") in path "+i.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(Ji);let s=null;for(n=0;n<t.length;n++){if(i=t[n],null!==s&&es(s,i))throw new Error(e+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},Eh=function(e,t,n,i){if(i&&void 0===t)return;const s=j(e,"values");if(!t||"object"!==typeof t||Array.isArray(t))throw new Error(s+" must be an object containing the children to replace.");const r=[];fn(t,((e,t)=>{const i=new Ui(e);if(wh(s,t,Ki(n,i)),".priority"===Vi(i)&&!Ch(t))throw new Error(s+"contains an invalid value for '"+i.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(i)})),bh(s,r)},Ih=function(e,t,n,i){if((!i||void 0!==n)&&!yh(n))throw new Error(j(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Th=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ih(e,t,n,i)},Sh=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!mh(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!vh(n))throw new Error(j(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kh{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Nh(e,t){let n=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();null===n||Zi(r,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}function Rh(e,t,n){Nh(e,n),xh(e,(e=>Zi(e,t)))}function Ph(e,t,n){Nh(e,n),xh(e,(e=>es(e,t)||es(t,e)))}function xh(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const s=e.eventLists_[i];if(s){const r=s.path;t(r)?(Dh(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Dh(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();Qt&&Zt("event: "+n.toString()),In(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah="repo_interrupt",Oh=25;class Mh{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new kh,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=fr(),this.transactionQueueTree_=new nh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Lh(e,t,n){if(e.stats_=Yn(e.repoInfo_),e.forceRestClient_||Tn())e.server_=new pr(e.repoInfo_,((t,n,i,s)=>{Wh(e,t,n,i,s)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Uh(e,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{x(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new fs(e.repoInfo_,t,((t,n,i,s)=>{Wh(e,t,n,i,s)}),(t=>{Uh(e,t)}),(t=>{Hh(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=Gn(e.repoInfo_,(()=>new Er(e.stats_,e.server_))),e.infoData_=new _r,e.infoSyncTree_=new Ca({startListening:(t,n,i,s)=>{let r=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(r=Ia(e.infoSyncTree_,t._path,o),setTimeout((()=>{s("ok")}),0)),r},stopListening:()=>{}}),Bh(e,"connected",!1),e.serverSyncTree_=new Ca({startListening:(t,n,i,s)=>(e.server_.listen(t,i,n,((n,i)=>{const r=s(n,i);Ph(e.eventQueue_,t._path,r)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Fh(e){const t=e.infoData_.getNode(new Ui(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function qh(e){return Ka({timestamp:Fh(e)})}function Wh(e,t,n,i,s){e.dataUpdateCount++;const r=new Ui(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(s)if(i){const t=q(n,(e=>Qs(e)));o=Pa(e.serverSyncTree_,r,t,s)}else{const t=Qs(n);o=Ra(e.serverSyncTree_,r,t,s)}else if(i){const t=q(n,(e=>Qs(e)));o=Ta(e.serverSyncTree_,r,t)}else{const t=Qs(n);o=Ia(e.serverSyncTree_,r,t)}let a=r;o.length>0&&(a=el(e,r)),Ph(e.eventQueue_,a,o)}function Uh(e,t){Bh(e,"connected",t),!1===t&&Vh(e)}function Hh(e,t){fn(t,((t,n)=>{Bh(e,t,n)}))}function Bh(e,t,n){const i=new Ui("/.info/"+t),s=Qs(n);e.infoData_.updateSnapshot(i,s);const r=Ia(e.infoSyncTree_,i,s);Ph(e.eventQueue_,i,r)}function jh(e){return e.nextWriteId_++}function zh(e,t,n,i){Kh(e,"update",{path:t.toString(),value:n});let s=!0;const r=qh(e),o={};if(fn(n,((n,i)=>{s=!1,o[n]=Za(Ki(t,n),Qs(i),e.serverSyncTree_,r)})),s)Zt("update() called with empty data.  Don't do anything."),Qh(e,i,"ok",void 0);else{const s=jh(e),r=ba(e.serverSyncTree_,t,o,s);Nh(e.eventQueue_,r),e.server_.merge(t.toString(),n,((n,r)=>{const o="ok"===n;o||sn("update at "+t+" failed: "+n);const a=Ea(e.serverSyncTree_,s,!o),h=a.length>0?el(e,t):t;Ph(e.eventQueue_,h,a),Qh(e,i,n,r)})),fn(n,(n=>{const i=ol(e,Ki(t,n));el(e,i)})),Ph(e.eventQueue_,t,[])}}function Vh(e){Kh(e,"onDisconnectEvents");const t=qh(e),n=fr();mr(e.onDisconnect_,Hi(),((i,s)=>{const r=Za(i,s,e.serverSyncTree_,t);gr(n,i,r)}));let i=[];mr(n,Hi(),((t,n)=>{i=i.concat(Ia(e.serverSyncTree_,t,n));const s=ol(e,t);el(e,s)})),e.onDisconnect_=fr(),Ph(e.eventQueue_,Hi(),i)}function $h(e,t,n){let i;i=".info"===Bi(t._path)?xa(e.infoSyncTree_,t,n):xa(e.serverSyncTree_,t,n),Rh(e.eventQueue_,t._path,i)}function Yh(e,t,n){let i;i=".info"===Bi(t._path)?Na(e.infoSyncTree_,t,n):Na(e.serverSyncTree_,t,n),Rh(e.eventQueue_,t._path,i)}function Gh(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Ah)}function Kh(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Zt(n,...t)}function Qh(e,t,n,i){t&&In((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let s=e;i&&(s+=": "+i);const r=new Error(s);r.code=e,t(r)}}))}function Xh(e,t,n){return Da(e.serverSyncTree_,t,n)||$s.EMPTY_NODE}function Jh(e,t=e.transactionQueueTree_){if(t||rl(e,t),sh(t)){const n=il(e,t);a(n.length>0,"Sending zero length transaction queue");const i=n.every((e=>0===e.status));i&&Zh(e,uh(t),n)}else oh(t)&&hh(t,(t=>{Jh(e,t)}))}function Zh(e,t,n){const i=n.map((e=>e.currentWriteId)),s=Xh(e,t,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const e=n[c];a(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const i=Xi(t,e.path);r=r.updateChild(i,e.currentOutputSnapshotRaw)}const h=r.val(!0),l=t;e.server_.put(l.toString(),h,(i=>{Kh(e,"transaction put response",{path:l.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,s=s.concat(Ea(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();rl(e,ih(e.transactionQueueTree_,t)),Jh(e,e.transactionQueueTree_),Ph(e.eventQueue_,t,s);for(let e=0;e<i.length;e++)In(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{sn("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}el(e,t)}}),o)}function el(e,t){const n=nl(e,t),i=uh(n),s=il(e,n);return tl(e,s,i),i}function tl(e,t,n){if(0===t.length)return;const i=[];let s=[];const r=t.filter((e=>0===e.status)),o=r.map((e=>e.currentWriteId));for(let h=0;h<t.length;h++){const r=t[h],l=Xi(n,r.path);let c,u=!1;if(a(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===r.status)u=!0,c=r.abortReason,s=s.concat(Ea(e.serverSyncTree_,r.currentWriteId,!0));else if(0===r.status)if(r.retryCount>=Oh)u=!0,c="maxretry",s=s.concat(Ea(e.serverSyncTree_,r.currentWriteId,!0));else{const n=Xh(e,r.path,o);r.currentInputSnapshot=n;const i=t[h].update(n.val());if(void 0!==i){wh("transaction failed: Data returned ",i,r.path);let t=Qs(i);const a="object"===typeof i&&null!=i&&M(i,".priority");a||(t=t.updatePriority(n.getPriority()));const h=r.currentWriteId,l=qh(e),c=eh(t,n,l);r.currentOutputSnapshotRaw=t,r.currentOutputSnapshotResolved=c,r.currentWriteId=jh(e),o.splice(o.indexOf(h),1),s=s.concat(wa(e.serverSyncTree_,r.path,c,r.currentWriteId,r.applyLocally)),s=s.concat(Ea(e.serverSyncTree_,h,!0))}else u=!0,c="nodata",s=s.concat(Ea(e.serverSyncTree_,r.currentWriteId,!0))}Ph(e.eventQueue_,n,s),s=[],u&&(t[h].status=2,function(e){setTimeout(e,Math.floor(0))}(t[h].unwatcher),t[h].onComplete&&("nodata"===c?i.push((()=>t[h].onComplete(null,!1,t[h].currentInputSnapshot))):i.push((()=>t[h].onComplete(new Error(c),!1,null)))))}rl(e,e.transactionQueueTree_);for(let a=0;a<i.length;a++)In(i[a]);Jh(e,e.transactionQueueTree_)}function nl(e,t){let n,i=e.transactionQueueTree_;n=Bi(t);while(null!==n&&void 0===sh(i))i=ih(i,n),t=zi(t),n=Bi(t);return i}function il(e,t){const n=[];return sl(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function sl(e,t,n){const i=sh(t);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);hh(t,(t=>{sl(e,t,n)}))}function rl(e,t){const n=sh(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,rh(t,n.length>0?n:void 0)}hh(t,(t=>{rl(e,t)}))}function ol(e,t){const n=uh(nl(e,t)),i=ih(e.transactionQueueTree_,t);return ch(i,(t=>{al(e,t)})),al(e,i),lh(i,(t=>{al(e,t)})),n}function al(e,t){const n=sh(t);if(n){const i=[];let s=[],r=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(a(r===t-1,"All SENT items should be at beginning of queue."),r=t,n[t].status=3,n[t].abortReason="set"):(a(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),s=s.concat(Ea(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===r?rh(t,void 0):n.length=r+1,Ph(e.eventQueue_,uh(t),s);for(let e=0;e<i.length;e++)In(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(e){let t="";const n=e.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let e=n[s];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(i){}t+="/"+e}return t}function ll(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):sn(`Invalid query segment '${n}' in query '${e}'`)}return t}const cl=function(e,t){const n=ul(e),i=n.namespace;"firebase.com"===n.domain&&nn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||nn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||rn();const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Hn(n.host,n.secure,i,s,t,"",i!==n.subdomain),path:new Ui(n.pathString)}},ul=function(e){let t="",n="",i="",s="",r="",o=!0,a="https",h=443;if("string"===typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let c=e.indexOf("/");-1===c&&(c=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(c,u)),c<u&&(s=hl(e.substring(c,u)));const d=ll(e.substring(Math.min(e.length,u)));l=t.indexOf(":"),l>=0?(o="https"===a||"wss"===a,h=parseInt(t.substring(l+1),10)):l=t.length;const p=t.slice(0,l);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),r=i}"ns"in d&&(r=d["ns"])}return{host:t,port:h,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dl{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+x(this.snapshot.exportVal())}}class pl{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return a(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fl{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return Qi(this._path)?null:Vi(this._path)}get ref(){return new gl(this._repo,this._path)}get _queryIdentifier(){const e=dr(this._queryParams),t=pn(e);return"{}"===t?"default":t}get _queryObject(){return dr(this._queryParams)}isEqual(e){if(e=$(e),!(e instanceof fl))return!1;const t=this._repo===e._repo,n=Zi(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+$i(this._path)}}class gl extends fl{constructor(e,t){super(e,t,new lr,!1)}get parent(){const e=Gi(this._path);return null===e?null:new gl(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class ml{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Ui(e),n=vl(this.ref,e);return new ml(this._node.getChild(t),n,qs)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,((t,n)=>e(new ml(n,vl(this.ref,t),qs))))}hasChild(e){const t=new Ui(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function yl(e,t){return e=$(e),e._checkNotDeleted("ref"),void 0!==t?vl(e._root,t):e._root}function vl(e,t){return e=$(e),null===Bi(e._path)?Th("child","path",t,!1):Ih("child","path",t,!1),new gl(e._repo,Ki(e._path,t))}function Cl(e,t){Eh("update",t,e._path,!1);const n=new y;return zh(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}class wl{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new dl("value",this,new ml(e.snapshotNode,new gl(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new pl(this,e,t):null}matches(e){return e instanceof wl&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class bl{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new pl(this,e,t):null}createEvent(e,t){a(null!=e.childName,"Child events should have a childName.");const n=vl(new gl(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new dl(e.type,this,new ml(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof bl&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function El(e,t,n,i,s){let r;if("object"===typeof i&&(r=void 0,s=i),"function"===typeof i&&(r=i),s&&s.onlyOnce){const t=n,i=(n,i)=>{Yh(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const o=new _l(n,r||void 0),a="value"===t?new wl(o):new bl(t,o);return $h(e._repo,e,a),()=>Yh(e._repo,e,a)}function Il(e,t,n,i){return El(e,"value",t,n,i)}sa(gl),ma(gl);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Tl="FIREBASE_DATABASE_EMULATOR_HOST",Sl={};let kl=!1;function Nl(e,t,n,i,s){let r=i||e.options.databaseURL;void 0===r&&(e.options.projectId||nn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Zt("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,h=cl(r,s),l=h.repoInfo;"undefined"!==typeof process&&(a={NODE_ENV:"production",BASE_URL:"/beta/"}[Tl]),a?(o=!0,r=`http://${a}?ns=${l.namespace}`,h=cl(r,s),l=h.repoInfo):o=!h.repoInfo.secure;const c=s&&o?new Rn(Rn.OWNER):new Nn(e.name,e.options,t);Sh("Invalid Firebase Database URL",h),Qi(h.path)||nn("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Pl(l,e,c,new kn(e.name,n));return new xl(u,e)}function Rl(e,t){const n=Sl[t];n&&n[e.key]===e||nn(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Gh(e),delete n[e.key]}function Pl(e,t,n,i){let s=Sl[t.name];s||(s={},Sl[t.name]=s);let r=s[e.toURLString()];return r&&nn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Mh(e,kl,n,i),s[e.toURLString()]=r,r}class xl{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Lh(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new gl(this._repo,Hi())),this._rootInternal}_delete(){return null!==this._rootInternal&&(Rl(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&nn("Cannot call "+e+" on a deleted database.")}}function Dl(e=mt(),t){return ut(e,"database").getImmediate({identifier:t})}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Al(e){Ut(ft),ct(new Y("database",((e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Nl(n,i,s,t)}),"PUBLIC").setMultipleInstances(!0)),yt(Ft,qt,e),yt(Ft,qt,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fs.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},fs.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};Al();const Ol={apiKey:"AIzaSyAXzw2BNqhI6HJLFvDxGk8aFNnGEGz7ge0",authDomain:"twinny-beongae-ea0a4.firebaseapp.com",databaseURL:"https://twinny-beongae-ea0a4-default-rtdb.firebaseio.com",projectId:"twinny-beongae-ea0a4",storageBucket:"twinny-beongae-ea0a4.appspot.com",messagingSenderId:"82638857824",appId:"1:82638857824:web:ef5ea88e03accb25bc4505",measurementId:"G-1FVMVDJYTB"},Ml=gt(Ol),Ll=Dl(Ml),Fl=yl(Ll,"rooms/room1/appointment_time");Il(Fl,(e=>{console.log(e.val())}));var ql={name:"AboutView",components:{},date(){return{appointmentTime:1}},methods:{increaseAppointmentTime(){const e={"/rooms/room1/appointment_time":123456};Cl(yl(Ll),e)}}},Wl=n(89);const Ul=(0,Wl.Z)(ql,[["render",r]]);var Hl=Ul}}]);
//# sourceMappingURL=about.2b35675f.js.map