import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';

// import Home from '../components/Home';
import Products from '../components/Products';
import Cart from '../components/Cart';
import SingleItem from '../components/SingleItem';
import PagoExitoso from '../components/pagos/PagoExitoso';
import Seguimiento from '../components/pagos/Seguimiento';
import PagoRechazado from '../components/pagos/PagoRechazado';
import Contenido from '../components/Contenido'
import Vender from '../components/Vender';


const DashboardRoute = ({ currentItem }) => {
  return (

    <>
      <Routes>

        {/* <Route path='/' element={<Home />} /> */}
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        {!currentItem ? (
          <Route path="/products" element={<Navigate to='/products' />} />
        ) : (
          <Route path="/product/:id" element={<SingleItem />} />
        )}

        <Route path='/exitoso' element={<PagoExitoso />} />
        <Route path='/seguimiento' element={<Seguimiento/>}/>
        <Route path='/rechazado' element={<PagoRechazado/>}/>
        <Route path='/contenido' element={<Contenido/>} />
        <Route path='/vender' element={<Vender />} />
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