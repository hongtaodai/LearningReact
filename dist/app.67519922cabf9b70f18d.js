!function(e){function t(t){for(var r,f,c=t[0],i=t[1],a=t[2],s=0,p=[];s<c.length;s++)f=c[s],u[f]&&p.push(u[f][0]),u[f]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(l&&l(t);p.length;)p.shift()();return o.push.apply(o,a||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==u[i]&&(r=!1)}r&&(o.splice(t--,1),e=f(f.s=n[0]))}return e}var r={},u={0:0},o=[];function f(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,f),n.l=!0,n.exports}f.m=e,f.c=r,f.d=function(e,t,n){f.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},f.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.t=function(e,t){if(1&t&&(e=f(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(f.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)f.d(n,r,function(t){return e[t]}.bind(null,r));return n},f.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(t,"a",t),t},f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},f.p="";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var a=0;a<c.length;a++)t(c[a]);var l=i;o.push([20,1]),n()}([,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getUserInfo=function(){return function(e){e({type:r}),setTimeout(function(){return fetch("http://localhost:8080/api/user.json").then(function(e){return e.json()}).then(function(t){e(function(e){return{type:u,userInfo:e}}(t))}).catch(function(){e({type:o})})},2e3)}};var r=t.GET_USER_INFO_REQUEST="userInfo/GET_USER_INFO_REQUEST",u=t.GET_USER_INFO_SUCCESS="userInfo/GET_USER_INFO_SUCCESS",o=t.GET_USER_INFO_FAIL="userInfo/GET_USER_INFO_FAIL"},,,function(e,t,n){e.exports=n(21)},function(e,t,n){"use strict";var r=i(n(0)),u=i(n(7)),o=i(n(26)),f=n(12),c=i(n(31));function i(e){return e&&e.__esModule?e:{default:e}}u.default.render(r.default.createElement(f.Provider,{store:c.default},r.default.createElement(o.default,null)),document.getElementById("app"))},,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u,o=n(0),f=(u=o)&&u.__esModule?u:{default:u},c=n(12),i=n(17),a=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,o.Component),function(e,t,n){t&&r(e.prototype,t),n&&r(e,n)}(l,[{key:"render",value:function(){var e=this,t=this.props.userInfo,n=t.userInfo,r=t.isLoading,u=t.errorMsg;return f.default.createElement("div",null,r?"数据请求中......":u||f.default.createElement("div",null,f.default.createElement("p",null,"用户信息："),f.default.createElement("p",null,"用户名称：",n.name),f.default.createElement("p",null,"用户简介：",n.intro)),f.default.createElement("button",{onClick:function(){return e.props.getUserInfo()}},"请求用户信息"))}}]),l);function l(){return function(e,t){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}(this),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))}t.default=(0,c.connect)(function(e){return{userInfo:e.userInfo}},{getUserInfo:i.getUserInfo})(a)},,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9),u=f(n(32)),o=f(n(36));function f(e){return e&&e.__esModule?e:{default:e}}var c=(0,r.createStore)(u.default,(0,r.applyMiddleware)(o.default));t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];return{counter:(0,r.default)(e.counter,t),userInfo:(0,u.default)(e.userInfo,t)}};var r=o(n(33)),u=o(n(35));function o(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:u;switch(arguments[1].type){case r.INCREMENT:return{count:e.count+1};case r.DECREMENT:return{count:e.count-1};case r.RESET:return{count:0};default:return e}};var r=n(34),u={count:0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.increment=function(){return{type:r}},t.decrement=function(){return{type:u}},t.reset=function(){return{type:o}};var r=t.INCREMENT="counter/INCREMENT",u=t.DECREMENT="counter/DECREMENT",o=t.RESET="counter/RESET"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case u.GET_USER_INFO_REQUEST:return r({},e,{isLoading:!0,userInfo:{},errorMsg:""});case u.GET_USER_INFO_SUCCESS:return r({},e,{isLoading:!1,userInfo:t.userInfo,errorMsg:""});case u.GET_USER_INFO_FAIL:return r({},e,{isLoading:!1,userInfo:{},errorMsg:"请求错误"});default:return e}};var u=n(17),o={isLoading:!1,userInfo:{},errorMsg:""}},function(e,t,n){"use strict";function r(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(u){return"function"==typeof u?u(n,r,e):t(u)}}}}n.r(t);var u=r();u.withExtraArgument=r,t.default=u}]);