// Configuración del mapa y controles
const mapConfig = {
    map: {
        center: [18.991572, -102.104418],
        zoom: 5,
        fullscreenControl: false,
        resizerControl: true,
        preferCanvas: true,
        rotate: true,
        // bearing: 45,
        rotateControl: {
            closeOnZeroBearing: true
        },
    },
    elevationControl: {
        url: "tracks/autopista_perfil.geojson",
        //url: "ftp://dvloop%40implanmorelia.org@implanmorelia.org/autopista_perfil.geojson",
        options: {
            theme: "lime-theme",
            collapsed: false,
            autohide: false,
            autofitBounds: true,
            position: "bottomleft",
            detached: true,
            summary: "inline",
            imperial: false,
            altitude: true,
            slope: "disabled",
            speed: false,
            acceleration: false,
            time: true,
            legend: true,
            followMarker: true,
            almostOver: true,
            distanceMarkers: false,
            hotline: true,
            waypoints: true,
            wptLabels: "dots",
            wptIcons: {
                '': L.divIcon({
                    className: 'elevation-waypoint-marker',
                    iconSize: [5, 5]
                }),
            },
        },
    },
    layersControl: {
        options: {
            collapsed: false,
        },
    },
};