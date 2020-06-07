const express = require('express');
const taxRouter = require('./tax');
const quotesRouter = require('./quotes');
const tasksRouter = require('./tasks');

const app = express();
app.use(express.json());

app.use('/podatek', taxRouter);
app.use('/quotes', quotesRouter);
app.use('/tasks', tasksRouter);

app.listen(4500, () => console.log('server started'));