import React, { useState, useEffect } from 'react'
import { InlineWidget } from 'react-calendly'
import { storage } from '../../firebase/firebaseConfig';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'

import { StyledDiv, StyledUpload, StyledVideo } from './Donacion.Styled'
import { ButtonNews } from '../principal/Principal.Styled';


const Donacion = () => {
    const [videoUpload, setVideoUpload] = useState(null);
    const [videoList, setVideoList] = useState([])

    const videoListRef = ref(storage, 'videos-donacion/')

    const uploadVideo = () => {

        if (videoUpload == null) return;
        const videoRef = ref(storage, `videos-donacion/${videoUpload.name + v4()}`)
        uploadBytes(videoRef, videoUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setVideoList((prev) => [...prev, url])
            })
        })
    }

    useEffect(() => {
        listAll(videoListRef)
            .then(res => {
                res.items.forEach(item => {
                    getDownloadURL(item).then(url => {
                        setVideoList(prev => [...prev, url])
                    });
                });
            }); // eslint-disable-next-line
    }, []);

    return (
        <>
            <StyledDiv>
                <h2>¿Quiere donar?</h2>
                <hr /><br />
                <p>
                    Para donar es muy fácil, selecione en la parte inferior sobre la tarjeta con el círculo morado una fecha y hora para agendar una cita y con esto
                    puedrá dirigirse a las instalaciones a realizar el proceso, una vez allí entrega la donación.
                    Así de fácil. Nuestros procesos son directos, sin intermediarios.</p><br />

                <h2>¿Quiere ser beneficiario de una donación?</h2>
                <hr />
                <p>
                    Para recirla solo deberá subir un vídeo de máximo 1 minuto en el que se evidencie un acto de solidaridad,
                    posterior subir el vídeo a redes sociales y etiquetarnos con el siguiente hashtag #MeQuieroVestir,
                    seguido subir el vídeo en la sección que aparece a conticuación.
                    Una vez completados todos los pasos podrá agendar una cita en la sección de abajo indicando que prendas le gustaría recibir.(Mínimo 3 prendas por persona).
                </p><br />
                <StyledUpload>
                    <input
                        type='file'
                        onChange={(e) => { setVideoUpload(e.target.files[0]) }}
                    />
                    <ButtonNews onClick={uploadVideo}>Subir video</ButtonNews>
                    <StyledVideo>
                        {
                            videoList.map((url, index) => (
                                <div key={index}>
                                    <video src={url} type='video/mp4' width={300} controls />
                                </div>
                            ))
                        }
                    </StyledVideo>
                </StyledUpload>

                <InlineWidget
                    url='https://calendly.com/Dvestir'
                    styles={{
                        height: '800px'
                    }}
                />
            </StyledDiv>

        </>
    )
}

export default Donacion