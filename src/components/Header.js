import React, { useState, useEffect } from 'react';
import Logo from './assets/Logo.png';
import { Navbar, NavbarBrand, Nav, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';

function Header(args) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar-container ${scrolled ? 'solid' : ''}`}>
      <Navbar {...args}>
        <NavbarBrand href="/">
          <img src={Logo} alt="Legacy Pools Pic" className="logo-image" />
        </NavbarBrand>
        <Nav className="me-auto" navbar>
          <DropdownMenu right>
            <DropdownItem>Suboption 1</DropdownItem>
            <DropdownItem>Suboption 2</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Reset</DropdownItem>
          </DropdownMenu>
        </Nav>
        <div className="d-flex align-items-center">
          <NavbarText className="me-3">Gallery</NavbarText>
          <NavbarText className="me-3">Our Service</NavbarText>
          <NavbarText className="me-3">About Us</NavbarText>
          <NavbarText className="me-3">Contact us</NavbarText>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
