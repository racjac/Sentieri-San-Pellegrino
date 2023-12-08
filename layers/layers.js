var wms_layers = [];

var format_laviadelpellegrino_0 = new ol.format.GeoJSON();
var features_laviadelpellegrino_0 = format_laviadelpellegrino_0.readFeatures(json_laviadelpellegrino_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_laviadelpellegrino_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_laviadelpellegrino_0.addFeatures(features_laviadelpellegrino_0);
var lyr_laviadelpellegrino_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_laviadelpellegrino_0, 
                style: style_laviadelpellegrino_0,
                interactive: true,
                title: '<img src="styles/legend/laviadelpellegrino_0.png" /> la via del pellegrino'
            });
var format_laviadeglialpeggi_1 = new ol.format.GeoJSON();
var features_laviadeglialpeggi_1 = format_laviadeglialpeggi_1.readFeatures(json_laviadeglialpeggi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_laviadeglialpeggi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_laviadeglialpeggi_1.addFeatures(features_laviadeglialpeggi_1);
var lyr_laviadeglialpeggi_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_laviadeglialpeggi_1, 
                style: style_laviadeglialpeggi_1,
                interactive: true,
                title: '<img src="styles/legend/laviadeglialpeggi_1.png" /> la via degli alpeggi'
            });
var format_laviadeicastagneticerasa_2 = new ol.format.GeoJSON();
var features_laviadeicastagneticerasa_2 = format_laviadeicastagneticerasa_2.readFeatures(json_laviadeicastagneticerasa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_laviadeicastagneticerasa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_laviadeicastagneticerasa_2.addFeatures(features_laviadeicastagneticerasa_2);
var lyr_laviadeicastagneticerasa_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_laviadeicastagneticerasa_2, 
                style: style_laviadeicastagneticerasa_2,
                interactive: true,
                title: '<img src="styles/legend/laviadeicastagneticerasa_2.png" /> la via dei castagneti cerasa'
            });
var format_laviadellelamedicapraia_3 = new ol.format.GeoJSON();
var features_laviadellelamedicapraia_3 = format_laviadellelamedicapraia_3.readFeatures(json_laviadellelamedicapraia_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_laviadellelamedicapraia_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_laviadellelamedicapraia_3.addFeatures(features_laviadellelamedicapraia_3);
var lyr_laviadellelamedicapraia_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_laviadellelamedicapraia_3, 
                style: style_laviadellelamedicapraia_3,
                interactive: true,
                title: '<img src="styles/legend/laviadellelamedicapraia_3.png" /> la via delle lame di capraia'
            });
var format_laviadellepraterie_4 = new ol.format.GeoJSON();
var features_laviadellepraterie_4 = format_laviadellepraterie_4.readFeatures(json_laviadellepraterie_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_laviadellepraterie_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_laviadellepraterie_4.addFeatures(features_laviadellepraterie_4);
var lyr_laviadellepraterie_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_laviadellepraterie_4, 
                style: style_laviadellepraterie_4,
                interactive: true,
                title: '<img src="styles/legend/laviadellepraterie_4.png" /> la via delle praterie'
            });
var lyr_CTR10KDatasetcoordinato_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www502.regione.toscana.it/ows_ctr/com.rt.wms.RTmap/ows?map%3Dowsctr",
    attributions: ' ',
                              params: {
                                "LAYERS": "rt_ctr.10k",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "CTR10K. Dataset coordinato",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_CTR10KDatasetcoordinato_5, 0]);

lyr_laviadelpellegrino_0.setVisible(true);lyr_laviadeglialpeggi_1.setVisible(true);lyr_laviadeicastagneticerasa_2.setVisible(true);lyr_laviadellelamedicapraia_3.setVisible(true);lyr_laviadellepraterie_4.setVisible(true);lyr_CTR10KDatasetcoordinato_5.setVisible(true);
var layersList = [lyr_laviadelpellegrino_0,lyr_laviadeglialpeggi_1,lyr_laviadeicastagneticerasa_2,lyr_laviadellelamedicapraia_3,lyr_laviadellepraterie_4,lyr_CTR10KDatasetcoordinato_5];
lyr_laviadelpellegrino_0.set('fieldAliases', {'id': 'id', 'lung': 'lung', });
lyr_laviadeglialpeggi_1.set('fieldAliases', {'id': 'id', 'lung': 'lung', });
lyr_laviadeicastagneticerasa_2.set('fieldAliases', {'id': 'id', 'lung': 'lung', });
lyr_laviadellelamedicapraia_3.set('fieldAliases', {'id': 'id', 'lung': 'lung', 'foto': 'foto', });
lyr_laviadellepraterie_4.set('fieldAliases', {'id': 'id', 'lung': 'lung', });
lyr_laviadelpellegrino_0.set('fieldImages', {'id': 'TextEdit', 'lung': 'TextEdit', });
lyr_laviadeglialpeggi_1.set('fieldImages', {'id': 'TextEdit', 'lung': 'TextEdit', });
lyr_laviadeicastagneticerasa_2.set('fieldImages', {'id': 'TextEdit', 'lung': 'TextEdit', });
lyr_laviadellelamedicapraia_3.set('fieldImages', {'id': 'TextEdit', 'lung': 'TextEdit', 'foto': 'ExternalResource', });
lyr_laviadellepraterie_4.set('fieldImages', {'id': 'TextEdit', 'lung': 'TextEdit', });
lyr_laviadelpellegrino_0.set('fieldLabels', {'id': 'no label', 'lung': 'no label', });
lyr_laviadeglialpeggi_1.set('fieldLabels', {'id': 'no label', 'lung': 'no label', });
lyr_laviadeicastagneticerasa_2.set('fieldLabels', {'id': 'no label', 'lung': 'no label', });
lyr_laviadellelamedicapraia_3.set('fieldLabels', {'id': 'no label', 'lung': 'no label', 'foto': 'no label', });
lyr_laviadellepraterie_4.set('fieldLabels', {'id': 'no label', 'lung': 'no label', });
lyr_laviadellepraterie_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});