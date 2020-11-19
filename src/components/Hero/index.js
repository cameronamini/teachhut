import React, {useState} from 'react'
import video from '../../video/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroText, HeroButtonWrapper, HeroButton} from './HeroElements.js'
import { IoIosArrowForward, IoMdArrowForward } from "react-icons/io" 

const Hero = () => {
    const [isHovering, setIsHovering] = useState(false)

    const hovering = () => {
        setIsHovering(true)
    }
    const stoppedHovering = () => {
        setIsHovering(false)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Homework Made Easy</HeroH1>
                <HeroText>Sign up today for 3 months free</HeroText>
                <HeroButtonWrapper>
                    <HeroButton 
                        to='signup'
                        onMouseOver={hovering}
                        onMouseOut={stoppedHovering}>
                            Get Started 
                            {isHovering ? 
                            <IoMdArrowForward style={{fontSize: 18,  position: `relative`, left: 8, top: 2}}/> 
                            : <IoIosArrowForward  style={{fontSize: 16, position: `relative`, left: 8, top: 2}}/>} 
                    </HeroButton>
                </HeroButtonWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
