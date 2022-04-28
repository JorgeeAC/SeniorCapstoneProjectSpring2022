import React, {useEffect, useState} from 'react';
import { FaBars } from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll' 
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = ({toggle}) => {
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
        <Nav scrollNav = {scrollNav}>
            <NavbarContainer>
                <NavLogo to = '/' onClick = {toggleHome}>Wrench</NavLogo>
                <MobileIcon onClick ={toggle} >
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to= 'about' 
                        smooth = {true}
                        duration = {500} 
                        spy = {true} 
                        exact = 'true' 
                        offset = {-80}
                        > About </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to= 'discover'
                        smooth = {true}
                        duration = {500} 
                        spy = {true} 
                        exact = 'true' 
                        offset = {-80}
                        > Discover </NavLinks>
                    </NavItem>
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
                        <NavLinks to= 'signup'
                        smooth = {true}
                        duration = {500} 
                        spy = {true} 
                        exact = 'true' 
                        offset = {-80}
                        > Sign Up </NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to = '/signin'> Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
    );
};

export default Navbar;