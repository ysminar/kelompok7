var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Windujaya_1 = new ol.format.GeoJSON();
var features_Windujaya_1 = format_Windujaya_1.readFeatures(json_Windujaya_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Windujaya_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Windujaya_1.addFeatures(features_Windujaya_1);
var lyr_Windujaya_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Windujaya_1, 
                style: style_Windujaya_1,
                popuplayertitle: "Windujaya",
                interactive: true,
                title: '<img src="styles/legend/Windujaya_1.png" /> Windujaya'
            });
var format_JalanWindujaya_2 = new ol.format.GeoJSON();
var features_JalanWindujaya_2 = format_JalanWindujaya_2.readFeatures(json_JalanWindujaya_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanWindujaya_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanWindujaya_2.addFeatures(features_JalanWindujaya_2);
var lyr_JalanWindujaya_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanWindujaya_2, 
                style: style_JalanWindujaya_2,
                popuplayertitle: "Jalan Windujaya",
                interactive: true,
                title: '<img src="styles/legend/JalanWindujaya_2.png" /> Jalan Windujaya'
            });
var format_SungaiWindujaya_3 = new ol.format.GeoJSON();
var features_SungaiWindujaya_3 = format_SungaiWindujaya_3.readFeatures(json_SungaiWindujaya_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SungaiWindujaya_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SungaiWindujaya_3.addFeatures(features_SungaiWindujaya_3);
var lyr_SungaiWindujaya_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SungaiWindujaya_3, 
                style: style_SungaiWindujaya_3,
                popuplayertitle: "Sungai Windujaya",
                interactive: true,
                title: '<img src="styles/legend/SungaiWindujaya_3.png" /> Sungai Windujaya'
            });
var format_TitikPengamatan_4 = new ol.format.GeoJSON();
var features_TitikPengamatan_4 = format_TitikPengamatan_4.readFeatures(json_TitikPengamatan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikPengamatan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikPengamatan_4.addFeatures(features_TitikPengamatan_4);
var lyr_TitikPengamatan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikPengamatan_4, 
                style: style_TitikPengamatan_4,
                popuplayertitle: "Titik Pengamatan",
                interactive: true,
    title: 'Titik Pengamatan<br />\
    <img src="styles/legend/TitikPengamatan_4_0.png" /> kebun itik 8<br />\
    <img src="styles/legend/TitikPengamatan_4_1.png" /> Lahan 1<br />\
    <img src="styles/legend/TitikPengamatan_4_2.png" /> tegalan titik 5<br />\
    <img src="styles/legend/TitikPengamatan_4_3.png" /> titik 10 sawah<br />\
    <img src="styles/legend/TitikPengamatan_4_4.png" /> titik 2<br />\
    <img src="styles/legend/TitikPengamatan_4_5.png" /> titik 3 ternak sapi<br />\
    <img src="styles/legend/TitikPengamatan_4_6.png" /> titik 4 ternak sapi dan kambing<br />\
    <img src="styles/legend/TitikPengamatan_4_7.png" /> titik 6 sawah<br />\
    <img src="styles/legend/TitikPengamatan_4_8.png" /> titik 7 kandang kambing<br />\
    <img src="styles/legend/TitikPengamatan_4_9.png" /> titik 9 sawah<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Windujaya_1.setVisible(true);lyr_JalanWindujaya_2.setVisible(true);lyr_SungaiWindujaya_3.setVisible(true);lyr_TitikPengamatan_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Windujaya_1,lyr_JalanWindujaya_2,lyr_SungaiWindujaya_3,lyr_TitikPengamatan_4];
lyr_Windujaya_1.set('fieldAliases', {'fid': 'fid', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'SUMBER': 'SUMBER', 'Luas': 'Luas', });
lyr_JalanWindujaya_2.set('fieldAliases', {'fid': 'fid', 'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SungaiWindujaya_3.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_TitikPengamatan_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Windujaya_1.set('fieldImages', {'fid': 'TextEdit', 'KABUPATEN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'DESA': 'TextEdit', 'SUMBER': 'TextEdit', 'Luas': 'TextEdit', });
lyr_JalanWindujaya_2.set('fieldImages', {'fid': 'TextEdit', 'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_SungaiWindujaya_3.set('fieldImages', {'fid': 'TextEdit', 'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_TitikPengamatan_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Windujaya_1.set('fieldLabels', {'fid': 'no label', 'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'DESA': 'inline label - always visible', 'SUMBER': 'no label', 'Luas': 'no label', });
lyr_JalanWindujaya_2.set('fieldLabels', {'fid': 'no label', 'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'inline label - always visible', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SungaiWindujaya_3.set('fieldLabels', {'fid': 'no label', 'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'inline label - always visible', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_TitikPengamatan_4.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'inline label - always visible', 'timestamp': 'inline label - always visible', 'begin': 'inline label - always visible', 'end': 'inline label - always visible', 'altitudeMode': 'inline label - always visible', 'tessellate': 'inline label - always visible', 'extrude': 'inline label - always visible', 'visibility': 'inline label - always visible', 'drawOrder': 'inline label - always visible', 'icon': 'inline label - always visible', });
lyr_TitikPengamatan_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});