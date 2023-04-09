"use strict";(self.webpackChunkmodernize=self.webpackChunkmodernize||[]).push([[554],{1554:function(t,n,e){e.d(n,{Z:function(){return x}});var i=e(3366),o=e(7462),r=e(7313),s=e(3061),a=e(1921),u=e(7592),l=e(7342),p=e(2530),c=e(7430),d=e(2298);function f(t){return(0,d.Z)("MuiBackdrop",t)}(0,c.Z)("MuiBackdrop",["root","invisible"]);var E=e(6417),h=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],m=(0,u.ZP)("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:function(t,n){var e=t.ownerState;return[n.root,e.invisible&&n.invisible]}})((function(t){var n=t.ownerState;return(0,o.Z)({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},n.invisible&&{backgroundColor:"transparent"})})),x=r.forwardRef((function(t,n){var e,r,u,c=(0,l.Z)({props:t,name:"MuiBackdrop"}),d=c.children,x=c.className,v=c.component,b=void 0===v?"div":v,g=c.components,C=void 0===g?{}:g,k=c.componentsProps,y=void 0===k?{}:k,Z=c.invisible,S=void 0!==Z&&Z,T=c.open,N=c.slotProps,R=void 0===N?{}:N,O=c.slots,D=void 0===O?{}:O,M=c.TransitionComponent,w=void 0===M?p.Z:M,P=c.transitionDuration,L=(0,i.Z)(c,h),j=(0,o.Z)({},c,{component:b,invisible:S}),I=function(t){var n=t.classes,e={root:["root",t.invisible&&"invisible"]};return(0,a.Z)(e,f,n)}(j),B=null!=(e=R.root)?e:y.root;return(0,E.jsx)(w,(0,o.Z)({in:T,timeout:P},L,{children:(0,E.jsx)(m,(0,o.Z)({"aria-hidden":!0},B,{as:null!=(r=null!=(u=D.root)?u:C.Root)?r:b,className:(0,s.Z)(I.root,x,null==B?void 0:B.className),ownerState:(0,o.Z)({},j,null==B?void 0:B.ownerState),classes:I,ref:n,children:d}))}))}))},2530:function(t,n,e){var i=e(7462),o=e(3366),r=e(7313),s=e(596),a=e(9860),u=e(265),l=e(6983),p=e(6417),c=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],d={entering:{opacity:1},entered:{opacity:1}},f=r.forwardRef((function(t,n){var e=(0,a.Z)(),f={enter:e.transitions.duration.enteringScreen,exit:e.transitions.duration.leavingScreen},E=t.addEndListener,h=t.appear,m=void 0===h||h,x=t.children,v=t.easing,b=t.in,g=t.onEnter,C=t.onEntered,k=t.onEntering,y=t.onExit,Z=t.onExited,S=t.onExiting,T=t.style,N=t.timeout,R=void 0===N?f:N,O=t.TransitionComponent,D=void 0===O?s.ZP:O,M=(0,o.Z)(t,c),w=r.useRef(null),P=(0,l.Z)(w,x.ref,n),L=function(t){return function(n){if(t){var e=w.current;void 0===n?t(e):t(e,n)}}},j=L(k),I=L((function(t,n){(0,u.n)(t);var i=(0,u.C)({style:T,timeout:R,easing:v},{mode:"enter"});t.style.webkitTransition=e.transitions.create("opacity",i),t.style.transition=e.transitions.create("opacity",i),g&&g(t,n)})),B=L(C),U=L(S),z=L((function(t){var n=(0,u.C)({style:T,timeout:R,easing:v},{mode:"exit"});t.style.webkitTransition=e.transitions.create("opacity",n),t.style.transition=e.transitions.create("opacity",n),y&&y(t)})),F=L(Z);return(0,p.jsx)(D,(0,i.Z)({appear:m,in:b,nodeRef:w,onEnter:I,onEntered:B,onEntering:j,onExit:z,onExited:F,onExiting:U,addEndListener:function(t){E&&E(w.current,t)},timeout:R},M,{children:function(t,n){return r.cloneElement(x,(0,i.Z)({style:(0,i.Z)({opacity:0,visibility:"exited"!==t||b?void 0:"hidden"},d[t],T,x.props.style),ref:P},n))}}))}));n.Z=f},9860:function(t,n,e){e.d(n,{Z:function(){return r}});e(7313);var i=e(6728),o=e(2248);function r(){return(0,i.Z)(o.Z)}},265:function(t,n,e){e.d(n,{C:function(){return o},n:function(){return i}});var i=function(t){return t.scrollTop};function o(t,n){var e,i,o=t.timeout,r=t.easing,s=t.style,a=void 0===s?{}:s;return{duration:null!=(e=a.transitionDuration)?e:"number"===typeof o?o:o[n.mode]||0,easing:null!=(i=a.transitionTimingFunction)?i:"object"===typeof r?r[n.mode]:r,delay:a.transitionDelay}}},596:function(t,n,e){e.d(n,{ZP:function(){return m}});var i=e(3366),o=e(4578),r=e(7313),s=e(1168),a=!1,u=e(10),l="unmounted",p="exited",c="entering",d="entered",f="exiting",E=function(t){function n(n,e){var i;i=t.call(this,n,e)||this;var o,r=e&&!e.isMounting?n.enter:n.appear;return i.appearStatus=null,n.in?r?(o=p,i.appearStatus=c):o=d:o=n.unmountOnExit||n.mountOnEnter?l:p,i.state={status:o},i.nextCallback=null,i}(0,o.Z)(n,t),n.getDerivedStateFromProps=function(t,n){return t.in&&n.status===l?{status:p}:null};var e=n.prototype;return e.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},e.componentDidUpdate=function(t){var n=null;if(t!==this.props){var e=this.state.status;this.props.in?e!==c&&e!==d&&(n=c):e!==c&&e!==d||(n=f)}this.updateStatus(!1,n)},e.componentWillUnmount=function(){this.cancelNextCallback()},e.getTimeouts=function(){var t,n,e,i=this.props.timeout;return t=n=e=i,null!=i&&"number"!==typeof i&&(t=i.exit,n=i.enter,e=void 0!==i.appear?i.appear:n),{exit:t,enter:n,appear:e}},e.updateStatus=function(t,n){if(void 0===t&&(t=!1),null!==n)if(this.cancelNextCallback(),n===c){if(this.props.unmountOnExit||this.props.mountOnEnter){var e=this.props.nodeRef?this.props.nodeRef.current:s.findDOMNode(this);e&&function(t){t.scrollTop}(e)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===p&&this.setState({status:l})},e.performEnter=function(t){var n=this,e=this.props.enter,i=this.context?this.context.isMounting:t,o=this.props.nodeRef?[i]:[s.findDOMNode(this),i],r=o[0],u=o[1],l=this.getTimeouts(),p=i?l.appear:l.enter;!t&&!e||a?this.safeSetState({status:d},(function(){n.props.onEntered(r)})):(this.props.onEnter(r,u),this.safeSetState({status:c},(function(){n.props.onEntering(r,u),n.onTransitionEnd(p,(function(){n.safeSetState({status:d},(function(){n.props.onEntered(r,u)}))}))})))},e.performExit=function(){var t=this,n=this.props.exit,e=this.getTimeouts(),i=this.props.nodeRef?void 0:s.findDOMNode(this);n&&!a?(this.props.onExit(i),this.safeSetState({status:f},(function(){t.props.onExiting(i),t.onTransitionEnd(e.exit,(function(){t.safeSetState({status:p},(function(){t.props.onExited(i)}))}))}))):this.safeSetState({status:p},(function(){t.props.onExited(i)}))},e.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},e.safeSetState=function(t,n){n=this.setNextCallback(n),this.setState(t,n)},e.setNextCallback=function(t){var n=this,e=!0;return this.nextCallback=function(i){e&&(e=!1,n.nextCallback=null,t(i))},this.nextCallback.cancel=function(){e=!1},this.nextCallback},e.onTransitionEnd=function(t,n){this.setNextCallback(n);var e=this.props.nodeRef?this.props.nodeRef.current:s.findDOMNode(this),i=null==t&&!this.props.addEndListener;if(e&&!i){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[e,this.nextCallback],r=o[0],a=o[1];this.props.addEndListener(r,a)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},e.render=function(){var t=this.state.status;if(t===l)return null;var n=this.props,e=n.children,o=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,(0,i.Z)(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.createElement(u.Z.Provider,{value:null},"function"===typeof e?e(t,o):r.cloneElement(r.Children.only(e),o))},n}(r.Component);function h(){}E.contextType=u.Z,E.propTypes={},E.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:h,onEntering:h,onEntered:h,onExit:h,onExiting:h,onExited:h},E.UNMOUNTED=l,E.EXITED=p,E.ENTERING=c,E.ENTERED=d,E.EXITING=f;var m=E}}]);