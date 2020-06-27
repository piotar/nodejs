/** 
 * Napisz test funkcji 'Math.sqrt'
 */

// npx jest 03.test.js

describe('Math.sqrt', () => {
    test('should return 1 when input is 1', () => {
        expect(Math.sqrt(1)).toBe(1);
    });

    test('should return NaN when input is negative number', () => {
        expect(Math.sqrt(-1)).toBeNaN();
    });

    test('should return 3 when input is 9', () => {
        expect(Math.sqrt(9)).toBe(3);
    });

    test('should return Infinity when input is Infinity', () => {
        expect(Math.sqrt(Infinity)).toBe(Infinity);
    });

    test('should return NaN when input is string', () => {
        expect(Math.sqrt('abc')).toBeNaN();
    });
});
