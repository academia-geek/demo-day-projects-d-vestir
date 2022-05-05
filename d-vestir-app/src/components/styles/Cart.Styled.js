import styled from 'styled-components';

export const CartDiv = styled.div`
  margin: 5rem auto;
  width: 1100px;
  display: flex;
  align-itmes:center;
  justify-content: space-between;
`
export const Item = styled.div`
  flex: 0.7;
  margin-right: 1rem;
`
export const Content = styled.div`
  height: 350px;
  flex: 0.3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 5px;
`
export const Price = styled.div`
  // flex: 0.4;
  font-size: 1.2rem;
  font-weight: bold;

  p {
    color:grey;
  }
  

`
export const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  background: ${({theme}) => theme.success.background};
  color: ${({theme}) => theme.success.color};
  font-size: 1.2rem;
  font-weight: bold;
  width:340px;
`

