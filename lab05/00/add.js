const fs = require('fs');

const addTaskHandler = (args) => {
    const newLine = `${args.zadanie}\n`;

    fs.appendFile('todo.txt', newLine, () => {
        console.log('zadanie zostało zapisane');
    });
}

module.exports = {
    command: 'dodaj <zadanie>',
    desc: 'Dodawanie zadania do listy TODO',
    handler: addTaskHandler,
};
