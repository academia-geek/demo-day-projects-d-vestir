import React, { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux';
import { FiShoppingCart } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom';

import { logout } from '../actions/actionLogin';
import { Nav, Counter, DivCart } from './styles/Navbar.Styled';
import { ButtonDele } from './styles/ListUser.Styled';

const Navbar = ({ cart }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        let count = 0;
        cart.forEach(item => {
            count += item.qty;
        })

        setCartCount(count)
    }, [cart, cartCount])


    const handleLogout = () => {
        dispatch(logout())

        navigate('/login')
    }

    return (
        <>
            <Nav>
                <Link to='/products' style={{ textDecoration: 'none' }}>
                    <h3>Compra</h3>
                </Link>
                <Link to='/vender' style={{ textDecoration: 'none' }}>
                    <h3>Vender</h3>
                </Link>
                <Link to='/contenido' style={{ textDecoration: 'none' }}>
                    <h3>Perfil</h3>
                </Link>
                <Link to='/cart' style={{ textDecoration: 'none' }}>
                    <DivCart>
                        <FiShoppingCart size={'2em'} />
                        <Counter>{cartCount}</Counter>
                    </DivCart>
                </Link>

                <div>
                    <div>
                        <ButtonDele
                            onClick={handleLogout}>
                            Cerrar Sesión
                        </ButtonDele>
                    </div>
                </div>

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