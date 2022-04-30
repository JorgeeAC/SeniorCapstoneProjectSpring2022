import React, {useEffect, useState} from 'react';
import { FaBars } from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll' 
import {
    CustomerNav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './CustomerNavbarElements';

const CustomerNavbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)
    
    //Will make the navbar transparent at the very top of the page 
    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    const toggleHome = () =>{
        scroll.scrollToTop();

    }

    useEffect(()=>{
        window.addEventListener('scroll',changeNav)
    }, [])
  return (
    <>
        <CustomerNav scrollNav = {scrollNav}>
            <NavbarContainer>
                <NavLogo to = '/' onClick = {toggleHome}>Wrench</NavLogo>
                <MobileIcon onClick ={toggle} >
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to= 'services' 
                        smooth = {true}
                        duration = {500} 
                        spy = {true} 
                        exact = 'true' 
                        offset = {-80}
                        > Services </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to= 'reviews'
                        smooth = {true}
                        duration = {500} 
                        spy = {true} 
                        exact = 'true' 
                        offset = {-80}
                        > Reviews </NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </CustomerNav>
    </>
    );
};

export default CustomerNavbar;