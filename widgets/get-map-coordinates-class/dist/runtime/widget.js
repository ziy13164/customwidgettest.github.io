System.register(["jimu-core","jimu-arcgis"],(function(e,t){var o={},i={};return{setters:[function(e){o.React=e.React,o.jsx=e.jsx},function(e){i.JimuMapViewComponent=e.JimuMapViewComponent}],execute:function(){e((()=>{var e={6826:e=>{"use strict";e.exports=i},8891:e=>{"use strict";e.exports=o}},t={};function s(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,s),a.exports}s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="";var a={};return s.p=window.jimuConfig.baseUrl,(()=>{"use strict";s.r(a),s.d(a,{__set_webpack_public_path__:()=>i,default:()=>o});var e=s(8891),t=s(6826);class o extends e.React.PureComponent{constructor(){super(...arguments),this.state={latitude:"",longitude:"",zoom:0,scale:0,mapViewReady:!1},this.activeViewChangeHandler=e=>{e&&(e.view.watch("extent",(t=>{this.setState({latitude:e.view.center.latitude.toFixed(3),longitude:e.view.center.longitude.toFixed(3),scale:Math.round(1*e.view.scale)/1,zoom:e.view.zoom,mapViewReady:!0})})),e.view.on("pointer-move",(t=>{const o=e.view.toMap({x:t.x,y:t.y});this.setState({latitude:o.latitude.toFixed(3),longitude:o.longitude.toFixed(3),scale:Math.round(1*e.view.scale)/1,zoom:e.view.zoom,mapViewReady:!0})})))}}render(){var o;let i=[];i.push((0,e.jsx)("span",null,"Lat/Lon"," ",this.state.latitude," ",this.state.longitude)),!0===this.props.config.showZoom&&i.push((0,e.jsx)("span",null,"Zoom ",this.state.zoom.toFixed(0))),!0===this.props.config.showScale&&i.push((0,e.jsx)("span",null,"Scale 1:",this.state.scale));const s=i.reduce(((e,t)=>null===e?[t]:[...e," | ",t]),null);return(0,e.jsx)("div",{className:"widget-get-map-coordinates jimu-widget m-2"},this.props.hasOwnProperty("useMapWidgetIds")&&this.props.useMapWidgetIds&&1===this.props.useMapWidgetIds.length&&(0,e.jsx)(t.JimuMapViewComponent,{useMapWidgetId:null===(o=this.props.useMapWidgetIds)||void 0===o?void 0:o[0],onActiveViewChange:this.activeViewChangeHandler}),(0,e.jsx)("p",null,!0===this.state.mapViewReady?s:"Lat/Lon (None - please mouse over map)"))}}function i(e){s.p=e}})(),a})())}}}));