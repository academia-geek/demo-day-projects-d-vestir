import React from 'react'
import NewsLetter from '../NewsLetter'
import video from '../video/video.mp4'
import { Video, Content, ContentBg, TextBg } from './Landing.Styled'

const LandingPage = () => {
  return (
    <div>
      <Content>
          {/* <Video autoPlay loop muted src={video} type='video/mp4' /> */}
        <section>
         <h1>RENUEVA TU ARMARIO</h1>
        </section>
      </Content>
      <NewsLetter />
    </div>
  )
}

export default LandingPage