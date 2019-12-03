// wczytujemy wewnętrzny moduł `os`
const os = require('os');

// wczytujemy wbudowany moduł `fs` udostępniający funkcje do zarządzania systemem plików
const fs = require('fs');


// wywołujemy funkcję `setTimeout` podając 2 parametry:
// 1 to funkcja zwrotna (callback) która zostanie wywołana po upływie czasu
// 2 czas podany w milisekundach po którym ma być wywołana funkcja zweotna
setTimeout(() => {

    // pobieramy dane aktualnie zalogowanego użytkownika
    const userInfo = os.userInfo();

    // tworzymy zmienną z przywitaniem aby można było łatwo wykorzystać ją w wielu miejscach
    const welcomeMessage = `witaj ${userInfo.username}`;

    console.log(welcomeMessage);

    // wywołujemy funkcję do zapisu pliku naszego przywitania
    // 1 parametr jest to nazwa naszego pliku
    // 2 to dane które chcemy zapisać czyli przywitanie
    // 3 to funkcja zwrotna która zostanie wywołana po zapisie pliku lub też niepowodzeniu
    fs.writeFile('helo.txt', welcomeMessage, (error) => {
        if (error) {
            console.log('błąd zapisu pliku');
        } else {
            console.log('plik został zapisany')
        }
    });

}, 5000);