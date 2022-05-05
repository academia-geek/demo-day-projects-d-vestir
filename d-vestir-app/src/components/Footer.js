import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Container, Flex } from '../components/styles/Container.Styled'
import { StyledFooter, StyledIcons } from './styles/Footer.Styled'

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <img src='' alt='' />
                <Flex>
                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Aspernatur cupiditate saepe molestiae autem modi, accusamus dolore numquam rem minus
                            quidem fuga nisi velit sint? Inventore eligendi labore et eum. Iure?
                        </li>
                    </ul>
                    <ul>
                        <li>Teléfono: 555 555 555</li>
                        <li>contacto@dvestir.com</li>
                        <li>Cll 56 a N 80 Oeste</li>
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