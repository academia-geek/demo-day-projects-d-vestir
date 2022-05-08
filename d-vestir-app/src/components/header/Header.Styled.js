import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
padding: 60px 50px;
margin: 0 5px;
font-size: 1rem;
background: cover;
background-size: 100vw;
// background-color: ${({theme}) => theme.paleta.green2};
position:sticky;

    
    ul {
        list-style: none;
        display:flex;
        
        li {
            text-transform:uppercase;
            margin: 0 25px;

            &:hover > a {
                color: ${({theme}) => theme.paleta.green1};
                border-bottom:3px solid ${({theme}) => theme.paleta.green2};
            }
        }
    }
`

export const Logo = styled.img`
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    letter-spacing:2px;
    top:0;
    left:0;
    position:sticky;

    img {
        margin-bottom:10px;
    }
`

export const StyledLink = styled(Link)`
    text-decoration:none;
    color:black;

`
export const StyledAnchor = styled.a`
    text-decoration:none;
    color:black;
`