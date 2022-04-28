import React, { useState } from 'react';
import { Button } from '../ButtonElement';
import Video from '../../Video/Video.mp4';
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1,
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward,
    ArrowRight} from './HeroElements';


const HeroSection = () => {
    const [hover,setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src= {Video} type = 'Video/mp4' />;
        </HeroBg>
        <HeroContent>
            <HeroH1>Car Services Right To Your Door</HeroH1>
        
        <HeroP>
            Helping those who need it 
        </HeroP>
        <HeroBtnWrapper>
            <Button to = 'signup' onMouseEnter={onHover} onMouseLeave = {onHover}
            primary = 'true'
            dark = 'true'
            >
                Get Started {hover ? <ArrowForward/> : <ArrowRight />}
            </Button>
        </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection