var wms_layers = [];

var format_NetherlandsBorder_0 = new ol.format.GeoJSON();
var features_NetherlandsBorder_0 = format_NetherlandsBorder_0.readFeatures(json_NetherlandsBorder_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NetherlandsBorder_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NetherlandsBorder_0.addFeatures(features_NetherlandsBorder_0);
var lyr_NetherlandsBorder_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NetherlandsBorder_0, 
                style: style_NetherlandsBorder_0,
                popuplayertitle: 'Netherlands Border',
                interactive: false,
                title: '<img src="styles/legend/NetherlandsBorder_0.png" /> Netherlands Border'
            });
var format_HistoricCastlesoftheNetherlands_1 = new ol.format.GeoJSON();
var features_HistoricCastlesoftheNetherlands_1 = format_HistoricCastlesoftheNetherlands_1.readFeatures(json_HistoricCastlesoftheNetherlands_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HistoricCastlesoftheNetherlands_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HistoricCastlesoftheNetherlands_1.addFeatures(features_HistoricCastlesoftheNetherlands_1);
var lyr_HistoricCastlesoftheNetherlands_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HistoricCastlesoftheNetherlands_1, 
                style: style_HistoricCastlesoftheNetherlands_1,
                popuplayertitle: 'Historic Castles of the Netherlands',
                interactive: true,
                title: '<img src="styles/legend/HistoricCastlesoftheNetherlands_1.png" /> Historic Castles of the Netherlands'
            });

lyr_NetherlandsBorder_0.setVisible(true);lyr_HistoricCastlesoftheNetherlands_1.setVisible(true);
var layersList = [lyr_NetherlandsBorder_0,lyr_HistoricCastlesoftheNetherlands_1];
lyr_NetherlandsBorder_0.set('fieldAliases', {'fid': 'fid', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', });
lyr_HistoricCastlesoftheNetherlands_1.set('fieldAliases', {'fid': 'fid', 'Website': 'Website', 'Name': 'Name', 'Address': 'Address', 'Province': 'Province', 'Built/Origins': 'Built/Origins', 'Description': 'Description', 'Map Link': 'Map Link', });
lyr_NetherlandsBorder_0.set('fieldImages', {'fid': '', 'GID_0': '', 'COUNTRY': '', });
lyr_HistoricCastlesoftheNetherlands_1.set('fieldImages', {'fid': '', 'Website': '', 'Name': '', 'Address': '', 'Province': '', 'Built/Origins': '', 'Description': '', 'Map Link': '', });
lyr_NetherlandsBorder_0.set('fieldLabels', {'fid': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', });
lyr_HistoricCastlesoftheNetherlands_1.set('fieldLabels', {'fid': 'hidden field', 'Website': 'inline label - always visible', 'Name': 'inline label - always visible', 'Address': 'inline label - always visible', 'Province': 'inline label - always visible', 'Built/Origins': 'inline label - always visible', 'Description': 'inline label - always visible', 'Map Link': 'inline label - always visible', });
lyr_HistoricCastlesoftheNetherlands_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});