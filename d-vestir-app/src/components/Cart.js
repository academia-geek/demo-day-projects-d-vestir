import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem'
import { CartDiv, Content, Item, Price, Button } from './styles/Cart.Styled';

const Cart = ({ cart }) => {
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

}, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems])
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
                <Button>
                    Comprar
                </Button>
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