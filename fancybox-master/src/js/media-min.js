!function($){"use strict";var e=function(e,a,t){if(e)return t=t||"","object"===$.type(t)&&(t=$.param(t,!0)),$.each(a,function(a,t){e=e.replace("$"+a,t||"")}),t.length&&(e+=(e.indexOf("?")>0?"&":"?")+t),e},a={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"//www.youtube.com/embed/$4",thumb:"//img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1,api:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},metacafe:{matcher:/metacafe.com\/watch\/(\d+)\/(.*)?/,type:"iframe",url:"//www.metacafe.com/embed/$1/?ap=1"},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:"iframe",url:"//www.dailymotion.com/embed/video/$1"},vine:{matcher:/vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,type:"iframe",url:"//vine.co/v/$1/embed/simple"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(e){return"//maps.google."+e[2]+"/?ll="+(e[9]?e[9]+"&z="+Math.floor(e[10])+(e[12]?e[12].replace(/^\//,"&"):""):e[12])+"&output="+(e[12]&&e[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(e){return"//maps.google."+e[2]+"/maps?q="+e[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}};$(document).on("objectNeedsType.fb",function(t,o,m){var r=m.src||"",i=!1,p,l,c,u,n,s,d;p=$.extend(!0,{},a,m.opts.media),$.each(p,function(a,t){if(c=r.match(t.matcher)){if(i=t.type,s={},t.paramPlace&&c[t.paramPlace]){n=c[t.paramPlace],"?"==n[0]&&(n=n.substring(1)),n=n.split("&");for(var o=0;o<n.length;++o){var p=n[o].split("=",2);2==p.length&&(s[p[0]]=decodeURIComponent(p[1].replace(/\+/g," ")))}}return u=$.extend(!0,{},t.params,m.opts[a],s),r="function"===$.type(t.url)?t.url.call(this,c,u,m):e(t.url,c,u),l="function"===$.type(t.thumb)?t.thumb.call(this,c,u,m):e(t.thumb,c),"vimeo"===a&&(r=r.replace("&%23","#")),!1}}),i?(m.src=r,m.type=i,m.opts.thumb||m.opts.$thumb&&m.opts.$thumb.length||(m.opts.thumb=l),"iframe"===i&&($.extend(!0,m.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}}),m.contentProvider=void 0,m.opts.slideClass+=" fancybox-slide--video")):r&&(m.type=m.opts.defaultType)})}(window.jQuery||jQuery);