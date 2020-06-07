const express = require('express');
const router = express.Router();

let counter = 1;
let tasks = [{
    id: counter++,
    task: 'kupic jajka'
}];

// http://localhost:4500/tasks
router.get('/', (req, res) => {
    res.send(tasks);
});

// http://localhost:4500/tasks/1
// http://localhost:4500/tasks/2
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(q => q.id === id);

    if (task) {
        res.send(task);
    } else {
        res.sendStatus(404);
    }
});

// http://localhost:4500/tasks
// POST: { "task": "kupić cukierki" }
router.post('/', (req, res) => {
    const { task } = req.body;

    if (task) {
        const newTask = {
            id: counter++,
            task
        };

        tasks = tasks.concat(newTask);

        res.sendStatus(201);
    } else {
        res.sendStatus(400);
    }
});

// http://localhost:4500/tasks/10
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const lengthBeforeFilter = tasks.length;

    tasks = tasks.filter(q => q.id !== id);

    if (lengthBeforeFilter === tasks.length) {
        res.sendStatus(404);
    } else {
        res.sendStatus(200);
    }
});

// http://localhost:4500/tasks/10
// PUT: { "task": "impreza urodzinowa" }
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = tasks.find(q => q.id === id);

    if (item) {
        const { task } = req.body;

        if (task) {
            const newTask = {
                id,
                task
            };

            tasks = tasks.map(q => q === item ? newTask : q);

            res.sendStatus(201);
        } else {
            res.sendStatus(400);
        }
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;