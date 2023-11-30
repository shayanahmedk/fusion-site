/* Page scroll to id - version 1.7.8 */
!function(O,x,c,e){var n,M,s,i,l,a,o,r,u,h,t,d,p="mPageScroll2id",b="mPS2id",g={scrollSpeed:1e3,autoScrollSpeed:!0,scrollEasing:"easeInOutQuint",scrollingEasing:"easeOutQuint",pageEndSmoothScroll:!0,layout:"vertical",offset:0,highlightSelector:!1,clickedClass:b+"-clicked",targetClass:b+"-target",highlightClass:b+"-highlight",forceSingleHighlight:!1,keepHighlightUntilNext:!1,highlightByNextTarget:!1,disablePluginBelow:!1,clickEvents:!0,appendHash:!1,onStart:function(){},onComplete:function(){},defaultSelector:!1,live:!0,liveSelector:!1,excludeSelectors:!1,encodeLinks:!1,inIframe:!1},f=0,_=/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,w={init:function(e){e=O.extend(!0,{},g,e);if(O(c).data(b,e),M=O(c).data(b),!this.selector){var t="__"+b;this.each(function(){var e=O(this);e.hasClass(t)||e.addClass(t)}),this.selector="."+t}M.liveSelector&&(this.selector+=","+M.liveSelector),n=n?n+","+this.selector:this.selector,M.defaultSelector&&("object"==typeof O(n)&&0!==O(n).length||(n=".m_PageScroll2id,a[rel~='m_PageScroll2id'],.page-scroll-to-id,a[rel~='page-scroll-to-id'],._ps2id")),M.clickEvents&&O(c).off("."+b).on("click."+b,n,function(e){if(m._isDisabled.call(null))m._removeClasses.call(null);else{var t=O(this),n=t.attr("href"),s=t.prop("href").baseVal||t.prop("href");M.excludeSelectors&&t.is(M.excludeSelectors)||n&&-1!==n.indexOf("#/")||(m._reset.call(null),h=t.data("ps2id-offset")||0,m._isValid.call(null,n,s)&&m._findTarget.call(null,n)&&(e.preventDefault(),i="selector",l=t,m._setClasses.call(null,!0),m._scrollTo.call(null)))}}),O(x).off("."+b).on("scroll."+b+" resize."+b,function(){if(m._isDisabled.call(null))m._removeClasses.call(null);else{var i=O("._"+b+"-t");i.each(function(e){var t=O(this),n=t.attr("id"),s=m._findHighlight.call(null,n);m._setClasses.call(null,!1,t,s),e==i.length-1&&m._extendClasses.call(null)})}}),s=!0,m._setup.call(null),m._live.call(null)},scrollTo:function(e,t){if(m._isDisabled.call(null))m._removeClasses.call(null);else if(e&&void 0!==e){m._isInit.call(null);var n={layout:M.layout,offset:M.offset,clicked:!1};t=O.extend(!0,{},n,t);m._reset.call(null),r=t.layout,u=t.offset,e=-1!==e.indexOf("#")?e:"#"+e,m._isValid.call(null,e)&&m._findTarget.call(null,e)&&(i="scrollTo",(l=t.clicked)&&m._setClasses.call(null,!0),m._scrollTo.call(null))}},destroy:function(){O(x).off("."+b),O(c).off("."+b).removeData(b),O("._"+b+"-t").removeData(b),m._removeClasses.call(null,!0)}},m={_isDisabled:function(){var e=x,t="inner",n=M.disablePluginBelow instanceof Array?[M.disablePluginBelow[0]||0,M.disablePluginBelow[1]||0]:[M.disablePluginBelow||0,0];return"innerWidth"in x||(t="client",e=c.documentElement||c.body),e[t+"Width"]<=n[0]||e[t+"Height"]<=n[1]},_isValid:function(e,t){if(e){var n=-1!==(t=t||e).indexOf("#/")?t.split("#/")[0]:t.split("#")[0],s=(M.inIframe||x.location===x.parent.location?x.location:x.parent.location).toString().split("#")[0];return"#"!==e&&-1!==e.indexOf("#")&&(""===n||decodeURIComponent(n)===decodeURIComponent(s))}},_setup:function(){var l=m._highlightSelector(),o=1,r=0;return O(l).each(function(){var e=O(this),t=e.attr("href"),n=e.prop("href").baseVal||e.prop("href");if(m._isValid.call(null,t,n)){if(M.excludeSelectors&&e.is(M.excludeSelectors))return;var s=-1!==t.indexOf("#/")?t.split("#/")[1]:t.substring(t.indexOf("#")+1),i=_.test(s)?O(c.getElementById(s)):O("#"+s);if(0<i.length){M.highlightByNextTarget&&i!==r&&(r?r.data(b,{tn:i}):i.data(b,{tn:"0"}),r=i),i.hasClass("_"+b+"-t")||i.addClass("_"+b+"-t"),i.data(b,{i:o}),e.hasClass("_"+b+"-h")||e.addClass("_"+b+"-h");var a=m._findHighlight.call(null,s);m._setClasses.call(null,!1,i,a),f=o,++o==O(l).length&&m._extendClasses.call(null)}}})},_highlightSelector:function(){return M.highlightSelector&&""!==M.highlightSelector?M.highlightSelector:n},_findTarget:function(e){var t=-1!==e.indexOf("#/")?e.split("#/")[1]:e.substring(e.indexOf("#")+1),n=_.test(t)?O(c.getElementById(t)):O("#"+t);if(n.length<1||"fixed"===n.css("position")){if("top"!==t)return;n=O("body")}return a=n,r||(r=M.layout),u=m._setOffset.call(null),(o=[(n.offset().top-u[0]).toString(),(n.offset().left-u[1]).toString()])[0]=o[0]<0?0:o[0],o[1]=o[1]<0?0:o[1],o},_setOffset:function(){var e,t,n,s;switch(u||(u=M.offset?M.offset:0),h&&(u=h),typeof u){case"object":case"string":0<(t=[(e=[u.y?u.y:u,u.x?u.x:u])[0]instanceof jQuery?e[0]:O(e[0]),e[1]instanceof jQuery?e[1]:O(e[1])])[0].length?(n=t[0].height(),"fixed"===t[0].css("position")&&(n+=t[0][0].offsetTop)):n=!isNaN(parseFloat(e[0]))&&isFinite(e[0])?parseInt(e[0]):0,0<t[1].length?(s=t[1].width(),"fixed"===t[1].css("position")&&(s+=t[1][0].offsetLeft)):s=!isNaN(parseFloat(e[1]))&&isFinite(e[1])?parseInt(e[1]):0;break;case"function":(e=u.call(null))instanceof Array?(n=e[0],s=e[1]):n=s=e;break;default:n=s=parseInt(u)}return[n,s]},_findHighlight:function(e){var t=M.inIframe||x.location===x.parent.location?x.location:x.parent.location,n=t.toString().split("#")[0],s=t.pathname;if(-1!==n.indexOf("'")&&(n=n.replace("'","\\'")),-1!==s.indexOf("'")&&(s=s.replace("'","\\'")),n=decodeURIComponent(n),s=decodeURIComponent(s),M.encodeLinks){var i=encodeURI(n).toLowerCase(),a=encodeURI(s).toLowerCase();return O("._"+b+"-h[href='#"+e+"'],._"+b+"-h[href='"+n+"#"+e+"'],._"+b+"-h[href='"+s+"#"+e+"'],._"+b+"-h[href='#/"+e+"'],._"+b+"-h[href='"+n+"#/"+e+"'],._"+b+"-h[href='"+s+"#/"+e+"'],._"+b+"-h[href='"+i+"#/"+e+"'],._"+b+"-h[href='"+i+"#"+e+"'],._"+b+"-h[href='"+a+"#/"+e+"'],._"+b+"-h[href='"+a+"#"+e+"']")}return O("._"+b+"-h[href='#"+e+"'],._"+b+"-h[href='"+n+"#"+e+"'],._"+b+"-h[href='"+s+"#"+e+"'],._"+b+"-h[href='#/"+e+"'],._"+b+"-h[href='"+n+"#/"+e+"'],._"+b+"-h[href='"+s+"#/"+e+"']")},_setClasses:function(e,t,n){var s=M.clickedClass,i=M.targetClass,a=M.highlightClass;e&&s&&""!==s?(O("."+s).removeClass(s),l.addClass(s)):t&&i&&""!==i&&n&&a&&""!==a&&(m._currentTarget.call(null,t)?(t.addClass(i),n.addClass(a)):(!M.keepHighlightUntilNext||1<O("."+a).length)&&(t.removeClass(i),n.removeClass(a)))},_extendClasses:function(){var e=M.targetClass,t=M.highlightClass,n=O("."+e),s=O("."+t),i=e+"-first",a=e+"-last",l=t+"-first",o=t+"-last";O("._"+b+"-t").removeClass(i+" "+a),O("._"+b+"-h").removeClass(l+" "+o),M.forceSingleHighlight?M.keepHighlightUntilNext&&1<n.length?(n.slice(0,1).removeClass(e),s.slice(0,1).removeClass(t)):(n.slice(1).removeClass(e),s.slice(1).removeClass(t)):(n.slice(0,1).addClass(i).end().slice(-1).addClass(a),s.slice(0,1).addClass(l).end().slice(-1).addClass(o))},_removeClasses:function(e){O("."+M.clickedClass).removeClass(M.clickedClass),O("."+M.targetClass).removeClass(M.targetClass+" "+M.targetClass+"-first "+M.targetClass+"-last"),O("."+M.highlightClass).removeClass(M.highlightClass+" "+M.highlightClass+"-first "+M.highlightClass+"-last"),e&&(O("._"+b+"-t").removeClass("_"+b+"-t"),O("._"+b+"-h").removeClass("_"+b+"-h"))},_currentTarget:function(e){if(e.data(b)){var t=M["target_"+e.data(b).i],n=e.data("ps2id-target"),s=n&&O(n)[0]?O(n)[0].getBoundingClientRect():e[0].getBoundingClientRect();if(void 0!==t){var i=e.offset().top,a=e.offset().left,l=t.from?t.from+i:i,o=t.to?t.to+i:i,r=t.fromX?t.fromX+a:a,c=t.toX?t.toX+a:a;return s.top>=o&&s.top<=l&&s.left>=c&&s.left<=r}var u=O(x).height(),h=O(x).width(),d=n?O(n).height():e.height(),p=n?O(n).width():e.width(),g=1+d/u,f=g,_=d<u?g*(u/d):g,w=1+p/h,m=w,S=p<h?w*(h/p):w,I=[s.top<=u/f,s.bottom>=u/_,s.left<=h/m,s.right>=h/S];if(M.highlightByNextTarget){var v=e.data(b).tn;if(v){var C=v[0].getBoundingClientRect();"vertical"===M.layout?I=[s.top<=u/2,C.top>u/2,1,1]:"horizontal"===M.layout&&(I=[1,1,s.left<=h/2,C.left>h/2])}}return I[0]&&I[1]&&I[2]&&I[3]}},_scrollTo:function(){d=m._scrollSpeed.call(null),o=M.pageEndSmoothScroll?m._pageEndSmoothScroll.call(null):o;var e=O("html,body"),t=M.autoScrollSpeed?m._autoScrollSpeed.call(null):d,n=e.is(":animated")?M.scrollingEasing:M.scrollEasing,s=O(x).scrollTop(),i=O(x).scrollLeft();switch(r){case"horizontal":i!=o[1]&&(m._callbacks.call(null,"onStart"),e.stop().animate({scrollLeft:o[1]},t,n).promise().then(function(){m._callbacks.call(null,"onComplete")}));break;case"auto":var a;if(s!=o[0]||i!=o[1])if(m._callbacks.call(null,"onStart"),navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/))e.stop().animate({pageYOffset:o[0],pageXOffset:o[1]},{duration:t,easing:n,step:function(e,t){"pageXOffset"==t.prop?a=e:"pageYOffset"==t.prop&&x.scrollTo(a,e)}}).promise().then(function(){m._callbacks.call(null,"onComplete")});else e.stop().animate({scrollTop:o[0],scrollLeft:o[1]},t,n).promise().then(function(){m._callbacks.call(null,"onComplete")});break;default:s!=o[0]&&(m._callbacks.call(null,"onStart"),e.stop().animate({scrollTop:o[0]},t,n).promise().then(function(){m._callbacks.call(null,"onComplete")}))}},_pageEndSmoothScroll:function(){var e=O(c).height(),t=O(c).width(),n=O(x).height(),s=O(x).width();return[e-o[0]<n?e-n:o[0],t-o[1]<s?t-s:o[1]]},_scrollSpeed:function(){var s=M.scrollSpeed;return l&&l.length&&l.add(l.parent()).each(function(){var e=O(this);if(e.attr("class")){var t=e.attr("class").split(" ");for(var n in t)if(String(t[n]).match(/^ps2id-speed-\d+$/)){s=t[n].split("ps2id-speed-")[1];break}}}),parseInt(s)},_autoScrollSpeed:function(){var e=O(x).scrollTop(),t=O(x).scrollLeft(),n=O(c).height(),s=O(c).width(),i=[d+d*Math.floor(Math.abs(o[0]-e)/n*100)/100,d+d*Math.floor(Math.abs(o[1]-t)/s*100)/100];return Math.max.apply(Math,i)},_callbacks:function(e){if(M)switch(this[b]={trigger:i,clicked:l,target:a,scrollTo:{y:o[0],x:o[1]}},e){case"onStart":if(M.appendHash&&x.history&&x.history.pushState&&l&&l.length){var t=l.attr("href"),n="#"+t.substring(t.indexOf("#")+1);n!==x.location.hash&&history.pushState("","",n)}M.onStart.call(null,this[b]);break;case"onComplete":M.onComplete.call(null,this[b])}},_reset:function(){r=u=h=!1},_isInit:function(){s||w.init.apply(this)},_live:function(){t=setTimeout(function(){M.live?O(m._highlightSelector()).length!==f&&m._setup.call(null):t&&clearTimeout(t),m._live.call(null)},1e3)},_easing:function(){function t(e){var t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375}O.easing.easeInQuad=O.easing.easeInQuad||function(e){return e*e},O.easing.easeOutQuad=O.easing.easeOutQuad||function(e){return 1-(1-e)*(1-e)},O.easing.easeInOutQuad=O.easing.easeInOutQuad||function(e){return e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2},O.easing.easeInCubic=O.easing.easeInCubic||function(e){return e*e*e},O.easing.easeOutCubic=O.easing.easeOutCubic||function(e){return 1-Math.pow(1-e,3)},O.easing.easeInOutCubic=O.easing.easeInOutCubic||function(e){return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2},O.easing.easeInQuart=O.easing.easeInQuart||function(e){return e*e*e*e},O.easing.easeOutQuart=O.easing.easeOutQuart||function(e){return 1-Math.pow(1-e,4)},O.easing.easeInOutQuart=O.easing.easeInOutQuart||function(e){return e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2},O.easing.easeInQuint=O.easing.easeInQuint||function(e){return e*e*e*e*e},O.easing.easeOutQuint=O.easing.easeOutQuint||function(e){return 1-Math.pow(1-e,5)},O.easing.easeInOutQuint=O.easing.easeInOutQuint||function(e){return e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2},O.easing.easeInExpo=O.easing.easeInExpo||function(e){return 0===e?0:Math.pow(2,10*e-10)},O.easing.easeOutExpo=O.easing.easeOutExpo||function(e){return 1===e?1:1-Math.pow(2,-10*e)},O.easing.easeInOutExpo=O.easing.easeInOutExpo||function(e){return 0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2},O.easing.easeInSine=O.easing.easeInSine||function(e){return 1-Math.cos(e*Math.PI/2)},O.easing.easeOutSine=O.easing.easeOutSine||function(e){return Math.sin(e*Math.PI/2)},O.easing.easeInOutSine=O.easing.easeInOutSine||function(e){return-(Math.cos(Math.PI*e)-1)/2},O.easing.easeInCirc=O.easing.easeInCirc||function(e){return 1-Math.sqrt(1-Math.pow(e,2))},O.easing.easeOutCirc=O.easing.easeOutCirc||function(e){return Math.sqrt(1-Math.pow(e-1,2))},O.easing.easeInOutCirc=O.easing.easeInOutCirc||function(e){return e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2},O.easing.easeInElastic=O.easing.easeInElastic||function(e){return 0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*(2*Math.PI/3))},O.easing.easeOutElastic=O.easing.easeOutElastic||function(e){return 0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*(2*Math.PI/3))+1},O.easing.easeInOutElastic=O.easing.easeInOutElastic||function(e){return 0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*(2*Math.PI/4.5))/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*(2*Math.PI/4.5))/2+1},O.easing.easeInBack=O.easing.easeInBack||function(e){return 2.70158*e*e*e-1.70158*e*e},O.easing.easeOutBack=O.easing.easeOutBack||function(e){return 1+2.70158*Math.pow(e-1,3)+1.70158*Math.pow(e-1,2)},O.easing.easeInOutBack=O.easing.easeInOutBack||function(e){return e<.5?Math.pow(2*e,2)*(7.189819*e-2.5949095)/2:(Math.pow(2*e-2,2)*(3.5949095*(2*e-2)+2.5949095)+2)/2},O.easing.easeInBounce=O.easing.easeInBounce||function(e){return 1-t(1-e)},O.easing.easeOutBounce=O.easing.easeOutBounce||t,O.easing.easeInOutBounce=O.easing.easeInOutBounce||function(e){return e<.5?(1-t(1-2*e))/2:(1+t(2*e-1))/2}}};m._easing.call(),O.fn[p]=function(e){return w[e]?w[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void O.error("Method "+e+" does not exist"):w.init.apply(this,arguments)},O[p]=function(e){return w[e]?w[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void O.error("Method "+e+" does not exist"):w.init.apply(this,arguments)},O[p].defaults=g}(jQuery,window,document),function(o){var r,c="mPS2id",u=mPS2id_params,h=u.shortcode_class,d=location.hash||null,s=/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,p=function(e,t){var n=e.substring(e.indexOf("#")+1);try{s.test(n)?o(document.getElementById(n)):o("#"+n)}catch(e){return!1}return(s.test(n)?o(document.getElementById(n)):o("#"+n)).length&&(t||o("a[href*='#"+n+"']").filter(function(){return 1==o(this).data(c+"Element")}).length)},g=function(e){if(-1===e.indexOf(","))return e;var t=e.split(",");return{y:t[0]||"0",x:t[1]||"0"}},f=function(e){if(-1===e.indexOf(","))return e;var t=e.split(",");return[t[0]||"0",t[1]||"0"]},_=function(e){"horizontal"!==e&&o(window).scrollTop(0),"vertical"!==e&&o(window).scrollLeft(0)},w=function(e,t){for(var n=e.click.length-1;0<=n;n--){var s=e.click[n];s&&"mPS2id"!=s.namespace&&("a[href*=#]"===s.selector?s.selector="a[href*=#]:not(._mPS2id-h)":'a[href*="#"]'===s.selector?s.selector='a[href*="#"]:not(._mPS2id-h)':"a[href*=#]:not([href=#])"===s.selector?s.selector="a[href*=#]:not([href=#]):not(._mPS2id-h)":'a[href*="#"]:not([href="#"])'===s.selector?s.selector='a[href*="#"]:not([href="#"]):not(._mPS2id-h)':s.selector&&-1!==s.selector.indexOf("mobmenu")?t.off("click"):t.off("click",s.handler))}},m="a[data-ps2id-api='true'][href*='#'],.ps2id > a[href*='#'],a.ps2id[href*='#']";function t(e){var t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375}o(function(){for(var e=0;e<u.total_instances;e++){var t=o("[class*='ps2id-id-']");if(t.length&&t.each(function(){var e,t=o(this),n=t.attr("class").split(" ");if(!t.attr("id"))for(var s in n)if(String(n[s]).match(/^ps2id-id-\S+$/)){e=n[s].split("ps2id-id-")[1],o("#"+e).length||t.attr("id",e);break}}),"true"===u.instances[c+"_instance_"+e].scrollToHash&&d&&(o(u.instances[c+"_instance_"+e].selector+",."+h+","+m).not(u.instances[c+"_instance_"+e].excludeSelector).each(function(){o(this).data(c+"Element",!0)}),p(d,"true"===u.instances[c+"_instance_"+e].scrollToHashForAll))){var n="true"===u.instances[c+"_instance_"+e].scrollToHashRemoveUrlHash?window.location.href.replace(/#.*$/,""):window.location.href.replace(/#.*$/,"#");_(u.instances[c+"_instance_"+e].layout),window.history&&window.history.replaceState?window.history.replaceState("","",n):window.location.href=n}}o("html").css("scroll-behavior","auto"),window.twentytwenty&&window.twentytwenty.smoothScroll&&(window.twentytwenty.smoothScroll=null)}),o(window).on("load",function(){for(var e=0;e<u.total_instances;e++){0<=u.instances[c+"_instance_"+e].selector.indexOf("a[href*=#]:not([href=#])")&&console.log("ps2id selector issue: a[href*=#]:not([href=#]) selector needs quotes"),0<=u.instances[c+"_instance_"+e].excludeSelector.indexOf("a[href*=#]:not([href=#])")&&console.log("ps2id excluded selector issue: a[href*=#]:not([href=#]) selector needs quotes");var n=o(u.instances[c+"_instance_"+e].selector+",."+h+","+m),t=u.instances[c+"_instance_"+e].autoCorrectScroll,s=0,i=u.instances[c+"_instance_"+e].autoCorrectScrollExtend;if(window.ps2id_special_params&&(window.ps2id_special_params.highlightSelector&&(u.instances[c+"_instance_"+e].highlightSelector=window.ps2id_special_params.highlightSelector),window.ps2id_special_params.scrollSpeed&&(u.instances[c+"_instance_"+e].scrollSpeed=window.ps2id_special_params.scrollSpeed),window.ps2id_special_params.scrollEasing&&(u.instances[c+"_instance_"+e].scrollEasing=window.ps2id_special_params.scrollEasing),void 0!==window.ps2id_special_params.forceSingleHighlight&&(u.instances[c+"_instance_"+e].forceSingleHighlight=window.ps2id_special_params.forceSingleHighlight),void 0!==window.ps2id_special_params.keepHighlightUntilNext&&(u.instances[c+"_instance_"+e].keepHighlightUntilNext=window.ps2id_special_params.keepHighlightUntilNext),void 0!==window.ps2id_special_params.appendHash&&(u.instances[c+"_instance_"+e].appendHash=window.ps2id_special_params.appendHash),window.ps2id_special_params.layout&&(u.instances[c+"_instance_"+e].layout=window.ps2id_special_params.layout),window.ps2id_special_params.offset&&(u.instances[c+"_instance_"+e].offset=window.ps2id_special_params.offset)),n.mPageScroll2id({scrollSpeed:u.instances[c+"_instance_"+e].scrollSpeed,autoScrollSpeed:"true"===u.instances[c+"_instance_"+e].autoScrollSpeed,scrollEasing:"true"===u.instances[c+"_instance_"+e].forceScrollEasing?"ps2id_"+u.instances[c+"_instance_"+e].scrollEasing:u.instances[c+"_instance_"+e].scrollEasing,scrollingEasing:"true"===u.instances[c+"_instance_"+e].forceScrollEasing?"ps2id_"+u.instances[c+"_instance_"+e].scrollingEasing:u.instances[c+"_instance_"+e].scrollingEasing,pageEndSmoothScroll:"true"===u.instances[c+"_instance_"+e].pageEndSmoothScroll,layout:u.instances[c+"_instance_"+e].layout,offset:g(u.instances[c+"_instance_"+e].offset.toString()),highlightSelector:u.instances[c+"_instance_"+e].highlightSelector,clickedClass:u.instances[c+"_instance_"+e].clickedClass,targetClass:u.instances[c+"_instance_"+e].targetClass,highlightClass:u.instances[c+"_instance_"+e].highlightClass,forceSingleHighlight:"true"===u.instances[c+"_instance_"+e].forceSingleHighlight,keepHighlightUntilNext:"true"===u.instances[c+"_instance_"+e].keepHighlightUntilNext,highlightByNextTarget:"true"===u.instances[c+"_instance_"+e].highlightByNextTarget,disablePluginBelow:f(u.instances[c+"_instance_"+e].disablePluginBelow.toString()),appendHash:"true"===u.instances[c+"_instance_"+e].appendHash,onStart:function(){"true"===t&&"selector"===mPS2id.trigger&&s++,"true"===i&&(r=[mPS2id.target.offset().top,mPS2id.target.offset().left])},onComplete:function(){"true"===i?r[0]===mPS2id.target.offset().top&&r[1]===mPS2id.target.offset().left||("selector"===mPS2id.trigger&&mPS2id.clicked.length?mPS2id.clicked.trigger("click.mPS2id"):o.mPageScroll2id("scrollTo",mPS2id.target.attr("id"))):1==s&&(mPS2id.clicked.length&&mPS2id.clicked.trigger("click.mPS2id"),s=0)},excludeSelectors:u.instances[c+"_instance_"+e].excludeSelector,encodeLinks:"true"===u.instances[c+"_instance_"+e].encodeLinks,liveSelector:u.instances[c+"_instance_"+e].selector+",."+h+","+m}),"true"===u.instances[c+"_instance_"+e].scrollToHash&&d&&p(d,"true"===u.instances[c+"_instance_"+e].scrollToHashForAll)){_(u.instances[c+"_instance_"+e].layout);var a=u.instances[c+"_instance_"+e].scrollToHashUseElementData,l=o("a._mPS2id-h[href$='"+d+"'][data-ps2id-offset]:not([data-ps2id-offset=''])").last();setTimeout(function(){"true"===a&&l.length?l.trigger("click.mPS2id"):o.mPageScroll2id("scrollTo",d),-1!==window.location.href.indexOf("#")&&(window.history&&window.history.replaceState?window.history.replaceState("","",d):window.location.hash=d)},u.instances[c+"_instance_"+e].scrollToHashDelay)}o(".ps2id-auto-scroll[id]").length&&!window.location.hash&&setTimeout(function(){o.mPageScroll2id("scrollTo",o(".ps2id-auto-scroll[id]").attr("id"))},u.instances[c+"_instance_"+e].scrollToHashDelay),"true"!==u.instances[c+"_instance_"+e].unbindUnrelatedClickEvents||u.instances[c+"_instance_"+e].unbindUnrelatedClickEventsSelector||setTimeout(function(){var e=n.length?o._data(n[0],"events"):null,t=n.length?o._data(o(document)[0],"events"):null;e&&w(e,n),t&&w(t,n)},300),"true"===u.instances[c+"_instance_"+e].normalizeAnchorPointTargets&&o("a._mPS2id-t[id]:empty").css({display:"inline-block","line-height":0,width:0,height:0,border:"none"}),"true"===u.instances[c+"_instance_"+e].stopScrollOnUserAction&&o(document).on("mousewheel DOMMouseScroll touchmove",function(){var e=o("html,body");e.is(":animated")&&e.stop()})}}),o.expr.pseudos?o.extend(o.expr.pseudos,{absolute:o.expr.pseudos.absolute||function(e){return"absolute"===o(e).css("position")},relative:o.expr.pseudos.relative||function(e){return"relative"===o(e).css("position")},static:o.expr.pseudos.static||function(e){return"static"===o(e).css("position")},fixed:o.expr.pseudos.fixed||function(e){return"fixed"===o(e).css("position")},sticky:o.expr.pseudos.sticky||function(e){return"sticky"===o(e).css("position")},width:o.expr.pseudos.width||function(e,t,n){var s=n[3].replace("&lt;","<").replace("&gt;",">");return!!s&&(">"===s.substr(0,1)?o(e).width()>s.substr(1):"<"===s.substr(0,1)?o(e).width()<s.substr(1):o(e).width()===parseInt(s))},height:o.expr.pseudos.height||function(e,t,n){var s=n[3].replace("&lt;","<").replace("&gt;",">");return!!s&&(">"===s.substr(0,1)?o(e).height()>s.substr(1):"<"===s.substr(0,1)?o(e).height()<s.substr(1):o(e).height()===parseInt(s))}}):o.extend(o.expr[":"],{absolute:o.expr[":"].absolute||function(e){return"absolute"===o(e).css("position")},relative:o.expr[":"].relative||function(e){return"relative"===o(e).css("position")},static:o.expr[":"].static||function(e){return"static"===o(e).css("position")},fixed:o.expr[":"].fixed||function(e){return"fixed"===o(e).css("position")},width:o.expr[":"].width||function(e,t,n){var s=n[3].replace("&lt;","<").replace("&gt;",">");return!!s&&(">"===s.substr(0,1)?o(e).width()>s.substr(1):"<"===s.substr(0,1)?o(e).width()<s.substr(1):o(e).width()===parseInt(s))},height:o.expr[":"].height||function(e,t,n){var s=n[3].replace("&lt;","<").replace("&gt;",">");return!!s&&(">"===s.substr(0,1)?o(e).height()>s.substr(1):"<"===s.substr(0,1)?o(e).height()<s.substr(1):o(e).height()===parseInt(s))}}),o.easing.ps2id_easeInQuad=o.easing.ps2id_easeInQuad||function(e){return e*e},o.easing.ps2id_easeOutQuad=o.easing.ps2id_easeOutQuad||function(e){return 1-(1-e)*(1-e)},o.easing.ps2id_easeInOutQuad=o.easing.ps2id_easeInOutQuad||function(e){return e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2},o.easing.ps2id_easeInCubic=o.easing.ps2id_easeInCubic||function(e){return e*e*e},o.easing.ps2id_easeOutCubic=o.easing.ps2id_easeOutCubic||function(e){return 1-Math.pow(1-e,3)},o.easing.ps2id_easeInOutCubic=o.easing.ps2id_easeInOutCubic||function(e){return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2},o.easing.ps2id_easeInQuart=o.easing.ps2id_easeInQuart||function(e){return e*e*e*e},o.easing.ps2id_easeOutQuart=o.easing.ps2id_easeOutQuart||function(e){return 1-Math.pow(1-e,4)},o.easing.ps2id_easeInOutQuart=o.easing.ps2id_easeInOutQuart||function(e){return e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2},o.easing.ps2id_easeInQuint=o.easing.ps2id_easeInQuint||function(e){return e*e*e*e*e},o.easing.ps2id_easeOutQuint=o.easing.ps2id_easeOutQuint||function(e){return 1-Math.pow(1-e,5)},o.easing.ps2id_easeInOutQuint=o.easing.ps2id_easeInOutQuint||function(e){return e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2},o.easing.ps2id_easeInExpo=o.easing.ps2id_easeInExpo||function(e){return 0===e?0:Math.pow(2,10*e-10)},o.easing.ps2id_easeOutExpo=o.easing.ps2id_easeOutExpo||function(e){return 1===e?1:1-Math.pow(2,-10*e)},o.easing.ps2id_easeInOutExpo=o.easing.ps2id_easeInOutExpo||function(e){return 0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2},o.easing.ps2id_easeInSine=o.easing.ps2id_easeInSine||function(e){return 1-Math.cos(e*Math.PI/2)},o.easing.ps2id_easeOutSine=o.easing.ps2id_easeOutSine||function(e){return Math.sin(e*Math.PI/2)},o.easing.ps2id_easeInOutSine=o.easing.ps2id_easeInOutSine||function(e){return-(Math.cos(Math.PI*e)-1)/2},o.easing.ps2id_easeInCirc=o.easing.ps2id_easeInCirc||function(e){return 1-Math.sqrt(1-Math.pow(e,2))},o.easing.ps2id_easeOutCirc=o.easing.ps2id_easeOutCirc||function(e){return Math.sqrt(1-Math.pow(e-1,2))},o.easing.ps2id_easeInOutCirc=o.easing.ps2id_easeInOutCirc||function(e){return e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2},o.easing.ps2id_easeInElastic=o.easing.ps2id_easeInElastic||function(e){return 0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*(2*Math.PI/3))},o.easing.ps2id_easeOutElastic=o.easing.ps2id_easeOutElastic||function(e){return 0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*(2*Math.PI/3))+1},o.easing.ps2id_easeInOutElastic=o.easing.ps2id_easeInOutElastic||function(e){return 0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*(2*Math.PI/4.5))/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*(2*Math.PI/4.5))/2+1},o.easing.ps2id_easeInBack=o.easing.ps2id_easeInBack||function(e){return 2.70158*e*e*e-1.70158*e*e},o.easing.ps2id_easeOutBack=o.easing.ps2id_easeOutBack||function(e){return 1+2.70158*Math.pow(e-1,3)+1.70158*Math.pow(e-1,2)},o.easing.ps2id_easeInOutBack=o.easing.ps2id_easeInOutBack||function(e){return e<.5?Math.pow(2*e,2)*(7.189819*e-2.5949095)/2:(Math.pow(2*e-2,2)*(3.5949095*(2*e-2)+2.5949095)+2)/2},o.easing.ps2id_easeInBounce=o.easing.ps2id_easeInBounce||function(e){return 1-t(1-e)},o.easing.ps2id_easeOutBounce=o.easing.ps2id_easeOutBounce||t,o.easing.ps2id_easeInOutBounce=o.easing.ps2id_easeInOutBounce||function(e){return e<.5?(1-t(1-2*e))/2:(1+t(2*e-1))/2}}(jQuery);