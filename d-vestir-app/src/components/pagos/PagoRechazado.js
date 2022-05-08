import React from 'react'
import { Link } from 'react-router-dom'
import { Snow } from './Confetti'
import { MdError} from 'react-icons/md'
import { StyledPago, DivWrong } from './Pagos.Styled'

const PagoRechazado = () => {
  return (
    <StyledPago>
      <Snow />
      <DivWrong>
        <i>
          <MdError size={'3em'} />
        </i>
        <h1>Lo sentimos, su pago ha sido rechazado.</h1>
        <p>Lo invitamos a validar con su entidad bancaria.
          Si tiene alguna duda adicional, no dude en contactarnos<br />
          <a href='mailto:contacto@vestir.com'>
            contacto@vestir.com
          </a>
        </p>
        <Link to='/products'>
          <button>
            Seguir comprando.
          </button>
        </Link>
      </DivWrong>
    </StyledPago>
  )
}

export default PagoRechazado
