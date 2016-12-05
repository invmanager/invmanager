	var docoHttp = location.protocol;
	var weaponsDiv, armorDiv, vehiclesDiv
	var weapons = [];
	var armor = [];
	var vehicles = [];
	
	jQuery('#gx_sbStatusBar').after('<div id="mobwars_iaDiv"></div>');
	jQuery('#mobwars_iaDiv').html(
		'<style type="text/css">'+
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
			'ul#gx_ia {'+
			'	padding: 0;'+
			'}'+

			'ul#gx_ia li {'+
			'	display: inline;'+
			'}'+

			'ul#gx_ia li a {'+
			'	color: white;'+
			'	padding: 0px 20px;'+
			'	text-decoration: none;'+
			'}'+

			'ul#gx_ia li a:hover {'+
			'	background-color: orange;'+
			'}'+
			
		'</style>'+
		'<div style="border: 1px solid #444;">'+
			'<table>'+
				'<tr>'+
				'		<td valign="top" style="padding-left: 205px;text-align:center;font-size:17px">'+
				'		Inventory Analyser'+
				'		</td>'+
				'		<td valign="top" style="text-align:right">'+
				'		<a id="gx_iaStopGo" class="oj_button oj_button_start">Analyse</a>'+
				'		 <a class="oj_button" id="gx_iaDivClose">Close</a>'+
				'		</td>'+
				'</tr>'+	
			'</table>'+
			'<center><hr style="width:99%;height:1px;" color="#333333"/></center>'+
			'<div style="padding:5px;">'+
				'<center>'+
					'<span id="gx_iaMsg">'+
						'Please Click Analyse to Start!'+
					'</span>'+
				'</center>'+
				'<span id="gx_aiDIV" style="display:none;">'+
					'<center>'+
						'<ul id=gx_ia>'+
							'<li id="gx_aiTabMenu1" style="background: grey;" onclick="gx_aiTabs(\'1\')"><a>Weapons</a></li>'+
							'<li id="gx_aiTabMenu2" style="background: orange;" onclick="gx_aiTabs(\'2\')"><a>Armor</a></li>'+
							'<li id="gx_aiTabMenu3" style="background: orange;" onclick="gx_aiTabs(\'3\')"><a>Vehicles</a></li>'+
						'</ul>'+
						'Sort by: <a href="#" id="gx_iaSBAttack">Attack</a> | <a href="#" id="gx_iaSBDefense">Defense</a>'+
					'</center>'+
					'<div id="gx_aiTab_1">'+
					'</div>'+
					'<div id="gx_aiTab_2" style="display: none;">'+
					'</div>'+
					'<div id="gx_aiTab_3" style="display: none;">'+
					'</div>'+
				'</span>'+
			'</div>'+
		'</div>');

	jQuery('#gx_iaDivClose').click(function(){
		jQuery('#mobwars_iaDiv').remove();
	});
	
	function lootObject(name,attack,defense,amount,type, buy) {
		this.name = name;
		this.attack = parseInt(attack);
		this.defense = parseInt(defense);
		this.combined = parseInt(this.attack+this.defense);
		this.amount = parseInt(amount);
		this.type = type;
		this.buy = buy;
	}	
	
	function writeWeapons(object,sortby,header,limit) {
		if (sortby == 'attack') {
			object.sort(function(a,b) { return parseInt(b.attack) - parseInt(a.attack) } );
		}
		if (sortby == 'defense') {
			object.sort(function(a,b) { return parseInt(b.defense) - parseInt(a.defense) } );
		}
		var count = 0;
		var tally = 0;
		weaponsDiv = '<table>';
		weaponsDiv += '<tr><th><h2>Top '+header+'</h2></th><th>Attack:</th><th>Defense:</th><th>Using:</th><th>Purchasable:</th></tr>';
		for (x in object) {
			weaponsDiv += '<tr><td>'+object[x].name+'</td><td><center>'+object[x].attack+'</center></td><td><center>'+object[x].defense+'</center></td><td><center>'+((count+object[x].amount)>limit?limit-count:object[x].amount)+'/'+object[x].amount+'</center></td><td><center>'+object[x].buy+'</center></td></tr>\n';
			tally += ((count+object[x].amount)>limit?limit-count:object[x].amount);
			count += parseInt(object[x].amount);
			if (count > limit) {
				break;
			}
		}
		weaponsDiv += '<tr><td>Equipped Total '+tally+'/'+limit+'</td></tr>'
		weaponsDiv += '</table>';
	}
	
	function writeArmor(object,sortby,header,limit) {
		if (sortby == 'attack') {
			object.sort(function(a,b) { return parseInt(b.attack) - parseInt(a.attack) } );
		}
		if (sortby == 'defense') {
			object.sort(function(a,b) { return parseInt(b.defense) - parseInt(a.defense) } );
		}
		var count = 0;
		var tally = 0;
		armorDiv = '<table>';
		armorDiv += '<tr><th><h2>Top '+header+'</h2></th><th>Attack:</th><th>Defense:</th><th>Using:</th><th>Purchasable:</th></tr>';
		for (x in object) {
			armorDiv += '<tr><td>'+object[x].name+'</td><td><center>'+object[x].attack+'</center></td><td><center>'+object[x].defense+'</center></td><td><center>'+((count+object[x].amount)>limit?limit-count:object[x].amount)+'/'+object[x].amount+'</center></td><td><center>'+object[x].buy+'</center></td></tr>\n';
			tally += ((count+object[x].amount)>limit?limit-count:object[x].amount);
			count += parseInt(object[x].amount);
			if (count > limit) {
				break;
			}
		}
		armorDiv += '<tr><td>Equipped Total '+tally+'/'+limit+'</td></tr>'
		armorDiv += '</table>';
	}
	
	function writeVehicles(object,sortby,header,limit) {
		if (sortby == 'attack') {
			object.sort(function(a,b) { return parseInt(b.attack) - parseInt(a.attack) } );
		}
		if (sortby == 'defense') {
			object.sort(function(a,b) { return parseInt(b.defense) - parseInt(a.defense) } );
		}
		var count = 0;
		var tally = 0;
		vehiclesDiv = '<table>';
		vehiclesDiv += '<tr><th><h2>Top '+header+'</h2></th><th>Attack:</th><th>Defense:</th><th>Using:</th><th>Purchasable:</th></tr>';
		for (x in object) {
			vehiclesDiv += '<tr><td>'+object[x].name+'</td><td><center>'+object[x].attack+'</center></td><td><center>'+object[x].defense+'</center></td><td><center>'+((count+object[x].amount)>limit?limit-count:object[x].amount)+'/'+object[x].amount+'</center></td><td><center>'+object[x].buy+'</center></td></tr>\n';
			tally += ((count+object[x].amount)>limit?limit-count:object[x].amount);
			count += parseInt(object[x].amount);
			if (count > limit) {
				break;
			}
		}
		vehiclesDiv += '<tr><td>Equipped Total '+tally+'/'+limit+'</td></tr>'
		vehiclesDiv += '</table>';
	}
	
	function getInfo(resp){
		jQuery(resp).find('.item_list_wrap').children().each(function(){
			if(jQuery(this).attr('class') == 'alert_container'){
				return true;
			}else{
				var purchasable = false;
				if(jQuery(this).find('div[id^="buy_item_"]').length){
					purchasable = true;
				}
				var type = jQuery(this).find('.mid').attr('onclick');
				type = type.match(/'(.*?)'.*?,.*?'(.*?)'.*?,.*?'(.*?)'.*?,.*?'(.*?)'/);
				if (type[3] == 'weapon') {
					weapons[weapons.length] = new lootObject(jQuery(this).find('.item_title').text(),jQuery(this).find('.attack').text(),jQuery(this).find('.defense').text(),jQuery(this).find('span[id^="item_count_"]').text(),type[3],purchasable);
				}
				if (type[3] == 'powerup') {
					armor[armor.length] = new lootObject(jQuery(this).find('.item_title').text(),jQuery(this).find('.attack').text(),jQuery(this).find('.defense').text(),jQuery(this).find('span[id^="item_count_"]').text(),type[3],purchasable);			
				}
				if (type[3] == 'vehicle') {
					vehicles[vehicles.length] = new lootObject(jQuery(this).find('.item_title').text(),jQuery(this).find('.attack').text(),jQuery(this).find('.defense').text(),jQuery(this).find('span[id^="item_count_"]').text(),type[3],purchasable);				
				}
			}
		});
	}	
	
	jQuery('#gx_iaStopGo').click(function(){
		jQuery('#gx_iaMsg').html('Reading weapons page..')
		gx_iaRequest(docoHttp+'//mobwars-prod-ssl.metamoki.com/stockpile/?show_type=weapons', function(resp){
			getInfo(resp);
			jQuery('#gx_iaMsg').html('Reading armor page..')
			setTimeout(function(){
				gx_iaRequest(docoHttp+'//mobwars-prod-ssl.metamoki.com/stockpile/?show_type=armor', function(resp){
					getInfo(resp);
					jQuery('#gx_iaMsg').html('Reading vehicle page..')
					setTimeout(function(){
						gx_iaRequest(docoHttp+'//mobwars-prod-ssl.metamoki.com/stockpile/?show_type=vehicle', function(resp){
							getInfo(resp);
							jQuery('#gx_iaMsg').html('Reading special items page..')
							setTimeout(function(){
								gx_iaRequest(docoHttp+'//mobwars-prod-ssl.metamoki.com/stockpile/?show_type=power_item', function(resp){
									getInfo(resp);
									jQuery('#gx_iaMsg').hide();
									jQuery('#gx_aiDIV').show();
									jQuery('#gx_iaSBAttack').click(function(){
										var mafia = parseInt(jQuery("#hudUserTotalHands").text());
										writeWeapons(weapons,'attack','Weapons',mafia);
										writeArmor(armor,'attack','Armor',mafia);
										writeVehicles(vehicles,'attack','Vehicles',mafia);
										jQuery('#gx_aiTab_1').html(weaponsDiv);
										jQuery('#gx_aiTab_2').html(armorDiv);
										jQuery('#gx_aiTab_3').html(vehiclesDiv);
										return false;	
									});

									jQuery('#gx_iaSBDefense').click(function(){
										var mafia = parseInt(jQuery("#hudUserTotalHands").text());
										writeWeapons(weapons,'defense','Weapons',mafia);
										writeArmor(armor,'defense','Armor',mafia);
										writeVehicles(vehicles,'defense','Vehicles',mafia);
										jQuery('#gx_aiTab_1').html(weaponsDiv);
										jQuery('#gx_aiTab_2').html(armorDiv);
										jQuery('#gx_aiTab_3').html(vehiclesDiv);
										return false;	
									});
									setTimeout(function(){
										jQuery('#gx_iaSBAttack').click();
									},2000)
								})
							},2000)
						})
					},2000)
				})
			},2000)
		});
		return false;
	});	
	

	
	function gx_aiTabs(num){
		jQuery('[id^="gx_aiTab_"]').hide();
		jQuery('[id^="gx_aiTabMenu"]').css('background-color','orange');
		jQuery('#gx_aiTab_'+num).show();
		jQuery('#gx_aiTabMenu'+num).css('background-color','grey');		
	}	

    function gx_iaRequest(url, handler) {
        jQuery.ajax({
            type: "POST",
            url: url,
            cache: false,
            success: handler
        });
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
			pageTracker._trackPageview("/gx_ia");
		} catch(err){}
	}
	/*end analytics*/	
