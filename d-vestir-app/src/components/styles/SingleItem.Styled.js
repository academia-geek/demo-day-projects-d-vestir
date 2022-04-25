import styled from 'styled-components'

export const DivDetail = styled.div`
width: 1100px;
margin: 2rem auto;
display: flex;

    img{
        width: 600px;
        object-fit: contain;
        margin-right: 1rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        border-radius: 10px;
    }
`

export const Card = styled.div`
padding: 1rem;
display: flex;
flex-direction: column;
justify-content: space-between;
color: var(--secondary-color);
`

export const Title = styled.p`
font-size: 1.2rem;
font-weight: bold;
`
export const Price = styled(Title)`

`
export const Description = styled.p`
font-size: 1rem;
`
export const Button = styled.button`
width: 45%;
  padding: 10px 17px;
  background: var(--secondary-color);
  color: var(--light-color);
  border: 1px solid var(--secondary-color);
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  outline: none;
`
