import styled from 'styled-components';

export const Video = styled.video`
    width:100%;
    height:100%;
    object-fit:cover;
    position:absolute;
`
export const Content = styled.div`
    justify-content:center;
    padding: 0 30px;
    height: 800px;
    position:absolute;
    z-index: 1;

    h2 {
        font-size:40px;
        color:white;
    }
`
export const ContentBg = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    margin:auto;
    position:relative;
    z-index: 2;


   
`
export const TextBg = styled.div`
    z-index:3;
    max-width:1200px;
    position: absolute;
    diplay:flex;
    flex-direction:column;
    align-itmes:center;

`