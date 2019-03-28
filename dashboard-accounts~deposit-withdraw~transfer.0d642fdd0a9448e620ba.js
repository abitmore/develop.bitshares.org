(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1995:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(2022),i=n.n(o),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var c=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={animateEnter:!1},e.timer=null,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),s(t,[{key:"componentDidMount",value:function(){this.enableAnimation()}},{key:"resetAnimation",value:function(){this.setState({animateEnter:!1}),this.enableAnimation()}},{key:"enableAnimation",value:function(){var e=this;this.timer=setTimeout(function(){e.timer&&e.setState({animateEnter:!0})},2e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer),this.timer=null}},{key:"render",value:function(){return this.props.children?r.a.createElement(i.a,{id:this.props.id,className:this.props.className,component:this.props.component,transitionName:this.props.transitionName,transitionEnterTimeout:this.props.enterTimeout,transitionEnter:this.state.animateEnter,transitionLeave:!1},this.props.children):r.a.createElement(this.props.component)}}]),t}();c.defaultProps={component:"span",enterTimeout:2e3},t.a=c},2006:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(286),i=n(10),s=n.n(i),c=n(1995),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={page:1,pageSize:e.pageSize},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),l(t,[{key:"onChange",value:function(e,t){this.setState({page:e,pageSize:t})}},{key:"render",value:function(){var e=this,t=this.state,n=t.page,a=t.pageSize,i=this.props,l=i.header,u=i.rows,p=i.extraRow,h=u.length,f=m(n,a);function m(e,t){for(var n=[],a=(e-1)*t;a<Math.min(h,e*t);a++)n.push(u[a]);return n}return!f.length&&h&&(f=m(1,a)),r.a.createElement("div",{className:"grid-content",style:this.props.style},r.a.createElement("table",{className:this.props.className},l?r.a.createElement("thead",null,l):null,this.props.withTransition&&1===n?r.a.createElement(c.a,{component:"tbody",transitionName:"newrow"},f,p):r.a.createElement("tbody",null,f,p)),h>a?r.a.createElement(o.a,{style:{paddingTop:"1rem",paddingBottom:"1rem",paddingLeft:this.props.leftPadding||null},total:h,showTotal:function(t){return s.a.translate(e.props.label,{count:t})},pageSize:a,current:n,onChange:this.onChange.bind(this)}):null,this.props.children)}}]),t}();u.defaultProps={rows:[],pageSize:15,label:"utility.total_x_items",className:"table",extraRow:null,style:{paddingBottom:"1rem"}},t.a=u},2007:function(e,t,n){"use strict";n.d(t,"a",function(){return L}),n.d(t,"b",function(){return z});var a=n(0),r=n.n(a),o=n(3),i=n.n(o),s=n(359),c=n(570),l=n(38),u=n(45),p=n(14),h=n(12),f=n(2e3),m=n.n(f),d=n(10),y=n.n(d),b=n(20),g=n(5),_=n.n(g),v=n(1),w=n.n(v),E=n(2006),k=n(2023),x=n.n(k),H=n(41),O=n(9),S=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function N(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var A=h.ChainTypes.operations,C={textAlign:"left"},P=Object.keys(A);function F(e,t){return t.block_num===e.block_num?t.virtual_op-e.virtual_op:t.block_num-e.block_num}var L=function(e){function t(e){j(this,t);var n=T(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={limit:e.limit,fetchingAccountHistory:!1,headerHeight:85,filter:"all",accountHistoryError:!1},n}return N(t,r.a.Component),S(t,[{key:"componentDidMount",value:function(){if(!this.props.fullHeight){var e=this.refs.transactions;m.a.initialize(e),this._setHeaderHeight()}}},{key:"_setHeaderHeight",value:function(){var e=this.refs.header.offsetHeight;e!==this.state.headerHeight&&this.setState({headerHeight:e})}},{key:"shouldComponentUpdate",value:function(e,t){if(!p.a.are_equal_shallow(this.props.accountsList,e.accountsList))return!0;if(this.props.maxHeight!==e.maxHeight)return!0;if(this.state.headerHeight!==t.headerHeight)return!0;if(this.state.filter!==t.filter)return!0;if(this.props.customFilter&&(!p.a.are_equal_shallow(this.props.customFilter.fields,e.customFilter.fields)||!p.a.are_equal_shallow(this.props.customFilter.values,e.customFilter.values)))return!0;if(this.props.maxHeight!==e.maxHeight)return!0;if(t.limit!==this.state.limit||t.fetchingAccountHistory!==this.state.fetchingAccountHistory)return!0;for(var n=0;n<e.accountsList.length;++n){var a=e.accountsList[n],r=this.props.accountsList[n];if(a&&r&&a.get("history")!==r.get("history"))return!0}return!1}},{key:"_onIncreaseLimit",value:function(){this.setState({limit:this.state.limit+30})}},{key:"_getHistory",value:function(e,t,n){var a=[],r=new Set,o=!0,i=!1,s=void 0;try{for(var c,l=e[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var u=c.value;if(u){var p=u.get("history");p&&(a=a.concat(p.toJS().filter(function(e){return!r.has(e.id)&&r.add(e.id)})))}}}catch(e){i=!0,s=e}finally{try{!o&&l.return&&l.return()}finally{if(i)throw s}}return t&&(a=a.filter(function(e){return e.op[0]===A[t]})),n&&(a=a.filter(function(e){return n.fields.reduce(function(t,a){switch(a){case"asset_id":return t&&e.op[1].amount[a]===n.values[a];default:return t&&e.op[1][a]===n.values[a]}},!0)})),a}},{key:"_getAccountHistoryES",value:function(e,t,n){var a="https://wrapper.elasticsearch.bitshares.ws";return console.log("query",a+"/get_account_history?account_id="+e+"&from_="+n+"&size="+t+"&sort_by=block_data.block_time&type=data&agg_field=operation_type"),new Promise(function(r,o){fetch(a+"/get_account_history?account_id="+e+"&from_="+n+"&size="+t+"&sort_by=block_data.block_time&type=data&agg_field=operation_type").then(function(e){return e.json()}).then(function(e){var t=e.map(function(e){return{id:e.account_history.operation_id,op:{type:e.operation_type,data:e.operation_history.op_object},result:JSON.parse(e.operation_history.operation_result),block_num:e.block_data.block_num,block_time:e.block_data.block_time+"Z"}});r(t)}).catch(function(e){console.warn("query failed",e),r([])})})}},{key:"_generateCSV",value:function(){var e=function(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function a(r,o){try{var i=t[r](o),s=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(s).then(function(e){a("next",e)},function(e){a("throw",e)});e(s)}("next")})}}(regeneratorRuntime.mark(function e(){var t,n,a,r,o,i,c,l,u,p,f,m,d,y,b,g,_,v;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=function(e,t){for(var n=""+e;n.length<t;)n="0"+n;return n},this.setState({fetchingAccountHistory:!0}),t=0,n=150,a=this.props.accountsList[0].get("id"),e.next=7,Object(h.FetchChain)("getAccount",a);case 7:r=e.sent.get("name"),o={};case 9:return e.next=12,this._getAccountHistoryES(a,n,t);case 12:if((c=e.sent).length){e.next=15;break}return e.abrupt("break",23);case 15:return e.next=17,x.a.resolveBlockTimes(c);case 17:return e.next=19,x.a.resolveAssets(c);case 19:c.map(function(e){var t=e.id,n=P[e.op.type],a=e.op.data;switch(n){case"vesting_balance_withdraw":case"transfer":a.amount=a.amount_}o[t]={timestamp:new Date(e.block_time),type:n,data:a}}),t+=c.length,e.next=9;break;case 23:if(Object.keys(o).length){e.next=25;break}return e.abrupt("return",this.setState({fetchingAccountHistory:!1,accountHistoryError:!0}));case 25:for(o=x.a.groupEntries(o),l=x.a.parseData(o,a,r),u=function(e){return("0"+e.getDate()).slice(-2)+"."+("0"+(e.getMonth()+1)).slice(-2)+"."+e.getFullYear()+" "+("0"+e.getHours()).slice(-2)+":"+("0"+e.getMinutes()).slice(-2)+":"+("0"+e.getSeconds()).slice(-2)+" GMT"+(e.getTimezoneOffset()<0?"+":"-")+i(parseInt(Math.floor(Math.abs(e.getTimezoneOffset()/60))),2)+i(Math.abs(e.getTimezoneOffset()%60),2)},p="",f=!0,m=!1,d=void 0,e.prev=32,y=l[Symbol.iterator]();!(f=(b=y.next()).done);f=!0)(g=b.value).length>=11&&g[10]instanceof Date&&(g[10]=u(g[10])),p+=g.join(",")+"\n";e.next=40;break;case 36:e.prev=36,e.t0=e.catch(32),m=!0,d=e.t0;case 40:e.prev=40,e.prev=41,!f&&y.return&&y.return();case 43:if(e.prev=43,!m){e.next=46;break}throw d;case 46:return e.finish(43);case 47:return e.finish(40);case 48:_=new Blob([p],{type:"text/csv;charset=utf-8"}),v=new Date,Object(s.saveAs)(_,"bitshares-account-history-"+r+"-"+v.getFullYear()+"-"+("0"+(v.getMonth()+1)).slice(-2)+"-"+("0"+v.getDate()).slice(-2)+"-"+("0"+v.getHours()).slice(-2)+("0"+v.getMinutes()).slice(-2)+".csv"),this.setState({fetchingAccountHistory:!1,accountHistoryError:null});case 52:case"end":return e.stop()}},e,this,[[32,36,40,48],[41,,43,47]])}));return function(){return e.apply(this,arguments)}}()},{key:"_onChangeFilter",value:function(e){this.setState({filter:e.target.value})}},{key:"render",value:function(){var e=this.props,t=e.accountsList,n=e.compactView,a=e.filter,o=e.customFilter,s=e.style,l=e.maxHeight,u=this.state,p=u.limit,h=u.headerHeight,f=1===t.length&&t[0]?t[0].get("id"):null,m=this._getHistory(t,this.props.showFilters&&"all"!==this.state.filter?this.state.filter:a,o).sort(F),d=m.length;s=s||{width:"100%",height:"100%"};var g=null;g=["all","transfer","limit_order_create","limit_order_cancel","fill_order","account_create","account_update","asset_create","witness_withdraw_pay","vesting_balance_withdraw"].map(function(e){return r.a.createElement("option",{value:e,key:e},y.a.translate("transaction.trxTypes."+e))});var v=m.length?m.slice(0,p).map(function(e){return r.a.createElement(c.a,{includeOperationId:!0,operationId:e.id,style:C,key:e.id,op:e.op,result:e.result,txIndex:e.trx_in_block,block:e.block_num,current:f,hideFee:!1,inverted:!1,hideOpLabel:n,fullDate:!0})}):[r.a.createElement("tr",{key:"no_recent"},r.a.createElement("td",{colSpan:n?"2":"3"},r.a.createElement(i.a,{content:"operation.no_recent"})))],w=r.a.createElement("tr",{className:"total-value",key:"total_value"},r.a.createElement("td",{style:{textAlign:"center"}}," "),r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",null));return r.a.createElement("div",{className:"recent-transactions no-overflow",style:s},r.a.createElement("div",{className:"generic-bordered-box"},this.props.dashboard?null:r.a.createElement("div",{ref:"header"},r.a.createElement("div",{className:"block-content-header"},r.a.createElement("span",null,this.props.title?this.props.title:r.a.createElement(i.a,{content:"account.recent"})))),r.a.createElement("div",{className:"header-selector"},r.a.createElement("div",{className:"selector"},r.a.createElement("div",{className:_()("inline-block")},this.props.showFilters?r.a.createElement(O.Tooltip,{placement:"bottom",title:y.a.translate("tooltip.filter_ops")},r.a.createElement("select",{style:{paddingTop:5,width:"auto"},className:"bts-select no-margin",value:this.state.filter,onChange:this._onChangeFilter.bind(this)},g)):null),d>0?r.a.createElement(O.Tooltip,{placement:"bottom",title:y.a.translate("transaction.csv_tip")},r.a.createElement("a",{className:"inline-block",onClick:this._generateCSV.bind(this),style:{marginLeft:"1rem"}},r.a.createElement(b.a,{name:"excel",size:"1_5x"}))):null),this.state.accountHistoryError&&r.a.createElement("div",{className:"has-error",style:{paddingLeft:"0.75rem"}},r.a.createElement(i.a,{content:"account.history_error"}))),r.a.createElement("div",{className:"box-content grid-block no-margin",style:this.props.fullHeight?null:{maxHeight:l-h},ref:"transactions"},r.a.createElement(E.a,{withTransition:!0,className:"table table-striped "+(n?"compact":"")+(this.props.dashboard?" dashboard-table table-hover":""),header:r.a.createElement("tr",null,r.a.createElement("th",{className:"column-hide-tiny",style:C},r.a.createElement(i.a,{content:"account.transactions.id"})),r.a.createElement("th",{className:"column-hide-tiny",style:C},r.a.createElement(i.a,{content:"account.transactions.type"})),r.a.createElement("th",{style:C},r.a.createElement(i.a,{content:"account.transactions.info"})),r.a.createElement("th",{style:C},r.a.createElement(i.a,{content:"account.transactions.fee"})),r.a.createElement("th",null,r.a.createElement(i.a,{content:"account.transactions.time"}))),rows:v,label:"utility.total_x_operations",extraRow:w})),this.state.fetchingAccountHistory&&r.a.createElement(H.a,null)))}}]),t}();L.propTypes={accountsList:l.a.ChainAccountsList.isRequired,compactView:w.a.bool,limit:w.a.number,maxHeight:w.a.number,fullHeight:w.a.bool,showFilters:w.a.bool},L.defaultProps={limit:25,maxHeight:500,fullHeight:!1,showFilters:!1},L=Object(u.a)(L);var z=function(e){function t(){return j(this,t),T(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return N(t,r.a.Component),S(t,[{key:"render",value:function(){return r.a.createElement("span",{className:"wrapper"},this.props.children(this.props))}}]),t}();z.propTypes={asset:l.a.ChainAsset.isRequired,to:l.a.ChainAccount.isRequired,fromAccount:l.a.ChainAccount.isRequired},z.defaultProps={asset:"1.3.0"},z=Object(u.a)(z)}}]);
//# sourceMappingURL=dashboard-accounts~deposit-withdraw~transfer.js.map