/** 
 * Zastosujmy metodę TDD.
 * Stwórzmy test oraz funkcję która pozwoli na znalezienie maksymalnej wartości w zbiorze
 */

/**
 * Na samym początku tworzymy przykładowe testy pozwalające na określenie jak ma działać funkcja oraz jakie wartości ma obsługiwać
 * kolejnym krokiem jest napisanie funkcji tak aby nasze testy były pozytywne
 */


const max = array => array && array.length && Array.isArray(array) ? Math.max(...array) : undefined;

describe('max', () => {
    test('should return undefined when input array is empty', () => {
        expect(max([])).toBeUndefined();
    });

    test('should return 4 when input is [2, 4, 3]', () => {
        expect(max([2, 4, 3])).toBe(4);
    });

    test('should return 4 when input is [4]', () => {
        expect(max([4])).toBe(4);
    });

    test('should return 4 when input is [-2, -4, -3]', () => {
        expect(max([-2, -4, -3])).toBe(-2);
    });

    test('should return undefined when input is string', () => {
        expect(max('ala ma kota')).toBeUndefined();
    });

    test('should return undefined when input is number', () => {
        expect(max(123)).toBeUndefined();
    });
});
