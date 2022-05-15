import styled from 'styled-components';

export const DivMap = styled.div`
    text-align:center;

    button {
        color:black;
    }
`
export const Logo = styled.img`
    cursor:pointer;
    width:130px;
`
export const Ptag = styled.p`
    @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
    40% {transform: translateY(-30px);} 
    60% {transform: translateY(-15px);} 
 } 

 cursor:pointer;

`

export const Title = styled.p`
    font-weight:bold;
`
export const Input = styled.input`
   border-color:blue;
   background-color:white;
`

export const DivInput = styled.div`
    background-color:white;
`
export const StyledMap = styled.div`
    padding:2rem 5rem;
    padding-bottom: 5rem;
    display:flex;
    align-items:flex-start;
    justify-content:center;
    margin:0 auto;

    width: 100%;
    aspect-ratio: 800 / 500;
`
export const Stores = styled.div`
 align-items:left;
 text-align:left;

 h2 {
     margin-bottom:2rem;
 }
 
 p {
    max-width:1600px;
    width:400px;
 }

 button {
    padding:5px;
    margin-bottom:2rem;
    border-radius:5px;
    margin-right:2rem;
  }

`
export const DivContainer = styled.div`
 
`