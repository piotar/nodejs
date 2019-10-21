// wczytujemy wbudowany moduł 'os', który udostępnia nam funkcje odpowiedzialne za pobieranie informacji o systemie operacyjnym
const os = require('os');

// wczytujemy wbodowany moduł 'fs'(file system), który pozwala na manipulowanie plikami na naszym komputerze
const fs = require('fs');


// wywołujemy funkcję 'userInfo' z moduły 'os'
// funkcja zwraca nam obiekt z informacjami aktualnie zalogowanego użytkownika do systemu
const user = os.userInfo();

// możemy wyświetlić cały obiekt
console.log(user);

// lub też dokładnie nazwę naszego użytkownika
console.log(user.username);

// zapisujemy nazwę użytkownika do pliku
// w tym celu wywołujemy funkcję 'writeFileSync' z naszego wbudowanego modułu fs
// wywołując funkcję powinien zostać stworzony plik 'name.txt' z nazwą aktualnie zalogowanego użytkownika systemu
fs.writeFileSync('name.txt', user.username);
