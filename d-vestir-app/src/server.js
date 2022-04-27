// const router = require('express').Router();
// const stripe = require('stripe')(process.env.STRIPE_KEY)
// const app = express()
// const cors = require('cors')

// app.use(cors())

// app.listen(3000, () => {
//     console.log('Servidor')
// })

// app.post('/payment', async (require, response) => {
//     stripe.charges.create({
//         source: require.body.tokenId,
//         amount: require.body.amount,
//         currency: 'cop'

//     }, (stripeErr, stripeRes) => {
//         if(stripeErr) {
//             response.status(500).json(stripeErr);
//         } else {
//             response.status(200).json(stripeRes);
//         }
//     })
// })

// module.exports = app;


const express = require('express');
const bodyParser = require('body-parser');
// require('dotenv').config();
const Stripe = require('stripe')(process.env.STRIPE_KEY);
var cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT || 3000;

app.listen(port, error => {
  if (error) throw error;
  console.log('Your server is running on port 3000');
});

app.post('/cart', async (req, res) => {
  let status, error;
  const { token, amount } = req.body;
  try {
    await Stripe.charges.create({
      source: token.id,
      amount,
      currency: 'usd',
    });
    status = 'success';
  } catch (error) {
    console.log(error);
    status = 'Failure';
  }
  res.json({ error, status });
});


