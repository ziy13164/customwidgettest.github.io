System.register(["jimu-core","jimu-core/react","jimu-arcgis"],(function(e,t){var o={},n={},i={};return{setters:[function(e){o.jsx=e.jsx},function(e){n.useState=e.useState},function(e){i.JimuMapViewComponent=e.JimuMapViewComponent}],execute:function(){e((()=>{var e={6826:e=>{"use strict";e.exports=i},8891:e=>{"use strict";e.exports=o},1315:e=>{"use strict";e.exports=n}},t={};function s(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,s),i.exports}s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="";var r={};return s.p=window.jimuConfig.baseUrl,(()=>{"use strict";s.r(r),s.d(r,{default:()=>i});var e=s(8891),t=s(1315),o=s(6826);const n={_widgetLabel:"Get Map Coordinates (Function)",latLon:"Lat/Lon",zoom:"Zoom",latLonWillBeHere:"Lat/Lon (None - please mouse over map)"};function i(i){var s;const[r,a]=(0,t.useState)(""),[u,l]=(0,t.useState)(""),[d,p]=(0,t.useState)(0),[c,m]=(0,t.useState)(0),[v,x]=(0,t.useState)(!1);let g=[];g.push((0,e.jsx)("span",null,n.latLon," ",r," ",u)),!0===i.config.showZoom&&g.push((0,e.jsx)("span",null,"Zoom ",d.toFixed(0))),!0===i.config.showScale&&g.push((0,e.jsx)("span",null,"Scale 1:",c));const w=g.reduce(((e,t)=>null===e?[t]:[...e," | ",t]),null);return(0,e.jsx)("div",{className:"widget-get-map-coordinates jimu-widget m-2"},i.hasOwnProperty("useMapWidgetIds")&&i.useMapWidgetIds&&1===i.useMapWidgetIds.length&&(0,e.jsx)(o.JimuMapViewComponent,{useMapWidgetId:null===(s=i.useMapWidgetIds)||void 0===s?void 0:s[0],onActiveViewChange:e=>{e&&(e.view.watch("extent",(t=>{a(e.view.center.latitude.toFixed(3)),l(e.view.center.longitude.toFixed(3)),m(Math.round(1*e.view.scale)/1),p(e.view.zoom),x(!0)})),e.view.on("pointer-move",(t=>{const o=e.view.toMap({x:t.x,y:t.y});a(o.latitude.toFixed(3)),l(o.longitude.toFixed(3)),m(Math.round(1*e.view.scale)/1),p(e.view.zoom),x(!0)})))}}),(0,e.jsx)("p",null,!0===v?w:n.latLonWillBeHere))}})(),r})())}}}));