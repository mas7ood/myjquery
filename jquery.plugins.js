
/*! jQuery jCarouselLite - v1.8 - 2012-07-22
 * http://kswedberg.github.com/jquery-carousel-lite/
 * Copyright (c) 2012 Karl Swedberg; Licensed MIT, GPL
 */
;(function(a){function b(a,b){return b.autoStop&&(b.circular?b.autoStop:Math.min(a,b.autoStop))}function c(a){this.id&&(this.id+=a)}a.jCarouselLite={version:"1.8",curr:0},a.fn.jCarouselLite=function(d){var e=a.extend(!0,{},a.fn.jCarouselLite.defaults,d),f=Math.ceil,g=Math.abs;return this.each(function(){function W(){return M.slice(O).slice(0,A)}function X(b,c){if(q)return!1;c=c||{};var d=O,f=b>O,g=c.speed||e.speed,h=c.offset||0;return e.beforeStart&&e.beforeStart.call(this,W(),f),e.circular?(b>O&&b>N-A?(O=O%y,b=b-y,w.css(r,-O*n.liSize-h)):b<O&&b<0&&(O+=y,b+=y,w.css(r,-O*n.liSize-h)),O=b+b%1):(b<0?b=0:b>N-B&&(b=N-B),O=b,e.btnPrev&&e.$btnPrev.toggleClass(e.btnDisabledClass,O===0),e.btnNext&&e.$btnNext.toggleClass(e.btnDisabledClass,O===N-B)),L(O,F),a.jCarouselLite.curr=O,d===O&&!c.force?(e.afterEnd&&e.afterEnd.call(this,W(),f),O):(q=!0,s[r]=-(O*n.liSize),w.animate(s,g,e.easing,function(){e.afterEnd&&e.afterEnd.call(this,W(),f),q=!1}),O)}var d,h,i,j,k,l,m,n={div:{},ul:{},li:{}},p=!0,q=!1,r=e.vertical?"top":"left",s={},t=e.vertical?"height":"width",u=this,v=a(this),w=v.find("ul").eq(0),x=w.children("li"),y=x.length,z=e.visible,A=f(z),B=Math.floor(z),C=Math.min(e.start,y-1),D=1,E=0,F={},G={},H={},I=e.vertical?"y":"x",J=e.vertical?"x":"y",K=e.init.call(this,e,x);if(K===!1)return;v.data("dirjc",D),e.circular&&(d=x.slice(y-A).clone(!0).each(c),h=x.slice(0,A).clone(!0).each(c),w.prepend(d).append(h),C+=A,E=A);var L=function(b,c){b=f(b);var d,g=(b-E)%y,h=g+B;return c.go&&(d=a(e.btnGo),d.removeClass(e.activeClass).removeClass(e.visibleClass),d.eq(g).addClass(e.activeClass),d.slice(g,g+B).addClass(e.visibleClass),h>d.length&&d.slice(0,h-d.length).addClass(e.visibleClass)),c.pager&&(i.removeClass(e.activeClass),i.eq(f(g/z)).addClass(e.activeClass)),g},M=w.children("li"),N=M.length,O=C;a.jCarouselLite.curr=O;var P=function(a){var b,c,d;return a?(n.div[t]="",n.li={width:"",height:""},n):(b=e.vertical?M.outerHeight(!0):M.outerWidth(!0),c=b*N,d=b*z,n.div[t]=d+"px",n.ul[t]=c+"px",n.ul[r]=-(O*b)+"px",n.li={width:M.width(),height:M.height()},n.liSize=b,n)},Q=function(b){var c,d={div:{visibility:"visible",overflow:"hidden",position:"relative",zIndex:2,left:"0"},ul:{margin:"0",padding:"0",position:"relative",listStyleType:"none",zIndex:1},li:{overflow:e.vertical?"hidden":"visible","float":e.vertical?"none":"left"}};b&&(c=P(!0),v.css(c.div),w.css(c.ul),M.css(c.li)),c=P(),e.autoCSS&&(p&&(a.extend(!0,c,d),p=!1),M.css(c.li),w.css(c.ul),v.css(c.div))};Q();var R=0,S=b(y,e),T=typeof e.auto=="number"?e.auto:e.scroll,U=function(){u.setAutoAdvance=setTimeout(function(){if(!S||S>R)D=v.data("dirjc"),X(O+D*T),R++,U()},e.timeout)};a.each(["btnPrev","btnNext"],function(b,c){e[c]&&(e["$"+c]=a.isFunction(e[c])?e[c].call(v[0]):a(e[c]),e["$"+c].bind("click.jc",function(a){a.preventDefault();var c=b===0?O-e.scroll:O+e.scroll;return e.directional&&v.data("dirjc",b?1:-1),X(c)}))}),e.circular||(e.btnPrev&&C===0&&e.$btnPrev.addClass(e.btnDisabledClass),e.btnNext&&C+B>=N&&e.$btnNext.addClass(e.btnDisabledClass)),e.btnGo&&(a.each(e.btnGo,function(b,c){a(c).bind("click.jc",function(a){return a.preventDefault(),X(e.circular?z+b:b)})}),F.go=1);if(e.autoPager){j=f(y/z),i=[];for(var V=0;V<j;V++)i.push('<li><a href="#">'+(V+1)+"</a></li>");i.length>1&&(i=a("<ul>"+i.join("")+"</ul>").appendTo(e.autoPager).find("li")),i.find("a").each(function(b){a(this).bind("click.jc",function(a){a.preventDefault();var c=b*z;return e.circular&&(c+=z),X(c)})}),F.pager=1}L(C,F),e.mouseWheel&&v.mousewheel&&v.bind("mousewheel.jc",function(a,b){return b>0?X(O-e.scroll):X(O+e.scroll)}),e.pause&&e.auto&&v.bind("mouseenter.jc",function(){v.trigger("pauseCarousel.jc")}).bind("mouseleave.jc",function(){v.trigger("resumeCarousel.jc")}),e.auto&&U(),a.jCarouselLite.vis=W,v.bind("go.jc",function(a,b,c){typeof b=="undefined"&&(b="+=1");var d=typeof b=="string"&&/(\+=|-=)(\d+)/.exec(b);d?b=d[1]=="-="?O-d[2]*1:O+d[2]*1:b+=C,X(b,c)}).bind("startCarousel.jc",function(a){clearTimeout(u.setAutoAdvance),u.setAutoAdvance=undefined,v.trigger("go","+="+e.scroll),U(),v.removeData("pausedjc").removeData("stoppedjc")}).bind("resumeCarousel.jc",function(a,b){if(u.setAutoAdvance)return;clearTimeout(u.setAutoAdvance),u.setAutoAdvance=undefined;var c=v.data("stoppedjc");if(b||!c)U(),v.removeData("pausedjc"),c&&v.removeData("stoppedjc")}).bind("pauseCarousel.jc",function(a){clearTimeout(u.setAutoAdvance),u.setAutoAdvance=undefined,v.data("pausedjc",!0)}).bind("stopCarousel.jc",function(a){clearTimeout(u.setAutoAdvance),u.setAutoAdvance=undefined,v.data("stoppedjc",!0)}).bind("refreshCarousel.jc",function(a){Q(e.autoCSS)}).bind("endCarousel.jc",function(){u.setAutoAdvance&&(clearTimeout(u.setAutoAdvance),u.setAutoAdvance=undefined),e.btnPrev&&e.$btnPrev.addClass(e.btnDisabledClass).unbind(".jc"),e.btnNext&&e.$btnNext.addClass(e.btnDisabledClass).unbind(".jc"),e.btnGo&&a.each(e.btnGo,function(b,c){a(c).unbind(".jc")}),a.each(["pausedjc","stoppedjc","dirjc"],function(a,b){v.removeData(b)}),v.unbind(".jc")}),m={touchstart:function(a){G.x=a.targetTouches[0].pageX,G.y=a.targetTouches[0].pageY,G[r]=parseFloat(w.css(r)),G.time=+(new Date)},touchmove:function(a){var b=a.targetTouches.length;b===1?(a.preventDefault(),H.x=a.targetTouches[0].pageX,H.y=a.targetTouches[0].pageY,s[r]=G[r]+(H[I]-G[I]),w.css(s)):H=G},touchend:function(a){if(!H.x)return;var b=G[I]-H[I],c=g(b),d=c>e.swipeThresholds[I],f=g(G[J]-H[J])<e.swipeThresholds[J],h=+(new Date)-G.time,i=h<e.swipeThresholds.time,j=b>0?"+=":"-=",k=j+e.scroll,l={force:!0};i&&d&&f?l.speed=e.speed/2:!i&&c<n.liSize/2||!d||i&&!f?k="+=0":!i&&c>n.liSize/2&&(k=Math.round(c/n.liSize),k=j+(k>e.visible?e.visible:k),l.offset=b),v.trigger("go.jc",[k,l]),H={}}},"ontouchend"in document&&e.swipe&&v.bind("touchstart touchmove touchend",function(a){a=a.originalEvent,m[a.type](a)}),e.responsive&&(l=e.autoCSS,a(window).bind("resize",function(a){l&&(w.width(w.width()*2),l=!1),clearTimeout(k),k=setTimeout(function(){v.trigger("refreshCarousel"),l=e.autoCSS},100)}))}),this},a.fn.jCarouselLite.defaults={autoCSS:!0,btnPrev:null,btnNext:null,btnGo:null,autoPager:null,btnDisabledClass:"disabled",activeClass:"active",visibleClass:"vis",mouseWheel:!1,speed:200,easing:null,timeout:4e3,auto:!1,directional:!1,autoStop:!1,pause:!0,vertical:!1,circular:!0,visible:3,start:0,scroll:1,responsive:!0,swipe:!0,swipeThresholds:{x:80,y:120,time:150},init:function(){},beforeStart:null,afterEnd:null}})(jQuery);
