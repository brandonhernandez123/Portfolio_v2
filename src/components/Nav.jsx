import React from "react";
import { Nav, Container, Navbar,  } from "react-bootstrap";
import { Link } from "react-scroll/modules";
import logo from '../images/logo.png'


const Topnav = () => {
    return(
        <Navbar collapseOnSelect expand="lg" className="nav">
        <Container>
        <Navbar.Brand  title='logo' href="#home">
        <img
        src={logo}
        width="200"
        height="170"
        padding-right="200"
        className="logo"
        alt="React Bootstrap logo"
      />


        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
           
          </Nav>
          <Nav>
              <Link
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={0}>
            <Nav.Link className='navlink' href="#about">
                
                                
                     
          
                 
                About
                
            </Nav.Link>  
            </Link>   
            <Link
          activeClass="active"
          to="section2"
         spy={true}
         smooth={true}
         offset={-100}
         duration={0}>
            <Nav.Link className='navlink' eventKey={2} href="#experience">
           
          
          
          
           
             Experience
            </Nav.Link>
            </Link>
            <Link
          activeClass="active"
          to="section3"
         spy={true}
         smooth={true}
         offset={-100}
         duration={0}>
          
          
          
          
            <Nav.Link className='navlink' href="#projects">Projects</Nav.Link>
            </Link> 
            <Link
          activeClass="active"
          to="section4"
         spy={true}
         smooth={true}
         offset={-100}
         duration={0}>
          
          
          
          
            <Nav.Link  className='navlink' eventKey={2} href="#tech">
              Tech
            </Nav.Link>
            </Link> 
            
            <Nav.Link  className='navlink' eventKey={2} href="/resume">
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Topnav;