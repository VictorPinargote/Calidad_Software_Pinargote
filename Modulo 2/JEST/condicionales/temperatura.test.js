const { estadotemperatura } = require('./temperatura');

describe('estadotemperatura', () => {
    test('Happy path: 50 => Calor', () => {
        expect(estadotemperatura(50)).toBe('Calor'); // Cambiado 10 por 50
    });

    test('Happy path: 20 => Templado', () => {
        expect(estadotemperatura(20)).toBe('Templado'); // Cambiado 5 por 20 y 'Templado' con T mayúscula
    });

    test('Happy path: 2 => Frio', () => {
        expect(estadotemperatura(2)).toBe('Frio');
    });

    test('Sad path: temperatura invalida', () => {
        expect(() => estadotemperatura(-51)).toThrow('temperatura invalida');
        expect(() => estadotemperatura(61)).toThrow('temperatura invalida'); // Quitamos las comillas para probar el límite numérico directo
        expect(() => estadotemperatura('texto')).toThrow('temperatura invalida'); // Test extra para verificar que rechaza strings
    });
});
