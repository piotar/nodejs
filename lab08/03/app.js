const express = require('express');
const taxRouter = require('./tax');
const quotesRouter = require('./quotes');

const app = express();
app.use(express.json());

app.use('/podatek', taxRouter);
app.use('/quotes', quotesRouter);

app.listen(4500, () => console.log('server started'));