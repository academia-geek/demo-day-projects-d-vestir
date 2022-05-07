import React from 'react'
import { StyledHeader, Nav,StyledLink, StyledAnchor } from './Header.Styled'
import Principal from '../principal/Principal'

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <img src='' alt='' />
        <ul>
          <li>
            <StyledAnchor href='#categories'>Categorias</StyledAnchor>
            </li>
          <li>
            <StyledAnchor href='#footer'>Contacto</StyledAnchor>
          </li>
          <li>
            <StyledLink to='/login'>Iniciar Sesión</StyledLink>
          </li>
        </ul>
      </Nav>
      <Principal/>
    </StyledHeader>
  )
}

export default Header