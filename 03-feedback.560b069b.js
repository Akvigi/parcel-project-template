!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,g=Math.max,v=Math.min,S=function(){return d.Date.now()};function p(e,t,n){var o,i,a,u,l,f,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function E(e){return c=e,l=setTimeout(b,t),s?p(e):u}function O(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=a}function b(){var e=S();if(O(e))return L(e);l=setTimeout(b,function(e){var n=t-(e-f);return d?v(n,a-(e-c)):n}(e))}function L(e){return l=void 0,m&&o?p(e):(o=i=void 0,u)}function T(){var e=S(),n=O(e);if(o=arguments,i=this,f=e,n){if(void 0===l)return E(f);if(d)return l=setTimeout(b,t),p(f)}return void 0===l&&(l=setTimeout(b,t)),u}return t=A(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?g(A(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=f=i=l=void 0},T.flush=function(){return void 0===l?u:L(S())},T}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function A(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||l.test(t)?f(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};var E=document.querySelector(".feedback-form");document.querySelector("#message");localStorage.getItem("LOCALSTORAGE_EMAIL")&&localStorage.getItem("LOCALSTORAGE_MESSAGE")&&(E.elements.email.value=localStorage.getItem("LOCALSTORAGE_EMAIL"),E.elements.message.value=localStorage.getItem("LOCALSTORAGE_MESSAGE")),E.addEventListener("submit",e(t)((function(e){e.preventDefault();var t=E.elements,n=t.email,o=t.message;localStorage.setItem("LOCALSTORAGE_EMAIL",n.value),localStorage.setItem("LOCALSTORAGE_MESSAGE",o.value),console.log(localStorage.getItem("LOCALSTORAGE_EMAIL"),localStorage.getItem("LOCALSTORAGE_MESSAGE")),E.reset()}),500))}();
//# sourceMappingURL=03-feedback.560b069b.js.map