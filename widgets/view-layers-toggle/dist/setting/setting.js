System.register(["jimu-core","jimu-ui/advanced/setting-components"],(function(e,t){var a={},i={};return{setters:[function(e){a.React=e.React},function(e){i.MapWidgetSelector=e.MapWidgetSelector,i.SettingRow=e.SettingRow,i.SettingSection=e.SettingSection}],execute:function(){e((()=>{var e={8891:e=>{"use strict";e.exports=a},7756:e=>{"use strict";e.exports=i}},t={};function r(a){var i=t[a];if(void 0!==i)return i.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,r),n.exports}r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="";var n={};return r.p=window.jimuConfig.baseUrl,(()=>{"use strict";r.r(n),r.d(n,{__set_webpack_public_path__:()=>i,default:()=>a});var e=r(8891),t=r(7756);class a extends e.React.PureComponent{constructor(e){var t,a,i;super(e),this.onMapSelected=e=>{this.props.onSettingChange({id:this.props.id,useMapWidgetIds:e})},this.onTextChange=e=>{this.setState({layerTextareaValue:e.target.value}),this.props.onSettingChange({id:this.props.id,config:this.props.config.set("layerUrls",e.target.value.split("\n"))})},console.log("TYPEOF undefined",void 0===typeof(null===(t=this.props.config)||void 0===t?void 0:t.layerUrls)),this.state={layerTextareaValue:void 0===(null===(a=this.props.config)||void 0===a?void 0:a.layerUrls)?"":null===(i=this.props.config)||void 0===i?void 0:i.layerUrls.join("\n")}}render(){return e.React.createElement("div",{className:"view-layers-toggle-setting"},e.React.createElement(t.SettingSection,{title:this.props.intl.formatMessage({id:"selectedMapLabel",defaultMessage:"Map"})},e.React.createElement(t.SettingRow,null,e.React.createElement(t.MapWidgetSelector,{onSelect:this.onMapSelected,useMapWidgetIds:this.props.useMapWidgetIds}))),e.React.createElement(t.SettingSection,{title:this.props.intl.formatMessage({id:"layers",defaultMessage:"Layers"})},e.React.createElement(t.SettingRow,null,e.React.createElement("textarea",{className:"w-100 p-1",style:{whiteSpace:"nowrap",minHeight:"100px"},value:this.state.layerTextareaValue,onChange:this.onTextChange}))))}}function i(e){r.p=e}})(),n})())}}}));