!function(t,n,$){"use strict";var e=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(n){return t.setTimeout(n,1e3/60)}}(),o=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(n){t.clearTimeout(n)}}(),i=function(n){var e=[];n=n.originalEvent||n||t.e,n=n.touches&&n.touches.length?n.touches:n.changedTouches&&n.changedTouches.length?n.changedTouches:[n];for(var o in n)n[o].pageX?e.push({x:n[o].pageX,y:n[o].pageY}):n[o].clientX&&e.push({x:n[o].clientX,y:n[o].clientY});return e},s=function(t,n,e){return n&&t?"x"===e?t.x-n.x:"y"===e?t.y-n.y:Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2)):0},a=function(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea')||$.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var n=0,e=t[0].attributes,o=e.length;n<o;n++)if("data-fancybox-"===e[n].nodeName.substr(0,14))return!0;return!1},c=function(n){var e=t.getComputedStyle(n)["overflow-y"],o=t.getComputedStyle(n)["overflow-x"],i=("scroll"===e||"auto"===e)&&n.scrollHeight>n.clientHeight,s=("scroll"===o||"auto"===o)&&n.scrollWidth>n.clientWidth;return i||s},r=function(t){for(var n=!1;;){if(n=c(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return n},l=function(t){var n=this;n.instance=t,n.$bg=t.$refs.bg,n.$stage=t.$refs.stage,n.$container=t.$refs.container,n.destroy(),n.$container.on("touchstart.fb.touch mousedown.fb.touch",$.proxy(n,"ontouchstart"))};l.prototype.destroy=function(){this.$container.off(".fb.touch")},l.prototype.ontouchstart=function(e){var o=this,c=$(e.target),l=o.instance,u=l.current,p=u.$content,h="touchstart"==e.type;if(h&&o.$container.off("mousedown.fb.touch"),(!e.originalEvent||2!=e.originalEvent.button)&&c.length&&!a(c)&&!a(c.parent())&&(c.is("img")||!(e.originalEvent.clientX>c[0].clientWidth+c.offset().left))){if(!u||o.instance.isAnimating||o.instance.isClosing)return e.stopPropagation(),void e.preventDefault();if(o.realPoints=o.startPoints=i(e),o.startPoints){if(e.stopPropagation(),o.startEvent=e,o.canTap=!0,o.$target=c,o.$content=p,o.opts=u.opts.touch,o.isPanning=!1,o.isSwiping=!1,o.isZooming=!1,o.isScrolling=!1,o.sliderStartPos=o.sliderLastPos||{top:0,left:0},o.contentStartPos=$.fancybox.getTranslate(o.$content),o.contentLastPos=null,o.startTime=(new Date).getTime(),o.distanceX=o.distanceY=o.distance=0,o.canvasWidth=Math.round(u.$slide[0].clientWidth),o.canvasHeight=Math.round(u.$slide[0].clientHeight),$(n).off(".fb.touch").on(h?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",$.proxy(o,"ontouchend")).on(h?"touchmove.fb.touch":"mousemove.fb.touch",$.proxy(o,"ontouchmove")),$.fancybox.isMobile&&n.addEventListener("scroll",o.onscroll,!0),!o.opts&&!l.canPan()||!c.is(o.$stage)&&!o.$stage.find(c).length)return void(c.is("img")&&e.preventDefault());$.fancybox.isMobile&&(r(c)||r(c.parent()))||e.preventDefault(),1===o.startPoints.length&&("image"===u.type&&(o.contentStartPos.width>o.canvasWidth+1||o.contentStartPos.height>o.canvasHeight+1)?($.fancybox.stop(o.$content),o.$content.css("transition-duration",""),o.isPanning=!0):o.isSwiping=!0,o.$container.addClass("fancybox-controls--isGrabbing")),2!==o.startPoints.length||l.isAnimating||u.hasError||"image"!==u.type||!u.isLoaded&&!u.$ghost||(o.canTap=!1,o.isSwiping=!1,o.isPanning=!1,o.isZooming=!0,$.fancybox.stop(o.$content),o.$content.css("transition-duration",""),o.centerPointStartX=.5*(o.startPoints[0].x+o.startPoints[1].x)-$(t).scrollLeft(),o.centerPointStartY=.5*(o.startPoints[0].y+o.startPoints[1].y)-$(t).scrollTop(),o.percentageOfImageAtPinchPointX=(o.centerPointStartX-o.contentStartPos.left)/o.contentStartPos.width,o.percentageOfImageAtPinchPointY=(o.centerPointStartY-o.contentStartPos.top)/o.contentStartPos.height,o.startDistanceBetweenFingers=s(o.startPoints[0],o.startPoints[1]))}}},l.prototype.onscroll=function(t){self.isScrolling=!0},l.prototype.ontouchmove=function(t){var n=this,e=$(t.target);if(n.isScrolling||!e.is(n.$stage)&&!n.$stage.find(e).length)return void(n.canTap=!1);n.newPoints=i(t),(n.opts||n.instance.canPan())&&n.newPoints&&n.newPoints.length&&(n.isSwiping&&!0===n.isSwiping||t.preventDefault(),n.distanceX=s(n.newPoints[0],n.startPoints[0],"x"),n.distanceY=s(n.newPoints[0],n.startPoints[0],"y"),n.distance=s(n.newPoints[0],n.startPoints[0]),n.distance>0&&(n.isSwiping?n.onSwipe(t):n.isPanning?n.onPan():n.isZooming&&n.onZoom()))},l.prototype.onSwipe=function(n){var i=this,s=i.isSwiping,a=i.sliderStartPos.left||0,c;if(!0!==s)"x"==s&&(i.distanceX>0&&(i.instance.group.length<2||0===i.instance.current.index&&!i.instance.current.opts.loop)?a+=Math.pow(i.distanceX,.8):i.distanceX<0&&(i.instance.group.length<2||i.instance.current.index===i.instance.group.length-1&&!i.instance.current.opts.loop)?a-=Math.pow(-i.distanceX,.8):a+=i.distanceX),i.sliderLastPos={top:"x"==s?0:i.sliderStartPos.top+i.distanceY,left:a},i.requestId&&(o(i.requestId),i.requestId=null),i.requestId=e(function(){i.sliderLastPos&&($.each(i.instance.slides,function(t,n){var e=n.pos-i.instance.currPos;$.fancybox.setTranslate(n.$slide,{top:i.sliderLastPos.top,left:i.sliderLastPos.left+e*i.canvasWidth+e*n.opts.gutter})}),i.$container.addClass("fancybox-is-sliding"))});else if(Math.abs(i.distance)>10){if(i.canTap=!1,i.instance.group.length<2&&i.opts.vertical?i.isSwiping="y":i.instance.isDragging||!1===i.opts.vertical||"auto"===i.opts.vertical&&$(t).width()>800?i.isSwiping="x":(c=Math.abs(180*Math.atan2(i.distanceY,i.distanceX)/Math.PI),i.isSwiping=c>45&&c<135?"y":"x"),i.canTap=!1,"y"===i.isSwiping&&$.fancybox.isMobile&&(r(i.$target)||r(i.$target.parent())))return void(i.isScrolling=!0);i.instance.isDragging=i.isSwiping,i.startPoints=i.newPoints,$.each(i.instance.slides,function(t,n){$.fancybox.stop(n.$slide),n.$slide.css("transition-duration",""),n.inTransition=!1,n.pos===i.instance.current.pos&&(i.sliderStartPos.left=$.fancybox.getTranslate(n.$slide).left)}),i.instance.SlideShow&&i.instance.SlideShow.isActive&&i.instance.SlideShow.stop()}},l.prototype.onPan=function(){var t=this;if(s(t.newPoints[0],t.realPoints[0])<($.fancybox.isMobile?10:5))return void(t.startPoints=t.newPoints);t.canTap=!1,t.contentLastPos=t.limitMovement(),t.requestId&&(o(t.requestId),t.requestId=null),t.requestId=e(function(){$.fancybox.setTranslate(t.$content,t.contentLastPos)})},l.prototype.limitMovement=function(){var t=this,n=t.canvasWidth,e=t.canvasHeight,o=t.distanceX,i=t.distanceY,s=t.contentStartPos,a=s.left,c=s.top,r=s.width,l=s.height,u,p,h,d,g,f;return g=r>n?a+o:a,f=c+i,u=Math.max(0,.5*n-.5*r),p=Math.max(0,.5*e-.5*l),h=Math.min(n-r,.5*n-.5*r),d=Math.min(e-l,.5*e-.5*l),r>n&&(o>0&&g>u&&(g=u-1+Math.pow(-u+a+o,.8)||0),o<0&&g<h&&(g=h+1-Math.pow(h-a-o,.8)||0)),l>e&&(i>0&&f>p&&(f=p-1+Math.pow(-p+c+i,.8)||0),i<0&&f<d&&(f=d+1-Math.pow(d-c-i,.8)||0)),{top:f,left:g,scaleX:s.scaleX,scaleY:s.scaleY}},l.prototype.limitPosition=function(t,n,e,o){var i=this,s=i.canvasWidth,a=i.canvasHeight;return e>s?(t=t>0?0:t,t=t<s-e?s-e:t):t=Math.max(0,s/2-e/2),o>a?(n=n>0?0:n,n=n<a-o?a-o:n):n=Math.max(0,a/2-o/2),{top:n,left:t}},l.prototype.onZoom=function(){var n=this,i=n.contentStartPos.width,a=n.contentStartPos.height,c=n.contentStartPos.left,r=n.contentStartPos.top,l=s(n.newPoints[0],n.newPoints[1]),u=l/n.startDistanceBetweenFingers,p=Math.floor(i*u),h=Math.floor(a*u),d=(i-p)*n.percentageOfImageAtPinchPointX,g=(a-h)*n.percentageOfImageAtPinchPointY,f=(n.newPoints[0].x+n.newPoints[1].x)/2-$(t).scrollLeft(),P=(n.newPoints[0].y+n.newPoints[1].y)/2-$(t).scrollTop(),m=f-n.centerPointStartX,y=P-n.centerPointStartY,b=c+(d+m),v=r+(g+y),w={top:v,left:b,scaleX:n.contentStartPos.scaleX*u,scaleY:n.contentStartPos.scaleY*u};n.canTap=!1,n.newWidth=p,n.newHeight=h,n.contentLastPos=w,n.requestId&&(o(n.requestId),n.requestId=null),n.requestId=e(function(){$.fancybox.setTranslate(n.$content,n.contentLastPos)})},l.prototype.ontouchend=function(t){var e=this,s=Math.max((new Date).getTime()-e.startTime,1),a=e.isSwiping,c=e.isPanning,r=e.isZooming,l=e.isScrolling;if(e.endPoints=i(t),e.$container.removeClass("fancybox-controls--isGrabbing"),$(n).off(".fb.touch"),n.removeEventListener("scroll",e.onscroll,!0),e.requestId&&(o(e.requestId),e.requestId=null),e.isSwiping=!1,e.isPanning=!1,e.isZooming=!1,e.isScrolling=!1,e.instance.isDragging=!1,e.canTap)return e.onTap(t);e.speed=366,e.velocityX=e.distanceX/s*.5,e.velocityY=e.distanceY/s*.5,e.speedX=Math.max(.5*e.speed,Math.min(1.5*e.speed,1/Math.abs(e.velocityX)*e.speed)),c?e.endPanning():r?e.endZooming():e.endSwiping(a,l)},l.prototype.endSwiping=function(t,n){var e=this,o=!1,i=e.instance.group.length;e.sliderLastPos=null,"y"==t&&!n&&Math.abs(e.distanceY)>50?($.fancybox.animate(e.instance.current.$slide,{top:e.sliderStartPos.top+e.distanceY+150*e.velocityY,opacity:0},150),o=e.instance.close(!0,300)):"x"==t&&e.distanceX>50&&i>1?o=e.instance.previous(e.speedX):"x"==t&&e.distanceX<-50&&i>1&&(o=e.instance.next(e.speedX)),!1!==o||"x"!=t&&"y"!=t||(n||i<2?e.instance.centerSlide(e.instance.current,150):e.instance.jumpTo(e.instance.current.index)),e.$container.removeClass("fancybox-is-sliding")},l.prototype.endPanning=function(){var t=this,n,e,o;t.contentLastPos&&(!1===t.opts.momentum?(n=t.contentLastPos.left,e=t.contentLastPos.top):(n=t.contentLastPos.left+t.velocityX*t.speed,e=t.contentLastPos.top+t.velocityY*t.speed),o=t.limitPosition(n,e,t.contentStartPos.width,t.contentStartPos.height),o.width=t.contentStartPos.width,o.height=t.contentStartPos.height,$.fancybox.animate(t.$content,o,330))},l.prototype.endZooming=function(){var t=this,n=t.instance.current,e,o,i,s,a=t.newWidth,c=t.newHeight;t.contentLastPos&&(e=t.contentLastPos.left,o=t.contentLastPos.top,s={top:o,left:e,width:a,height:c,scaleX:1,scaleY:1},$.fancybox.setTranslate(t.$content,s),a<t.canvasWidth&&c<t.canvasHeight?t.instance.scaleToFit(150):a>n.width||c>n.height?t.instance.scaleToActual(t.centerPointStartX,t.centerPointStartY,150):(i=t.limitPosition(e,o,a,c),$.fancybox.setTranslate(t.content,$.fancybox.getTranslate(t.$content)),$.fancybox.animate(t.$content,i,150)))},l.prototype.onTap=function(t){var n=this,e=$(t.target),o=n.instance,s=o.current,a=t&&i(t)||n.startPoints,c=a[0]?a[0].x-n.$stage.offset().left:0,r=a[0]?a[0].y-n.$stage.offset().top:0,l,u=function(e){var i=s.opts[e];if($.isFunction(i)&&(i=i.apply(o,[s,t])),i)switch(i){case"close":o.close(n.startEvent);break;case"toggleControls":o.toggleControls(!0);break;case"next":o.next();break;case"nextOrClose":o.group.length>1?o.next():o.close(n.startEvent);break;case"zoom":"image"==s.type&&(s.isLoaded||s.$ghost)&&(o.canPan()?o.scaleToFit():o.isScaledDown()?o.scaleToActual(c,r):o.group.length<2&&o.close(n.startEvent));break}};if((!t.originalEvent||2!=t.originalEvent.button)&&(e.is("img")||!(c>e[0].clientWidth+e.offset().left))){if(e.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))l="Outside";else if(e.is(".fancybox-slide"))l="Slide";else{if(!o.current.$content||!o.current.$content.find(e).addBack().filter(e).length)return;l="Content"}if(n.tapped){if(clearTimeout(n.tapped),n.tapped=null,Math.abs(c-n.tapX)>50||Math.abs(r-n.tapY)>50)return this;u("dblclick"+l)}else n.tapX=c,n.tapY=r,s.opts["dblclick"+l]&&s.opts["dblclick"+l]!==s.opts["click"+l]?n.tapped=setTimeout(function(){n.tapped=null,u("click"+l)},500):u("click"+l);return this}},$(n).on("onActivate.fb",function(t,n){n&&!n.Guestures&&(n.Guestures=new l(n))})}(window,document,window.jQuery||jQuery);