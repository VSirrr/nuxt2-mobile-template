(function(){'use strict';if(typeof window!=='object'){return}if('IntersectionObserver'in window&&'IntersectionObserverEntry'in window&&'intersectionRatio'in window.IntersectionObserverEntry.prototype){if(!('isIntersecting'in window.IntersectionObserverEntry.prototype)){Object.defineProperty(window.IntersectionObserverEntry.prototype,'isIntersecting',{get:function(){return this.intersectionRatio>0},})}return}function getFrameElement(doc){try{return(doc.defaultView&&doc.defaultView.frameElement)||null}catch(e){return null}}const document=(function(startDoc){let doc=startDoc;let frame=getFrameElement(doc);while(frame){doc=frame.ownerDocument;frame=getFrameElement(doc)}return doc})(window.document);const registry=[];let crossOriginUpdater=null;let crossOriginRect=null;function IntersectionObserverEntry(entry){this.time=entry.time;this.target=entry.target;this.rootBounds=ensureDOMRect(entry.rootBounds);this.boundingClientRect=ensureDOMRect(entry.boundingClientRect);this.intersectionRect=ensureDOMRect(entry.intersectionRect||getEmptyRect());this.isIntersecting=!!entry.intersectionRect;const targetRect=this.boundingClientRect;const targetArea=targetRect.width*targetRect.height;const intersectionRect=this.intersectionRect;const intersectionArea=intersectionRect.width*intersectionRect.height;if(targetArea){this.intersectionRatio=Number((intersectionArea/targetArea).toFixed(4))}else{this.intersectionRatio=this.isIntersecting?1:0}}function IntersectionObserver(callback,opt_options){const options=opt_options||{};if(typeof callback!=='function'){throw new TypeError('callback must be a function');}if(options.root&&options.root.nodeType!=1&&options.root.nodeType!=9){throw new Error('root must be a Document or Element');}this._checkForIntersections=throttle(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT);this._callback=callback;this._observationTargets=[];this._queuedEntries=[];this._rootMarginValues=this._parseRootMargin(options.rootMargin);this.thresholds=this._initThresholds(options.threshold);this.root=options.root||null;this.rootMargin=this._rootMarginValues.map(function(margin){return margin.value+margin.unit}).join(' ');this._monitoringDocuments=[];this._monitoringUnsubscribes=[]}IntersectionObserver.prototype.THROTTLE_TIMEOUT=100;IntersectionObserver.prototype.POLL_INTERVAL=null;IntersectionObserver.prototype.USE_MUTATION_OBSERVER=true;IntersectionObserver._setupCrossOriginUpdater=function(){if(!crossOriginUpdater){crossOriginUpdater=function(boundingClientRect,intersectionRect){if(!boundingClientRect||!intersectionRect){crossOriginRect=getEmptyRect()}else{crossOriginRect=convertFromParentRect(boundingClientRect,intersectionRect)}registry.forEach(function(observer){observer._checkForIntersections()})}}return crossOriginUpdater};IntersectionObserver._resetCrossOriginUpdater=function(){crossOriginUpdater=null;crossOriginRect=null};IntersectionObserver.prototype.observe=function(target){const isTargetAlreadyObserved=this._observationTargets.some(function(item){return item.element==target});if(isTargetAlreadyObserved){return}if(!(target&&target.nodeType==1)){throw new Error('target must be an Element');}this._registerInstance();this._observationTargets.push({element:target,entry:null});this._monitorIntersections(target.ownerDocument);this._checkForIntersections()};IntersectionObserver.prototype.unobserve=function(target){this._observationTargets=this._observationTargets.filter(function(item){return item.element!=target});this._unmonitorIntersections(target.ownerDocument);if(this._observationTargets.length==0){this._unregisterInstance()}};IntersectionObserver.prototype.disconnect=function(){this._observationTargets=[];this._unmonitorAllIntersections();this._unregisterInstance()};IntersectionObserver.prototype.takeRecords=function(){const records=this._queuedEntries.slice();this._queuedEntries=[];return records};IntersectionObserver.prototype._initThresholds=function(opt_threshold){let threshold=opt_threshold||[0];if(!Array.isArray(threshold))threshold=[threshold];return threshold.sort().filter(function(t,i,a){if(typeof t!=='number'||isNaN(t)||t<0||t>1){throw new Error('threshold must be a number between 0 and 1 inclusively');}return t!==a[i-1]})};IntersectionObserver.prototype._parseRootMargin=function(opt_rootMargin){const marginString=opt_rootMargin||'0px';const margins=marginString.split(/\s+/).map(function(margin){const parts=/^(-?\d*\.?\d+)(px|%)$/.exec(margin);if(!parts){throw new Error('rootMargin must be specified in pixels or percent');}return{value:parseFloat(parts[1]),unit:parts[2]}});margins[1]=margins[1]||margins[0];margins[2]=margins[2]||margins[0];margins[3]=margins[3]||margins[1];return margins};IntersectionObserver.prototype._monitorIntersections=function(doc){const win=doc.defaultView;if(!win){return}if(this._monitoringDocuments.includes(doc)){return}const callback=this._checkForIntersections;let monitoringInterval=null;let domObserver=null;if(this.POLL_INTERVAL){monitoringInterval=win.setInterval(callback,this.POLL_INTERVAL)}else{addEvent(win,'resize',callback,true);addEvent(doc,'scroll',callback,true);if(this.USE_MUTATION_OBSERVER&&'MutationObserver'in win){domObserver=new win.MutationObserver(callback);domObserver.observe(doc,{attributes:true,childList:true,characterData:true,subtree:true,})}}this._monitoringDocuments.push(doc);this._monitoringUnsubscribes.push(function(){const win=doc.defaultView;if(win){if(monitoringInterval){win.clearInterval(monitoringInterval)}removeEvent(win,'resize',callback,true)}removeEvent(doc,'scroll',callback,true);if(domObserver){domObserver.disconnect()}});const rootDoc=(this.root&&(this.root.ownerDocument||this.root))||document;if(doc!=rootDoc){const frame=getFrameElement(doc);if(frame){this._monitorIntersections(frame.ownerDocument)}}};IntersectionObserver.prototype._unmonitorIntersections=function(doc){const index=this._monitoringDocuments.indexOf(doc);if(index==-1){return}const rootDoc=(this.root&&(this.root.ownerDocument||this.root))||document;const hasDependentTargets=this._observationTargets.some(function(item){let itemDoc=item.element.ownerDocument;if(itemDoc==doc){return true}while(itemDoc&&itemDoc!=rootDoc){const frame=getFrameElement(itemDoc);itemDoc=frame&&frame.ownerDocument;if(itemDoc==doc){return true}}return false});if(hasDependentTargets){return}const unsubscribe=this._monitoringUnsubscribes[index];this._monitoringDocuments.splice(index,1);this._monitoringUnsubscribes.splice(index,1);unsubscribe();if(doc!=rootDoc){const frame=getFrameElement(doc);if(frame){this._unmonitorIntersections(frame.ownerDocument)}}};IntersectionObserver.prototype._unmonitorAllIntersections=function(){const unsubscribes=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0;this._monitoringUnsubscribes.length=0;for(let i=0;i<unsubscribes.length;i++){unsubscribes[i]()}};IntersectionObserver.prototype._checkForIntersections=function(){if(!this.root&&crossOriginUpdater&&!crossOriginRect){return}const rootIsInDom=this._rootIsInDom();const rootRect=rootIsInDom?this._getRootRect():getEmptyRect();this._observationTargets.forEach(function(item){const target=item.element;const targetRect=getBoundingClientRect(target);const rootContainsTarget=this._rootContainsTarget(target);const oldEntry=item.entry;const intersectionRect=rootIsInDom&&rootContainsTarget&&this._computeTargetAndRootIntersection(target,targetRect,rootRect);let rootBounds=null;if(!this._rootContainsTarget(target)){rootBounds=getEmptyRect()}else if(!crossOriginUpdater||this.root){rootBounds=rootRect}const newEntry=(item.entry=new IntersectionObserverEntry({time:now(),target:target,boundingClientRect:targetRect,rootBounds:rootBounds,intersectionRect:intersectionRect,}));if(!oldEntry){this._queuedEntries.push(newEntry)}else if(rootIsInDom&&rootContainsTarget){if(this._hasCrossedThreshold(oldEntry,newEntry)){this._queuedEntries.push(newEntry)}}else{if(oldEntry&&oldEntry.isIntersecting){this._queuedEntries.push(newEntry)}}},this);if(this._queuedEntries.length){this._callback(this.takeRecords(),this)}};IntersectionObserver.prototype._computeTargetAndRootIntersection=function(target,targetRect,rootRect){if(window.getComputedStyle(target).display=='none')return;let intersectionRect=targetRect;let parent=getParentNode(target);let atRoot=false;while(!atRoot&&parent){let parentRect=null;const parentComputedStyle=parent.nodeType==1?window.getComputedStyle(parent):{};if(parentComputedStyle.display=='none')return null;if(parent==this.root||parent.nodeType==9){atRoot=true;if(parent==this.root||parent==document){if(crossOriginUpdater&&!this.root){if(!crossOriginRect||(crossOriginRect.width==0&&crossOriginRect.height==0)){parent=null;parentRect=null;intersectionRect=null}else{parentRect=crossOriginRect}}else{parentRect=rootRect}}else{const frame=getParentNode(parent);const frameRect=frame&&getBoundingClientRect(frame);const frameIntersect=frame&&this._computeTargetAndRootIntersection(frame,frameRect,rootRect);if(frameRect&&frameIntersect){parent=frame;parentRect=convertFromParentRect(frameRect,frameIntersect)}else{parent=null;intersectionRect=null}}}else{const doc=parent.ownerDocument;if(parent!=doc.body&&parent!=doc.documentElement&&parentComputedStyle.overflow!='visible'){parentRect=getBoundingClientRect(parent)}}if(parentRect){intersectionRect=computeRectIntersection(parentRect,intersectionRect)}if(!intersectionRect)break;parent=parent&&getParentNode(parent)}return intersectionRect};IntersectionObserver.prototype._getRootRect=function(){let rootRect;if(this.root&&!isDoc(this.root)){rootRect=getBoundingClientRect(this.root)}else{const doc=isDoc(this.root)?this.root:document;const html=doc.documentElement;const body=doc.body;rootRect={top:0,left:0,right:html.clientWidth||body.clientWidth,width:html.clientWidth||body.clientWidth,bottom:html.clientHeight||body.clientHeight,height:html.clientHeight||body.clientHeight,}}return this._expandRectByRootMargin(rootRect)};IntersectionObserver.prototype._expandRectByRootMargin=function(rect){const margins=this._rootMarginValues.map(function(margin,i){return margin.unit=='px'?margin.value:(margin.value*(i%2?rect.width:rect.height))/100});const newRect={top:rect.top-margins[0],right:rect.right+margins[1],bottom:rect.bottom+margins[2],left:rect.left-margins[3],};newRect.width=newRect.right-newRect.left;newRect.height=newRect.bottom-newRect.top;return newRect};IntersectionObserver.prototype._hasCrossedThreshold=function(oldEntry,newEntry){const oldRatio=oldEntry&&oldEntry.isIntersecting?oldEntry.intersectionRatio||0:-1;const newRatio=newEntry.isIntersecting?newEntry.intersectionRatio||0:-1;if(oldRatio===newRatio)return;for(let i=0;i<this.thresholds.length;i++){const threshold=this.thresholds[i];if(threshold==oldRatio||threshold==newRatio||threshold<oldRatio!==threshold<newRatio){return true}}};IntersectionObserver.prototype._rootIsInDom=function(){return!this.root||containsDeep(document,this.root)};IntersectionObserver.prototype._rootContainsTarget=function(target){const rootDoc=(this.root&&(this.root.ownerDocument||this.root))||document;return(containsDeep(rootDoc,target)&&(!this.root||rootDoc==target.ownerDocument))};IntersectionObserver.prototype._registerInstance=function(){if(!registry.includes(this)){registry.push(this)}};IntersectionObserver.prototype._unregisterInstance=function(){const index=registry.indexOf(this);if(index!=-1)registry.splice(index,1)};function now(){return window.performance&&performance.now&&performance.now()}function throttle(fn,timeout){let timer=null;return function(){if(!timer){timer=setTimeout(function(){fn();timer=null},timeout)}}}function addEvent(node,event,fn,opt_useCapture){if(typeof node.addEventListener==='function'){node.addEventListener(event,fn,opt_useCapture||false)}else if(typeof node.attachEvent==='function'){node.attachEvent('on'+event,fn)}}function removeEvent(node,event,fn,opt_useCapture){if(typeof node.removeEventListener==='function'){node.removeEventListener(event,fn,opt_useCapture||false)}else if(typeof node.detachEvent==='function'){node.detachEvent('on'+event,fn)}}function computeRectIntersection(rect1,rect2){const top=Math.max(rect1.top,rect2.top);const bottom=Math.min(rect1.bottom,rect2.bottom);const left=Math.max(rect1.left,rect2.left);const right=Math.min(rect1.right,rect2.right);const width=right-left;const height=bottom-top;return((width>=0&&height>=0&&{top:top,bottom:bottom,left:left,right:right,width:width,height:height,})||null)}function getBoundingClientRect(el){let rect;try{rect=el.getBoundingClientRect()}catch(err){}if(!rect)return getEmptyRect();if(!(rect.width&&rect.height)){rect={top:rect.top,right:rect.right,bottom:rect.bottom,left:rect.left,width:rect.right-rect.left,height:rect.bottom-rect.top,}}return rect}function getEmptyRect(){return{top:0,bottom:0,left:0,right:0,width:0,height:0,}}function ensureDOMRect(rect){if(!rect||'x'in rect){return rect}return{top:rect.top,y:rect.top,bottom:rect.bottom,left:rect.left,x:rect.left,right:rect.right,width:rect.width,height:rect.height,}}function convertFromParentRect(parentBoundingRect,parentIntersectionRect){const top=parentIntersectionRect.top-parentBoundingRect.top;const left=parentIntersectionRect.left-parentBoundingRect.left;return{top:top,left:left,height:parentIntersectionRect.height,width:parentIntersectionRect.width,bottom:top+parentIntersectionRect.height,right:left+parentIntersectionRect.width,}}function containsDeep(parent,child){let node=child;while(node){if(node==parent)return true;node=getParentNode(node)}return false}function getParentNode(node){let parent=node.parentNode;if(node.nodeType==9&&node!=document){return getFrameElement(node)}if(parent&&parent.assignedSlot){parent=parent.assignedSlot.parentNode}if(parent&&parent.nodeType==11&&parent.host){return parent.host}return parent}function isDoc(node){return node&&node.nodeType===9}window.IntersectionObserver=IntersectionObserver;window.IntersectionObserverEntry=IntersectionObserverEntry})();
