// npm i express
// npm i pug
const express = require('express');
const app = express();

app.set('view engine', 'pug');

// http://localhost:4000/
// http://localhost:4000/Jan
// http://localhost:4000/Adam
app.get('/:name?', (req, res) => {
    const { name = 'world' } = req.params;
    const header = `hello ${name}!`;
    res.render('home', { header });
});

app.listen(4000, () => console.log('start server'));