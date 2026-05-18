function esPar(n) {
    if (!Number.isInteger(n)) {
        throw new Error("n debe ser entero");
    }
    return n % 2 === 0;
}
module.exports = { esPar }; 
