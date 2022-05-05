import styled from 'styled-components'

export const StyledPago = styled.div`
    display:flex;
    align-items:center;
    text-align:center;
    place-items:center;
    justify-content:center;
    margin:0 auto;
    padding: 10rem 0;

`
export const DivSuccess = styled.div`
    background-color:#F7F6F2;
    border-radius:5px;
    width:800px;
    padding:3rem;
    box-shadow:${({theme}) => theme.colors.shadow};

    & > i {
        color:#06FF00;
        padding: 2rem 0;
    }

        h2 {
            padding: 1rem 0;
        }

        p {
            padding: 1rem 0;
        }

        button {
            width: 300px;
            margin: 0 5px;
            padding: 1rem;
            color: ${({ theme }) => theme.success.color};
            background-color: ${({ theme }) => theme.success.background};
            border-radius: 4px;
            font-size: 1rem;
            font-weight: bold; 
        }
`
export const DivWrong = styled(DivSuccess)`
    
    & > i {
        color:#FF1700;
     }

`
export const DivShipping = styled(DivSuccess)`
     i {
         color:#3EDBF0;
     }
`