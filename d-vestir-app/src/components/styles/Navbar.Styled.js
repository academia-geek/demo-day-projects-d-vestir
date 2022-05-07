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
    font-size: 20px;
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
  border-radius: 50%;
  background: var(--light-color);
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const DivCart = styled.div`
  display: flex;
  justify-content: space-between;
  margin-rigth: 1rem;
  background: #fff;
  border: none;
  border-radius: 15px;
  align-items: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
`
export const NavLink = styled(Link)`
  text-decoration:none;
`