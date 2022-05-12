import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';

import Products from '../components/Products';
import Cart from '../components/Cart';
import SingleItem from '../components/SingleItem';
import PagoExitoso from '../components/pagos/PagoExitoso';
import Seguimiento from '../components/pagos/Seguimiento';
import PagoRechazado from '../components/pagos/PagoRechazado';
import Contenido from '../components/Contenido'
import Vender from '../components/Vender';
import Donacion from '../components/donacion/Donacion';
import Navbar from '../components/Navbar'
import Intercambio from '../components/intercambio/Intercambio';

import CanjearCart from '../components/intercambio/CanjearCart';
import CanjearCartItem from '../components/intercambio/CanjearCartItem';

import CanjearProduct from '../components/intercambio/CanjearProduct';
import CanjearProducts from '../components/intercambio/CanjearProducts'
import CanjearSingleItem from '../components/intercambio/CanjearSingleItem';

const DashboardRoute = ({ currentItem, currentItem_canjear }) => {
  return (

    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        {!currentItem ? (
          <Route path="/products" element={<Navigate to='/products' />} />
        ) : (
          <Route path="/product/:id" element={<SingleItem />} />
        )}


        <Route path="/canjearProducts" element={<CanjearProducts />} />
        <Route path="/canjearProduct" element={<CanjearProduct />} />
        <Route path="/canjearCart" element={<CanjearCart />} />
        {!currentItem_canjear ? (
          <Route path="/canjearProducts" element={<Navigate to="/canjearProducts" />} />
        ) : (
          <Route path="/canjearProduct/:id" element={<CanjearSingleItem />} />
        )}
        <Route path="/canjearCarItem" element={<CanjearCartItem/>}/>

        

        <Route path='/exitoso' element={<PagoExitoso />} />
        <Route path='/seguimiento' element={<Seguimiento />} />
        <Route path='/rechazado' element={<PagoRechazado />} />
        <Route path='/contenido' element={<Contenido />} />
        <Route path='/vender' element={<Vender />} />
        <Route path='/donar' element={<Donacion />} />
        <Route path='/canjear' element={<Intercambio />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}

const mapStateToProps = state => {
  return {
    currentItem: state.shop.currentItem,
    currentItem_canjear: state.shop_canjear.currentItem_canjear

  }
}


export default connect(mapStateToProps)(DashboardRoute)