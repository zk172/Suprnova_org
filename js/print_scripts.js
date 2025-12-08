torrent_servers = Array();

function at (torrent_id, torrent_additiondate_day, torrent_server_id, torrent_viewserver_id, torrent_view_link, torrent_link_desc, torrent_name, torrent_link, torrent_filesize_mb, torrent_lastnrseeds, torrent_lastnrleeches, torrent_quality, torrent_submitter_id, torrent_submitter_nickname, torrent_submitter_status, torrent_infolink, torrent_type_id, torrent_tracker_has_nostats, torrent_tracker_has_unknownstats, torrent_lastcheck_nr_invalid, torrent_is_moderated, torrent_is_deleted, torrent_is_softdeleted, torrent_has_rights)
{
	if ( torrent_server_id )
		torrent_link = torrent_servers[torrent_server_id] + '/torrents/' + torrent_link;
	else
		torrent_link = 'javascript:alert("No known mirror")';
	

	if ( torrent_viewserver_id )
		torrent_view_link = torrent_servers[torrent_viewserver_id] +'/view_torrent/'+ torrent_view_link; 
	else
		torrent_view_link = 'javascript:alert("No known view mirror");';
	
	
	
	document.write('<tr>')
	if ( torrent_has_rights )
		document.write("<td class='torrent-select-td'><input type='checkbox' name='data[torrentids][]' value='"+ torrent_id +"'></td>");
	
	document.write("<td class='torrent-date-td' nowrap>"+torrent_additiondate_day+"</td><td class='torrent-name-td'>");
	
	if ( torrent_view_link )
		document.write("<a href='"+torrent_view_link+"'><img src='info.gif' alt='"+torrent_link_desc+"' width=14 height=14 border=0 align='absmiddle'></a>"); 
	else
		document.write("<img src='info.gif' alt='"+torrent_link_desc+"' width=14 height=14 border=0 align='absmiddle'>");

	if ( torrent_is_moderated )
		document.write("<img src='moderated.gif' width=14 height=14 border=0 align='absmiddle'>");
	
	if ( torrent_is_softdeleted )
		document.write("<img src='soft-deleted.gif' width=14 height=14 border=0 align='absmiddle'>");
	else if ( torrent_is_deleted )
		document.write("<img src='deleted.gif' width=14 height=14 border=0 align='absmiddle'>");


	torrent_name_desc = torrent_name;

	max_length = 38;
	
	if ( torrent_is_moderated ) 
		max_length -= 3;

	if ( torrent_is_deleted || torrent_is_softdeleted  ) 
		max_length -= 3;

	if ( torrent_name.length > Math.round(max_length) )
		torrent_name = torrent_name.substring(0,Math.round(max_length)-2)+'...';

	document.write("<a href='"+torrent_link+"' class='torrent-link' title='"+torrent_name_desc+"'>"+torrent_name+"</a></td>");
	document.write("<td class='torrent-filesize-td'>"+torrent_filesize_mb+"</td>");
	
	if ( torrent_tracker_has_nostats )
	{
		if ( torrent_tracker_has_unknownstats )
			document.write("<td class='torrent-nostats-td' colspan=2>-unknown-</td>");
		else
			document.write("<td class='torrent-nostats-td' colspan=2>-no stats-</td>");
	}
	else
	{
		if ( torrent_lastcheck_nr_invalid )
			document.write("<td class='torrent-nostats-td' colspan=2>-unknown-</td>");
		else
			document.write("<td class='torrent-seeds-"+(torrent_lastnrseeds == "0"?"empty-":"")+"td'>"+ torrent_lastnrseeds +"</td><td class='torrent-leeches-td'>"+ torrent_lastnrleeches +"</td>");
	}
	
	
	document.write("<td class='torrent-quality-td'>"+torrent_quality+"</td>");
	if ( torrent_has_rights && torrent_server_id == -1 )
		document.write("<td class='torrent-submitter-td'><a href='"+ torrent_servers[torrent_server_id] +"/my_torrents/"+ torrent_submitter_id +"'><span class='status-"+ (torrent_submitter_nickname != ''? torrent_submitter_status : "anonymous") +"'>"+ (torrent_submitter_nickname != ''? torrent_submitter_nickname : "anonymous") +"</span></a></td>");
	else
		document.write("<td class='torrent-submitter-td'><span class='status-"+ (torrent_submitter_nickname != ''? torrent_submitter_status : "anonymous") +"'>"+ (torrent_submitter_nickname != ''? torrent_submitter_nickname : "anonymous") +"</span></td>");
		
	document.write("<td class='torrent-info-td'>"+ (torrent_infolink?"<a href='"+torrent_infolink+"' target='_blank'>"+ (torrent_type_id == 2?"imdb":"link") +"</a>":"-") +"</td></tr>");
}

function at_header( torrent_has_rights, category_type_id )
{
	document.write("<tr>"+ (torrent_has_rights?"<td class='torrentheader-select-td'>&nbsp;</td>":"") +"<td class='torrentheader-date-td'>Added</td><td class='torrentheader-name-td'>Name</td><td class='torrentheader-filesize-td'>Filesize</td><td class='torrentheader-seeds-td'>Seeds</td><td class='torrentheader-leeches-td'>DLs</td><td class='torrentheader-quality-td'>"+ (category_type_id == 4?"Bitrate":"Quality") +"</td><td class='torrentheader-submitter-td'>Submitter</td><td class='torrentheader-info-td'>Info</td></tr>");
}


/*
     FILE ARCHIVED ON 17:43:54 Jun 26, 2004 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:06:19 Dec 04, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.601
  exclusion.robots: 0.028
  exclusion.robots.policy: 0.013
  esindex: 0.01
  cdx.remote: 17.614
  LoadShardBlock: 165.23 (3)
  PetaboxLoader3.datanode: 175.087 (4)
  PetaboxLoader3.resolve: 451.944 (2)
  load_resource: 548.7
*/