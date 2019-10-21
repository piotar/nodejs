// wiemy już z poprzedniego zadania skąd się bierze 'name' itp..
const name = process.argv[2];

// naszym zadaniem jest zapisanie naszego przywitania do pliku

// wczytujemy wbudowany moduł 'fs' w celu zapisu przywitania do pliku;
const fs = require('fs');

// zmieniamy nasze przywitanie na zmienną, tak by można było w łatwy sposób zapisać do pliku
let helloMessage;

if (name) {
    helloMessage = 'hello ' + name;
} else {
    helloMessage = 'hello stranger';
}

// wyświetlamy nasze przywitanie w konsoli
console.log(helloMessage);


// wywołujemy funkcję 'writeFileSync', która zapisze nasze przywitanie do pliku 'hello.txt'
fs.writeFileSync('hello.txt', helloMessage);


// aby przetestować naszą aplikację wywołujemy polecenia:
// node app
// node app Jan
// node app Adam
// itp ... powinien powstać plik hello.txt