System.register(["jimu-core","jimu-ui"],(function(t,e){var a={},r={};return{setters:[function(t){a.DataSourceComponent=t.DataSourceComponent,a.DataSourceManager=t.DataSourceManager,a.DataSourceStatus=t.DataSourceStatus,a.React=t.React,a.dataSourceUtils=t.dataSourceUtils},function(t){r.Button=t.Button}],execute:function(){t((()=>{var t={8891:t=>{"use strict";t.exports=a},726:t=>{"use strict";t.exports=r}},e={};function u(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,u),o.exports}u.d=(t,e)=>{for(var a in e)u.o(e,a)&&!u.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},u.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),u.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.p="";var o={};return u.p=window.jimuConfig.baseUrl,(()=>{"use strict";u.r(o),u.d(o,{__set_webpack_public_path__:()=>r,default:()=>a});var t=u(8891),e=u(726);class a extends t.React.PureComponent{constructor(){super(...arguments),this.isDsConfigured=()=>!(!this.props.useDataSources||1!==this.props.useDataSources.length),this.onDataSourceCreated=()=>{this.updateOutputDsQueryParams()},this.onCreateDataSourceFailed=()=>{this.updateOutputDsQueryParams()},this.getOriginDataSource=()=>{var e,a;return t.DataSourceManager.getInstance().getDataSource(null===(a=null===(e=this.props.useDataSources)||void 0===e?void 0:e[0])||void 0===a?void 0:a.dataSourceId)},this.getOutputDataSource=()=>{var e;return t.DataSourceManager.getInstance().getDataSource(null===(e=this.props.outputDataSources)||void 0===e?void 0:e[0])},this.updateOutputDsQueryParams=()=>{if(!this.getOutputDataSource())return;if(!this.getOriginDataSource())return this.getOutputDataSource().setStatus(t.DataSourceStatus.NotReady),void this.getOutputDataSource().setCountStatus(t.DataSourceStatus.NotReady);const e=this.getOriginDataSource(),a=this.getOutputDataSource(),r={where:t.dataSourceUtils.getArcGISSQL(this.props.config.sqlExpression,this.getOriginDataSource()).sql||"1=1"},u=a.mergeQueryParams(e.getCurrentQueryParams(),r);a.updateQueryParams(u,this.props.id),a.setStatus(t.DataSourceStatus.Unloaded),a.setCountStatus(t.DataSourceStatus.Unloaded)}}render(){return this.isDsConfigured()?t.React.createElement("div",{className:"widget-attribute-query-result-as-output",style:{width:"100%",height:"100%",maxHeight:"800px",overflow:"auto"}},t.React.createElement("h3",null,"The server-side output data source is generated."),t.React.createElement("h5",null,"If you want to use the server-side output data source, you should add another widget (such as List) and configure the output data source for it."),t.React.createElement("h5",null,"If the widget's origin data source is changed (e.g. add a filter), the output data source won't update automatically. Please click the following button."),t.React.createElement(e.Button,{onClick:this.updateOutputDsQueryParams},"Update output data source"),t.React.createElement(t.DataSourceComponent,{useDataSource:this.props.useDataSources[0],widgetId:this.props.id,onDataSourceCreated:this.onDataSourceCreated,onCreateDataSourceFailed:this.onCreateDataSourceFailed})):t.React.createElement("h3",null,"This widget demonstrates how to use attribute query results to generate a server-side output data source.",t.React.createElement("br",null),"Please config data source.")}}function r(t){u.p=t}})(),o})())}}}));