import React, { useState, useEffect } from 'react';
import Logo from './assets/Logo.png';
import { Navbar, NavbarBrand, NavbarText } from 'reactstrap';
import { Link } from 'react-router-dom';
import ModalComponent from './ModalComponent';
import { MDBContainer, MDBCollapse, MDBNavbar, MDBNavbarToggler, MDBIcon, MDBBtn,} from 'mdb-react-ui-kit';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    };

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleMobileMenuToggle = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  const handleLinkClick = () => {
    setShowMobileMenu(false); // Close the mobile menu when a link is clicked
  }

  return (
    <div className={`navbar-container ${scrolled ? 'solid' : ''}`}>
      {/* Mobile View */}
      {windowWidth <= 768 && (
        <div className={`navbar-mobile ${showMobileMenu ? '' : 'hidden'}`}>
          <MDBNavbar>
            <MDBContainer fluid>
              <NavbarBrand href="/">
                <img src={Logo} alt="Legacy Pools Pic" className="logo-image-mobile" />
              </NavbarBrand>
              <MDBNavbarToggler
                type="button"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={handleMobileMenuToggle}
              >
                <MDBIcon icon="bars" fas />
              </MDBNavbarToggler>
            </MDBContainer>
          </MDBNavbar>

          {/* Mobile Menu Content */}
          <MDBCollapse show={showMobileMenu}>
            <div className="bg-light shadow-3 p-4">
              <MDBBtn block className="border-bottom m-0" color="link">
                <Link to="/gallery" onClick={handleLinkClick}>Gallery</Link>
              </MDBBtn>
              <MDBBtn block className="border-bottom m-0" color="link">
                <Link to="/poolremodel" onClick={handleLinkClick}>Our Services</Link>
              </MDBBtn>
              <MDBBtn block className="border-bottom m-0" color="link">
                <Link to="/" onClick={handleLinkClick}>Home</Link>
              </MDBBtn>
              <MDBBtn block className="border-bottom m-0" color="link">
                <Link to="/learnmore" onClick={handleLinkClick}>Learn More</Link>
              </MDBBtn>
              <MDBBtn block className="border-bottom m-0" color="link">
                <ModalComponent onClick={handleLinkClick} />
              </MDBBtn>
            </div>
          </MDBCollapse>
        </div>
      )}

      {/* Desktop View */}
      {windowWidth > 768 && (
        <div className={`navbar-desktop ${showMobileMenu ? 'hidden' : ''}`}>
          <Navbar>
            <NavbarBrand href="/">
              <img src={Logo} alt="Legacy Pools Pic" className="logo-image" />
            </NavbarBrand>

            <div className="d-flex align-items-center">
              <NavbarText className="me-3">(541) 226-9566</NavbarText>
              <NavbarText className="me-3">
                <Link to="/gallery" onClick={handleLinkClick}>Gallery</Link>
              </NavbarText>
              <NavbarText className="me-3">
                <Link to="/poolremodel" onClick={handleLinkClick}>Our Services</Link>
              </NavbarText>
              <div className="header-modal">
              <ModalComponent onClick={handleLinkClick} />
              </div>
            </div>
          </Navbar>
        </div>
      )}
    </div>
  )
}

export default Header;
