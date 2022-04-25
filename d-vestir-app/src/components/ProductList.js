import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import Products from './Products';

const ProductList = () => {

  const products = useSelector(state => state)
  console.log(products);

  return (
    <div>ProductList
      <ProductCard/>
      <Products/>
    </div>
  )
}

export default ProductList