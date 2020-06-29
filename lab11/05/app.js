require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const Task = require('./task.model');
const User = require('./user.model');

const express = require('express');
const app = express();

app.use(express.json());

// middleware do autoryzacji oraz przekazanie użytkownika dalej
// wysyłany header: Authorization: basic admin:alamakota123
// jeżeli w nagłówkach został podany login i hasło pobierzmy dane użytkownika i dodajmy do zmiennej 'req' użytkownika z bazy
app.use(async (req, res, next) => {
    const authorization = (req.headers.authorization || '').split(' ')[1];
    if (authorization) {
        const [username, password] = authorization.split(':');
        req.user = await User.findOne({ username, password });
    }
    next();
});

/**
 * pobieranie wszystkich zadań z bazy danych
 * 
 * http://localhost:4000/tasks/
 * @method GET
 */
app.get('/tasks', async (req, res) => {
    const tasks = await Task.find(req.query).populate('user');
    res.send(tasks);
});

/**
 * pobieranie konkretnego zadania
 * 
 * http://localhost:4000/tasks/5ef8b375f46bd0205cadc8b5
 * @method GET
 */
app.get('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id).populate('user');
    res.send(task);
});

/**
 * dodawanie nowego zadania
 * dorzuczamy tutaj nagłówek 'authorization' o wartości: 'basic admin:alamakota123'
 * 
 * http://localhost:4000/tasks/
 * @method POST
 * @body:
    {
        "completed: true,
        "task": "kupic lody"
    }
 */
app.post('/tasks', async (req, res) => {
    const task = new Task(req.body);
    task.user = req.user;
    await task.save();
    res.status(201).send(task);
});

/**
 * aktualizacja zadania
 * 
 * http://localhost:4000/tasks/5ef8b375f46bd0205cadc8b5
 * @method PUT
 * @body:
    {
        "completed: true
    }
 */
app.put('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body).populate('user');
    res.send(task);
});

/**
 * kasowanie zadania
 * 
 * http://localhost:4000/tasks/5ef8b375f46bd0205cadc8b5
 * @method DELETE
 */
app.delete('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.status(200).send();
});

/**
 * dodawanie nowego użytkownika do bazy (tymczasowa metoda...)
 * 
 * http://localhost:4000/users
 * @method POST
 * @body:
    {
        "username": "admin",
        "password": "alamakota123",
        "firstName": "Jan",
        "lastName": "Kowalski"
    }
 */
app.post('/users', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.status(201).send();
});


app.listen(4000, () => console.log('server started!'));
