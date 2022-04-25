import styled from 'styled-components';

export const Items = styled.div`
margin-bottom: 1rem;
display: flex;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
border-radius: 10px;

     img {
        width: 350px;
        object-fit: contain;
        border-radius: 10px;
     }

     input {
        padding: 10px;
        margin-left: 0.4rem;
        width: 60px;
        border-radius: 10px;
        border: 1px solid var(--secondary-color);
        outline: none;
     }

     button {
      width: 50px;
      height: 50px;
      border: 1px solid var(--secondary-color);
      cursor: pointer;
      transition: all ease-in-out 0.7s;
      border:none;
      margin-top:1rem;
     }
`

export const Detail = styled.div`
padding: 1rem;
display: flex;
flex-direction: column;
justify-content: space-between;
color: var(--secondary-color);
`