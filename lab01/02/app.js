
// wczytujemy moduł 'user' i jego zawartoć a konkretniej to co jest exportowane z niego przypisujemy do zmiennej user;
// w takim przypadku zmienna będzie miała wartość 'Jan' gdyż plik 'user.js' wyeksportował śtring o wartości 'Jan'
const user = require('./user');


// konsola zwróci: hello Jan
console.log('hello', user);