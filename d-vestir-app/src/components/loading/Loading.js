import React from 'react'
import { StyledSpinner } from './Loading.Styled'
import { JellyTriangle } from '@uiball/loaders'


const Loading = () => {

    return (
        <>
            <StyledSpinner>
                <JellyTriangle 
                size={50}
                />
            </StyledSpinner>
        </>
    )
}

export default Loading