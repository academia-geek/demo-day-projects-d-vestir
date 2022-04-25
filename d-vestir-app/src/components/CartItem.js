import React, { useState } from 'react'

import { connect } from 'react-redux';
import { removeFromCart, adjustQty } from '../actions/shoppingActions';
import { Items, Detail } from '../components/styles/CartItem.Styled'

import { TiDelete } from 'react-icons/ti'

const CartItem = ({ itemData, removeFromCart, adjustQty }) => {

    const [input, setInput] = useState(itemData.qty)


    const onChangeHandler = (e) => {
        setInput(e.target.value)
        adjustQty(itemData.id, e.target.value)
    }

    return (
        <Items>
            <img
                src={itemData.image}
                alt={itemData.title}

            />
            <Detail>
                <p>{itemData.title}</p>
                <p >{itemData.description}</p>
                <p >${itemData.price} </p>
            </Detail>
            <div >
                <div >
                    <label htmlFor="qty">Unidades</label>
                    <input
                        min="1"
                        type="number"
                        id="qty"
                        name="qty"
                        value={input}
                        onChange={onChangeHandler}
                    />
                </div>
                <button
                    onClick={() => removeFromCart(itemData.id)}
                >
                    {/* Eliminar */}
                    <TiDelete size={'2em'}/>
                </button>
            </div>
        </Items>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        adjustQty: (id, value) => dispatch(adjustQty(id, value))
    }
}


export default connect(null, mapDispatchToProps)(CartItem)