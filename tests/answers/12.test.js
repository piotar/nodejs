/** 
 * Zastosujmy metodę TDD.
 * Stwórzmy test oraz funkcję która pozwoli nam określić porę dnia
 * [
 *      'Night', // <0, 6) 
 *      'Morning', // <6, 12)
 *      'Afternoon', // <12, 18)
 *      'Evening' // <18, 24)
 * ]
 */

const timeOfDay = hours => hours < 6 ? 'night' :
    hours < 12 ? 'morning' :
        hours < 18 ? 'afternoon' :
            'evening';


describe('Time of day', () => {
    describe('Night', () => {
        test('mininum of night', () => {
            expect(timeOfDay(0)).toBe('night');
        });

        test('maximum of night', () => {
            expect(timeOfDay(5)).toBe('night');
        });
    });

    describe('Morning', () => {
        test('mininum of morning', () => {
            expect(timeOfDay(6)).toBe('morning');
        });

        test('maximum of morning', () => {
            expect(timeOfDay(11)).toBe('morning');
        });
    });

    describe('Afternoon', () => {
        test('mininum of afternoon', () => {
            expect(timeOfDay(12)).toBe('afternoon');
        });

        test('maximum of afternoon', () => {
            expect(timeOfDay(17)).toBe('afternoon');
        });
    });

    describe('Evening', () => {
        test('mininum of evening', () => {
            expect(timeOfDay(18)).toBe('evening');
        });

        test('maximum of evening', () => {
            expect(timeOfDay(24)).toBe('evening');
        });
    });
});
