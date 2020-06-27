// npm i express mustache-express mustache
const express = require('express');
const mustacheExpress = require('mustache-express');
const fs = require('fs');
const { join } = require('path');
const app = express();

const util = require('util');
const readFileAsync = util.promisify(fs.readFile);

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');

const errorMiddleware = (error, req, res, next) => {
    const { message } = error;
    console.log('error message', message);
    res.render('error', { message })
};

// http://localhost:4000/music.txt
// http://localhost:4000/someOtherFile.txt
// http://localhost:4000/sample.txt
app.get('/:filename', (req, res, next) => {
    const { filename } = req.params;
    const path = join(__dirname, 'static', filename);

    fs.readFile(path, 'utf-8', (error, data) => {
        if (error) {
            next(error);
        } else {
            res.send(data);
        }
    });
});
// lub
// app.get('/:filename', async (req, res, next) => {
//     try {
//         const { filename } = req.params;
//         const path = join(__dirname, 'static', filename);
//         const result = await readFileAsync(path, 'utf-8');
//         res.send(result)
//     } catch (error) {
//         next(error);
//     }
// });

app.use(errorMiddleware);

app.listen(4000, () => console.log('start server'));