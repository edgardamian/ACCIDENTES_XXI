// Configuración de internacionalización (i18n) en español
function initializeI18n() {
    // Registrar locale personalizado en español
    L.registerLocale('es', {
        "Acceleration"      : "Aceleración",
        "Altitude"          : "Elevación",
        "Slope"             : "Pendiente",
        "Speed"             : "Velocidad",
        "Total Length: "    : "Longitud Total: ",
        "Max Elevation: "   : "Elevación Máx: ",
        "Min Elevation: "   : "Elevación Mín: ",
        "Avg Elevation: "   : "Elevación Prom: ",
        "Total Time: "      : "Tiempo Total: ",
        "Total Ascent: "    : "Ascenso Total: ",
        "Total Descent: "   : "Descenso Total: ",
        "Min Slope: "       : "Pendiente Mín: ",
        "Max Slope: "       : "Pendiente Máx: ",
        "Avg Slope: "       : "Pendiente Prom: ",
        "Min Speed: "       : "Velocidad Mín: ",
        "Max Speed: "       : "Velocidad Máx: ",
        "Avg Speed: "       : "Velocidad Prom: ",
        "Min Acceleration: ": "Aceleración Mín: ",
        "Max Acceleration: ": "Aceleración Máx: ",
        "Avg Acceleration: ": "Aceleración Prom: ",
        // Etiquetas del tooltip
        "y: "               : "",
        "x: "               : "",
        "t: "               : "",
        "T: "               : "",
        "m: "               : "",
        "v: "               : "",
        "a: "               : "",
    });

    // Activar el idioma español
    L.setLocale('es');
}