
// wczytujemy moduł 'user' i jego zawartoć a konkretniej to co jest exportowane z niego przypisujemy do zmiennej user;
// w takim przypadku zmienna będzie obiektem składającym się z 2 właściwości('name' oraz 'lastName')
const user = require('./user');


// wiemy teraz że user jest obiektem, aby odłować się do imienia i nazwiska powinniśmy zastosować odwołanie 'user.name' oraz 'user.lastName'
// konsola zwróci: hello Jan Kowalski
console.log('hello', user.name, user.lastName);