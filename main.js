$(document).ready(function(){
   var mymap = L.map('mymap',
                    {
                     center: [53.65, 15.6], 
                     zoom: 11,
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
    var lyrGM = L.tileLayer.wms('http://localhost:8095/geoserver/ATE_Workspace/wms',
                                 { 
                                    Layers: 'gmina_lobez',
                                        format: 'image/png',
                                        transparent: 'true',
                                        version: '1.1.1'     
        
        
    }
                                 );
    var lyrKO = L.tileLayer.wms('http://localhost:8095/geoserver/ATE_Workspace/wms',
                                 { 
                                    Layers: 'kolej',
                                        format: 'image/png',
                                        transparent: 'true',
                                        version: '1.1.1'     
        
        
    }
                                 );

    var lyrSZ = L.tileLayer.wms('http://localhost:8095/geoserver/ATE_Workspace/wms',
                                 { 
                                    Layers: 'szkoly',
                                        format: 'image/png',
                                        transparent: 'true',
                                        version: '1.1.1'     
        
        
    }
                                 );
    var lyrCM = L.tileLayer.wms('http://localhost:8095/geoserver/ATE_Workspace/wms',
                                 { 
                                    Layers: 'cmentarze',
                                        format: 'image/png',
                                        transparent: 'true',
                                        version: '1.1.1'     
        
        
    }
                                 );
    var lyrTM = L.tileLayer.wms('http://localhost:8095/geoserver/ATE_Workspace/wms',
                                 { 
                                    Layers: 'tereny_miesz',
                                        format: 'image/png',
                                        transparent: 'true',
                                        version: '1.1.1'     
        
        
    }
                                 );
     var lyrTM = L.tileLayer.wms('http://localhost:8095/geoserver/ATE_Workspace/wms',
                                 { 
                                    Layers: 'tereny_miesz',
                                        format: 'image/png',
                                        transparent: 'true',
                                        version: '1.1.1'     
        
        
    }
                                 );
     var lyrWL = L.tileLayer.wms('http://localhost:8095/geoserver/ATE_Workspace/wms',
                                 { 
                                    Layers: 'wody_l',
                                        format: 'image/png',
                                        transparent: 'true',
                                        version: '1.1.1'     
        
        
    }
                                 );
    var lyrWP = L.tileLayer.wms('http://localhost:8095/geoserver/ATE_Workspace/wms',
                                 { 
                                    Layers: 'woda_pow',
                                        format: 'image/png',
                                        transparent: 'true',
                                        version: '1.1.1'     
        
        
    }
                                 );
     var lyrDR = L.tileLayer.wms('http://localhost:8095/geoserver/ATE_Workspace/wms',
                                 { 
                                    Layers: 'drogi',
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
    var overlays = { "Granica gminy": lyrGM,
                     "Bufory dla kolei": lyrKO,
                     "Bufory dla szkół": lyrSZ,
                    "Bufory dla cmentarzy": lyrCM,
                    "Bufory dla terenów mieszkaniowych": lyrTM,
                    "Bufory dla wód liniowych": lyrWL,
                    "Bufory dla wód powierzchniowych": lyrWP,
                    "Bufory dla dróg": lyrDR
                    
        
         };
    //lista checkboxow
    L.control.layers(baseMaps, overlays).addTo(mymap);
    L.control.scale().addTo(mymap);
    
});