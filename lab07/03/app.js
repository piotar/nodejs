const express = require('express');

const app = express();

// http://localhost:4700
// http://localhost:4700/Jan
// http://localhost:4700/Anna
app.get('/:name?', (req, res) => {
    const name = req.params.name || 'world';
    res.send(`Hello ${name}`);
});


app.listen(4700, () => console.log('Start server'));