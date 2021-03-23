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

var currentFontSize = 4;

function revertStyles(fontsize){
	currentFontSize = fontsize;
	changeFontSize(0);
}

function changeFontSize(sizeDifference){
	//get css font size
	var rule = getRuleByName("body.fs" + (currentFontSize + sizeDifference));
	if (rule){
		document.body.style.fontSize = rule.style.fontSize;
		currentFontSize = currentFontSize + sizeDifference;
		createCookie("FontSize", currentFontSize, 365);
		equalHeightInit();
	}
	return;
};

function getRuleByName(ruleName){
	for (i=0; i<document.styleSheets.length; i++){
		var style = document.styleSheets[i];
		var rules = style.cssRules?style.cssRules:style.rules;
		if (rules){
			for (j = 0; j<rules.length; j++){
				if (rules[j].selectorText.trim().toUpperCase() == ruleName.trim().toUpperCase()){
					return rules[j];
				}
			}
		}
	}
	return null;
}

function setActiveStyleSheet(title) {
	createCookie("ColorCSS", title, 365);
	//window.location.reload();
	window.location.reload();
	return;
}

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function setScreenType(screentype){
	bclass = document.body.className.trim();
	if (bclass.indexOf(' ') > 0){
		bclass = bclass.replace(/^\w+/,screentype);
	}else{
		bclass = screentype + ' ' + bclass;
	}

	document.body.className = bclass;
	equalHeightInit();
	jatabinit();
	createCookie("ScreenType", screentype, 365);
}

String.prototype.trim = function() { return this.replace(/^\s+|\s+$/g, ""); };

function changeToolHilite(oldtool, newtool) {
	if (oldtool != newtool) {
		if (oldtool) {
			oldtool.src = oldtool.src.replace(/-hilite/,'');
		}
		newtool.src = newtool.src.replace(/.gif$/,'-hilite.gif');
	}
}

//addEvent - attach a function to an event
function jaAddEvent(obj, evType, fn){ 
 if (obj.addEventListener){ 
   obj.addEventListener(evType, fn, false); 
   return true; 
 } else if (obj.attachEvent){ 
   var r = obj.attachEvent("on"+evType, fn); 
   return r; 
 } else { 
   return false; 
 } 
}

function equalHeight (elems, offset){
  if (!offset) offset = 0;
	if (!elems) return;
	var maxh = 0;
	for (var i=0; i<elems.length; i++)
	{
		if (elems[i] && elems[i].scrollHeight > maxh) maxh = elems[i].scrollHeight;
	}
	for (i=0; i<elems.length; i++){
		if (elems[i]) elems[i].parentNode.style.height = (maxh+offset) + "px";
	}
}

function getElem (id) {
	var obj = document.getElementById (id);
	if (!obj) return null;
	var divs = obj.getElementsByTagName ('div');
	if (divs && divs.length >= 1) return divs[divs.length - 1];
	return null;
}

function getFirstDiv (id) {
	var obj = document.getElementById (id);
	if (!obj) return null;
	var divs = obj.getElementsByTagName ('div');
	if (divs && divs.length >= 1) return divs[0];
	return obj;
}

function getDivElemsByClass (parent, className) {
	var objs = parent.getElementsByTagName ('div');
	var elems = new Array();
	var j = 0;
	for (var i=0; i<objs.length; i++)
	{
		if (instr(objs[i].className, className) )
		{
			elems[j++] = objs[i];
		}
	}
	return elems;
}

function instr(str, item){
	var arr = str.split(" ");
	for (var i = 0; i < arr.length; i++){
		if (arr[i] == item) return true;
	}
	return false;
}

function equalHeightInit (){
  var botsl = document.getElementById ('ja-botsl');
  if (botsl) {
	  var objs = getElementsByClass ('moduletable*', botsl, 'DIV');
	  equalHeight (objs, 0);
  }
  var topsl = document.getElementById ('ja-topsl');
  if (topsl) {
	  var objs = getElementsByClass ('moduletable*', topsl, 'DIV');
	  equalHeight (objs, 0);
  }
}

jaAddEvent (window, 'load', equalHeightInit);

jaToolsHover = function() {
	var jautw = document.getElementById("jausertoolswrap");	
	if (!jautw) return;

	jautw.onmouseover=function() {
		this.className="ja-toolswraphover";
	}
	jautw.onmouseout=function() {
		this.className="";
	}
}

jaAddEvent (window, 'load', jaToolsHover);

headerDuration = 100;
headerInt = 13;
headerStep = null;
headerTimeout = 0;
headerToggle = 1; //1: Expend, -1: collapse
tophd = null;
headerHeight = 0;
function toggleHeaderInit () {
  tophd = document.getElementById ('ja-topsl');
  tophdleft = document.getElementById ('ja-topsl-left');
  tophdright = document.getElementById ('ja-topsl-right');
  if (!tophd) return;

  obj = document.getElementById ('ja-topsl-left');
  if (obj && headerHeight < obj.scrollHeight) headerHeight = obj.scrollHeight;
  obj = document.getElementById ('ja-topsl1');
  if (obj && headerHeight < obj.scrollHeight) headerHeight = obj.scrollHeight;
  obj = document.getElementById ('ja-topsl2');
  if (obj && headerHeight < obj.scrollHeight) headerHeight = obj.scrollHeight;
  obj = document.getElementById ('ja-topsl3');
  if (obj && headerHeight < obj.scrollHeight) headerHeight = obj.scrollHeight;
//alert(headerHeight);
  headerStep = parseInt(headerHeight*headerInt / headerDuration);
  //headerTimeout = setTimeout (toggleHeaderGo, headerInt);
  if (headerToggle < 0) {
		headerToggle = 1;
		toggleHeader (null);
	}
}

