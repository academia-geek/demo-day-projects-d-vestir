import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: 100vw;
    padding:0 4rem;
    align-items:center;
    place-items:center;
    

`
export const Container = styled.div`
    width:1000px;
    max-width: 100%;
    padding: 0 20px;
    margin: 0 auto;
`
export const Flex = styled.div`
    display:flex;
    // align-items:center;
    align-items: flex-start;

    & > div,
    & > ul {
        flex:1;
    }
`