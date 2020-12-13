import React from 'react'
import { InfoContainer, InfoContent, InfoImg, TopLine, InfoHeading, InfoDescription, PriceSpan, FlatFee, InfoButton, InfoButtonWrapper } from './InfoElements.js'
import svgpreferences from '../../images/svg-preferences.svg'   


const InfoSection = () => {
    return (
        <InfoContainer id="InfoSection">
            <InfoContent>
                <TopLine> Premium Service</TopLine>
                <InfoHeading>Tutors suited to your needs</InfoHeading>
                <InfoDescription>Choose from a wide variety of experienced educators based on expertise and certifications</InfoDescription>
                <InfoButtonWrapper style={{marginTop: 20}}>
                    <InfoButton >Get Started</InfoButton>
                </InfoButtonWrapper>
            </InfoContent>
            <InfoImg src={svgpreferences}/>
            
        </InfoContainer>
    )
}

export default InfoSection
