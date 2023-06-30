System.register(["jimu-core","esri/views/MapView","esri/geometry/Extent","jimu-arcgis"],(function(e,t){var r={},a={},i={},s={};return{setters:[function(e){r.DataSourceComponent=e.DataSourceComponent,r.React=e.React,r.jimuHistory=e.jimuHistory},function(e){a.default=e.default},function(e){i.default=e.default},function(e){s.MapViewManager=e.MapViewManager}],execute:function(){e((()=>{var e={5606:e=>{"use strict";e.exports=i},4463:e=>{"use strict";e.exports=a},6826:e=>{"use strict";e.exports=s},8891:e=>{"use strict";e.exports=r}},t={};function o(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="";var n={};return o.p=window.jimuConfig.baseUrl,(()=>{"use strict";o.r(n),o.d(n,{__set_webpack_public_path__:()=>s,default:()=>i});var e=o(8891),t=o(4463),r=o(5606),a=o(6826);class i extends e.React.PureComponent{constructor(){super(...arguments),this.mapContainer=e.React.createRef(),this.mvManager=a.MapViewManager.getInstance(),this.onDsCreated=a=>{var i;if(a&&!this.mvManager.getJimuMapViewById(this.props.id)){const s={map:a.map,container:this.mapContainer.current};if(null===(i=this.props.queryObject)||void 0===i?void 0:i[this.props.id]){const e=this.props.queryObject[this.props.id].substr("extent=".length);let t;try{t=new r.default(JSON.parse(e))}catch(e){console.error("Bad extent URL parameter.")}t&&(s.extent=t)}this.mvManager.createJimuMapView({mapWidgetId:this.props.id,view:new t.default(s),dataSourceId:a.id,isActive:!0}).then((t=>{this.extentWatch||(this.extentWatch=t.view.watch("extent",(t=>{e.jimuHistory.changeQueryObject({[this.props.id]:`extent=${JSON.stringify(t.toJSON())}`})})))}))}},this.mapNode=e.React.createElement("div",{className:"widget-map",style:{width:"100%",height:"100%"},ref:this.mapContainer})}render(){return this.props.useDataSources&&0!==this.props.useDataSources.length?e.React.createElement(e.DataSourceComponent,{useDataSource:this.props.useDataSources[0],onDataSourceCreated:this.onDsCreated},this.mapNode):"Select a webmap in the settings panel"}}function s(e){o.p=e}i.mapExtraStateProps=e=>({queryObject:e.queryObject})})(),n})())}}}));