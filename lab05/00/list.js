const fs = require('fs')

const getListHandler = () => {
    fs.readFile('todo.txt', 'utf-8', (error, data) => {
        if (error) {
            console.log(error.message);
        } else {
            console.log(data);
        }
    });
}

module.exports = {
    command: 'lista',
    desc: 'Wyświetl wszystkie zadania z listy TODO',
    handler: getListHandler
};