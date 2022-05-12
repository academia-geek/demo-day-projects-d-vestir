import React, { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux';
import { FiShoppingCart } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';

import { Nav2, Counter, DivCart, NavLink } from '../styles/Navbar.Styled';
// import { ButtonDele } from './styles/ListUser.Styled';

// import { Link } from 'react-router-dom';

const CanjearNavbar = ({ cart_canjear }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        let count = 0;
        cart_canjear.forEach(item => {
            count += item.qty;
        })

        setCartCount(count)
    }, [cart_canjear, cartCount])


    // const handleLogout = () => {
    //     dispatch(logout())

    //     navigate('/login')
    // }

    return (
        <>
            <Nav2>
                {/* <NavLink to='/canjearProducts'>
                    <h2>Productos</h2>
                </NavLink> */}
                <NavLink to='/canjearCart'>
                    <DivCart>
                        <FiShoppingCart size={'2em'} />
                        <Counter>{cartCount}</Counter>
                    </DivCart>
                </NavLink>
            </Nav2>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        cart_canjear: state.shop_canjear.cart_canjear,
    }
}

export default connect(mapStateToProps)(CanjearNavbar)