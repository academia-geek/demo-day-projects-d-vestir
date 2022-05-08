import React from 'react'
import { InlineWidget } from 'react-calendly'
import { StyledDiv } from './Donacion.Styled'

const Donacion = () => {
    return (
        <StyledDiv>
            <h2>¿Quieres donar o quieres recbir una donación?</h2>
            <p>Es muy fácil, seleciona en la parte de abajao una fecha y hora para que
                puedeas dirigirte a las instalaciones a realizar el proceso, una vez allí entregas tu donación o escoges lo que te gusta. Así de fácil.
                 Nuestros procesos son directos, sin intermidiarios.</p>
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