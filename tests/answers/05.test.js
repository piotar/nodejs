/** 
 * Napisz test funkcji 'sumMany' odpowiedzialnej za dodawanie wielu liczb
 */
const { sumMany } = require('./lib');

describe('sumMany', () => {
    test('should return 2 when input arguments are (1, 1)', () => {
        expect(sumMany(1, 1)).toBe(2);
    });

    test('should return 0 when input arguments are (-1, 1)', () => {
        expect(sumMany(-1, 1)).toBe(0);
    });

    test('should return -2 when input arguments are (-1, -1)', () => {
        expect(sumMany(-1, -1)).toBe(-2);
    });

    test('should return -2 when input arguments are string and number ("-1", -1)', () => {
        expect(sumMany('-1', -1)).toBe(-2);
    });

    test('should return NaN when input arguments are NaN and -1', () => {
        expect(sumMany(NaN, -1)).toBeNaN();
    });

    test('should return NaN when input arguments are -Infinity and Infinity', () => {
        expect(sumMany(-Infinity, Infinity)).toBeNaN();
    });

    test('should return 0.5 when input arguments are 0.2 and 0.3', () => {
        expect(sumMany(0.2, 0.3)).toBe(0.5);
    });

    test('should return 0 when length of arguments are 0 ', () => {
        expect(sumMany()).toBe(0);
    });

    test('should return 1 when input argument are 1 ', () => {
        expect(sumMany(1)).toBe(1);
    });

    test('should return 6 when input arguments are (1, 2, 3)', () => {
        expect(sumMany(1, 2, 3)).toBe(6)
    });
});