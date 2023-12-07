!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=171)}({171:function(e,t,n){"use strict";(function(e){var o=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();t.__esModule=!0;var i=n(4),r=n(6),s=function(t){function n(){return t.call(this,e)||this}return o(n,t),n.removeStyle=function(){r.findByIdAndRemove(n.styleId)},n.prototype.injectStyle=function(){var e=this.getHook().config,t=r.createCSSElement(".ui-dialog { opacity: "+e.opacity+"; }",n.styleId);document.body.appendChild(t)},n.prototype.onSettingChange=function(e,t,o){n.removeStyle(),this.injectStyle()},n.prototype.setup=function(){this.injectStyle()},n.prototype.dispose=function(){n.removeStyle(),t.prototype.dispose.call(this)},n.styleId="r20es-transparent-paper-style",n}(i.R20Module.OnAppLoadBase);i.R20Module.canInstall()&&(new s).install()}).call(this,"src/modules/TransparentPaper")},3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=(e=>{const t=e.replace(/\\/g,"/").split("/");if(t.length<=0)throw new Error("Invalid dirname given.");return t[t.length-1]+".js"})},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.R20Module=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(n(3));function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}let s={};t.R20Module=s,s.Base=function(){function e(e){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(this,"getAllHooks",e=>window.r20es.hooks),this.filename=(0,o.default)(e),this.isDisposed=!0}var t=e.prototype;return t.installFirstTime=function(){},t.installUpdate=function(){},t.dispose=function(){},t.internalCanInstall=function(){return!!this.getHook().config.enabled&&(!!this.isDisposed||(console.error("Attempted to install module when it's not disposed."),console.table({"Module filename":this.filename}),console.trace(),!1))},t.internalInstallFirstTime=function(){if(this.internalCanInstall()){try{this.installFirstTime()}catch(e){console.error(e)}this.isDisposed=!1}},t.internalInstallUpdate=function(){if(this.internalCanInstall()){try{this.installUpdate()}catch(e){console.error(e)}this.isDisposed=!1}},t.internalDispose=function(){if(console.log(this),this.isDisposed)return console.error("internalDispose called on module that is already disposed!"),console.table({"Module filename":this.filename}),void console.trace();try{this.dispose()}catch(e){console.error(e)}this.isDisposed=!0},t.setConfigValue=function(e,t){const n=this.getHook(),o=this.getHook().config;if(!(e in o))return void console.error(`Tried to set config of key ${e} to value ${t} but key was not found in the config of module id ${n.id}"`);const i=o[e];o[e]=t,n.saveConfig(),o.enabled&&"onSettingChange"in this&&"function"==typeof this.onSettingChange&&this.onSettingChange(e,i,t)},t.getHook=function(){if(!1 in window.r20es)return null;for(const e in window.r20es.hooks){const t=window.r20es.hooks[e];if(t.filename&&t.filename===this.filename)return t}return null},t.toggleEnabledState=function(e){const t=this.getHook(),n=void 0===e||null===e?!t.config.enabled:e;if(t.config.enabled&&n)return;const o=t.config.enabled;t.config.enabled=n,t.saveConfig(),o&&!n?(console.log("disabling"),this.internalDispose()):!o&&n&&(console.log("enabling"),this.internalInstallUpdate())},t.install=function(){if(!("r20esInstalledModuleTable"in window))return;if(!("r20esDisposeTable"in window))return;console.log(`Installing module filename: ${this.filename}`),!(this.filename in window.r20esInstalledModuleTable)?(console.log("First run"),this.internalInstallFirstTime()):(this.filename in window.r20esDisposeTable&&console.error(`DUPLICATE MODULE FOUND: ${this.filename}`),console.log("Calling install update"),this.internalInstallUpdate()),window.r20esDisposeTable[this.filename]=(()=>{this.dispose()}),window.r20esInstalledModuleTable[this.filename]=this,console.log(`DONE! module ID: ${this.filename}`)},e}(),s.SimpleBase=function(e){function t(){return e.apply(this,arguments)||this}r(t,e);var n=t.prototype;return n.installFirstTime=function(){this.setup()},n.installUpdate=function(){this.setup()},n.setup=function(){},t}(s.Base),s.OnAppLoadBase=function(e){function t(t){var n;return(n=e.call(this,t)||this).setup=n.setup.bind(i(i(n))),n}r(t,e);var n=t.prototype;return n.installFirstTime=function(){window.r20es.isLoading?(this.earlySetup(),window.r20es.onAppLoad.addEventListener(this.setup)):(this.earlySetup(),this.setup())},n.earlySetup=function(){},n.setup=function(){},n.installUpdate=function(){this.installFirstTime()},n.dispose=function(){window.r20es.onAppLoad.removeEventListener(this.setup)},t}(s.Base),s.canInstall=(e=>window.r20es&&"canInstallModules"in window.r20es&&window.r20es.canInstallModules),s.getModule=function(e){return"r20esInstalledModuleTable"in window?window.r20esInstalledModuleTable[e]:null},s.getModuleById=function(e){return"r20esInstalledModuleTable"in window?s.getModule(window.r20es.hooks[e].filename):null}},6:function(e,t,n){"use strict";t.__esModule=!0;var o=n(8);t.copy=function(e,t){var n=Object.assign({},e);return t&&(n=Object.assign(n,t)),n};var i=function(e){if("currentTransform"in e)return e.currentTransform;if("getTransform"in e)return e.getTransform();if(e.mozCurrentTransform){var t=e.mozCurrentTransform;return{a:t[0],b:t[1],c:t[2],d:t[3],e:t[4],f:t[5]}}};t.getTransform=i,t.nearly_format_file_url=function(e){var t="";try{var n=function(e,t){var n=e.indexOf(t);return n>0?e.substring(0,n):e},o=e.lastIndexOf("/");t=n(t=n(t=n(t=e.substring(o+1),"."),"?"),"#"),t=decodeURIComponent(t)}catch(n){t=e}return t};t.getRotation=function(e){var t=i(e),n=Math.atan2(t.b,t.a);return n<0&&(n+=2*Math.PI),n};t.findByIdAndRemove=function(e){var t=document.getElementById(e);t&&t.remove()};t.mapObj=function(e,t){return Object.keys(e).reduce(function(n,o){var i=t(e[o],o);return void 0!==i&&null!==i&&n.push(i),n},[])};t.safeCall=function(e){try{e()}catch(e){console.error(e)}};t.removeAllChildren=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)};t.replaceAll=function(e,t,n){return e.replace(new RegExp(function(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(t),"g"),n)};t.safeParseJson=function(e){try{return JSON.parse(e)}catch(e){alert("File is not a valid JSON file.")}return null};t.readFile=function(e){return new Promise(function(t,n){if(e){var o=new FileReader;o.readAsText(e),o.onload=function(e){t(e.target.result)}}else n("No file given.")})};var r=function(){return chrome||browser};t.getBrowser=r;t.injectScript=function(e){console.log("Injecting "+e);var t=document.createElement("script");t.async=!1,t.src=r().extension.getURL(e),t.onload=function(){t.remove()},document.head.appendChild(t)};t.strIsNullOrEmpty=function(e){return null===e||void 0===e||e.length<=0||e.trim().length<=0};t.createCSSElement=function(e,t){var n=document.createElement("style");return n.innerHTML=e,n.id=t,n};t.getExtUrlFromPage=function(e,t){var n=void 0===t||null===t?1e3:t;return new Promise(function(t,i){try{var r=!1,s=function(){window.removeEventListener("message",a)},l=window.generateUUID(),a=function(e){e.origin===o.Config.appUrl&&e.data.r20esGivesResourceUrl&&e.data.r20esGivesResourceUrl.id===l&&(r=!0,s(),t(e.data.r20esGivesResourceUrl.url))};window.addEventListener("message",a);var u={resource:e,id:l};window.postMessage({r20esWantsResourceUrl:u},o.Config.appUrl),setTimeout(function(){try{r||(s(),i("Timed out after "+n+"ms"))}catch(e){i(e)}},n)}catch(e){i(e)}})}},8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Config=void 0;let o={};t.Config=o,o.appUrl="https://app.roll20.net",o.websiteFeatureUrlTemplate="https://justas-d.github.io/roll20-enhancement-suite/features#",o.website="https://justas-d.github.io/roll20-enhancement-suite/",o.discordInvite="https://discord.gg/pKxxvuM",o.contributeUrl="https://justas-d.github.io/roll20-enhancement-suite/contribute.html"}});