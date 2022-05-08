import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: right;
  align-items: center;
  background: ${({theme}) => theme.paleta.green2};
  padding: 1.2rem;
  top: 0;
  left: 0;
  gap: 1rem;
  
  h3 {
    font-size: 17px;
    // font-weight: bold;
    color: white;
    text-transform: uppercase;
    letter-spacing:2px;
  }

`

export const Counter = styled.div`
  display:flex;
  height: 40px;
  width: 40px;
  border-radius: 5px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const DivCart = styled.div`
  display: flex;
  justify-content: space-between;
  margin-rigth: 1rem;
  border: 2px solid white;
  border-radius: 2px;
  align-items: center;
  padding: 0.3rem 1rem;
  text-decoration:none;
  color:white;
`
export const NavLink = styled(Link)`
  text-decoration:none;
  align-items:center;
`
export const Icon = styled.i`
  text-decoration:none;
  color:white;
  align-items:center;
  justify-content:center;
  margin:0 1rem;
`
export const CartIcon = styled(Icon)`

`