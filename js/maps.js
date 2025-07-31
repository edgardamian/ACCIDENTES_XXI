//---------------------------------------------------------------------------------------------------------
//Crear un objeto mapa
var map = L.map("map").setView([18.990811,-102.087551], 9);


//---------------------------------------------------------------------------------------------------------
//Añadir Mapas Base

//OpenStreetMap
var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");

//BlancoYNegro de Carto
var blackAndWhite = L.tileLayer("http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png").addTo(map);

//Google Maps Calles
var googleStreets = L.tileLayer("https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}");

//Google Maps Satélite
var googleSat = L.tileLayer("http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}");


//---------------------------------------------------------------------------------------------------------
//Agregar Archivos GeoJSON
var autopista = L.geoJSON(autopista);

console.log(autopista);

//---------------------------------------------------------------------------------------------------------
//Diccionario de Mapas Base
var baseMaps =	{			
					"Desactivar Mapas Base"	: L.layerGroup([]),
					"Calles colores"			: osm,
					"Calles oscuro"	: blackAndWhite,
					"Google Maps Calles"	: googleStreets,
					"Google Maps Satélite"	: googleSat
				};

//Diccionario de Capas
var layers =	{	
					"Autopista" : autopista
				};

//Añadir Control de Capas
L.control.layers(baseMaps, layers).addTo(map);