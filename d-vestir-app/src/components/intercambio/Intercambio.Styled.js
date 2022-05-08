import styled from 'styled-components'

export const ContainerCode = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 3rem 2rem;
`

export const Form = styled.form`
    display:grid;
    gap:15px;
    margin-right: 5rem;
    align-items:center;

    textarea {
        font-size: 1.5rem;
        border-radius: 5px;
        width:100%;
        height:100%;
        height:fit-content:
        padding-left:5px;
        border:none;
        border: 1px solid ${({theme}) => theme.colors.border};
        transition: 0.5s ease-in-out;
        
        &:focus {
            outline:none;
        }
    }
`
