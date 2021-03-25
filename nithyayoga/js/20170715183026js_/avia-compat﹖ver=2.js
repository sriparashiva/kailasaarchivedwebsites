var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/* 
	this prevents dom flickering for elements hidden with js, needs to be outside of dom.ready event.also adds several extra classes for better browser support 
	this is a separate file that needs to be loaded at the top of the page. other js functions are loaded before the closing body tag to make the site render faster
*/
"use strict"
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && 'ontouchstart' in document.documentElement)
{
	document.documentElement.className += ' avia_mobile ';
}
else
{
	document.documentElement.className += ' avia_desktop ';
}
document.documentElement.className += ' js_active ';

(function(){
    var prefix = ['-webkit-','-moz-', '-ms-', ""];
    for (var i in prefix)
    { 
    	// http://artsy.github.io/blog/2012/10/18/so-you-want-to-do-a-css3-3d-transform/
    	if(prefix[i]+'transform' in document.documentElement.style) document.documentElement.className += " avia_transform "; 
    	if(prefix[i]+'perspective' in document.documentElement.style) document.documentElement.className += " avia_transform3d "; 
	}
})();

}
/*
     FILE ARCHIVED ON 18:30:26 Jul 15, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:03:49 Mar 22, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 275.483
  exclusion.robots: 0.162
  exclusion.robots.policy: 0.154
  RedisCDXSource: 30.396
  esindex: 0.012
  LoadShardBlock: 221.635 (3)
  PetaboxLoader3.datanode: 224.899 (4)
  CDXLines.iter: 20.043 (3)
  PetaboxLoader3.resolve: 118.416 (2)
  load_resource: 187.024
*/