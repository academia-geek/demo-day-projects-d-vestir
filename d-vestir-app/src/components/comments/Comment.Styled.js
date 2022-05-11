import styled from 'styled-components'

export const StyledComment = styled.div`
    display: flex;
    align-items:center;
    text-align: left;
    place-items: center;
    background-color: ${({theme}) => theme.paleta.blue};
    padding: 5rem 5rem;
    font-size: 14px;
    gap: 3rem;
    
    `
export const Testimonios = styled.div`
    background-color:white;
    padding: 2rem 2rem;
    box-shadow:${({theme}) => theme.colors.shadow};

    p {
        color: grey;
        line-height: 1.5;
    }   

    img {
        border-radius: 500px;
        width: 80px;
        height:80px;
        object-fit:cover;
    }
`
export const Person = styled.div`
    display: flex;
    padding-top:1.5rem;

    h4 {
        color: ${({theme}) => theme.paleta.gree2};
        font-weight:bold;
    }

    & h4,
    & p {
        padding-left:1rem; 
    }
    
`