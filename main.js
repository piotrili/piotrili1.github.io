$(document).ready(function(){
   var mymap = L.map('mymap',
                    {
                     center: [53.38, 15.37], 
                     zoom: 5,
                     zoomControl:true,
                     attributionControl:true
                    }
                    );
      
    
    var lyrORTO = L.tileLayer.wms('http://mapy.geoportal.gov.pl/wss/service/img/guest/ORTO/MapServer/WMSServer',
                                    {
                                        Layers: 'Raster',
                                        format: 'image/png',
                                        transparent: 'true',
                                        version: '1.1.1'
                                    }
                                 );
    
    var lyrSOZO = L.tileLayer.wms('http://mapy.geoportal.gov.pl/wss/service/img/guest/SOZO/MapServer/WMSServer',
                                    {
                                        Layers: 'Raster',
                                        format: 'image/png',
                                        transparent: 'true',
                                        version: '1.1.1'
                                    }
                                  );
    var lyrWOJ = L.tileLayer.wms('http://localhost:8095/geoserver/ATE_Workspace/wms',
                                 { 
                                    Layers: 'wojewodztwa',
                                        format: 'image/png',
                                        transparent: 'true',
                                        version: '1.1.1'     
        
        
    }
                                 );
    
    var lyrOSM = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
    mymap.addLayer(lyrOSM);

    var baseMaps = {
        "OpenStreetMaps": lyrOSM,
        "ORTOFOTOMAPA": lyrORTO,
        "Mapa sozlogiczna": lyrSOZO,
        
                                    };
    //lista obiektów typu checkbox
    var overlays = { "Mapa wojewodztw": lyrWOJ
        
         };
    //lista checkboxow
    L.control.layers(baseMaps, overlays).addTo(mymap);
    L.control.scale().addTo(mymap);
    
});