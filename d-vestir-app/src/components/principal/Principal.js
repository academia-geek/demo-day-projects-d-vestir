import React from 'react'
import { Link } from 'react-router-dom'
import {
    Button, Container, ContainerBg, VideoBg, TextContainer
} from './Principal.Styled'
// import Video from '../video/video.mp4'
import { VideosBg } from '../video/Videos'

const Principal = () => {
    return (
        <div>
            <Container>
                <ContainerBg>
                    <VideoBg autoPlay loop muted src={VideosBg} type='video/mp4' />
                </ContainerBg>
                <TextContainer>
                    <h1>El tiempo del cambio ha llegado, renueva tu ropa.</h1>
                    <p>Regístrate y obten 50% en tu primera compra.</p>
                    <Link to='/login'>
                        <Button>Registrarse</Button>
                    </Link>
                </TextContainer>
            </Container>
        </div>
    )
}

export default Principal