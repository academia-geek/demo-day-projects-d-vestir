import React from 'react'
import { connect } from 'react-redux';
import { addToCart } from '../actions/shoppingActions';
import { DivDetail, Title, Description, Price, Button, Card } from './styles/SingleItem.Styled';
import ReactImageMagnify from 'react-image-magnify';

const SingleItem = ({ currentItem, addToCart }) => {
    return (
        <DivDetail>
            {/* <img src={currentItem.image} alt='' /> */}
            <ReactImageMagnify {...{
              smallImage: {
                alt: `${currentItem.title}`,
                isFluidWidth: true,
                src: `${currentItem.image}`,
              },
              largeImage: {
                src: `${currentItem.image}`,
                width: 1200,
                height: 1800
              }
            }} />
            <Card>
                <Title>{currentItem.title}</Title>
                <h5>Acerca de este artículo.</h5>
                <Description>{currentItem.description}</Description>
                <p>Tallas S M L XL</p>
                <p>Envio GRATIS.</p>
                <Price>Precio $ {currentItem.price}</Price>
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