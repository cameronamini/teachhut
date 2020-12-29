import styled from 'styled-components';
import {FaTwitter, FaFacebook, FaInstagram, FaYoutube} from "react-icons/fa"

export const FooterContainer = styled.div`
    width: 100%;
    background: black;
    height: 50vh;
    display: flex;
    flex-direction: column; 
    justify-items: center;
    align-items: center;
`

export const LinkContainer = styled.div`
    width: 60%;
    height: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`


export const PageBottom = styled.div`
    width: 80%;
    display: flex;
    height: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const LinkGroup = styled.div`
    color: white;
    font-size: 14px;
    width: 120px;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-weight: 900;
    cursor: pointer;

`
export const FooterLink = styled.div`
    color: white;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
`

export const Logo = styled.div`
    font-size: 32px;
    font-weight: 900;
    color: white;
`

export const Copyright = styled.div`
    font-size: 20px;
    color: white;
`

export const IconList = styled.div`
    display: flex;
    justify-content: space-around;
    width: 140px;
`

export const TwitterIcon = styled(FaTwitter)`
    color: white;
    cursor: pointer;
`
export const FacebookIcon = styled(FaFacebook)`
    color: white;
    cursor: pointer;
`

export const InstagramIcon = styled(FaInstagram)`
    cursor: pointer;
    color: white;
`
export const YoutubeIcon = styled(FaYoutube)`
    cursor: pointer;
    color: white;
`