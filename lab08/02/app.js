const express = require('express');
const taxRouter = require('./tax');

const app = express();
app.use(express.json());

app.use('/podatek', taxRouter);

app.listen(4500, () => console.log('server started'));