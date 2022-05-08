import React from 'react'
import { InlineWidget } from 'react-calendly'
import { StyledDiv } from './Donacion.Styled'

const Donacion = () => {
    return (
        <StyledDiv>
            <h2>¿Quiere donar o ser beneficiario de ella?</h2>
            <hr/><br/>
            <p>Es muy fácil, selecione en la parte inferior una fecha y hora para agendar una cita y con esto
                puedrá dirigirse a las instalaciones a realizar el proceso, una vez allí entrega la donación o escoge lo que le gusta (Mínimo 3 prendas por persona ). Así de fácil.
                Nuestros procesos son directos, sin intermediarios.</p>

            <InlineWidget
                url='https://calendly.com/Dvestir'
                styles={{
                    height: '800px'
                }}
            />
        </StyledDiv>
    )
}

export default Donacion