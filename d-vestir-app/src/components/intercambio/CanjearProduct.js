import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { addToCart, loadCurrentItem } from '../../actions/actionCanjear'

import { ProductDiv, Details, Title, Description, Price, Add, Options } from '../styles/Product.Styled';

import QRCode from 'qrcode.react'
import { Modal } from 'react-bootstrap'
import { AiOutlineQrcode } from 'react-icons/ai'
import { ButtonQR } from './Intercambio.Styled';

const CanjearProduct = ({ productData, addToCart, loadCurrentItem }) => {

    const [showQR, setShowQR] = useState(false)
    const showQRModal = () => setShowQR(true)
    const hideQRModal = () => setShowQR(false)

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

                        <ButtonQR onClick={showQRModal}>
                            <AiOutlineQrcode size={25} />
                        </ButtonQR>
                    </Options>
                </div>
            </ProductDiv>

            <Modal show={showQR} onHide={hideQRModal} centered>
                <Modal.Body centered>
                    <div className='modal-content center' centered>
                        <QRCode
                            id='qrCode'
                            size={300}
                            value={`Canje: ${productData.image} Producto:${productData.title}, Genero:${productData.genero}, Precio:${productData.price}`}
                            bgColor='white'
                            fgColor='#313552'
                            level='Q'
                            imageSettings={{
                                src: '/images/favicon3.png',
                                excavate: true,
                                width: 300 * 0.1,
                                height: 300 * 0.1,
                            }}
                        />
                    </div>
                </Modal.Body>
            </Modal>
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