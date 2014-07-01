var regex = /'file': '(.+?)'/;
var url = document.URL;
var ein = /einthusan/;
var allmyv = /allmyvideos/;
var vidto = /vidto/;
var playedto = /played/;
var megafiles = /megafiles/;
var bestreams = /bestreams/;
var cbs = /cbs/;
var vk = /vk/;
var streamcloud = /streamcloud/;
var vidspot = /vidspot/;
var magnovideo = /magnovideo/;
var mega = /mega/;


if(allmyv.test(url)){
    regex= /"file" : "(.+?)",/;
    
    
}
else if(vidto.test(url)){
    regex = /file_link = '(.+?)'/;
}
else if(playedto.test(url)){
    regex = /file: "(.+?)"/;
}
else if(megafiles.test(url)){
    regex = /file_link = '(.+?)'/;
}
else if(bestreams.test(url)){
    regex = /file: "(.+?)"/;
}
else if(cbs.test(url)){
    regex = /video.settings.pid = '(.*?)'/;
}
else if(vk.test(url)){
    regex = /"url360":"(.+?)"/;
}    
else if(streamcloud.test(url)){
    regex = /file: "(.+?)"/;
}
else if(vidspot.test(url)){
    regex = /"file" : "(.+?)",/;
}
else if(magnovideo.test(url)){
    regex = /swf?flv=(.+?)/;
}


var StreamUrl = regex.exec(document.body.innerHTML)[1];


var ip = '192.168.0.192';

var xbmc = 'http://'+ip+':80/jsonrpc?request={"jsonrpc":"2.0","method":"Player.Open","params":{"item":{"file":"'+StreamUrl+'"}}}';
    
httpGet(xbmc);

function httpGet(theUrl)
{
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
}
