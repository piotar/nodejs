const express = require('express');
const router = express.Router();

let counter = 10;
let quotes = [{
    id: counter++,
    author: 'kot',
    quote: 'Ala ma kota'
}];

// http://localhost:4500/quotes
router.get('/', (req, res) => {
    res.send(quotes);
});

// http://localhost:4500/quotes/10
// http://localhost:4500/quotes/2
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const quote = quotes.find(q => q.id === id);

    if (quote) {
        res.send(quote);
    } else {
        res.sendStatus(404);
    }
});

// http://localhost:4500/quotes
// POST: { "author": "Franz Maurer", "quote": "Bo to zła kobieta była ..." }
router.post('/', (req, res) => {
    const { author, quote } = req.body;

    if (author && quote) {
        const newQuote = {
            id: counter++,
            author,
            quote
        };

        quotes = quotes.concat(newQuote);

        res.sendStatus(201);
    } else {
        res.sendStatus(400);
    }
});

// http://localhost:4500/quotes/10
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const lengthBeforeFilter = quotes.length;

    quotes = quotes.filter(q => q.id !== id);

    if (lengthBeforeFilter === quotes.length) {
        res.sendStatus(404);
    } else {
        res.sendStatus(200);
    }
});

// http://localhost:4500/quotes/10
// PUT: { "author": "Franz Maurer", "quote": "Bo to zła kobieta była ..." }
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = quotes.find(q => q.id === id);

    if (item) {
        const { author, quote } = req.body;

        if (author && quote) {
            const newQuote = {
                id,
                author,
                quote
            };

            quotes = quotes.map(q => q === item ? newQuote : q);

            res.sendStatus(201);
        } else {
            res.sendStatus(400);
        }
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;