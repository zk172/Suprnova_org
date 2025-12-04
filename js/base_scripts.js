var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
function cmi( image, type )
{
	image.src = 'menu/sub_'+ type + '_on.gif';
}

function cmo( image, type )
{
	image.src = 'menu/sub_'+ type + '.gif';	
}
	
function toggleTop ( nextToggle )
{	
	if ( document.getElementById('top-toggle1').style.display == 'none' )
	{
		document.getElementById('top-toggle1').style.display = '';
		document.getElementById('top-toggle2').style.display = 'none';
	}
	else
	{
		document.getElementById('top-toggle1').style.display = 'none';
		document.getElementById('top-toggle2').style.display = '';
	}
	
	if ( nextToggle > 0 )
		setTimeout('toggleTop('+nextToggle+')',nextToggle);
}	

function toggleSubmitAs( type )
{
	if ( document.getElementById('new-account-table') )
	{
		if ( type == 'new_account' )
			document.getElementById('new-account-table').style.display = '';
		else
			document.getElementById('new-account-table').style.display = 'none';
	}
		
	if ( document.getElementById('login-table') )
	{
		if ( type == 'existing_account' )
			document.getElementById('login-table').style.display = '';
		else
			document.getElementById('login-table').style.display = 'none';
	}
}

function toggleNameGenerate( checkbox, textbox )
{
	if ( checkbox.checked )
	{
		textbox.disabled = true;
		textbox.style.backgroundColor = '#D4D4D4';
	}
	else
	{
		textbox.disabled = false;
		textbox.style.backgroundColor = '';		
	}
}

function toggleExtraInfo( select )
{
	if ( select.value == '1' )
		document.getElementById('games-extra-tr1').style.display = '';
	else
		document.getElementById('games-extra-tr1').style.display = 'none';

	if ( select.value == '2' )
	{
		document.getElementById('movie-extra-tr1').style.display = '';
		document.getElementById('movie-extra-tr2').style.display = '';
	}
	else
	{
		document.getElementById('movie-extra-tr1').style.display = 'none';
		document.getElementById('movie-extra-tr2').style.display = 'none';
	}
	
	if ( select.value == '3' )
		document.getElementById('tvshow-extra-tr1').style.display = '';
	else
		document.getElementById('tvshow-extra-tr1').style.display = 'none';

	if ( select.value == '7' )
		document.getElementById('anime-extra-tr1').style.display = '';
	else
		document.getElementById('anime-extra-tr1').style.display = 'none';
	
	if ( select.value == '4' )
		document.getElementById('music-extra-tr1').style.display = '';
	else
		document.getElementById('music-extra-tr1').style.display = 'none';

	if ( select.value == '1' ||  select.value == '2' || select.value == '3' || select.value == '4' || select.value == '7' )
		document.getElementById('general-extra-tr2').style.display = 'none';
	else
		document.getElementById('general-extra-tr2').style.display = '';

	if ( select.value == '2' )
		document.getElementById('general-extra-tr1').style.display = 'none';
	else
		document.getElementById('general-extra-tr1').style.display = '';
	
}

function changeSelectBox( select, value, target, select_opt )
{
    var x = select.options[select.selectedIndex].value;
    var old_value = target.value;
    
    /* Verwijder de huidige opties */
    for (m = target.options.length-1; m > 0; m--)
        target.options[m]=null;

	if ( !select_opt[x] )
	{
		select_opt[x] = new Array();
		select_opt[x][0] = new Option('----------------','0');
	}
	
    /* Voeg de nieuwe toe */
    for (i = 0; i < select_opt[x].length; i++)
        target.options[i]=new Option(select_opt[x][i].text,select_opt[x][i].value);

    /* Als de oude waarde ook nog in de nieuwe opties zit, selecteer hem */
    target.value = old_value;

    /* Als men een specifieke waarde wil selecteren */
    if ( value != 'undefined' )
        target.value = value;
    /* Als er geen waarde is geselecteerd, selecteer de eerste */
    if ( target.selectedIndex == -1 )
        target.options[0].selected = true;
}
    
function checkShure( checkbox )
{
//	if ( !checkbox.checked )
		checkbox.checked = confirm('You really sure want to delete those torrents?'); 
}
}
/*
     FILE ARCHIVED ON 06:01:37 Mar 31, 2004 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:06:20 Dec 04, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.746
  exclusion.robots: 0.025
  exclusion.robots.policy: 0.01
  esindex: 0.012
  cdx.remote: 24.039
  LoadShardBlock: 862.186 (3)
  PetaboxLoader3.resolve: 740.876 (4)
  PetaboxLoader3.datanode: 911.238 (4)
  load_resource: 896.046
*/