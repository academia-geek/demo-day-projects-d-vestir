import React from 'react'
import { Link } from 'react-router-dom'
import Mapa from '../mapa/Mapa'
import { StyledPago, DivShipping } from './Pagos.Styled'
import { FaShippingFast } from 'react-icons/fa'

const Seguimiento = () => {
    return (
        <>
            <StyledPago>
                <DivShipping>
                    <i>
                        <FaShippingFast size={'3em'} />
                    </i>
                    <h2>A continuación podrá hacerle segumiento a su pedido.</h2>
                    <p>Si tiene alguna duda no dude en contactarnos<br />
                        <a href='mailto:contacto@dvestir.com'>
                            contacto@dvestir.com
                        </a>
                    </p>
                    <Link to='/products'>
                        <button>
                            Seguir comprando.
                        </button>
                    </Link>
                </DivShipping>
            </StyledPago>
            <section>
                <Mapa />
            </section>
        </>
    )
}

export default Seguimiento