import React from 'react';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { IoIosContact ,IoMdSettings ,IoIosReturnRight } from "react-icons/io";


const SignedInLinks = () => {
    return (
        <Nav>
            <NavDropdown title="Profile" id="collasible-nav-dropdown-signedin">
                <NavDropdown.Item href="#a">
                    <IoIosContact />
                    <p>All Offers </p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#a">
                    <IoMdSettings />
                    <p>All Offers </p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#a">
                    <IoIosReturnRight />
                    <p>All Offers </p>
                </NavDropdown.Item>
            </NavDropdown>
        </Nav>

    );
}

export default SignedInLinks;