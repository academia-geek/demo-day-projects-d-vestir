import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt } from 'react-icons/fa'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import { Container, Flex } from '../components/styles/Container.Styled'
import { StyledFooter, StyledIcons } from './styles/Footer.Styled'
import { Logo } from './logo/Logo.Styled'

const Footer = () => {
    return (
        <StyledFooter id='footer'>
            <Container>
                <a href='#header'>
                    <Logo src='/images/logo2.png' alt='' />
                </a>
                <Flex>
                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Aspernatur cupiditate saepe molestiae autem modi, accusamus dolore numquam rem minus
                            quidem fuga nisiIure?
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <span>
                                <FaPhoneAlt /> - 555 555 555
                            </span>
                        </li>
                        <li>
                            <span>
                                <MdEmail /> - contacto@vestir.com
                            </span>
                        </li>
                        <li>
                            <span>
                                <MdLocationOn /> - Cll 56 a N 80 Oeste
                            </span>
                        </li>
                    </ul>
                    <ul>
                        <li>Sobre nosotros</li>
                        <li>Contáctenos</li>
                    </ul>
                    <StyledIcons>
                        <ul>
                            <li>
                                <a href='http://#'>
                                    <FaFacebook size={'2em'} />
                                </a>
                            </li>
                            <li>
                                <a href='http://#'>
                                    <FaInstagram size={'2em'} />
                                </a>
                            </li>
                            <li>
                                <a href='http://#'>
                                    <FaTwitter size={'2em'} />
                                </a>
                            </li>
                        </ul>
                    </StyledIcons>
                </Flex>
            </Container>
        </StyledFooter>
    )
}

export default Footer