import React, { useState, useRef } from 'react'
import QRCode from 'qrcode.react'
import { StyledDiv } from '../donacion/Donacion.Styled'
import { ContainerCode, Form } from './Intercambio.Styled'
import { ButtonNews } from '../principal/Principal.Styled'

const Intercambio = () => {

  const qrRef = useRef();
  const [url, setUrl] = useState('');

  const downloadQR = (e) => {
    e.preventDefault();

    // canvas tag permite crear contenido de forma dinamica en html, en este caso se usa para dibujar el codigo QR que se genera.
    let canvas = qrRef.current.querySelector('canvas');
    let image = canvas.toDataURL('image/png');
    let anchor = document.createElement('a');
    anchor.href = image;
    anchor.download = 'qr-vestir.png';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    setUrl('');
  }
  // console.log(url)

  const qrCode = (
    <QRCode
      id='qrCode'
      size={300}
      value={url}
      bgColor='white'
      fgColor='#313552'
      level='Q'
      imageSettings={{
        src: '/images/favicon3.png',
        excavate: true,
        width: 300 * 0.1,
        height: 300 * 0.1,
      }}
    />
  )

  return (
    <StyledDiv>
      <div>
        <div>
          <h2>¿Tiene prendas en buen estado que desee intercambiar?</h2>
          <hr /><br />
          <p>Si es así, lo que debe hacer es escrbir de forma detallada
            las prendas que tiene y con cuales le gustaría intercambiar,
            posterior generar un código QR y descargarlo, con éste podrá acercarce a las
            instalaciones una vez se confirme la disponibilidad del producto y poder hacer el canje.</p>
        </div>
        <ContainerCode>
          <Form onSubmit={downloadQR}>
            <textarea
              type='text'
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder='Artículos para intercambiar.'
            />
            <ButtonNews type='submit'>Descargar código QR</ButtonNews>
          </Form>
          <div ref={qrRef}>{qrCode}</div>
        </ContainerCode>
      </div>
    </StyledDiv >
  )
}

export default Intercambio