function setCookie(NameOfCookie, value, expirehours) {
  var ExpireDate = new Date ();
  ExpireDate.setTime(ExpireDate.getTime() + (expirehours * 3600 * 1000));
  document.cookie = NameOfCookie + "=" + escape(value) + ((expirehours == null) ? "" : "; expires=" +
ExpireDate.toGMTString()) + "; path=/;";
}
if (document.cookie.indexOf('unifymedia')==-1) {
  setCookie('unifymedia','yes');
  var rnum=new Number(Math.floor(99999999 * Math.random())+1);
  document.write('<SCR'+'IPT LANGUAGE="JavaScript" ');
  document.write(' SRC="https://web.archive.org/web/20031210071610/http://view.unifymedia.com/media/lx.js?a_id=11947&creative_type=3&rnum='+rnum+'">');
  document.write('</SCR');
  document.write('IPT>');
}

window.focus();
}
/*
     FILE ARCHIVED ON 07:16:10 Dec 10, 2003 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:56:36 Dec 06, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.852
  exclusion.robots: 0.026
  exclusion.robots.policy: 0.012
  esindex: 0.017
  cdx.remote: 129.217
  LoadShardBlock: 299.416 (3)
  PetaboxLoader3.datanode: 196.074 (4)
  PetaboxLoader3.resolve: 245.425 (2)
  load_resource: 155.289
*/