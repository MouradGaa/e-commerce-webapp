
const router = require('express').Router();

const stripe = require('stripe')();



//stripe post route

router.post('/payment', async (req, res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: 'usd',
    }, (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).json({ error: stripeErr });
        } else {
            res.status(200).send({ success: stripeRes });
        }
    });         
});



module.exports = router;
