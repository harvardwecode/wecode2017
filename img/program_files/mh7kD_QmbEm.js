/*!CK:3504243004!*//*1419249997,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Bw9IR"]); }

__d("AdsInsightsRelevanceScoreSubfield",[],function(a,b,c,d,e,f){e.exports={SCORE:"score",POSITIVE_FEEDBACK:"positive_feedback",NEGATIVE_FEEDBACK:"negative_feedback"};},null);
__d("admanager_render_error_div",["DeprecatedCSSMiscellany","DOM"],function(a,b,c,d,e,f,g,h){function i(j,k){if(k&&k.length){var l=h.create('ul');for(var m=0;m<k.length;m++)l.appendChild(h.create('li',{},k[m]));h.setContent(j,l);g.show(j);}}e.exports=i;},null);
__d("admanager_update_transaction_history_view",["AsyncRequest","BakerAction","DeprecatedCSSMiscellany","$","DOM","admanager_render_error_div"],function(a,b,c,d,e,f,g,h,i,j,k,l){function m(n,o,p){new h(n,'input;ads:manage:billing;toggleMonth').log();var q=function(s){i.hide('inv_spin');var t=s.getPayload();if(t.err){l(j('global_error_div'),t.err);}else{k.setContent(j('monthly_report_button'),t.btn);k.setContent(j('transaction_table'),t.r);}},r=function(s){i.hide('inv_spin');var t=s.getPayload();l(j('global_error_div'),t.err);};i.show('inv_spin');new g().setURI('/ads/ajax/billing.php').setData({act:n,ts:o,payment_option:p}).setHandler(q).setErrorHandler(r).send();}e.exports=m;},null);
__d("legacy:admanagerUpdateTransactionHistoryView",["admanager_update_transaction_history_view"],function(a,b,c,d){a.admanager_update_transaction_history_view=b('admanager_update_transaction_history_view');},3);
__d("XZipGeneratorControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f){e.exports=b("XControllerURIBuilder").create("\/ads\/manage\/zip_generator\/",{ts:{type:"Int",required:true},act:{type:"Int",required:true},payment_option:{type:"Int"}});},null);
__d("admanager_download_report_zip",["XZipGeneratorControllerURIBuilder","Event"],function(a,b,c,d,e,f,g,h){function i(j,k,l,m){h.listen(j,'click',function(){var n=new g().setInt('ts',k.value).setInt('payment_option',l.value).setInt('act',m).getURI();window.location.href=n;});}e.exports.attach_onclick=i;},null);
__d("AdManagerHeaderMessaging",["Arbiter","CSS","DOM","$","copyProperties"],function(a,b,c,d,e,f,g,h,i,j,k){function l(m,n,o){"use strict";this._containerId=m;this._statusMessage=n;this._errors=o;this.init();}l.prototype.init=function(){"use strict";g.subscribe(l.ARBITER_STATUS_MESSAGE,function(m,n){this.setStatusMessage(n);}.bind(this));g.subscribe(l.ARBITER_ERROR_MESSAGE,function(m,n){if('string'===(typeof n))n=[n];this.setErrors(n);}.bind(this));this.refreshErrors();this.refreshStatus();};l.prototype.refreshUI=function(){"use strict";this.refreshErrors();this.refreshStatus();};l.prototype.find=function(m){"use strict";return i.find(j(this._containerId),m);};l.prototype.setErrors=function(m){"use strict";this._errors=m;this.refreshUI();};l.prototype.addError=function(m){"use strict";this._errors.push(m);this.refreshUI();};l.prototype.setError=function(m){"use strict";this._errors=[m];this.refreshUI();};l.prototype.clearErrors=function(){"use strict";this._errors=[];this.refreshUI();};l.prototype.clearStatusMessage=function(){"use strict";this._statusMessage='';this.refreshUI();};l.prototype.setStatusMessage=function(m){"use strict";this._statusMessage=m;this.refreshUI();};l.prototype.getErrorsDivContent=function(){"use strict";var m,n=i.create('ul');for(m=0;m<this._errors.length;m++)n.appendChild(i.create('li',{},this._errors[m]));return n;};l.prototype.refreshErrors=function(){"use strict";var m=this.find('div.global_errors');if(this._errors.length===0){h.hide(m);}else{i.setContent(this.find('div.global_errors'),this.getErrorsDivContent());h.show(m);}};l.prototype.refreshStatus=function(){"use strict";var m=i.scry(j(this._containerId),'div#standard_status')[0];if(m&&this._statusMessage&&this._statusMessage!==''){i.setContent(m,this._statusMessage);h.show(m);}};k(l,{ARBITER_ERROR_MESSAGE:'UIAdmgrHeaderMessaging/error_message',ARBITER_STATUS_MESSAGE:'UIAdmgrHeaderMessaging/status_message'});e.exports=l;},null);
__d("AdsManagerEmptyStateInfo.react",["Button.react","Image.react","ImageBlock.react","React","ReactChildren","XUIButton.react","cloneWithProps","cx","invariant"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){"use strict";function p(s){return !!(s.type===g.type||s.type===l.type);}function q(s){var t=s.props&&s.props.children,u=0;if(t)k.forEach(t,function(v){if(p(v))u++;});return !!u;}var r=j.createClass({displayName:"AdsManagerEmptyStateInfo",propTypes:{message:j.PropTypes.string.isRequired,align:j.PropTypes.oneOf(['center','left']),actions:j.PropTypes.array,imgsrc:j.PropTypes.string},render:function(){var s=[],t=this.props.imgsrc;if(t)s.push(j.createElement(h,{className:"_5hbd",src:t}));var u=this.props.children;if(u){o(!p(u)&&!q(u));u=j.createElement("div",{className:"_5hbv"},u);}s.push([j.createElement("h3",{className:"_5xay"},this.props.message),u,this._getActions()]);var v;if(this.props.imgsrc&&this.props.align!=='center'){v=j.createElement(i,{spacing:"large"},s);}else v=j.createElement("div",null,s);v.props.className=(("_5hb9")+(this.props.align==='center'?' '+"_5hbc":''));return v;},_getActions:function(){var s=this.props.actions;if(!s||!s.length)return;var t=[];s.forEach(function(u){if(p(u)){var v=t.length?'default':'special';t.push(m(u,{use:v,size:'large'}));}});if(!t.length)return;return (j.createElement("div",{className:"_5hbw"},t));}});e.exports=r;},null);
__d("AdsDetailsModuleItem",["Event"],function(a,b,c,d,e,f,g){var h={listen:function(i,j){g.listen(i,'click',j.show.bind(j));}};e.exports=h;},null);
__d("BrowserScroll",[],function(a,b,c,d,e,f){var g={getPageScrollLeft:function(){return window.pageXOffset||document.scrollLeft||document.body.scrollLeft||0;},getPageScrollTop:function(){return window.pageYOffset||document.scrollTop||document.body.scrollTop||0;}};e.exports=g;},null);
__d("view/ads/applications/adsmanager/constants",[],function(a,b,c,d,e,f){f.AdsManagerConstants={AVAILABLE_DISPLAY_VIEWS:['reporting','audienceManager'],DEFAULT_DISPLAY_VIEW:'reporting'};},null);
__d("view/image",["view/core"],function(a,b,c,d,e,f,g){f.Image=g.createClass({name:'Image',delegateProperties:{node:['src','title','alt','width','height']},declare:function(h){return {tagName:'img'};}});},null);