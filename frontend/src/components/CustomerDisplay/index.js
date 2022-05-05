import React, {useEffect,useState} from 'react'

import { 
    CustomerInfoContainer, 
    InfoWrapper, 
    InfoRow,  
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading,
    Subtitle,
    Img,
    ImgWrap} from './CustomerDisplayElements'

const CustomerDisplay = ({lightBg, id, imgStart, topLine, lightText, headline, 
    darkText, description, img, alt}) => {
    
  return (
    <>
        <CustomerInfoContainer lightBg = {lightBg} id = {id}>
            <InfoWrapper>
                <InfoRow imgStart = {imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText = {lightText}>{headline} </Heading>
                            <Subtitle darkText = {darkText}>{description}</Subtitle>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src = {img} alt = {alt} />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </CustomerInfoContainer>
    </>
  )
}

export default CustomerDisplay