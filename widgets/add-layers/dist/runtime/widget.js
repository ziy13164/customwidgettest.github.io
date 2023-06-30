System.register(["jimu-core","jimu-arcgis"],(function(e,t){var r={},i={};return{setters:[function(e){r.React=e.React,r.css=e.css,r.jsx=e.jsx},function(e){i.JimuMapViewComponent=e.JimuMapViewComponent,i.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules}],execute:function(){e((()=>{var e={6826:e=>{"use strict";e.exports=i},8891:e=>{"use strict";e.exports=r}},t={};function a(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,a),s.exports}a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="";var s={};return a.p=window.jimuConfig.baseUrl,(()=>{"use strict";a.r(s),a.d(s,{__set_webpack_public_path__:()=>i,default:()=>r});var e=a(8891),t=a(6826);class r extends e.React.PureComponent{constructor(){super(...arguments),this.state={featureServiceUrlInput:"",jimuMapView:null},this.handleFeatureServiceUrlInputChange=e=>{this.setState({featureServiceUrlInput:e.target.value})},this.formSubmit=e=>{e.preventDefault(),this.state.jimuMapView?""!=this.state.featureServiceUrlInput?(0,t.loadArcGISJSAPIModules)(["esri/layers/FeatureLayer","esri/geometry/SpatialReference"]).then((e=>{[this.FeatureLayer,this.SpatialReference]=e;const t=new this.FeatureLayer({url:this.state.featureServiceUrlInput});this.state.jimuMapView.view.map.add(t),t.on("layerview-create",(e=>{if(this.props.config.hasOwnProperty("zoomToLayer")&&!0===this.props.config.zoomToLayer){const e=t.createQuery();e.where="1=1",e.outSpatialReference=new this.SpatialReference({wkid:102100}),t.queryExtent(e).then((e=>{this.state.jimuMapView.view.extent=e.extent}))}this.setState({featureServiceUrlInput:""})}))})):alert("Please copy/paste in a FeatureService URL"):console.error("Please configure a Data Source with the widget.")}}render(){var r;const i=e.css`
      form > div {
        display: flex;
        justify-content: space-between;
        input {
          width: 100%;
        }
        button {
          min-width: 100px;
        }
      }
    `;return(0,e.jsx)("div",{className:"widget-addLayers jimu-widget p-2",css:i},this.props.hasOwnProperty("useMapWidgetIds")&&this.props.useMapWidgetIds&&1===this.props.useMapWidgetIds.length&&(0,e.jsx)(t.JimuMapViewComponent,{useMapWidgetId:null===(r=this.props.useMapWidgetIds)||void 0===r?void 0:r[0],onActiveViewChange:e=>{this.setState({jimuMapView:e})}}),(0,e.jsx)("p",null,"Copy/paste a FeatureService Layer URL here to add it to the map."),(0,e.jsx)("form",{onSubmit:this.formSubmit},(0,e.jsx)("div",null,(0,e.jsx)("input",{type:"text",placeholder:"Feature Service URL",value:this.state.featureServiceUrlInput,onChange:this.handleFeatureServiceUrlInputChange}),(0,e.jsx)("button",null,"Add Layer"))))}}function i(e){a.p=e}})(),s})())}}}));