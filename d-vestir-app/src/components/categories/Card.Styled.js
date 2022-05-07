import styled from 'styled-components'

export const StyledCard = styled.div`
    display:flex;
    align-itmes:center;
    background-color:white;
    border-radius:5px;
    margin: 40px 100px;
    padding: 60px 60px;
    box-shadow:${({ theme }) => theme.colors.shadow};
    flex-direction: ${({ reverse }) => reverse || 'row'};
    text-align:left;

    img {
        width:90%;

        &:hover {
            opacity:0.5;
        }
    }

     & > div {
         flex:1;
         gap:5px;
     }

     h2 {
         color:${({ theme }) => theme.paleta.yellow};
         font-weight:700;
         text-transform: uppercase;
         letter-spacing:10px;
         font-size: 100px;
         padding-bottom:15px;
     }

     p {
         padding-right:0 20px;
         line-height: 1.5;
         color:grey;
     }
`
export const P = styled.p`
     color:gray;
     font-size: 110px;
     text-transform:uppercase;
     letter-spacing:10px;
     font-weight:700;
     opacity:0.1;
    text-align:right;
`