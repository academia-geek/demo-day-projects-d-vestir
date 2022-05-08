import React from 'react'
import { StyledHeader, Nav, StyledLink, StyledAnchor } from './Header.Styled'
import Principal from '../principal/Principal'
import { Logo } from '../logo/Logo.Styled'

const Header = () => {
  return (
    <StyledHeader id='header'>
      <Nav>
        <Logo src='/images/logo1.png' alt='' />
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
      <Principal />
    </StyledHeader>
  )
}

export default Header