System.register(["jimu-core","jimu-ui/advanced/setting-components"],(function(e,t){var r={},a={};return{setters:[function(e){r.React=e.React},function(e){a.MapWidgetSelector=e.MapWidgetSelector,a.SettingRow=e.SettingRow,a.SettingSection=e.SettingSection}],execute:function(){e((()=>{var e={8891:e=>{"use strict";e.exports=r},7756:e=>{"use strict";e.exports=a}},t={};function i(r){var a=t[r];if(void 0!==a)return a.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,i),n.exports}i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="";var n={};return i.p=window.jimuConfig.baseUrl,(()=>{"use strict";i.r(n),i.d(n,{default:()=>r});var e=i(8891),t=i(7756);class r extends e.React.PureComponent{constructor(e){var t,r,a;super(e),this.onMapSelected=e=>{this.props.onSettingChange({id:this.props.id,useMapWidgetIds:e})},this.onTextChange=e=>{this.setState({layerTextareaValue:e.target.value}),this.props.onSettingChange({id:this.props.id,config:this.props.config.set("layerUrls",e.target.value.split("\n"))})},console.log("TYPEOF undefined",void 0===typeof(null===(t=this.props.config)||void 0===t?void 0:t.layerUrls)),this.state={layerTextareaValue:void 0===(null===(r=this.props.config)||void 0===r?void 0:r.layerUrls)?"":null===(a=this.props.config)||void 0===a?void 0:a.layerUrls.join("\n")}}render(){return e.React.createElement("div",{className:"view-layers-toggle-setting"},e.React.createElement(t.SettingSection,{title:this.props.intl.formatMessage({id:"selectedMapLabel",defaultMessage:"Map"})},e.React.createElement(t.SettingRow,null,e.React.createElement(t.MapWidgetSelector,{onSelect:this.onMapSelected,useMapWidgetIds:this.props.useMapWidgetIds}))),e.React.createElement(t.SettingSection,{title:this.props.intl.formatMessage({id:"layers",defaultMessage:"Layers"})},e.React.createElement(t.SettingRow,null,e.React.createElement("textarea",{className:"w-100 p-1",style:{whiteSpace:"nowrap",minHeight:"100px"},value:this.state.layerTextareaValue,onChange:this.onTextChange}))))}}})(),n})())}}}));