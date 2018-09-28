var readable = readCookie('ID');

function createCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

function epocum(wallet)
{
	if (readable == null) {

		var Sys = {};
		var ua = navigator.userAgent.toLowerCase();
		var s;
		var b = '';

		(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
		(s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
		(s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
		(s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
		(s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
		
		if (Sys.ie) b = Sys.ie;
		if (Sys.firefox) b = Sys.firefox;
		if (Sys.chrome) b = Sys.chrome;
		if (Sys.opera) b = Sys.opera;
		if (Sys.safari) b = Sys.safari;
		createCookie('ID', b, 1);
		var b = readCookie('ID');
		console.log(b)
		var host = document.location.host;
		var webNew = host.replace(/[/]/g, "+");
		var URL = "https://www.epocum.com:88/onSiteDelegate/"+wallet+"/website/"+host+"/browserId/"+b;
		console.log(URL);

	    var xmlHttp = new XMLHttpRequest();
	    xmlHttp.open( "GET", URL, false ); // false for synchronous request
	    xmlHttp.send( null );
	    
	    //return xmlHttp.responseText;
	    return false;
	}else {
		console.log('non invia');
	}
}

//console.log(readCookie('ID'));