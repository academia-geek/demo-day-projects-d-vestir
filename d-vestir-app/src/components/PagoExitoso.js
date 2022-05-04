import React from 'react'
import Mapa from './mapa/Mapa'


const PagoExitoso = () => {
  return (
    <div>
      <h1>Su pago ha sido exitoso, gracias por su compra.</h1>
      <p>A continuación podrá hacerle segumiento a su pedido.</p>
      <section>
        <Mapa />
      </section>
    </div>
  )
}

export default PagoExitoso