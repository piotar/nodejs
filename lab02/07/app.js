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

// znając konstrukcję warunkową 'switch' wywołajmy odpowiednią funkcję z naszego kalkulatora
switch (operator) {
    case '+':
        // wywołujemy funkcję dodawania w której to podajemy 3 parametry,
        // a i b to nasze liczby, zaś 3 argument to funkcja anonimowa, która zostanie wywołana w środku naszej funkcji dodawania
        myCalc.add(a, b, function(wynik) {
            // wartość zmiennej 'wynik' pochodzi z funkcji dodawania przekazanej przez wywołąnie funkcji z parametrem
            console.log('wynik:', wynik);
        });
        break;
    case '-':
        // analogicznie jak dodawanie
        myCalc.sub(a, b, function(wynik) {
            console.log('wynik:', wynik);
        });
        break;
        
    case '*':
        // dla pokazania innego podejścia zastosujemy funkcje nazwaną
        // tworzymy funkcję nazwaną z jednym parametrem wejściowym
        function mathResult(wynik) {
            console.log('wynik:', wynik);
        }
        // wywołujemy funkcję w której przekazujemy 3 wartości
        // a i b to nasze liczby, zaś mathResult to funkcja którą przekazujemy wgłąb naszego kalkulatora
        // trzeba pamiętać iż tutaj nie wywołujemy funkcji a jedynie przekazujemy referencje!
        myCalc.multi(a, b, mathResult);
        break;
            
    case '/':
        // analogicznie jak w mnożeniu
        function mathResult(wynik) {
            console.log('wynik:', wynik);
        }
        myCalc.div(a, b, mathResult);
        break;
}
