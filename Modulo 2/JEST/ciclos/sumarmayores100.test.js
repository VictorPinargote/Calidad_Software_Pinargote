const { sumarmayores100 } = require('./sumarmayores100');

describe('Sumar mayores 100', () =>{
    test('Happy path: n = [101,102,103] => 100',()=>{
        expect(sumarmayores100([101,102,103])).toBe(3);
    })
    test('Happy path: n = [6,6,6] => 6',()=>{
        expect(sumarmayores100([6,6,6])).toBe(0);
    })
    test('Sad path: n invalido',()=>{
        expect(()=>sumarmayores100(0)).toThrow('Arreglo no valido');
        expect(()=>sumarmayores100([])).toThrow('Arreglo no valido');
    })
})
