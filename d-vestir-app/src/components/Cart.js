import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem'
import { CartDiv, Content, Item, Price, Button, Pagar } from './styles/Cart.Styled';

// import StripeCheckout from 'react-stripe-checkout';
import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const KEY = 'pk_test_51KrtoMKKdkF9eoZNO1eQg5oKbgVJhozTacAMoLiI8WPbjQJi0hMmLkDMzOcpMZbjfEiqBs4usBLInv320vnh6e7J00keZdl9PF';

const Cart = ({ cart }) => {

    const navigate = useNavigate()
    // const [stripeToken, setStripeToken] = useState(null);

    // const onToken = (token) => {
    //     setStripeToken(token)
    // }
    // console.log(stripeToken)

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

        // const makeRequest = async () => {
        //     try {
        //         const response = await
        //             axios.post('http://localhost:3000/payment', {
        //                 tokenId: stripeToken.id,
        //                 amount: `${totalItems * 100}`,
        //             })
        //         console.log(response.data)
        //         navigate('/exitoso', { data: response.data })


        //     } catch (error) {
        //         console.log(error)
        //         // navigate('/exitoso')
        //     }
        // }
        // makeRequest()


    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems, navigate])


    return (
        <CartDiv>
            <Item>
                {cart.map(item => (
                    <CartItem key={item.id} itemData={item} />
                ))}
            </Item>
            <Content>
                <Pagar>
                    <h3>Orden de compra</h3>

                    <h5>¿Quieres comprar o canjear?</h5>
                    <Link to='/cart'>
                        <button>Comprar</button>
                    </Link>
                    <Link to='/canjearCart'>
                        <button>Canjear</button>
                    </Link>
                </Pagar>
                <Price>
                    <p>Cantidad Unidades ({totalItems})</p>
                    <p>Gastos de envío: $ 0.0</p>
                    <Price>Total a pagar: ${totalPrice.toLocaleString('es-CO')}</Price>
                </Price>

                {/* <StripeCheckout
                    name='VESTIR'
                    // image='/images/logo1.png'
                    billingAddress
                    shippingAddress
                    description={`El total es ${totalPrice.toLocaleString('es-CO')}`}
                    amount={totalPrice * 100}
                    currency='COP'
                    locale='es'
                    // token={onToken}
                    stripeKey={KEY}
                    allowRememberMe
                    closed={() => navigate('/exitoso')}
                // email='contacto@dvestir.com'
                > */}
                    <Button onClick={() => navigate('/exitoso')}>
                        Comprar ${totalPrice.toLocaleString('es-CO')}
                    </Button>
                {/* </StripeCheckout> */}
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