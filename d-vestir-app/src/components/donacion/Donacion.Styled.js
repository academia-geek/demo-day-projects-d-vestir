import styled from 'styled-components'

export const StyledDiv = styled.div`
    padding: 5rem 0;
    align-items:center;
    text-align:center;
    justify-content:center;
    margin:0 auto;

    h2 {
        color:${({ theme }) => theme.paleta.yellow};
         font-weight:700;
         text-transform: uppercase;
         letter-spacing:10px;
         font-size: 40px;
         padding-bottom:15px;
         background-color:white;
    }

    p {
        padding: 15px 150px;
    }

`
export const StyledUpload = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    gap: 1rem;

    button {
        margin-top:1rem;
    }
`
export const StyledVideo = styled.div`
    display:grid;
    grid-template-columns: repeat(3,1fr);
    gap:2rem;
    padding: 2rem 0;
`