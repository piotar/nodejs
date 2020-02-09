const express = require('express');

const app = express();

const users = [{
    name: 'Adam',
    username: 'adamek',
    email: 'adam@adamek.abc',
}];

const posts = [{
    title: 'Ala ma kota',
    body: 'a kot ma Ale',
}];

// http://localhost:4700/users/add?name=Jan&username=janko&email=jan@nowak.abc
app.get('/users/add', (req, res) => {
    users.push(req.query)
    res.send(users);
});

// http://localhost:4700/users/
app.get('/users', (req, res) => {
    res.send(users);
});

// http://localhost:4700/users/0
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    res.send(users[id]);
});

// http://localhost:4700/users/delete/0
app.get('/users/delete/:id', (req, res) => {
    const { id } = req.params;
    users.splice(id, 1);
    res.send(users);
});

// http://localhost:4700/posts/add?name=Jan&username=janko&email=jan@nowak.abc
app.get('/posts/add', (req, res) => {
    posts.push(req.query)
    res.send(posts);
});

// http://localhost:4700/posts/
app.get('/posts', (req, res) => {
    res.send(posts);
});

// http://localhost:4700/posts/0
app.get('/posts/:id', (req, res) => {
    const { id } = req.params;
    res.send(posts[id]);
});

// http://localhost:4700/posts/delete/0
app.get('/posts/delete/:id', (req, res) => {
    const { id } = req.params;
    posts.splice(id, 1);
    res.send(posts);
});


app.listen(4700, () => console.log('Start server'));