function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,p=Math.min,y=function(){return l.Date.now()};function v(e,t,n){var i,o,r,u,f,a,c=0,l=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function h(e){return c=e,f=setTimeout(j,t),l?b(e):u}function T(e){var n=e-a;return void 0===a||n>=t||n<0||d&&e-c>=r}function j(){var e=y();if(T(e))return w(e);f=setTimeout(j,function(e){var n=t-(e-a);return d?p(n,r-(e-c)):n}(e))}function w(e){return f=void 0,v&&i?b(e):(i=o=void 0,u)}function O(){var e=y(),n=T(e);if(i=arguments,o=this,a=e,n){if(void 0===f)return h(a);if(d)return f=setTimeout(j,t),b(a)}return void 0===f&&(f=setTimeout(j,t)),u}return t=m(t)||0,g(n)&&(l=!!n.leading,r=(d="maxWait"in n)?s(m(n.maxWait)||0,t):r,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=a=o=f=void 0},O.flush=function(){return void 0===f?u:w(y())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function m(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:i,maxWait:t,trailing:o})};const b=document.querySelector("iframe"),h=new Vimeo.Player(b);h.on("play",(function(){console.log("played the video!")})),h.getVideoTitle().then((function(e){console.log("title:",e)}));h.on("timeupdate",e(t)((function({seconds:e}){localStorage.setItem("videoplayer-current-time",JSON.stringify(e))}),1e3)),h.setCurrentTime(localStorage.getItem("videoplayer-current-time")||0);
//# sourceMappingURL=02-video.500e174d.js.map
