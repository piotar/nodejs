const express = require('express');

const app = express();

const users = [{
    name: 'Adam',
    username: 'adamek',
    email: 'adam@adamek.abc',
}];

// http://localhost:4700/add?name=Jan&username=janko&email=jan@nowak.abc
app.get('/add', (req, res) => {
    users.push(req.query)
    res.send(users);
});

// http://localhost:4700/
app.get('/', (req, res) => {
    res.send(users);
});

// http://localhost:4700/0
app.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(users[id]);
});

// http://localhost:4700/delete/0
app.get('/delete/:id', (req, res) => {
    const { id } = req.params;
    users.splice(id, 1);
    res.send(users);
});

app.listen(4700, () => console.log('Start server'));