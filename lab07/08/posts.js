const express = require('express');

const router = express.Router();

const posts = [{
    title: 'Ala ma kota',
    body: 'a kot ma Ale',
}];

// http://localhost:4700/posts/add?name=Jan&username=janko&email=jan@nowak.abc
router.get('/add', (req, res) => {
    posts.push(req.query)
    res.send(posts);
});

// http://localhost:4700/posts/
router.get('/', (req, res) => {
    res.send(posts);
});

// http://localhost:4700/posts/0
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(posts[id]);
});

// http://localhost:4700/posts/delete/0
router.get('/delete/:id', (req, res) => {
    const { id } = req.params;
    posts.splice(id, 1);
    res.send(posts);
});

module.exports = router;