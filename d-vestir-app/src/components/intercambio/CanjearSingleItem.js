import React from 'react'
import { connect } from 'react-redux';
import { addToCart } from '../../actions/actionCanjear'
import { DivDetail, Title, Description, Price, Button, Card } from '../styles/SingleItem.Styled';
import ReactImageMagnify from 'react-image-magnify';
import CanjearNavbar from './CanjearNavbar';
// import { Original } from './styles/Product.Styled';

const CanjearSingleItem = ({ currentItem_canjear, addToCart }) => {
    return (
        <>
        <CanjearNavbar/>
            <DivDetail>
                <ReactImageMagnify {...{
                    smallImage: {
                        alt: `${currentItem_canjear.title}`,
                        isFluidWidth: true,
                        src: `${currentItem_canjear.image}`,
                    },
                    largeImage: {
                        src: `${currentItem_canjear.image}`,
                        width: 1200,
                        height: 1800
                    }
                }} />
                <Card>
                    <Title>{currentItem_canjear.title}</Title>
                    <h5>Acerca de este artículo.</h5>
                    <Description>{currentItem_canjear.description}</Description>
                    <p>{currentItem_canjear.genero}</p>
                    <p>Tallas S M L XL</p>
                    <p>Envio GRATIS.</p>
                    <Price>Precio: ${currentItem_canjear.price}</Price>
                    <Button onClick={() => addToCart(currentItem_canjear.id)}>Canjear</Button>
                </Card>
            </DivDetail>
        </>
    )
}

const mapStateToProps = state => {
    return {
        currentItem_canjear: state.shop_canjear.currentItem_canjear
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CanjearSingleItem)