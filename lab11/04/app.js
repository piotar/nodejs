require('dotenv').config();

const mongoose = require('mongoose');

// wprowadzamy 'connection string' z naszej zmiennej środowiskowej zapisanej w pliku .env
mongoose.connect(process.env.MONGODB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });

// tworzymy model reprezentujący kolekcję 'tasks' w naszej bazie 'todo'
const Task = mongoose.model('tasks', {
    task: String,
    completed: {
        type: Boolean,
        default: false,
    },
    // dodajemy referencje do kolekcji 'users'
    user: {
        ref: 'users',
        type: mongoose.Schema.Types.ObjectId
    },
});

// tworzymy model reprezentujący kolekcję 'users' w naszej bazie 'todo'
const User = mongoose.model('users', {
    firstName: String,
    lastName: String,
});

(async () => {

    // wyświetlamy wszystkie dostępne dokumenty w kolekcji 'tasks'
    // console.log(await Task.find());
    // wyświetlamy przefiltrowane dane przez kryterium ukończenia zadania
    // console.log(await Task.find({ completed: true }));

    // tworzenie nowego zadania
    // const task = new Task({
    //     task: 'kupić czekolade',
    //     completed: false,
    // });

    // zapisujemy nowe zadanie do naszej kolekcji 'tasks'
    // await task.save();

    // aktualizujemy właściwość naszego zadania i aktualizujemy go
    // task.completed = true;
    // await task.save();

    // pobieramy konkretny dokument z kolekcji i modyfikujemy go
    const taskMleko = await Task.findById('5ef8a87611a455b9501b75e6')
    taskMleko.completed = true;

    // tworzymy nowego użytkownika
    const user = new User({
        firstName: 'Jan',
        lastName: 'Nowak',
    });

    // przypisujemy użytkownika do istniejącego tasku
    taskMleko.user = user;

    // zapisujemy zmiany
    await taskMleko.save();
    await user.save();


    // pobieramy wszystkie zadania z bazy oraz referencje które są zapisane w polu 'user'
    const tasks = await Task.find().populate('user');
    console.log(tasks);

    // ...

})();