import React from 'react'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink
} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> About Us</FooterLinkTitle>
                            <FooterLink to = "/signin"> How it works </FooterLink>
                            <FooterLink to = "/signin"> Testimonials </FooterLink>
                            <FooterLink to = "/signin"> Careers </FooterLink>
                            <FooterLink to = "/signin"> Terms of Service </FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> About Us</FooterLinkTitle>
                            <FooterLink to = "/signin"> Contact Us </FooterLink>
                            <FooterLink to = "/signin"> Testimonials </FooterLink>
                            <FooterLink to = "/signin"> Careers </FooterLink>
                            <FooterLink to = "/signin"> Terms of Service </FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> Careers</FooterLinkTitle>
                            <FooterLink to = "/signin"> Careers </FooterLink>
                            <FooterLink to = "/signin"> How to Apply </FooterLink>
                            <FooterLink to = "/signin"> Get Certified </FooterLink>
                            <FooterLink to = "/signin"> Code of Ethics </FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> About Us</FooterLinkTitle>
                            <FooterLink to = "/signin"> How it works </FooterLink>
                            <FooterLink to = "/signin"> Testimonials </FooterLink>
                            <FooterLink to = "/signin"> Careers </FooterLink>
                            <FooterLink to = "/signin"> Terms of Service </FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer