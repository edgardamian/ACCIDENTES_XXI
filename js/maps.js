// Inicialización del mapa y controles
function initializeMap() {
    // Inicializar configuración de idioma
    initializeI18n();
    
    // Crear el mapa
    const map = L.map('map', mapConfig.map);

    // Crear control de elevación
    const controlElevation = L.control.elevation(mapConfig.elevationControl.options).addTo(map);
    
    // Crear control de capas
    const controlLayer = L.control.layers(null, null, mapConfig.layersControl.options);

    // Event listener para cuando se cargan los datos de elevación
    controlElevation.on('eledata_loaded', ({layer, name}) => {
        controlLayer.addTo(map);
        
        layer.eachLayer((trkseg) => {
            if (trkseg.feature.geometry.type !== "Point") {
                const layerName = (trkseg.feature && 
                                 trkseg.feature.properties && 
                                 trkseg.feature.properties.name) || name;
                controlLayer.addOverlay(trkseg, layerName);
            }
        });
    });
    
    // Cargar los datos de elevación
    controlElevation.load(mapConfig.elevationControl.url);
}

// Inicializar el mapa cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initializeMap);