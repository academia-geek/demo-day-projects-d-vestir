import React from 'react'
import CanjearProduct from './CanjearProduct'
import { connect } from 'react-redux'
import CanjearNavbar from './CanjearNavbar'

import { Div } from '../styles/Products.Styled'

const CanjearProducts = ({ products_canjear }) => {


  return (
    <>
      <CanjearNavbar />
      <Div>
        {products_canjear.map(p => (
          <CanjearProduct key={p.id} productData={p} />
        ))}
      </Div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    products_canjear: state.shop_canjear.products_canjear,
  }
}

export default connect(mapStateToProps)(CanjearProducts);