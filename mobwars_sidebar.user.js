// ==UserScript==
// @name            Mob Wars Sidebar Loader
// @namespace       https://invmanager.github.io/invmanager/
// @version         1.0
// @description     Loads mobwars sidebar
// @include   	    /^https?:\/\/apps.facebook.com/mobwars/*/
// @include   	    /^https?:\/\/mobwars-prod-ssl.metamoki.com*/
// @grant 			none
// ==/UserScript==

//Boom! Regex'd!
(function(){
	var div = document.createElement("div");
	div.id = 'mobwars_sideBarDiv';
	var game = document.body;
	game.insertBefore(div,game.firstChild);
	if (typeof $ == 'undefined') {
		$ = unsafeWindow.$;
	}
	loadContent('https://invmanager.github.io/invmanager/mobwars_sidebar.js');

	function loadContent(file){
		var head = document.getElementsByTagName('head').item(0);
		var scriptTag = document.getElementById('loadScript');
		if (scriptTag) {
			head.removeChild(scriptTag);
		}
		script = document.createElement('script');
		script.src = file;
		script.type = 'text/javascript';
		script.id = 'loadScript';
		head.appendChild(script);
	}
})();
