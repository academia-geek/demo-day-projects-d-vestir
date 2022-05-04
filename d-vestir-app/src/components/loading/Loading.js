import React from 'react'
import { TraceSpinner } from 'react-spinners-kit'
import { StyledSpinner } from './Loading.Styled'

const Loading = () => {

    return (
        <>
            <StyledSpinner>
                <TraceSpinner
                    size={50}
                    color='#686769'
                    loading={true}
                />
            </StyledSpinner>
        </>
    )
}

export default Loading