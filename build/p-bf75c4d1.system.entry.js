System.register(["./p-8b1c7479.system.js"],(function(t){"use strict";var n,e;return{setters:[function(t){n=t.r;e=t.h}],execute:function(){var o=function(){function t(t){n(this,t);this.content=""}t.prototype.componentWillLoad=function(){if(this.documentLocation!=null){return this.fetchNewContent(this.documentLocation)}};t.prototype.fetchNewContent=function(t){var n=this;return fetch(t).then((function(t){return t.text()})).then((function(t){n.content=t}))};t.prototype.render=function(){return e("div",{innerHTML:this.content})};Object.defineProperty(t,"watchers",{get:function(){return{documentLocation:["fetchNewContent"]}},enumerable:false,configurable:true});return t}();t("stencil_async_content",o)}}}));