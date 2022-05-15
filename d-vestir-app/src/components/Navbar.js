import React, { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux';
import { FiShoppingCart } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs'

import { logout } from '../actions/actionLogin';
import { Nav, Counter, DivCart, NavLink, Icon } from './styles/Navbar.Styled';
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
                <NavLink to='/products'>
                    <h3>Comprar</h3>
                </NavLink>
                <NavLink to='/vender'>
                    <h3>Vender</h3>
                </NavLink>
                {/* <NavLink to='/donar'>
                    <h3>Donar o Recibir</h3>
                </NavLink> */}
                <NavLink to='/canjearProducts'>
                    <h3>Canjear</h3>
                </NavLink>
                <NavLink to='/contenido'>
                    <Icon>
                        <BsPersonCircle size={'2em'} />
                    </Icon>
                </NavLink>
                <NavLink to='/cart'>
                    <DivCart>
                        <FiShoppingCart size={'2em'} />
                        <Counter>{cartCount}</Counter>
                    </DivCart>
                </NavLink>

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