	var gx_sb = {
		version: '1.09',
		intStart:0,
		isStarted:false,
		intOrder:0,
		rackCity:60,
		rackArray: [],
		heistArray: [],
		heistRestart:false,
		delaySbTimer: 0,
		isFirstLoada: true,
		isFirstLoadb: true,
		isFirstLoadc: true,
		isFirstLoadd: true,
		lastBank:new Date(),
		lastProp:new Date(),
		lastRacket:new Date(),
		lastHeist:new Date(),
		docoHttp: location.protocol,
		bookMarklets: new Array(
			{"BookmarkletName":"Inventory Analyser","URL":"https://invmanager.github.io/invmanager/InventoryAnalyzer.js"}
		),
		Imgs:{
			background: 'https://s3.amazonaws.com/metamoki-mobwars-content/newFbUI/misc/bg_fluid_container.jpg',
			close: 'https://s3.amazonaws.com/metamoki-mobwars-content/site/newui/bm_btn_close.png',
			arrow: 'data:image/gif;base64,R0lGODlhCgAIALMOAP/eLgMDAc+0Je3OKzw0C7SdICQfBvnZLaWQHmlbExIQA4d2GIp4GQ8NAwAAAAAAACH5BAEAAA4ALAAAAAAKAAgAQAQisIBJZ3Eu1YTdqhPTOcREdMYBAofhNEM1KF0gTEIwYggyRgA7',
			settings: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAQCAYAAAAbBi9cAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+VJREFUeNpUk3tsU1UYwL/23r7btevt1tGurGyzYy1udssYExTiAsNs6KL+oRAUQxyJGjX+YRwGJNEAGtE5EqKyf4j4NtaY6sAFGEMWZVjA6ZC5lY2ut93a28dun/fReg5pzDzJL/fkfPd7f58E0GldrSDQR4WosNY5XXtefvMFY1VNWzKdoxaDgRuhhbnhHz468D6S8wg1woBQIPKIBEaCjEjRRYkw1zc2uQ8d/2KAjmVsgUAA/vrt/NdFkfu9Zu19pH/Kd27MMxSpd7obHuvrf91krX2Q4wSg5/9558T+3UfJkocKbOTgh58N0PGsLRJlgE3EgImEszcufOtDcn8pGuuuVw5/oNAZG1KpdGbinOfj4dMDX6F3EkdjQtRtffLF5xO5om2ZTUEqGYdEPAaW2nt7kAynLcFRdz2+p51UlTXwggiUQQe+C5476L0cp0rsenZf797+gU/0lNnFRCJASCVALwRAEAR4xD2nzsVv3/IHslH0s3ZTz84ntJTVFQ3ToFSqZI3NrbJFOph67tDJt8mm9Zs7TUaKmg+G4Jexi4Fl+m+v1eHu2Vh1zdZUXQTHqx39kdgYf/0mGzVX1ztiSzSUabVQ4HNQWbO2s3vvG52ETLFE2CoNZemCfJt/dlZ2c+L80OzVn70zvlEvkZ5bMOskLVa7We1c57g/JDaLjpbNnRUmCnQ6LUhkKsjkOKCDAbh26cf3cNdqlAZLTZnZXr10axwXdhmBa7dqg1PR1dpW1z88ZVbT4SRs7e6FjVu2QzrNMsHb09dFgWPDd2Yun/38+E/YkLo0E7igXAlsqAqxjiwz7ptnCj0ajRrsdju0tXcwI58e249kYQQuNoOdY4UsIlkarAyiUDKstdrvqezrH2xWqfXAcRwwDANXfh2nGjd07SgNI9aLI9JEKCkCooix6Encai3C0vrAtk2P9h04qNKV2xqcLhgdOXO3kwRBgAiEw1K9mosvBqZKzvNYEVasiQYb2bJj5/aup156FymYigURTEZjxjf6/WA0wdoIktTzPA+68gq3WqeXpJjQDM7qP0MoGpwO9VDv7q6O7qePCoWiWkAKRSGf8Z4ePBKdm7yskPATaZ5oTWeyeo7jgVTqWqjKVSIbpSdXGrq7Kg8/89qpOBNdliPPApdHrT1z6srIN18i2ZyMkCxKhewfGZFsLxQLeqmUAK3B1LZmTe04Cf8/xRgTMxW4lDeZZKlYyH921DN0stQdFiFXySUgYxPHIqnM4SLaU1ejY37youfPlRHhOynXUnkBZOuT0cWrl7478RZ6Wyh1B4+FgJdXo5CG2SwX02lU08ng9BEQ+cC/AgwAf/qt++XczHgAAAAASUVORK5CYII=',
			health: 'https://s3.amazonaws.com/metamoki-mobwars-content/newFbUI/icons/ico_sm_health.png'
		},
		options:{
			autoBank:false,
			autoProp:false,
			autoMoney:true,
			ROI:false,
			onlybuy100:false,
			autoRacket:false,
			collectFull:false,
			collectNY:true,
			collectChi:true,
			collectLon:true,
			collectVeg:true,
			collectMos:true,  
			collectDub:true,
			collectSha:true,
			collectTok:true,
			autoRun:false,
			firstRun:false,
			autoHeists:false,
			statusBar:true,
			sideBar:false
		}
	};		

	document.title = 'Mob Wars Sidebar Addon.\u3024';

	jQuery('#mobwars_sideBarDiv').css({
		"width":"137px", "position": "fixed", "height":"130px", "left": jQuery('#container').offset().left-138, "top": "124px", "z-index": "1", "border":"1px solid #444", "border-right":"none", "border-top-left-radius":"10px", "border-bottom-left-radius": "39px", "background": "#333333", "background-image":"url("+gx_sb.Imgs.background+")"
	}).html(
		'<style type="text/css">'+
			'div.pop_box {'+
			'	background: #1a1a1a none repeat scroll 0 0;'+
			'	border: 2px solid #646100;'+
			'	border-radius: 8px;'+
			'	color: #fff;'+
			'	display: none;'+
			'	position: absolute;'+
			'	text-align: left;'+
			'	top: 100px;'+
			'	width: 650px;'+
			'	z-index: 50;'+
			'}'+
			'a.pop_close, a.pop_close:link {'+
			'	background: transparent url('+gx_sb.Imgs.close+') no-repeat scroll 0 0;'+
			'	display: block;'+
			'	height: 24px;'+
			'	position: absolute;'+
			'	right: 3px;'+
			'	text-decoration: none;'+
			'	top: 3px;'+
			'	width: 24px;'+
			'	z-index: 24;'+
			'}'+
			'a.pop_close:hover {'+
			'	border: medium none;'+
			'	text-decoration: none;'+
			'}'+
			'.gx_button {'+
			'	display: inline-block; background: #ffffff;'+
			'	-webkit-border-radius: 6px;'+
			'	-moz-border-radius: 6px;'+
			'	border-radius: 3px;'+
			'	font-size: 14px;'+
			'	font-weight: bold;'+
			'	height: 27px;'+
			'	line-height: 15px;'+
			'	padding: 0 0 0 3px;'+
			'	text-align: center;'+
			'	text-decoration: none;'+
			'	vertical-align: middle;'+
			'}'+
			'.gx_button span{'+
			'	background-position: 1000px 0;'+
			'	background-repeat: no-repeat;'+
			'	display: block;'+
			'	margin: 0;'+
			'	padding: 5px 12px 5px 9px;'+
			'}'+
			'.gx_button_black {'+
			'	background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(89,89,89,1)), color-stop(50%, rgba(60,60,60,1)), color-stop(51%, rgba(34,34,34,1)), color-stop(100%, rgba(2,2,2,1)));'+
			'	background: -webkit-linear-gradient(top, rgba(89,89,89,1) 0%, rgba(60,60,60,1) 50%, rgba(34,34,34,1) 51%, rgba(2,2,2,1) 100%);'+
			'	background: -moz-linear-gradient(top, rgba(89,89,89,1) 0%, rgba(60,60,60,1) 50%, rgba(34,34,34,1) 51%, rgba(2,2,2,1) 100%);'+
			'	background: -ms-linear-gradient(top, rgba(89,89,89,1) 0%, rgba(60,60,60,1) 50%, rgba(34,34,34,1) 51%, rgba(2,2,2,1) 100%);'+
			'	background: -o-linear-gradient(top, rgba(89,89,89,1) 0%, rgba(60,60,60,1) 50%, rgba(34,34,34,1) 51%, rgba(2,2,2,1) 100%);'+
			'	color: #ffffff;'+
			'}'+
			'.gx_button_black:hover {'+
			'	background: #595959;'+
			'}'+
			'.gx_button_white {'+
			'	background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(248,248,248,1)), color-stop(50%, rgba(235,235,235,1)), color-stop(51%, rgba(199,199,199,1)), color-stop(100%, rgba(156,156,156,1)));'+
			'	background: -webkit-linear-gradient(top, rgba(248,248,248,1) 0%, rgba(235,235,235,1) 50%, rgba(199,199,199,1) 51%, rgba(156,156,156,1) 100%);'+
			'	background: -moz-linear-gradient(top, rgba(248,248,248,1) 0%, rgba(235,235,235,1) 50%, rgba(199,199,199,1) 51%, rgba(156,156,156,1) 100%);'+
			'	background: -ms-linear-gradient(top, rgba(248,248,248,1) 0%, rgba(235,235,235,1) 50%, rgba(199,199,199,1) 51%, rgba(156,156,156,1) 100%);'+
			'	background: -o-linear-gradient(top, rgba(248,248,248,1) 0%, rgba(235,235,235,1) 50%, rgba(199,199,199,1) 51%, rgba(156,156,156,1) 100%);'+
			'	color: #000000;'+				
			'}'+
			'.gx_button_white:hover {'+
			'	background: #EBEBEB;'+
			'}'+
			'.gx_button_green {'+
			'	background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(200,250,125,1)), color-stop(50%, rgba(161,202,103,1)), color-stop(51%, rgba(114,171,34,1)), color-stop(100%, rgba(56,101,2,1)));'+
			'	background: -webkit-linear-gradient(top, rgba(200,250,125,1) 0%, rgba(161,202,103,1) 50%, rgba(114,171,34,1) 51%, rgba(56,101,2,1) 100%);'+
			'	background: -moz-linear-gradient(top, rgba(200,250,125,1) 0%, rgba(161,202,103,1) 50%, rgba(114,171,34,1) 51%, rgba(56,101,2,1) 100%);'+
			'	background: -ms-linear-gradient(top, rgba(200,250,125,1) 0%, rgba(161,202,103,1) 50%, rgba(114,171,34,1) 51%, rgba(56,101,2,1) 100%);'+
			'	background: -o-linear-gradient(top, rgba(200,250,125,1) 0%, rgba(161,202,103,1) 50%, rgba(114,171,34,1) 51%, rgba(56,101,2,1) 100%);'+
			'	color: #000000;'+
			'}'+
			'.gx_button_green:hover {'+
			'	background: #c8fa7d;'+
			'}'+
			'.gx_button_red {'+
			'	background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(252,78,51,1)), color-stop(50%, rgba(205,69,51,1)), color-stop(51%, rgba(185,22,0,1)), color-stop(100%, rgba(125,8,0,1)));'+
			'	background: -webkit-linear-gradient(top, rgba(252,78,51,1) 0%, rgba(205,69,51,1) 50%, rgba(185,22,0,1) 51%, rgba(125,8,0,1) 100%);'+
			'	background: -moz-linear-gradient(top, rgba(252,78,51,1) 0%, rgba(205,69,51,1) 50%, rgba(185,22,0,1) 51%, rgba(125,8,0,1) 100%);'+
			'	background: -ms-linear-gradient(top, rgba(252,78,51,1) 0%, rgba(205,69,51,1) 50%, rgba(185,22,0,1) 51%, rgba(125,8,0,1) 100%);'+
			'	background: -o-linear-gradient(top, rgba(252,78,51,1) 0%, rgba(205,69,51,1) 50%, rgba(185,22,0,1) 51%, rgba(125,8,0,1) 100%);'+
			'	color: #ffffff;'+
			'}'+
			'.gx_button_red:hover {'+
			'	background: #fc4e33;'+
			'}'+
			'.gx_button_orange {'+
			'	background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(255,230,128,1)), color-stop(50%, rgba(255,219,128,1)), color-stop(51%, rgba(255,183,0,1)), color-stop(100%, rgba(255,153,0,1)));'+
			'	background: -webkit-linear-gradient(top, rgba(255,230,128,1) 0%, rgba(255,219,128,1) 50%, rgba(255,183,0,1) 51%, rgba(255,153,0,1) 100%);'+
			'	background: -moz-linear-gradient(top, rgba(255,230,128,1) 0%, rgba(255,219,128,1) 50%, rgba(255,183,0,1) 51%, rgba(255,153,0,1) 100%);'+
			'	background: -ms-linear-gradient(top, rgba(255,230,128,1) 0%, rgba(255,219,128,1) 50%, rgba(255,183,0,1) 51%, rgba(255,153,0,1) 100%);'+
			'	background: -o-linear-gradient(top, rgba(255,230,128,1) 0%, rgba(255,219,128,1) 50%, rgba(255,183,0,1) 51%, rgba(255,153,0,1) 100%);'+
			'	color: #000000;'+
			'}'+
			'.gx_button_orange:hover {'+
			'	background: #ffe680;'+
			'}'+
			'.oj_button{'+
			'	-moz-box-shadow:inset 0px 0px 0px 0px #ff0000;'+
			'	-webkit-box-shadow:inset 0px 0px 0px 0px #ff0000;'+
			'	box-shadow:inset 0px 0px 0px 0px #ff0000;'+
			'	background-color:#ff0000;'+
			'	border:1px solid #ffffff;'+
			'	display:inline-block;'+
			'	cursor:pointer;'+
			'	color:#ffffff;'+
			'	font-family:Arial;'+
			'	font-size:13px;'+
			'	font-weight:bold;'+
			'	padding:6px 12px;'+
			'	text-decoration:none;'+
			'}'+
			'.oj_button_start {'+
			'	background-color:#009900;'+
			'}'+
			'.oj_button_stop  {'+
			'	background-color:#FF4500;'+
			'}'+
			'.oj_button_fighting  {'+
			'	background-color:#FFA500;'+
			'}'+			
			'.font_good {'+
			'	font-size:13px;'+
			'	font-weight:bold;'+
			'	color:#009900;'+
			'}'+
			'.font_bad {'+
			'	color:#FF4500;'+
			'}'+
			'.font_highlight{'+
			'	color: #ffd927;'+
			'}'+
			'.more_in {'+
			'	color: #898989;'+
			'	margin: 0;'+
			'	padding: 0;'+
			'}'+
		'</style>');

	jQuery('#mobwars_sideBarDiv').append('<center><a href="https://mobwars-prod-ssl.metamoki.com/" target="_blank" class="gx_button gx_button_white" title="Mob Wars Side Bar v'+gx_sb.version+' - Click to visit metamoki" alt="Mob Wars - Click to visit metamoki site" style="margin-top:3px;"><span>Mob Wars</span></a></center>'+
			'<span style="line-height:27px">&nbsp;</span>'+
			'<center><a href="#" id="gx_scriptsButton" class="gx_button gx_button_black" title="Click to show/hide Bookmarklets" alt="Click to show/hide Bookmarklets" style="margin-top:3px;">'+
				'<span>'+
					'Bookmarklets <img src="'+gx_sb.Imgs.arrow+'" style="transform:rotate(-90deg);">'+
				'</span>'+
			'</a>'+
			'<div id="gx_scriptsMenu" style="display:none; z-index:10004; background-color: #333; position: absolute; left: 130px;top:60px;"></div>'+
			'</center>'+
			'<center><a style="display:none; width:105px;" class="gx_button gx_button_orange" id="gx_sbAutorunButton"><span> Autostarting...</span></a><a href="#" id="gx_sbStopGo" class="gx_button gx_button_green" title="Click to start" alt="Click to start" style="margin-top:3px;">'+
					'<span>'+	
						'Start'+
					'</span>'+
				'</a> <a href="#" id="gx_sbConfig" class="gx_button gx_button_black" title="Click to open Config" alt="Click to open Config" style="margin-top:3px;">'+
					'<span>'+
						'<img src="'+gx_sb.Imgs.settings+'" />'+
					'</span>'+
				'</a></center>'+
		'<div id="mobwars_sbConfigDiv" style="z-index:1001; display:none; position: absolute; top: -40px; left: 155px;">'+
			'<div style="display: block; left: 40px;" class="pop_box">'+
				'<h3 style="text-align:center;">Mob Wars Sidebar Config</h3>'+
				'<a class="pop_close" id="mobwars_sbConfigClose" href="#"></a>'+
				'<div style="padding: 15px 15px 0px 15px;">'+
					'<table>'+
						'<tr>'+
						'		<td valign="top">'+
						'		<h4><u>Banking/Property Options</u></h4>'+
						'		<nobr><label><input type="radio" name="gx_sbMoney" id="gx_sbAutoBank" /> Autobank every 15 minutes</label></nobr><br />'+
						'		<nobr><label><input type="radio" name="gx_sbMoney" id="gx_sbAutoProperty" /> or Auto buy Property every 15 minutes</label></nobr><br />'+
						'		<nobr> &nbsp; <label><input type="checkbox" id="gx_sbROI" /> ROI with prop buying</label></nobr><br />'+
						'		<nobr> &nbsp; <label><input type="checkbox" id="gx_sbProp100" /> Don\'t buy less than 100 properties at a time</label></nobr><br />'+
						'		<nobr><label><input type="radio" name="gx_sbMoney" id="gx_sbAutoMoney" /> or No Banking & No Buying Property</label></nobr><br />'+				
						'		<h4><u>Rackets Options</u></h4>'+
						'		<nobr><label><input type="checkbox" id="gx_sbAutoRacket" /> Check/Collect Rackets</label></nobr><br />'+
						'		<span id="gx_sbRacketList" style="display:none">'+
						'		<nobr> &nbsp; <label><input type="checkbox" id="gx_sbFULLRacket" /> Collect Only if Rackets are full</label></nobr><br />'+
						'		<nobr> &nbsp; <label><input type="checkbox" id="gx_sbNYRacket" /> Collect New York Rackets</label></nobr><br />'+
						'		<nobr> &nbsp; <label><input type="checkbox" id="gx_sbCHIRacket" /> Collect Chicago Rackets</label></nobr><br />'+
						'		<nobr> &nbsp; <label><input type="checkbox" id="gx_sbLONRacket" /> Collect London Rackets</label></nobr><br />'+
						'		<nobr> &nbsp; <label><input type="checkbox" id="gx_sbVEGASRacket" /> Collect Vegas Rackets</label></nobr><br />'+
						'		<nobr> &nbsp; <label><input type="checkbox" id="gx_sbMOSRacket" /> Collect Moscow Rackets</label></nobr><br />'+
						'		<nobr> &nbsp; <label><input type="checkbox" id="gx_sbDUBRacket" /> Collect Dubai Rackets</label></nobr><br />'+	
						'		<nobr> &nbsp; <label><input type="checkbox" id="gx_sbSHARacket" /> Collect Shanghai Rackets</label></nobr><br />'+					
						'		<nobr> &nbsp; <label><input type="checkbox" id="gx_sbTOKRacket" /> Collect Tokyo Rackets</label></nobr><br /></span>'+				
						'		</td>'+
						'		<td valign="top">'+
						'			<h4><u>Autorun Options</u></h4>'+
						'			<nobr><label><input type="checkbox" id="gx_sbAutorun"/> Auto Start</label></nobr><br />'+ //<span class="more_in">Autorun (Disabled)</span>
						'			<span id="gx_sbAutoOpts" style="display:none">'+
						'			<nobr><label><input type="checkbox" id="gx_sbFirstRun"/> Check everything <span class="more_in">(no delay)</span></label></nobr><br /></span>'+
						'			<h4><u>City Heists</u></h4>'+
						'			<nobr><label><input type="checkbox" id="gx_sbHeists" /> Start/Collect City Heists <span class="more_in">(1.5 hour delay)</span></label></nobr><br />'+
						'			<h4><u>Misc</u></h4>'+
						'			<nobr><label><input type="checkbox" id="gx_sbStatusBar0"/> Show Status Bar</label></nobr><br />'+
						'			<nobr><label><input type="checkbox" id="gx_sbRightsideBar0"/> Show Right sideBar</label></nobr><br />'+
						'		</td>'+
						'</tr>'+	
					'</table>'+
					'<div style="text-align: center; width:100%">Mob Wars Sidebar v'+gx_sb.version+'</div>'+
					'<br />'+
				'</div>'+
			'</div>'+
		'</div>');					

	var gx_sbLogDiv = '<div id="gx_sbStatusBar">'+
			'	<table style="border: 1px solid #444; border-top:none; border-left: none; border-right: none;  width:100%;">'+
			'		<tr>'+
			'			<td width="39px" valign="top"><a href="#" id="log_show">Status</a></td>'+
			'			<td width="1px" valign="top">:</td>' +
			'			<td id="gx_sbStatus" valign="top" colspan="2">Mob Wars Sidebar Loaded..</td>'+
			'		</tr>'+
			'	</table>'+
			'</div>';
	
	jQuery('#ajax_content').before(gx_sbLogDiv);		
	
	function write_scripts() {
		var html = '<ul style="padding-left: 0; margin-left: 0; margin-top: 0; margin-bottom: 0; list-style-type: none;">'
		for(var i = 0; i < gx_sb.bookMarklets.length; i++) {
			html += '<li><a href=\'javascript:(function(){var a%3Ddocument.createElement("script");a.type%3D"text/javascript";a.src%3D"'+gx_sb.bookMarklets[i].URL+'%3F"%2BMath.random();document.getElementsByTagName("head")[0].appendChild(a)})();\' class="_button" style="display: block; padding: 5px; width: 175px; border-bottom: 1px solid #000;" src="'+gx_sb.bookMarklets[i].URL+'">'+gx_sb.bookMarklets[i].BookmarkletName+'</a></li>'
		}
		html += '</ul>';
		jQuery('#gx_scriptsMenu').html(html);
		jQuery('._button').unbind('click').bind('click',function() {
			load_bookmark(jQuery(this).attr('src'));
			jQuery('#gx_scriptsButton').trigger('click');
			return false;
		});
		jQuery('._button').hover(
			function () {
				jQuery(this).css({'background-color':'#999'});
			},
			function () {
				jQuery(this).css({'background-color':'#333'});
			}
		);
		jQuery('#gx_scriptsButton').toggle(
			function() {
				jQuery('#gx_scriptsMenu').css('display','block');
			},
			function() {
				jQuery('#gx_scriptsMenu').css('display','none');
			}
		);
	}
	
	function load_bookmark(src) {
		if (/javascript/.test(src)) {
			eval(src);
		}else{
			var a = document.createElement("script");
			a.type = "text/javascript";
			a.src = src;
			document.getElementsByTagName("head")[0].appendChild(a);
		}
	}	

	write_scripts();	
	
	var addEvent = function(object, type, callback) {
		if (object == null || typeof(object) == 'undefined') return;
		if (object.addEventListener) {
			object.addEventListener(type, callback, false);
		} else if (object.attachEvent) {
			object.attachEvent("on" + type, callback);
		} else {
			object["on"+type] = callback;
		}
	};
	
	addEvent(window, "resize", function(event) {
		jQuery('#mobwars_sideBarDiv').css('left',jQuery('#container').offset().left-138)
	});	

	//Lets create a fringe event: screenrant.com/wp-content/uploads/Fringe-Observers-Teaser-Trailer.jpg
	//Know your memes!
	var pageIs = '';
	var observerTarget = document.querySelector('#ajax_content');
	
	// create an observer instance
	var observer = new MutationObserver(function(mutations) {
	    mutations.forEach(function(mutation){
			if(mutation.addedNodes.length > 0){
				if(mutation.type === 'childList'){
					var list_values = [].slice.call(observerTarget.children).map(function(node){return node.innerHTML;})
					for(var i=0; i<list_values.length; i++){
						if(/Mob Code:/.test(list_values[i])){
							pageIs = 'profile';
							break;
						}else{
							pageIs = 'none';
							break;
						}
					}
					pageChange(pageIs)
				}
			}
		});    
	});	
	
	// configuration of the observer:
	var config = { attributes: true, childList: true, characterData: true };
	 
	// pass in the target node, as well as the observer options
	observer.observe(observerTarget, config);	

	jQuery('body').bind('ajaxComplete.mobwars',function(x,h,r){
		var page = r.url.replace(/\//g, '');
		if(page == ""){
			pageChange('homepage');
		}else if(page == "profile"){
			//The observer wanted to handle it...
		}else{
			pageChange(page);
		}
	})	
	
	function pageChange(change){
		if(change != 'none'){
		//	_console('The Observers report page: '+change);
		}
		if(change == 'homepage'){
			jQuery('#content > #newsfeed').css("height", "300");
			jQuery('#content > #newsfeed > .news_wrapper').css("height", "300");
			jQuery('#content > #newsfeed > .news_wrapper').css("overflow", "auto");
		}else if(change == 'bossbattles'){
			jQuery('form input[value=begin_boss]').parent().each(function(){
				var bossID=jQuery(this).children().eq(0).val();
				jQuery(this).attr('onclick', 'beginBoss('+bossID+'); return false;');
				jQuery(this).attr('id', 'modded');
				jQuery(this).removeAttr('action')
			})
			jQuery('form input[value=engage_boss]').parent().each(function(){
				jQuery(this).attr('onclick', 'MobWars.HUD.navigateTo("/bossbattles/battlearena.php?boss_id='+jQuery(this).children().eq(0).val()+'","hud_fight");return false;')
				jQuery(this).attr('id', 'modded');
				jQuery(this).removeAttr('action')
			})
			jQuery('form input[value=boss_help]').parent().each(function(){
				jQuery(this).attr('onclick', 'MobWars.HUD.navigateTo("/bossbattles/battlearena.php?boss_id='+jQuery(this).children().eq(1).val()+'","hud_fight");return false;')
				jQuery(this).attr('id', 'modded');
				jQuery(this).removeAttr('action')
			})
			jQuery('#content').prepend('<div class="announcement"><table><tbody><tr><td>Page bypass installed</td></tr></tbody></table></div>');
		}else if(change == 'profile'){
			try{
				var m; 
				if(m = document.getElementsByClassName('profilePicture')[0].getAttribute('src')){
					var i = m.indexOf('/v2.2/');
					var j = m.indexOf('/picture'); 
					m = m.substring(i+6,j); 
				}
				jQuery('.player_info').children().children().eq(4).append('<br>Profile ID:'+m+'<br><a id="modded" href="https://www.facebook.com/'+m+'" target="_blank">Facebook Profile</a> - MobWars Mod');
				if(jQuery('.section_title').text() != 'My Boss'){
					jQuery('.btn_orangeModal:first').children().eq(1).css("width", "85")
					jQuery('.btn_orangeModal:last').css("margin", "-17px 0px -15px 0px");
					jQuery('.btn_orangeModal:first').after('<a title="Hit them with a force attack of 10x" style="margin: -65px 0px 0px 20px;cursor:pointer;" class="gx_button gx_button_red" onclick="MobWars.Fight.doFightUser('+m+',10)"><span>10x</span></a>')
				}
			}catch(mobile){}
		}else if(change == 'fight'){
			jQuery('div[id^="attack_button_"]').each(function(){
				var attID = /(\d+)/.exec(jQuery(this).attr('id'))[1];
				jQuery(this).before('<a title="Hit them with a force attack of 10x" style="margin-top: 7px; margin-left:-60px;float: left;cursor:pointer;" class="gx_button gx_button_red" onclick="MobWars.Fight.doFightUser('+attID+',10)"><span>10x</span></a>');
			})
		}
		if(jQuery('.job_list_wrap').length){
			if(jQuery('#modded').length){
				return;
			}
			jQuery('.job_list_wrap').attr('id', 'modded');
			jQuery('.job_list_wrap div[id^="job_"]').each(function(){
				if(jQuery(this).attr('jobid')){
					var jobNum = jQuery(this).attr('jobid');
					var jobDiv = jQuery("#job_" + jobNum);
					var jobCost = parseInt(jQuery("#job_req_energy_" + jobNum, jobDiv).text());
					var jobXP = parseInt(jQuery(".xp", jobDiv).text());
					jQuery('.doJobDropMenu_id_'+jobNum+':last').append('ratio : (' + (jobXP/jobCost).toFixed(2) + ')').css({color: 'green','font-weight': 'bold'});
				}
			})
		}
	}	
	
	function beginBoss(ID){
		sbRequest('https://mobwars-prod-ssl.metamoki.com/bossbattles/do.php', 'boss_id='+ID+'&action=begin_boss', function(resp){
			var bID = /boss_id=(\d+)/.exec(resp)[1];
			MobWars.HUD.navigateTo('/bossbattles/battlearena.php?boss_id='+bID, 'hud_fight');
		});					
	}		
	
	jQuery('#gx_sbConfig').click(function(){
		if (jQuery('#mobwars_sbConfigDiv').css('display') == 'none') {
			jQuery('#mobwars_sbConfigDiv').show();
			jQuery('#gx_sbConfig').removeClass('black').addClass('green');
		}else{
			jQuery('#mobwars_sbConfigDiv').hide();
			jQuery('#gx_sbConfig').removeClass('green').addClass('black');
		}
		return false;
	});

	jQuery('#mobwars_sbConfigClose').click(function(){
		jQuery('#gx_sbConfig').trigger('click');
		return false;
	});	
	
	jQuery("#gx_sbAutoBank").click(function(){
		if(jQuery(this).is(':checked')){
			gx_sb.options.autoBank = true;
			gx_sb.options.autoProp = false;
			gx_sb.options.autoMoney = false;
		}else{
			gx_sb.options.autoBank = false;
			gx_sb.options.autoProp = true;
		}
		writeSettings();
	})
	jQuery("#gx_sbAutoProperty").click(function(){
		if(jQuery(this).is(':checked')){
			gx_sb.options.autoProp = true;
			gx_sb.options.autoBank = false;
			gx_sb.options.autoMoney = false;
		}else{
			gx_sb.options.autoProp = false;
			gx_sb.options.autoBank = true;
		}
		writeSettings();
	})
	jQuery("#gx_sbAutoMoney").click(function(){
		if(jQuery(this).is(':checked')){
			gx_sb.options.autoProp = false;
			gx_sb.options.autoBank = false;
			gx_sb.options.autoMoney = true;
		}
		writeSettings();
	})	
	jQuery("#gx_sbROI").click(function(){
		if(jQuery(this).is(':checked')){
			gx_sb.options.ROI = true;
		}else{
			gx_sb.options.ROI = false;
		}
		writeSettings();
	})	
	jQuery("#gx_sbProp100").click(function(){
		if(jQuery(this).is(':checked')){
			gx_sb.options.onlybuy100 = true;
		}else{
			gx_sb.options.onlybuy100 = false;
		}
		writeSettings();
	})		
	jQuery("#gx_sbAutoRacket").click(function(){
		if(jQuery(this).is(':checked')){
			gx_sb.options.autoRacket = true;
			jQuery('#gx_sbRacketList').show();
		}else{
			gx_sb.options.autoRacket = false;
			jQuery('#gx_sbRacketList').hide();
		}
		writeSettings();
	})
	jQuery("#gx_sbFULLRacket").click(function(){
		if(jQuery(this).is(':checked')){
			gx_sb.options.collectFull = true;
		}else{
			gx_sb.options.collectFull = false;
		}
		writeSettings();
	})		
	jQuery("#gx_sbNYRacket").click(function(){
		if(jQuery(this).is(':checked')){
			gx_sb.options.collectNY = true;
		}else{
			gx_sb.options.collectNY = false;
		}
		writeSettings();
	})
	jQuery("#gx_sbCHIRacket").click(function(){
		if(jQuery(this).is(':checked')){
			gx_sb.options.collectChi = true;
		}else{
			gx_sb.options.collectChi = false;
		}
		writeSettings();
	})
	jQuery("#gx_sbLONRacket").click(function(){
		if(jQuery(this).is(':checked')){
			gx_sb.options.collectLon = true;
		}else{
			gx_sb.options.collectLon = false;
		}
		writeSettings();
	})
	jQuery("#gx_sbVEGASRacket").click(function(){
		if(jQuery(this).is(':checked')){
			gx_sb.options.collectVeg = true;
		}else{
			gx_sb.options.collectVeg = false;
		}
		writeSettings();
	})
	jQuery("#gx_sbMOSRacket").click(function(){
		if(jQuery(this).is(':checked')){
			gx_sb.options.collectMos = true;
		}else{
			gx_sb.options.collectMos = false;
		}
		writeSettings();
	})
	jQuery("#gx_sbDUBRacket").click(function(){
		if(jQuery(this).is(':checked')){
			gx_sb.options.collectDub = true;
		}else{
			gx_sb.options.collectDub = false;
		}
		writeSettings();
	})
	jQuery("#gx_sbSHARacket").click(function(){
		if(jQuery(this).is(':checked')){
			gx_sb.options.collectSha = true;
		}else{
			gx_sb.options.collectSha = false;
		}
		writeSettings();
	})
	jQuery("#gx_sbTOKRacket").click(function(){
		if(jQuery(this).is(':checked')){
			gx_sb.options.collectTok = true;
		}else{
			gx_sb.options.collectTok = false;
		}
		writeSettings();
	})		
	jQuery("#gx_sbAutorun").click(function(){
		if(jQuery(this).is(':checked')){
			jQuery('#gx_sbAutoOpts').show();
			gx_sb.options.autoRun = true;
		}else{
			jQuery('#gx_sbAutoOpts').hide();
			gx_sb.options.autoRun = false;
		}
		writeSettings();
	})	
	jQuery("#gx_sbFirstRun").click(function(){
		if(jQuery(this).is(':checked')){
			gx_sb.options.firstRun = true;
		}else{
			gx_sb.options.firstRun = false;
		}
		writeSettings();
	})	
	jQuery("#gx_sbHeists").click(function(){
		if(jQuery(this).is(':checked')){
			gx_sb.options.autoHeists = true;
		}else{
			gx_sb.options.autoHeists = false;
		}
		writeSettings();
	})	
	jQuery("#gx_sbStatusBar0").click(function(){
		if(jQuery(this).is(':checked')){
			jQuery('#gx_sbStatusBar').show();
			gx_sb.options.statusBar = true;
		}else{
			jQuery('#gx_sbStatusBar').hide();
			gx_sb.options.statusBar = false;
		}
		writeSettings();
	})		
	jQuery("#gx_sbRightsideBar0").click(function(){
		if(jQuery(this).is(':checked')){
			jQuery('#container').css('width', '965px');
			jQuery('#fluid').show();	
			gx_sb.options.sideBar = true;
		}else{
			jQuery('#container').css('width', '763px');	
			jQuery('#fluid').hide();
			gx_sb.options.sideBar = false;
		}
		jQuery('#mobwars_sideBarDiv').css('left',jQuery('#container').offset().left-138)
		writeSettings();
	})	
	jQuery('#gx_sbAutorunButton').click(function(){
		clearTimeout(gx_sb.intStart);
		jQuery('#mobwars_sideBarDiv').css('height','130px');
		jQuery('#gx_sbAutorunButton').hide();
		jQuery('#gx_sbStopGo').show();
		return false;
	})	
	jQuery('#gx_sbStopGo').click(function(){
		if(gx_sb.isStarted){
			gx_sb.isStarted = false;
			clearInterval(gx_sb.delaySbTimer);
			dolog('Mob Wars Sidebar Stopped..')
			jQuery('#gx_sbStopGo').children().html('Start');
			jQuery('#gx_sbStopGo').removeClass('gx_button_red').addClass('gx_button_green')
		}else{
			clearTimeout(gx_sb.intStart);
			jQuery('#mobwars_sideBarDiv').css('height','130px')
			jQuery('#gx_sbAutorunButton').hide();
			jQuery('#gx_sbStopGo').show();
			gx_sb.isStarted = true;
			dolog('Mob Wars Sidebar Running..')
			jQuery('#gx_sbStopGo').children().html('Stop');
			jQuery('#gx_sbStopGo').removeClass('gx_button_green').addClass('gx_button_red')
			doOrder();
		}
		return false;
	});	
	readSettings();
	if(gx_sb.options.autoBank){
		jQuery('#gx_sbAutoBank').prop('checked', true);
	}else{
		jQuery('#gx_sbAutoBank').prop('checked', false);
	}
	if(gx_sb.options.autoProp){
		jQuery('#gx_sbAutoProperty').prop('checked', true);
	}else{
		jQuery('#gx_sbAutoProperty').prop('checked', false);
	}
	if(gx_sb.options.autoMoney){
		jQuery('#gx_sbAutoMoney').prop('checked', true);
	}else{
		jQuery('#gx_sbAutoMoney').prop('checked', false);
	}
	if(gx_sb.options.ROI){
		jQuery('#gx_sbROI').prop('checked', true);
	}else{
		jQuery('#gx_sbROI').prop('checked', false);
	}
	if(gx_sb.options.onlybuy100){
		jQuery('#gx_sbProp100').prop('checked', true);
	}else{
		jQuery('#gx_sbProp100').prop('checked', false);
	}
	if(gx_sb.options.autoRacket){
		jQuery('#gx_sbAutoRacket').prop('checked', true);
		jQuery('#gx_sbRacketList').show();
	}else{
		jQuery('#gx_sbAutoRacket').prop('checked', false);
	}
	if(gx_sb.options.collectFull){
		jQuery('#gx_sbFULLRacket').prop('checked', true);
	}else{
		jQuery('#gx_sbFULLRacket').prop('checked', false);
	}	
	if(gx_sb.options.collectNY){
		jQuery('#gx_sbNYRacket').prop('checked', true);
	}else{
		jQuery('#gx_sbNYRacket').prop('checked', false);
	}
	if(gx_sb.options.collectChi){
		jQuery('#gx_sbCHIRacket').prop('checked', true);
	}else{
		jQuery('#gx_sbCHIRacket').prop('checked', false);
	}
	if(gx_sb.options.collectLon){
		jQuery('#gx_sbLONRacket').prop('checked', true);
	}else{
		jQuery('#gx_sbLONRacket').prop('checked', false);
	}
	if(gx_sb.options.collectVeg){
		jQuery('#gx_sbVEGASRacket').prop('checked', true);
	}else{
		jQuery('#gx_sbVEGASRacket').prop('checked', false);
	}
	if(gx_sb.options.collectMos){
		jQuery('#gx_sbMOSRacket').prop('checked', true);
	}else{
		jQuery('#gx_sbMOSRacket').prop('checked', false);
	}
	if(gx_sb.options.collectDub){
		jQuery('#gx_sbDUBRacket').prop('checked', true);
	}else{
		jQuery('#gx_sbDUBRacket').prop('checked', false);
	}		
	if(gx_sb.options.collectSha){
		jQuery('#gx_sbSHARacket').prop('checked', true);
	}else{
		jQuery('#gx_sbSHARacket').prop('checked', false);
	}
	if(gx_sb.options.collectTok){
		jQuery('#gx_sbTOKRacket').prop('checked', true);
	}else{
		jQuery('#gx_sbTOKRacket').prop('checked', false);
	}
	if(gx_sb.options.autoRun){
		jQuery('#gx_sbAutorun').prop('checked', true);
		jQuery('#gx_sbAutorunButton').show();
		jQuery('#gx_sbStopGo').hide();
		jQuery('#gx_sbAutoOpts').show();
		dolog('Mob Wars Sidebar Autostarting..');
		jQuery('#mobwars_sideBarDiv').css('height','148px');
		gx_sb.intStart = setTimeout(function(){
			jQuery('#gx_sbStopGo').click();
		}, 5000);
	}else{
		jQuery('#gx_sbAutorun').prop('checked', false);
	}
	if(gx_sb.options.firstRun){
		jQuery('#gx_sbFirstRun').prop('checked', true);
	}else{
		jQuery('#gx_sbFirstRun').prop('checked', false);
	}
	if(gx_sb.options.autoHeists){
		jQuery('#gx_sbHeists').prop('checked', true);
	}else{
		jQuery('#gx_sbHeists').prop('checked', false);
	}	
	if(gx_sb.options.statusBar){
		jQuery('#gx_sbStatusBar0').prop('checked', true);
		jQuery('#gx_sbStatusBar').show();
	}else{
		jQuery('#gx_sbStatusBar0').prop('checked', false);
	}
	if(gx_sb.options.sideBar){
		jQuery('#gx_sbRightsideBar0').prop('checked', true);
	}else{
		jQuery('#gx_sbRightsideBar0').prop('checked', false);
		jQuery('#container').css('width', '763px');	
		jQuery('#fluid').hide();
	}
	jQuery('#mobwars_sideBarDiv').css('left',jQuery('#container').offset().left-138)
	if(jQuery('#hud_city .subDropMenu').children().length > 1){
		gx_sb.rackCity = 10;
	}	

	function doOrder(){
		clearTimeout(gx_sb.intOrder);
		if(!gx_sb.isStarted){
			return;
		}else{
/*			if(jQuery('#mobwars_mmmDiv').length > 0){
				if(gx_mmm.isStarted){
					dolog('Magic Mob Maxer is running, waiting for it to finish!');
					gx_sb.intOrder = setTimeout(function(){
						doOrder();
					}, 60000);
					return;
				}
			}*/
			dolog('Mob Wars Sidebar Running..');
			var inMotion = false;
			if(gx_sb.options.autoBank){
				if(jQuery("#gx_sbAutorun").is(':checked') && gx_sb.options.firstRun && gx_sb.isFirstLoada){
					gx_sb.isFirstLoada = false;
					delaySideyMSG(5, 'Off to check your money! in ', function(){doBanking();}, true);
					return;
				}
				if(Math.floor((new Date() - gx_sb.lastBank)/60000) > 14){
					gx_sb.lastBank = new Date();
					delaySideyMSG(5, 'Off to check your money! in ', function(){doBanking();}, true);
					return;
				}
			}
			if(gx_sb.options.autoProp){
				if(jQuery("#gx_sbAutorun").is(':checked') && gx_sb.options.firstRun && gx_sb.isFirstLoadb){
					gx_sb.isFirstLoadb = false;
					delaySideyMSG(5, 'Off to check property prices in NY! in ', function(){buyProps();}, true);
					return;
				}
				if(Math.floor((new Date() - gx_sb.lastProp)/60000) > 14){
					gx_sb.lastProp = new Date();
					delaySideyMSG(5, 'Off to check property prices in NY! in ', function(){buyProps();}, true);
					return;
				}
			}
			if(gx_sb.options.autoRacket){
				if(jQuery("#gx_sbAutorun").is(':checked') && gx_sb.options.firstRun && gx_sb.isFirstLoadc){
					gx_sb.isFirstLoadc = false;
					delaySideyMSG(5, 'Off to check Rackets! in ', function(){doRackets();}, true);
					return;
				}
				if(Math.floor((new Date() - gx_sb.lastRacket)/60000) > gx_sb.rackCity-1){
					gx_sb.lastRacket = new Date();
					delaySideyMSG(5, 'Off to check Rackets! in ', function(){doRackets();}, true);
					return;
				}
			}
			if(gx_sb.options.autoHeist){
				if(jQuery("#gx_sbAutorun").is(':checked') && gx_sb.options.firstRun && gx_sb.isFirstLoadd){
					gx_sb.isFirstLoadd = false;
					delaySideyMSG(5, 'Off to check Heists! in ', function(){chkHeists();}, true);
					return;
				}
				if(Math.floor((new Date() - gx_sb.lastHeist)/60000) > 90){
					gx_sb.lastHeist = new Date();
					delaySideyMSG(5, 'Off to check Heists! in ', function(){chkHeists();}, true);
					return;
				}
			}
			if(!inMotion){
				gx_sb.intOrder = setTimeout(function(){
					doOrder();
				}, 60000);
			}
		}
	}

	function doBanking(){
		sbRequest(gx_sb.docoHttp+'//mobwars-prod-ssl.metamoki.com/bank/', '', function(resp){
			var amount = jQuery(resp).find('#deposit_preset').val().replace(/,/g, '');
			if(parseInt(amount) > 999){
				sbRequest(gx_sb.docoHttp+'//mobwars-prod-ssl.metamoki.com/bank/do.php?', 'ajax_callback=mw_aj_1_r&deposit_amount='+amount+'&action=deposit&=Deposit', function(response){
					response = response.replace(/\\/g,"");
					dolog(jQuery(response).find('.alert').last().text())
					jQuery('.cur_cash').text('$0')
				})
			}else{
				dolog('you need at least 1000 in your account to bank!')
			}
			setTimeout(function(){
				doOrder();
			}, 2000);
		})
	}
	
	function buyProps(){
		var propsToPrice = [];
		sbRequest(gx_sb.docoHttp+'//mobwars-prod-ssl.metamoki.com/city/?show_loc=new_york', '', function(resp){
			jQuery(resp).find('.property_list_wrap').children().each(function(){
				if(jQuery(this).attr('class') == 'alert_container'){
					return true;
				}else{
					var propID = /(\d+)/.exec(jQuery(this).attr('class'))[1];
					var propName = jQuery(this).find('.property_title').text();
					var propPrice = jQuery(this).find('.prop_value').text().replace(/[^0-9]/g, '')
					var propCount = parseInt(jQuery(this).find('span[id^="item_count_"]').text());
					var propIncome = jQuery(this).find('.col3 .desc:first').text().replace(/[^0-9]/g, '');
					if(propCount > 59999){
						return true;
					}else{
						var prop = {"prop":propID, "propCalled":propName, "price":propPrice, 'count':propCount, "income":propIncome}
						propsToPrice.push(prop);
					}
				}
			});
			if(propsToPrice.length == 0){
				_console('no props to buy');
				alert('Error:no props to buy');
				return;
			}
			var buyPrice = propsToPrice.slice(0);

			buyPrice.sort(function(a,b) {
				return b.price - a.price;
			});
			var cashOnHand = parseInt(jQuery('.cur_cash').text().replace(/[^0-9]/g, ''));
			var propToBuy;
			var numBuy;
			if(gx_sb.options.ROI){
				for(var i = 0; i < buyPrice.length; i++){
					buyPrice[i].roi = calculateROI(buyPrice[i].price, buyPrice[i].income)
				}
				
				buyPrice.sort(function(a, b) {
					return b.roi - a.roi;
				});
			}
			if(cashOnHand > buyPrice[buyPrice.length-1].price){
				for(var i = buyPrice.length-1; i > 0; i--){
					if(cashOnHand >= buyPrice[i].price){
						if(gx_sb.options.onlybuy100 && cashOnHand >= calculatePrice(100, buyPrice[i].prop, buyPrice[i].count, buyPrice[i].price)){
							numBuy = 100;
						}else if(!gx_sb.options.onlybuy100){
							if(cashOnHand >= calculatePrice(100, buyPrice[i].prop, buyPrice[i].count, buyPrice[i].price)){
								numBuy = 100;
							}else if(cashOnHand > calculatePrice(50, buyPrice[i].prop, buyPrice[i].count, buyPrice[i].price)){
								numBuy = 50;
							}else if(cashOnHand > calculatePrice(10, buyPrice[i].prop, buyPrice[i].count, buyPrice[i].price)){
								numBuy = 10;
							}else if(cashOnHand > calculatePrice(5, buyPrice[i].prop, buyPrice[i].count, buyPrice[i].price)){
								numBuy = 5;
							}else{
								numBuy = 1;
							}
						}
						propToBuy = buyPrice[i].prop
					}
				}
				if(numBuy > 0){
					sbRequest(gx_sb.docoHttp+'//mobwars-prod-ssl.metamoki.com/city/do.php', 'action=buy&qty='+numBuy+'&item='+propToBuy+'&alert_container=city_alert_container_'+propToBuy+'&framework=0', function(resp){
						response = resp.replace(/\\/g,"");
						dolog(jQuery(response).find('.alert').last().text());
						var cash = /cash":(.+?),"/.exec(response)[1];
						jQuery('.cur_cash').text('$'+commas(cash));
						setTimeout(function(){
							doOrder();
						}, 2000);
					});
				}else{
					doOrder();
				}
			}else{
				setTimeout(function(){
					doOrder();					
				}, 2000);
			}
		})
	}
	
	function calculateROI(a, b){
		return a/b;
	}	
	
	function calculatePrice(a,b,c,d){
		var e=parseInt(d);
		if(a<=10)
			var f=e*parseInt(a);
		else{
			var g=parseInt(c),
			h=e/(1+g/10),
			f=0;
			for(var i=a;i>0;){
				cost=h+h*(g/10);
				var j=Math.min(10,i);
				f+=j*cost,g+=10,i-=j
			}
		}
		return f
	}			
	
	function doRackets(){
		sbRequest(gx_sb.docoHttp+'//mobwars-prod-ssl.metamoki.com/rackets/', '', function(resp){
			gx_sb.rackArray = [];
			try{
				if(gx_sb.options.autoRacket){
					if(gx_sb.options.collectNY && jQuery(resp).find('#progress_container_303').length>0){
						var link;
						if(gx_sb.options.collectFull){
							if(jQuery(resp).find('#factory_timer_303').text().indexOf("Full") > 0){
								link = 'ajax_callback=factory_9701143_r&item=303&action=collect';
							}
						}else if(jQuery(resp).find('td[id^="303_lvl_"]').hasClass('compProg')){
							link = 'ajax_callback=factory_9701143_r&item=303&action=collect';
						}
						if(link){
							gx_sb.rackArray.push(link);
						}
					}
					if(gx_sb.options.collectChi && jQuery(resp).find('#progress_container_304').length>0){
						var link;
						if(gx_sb.options.collectFull){
							if(jQuery(resp).find('#factory_timer_304').text().indexOf("Full") > 0){
								link = 'ajax_callback=factory_9719976_r&item=304&action=collect';
							}				
						}else if(jQuery(resp).find('td[id^="304_lvl_"]').hasClass('compProg')){
							link = 'ajax_callback=factory_9719976_r&item=304&action=collect';
						}	
						if(link){
							gx_sb.rackArray.push(link);
						}
					}
					if(gx_sb.options.collectLon && jQuery(resp).find('#progress_container_305').length>0){
						var link;
						if(gx_sb.options.collectFull){
							if(jQuery(resp).find('#factory_timer_305').text().indexOf("Full") > 0){
								link = 'ajax_callback=factory_9733819_r&item=305&action=collect';
							}				
						}else if(jQuery(resp).find('td[id^="305_lvl_"]').hasClass('compProg')){
							link = 'ajax_callback=factory_9733819_r&item=305&action=collect';
						}	
						if(link){
							gx_sb.rackArray.push(link);
						}
					}
					if(gx_sb.options.collectVeg && jQuery(resp).find('#progress_container_306').length>0){
						var link;
						if(gx_sb.options.collectFull){
							if(jQuery(resp).find('#factory_timer_306').text().indexOf("Full") > 0){
								link = 'ajax_callback=factory_97458612_r&item=306&action=collect';
							}				
						}else if(jQuery(resp).find('td[id^="306_lvl_"]').hasClass('compProg')){
							link = 'ajax_callback=factory_97458612_r&item=306&action=collect';
						}	
						if(link){
							gx_sb.rackArray.push(link);
						}
					}
					if(gx_sb.options.collectMos && jQuery(resp).find('#progress_container_307').length>0){
						var link;
						if(gx_sb.options.collectFull){
							if(jQuery(resp).find('#factory_timer_307').text().indexOf("Full") > 0){
								link = 'ajax_callback=factory_9758791_r&item=307&action=collect';
							}				
						}else if(jQuery(resp).find('td[id^="307_lvl_"]').hasClass('compProg')){
							link = 'ajax_callback=factory_9758791_r&item=307&action=collect';
						}	
						if(link){
							gx_sb.rackArray.push(link);
						}
					}
					if(gx_sb.options.collectDub && jQuery(resp).find('#progress_container_308').length>0){
						var link;
						if(gx_sb.options.collectFull){
							if(jQuery(resp).find('#factory_timer_308').text().indexOf("Full") > 0){
								link = 'ajax_callback=factory_97633418_r&item=308&action=collect';
							}		
						}else if(jQuery(resp).find('td[id^="308_lvl_"]').hasClass('compProg')){
							link = 'ajax_callback=factory_97633418_r&item=308&action=collect';
						}	
						if(link){
							gx_sb.rackArray.push(link);
						}							
					}
					if(gx_sb.options.collectSha && jQuery(resp).find('#progress_container_309').length>0){
						var link;
						if(gx_sb.options.collectFull){
							if(jQuery(resp).find('#factory_timer_309').text().indexOf("Full") > 0){
								link = 'ajax_callback=factory_97652421_r&item=309&action=collect';
							}
						}else if(jQuery(resp).find('td[id^="309_lvl_"]').hasClass('compProg')){
							link = 'ajax_callback=factory_97652421_r&item=309&action=collect';
						}
						if(link){
							gx_sb.rackArray.push(link);
						}							
					}		
					if(gx_sb.options.collectTok && jQuery(resp).find('#progress_container_310').length>0){
						var link;
						if(gx_sb.options.collectFull){
							if(jQuery(resp).find('#factory_timer_310').text().indexOf("Full") > 0){
								link = 'ajax_callback=factory_97721924_r&item=310&action=collect';
							}
						}else if(jQuery(resp).find('td[id^="310_lvl_"]').hasClass('compProg')){
							link = 'ajax_callback=factory_97721924_r&item=310&action=collect';
						}
						if(link){
							gx_sb.rackArray.push(link);
						}							
					}						
				}
			}catch(notOpen){}
			if(gx_sb.rackArray.length > 0){
				setTimeout(function(){
					ajxQueueCheck();
				}, 2500);
			}else{
				setTimeout(function(){
					doOrder();
				}, 5000);
			}
		});
	}
	
	function ajxQueueCheck(){
		if(!gx_sb.rackArray.length){
			dolog('All Rackets Checked!');
			setTimeout(function(){
				doOrder();
			}, 5000);
			return;
		}
		sbRequest(gx_sb.docoHttp+'//mobwars-prod-ssl.metamoki.com/city/do.php', gx_sb.rackArray.shift(), function(){setTimeout(function(){
			ajxQueueCheck();
		}, 1000);});
	}	
	
	function chkHeists(){
		gx_sb.heistArray = [];
		var heistsInfo = [   
			{num: 335, name:"Lock Industries Heist"},
			{num: 337, name:"Chicago Outfit Heist"},
			{num: 338, name:"MI6 Headquarters Heist"},
			{num: 339, name:"Mob Casino Heist"},
			{num: 340, name:"Red Mafiya Heist"},
			{num: 341, name:"Gold Palace Heist"},
			{num: 342, name:"Triad Den Heist"},
			{num: 343, name:"Yakuza Bathhouse Heist"}
		];
		for(var i = 0; i < jQuery('#hud_city .subDropMenu').children().length; i++){
			if(i > 7){
				break;
			}
			gx_sb.heistArray.push(heistsInfo[i]);
		}
		MobWars.HUD.navigateTo('/heists/','hud_jobs', function(){
			workHeists();
		})
	}
		
	function workHeists(){
		if(!gx_sb.heistArray.length){
			if(gx_sb.heistRestart){
				gx_sb.heistRestart = false;
				chkHeists();
				return;
			}
			dolog('Heists all checked!')			
			setTimeout(function(){
				doOrder();
			}, 5000);
			return;
		}else{
			if(/Finish Job/.test(jQuery('#action_btn_div_'+gx_sb.heistArray[0].num).children().val())){
				dolog('Finished '+gx_sb.heistArray[0].name+'! Collecting..')
				jQuery('#action_btn_div_'+gx_sb.heistArray[0].num).children().click();
				gx_sb.heistRestart = true;
			}else if(!jQuery('#recruit_'+gx_sb.heistArray[0].num+'_wrapper').hasClass('hideDisplayBox')){
				if(/Recruit Now/.test(jQuery('#recruit_'+gx_sb.heistArray[0].num+'_wrapper').children().val())){
					dolog(gx_sb.heistArray[0].name+' is not ready yet!')
				}
			}else if(/Start Job/.test(jQuery('#action_btn_div_'+gx_sb.heistArray[0].num).children().val())){ 
				dolog('Starting '+gx_sb.heistArray[0].name+'!')
				jQuery('#action_btn_div_'+gx_sb.heistArray[0].num).children().click();
			}else if(/Try Again/.test(jQuery('#action_btn_div_'+gx_sb.heistArray[0].num).children().val())){ 
				dolog('Failed '+gx_sb.heistArray[0].name+'! Restarting Heist!')
				jQuery('#action_btn_div_'+gx_sb.heistArray[0].num).children().click();
			}
			setTimeout(function(){
				dolog('Checking next heist in 5 seconds...');
			}, 2000);
			gx_sb.heistArray.shift();
			setTimeout(function(){
				workHeists();
			}, 5000);
		}
	}	
	
	function delaySideyMSG(seconds,message,resume, extra){
		var delay = (seconds > 0)? delay = 1000 : delay = 100;
		var minutes = (parseInt(seconds/60) == 1) ? 0 : parseInt(seconds/60);
		if(minutes > 0){
			dolog(message+' <span id="gx_sbMinutes">'+minutes+' minutes</span> <span id="gx_sbSeconds">'+(seconds%60)+' second'+(seconds==1?'':'s')+'</span>...');
		}else{
			dolog(message+' <span id="gx_sbMinutes"></span><span id="gx_sbSeconds">'+(seconds%60)+' second'+(seconds==1?'':'s')+'</span>...');
		}
		gx_sb.delaySbTimer = setInterval(function(){
			if(seconds%60 == 0){
				minutes--;
			}
			seconds--;
			if(jQuery('#gx_sbMinutes')){
				jQuery('#gx_sbMinutes').text((minutes > 0) ? minutes+' minute'+(minutes==1?'':'s') : '');
			}
			if(jQuery('#gx_sbSeconds')){
				jQuery('#gx_sbSeconds').text((seconds % 60)+' second'+(seconds==1 ? '' : 's'));
			}else{
				clearInterval(gx_sb.delaySbTimer);
			}
			if(seconds <= 0){
				clearInterval(gx_sb.delaySbTimer);
				if(typeof resume == 'function'){
					resume();
				}
			}
		},delay);
		if(extra){
			jQuery('#gx_sbStatus').append(' <a href="#" id="staph">(Stop)</a>');
			$('#staph').click(function(){
				clearInterval(gx_sb.delaySbTimer);
				doOrder();
				return false;
			});
		}
	}		
	
	function dolog(msg){
		jQuery('#gx_sbStatus').html(msg);
	}	
	
	function commas(s) {
		while (d=/(-)?(\d+)(\d{3}.*)/.exec(s)) {
			s = (d[1]?d[1]+d[2]+','+d[3]:d[2]+','+d[3]);
		}
		return s;
	}	

    function sbRequest(url, params, handler, errorhandler) {
        jQuery.ajax({
            type: "POST",
            url: url,
            data: params,
            cache: false,
            success: handler,
            error: errorhandler
        });
    }	
	
	function writeSettings(){
		localStorage.setItem("gx_sb", JSON.stringify(gx_sb.options));
	}
 
	function readSettings(){
		if (!localStorage.getItem("gx_sb")) { //no settings
			writeSettings();
		} else {
			var tempsettings = JSON.parse(localStorage.getItem("gx_sb"));
			if(Object.keys(tempsettings).length != Object.keys(gx_sb.options).length) { 
				writeSettings();
			}else{
				gx_sb.options = tempsettings;
			}
		}
	}	
	
	function _console(msg){
		setTimeout(function(){
			throw new Error(msg);
		}, 0);
	}		
	
	/*add analytics*/
	function loadContent(file) {
		var head=document.getElementsByTagName('head').item(0);
		var scriptTag=document.getElementById('loadScript');
		if(scriptTag)head.removeChild(scriptTag);
		script=document.createElement('script');
		script.src=file;
		script.type='text/javascript';
		script.id='loadScript';
		head.appendChild(script);
		setTimeout(load,1000);
	}
	loadContent('https://www.google-analytics.com/ga.js');
	function load() {
		try {
			var pageTracker=_gat._getTracker("UA-87736629-1");
			pageTracker._trackPageview("/gx_sb v"+gx_sb.version);
		} catch(err){}
	}
	/*end analytics*/		
