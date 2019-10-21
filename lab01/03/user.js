// deklarujemy zmienną 'name' z wartością 'Jan'
const name = "Jan";

// deklarujemy zmienną 'lastName' z wartością 'Kowalski'
const lastName = "Kowalski"

// musiły w sposób jawny powiedzieć dla NodeJS co jest wyeksportowane do modułu 'rodzica'.
// w tym przypadku powinniśmy stworzyć nowy obiekt zawierający 2 właściwości
module.exports = {
    name: name,
    lastName: lastName,
};