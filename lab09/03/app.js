const express = require('express');
const app = express();

/**
 * fetch('http://localhost:4000/', { headers: { authorization: 'jan:alamakota' }})
 *  .then(response => console.log(response)); 
 */

const users = [{
    login: 'jan',
    password: 'alamakota',
    name: 'Jan',
}, {
    login: 'adam',
    password: 'cukierki',
    name: 'Adam',
}]

const authMiddleware = (req, res, next) => {
    const { authorization = '' } = req.headers;
    const [login, password] = authorization.split(':');

    const user = users.find(u => u.login === login && u.password === password);

    if (user) {
        req.user = user;
        next();
    } else {
        res.sendStatus(401);
    }
};

app.use(authMiddleware);

app.get('/:name?', (req, res) => {
    res.send(`helo ${req.user.name}!`);
});

app.listen(4000, () => console.log('server started'));