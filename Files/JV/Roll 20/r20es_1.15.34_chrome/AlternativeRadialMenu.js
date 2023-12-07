!function(n){var e={};function t(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return n[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,i){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(i,o,function(e){return n[e]}.bind(null,o));return i},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=99)}({3:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default=(n=>{const e=n.replace(/\\/g,"/").split("/");if(e.length<=0)throw new Error("Invalid dirname given.");return e[e.length-1]+".js"})},4:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.R20Module=void 0;var i=function(n){return n&&n.__esModule?n:{default:n}}(t(3));function o(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function r(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}let a={};e.R20Module=a,a.Base=function(){function n(n){!function(n,e,t){e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t}(this,"getAllHooks",n=>window.r20es.hooks),this.filename=(0,i.default)(n),this.isDisposed=!0}var e=n.prototype;return e.installFirstTime=function(){},e.installUpdate=function(){},e.dispose=function(){},e.internalCanInstall=function(){return!!this.getHook().config.enabled&&(!!this.isDisposed||(console.error("Attempted to install module when it's not disposed."),console.table({"Module filename":this.filename}),console.trace(),!1))},e.internalInstallFirstTime=function(){if(this.internalCanInstall()){try{this.installFirstTime()}catch(n){console.error(n)}this.isDisposed=!1}},e.internalInstallUpdate=function(){if(this.internalCanInstall()){try{this.installUpdate()}catch(n){console.error(n)}this.isDisposed=!1}},e.internalDispose=function(){if(console.log(this),this.isDisposed)return console.error("internalDispose called on module that is already disposed!"),console.table({"Module filename":this.filename}),void console.trace();try{this.dispose()}catch(n){console.error(n)}this.isDisposed=!0},e.setConfigValue=function(n,e){const t=this.getHook(),i=this.getHook().config;if(!(n in i))return void console.error(`Tried to set config of key ${n} to value ${e} but key was not found in the config of module id ${t.id}"`);const o=i[n];i[n]=e,t.saveConfig(),i.enabled&&"onSettingChange"in this&&"function"==typeof this.onSettingChange&&this.onSettingChange(n,o,e)},e.getHook=function(){if(!1 in window.r20es)return null;for(const n in window.r20es.hooks){const e=window.r20es.hooks[n];if(e.filename&&e.filename===this.filename)return e}return null},e.toggleEnabledState=function(n){const e=this.getHook(),t=void 0===n||null===n?!e.config.enabled:n;if(e.config.enabled&&t)return;const i=e.config.enabled;e.config.enabled=t,e.saveConfig(),i&&!t?(console.log("disabling"),this.internalDispose()):!i&&t&&(console.log("enabling"),this.internalInstallUpdate())},e.install=function(){if(!("r20esInstalledModuleTable"in window))return;if(!("r20esDisposeTable"in window))return;console.log(`Installing module filename: ${this.filename}`),!(this.filename in window.r20esInstalledModuleTable)?(console.log("First run"),this.internalInstallFirstTime()):(this.filename in window.r20esDisposeTable&&console.error(`DUPLICATE MODULE FOUND: ${this.filename}`),console.log("Calling install update"),this.internalInstallUpdate()),window.r20esDisposeTable[this.filename]=(()=>{this.dispose()}),window.r20esInstalledModuleTable[this.filename]=this,console.log(`DONE! module ID: ${this.filename}`)},n}(),a.SimpleBase=function(n){function e(){return n.apply(this,arguments)||this}r(e,n);var t=e.prototype;return t.installFirstTime=function(){this.setup()},t.installUpdate=function(){this.setup()},t.setup=function(){},e}(a.Base),a.OnAppLoadBase=function(n){function e(e){var t;return(t=n.call(this,e)||this).setup=t.setup.bind(o(o(t))),t}r(e,n);var t=e.prototype;return t.installFirstTime=function(){window.r20es.isLoading?(this.earlySetup(),window.r20es.onAppLoad.addEventListener(this.setup)):(this.earlySetup(),this.setup())},t.earlySetup=function(){},t.setup=function(){},t.installUpdate=function(){this.installFirstTime()},t.dispose=function(){window.r20es.onAppLoad.removeEventListener(this.setup)},e}(a.Base),a.canInstall=(n=>window.r20es&&"canInstallModules"in window.r20es&&window.r20es.canInstallModules),a.getModule=function(n){return"r20esInstalledModuleTable"in window?window.r20esInstalledModuleTable[n]:null},a.getModuleById=function(n){return"r20esInstalledModuleTable"in window?a.getModule(window.r20es.hooks[n].filename):null}},5:function(n,e,t){"use strict";e.__esModule=!0;var i,o=t(7);!function(n){var e;function t(){return window.d20.engine.unselect()}function i(n){window.d20.engine.select(n)}function r(){return window.currentPlayer}function a(){return window.currentEditingLayer}function s(){try{var n=window.d20.Campaign.attributes.jukeboxfolder;return JSON.parse(n||"[]")}catch(n){console.error("[getJukeboxFileStructure] failed to get fs due to exception",n)}return[]}function u(n){return window.Jukebox.playlist.get(n)}function l(){return window.d20.Campaign.activePage()}function d(){return window.d20.engine.canvas.getObjects()}function c(e){for(var t=0,i=d();t<i.length;t++){var o=i[t],r=n.try_get_canvas_object_model(o);if(r&&r.get("id")===e)return o}return null}function f(n,e,t){t?($(document).on("mancerroll:"+e,function(n,i){$(document).off("mancerroll:"+e),t(n,i)}),window.d20.textchat.doChatInput(n,"chatbox",e)):window.d20.textchat.doChatInput(n)}function g(n){window.d20.textchat.incoming(!1,{who:"system",type:"system",content:n})}function p(){window.d20.engine.redrawScreenNextTick(!1)}!function(n){n[n.NumericAscending=0]="NumericAscending",n[n.NumericDescending=1]="NumericDescending",n[n.Alphabetical=2]="Alphabetical",n[n.AlphabeticalDescending=3]="AlphabeticalDescending",n[n.Card=4]="Card"}(e=n.InitiativeOrdering||(n.InitiativeOrdering={})),function(n){n.Map="map",n.PlayerTokens="objects",n.GMTokens="gmlayer",n.Lighting="walls",n.B20Foreground="foreground",n.B20Weather="weather",n.B20Background="background"}(n.CanvasLayer||(n.CanvasLayer={})),n.setBackgroundStyle=function(n){window.d20.engine.backgroundColor=n},n.setupImageDropTarget=function(n,e,t){var i={model:{save:e},updateModel:t};window.d20.utils.setupAvatar(n,i)},n.getCanvasMousePos=function(){return window.d20.engine.mousePos.slice()},n.onInitiativeChange=function(e){return new o.EventSubscriber("change:turnorder",e,function(){return n.getInitiativeWindow().model})},n.setCanvasObjectLocation=function(e,t,i){var o=n.try_get_canvas_object_model(e);o&&o.save({top:i,left:t})},n.getBlob=function(n,e,t){return void 0===t&&(t=5e3),new Promise(function(i,o){n._getLatestBlob(e,i),setTimeout(o,t)})},n.getCampaign=function(){return window.Campaign},n.canEditCharacter=function(e){var t=e.attributes.controlledby;return!!n.isGM()||(!!t.includes("all")||!!t.includes(n.getCurrentPlayer().id))},n.getHandout=function(n){return window.Campaign.handouts.get(n)},n.createCharacter=function(n){return window.Campaign.characters.create(n)},n.setCanvasObjectDimensions=function(e,t,i){var o=n.try_get_canvas_object_model(e);o&&o.save({width:t,height:i})},n.getCharacter=function(n){return window.Campaign.characters.get(n)},n.getAllCharacters=function(){return window.Campaign.characters.models},n.getAllPages=function(){return window.Campaign.pages.models},n.createRollableTable=function(n){return window.d20.Campaign.rollabletables.create(n)},n.getRollableTable=function(n){return window.d20.Campaign.rollabletables.get(n)},n.getSelectedTokens=function(){return window.d20.engine.selected()},n.unselectTokens=t,n.addTokenToSelection=i,n.selectToken=function(n){t(),i(n)},n.hideTokenRadialMenu=function(){window.d20.token_editor.removeRadialMenu()},n.hideTokenContextMenu=function(){window.d20.token_editor.closeContextMenu()},n.getCurrentPlayer=r,n.getCanvasZoom=function(){return window.d20.engine.canvasZoom},n.getCanvasWidth=function(){return window.d20.engine.canvas.width},n.getCanvasHeight=function(){return window.d20.engine.canvas.height},n.getCanvasOffsetX=function(){return window.d20.engine.currentCanvasOffset[0]},n.getCanvasOffsetY=function(){return window.d20.engine.currentCanvasOffset[1]},n.getPageById=function(n){return window.Campaign.pages.get(n)},n.isGM=function(){return window.is_gm},n.getCurrentLayer=a,n.generateUUID=function(){return window.generateUUID()},n.getCurrentToolName=function(){return window.d20.engine.mode},n.advanceInitiative=function(){window.d20.Campaign.initiativewindow.nextTurn()},n.addTokenToInitiative=function(n){window.d20.Campaign.initiativewindow.addTokenToList(n)},n.addCustomItemToInitiative=function(n,e){window.d20.Campaign.initiativewindow.addTokenToList("-1",n,e)},n.rerenderMacroBar=function(){window.d20.player_settings.refreshMacroBar()},n.rerenderJournalMacros=function(){window.d20.player_settings.refreshRollsList()},n.orderInitiativeBy=function(n){var t,i=((t={})[e.NumericAscending]=".sortlist_numeric",t[e.NumericDescending]=".sortlist_numericdesc",t[e.Alphabetical]=".sortlist_alpha",t[e.AlphabeticalDescending]=".sortlist_alphadesc",t[e.Card]=".sortlist_card",t);if(n in i){var o=i[n];$("#initiativewindow_settings").dialog({modal:!1,title:"Turn Order Settings",beforeClose:function(){}}),$(o).click()}else console.error("Invalid initiative ordering: "+n)},n.getInitiativeWindow=function(){return window.d20.Campaign.initiativewindow},n.getJukeboxFileStructure=s,n.setJukeboxFileStructure=function(e){n.getCampaign().save({jukeboxfolder:JSON.stringify(e)})},n.createPlaylist=function(n){return window.d20.jukebox.addFolderToFolderStructure(n)},n.addTrackToPlaylist=function(n,e){return window.d20.jukebox.addItemToFolderStructure(n,e)},n.getSongById=u,n.getJukeboxPlaylists=function(){for(var n=[],e=0,t=s();e<t.length;e++){var i=t[e];if("string"!=typeof i){for(var o=i,r={id:o.id,name:o.n,mode:o.s,songs:[]},a=0,l=o.i;a<l.length;a++){var d=l[a],c=u(d);c?r.songs.push(c):console.warn("Tried to get song id "+d+" but the query returned a falsy value. Skipping")}n.push(r)}}return n},n.playAudio=function(n,e){window.Jukebox.soundObjs[n]=window.soundManager.createSound({id:n,url:e})},n.createSong=function(n){return window.Jukebox.playlist.create(n)},n.makePlaylistStructure=function(n,e,t){return{id:window.generateUUID(),n:n,s:e,i:t||[]}},n.getInitiativeData=function(){return window.d20.Campaign.initiativewindow.cleanList()},n.setInitiativeData=function(n){window.d20.Campaign.initiativewindow.model.save({turnorder:JSON.stringify(n)})},n.getCurrentPage=l,n.getCurrentPageTokens=d,n.doesTokenContainMouse=function(n,e){return window.d20.engine.canvas.containsPoint(n,e)},n.getCurrentPageTokenByUUID=c,n.try_get_canvas_object_model=function(n){return n._model?n._model:n.model?n.model:null},n.isUsing5EOGLSheet=function(){try{return window.d20.journal.customSheets.workerScripts[0].includes("5th Edition OGL by Roll20")}catch(n){return!1}},n.moveCameraToTokenByUUID=function(n){if(n){var e=c(n);if(e){var t=$("#editor-wrapper")[0];t.scrollTop=Math.floor(e.top*window.d20.engine.canvasZoom)-Math.floor(window.d20.engine.canvasHeight/2)+125*window.d20.engine.canvasZoom,t.scrollLeft=Math.floor(e.left*window.d20.engine.canvasZoom)-Math.floor(window.d20.engine.canvasWidth/2)+125*window.d20.engine.canvasZoom}}},n.primitiveSay=function(n,e){window.d20.textchat.doChatInput(n,e)},n.say=f,n.sayToSelf=function(e,t){var i='/w "'+r().get("displayname")+'" '+e;t?f(i,n.generateUUID(),t):f(i)},n.saySystemRaw=g,n.saySystem=function(n){g('<span style="background: rgba(6,26,45,255);\n    color: whitesmoke;\n    border: none;\n    display: inline-block;\n    padding: 8px;\n    margin: -15px -5px -7px -45px;    \n    "\n>\n'+n+"\n</span>\n        ")},n.ping=function(n,e,t,i,o){t=t||r().id,window.d20.engine.pings[t]={left:n,top:e,radius:-5,player:t,pageid:i||l().id,currentLayer:o||a()},window.d20.engine.pinging={downx:n,downy:e},p()},n.getFabric=function(){return window.exports.fabric},n.renderAll=p,n.setGMLayerOpacity=function(n){window.d20.engine.gm_layer_opacity=n},n.hasBetteR20=function(){return void 0!==window.d20plus},n.wipeObjectStorage=function(n){for(var e=n.length,t=0;t<e;t++){var i=n.length-1;if(0>i)break;var o=n.models[i];if(!o||void 0===o)break;o.destroy()}n.length<0&&console.error("FAILED TO WIPE OBJECT STORAGE!")},n.doBulkRoll=function(e,t,i,o,r){n.unselectTokens();var a=function(e){if(n.selectToken(e),r){var i=r(e);i&&n.say(t,i.id,i.callback)}else n.say(t)},s=function(){if(n.hideTokenRadialMenu(),n.hideTokenContextMenu(),o)for(var t=0,i=e;t<i.length;t++){var r=i[t];n.addTokenToSelection(r)}};if(0===i){for(var u=0,l=e;u<l.length;u++){var d=l[u];a(d)}s()}else for(var c=i,f=function(n){setTimeout(function(){a(e[n]),n+1===e.length&&s()},c),c+=i},g=0;g<e.length;g++)f(g)}}(i||(i={})),e.R20=i},6:function(n,e,t){"use strict";e.__esModule=!0;var i=t(8);e.copy=function(n,e){var t=Object.assign({},n);return e&&(t=Object.assign(t,e)),t};var o=function(n){if("currentTransform"in n)return n.currentTransform;if("getTransform"in n)return n.getTransform();if(n.mozCurrentTransform){var e=n.mozCurrentTransform;return{a:e[0],b:e[1],c:e[2],d:e[3],e:e[4],f:e[5]}}};e.getTransform=o,e.nearly_format_file_url=function(n){var e="";try{var t=function(n,e){var t=n.indexOf(e);return t>0?n.substring(0,t):n},i=n.lastIndexOf("/");e=t(e=t(e=t(e=n.substring(i+1),"."),"?"),"#"),e=decodeURIComponent(e)}catch(t){e=n}return e};e.getRotation=function(n){var e=o(n),t=Math.atan2(e.b,e.a);return t<0&&(t+=2*Math.PI),t};e.findByIdAndRemove=function(n){var e=document.getElementById(n);e&&e.remove()};e.mapObj=function(n,e){return Object.keys(n).reduce(function(t,i){var o=e(n[i],i);return void 0!==o&&null!==o&&t.push(o),t},[])};e.safeCall=function(n){try{n()}catch(n){console.error(n)}};e.removeAllChildren=function(n){for(;n.firstChild;)n.removeChild(n.firstChild)};e.replaceAll=function(n,e,t){return n.replace(new RegExp(function(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(e),"g"),t)};e.safeParseJson=function(n){try{return JSON.parse(n)}catch(n){alert("File is not a valid JSON file.")}return null};e.readFile=function(n){return new Promise(function(e,t){if(n){var i=new FileReader;i.readAsText(n),i.onload=function(n){e(n.target.result)}}else t("No file given.")})};var r=function(){return chrome||browser};e.getBrowser=r;e.injectScript=function(n){console.log("Injecting "+n);var e=document.createElement("script");e.async=!1,e.src=r().extension.getURL(n),e.onload=function(){e.remove()},document.head.appendChild(e)};e.strIsNullOrEmpty=function(n){return null===n||void 0===n||n.length<=0||n.trim().length<=0};e.createCSSElement=function(n,e){var t=document.createElement("style");return t.innerHTML=n,t.id=e,t};e.getExtUrlFromPage=function(n,e){var t=void 0===e||null===e?1e3:e;return new Promise(function(e,o){try{var r=!1,a=function(){window.removeEventListener("message",u)},s=window.generateUUID(),u=function(n){n.origin===i.Config.appUrl&&n.data.r20esGivesResourceUrl&&n.data.r20esGivesResourceUrl.id===s&&(r=!0,a(),e(n.data.r20esGivesResourceUrl.url))};window.addEventListener("message",u);var l={resource:n,id:s};window.postMessage({r20esWantsResourceUrl:l},i.Config.appUrl),setTimeout(function(){try{r||(a(),o("Timed out after "+t+"ms"))}catch(n){o(n)}},t)}catch(n){o(n)}})}},7:function(n,e,t){"use strict";e.__esModule=!0;var i=function(){function n(n,e,t){this._isSubscribed=!1,this._name=n,this._callback=e,this._targetGetter=t}return n.subscribe=function(e,t,i){var o=new n(e,t,i);return o.subscribe(),o},n.prototype.subscribe=function(){if(!this._isSubscribed){var n=this._targetGetter();"on"in n?n.on(this._name,this._callback):n.addEventListener(this._name,this._callback),this._isSubscribed=!0}},n.prototype.unsubscribe=function(){if(this._isSubscribed){var n=this._targetGetter();"off"in n?n.off(this._name,this._callback):n.removeEventListener(this._name,this._callback),this._isSubscribed=!1}},n}();e.EventSubscriber=i},8:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Config=void 0;let i={};e.Config=i,i.appUrl="https://app.roll20.net",i.websiteFeatureUrlTemplate="https://justas-d.github.io/roll20-enhancement-suite/features#",i.website="https://justas-d.github.io/roll20-enhancement-suite/",i.discordInvite="https://discord.gg/pKxxvuM",i.contributeUrl="https://justas-d.github.io/roll20-enhancement-suite/contribute.html"},99:function(n,e,t){"use strict";(function(n){var i=this&&this.__extends||function(){var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])})(e,t)};return function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}}();e.__esModule=!0;var o=t(4),r=t(6),a=t(5),s=function(e){function t(){var t=e.call(this,n)||this;return t.sheetId="r20es-alternative-radial-menu-sheet",t.ui_on_mutate=function(n){for(var e=0,i=n;e<i.length;e++){i[e].addedNodes.forEach(function(n){if("radial-menu"===n.id){var e=a.R20.getSelectedTokens();if(1==e.length){var i=t.getHook().config,o=e[0],r=a.R20.getCanvasZoom()/2,s=Math.cos(o.angle*Math.PI/180),u=Math.abs(s*o.width);u=u<=1e-5?o.height:u,Math.abs(Math.floor(o.angle)%360)>=1e-5&&(u+=240*r),console.log(u,o.angle,o.width);for(var l=u*r,d=0,c=n.children;d<c.length;d++){var f=c[d];if(f.classList.contains("button-1")||f.classList.contains("button-2")||f.classList.contains("button-6")){var g=-l-30-5;i.superMinimal&&(g+=30),f.classList.contains("button-6")?f.style.transform="translateX("+g+"px) translateY(-105px)":f.style.transform="translateX("+g+"px) translateY(-14px)"}else if(f.classList.contains("button-3")||f.classList.contains("button-4")||f.classList.contains("button-5")){var p=l+30+5+10;f.style.transform="translateX("+p+"px) translateY(-75px)"}}}}})}},t.try_install_auto_width=function(){t.getHook().config.auto_width&&(t.mutation_observer=new MutationObserver(t.ui_on_mutate),t.mutation_observer.observe(document.getElementById("editor-wrapper"),{childList:!0,subtree:!0}))},t.try_uninstall_auto_width=function(){t.mutation_observer.disconnect()},t}return i(t,e),t.prototype.addStyle=function(){var n=this.getHook().config;console.log(n);var e="\n\n#radial-menu .button {\n    position: static;\n    height: auto;\n    width: 60px;\n    border-radius: 0px;\n    border: none;\n    \n}\n\n#radial-menu .button.open {\n    opacity: "+n.opacity+";\n}\n\n#radial-menu .button-1, \n#radial-menu .button-2,\n#radial-menu .button-6 {\n    transform: translateX(-65px) translateY(-14px);\n    z-index: 5;\n}\n\n#radial-menu .button-6 {\n    transform: translateX(-65px) translateY(-105px);\n}\n\n#radial-menu .button-3, \n#radial-menu .button-4,\n#radial-menu .button-5 {\n    transform: translateX(75px) translateY(-75px);\n}\n\n#radial-menu .button div.inner {\n    margin: 0px;\n    border-radius: 0px;\n}\n\n#radial-menu .markermenu.open {\n    border-radius: 0;\n    top: 47px;\n    padding-left: 0;\n    left: -80px;\n    width: 375px;\n    height: auto;\n}\n\n";n.superMinimal&&(e+="\n}\n#radial-menu .markermenu.open {\n    left: -55px;\n    width: 260px;\n}\n#radial-menu .button div.inner {\n    background: rgba(0,0,0,0);\n}\n#radial-menu .button {\n    width: 30px;\n}\n\n#radial-menu .button-1, \n#radial-menu .button-2 {\n    transform: translateX(-35px) translateY(-14px);\n}\n\n#radial-menu .button-6 {\n    transform: translateX(-35px) translateY(-105px);\n}\n\n#radial-menu .button div.inner.hasnumber span {\n    text-shadow: 0px 0px 3px rgba(0,0,0,1);\n    text-shadow: 1px 1px 0px rgba(0,0,0,1);\n}\n\n#radial-menu .markermenu .markercolor {\n    width: 20px;\n    height: 20px;\n}\n\n#radial-menu .markermenu .markercolor,\n#radial-menu .markermenu .markericon {\n    margin: 0;\n    border: 2px solid white;\n}\n\n#radial-menu .markermenu .markercolor.active,\n#radial-menu .markermenu .markericon.active {\n    border: 2px solid black;\n\n}\n\n");var t=r.createCSSElement(e,this.sheetId);document.body.appendChild(t)},t.prototype.removeStyle=function(){r.findByIdAndRemove(this.sheetId)},t.prototype.onSettingChange=function(n,e,t){this.removeStyle(),this.addStyle(),this.try_uninstall_auto_width(),this.try_install_auto_width()},t.prototype.setup=function(){this.try_install_auto_width(),this.addStyle()},t.prototype.dispose=function(){this.try_uninstall_auto_width(),this.removeStyle()},t}(o.R20Module.OnAppLoadBase);o.R20Module.canInstall()&&(new s).install()}).call(this,"src/modules/AlternativeRadialMenu")}});