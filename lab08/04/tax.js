const express = require('express');
const router = express.Router();

const calculateTax = (tax, amount) => {
    const taxValue = tax * amount / 100;
    return {
        tax: taxValue,
        amount: amount - taxValue
    };
}

// http://localhost:4500/podatek/19/25
router.post('/', (req, res) => {
    const { tax, amount } = req.body;
    const result = calculateTax(tax, amount);
    res.send(result);
});

module.exports = router;