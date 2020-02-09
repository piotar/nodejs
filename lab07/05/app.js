const express = require('express');

const app = express();

// http://localhost:4700/mnozenie/4/5
app.get('/mnozenie/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const result = a * b;
    res.send(result.toString());
});

// http://localhost:4700/dzielenie/4/5
app.get('/dzielenie/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const result = a / b;
    res.send(result.toString());
});

// http://localhost:4700/dodawanie/4/5
app.get('/dodawanie/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const result = parseInt(a) + parseInt(b);
    res.send(result.toString());
});

// http://localhost:4700/odejmowanie/4/5
app.get('/odejmowanie/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const result = a - b;
    res.send(result.toString());
});


app.listen(4700, () => console.log('Start server'));