System.register(["jimu-core","jimu-arcgis","esri/widgets/Legend","esri/widgets/Legend/LegendViewModel"],(function(e,t){var a={},s={},n={},r={};return{setters:[function(e){a.FormattedMessage=e.FormattedMessage,a.React=e.React},function(e){s.JimuMapViewComponent=e.JimuMapViewComponent},function(e){n.default=e.default},function(e){r.default=e.default}],execute:function(){e((()=>{var e={9600:e=>{"use strict";e.exports=n},5602:e=>{"use strict";e.exports=r},6826:e=>{"use strict";e.exports=s},8891:e=>{"use strict";e.exports=a}},t={};function i(a){var s=t[a];if(void 0!==s)return s.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,i),n.exports}i.d=(e,t)=>{for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="";var l={};return i.p=window.jimuConfig.baseUrl,(()=>{"use strict";i.r(l),i.d(l,{__set_webpack_public_path__:()=>u,default:()=>d});var e=i(8891),t=i(6826),a=i(9600),s=i(5602);const n={pleaseSelectAMap:"Please select a map.",widgetDemonstrates:"This widget demonstrates how to use a widget (Legend) from the ArcGIS API for JavaScript.",thisUsesViewModel:"This uses the ViewModel.",layerTitle:"Layer title",thisShowsLegendWidget:"This shows the Legend widget."},{useState:r,useRef:o,useEffect:c}=e.React;function d({useMapWidgetIds:i}){const l=o(),[d,u]=r(null),[m,g]=r(null),[p,f]=r(null);c((()=>{if(m&&l.current){if(!p){const e=document.createElement("div");l.current.appendChild(e);const t=new a.default({view:m.view,container:e});f(t)}const e=new s.default({view:m.view});u(e.activeLayerInfos.getItemAt(0))}return()=>{p&&(p.destroy(),f(null))}}),[l,m]);const w=i&&1===i.length;return e.React.createElement("div",{className:"widget-use-map-view",style:{width:"100%",height:"100%",overflow:"hidden"}},!w&&e.React.createElement("h3",null,e.React.createElement(e.FormattedMessage,{id:"pleaseSelectMap",defaultMessage:n.pleaseSelectAMap})),e.React.createElement("h3",null,e.React.createElement(e.FormattedMessage,{id:"widgetDemonstrates",defaultMessage:n.widgetDemonstrates})),e.React.createElement(t.JimuMapViewComponent,{useMapWidgetId:null==i?void 0:i[0],onActiveViewChange:e=>{m&&p&&(p.destroy(),f(null)),e&&g(e)}}),e.React.createElement("hr",null),e.React.createElement("h4",null,e.React.createElement(e.FormattedMessage,{id:"thisUsesViewModel",defaultMessage:n.thisUsesViewModel})),e.React.createElement("div",null,e.React.createElement(e.FormattedMessage,{id:"layerTitle",defaultMessage:n.layerTitle}),": ",d&&d.title),e.React.createElement("hr",null),e.React.createElement("h4",null,e.React.createElement(e.FormattedMessage,{id:"thisShowsLegendWidget",defaultMessage:n.thisShowsLegendWidget})),e.React.createElement("div",{ref:l}))}function u(e){i.p=e}})(),l})())}}}));