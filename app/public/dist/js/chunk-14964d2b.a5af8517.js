(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14964d2b"],{"17bf":function(t,e,n){},"1fcb":function(t,e,n){"use strict";var a=n("17bf"),r=n.n(a);r.a},2268:function(t){t.exports=JSON.parse('{"category":1,"isNeedWrapper":true,"injectCommonProps":true,"label":"图片","properties":{"src":{"label":"图片","valueType":"String","ui":"upload","default":"https://img01.yzcdn.cn/vant/cat.jpeg"},"srcEn":{"label":"图片(en)","valueType":"String","ui":"upload","default":"https://img01.yzcdn.cn/vant/cat.jpeg"},"srcKm":{"label":"图片(km)","valueType":"String","ui":"upload","default":"https://img01.yzcdn.cn/vant/cat.jpeg"},"href":{"label":"跳转链接","valueType":"String","ui":"input"}}}')},"25cb":function(t,e,n){"use strict";var a=n("75cd"),r=n.n(a);r.a},3414:function(t,e,n){"use strict";var a=n("bbf0"),r=n.n(a);r.a},"3bfd":function(t,e,n){var a={"./bottom-btn/index.vue":"d39c","./button/index.vue":"abc8","./call-app/index.vue":"9333","./image/index.vue":"a4d34"};function r(t){var e=i(t);return n(e)}function i(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=i,t.exports=r,r.id="3bfd"},4489:function(t){t.exports=JSON.parse('{"category":1,"isNeedWrapper":true,"injectCommonProps":false,"label":"普通按钮","properties":{"text":{"label":"按钮文本","valueType":"String","ui":"input","default":"点击按钮","i18n":{"zh":"text","en":"textEn","km":"textKm"},"required":true},"clickType":{"label":"事件类型","valueType":"String","default":"100","ui":"select","enum":[{"label":"跳转链接","value":"100"},{"label":"自定义代码","value":"200"}]},"link":{"label":"跳转链接","valueType":"String","ui":"input"},"code":{"label":"自定义代码","valueType":"String","ui":"input-code"}}}')},"57c3":function(t){t.exports=JSON.parse('{"category":2,"label":"置底按钮","isNeedWrapper":true,"injectCommonProps":["width","color","backgrooundColor"],"properties":{"leftText":{"label":"按钮文本(左)","valueType":"String","ui":"input","default":"WOWNOW首页","i18n":{"zh":"leftText","en":"leftTextEn","km":"leftTextKm"}},"rightText":{"label":"按钮文本(右)","valueType":"String","ui":"input","default":"分享好友","i18n":{"zh":"rightText","en":"rightTextEn","km":"rightTextKm"}}}}')},"71f9":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"preview-container",attrs:{id:"widgets-list"}},[n("div",{staticClass:"inner-preview-container"},[t._l(t.list,(function(e,a){return n("div",{key:a,staticClass:"widget-wrapper",attrs:{name:a}},[n(e.name,t._b({tag:"component",attrs:{id:"widget-"+e.name+"-"+a}},"component",e.data,!1))],1)})),n("div",{attrs:{id:"widget-fixbottom__space"}})],2)])},r=[];n("99af"),n("4160"),n("d81d"),n("b0c0"),n("b64b"),n("159b");function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function o(t){if(Array.isArray(t))return i(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0");function c(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}n("fb6a"),n("25f0");function s(t,e){if(t){if("string"===typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return o(t)||c(t)||s(t)||u()}var p=n("5530"),d=n("3bfd"),f={};function g(){var t={};return Object.keys(f).forEach((function(e){var n=f[e],a=n.name;t[a]=n})),t}function b(t){return b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}d.keys().forEach((function(t){f[t]=d(t).default}));var m=function(){var t=window.ssrConfig;return t&&"string"===typeof t&&"{{ ssrConfig }}"!==t?JSON.parse(decodeURIComponent(t)):t&&"object"===b(t)?t:{}};document.domain="cooking.cn";var h=g(),v={components:Object(p["a"])({},h),computed:{language:function(){return this.$route.query?this.$route.query.language:"zh"},pageConfig:function(){var t=m();return t.pageConfig||null}},watch:{language:{immediate:!0,handler:function(t){window.$lang=t}}},data:function(){return{list:[]}},created:function(){console.log("this.pageConfig"),console.log(this.pageConfig),this.eventInit(),this.initPage()},mounted:function(){console.log("this.language"),console.log(this.language),this.setMarginBottomStyle()},methods:{initPage:function(){var t=this.pageConfig;if(!t)return console.error("page config is null");var e=t.components;this.list=[].concat(l(e),l(e))},_setDefaultData:function(t){var e=t.name,n=t.data,a=h[e],r=a.props,i=Object(p["a"])({},r);return t.data=n||{},Object.keys(i).forEach((function(e){var a=i[e];n&&n[e]?t.data[e]=n[e]:(a.default||"boolean"===typeof a.default)&&(t.data[e]=a.default)})),t},findLastOneNotFixed:function(){for(var t=document.querySelector(".inner-preview-container"),e=t.children,n=this.list.length-1,a=n,r=n;r>=0;r--){var i=this.list[r];if("cooking-bottom-btn"!==i.name){a=r;break}}return e[a]},setMarginBottomStyle:function(){var t=document.querySelector(".page-bottombtn__fixed"),e=document.querySelector("#widget-fixbottom__space");if(t){var n=t.getBoundingClientRect().height;e.style.height=n+"px"}else e.style.height="0px"},eventInit:function(){var t=this;window.addEventListener("message",(function(e){var n=e.data,a=n.type,r=n.data;r&&t[a]?r=JSON.parse(r):console.info("来自[".concat(a,"类型的消息无法解析]: ").concat(r)),t[a]&&t[a](r)}),!1)},addComponent:function(t){var e=this._setDefaultData(t);this.list.push(e)},renderComponent:function(t){var e=this,n=t.map((function(t){return e._setDefaultData(t)}));this.list=n,this.setMarginBottomStyle()},setGlobalStyle:function(t){console.log("setGlobalStyle"),console.log(t);var e=t.backgroundColor,n="background-color: ".concat(e);document.querySelector("#app").setAttribute("style",n),document.body.setAttribute("style",n)}}},y=v,x=(n("3414"),n("7f30"),n("2877")),w=Object(x["a"])(y,a,r,!1,null,"46d44336",null);e["default"]=w.exports},"75cd":function(t,e,n){},"7f30":function(t,e,n){"use strict";var a=n("c65e"),r=n.n(a);r.a},"8b02":function(t,e,n){},"9e0f":function(t,e,n){"use strict";var a=n("8b02"),r=n.n(a);r.a},a4d34:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("WidgetWrapper",t._b({},"WidgetWrapper",t.$attrs,!1),[n("div",{staticClass:"image-wrapper",style:t.computedStyle},[t.href?n("a",{attrs:{href:t.href,target:"__blank"}},[n("van-image",{staticClass:"image-wrapper__src",attrs:{src:t.src},scopedSlots:t._u([{key:"loading",fn:function(){return[n("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0}],null,!1,2352118052)})],1):n("van-image",{staticClass:"image-wrapper__src",attrs:{src:t.src},scopedSlots:t._u([{key:"loading",fn:function(){return[n("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0}])})],1)])},r=[],i=(n("b0c0"),n("5530")),o=n("ade3"),c=(n("ac1e"),n("543e")),s=(n("4056"),n("44bf")),u=n("c1c8"),l=n("275a"),p=n("fdbb"),d=n("2268"),f=Object(u["a"])(d),g={name:Object(u["b"])("image"),mixins:[Object(p["a"])()],components:Object(o["a"])({VanImage:s["a"],WidgetWrapper:l["a"]},c["a"].name,c["a"]),props:Object(i["a"])(Object(i["a"])({},f),{},{src:{label:"图片",type:String,ui:"upload",default:"https://img01.yzcdn.cn/vant/cat.jpeg"},srcEn:{label:"图片(en)",type:String,ui:"upload",default:"https://img01.yzcdn.cn/vant/cat.jpeg"},srcKm:{label:"图片(km)",type:String,ui:"upload",default:"https://img01.yzcdn.cn/vant/cat.jpeg"},href:{label:"跳转链接",type:String,ui:"input"}})},b=g,m=(n("1fcb"),n("2877")),h=Object(m["a"])(b,a,r,!1,null,"48a4602a",null);e["default"]=h.exports},abc8:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("WidgetWrapper",t._b({},"WidgetWrapper",t.$attrs,!1),[n("van-button",{staticClass:"cooking-btn",style:t.computedStyle,on:{click:t.handleClick}},[t._v(t._s(t.text))])],1)},r=[],i=n("5530"),o=n("275a"),c=n("c1c8"),s=n("fdbb"),u=n("4489"),l=Object(c["a"])(u),p={name:Object(c["b"])("button"),mixins:[Object(s["a"])()],components:{WidgetWrapper:o["a"]},props:Object(i["a"])({},l),methods:{handleClick:function(){console.log(this.clickType)}}},d=p,f=(n("9e0f"),n("2877")),g=Object(f["a"])(d,a,r,!1,null,"b231df6a",null);e["default"]=g.exports},bbf0:function(t,e,n){},c65e:function(t,e,n){},d39c:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("WidgetWrapper",t._b({staticClass:"page-bottombtn__fixed"},"WidgetWrapper",t.$attrs,!1),[n("div",{staticClass:"bottom-btn-wrapper"},[n("div",{staticClass:"bottom-btn__item left"},[t._v(t._s(t.leftText))]),n("div",{staticClass:"bottom-btn__item right"},[t._v(t._s(t.rightText))])]),n("CallAppTips",{model:{value:t.showTips,callback:function(e){t.showTips=e},expression:"showTips"}})],1)},r=[],i=(n("c975"),n("5530")),o=n("275a"),c=n("26c6"),s=n("c1c8"),u=n("57c3"),l=Object(s["a"])(u),p={name:Object(s["b"])("bottom-btn"),components:{WidgetWrapper:o["a"],CallAppTips:c["a"]},data:function(){return{showTips:!1}},props:Object(i["a"])(Object(i["a"])({},l),{},{leftTextEn:[String],leftTextKm:[String],rightTextEn:[String],rightTextKm:[String]}),computed:{isDingTalk:function(){return-1!==navigator.userAgent.toLowerCase().indexOf("dingtalk")},isQQ:function(){return-1!==navigator.userAgent.toLowerCase().indexOf("qq/")},isWechat:function(){return-1!==navigator.userAgent.toLowerCase().indexOf("micromessenger")},isIOS:function(){return-1!==navigator.userAgent.toLocaleLowerCase().indexOf("mac os x")},routePath:function(){return this.isIOS&&"".concat(this.iosUrl)||"".concat(this.androidUrl)}},methods:{handleClick:function(){var t=this;this.showTips=this.isQQ||this.isWechat||this.isDingTalk,this.showTips||this.$nextTick((function(){window.location.href=t.routePath,setTimeout((function(){t.gotoDownloadUrl()}),1e3)}))},gotoDownloadUrl:function(){var t=this;this.$nextTick((function(){window.location.href=t.downloadUrl}))}}},d=p,f=(n("25cb"),n("2877")),g=Object(f["a"])(d,a,r,!1,null,"a1343f60",null);e["default"]=g.exports},fdbb:function(t,e,n){"use strict";e["a"]=function(){return{computed:{computedStyle:function(){var t=this.$attrs,e=t.width,n=t.height,a=t.paddingTop,r=t.paddingBottom,i=t.paddingLeft,o=t.paddingRight,c=this.$attrs,s=c.marginLeft,u=c.marginRight,l=c.marginTop,p=c.marginBottom,d=this.$attrs,f=d.borderRadius,g=d.backgroundColor,b=d.color,m=d.borderColor;return{width:parseInt(e)?parseInt(e)+"%":"",height:parseInt(n)?parseInt(n)+"px":"",paddingTop:a+"px",paddingLeft:i+"px",paddingRight:o+"px",paddingBottom:r+"px",marginLeft:s+"px",marginRight:u+"px",marginTop:l+"px",marginBottom:p+"px",borderRadius:parseInt(f)?parseInt(f)+"px":"",backgroundColor:g||"",color:b||"",borderColor:m||""}}}}}}}]);