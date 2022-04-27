import React from 'react'
import { loadStripe } from '@stripe/stripe-js'

let stripePromise
const getStripe = () => {
    if (!stripePromise) {
         stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY)

    }
    return stripePromise;
}

const Checkout = () => {
    const item = {
        price: 'price_1KspNFKKdkF9eoZNyRg75piQ',
        quantity:1
    }
    const checkoutOptions = {
        lineItems: [item],
        mode: 'payment',
        successUrl:`${window.location.origin}/success`,
        cancelUrl:`${window.location.origin}/cancel`
    }

    const redirectCheckout = async () => {
        console.log('redirectCheckout')
    }
    

    return (
        <div>Checkout

            <button onClick={redirectCheckout}>
                Redirect
            </button>
        </div>
    )
}

export default Checkout