const express = require('express');
const app = express();

const errorMiddleware = (error, req, res, next) => {
    console.log('error message', error.message);
    res.send(error.message); // aby zakończyć żądanie
    // throw error; // lub next(error); aby przekazać błąd dalej
};

app.get('/:a/:b', (req, res) => {
    const { a, b } = req.params;
    if (Number(b) === 0) {
        throw new Error('div by 0');
    }
    const result = a / b;
    res.send(String(result));
});

app.use(errorMiddleware);

app.listen(4000, () => console.log('start server'));