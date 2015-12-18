/*!CK:989925598!*//*1418014156,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["TqH9D"]); }

__d("FaceboxSourceConstants",[],function(a,b,c,d,e,f){e.exports={SNOWLIFT_SUGGEST:"snowlift_suggest",SNOWLIFT_DISMISS:"photo_snowlift_unit_suggestions",PERMALINK_SUGGEST:"permalink_suggest",PERMALINK_DISMISS:"photo_permalink_suggestions",UPLOADER_SUGGEST:"uploader_suggest",UPLOADER_DISMISS:"album_uploader_suggestions"};},null);
__d("TimelineProfilePictureLoggerEnums",[],function(a,b,c,d,e,f){e.exports={actions:{EDIT_THUMBNAIL:"edit_thumbnail",FROM_PHOTOS:"from_photos",MAKE_PROFILE:"make_profile",SILHOUETTE:"silhouette",SUGGESTION:"suggestion",SUGGESTION_UPLOAD:"suggestion_upload",SYNCED_PHOTO:"synced_photo",TAKE_PHOTO:"take_photo",UPLOAD:"upload_photo",USE_PREVIOUS:"use_previous"},flows:{PERMALINK:"permalink",SNOWLIFT:"snowlift",SPOTLIGHT:"spotlight",VAULT:"vault",ZOOMCROP:"zoomcrop"},steps:{INIT:"init",CANCEL:"cancel",RESIZE_BEGIN:"resize_begin",RESIZE_SKIPPED:"resize_skipped",RESIZE_SUCCESS:"resize_success",RESIZE_FAIL:"resize_fail",CROP:"crop",CROP_FAIL:"crop_fail",CROP_SAVING:"crop_saving",CROP_SUCCESS:"crop_success",FAIL:"fail",LOADING:"loading",PREVIOUS_PIC_FAIL:"previous_pic_fail",PREVIOUS_PIC_INIT:"previous_pic_init",PREVIOUS_PIC_SAVING:"previous_pic_saving",PREVIOUS_PIC_SUCCESS:"previous_pic_success",SUCCESS:"success",UPLOAD_SELECT:"upload_select",UPLOAD_SUCCESS:"upload_success",VIEWER_INIT:"viewer_init"}};},null);
__d("SimpleXUIDialog",["DialogX","LayerDestroyOnHide","LayerFadeOnHide","LayerFadeOnShow","LayerHideOnBlur","LayerHideOnEscape","React","XUIDialogCancelButton.react","XUIDialogBody.react","XUIDialogFooter.react","XUIDialogOkayButton.react","XUIDialogTitle.react"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){'use strict';var s=445,t={show:function(u,v,w,x){var y=m.createElement(q,{action:"cancel",use:"confirm"});this.showEx(u,v,y,w,x);},showConfirm:function(u,v,w,x){var y=false,z=m.createElement("div",null,m.createElement(n,{onClick:function(){y=false;}}),m.createElement(q,{action:"cancel",use:"confirm",onClick:function(){y=true;}}));function aa(){w(y);}this.showEx(u,v,z,aa,x);},showEx:function(u,v,w,x,y){y=y||{};var z=[h,j,i,l];if(y.hideOnBlur!==false)z.push(k);var aa={width:s,xui:true,addedBehaviors:z};if(v)v=m.createElement(r,{showCloseButton:true},v);if(w)w=m.createElement(p,null,w);var ba=m.createElement("div",null,v,m.createElement(o,null,u),w),ca=new g(aa,ba);if(x)ca.subscribe('hide',x);ca.show();}};e.exports=t;},null);
__d("ProfileInfoLeftNavItem.react",["React","ReactPropTypes","URI","Link.react","XUISpinner.react","XUIGrayText.react","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o=g.createClass({displayName:"ProfileInfoLeftNavItem",propTypes:{isDisabled:h.bool.isRequired,isSelected:h.bool.isRequired,title:h.string.isRequired,linkuri:h.instanceOf(i)},render:function(){return (g.createElement("li",g.__spread({},this.props,{className:n(this.props.className,"_47_-")}),g.createElement(j,{className:(("_5pwr")+(this.props.isSelected?' '+"_47__":'')),href:this.props.linkuri,onClick:function(p){p.preventDefault();}},g.createElement(l,{className:"_5pws",shade:"light",size:"medium",weight:this.props.isSelected?'bold':'normal'},this.props.title),g.createElement(k,{className:(("_3m8x")+(this.props.isSelected&&this.props.isDisabled?' '+"_3m8y":''))}))));}});e.exports=o;},null);
__d("ProfileInfoLeftNav.react",["AsyncRequest","PageTransitions","React","ReactPropTypes","SimpleXUIDialog","URI","List.react","ProfileInfoLeftNavItem.react","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p=null,q=i.createClass({displayName:"ProfileInfoLeftNav",propTypes:{initialSelectedIndex:j.number.isRequired,listItemData:j.object.isRequired,listItemTestIDs:j.array.isRequired,overviewContent:j.object,displaySectionToIndex:j.object.isRequired,sectionTitles:j.array.isRequired,testID:j.string.isRequired},statics:{setOverviewContent:function(r){if(p){p.overviewContent=r;p._addOverviewContentListener();}}},getInitialState:function(){return {selectedIndex:this.props.initialSelectedIndex,asyncRequest:null};},componentWillMount:function(){p=this;this.overviewContent=this.props.overviewContent;h.registerHandler(this._transitionHandler);this._addOverviewContentListener();},componentWillUnmount:function(){if(this.overviewContent)this.overviewContent.removeAllListeners();this.shouldReplaceURI=null;},_addOverviewContentListener:function(){if(this.overviewContent)this.overviewContent.addListener('navigate',function(r){return this._handleClick(this.props.displaySectionToIndex[r]);}.bind(this));},_handleClick:function(r,s){if(this.state.selectedIndex===r)return;if(this.state.asyncRequest)this.state.asyncRequest.abort();this.shouldReplaceURI=true;h.go(this._getRedirectURI(this.props.listItemData.profileSectionsQueryData[r]),false);var t=new g().setErrorHandler(this._asyncRequestErrorHandler).setHandler(this._asyncRequestCompletionHandler).setURI(this.props.listItemData.links[r]);this.setState({selectedIndex:r,asyncRequest:t});t.send();},_getRedirectURI:function(r){var s=l.getRequestURI(),t=this.props.listItemData.queryData;return s.setQueryData(Object.assign({},s.getQueryData(),{section:r},(Array.isArray(t)?null:t)));},_transitionHandler:function(){if(this.shouldReplaceURI){h.transitionComplete(true);this.shouldReplaceURI=false;return true;}return false;},_asyncRequestCompletionHandler:function(){this.setState({asyncRequest:null});if(this.state.selectedIndex!==0&&this.overviewContent)this.overviewContent.removeAllListeners();},_asyncRequestErrorHandler:function(){this.setState({asyncRequest:null});k.show("Sorry, something went wrong while loading this section. Please try again later.");},render:function(){return (i.createElement(m,{border:"none","data-testid":this.props.testID,spacing:"none"},this.props.listItemData.links.map(function(r,s){var t=this.state.selectedIndex===s,u=this._getRedirectURI(this.props.listItemData.profileSectionsQueryData[s]);return (i.createElement(n,{"data-testid":this.props.listItemTestIDs[s],isDisabled:!!this.state.asyncRequest,isSelected:t,key:s,linkuri:u,onClick:this._handleClick.bind(this,s),title:this.props.sectionTitles[s]}));},this)));}});e.exports=q;},null);
__d("ProfilePhotoActionLogger",["Banzai"],function(a,b,c,d,e,f,g){var h={EVENT_SELECT_METHOD:'select_method',EVENT_CAMERA_PERMISSION_PROVIDED:'permission_provided',EVENT_CAMERA_PERMISSION_DENIED:'permission_denied',EVENT_CAMERA_NO_WEBCAM:'permission_denied',EVENT_CAMERA_UNKNOWN_MEDIASTREAM_ERROR:'unknown_mediastream_error',EVENT_CAMERA_TAKE_PHOTO:'take_photo',EVENT_CAMERA_RETAKE_PHOTO:'retake_photo',EVENT_CAMERA_UPLOAD_ATTEMPT:'upload_attempt',EVENT_CAMERA_UPLOAD_ERROR:'upload_error',EVENT_CAMERA_UPLOAD_SUCCESS:'upload_success',SOURCE_SUGGESTIONS:'suggestions',SOURCE_TIMELINE:'timeline',SOURCE_NUX:'nux',METHOD_EXISTING:'existing',METHOD_UPLOAD:'upload',METHOD_CAMERA:'camera',log:function(i,j,k){g.post('profile_photo_action',{event:i,source:j,method:k});}};e.exports=h;},null);
__d("ProfileInfoNavOverview",["DataStore","Event","Parent","ProfileInfoLeftNav.react","cx","destroyOnUnload","mixInEventEmitter"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n="_5y02",o="_45nw",p="_2w77",q="_5f_8";function r(s){"use strict";j.setOverviewContent(this);var t=h.listen(s,'click',function(event){var u=event.target,v=i.byClass(u,n)||i.byClass(u,o)||i.byClass(u,p)||i.byClass(u,q);if(u.nodeName!=='A'&&v)this.emit('navigate',g.get(v,'overviewsection'));}.bind(this));l(function(){t.remove();t=null;});}m(r,{navigate:true});e.exports=r;},null);