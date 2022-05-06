import React from 'react'
import { InlineWidget } from 'react-calendly'
import { StyledDiv } from './Donacion.Styled'

const Donacion = () => {
    return (
        <StyledDiv>
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