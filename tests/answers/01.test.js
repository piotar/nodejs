/** 
 * Napisz test funkcji 'indexOf' w tablicy
 * przykład tablicy: [ 1, 4, 20, 5 ]
 */

// npx jest 01.test.js

describe('Array.indexOf', () => {
    let array
    beforeEach(() => {
        array = [1, 4, 20, 5];
    });

    test('should return -1 when array item not found', () => {
        expect(array.indexOf(30)).toBe(-1);
    });

    test('should return -1 when array item not found in empty array', () => {
        expect([].indexOf(30)).toBe(-1);
    });

    test('should return 2 when item found in array on position 3', () => {
        const result = array.indexOf(20);
        expect(result).toBe(2);
    });

    test('should return 3 when "abc" found on poston 4', () => {
        const result = [1, 4, 0, 'abc', 5].indexOf('abc');
        expect(result).toBe(3)
    });
});