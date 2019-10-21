// wczytujemy moduł 'math' który weksportował odpowiednie funkcje matematyczne
const math = require('./math');

// tworzymy zmienne które będą zawierały resultaty wywołań funkcji z modułu 'math'
const wynikDodawania = '3 + 5 = ' + math.add(3, 5);
const wynikOdejmowania = '4 - 7 = ' + math.sub(4, 7);
const wynikMnozenia = '6 * 2 = ' + math.multi(6, 2);
const wynikDzielenia = '8 / 2 = ' + math.div(8, 2);

// wyświetlamy wszystkie zmienne zawierające wynik wykonanych funkcji z modułu 'math'
console.log(wynikDodawania);
console.log(wynikOdejmowania);
console.log(wynikMnozenia);
console.log(wynikDzielenia);
// wyświetlamy zmienną PI z moduły 'math'
console.log('PI =', math.PI);


// wczytujemy wbudowany moduł 'fs'(file system) i przypisujemy jego wyeksportowane funkcje/zmienne do zmiennej 'fs'
const fs = require('fs');

// wywołujemy funkcję 'writeFileSync' z naszego modułu 'fs'
// pierwszy parametr funkcji to nazwa pliku, drugi zaś wartość którą chcemy zapisać
fs.writeFileSync('wynik.txt', wynikDodawania);

// aby przećwiczyć różne funkcje dodajmy do naszego pliku 'wynik.txt' kolejne wyniki działań matematycznych
// funkcja appendFileSync pozwala na dodanie nowych danych do pliku bez jego czyszczenia
fs.appendFileSync('wynik.txt', wynikOdejmowania);
// dla czytelności zapisanych wartości możemy dodać znak nowej linii (\n)
fs.appendFileSync('wynik.txt', wynikMnozenia + '\n');
fs.appendFileSync('wynik.txt', wynikDzielenia + '\n');


// wczytajmy zapisany pliku i wyświetlmy zawartość pliku w konsoli
// w tym celu wywołujemy funkcję readFileSync z naszego modułu 'fs'
// funkcja readFileSync zwraca nam wartość Binarną, więc powinniśmy podać dodatkowy parametr kóry przekonweruje resultat na String
const data = fs.readFileSync('wynik.txt', 'utf-8');

// zmienna 'data' zawiera zawartość pliku 'wynik.txt'
console.log(data);