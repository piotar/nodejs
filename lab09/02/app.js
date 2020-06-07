const express = require('express');
const app = express();

/**
 * fetch('http://localhost:4000/', { headers: { authorization: 'alamakota' }})
 *  .then(response => console.log(response)); 
 */

const authMiddleware = (req, res, next) => {
    const { authorization } = req.headers;
    if (authorization === 'alamakota') {
        next();
    } else {
        res.sendStatus(401);
    }
};

app.use(authMiddleware);

app.get('/:name?', (req, res) => {
    res.send('helo!');
});

app.listen(4000, () => console.log('server started'));