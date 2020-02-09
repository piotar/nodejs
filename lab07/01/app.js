const http = require('http');

// http://localhost:4700
const app = http.createServer((req, res) => {
    res.end('Hello world!');
});

app.listen(4700);