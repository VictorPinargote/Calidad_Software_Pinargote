const { promedioArray } = require('./promedioArray');

describe('Promedio array', () =>{
    test('Happy path: n = [5,5,5] => 5',()=>{
        expect(promedioArray([5,5,5])).toBe(5);
    })
    test('Happy path: n = [6,6,6] => 6',()=>{
        expect(promedioArray([6,6,6])).toBe(6);
    })
    test('Sad path: n invalido',()=>{
        expect(()=>sumarhasta(0)).toThrow('arreglo no valido');
        expect(()=>sumarhasta([])).toThrow('arreglo no valido');
    })
})