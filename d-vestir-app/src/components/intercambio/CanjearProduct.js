import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { addToCart, loadCurrentItem } from '../../actions/actionCanjear'

import { ProductDiv, Details, Title, Description, Price, Add, Options } from '../styles/Product.Styled';

const CanjearProduct = ({ productData, addToCart, loadCurrentItem }) => {

    return (
        <>
            <ProductDiv>
                <div >
                    <div>
                        <Link to={`/canjearProduct/${productData.id}`}>
                            <img
                                onClick={() => loadCurrentItem(productData)}
                                src={productData.image}
                                alt={productData.title}
                            />
                        </Link>
                    </div>

                    <Details>
                        <Title >{productData.title}</Title>
                        <Description>{productData.genero}</Description>
                        {/* <p>Precio:</p> */}
                        <Price> ${productData.price}</Price>
                    </Details>

                    <Options>
                        <Add onClick={() => addToCart(productData.id)
                        }
                        >
                            Canjear
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

export default connect(null, mapDispatchToProps)(CanjearProduct)