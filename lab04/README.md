# Node.js - Laboratorium 4

## Wykład

https://slides.com/piotrtarasiuk/callback-and-promise

## `Promise`

```javascript
const myCustomPromise = new Promise((resolve, reject) => {
    if (/* some logic ... */) {
        resolve('yay! it works');
    } else {
        reject('something went wrong');
    }
});

myCustomPromise
    .then(result => {
        console.log(result);
        return 'some other text';
    })
    .then(text => {
        console.log(text);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('this message show up when all promises will end');
    });
```

## `util.promisify`

https://nodejs.org/dist/latest-v13.x/docs/api/util.html#util_util_promisify_original

```javascript
const util = require('util');
const fs = require('fs');

const writeFile = util.promisify(fs.writeFile);

const data = 'ala ma kota';

writeFile('some-file.txt', data)
    .then(() => {
        console.log('file saved');
    })
    .catch((error) => {
        console.log('error saving file', error);
    });
```

## Przydatne linki

- https://javascript.info/promise-basics
- https://developers.google.com/web/fundamentals/primers/promises
- https://exploringjs.com/es6/ch_promises.html
- https://medium.com/dailyjs/asynchronous-adventures-in-javascript-promises-1e0da27a3b4

## Zadania do wykonania na laboratorium

1. Stwórzmy pierwszą aplikację z wykorzystaniem `Promise`. Zadaniem jest stworzeniem funkcji zwracającej `Promise` któym rozwiązaniem ma być wartość `hello world`.

```javascript
const helloPromise = ... // <- implementacja Promise

helloPromise
    .then(text => {
        console.log(text);
    });
```

2. Zmodyfikuj zadanie 1 tak aby rozwiązanie `Promise` było asynchroniczne. Wykorzystajmy do tego celu funkcję `setTimeout` z 5 sekundowym opóźnieniem.

3. Zadaniem kolejnym jest stworzenie funkcji odejmowania 2 licz z wykorzystaniem `Promise`. Stwórzmy regułę jeżeli wynik działania będzie ujemny `Promise` powinien zwrócić błąd, jeżeli wynik jest dodatni `Promise` powinien się rozwiązać poprawnie przekazując wynik działania.

```javascript
const sub = (a, b) => {
    ... // <- implementacja Promise
}


sub(3, 4)
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    });
```


4. Wykorzystując wiedzę z poprzednich zajęć użyjmy zewnętrznej biblioteki `request` i pobierzmy użytkownika dane(https://jsonplaceholder.typicode.com/users/2). Przeróbmy tak wywołanie naszego zapytania aby wykorzystywało `Promise`.

```javascript
const getUser = (id) => {
    ... // <- implementacja Promise
}


getUser(2)
    .then(...)
    .catch(...);
```

5. Dodajmy do naszej aplikacji z zadania 4 pobieranie pogody dla naszego użytkownika. Podobnie jak w poprzednim laboratorium. Pamiętajmy o odpowiednim owrapowaniu naszego zapytania do pogody. Analogicznie jak w zadaniu 4. 

Endpoint do pogody: https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat={lat}&lon={lng}

Zarys wywołania aplikacji: 

```javascript
...
const getWeather = (lat, lng) => ...


getUser(2)
    .then(user => {
        ...
        return getWeather(...)
    })
    .then(weather => ...)
    .catch(...);
```


6. Zmodyfikujmy zadanie 5 tak, aby pobrać kilku użytkowników w tej samej chwili wykorzystując `Promise.all()`. Wyświetlmy ich imiona w konsoli. (id użytkowników: 2,5,7). Poinformujmy iż nasz `Promise` został w pełni rozwiązany. 

7. Rozszerzając zadanie 5 z wykorzystaniem wiedzy z poprzednich zajęć, zapiszmy nasz cały obiekt pogody do pliku wykorzystując wbudowany moduł `fs` i funkcję `writeFile`. Oczywiście zadanie polega na odpowiednim dostosowaniu funkcji aby obsługiwała `Promise`. 

8. Jak wiadomo świat JS jest bardzo rozbudowany i nie trzeba za każdym razem tworzyć od nowa konstrukcji asynchronicznych żądań do serwera. Są od tego biblioteki😊
Na stronie https://npmjs.org możemy znaleźć dużo różnych implementacji bibliotek które udostępniają już gotowe obiekty przystosowane do `Promise`, np.:
- axios (https://www.npmjs.com/package/axios)
- request-promise (https://www.npmjs.com/package/request-promise)

Zadaniem 8 jest wykorzystanie biblioteki `axios`. Z zadania 7 podmieńmy `request` wraz z naszymi `Promise` na użycie biblioteki `axios`.

9. Zamieńmy również z zadania 8 opakowanie funkcji `writeFile` która została zaimplementowana na wbudowany mechanizm w NodeJS zamieniający naszą funkcję zwrotną na `Promise`. W tym celu powinniśmy wykorzystać wbudowany moduł `util` i funkcję `util.promisify`([link do opisu](#util.promisify))


10. Stwórzmy aplikację która pobierze informacje o użytkowniku oraz jego pierwszym na liście albumie i przypisanych do niego zdjęciach.

- Z pobranego użytkownika wyświetlmy na ekranie nazwę użytkownika. 
- Z pobranego albumu wyświetlmy ilość wszystkich albumów oraz nazwę pierwszego z nich.
- Z pobranych zdjęć wyświetlmy wszystkie tytuły.

Lista adresów do API
- endpoint do użytkownika: https://jsonplaceholder.typicode.com/users/1
- endpoint do albumów: https://jsonplaceholder.typicode.com/albums?userId=1
- endpoint do zdjęć: https://jsonplaceholder.typicode.com/photos?albumId=1

> Pamiętajmy również o tym aby obsłużyć błędy zapytania łapiąc występujący wyjątek (`.catch()`)

11. Dodajmy do zadania 10 zapis do pliku listy pobranych zdjęć. Plik powinniśmy nazwać zgodnie z nazwą albumu. Jeżeli nazwa albumu przekracza 10 znaków powinniśmy skrócić nazwę naszego pliku.