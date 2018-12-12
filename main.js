$(document).ready(function(){
   var mymap = L.map('mymap',
                   {center:[52.1,21.0],
                   zoom:10,
                   zoomControl:false,
                   attributionControl:false}
                   ); 
    
    var lyrOSM =L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');mymap.addLayer(lyrOSM);
    
});