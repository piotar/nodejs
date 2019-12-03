// wczytujemy zewnętrzny pakiet `request` (pamiętajmy aby wcześniej zainstalować nasz pakiet `npm i request`)
const request = require('request');

// deklarujemy zmienną z naszym adresem do API
const url = `https://api.openweathermap.org/data/2.5/weather?APPID=0ed761300a2725ca778c07831ae64d6e&q=Bialystok`;

// wywołujemy funckję request z 2 parametrami
// 1 to adres do naszego API
// 2 to funkcja zwrotna która zostanie wywołana jak dane z serwera zostaną zwrócone
request(url, (error, response, body) => {

    // sprawdzamy czy odpowiedź z serwera nie zawieta błędu i czy odpowiedź zakończyłą się sukcesem
    if (!error && response.statusCode === 200) {
        // parsujemy naszą odpowiedź do obiektu JS
        const weather = JSON.parse(body);

        // wyświetlamy temperaturę
        console.log('temperatura', weather.main.temp);
    } else {
        // jeżeli zmienna `error` nie będzie pusta lub `statusCode` zwróci inny kod niż 200 wtedy informujemy o błędzie
        console.log('błąd pobierania danych');
    }
});