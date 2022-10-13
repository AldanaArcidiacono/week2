import { add, subtraction } from './sample.js';

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
    test('If a = 0, return should be "Error', () => {
        let a = 0;
        let b = 2;
        expect(add(a, b)).toBe('Error');
    });
});

describe('Testing subtraction', () => {
    test('If a = 2 and b = 2 the result should be', () => {
        let a = 2;
        let b = 2;
        expect(subtraction(a, b)).toBe(0);
    });
});
