const fs = require('fs');

try {
    const data = fs.readFileSync('user.json', 'utf-8');
    const user = JSON.parse(data);
    console.log(user.name);
} catch (error) {
    console.log(error.message);
}

// inny przypadek błędu:
try {
    const data = fs.readFileSync('wrong_file_name.json', 'utf-8');
    const user = JSON.parse(data);
    console.log(user.name);
} catch (error) {
    console.log(error.message);
}
