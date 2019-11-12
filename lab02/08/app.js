// zadanie jest kontynuacją zadania wcześniejszego
// wczytujemy moduł yargs
const yargs = require('yargs');

// zgodnie z dokumentacją biblioteki, aby wywołać przeparsowanie parametrów wejściowych (node app.js --a=2 --b=3 --operator=*)
const args = yargs.argv;

// wczytajmy moduł do zmiennej 'myCalc'
const myCalc = require('./calc');

// wywołanie naszej aplikacji powinno wyglądać mniej więcej tak:
// node app.js --a=3 --b=4 --operator=*

// moduł 'yargs' pozwolił nam na przeparsowanie parametrów wejściowych na konkretne właściwości w obiekcie
const a = args.a;
const b = args.b;
const operator = args.operator;


// w zadaniu wcześniejszym pokazane było wykorzystanie funkcji typu 'callback' anonimowej jak i nazwanej
// w tym zadaniu wykorzystamy funkcję nazwaną aby nie powielać tego samego kodu

// mamy zadanie zapisać nasz wynik do pliku z użyciem funkcji asynchronicznej
// w tym celu wczytujemy wbudowany moduł 'fs'
const fs = require('fs');

// tworzymy funkcję typu 'callback' z jednym parametrem wejściowym:
function mathResult(wynik) {
    // wyświetlamy wynik w kosoli
    console.log('wynik:', wynik);

    // wywołujemy funkcję asynchroniczną do zapisu wyniku do pliku
    // 'writeFile' przyjmuje 3 parametry wejściowe
    // 1 to nazwa pliku, 2 to dane jakie chcemy zapisać do pliku, 3 zaś to funkcja callback która przyjmuje 1 parametr w którym to mieści się błąd jeżeli zapis do pliku się nie powiódł
    // wynkcja zostnie wywołana po zapise pliku lub napotkanym błędzie podczas zapisu
    fs.writeFile('wynik.txt', wynik, function (error) {
        if (error) {
            console.log('błąd zapisu pliku', error);
        } else {
            console.log('YAY! plik został zapisany!');
        }
    });
}

// znając konstrukcję warunkową 'switch' wywołajmy odpowiednią funkcję z naszego kalkulatora
switch (operator) {
    case '+':
        // wywołujemy funkcję dodawania w której to podajemy 3 parametry,
        // a i b to nasze liczby, zaś 3 argument to funkcja nazwana, która zostanie wywołana w środku naszej funkcji
        myCalc.add(a, b, mathResult);
        break;
    case '-':
        // analogicznie jak dodawanie
        myCalc.sub(a, b, mathResult);
        break;
        
    case '*':
        // analogicznie jak dodawanie
        myCalc.multi(a, b, mathResult);
        break;
            
    case '/':
        // analogicznie jak dodawanie
        myCalc.div(a, b, mathResult);
        break;
}
