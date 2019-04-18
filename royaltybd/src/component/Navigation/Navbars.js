import './Navbar.css';
import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'

import logo from '../../assets/img/logo/logo_beta.png'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { FiGlobe ,FiShoppingBag ,FiTv  } from "react-icons/fi";
import { IoMdIceCream,IoIosAirplane,IoIosFitness } from "react-icons/io";
class Navbars extends Component {
    state = {
        auth:false

    }
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" >
            <Container>
                <Navbar.Brand href="#home"><img
                    src={logo}
                    alt="Royalty BD"
                /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-auto">
                <NavDropdown title="Catagory" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#a">
                   <FiGlobe /> 
                    <p>All Offers </p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#a">
                   <IoMdIceCream /> 
                    <p>Food & Drinks </p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#a">
                   <FiShoppingBag /> 
                    <p>LifeStyle</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#a">
                   <FiTv /> 
                    <p>Entertainment</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#a">
                   <IoIosFitness /> 
                    <p>Health & Fitness</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#a">
                   <IoIosAirplane /> 
                    <p>Getaway</p>
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#features">About</Nav.Link>
                <Nav.Link href="#pricing">Social Zone</Nav.Link>
                
              </Nav>

              { this.state.auth ?
                <SignedInLinks /> :
                <SignedOutLinks />
              }
              
            </Navbar.Collapse>
            </Container>
          </Navbar>
        );
    }
}

export default Navbars;