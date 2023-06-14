System.register(["jimu-core","jimu-ui"],(function(e,s){var t={},o={};return{setters:[function(e){t.FormattedMessage=e.FormattedMessage,t.React=e.React,t.css=e.css,t.defaultMessages=e.defaultMessages,t.jsx=e.jsx,t.styled=e.styled},function(e){o.Button=e.Button,o.Tab=e.Tab,o.Tabs=e.Tabs}],execute:function(){e((()=>{var e={8891:e=>{"use strict";e.exports=t},726:e=>{"use strict";e.exports=o}},s={};function r(t){var o=s[t];if(void 0!==o)return o.exports;var l=s[t]={exports:{}};return e[t](l,l.exports,r),l.exports}r.d=(e,s)=>{for(var t in s)r.o(s,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:s[t]})},r.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="";var l={};return r.p=window.jimuConfig.baseUrl,(()=>{"use strict";r.r(l),r.d(l,{default:()=>o});var e=r(8891),s=r(726);const t={_widgetLabel:"Demo (Class)",widgetProperties:"Widget Properties",widgetFunctions:"Widget Functions",widgetName:"widget name:",widgetProps:"widget props:"};class o extends e.React.PureComponent{constructor(){super(...arguments),this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:t[e]}):e}render(){const o=e.css`
      color: ${this.props.theme.colors.danger};
      font-size: 1.25rem;
    `,r={backgroundColor:this.props.theme.colors.palette.light[500],padding:"1rem"},l=e.styled.button`
      color: white;
      background-color: ${this.props.theme.colors.primary};
      transition: 0.15s ease-in all;
      &:hover {
        background-color: ${this.props.theme.colors.danger};
      }
    `,i=(0,e.styled)(s.Button)`
      background-color: hotpink !important;
      border: 0 !important;
      transition: 0.15s ease-in all;
      &:hover {
        background-color: purple !important;
      }
    `,n=e.css`
      border: solid 1px;
      width: 100px;
      padding-left: 20px;
    `,a=Object.keys(this.props).map(((s,t)=>["manifest","user","intl"].includes(s)||"string"==typeof this.props[s]?(0,e.jsx)("tr",{key:t},(0,e.jsx)("td",null,s),(0,e.jsx)("td",null,this.props[s]&&this.props[s].toString())):(0,e.jsx)("tr",{key:t},(0,e.jsx)("td",null,s),(0,e.jsx)("td",null,JSON.stringify(this.props[s],null,2)))));return(0,e.jsx)("div",{className:"widget-demo jimu-widget",style:{overflow:"auto"}},(0,e.jsx)(s.Tabs,null,(0,e.jsx)(s.Tab,{id:"widgetProperties",title:this.nls("widgetProperties")},(0,e.jsx)("div",{className:"title font-weight-bold"},"NLS messages from jimu-core (OK)"),(0,e.jsx)("div",{className:"content"},(0,e.jsx)(e.FormattedMessage,{id:"ok",defaultMessage:e.defaultMessages.ok})),(0,e.jsx)("hr",null),(0,e.jsx)("div",{css:o},(0,e.jsx)("span",{css:r},"Theme danger color")),(0,e.jsx)("br",null),(0,e.jsx)(l,null,"A styled HTML Button"),(0,e.jsx)("br",null),(0,e.jsx)("br",null),(0,e.jsx)(i,null,"A Re-styled Button Component"),(0,e.jsx)("br",null),(0,e.jsx)("br",null),(0,e.jsx)("div",{css:n},"right to left demo"),(0,e.jsx)("br",null),(0,e.jsx)("br",null),(0,e.jsx)("style",null,"\n      .danger-color {\n        color: red;\n      }\n    "),(0,e.jsx)("p",{className:"danger-color"},"Text color is from a named CSS class"),(0,e.jsx)("div",{className:"title font-weight-bold"},(0,e.jsx)(e.FormattedMessage,{id:"widgetName",defaultMessage:t.widgetName})),(0,e.jsx)("div",{className:"content"},this.props.intl.formatMessage({id:"_widgetLabel",defaultMessage:t._widgetLabel})),(0,e.jsx)("div",{className:"title font-weight-bold"},(0,e.jsx)(e.FormattedMessage,{id:"widgetProps",defaultMessage:t.widgetProps})),(0,e.jsx)("div",{className:"content"},(0,e.jsx)("table",null,(0,e.jsx)("tbody",null,a)))),(0,e.jsx)(s.Tab,{id:"widgetFunctions",title:this.nls("widgetFunctions")},(0,e.jsx)("p",null,"TODO"))))}}})(),l})())}}}));