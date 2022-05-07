import React from 'react'
import { Link } from 'react-router-dom'
import { StyledCard, P } from './Card.Styled'

const Card = ({ item: { id, title, description, image } }) => {
    return (
        <StyledCard reverse={id % 2 === 0 && 'row-reverse'} id='categories'>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <P>{title}</P>
            </div>
            <Link to='/login'>
                <div>
                    <img src={image} alt='' />
                </div>
            </Link>
        </StyledCard>
    )
}

export default Card