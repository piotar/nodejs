/** 
 * Napisz test funkcji 'divide' odpowiedzialnej za dzielenie 2 liczb
 */
const { divide } = require('./lib');
describe('divide', () => {
    test('should return 1 when input is (2, 2)', () => {
        expect(divide(2, 2)).toBe(1);
    });

    test('should return 2 when input is (4, 2)', () => {
        expect(divide(4, 2)).toBe(2);
    });
    
    test('should return -2 when input is (4, 2)', () => {
        expect(divide(-4, 2)).toBe(-2);
    });

    test('should return 0.5 when input is (2, 4)', () => {
        expect(divide(2, 4)).toBe(.5);
    });

    test('should throw error when second argument is equal to 0', () => {
        expect(() => divide(2, 0)).toThrow();
    });
});