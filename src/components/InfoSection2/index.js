import React from 'react'
import { InfoContainer, InfoContent, InfoImg, TopLine, InfoHeading, InfoDescription, PriceSpan, FlatFee, InfoButton, InfoButtonWrapper } from './InfoElements2.js'
import svgtutor from '../../images/svg-tutor.svg'   


const InfoSection2 = () => {
    return (
        <InfoContainer id="InfoSection2">
            <InfoImg src={svgtutor}/>
            <InfoContent>
                <TopLine>Unlimited Access</TopLine>
                <InfoHeading>Unlimited tutoring for a flat <FlatFee>monthly fee</FlatFee></InfoHeading>
                <InfoDescription>Get acccess to our exclusive app and recieve tutoring for a little as <PriceSpan>$149/month</PriceSpan> </InfoDescription>
                <InfoButtonWrapper style={{marginTop: 20}}>
                    <InfoButton>Learn More</InfoButton>
                </InfoButtonWrapper>
            </InfoContent>

            
        </InfoContainer>
    )
}

export default InfoSection2
