// zmienna 'process' zawiera wszystko informacje o tym jak aplikacja została uruchomiona i z jakimi parametrami itp.
// nas w tym momencie najbardziej interesuje tablica 'argv' w obiekcie 'process'
// 'process.argv' reprezentuje argumenty wejściowe aplikacji
// 2 pierwsze elementy tablicy to 'node' oraz nazwa naszej aplikacji, w tym przypadku 'app.js'
// kolejne elementy jakie podamy po spacji będą kolejnymi elementami tablicy

// uruchamiając aplikację bez dodatkowych argumentów (node app.js) otrzymamy tablice 2 elementową:
// [ 'C:\\Program Files\\nodejs\\node.exe', 'C:\\nodejs\\lab01\\08\\app.js' ]
// jeżeli wywołamy naszą aplikację z dodatkowym parametrem tablica się powiększy o ten element, np:
// node app.js Jan
// zwróci tam tablicę:
// [ 'C:\\Program Files\\nodejs\\node.exe', 'C:\\nodejs\\lab01\\08\\app.js', 'Jan' ]
// node app.js Jan Kowalski
// zwróci tam tablicę:
// [ 'C:\\Program Files\\nodejs\\node.exe', 'C:\\nodejs\\lab01\\08\\app.js', 'Jan', 'Kowalski' ]
console.log(process.argv);

// teraz wiemy już że dodatkowy element znajduje się na 3 pozycji naszej tablicy o indeksie 2
// dla czytelności i lepszego zrozumienia przypisujemy wartość tablicy z indeksu 2 do zmienne 'name'
const name = process.argv[2];

// jeżeli użytkownik podczas uruchamiania aplikacji nie podał dodatkowego parametru w konsoli pojawi się 'undefined' (wywołanie: 'node app.js')
// jeżeli zaś użytkownik podał coś, to zmienna 'name' będzie posiadała podaną wartość (wywołanie: 'node app.js Jan', wtym przypadku 'name' będzie miała wartość 'Jan')
console.log(name);

// przechodzimy do sedna naszego zadania ...
// jeżeli użytkownik podal nazwę mamy przywitać naszego użytkownika, jeżeli nie to powinniśmy wyświetlić standardowe przywitanie

if (name) {
    console.log('hello', name);
} else {
    console.log('hello stranger');
}