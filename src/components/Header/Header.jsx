import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import {
  Nav,
  NavContainer,
  NavIcon,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./Header.styled";
import { Button } from "../shared";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <NavIcon />
          ULTRA
        </NavLogo>
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu onClick={handleClick} click={click}>
          <NavItem>
            <NavLinks to="/">Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/Services">Services</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/Products">Products</NavLinks>
          </NavItem>
          <Button primary type="Link" to="/sign-up">
            SIGN UP
          </Button>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Header;
