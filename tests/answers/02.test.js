/** 
 * Napisz test funkcji 'Math.abs'
 */

// npx jest 02.test.js

describe('Math.abs', () => {
    test('should return 1 when input is -1', () => {
        expect(Math.abs(-1)).toBe(1);
    });

    test('should return 1 when input is string with value"-1"', () => {
        expect(Math.abs('-1')).toBe(1);
    });

    test('should return 5 when input is 5', () => {
        expect(Math.abs(5)).toBe(5);
    });

    test('should return NaN when input is NaN', () => {
        expect(Math.abs(NaN)).toBeNaN();
    });

    test('should return NaN when input is string without number', () => {
        expect(Math.abs('abc')).toBeNaN();
    });

    test('should return Infinity when input is -Infinity', () => {
        expect(Math.abs(-Infinity)).toBe(Infinity);
    });
});