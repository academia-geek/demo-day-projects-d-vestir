import React, { useState } from 'react'

import { connect } from 'react-redux';
import { removeFromCart, adjustQty } from '../actions/shoppingActions';
import { Items, Detail, Cantidad } from '../components/styles/CartItem.Styled'

import { TiDelete } from 'react-icons/ti'
import { Price, Title } from './styles/Product.Styled';

const CartItem = ({ itemData, removeFromCart, adjustQty }) => {

    const [input, setInput] = useState(itemData.qty)


    const onChangeHandler = (e) => {
        setInput(e.target.value)
        adjustQty(itemData.id, e.target.value)
    }

    return (
        <>
            <Items>
                <img
                    src={itemData.image}
                    alt={itemData.title}
                />
                <Detail>
                    <Title>{itemData.title}</Title>
                    {/* <p>{itemData.description}</p> */}
                    <Price>${itemData.price} </Price>
                    <Cantidad>
                        <div>
                            {/* <label htmlFor="qty">Unidades</label> */}
                            <input
                                min="1"
                                type="number"
                                id="qty"
                                name="qty"
                                value={input}
                                onChange={onChangeHandler}
                            />
                            <button
                                onClick={() => removeFromCart(itemData.id)}>
                                {/* Eliminar */}
                                <TiDelete size={'2em'} />
                            </button>
                        </div>
                    </Cantidad>
                </Detail>
            </Items>

        </>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        adjustQty: (id, value) => dispatch(adjustQty(id, value))
    }
}


export default connect(null, mapDispatchToProps)(CartItem)