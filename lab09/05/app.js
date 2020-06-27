const fs = require('fs');
const path = require('path')
const express = require('express');
const app = express();

const fileMiddleware = (req, res, next) => {
    const filePath = path.join(__dirname, req.originalUrl);
    if (fs.existsSync(filePath)) {
        console.log('file exist');
        res.sendFile(filePath);
    } else {
        next();
    }
}

app.use(fileMiddleware);
// app.use(express.static('./'));

// http://localhost:4000/music.txt
// http://localhost:4000/comment.txt
app.get('/music.txt', (req, res) => {
    res.send('music !!!!!');
});

// http://localhost:4000/piwo.txt
app.get('/piwo.txt', (req, res) => {
    res.send('piwo!!!!');
});

app.listen(4000, () => console.log('start server'));