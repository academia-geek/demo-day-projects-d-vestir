import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Fireworks } from './Confetti'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { StyledPago, DivSuccess } from './Pagos.Styled';

const PagoExitoso = () => {

  useEffect(() => {
    localStorage.clear();
    Fireworks();
  }, []);

  return (
    <StyledPago>
      <DivSuccess>
        <i>
          <BsFillCheckCircleFill size={'3em'} />
        </i>
        <h2>Su pago ha sido exitoso, gracias por su compra.</h2>
        <p>Si tiene alguna duda no dude en contactarnos<br />
          <a href='mailto:contacto@vestir.com'>
            contacto@vestir.com
          </a>
        </p>
        <Link to='/products'>
          <button>
            Seguir comprando.
          </button>
        </Link>
        <Link to='/seguimiento'>
          <button>
            Realiza seguimiento a tu compra!.
          </button>
        </Link>
      </DivSuccess>
    </StyledPago>
  )
}

export default PagoExitoso