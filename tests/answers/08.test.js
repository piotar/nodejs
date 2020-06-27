/** 
 * Napisz test funkcji 'inRange' odpowiedzialnej za sprawdzanie czy dana liczba jest w przedziale
 * funkcja przyjmuje 3 argumenty z czego 1 jest opcjonalny
 * przykład: 
 *   inRange(1, 2) // sprawdza czy liczba 1 jest w przedziale <0,2)
 *   inRange(3, 2, 10) // sprawdza czy liczba 3 jest w przedziale <2, 10)
 */
const { inRange } = require('./lib');

describe('inRange', () => {
    test('should be true when input is (1, 2)', () => {
        expect(inRange(1, 2)).toBeTruthy();
    });

    test('should be true when input is (3, 2, 10)', () => {
        expect(inRange(3, 2, 10)).toBeTruthy();
    });

    test('should be true when input is (3, 0, 10)', () => {
        expect(inRange(3, 0, 10)).toBeTruthy();
    });

    test('should be true when input is (0, 0, 1)', () => {
        expect(inRange(0, 0, 1)).toBeTruthy();
    });
});
