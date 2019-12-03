// wczytujemy wewnętrzny moduł `os`
const os = require('os');

// wywołujemy funkcję `setTimeout` podając 2 parametry:
// 1 to funkcja zwrotna (callback) która zostanie wywołana po upływie czasu
// 2 czas podany w milisekundach po którym ma być wywołana funkcja zweotna
setTimeout(() => {

    // pobieramy dane aktualnie zalogowanego użytkownika
    const userInfo = os.userInfo();
    console.log(`witaj ${userInfo.username}`);

}, 5000);