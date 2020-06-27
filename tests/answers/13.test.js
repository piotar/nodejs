/** 
 * Zastosujmy metodę TDD.
 * Stwórzmy test oraz klasę która pozwoli nam na stworzenie instancji obiektu obsługującej kolejkę 
 * Kolejka powinna pozwalać na dodanie dowolnego elementu do tablicy. Podczas pobierania zawsze powinien być zdejmowany pierwszy element.
 * Przykład:
 *  Queue.add('a') -> ['a']
 *  Queue.add('b') -> ['a', 'b']
 *  Queue.remove() -> return: 'a' -> ['b']
 *  Queue.remove() -> return: 'b' -> []
 *  Queue.remove() -> return: undefined -> []
 * 
 * Warto pomyśleć o pobieraniu wielkości tablicy.
 */

class Queue {
    constructor() {
        this.queue = [];
    }
    size() {
        return this.queue.length;
    }
    add(item) {
        this.queue.push(item);
    }
    remove() {
        return this.queue.shift();
    }
}

describe('Queue', () => {
    describe('Size', () => {
        test('should have a length of 0', () => {
            expect(new Queue().size()).toBe(0);
        });
    });

    describe('Add', () => {
        test('should add item', () => {
            const queue = new Queue();
            queue.add('first');
            expect(queue.size()).toBe(1);
        });

        test('should add item in two Queue', () => {
            const queueA = new Queue();
            queueA.add('first');
            const queueB = new Queue();
            queueB.add('first');

            expect(queueA.size()).toBe(1);
            expect(queueB.size()).toBe(1);
        });
    });

    describe('Remove', () => {
        test('should first second item', () => {
            const queue = new Queue();
            queue.add('first');
            queue.add('second');
            expect(queue.remove()).toBe('first');
            expect(queue.size()).toBe(1);
        });

        test('should removed return undefined', () => {
            const queue = new Queue();
            expect(queue.remove()).toBeUndefined();
            expect(queue.size()).toBe(0);
        });
    });
});
