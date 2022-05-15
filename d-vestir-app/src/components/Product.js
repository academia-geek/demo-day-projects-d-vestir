import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import confetti from 'canvas-confetti';
import { addToCart, loadCurrentItem } from '../actions/shoppingActions';

import { ProductDiv, Details, Title, Description, Price, Add, Options, Original } from './styles/Product.Styled';

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
                        <Price >Real: ${productData.price.toLocaleString('es-CO')}</Price>
                        <Original>Original: ${productData.original.toLocaleString('es-CO')}</Original>
                    </Details>

                    <Options>
                        <Add onClick={() => addToCart(productData.id,
                            confetti({
                                particleCount: 100,
                                startVelocity: 30,
                                spread: 360
                            }))
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