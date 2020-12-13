import React from 'react'
import { InfoContainer, InfoContent, InfoImg, TopLine, InfoHeading, InfoDescription, PriceSpan, FlatFee, InfoButton, InfoButtonWrapper } from './InfoElements3.js'
import svgflag from '../../images/svg-flag.svg'   


const InfoSection = () => {
    return (
        <InfoContainer id="InfoSection3">
            <InfoContent>
                <TopLine>Join Our Team</TopLine>
                <InfoHeading>Creating an account is extremely easy</InfoHeading>
                <InfoDescription>Just add your information and you're ready to go</InfoDescription>
                <InfoButtonWrapper style={{marginTop: 20}}>
                    <InfoButton>Start Now</InfoButton>
                </InfoButtonWrapper>
            </InfoContent>
            <InfoImg src={svgflag}/>
            
        </InfoContainer>
    )
}

export default InfoSection
