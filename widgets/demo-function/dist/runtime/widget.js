System.register(["jimu-core"],(function(e,t){var r={};return{setters:[function(e){r.FormattedMessage=e.FormattedMessage,r.React=e.React}],execute:function(){e((()=>{var e={8891:e=>{"use strict";e.exports=r}},t={};function o(r){var a=t[r];if(void 0!==a)return a.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,o),n.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="";var a={};return o.p=window.jimuConfig.baseUrl,(()=>{"use strict";o.r(a),o.d(a,{default:()=>r});var e=o(8891);const t={_widgetLabel:"Demo (Function)",str1:"String 1"};function r(r){return e.React.createElement("div",{className:"widget-demo-function jimu-widget",style:{overflow:"auto"}},"This widget demonstrates creating a functional component.",e.React.createElement("div",null,"config: ",JSON.stringify(r.config)),e.React.createElement("div",null,"locale: ",r.locale),e.React.createElement("div",null,"i18n: ",e.React.createElement(e.FormattedMessage,{id:"str1",defaultMessage:t.str1})))}r.mapExtraStateProps=(e,t)=>({locale:e.appContext.locale})})(),a})())}}}));