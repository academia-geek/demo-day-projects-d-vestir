const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_KEY)
const app = express()
const cors = require('cors')

app.use(cors())

app.listen(3000, () => {
    console.log('Servidor')
})

router.post('/payment', (require, response) => {
    stripe.charges.create({
        source: require.body.tokenId,
        amount: require.body.amount,
        currency: 'cop'

    }, (stripeErr, stripeRes) => {
        if(stripeErr) {
            response.status(500).json(stripeErr);
        } else {
            response.status(200).json(stripeRes);
        }
    })
})

module.exports = router;

