const express = require('express');
const app = express();

const calculateTax = (tax, amount) => {
    const taxValue = tax * amount / 100;
    return {
        tax: taxValue,
        amount: amount - taxValue
    };
}

// http://localhost:4500/podatek/19/25
app.get('/podatek/:tax/:amount', (req, res) => {
    const { tax, amount } = req.params;
    const result = calculateTax(tax, amount);
    res.send(result);
});

app.listen(4500, () => console.log('server started'));