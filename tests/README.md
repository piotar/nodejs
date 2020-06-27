# Node.js - dodatkowe zajęcia dla chętnych

## Testowanie aplikacji

`Jest` framework do testowania aplikacji napisanych w języku JavaScript.

> Strona projektu: https://jestjs.io/

> Dokumentacja: https://jestjs.io/docs/en/getting-started

> API: https://jestjs.io/docs/en/api

### instalacja i konfiguracja

```
npm install jest @types/jest
```

### przykład 
```javascript
const sum = (a, b) => a + b;

describe('calculator tests', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('adds 1 + -2 to equal -1', () => {
        expect(sum(1, -2)).toBe(-1);
    });
    // ...
});
```

## Zadania do wykonania na laboratorium

W tym laboratorium treść zadań znajduje się w oddzielnych plikach aplikacji w katalogu `tasks`. W katalogu `answers` znajdują się rozwiązania zadań.