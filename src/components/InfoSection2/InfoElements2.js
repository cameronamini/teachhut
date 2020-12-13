import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'

export const InfoContainer = styled.div`
    width: 100%;
    height: 120vh;
    background: black;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'img content';
    justify-items: center;
    align-items: center;
    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas:
            "content content"
            "img  img";
        height: 120vh;
    }

`
export const InfoImg = styled.img`
    grid-area: img;
    object-fit: contain;
    height: 50%;
    width: 80%;
    @media screen and (max-width: 580px) {
        height: 30vh;
    }
`

export const InfoContent = styled.div`
    grid-area: content;
    width: 60%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 580px) {
        height: 60vh;
        width: 80%;
    
    }

`


export const TopLine = styled.h5`
    color: #01bf71;
    margin-top: 40px;
    margin-bottom: 10px;
    @media screen and (max-width: 580px) {
        margin-bottom: 10px;
        margin-top: 20px;

    }
`

export const InfoHeading = styled.h1`
    color: white;
    font-weight: bold;
    margin-bottom: 30px;

    @media screen and (max-width: 800px) {
        font-size: 28px;
    }
    @media screen and (max-width: 580px) {
        font-size: 30px;
        margin-bottom: 20px;
    }
`
export const FlatFee = styled.span`
    white-space: nowrap;
`

export const InfoDescription = styled.p`
    color: white;
    font-size: 18px;
    margin-bottom: 20px;
    line-height: 1.5;
    @media screen and (max-width: 580px) {
        font-size: 16px;
    }
`
export const PriceSpan = styled.span`
    font-size: 18px;
    color: white;
    font-weight: bold;
`

export const InfoButtonWrapper = styled.div`
    width: 190px;
    height: 70px;
    z-index: 20;
    display: flex;
    justify-content: flex-start;

`
export const InfoButton = styled(LinkS)`
    white-space: nowrap;
    padding: 12px 34px;
    background: #01bf71;
    height: 45px;
    text-decoration: none;
    text-align: center;
    vertical-align: center;
    z-index: 30;
    font-size: 16px;
    font-weight: 400;
    border-radius: 50px;
    cursor: pointer;
    border: none;
    color: black    ;
    margin-bottom: 40px;
    transition: all 0.2s ease-in-out;
    &:hover {
        background: white;
        border: 2px solid white;
        
    }

`