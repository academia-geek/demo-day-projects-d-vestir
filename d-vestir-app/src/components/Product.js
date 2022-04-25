import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { addToCart, loadCurrentItem } from '../actions/shoppingActions';

import { ProductDiv, Details, Title, Description, Price, View, Add } from './styles/Product.Styled';
import {BsSearch} from 'react-icons/bs'

const Product = ({ productData, addToCart, loadCurrentItem }) => {
    return (

        <ProductDiv>
            <div >
                <div>
                    <img
                        src={productData.image}
                        alt={productData.title}
                    />
                </div>

                <Details >
                    <Title >{productData.title}</Title>
                    <Description >{productData.description}</Description>
                    <Price >$ {productData.price}</Price>
                </Details>

                <div >
                    <Link to={`/product/${productData.id}`}>
                        <View onClick={() => loadCurrentItem(productData)}>
                            <BsSearch size={'1.5em'}/>
                        </View>
                    </Link>
                    <Add onClick={() => addToCart(productData.id)}>
                        Añadir
                    </Add>
                </div>
            </div>
        </ProductDiv>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    }
}

export default connect(null, mapDispatchToProps)(Product)