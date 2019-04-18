import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

const SignedOutLinks = () => {
    return ( 
        <Nav>
            <Nav.Link href="#deets">Register </Nav.Link>
            <Button variant="outline-primary">Login</Button>
        </Nav>

     );
}
 
export default SignedOutLinks;