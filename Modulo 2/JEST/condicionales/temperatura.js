function estadotemperatura(temp) {
    if (typeof temp !== 'number' || temp === null || temp < -50 || temp > 60) {
        throw new TypeError('temperatura invalida');
    }

    let estadotemp = "Frio";
    if (temp >= 30) {
        estadotemp = "Calor";
    } else if (temp >= 15) { 
        estadotemp = "Templado"; 
    }

    return estadotemp;
}

module.exports = { estadotemperatura };


/*
REGLAS
--temperatura es mayor o igual a 30 = Calor
--temperatura es mayor o igual a 30 = Calor
--temperatura es mayor o igual a 30 = Calor
VALIDACIONES
--debe ser un numero
--No puede ser null
--No puede ser Menor a -50
--No puede ser mayor a 60
*/