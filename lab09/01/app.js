const express = require('express');
const app = express();

const loggerMiddleware = (req, res, next) => {
    console.log(req.method, req.url, req.params, req.query);
    next();
};

app.use(loggerMiddleware);

app.get('/:name?', (req, res) => {
    res.send('helo!');
});

app.listen(4000, () => console.log('server started'));