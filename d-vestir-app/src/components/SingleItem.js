import React from 'react'
import { connect } from 'react-redux';
import { addToCart } from '../actions/shoppingActions';
import { DivDetail, Title, Description, Price, Button, Card } from './styles/SingleItem.Styled';


const SingleItem = ({ currentItem, addToCart }) => {
    return (
        <DivDetail>
            <img src={currentItem.image} alt='' />
            <Card>
                <Title>{currentItem.title}</Title>
                <Description>{currentItem.description}</Description>
                <Price>$ {currentItem.price}</Price>
                <Button onClick={() => addToCart(currentItem.id)}>Añadir </Button>
            </Card>
        </DivDetail>
    )
}

const mapStateToProps = state => {
    return {
        currentItem: state.shop.currentItem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem)