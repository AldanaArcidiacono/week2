import { add, division, subtraction } from './sample.js';

describe('Testing add', () => {
    test('If a = 2 and b = 2 add should be', () => {
        let a = 2;
        let b = 2;
        expect(add(a, b)).toBe(4);
    });
    test('If a = 2 and b = 2 add should be', () => {
        let a = 2;
        let b = 2;
        expect(add(a, b)).toBeLessThan(5);
    });
});

describe('Testing subtraction', () => {
    test('If a = 8 and b = 5 the result should be', () => {
        let a = 8;
        let b = 5;
        expect(subtraction(a, b)).toBe(3);
    });
});

describe('Testing division', () => {
    test('If a = 4 and b = 2 add should be', () => {
        let a = 4;
        let b = 2;
        expect(division(a, b)).toBe(2);
    });
    test('If b = 0, should throw an "Error"', () => {
        let a = 2;
        let b = 0;
        expect(() => {
            division(a, b);
        }).toThrow();
    });
    test('If a = null, should throw an "Error"', () => {
        let a = null;
        let b = 5;
        try {
            division(a, b);
        } catch (e) {
            expect(e.message).toBe('Error: Parámetros no válidos');
        }
    });
    test('If a = pepe, should throw an "Error"', () => {
        let a = 'pepe';
        let b = 5;
        try {
            division(a, b);
        } catch (e) {
            expect(e.message).toBe('Error: Parámetros no válidos');
        }
    });
});
