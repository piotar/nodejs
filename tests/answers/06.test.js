/** 
 * Napisz test funkcji 'multi' odpowiedzialnej za mnożenie wielu liczb
 */
const { multi } = require('./lib');
describe('multi', () => {
    test('should return 1 when input arguments are 1 and 1', () => {
        expect(multi(1, 1)).toBe(1);
    });

    test('should return -1 when input arguments are -1 and 1', () => {
        expect(multi(-1, 1)).toBe(-1);
    });

    test('should return 1 when input arguments are -1 and -1', () => {
        expect(multi(-1, -1)).toBe(1);
    });

    test('should return 1 when input arguments are string "-1" and -1', () => {
        expect(multi('-1', -1)).toBe(1);
    });

    test('should return Nan when input arguments are NaN and -1', () => {
        expect(multi(NaN, -1)).toBeNaN();
    });

    test('should return -Infinity when input arguments are -Infinity and Infinity', () => {
        expect(multi(-Infinity, Infinity)).toBe(-Infinity);
    });

    test('should return 0.06 when input arguments are 0.2 and 0.3', () => {
        expect(multi(0.2, 0.3)).toBe(0.06);
    });

    test('should return undefined when length of arguments are 0', () => {
        expect(multi()).toBeUndefined();
    });

    test('should return 1 when input argument is 1', () => {
        expect(multi(1)).toBe(1);
    });

    test('should return 6 when input arguments are (1, 2, 3)', () => {
        expect(multi(1, 2, 3)).toBe(6);
    });
});