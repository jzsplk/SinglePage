!function(e,$){"use strict";var n=function(){var n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],l,r={},t,u;for(t=0;t<n.length;t++)if((l=n[t])&&l[1]in e){for(u=0;u<l.length;u++)r[n[0][u]]=l[u];return r}return!1}();if(!n)return void($&&$.fancybox&&($.fancybox.defaults.btnTpl.fullScreen=!1));var l={request:function(l){l=l||e.documentElement,l[n.requestFullscreen](l.ALLOW_KEYBOARD_INPUT)},exit:function(){e[n.exitFullscreen]()},toggle:function(n){n=n||e.documentElement,this.isFullscreen()?this.exit():this.request(n)},isFullscreen:function(){return Boolean(e[n.fullscreenElement])},enabled:function(){return Boolean(e[n.fullscreenEnabled])}};$.extend(!0,$.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 h22 v16 h-22 v-16 v16 h22 v-16 Z" /></svg></button>'},fullScreen:{autoStart:!1}}),$(e).on({"onInit.fb":function(e,n){var r;n&&n.group[n.currIndex].opts.fullScreen?(r=n.$refs.container,r.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(e){e.stopPropagation(),e.preventDefault(),l.toggle(r[0])}),n.opts.fullScreen&&!0===n.opts.fullScreen.autoStart&&l.request(r[0]),n.FullScreen=l):n&&n.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()},"afterKeydown.fb":function(e,n,l,r,t){n&&n.FullScreen&&70===t&&(r.preventDefault(),n.FullScreen.toggle(n.$refs.container[0]))},"beforeClose.fb":function(e){e&&e.FullScreen&&l.exit()}}),$(e).on(n.fullscreenchange,function(){var e=l.isFullscreen(),n=$.fancybox.getInstance();n&&(n.current&&"image"===n.current.type&&n.isAnimating&&(n.current.$content.css("transition","none"),n.isAnimating=!1,n.update(!0,!0,0)),n.trigger("onFullscreenChange",e),n.$refs.container.toggleClass("fancybox-is-fullscreen",e))})}(document,window.jQuery||jQuery);