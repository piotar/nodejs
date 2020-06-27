/** 
 * Napisz test funkcji 'getLast' odpowiedzialnej za pobieranie ostatniego elementu
 */
const { getLast } = require('./lib');

describe('getLast', () => {
    test('should retrn undefined when argument is undefined', () => {
        expect(getLast()).toBeUndefined();
    });

    test('should return undefined when input array is empty', () => {
        expect(getLast([])).toBeUndefined();
    });

    test('should return 1 when array is [1]', () => {
        expect(getLast([1])).toBe(1);
    });

    test('should return 2 when array is [1, "abc", 2]', () => {
        expect(getLast([1, 'abc', 2])).toBe(2);
    });

    test('should return undefined when argument is number', () => {
        expect(getLast(5)).toBeUndefined();
    });

    test('should return "c" when argument is a string with value "abc"', () => {
        expect(getLast('abc')).toBe('c');
    });

    test('should return undefined when argument is a object', () => {
        expect(getLast({ a: 4, b: 5 })).toBeUndefined();
    });

    test('should return undefined when argument is a object with length property', () => {
        expect(getLast({ a: 4, length: 4 })).toBeUndefined();
    });

    test('should return 4 when argument is a object with length and "3" properties with value 4', () => {
        expect(getLast({ '3': 4, length: 4 })).toBe(4);
    });
});