function toggleHeader (aobj) {
  if (!tophd) return;
  headerToggle = -(headerToggle);
  if (aobj)
  {
	  if (headerToggle > 0)
	  {
		  aobj.className = "ja-cb";
		  aobj.href = "#collapse";
		  aobj.title = "Collapse Spotlight";
	  } else {
		  aobj.className = "ja-ob";
		  aobj.href = "#expend";
		  aobj.title = "Expend Spotlight";
	  }
  }
  if (headerToggle > 0) {
		tophd.style.display = "block";
	} else {
		tophd.style.overflow = "hidden";
		if (document.getElementById('ja-bigicon')) document.getElementById('ja-bigicon').style.display = "none";
	}
  headerTimeout = setTimeout (toggleHeaderGo, headerInt);
}

function toggleHeaderGo () {
  if (headerTimeout) {
    clearTimeout (headerTimeout);
    headerTimeout = 0;
  }
  if (!tophd) {
	  return;
  }
  headerTimeout = setTimeout (toggleHeaderGo, headerInt);
  var stop = false;
  var h = tophd.offsetHeight;
  h += headerStep * headerToggle;
  //alert(h);
  if (h <= 0){
    h = 0;
    tophd.style.display = "none";
    stop = true;      
  }
  if (h > headerHeight){
    //alert(tophd.scrollHeight);
    h = headerHeight;
    stop = true;
	 tophd.style.overflow = "";
	 tophd.style.display = "";
	 if (document.getElementById('ja-bigicon')) document.getElementById('ja-bigicon').style.display = "";
  }
  if (tophdleft) tophdleft.style.height = h + "px";
  if (tophdright) tophdright.style.height = h + "px";
  if (tophd) tophd.style.height = h + "px";
  
  if (stop) {
	clearTimeout (headerTimeout);
    headerTimeout = 0;
	createCookie("HeaderToggle", headerToggle, 365);
  }
}

function preloadImages () {
	var imgs = new Array();
	for (var i = 0; i < arguments.length; i++) {
		var imgsrc = arguments[i];
		imgs[i] = new Image();
		imgs[i].src = imgsrc;
	}
}


function getElementsByClass(searchClass,node,tag) {
	var classElements = new Array();
	var j = 0;
	if ( node == null )
		node = document;
	if ( tag == null )
		tag = '*';
	var els = node.getElementsByTagName(tag);
	var elsLen = els.length;
	var pattern = new RegExp('(^|\\s)'+searchClass+'(\\s|$)');
	for (var i = 0; i < elsLen; i++) {
		if ( pattern.test(els[i].className) ) {
			classElements[j] = els[i];
			j++;
		}
	}
	//alert(searchClass + j);
	return classElements;
}

function addMouseOver (className) {
	objs = getElementsByClass (className, document, 'DIV');
	if (objs){
		for (i=0; i<objs.length; i++){
			objs[i].onmouseover=function() {
				this.className+=" hover";
			}
			objs[i].onmouseout=function() {
				this.className=this.className.replace(new RegExp(" hover\\b"), "");
			}

		}
	}
}

function jashowtabcontent (obj) {
	var tabdisplay = document.getElementById ('ja-tab-content');
	if (!tabdisplay) return;
	var tabcontents = getElementsByClass ('ja-tab-content', obj, "DIV");
	if (!tabcontents) return;
	tabdisplay.innerHTML = tabcontents[0].innerHTML;
	jatabresetclass(obj);
}

function jatabresetclass (obj) {
	var jatab = document.getElementById ('ja-tabswrap');
  if (jatab) {
	  var lis = getElementsByClass ('ja-tab-li', jatab, "LI");
    if (!lis) return;
    for (var i=0; i<lis.length; i++) {
      lis[i].className = lis[i].className.replace(new RegExp(" ja-tab-hover\\b"), "");
    }
    obj.className += " ja-tab-hover";
  }
}

function jatabinit (){
	var jatab = document.getElementById ('ja-tabswrap');
  if (jatab) {
	  var tabcontents = getElementsByClass ('ja-tab-content', jatab, "DIV");
	  if (tabcontents) {
	   var tabdisplay = document.getElementById ('ja-tab-content');
	   var divobj = document.createElement ("DIV");

	   divobj.style.display = "block";
	   divobj.style.position = "absolute";
	   divobj.style.top = "-1000px";
	   divobj.style.width = tabdisplay.offsetWidth + "px";
	   document.body.appendChild (divobj);
	   var maxh = 0;
      for (var i=0; i<tabcontents.length; i++) {
        divobj.innerHTML = tabcontents[i].innerHTML;
        if (maxh < divobj.offsetHeight) maxh = divobj.offsetHeight;
      }
     tabdisplay.style.height = (maxh - 20) + "px"; 
	   document.body.removeChild (divobj);
    }
	  var lis = getElementsByClass ('ja-tab-li', jatab, "LI");
    if (!lis) return;
    jashowtabcontent (lis[0]);
    
  }
}

jaAddEvent (window, 'load', jatabinit);

function jaInitHover () {
  addMouseOver ('ja-newsitem-inner');
}
jaAddEvent (window, 'load', jaInitHover);


}
/*
     FILE ARCHIVED ON 06:31:18 Jun 13, 2010 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:16:32 Mar 13, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 204.205
  exclusion.robots: 0.114
  exclusion.robots.policy: 0.104
  RedisCDXSource: 5.998
  esindex: 0.009
  LoadShardBlock: 174.248 (3)
  PetaboxLoader3.datanode: 2601.431 (4)
  CDXLines.iter: 20.934 (3)
  load_resource: 2519.972
  PetaboxLoader3.resolve: 67.272
*/