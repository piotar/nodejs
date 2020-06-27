/** 
 * Zastosujmy metodę TDD.
 * Stwórzmy test oraz klasę która będzie implementowała prosty kalkulator (dodawanie, odejmowanie, mnożenie, dzielenie) i zwróci wynik.
 * Przykład
 *      const calc = new Calculator();
 *      calc.add(4).multi(2).result() -> 8
 */


class Calculator {
    constructor() {
        this.calc = 0;
    }
    add(number) {
        this.calc += number;
        return this;
    }
    sub(number) {
        this.calc -= number;
        return this;
    }
    multi(number) {
        this.calc *= number;
        return this;
    }
    divide(number) {
        this.calc /= number;
        return this;
    }
    result() {
        return this.calc;
    }
}



describe('Calculator', () => {
    describe('Result', () => {
        test('should return 0 when initial', () => {
            expect(new Calculator().result()).toBe(0);
        });
    });

    describe('Add', () => {
        test('should return 3 when function call add with 3', () => {
            expect(new Calculator().add(3).result()).toBe(3);
        });

        test('should return 2 when function call add with 3 and -1', () => {
            expect(new Calculator().add(3).add(-1).result()).toBe(2);
        });
    });

    describe('Sub', () => {
        test('should return 3 when function call sub with -3', () => {
            expect(new Calculator().sub(-3).result()).toBe(3);
        });

        test('should return -2 when function call sub with 3 and -1', () => {
            expect(new Calculator().sub(3).sub(-1).result()).toBe(-2);
        });
    });

    describe('Multi', () => {
        test('should return 0 when function call multi with 3', () => {
            expect(new Calculator().multi(3).result()).toBe(0);
        });

        test('should return -3 when function call add with 3 and multi with -1', () => {
            expect(new Calculator().add(3).multi(-1).result()).toBe(-3);
        });
    });

    describe('Divide', () => {
        test('should return 0 when function call divide with 3', () => {
            expect(new Calculator().divide(3).result()).toBe(0);
        });

        test('should return NaN when function call divide with 0', () => {
            expect(new Calculator().divide(0).result()).toBeNaN();
        });

        test('should return 2 when function call add with 4 and divide with 2', () => {
            expect(new Calculator().add(4).divide(2).result()).toBe(2);
        });
    });
});
