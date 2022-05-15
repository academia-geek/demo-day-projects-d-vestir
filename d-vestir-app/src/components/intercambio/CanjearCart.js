import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import CanjearCartItem from './CanjearCartItem'
import { CartDiv, Content2, Item, Price, Button, Pagar } from '../styles/Cart.Styled';
import CanjearNavbar from './CanjearNavbar';
import Swal from 'sweetalert2'
import { useNavigate, Link } from 'react-router-dom';
import { Fireworks } from '../pagos/Confetti'


const CanjearCart = ({ cart_canjear }) => {

    const navigate = useNavigate()

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let items = 0;
        let price = 0;

        cart_canjear.forEach(item => {
            items += item.qty
            price += item.qty * item.price
        })

        setTotalPrice(price)
        setTotalItems(items)

    }, [cart_canjear, totalPrice, totalItems, setTotalPrice, setTotalItems, navigate])

    const showAlert = () => {
        Swal.fire({
            title: "Canje en proceso, a la espera del vendedor.",
            text: "Transación exitosa.",
            icon: "success",
            confirmButtonText: "OK",
        });
        navigate('/canjearProducts')
        setTotalItems()
        Fireworks();
        
    }

    return (
        <>
            <CanjearNavbar />
            <CartDiv>
                <Item>
                    {cart_canjear.map(item => (
                        <CanjearCartItem key={item.id} itemData={item} />
                    ))}
                </Item>
                <Content2>
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
                        <Price>Gastos de envío: $ 0.0</Price>
                    </Price>

                    <Button onClick={showAlert}>
                        Canjear ${totalItems} Unidades.
                    </Button>
                </Content2>

            </CartDiv>
        </>
    )
}

const mapStateToProps = state => {
    return {
        cart_canjear: state.shop_canjear.cart_canjear
    }
}

export default connect(mapStateToProps)(CanjearCart)