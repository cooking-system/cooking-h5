(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-945c2790"],{"0e1c":function(t,e,n){"use strict";var r=n("e28e"),a=n.n(r);a.a},3414:function(t,e,n){"use strict";var r=n("bbf0"),a=n.n(r);a.a},"3bfd":function(t,e,n){var r={"./bottom-btn/index.vue":"d39c","./button/index.vue":"abc8","./call-app/index.vue":"9333","./image/index.vue":"a4d34"};function a(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=i,t.exports=a,a.id="3bfd"},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");var r=n("ade3");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"5cb7":function(t,e,n){},"71f9":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"preview-container",attrs:{id:"widgets-list"}},[n("div",{staticClass:"inner-preview-container"},t._l(t.list,(function(e,r){return n("div",{key:r,staticClass:"widget-wrapper",attrs:{name:r}},[n(e.name,t._b({tag:"component",attrs:{id:"widget-"+e.name+"-"+r}},"component",e.data,!1))],1)})),0)])},a=[],i=(n("4160"),n("d81d"),n("b0c0"),n("b64b"),n("159b"),n("5530")),o=(n("d3b7"),n("ddb0"),n("3bfd")),s={};function c(){var t={};return Object.keys(s).forEach((function(e){var n=s[e],r=n.name;t[r]=n})),t}o.keys().forEach((function(t){s[t]=o(t).default}));var u={components:Object(i["a"])({},c()),computed:{language:function(){return this.$route.query?this.$route.query.language:"zh"}},watch:{language:{immediate:!0,handler:function(t){window.$lang=t}}},data:function(){return{list:[]}},created:function(){this.eventInit()},mounted:function(){this.setMarginBottomStyle()},methods:{_setDefaultData:function(t){var e=t.properties,n=t.data;if(e)return t.data=n||{},Object.keys(e).forEach((function(r){var a=e[r];n&&n[r]?t.data[r]=n[r]:(a.default||"boolean"===typeof a.default)&&(t.data[r]=a.default)})),t},findLastOneNotFixed:function(){for(var t=document.querySelector(".inner-preview-container"),e=t.children,n=this.list.length-1,r=n,a=n;a>=0;a--){var i=this.list[a];if("cooking-bottom-btn"!==i.name){r=a;break}}return e[r]},setMarginBottomStyle:function(){var t=document.querySelector(".page-bottombtn__fixed");if(t){var e=t.getBoundingClientRect().height,n=this.findLastOneNotFixed();n&&(n.style.marginBottom=e+"px")}},eventInit:function(){var t=this;window.addEventListener("message",(function(e){var n=e.data,r=n.type,a=n.data;a&&t[r]&&(a=JSON.parse(a)),t[r]&&t[r](a)}),!1)},addComponent:function(t){var e=this._setDefaultData(t);this.list.push(e)},renderComponent:function(t){var e=this,n=t.map((function(t){return e._setDefaultData(t)}));this.list=n,this.setMarginBottomStyle()},setGlobalStyle:function(t){var e=t.backgroundColor,n="background-color: ".concat(e);document.querySelector("#app").setAttribute("style",n),document.body.setAttribute("style",n)}}},d=u,l=(n("3414"),n("0e1c"),n("2877")),f=Object(l["a"])(d,r,a,!1,null,"d1b97c9c",null);e["default"]=f.exports},"8b24":function(t,e,n){"use strict";var r=n("b6ac"),a=n.n(r);a.a},9065:function(t,e,n){},9547:function(t,e,n){"use strict";var r=n("9065"),a=n.n(r);a.a},a4d34:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("WidgetWrapper",t._b({},"WidgetWrapper",t.$attrs,!1),[n("div",{staticClass:"image-wrapper",style:t.computedStyle},[t.href?n("a",{attrs:{href:t.href,target:"__blank"}},[n("van-image",{staticClass:"image-wrapper__src",attrs:{src:t.src},scopedSlots:t._u([{key:"loading",fn:function(){return[n("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0}],null,!1,2352118052)})],1):n("van-image",{staticClass:"image-wrapper__src",attrs:{src:t.src},scopedSlots:t._u([{key:"loading",fn:function(){return[n("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0}])})],1)])},a=[],i=(n("b0c0"),n("ade3")),o=(n("ac1e"),n("543e")),s=(n("4056"),n("44bf")),c=n("ed08"),u=n("275a"),d=n("fdbb"),l={name:Object(c["a"])("image"),mixins:[Object(d["a"])()],components:Object(i["a"])({VanImage:s["a"],WidgetWrapper:u["a"]},o["a"].name,o["a"]),props:{src:{type:String},href:{type:String}}},f=l,p=(n("8b24"),n("2877")),b=Object(p["a"])(f,r,a,!1,null,"310c84f0",null);e["default"]=b.exports},ab7f:function(t,e,n){"use strict";var r=n("5cb7"),a=n.n(r);a.a},abc8:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("WidgetWrapper",t._b({},"WidgetWrapper",t.$attrs,!1),[n("van-button",{staticClass:"cooking-btn",style:t.computedStyle,on:{click:t.handleClick}},[t._v(t._s(t.text))])],1)},a=[],i=n("275a"),o=n("ed08"),s=n("fdbb"),c={name:Object(o["a"])("button"),mixins:[Object(s["a"])()],components:{WidgetWrapper:i["a"]},props:{text:{type:String,default:"点击按钮",required:!0},clickType:{type:String,default:"100",enum:[{label:"跳转链接",value:"100"},{label:"自定义代码",value:"200"}]}},methods:{handleClick:function(){}}},u=c,d=(n("ab7f"),n("2877")),l=Object(d["a"])(u,r,a,!1,null,"52198e0e",null);e["default"]=l.exports},ade3:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},b6ac:function(t,e,n){},bbf0:function(t,e,n){},d39c:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("WidgetWrapper",t._b({staticClass:"page-bottombtn__fixed"},"WidgetWrapper",t.$attrs,!1),[n("div",{staticClass:"bottom-btn-wrapper"},[n("div",{staticClass:"bottom-btn__item left"},[t._v(t._s(t.leftText))]),n("div",{staticClass:"bottom-btn__item right"},[t._v(t._s(t.rightText))])]),n("CallAppTips",{model:{value:t.showTips,callback:function(e){t.showTips=e},expression:"showTips"}})],1)},a=[],i=(n("c975"),n("275a")),o=n("26c6"),s=n("ed08"),c={name:Object(s["a"])("bottom-btn"),components:{WidgetWrapper:i["a"],CallAppTips:o["a"]},data:function(){return{showTips:!1}},props:{leftText:{type:String,default:"WOWNOW首页"},leftTextEn:[String],leftTextKm:[String],rightText:{type:String,default:"分享好友"},rightTextEn:[String],rightTextKm:[String]},computed:{isDingTalk:function(){return-1!==navigator.userAgent.toLowerCase().indexOf("dingtalk")},isQQ:function(){return-1!==navigator.userAgent.toLowerCase().indexOf("qq/")},isWechat:function(){return-1!==navigator.userAgent.toLowerCase().indexOf("micromessenger")},isIOS:function(){return-1!==navigator.userAgent.toLocaleLowerCase().indexOf("mac os x")},routePath:function(){return this.isIOS&&"".concat(this.iosUrl)||"".concat(this.androidUrl)}},methods:{handleClick:function(){var t=this;this.showTips=this.isQQ||this.isWechat||this.isDingTalk,this.showTips||this.$nextTick((function(){window.location.href=t.routePath,setTimeout((function(){t.gotoDownloadUrl()}),1e3)}))},gotoDownloadUrl:function(){var t=this;this.$nextTick((function(){window.location.href=t.downloadUrl}))}}},u=c,d=(n("9547"),n("2877")),l=Object(d["a"])(u,r,a,!1,null,"ff814260",null);e["default"]=l.exports},e28e:function(t,e,n){},fdbb:function(t,e,n){"use strict";e["a"]=function(){return{computed:{computedStyle:function(){var t=this.$attrs,e=t.width,n=t.height,r=t.paddingTop,a=t.paddingBottom,i=t.paddingLeft,o=t.paddingRight,s=this.$attrs,c=s.marginLeft,u=s.marginRight,d=s.marginTop,l=s.marginBottom,f=this.$attrs,p=f.borderRadius,b=f.backgroundColor,g=f.color,m=f.borderColor;return{width:parseInt(e)?parseInt(e)+"%":"",height:parseInt(n)?parseInt(n)+"px":"",paddingTop:r+"px",paddingLeft:i+"px",paddingRight:o+"px",paddingBottom:a+"px",marginLeft:c+"px",marginRight:u+"px",marginTop:d+"px",marginBottom:l+"px",borderRadius:parseInt(p)?parseInt(p)+"px":"",backgroundColor:b||"",color:g||"",borderColor:m||""}}}}}}}]);