import React from 'react';
import { FaBars } from 'react-icons/fa';
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
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to = '/'>Wrench</NavLogo>
                <MobileIcon onClick ={toggle} >
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to= 'about'> About </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to= 'discover'> Discover </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to= 'services'> Services </NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to = '/signup'> Sign Up</NavBtnLink>
                    <NavBtnLink to = '/signin'> Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
    );
};

export default Navbar;