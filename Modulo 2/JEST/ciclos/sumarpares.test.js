const { sumarpares } = require('./sumarpares');

describe('Sumar pares', () =>{
    test('Happy path: n = [5,5,5] => 5',()=>{
        expect(sumarpares([5,5,5])).toBe(0);
    })
    test('Happy path: n = [6,6,6] => 6',()=>{
        expect(sumarpares([6,6,6])).toBe(3);
    })
    test('Sad path: n invalido',()=>{
        expect(()=>sumarpares(0)).toThrow('Arreglo no valido');
        expect(()=>sumarpares([])).toThrow('Arreglo no valido');
    })
})