import React from 'react'
import { StyledComment, Testimonios, Person } from './Comment.Styled'
import { data2 } from './data2'

const Comment = () => {
    return (
        <StyledComment>
            {data2.map(d => (
                <Testimonios key={d.id}>
                    <div>
                        <p>{d.description}</p>
                    </div>
                    <Person>
                        <img src={d.image} alt='' />
                        <div>
                            <h4>{d.title}</h4>
                            <p>{d.occupation}</p>
                        </div>
                    </Person>
                </Testimonios>
            ))}
        </StyledComment>
    )
}

export default Comment