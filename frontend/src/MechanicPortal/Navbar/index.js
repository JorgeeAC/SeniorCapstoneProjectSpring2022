import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  //Will make the navbar transparent at the very top of the page
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Wrench
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="requests"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                {" "}
                Requests{" "}
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="reviews"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                {" "}
                Reviews{" "}
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="account"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                {" "}
                Account{" "}
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signout"> Sign Out</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
