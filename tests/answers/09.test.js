/** 
 * Napisz test funkcji 'reverse' odpowiedzialnej za odwrócenie tekstu lub tablicy
 */
const { reverse } = require('./lib');
describe('reverse', () => {
    test('should return "am" when input is "ma"', () => {
        expect(reverse('ma')).toBe('am');
    });

    test('should return "kajak" when input is "kayak"', () => {
        expect(reverse('kajak')).toBe('kajak');
    });

    test('should return [3, 2, 1] when input is [1, 2, 3]', () => {
        expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
    });

    test('should return "321" when input is 123', () => {
        expect(reverse(123)).toBe('321');
    });

    test('should return null when input argument is undefined', () => {
        expect(reverse()).toBe(null)
    });
});