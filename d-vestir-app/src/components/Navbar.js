import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { FiShoppingCart } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import { Nav, Counter, DivCart } from './styles/Navbar.Styled';

const Navbar = ({ cart }) => {

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        let count = 0;
        cart.forEach(item => {
            count += item.qty;
        })

        setCartCount(count)
    }, [cart, cartCount])

    return (
        <>
            <Nav>
                <Link to='/products' style={{ textDecoration: 'none' }}>
                    <h2>Carrito de compras</h2>
                </Link>
                <Link to='/cart' style={{ textDecoration: 'none' }}>
                    <DivCart>
                        {/* <h3>Cart</h3> */}
                        <FiShoppingCart size={'2em'} />
                        <Counter>{cartCount}</Counter>
                    </DivCart>
                </Link>
            </Nav>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    }
}

export default connect(mapStateToProps)(Navbar)