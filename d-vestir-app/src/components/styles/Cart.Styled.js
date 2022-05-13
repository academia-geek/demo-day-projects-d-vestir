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
  height: 400px;
  flex: 0.3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 5px;
  background-color:white;

`
export const Content2 = styled(Content)`
   p{
     padding-top:7rem;
   }
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
  background: ${({ theme }) => theme.success.background};
  color: ${({ theme }) => theme.success.color};
  font-size: 1.2rem;
  font-weight: bold;
  width:340px;
`
export const Pagar = styled.div`
  align-items:center;
  text-align:center;

  h3{
    margin-bottom:2rem;
  }

  button {
    padding:5px;
    gap:10px;
    margin-bottom:2rem;
    margin:0 5px;
    border-radius:5px;
  }
`
