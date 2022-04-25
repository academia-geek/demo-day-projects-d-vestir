import styled from 'styled-components';

export const ProductDiv = styled.div`
    width: 900px;
    margin-bottom: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 10px;
    display: flex;
    justify-content: space-between;

    img {
        width: 250px;
        object-fit: contain;
        border-radius: 10px;
    }
`

export const Details = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Title = styled.p`
font-size: 0.8rem;
font-weight: bold;
color: var(--secondary-color);
`

export const Description = styled.p`
font-size: 0.85rem;
  color: var(--secondary-color);
`
export const Price = styled.p`
font-size: 1.2rem;
font-weight: bold;
color: var(--secondary-color);

`

export const View = styled.button`
display: flex;
flex-direction: column;
justify-content: space-around;
padding: 1rem;
cursor: pointer;

text-decoration: none;
`
export const Add =  styled.button`
width: 100px;
padding: 0.5rem;
border: 1px solid var(--secondary-color);
border-radius: 10px;
font-size: 0.65rem;
font-weight: bold;
`