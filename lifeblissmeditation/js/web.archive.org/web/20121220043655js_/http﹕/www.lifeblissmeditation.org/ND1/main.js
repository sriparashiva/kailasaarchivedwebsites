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

var searchLink;
var searchError;

function startList() {
	
	var opsys = (navigator.userAgent.indexOf('Mac') == -1)
	if(document.all&&document.getElementById&&opsys) {
		navRoot = document.getElementById("nav");
		if(navRoot != null) {
			for(i=0; i<navRoot.childNodes.length; i++) {
				node = navRoot.childNodes[i];
				if(node.nodeName=="LI") {
					node.onmouseover=function() {
						this.className+=" over";
					}
					node.onmouseout=function() {
						this.className=this.className.replace(" over", "");
					}
				}
			}
		}
	}
}

function PopIt(url,width,height,options){
	if(typeof(url)!='undefined'){
		if(typeof(width)=='undefined')width=600;
		if(typeof(height)=='undefined')height=500;
		if(typeof(options)=='undefined')options='status=no,scrollbars=auto,location=no,menubar=no,resizable=yes,toolbar=0';
		window.open(url,'chopra','width='+width+',height='+height+','+options);
	}
} 

function sendSearch() {
	var st = document.getElementById("st");
	
	if(st != null) {
		var val = st.value;

		if(val!=''){
			document.location.href='https://web.archive.org/web/20121220043655/http://search.chopra.com/search?entqr=0&output=xml_no_dtd&sort=date%3AD%3AL%3Ad1&entsp=0&lr=lang_en&client=www_chopra&ud=1&oe=UTF-8&ie=UTF-8&proxystylesheet=www_chopra&site=www_chopra&q=' + val;
			return false;
		}
		else{
			alert("Please enter search keyword.");
		}
	}
}

function sendEmail() {
	var em = document.getElementById("em");
	
	if(em != null) {
		var val = em.value;

		if(val!=''){
			document.location.href='/124444.html?e=' + val;
			return false;
		}
		else{
			alert("Please enter email address.");
		}
	}
}


function submitSearchOnEnter() {
	if (event.keyCode == 13)  {
		sendSearch();
		return false;
	}
}

function submitEmailOnEnter() {
	if (event.keyCode == 13)  {
		sendEmail();
		return false;
	}
}


window.onload=startList;


}
/*
     FILE ARCHIVED ON 04:36:55 Dec 20, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:15:53 Mar 21, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.133
  captures_list: 75.462
  LoadShardBlock: 46.297 (3)
  RedisCDXSource: 0.54
  PetaboxLoader3.datanode: 44.798 (4)
  esindex: 0.01
  PetaboxLoader3.resolve: 39.513
  exclusion.robots.policy: 0.124
  CDXLines.iter: 24.711 (3)
  load_resource: 72.671
*/