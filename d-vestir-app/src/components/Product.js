import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { addToCart, loadCurrentItem } from '../actions/shoppingActions';

import { ProductDiv, Details, Title, Description, Price, Add, Options } from './styles/Product.Styled';
// import { BsSearch } from 'react-icons/bs'

const Product = ({ productData, addToCart, loadCurrentItem }) => {
    
    return (
        <>
            <ProductDiv>
                <div >
                    <div>
                        <Link to={`/product/${productData.id}`}>
                            <img
                                onClick={() => loadCurrentItem(productData)}
                                src={productData.image}
                                alt={productData.title}
                            />
                        </Link>
                    </div>

                    <Details >
                        <Title >{productData.title}</Title>
                        <Description >{productData.genero}</Description>
                        <Price >$ {productData.price} COP.</Price>
                    </Details>

                    <Options>
                        {/* <Link to={`/product/${productData.id}`}>
                        <View onClick={() => loadCurrentItem(productData)}>
                            <BsSearch size={'1.5em'}/>
                        </View>
                    </Link> */}
                        <Add onClick={() => addToCart(productData.id) 
                        } 
                            >
                            Añadir
                        </Add>
                    </Options>
                </div>
            </ProductDiv>
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    }
}

export default connect(null, mapDispatchToProps)(Product)