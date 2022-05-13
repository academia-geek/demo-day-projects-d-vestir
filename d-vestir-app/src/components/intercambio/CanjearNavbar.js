import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

const CanjearNavbar = ({ cart_canjear }) => {

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        let count = 0;
        cart_canjear.forEach(item => {
            count += item.qty;
        })

        setCartCount(count)
    }, [cart_canjear, cartCount])

    return (
        <>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        cart_canjear: state.shop_canjear.cart_canjear,
    }
}

export default connect(mapStateToProps)(CanjearNavbar)