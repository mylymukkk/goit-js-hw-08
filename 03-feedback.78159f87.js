!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return s.Date.now()};function p(e,t,n){var r,i,a,u,f,c,l=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function j(e){return l=e,f=setTimeout(T,t),d?p(e):u}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=a}function T(){var e=b();if(O(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-c);return s?g(n,a-(e-l)):n}(e))}function h(e){return f=void 0,m&&r?p(e):(r=i=void 0,u)}function w(){var e=b(),n=O(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return j(c);if(s)return f=setTimeout(T,t),p(c)}return void 0===f&&(f=setTimeout(T,t)),u}return t=S(t)||0,y(n)&&(d=!!n.leading,a=(s="maxWait"in n)?v(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},w.flush=function(){return void 0===f?u:h(b())},w}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?c(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var j=document.querySelector("input"),O=document.querySelector("textarea"),T=document.querySelector("form"),h={email:"",message:""},w=JSON.parse(localStorage.getItem("feedback-form-state"));!function(){if(!localStorage.getItem("feedback-form-state"))return;var e=w.email,t=w.message;j.value=e||"",O.value=t||""}(),T.addEventListener("input",e(t)((function(e){h[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500)),T.addEventListener("submit",(function(e){e.preventDefault(),console.log("Feedback form state: ",h),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}))}();
//# sourceMappingURL=03-feedback.78159f87.js.map
