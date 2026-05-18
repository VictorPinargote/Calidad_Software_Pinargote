function evaluarnota(nota) {
    if (!Number.isInteger(nota)||nota<0||nota>10) {
        throw new TypeError('nota invalida');
    estado = "Reprobado"
    }
    if (nota > 7) {
        estado = "Aprobado"
    }
    if (nota >= 4) {
        estado = "Supletorio"
    }
    return estado;
}
module.exports = { evaluarnota }; 

/*
mayor a 7 aprobado
entre 4 y 7 supletorio
menor a 7 reprobado
*/