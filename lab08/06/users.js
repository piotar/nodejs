const express = require('express');
const router = express.Router();

let counter = 1;
let users = [{
    id: counter++,
    firstName: 'Jan',
    lastName: 'Nowak'
}];

// http://localhost:4500/users
router.get('/', (req, res) => {
    res.send(users);
});

// http://localhost:4500/users/1
// http://localhost:4500/users/2
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(q => q.id === id);

    if (user) {
        res.send(user);
    } else {
        res.sendStatus(404);
    }
});

// http://localhost:4500/users
// POST: { "firstName": "Franz", "lastName": "Maurer" }
router.post('/', (req, res) => {
    const { firstName, lastName } = req.body;

    if (firstName && lastName) {
        const newUser = {
            id: counter++,
            firstName,
            lastName
        };

        users = users.concat(newUser);

        res.sendStatus(201);
    } else {
        res.sendStatus(400);
    }
});

// http://localhost:4500/users/1
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const lengthBeforeFilter = users.length;

    users = users.filter(q => q.id !== id);

    if (lengthBeforeFilter === users.length) {
        res.sendStatus(404);
    } else {
        res.sendStatus(200);
    }
});

// http://localhost:4500/users/1
// PUT: { "firstName": "Jan", "lastName": "Nowak" }
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = users.find(q => q.id === id);

    if (item) {
        const { firstName, lastName } = req.body;

        if (firstName && lastName) {
            const newUser = {
                id,
                firstName,
                lastName
            };

            users = users.map(q => q === item ? newUser : q);

            res.sendStatus(201);
        } else {
            res.sendStatus(400);
        }
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;