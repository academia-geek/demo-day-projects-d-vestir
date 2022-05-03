import styled from 'styled-components'

export const StyledFooter = styled.footer`
    background-color: ${({theme}) => theme.colors.footer};
    color: #fff;
    padding: 100px 0 60px;
    align-items:center;

    ul {
        list-style:none;
       
    }

    ul li {
        margin-bottom: 20px;
        
    }

    p {
        text-align:right;
    }
`
export const StyledIcons = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;

    & > ul,
    & > li {
        display:flex;

        a  {
            display: flex;
            align-items:center;
            justify-content:center;
            width: 50px;
            height:50px;
            margin-right: 10px;
            text-decoration: none;
            color:#fff;
        }
    }
    
    
`