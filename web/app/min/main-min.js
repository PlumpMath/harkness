var getUrlValue=function(t){for(var e=window.location.search.substring(1),o=e.split("&"),l=0;l<o.length;l++){var f=o[l].split("=");if(f[0]===t)return f[1]}};$(function(){var t=new showdown.Converter;$(".markdown").each(function(e){$(this).html(t.makeHtml($(this).html()))}),ui.start(),people.start(),table.start();var e='{"AT":{"top":523,"left":129},"CK":{"top":37,"left":88},"CD":{"top":488,"left":59},"DC":{"top":338,"left":415},"DP":{"top":525,"left":337},"IN":{"top":9,"left":199},"JP":{"top":87,"left":34},"MS":{"top":144,"left":390},"NJ":{"top":387,"left":30},"RN":{"top":57,"left":356},"RS":{"top":544,"left":231},"TZ":{"top":280,"left":-3},"VL":{"top":244,"left":406},"VW":{"top":427,"left":388},"YK":{"top":188,"left":22},"DT":{"top":21,"left":284}}';table.loadLocations(e),detect.start(),timekeeper.start(),$(function(){})});