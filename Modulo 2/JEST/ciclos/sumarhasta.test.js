const { sumarhasta } = require('./sumarhasta');

describe('Suma hasta', () =>{
    test('Happy path: n = 5 => 15',()=>{
        expect(sumarhasta(5)).toBe(15);
    })
    test('Happy path: n = 1 => 1',()=>{
        expect(sumarhasta(1)).toBe(1);
    })
    test('Sad path: n invalido',()=>{
        expect(()=>sumarhasta(0)).toThrow('n debe ser entero mayor a 0');
        expect(()=>sumarhasta(2.6)).toThrow('n debe ser entero');
        expect(()=>sumarhasta('10')).toThrow('n debe ser numero');
    })
})