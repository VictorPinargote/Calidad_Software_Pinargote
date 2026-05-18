const { evaluarnota } = require('./evaluarnota');

describe('evaluarnota', () => {
    test('Happy path: 8 => Aprobado', () => {
        expect(evaluarnota(20)).toBe('Aprobado');
    });

    test('Happy path: 5 => Supletorio', () => {
        expect(evaluarnota(5)).toBe('Supletorio');
    });

    test('Happy path: 2 => Reprobado', () => {
        expect(evaluarnota(2)).toBe('Reprobado');
    });

    test('Sad path: nota invalida', () => {
        expect(() => puedeConducir(-1)).toThrow('edad invalida');
        expect(() => puedeConducir('18')).toThrow('edad invalida');
    });
});
