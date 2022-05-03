import React from 'react'
import Product from './Product'
import { connect } from 'react-redux'

import { Div } from './styles/Products.Styled'

const Products = ({ products }) => {


  return (
    <>

      <Div>
        {products.map(p => (
          <Product key={p.id} productData={p} />
        ))}
      </Div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    products: state.shop.products,
  }
}

export default connect(mapStateToProps)(Products);