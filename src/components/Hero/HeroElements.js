import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll'

export const HeroContainer = styled.div`
    width: 100%;
    height: 800px;
    position: relative;
    z-index: 1;
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: 
        linear-gradient(rgba(255,255,255,0.1) 98%, rgba(245,245,245,1) 100%);
        z-index: 2;
    }
`

export const HeroBg = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

export const VideoBg = styled.video`
    width: 100vw;
    height: 100%;
    z-index: 10;
    object-fit: cover;
    -o-object-fit: cover;
`

export const HeroContent = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 20;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

export const HeroH1 = styled.h1`
    width: 100%;
    height: 90px;
    z-index: 30;
    text-align: center;
    font-weight: 900;
    color: white;
    font-size: 56px;
    margin-top: 220px;
    margin-bottom: 5px;
    overflow: hidden;
    @media screen and (max-width: 800px) {
        font-size: 38px;
    }
    @media screen and (max-width: 580px) {
        margin-bottom: 30px;
    }
`

export const HeroText = styled.p`
    width: 60%;
    height: 60px;
    margin-bottom: 10px;
    z-index: 30;
    text-align: center;
    font-size: 26px;
    font-weight: 300;
    color: white;
    @media screen and (max-width: 800px) {
        font-size: 20px;
    }
    @media screen and (max-width: 580px) {
        margin-bottom: 40px;

    } 

`
export const HeroButtonWrapper = styled.div`
    width: 190px;
    height: 40px;
    z-index: 20;

`
export const HeroButton = styled(LinkS)`
    white-space: nowrap;
    padding: 12px 34px;
    background: #01bf71;
    text-decoration: none;
    top: 70%;
    text-align: center;
    vertical-align: center;
    z-index: 30;
    font-size: 16px;
    font-weight: 400;
    border-radius: 50px;
    cursor: pointer;
    border: none;
    color: white;
    margin-bottom: 40px;
    transition: all 0.2s ease-in-out;
    border: 2px solid #01bf71;
    &:hover {
        background: white;
        color: black;
        border: 2px solid white;
    }
`
