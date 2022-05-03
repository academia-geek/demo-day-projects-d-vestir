import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem'
import { CartDiv, Content, Item, Price, Button } from './styles/Cart.Styled';

import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const KEY = 'pk_test_51KrtoMKKdkF9eoZNO1eQg5oKbgVJhozTacAMoLiI8WPbjQJi0hMmLkDMzOcpMZbjfEiqBs4usBLInv320vnh6e7J00keZdl9PF';

const Cart = ({ cart }) => {

    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate()

    const onToken = (token) => {
        setStripeToken(token)
    }
    console.log(stripeToken)



    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.forEach(item => {
            items += item.qty
            price += item.qty * item.price
        })

        setTotalPrice(price)
        setTotalItems(items)


        const makeRequest = async () => {
            try {
                const response = await
                    axios.post('http://localhost:3000/payment', {
                        tokenId: stripeToken.id,
                        amount: `${totalItems * 100}`,
                    })
                console.log(response.data)
                navigate('/pago', { data: response.data })


            } catch (error) {
                console.log(error)
                // navigate('/pago')
            }
        }
        makeRequest()

    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems, stripeToken, navigate])



    return (
        <CartDiv>
            <Item>
                {cart.map(item => (
                    <CartItem key={item.id} itemData={item} />
                ))}
            </Item>
            <Content>
                <h3>Orden de compra</h3>
                <Price>
                    <p>Cantidad Unidades ({totalItems})</p>
                    <p>Total a pagar</p>
                    <Price> ${totalPrice}</Price>
                </Price>

                <StripeCheckout
                    name='D-vestir'
                    image='https://depor.com/resizer/T5OUcVy_sGB6W7Qoi4MmZzzjmso=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/TXFX733REBAO7IPVSSOBNS3UJU.JPG'
                    billingAddress
                    shippingAddress
                    description={`El total es ${totalPrice}`}
                    amount={totalPrice * 100}
                    currency='COP'
                    token={onToken}
                    stripeKey={KEY}
                    allowRememberMe

                >
                    <Button>
                        Comprar ${totalPrice}
                    </Button>

                </StripeCheckout>
            </Content>




        </CartDiv>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Cart)