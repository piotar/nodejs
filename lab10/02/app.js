// npm i express mustache-express mustache
const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');

function calcTax(tax, amountWithTax) {
    const amountTax = amountWithTax * tax / 100;
    return {
        tax: amountTax,
        amount: amountWithTax - amountTax
    };
}

// http://localhost:4000/podatek/20/30
app.get('/podatek/:tax/:amount', (req, res) => {
    const { amount, tax } = req.params;
    const result = calcTax(tax, amount);

    const scope = {
        amount,
        tax,
        amountTax: result.tax,
        amountWithoutTax: result.amount,
    };

    res.render('tax', scope);
});

app.listen(4000, () => console.log('start server'));