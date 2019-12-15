
const addCommand = require('./add');
const listCommand = require('./list');

require('yargs')
    .command(addCommand)
    .command(listCommand)
    .demandCommand(1, 'Musisz podać przynajmniej jedno polecenie')
    .help()
    .argv