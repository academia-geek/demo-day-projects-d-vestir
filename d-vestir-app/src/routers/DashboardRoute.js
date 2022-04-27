import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from '../components/Home';
import Products from '../components/Products';
import Cart from '../components/Cart';
import SingleItem from '../components/SingleItem';
import Checkout from '../components/Checkout';
import PagoExitoso from '../components/PagoExitoso';

import ProductDisplay from '../components/ProductDisplay'


const DashboardRoute = ({ currentItem }) => {
  return (

    <>
      <Routes>

        <Route path='/' element={<Home />} />

        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        {!currentItem ? (
          <Route path="/products" element={<Navigate to='/products' />} />
        ) : (
          <Route path="/product/:id" element={<SingleItem />} />
        )}

        <Route path='/checkout' element={<Checkout />} />
        <Route path='/pago' element={<PagoExitoso />} />
        <Route path='/display' element={<ProductDisplay />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}

const mapStateToProps = state => {
  return {
    currentItem: state.shop.currentItem
  }
}


export default connect(mapStateToProps)(DashboardRoute)