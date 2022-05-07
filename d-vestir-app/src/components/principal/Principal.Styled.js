import styled from 'styled-components'

export const Container = styled.div`
    background: #0c0c0c0;
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index:1;

`
export const ContainerBg = styled.div`
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width:100%;
    height:100%;
    overflow: hidden;
`
export const VideoBg = styled.video`
    width: 100%;
    height:100%;
    object-fit:cover;
    background: #23a34;

`
export const TextContainer = styled.div`
    z-index:3;
    max-width:1200px;
    position:absolute;
    padding: 8px  24px;
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    place-itmes:center;

    h1 {
        text-transform:uppercase;
        letter-spacing:5px;
        font-size:40px;
        font-weight:700;
    }

    p {
        text-transform:uppercase;
        letter-spacing:3px;
        color:red;
        font-weight:700;
        font-size:24px;
        margin-top:24px;

    }

`
export const ContainerButton = styled.div`
    z-index:2;
    margin-top:90px;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:2rem;
`

export const Button = styled.button`
    color: white;
    background-color: ${({ theme }) => theme.paleta.green1};
    border: none;
    border-radius: 50px;
    padding: 20px 95px;
    width:400px;
    font-weight:700;
    font-size:1rem;
    margin-top:5rem;
    z-index:3;

    &:hover {
        background-color:${({ theme }) => theme.paleta.green3};
    }
`
export const ButtonNews = styled(Button)`
    width:400px;
`
