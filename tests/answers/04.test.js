/** 
 * Napisz test funkcji 'sum' odpowiedzialnej za dodawanie 2 licz
 */
const { sum } = require('./lib');

describe('sum', () => {
    test('should return 2 when input arguments are (1, 1)', () => {
        expect(sum(1, 1)).toBe(2);
    });

    test('should return 0 when input arguments are (-1, 1)', () => {
        expect(sum(-1, 1)).toBe(0);
    });

    test('should return -2 when input arguments are (-1, -1)', () => {
        expect(sum(-1, -1)).toBe(-2);
    });

    test('should return -2 when input arguments are mixin string and number ("-1", -1)', () => {
        expect(sum('-1', -1)).toBe(-2);
    });

    test('should return NaN when input arguments are NaN and -1', () => {
        expect(sum(NaN, -1)).toBeNaN();
    });

    test('should return NaN when input arguments are -Infinity and Infinity', () => {
        expect(sum(-Infinity, Infinity)).toBeNaN();
    });

    test('should return 0.5 when input arguments are 0.2 and 0.3', () => {
        expect(sum(0.2, 0.3)).toBe(0.5);
    });
});
